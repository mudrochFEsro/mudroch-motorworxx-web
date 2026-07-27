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
