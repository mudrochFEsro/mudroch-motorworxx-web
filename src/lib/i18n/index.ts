import { writable, derived } from 'svelte/store';
import sk from './sk.json';
import en from './en.json';
import de from './de.json';

type Language = 'sk' | 'en' | 'de';
type Translations = typeof sk;

const translations: Record<Language, Translations> = { sk, en, de };

function createLangStore() {
	const getInitialLang = (): Language => {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('lang') as Language;
			if (stored && translations[stored]) {
				return stored;
			}
		}
		return 'sk';
	};

	const { subscribe, set, update } = writable<Language>(getInitialLang());

	return {
		subscribe,
		set: (lang: Language) => {
			if (typeof window !== 'undefined') {
				localStorage.setItem('lang', lang);
				document.documentElement.lang = lang;
			}
			set(lang);
		},
		update
	};
}

export const currentLang = createLangStore();

export const t = derived(currentLang, ($lang) => {
	return (key: string): string => {
		const keys = key.split('.');
		let value: unknown = translations[$lang];

		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = (value as Record<string, unknown>)[k];
			} else {
				return key;
			}
		}

		return typeof value === 'string' ? value : key;
	};
});

export const languages = [
	{ code: 'sk' as Language, label: 'SK', name: 'Slovenčina' },
	{ code: 'en' as Language, label: 'EN', name: 'English' },
	{ code: 'de' as Language, label: 'DE', name: 'Deutsch' }
] as const;
