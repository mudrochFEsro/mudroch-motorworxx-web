<script lang="ts">
	import { t, currentLang } from '$lib/i18n';
	import { SITE_URL, autoRepairSchema, jsonLd } from '$lib/seo/business';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import About from '$lib/components/About.svelte';
	// import Gallery from '$lib/components/Gallery.svelte'; // TODO: dočasne schované, kým nebudú reálne fotky
	import Contact from '$lib/components/Contact.svelte';

	// Rozšírime zdieľanú AutoRepair schému o popis a katalóg služieb (jeden zdroj NAP/GPS).
	const structuredData = {
		...autoRepairSchema(),
		description: 'Profesionálny mobilný autoservis v Bratislave - Podunajských Biskupiciach',
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Servisné služby',
			itemListElement: [
				{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Výmena rozvodov', url: `${SITE_URL}/vymena-rozvodov-bratislava` } },
				{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Výmena brzdových platničiek a kotúčov', url: `${SITE_URL}/vymena-brzd-bratislava` } },
				{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Servisné úkony pre všetky typy áut' } },
				{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Komplexná diagnostika' } },
				{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Výmena tlmičov a komponentov podvozku' } },
				{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Príprava vozidiel pred STK' } },
				{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Montáž a oprava výfukových systémov' } },
				{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Čistenie DPF' } }
			]
		}
	};
</script>

<svelte:head>
	<title>{$t('seo.title')} | MUDROCH MOTORWORXX</title>
	<meta name="description" content={$t('seo.description')} />
	<meta name="keywords" content="mobilný autoservis, autoservis Bratislava, mobilný servis áut, Podunajské Biskupice, STK, diagnostika, brzdy, tlmiče, výfuk, servis áut" />

	<!-- Open Graph -->
	<meta property="og:title" content="MUDROCH MOTORWORXX" />
	<meta property="og:description" content={$t('seo.description')} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content={$currentLang === 'sk' ? 'sk_SK' : $currentLang === 'de' ? 'de_DE' : $currentLang === 'hr' ? 'hr_HR' : 'en_GB'} />
	<meta property="og:locale:alternate" content="sk_SK" />
	<meta property="og:locale:alternate" content="en_GB" />
	<meta property="og:locale:alternate" content="de_DE" />
	<meta property="og:locale:alternate" content="hr_HR" />

	<!-- GEO / Local SEO -->
	<meta name="geo.region" content="SK-BL" />
	<meta name="geo.placename" content="Podunajské Biskupice, Bratislava" />
	<meta name="geo.position" content="48.1369231;17.1934575" />
	<meta name="ICBM" content="48.1369231, 17.1934575" />

	<!-- hreflang -->
	<link rel="alternate" hreflang="sk" href={`${SITE_URL}/`} />
	<link rel="alternate" hreflang="en" href={`${SITE_URL}/`} />
	<link rel="alternate" hreflang="de" href={`${SITE_URL}/`} />
	<link rel="alternate" hreflang="hr" href={`${SITE_URL}/`} />
	<link rel="alternate" hreflang="x-default" href={`${SITE_URL}/`} />

	<!-- Canonical -->
	<link rel="canonical" href={`${SITE_URL}/`} />

	<!-- JSON-LD Structured Data -->
	{@html jsonLd(structuredData)}
</svelte:head>

<Hero />
<Services />
<About />
<!-- <Gallery /> --> <!-- TODO: dočasne schované, kým nebudú reálne fotky -->
<Contact />
