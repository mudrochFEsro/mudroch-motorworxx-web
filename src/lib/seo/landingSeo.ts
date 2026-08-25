import type { Lang } from '$lib/i18n';

export type LandingSeo = {
	keywords: Record<Lang, string>;
	service: { serviceType: string; description: string };
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
		}
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
		}
	},
	stk: {
		keywords: {
			sk: 'príprava na STK Bratislava, príprava na STK a EK, kontrola pred STK, oprava pred STK, príprava vozidla na technickú a emisnú kontrolu, STK a EK Bratislava',
			en: 'príprava na STK Bratislava, príprava na STK a EK, kontrola pred STK, oprava pred STK, príprava vozidla na technickú a emisnú kontrolu, STK a EK Bratislava',
			de: 'príprava na STK Bratislava, príprava na STK a EK, kontrola pred STK, oprava pred STK, príprava vozidla na technickú a emisnú kontrolu, STK a EK Bratislava',
			hr: 'príprava na STK Bratislava, príprava na STK a EK, kontrola pred STK, oprava pred STK, príprava vozidla na technickú a emisnú kontrolu, STK a EK Bratislava'
		},
		service: {
			serviceType: 'Príprava vozidla na technickú a emisnú kontrolu (STK/EK)',
			description:
				'Profesionálna príprava vozidla na STK a EK v Bratislave – kontrola a oprava bŕzd, tlmičov, svetiel, emisií, geometrie a výfuku.'
		}
	},
	diagnostika: {
		keywords: {
			sk: 'diagnostika áut Bratislava, počítačová diagnostika, autodiagnostika, vyčítanie chýb, chybové kódy, diagnostika motora, OBD diagnostika Bratislava, rozsvietená kontrolka, diagnostika vozidiel, vyčítanie chybových kódov, Check Engine, kontrolka motora, diagnostika ABS, diagnostika airbag, diagnostika elektroniky, diagnostika podvozku',
			en: 'diagnostika áut Bratislava, počítačová diagnostika, autodiagnostika, vyčítanie chýb, chybové kódy, diagnostika motora, OBD diagnostika Bratislava, rozsvietená kontrolka, diagnostika vozidiel, vyčítanie chybových kódov, Check Engine, kontrolka motora, diagnostika ABS, diagnostika airbag, diagnostika elektroniky, diagnostika podvozku',
			de: 'diagnostika áut Bratislava, počítačová diagnostika, autodiagnostika, vyčítanie chýb, chybové kódy, diagnostika motora, OBD diagnostika Bratislava, rozsvietená kontrolka, diagnostika vozidiel, vyčítanie chybových kódov, Check Engine, kontrolka motora, diagnostika ABS, diagnostika airbag, diagnostika elektroniky, diagnostika podvozku',
			hr: 'diagnostika áut Bratislava, počítačová diagnostika, autodiagnostika, vyčítanie chýb, chybové kódy, diagnostika motora, OBD diagnostika Bratislava, rozsvietená kontrolka, diagnostika vozidiel, vyčítanie chybových kódov, Check Engine, kontrolka motora, diagnostika ABS, diagnostika airbag, diagnostika elektroniky, diagnostika podvozku'
		},
		service: {
			serviceType: 'Počítačová diagnostika vozidiel (motor, elektronika, podvozok)',
			description:
				'Profesionálna počítačová diagnostika vozidiel v Bratislave – vyčítanie chybových kódov OBD, diagnostika motora, elektroniky a podvozku, riešenie rozsvietených kontroliek (Check Engine, ABS, airbag).'
		}
	},
	tlmice: {
		keywords: {
			sk: 'výmena tlmičov, výmena tlmičov Bratislava, oprava podvozku, servis podvozku, tlmiče pruženia, predné tlmiče, zadné tlmiče, silentbloky, čapy riadenia, ramená nápravy, ložiská podvozku, diagnostika podvozku, kontrola tlmičov, oprava pruženia, servis tlmičov Bratislava',
			en: 'výmena tlmičov, výmena tlmičov Bratislava, oprava podvozku, servis podvozku, tlmiče pruženia, predné tlmiče, zadné tlmiče, silentbloky, čapy riadenia, ramená nápravy, ložiská podvozku, diagnostika podvozku, kontrola tlmičov, oprava pruženia, servis tlmičov Bratislava',
			de: 'výmena tlmičov, výmena tlmičov Bratislava, oprava podvozku, servis podvozku, tlmiče pruženia, predné tlmiče, zadné tlmiče, silentbloky, čapy riadenia, ramená nápravy, ložiská podvozku, diagnostika podvozku, kontrola tlmičov, oprava pruženia, servis tlmičov Bratislava',
			hr: 'výmena tlmičov, výmena tlmičov Bratislava, oprava podvozku, servis podvozku, tlmiče pruženia, predné tlmiče, zadné tlmiče, silentbloky, čapy riadenia, ramená nápravy, ložiská podvozku, diagnostika podvozku, kontrola tlmičov, oprava pruženia, servis tlmičov Bratislava'
		},
		service: {
			serviceType: 'Výmena tlmičov pruženia a oprava podvozku (silentbloky, čapy, ramená)',
			description:
				'Odborná výmena tlmičov a oprava podvozku v Bratislave – predné a zadné tlmiče pruženia, silentbloky, čapy riadenia, ramená nápravy, ložiská a kompletná diagnostika podvozku.'
		}
	},
	vyfuk: {
		keywords: {
			sk: 'oprava výfuku, oprava výfuku Bratislava, výmena výfuku, servis výfuku, tlmič výfuku, zváranie výfuku, katalyzátor, lambda sonda, výfukový systém, výfukové príruby, oprava katalyzátora, výmena lambda sondy, diagnostika výfuku, zváranie tlmiča, výfukový servis Bratislava',
			en: 'oprava výfuku, oprava výfuku Bratislava, výmena výfuku, servis výfuku, tlmič výfuku, zváranie výfuku, katalyzátor, lambda sonda, výfukový systém, výfukové príruby, oprava katalyzátora, výmena lambda sondy, diagnostika výfuku, zváranie tlmiča, výfukový servis Bratislava',
			de: 'oprava výfuku, oprava výfuku Bratislava, výmena výfuku, servis výfuku, tlmič výfuku, zváranie výfuku, katalyzátor, lambda sonda, výfukový systém, výfukové príruby, oprava katalyzátora, výmena lambda sondy, diagnostika výfuku, zváranie tlmiča, výfukový servis Bratislava',
			hr: 'oprava výfuku, oprava výfuku Bratislava, výmena výfuku, servis výfuku, tlmič výfuku, zváranie výfuku, katalyzátor, lambda sonda, výfukový systém, výfukové príruby, oprava katalyzátora, výmena lambda sondy, diagnostika výfuku, zváranie tlmiča, výfukový servis Bratislava'
		},
		service: {
			serviceType: 'Oprava a výmena výfukového systému (tlmič, katalyzátor, lambda)',
			description:
				'Odborná oprava výfuku v Bratislave – tlmič výfuku, zváranie výfuku, katalyzátor, lambda sonda, výfukové príruby. Komplexný servis výfukového systému.'
		}
	},
	'area-pb': {
		keywords: {
			sk: 'autoservis Podunajské Biskupice, servis áut Podunajské Biskupice, autoservis Bratislava Podunajské Biskupice, autoservis Závodná, autoopravovňa Podunajské Biskupice',
			en: 'autoservis Podunajské Biskupice, servis áut Podunajské Biskupice, autoservis Bratislava Podunajské Biskupice, autoservis Závodná, autoopravovňa Podunajské Biskupice',
			de: 'autoservis Podunajské Biskupice, servis áut Podunajské Biskupice, autoservis Bratislava Podunajské Biskupice, autoservis Závodná, autoopravovňa Podunajské Biskupice',
			hr: 'autoservis Podunajské Biskupice, servis áut Podunajské Biskupice, autoservis Bratislava Podunajské Biskupice, autoservis Závodná, autoopravovňa Podunajské Biskupice'
		},
		service: {
			serviceType: 'Kompletný autoservis (rozvody, brzdy, tlmiče, výfuk, diagnostika, STK)',
			description:
				'Kompletný autoservis v Podunajských Biskupiciach na Závodná 10143/26 – výmena rozvodov, bŕzd, tlmičov, oprava výfuku, diagnostika a príprava na STK/EK.'
		}
	},
	'area-vrakuna': {
		keywords: {
			sk: 'autoservis Vrakuňa, servis áut Vrakuňa, autoservis Bratislava Vrakuňa, autoopravovňa Vrakuňa, autoservis blízko Vrakune',
			en: 'autoservis Vrakuňa, servis áut Vrakuňa, autoservis Bratislava Vrakuňa, autoopravovňa Vrakuňa, autoservis blízko Vrakune',
			de: 'autoservis Vrakuňa, servis áut Vrakuňa, autoservis Bratislava Vrakuňa, autoopravovňa Vrakuňa, autoservis blízko Vrakune',
			hr: 'autoservis Vrakuňa, servis áut Vrakuňa, autoservis Bratislava Vrakuňa, autoopravovňa Vrakuňa, autoservis blízko Vrakune'
		},
		service: {
			serviceType: 'Kompletný autoservis pre Vrakuňu (rozvody, brzdy, tlmiče, výfuk, diagnostika, STK)',
			description:
				'Autoservis blízko Vrakune – komplexný servis áut v Podunajských Biskupiciach. Rozvody, brzdy, tlmiče, výfuk, diagnostika, príprava na STK/EK. Mobilný autoservis.'
		}
	}
};
