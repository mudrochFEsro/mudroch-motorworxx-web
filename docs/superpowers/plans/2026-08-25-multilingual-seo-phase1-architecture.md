# Multilingual SEO – Phase 1: Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Serve every page as real, prerendered, per-language URLs (SK at root; `/en`, `/de`, `/hr` with localized slugs) so search engines and AI crawlers index all four languages.

**Architecture:** A central page register (`src/lib/seo/pages.ts`) is the single source of truth for page keys, types, and per-language slugs. SK keeps its existing root URLs (no redirects). A single dynamic route `src/routes/[lang=lang]/[...slug]/` generates all EN/DE/HR pages via `entries()`, resolving `(lang, slug)` → page via the register. The 8 bespoke landing pages are unified into a shared `<Landing>` component driven by `content.ts`, so SK routes and the dynamic route render identically. Language is derived from the URL (not localStorage) so prerendered HTML is truly localized.

**Tech Stack:** SvelteKit 2, Svelte 5 (runes), `@sveltejs/adapter-static`, TypeScript, Vitest, pnpm. Hosting: Vercel (`cleanUrls: true`).

**Spec:** `docs/seo/2026-08-25-multilingual-seo-geo-aeo-design.md`

## Global Constraints

- Languages: `sk` (default, root, no prefix), `en`, `de`, `hr`. Type `Lang` from `src/lib/i18n`.
- SK URLs must NOT change and must NOT redirect (preserve indexed positions).
- Word "mobilný"/"mobile"/"mobiler"/"mobilni" only in body copy, NEVER in `<title>` or H1.
- Never create oil-change or DPF pages.
- Slugs are ASCII only (transliterate diacritics: `č→c`, `ž→z`, `š→s`, `ň→n`, `ß→ss`).
- Single source of NAP/GPS stays `src/lib/seo/business.ts` — do not duplicate.
- Package manager is **pnpm**. Preview builds with `npx serve build` (NOT `vite preview`).
- Full prerender is on (`src/routes/+layout.ts` has `export const prerender = true;`) and `svelte.config.js` uses `strict: true` — every reachable URL must be in `entries()` or crawlable, or the build fails.

---

### Task 1: `lang` param matcher

**Files:**
- Create: `src/params/lang.ts`
- Test: `src/params/lang.test.ts`

**Interfaces:**
- Produces: `match(param: string): boolean` — SvelteKit param matcher; true only for `en|de|hr` (NOT `sk`, since SK lives at root).

- [ ] **Step 1: Write the failing test**

```ts
// src/params/lang.test.ts
import { describe, it, expect } from 'vitest';
import { match } from './lang';

describe('lang param matcher', () => {
	it('matches non-default locales', () => {
		expect(match('en')).toBe(true);
		expect(match('de')).toBe(true);
		expect(match('hr')).toBe(true);
	});

	it('does NOT match sk (SK is at root, no prefix)', () => {
		expect(match('sk')).toBe(false);
	});

	it('rejects anything else', () => {
		expect(match('fr')).toBe(false);
		expect(match('')).toBe(false);
		expect(match('EN')).toBe(false);
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run src/params/lang.test.ts`
Expected: FAIL — cannot import `./lang` (file does not exist).

- [ ] **Step 3: Write minimal implementation**

```ts
// src/params/lang.ts
import type { ParamMatcher } from '@sveltejs/kit';

const PREFIXED_LOCALES = new Set(['en', 'de', 'hr']);

export const match: ParamMatcher = (param) => PREFIXED_LOCALES.has(param);
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm vitest run src/params/lang.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/params/lang.ts src/params/lang.test.ts
git commit -m "feat(i18n): add lang param matcher for en/de/hr routes"
```

---

### Task 2: Page register + URL/slug utilities

**Files:**
- Create: `src/lib/seo/pages.ts`
- Test: `src/lib/seo/pages.test.ts`
- Reference (read, do not delete yet): `src/lib/seo/routes.ts` (existing `LANDING_ROUTES`), `src/lib/i18n/index.ts` (the `Lang` type)

**Interfaces:**
- Produces:
  - `type PageType = 'home' | 'landing' | 'area' | 'article'`
  - `type PageDef = { key: string; type: PageType; slug: Record<Lang, string>; changefreq: 'weekly' | 'monthly'; priority: number; label: Record<Lang, string> }`
  - `const PAGES: PageDef[]`
  - `const HOME: PageDef` (key `'home'`, slug `{ sk:'', en:'', de:'', hr:'' }`, priority 1.0, changefreq 'weekly')
  - `function slugFor(key: string, lang: Lang): string` — throws if key unknown
  - `function urlFor(key: string, lang: Lang): string` — SK → `/${slug}` (or `/` for home); non-SK → `/${lang}/${slug}` (or `/${lang}` for home). No trailing slash except root `/`.
  - `function pageBySlug(lang: Lang, slug: string): PageDef | undefined` — `slug` is the joined path after the lang prefix (e.g. `'brake-replacement-bratislava'`, or `''` for home)
  - `function allPrerenderEntries(): { lang: Lang; slug: string }[]` — every non-SK (lang × page) combo, slug = localized slug (empty string for home)
  - `const LANGS: Lang[]` = `['sk','en','de','hr']`

- [ ] **Step 1: Write the failing test**

