import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Lang } from '$lib/i18n';
import { pageBySlug, allPrerenderEntries } from '$lib/seo/pages';

export const prerender = true;

export function entries() {
	return allPrerenderEntries().map((e) => ({ lang: e.lang, slug: e.slug }));
}

export const load: PageLoad = ({ params }) => {
	const lang = params.lang as Lang;
	const page = pageBySlug(lang, params.slug ?? '');
	if (!page) throw error(404, 'Not found');
	return { lang, pageKey: page.key, pageType: page.type };
};
