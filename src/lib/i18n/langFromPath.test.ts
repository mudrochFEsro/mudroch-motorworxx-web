import { describe, it, expect } from 'vitest';
import { langFromPath } from './langFromPath';

describe('langFromPath', () => {
	it('returns sk for root and non-prefixed paths', () => {
		expect(langFromPath('/')).toBe('sk');
		expect(langFromPath('/vymena-brzd-bratislava')).toBe('sk');
	});
	it('returns the prefixed locale', () => {
		expect(langFromPath('/en')).toBe('en');
		expect(langFromPath('/de/bremsen-wechseln-bratislava')).toBe('de');
		expect(langFromPath('/hr/')).toBe('hr');
	});
	it('treats unknown first segments as sk', () => {
		expect(langFromPath('/fr/foo')).toBe('sk');
	});
});