```ts
// src/lib/seo/pages.test.ts
import { describe, it, expect } from 'vitest';
import {
	PAGES, HOME, LANGS, slugFor, urlFor, pageBySlug, allPrerenderEntries
} from './pages';

describe('page register', () => {
	it('every page has a slug and label for all 4 languages', () => {
		for (const p of [HOME, ...PAGES]) {
			for (const lang of LANGS) {
				expect(typeof p.slug[lang]).toBe('string');
				expect(typeof p.label[lang]).toBe('string');
			}
		}
	});

	it('slugs are unique per language (no collisions)', () => {
		for (const lang of LANGS) {
			const slugs = [HOME, ...PAGES].map((p) => p.slug[lang]);
			expect(new Set(slugs).size).toBe(slugs.length);
		}
	});

	it('slugs are ASCII, lowercase, hyphenated (no diacritics/spaces)', () => {
		for (const p of PAGES) {
			for (const lang of LANGS) {
				expect(p.slug[lang]).toMatch(/^[a-z0-9-]+$/);
			}
		}
	});

	it('keeps existing SK landing URLs unchanged', () => {
		expect(slugFor('brzdy', 'sk')).toBe('vymena-brzd-bratislava');
		expect(slugFor('rozvody', 'sk')).toBe('vymena-rozvodov-bratislava');
	});

	it('builds correct URLs (SK root vs prefixed)', () => {
		expect(urlFor('home', 'sk')).toBe('/');
		expect(urlFor('home', 'en')).toBe('/en');
		expect(urlFor('brzdy', 'sk')).toBe('/vymena-brzd-bratislava');
		expect(urlFor('brzdy', 'en')).toBe('/en/brake-replacement-bratislava');
	});

	it('round-trips slug → page for non-SK', () => {
		const p = pageBySlug('en', 'brake-replacement-bratislava');
		expect(p?.key).toBe('brzdy');
		expect(pageBySlug('en', 'home')).toBeUndefined();
		expect(pageBySlug('en', '')?.key).toBe('home');
	});

	it('enumerates prerender entries for en/de/hr only (incl. home)', () => {
		const entries = allPrerenderEntries();
		expect(entries.every((e) => e.lang !== 'sk')).toBe(true);
		// 3 non-sk langs × (HOME + PAGES)
		expect(entries.length).toBe(3 * (1 + PAGES.length));
		expect(entries).toContainEqual({ lang: 'en', slug: '' });
		expect(entries).toContainEqual({ lang: 'de', slug: 'bremsen-wechseln-bratislava' });
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run src/lib/seo/pages.test.ts`
Expected: FAIL — cannot import `./pages`.

- [ ] **Step 3: Write minimal implementation**

Use the slug table from the spec §3.1. Copy `label` values from the existing `src/lib/seo/routes.ts` (`LANDING_ROUTES[].label`).

```ts
// src/lib/seo/pages.ts
import type { Lang } from '$lib/i18n';

export type PageType = 'home' | 'landing' | 'area' | 'article';

export type PageDef = {
	key: string;
	type: PageType;
	slug: Record<Lang, string>;
	changefreq: 'weekly' | 'monthly';
	priority: number;
	label: Record<Lang, string>;
};

export const LANGS: Lang[] = ['sk', 'en', 'de', 'hr'];

export const HOME: PageDef = {
	key: 'home',
	type: 'home',
	slug: { sk: '', en: '', de: '', hr: '' },
	changefreq: 'weekly',
	priority: 1.0,
	label: { sk: 'Domov', en: 'Home', de: 'Startseite', hr: 'Početna' }
};

export const PAGES: PageDef[] = [
	{
		key: 'rozvody', type: 'landing', changefreq: 'monthly', priority: 0.9,
		slug: {
			sk: 'vymena-rozvodov-bratislava',
			en: 'timing-belt-replacement-bratislava',
			de: 'zahnriemenwechsel-bratislava',
			hr: 'zamjena-zupcastog-remena-bratislava'
		},
		label: {
			sk: 'Výmena rozvodov', en: 'Timing belt replacement',
			de: 'Zahnriemenwechsel', hr: 'Zamjena zupčastog remena'
		}
	},
	{
		key: 'brzdy', type: 'landing', changefreq: 'monthly', priority: 0.9,
		slug: {
			sk: 'vymena-brzd-bratislava',
			en: 'brake-replacement-bratislava',
			de: 'bremsen-wechseln-bratislava',
			hr: 'zamjena-kocnica-bratislava'
		},
		label: {
			sk: 'Výmena bŕzd', en: 'Brake replacement',
			de: 'Bremsenwechsel', hr: 'Zamjena kočnica'
		}
	},
	{
		key: 'stk', type: 'landing', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'priprava-na-stk-bratislava',
			en: 'mot-inspection-prep-bratislava',
			de: 'tuv-vorbereitung-bratislava',
			hr: 'priprema-tehnicki-pregled-bratislava'
		},
		label: {
			sk: 'Príprava na STK a EK', en: 'MOT / inspection prep',
			de: 'TÜV-Vorbereitung', hr: 'Priprema za tehnički pregled'
		}
	},
	{
		key: 'diagnostika', type: 'landing', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'diagnostika-aut-bratislava',
			en: 'car-diagnostics-bratislava',
			de: 'fahrzeugdiagnose-bratislava',
			hr: 'dijagnostika-automobila-bratislava'
		},
		label: {
			sk: 'Diagnostika áut', en: 'Car diagnostics',
			de: 'Fahrzeugdiagnose', hr: 'Dijagnostika automobila'
		}
	},
	{
		key: 'tlmice', type: 'landing', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'vymena-tlmicov-bratislava',
			en: 'shock-absorbers-bratislava',
			de: 'stossdaempfer-wechseln-bratislava',
			hr: 'zamjena-amortizera-bratislava'
		},
		label: {
			sk: 'Výmena tlmičov a podvozok', en: 'Shock absorbers & suspension',
			de: 'Stoßdämpfer & Fahrwerk', hr: 'Amortizeri i ovjes'
		}
	},
	{
		key: 'vyfuk', type: 'landing', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'oprava-vyfuku-bratislava',
			en: 'exhaust-repair-bratislava',
			de: 'auspuff-reparatur-bratislava',
			hr: 'popravak-ispuha-bratislava'
		},
		label: {
			sk: 'Oprava výfuku', en: 'Exhaust repair',
			de: 'Auspuffreparatur', hr: 'Popravak ispuha'
		}
	},
	{
		key: 'area-pb', type: 'area', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'autoservis-podunajske-biskupice',
			en: 'car-service-podunajske-biskupice',
			de: 'autoservice-podunajske-biskupice',
			hr: 'autoservis-podunajske-biskupice'
		},
		label: {
			sk: 'Autoservis Podunajské Biskupice', en: 'Car service Podunajské Biskupice',
			de: 'Autoservice Podunajské Biskupice', hr: 'Autoservis Podunajské Biskupice'
		}
	},
	{
		key: 'area-vrakuna', type: 'area', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'autoservis-vrakuna',
			en: 'car-service-vrakuna',
			de: 'autoservice-vrakuna',
			hr: 'autoservis-vrakuna'
		},
		label: {
			sk: 'Autoservis Vrakuňa', en: 'Car service Vrakuňa',
			de: 'Autoservice Vrakuňa', hr: 'Autoservis Vrakuňa'
		}
	}
];

const ALL = [HOME, ...PAGES];

export function slugFor(key: string, lang: Lang): string {
	const p = ALL.find((x) => x.key === key);
	if (!p) throw new Error(`Unknown page key: ${key}`);
	return p.slug[lang];
}

export function urlFor(key: string, lang: Lang): string {
	const slug = slugFor(key, lang);
	if (lang === 'sk') return slug === '' ? '/' : `/${slug}`;
	return slug === '' ? `/${lang}` : `/${lang}/${slug}`;
}

export function pageBySlug(lang: Lang, slug: string): PageDef | undefined {
	return ALL.find((p) => p.slug[lang] === slug);
}

export function allPrerenderEntries(): { lang: Lang; slug: string }[] {
	const out: { lang: Lang; slug: string }[] = [];
	for (const lang of LANGS) {
		if (lang === 'sk') continue;
		for (const p of ALL) out.push({ lang, slug: p.slug[lang] });
	}
	return out;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm vitest run src/lib/seo/pages.test.ts`
