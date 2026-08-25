# Multilingual SEO – Phase 3+4 (core): AEO plumbing + rozvody/brzdy content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the site maximally discoverable and quotable by AI answer engines and search, and fully maximize the two priority pages (timing belt = rozvody, brakes = brzdy) across all 4 languages.

**Architecture:** Builds on Phase 1 (per-language prerendered URLs, shared `<Landing>`/`<Home>`, register `pages.ts`, `landingSeo.ts`). Adds: AI-crawler-friendly `robots.txt`, a generated `/llms.txt`, per-locale `inLanguage` + `speakable` structured data, and answer-first + expanded-FAQ + keyword-rich content for rozvody & brzdy in sk/en/de/hr.

**Tech Stack:** SvelteKit 2, Svelte 5 runes, adapter-static, TypeScript, Vitest, pnpm. Hosting: Vercel (`cleanUrls: true`).

**Spec:** `docs/seo/2026-08-25-multilingual-seo-geo-aeo-design.md` (§5 AEO, §6 keywords)

## Global Constraints

- Languages: `sk` (root), `en`, `de`, `hr`. Content lives per-language in each route's `content.ts`.
- **Never invent prices.** For price questions (answer-first / FAQ), answer that price depends on the vehicle model and parts, and direct to a phone call for an exact quote (`BUSINESS.phoneDisplay` / `tel:BUSINESS.phone`). No numeric € amounts unless already present in existing content.
- **"mobilný"/"mobile"/"mobiler"/"mobilni" only in body copy, NEVER in `<title>` or `<h1>`.**
- **Never** add oil-change or DPF pages/sections; do not emphasize those services.
- Translations must be natural and grammatically correct per language — DE (correct Fälle/umlauts), HR (correct dijakritika), EN (native). No machine-literal calques.
- Single source of NAP/GPS stays `src/lib/seo/business.ts`. Register stays `src/lib/seo/pages.ts`.
- pnpm. Preview a build with `npx serve build` (never `vite preview`). Full prerender + `strict: true` are on.
- Do not regress Phase 1: SK URLs unchanged, reciprocal hreflang + per-locale canonical intact, 31 existing tests stay green.

---

### Task 1: robots.txt — explicitly welcome AI crawlers

**Files:**
- Modify: `static/robots.txt`

**Interfaces:**
- Produces: a robots.txt that keeps `User-agent: * / Allow: /` + the Sitemap line, and adds explicit `Allow: /` blocks for major AI crawlers.

**Context:** `static/robots.txt` is copied verbatim to `build/robots.txt` by adapter-static. Current content is `User-agent: *\nAllow: /\n\nSitemap: https://mudrochmotorworxx.sk/sitemap.xml`.

- [ ] **Step 1: Rewrite the file**

```
# MUDROCH MOTORWORXX — robots.txt
# All crawlers, including AI/LLM agents, are welcome.

User-agent: *
Allow: /

# AI / LLM crawlers (explicit allow)
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Amazonbot
Allow: /
User-agent: Bytespider
Allow: /
User-agent: CCBot
Allow: /
User-agent: cohere-ai
Allow: /
User-agent: Meta-ExternalAgent
Allow: /
User-agent: Diffbot
Allow: /
User-agent: Timpibot
Allow: /

Sitemap: https://mudrochmotorworxx.sk/sitemap.xml
```

- [ ] **Step 2: Build and verify**

Run: `pnpm build`
Then: `grep -c "Allow: /" build/robots.txt` (expect many) and `grep "GPTBot\|ClaudeBot\|PerplexityBot\|Google-Extended\|Sitemap" build/robots.txt`
Expected: all present; Sitemap line intact.

- [ ] **Step 3: Commit**

```bash
git add static/robots.txt
git commit -m "feat(aeo): robots.txt explicitly allows AI/LLM crawlers"
```

---

### Task 2: `/llms.txt` — machine-readable business summary for LLMs

**Files:**
- Create: `src/lib/seo/llms.ts`
- Create: `src/lib/seo/llms.test.ts`
- Create: `src/routes/llms.txt/+server.ts`
- Reference: `src/lib/seo/business.ts` (BUSINESS, SITE_URL), `src/lib/seo/pages.ts` (PAGES, urlFor), `src/lib/seo/landingSeo.ts`

