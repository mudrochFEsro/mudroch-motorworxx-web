# Google Reviews Section — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a live "Google reviews" section to the homepage, rendered in the site's own bold style, fed by the Featurable JSON API.

**Architecture:** A pure-logic module (`featurable.ts`) fetches + normalizes the Featurable v2 widget JSON and provides formatting helpers. A presentational Svelte component (`Reviews.svelte`) fetches on mount, shows a skeleton, renders an auto-scroll marquee of review cards with a rating-summary header, and silently hides itself on any failure. Inserted into the homepage between `<About />` and `<Contact />`.

**Tech Stack:** SvelteKit (adapter-static, prerendered), Svelte 5 runes, TypeScript, Vitest (new, for unit tests), Featurable v2 API, native `Intl.RelativeTimeFormat` / `Intl.PluralRules` / `Intl.NumberFormat`.

## Global Constraints

- Svelte 5 runes only (`$state`, `$effect`, `$derived`); match existing component style (scoped `<style>`, `$t`/`$currentLang` stores from `$lib/i18n`).
- Data fetch is **client-side only** (inside `$effect`) — must never run during prerender/SSR, so `pnpm run build` stays green.
- **Graceful fallback:** any error / null / empty reviews → the section renders nothing. The site must never break.
- Review text language: **SK → original text; EN/DE/HR → English translation with fallback to original.**
- Respect `prefers-reduced-motion`: auto-scroll off → horizontal scroll-snap row.
- Keep a small "Powered by Featurable" credit when `showBranding === true` (free-plan requirement).
- i18n: identical key shape across `sk.json`, `en.json`, `de.json`, `hr.json` (type `Translations = typeof sk`).
- No `aggregateRating`/review JSON-LD. No Featurable `embed.js`. Homepage only.
- Widget ID: `408c7ee2-ffb1-4fee-b357-87b1158e5e45`. API base: `https://api.featurable.com/v2/widgets/<ID>`.
- Package manager: **pnpm**.

---

## File Structure

- Create `vitest.config.ts` — Vitest config (node env).
- Modify `package.json` — add `vitest` devDep + `test` script.
- Create `src/lib/reviews/featurable.ts` — types, `normalizeWidget`, `pickReviewText`, `formatRelative`, `reviewNoun`, `formatRating`, `fetchReviews`, `WIDGET_ID`.
- Create `src/lib/reviews/featurable.test.ts` — unit tests for the pure helpers + `fetchReviews`.
- Create `src/lib/components/Reviews.svelte` — presentational section.
- Modify `src/lib/i18n/{sk,en,de,hr}.json` — add `reviews.*` keys.
- Modify `src/routes/+page.svelte` — import + place `<Reviews />` between `<About />` and `<Contact />`.

---

### Task 1: Data types + pure formatters (TDD)

**Files:**
- Create: `vitest.config.ts`
- Modify: `package.json` (devDependencies + scripts)
- Create: `src/lib/reviews/featurable.ts`
- Test: `src/lib/reviews/featurable.test.ts`

**Interfaces:**
- Consumes: `Lang` type from `$lib/i18n` (`'sk' | 'en' | 'de' | 'hr'`).
- Produces:
  - `interface Review { id: string; authorName: string; avatarUrl: string | null; rating: number; text: string; translatedText: string | null; languageCode: string | null; publishedAt: string }`
  - `interface ReviewsData { rating: number; count: number; writeAReviewUri: string | null; showBranding: boolean; reviews: Review[] }`
  - `normalizeWidget(raw: unknown): ReviewsData | null`
  - `pickReviewText(review: Review, lang: Lang): string`
  - `formatRelative(publishedAt: string, lang: Lang, now?: Date): string`
  - `reviewNoun(count: number, lang: Lang): string`
  - `formatRating(rating: number, lang: Lang): string`
  - `WIDGET_ID: string`

- [ ] **Step 1: Add Vitest dependency and script**

Run:
```bash
pnpm add -D vitest
```

Then edit `package.json` `scripts` to add:
```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 2: Create `vitest.config.ts`**

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'node',
		include: ['src/**/*.test.ts']
	}
});
```

- [ ] **Step 3: Write the failing tests**

