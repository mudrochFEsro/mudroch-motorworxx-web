import { describe, it, expect } from 'vitest';
import {
	PAGES, HOME, LANGS, slugFor, urlFor, pageBySlug, allPrerenderEntries
} from './pages';

describe('page register', () => {
	it('every page has a slug and label for all 4 languages', () => {
		for (const p of [HOME, ...PAGES]) {
			for (const lang of LANGS) {
				expect(typeof p.slug[lang]).toBe('string');
				expect(typeof p.label[lang]).toBe('string');
			}
		}
	});

	it('slugs are unique per language (no collisions)', () => {
		for (const lang of LANGS) {
			const slugs = [HOME, ...PAGES].map((p) => p.slug[lang]);
			expect(new Set(slugs).size).toBe(slugs.length);
		}
	});

	it('slugs are ASCII, lowercase, hyphenated (no diacritics/spaces)', () => {
		for (const p of PAGES) {
			for (const lang of LANGS) {
				expect(p.slug[lang]).toMatch(/^[a-z0-9-]+$/);
			}
		}
	});

	it('keeps existing SK landing URLs unchanged', () => {
		expect(slugFor('brzdy', 'sk')).toBe('vymena-brzd-bratislava');
		expect(slugFor('rozvody', 'sk')).toBe('vymena-rozvodov-bratislava');
	});

	it('builds correct URLs (SK root vs prefixed)', () => {
		expect(urlFor('home', 'sk')).toBe('/');
		expect(urlFor('home', 'en')).toBe('/en');
		expect(urlFor('brzdy', 'sk')).toBe('/vymena-brzd-bratislava');
		expect(urlFor('brzdy', 'en')).toBe('/en/brake-replacement-bratislava');
	});

	it('round-trips slug → page for non-SK', () => {
		const p = pageBySlug('en', 'brake-replacement-bratislava');
		expect(p?.key).toBe('brzdy');
		expect(pageBySlug('en', 'home')).toBeUndefined();
		expect(pageBySlug('en', '')?.key).toBe('home');
	});

	it('enumerates prerender entries for en/de/hr only (incl. home)', () => {
		const entries = allPrerenderEntries();
		expect(entries.every((e) => e.lang !== 'sk')).toBe(true);
		// 3 non-sk langs × (HOME + PAGES)
		expect(entries.length).toBe(3 * (1 + PAGES.length));
		expect(entries).toContainEqual({ lang: 'en', slug: '' });
		expect(entries).toContainEqual({ lang: 'de', slug: 'bremsen-wechseln-bratislava' });
	});
});
