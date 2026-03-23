<script lang="ts">
	import { t, currentLang } from '$lib/i18n';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import About from '$lib/components/About.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Contact from '$lib/components/Contact.svelte';

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "AutoRepair",
		"name": "MUDROCH MOTORWORXX",
		"description": "Profesionálny autoservis v Bratislave - Podunajských Biskupiciach",
		"telephone": "+421944122224",
		"url": "https://mudroch-motorworxx.sk",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Závodná",
			"addressLocality": "Podunajské Biskupice",
			"addressRegion": "Bratislava",
			"postalCode": "821 06",
			"addressCountry": "SK"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "48.1234",
			"longitude": "17.1234"
		},
		"openingHoursSpecification": {
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			"opens": "08:00",
			"closes": "17:00"
		},
		"areaServed": {
			"@type": "City",
			"name": "Bratislava"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Servisné služby",
			"itemListElement": [
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Servisné úkony pre všetky typy áut" }},
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Komplexná diagnostika" }},
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Výmena brzdrových platničiek a kotúčov" }},
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Výmena tlmičov a komponentov podvozku" }},
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Montáž bodykitu, zníženie podvozku" }},
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Príprava vozidiel pred STK" }},
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Výmena čelných skiel" }},
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Výmena rozvodov" }},
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Montáž a oprava výfukových systémov" }}
			]
		}
	};
</script>

<svelte:head>
	<title>{$t('seo.title')} | MUDROCH MOTORWORXX</title>
	<meta name="description" content={$t('seo.description')} />
	<meta name="keywords" content="autoservis, Bratislava, Podunajské Biskupice, STK, diagnostika, brzdy, tlmiče, výfuk, servis áut" />

	<!-- Open Graph -->
	<meta property="og:title" content="MUDROCH MOTORWORXX" />
	<meta property="og:description" content={$t('seo.description')} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content={$currentLang === 'sk' ? 'sk_SK' : $currentLang === 'de' ? 'de_DE' : 'en_GB'} />
	<meta property="og:locale:alternate" content="sk_SK" />
	<meta property="og:locale:alternate" content="en_GB" />
	<meta property="og:locale:alternate" content="de_DE" />

	<!-- GEO / Local SEO -->
	<meta name="geo.region" content="SK-BL" />
	<meta name="geo.placename" content="Podunajské Biskupice, Bratislava" />
	<meta name="geo.position" content="48.1234;17.1234" />
	<meta name="ICBM" content="48.1234, 17.1234" />

	<!-- hreflang -->
	<link rel="alternate" hreflang="sk" href="https://mudroch-motorworxx.sk/" />
	<link rel="alternate" hreflang="en" href="https://mudroch-motorworxx.sk/" />
	<link rel="alternate" hreflang="de" href="https://mudroch-motorworxx.sk/" />
	<link rel="alternate" hreflang="x-default" href="https://mudroch-motorworxx.sk/" />

	<!-- Canonical -->
	<link rel="canonical" href="https://mudroch-motorworxx.sk/" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<Hero />
<Services />
<About />
<Gallery />
<Contact />