Create `src/lib/reviews/featurable.test.ts`:
```ts
import { describe, it, expect, vi, afterEach } from 'vitest';
import {
	normalizeWidget,
	pickReviewText,
	formatRelative,
	reviewNoun,
	formatRating,
	fetchReviews,
	type Review
} from './featurable';

const RAW = {
	success: true,
	widget: {
		uuid: 'x',
		showBranding: true,
		config: {},
		gbpLocationSummary: { rating: 5, reviewsCount: 12, writeAReviewUri: 'https://g/review' },
		reviews: [
			{
				id: '1',
				author: { name: 'Richard Hevier', avatarUrl: 'https://a/photo' },
				rating: { value: 5, max: 5 },
				text: 'Great service',
				originalText: 'Skvelý servis',
				languageCode: 'sk',
				publishedAt: '2026-06-17T14:20:29.000Z'
			}
		]
	}
};

const review: Review = {
	id: '1',
	authorName: 'Richard Hevier',
	avatarUrl: 'https://a/photo',
	rating: 5,
	text: 'Skvelý servis',
	translatedText: 'Great service',
	languageCode: 'sk',
	publishedAt: '2026-06-17T14:20:29.000Z'
};

describe('normalizeWidget', () => {
	it('maps summary and reviews, using originalText as text and API text as translatedText', () => {
		const data = normalizeWidget(RAW);
		expect(data).not.toBeNull();
		expect(data!.rating).toBe(5);
		expect(data!.count).toBe(12);
		expect(data!.writeAReviewUri).toBe('https://g/review');
		expect(data!.showBranding).toBe(true);
		expect(data!.reviews).toHaveLength(1);
		const r = data!.reviews[0];
		expect(r.authorName).toBe('Richard Hevier');
		expect(r.avatarUrl).toBe('https://a/photo');
		expect(r.rating).toBe(5);
		expect(r.text).toBe('Skvelý servis');
		expect(r.translatedText).toBe('Great service');
		expect(r.publishedAt).toBe('2026-06-17T14:20:29.000Z');
	});

	it('returns null when success is false or shape is wrong', () => {
		expect(normalizeWidget({ success: false })).toBeNull();
		expect(normalizeWidget(null)).toBeNull();
		expect(normalizeWidget({})).toBeNull();
	});

	it('falls back to API text when originalText is missing', () => {
		const raw = structuredClone(RAW);
		delete (raw.widget.reviews[0] as Record<string, unknown>).originalText;
		const r = normalizeWidget(raw)!.reviews[0];
		expect(r.text).toBe('Great service');
	});
});

describe('pickReviewText', () => {
	it('returns original text for sk', () => {
		expect(pickReviewText(review, 'sk')).toBe('Skvelý servis');
	});
	it('returns translated text for en/de/hr', () => {
		expect(pickReviewText(review, 'en')).toBe('Great service');
		expect(pickReviewText(review, 'de')).toBe('Great service');
	});
	it('falls back to original when translation is null', () => {
		expect(pickReviewText({ ...review, translatedText: null }, 'en')).toBe('Skvelý servis');
	});
});

describe('formatRating', () => {
	it('formats with one decimal in the locale', () => {
		expect(formatRating(5, 'sk')).toBe('5,0');
		expect(formatRating(4.8, 'en')).toBe('4.8');
	});
});

describe('reviewNoun', () => {
	it('uses Slovak plural forms', () => {
		expect(reviewNoun(1, 'sk')).toBe('recenzia');
		expect(reviewNoun(3, 'sk')).toBe('recenzie');
		expect(reviewNoun(12, 'sk')).toBe('recenzií');
	});
	it('uses English plural forms', () => {
		expect(reviewNoun(1, 'en')).toBe('review');
		expect(reviewNoun(2, 'en')).toBe('reviews');
	});
});

describe('formatRelative', () => {
	it('returns a localized "months ago" string', () => {
		const now = new Date('2026-08-17T14:20:29.000Z');
		const out = formatRelative('2026-06-17T14:20:29.000Z', 'en', now);
		expect(out).toMatch(/month/);
	});
});

describe('fetchReviews', () => {
	afterEach(() => {
		vi.unstubAllGlobals();
	});

	it('returns normalized data on ok response', async () => {
		vi.stubGlobal('localStorage', undefined);
		vi.stubGlobal(
			'fetch',
			vi.fn(async () => ({ ok: true, json: async () => RAW }))
		);
		const data = await fetchReviews();
		expect(data?.count).toBe(12);
	});

	it('returns null on non-ok response', async () => {
		vi.stubGlobal('localStorage', undefined);
		vi.stubGlobal(
			'fetch',
			vi.fn(async () => ({ ok: false, json: async () => ({}) }))
		);
		expect(await fetchReviews()).toBeNull();
	});

	it('returns null when fetch throws', async () => {
		vi.stubGlobal('localStorage', undefined);
		vi.stubGlobal(
			'fetch',
			vi.fn(async () => {
				throw new Error('network');
			})
		);
		expect(await fetchReviews()).toBeNull();
	});
});
```