**Interfaces:**
- Produces: `buildLlmsTxt(): string` — a Markdown document (the `/llms.txt` standard) summarizing the business (name, what it does, NAP, hours, phone), listing every service page with its SK/EN/DE/HR URLs, and linking the sitemap.
- `src/routes/llms.txt/+server.ts`: `export const prerender = true;` and `GET()` returning `buildLlmsTxt()` with `Content-Type: text/plain; charset=utf-8`.

- [ ] **Step 1: Write the failing test**

```ts
// src/lib/seo/llms.test.ts
import { describe, it, expect } from 'vitest';
import { buildLlmsTxt } from './llms';
import { BUSINESS, SITE_URL } from './business';
import { PAGES, urlFor } from './pages';

describe('buildLlmsTxt', () => {
	const txt = buildLlmsTxt();
	it('starts with an H1 business title', () => {
		expect(txt.startsWith('# MUDROCH MOTORWORXX')).toBe(true);
	});
	it('includes NAP + phone + hours', () => {
		expect(txt).toContain(BUSINESS.street);
		expect(txt).toContain(BUSINESS.city);
		expect(txt).toContain(BUSINESS.phoneDisplay);
		expect(txt).toContain(BUSINESS.opens);
	});
	it('lists every service page with all 4 language URLs', () => {
		for (const p of PAGES) {
			for (const lang of ['sk', 'en', 'de', 'hr'] as const) {
				expect(txt).toContain(`${SITE_URL}${urlFor(p.key, lang)}`);
			}
		}
	});
	it('links the sitemap', () => {
		expect(txt).toContain(`${SITE_URL}/sitemap.xml`);
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run src/lib/seo/llms.test.ts`
Expected: FAIL — cannot import `./llms`.

- [ ] **Step 3: Implement**

```ts
// src/lib/seo/llms.ts
import { BUSINESS, SITE_URL } from './business';
import { PAGES, urlFor, LANGS } from './pages';

/**
 * Generates the /llms.txt document (Markdown) — a concise, structured summary
 * for LLM/AI agents: who we are, contact/hours, and every service page in all
 * 4 languages. One source of truth (business.ts + pages.ts).
 */
export function buildLlmsTxt(): string {
	const lines: string[] = [];
	lines.push(`# MUDROCH MOTORWORXX`);
	lines.push('');
	lines.push(
		`> Autoservis (car repair shop) in Bratislava – Podunajské Biskupice, Slovakia. ` +
			`Specialists in timing belt replacement and brakes; full service for all car makes, ` +
			`computer diagnostics, suspension/shock absorbers, exhaust repair, and MOT/STK preparation. ` +
			`On-site and mobile service across Bratislava.`
	);
	lines.push('');
	lines.push(`## Contact`);
	lines.push(`- Name: ${BUSINESS.name}`);
	lines.push(`- Address: ${BUSINESS.street}, ${BUSINESS.district}, ${BUSINESS.city} ${BUSINESS.postalCode}, Slovakia`);
	lines.push(`- Phone: ${BUSINESS.phoneDisplay} (tel:${BUSINESS.phone})`);
	lines.push(`- Hours: Mon–Fri ${BUSINESS.opens}–${BUSINESS.closes}`);
	lines.push(`- Areas served: Podunajské Biskupice, Vrakuňa, Ružinov, Nivy, Prievoz, all of Bratislava`);
	lines.push('');
	lines.push(`## Services (pages in Slovak / English / German / Croatian)`);
	for (const p of PAGES) {
		lines.push(`### ${p.label.en}`);
		for (const lang of LANGS) {
			lines.push(`- ${lang}: ${SITE_URL}${urlFor(p.key, lang)}`);
		}
	}
	lines.push('');
	lines.push(`## More`);
	lines.push(`- Homepage: ${SITE_URL}/`);
	lines.push(`- Sitemap: ${SITE_URL}/sitemap.xml`);
	lines.push('');
	return lines.join('\n');
}
```

```ts
// src/routes/llms.txt/+server.ts
import { buildLlmsTxt } from '$lib/seo/llms';

