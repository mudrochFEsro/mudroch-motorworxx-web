# Google recenzie na webe — dizajn

**Dátum:** 2026-07-27
**Stav:** Návrh na schválenie

## Cieľ

Zobraziť živé Google recenzie servisu MUDROCH MOTORWORXX na homepage — viditeľne,
dynamicky a vo vlastnom „bold/Awwwards" dizajne, ktorý sadne k zvyšku webu.

## Kontext / obmedzenia

- Web je **SvelteKit + adapter-static**, plne prerenderovaný, nasadený na **Verceli**
  (žiadny SvelteKit server runtime; statický build do `build/`).
- Svelte 5 (runes), i18n SK/EN/DE/HR, komponenty s GSAP animáciami a scoped `<style>`.
- Existuje podpora `prefers-reduced-motion` a touch/desktop detekcia — nová sekcia to rešpektuje.

## Zdroj dát: Featurable (free)

Google Places API vracia max 5 recenzií, preto ho nepoužijeme. Namiesto toho ťaháme dáta
z **Featurable** (free účet, widget už vytvorený vlastníkom profilu).

- **Endpoint:** `GET https://api.featurable.com/v2/widgets/<WIDGET_ID>`
  - `https://featurable.com/api/v2/widgets/<ID>` robí 308 redirect na `api.featurable.com` —
    voláme rovno finálnu doménu.
- **Widget ID:** `408c7ee2-ffb1-4fee-b357-87b1158e5e45`
- Widget je určený na browser embedding (ich `embed.js` ho ťahá client-side), takže očakávame
  povolené CORS pre náš pôvod. **Fallback** ak by CORS blokoval: tenká Vercel serverless funkcia
  `api/reviews.js`, ktorá endpoint proxuje (Vercel `api/` funguje aj popri statickom builde).

### Štruktúra odpovede (overené na reálnom widgete)

```jsonc
{
  "success": true,
  "widget": {
    "uuid": "...",
    "config": { "title": "...", "date_display": "relative", ... },
    "showBranding": true,           // free plán → treba nechať kredit
    "gbpLocationSummary": {
      "rating": 5,                  // priemerné hodnotenie
      "reviewsCount": 12,           // celkový počet recenzií na profile
      "writeAReviewUri": "https://..." // link „napísať recenziu" → CTA
    },
    "reviews": [
      {
        "id": "...",
        "author": { "name": "Richard Hevier", "avatarUrl": "https://...", "profileUrl": "https://..." },
        "rating": { "value": 5, "max": 5 },
        "text": "The Golf received a great service...",   // preklad do EN
        "originalText": "…",                               // pôvodný text (väčšinou SK)
        "languageCode": "sk",
        "publishedAt": "2026-06-17T14:20:29.000Z"
      }
    ]
  }
}
```

**Dôležité poznámky k dátam:**
- `reviews` vracia toľko recenzií, koľko má widget nastavené (aktuálne 4 z 12).
  Vlastník má vo Featurable zvýšiť „Number of reviews" na maximum. Koľko free plán dovolí,
  toľko zobrazíme — komponenta je agnostická voči počtu.
- Per-review Google link **nie je** (`url` je null) → jednotlivé kartičky neodkazujú na konkrétnu
  recenziu; hlavný CTA používa `writeAReviewUri`.
