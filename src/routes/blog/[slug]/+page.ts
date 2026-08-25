import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { pageBySlug, PAGES } from '$lib/seo/pages';

export const prerender = true;

export function entries() {
	return PAGES.filter((p) => p.type === 'article').map((p) => ({
		slug: p.slug.sk.replace('blog/', '')
	}));
}

export const load: PageLoad = ({ params }) => {
	const p = pageBySlug('sk', 'blog/' + params.slug);
	if (!p || p.type !== 'article') throw error(404, 'Not found');
	return { pageKey: p.key };
};