- [ ] **Step 4: Run tests to verify they fail**

Run: `pnpm test`
Expected: FAIL — `Cannot find module './featurable'` / functions not defined.

- [ ] **Step 5: Implement `src/lib/reviews/featurable.ts`**

```ts
import type { Lang } from '$lib/i18n';

export const WIDGET_ID = '408c7ee2-ffb1-4fee-b357-87b1158e5e45';
const API_URL = `https://api.featurable.com/v2/widgets/${WIDGET_ID}`;
const CACHE_KEY = 'mmx_reviews_v1';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 min

export interface Review {
	id: string;
	authorName: string;
	avatarUrl: string | null;
	rating: number;
	text: string;
	translatedText: string | null;
	languageCode: string | null;
	publishedAt: string;
}

export interface ReviewsData {
	rating: number;
	count: number;
	writeAReviewUri: string | null;
	showBranding: boolean;
	reviews: Review[];
}

/** Defensive parse of the Featurable v2 widget payload. Returns null on any shape mismatch. */
export function normalizeWidget(raw: unknown): ReviewsData | null {
	if (!raw || typeof raw !== 'object') return null;
	const root = raw as Record<string, any>;
	if (root.success !== true || !root.widget || typeof root.widget !== 'object') return null;
	const w = root.widget as Record<string, any>;
	const summary = (w.gbpLocationSummary ?? {}) as Record<string, any>;
	const rawReviews: any[] = Array.isArray(w.reviews) ? w.reviews : [];

	const reviews: Review[] = rawReviews
		.map((r) => {
			const author = (r?.author ?? {}) as Record<string, any>;
			const original = typeof r?.originalText === 'string' ? r.originalText : null;
			const translated = typeof r?.text === 'string' ? r.text : null;
			const text = original ?? translated ?? '';
			return {
				id: String(r?.id ?? ''),
				authorName: typeof author.name === 'string' ? author.name : '',
				avatarUrl: typeof author.avatarUrl === 'string' ? author.avatarUrl : null,
				rating: Number(r?.rating?.value ?? 0),
				text,
				translatedText: translated,
				languageCode: typeof r?.languageCode === 'string' ? r.languageCode : null,
				publishedAt: typeof r?.publishedAt === 'string' ? r.publishedAt : ''
			} satisfies Review;
		})
		.filter((r) => r.text.length > 0 && r.authorName.length > 0);

	return {
		rating: Number(summary.rating ?? 0),
		count: Number(summary.reviewsCount ?? reviews.length),
		writeAReviewUri: typeof summary.writeAReviewUri === 'string' ? summary.writeAReviewUri : null,
		showBranding: w.showBranding !== false,
		reviews
	};
}

/** SK → original text; other languages → English translation with fallback to original. */
export function pickReviewText(review: Review, lang: Lang): string {
	if (lang === 'sk') return review.text;
	return review.translatedText ?? review.text;
}

/** Localized "X ago" from an ISO timestamp using the largest sensible unit. */
export function formatRelative(publishedAt: string, lang: Lang, now: Date = new Date()): string {
	const then = new Date(publishedAt).getTime();
	if (Number.isNaN(then)) return '';
	const diffSec = Math.round((then - now.getTime()) / 1000); // negative = past
	const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });
	const units: [Intl.RelativeTimeFormatUnit, number][] = [
		['year', 60 * 60 * 24 * 365],
		['month', 60 * 60 * 24 * 30],
		['week', 60 * 60 * 24 * 7],
		['day', 60 * 60 * 24],
		['hour', 60 * 60],
		['minute', 60]
	];
	for (const [unit, secs] of units) {
		if (Math.abs(diffSec) >= secs) {
			return rtf.format(Math.round(diffSec / secs), unit);
		}
	}
	return rtf.format(0, 'day');
}

