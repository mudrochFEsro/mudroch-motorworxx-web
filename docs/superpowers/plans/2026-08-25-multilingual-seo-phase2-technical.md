# Multilingual SEO – Phase 2: technical polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Finish the technical SEO layer — entity `sameAs`, Organization/WebSite structured data, Twitter Cards, and a real 1200×630 OG image — so links look right when shared and the business entity is strong for Google & AI.

**Architecture:** Populate `SAMEAS` in `business.ts` (feeds AutoRepair + a new Organization schema); add `organizationSchema()` + `webSiteSchema()` builders rendered site-wide via `<Home>`; generate a branded OG PNG with a one-off `sharp` script; introduce a small `<SocialMeta>` component that renders OG + Twitter Cards (DRY) and wire it into `<Home>` and `<Landing>`.

**Tech Stack:** SvelteKit 2, Svelte 5 runes, adapter-static, TypeScript, Vitest, pnpm. `sharp` (dev-only, for image gen — same tool `scripts/gen-favicons.mjs` uses).

**Spec:** `docs/seo/2026-08-25-multilingual-seo-geo-aeo-design.md` (§4.1, §4.4, §4.5)

## Global Constraints

- Decisions (from user): OG image = generate a branded PNG from the logo; aggregateRating = SKIP (not crawlable / self-serving risk); GSC verification meta = DO NOT ADD (user has no string yet).
- `sameAs` URLs (cleaned): `https://www.instagram.com/mudrochmotorworxx`, `https://www.facebook.com/people/Mudrochmotorworxx/61566487743858/`, `https://www.google.com/search?kgmid=/g/11zg1cxrfh`.
- Do NOT regress Phase 1/3/4: reciprocal hreflang + per-locale canonical + inLanguage/speakable + answer-first must stay intact; SK URLs unchanged; 39 tests stay green.
- "mobilný" not in `<title>`/`<h1>`. Single source of NAP/GPS stays `business.ts`.
- pnpm. Preview with `npx serve build`.

---

### Task 1: sameAs + Organization/WebSite structured data

**Files:**
- Modify: `src/lib/seo/business.ts`
- Modify: `src/lib/seo/business.test.ts`
- Modify: `src/lib/components/Home.svelte` (render the two new schemas)
- Reference: existing `SAMEAS`, `autoRepairSchema` (already spreads `sameAs` when SAMEAS non-empty), `bcp47`, `BUSINESS`, `SITE_URL`, `jsonLd`

**Interfaces:**
- Produces:
  - `SAMEAS` populated with the 3 URLs (const array).
  - `organizationSchema()` → `@type: Organization`, `@id: ${SITE_URL}/#organization`, name, url, `logo` (absolute PNG — use `${SITE_URL}/favicon-512.png`), `sameAs: SAMEAS`, `telephone`, `address` (reuse AutoRepair address shape).
  - `webSiteSchema(lang: Lang)` → `@type: WebSite`, `@id: ${SITE_URL}/#website`, url, name, `inLanguage: bcp47(lang)`, `publisher: { '@id': ${SITE_URL}/#organization }`.

- [ ] **Step 1: Write failing tests** (append to business.test.ts)

```ts
import { organizationSchema, webSiteSchema, SAMEAS } from './business';

describe('organization + website schema', () => {
	it('SAMEAS has the 3 profile URLs', () => {
		expect(SAMEAS).toContain('https://www.instagram.com/mudrochmotorworxx');
		expect(SAMEAS).toContain('https://www.facebook.com/people/Mudrochmotorworxx/61566487743858/');
		expect(SAMEAS.some((u) => u.includes('kgmid=/g/11zg1cxrfh'))).toBe(true);
	});
	it('organizationSchema exposes sameAs + logo + @id', () => {
		const o = organizationSchema() as any;
		expect(o['@type']).toBe('Organization');
		expect(o['@id']).toContain('#organization');
		expect(Array.isArray(o.sameAs) && o.sameAs.length >= 3).toBe(true);
		expect(typeof o.logo).toBe('string');
	});
	it('webSiteSchema carries inLanguage + publisher ref', () => {
		const w = webSiteSchema('de') as any;
		expect(w['@type']).toBe('WebSite');
		expect(w.inLanguage).toBe('de-DE');
		expect(w.publisher['@id']).toContain('#organization');
	});
});
```

- [ ] **Step 2: Run → fail.** `pnpm vitest run src/lib/seo/business.test.ts` (FAIL: not exported / SAMEAS empty).

- [ ] **Step 3: Implement in business.ts** — set `SAMEAS` to the 3 URLs; add the two builders (reuse `BUSINESS`/`SITE_URL`/`bcp47`). Because `autoRepairSchema()` already spreads `sameAs` when SAMEAS is non-empty, AutoRepair now gains sameAs automatically.

