# Lokálne SEO stratégia — MUDROCH MOTORWORXX

**Dátum:** 2026-07-27
**Cieľ:** Byť čo najvyššie v Google na lokálne dopyty typu „autoservis Bratislava", „výmena rozvodov / bŕzd Bratislava", „autoservis Vrakuňa / Podunajské Biskupice".

---

## 0) Ako Google vlastne funguje pri týchto dopytoch (dôležité pochopiť)

Pri lokálnych dopytoch má Google **dva samostatné bojiská**, každé s inými pravidlami:

### A) Local Pack / Mapy (tie 3 firmy na mapke hore)
- Toto vidí najviac ľudí pri „autoservis Bratislava" / „autoservis vrakuňa".
- **Rozhoduje najmä Google Business Profile (GBP)**, nie web. Faktory:
  1. **Relevancia** — kategórie, názov, služby, popis v GBP.
  2. **Vzdialenosť** — poloha hľadajúceho vs. tvoja prevádzka (toto neovplyvníš, ale areaServed/servisná oblasť pomáha).
  3. **Prominencia** — počet a kvalita **recenzií**, aktivita, citácie (NAP na weboch), spätné odkazy.
- Web sem prispieva nepriamo: konzistentné NAP, LocalBusiness schema, lokálne stránky.

### B) Organické výsledky (modré odkazy pod mapou)
- Tu rozhoduje **web**: on-page SEO, obsah, technické SEO, spätné odkazy.
- Sem cielia tvoje landing stránky (rozvody, brzdy, …).

**Záver:** na „servis/autoservis + mesto/štvrť" je #1 páka **GBP + recenzie**. Na „výmena X + mesto" ťahá web (landing stránky). Treba robiť oboje.

---

## 1) Keyword research (mapa kľúčových slov)

> Poznámka: presné objemy hľadanosti si over v **Google Keyword Planner** (zadarmo v Google Ads), **Google Search Console** (čo už na teba padá), **Google Suggest / „Ľudia sa tiež pýtajú"**, prípadne Ubersuggest/Ahrefs/Semrush (platené). Nižšie je expertná mapa podľa zámeru — priority sú odhad pre lokálny autoservis v BA.

### Tier 1 — hlavné „money" dopyty (transakčné, najvyššia priorita)
| Kľúčové slovo | Zámer | Cieľová stránka |
|---|---|---|
| autoservis Bratislava | nájsť servis | Home + GBP |
| servis áut Bratislava | nájsť servis | Home + GBP |
| mobilný autoservis Bratislava | nájsť mobilný servis | Home + GBP |
| autoservis Podunajské Biskupice | lokálny servis | Home + location page + GBP |
| autoservis Vrakuňa | lokálny servis | location page + GBP |
| výmena rozvodov Bratislava | konkrétna služba | /vymena-rozvodov-bratislava ✅ |
| výmena bŕzd Bratislava | konkrétna služba | /vymena-brzd-bratislava ✅ |

### Tier 2 — služba × mesto (rozšírenie záberu — nové landing stránky)
| Kľúčové slovo | Cieľová stránka (návrh) |
|---|---|
| príprava na STK / EK Bratislava | /priprava-na-stk-bratislava |
| diagnostika áut / počítačová diagnostika Bratislava | /diagnostika-aut-bratislava |
| výmena tlmičov / oprava podvozku Bratislava | /vymena-tlmicov-bratislava |
| oprava / výmena výfuku Bratislava | /oprava-vyfuku-bratislava |
| plnenie / servis klimatizácie Bratislava (ak robíš) | /servis-klimatizacie-bratislava |
| výmena spojky Bratislava (ak robíš) | /vymena-spojky-bratislava |

### Tier 3 — lokalitné varianty (štvrte, kde reálne obsluhuješ)
- autoservis Ružinov, autoservis Bratislava II, autoservis Nivy, autoservis Prievoz.
- **Pozor na „doorway pages":** nerob 20 tenkých klonov pre každú štvrť — Google to penalizuje. Rob **kvalitné** lokalitné stránky len pre miesta, kde máš reálnu väzbu (Podunajské Biskupice = sídlo, Vrakuňa = susedná), s unikátnym obsahom (mapa, ako sa k tebe dostať, čo pre danú oblasť ponúkaš).