const REVIEW_NOUN: Record<Lang, Partial<Record<Intl.LDMLPluralRule, string>>> = {
	sk: { one: 'recenzia', few: 'recenzie', many: 'recenzie', other: 'recenzií' },
	en: { one: 'review', other: 'reviews' },
	de: { one: 'Bewertung', other: 'Bewertungen' },
	hr: { one: 'recenzija', few: 'recenzije', other: 'recenzija' }
};

/** Correct plural noun for the review count in the given language. */
export function reviewNoun(count: number, lang: Lang): string {
	const rule = new Intl.PluralRules(lang).select(count);
	const forms = REVIEW_NOUN[lang];
	return forms[rule] ?? forms.other ?? '';
}

/** Average rating with exactly one decimal, localized (e.g. "5,0" in sk). */
export function formatRating(rating: number, lang: Lang): string {
	return new Intl.NumberFormat(lang, {
		minimumFractionDigits: 1,
		maximumFractionDigits: 1
	}).format(rating);
}

function readCache(): ReviewsData | null {
	try {
		if (typeof localStorage === 'undefined') return null;
		const raw = localStorage.getItem(CACHE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw) as { ts: number; data: ReviewsData };
		if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
		return parsed.data;
	} catch {
		return null;
	}
}

function writeCache(data: ReviewsData): void {
	try {
		if (typeof localStorage === 'undefined') return;
		localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
	} catch {
		/* ignore quota / private-mode errors */
	}
}

/** Fetch + normalize reviews. Returns null on any failure (caller hides the section). */
export async function fetchReviews(): Promise<ReviewsData | null> {
	const cached = readCache();
	if (cached) return cached;
	try {
		const res = await fetch(API_URL, { headers: { accept: 'application/json' } });
		if (!res.ok) return null;
		const raw = await res.json();
		const data = normalizeWidget(raw);
		if (data && data.reviews.length > 0) writeCache(data);
		return data;
	} catch {
		return null;
	}
}
```

- [ ] **Step 6: Run tests to verify they pass**

Run: `pnpm test`
Expected: PASS (all describe blocks green).

- [ ] **Step 7: Commit**

```bash
git add package.json pnpm-lock.yaml vitest.config.ts src/lib/reviews/featurable.ts src/lib/reviews/featurable.test.ts
git commit -m "feat(reviews): featurable data module + formatters with tests"
```

---

### Task 2: i18n keys for the reviews section

**Files:**
- Modify: `src/lib/i18n/sk.json`
- Modify: `src/lib/i18n/en.json`
- Modify: `src/lib/i18n/de.json`
- Modify: `src/lib/i18n/hr.json`

**Interfaces:**
- Produces: `reviews.title`, `reviews.on_google`, `reviews.cta`, `reviews.powered_by`, `reviews.loading` in all four locales.

- [ ] **Step 1: Add `reviews` block to `sk.json`**

Add as a top-level key (sibling of `nav`, `hero`, …):
```json
	"reviews": {
		"title": "Čo hovoria naši zákazníci",
		"on_google": "na Google",
		"cta": "Ohodnoťte nás na Google",
		"powered_by": "Poháňa",
		"loading": "Načítavam recenzie…"
	}
```

- [ ] **Step 2: Add the same block to `en.json`**

```json
	"reviews": {
		"title": "What our customers say",
		"on_google": "on Google",
		"cta": "Review us on Google",
		"powered_by": "Powered by",
		"loading": "Loading reviews…"
	}
```

- [ ] **Step 3: Add the same block to `de.json`**

```json
	"reviews": {
		"title": "Was unsere Kunden sagen",
		"on_google": "auf Google",
		"cta": "Bewerten Sie uns auf Google",
		"powered_by": "Bereitgestellt von",
		"loading": "Bewertungen werden geladen…"
	}
```

- [ ] **Step 4: Add the same block to `hr.json`**

```json
	"reviews": {
		"title": "Što kažu naši kupci",
		"on_google": "na Google",
		"cta": "Ocijenite nas na Googleu",
		"powered_by": "Pokreće",
		"loading": "Učitavanje recenzija…"
	}
