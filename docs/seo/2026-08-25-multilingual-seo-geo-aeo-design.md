# Enterprise SEO / GEO / AEO – viacjazyčná architektúra (design/spec)

**Dátum:** 2026-08-25
**Autor:** Juraj Mudroch (+ Claude)
**Nadväzuje na:** `docs/seo/2026-07-27-local-seo-strategy.md`
**Cieľ:** Byť top vo vyhľadávaní a v AI odpovediach vo **všetkých 4 jazykoch** (SK/EN/DE/HR),
s dôrazom na **rozvody** a **brzdy**, pri zachovaní existujúcich SK pozícií.

---

## 0) Kontext a hlavný problém

Web (SvelteKit 2 + Svelte 5, `adapter-static`, Vercel `cleanUrls: true`) má zrelý SEO základ:
centrálne NAP/GPS (`src/lib/seo/business.ts`), JSON-LD (`AutoRepair`/`Service`/`FAQPage`/`BreadcrumbList`/`OfferCatalog`),
auto-sitemap z registra (`src/lib/seo/routes.ts`), čisté nadpisy, dobré Core Web Vitals.

**Kľúčový problém:** i18n (`src/lib/i18n/index.ts`) je **výhradne klientske** (localStorage + Svelte store,
default `sk`). Pri prerenderi je jazyk vždy `sk`, takže:

- Každá URL existuje v statickom HTML **len po slovensky**; EN/DE/HR sa prepnú až v prehliadači.
- Neexistujú samostatné URL pre iné jazyky.
- `hreflang` na homepage mieria **všetky na tú istú `/`** → nevalidné.
- Google/Bing/AI crawleri vidia **iba SK obsah**.

Preklady landing stránok (`*/content.ts`) aj homepage (`i18n/*.json`) **už existujú** vo všetkých 4 jazykoch —
chýba len architektúra, ktorá ich vystaví na reálnych, prerenderovaných URL.

## 1) Rozhodnutia (schválené používateľom)

1. **URL štruktúra:** SK ostáva na root (bez prefixu, žiadne redirecty). EN/DE/HR pod prefixom
   `/en`, `/de`, `/hr` s **lokalizovanými slugmi** (keyword v URL v danom jazyku).
2. **Rozsah:** vymaxovať existujúcich 10 stránok + nové **area** stránky + **blog/poradňa** (AEO),
   s prioritou **rozvody + brzdy**.
3. **Externé profily (`sameAs`):**
   - Instagram: `https://www.instagram.com/mudrochmotorworxx`
   - Facebook: `https://www.facebook.com/people/Mudrochmotorworxx/61566487743858/`
   - Google (knowledge panel): `https://www.google.com/search?kgmid=/g/11zg1cxrfh`
     (vymeniť za plný Google Maps place URL, keď bude k dispozícii)
   - GSC: používateľ má prístup → doplní verifikačný `google-site-verification` reťazec.

## 2) Neprekročiteľné obmedzenia (z pamäte projektu)

- **Slovo „mobilný" iba v tele textu, NIKDY v `<title>`/H1.**
- **Nikdy nevytvárať stránky pre výmenu oleja ani DPF** (DPF = externý dodávateľ).
- Area stránky musia mať **unikátny obsah** (žiadne doorway klony).
- Nemeniť firemné NAP/GPS – jediný zdroj ostáva `business.ts`.

---

## 3) Architektúra viacjazyčnosti

### 3.1 Register stránok — jediný zdroj pravdy

Nový modul `src/lib/seo/pages.ts` (rozšírenie/nahradenie `routes.ts`). Pre každú stránku:

```ts
type PageType = 'home' | 'landing' | 'area' | 'article';

type PageDef = {
  key: string;                      // stabilný identifikátor, napr. 'brzdy'
  type: PageType;
  slug: Record<Lang, string>;       // lokalizovaný slug per jazyk
  changefreq: 'weekly' | 'monthly';
  priority: number;
  // odkaz na zdroj obsahu (content modul) a na builder SEO meta
};
```

Príklad slugov (SK = existujúca URL, ostatné nové):

