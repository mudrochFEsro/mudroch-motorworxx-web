# SEO landing stránky „Výmena rozvodov" + „Výmena bŕzd" Bratislava — design

**Dátum:** 2026-07-22
**Cieľ:** #1 pozícia na Google pre dva tématické klastre na SK trhu:
- `výmena rozvodov Bratislava` (+ rozvodový long-tail)
- `výmena bŕzd Bratislava` (+ brzdový long-tail)
Plus AI/AEO odpovede (FAQPage, speakable) a silné lokálne GEO signály.

---

## Zamknuté rozhodnutia

| Téma | Rozhodnutie |
|---|---|
| Prístup | Dve dedikované landing stránky (jeden klaster = jedna stránka) |
| URL 1 | `/vymena-rozvodov-bratislava` (rozvody) |
| URL 2 | `/vymena-brzd-bratislava` (brzdy) |
| Jazyk | Iba slovensky (SK trh) |
| CTA | Telefón (klik-na-volanie) + WhatsApp |
| Canonical doména | `https://mudrochmotorworxx.sk` (BEZ pomlčky) — ostrá na Verceli |
| GPS | **48.1369231, 17.1934575** (reálna budova) |
| Keywords | Prirodzene zapracované do H1/H2/textu/FAQ/schema/meta — **žiadny keyword stuffing** |
| Obsah | Plná verzia každá stránka (~1200–1500 slov) |

**NAP:**
- Názov: MUDROCH MOTORWORXX
- Adresa: Závodná 10143/26, 821 06 Podunajské Biskupice, Bratislava, SK
- Telefón: +421 944 122 224
- Hodiny: Po–Pi 08:00–17:00
- GPS: 48.1369231, 17.1934575

---

## Keyword mapping (prirodzene, nie zoznam v päte)

### Stránka 1 — Rozvody (`/vymena-rozvodov-bratislava`)
Primárny: **výmena rozvodov** (+ Bratislava)
Sekundárne rozdelené do sekcií:
- H1/intro: výmena rozvodov, rozvody motora, servis rozvodov, oprava rozvodov
- „Kedy meniť": interval výmeny rozvodov
- „Príznaky": hlučné rozvody
- „Čo zahŕňa": rozvodový remeň, rozvodová reťaz, výmena rozvodového remeňa, výmena rozvodovej reťaze, výmena vodnej pumpy
- „Súvisiace": diagnostika motora, oprava motora
- „Cena": cena výmeny rozvodov

### Stránka 2 — Brzdy (`/vymena-brzd-bratislava`)
Primárny: **výmena bŕzd** (+ Bratislava)
Sekundárne:
- H1/intro: výmena bŕzd, servis bŕzd, oprava bŕzd
- „Čo meníme": brzdové platničky, brzdové kotúče, výmena brzdových platničiek, výmena brzdových kotúčov, brzdový strmeň
- „Brzdová kvapalina": brzdová kvapalina, odvzdušnenie bŕzd
- „Diagnostika": diagnostika bŕzd, kontrola bŕzd
- „Systém": oprava brzdového systému, servis brzdového systému

---

## 1. Architektúra a zdieľané moduly (DRY, isolation)
Nový modul **`src/lib/seo/business.ts`** — jediný zdroj pravdy pre firemné dáta a JSON-LD:
- `BUSINESS` konštanta (názov, NAP, GPS, telefón, hodiny, URL domény)
- `SITE_URL = 'https://mudrochmotorworxx.sk'`
- `autoRepairSchema()` → AutoRepair/LocalBusiness JSON-LD (reálne NAP + GPS)
- `serviceSchema({ name, url, description })` → Service JSON-LD
- `faqSchema(items)` → FAQPage JSON-LD
- `breadcrumbSchema(items)` → BreadcrumbList JSON-LD
Používa homepage aj obe landing stránky → GPS/NAP na jednom mieste, koniec duplicity a fake-GPS problému.

Nový komponent **`src/lib/components/ServiceCta.svelte`** — zdieľaný CTA blok (telefón klik-na-volanie + WhatsApp), použitý na oboch landing stránkach + sticky mobilná lišta.

Landing stránky (bespoke obsah, spoločná kostra):
- `src/routes/vymena-rozvodov-bratislava/+page.svelte`
- `src/routes/vymena-brzd-bratislava/+page.svelte`

Prerender = true (dedené). Vercel adapter-static → clean URL funguje automaticky, žiadne redirect pravidlá.

