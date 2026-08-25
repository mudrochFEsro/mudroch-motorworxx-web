# Multilingual SEO – Phase 4b: remaining pages + homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Extend the answer-first + localized-keyword treatment (already applied to brzdy & rozvody) to the remaining 6 service/area pages, and finish the homepage's multilingual SEO/AEO — so every page is fully maximized in all 4 languages.

**Architecture:** Same proven pattern as Phase 3+4 (Tasks 5/6): each landing content already has a rich per-language FAQ; add the optional `answer` field (rendered by `<Landing>`), localize `landingSeo[key].keywords` for en/de/hr, and lightly enrich prose. Homepage: localize its keywords meta per locale via i18n, add `inLanguage` to its schema, and remove the DPF/oil mentions.

**Tech Stack:** SvelteKit 2, Svelte 5 runes, adapter-static, TypeScript, Vitest, pnpm.

**Spec:** `docs/seo/2026-08-25-multilingual-seo-geo-aeo-design.md` (§6 keywords)

## Global Constraints

- Languages sk/en/de/hr; content per-language in each `content.ts`.
- **Never invent prices** — cost questions direct to a call (`0944 122 224`). No € amounts.
- **"mobilný/mobile/mobiler/mobilni" only in body, NEVER in `<title>`/`<h1>`.**
- **Never** create/emphasize oil-change or DPF services. Phase 4b actively REMOVES the leftover "Čistenie DPF" OfferCatalog entry and "výmena oleja" from the homepage keywords meta.
- Native, grammatically-correct copy per language (DE umlauts/cases; HR dijakritika/cases; nominalized infinitives "vom Wechseln der …" not "vom … wechseln"). No machine calques.
- The `<Landing>` component already renders `{#if c.answer}` and emits `inLanguage`/`speakable`; do NOT modify Landing.svelte here.
- Don't regress: SK URLs unchanged; 39 existing tests stay green; reciprocal hreflang/canonical intact.

---

### Task 1: STK + DIAGNOSTIKA + VÝFUK — answer + localized keywords + prose (4 langs)

**Files:**
- Modify: `src/routes/priprava-na-stk-bratislava/content.ts`, `src/routes/diagnostika-aut-bratislava/content.ts`, `src/routes/oprava-vyfuku-bratislava/content.ts`
- Modify: `src/lib/seo/landingSeo.ts` (localize `stk`, `diagnostika`, `vyfuk` keywords en/de/hr)

**Context:** These 3 pages already have a rich per-language FAQ — do NOT duplicate it. Each `content.ts` has a local `type` and 4 language blocks; add `answer?: string` to each type + a value per language. `landingSeo[key].keywords.en/de/hr` currently equal the SK string — translate them.

- [ ] **Step 1: Add `answer?` + value (4 langs) to each of the 3 content files**
  A 1–2 sentence direct answer to the page's primary query, primary keyword included, inviting a call to `0944 122 224`. Per page intent:
  - stk: MOT/STK+EK preparation — we check and fix what would fail the technical & emissions inspection so the car passes.
  - diagnostika: computer diagnostics — we read fault codes and find the real cause (engine light, electronics), then advise the fix.
  - vyfuk: exhaust repair — we repair/replace mufflers, pipes, catalytic/lambda issues; welding where sensible.
  Native-quality in all 4 langs. May include `<strong>`. No prices.

- [ ] **Step 2: Localize `landingSeo` keywords (en/de/hr) for stk, diagnostika, vyfuk**
  Translate each SK keyword list into natural English, German, Croatian search terms (keep SK as-is). Examples of the terms to cover:
  - stk EN: "MOT preparation Bratislava, pre-MOT check, technical & emission inspection prep, fix before MOT"; DE: "TÜV-Vorbereitung Bratislava, Hauptuntersuchung Vorbereitung, Vorbereitung auf technische und Abgasuntersuchung, vor dem TÜV reparieren"; HR: "priprema za tehnički pregled Bratislava, pregled prije tehničkog, priprema za tehnički i ekološki pregled".
  - diagnostika EN: "car diagnostics Bratislava, computer diagnostics, engine fault codes, check engine light diagnosis, OBD diagnostics"; DE: "Fahrzeugdiagnose Bratislava, Computerdiagnose, Fehlerspeicher auslesen, Motorkontrollleuchte Diagnose, OBD-Diagnose"; HR: "dijagnostika automobila Bratislava, kompjuterska dijagnostika, očitanje grešaka motora, dijagnostika lampice motora".
  - vyfuk EN: "exhaust repair Bratislava, muffler replacement, exhaust pipe welding, catalytic converter, lambda sensor"; DE: "Auspuff reparieren Bratislava, Auspuff wechseln, Endschalldämpfer, Auspuff schweißen, Katalysator, Lambdasonde"; HR: "popravak ispuha Bratislava, zamjena auspuha, zavarivanje ispuha, katalizator, lambda sonda".

