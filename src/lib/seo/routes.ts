import type { Lang } from '$lib/i18n';

/**
 * Jediný zdroj pravdy pre landing (SEO) stránky.
 * Používa ho sitemap endpoint (auto-generovanie) aj interné prelinkovanie
 * (LocalArea hub, related odkazy). Nová stránka = jeden záznam tu.
 */
export type LandingRoute = {
	/** URL slug bez lomítka, napr. 'vymena-brzd-bratislava' */
	slug: string;
	/** sitemap changefreq */
	changefreq: 'weekly' | 'monthly';
	/** sitemap priority (0–1) */
	priority: number;
	/** Krátky lokalizovaný názov pre interné odkazy. */
	label: Record<Lang, string>;
};

export const LANDING_ROUTES: LandingRoute[] = [
	{
		slug: 'vymena-rozvodov-bratislava',
		changefreq: 'monthly',
		priority: 0.9,
		label: {
			sk: 'Výmena rozvodov',
			en: 'Timing belt replacement',
			de: 'Zahnriemenwechsel',
			hr: 'Zamjena zupčastog remena'
		}
	},
	{
		slug: 'vymena-brzd-bratislava',
		changefreq: 'monthly',
		priority: 0.9,
		label: {
			sk: 'Výmena bŕzd',
			en: 'Brake replacement',
			de: 'Bremsenwechsel',
			hr: 'Zamjena kočnica'
		}
	},
	{
		slug: 'priprava-na-stk-bratislava',
		changefreq: 'monthly',
		priority: 0.8,
		label: {
			sk: 'Príprava na STK a EK',
			en: 'MOT / inspection prep',
			de: 'TÜV-Vorbereitung',
			hr: 'Priprema za tehnički pregled'
		}
	},
	{
		slug: 'diagnostika-aut-bratislava',
		changefreq: 'monthly',
		priority: 0.8,
		label: {
			sk: 'Diagnostika áut',
			en: 'Car diagnostics',
			de: 'Fahrzeugdiagnose',
			hr: 'Dijagnostika automobila'
		}
	},
	{
		slug: 'vymena-tlmicov-bratislava',
		changefreq: 'monthly',
		priority: 0.8,
		label: {
			sk: 'Výmena tlmičov a podvozok',
			en: 'Shock absorbers & suspension',
			de: 'Stoßdämpfer & Fahrwerk',
			hr: 'Amortizeri i ovjes'
		}
	},
	{
		slug: 'oprava-vyfuku-bratislava',
		changefreq: 'monthly',
		priority: 0.8,
		label: {
			sk: 'Oprava výfuku',
			en: 'Exhaust repair',
			de: 'Auspuffreparatur',
			hr: 'Popravak ispuha'
		}
	},
	{
		slug: 'autoservis-podunajske-biskupice',
		changefreq: 'monthly',
		priority: 0.8,
		label: {
			sk: 'Autoservis Podunajské Biskupice',
			en: 'Car service Podunajské Biskupice',
			de: 'Autoservice Podunajské Biskupice',
			hr: 'Autoservis Podunajské Biskupice'
		}
	},
	{
		slug: 'autoservis-vrakuna',
		changefreq: 'monthly',
		priority: 0.8,
		label: {
			sk: 'Autoservis Vrakuňa',
			en: 'Car service Vrakuňa',
			de: 'Autoservice Vrakuňa',
			hr: 'Autoservis Vrakuňa'
		}
	}
];
