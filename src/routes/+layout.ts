import { langFromPath } from '$lib/i18n/langFromPath';

export const prerender = true;

export function load({ url }) {
	return { lang: langFromPath(url.pathname) };
}
