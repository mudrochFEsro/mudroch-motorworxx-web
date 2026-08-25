# Multilingual SEO – Phase 6: SEO & code polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. Steps use checkbox (`- [ ]`).

**Goal:** Final polish — richer sitemap, entity graph, image alts, aggregateRating, typed content, a shared `<SeoHead>`, a11y aria-label, and a blog click-to-call — without regressing Phases 1–5.

**Architecture:** Small, mostly independent improvements to existing register/schema/components. TDD for pure logic (sitemap builder, schema); build+grep for components. aggregateRating uses a committed build-time snapshot (safe fallback: omit if absent).

**Tech Stack:** SvelteKit 2, Svelte 5 runes, adapter-static, TypeScript, Vitest, pnpm.

**Spec:** `docs/seo/2026-08-25-multilingual-seo-geo-aeo-design.md`

## Global Constraints
- Do NOT regress Phases 1–5: reciprocal hreflang, per-locale canonical, inLanguage/speakable, answer-first, blog, 50 tests. SK URLs unchanged.
- No invented prices; "mobil*" not in titles/h1.
- aggregateRating: build-time snapshot; if the Featurable fetch fails or snapshot is empty, OMIT aggregateRating entirely (never break the build, never fabricate numbers).
- pnpm. Preview `npx serve build`.

---

### Task 1: Sitemap `<lastmod>` + `xhtml:link` hreflang alternates
**Files:** `src/routes/sitemap.xml/+server.ts`; add `src/routes/sitemap.xml/build.ts` (pure builder) + `src/routes/sitemap.xml/build.test.ts`.
**Interfaces:** `buildSitemap(lastmod: string): string` — for each page, one `<url>` per language with `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`, AND `<xhtml:link rel="alternate" hreflang="..">` for all 4 langs + x-default (reuse `hreflangAlternates`). Root `<urlset>` must declare `xmlns:xhtml`.
- [ ] Write failing test (build.test.ts): output contains `xmlns:xhtml`, a `<lastmod>` per url, and for a sample page the 5 `xhtml:link` alternates with correct hreflang+href. Run → fail.
- [ ] Implement `build.ts` (pure; `lastmod` passed in) + rewrite `+server.ts` to call it with a literal build date `'2026-08-25'` (Date.now unavailable/nondeterministic — use a constant, update per release). Run → pass.
- [ ] `pnpm build`; grep `build/sitemap.xml` for `xmlns:xhtml`, `<lastmod>`, and `xhtml:link ... hreflang="de"` on a page. Report.
- [ ] Commit: `feat(seo): sitemap lastmod + xhtml hreflang alternates`.

### Task 2: Entity link (AutoRepair ↔ Organization) + image alts
**Files:** `src/lib/seo/business.ts` (+test), `src/lib/components/SocialMeta.svelte`.
- [ ] `business.ts`: in `organizationSchema()` add `subOrganization: { '@id': `${SITE_URL}/#autorepair` }`; in `autoRepairSchema()` add `parentOrganization: { '@id': `${SITE_URL}/#organization` }`. Add tests asserting both cross-refs. TDD.
- [ ] `SocialMeta.svelte`: add `<meta property="og:image:alt" content="MUDROCH MOTORWORXX — autoservis Bratislava" />` and `<meta name="twitter:image:alt" content=... />` (same text).
- [ ] `pnpm vitest run` + `pnpm build`; grep home JSON-LD for `parentOrganization`/`subOrganization` and a page for `og:image:alt`. Commit: `feat(seo): link AutoRepair↔Organization entities + image alt text`.

### Task 3: aggregateRating from a build-time Featurable snapshot
**Files:** `scripts/gen-reviews.mjs` (dev/build script), `src/lib/seo/reviews-snapshot.json` (generated, committed), `src/lib/seo/business.ts` (+test).
**Interfaces:** snapshot shape `{ rating: number, count: number }` (or `{}` when unavailable). `autoRepairSchema()` (and/or organizationSchema) spreads `aggregateRating` ONLY when snapshot has `count > 0`: `{ '@type':'AggregateRating', ratingValue, reviewCount, bestRating:5 }`.
- [ ] Write `scripts/gen-reviews.mjs`: fetch `https://api.featurable.com/v2/widgets/408c7ee2-ffb1-4fee-b357-87b1158e5e45`, parse `widget.gbpLocationSummary.rating` + review count (reuse the shape logic from `src/lib/reviews/featurable.ts`), write `{rating,count}` to `src/lib/seo/reviews-snapshot.json`. On any fetch/parse failure, write `{}` and exit 0 (never fail the build). Document usage in the header.
- [ ] Run `node scripts/gen-reviews.mjs`; if network works, snapshot has real numbers; else `{}` — report which.
- [ ] `business.ts`: import the snapshot; add a helper that returns the aggregateRating object or nothing; spread it into `autoRepairSchema()` only when `count > 0`. TDD both branches (with count>0 → has aggregateRating; with `{}` → none) by testing the helper with injected data (make the helper accept the snapshot as a param for testability, and the schema uses the imported snapshot).
- [ ] `pnpm vitest run` + `pnpm build`; if snapshot populated, grep home for `"aggregateRating"`; else confirm it's absent (and report that the user should run the script when online). Commit: `feat(seo): aggregateRating from build-time Featurable snapshot (safe fallback)`.