### Tier 4 — informačné / long-tail (obsah, FAQ, featured snippets)
- „kedy meniť rozvody", „príznaky opotrebovaných bŕzd", „ako často meniť olej", „koľko stojí výmena rozvodov", „výmena rozvodov Škoda Octavia / VW Golf" atď.
- Cielené cez FAQ sekcie a prípadný blog. Ťahá to návštevnosť hore v lieviku + „People Also Ask".

---

## 2) Audit súčasného stavu

### Silné stránky (už máš)
- ✅ `robots.txt` + `sitemap.xml`.
- ✅ 2 kvalitné service landing stránky (rozvody, brzdy) s H1, lede, sekciami, FAQ, CTA.
- ✅ Bohaté JSON-LD: `AutoRepair` (LocalBusiness) s NAP, GPS, otváracími hodinami, `areaServed`; `Service`, `FAQPage`, `BreadcrumbList`.
- ✅ Jeden zdroj NAP/GPS (`src/lib/seo/business.ts`).
- ✅ hreflang, canonical, OG, geo meta.
- ✅ Nové: živé Google recenzie na webe (trust signál).

### Medzery (príležitosti)
- ❌ Len 2 service stránky — chýbajú stránky pre ostatné služby z katalógu (STK, DPF, olej, diagnostika, tlmiče, výfuk…).
- ❌ Žiadna **lokalitná** stránka (Podunajské Biskupice / Vrakuňa) → slabšie na „autoservis + štvrť".
- ❌ Sitemap má `lastmod` fixný (2026-07-22) a nezahŕňa budúce stránky; generuje sa ručne.
- ❌ Homepage nemá samostatný H1 optimalizovaný na „autoservis Bratislava" (má brandový „MUDROCH MOTORWORXX"). Treba, aby na stránke bol jasný textový H1/H2 s „autoservis Bratislava / Podunajské Biskupice".
- ❌ Chýba `LocalBusiness.sameAs` (odkazy na GBP, Facebook, Instagram) — posilňuje entitu.
- ❌ Obrázky: logo je SVG; chýbajú reálne fotky prevádzky/práce s ALT textami (fotky + „autoservis Bratislava" v ALT/okolo pomáhajú aj v Google Images a GBP).
- ❌ Žiadny blog / informačný obsah (Tier 4) — chýba top-of-funnel a interné prelinkovanie.
- ❌ NAP konzistencia naprieč citáciami (azet.sk, zoznam, firmy.sk, mapy.cz, …) — pravdepodobne neúplná.

---

## 3) Akčný plán (podľa priority a ROI)

### 🥇 TIER 1 — Google Business Profile (najväčší dopad na lokál; robíš ty, ja naviguje)
1. **Claim & verify** profil (business.google.com), presná adresa Závodná 10143/26, Podunajské Biskupice.
2. **Kategórie:** primárna „Auto repair shop" (Autoservis). Pridaj relevantné sekundárne (napr. „Brzdový servis", „Oil change service", „Auto diagnostika") — čo najviac relevantných.
3. **Názov:** presne obchodný názov (MUDROCH MOTORWORXX). Nevkladaj keywordy do názvu (proti pravidlám, riziko sankcie).
4. **NAP** presne rovnaké ako na webe (znak po znaku): názov, adresa, telefón 0944 122 224.
5. **Služby (Services):** vypíš všetky (výmena rozvodov, bŕzd, olej, STK, DPF, diagnostika, tlmiče, výfuk…) s popismi obsahujúcimi kľúčové slová.
6. **Popis firmy:** 750 znakov, prirodzene s „autoservis Bratislava – Podunajské Biskupice", oblasti (Vrakuňa, Ružinov), hlavné služby.
7. **Servisná oblasť (Service area):** ak robíš mobilný servis, nastav oblasti (Podunajské Biskupice, Vrakuňa, Ružinov, Bratislava II).
8. **Fotky:** pravidelne pridávaj (prevádzka, tím, práca na aute, logo, exteriér s okolím). Google uprednostňuje aktívne profily.
9. **Recenzie — najsilnejší faktor prominencie:**
   - Systematicky pýtaj recenzie po každej zákazke (SMS/WhatsApp s `writeAReviewUri`).
   - **Odpovedaj na všetky** recenzie (aj negatívne, slušne).
   - Povzbuď zákazníkov spomenúť službu/miesto („výmena rozvodov v Podunajských Biskupiciach") — prirodzene, nenačrtávaj im text.
   - Cieľ: stabilný prílev (napr. 2–4/mes.) > jednorazový nárast.
10. **Google Posts:** krátke príspevky (akcie, tipy) 1–2×/mes. — signál aktivity.
11. **Q&A:** predvyplň časté otázky (aj sám cez druhý účet) s odpoveďami.

### 🥈 TIER 2 — On-site (implementujem ja; opakuje sa cez `content.ts` + `+page.svelte`)
1. **Homepage on-page:**
   - Pridať viditeľný H1/podnadpis s „Autoservis Bratislava – Podunajské Biskupice" (textovo, nielen brand).
   - Sekcia „Kde nás nájdete" s adresou, mapou (embed), oblasťami ktoré obsluhuješ (interné odkazy na lokalitné stránky).
   - Rozšíriť `AutoRepair` schému o `sameAs` (GBP, FB, IG) a `hasMap`.
2. **Nové service landing stránky** (Tier 2 keywords), rovnaká šablóna ako rozvody/brzdy, každá s unikátnym obsahom, FAQ, Service+FAQ+Breadcrumb schema:
   - Priorita: STK príprava → diagnostika → tlmiče/podvozok → výfuk → (klíma/spojka ak robíš). Pozn.: výmena oleja a DPF sa NErobia (DPF externý dodávateľ).
3. **Lokalitná stránka(y)** (kvalitné, nie doorway):
   - `/autoservis-podunajske-biskupice` (sídlo) + `/autoservis-vrakuna` (susedná) — unikátny text, mapa, ako sa dostať, aké služby pre oblasť, odkazy na service stránky.
4. **Interné prelinkovanie:** home ↔ service stránky ↔ lokalitné stránky (kontextové odkazy s keyword anchor textom).
5. **Sitemap automatizácia:** generovať `sitemap.xml` z jedného zoznamu URL (aby nové stránky pribudli automaticky + reálny `lastmod`).
6. **Obrázky / Image SEO:** reálne fotky (WebP), popisné `alt`, názvy súborov s keywordmi; lazy-load (už rieši projekt).
7. **Výkon / Core Web Vitals:** už dobré (adapter-static, CLS ~0). Udržať; skontrolovať LCP obrázok hero.
8. **(Voliteľné, opatrne) `aggregateRating`/`Review` schema** z reálne zobrazených recenzií — môže priniesť hviezdičky v SERP, ale Google pri LocalBusiness „self-serving" hodnotenia niekedy ignoruje/penalizuje. Zvážiť neskôr.

### 🥉 TIER 3 — Off-site (ty; ja pripravím zoznam a texty)
1. **Lokálne citácie (NAP):** azet.sk, zoznam.sk, firmy.sk, superzoznam, mapy.cz, Facebook, Instagram — **identické** NAP.
2. **Spätné odkazy:** lokálne (mestská časť, partneri, dodávatelia dielov, autobazáre), prípadne PR článok.
3. **Sociálne siete:** FB/IG s odkazom na web a GBP (posilnenie entity + `sameAs`).

---

## 4) Meranie a iterácia
- **Google Search Console** — pridať doménu, poslať sitemap, sledovať dopyty/pozície/CTR. Toto je zdroj pravdy pre reálne keywordy.
- **GBP Insights** — koľko ľudí volalo/kliklo z profilu, na aké dopyty ťa našli.
- **Google Analytics** (voliteľné) — správanie na webe.
- Iterovať každé 4–6 týždňov podľa dát z GSC (ktoré keywordy stúpajú, kde si na 2. strane → dolaď obsah).

---

## 5) Realistické očakávania
- GBP zmeny + recenzie: efekt v **týždňoch**.
- Nové landing stránky (organika): indexácia dni–týždne, reálne pozície **1–3 mesiace** (podľa konkurencie a odkazov).
- Lokálne SEO je **kontinuálny** proces (recenzie, obsah, citácie), nie jednorazové nastavenie.