| key | sk | en | de | hr |
|---|---|---|---|---|
| rozvody | vymena-rozvodov-bratislava | timing-belt-replacement-bratislava | zahnriemenwechsel-bratislava | zamjena-zupcastog-remena-bratislava |
| brzdy | vymena-brzd-bratislava | brake-replacement-bratislava | bremsen-wechseln-bratislava | zamjena-kocnica-bratislava |
| stk | priprava-na-stk-bratislava | mot-inspection-prep-bratislava | tuv-vorbereitung-bratislava | priprema-tehnicki-pregled-bratislava |
| diagnostika | diagnostika-aut-bratislava | car-diagnostics-bratislava | fahrzeugdiagnose-bratislava | dijagnostika-automobila-bratislava |
| tlmice | vymena-tlmicov-bratislava | shock-absorbers-bratislava | stossdaempfer-wechseln-bratislava | zamjena-amortizera-bratislava |
| vyfuk | oprava-vyfuku-bratislava | exhaust-repair-bratislava | auspuff-reparatur-bratislava | popravak-ispuha-bratislava |
| area-pb | autoservis-podunajske-biskupice | car-service-podunajske-biskupice | autoservice-podunajske-biskupice | autoservis-podunajske-biskupice |
| area-vrakuna | autoservis-vrakuna | car-service-vrakuna | autoservice-vrakuna | autoservis-vrakuna |

> Diakritika v slugoch sa nepoužíva (ASCII), pre HR/DE tiež transliterácia (`č→c`, `ž→z`, `ß→ss`).

### 3.2 Routing

- **SK (root):** existujúce fyzické routy ostávajú funkčné (kompatibilita + žiadne redirecty).
  Prerobia sa na tenké wrappery nad zdieľaným `<Landing>` komponentom (viď 3.3).
- **EN/DE/HR:** jedna dynamická routa
  `src/routes/[lang=lang]/[...slug]/+page.ts` + `+page.svelte`:
  - Param matcher `src/params/lang.ts`: povolí len `en|de|hr`.
  - `entries()` vygeneruje `{ lang, slug }` pre **každú** kombináciu (jazyk × lokalizovaný slug,
    vrátane `''` pre homepage) → adapter-static ich prerenderuje.
  - `load()` z `(lang, slug)` nájde `PageDef` v registri; ak nenájde → 404.
  - `+page.svelte` podľa `type` vykreslí `<Home>` alebo `<Landing>`/`<Area>`/`<Article>` renderer.

### 3.3 Jazyk z URL, nie z localStorage (kľúč pre prerender)

- `+layout.ts` (alebo dynamická routa) určí `lang` z URL a vloží ho do `load` dát.
- `+layout.svelte` počas SSR/prerenderu nastaví `currentLang` na `lang` z dát **pred** vykreslením,
  takže `$t(...)` a `content[$lang]` produkujú HTML v správnom jazyku.
- Na klientovi: `currentLang` sa inicializuje z URL (nie z localStorage). LanguageSwitcher
  **naviguje na inú URL** (`/`, `/en/...`) namiesto prepínania store — inak by URL a obsah nesedeli.
  Mapovanie „rovnaká stránka v inom jazyku" ide cez register (key → slug[lang]).
- `<html lang>` sa nastaví per stránka (dynamicky v `app.html` cez `%sveltekit.head%` alebo v layoute).

### 3.4 Refaktor landing stránok → zdieľaný `<Landing>` komponent

8 bespoke `+page.svelte` (identická sekčná štruktúra) sa zjednotí do
`src/lib/components/Landing.svelte`, ktorý dostane `content` (z `content.ts`) + `seo` config.
SK fyzické routy aj dynamická `[lang]` routa používajú ten istý komponent. Rieši to duplicitu
aj chýbajúci zdieľaný SEO komponent.

---

## 4) Technické SEO (DRY + korektnosť)

