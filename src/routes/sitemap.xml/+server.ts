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