- [ ] **Step 4: Run → pass.** `pnpm vitest run` (39 + 3 new green).

- [ ] **Step 5: Render on Home** — in `Home.svelte`, add `organizationSchema()` and `webSiteSchema($currentLang)` to the `jsonLd(...)` call (alongside the existing AutoRepair+OfferCatalog `structuredData`). Build: `pnpm build`; grep `build/index.html` for `"@type":"Organization"`, `"@type":"WebSite"`, and the 3 sameAs URLs; grep `build/de.html` for `"inLanguage":"de-DE"` on WebSite.

- [ ] **Step 6: Commit** — `git add src/lib/seo/business.ts src/lib/seo/business.test.ts src/lib/components/Home.svelte`; `feat(seo): populate sameAs + Organization/WebSite structured data`.

---

### Task 2: Generate a branded 1200×630 OG image

**Files:**
- Create: `scripts/gen-og.mjs`
- Modify: `package.json` (add `sharp` to devDependencies via install)
- Create: `static/og-image.png` (generated output, committed)
- Reference: `scripts/gen-favicons.mjs` (sharp usage pattern), `static/logo_2.svg` (brand logo), `src/lib/styles/variables.css` (brand colors — read the actual hex values)

**Interfaces:**
- Produces: `static/og-image.png`, 1200×630, brand-colored background with the logo + "MUDROCH MOTORWORXX" and a tagline "Autoservis Bratislava — Podunajské Biskupice".

**Context:** This is a dev-only, run-once generator (like gen-favicons). Install sharp as a dev dependency, write the script, run it, commit the PNG.

- [ ] **Step 1: Install sharp** — `pnpm add -D sharp` (this is the tool gen-favicons documents).

- [ ] **Step 2: Read brand colors** — open `src/lib/styles/variables.css`, note the real hex for the dark background and the red accent (e.g. `--color-black`/`--color-gray`/`--color-red-cta`). Use those exact values in the script.

