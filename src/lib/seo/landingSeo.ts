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
	}
};
