import { describe, it, expect } from 'vitest';
import { match } from './lang';

describe('lang param matcher', () => {
	it('matches non-default locales', () => {
		expect(match('en')).toBe(true);
		expect(match('de')).toBe(true);
		expect(match('hr')).toBe(true);
	});

	it('does NOT match sk (SK is at root, no prefix)', () => {
		expect(match('sk')).toBe(false);
	});

	it('rejects anything else', () => {
		expect(match('fr')).toBe(false);
		expect(match('')).toBe(false);
		expect(match('EN')).toBe(false);
	});
});