- Relatívny čas („pred 2 mesiacmi") **nepočíta API** — dopočítame z `publishedAt` cez
  `Intl.RelativeTimeFormat` (natívne podporuje sk/en/de/hr).

## UX / dizajn

**Umiestnenie:** nová sekcia na homepage medzi `<About />` a `<Contact />` v `src/routes/+page.svelte`.
(Landing stránky rozvodov/bŕzd zatiaľ NIE — možné pridať neskôr.)

**Hlavička sekcie (rating summary):**
- Veľké `5,0` + riadok hviezdičiek (5,0 = plných 5).
- Text „**{count} recenzií na Google**" (i18n, správne skloňovanie počtu).
- Google „G" logo/glyf.
- CTA tlačidlo „**Ohodnoťte nás na Google**" → `writeAReviewUri` (`target="_blank" rel="noopener"`).

**Telo — auto-scroll marquee:**
- Nekonečný plynulý horizontálny pás kartičiek (CSS/GSAP loop), **pauza pri hover**.
- Kartička recenzie: avatar (`avatarUrl`, fallback iniciály z mena pri chybe načítania),
  meno, riadok hviezdičiek podľa `rating.value`, relatívny čas, text (skrátený s „…"),
  malý Google glyf.
- **Text podľa jazyka webu:** SK → `originalText`; EN/DE/HR → `text` (EN preklad) s fallbackom
  na `originalText`. Ak chýba `originalText`, použije sa `text`.
- **prefers-reduced-motion:** auto-scroll sa vypne → z pásu sa stane posuvný rad so
  `scroll-snap` (bez automatického pohybu).

**Featurable kredit:** decentné „Powered by Featurable" (malý odkaz) dole v sekcii, keď
`showBranding === true` — súlad s free plánom.

## Architektúra komponentov

- **`src/lib/reviews/featurable.ts`** — fetch + normalizácia dát.
  - `WIDGET_ID` konštanta.
  - `fetchReviews(): Promise<ReviewsData | null>` — zavolá endpoint, vráti typovaný objekt
    `{ rating, count, writeAReviewUri, showBranding, reviews: Review[] }` alebo `null` pri chybe.
  - `pickReviewText(review, lang)` — výber SK/EN textu podľa jazyka.
  - `formatRelative(publishedAt, lang)` — `Intl.RelativeTimeFormat`.
  - Voliteľná **localStorage cache** (TTL ~30 min) proti blikaniu pri každom načítaní.
- **`src/lib/components/Reviews.svelte`** — prezentačná komponenta.
  - `$state` pre `data | loading | error`; načítanie v `$effect` pri mounte (len v prehliadači).
  - **Skeleton** počas loadingu.
  - **Graceful fallback:** pri `error`/`null`/prázdnych recenziách sa sekcia **ticho skryje**
    (web nikdy nespadne, žiadne prázdne miesto).
  - GSAP marquee + reduced-motion vetva; scoped `<style>` v štýle ostatných komponentov.
- **i18n:** nové kľúče `reviews.*` do `sk.json`, `en.json`, `de.json`, `hr.json`
  (nadpis sekcie, „recenzií na Google" so skloňovaním, CTA label, prípadne „Načítavam…").
- **`src/routes/+page.svelte`:** import + vloženie `<Reviews />` medzi `<About />` a `<Contact />`.

## Čo zámerne NErobíme (YAGNI)

- **Žiadna review/aggregateRating JSON-LD schéma** — Google penalizuje „self-serving" hodnotenia
  na vlastnom webe.
- **Žiadny Featurable `embed.js`** — renderujeme vlastnú komponentu (výkon + dizajn).
- **Žiadne recenzie na landing stránkach** v prvej verzii.
- **Žiadny build-time fetch** — dáta ťaháme za behu (živé); statický fallback netreba.

## Testovanie / overenie

- Manuálne: `pnpm run dev` → sekcia sa zobrazí, marquee beží, hover pauzuje, CTA vedie na Google,
  prepnutie jazyka mení text recenzií aj labely.
- Reduced-motion: zap. „Reduce motion" v OS → auto-scroll vypnutý, posuvný rad funguje.
- Fallback: dočasne zlý Widget ID / offline → sekcia sa ticho skryje, zvyšok webu OK.
- Build: `pnpm run build` prejde (prerender nespadne — fetch je iba client-side v `$effect`).

## Otvorené body pre vlastníka

1. Zvýšiť „Number of reviews" vo Featurable a nechať Save (koľko free plán dovolí).
2. Potvrdiť, že widget je Published (API vracia `success: true`). ✅ overené.
