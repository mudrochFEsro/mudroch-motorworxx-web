import type { Lang } from '$lib/i18n';

export type LandingSeo = {
	keywords: Record<Lang, string>;
	service: { serviceType: string; description: string };
	icons: string[];
};

export const landingSeo: Record<string, LandingSeo> = {
	brzdy: {
		keywords: {
			sk: 'výmena bŕzd, výmena bŕzd Bratislava, oprava bŕzd, servis bŕzd, brzdové platničky, brzdové kotúče, výmena brzdových platničiek, výmena brzdových kotúčov, brzdový strmeň, brzdová kvapalina, odvzdušnenie bŕzd, diagnostika bŕzd, kontrola bŕzd, oprava brzdového systému, servis brzdového systému',
			en: 'brake replacement Bratislava, brake pad replacement, brake disc replacement, brake service, brake fluid change, brake bleeding, brake caliper, squeaking brakes, worn brakes',
			de: 'Bremsen wechseln Bratislava, Bremsbeläge wechseln, Bremsscheiben wechseln, Bremsenservice, Bremsflüssigkeit wechseln, Bremsen entlüften, Bremssattel, Bremsen quietschen',
			hr: 'zamjena kočnica Bratislava, zamjena pločica, zamjena diskova, servis kočnica, zamjena kočione tekućine, odzračivanje kočnica, škripanje kočnica'
		},
		service: {
			serviceType: 'Výmena a servis bŕzd (platničky, kotúče, kvapalina)',
			description:
				'Odborná výmena bŕzd v Bratislave – brzdové platničky a kotúče, brzdový strmeň, brzdová kvapalina, odvzdušnenie a diagnostika brzdového systému.'
		},
		icons: [
			'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>',
			'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/>',
			'<path d="M12 2v6m0 0a4 4 0 1 0 4 4"/><path d="M12 8a4 4 0 0 1 4 4"/>',
			'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"/>'
		]
	},
	rozvody: {
		keywords: {
			sk: 'výmena rozvodov, výmena rozvodov Bratislava, oprava rozvodov, rozvody motora, rozvodový remeň, rozvodová reťaz, výmena rozvodového remeňa, výmena rozvodovej reťaze, servis rozvodov, výmena vodnej pumpy, diagnostika motora, oprava motora, cena výmeny rozvodov, interval výmeny rozvodov, hlučné rozvody',
			en: 'timing belt replacement Bratislava, timing belt vs timing chain, timing belt interval km, timing belt symptoms, water pump replacement with timing belt, timing belt failure consequences, timing chain stretched, timing kit price',
			de: 'Zahnriemen wechseln Bratislava, Zahnriemen oder Steuerkette, Zahnriemen Intervall km, Zahnriemen Anzeichen Verschleiß, Wasserpumpe mit Zahnriemen wechseln, Zahnriemen gerissen Folgen, Steuerkette gelängt, Zahnriemensatz Preis',
			hr: 'zamjena zupčastog remena Bratislava, zupčasti remen ili lanac, interval zupčastog remena, simptomi istrošenog remena, zamjena vodene pumpe s remenom, posljedice puknuća remena, cijena kompleta remena'
		},
		service: {
			serviceType: 'Výmena rozvodov (rozvodový remeň a reťaz)',
			description:
				'Odborná výmena rozvodov v Bratislave – rozvodový remeň, rozvodová reťaz, vodná pumpa, kladky a napínáky, vrátane diagnostiky motora.'
		},
		icons: [
			'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>',
			'<path d="M6 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/><path d="M9 12h6"/>',
			'<path d="M12 2v6m0 0a4 4 0 1 0 4 4"/><path d="M12 8a4 4 0 0 1 4 4"/>',
			'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"/>'
		]
	},
	stk: {
		keywords: {
			sk: 'príprava na STK Bratislava, príprava na STK a EK, kontrola pred STK, oprava pred STK, príprava vozidla na technickú a emisnú kontrolu, STK a EK Bratislava',
			en: 'MOT preparation Bratislava, pre-MOT check, technical and emission inspection prep, fix before MOT, car inspection preparation Bratislava, MOT and emissions test prep',
			de: 'TÜV-Vorbereitung Bratislava, Vorbereitung auf die Hauptuntersuchung, Vorbereitung auf technische und Abgasuntersuchung, vor dem TÜV reparieren, HU und AU Vorbereitung Bratislava',
			hr: 'priprema za tehnički pregled Bratislava, pregled prije tehničkog, priprema za tehnički i ekološki pregled, popravak prije tehničkog pregleda, priprema vozila za tehnički pregled'
		},
		service: {
			serviceType: 'Príprava vozidla na technickú a emisnú kontrolu (STK/EK)',
			description:
				'Profesionálna príprava vozidla na STK a EK v Bratislave – kontrola a oprava bŕzd, tlmičov, svetiel, emisií, geometrie a výfuku.'
		},
		icons: [
			'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
			'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
			'<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>',
			'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
		]
	},
	diagnostika: {
		keywords: {
			sk: 'diagnostika áut Bratislava, počítačová diagnostika, autodiagnostika, vyčítanie chýb, chybové kódy, diagnostika motora, OBD diagnostika Bratislava, rozsvietená kontrolka, diagnostika vozidiel, vyčítanie chybových kódov, Check Engine, kontrolka motora, diagnostika ABS, diagnostika airbag, diagnostika elektroniky, diagnostika podvozku',
			en: 'car diagnostics Bratislava, computer diagnostics, engine fault codes, check engine light diagnosis, OBD diagnostics, ABS diagnostics, airbag diagnostics, vehicle diagnostics, fault code reading, engine diagnostics',
			de: 'Fahrzeugdiagnose Bratislava, Computerdiagnose, Fehlerspeicher auslesen, Motorkontrollleuchte Diagnose, OBD-Diagnose, ABS-Diagnose, Airbag-Diagnose, Autodiagnose, Fehlercodes auslesen, Motordiagnose',
			hr: 'dijagnostika automobila Bratislava, kompjuterska dijagnostika, očitanje grešaka motora, dijagnostika lampice motora, OBD dijagnostika, dijagnostika ABS, dijagnostika airbaga, dijagnostika vozila, očitavanje kodova grešaka, dijagnostika motora'
		},
		service: {
			serviceType: 'Počítačová diagnostika vozidiel (motor, elektronika, podvozok)',
			description:
				'Profesionálna počítačová diagnostika vozidiel v Bratislave – vyčítanie chybových kódov OBD, diagnostika motora, elektroniky a podvozku, riešenie rozsvietených kontroliek (Check Engine, ABS, airbag).'
		},
		icons: [
			'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
			'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
			'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
			'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'
		]
	},
	tlmice: {
		keywords: {
			sk: 'výmena tlmičov, výmena tlmičov Bratislava, oprava podvozku, servis podvozku, tlmiče pruženia, predné tlmiče, zadné tlmiče, silentbloky, čapy riadenia, ramená nápravy, ložiská podvozku, diagnostika podvozku, kontrola tlmičov, oprava pruženia, servis tlmičov Bratislava',
			en: 'shock absorber replacement Bratislava, suspension repair, worn shock absorbers, front and rear shocks, bushings, ball joints, control arm, wheel bearing, suspension diagnostics, knocking suspension, shock absorber check',
			de: 'Stoßdämpfer wechseln Bratislava, Fahrwerk reparieren, verschlissene Stoßdämpfer, vordere und hintere Stoßdämpfer, Buchsen, Traggelenk, Querlenker, Radlager, Fahrwerksdiagnose, Klopfen im Fahrwerk, Stoßdämpferkontrolle',
			hr: 'zamjena amortizera Bratislava, popravak ovjesa, istrošeni amortizeri, prednji i stražnji amortizeri, silentblokovi, kuglasti zglob, ramena ovjesa, ležaj kotača, dijagnostika ovjesa, lupanje iz ovjesa'
		},
		service: {
			serviceType: 'Výmena tlmičov pruženia a oprava podvozku (silentbloky, čapy, ramená)',
			description:
				'Odborná výmena tlmičov a oprava podvozku v Bratislave – predné a zadné tlmiče pruženia, silentbloky, čapy riadenia, ramená nápravy, ložiská a kompletná diagnostika podvozku.'
		},
		icons: [
			'<circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/><path d="m4.93 4.93 2.83 2.83m8.48 8.48 2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>',
			'<path d="M2 12h20M12 2v20"/><circle cx="12" cy="12" r="4"/>',
			'<circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>',
			'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
		]
	},
	vyfuk: {
		keywords: {
			sk: 'oprava výfuku, oprava výfuku Bratislava, výmena výfuku, servis výfuku, tlmič výfuku, zváranie výfuku, katalyzátor, lambda sonda, výfukový systém, výfukové príruby, oprava katalyzátora, výmena lambda sondy, diagnostika výfuku, zváranie tlmiča, výfukový servis Bratislava',
			en: 'exhaust repair Bratislava, muffler replacement, exhaust pipe welding, catalytic converter, lambda sensor, exhaust system service, exhaust replacement, exhaust leak repair, exhaust welding',
			de: 'Auspuff reparieren Bratislava, Auspuff wechseln, Endschalldämpfer, Auspuff schweißen, Katalysator, Lambdasonde, Auspuffanlagen-Service, Auspuffreparatur Bratislava, Schalldämpfer wechseln',
			hr: 'popravak ispuha Bratislava, zamjena auspuha, zavarivanje ispuha, katalizator, lambda sonda, servis ispušnog sustava, zamjena prigušivača ispuha, popravak ispušnog sustava'
		},
		service: {
			serviceType: 'Oprava a výmena výfukového systému (tlmič, katalyzátor, lambda)',
			description:
				'Odborná oprava výfuku v Bratislave – tlmič výfuku, zváranie výfuku, katalyzátor, lambda sonda, výfukové príruby. Komplexný servis výfukového systému.'
		},
		icons: [
			'<path d="M3 12h18M3 12l5-5m-5 5l5 5m10-5l5-5m-5 5l5 5"/><circle cx="12" cy="12" r="2"/>',
			'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>',
			'<rect x="3" y="8" width="18" height="8" rx="2"/><path d="M7 4v4m10-4v4M7 16v4m10-4v4"/>',
			'<path d="M12 2v20M5 8h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"/><path d="M8 12h.01M16 12h.01"/>'
		]
	},
	'area-pb': {
		keywords: {
			sk: 'autoservis Podunajské Biskupice, servis áut Podunajské Biskupice, autoservis Bratislava Podunajské Biskupice, autoservis Závodná, autoopravovňa Podunajské Biskupice',
			en: 'car service Podunajské Biskupice, auto repair Podunajské Biskupice, garage near me Bratislava II, car mechanic Podunajské Biskupice, car service Závodná',
			de: 'Autoservice Podunajské Biskupice, Autowerkstatt Podunajské Biskupice, KFZ-Werkstatt Bratislava, Automechaniker Podunajské Biskupice, Autoservice Závodná',
			hr: 'autoservis Podunajské Biskupice, automehaničar Podunajské Biskupice, servis automobila Podunajské Biskupice, autoservis Bratislava Podunajské Biskupice'
		},
		service: {
			serviceType: 'Kompletný autoservis (rozvody, brzdy, tlmiče, výfuk, diagnostika, STK)',
			description:
				'Kompletný autoservis v Podunajských Biskupiciach na Závodná 10143/26 – výmena rozvodov, bŕzd, tlmičov, oprava výfuku, diagnostika a príprava na STK/EK.'
		},
		icons: [
			'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
			'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
			'<path d="M12 2L2 7l10 5 10-5-10-5z"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
			'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'
		]
	},
	'area-vrakuna': {
		keywords: {
			sk: 'autoservis Vrakuňa, servis áut Vrakuňa, autoservis Bratislava Vrakuňa, autoopravovňa Vrakuňa, autoservis blízko Vrakune',
			en: 'car service Vrakuňa, auto repair Vrakuňa Bratislava, garage near Vrakuňa, car mechanic near Vrakuňa, mobile car service Vrakuňa',
			de: 'Autoservice Vrakuňa, Autowerkstatt Vrakuňa Bratislava, KFZ-Werkstatt in der Nähe von Vrakuňa, mobiler Autoservice Vrakuňa',
			hr: 'autoservis Vrakuňa, automehaničar Vrakuňa, servis automobila blizu Vrakune, mobilni autoservis Vrakuňa'
		},
		service: {
			serviceType: 'Kompletný autoservis pre Vrakuňu (rozvody, brzdy, tlmiče, výfuk, diagnostika, STK)',
			description:
				'Autoservis blízko Vrakune – komplexný servis áut v Podunajských Biskupiciach. Rozvody, brzdy, tlmiče, výfuk, diagnostika, príprava na STK/EK. Mobilný autoservis.'
		},
		icons: [
			'<path d="M12 2v6m0 0a4 4 0 1 0 4 4"/><path d="M12 8a4 4 0 0 1 4 4"/>',
			'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"/>',
			'<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>',
			'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>'
		]
	}
};
