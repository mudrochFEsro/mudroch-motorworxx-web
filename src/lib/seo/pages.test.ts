import { describe, it, expect } from 'vitest';
import {
	PAGES, HOME, LANGS, slugFor, urlFor, pageBySlug, allPrerenderEntries, hreflangAlternates
} from './pages';
import { SITE_URL } from './business';

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
				expect(p.slug[lang]).toMatch(/^[a-z0-9/-]+$/);
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

describe('hreflangAlternates', () => {
	it('emits reciprocal alternates for all langs + x-default → SK', () => {
		const alts = hreflangAlternates('brzdy');
		expect(alts).toContainEqual({ hreflang: 'sk', href: `${SITE_URL}/vymena-brzd-bratislava` });
		expect(alts).toContainEqual({ hreflang: 'en', href: `${SITE_URL}/en/brake-replacement-bratislava` });
		expect(alts).toContainEqual({ hreflang: 'de', href: `${SITE_URL}/de/bremsen-wechseln-bratislava` });
		expect(alts).toContainEqual({ hreflang: 'hr', href: `${SITE_URL}/hr/zamjena-kocnica-bratislava` });
		expect(alts).toContainEqual({ hreflang: 'x-default', href: `${SITE_URL}/vymena-brzd-bratislava` });
		expect(alts).toHaveLength(5);
	});
});

describe('blog + articles', () => {
	it('blog index exists (type blog)', () => {
		const blog = PAGES.find((p) => p.key === 'blog');
		expect(blog?.type).toBe('blog');
		expect(blog?.slug.sk).toBe('blog');
		expect(blog?.slug.en).toBe('blog');
		expect(blog?.slug.de).toBe('blog');
		expect(blog?.slug.hr).toBe('blog');
	});

	it('article-rozvody and article-brzdy exist (type article)', () => {
		const rozvody = PAGES.find((p) => p.key === 'article-rozvody');
		expect(rozvody?.type).toBe('article');
		const brzdy = PAGES.find((p) => p.key === 'article-brzdy');
		expect(brzdy?.type).toBe('article');
	});

	it('article slugs contain / separator', () => {
		expect(slugFor('article-rozvody', 'sk')).toBe('blog/kedy-menit-rozvody');
		expect(slugFor('article-rozvody', 'en')).toBe('blog/when-to-replace-timing-belt');
		expect(slugFor('article-brzdy', 'sk')).toBe('blog/ako-spoznat-opotrebovane-brzdy');
		expect(slugFor('article-brzdy', 'en')).toBe('blog/signs-of-worn-brakes');
	});

	it('urlFor article builds nested path', () => {
		expect(urlFor('article-rozvody', 'en')).toBe('/en/blog/when-to-replace-timing-belt');
		expect(urlFor('article-rozvody', 'sk')).toBe('/blog/kedy-menit-rozvody');
	});

	it('pageBySlug resolves articles', () => {
		expect(pageBySlug('en', 'blog/when-to-replace-timing-belt')?.key).toBe('article-rozvody');
		expect(pageBySlug('sk', 'blog')?.type).toBe('blog');
	});
});
