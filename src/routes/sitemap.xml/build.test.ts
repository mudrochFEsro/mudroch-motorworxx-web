import { describe, it, expect } from 'vitest';
import { buildSitemap } from './build';

describe('buildSitemap', () => {
	it('includes xmlns:xhtml namespace', () => {
		const xml = buildSitemap('2026-08-25');
		expect(xml).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"');
	});

	it('includes lastmod for all URLs', () => {
		const xml = buildSitemap('2026-08-25');
		expect(xml).toContain('<lastmod>2026-08-25</lastmod>');
	});

	it('includes hreflang alternates for each page', () => {
		const xml = buildSitemap('2026-08-25');
		// brzdy page DE alternate
		expect(xml).toContain(
			'<xhtml:link rel="alternate" hreflang="de" href="https://mudrochmotorworxx.sk/de/bremsen-wechseln-bratislava"/>'
		);
		// x-default alternate
		expect(xml).toContain('<xhtml:link rel="alternate" hreflang="x-default"');
	});

	it('generates valid XML structure', () => {
		const xml = buildSitemap('2026-08-25');
		expect(xml).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?>/);
		expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
		expect(xml).toContain('</urlset>');
	});
});
