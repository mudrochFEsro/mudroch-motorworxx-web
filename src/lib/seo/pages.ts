import type { Lang } from '$lib/i18n';
import { SITE_URL } from './business';

export type PageType = 'home' | 'landing' | 'area' | 'article' | 'blog';

export type PageDef = {
	key: string;
	type: PageType;
	slug: Record<Lang, string>;
	changefreq: 'weekly' | 'monthly';
	priority: number;
	label: Record<Lang, string>;
};

export const LANGS: Lang[] = ['sk', 'en', 'de', 'hr'];

export const HOME: PageDef = {
	key: 'home',
	type: 'home',
	slug: { sk: '', en: '', de: '', hr: '' },
	changefreq: 'weekly',
	priority: 1.0,
	label: { sk: 'Domov', en: 'Home', de: 'Startseite', hr: 'Početna' }
};

export const PAGES: PageDef[] = [
	{
		key: 'rozvody', type: 'landing', changefreq: 'monthly', priority: 0.9,
		slug: {
			sk: 'vymena-rozvodov-bratislava',
			en: 'timing-belt-replacement-bratislava',
			de: 'zahnriemenwechsel-bratislava',
			hr: 'zamjena-zupcastog-remena-bratislava'
		},
		label: {
			sk: 'Výmena rozvodov', en: 'Timing belt replacement',
			de: 'Zahnriemenwechsel', hr: 'Zamjena zupčastog remena'
		}
	},
	{
		key: 'brzdy', type: 'landing', changefreq: 'monthly', priority: 0.9,
		slug: {
			sk: 'vymena-brzd-bratislava',
			en: 'brake-replacement-bratislava',
			de: 'bremsen-wechseln-bratislava',
			hr: 'zamjena-kocnica-bratislava'
		},
		label: {
			sk: 'Výmena bŕzd', en: 'Brake replacement',
			de: 'Bremsenwechsel', hr: 'Zamjena kočnica'
		}
	},
	{
		key: 'stk', type: 'landing', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'priprava-na-stk-bratislava',
			en: 'mot-inspection-prep-bratislava',
			de: 'tuv-vorbereitung-bratislava',
			hr: 'priprema-tehnicki-pregled-bratislava'
		},
		label: {
			sk: 'Príprava na STK a EK', en: 'MOT / inspection prep',
			de: 'TÜV-Vorbereitung', hr: 'Priprema za tehnički pregled'
		}
	},
	{
		key: 'diagnostika', type: 'landing', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'diagnostika-aut-bratislava',
			en: 'car-diagnostics-bratislava',
			de: 'fahrzeugdiagnose-bratislava',
			hr: 'dijagnostika-automobila-bratislava'
		},
		label: {
			sk: 'Diagnostika áut', en: 'Car diagnostics',
			de: 'Fahrzeugdiagnose', hr: 'Dijagnostika automobila'
		}
	},
	{
		key: 'tlmice', type: 'landing', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'vymena-tlmicov-bratislava',
			en: 'shock-absorbers-bratislava',
			de: 'stossdaempfer-wechseln-bratislava',
			hr: 'zamjena-amortizera-bratislava'
		},
		label: {
			sk: 'Výmena tlmičov a podvozok', en: 'Shock absorbers & suspension',
			de: 'Stoßdämpfer & Fahrwerk', hr: 'Amortizeri i ovjes'
		}
	},
	{
		key: 'vyfuk', type: 'landing', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'oprava-vyfuku-bratislava',
			en: 'exhaust-repair-bratislava',
			de: 'auspuff-reparatur-bratislava',
			hr: 'popravak-ispuha-bratislava'
		},
		label: {
			sk: 'Oprava výfuku', en: 'Exhaust repair',
			de: 'Auspuffreparatur', hr: 'Popravak ispuha'
		}
	},
	{
		key: 'area-pb', type: 'area', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'autoservis-podunajske-biskupice',
			en: 'car-service-podunajske-biskupice',
			de: 'autoservice-podunajske-biskupice',
			hr: 'autoservis-podunajske-biskupice'
		},
		label: {
			sk: 'Autoservis Podunajské Biskupice', en: 'Car service Podunajské Biskupice',
			de: 'Autoservice Podunajské Biskupice', hr: 'Autoservis Podunajské Biskupice'
		}
	},
	{
		key: 'area-vrakuna', type: 'area', changefreq: 'monthly', priority: 0.8,
		slug: {
			sk: 'autoservis-vrakuna',
			en: 'car-service-vrakuna',
			de: 'autoservice-vrakuna',
			hr: 'autoservis-vrakuna'
		},
		label: {
			sk: 'Autoservis Vrakuňa', en: 'Car service Vrakuňa',
			de: 'Autoservice Vrakuňa', hr: 'Autoservis Vrakuňa'
		}
	},
	{
		key: 'blog', type: 'blog', changefreq: 'weekly', priority: 0.7,
		slug: { sk: 'blog', en: 'blog', de: 'blog', hr: 'blog' },
		label: { sk: 'Poradňa', en: 'Blog', de: 'Ratgeber', hr: 'Savjeti' }
	},
	{
		key: 'article-rozvody', type: 'article', changefreq: 'monthly', priority: 0.6,
		slug: {
			sk: 'blog/kedy-menit-rozvody',
			en: 'blog/when-to-replace-timing-belt',
			de: 'blog/wann-zahnriemen-wechseln',
			hr: 'blog/kada-mijenjati-zupcasti-remen'
		},
		label: {
			sk: 'Kedy meniť rozvody',
			en: 'When to replace timing belt',
			de: 'Wann Zahnriemen wechseln',
			hr: 'Kada mijenjati zupčasti remen'
		}
	},
	{
		key: 'article-brzdy', type: 'article', changefreq: 'monthly', priority: 0.6,
		slug: {
			sk: 'blog/ako-spoznat-opotrebovane-brzdy',
			en: 'blog/signs-of-worn-brakes',
			de: 'blog/verschlissene-bremsen-erkennen',
			hr: 'blog/prepoznati-istrosene-kocnice'
		},
		label: {
			sk: 'Ako spoznať opotrebované brzdy',
			en: 'Signs of worn brakes',
			de: 'Verschlissene Bremsen erkennen',
			hr: 'Prepoznati istrošene kočnice'
		}
	}
];

const ALL = [HOME, ...PAGES];

export function slugFor(key: string, lang: Lang): string {
	const p = ALL.find((x) => x.key === key);
	if (!p) throw new Error(`Unknown page key: ${key}`);
	return p.slug[lang];
}

export function urlFor(key: string, lang: Lang): string {
	const slug = slugFor(key, lang);
	if (lang === 'sk') return slug === '' ? '/' : `/${slug}`;
	return slug === '' ? `/${lang}` : `/${lang}/${slug}`;
}

export function pageBySlug(lang: Lang, slug: string): PageDef | undefined {
	return ALL.find((p) => p.slug[lang] === slug);
}

export function allPrerenderEntries(): { lang: Lang; slug: string }[] {
	const out: { lang: Lang; slug: string }[] = [];
	for (const lang of LANGS) {
		if (lang === 'sk') continue;
		for (const p of ALL) out.push({ lang, slug: p.slug[lang] });
	}
	return out;
}

export function hreflangAlternates(key: string): { hreflang: string; href: string }[] {
	const alts = LANGS.map((lang) => ({ hreflang: lang, href: `${SITE_URL}${urlFor(key, lang)}` }));
	alts.push({ hreflang: 'x-default', href: `${SITE_URL}${urlFor(key, 'sk')}` });
	return alts;
}
