<script lang="ts">
	import '$lib/styles/landing.css';
	import { currentLang } from '$lib/i18n';
	import ServiceCta from '$lib/components/ServiceCta.svelte';
	import StickyCta from '$lib/components/StickyCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import {
		SITE_URL,
		BUSINESS,
		autoRepairSchema,
		serviceSchema,
		faqSchema,
		breadcrumbSchema,
		jsonLd
	} from '$lib/seo/business';
	import { content } from './content';

	const pageUrl = `${SITE_URL}/vymena-tlmicov-bratislava`;

	// Prepínač jazykov mení viditeľný obsah. Meta keywords, hreflang a JSON-LD
	// ostávajú v SK – stránka cieli na slovenské vyhľadávanie.
	const c = $derived(content[$currentLang]);
	const sk = content.sk;

	const keywords =
		'výmena tlmičov, výmena tlmičov Bratislava, oprava podvozku, servis podvozku, tlmiče pruženia, predné tlmiče, zadné tlmiče, silentbloky, čapy riadenia, ramená nápravy, ložiská podvozku, diagnostika podvozku, kontrola tlmičov, oprava pruženia, servis tlmičov Bratislava';

	const schemas = jsonLd(
		autoRepairSchema(),
		serviceSchema({
			name: 'Výmena tlmičov a podvozok Bratislava',
			serviceType: 'Výmena tlmičov pruženia a oprava podvozku (silentbloky, čapy, ramená)',
			url: pageUrl,
			description:
				'Odborná výmena tlmičov a oprava podvozku v Bratislave – predné a zadné tlmiče pruženia, silentbloky, čapy riadenia, ramená nápravy, ložiská a kompletná diagnostika podvozku.'
		}),
		faqSchema(sk.faq.map((f) => ({ q: f.q, a: f.a }))),
		breadcrumbSchema([
			{ name: sk.breadcrumbHome, url: `${SITE_URL}/` },
			{ name: sk.breadcrumbCurrent, url: pageUrl }
		])
	);

	const includeIcons = [
		'<circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/><path d="m4.93 4.93 2.83 2.83m8.48 8.48 2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>',
		'<path d="M2 12h20M12 2v20"/><circle cx="12" cy="12" r="4"/>',
		'<circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>',
		'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
	];

	const ogLocale = $derived(
		$currentLang === 'sk' ? 'sk_SK' : $currentLang === 'de' ? 'de_DE' : $currentLang === 'hr' ? 'hr_HR' : 'en_GB'
	);
</script>

<svelte:head>
	<title>{c.metaTitle}</title>
	<meta name="description" content={c.metaDescription} />
	<meta name="keywords" content={keywords} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
	<link rel="canonical" href={pageUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={c.metaTitle} />
	<meta property="og:description" content={c.metaDescription} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:site_name" content="MUDROCH MOTORWORXX" />
	<meta property="og:image" content={`${SITE_URL}/logo_2.svg`} />

	<!-- GEO / local SEO -->
	<meta name="geo.region" content="SK-BL" />
	<meta name="geo.placename" content="Podunajské Biskupice, Bratislava" />
	<meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
	<meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />

	<!-- hreflang (SK-only SEO stránka) -->
	<link rel="alternate" hreflang="sk" href={pageUrl} />
	<link rel="alternate" hreflang="x-default" href={pageUrl} />

	{@html schemas}
</svelte:head>

<article class="landing">
	<!-- HERO -->
	<header class="landing-hero">
		<div class="container">
			<nav class="landing-breadcrumb" aria-label="Breadcrumb">
				<a href="/">{c.breadcrumbHome}</a> / <span aria-current="page">{c.breadcrumbCurrent}</span>
			</nav>
			<h1>{c.heroH1} <span class="accent">{c.heroH1Accent}</span></h1>
			<p class="landing-lede">{@html c.heroLede}</p>
			<div class="landing-hero-actions">
				<a href={`tel:${BUSINESS.phone}`} class="btn btn-primary">{c.callBtn}&nbsp;<nobr>{BUSINESS.phoneDisplay}</nobr></a>
			</div>
			<div class="landing-badges">
				{#each c.badges as badge (badge)}
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
						{badge}
					</span>
				{/each}
			</div>
		</div>
	</header>

	<!-- KEDY MENIŤ -->
	<section class="landing-section">
		<div class="container">
			<h2>{c.whenH2}</h2>
			<div class="landing-prose">{@html c.whenProse}</div>
		</div>
	</section>

	<!-- PRÍZNAKY -->
	<section class="landing-section">
		<div class="container">
			<h2>{c.symptomsH2}</h2>
			<p class="landing-prose">{@html c.symptomsProse}</p>
			<ul class="landing-checklist">
				{#each c.symptomsList as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- ČO ZAHŔŇA -->
	<section class="landing-section">
		<div class="container">
			<h2>{c.includesH2}</h2>
			<p class="landing-prose">{@html c.includesProse}</p>
			<div class="landing-grid">
				{#each c.includesCards as card, i (card.h3)}
					<div class="landing-card">
						<div class="landing-card-icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{@html includeIcons[i]}</svg>
						</div>
						<h3>{card.h3}</h3>
						<p>{card.p}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CENA -->
	<section class="landing-section">
		<div class="container">
			<h2>{c.priceH2}</h2>
			<div class="landing-prose">{@html c.priceProse}</div>
		</div>
	</section>

	<!-- PREČO MY -->
	<section class="landing-section">
		<div class="container">
			<h2>{c.whyH2}</h2>
			<div class="landing-grid">
				{#each c.whyCards as card (card.h3)}
					<div class="landing-card">
						<h3>{card.h3}</h3>
						<p>{card.p}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="landing-section">
		<div class="container">
			<h2>{c.faqH2}</h2>
			<Faq items={c.faq} />
		</div>
	</section>

	<!-- SÚVISIACE -->
	<section class="landing-section">
		<div class="container">
			<h2>{c.relatedH2}</h2>
			<div class="landing-related">
				{#each c.related as link (link.href)}
					<a href={link.href}>{link.label}</a>
				{/each}
			</div>
		</div>
	</section>

	<div class="landing-cta-wrap">
		<div class="container">
			<ServiceCta title={c.ctaTitle} text={c.ctaText} waText={c.waText} />
		</div>
	</div>
</article>

<StickyCta waText={c.waText} />