### Task 4: Typed content interfaces
**Files:** `src/lib/content/landing-types.ts` (new, or reuse an existing landing content type if one exists in a content.ts), the `[lang=lang]/[...slug]/+page.svelte` CONTENT map, `Landing.svelte` props.
- [ ] Define/centralize a `LandingContent` + `LandingContentMap` type (matching the shape used by the landing `content.ts` files). If each content.ts already declares its own local type, extract a shared one and have them import it (optional; minimum: create the shared type).
- [ ] Type the `[lang]` renderer `CONTENT` map as `Record<string, LandingContentMap>` (replace `Record<string, unknown>`) and type `Landing.svelte`'s `content` prop. Same for `articles` map already typed via ArticleContentMap.
- [ ] `pnpm vitest run` + `pnpm build` (tsc must pass; fix any real type mismatch surfaced). Commit: `refactor(types): typed LandingContent across renderer + component`.

### Task 5: Shared `<SeoHead>` component (DRY canonical/hreflang/robots)
**Files:** `src/lib/components/SeoHead.svelte` (new); refactor `Home.svelte`, `Landing.svelte`, `Article.svelte`, `BlogIndex.svelte` to use it. REGRESSION-SENSITIVE.
**Interfaces:** `<SeoHead pageKey title description robots? />` renders (own `<svelte:head>`, invoked as sibling): `<title>`, meta description, robots (default `index, follow, max-image-preview:large, max-snippet:-1`), `<link rel="canonical">` (per-locale via `urlFor(pageKey,$currentLang)`), and the reciprocal hreflang loop via `hreflangAlternates(pageKey)`. Keep GEO meta + JSON-LD + `<SocialMeta>` where they are (SeoHead handles only title/description/robots/canonical/hreflang).
- [ ] Create SeoHead; replace the duplicated title/description/robots/canonical/hreflang blocks in the 4 components with `<SeoHead .../>` (as a sibling, not nested in another `<svelte:head>`). Keep keywords (home/landing) + geo + JSON-LD + SocialMeta intact.
- [ ] `pnpm vitest run` + `pnpm build`; REGRESSION grep on home + a landing + an article + blog index: exactly one `<title>`, one canonical, 5 hreflang, JSON-LD present, no nested `<svelte:head>`. Commit: `refactor(seo): shared SeoHead for canonical/hreflang/robots`.

### Task 6: Localize LanguageSwitcher aria-label + Article hero click-to-call
**Files:** `src/lib/components/LanguageSwitcher.svelte`, `src/lib/i18n/{sk,en,de,hr}.json`, `src/lib/components/Article.svelte`.
- [ ] i18n: add `nav.switchTo` (or similar) — a localized template for "Switch to {language}"/"Prepnúť na {jazyk}"/"Zu {Sprache} wechseln"/"Prebaci na {jezik}". LanguageSwitcher builds the aria-label from `$t` + the language name instead of hardcoded Slovak. Keep the sr-only name.
- [ ] Article.svelte: add a click-to-call button in the hero (mirror Landing's `<a href={`tel:${BUSINESS.phone}`} class="btn btn-primary">{c.callBtn?}&nbsp;<nobr>{BUSINESS.phoneDisplay}</nobr></a>`). Article content may not have a `callBtn` field — use a localized label: add `nav.call`/reuse an existing "Zavolať" i18n key, or a localized string. Keep it in the hero near the breadcrumb/answer.
- [ ] `pnpm vitest run` + `pnpm build`; grep a DE page: switcher aria-label is German; grep an article: hero has a `tel:` button. Commit: `feat(a11y+ux): localized switcher aria-label + article hero click-to-call`.

### Task 7: Verification gate
- [ ] `pnpm vitest run` (all green); `pnpm build` (clean).
- [ ] Spot-check: sitemap has lastmod+xhtml alternates; home JSON-LD has parent/subOrganization (+aggregateRating if snapshot); og/twitter image:alt present; SeoHead output correct on all page types (title/canonical/5 hreflang, no regression); switcher aria-label localized; article hero has click-to-call; phones (from earlier UX fix) still tel:+nobr. No "mobil*" in titles.
- [ ] Commit any touch-ups.

---

## Self-Review
Covers user-requested items 1,2,3,4,6,7,8,9. Item 5 (real photos) needs assets from the user; items 10–12 (analytics, tests) deferred. aggregateRating is guideline-cautious with a safe fallback. SeoHead is the one regression-sensitive task — verified by grep on all 4 page types. Types task may surface pre-existing `unknown`-related tsc issues; fix those that are real, leave unrelated ones noted.