- [ ] **Step 3: Light prose enrichment** — weave the localized keywords naturally into each page's whenProse/symptomsProse/includesProse per language (no stuffing, no wholesale rewrite).

- [ ] **Step 4: Verify** — `pnpm vitest run` (39 green); `pnpm build`; grep the 3 SK pages for `landing-answer`, and grep one DE + one HR variant for the localized answer + that `keywords` meta is now in-language. Confirm no € and no "mobil*" in title/h1.

- [ ] **Step 5: Commit** — `git add` the 3 content.ts + landingSeo.ts; commit `feat(content): stk/diagnostika/vyfuk answer-first + localized keywords + prose (4 langs)`.

---

### Task 2: TLMIČE + AREA-PB + AREA-VRAKUŇA — answer + localized keywords + prose (4 langs)

**Files:**
- Modify: `src/routes/vymena-tlmicov-bratislava/content.ts`, `src/routes/autoservis-podunajske-biskupice/content.ts`, `src/routes/autoservis-vrakuna/content.ts`
- Modify: `src/lib/seo/landingSeo.ts` (localize `tlmice`, `area-pb`, `area-vrakuna` keywords en/de/hr)

**Context:** Same as Task 1. The two AREA pages are location hubs — their `answer` should be location-focused (a car service located in / serving that district), and MUST stay unique (no doorway duplication between the two).

- [ ] **Step 1: Add `answer?` + value (4 langs) to each of the 3 content files**
  - tlmice: shock absorbers & suspension — worn shocks/bushings/ball joints replaced; we diagnose knocking and poor road holding.
  - area-pb: car service located in Podunajské Biskupice (our HQ, Závodná 10143/26) — full service + timing belts/brakes; direct to call. Location-specific.
  - area-vrakuna: car service for Vrakuňa (neighbouring district) — same services, easy to reach; location-specific, DISTINCT wording from area-pb.
  Native-quality 4 langs, primary keyword, phone. No prices.

- [ ] **Step 2: Localize `landingSeo` keywords (en/de/hr) for tlmice, area-pb, area-vrakuna**
  - tlmice EN: "shock absorber replacement Bratislava, suspension repair, worn shocks, ball joints, control arm, wheel bearing"; DE: "Stoßdämpfer wechseln Bratislava, Fahrwerk reparieren, verschlissene Stoßdämpfer, Traggelenk, Querlenker, Radlager"; HR: "zamjena amortizera Bratislava, popravak ovjesa, istrošeni amortizeri, kuglasti zglob, ležaj kotača".
  - area-pb EN: "car service Podunajské Biskupice, auto repair Podunajské Biskupice, garage near me Bratislava II"; DE: "Autoservice Podunajské Biskupice, Autowerkstatt Podunajské Biskupice, KFZ-Werkstatt Bratislava"; HR: "autoservis Podunajské Biskupice, automehaničar Podunajské Biskupice".
  - area-vrakuna EN: "car service Vrakuňa, auto repair Vrakuňa Bratislava"; DE: "Autoservice Vrakuňa, Autowerkstatt Vrakuňa Bratislava"; HR: "autoservis Vrakuňa, automehaničar Vrakuňa".

- [ ] **Step 3: Light prose enrichment** — weave localized keywords naturally per language; keep area pages distinct.

