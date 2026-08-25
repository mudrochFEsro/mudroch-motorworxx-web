import type { Lang } from './index';

const PREFIXED = new Set<Lang>(['en', 'de', 'hr']);

export function langFromPath(pathname: string): Lang {
	const seg = pathname.split('/').filter(Boolean)[0];
	return seg && PREFIXED.has(seg as Lang) ? (seg as Lang) : 'sk';
}
