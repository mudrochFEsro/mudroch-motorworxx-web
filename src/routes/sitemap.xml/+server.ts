import { SITE_URL } from '$lib/seo/business';
import { LANDING_ROUTES } from '$lib/seo/routes';

// Prerenderuje sa do statického build/sitemap.xml (adapter-static).
export const prerender = true;

type SitemapEntry = { loc: string; changefreq: string; priority: number };

export function GET() {
	const entries: SitemapEntry[] = [
		{ loc: `${SITE_URL}/`, changefreq: 'weekly', priority: 1.0 },
		...LANDING_ROUTES.map((r) => ({
			loc: `${SITE_URL}/${r.slug}`,
			changefreq: r.changefreq,
			priority: r.priority
		}))
	];

	const body =
		`<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
		entries
			.map(
				(u) =>
					`  <url>\n` +
					`    <loc>${u.loc}</loc>\n` +
					`    <changefreq>${u.changefreq}</changefreq>\n` +
					`    <priority>${u.priority.toFixed(1)}</priority>\n` +
					`  </url>`
			)
			.join('\n') +
		`\n</urlset>\n`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