export const prerender = true;

export function GET() {
	return new Response(buildLlmsTxt(), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm vitest run src/lib/seo/llms.test.ts`
Expected: PASS.

- [ ] **Step 5: Build + verify endpoint prerenders**

Run: `pnpm build` then `test -f build/llms.txt && head -20 build/llms.txt`
Expected: `build/llms.txt` exists with the business summary + service URLs.

- [ ] **Step 6: Commit**

```bash
git add src/lib/seo/llms.ts src/lib/seo/llms.test.ts "src/routes/llms.txt"
git commit -m "feat(aeo): add generated /llms.txt for AI agents"
```

---

### Task 3: Per-locale `inLanguage` + `speakable` structured data

**Files:**
- Modify: `src/lib/seo/business.ts` (schema builders)
- Modify: `src/lib/seo/business.test.ts` (create if absent)
- Modify: `src/lib/components/Landing.svelte` (pass lang; add WebPage+speakable schema)
- Reference: `src/lib/i18n` (Lang)

**Interfaces:**
- Produces:
  - `bcp47(lang: Lang): string` — `sk→'sk-SK'`, `en→'en'`, `de→'de-DE'`, `hr→'hr-HR'`.
  - `serviceSchema(opts)` gains `lang: Lang` → adds `inLanguage: bcp47(lang)`.
  - `faqSchema(items, lang: Lang)` → adds `inLanguage: bcp47(lang)`.
  - `breadcrumbSchema(items)` unchanged (breadcrumb needs no inLanguage).
  - `webPageSchema({url, name, lang, speakableSelectors})` — new: `@type: WebPage`, `inLanguage`, `speakable` (`SpeakableSpecification` with `cssSelector`).

**Context:** `serviceSchema`/`faqSchema` currently take no lang. Landing builds them with the current locale's content; add `$currentLang`. `speakable` targets the answer-first block + lede so AI/voice can quote the direct answer.

- [ ] **Step 1: Write the failing test**

```ts
// src/lib/seo/business.test.ts
import { describe, it, expect } from 'vitest';
import { bcp47, serviceSchema, faqSchema, webPageSchema } from './business';

describe('locale-aware schemas', () => {
	it('bcp47 maps locales', () => {
		expect(bcp47('sk')).toBe('sk-SK');
		expect(bcp47('en')).toBe('en');
		expect(bcp47('de')).toBe('de-DE');
		expect(bcp47('hr')).toBe('hr-HR');
	});
	it('serviceSchema carries inLanguage', () => {
		const s = serviceSchema({ name: 'x', serviceType: 'y', url: 'https://z', description: 'd', lang: 'de' }) as any;
		expect(s.inLanguage).toBe('de-DE');
	});
	it('faqSchema carries inLanguage', () => {
		const s = faqSchema([{ q: 'a', a: 'b' }], 'hr') as any;
		expect(s.inLanguage).toBe('hr-HR');
		expect(s.mainEntity[0].name).toBe('a');
	});
	it('webPageSchema has speakable cssSelector + inLanguage', () => {
		const s = webPageSchema({ url: 'https://z', name: 'n', lang: 'en', speakableSelectors: ['.landing-answer'] }) as any;
		expect(s['@type']).toBe('WebPage');
		expect(s.inLanguage).toBe('en');
		expect(s.speakable['@type']).toBe('SpeakableSpecification');
		expect(s.speakable.cssSelector).toContain('.landing-answer');
	});
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `pnpm vitest run src/lib/seo/business.test.ts`
Expected: FAIL — `bcp47`/`webPageSchema` not exported; `serviceSchema`/`faqSchema` lack inLanguage.

- [ ] **Step 3: Implement in business.ts**

Add near the top:
```ts
import type { Lang } from '$lib/i18n';

export function bcp47(lang: Lang): string {
	return lang === 'sk' ? 'sk-SK' : lang === 'de' ? 'de-DE' : lang === 'hr' ? 'hr-HR' : 'en';
}
```
Extend `serviceSchema` signature to `opts: { name; serviceType; url; description; lang: Lang }` and add `inLanguage: bcp47(opts.lang)` to the returned object.
Extend `faqSchema` to `(items, lang: Lang)` and add `inLanguage: bcp47(lang)` to the returned object.
Add:
```ts
export function webPageSchema(opts: { url: string; name: string; lang: Lang; speakableSelectors: string[] }) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': opts.url,
		url: opts.url,
		name: opts.name,
		inLanguage: bcp47(opts.lang),
		speakable: {
			'@type': 'SpeakableSpecification',
			cssSelector: opts.speakableSelectors
		}
	};
}
```

- [ ] **Step 4: Update Landing.svelte to pass lang + emit webPageSchema**

In `Landing.svelte`'s `schemas` `$derived`, pass `lang: $currentLang` to `serviceSchema`, `$currentLang` to `faqSchema`, and add `webPageSchema({ url: pageUrl, name: c.metaTitle, lang: $currentLang, speakableSelectors: ['.landing-answer', '.landing-lede'] })` to the `jsonLd(...)` call.

- [ ] **Step 5: Run tests + build**

Run: `pnpm vitest run` (existing 31 + new business tests green) and `pnpm build`.
Then grep `build/en/brake-replacement-bratislava/index.html` for `"inLanguage":"en"` and `"SpeakableSpecification"`; grep `build/de/bremsen-wechseln-bratislava/index.html` for `"inLanguage":"de-DE"`.
Expected: locale-correct inLanguage + speakable present.

- [ ] **Step 6: Commit**

```bash
git add src/lib/seo/business.ts src/lib/seo/business.test.ts src/lib/components/Landing.svelte
git commit -m "feat(aeo): per-locale inLanguage + speakable structured data"
```

---

### Task 4: Answer-first block rendering in `<Landing>`

**Files:**
- Modify: `src/lib/components/Landing.svelte`
- Modify: `src/lib/styles/landing.css`
- Reference: existing landing hero markup

**Interfaces:**
- Consumes: an optional `answer` field on landing content: `content[lang].answer?: string` (a 1–2 sentence direct answer to the page's primary question).
- Produces: when `c.answer` is present, Landing renders `<p class="landing-answer">{@html c.answer}</p>` immediately under the hero lede. The `.landing-answer` class is the speakable target wired in Task 3. Pages without `answer` render unchanged (backward compatible).

**Context:** The answer-first block is what AI answer engines and featured snippets quote. It must be the concise, direct answer, visually distinct but not intrusive.

- [ ] **Step 1: Render the block**

In `Landing.svelte`, in the hero `<header class="landing-hero">`, right AFTER the `<p class="landing-lede">{@html c.heroLede}</p>` line, add:
```svelte
{#if c.answer}
	<p class="landing-answer">{@html c.answer}</p>
{/if}
```

- [ ] **Step 2: Style it**

Add to `src/lib/styles/landing.css`:
```css
.landing-answer {
	margin-top: var(--space-md);
	padding: 1rem 1.25rem;
	border-left: 3px solid var(--color-red-cta);
	background: rgba(255, 255, 255, 0.04);
	border-radius: var(--radius-md);
	font-size: 1.05rem;
	line-height: 1.6;
	color: rgba(255, 255, 255, 0.9);
}
.landing-answer :global(strong) {
	color: var(--color-white);
}
```
(If those CSS variables differ in the repo, match the existing landing.css variables.)

- [ ] **Step 3: Build verify (no answer content yet → block absent)**

Run: `pnpm vitest run` (31 green) and `pnpm build`.
Expected: build succeeds; since no content has `answer` yet, no `.landing-answer` appears — confirm no errors. (Content added in Tasks 5 & 6.)

- [ ] **Step 4: Commit**

```bash
git add src/lib/components/Landing.svelte src/lib/styles/landing.css
git commit -m "feat(aeo): render optional answer-first block on landing pages"
```

---

### Task 5: BRZDY content maximization (sk/en/de/hr)

**Files:**
- Modify: `src/routes/vymena-brzd-bratislava/content.ts`
- Modify: `src/lib/seo/landingSeo.ts` (brzdy keywords — verify/extend only if needed)
- Reference: `src/lib/components/Landing.svelte` (content shape), `src/lib/seo/business.ts` (BUSINESS.phoneDisplay for price answers)

**Interfaces:**
- Consumes: the content object shape already used by `<Landing>`.
- Produces: for EACH of sk/en/de/hr, the brzdy content gains an `answer` field and an expanded `faq` array, plus keyword-enriched prose. No schema wiring changes (Landing already emits FAQ/Service from content).

**Context — this is a content task; write natural, correct copy per language.** Follow the spec §6.1 (brakes) keyword bank and §6.3 question phrases. Keep the existing sections; ADD/ENRICH as below. NO invented prices.

- [ ] **Step 1: Add `answer` (all 4 langs)**
A 1–2 sentence direct answer to "brake replacement in Bratislava", naturally including the primary keyword. Examples of INTENT (write real localized copy, not these verbatim):
  - sk: „Brzdy v Bratislave vymeníme spravidla do jedného dňa – platničky, kotúče aj brzdovú kvapalinu, s kontrolou celého brzdového systému. Zavolajte na <phone> a dohodneme termín."
  - en/de/hr: equivalent, natural, native-quality.
Use `BUSINESS.phoneDisplay` where a phone number appears (import or hardcode the display string consistently with the rest of content.ts).

- [ ] **Step 2: Expand `faq` (all 4 langs)** — add these question-intents (localized) on top of existing, each with a helpful 2–4 sentence answer; for the price one, direct to contact (NO number):
  1. „Ako spoznám opotrebované brzdy?" / "How do I know my brakes are worn?" / "Woran erkenne ich verschlissene Bremsen?" / "Kako prepoznati istrošene kočnice?"
  2. „Prečo mi škrípu/vŕzgajú brzdy?" (+ EN/DE/HR)
  3. „Kedy treba meniť brzdové kotúče?" (+ EN/DE/HR)
  4. „Ako často meniť brzdovú kvapalinu?" (+ EN/DE/HR)
  5. „Koľko stojí výmena bŕzd?" (+ EN/DE/HR) → answer: depends on model & parts, call <phone> for an exact quote.

- [ ] **Step 3: Enrich prose** — weave brakes keywords (spec §6.1) naturally into `whenProse`/`symptomsProse`/`includesProse` where they fit, per language. Do not keyword-stuff; keep it readable. "mobilný/mobile" only in body if natural, never in metaTitle/heroH1.

- [ ] **Step 4: Verify keywords** — ensure `landingSeo.brzdy.keywords` covers the main brakes terms per language (it already has a strong set from Phase 1 — extend only if an obvious high-value term is missing).

- [ ] **Step 5: Build + verify**

Run: `pnpm vitest run` (31 green) and `pnpm build`.
Then grep the built pages:
- `build/vymena-brzd-bratislava.html`: contains `landing-answer` block (SK) and the new FAQ questions in SK; FAQPage JSON-LD includes the new questions.
- `build/de/bremsen-wechseln-bratislava.html`: answer + FAQ in German.
Report evidence. Confirm no `€`/price numbers were invented and "mobil*" is absent from `<title>`/`<h1>`.

- [ ] **Step 6: Commit**

```bash
git add src/routes/vymena-brzd-bratislava/content.ts src/lib/seo/landingSeo.ts
git commit -m "feat(content): brzdy answer-first + expanded FAQ + keyword-rich copy (4 langs)"
```

---

### Task 6: ROZVODY content maximization (sk/en/de/hr)

**Files:**
- Modify: `src/routes/vymena-rozvodov-bratislava/content.ts`
- Modify: `src/lib/seo/landingSeo.ts` (rozvody keywords — verify/extend only if needed)
- Reference: same as Task 5

**Interfaces:** Same shape as Task 5, for the timing-belt page.

**Context — content task; natural correct copy per language.** Follow spec §6.2 (timing belt) keywords and §6.3 questions. NO invented prices.

- [ ] **Step 1: Add `answer` (all 4 langs)** — direct answer to "timing belt replacement in Bratislava" (our specialty). Include primary keyword naturally + phone for quote. Native-quality per language.

- [ ] **Step 2: Expand `faq` (all 4 langs)** — add localized:
  1. „Ako často treba meniť rozvody / rozvodový remeň?" (interval) (+ EN/DE/HR)
  2. „Rozvodový remeň alebo reťaz – aký je rozdiel?" (+ EN/DE/HR)
  3. „Čo hrozí pri pretrhnutí rozvodov?" (+ EN/DE/HR)
  4. „Treba pri rozvodoch meniť aj vodnú pumpu?" (+ EN/DE/HR)
  5. „Koľko stojí výmena rozvodov?" (+ EN/DE/HR) → direct to contact, NO number.

- [ ] **Step 3: Enrich prose** — weave timing-belt keywords (spec §6.2) naturally into the prose sections per language.

- [ ] **Step 4: Verify keywords** — ensure `landingSeo.rozvody.keywords` covers the main terms per language (strong set exists from Phase 1; extend only if needed).

- [ ] **Step 5: Build + verify**

Run: `pnpm vitest run` (31 green) and `pnpm build`.
Grep `build/vymena-rozvodov-bratislava.html` (SK) and `build/hr/zamjena-zupcastog-remena-bratislava.html` (HR) for the answer block + new FAQ; confirm FAQPage JSON-LD includes them; confirm no invented prices and no "mobil*" in title/h1.
Report evidence.

- [ ] **Step 6: Commit**

```bash
git add src/routes/vymena-rozvodov-bratislava/content.ts src/lib/seo/landingSeo.ts
git commit -m "feat(content): rozvody answer-first + expanded FAQ + keyword-rich copy (4 langs)"
```

---

### Task 7: Verification gate

**Files:** none (verification only)

- [ ] **Step 1: Full suite**

Run: `pnpm vitest run`
Expected: all tests pass (31 + llms + business).

- [ ] **Step 2: Full build + AEO artifacts**

Run: `pnpm build`
Verify: `build/robots.txt` (AI crawlers), `build/llms.txt` (service URLs), `build/sitemap.xml` (36 URLs) all present.

- [ ] **Step 3: Spot-check localized AEO**

Run: `npx serve build` OR grep the built HTML:
- brzdy + rozvody pages in all 4 langs contain `.landing-answer`, expanded FAQ, and JSON-LD with `inLanguage` (locale-correct) + `SpeakableSpecification`.
- No invented prices; no "mobil*" in any `<title>`/`<h1>`.

- [ ] **Step 4: Commit any final touch-ups** (only if needed)

---

## Self-Review

**Spec coverage (Phase 3+4 core scope):**
- §5.1 robots AI crawlers → Task 1 ✅
- §5.2 llms.txt → Task 2 ✅
- §5.3 answer-first blocks → Task 4 (render) + Tasks 5/6 (content) ✅
- §5.4 FAQ expansion → Tasks 5/6 ✅
- §4.4/§5 inLanguage + speakable → Task 3 ✅
- §6.1/§6.2/§6.3 keywords + questions (rozvody+brzdy, 4 langs) → Tasks 5/6 ✅
- Deferred to Phase 4b (explicitly out of scope): the other 4 service pages' localized keywords/answer/FAQ, homepage H1/body + OfferCatalog localization (+ DPF/oil cleanup), the Phase-1 deferred minors (typed content interface, LanguageSwitcher aria-label i18n).

**Placeholder scan:** Mechanical tasks (1–4) contain full code. Content tasks (5,6) intentionally specify structure + keyword/question targets + constraints rather than verbatim 4-language copy — writing the localized copy IS the implementation, and it must be produced natively-correct by the implementer, then language-reviewed. Example intent strings are labeled as intent, not literal.

**Type consistency:** `bcp47`, `webPageSchema`, `serviceSchema({...,lang})`, `faqSchema(items,lang)`, `buildLlmsTxt`, the optional `content[lang].answer`, and the `.landing-answer` speakable selector are named identically across the tasks that produce and consume them.

**Content-quality note:** Tasks 5 & 6 require native-quality DE/HR/EN copy and must be reviewed by a language-capable reviewer (not just build/grep) — the controller will dispatch reviews that explicitly check grammar, keyword-naturalness, no invented prices, and title/H1 constraints per language.