### 4.1 Zdieľaný `<Seo>` komponent (`src/lib/components/Seo.svelte`)
Jedno miesto pre `<svelte:head>`: `title`, `description`, `keywords`, `canonical`,
OG (vrátane `og:image`, `og:locale`, `og:locale:alternate`), **Twitter Cards** (`summary_large_image`),
geo meta, **reciproký hreflang** (všetky 4 jazyky + `x-default` → SK), JSON-LD (cez `jsonLd(...)`).
Vstup: `{ lang, pageKey, title, description, keywords, image?, schemas[] }`; hreflang si sám dopočíta
z registra (key → slug[lang]).

### 4.2 hreflang (reciproký, správny)
Pre každú stránku sa vygenerujú `<link rel="alternate" hreflang="sk|en|de|hr">` na zodpovedajúce
lokalizované URL + `hreflang="x-default"` → SK URL. Kanonická URL = vlastná jazyková verzia.

### 4.3 Sitemap (`sitemap.xml/+server.ts` prepis)
- Zahrnie **všetky** jazykové URL zo `pages.ts`.
- Ku každej URL `xhtml:link rel="alternate" hreflang=...` alternatívy (odporúčaný formát pre multiling.).
- Pridá `<lastmod>` (build dátum / per-page dátum z registra).

### 4.4 Schémy (rozšírenie `business.ts`)
- `Organization` + `WebSite` (s `inLanguage`, `sameAs` doplnené).
- `AutoRepair` doplniť `sameAs` a (opatrne) `aggregateRating` z Featurable recenzií
  (len ak sú reálne zobrazené na stránke — inak vynechať kvôli Google pravidlám).
