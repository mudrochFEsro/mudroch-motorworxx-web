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
