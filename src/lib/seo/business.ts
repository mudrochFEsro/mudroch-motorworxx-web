/**
 * Jediný zdroj pravdy pre firemné údaje (NAP), GPS a JSON-LD structured data.
 * Používa homepage aj SEO landing stránky – GPS/NAP na jednom mieste.
 */

export const SITE_URL = 'https://mudrochmotorworxx.sk';

export const BUSINESS = {
	name: 'MUDROCH MOTORWORXX',
	/** tel: formát (E.164) */
	phone: '+421944122224',
	/** zobrazený formát */
	phoneDisplay: '0944 122 224',
	/** wa.me formát (bez +) */
	whatsapp: '421944122224',
	street: 'Závodná 10143/26',
	/** mestská časť */
	district: 'Podunajské Biskupice',
	city: 'Bratislava',
	region: 'Bratislavský kraj',
	postalCode: '821 06',
	countryCode: 'SK',
	lat: 48.1369231,
	lng: 17.1934575,
	opens: '08:00',
	closes: '17:00',
	days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
} as const;

/** Stabilné @id, na ktoré sa odkazujú ostatné schémy (provider). */
const BUSINESS_ID = `${SITE_URL}/#autorepair`;

/** Oblasti, ktoré servis obsluhuje – lokálne GEO signály. */
const AREA_SERVED = [
	'Bratislava',
	'Podunajské Biskupice',
	'Vrakuňa',
	'Ružinov',
	'Bratislava II',
	'Bratislava-Nivy'
];

/**
 * Nahradí zobrazené tel. číslo v texte klikateľným `tel:` odkazom.
 * Vstup je náš vlastný (dôveryhodný) copy – bezpečné pre {@html}.
 * Používa sa napr. v FAQ odpovediach, kde je číslo súčasťou vety.
 */
export function linkifyPhone(text: string): string {
	return text
		.split(BUSINESS.phoneDisplay)
		.join(`<a href="tel:${BUSINESS.phone}"><nobr>${BUSINESS.phoneDisplay}</nobr></a>`);
}

/** AutoRepair / LocalBusiness – reálne NAP, GPS, otváracie hodiny. */
export function autoRepairSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'AutoRepair',
		'@id': BUSINESS_ID,
		name: BUSINESS.name,
		url: `${SITE_URL}/`,
		telephone: BUSINESS.phone,
		image: `${SITE_URL}/logo_2.svg`,
		priceRange: '€€',
		currenciesAccepted: 'EUR',
		paymentAccepted: 'Hotovosť, platobná karta, prevod',
		address: {
			'@type': 'PostalAddress',
			streetAddress: BUSINESS.street,
			addressLocality: `${BUSINESS.district}, ${BUSINESS.city}`,
			addressRegion: BUSINESS.city,
			postalCode: BUSINESS.postalCode,
			addressCountry: BUSINESS.countryCode
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: BUSINESS.lat,
			longitude: BUSINESS.lng
		},
		hasMap: `https://www.google.com/maps?q=${BUSINESS.lat},${BUSINESS.lng}`,
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: BUSINESS.days,
			opens: BUSINESS.opens,
			closes: BUSINESS.closes
		},
		areaServed: AREA_SERVED.map((name) => ({ '@type': 'City', name }))
	};
}

/** Service – konkrétna služba, poskytovateľ = AutoRepair (@id). */
export function serviceSchema(opts: {
	name: string;
	serviceType: string;
	url: string;
	description: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: opts.name,
		serviceType: opts.serviceType,
		url: opts.url,
		description: opts.description,
		provider: { '@id': BUSINESS_ID },
		areaServed: AREA_SERVED.map((name) => ({ '@type': 'City', name })),
		availableChannel: {
			'@type': 'ServiceChannel',
			servicePhone: BUSINESS.phone,
			serviceUrl: opts.url
		}
	};
}

/** FAQPage – zdroj pre People Also Ask a AI/AEO odpovede. */
export function faqSchema(items: { q: string; a: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a
			}
		}))
	};
}

/** BreadcrumbList – navigačná drobčeková stopa. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: item.url
		}))
	};
}

/**
 * Vyrenderuje JSON-LD schémy ako <script> tagy (na použitie s {@html} v <svelte:head>).
 * Každá schéma má vlastný @context – viacero validných script tagov.
 */
export function jsonLd(...schemas: object[]): string {
	return schemas
		.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}<\/script>`)
		.join('');
}