```

- [ ] **Step 5: Verify JSON validity + type check**

Run: `pnpm exec svelte-check --tsconfig ./tsconfig.json` (or `pnpm run build` — must not report JSON/type errors from i18n).
Expected: no errors related to i18n shape (all four files share the key set).

- [ ] **Step 6: Commit**

```bash
git add src/lib/i18n/sk.json src/lib/i18n/en.json src/lib/i18n/de.json src/lib/i18n/hr.json
git commit -m "feat(reviews): i18n keys for reviews section (sk/en/de/hr)"
```

---

### Task 3: `Reviews.svelte` component

**Files:**
- Create: `src/lib/components/Reviews.svelte`

**Interfaces:**
- Consumes: `fetchReviews`, `pickReviewText`, `formatRelative`, `reviewNoun`, `formatRating`, `type ReviewsData`, `type Review` from `$lib/reviews/featurable`; `t`, `currentLang` from `$lib/i18n`.
- Produces: default-exported Svelte component `<Reviews />` (no props).

- [ ] **Step 1: Create the component**

```svelte
<script lang="ts">
	import { t, currentLang } from '$lib/i18n';
	import {
		fetchReviews,
		pickReviewText,
		formatRelative,
		reviewNoun,
		formatRating,
		type ReviewsData,
		type Review
	} from '$lib/reviews/featurable';

	let data = $state<ReviewsData | null>(null);
	let loading = $state(true);

	$effect(() => {
		let alive = true;
		fetchReviews().then((d) => {
			if (!alive) return;
			data = d;
			loading = false;
		});
		return () => {
			alive = false;
		};
	});

	// Repeat reviews so the marquee is wide enough, then duplicate the whole
	// sequence once so a -50% translate loops seamlessly.
	const marquee = $derived.by(() => {
		const list = data?.reviews ?? [];
		if (list.length === 0) return [] as Review[];
		let base = [...list];
		while (base.length < 8) base = base.concat(list);
		return base.concat(base);
	});

	function initials(name: string): string {
		return name
			.split(' ')
			.filter(Boolean)
			.slice(0, 2)
			.map((w) => w[0]?.toUpperCase() ?? '')
			.join('');
	}
</script>