## 2. On-page štruktúra (obe stránky, poradie podľa intentu)
1. Hero / H1 s primárnym keywordom + „Bratislava" + úvod + CTA
2. Vecné sekcie podľa keyword mappingu vyššie (H2)
3. „Prečo MUDROCH MOTORWORXX" — postup, kvalitné diely, záruka (E-E-A-T)
4. FAQ — 6–8 reálnych otázok (AEO, zdroj FAQPage schema)
5. Záverečný CTA (telefón + WhatsApp), sticky CTA na mobile
Cena: bez vymyslených fixných čísel → „individuálna cenová ponuka, zavolajte" (klient doplní reálne ceny neskôr).

## 3. Structured data (JSON-LD) — každá stránka
- `Service` (serviceType podľa stránky, provider AutoRepair, areaServed)
- `AutoRepair` (LocalBusiness, reálne NAP/GPS/hodiny, `priceRange: "€€"`)
- `FAQPage` (Q&A = presne viditeľný FAQ text)
- `BreadcrumbList` (Domov › <stránka>)

## 4. Meta / head (každá stránka)
- Unikátny `title` (~55 zn., primárny keyword vpredu + Bratislava)
- Unikátny `meta description` (~155 zn., keyword + lokalita + telefón + CTA)
- `canonical` na `https://mudrochmotorworxx.sk/<slug>`
- OG tagy (url, title, description, `og:locale=sk_SK`, type website)
- `meta robots`: `index, follow, max-image-preview:large, max-snippet:-1`
- GEO meta: `geo.region=SK-BL`, `geo.placename`, `geo.position`, `ICBM` (reálne GPS)
- `hreflang="sk"` + `x-default`
- keywords meta (klaster danej stránky)

## 5. Napojenie na existujúci web
- Homepage service #8 „Výmena rozvodov" → link na `/vymena-rozvodov-bratislava`
- Homepage service #3 „Výmena brzdových platničiek a kotúčov" → link na `/vymena-brzd-bratislava`
- Stránky sa navzájom prelinkujú (súvisiace služby)
- `static/sitemap.xml`: pridať obe URL (priorita 0.9, changefreq monthly, lastmod 2026-07-22)

## 6. Domain canonicalization (kritické)
Prepísať VŠETKY `mudroch-motorworxx.sk` → `mudrochmotorworxx.sk`:
- `src/routes/+page.svelte` (JSON-LD url, canonical, hreflang ×5, OG)
- `static/sitemap.xml`, `static/robots.txt`

## 7. Bonus fix (poškodzuje lokálne SEO domény)
- Placeholder GPS `48.1234/17.1234` → reálne `48.1369231/17.1934575` (homepage JSON-LD + geo meta)
- Reálne `streetAddress: "Závodná 10143/26"` v homepage JSON-LD
- Homepage prejde na zdieľaný `business.ts` (jeden zdroj GPS/NAP)

## Non-goals (YAGNI)
- Žiadne preklady landing stránok (SK-only)
- Žiadny rezervačný formulár / backend
- Žiadne vymyslené konkrétne ceny
- Žiadne ďalšie service stránky nad rámec rozvody + brzdy
- Žiadne 301 vo `vercel.json` (rieši Vercel dashboard)
- Žiadny keyword stuffing (keywords len prirodzene v obsahu)

## Dotknuté súbory
| Súbor | Zmena |
|---|---|
| `src/lib/seo/business.ts` | **nový** — firemné dáta + JSON-LD buildery |
| `src/lib/components/ServiceCta.svelte` | **nový** — zdieľaný CTA (telefón + WhatsApp) |
| `src/routes/vymena-rozvodov-bratislava/+page.svelte` | **nový** — rozvody landing |
| `src/routes/vymena-brzd-bratislava/+page.svelte` | **nový** — brzdy landing |
| `src/routes/+page.svelte` | oprava domény/GPS/adresy, prechod na business.ts, linky na landingy |
| `static/sitemap.xml` | oprava domény + 2 nové URL |
| `static/robots.txt` | oprava domény |
| `src/lib/i18n/*.json` | text pre linky „viac o službe" v service sekcii (voliteľné) |

## Success criteria
- `pnpm build` prejde; vzniknú `build/vymena-rozvodov-bratislava.html` a `build/vymena-brzd-bratislava.html`
- Každá stránka: 1× H1 s primárnym keywordom, unikátny title/description, canonical na správnu doménu
- JSON-LD (Service, AutoRepair, FAQPage, BreadcrumbList) validné
- Žiadny `mudroch-motorworxx.sk` (s pomlčkou) v repo; žiadny `48.1234` GPS
- Keywords prirodzene v obsahu (žiadny stuffing/skrytý text)
- Homepage aj sitemap odkazujú na obe landing stránky; stránky prelinkované navzájom
