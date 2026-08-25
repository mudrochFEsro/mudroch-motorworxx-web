import { describe, it, expect } from 'vitest';
import { bcp47, serviceSchema, faqSchema, webPageSchema } from './business';

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