{#if loading}
	<section class="reviews" aria-busy="true">
		<div class="reviews-inner">
			<p class="reviews-loading">{$t('reviews.loading')}</p>
		</div>
	</section>
{:else if data && data.reviews.length > 0}
	<section class="reviews" id="reviews">
		<div class="reviews-inner">
			<div class="reviews-head">
				<h2 class="reviews-title">{$t('reviews.title')}</h2>
				<div class="reviews-summary">
					<span class="reviews-score">{formatRating(data.rating, $currentLang)}</span>
					<span class="reviews-stars" aria-hidden="true">
						{#each Array(5) as _, i}
							<svg
								class:filled={i < Math.round(data.rating)}
								width="22"
								height="22"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.5l1.6-7L2 9.8l7.1-.6z"
								/>
							</svg>
						{/each}
					</span>
					<span class="reviews-count">
						{data.count}
						{reviewNoun(data.count, $currentLang)}
						{$t('reviews.on_google')}
					</span>
				</div>
				{#if data.writeAReviewUri}
					<a class="reviews-cta" href={data.writeAReviewUri} target="_blank" rel="noopener">
						{$t('reviews.cta')}
					</a>
				{/if}
			</div>

			<div class="reviews-marquee">
				<ul class="reviews-track">
					{#each marquee as review, i (review.id + '-' + i)}
						<li class="review-card">
							<div class="review-top">
								{#if review.avatarUrl}
									<img
										class="review-avatar"
										src={review.avatarUrl}
										alt=""
										width="44"
										height="44"
										loading="lazy"
										referrerpolicy="no-referrer"
									/>
								{:else}
									<span class="review-avatar review-avatar--fallback" aria-hidden="true"
										>{initials(review.authorName)}</span
									>
								{/if}
								<div class="review-meta">
									<span class="review-name">{review.authorName}</span>
									<span class="review-date">{formatRelative(review.publishedAt, $currentLang)}</span>
								</div>
								<svg class="review-g" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
									<path
										fill="#4285F4"
										d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9z"
									/>
									<path
										fill="#34A853"
										d="M12 23c2.9 0 5.4-1 7.2-2.7l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23z"
									/>
									<path fill="#FBBC05" d="M6 14.3a6.6 6.6 0 0 1 0-4.2V7.3H2.3a11 11 0 0 0 0 9.8z" />
									<path
										fill="#EA4335"
										d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 0 0 12 1 11 11 0 0 0 2.3 7.3L6 10.1c.9-2.6 3.2-4.7 6-4.7z"
									/>
								</svg>
							</div>
							<div class="review-stars" aria-label={`${review.rating}/5`}>
								{#each Array(5) as _, s}
									<svg
										class:filled={s < review.rating}
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.5l1.6-7L2 9.8l7.1-.6z"
										/>
									</svg>
								{/each}
							</div>
							<p class="review-text">{pickReviewText(review, $currentLang)}</p>
						</li>
					{/each}
				</ul>
			</div>

			{#if data.showBranding}
				<p class="reviews-branding">
					{$t('reviews.powered_by')}
					<a href="https://featurable.com" target="_blank" rel="noopener">Featurable</a>
				</p>
			{/if}
		</div>
	</section>
{/if}

<style>
	.reviews {
		padding: clamp(4rem, 10vw, 8rem) 0;
		overflow: hidden;
	}
	.reviews-inner {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}
	.reviews-loading {
		text-align: center;
		opacity: 0.5;
	}
	.reviews-head {
		text-align: center;
		margin-bottom: clamp(2rem, 5vw, 3.5rem);
	}
	.reviews-title {
		font-size: clamp(2rem, 5vw, 3.5rem);
		margin: 0 0 1rem;
		text-transform: uppercase;
		letter-spacing: -0.02em;
	}
	.reviews-summary {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		flex-wrap: wrap;
		justify-content: center;
	}
	.reviews-score {
		font-size: 1.8rem;
		font-weight: 800;
	}
	.reviews-stars,
	.review-stars {
		display: inline-flex;
		color: #999;
	}
	.reviews-stars :global(svg.filled),
	.review-stars :global(svg.filled) {
		color: #fbbc05;
	}
	.reviews-count {
		opacity: 0.7;
	}
	.reviews-cta {
		display: inline-block;
		margin-top: 1.2rem;
		padding: 0.8rem 1.6rem;
		border: 2px solid currentColor;
		border-radius: 999px;
		font-weight: 700;
		text-decoration: none;
		transition: transform 0.2s ease;
	}
	.reviews-cta:hover {
		transform: translateY(-2px);
	}
	.reviews-marquee {
		position: relative;
		mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
	}
	.reviews-track {
		display: flex;
		gap: 1.5rem;
		width: max-content;
		margin: 0;
		padding: 1rem 0;
		list-style: none;
		animation: reviews-scroll 60s linear infinite;
	}
	.reviews-marquee:hover .reviews-track {
		animation-play-state: paused;
	}
	@keyframes reviews-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
	.review-card {
		flex: 0 0 340px;
		max-width: 340px;
		padding: 1.5rem;
		border: 1px solid rgba(128, 128, 128, 0.25);
		border-radius: 16px;
		background: rgba(128, 128, 128, 0.06);
	}
	.review-top {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
	}
	.review-avatar {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		object-fit: cover;
		flex: 0 0 auto;
	}
	.review-avatar--fallback {
		display: grid;
		place-items: center;
		background: #fbbc05;
		color: #000;
		font-weight: 700;
	}
	.review-meta {
		display: flex;
		flex-direction: column;
		min-width: 0;
		margin-right: auto;
	}
	.review-name {
		font-weight: 700;
	}
	.review-date {
		font-size: 0.8rem;
		opacity: 0.6;
	}
	.review-text {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.5;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.reviews-branding {
		text-align: center;
		margin-top: 2rem;
		font-size: 0.8rem;
		opacity: 0.5;
	}
	.reviews-branding a {
		color: inherit;
	}
	@media (prefers-reduced-motion: reduce) {
		.reviews-track {
			animation: none;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			width: 100%;
			-webkit-overflow-scrolling: touch;
		}
		.review-card {
			scroll-snap-align: start;
		}
	}
</style>
```

- [ ] **Step 2: Type-check the component**

Run: `pnpm exec svelte-check --tsconfig ./tsconfig.json`
Expected: no errors in `Reviews.svelte`.

- [ ] **Step 3: Commit**

```bash
git add src/lib/components/Reviews.svelte
git commit -m "feat(reviews): Reviews.svelte marquee component"
```

---

### Task 4: Wire into homepage + full verification

**Files:**
- Modify: `src/routes/+page.svelte`

**Interfaces:**
- Consumes: `<Reviews />` from `$lib/components/Reviews.svelte`.

- [ ] **Step 1: Import and place the component**

In `src/routes/+page.svelte` `<script>`, add the import alongside the others:
```ts
import Reviews from '$lib/components/Reviews.svelte';
```

In the markup, place it between `<About />` and `<Contact />`:
```svelte
<Hero />
<Services />
<About />
<Reviews />
<Contact />
```

- [ ] **Step 2: Verify the production build (prerender must not break)**

Run: `pnpm run build`
Expected: build succeeds; no error about `fetch`/`localStorage` during prerender (data fetch is inside `$effect`, client-only).

- [ ] **Step 3: Manual verification in the browser**

Run: `pnpm run dev`, open the homepage, and confirm:
  - Section appears between "O nás" and "Kontakt".
  - Rating summary shows `5,0`, filled stars, `12 recenzií na Google`.
  - Marquee auto-scrolls and **pauses on hover**.
  - CTA "Ohodnoťte nás na Google" opens the Google review page in a new tab.
  - Switching language (SK→EN→DE→HR) changes the heading, count noun, CTA, and review text (SK original vs English translation).
  - Avatars load; a review with a broken/missing avatar shows initials.

- [ ] **Step 4: Verify reduced-motion**

Enable "Reduce motion" in the OS/browser, reload:
  - Auto-scroll is off; the row is horizontally scrollable with snap.

- [ ] **Step 5: Verify graceful fallback**

Temporarily break the widget ID in `featurable.ts` (or go offline), reload dev:
  - The section renders nothing (no empty gap, no error); the rest of the page is intact.
  - Restore the correct widget ID afterwards.

- [ ] **Step 6: Commit**

```bash
git add src/routes/+page.svelte
git commit -m "feat(reviews): show Google reviews section on homepage"
```

---

## Self-Review

**Spec coverage:**
- Featurable v2 API + normalization → Task 1. ✅
- Client-side fetch, cache, graceful null → Task 1 (`fetchReviews`) + Task 3/4 (hide on null). ✅
- Rating summary header (score, stars, count, CTA via `writeAReviewUri`) → Task 3. ✅
- Auto-scroll marquee + hover pause + reduced-motion fallback → Task 3. ✅
- Review text by language (SK original / EN translation) → `pickReviewText`, Task 1 + used in Task 3. ✅
- Relative time via `Intl.RelativeTimeFormat` → Task 1. ✅
- Count pluralization (sk/en/de/hr) → `reviewNoun`, Task 1. ✅
- i18n labels in 4 languages → Task 2. ✅
- Powered-by-Featurable credit when `showBranding` → Task 3. ✅
- Placement between About and Contact, homepage only → Task 4. ✅
- No JSON-LD, no embed.js, no landing pages → nothing added (compliant). ✅
- Build stays green (client-only fetch) → Task 4 Step 2. ✅

**Placeholder scan:** No TBD/TODO; all steps contain real code or concrete commands. ✅

**Type consistency:** `Review`/`ReviewsData` fields and function signatures defined in Task 1 are used verbatim in Task 3 (`data.rating`, `data.count`, `data.writeAReviewUri`, `data.showBranding`, `review.authorName`, `review.avatarUrl`, `review.rating`, `review.publishedAt`). i18n keys defined in Task 2 (`reviews.title/on_google/cta/powered_by/loading`) match those consumed in Task 3. ✅

## Notes / caveats

- **CORS:** the Featurable API is built for browser embedding, so the client-side `fetch` is expected to work. If the browser blocks it (CORS), add a tiny Vercel serverless proxy `api/reviews.js` that fetches the API server-side and returns JSON, then point `API_URL` at `/api/reviews`. (Not in scope unless CORS fails during Task 4 Step 3.)
- **Review count:** the API returns however many reviews the Featurable widget is configured to expose (currently 4 of 12). Raising it is a Featurable dashboard setting, not code.