Expected: PASS (all tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/seo/pages.ts src/lib/seo/pages.test.ts
git commit -m "feat(seo): add central page register with localized slugs + url utils"
```

---

### Task 3: hreflang alternates helper

**Files:**
- Modify: `src/lib/seo/pages.ts` (add function)
- Modify: `src/lib/seo/pages.test.ts` (add tests)

**Interfaces:**
- Consumes: `urlFor`, `LANGS`, `SITE_URL` from `src/lib/seo/business.ts`
- Produces: `function hreflangAlternates(key: string): { hreflang: string; href: string }[]` — one entry per language (absolute URL) plus one `x-default` pointing at the SK URL.

- [ ] **Step 1: Write the failing test**

```ts
// append to src/lib/seo/pages.test.ts
import { hreflangAlternates } from './pages';
import { SITE_URL } from './business';

describe('hreflangAlternates', () => {
	it('emits reciprocal alternates for all langs + x-default → SK', () => {
		const alts = hreflangAlternates('brzdy');
		expect(alts).toContainEqual({ hreflang: 'sk', href: `${SITE_URL}/vymena-brzd-bratislava` });
		expect(alts).toContainEqual({ hreflang: 'en', href: `${SITE_URL}/en/brake-replacement-bratislava` });
		expect(alts).toContainEqual({ hreflang: 'de', href: `${SITE_URL}/de/bremsen-wechseln-bratislava` });
		expect(alts).toContainEqual({ hreflang: 'hr', href: `${SITE_URL}/hr/zamjena-kocnica-bratislava` });
		expect(alts).toContainEqual({ hreflang: 'x-default', href: `${SITE_URL}/vymena-brzd-bratislava` });
		expect(alts).toHaveLength(5);
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run src/lib/seo/pages.test.ts`
Expected: FAIL — `hreflangAlternates` is not exported.

- [ ] **Step 3: Write minimal implementation**

```ts
// add to src/lib/seo/pages.ts (import SITE_URL at top)
import { SITE_URL } from './business';

export function hreflangAlternates(key: string): { hreflang: string; href: string }[] {
	const alts = LANGS.map((lang) => ({ hreflang: lang, href: `${SITE_URL}${urlFor(key, lang)}` }));
	alts.push({ hreflang: 'x-default', href: `${SITE_URL}${urlFor(key, 'sk')}` });
	return alts;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm vitest run src/lib/seo/pages.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/seo/pages.ts src/lib/seo/pages.test.ts
git commit -m "feat(seo): add reciprocal hreflang alternates helper"
```

---

### Task 4: Derive language from URL (prerender-correct i18n)

**Files:**
- Modify: `src/lib/i18n/index.ts` (add a synchronous initializer that accepts a lang)
- Modify: `src/routes/+layout.ts` (return `lang` from the route)
- Modify: `src/routes/+layout.svelte` (set `currentLang` from layout data before render)
- Reference: `src/lib/i18n/index.ts` (existing `currentLang` store, `getInitialLang`)

**Interfaces:**
- Consumes: `pageBySlug` is NOT needed here; the layout reads `event.url.pathname` first segment.
- Produces: `currentLang` store is set to the route's language during SSR/prerender AND on the client, so `$t(...)` renders in the correct language in static HTML.

**Context for implementer:** Today `getInitialLang()` reads `localStorage` and defaults to `sk`. During prerender there is no `localStorage`, so everything renders SK. We must instead take the language from the URL. The first path segment is `en`/`de`/`hr` for prefixed routes, otherwise `sk`.

- [ ] **Step 1: Write the failing test** (pure helper for extracting lang from a pathname)

```ts
// src/lib/i18n/langFromPath.test.ts
import { describe, it, expect } from 'vitest';
import { langFromPath } from './langFromPath';

describe('langFromPath', () => {
	it('returns sk for root and non-prefixed paths', () => {
		expect(langFromPath('/')).toBe('sk');
		expect(langFromPath('/vymena-brzd-bratislava')).toBe('sk');
	});
	it('returns the prefixed locale', () => {
		expect(langFromPath('/en')).toBe('en');
		expect(langFromPath('/de/bremsen-wechseln-bratislava')).toBe('de');
		expect(langFromPath('/hr/')).toBe('hr');
	});
	it('treats unknown first segments as sk', () => {
		expect(langFromPath('/fr/foo')).toBe('sk');
	});
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run src/lib/i18n/langFromPath.test.ts`
Expected: FAIL — cannot import `./langFromPath`.

- [ ] **Step 3: Write minimal implementation**

```ts
// src/lib/i18n/langFromPath.ts
import type { Lang } from './index';

const PREFIXED = new Set<Lang>(['en', 'de', 'hr']);

export function langFromPath(pathname: string): Lang {
	const seg = pathname.split('/').filter(Boolean)[0];
	return seg && PREFIXED.has(seg as Lang) ? (seg as Lang) : 'sk';
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm vitest run src/lib/i18n/langFromPath.test.ts`
Expected: PASS.

- [ ] **Step 5: Wire it into the layout (no unit test — verified by build in Task 7)**

In `src/lib/i18n/index.ts`, add a plain setter that does not touch `localStorage` (safe for SSR):

```ts
// add inside createLangStore(), alongside set:
setFromRoute: (lang: Language) => {
	if (typeof document !== 'undefined') document.documentElement.lang = lang;
	set(lang);
}
```

In `src/routes/+layout.ts`:

```ts
import { langFromPath } from '$lib/i18n/langFromPath';

export const prerender = true;

export function load({ url }) {
	return { lang: langFromPath(url.pathname) };
}
```

In `src/routes/+layout.svelte` `<script>` (Svelte 5 runes), set the store from data synchronously so the very first render is localized:

```svelte
<script lang="ts">
	import '$lib/styles/global.css';
	import { currentLang } from '$lib/i18n';
	// ...existing imports...
	let { children, data } = $props();

	// Language comes from the URL (works during prerender). Runs on both SSR and client.
	currentLang.setFromRoute(data.lang);
	$effect(() => currentLang.setFromRoute(data.lang)); // keep in sync on client navigation
</script>
```

- [ ] **Step 6: Sanity-run the whole unit suite**

Run: `pnpm vitest run`
Expected: PASS (existing + new tests).

- [ ] **Step 7: Commit**

```bash
git add src/lib/i18n/langFromPath.ts src/lib/i18n/langFromPath.test.ts src/lib/i18n/index.ts src/routes/+layout.ts src/routes/+layout.svelte
git commit -m "feat(i18n): derive active language from URL for correct prerender"
```

---

### Task 5: Extract shared `<Landing>` component + landing SEO config

**Files:**
- Create: `src/lib/components/Landing.svelte`
- Create: `src/lib/seo/landingSeo.ts` (per-key SEO config: keywords per lang + service schema inputs)
- Modify: `src/routes/vymena-brzd-bratislava/+page.svelte` (become a thin wrapper)
- Reference (read fully before extracting): `src/routes/vymena-brzd-bratislava/+page.svelte`, `src/routes/vymena-brzd-bratislava/content.ts`, `src/lib/components/Faq.svelte`, `src/lib/components/ServiceCta.svelte`, `src/lib/components/StickyCta.svelte`, `src/lib/seo/business.ts`

**Interfaces:**
- Consumes: `content` object shape from any landing `content.ts` (per-lang: `metaTitle, metaDescription, heroH1, heroH1Accent, heroLede, breadcrumbHome, breadcrumbCurrent, whenH2, whenProse, symptomsH2, symptomsProse, symptomsList, includesH2, includesProse, includesCards[{h3,p}], priceH2, priceProse, whyH2, whyCards[{h3,p}], faqH2, faq[{q,a}], relatedH2, related[{href,label}], ctaTitle, ctaText, waText, callBtn, badges[]`); `currentLang` store; `pageBySlug`/`urlFor` from `pages.ts`.
- Produces: `<Landing pageKey content includeIcons? />` — renders the entire landing template (currently inlined in the brzdy page) using `content[$currentLang]`, and emits the JSON-LD stack (AutoRepair + Service + FAQPage + Breadcrumb). Uses `pageKey` to build canonical/URL via `urlFor`.

**Context for implementer:** The 8 landing `+page.svelte` files share an IDENTICAL template (hero → when → symptoms → includes → price → why → FAQ → related → CTA). Only three things differ per page: (1) the `content.ts` import, (2) the `keywords` string, (3) the `serviceSchema()` inputs, (4) the `includeIcons` SVG array. Extract the template verbatim into `<Landing>`, and move the per-page differences into `landingSeo.ts` (keywords + serviceSchema inputs) and a prop (`includeIcons`).

- [ ] **Step 1: Create the landing SEO config**

Move each landing's `keywords` (currently SK-only inline) into a per-lang map. Start with `brzdy` and `rozvody` (priority pages); the rest can reuse the SK string until Phase 4 fills localized keywords.

```ts
// src/lib/seo/landingSeo.ts
import type { Lang } from '$lib/i18n';

export type LandingSeo = {
	keywords: Record<Lang, string>;
	service: { serviceType: string; description: string };
};

export const landingSeo: Record<string, LandingSeo> = {
	brzdy: {
		keywords: {
			sk: 'výmena bŕzd, výmena bŕzd Bratislava, oprava bŕzd, servis bŕzd, brzdové platničky, brzdové kotúče, výmena brzdových platničiek, výmena brzdových kotúčov, brzdový strmeň, brzdová kvapalina, odvzdušnenie bŕzd, diagnostika bŕzd, kontrola bŕzd, oprava brzdového systému',
			en: 'brake replacement Bratislava, brake pad replacement, brake disc replacement, brake service, brake fluid change, brake bleeding, brake caliper, squeaking brakes, worn brakes',
			de: 'Bremsen wechseln Bratislava, Bremsbeläge wechseln, Bremsscheiben wechseln, Bremsenservice, Bremsflüssigkeit wechseln, Bremsen entlüften, Bremssattel, Bremsen quietschen',
			hr: 'zamjena kočnica Bratislava, zamjena pločica, zamjena diskova, servis kočnica, zamjena kočione tekućine, odzračivanje kočnica, škripanje kočnica'
		},
		service: {
			serviceType: 'Výmena a servis bŕzd (platničky, kotúče, kvapalina)',
			description:
				'Odborná výmena bŕzd v Bratislave – brzdové platničky a kotúče, brzdový strmeň, brzdová kvapalina, odvzdušnenie a diagnostika brzdového systému.'
		}
	}
	// rozvody + 4 others added in Step 4 below and Task 6
};
```

- [ ] **Step 2: Create `<Landing>` by moving the template out of the brzdy page**

Copy the ENTIRE `<article class="landing">…</article>` markup and the `<svelte:head>` block from `src/routes/vymena-brzd-bratislava/+page.svelte` into `src/lib/components/Landing.svelte`. Replace the hard-coded `pageUrl`, `keywords`, and `serviceSchema(...)` inputs with values derived from props:

```svelte
<!-- src/lib/components/Landing.svelte -->
<script lang="ts">
	import '$lib/styles/landing.css';
	import { currentLang } from '$lib/i18n';
	import ServiceCta from './ServiceCta.svelte';
	import StickyCta from './StickyCta.svelte';
	import Faq from './Faq.svelte';
	import {
		SITE_URL, BUSINESS, autoRepairSchema, serviceSchema, faqSchema, breadcrumbSchema, jsonLd
	} from '$lib/seo/business';
	import { urlFor, hreflangAlternates } from '$lib/seo/pages';
	import { landingSeo } from '$lib/seo/landingSeo';

	let { pageKey, content, includeIcons = [] } = $props();

	const c = $derived(content[$currentLang]);
	const sk = content.sk;
	const pageUrl = $derived(`${SITE_URL}${urlFor(pageKey, $currentLang)}`);
	const seo = landingSeo[pageKey];
	const keywords = $derived(seo.keywords[$currentLang]);
	const alternates = hreflangAlternates(pageKey);

	const schemas = $derived(jsonLd(
		autoRepairSchema(),
		serviceSchema({ name: c.metaTitle, serviceType: seo.service.serviceType, url: pageUrl, description: seo.service.description }),
		faqSchema(c.faq.map((f: {q:string;a:string}) => ({ q: f.q, a: f.a }))),
		breadcrumbSchema([
			{ name: c.breadcrumbHome, url: `${SITE_URL}${urlFor('home', $currentLang)}` },
			{ name: c.breadcrumbCurrent, url: pageUrl }
		])
	));

	const ogLocale = $derived(
		$currentLang === 'sk' ? 'sk_SK' : $currentLang === 'de' ? 'de_DE' : $currentLang === 'hr' ? 'hr_HR' : 'en_GB'
	);
</script>

<svelte:head>
	<title>{c.metaTitle}</title>
	<meta name="description" content={c.metaDescription} />
	<meta name="keywords" content={keywords} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
	<link rel="canonical" href={pageUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={c.metaTitle} />
	<meta property="og:description" content={c.metaDescription} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:site_name" content="MUDROCH MOTORWORXX" />
	<meta property="og:image" content={`${SITE_URL}/logo_2.svg`} />
	<meta name="geo.region" content="SK-BL" />
	<meta name="geo.placename" content="Podunajské Biskupice, Bratislava" />
	<meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
	<meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />
	{#each alternates as alt (alt.hreflang)}
		<link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
	{/each}
	{@html schemas}
</svelte:head>

<!-- PASTE the full <article class="landing">…</article> markup from the brzdy page here, unchanged -->

<StickyCta waText={c.waText} />
```

> NOTE: this replaces the old SK-only self-referential hreflang with the reciprocal set from Task 3.

- [ ] **Step 3: Turn the brzdy SK page into a thin wrapper**

```svelte
<!-- src/routes/vymena-brzd-bratislava/+page.svelte -->
<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';
	import { content } from './content';

	const includeIcons = [
		'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>',
		'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/>',
		'<path d="M12 2v6m0 0a4 4 0 1 0 4 4"/><path d="M12 8a4 4 0 0 1 4 4"/>',
		'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"/>'
	];
</script>

<Landing pageKey="brzdy" {content} {includeIcons} />
```

- [ ] **Step 4: Add `rozvody` config so its page keeps working after migration**

Add a `rozvody` entry to `landingSeo` (copy its current SK `keywords` + `serviceSchema` inputs from `src/routes/vymena-rozvodov-bratislava/+page.svelte`, and add EN/DE/HR keywords using the spec §6.2 bank).

- [ ] **Step 5: Build and verify the SK brzdy page still renders correctly**

Run: `pnpm build && npx serve build`
Then open `http://localhost:3000/vymena-brzd-bratislava` and view source. Verify:
- `<title>` is the SK meta title, page content is SK.
- Reciprocal hreflang has 5 `<link rel="alternate">` (sk/en/de/hr/x-default) with correct localized URLs.
- JSON-LD (AutoRepair + Service + FAQPage + Breadcrumb) present and valid.

Expected: page identical to before EXCEPT hreflang now reciprocal.

- [ ] **Step 6: Commit**

```bash
git add src/lib/components/Landing.svelte src/lib/seo/landingSeo.ts src/routes/vymena-brzd-bratislava/+page.svelte
git commit -m "refactor(landing): extract shared Landing component + per-page SEO config"
```

---

### Task 6: Migrate remaining 6 SK landing pages to `<Landing>`

**Files:**
- Modify (→ wrappers): `src/routes/vymena-rozvodov-bratislava/+page.svelte`, `src/routes/priprava-na-stk-bratislava/+page.svelte`, `src/routes/diagnostika-aut-bratislava/+page.svelte`, `src/routes/vymena-tlmicov-bratislava/+page.svelte`, `src/routes/oprava-vyfuku-bratislava/+page.svelte`, `src/routes/autoservis-podunajske-biskupice/+page.svelte`, `src/routes/autoservis-vrakuna/+page.svelte`
- Modify: `src/lib/seo/landingSeo.ts` (add config entries for `stk`, `diagnostika`, `tlmice`, `vyfuk`, `area-pb`, `area-vrakuna`)

**Interfaces:**
- Consumes: `<Landing>` from Task 5; `landingSeo` config; each page's existing `content.ts`.
- Produces: all 8 SK landing routes rendered via `<Landing>` with reciprocal hreflang.

**Context:** For each page, copy its current inline `keywords` (SK) and `serviceSchema()` inputs into `landingSeo` under the matching key. For non-priority pages, reuse the SK keyword string for en/de/hr for now (Phase 4 localizes them). Copy each page's `includeIcons` array into the wrapper. `area-pb`/`area-vrakuna` use their existing content; if an area page lacks a `serviceSchema` today, set `serviceType`/`description` from its content's meta.

- [ ] **Step 1: Migrate `rozvody` page to a wrapper** (config already added in Task 5 Step 4)

```svelte
<!-- src/routes/vymena-rozvodov-bratislava/+page.svelte -->
<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';
	import { content } from './content';
	const includeIcons = [/* copy the existing includeIcons array from this file's old version */];
</script>
<Landing pageKey="rozvody" {content} {includeIcons} />
```

- [ ] **Step 2: Repeat for the other 5 landings + 2 area pages**

For each: read the old `+page.svelte`, add its key's entry to `landingSeo` (keywords + service inputs), then replace the file with a wrapper passing the correct `pageKey`, `content`, and `includeIcons`. Keys map to folders:
`stk`→priprava-na-stk-bratislava, `diagnostika`→diagnostika-aut-bratislava, `tlmice`→vymena-tlmicov-bratislava, `vyfuk`→oprava-vyfuku-bratislava, `area-pb`→autoservis-podunajske-biskupice, `area-vrakuna`→autoservis-vrakuna.

- [ ] **Step 3: Build and verify all 8 SK pages**

Run: `pnpm build && npx serve build`
For each SK URL, view source: correct SK title/content, 5 reciprocal hreflang links, valid JSON-LD.
Expected: all 8 render correctly, no build errors (`strict: true` passes).

- [ ] **Step 4: Commit**

```bash
git add src/routes/*/+page.svelte src/lib/seo/landingSeo.ts
git commit -m "refactor(landing): migrate all SK landing pages to shared Landing component"
```

---

### Task 7: Dynamic `[lang]/[...slug]` route (EN/DE/HR pages)

**Files:**
- Create: `src/routes/[lang=lang]/[...slug]/+page.ts`
- Create: `src/routes/[lang=lang]/[...slug]/+page.svelte`
- Reference: `src/lib/seo/pages.ts`, `src/routes/+page.svelte` (home renderer), `src/lib/components/Landing.svelte`, all `*/content.ts` modules

**Interfaces:**
- Consumes: `pageBySlug`, `allPrerenderEntries` from `pages.ts`; `<Landing>`; the home page section components (`Hero`, `Services`, `About`, `Reviews`, `LocalArea`, `Contact`, `StickyCta`).
- Produces: prerendered `/en`, `/de`, `/hr` home pages + all localized landing/area URLs.

**Context:** `content.ts` modules are per-route. Map page `key` → its content module with a static import map so it is bundled and prerenderable (no dynamic path interpolation, which breaks static analysis).

- [ ] **Step 1: Write the load + entries**

```ts
// src/routes/[lang=lang]/[...slug]/+page.ts
import { error } from '@sveltejs/kit';
import type { Lang } from '$lib/i18n';
import { pageBySlug, allPrerenderEntries } from '$lib/seo/pages';

export const prerender = true;

export function entries() {
	// SvelteKit needs [lang, slug] params for every page to prerender.
	return allPrerenderEntries().map((e) => ({ lang: e.lang, slug: e.slug }));
}

export function load({ params }) {
	const lang = params.lang as Lang;
	const page = pageBySlug(lang, params.slug ?? '');
	if (!page) throw error(404, 'Not found');
	return { lang, pageKey: page.key, pageType: page.type };
}
```

- [ ] **Step 2: Write the renderer with a static content map**

```svelte
<!-- src/routes/[lang=lang]/[...slug]/+page.svelte -->
<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';
	// Home sections (same as src/routes/+page.svelte)
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import About from '$lib/components/About.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import LocalArea from '$lib/components/LocalArea.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import StickyCta from '$lib/components/StickyCta.svelte';

	// Static content imports (bundler-friendly; required for prerender)
	import { content as rozvody } from '../../vymena-rozvodov-bratislava/content';
	import { content as brzdy } from '../../vymena-brzd-bratislava/content';
	import { content as stk } from '../../priprava-na-stk-bratislava/content';
	import { content as diagnostika } from '../../diagnostika-aut-bratislava/content';
	import { content as tlmice } from '../../vymena-tlmicov-bratislava/content';
	import { content as vyfuk } from '../../oprava-vyfuku-bratislava/content';
	import { content as areaPb } from '../../autoservis-podunajske-biskupice/content';
	import { content as areaVrakuna } from '../../autoservis-vrakuna/content';

	let { data } = $props();

	const CONTENT: Record<string, unknown> = {
		rozvody, brzdy, stk, diagnostika, tlmice, vyfuk,
		'area-pb': areaPb, 'area-vrakuna': areaVrakuna
	};

	// includeIcons per key — copy the arrays used by each SK wrapper (Task 5/6).
	const ICONS: Record<string, string[]> = {
		// brzdy: [...], rozvody: [...], etc. — paste from the wrappers
	};
</script>

{#if data.pageType === 'home'}
	<Hero />
	<Services />
	<About />
	<Reviews />
	<LocalArea />
	<Contact />
	<StickyCta />
{:else}
	<Landing pageKey={data.pageKey} content={CONTENT[data.pageKey]} includeIcons={ICONS[data.pageKey] ?? []} />
{/if}
```

> The home sections already read `$t(...)`/`content[$currentLang]`, and Task 4 set `currentLang` from the URL, so they render in the right language automatically.

- [ ] **Step 3: Build and verify all locale URLs prerender**

Run: `pnpm build`
Then check the build tree:
Run: `find build -name '*.html' | sort`
Expected: HTML files exist for `en/`, `de/`, `hr/` home + every localized landing slug (e.g. `build/en/brake-replacement-bratislava/index.html`). Build must succeed with `strict: true`.

- [ ] **Step 4: Manually verify localized content + SEO**

Run: `npx serve build`
Open `http://localhost:3000/en/brake-replacement-bratislava` and `http://localhost:3000/de` — view source:
- Content is in EN / DE respectively (not SK).
- `<title>` localized; canonical is the localized URL.
- 5 reciprocal hreflang links present and correct.
Expected: fully localized, indexable HTML.

- [ ] **Step 5: Commit**

```bash
git add "src/routes/[lang=lang]"
git commit -m "feat(i18n): add dynamic [lang]/[...slug] route prerendering en/de/hr pages"
```

---

### Task 8: LanguageSwitcher navigates to localized URLs

**Files:**
- Modify: `src/lib/components/LanguageSwitcher.svelte`
- Reference: `src/lib/i18n/index.ts` (`languages`, `currentLang`), `src/lib/seo/pages.ts` (`pageBySlug`, `urlFor`), `src/lib/i18n/langFromPath.ts`

**Interfaces:**
- Consumes: current pathname (via `$app/state` `page` or `$app/stores`), `pageBySlug`, `urlFor`, `langFromPath`.
- Produces: clicking a language navigates to the SAME page in that language's URL (falls back to that language's home if no equivalent).

**Context:** Today the switcher calls `currentLang.set(code)` (client-only text swap). Now each language is a distinct URL, so it must navigate. Resolve the current page key from the current URL, then build the target URL via `urlFor(key, targetLang)`.

- [ ] **Step 1: Update the switcher to compute target hrefs**

```svelte
<!-- src/lib/components/LanguageSwitcher.svelte (script) -->
<script lang="ts">
	import { page } from '$app/state';
	import { languages } from '$lib/i18n';
	import { langFromPath } from '$lib/i18n/langFromPath';
	import { pageBySlug, urlFor } from '$lib/seo/pages';
	import type { Lang } from '$lib/i18n';

	function hrefFor(target: Lang): string {
		const path = page.url.pathname;
		const curLang = langFromPath(path);
		// strip the lang prefix to get the raw slug
		const parts = path.split('/').filter(Boolean);
		const slug = curLang === 'sk' ? parts.join('/') : parts.slice(1).join('/');
		const def = pageBySlug(curLang, slug);
		return def ? urlFor(def.key, target) : urlFor('home', target);
	}
</script>

{#each languages as l (l.code)}
	<a href={hrefFor(l.code)} data-sveltekit-reload={false}>{l.label}</a>
{/each}
```

> Use `<a href>` (real navigation) instead of `currentLang.set`. Keep existing styling/markup; only swap the mechanism. If the project's Svelte version predates `$app/state`, use `import { page } from '$app/stores'` and `$page.url.pathname`.

- [ ] **Step 2: Build and verify switching**

Run: `pnpm build && npx serve build`
On `/vymena-brzd-bratislava`, click EN → lands on `/en/brake-replacement-bratislava` with EN content. On `/` click DE → `/de`.
Expected: language switch navigates to the correct localized URL; content matches.

- [ ] **Step 3: Commit**

```bash
git add src/lib/components/LanguageSwitcher.svelte
git commit -m "feat(i18n): language switcher navigates to localized URLs"
```

---

### Task 9: Point sitemap at the register (all languages) — minimal update

**Files:**
- Modify: `src/routes/sitemap.xml/+server.ts`
- Reference: `src/lib/seo/pages.ts`

**Interfaces:**
- Consumes: `HOME`, `PAGES`, `LANGS`, `urlFor` from `pages.ts`; `SITE_URL` from `business.ts`.
- Produces: sitemap listing every language URL. (Full `xhtml:link` hreflang alternates + `<lastmod>` come in Phase 2; here we just stop under-reporting locale URLs.)

**Context:** The current sitemap only lists SK URLs from the old `LANDING_ROUTES`. Now that EN/DE/HR URLs exist and are indexable, they must appear. This task keeps it simple (URLs + changefreq + priority for all langs); Phase 2 adds alternates and lastmod.

- [ ] **Step 1: Update the endpoint**

```ts
// src/routes/sitemap.xml/+server.ts
import { SITE_URL } from '$lib/seo/business';
import { HOME, PAGES, LANGS, urlFor } from '$lib/seo/pages';

export const prerender = true;

export function GET() {
	const defs = [HOME, ...PAGES];
	const urls = LANGS.flatMap((lang) =>
		defs.map((d) => ({
			loc: `${SITE_URL}${urlFor(d.key, lang)}`,
			changefreq: d.changefreq,
			priority: d.priority
		}))
	);

	const body =
		`<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
		urls
			.map(
				(u) =>
					`  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority.toFixed(1)}</priority>\n  </url>`
			)
			.join('\n') +
		`\n</urlset>\n`;

	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
```

- [ ] **Step 2: Build and verify sitemap**

Run: `pnpm build && npx serve build`
Open `http://localhost:3000/sitemap.xml`. Expected: contains SK + `/en/...` + `/de/...` + `/hr/...` for home and all 8 pages (36 URLs).

- [ ] **Step 3: Retire the old `routes.ts` if unused**

Run: `grep -rn "seo/routes" src` — if nothing imports it anymore, delete `src/lib/seo/routes.ts`. Otherwise leave it.

- [ ] **Step 4: Commit**

```bash
git add src/routes/sitemap.xml/+server.ts
git rm src/lib/seo/routes.ts 2>/dev/null || true
git commit -m "feat(seo): sitemap includes all language URLs from page register"
```

---

### Task 10: Full-suite + build verification gate

**Files:** none (verification only)

- [ ] **Step 1: Run the full unit suite**

Run: `pnpm vitest run`
Expected: all tests pass.

- [ ] **Step 2: Full production build**

Run: `pnpm build`
Expected: success, `strict: true` reports no prerender errors; `find build -name '*.html' | wc -l` shows home+8 pages × 4 langs (plus any existing) = at least 36 page HTML files.

- [ ] **Step 3: Manual crawl spot-check**

Run: `npx serve build`
Verify: `/`, `/vymena-brzd-bratislava`, `/en`, `/en/brake-replacement-bratislava`, `/de/bremsen-wechseln-bratislava`, `/hr/zamjena-kocnica-bratislava`, `/sitemap.xml` all return correct localized content and reciprocal hreflang.

- [ ] **Step 4: Commit any final touch-ups** (only if changes were needed)

---

## Self-Review

**Spec coverage (Phase 1 scope only):**
- Spec §3.1 register → Task 2 ✅
- Spec §3.2 routing (SK root + `[lang]` dynamic) → Tasks 1, 7 ✅
- Spec §3.3 language from URL → Task 4 ✅
- Spec §3.4 shared `<Landing>` → Tasks 5, 6 ✅
- Spec §4.2 reciprocal hreflang → Task 3, applied in Tasks 5–7 ✅
- Spec §4.3 sitemap (all URLs) → Task 9 (alternates + lastmod deferred to Phase 2, explicitly) ✅
- LanguageSwitcher navigation (implied by §3.3) → Task 8 ✅
- Deferred to later phases (out of Phase 1 scope, by design): `<Seo>` component consolidation (§4.1), Twitter cards/OG image (§4.5), schemas Organization/WebSite/aggregateRating (§4.4), robots.txt AI crawlers + llms.txt + answer-first + FAQ expansion (§5), keyword/body/content expansion (§6), blog/area new content (§7).

**Placeholder scan:** No "TBD"/"add error handling" placeholders. The only intentional "paste from existing file" instructions (includeIcons arrays, landing template markup) reference concrete existing source the executor reads — the exact content lives in the repo, not invented.

**Type consistency:** `Lang`, `PageDef`, `slugFor`, `urlFor`, `pageBySlug`, `allPrerenderEntries`, `hreflangAlternates`, `langFromPath`, `setFromRoute` are named identically across all tasks that consume them. Content object shape documented in Task 5 matches existing `content.ts`.

**Note on component testing:** No Svelte component TDD (no component-testing infra in repo). Pure logic is TDD'd (Tasks 1–4); components/routing verified via `pnpm build` + `npx serve build` view-source (Tasks 5–10). Adding component-test infra is out of scope for Phase 1.
