import { describe, it, expect } from 'vitest';
import { bcp47, serviceSchema, faqSchema, webPageSchema, organizationSchema, webSiteSchema, SAMEAS, articleSchema, blogSchema } from './business';

describe('locale-aware schemas', () => {
	it('bcp47 maps locales', () => {
		expect(bcp47('sk')).toBe('sk-SK');
		expect(bcp47('en')).toBe('en');
		expect(bcp47('de')).toBe('de-DE');
		expect(bcp47('hr')).toBe('hr-HR');
	});
	it('serviceSchema carries inLanguage', () => {
		const s = serviceSchema({ name: 'x', serviceType: 'y', url: 'https://z', description: 'd', lang: 'de' }) as any;
		expect(s.inLanguage).toBe('de-DE');
	});
	it('faqSchema carries inLanguage', () => {
		const s = faqSchema([{ q: 'a', a: 'b' }], 'hr') as any;
		expect(s.inLanguage).toBe('hr-HR');
		expect(s.mainEntity[0].name).toBe('a');
	});
	it('webPageSchema has speakable cssSelector + inLanguage', () => {
		const s = webPageSchema({ url: 'https://z', name: 'n', lang: 'en', speakableSelectors: ['.landing-answer'] }) as any;
		expect(s['@type']).toBe('WebPage');
		expect(s.inLanguage).toBe('en');
		expect(s.speakable['@type']).toBe('SpeakableSpecification');
		expect(s.speakable.cssSelector).toContain('.landing-answer');
	});
});

describe('organization + website schema', () => {
	it('SAMEAS has the 3 profile URLs', () => {
		expect(SAMEAS).toContain('https://www.instagram.com/mudrochmotorworxx');
		expect(SAMEAS).toContain('https://www.facebook.com/people/Mudrochmotorworxx/61566487743858/');
		expect(SAMEAS.some((u) => u.includes('kgmid=/g/11zg1cxrfh'))).toBe(true);
	});
	it('organizationSchema exposes sameAs + logo + @id', () => {
		const o = organizationSchema() as any;
		expect(o['@type']).toBe('Organization');
		expect(o['@id']).toContain('#organization');
		expect(Array.isArray(o.sameAs) && o.sameAs.length >= 3).toBe(true);
		expect(typeof o.logo).toBe('string');
	});
	it('webSiteSchema carries inLanguage + publisher ref', () => {
		const w = webSiteSchema('de') as any;
		expect(w['@type']).toBe('WebSite');
		expect(w.inLanguage).toBe('de-DE');
		expect(w.publisher['@id']).toContain('#organization');
	});
});

describe('article + blog schemas', () => {
	it('articleSchema is BlogPosting with all required fields', () => {
		const a = articleSchema({
			url: 'https://example.com/article',
			headline: 'Test Article',
			description: 'Test description',
			datePublished: '2026-01-15',
			dateModified: '2026-01-20',
			lang: 'en'
		}) as any;
		expect(a['@type']).toBe('BlogPosting');
		expect(a.mainEntityOfPage).toBe('https://example.com/article');
		expect(a.headline).toBe('Test Article');
		expect(a.description).toBe('Test description');
		expect(a.datePublished).toBe('2026-01-15');
		expect(a.dateModified).toBe('2026-01-20');
		expect(a.inLanguage).toBe('en');
		expect(a.author['@id']).toContain('#organization');
		expect(a.publisher['@id']).toContain('#organization');
		expect(a.image).toContain('og-image.png');
	});

	it('articleSchema uses custom image if provided', () => {
		const a = articleSchema({
			url: 'https://example.com/article',
			headline: 'Test',
			description: 'Desc',
			datePublished: '2026-01-15',
			dateModified: '2026-01-15',
			lang: 'sk',
			image: 'https://example.com/custom.jpg'
		}) as any;
		expect(a.image).toBe('https://example.com/custom.jpg');
	});

	it('blogSchema is Blog with blogPost array', () => {
		const b = blogSchema({
			url: 'https://example.com/blog',
			lang: 'de',
			posts: [
				{ url: 'https://example.com/post1', name: 'Post 1' },
				{ url: 'https://example.com/post2', name: 'Post 2' }
			]
		}) as any;
		expect(b['@type']).toBe('Blog');
		expect(b['@id']).toBe('https://example.com/blog');
		expect(b.inLanguage).toBe('de-DE');
		expect(Array.isArray(b.blogPost)).toBe(true);
		expect(b.blogPost).toHaveLength(2);
		expect(b.blogPost[0]['@type']).toBe('BlogPosting');
		expect(b.blogPost[0].headline).toBe('Post 1');
		expect(b.blogPost[0].url).toBe('https://example.com/post1');
	});
});
