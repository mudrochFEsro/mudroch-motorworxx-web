import type { ParamMatcher } from '@sveltejs/kit';

const PREFIXED_LOCALES = new Set(['en', 'de', 'hr']);

export const match: ParamMatcher = (param) => PREFIXED_LOCALES.has(param);