- [ ] **Step 4: Verify** — `pnpm vitest run` (39); `pnpm build`; grep the 3 SK pages for `landing-answer`; grep one DE + one HR variant for localized answer + in-language keywords; confirm area-pb vs area-vrakuna answers differ; no €; no "mobil*" in title/h1.

- [ ] **Step 5: Commit** — `feat(content): tlmice + area pages answer-first + localized keywords + prose (4 langs)`.

---

### Task 3: Homepage — localized keywords, cleaned OfferCatalog, inLanguage

**Files:**
- Modify: `src/lib/i18n/sk.json`, `en.json`, `de.json`, `hr.json` (add `seo.keywords` per language)
- Modify: `src/lib/components/Home.svelte` (use `$t('seo.keywords')`; add `inLanguage`; remove DPF offer)
- Reference: `src/lib/seo/business.ts` (autoRepairSchema, bcp47)

**Context:** Home.svelte hardcodes a single SK `keywords` meta that includes "výmena oleja" (oil — must go), and its `structuredData.hasOfferCatalog` still lists "Čistenie DPF" (must go). Localize keywords via i18n and add `inLanguage`.

- [ ] **Step 1: Add `seo.keywords` to each i18n JSON** (under the existing `seo` object, per language). SK (oil REMOVED): `"mobilný autoservis, autoservis Bratislava, mobilný servis áut, Podunajské Biskupice, Vrakuňa, STK a EK, diagnostika, brzdy, rozvody, tlmiče, výfuk, servis áut, servisná prehliadka"`. EN/DE/HR: natural equivalents (car service Bratislava, brakes, timing belt, diagnostics, MOT prep, suspension, exhaust, mobile car service…). No oil-change, no DPF terms.

- [ ] **Step 2: Home.svelte** — replace the hardcoded keywords meta with `<meta name="keywords" content={$t('seo.keywords')} />`. In `structuredData`, REMOVE the `{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Čistenie DPF' } }` entry from `hasOfferCatalog.itemListElement`. Add `inLanguage: bcp47($currentLang)` to the top-level `structuredData` object (import `bcp47`). Keep everything else.

- [ ] **Step 3: Verify** — `pnpm vitest run` (39); `pnpm build`; grep `build/index.html` (SK) + `build/de.html` (DE): keywords meta is in-language and contains NO "výmena oleja"/oil term; JSON-LD OfferCatalog no longer contains "Čistenie DPF"/DPF; `inLanguage` present. Confirm no "mobil*" in `<title>`/`<h1>`.

- [ ] **Step 4: Commit** — `feat(seo): localize homepage keywords + inLanguage; drop DPF/oil mentions`.

---

### Task 4: Verification gate

- [ ] **Step 1:** `pnpm vitest run` — all green (39).
- [ ] **Step 2:** `pnpm build` — succeeds.
- [ ] **Step 3:** Spot-check across all 8 landing/area pages (4 langs): each has a `landing-answer` block and in-language `keywords` meta; homepage has no DPF/oil terms anywhere; no "mobil*" in any title/h1; no invented € prices.
- [ ] **Step 4:** Commit any touch-ups (if needed).

---

## Self-Review

**Spec coverage:** §6 keywords localized for all remaining pages; answer-first (AEO) extended site-wide; homepage keyword hygiene + DPF/oil removal (constraint alignment) + inLanguage. FAQ was already rich on these 6 pages (verified: 6–7 Q/lang) so no forced additions. Homepage hero H1 is already SEO-strong (`<h1 class="sr-only">` includes "Autoservis Bratislava …") — intentionally NOT redesigned.

**Placeholder scan:** Content tasks specify structure + keyword targets + per-language intent; the implementer writes native copy (reviewed by a language-capable reviewer). No TBDs.

**Type/consistency:** `answer?` optional field (already rendered by Landing); `landingSeo[key].keywords` shape unchanged (values translated); `seo.keywords` i18n key added to all 4 JSONs and consumed via `$t`; `bcp47`/`autoRepairSchema` reused.

**Deferred (later):** Phase 2 technical polish (<Seo> component, Twitter/OG image, Organization/aggregateRating, GSC), Phase 5 blog. The Phase-1/3+4 deferred minors remain tracked in their ledgers.
