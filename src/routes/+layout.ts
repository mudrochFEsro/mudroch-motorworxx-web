import type { LayoutLoad } from './$types';
import { langFromPath } from '$lib/i18n/langFromPath';

export const prerender = true;

export const load: LayoutLoad = ({ url }) => {
	return { lang: langFromPath(url.pathname) };
};
