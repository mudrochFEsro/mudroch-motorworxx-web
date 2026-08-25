<script lang="ts">
	import { t, currentLang } from '$lib/i18n';
	import { SITE_URL, autoRepairSchema, jsonLd, bcp47 } from '$lib/seo/business';
	import { urlFor, hreflangAlternates } from '$lib/seo/pages';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import About from '$lib/components/About.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import LocalArea from '$lib/components/LocalArea.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import StickyCta from '$lib/components/StickyCta.svelte';

	// Rozšírime zdieľanú AutoRepair schému o popis a katalóg služieb (jeden zdroj NAP/GPS).
	const structuredData = {
		...autoRepairSchema(),
		inLanguage: bcp47($currentLang),
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
			]
		}
	};
</script>

<svelte:head>
	<title>{$t('seo.title')} | MUDROCH MOTORWORXX</title>
	<meta name="description" content={$t('seo.description')} />
	<meta name="keywords" content={$t('seo.keywords')} />

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
	{#each hreflangAlternates('home') as alt (alt.hreflang)}
		<link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
	{/each}

	<!-- Canonical -->
	<link rel="canonical" href={`${SITE_URL}${urlFor('home', $currentLang)}`} />

	<!-- JSON-LD Structured Data -->
	{@html jsonLd(structuredData)}
</svelte:head>

<Hero />
<Services />
<About />
<Reviews />
<!-- <Gallery /> --> <!-- TODO: dočasne schované, kým nebudú reálne fotky -->
<LocalArea />
<Contact />

<StickyCta />