- [ ] **Step 3: Write `scripts/gen-og.mjs`** — compose a 1200×630 PNG:
  - a background `<svg>` (1200×630) filled with the brand dark color, a red accent bar/shape, the text "MUDROCH MOTORWORXX" (large, Oswald-like bold; fall back to a system sans in the SVG since fonts aren't embedded) and a smaller tagline "Autoservis Bratislava — Podunajské Biskupice · Vrakuňa";
  - composite `static/logo_2.svg` (rendered via `sharp(SRC,{density:512}).resize(...)`) onto it;
  - write `static/og-image.png`.
  Use `sharp` to render the background SVG to PNG and `.composite([{ input: logoPng, top, left }])`. Keep the script self-contained and documented (like gen-favicons).

- [ ] **Step 4: Run it** — `node scripts/gen-og.mjs`; confirm `static/og-image.png` exists and is 1200×630 (`sharp('static/og-image.png').metadata()` or `file`/`identify` if available; else check byte size > 0 and dimensions via a tiny node one-liner).

- [ ] **Step 5: Commit** — `git add scripts/gen-og.mjs static/og-image.png package.json pnpm-lock.yaml`; `chore(og): generate branded 1200x630 OG image`.

---

### Task 3: `<SocialMeta>` component — OG + Twitter Cards (DRY)

**Files:**
- Create: `src/lib/components/SocialMeta.svelte`
- Modify: `src/lib/components/Home.svelte` (use SocialMeta; drop duplicated OG lines)
- Modify: `src/lib/components/Landing.svelte` (use SocialMeta; drop duplicated OG lines, replace SVG og:image)
- Reference: existing OG blocks in Home.svelte and Landing.svelte; `SITE_URL`

**Interfaces:**
- Consumes: props `{ title: string; description: string; url: string; type?: string }`.
- Produces: renders inside `<svelte:head>` (via a snippet or as head content) the Open Graph tags (`og:type`, `og:title`, `og:description`, `og:url`, `og:site_name`, `og:image` → `${SITE_URL}/og-image.png` (+ `og:image:width` 1200, `og:image:height` 630), `og:locale` from current lang + 4 `og:locale:alternate`) AND Twitter Cards (`twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`). It imports `currentLang` for og:locale.

**Context:** Svelte components can render into `<svelte:head>` when the child component's own markup is inside a `<svelte:head>`. Implement SocialMeta so its template is a `<svelte:head>…</svelte:head>` block; Svelte hoists nested head content. Home/Landing then place `<SocialMeta title=… description=… url=… />` inside their existing `<svelte:head>` OR as a sibling — verify the built HTML actually contains the tags in `<head>` (Step 4).

- [ ] **Step 1: Create SocialMeta.svelte** with a `<svelte:head>` containing the OG + Twitter tags, computing `og:locale` from `$currentLang` (sk_SK/en_GB/de_DE/hr_HR) and listing the 4 `og:locale:alternate`. `og:image`/`twitter:image` = `${SITE_URL}/og-image.png`.

- [ ] **Step 2: Wire into Landing.svelte** — remove the existing inline `og:type/og:title/og:description/og:url/og:locale/og:site_name/og:image` lines and render `<SocialMeta title={c.metaTitle} description={c.metaDescription} url={pageUrl} />` instead. Keep canonical, hreflang, geo, robots, JSON-LD untouched.

- [ ] **Step 3: Wire into Home.svelte** — remove its duplicated OG lines and render `<SocialMeta title={`${$t('seo.title')} | MUDROCH MOTORWORXX`} description={$t('seo.description')} url={`${SITE_URL}${urlFor('home', $currentLang)}`} />`. Keep canonical, hreflang, geo, keywords, JSON-LD untouched.

- [ ] **Step 4: Build + verify** — `pnpm vitest run` (39 green); `pnpm build`; grep `build/index.html` AND `build/en/brake-replacement-bratislava/index.html` for: `twitter:card` = summary_large_image, `og:image` = `.../og-image.png`, `og:image:width` 1200, correct `og:locale` per page, and confirm canonical + 5 hreflang links are STILL present (no regression). Report evidence.

- [ ] **Step 5: Commit** — `git add src/lib/components/SocialMeta.svelte src/lib/components/Home.svelte src/lib/components/Landing.svelte`; `feat(seo): SocialMeta component with OG + Twitter Cards + real OG image`.

---

### Task 4: Small polish (deferred minors)

**Files:**
- Modify: `src/lib/styles/landing.css` (`.landing-answer` accent color)
- Modify: `src/lib/components/Landing.svelte` (gate speakable selector)

**Interfaces:**
- Produces: `.landing-answer` uses `var(--color-red-cta)` (the semantic accent) instead of `var(--color-red)`; `webPageSchema`'s `speakableSelectors` only includes `.landing-answer` when `c.answer` exists (otherwise just `.landing-lede`), so the selector never points at a missing element.

- [ ] **Step 1:** In `landing.css`, change the `.landing-answer` `border-left`/accent from `var(--color-red)` to `var(--color-red-cta)` (verify both vars exist in variables.css; if `--color-red-cta` is the accent used elsewhere for CTAs, use it).

- [ ] **Step 2:** In `Landing.svelte`, change the `webPageSchema` call so `speakableSelectors` is `c.answer ? ['.landing-answer', '.landing-lede'] : ['.landing-lede']` (make it a `$derived` if needed for reactivity).

- [ ] **Step 3:** `pnpm vitest run` (39) + `pnpm build`; grep a page WITH answer (brzdy) → speakable has `.landing-answer`; (all landing pages currently have answers after Phase 4b, so also confirm the ternary compiles). Report.

- [ ] **Step 4: Commit** — `style(landing): use --color-red-cta accent; gate speakable selector on answer`.

---

### Task 5: Verification gate

- [ ] **Step 1:** `pnpm vitest run` — all green.
- [ ] **Step 2:** `pnpm build` — succeeds; `static/og-image.png` present in `build/og-image.png`.
- [ ] **Step 3:** Spot-check `build/index.html`, a landing page, and a `/de` page: Organization + WebSite JSON-LD on home; AutoRepair now has `sameAs` (3 URLs); Twitter Cards + `og:image` (og-image.png, 1200×630) on all; canonical + reciprocal hreflang + inLanguage/speakable + answer-first STILL intact (no regression). No GSC meta, no aggregateRating, no "mobil*" in titles.
- [ ] **Step 4:** Commit any touch-ups.

---

## Self-Review

**Spec coverage:** §4.4 Organization/WebSite + sameAs (Task 1); §4.5 real OG image + Twitter cards (Tasks 2,3); §4.1 head consolidation — partial: a focused `<SocialMeta>` DRYs the social tags (the delicate hreflang/canonical/JSON-LD deliberately stay in Home/Landing to avoid regression, rather than a full `<Seo>` rewrite). aggregateRating + GSC intentionally omitted per user. Deferred Phase-1/3 minors (color var, speakable gating) cleaned in Task 4. Remaining deferred (not in this plan): typed `LandingContent` interface, LanguageSwitcher aria-label i18n — low value, left for later.

**Placeholder scan:** Tasks 1,3,4 carry concrete code/interfaces. Task 2 (image gen) is inherently a script-authoring task; it specifies dimensions, inputs, brand-color source, and composite steps — the exact SVG layout is the implementer's craft, verified by output dimensions.

**Type/consistency:** `SAMEAS`, `organizationSchema`, `webSiteSchema(lang)`, `bcp47`, `SocialMeta` props (title/description/url/type), and `/og-image.png` are named identically across tasks. `webPageSchema` speakable-gating matches its Phase-3 signature.
