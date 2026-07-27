import type { Lang } from '$lib/i18n';

/**
 * Texty pre sekciu „Autoservis v Bratislave a okolí" (LocalArea) na homepage.
 * Lokálny obsah + obsluhované oblasti + interný hub odkazov na landing stránky.
 * Pozn.: viditeľne spomíname „mobilný autoservis" (právne správne), SEO cielenie
 * je na „autoservis + lokalita".
 */
export type LocalAreaContent = {
	title: string;
	lead: string;
	areasTitle: string;
	areas: string[];
	servicesTitle: string;
	mapTitle: string;
};

export const localArea: Record<Lang, LocalAreaContent> = {
	sk: {
		title: 'Autoservis v Bratislave a okolí',
		lead: 'Sme <strong>autoservis v Bratislave – Podunajských Biskupiciach</strong> (Závodná 10143/26). Postaráme sa o vaše auto priamo u nás a vieme prísť aj ako <strong>mobilný autoservis</strong>. Obsluhujeme Podunajské Biskupice, Vrakuňu, Ružinov aj celú Bratislavu.',
		areasTitle: 'Obsluhované oblasti',
		areas: ['Podunajské Biskupice', 'Vrakuňa', 'Ružinov', 'Bratislava II', 'Nivy', 'Prievoz'],
		servicesTitle: 'Naše služby',
		mapTitle: 'Mapa – autoservis MUDROCH MOTORWORXX, Závodná 10143/26, Bratislava'
	},
	en: {
		title: 'Car service in Bratislava and surroundings',
		lead: 'We are a <strong>car service in Bratislava – Podunajské Biskupice</strong> (Závodná 10143/26). We take care of your car at our place and can also come to you as a <strong>mobile car service</strong>. We serve Podunajské Biskupice, Vrakuňa, Ružinov and all of Bratislava.',
		areasTitle: 'Areas we serve',
		areas: ['Podunajské Biskupice', 'Vrakuňa', 'Ružinov', 'Bratislava II', 'Nivy', 'Prievoz'],
		servicesTitle: 'Our services',
		mapTitle: 'Map – MUDROCH MOTORWORXX car service, Závodná 10143/26, Bratislava'
	},
	de: {
		title: 'Autoservice in Bratislava und Umgebung',
		lead: 'Wir sind ein <strong>Autoservice in Bratislava – Podunajské Biskupice</strong> (Závodná 10143/26). Wir kümmern uns bei uns um Ihr Auto und kommen auf Wunsch als <strong>mobiler Autoservice</strong> zu Ihnen. Wir bedienen Podunajské Biskupice, Vrakuňa, Ružinov und ganz Bratislava.',
		areasTitle: 'Servicegebiete',
		areas: ['Podunajské Biskupice', 'Vrakuňa', 'Ružinov', 'Bratislava II', 'Nivy', 'Prievoz'],
		servicesTitle: 'Unsere Leistungen',
		mapTitle: 'Karte – MUDROCH MOTORWORXX Autoservice, Závodná 10143/26, Bratislava'
	},
	hr: {
		title: 'Autoservis u Bratislavi i okolici',
		lead: 'Mi smo <strong>autoservis u Bratislavi – Podunajské Biskupice</strong> (Závodná 10143/26). Pobrinut ćemo se za vaš automobil kod nas, a možemo doći i kao <strong>mobilni autoservis</strong>. Uslužujemo Podunajské Biskupice, Vrakuňu, Ružinov i cijelu Bratislavu.',
		areasTitle: 'Područja koja pokrivamo',
		areas: ['Podunajské Biskupice', 'Vrakuňa', 'Ružinov', 'Bratislava II', 'Nivy', 'Prievoz'],
		servicesTitle: 'Naše usluge',
		mapTitle: 'Karta – MUDROCH MOTORWORXX autoservis, Závodná 10143/26, Bratislava'
	}
};
