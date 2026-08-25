import { SITE_URL } from '$lib/seo/business';
import { HOME, PAGES, LANGS, urlFor, hreflangAlternates } from '$lib/seo/pages';

export function buildSitemap(lastmod: string): string {
	const defs = [HOME, ...PAGES];
	const urls: string[] = [];

	for (const lang of LANGS) {
		for (const page of defs) {
			const loc = `${SITE_URL}${urlFor(page.key, lang)}`;
			const alternates = hreflangAlternates(page.key);
			const alternateLinks = alternates
				.map(
					(alt) =>
						`    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}"/>`
				)
				.join('\n');

			urls.push(
				`  <url>\n` +
					`    <loc>${loc}</loc>\n` +
					`    <lastmod>${lastmod}</lastmod>\n` +
					`    <changefreq>${page.changefreq}</changefreq>\n` +
					`    <priority>${page.priority.toFixed(1)}</priority>\n` +
					alternateLinks +
					`\n  </url>`
			);
		}
	}

	return (
		`<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
		urls.join('\n') +
		`\n</urlset>\n`
	);
}