- `Service`/`FAQPage`/`BreadcrumbList` per locale s `inLanguage`.
- `Article`/`BlogPosting` pre blog, voliteľne `HowTo` (len validné, reálne kroky).
- `speakable` (CSS selektory na „krátku odpoveď" bloky) pre hlasové/AI odpovede.

### 4.5 Ostatné
- Reálny **OG obrázok 1200×630** (raster, nie SVG) — generovať skriptom
  (`scripts/gen-og.mjs`, analogicky k `gen-favicons.mjs`) alebo staticky do `/static`.
- `google-site-verification` meta (hodnota od používateľa z GSC).
- `<html lang>` per locale.

---

## 5) AEO / „nech to nájde každé AI"

### 5.1 robots.txt — explicitne povoliť AI crawlerov
Pridať `User-agent` bloky (Allow: /) pre: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`,
`ClaudeBot`, `anthropic-ai`, `Claude-Web`, `PerplexityBot`, `Perplexity-User`,
`Google-Extended`, `Applebot`, `Applebot-Extended`, `Amazonbot`, `Bytespider`, `CCBot`,
`cohere-ai`, `Meta-ExternalAgent`, `Diffbot`, `Timpibot`. Ponechať `User-agent: *  Allow: /`.
Sitemap odkaz zachovať.

### 5.2 `/llms.txt` (+ voliteľne `/llms-full.txt`)
Nový prerenderovaný endpoint `src/routes/llms.txt/+server.ts`: štruktúrovaný markdown pre LLM —
kto sme, NAP, otváracie hodiny, zoznam služieb s URL (4 jazyky), ceny (rozpätia), top FAQ,
odkaz na sitemap. Generované z `business.ts` + `pages.ts` (jeden zdroj pravdy).

### 5.3 Answer-first bloky
Na začiatok kľúčových sekcií (najmä rozvody/brzdy) pridať krátky „Krátka odpoveď:" odsek
(1–2 vety, priama odpoveď na dopyt) — presne to, čo AI a featured snippets citujú.
Označiť `speakable`-friendly triedou.

### 5.4 FAQ rozšírenie
Rozšíriť FAQ na landing stránkach o otázkové frázy (viď keyword banka) vo všetkých 4 jazykoch;
tieto idú aj do `FAQPage` schémy.

---

## 6) Kľúčové slová, frázy a obsah (dôraz: rozvody + brzdy)

> Plná banka pôjde do `content.ts`/`i18n` počas implementácie; nižšie je záväzný smer a jadro.
> Objemy si over v GSC/Keyword Planner; priorita = zámer.

### 6.1 BRZDY
- **SK:** výmena brzdových platničiek Bratislava, výmena brzdových kotúčov, servis bŕzd Bratislava,
  kedy meniť brzdové platničky, škrípanie bŕzd pri brzdení, vŕzganie bŕzd, vibrácie volantu pri brzdení,
  cena výmeny bŕzd, opotrebované brzdy príznaky, brzdová kvapalina výmena DOT4, odvzdušnenie bŕzd,
  hrubka brzdových kotúčov, brzdový strmeň zadretý, kontrola bŕzd zdarma.
- **EN:** brake pad replacement Bratislava, brake disc replacement, brake service Bratislava,
  squeaking brakes when braking, grinding brakes, when to replace brake pads, brake replacement cost,
  worn brakes symptoms, brake fluid change DOT4, brake bleeding, steering wheel vibration when braking.
- **DE:** Bremsbeläge wechseln Bratislava, Bremsscheiben wechseln, Bremsenservice Bratislava,
  Bremsen quietschen Ursache, wann Bremsbeläge wechseln, Bremsen wechseln Kosten,
  verschlissene Bremsen Anzeichen, Bremsflüssigkeit wechseln DOT4, Bremsen entlüften.
- **HR:** zamjena pločica kočnica Bratislava, zamjena diskova kočnica, servis kočnica,
  škripanje kočnica, kada mijenjati pločice, cijena zamjene kočnica, istrošene kočnice simptomi,
  zamjena kočione tekućine DOT4, odzračivanje kočnica.

### 6.2 ROZVODY
- **SK:** výmena rozvodov cena Bratislava, výmena rozvodového remeňa, výmena rozvodovej reťaze,
  interval výmeny rozvodov km, príznaky opotrebovaných rozvodov, rozvodová reťaz vs remeň,
  výmena vodnej pumpy s rozvodmi, čo hrozí pri pretrhnutí rozvodov, sada rozvodov cena,
  výmena rozvodov Škoda Octavia / VW Golf / Passat, natiahnutá rozvodová reťaz.
- **EN:** timing belt replacement cost Bratislava, timing belt vs timing chain, timing belt interval km,
  timing belt symptoms, water pump replacement with timing belt, consequences of timing belt failure,
  timing chain stretched, timing kit price.
- **DE:** Zahnriemen wechseln Kosten Bratislava, Zahnriemen oder Steuerkette, Zahnriemen Intervall km,
  Zahnriemen Anzeichen Verschleiß, Wasserpumpe mit Zahnriemen wechseln, Zahnriemen gerissen Folgen,
  Steuerkette gelängt, Zahnriemensatz Preis.
- **HR:** zamjena zupčastog remena cijena Bratislava, zupčasti remen ili lanac, interval zupčastog remena,
  simptomi istrošenog remena, zamjena vodene pumpe s remenom, posljedice puknuća remena, cijena kompleta remena.

### 6.3 AEO otázkové frázy (do FAQ + blog nadpisov, 4 jazyky)
- „Ako spoznám opotrebované brzdy?" / „How do I know my brakes are worn?" /
  „Woran erkenne ich verschlissene Bremsen?" / „Kako prepoznati istrošene kočnice?"
- „Koľko stojí výmena rozvodov v Bratislave?" (+ EN/DE/HR)
- „Ako často treba meniť rozvody / rozvodový remeň?" (+ EN/DE/HR)
- „Čo znamená škrípanie pri brzdení?" (+ EN/DE/HR)
- „Rozvodová reťaz alebo remeň — čo je lepšie?" (+ EN/DE/HR)

### 6.4 Homepage on-page
- Viditeľný textový H1/H2 s „Autoservis Bratislava – Podunajské Biskupice" (nie brand-only;
  „mobilný" len v tele). Doplniť telo prirodzenými frázami + interné odkazy na service/area/blog.

## 7) Nový obsah

### 7.1 Blog / poradňa (AEO ťahák)
- Routy `src/routes/blog/` (SK) + `/[lang]/blog/...` (EN/DE/HR), renderer `<Article>`.
- Prioritné články (rozvody + brzdy), každý 4 jazyky, `Article` schema, answer-first intro, interné odkazy
  na príslušnú service stránku:
  1. „Kedy meniť rozvody a čo hrozí pri pretrhnutí" / ekvivalenty.
  2. „Rozvodový remeň vs. reťaz — rozdiely, interval, cena."
  3. „Ako spoznať opotrebované brzdy — 7 príznakov."
  4. „Výmena bŕzd: platničky, kotúče, kvapalina — čo a kedy."
- Blog index stránka s výpisom + `Blog` schema.

### 7.2 Area stránky (unikátny obsah, žiadne doorway)
- Ostávajú `area-pb` a `area-vrakuna`; prípadné ďalšie len ak vznikne reálny unikátny obsah
  (mapa, ako sa dostať, čo pre oblasť ponúkame). Rozšíriť do 4 jazykov.

## 8) Dátový tok

```
pages.ts (register: key, type, slug[lang], priority)
   ├─> [lang]/[...slug]/+page.ts  (entries() + load → PageDef, lang)
   │        └─> +page.svelte → <Home>|<Landing>|<Area>|<Article>
   ├─> SK fyzické routy → rovnaké renderery
   ├─> sitemap.xml/+server.ts  (všetky URL + hreflang alt + lastmod)
   ├─> llms.txt/+server.ts     (zhrnutie z business.ts + pages.ts)
   └─> Seo.svelte              (hreflang/canonical/OG/Twitter/JSON-LD z registra)

business.ts (NAP/GPS/schémy + sameAs) ─> Seo.svelte, llms.txt, renderery
i18n/*.json + */content.ts (preklady) ─> renderery (lang z URL)
```

## 9) Error handling / edge cases

- Neznáma `(lang, slug)` kombinácia → 404 (SvelteKit `error(404)`).
- Neplatný `lang` odchytí param matcher (nezmatchne routu).
- LanguageSwitcher pre stránku bez ekvivalentu v cieľovom jazyku → fallback na jazykovú homepage.
- Diakritika v slugoch: register drží ASCII slug; žiadny runtime prevod.
- Zachovať staré SK URL 1:1 (žiadne redirecty, žiadny výpadok pozícií).

## 10) Testovanie / verifikácia

- **Unit (vitest):** register (unikátnosť slugov, kompletnosť jazykov), slug↔key mapovanie,
  hreflang generátor (reciprocita), sitemap obsahuje všetky URL + alternatívy, llms.txt obsahuje NAP.
- **Build:** `pnpm build` musí prerenderovať všetky jazykové URL (kontrola `build/` stromu),
  `strict: true` nesmie hlásiť chýbajúce entries.
- **Manuálne:** view-source každej jazykovej URL = HTML reálne v danom jazyku; hreflang reciproký;
  canonical správny; JSON-LD validné (Rich Results Test); `/robots.txt`, `/llms.txt`, `/sitemap.xml` OK.
- **Náhľad:** `npx serve build` (nie `vite preview` — 404 na assety, viď pamäť projektu).

## 11) Fázovanie (pre implementačný plán)

1. **Fáza 1 – Architektúra:** `pages.ts` register, param matcher, `[lang]/[...slug]` routa,
   jazyk z URL v layoute, refaktor landingov do `<Landing>`, SK routy ako wrappery. (Bez straty SK URL.)
2. **Fáza 2 – Technické SEO:** `<Seo>` komponent, reciproký hreflang, sitemap prepis (+lastmod+alt),
   Twitter cards, OG obrázok, `sameAs`, GSC meta, Organization/WebSite schémy.
3. **Fáza 3 – AEO:** robots.txt AI crawleri, `/llms.txt`, answer-first bloky, FAQ rozšírenie,
   speakable/inLanguage.
4. **Fáza 4 – Obsah & keywordy:** rozšírenie keyword bánk a tela textu (dôraz rozvody/brzdy) vo 4 jazykoch,
   homepage H1/telo, area stránky do 4 jazykov.
5. **Fáza 5 – Blog/poradňa:** `<Article>` renderer, blog index, 4 prioritné články × 4 jazyky, Article schema.

Každá fáza je samostatne buildovateľná a nasadateľná; poradie rešpektuje závislosti
(architektúra → SEO → AEO → obsah → blog).
