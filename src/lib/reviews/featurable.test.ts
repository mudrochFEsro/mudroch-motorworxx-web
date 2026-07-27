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

	it('rejects javascript: URI scheme in writeAReviewUri', () => {
		const raw = structuredClone(RAW);
		raw.widget.gbpLocationSummary.writeAReviewUri = 'javascript:alert(1)';
		const data = normalizeWidget(raw);
		expect(data!.writeAReviewUri).toBeNull();
	});

	it('accepts https: URI scheme in writeAReviewUri', () => {
		const raw = structuredClone(RAW);
		raw.widget.gbpLocationSummary.writeAReviewUri = 'https://g.page/review';
		const data = normalizeWidget(raw);
		expect(data!.writeAReviewUri).toBe('https://g.page/review');
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
	it('uses German plural forms', () => {
		expect(reviewNoun(1, 'de')).toBe('Bewertung');
		expect(reviewNoun(2, 'de')).toBe('Bewertungen');
	});
	it('uses Croatian plural forms', () => {
		expect(reviewNoun(1, 'hr')).toBe('recenzija');
		expect(reviewNoun(2, 'hr')).toBe('recenzije');
		expect(reviewNoun(5, 'hr')).toBe('recenzija');
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
