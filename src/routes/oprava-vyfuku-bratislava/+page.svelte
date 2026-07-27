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

	const pageUrl = `${SITE_URL}/oprava-vyfuku-bratislava`;

	// Prepínač jazykov mení viditeľný obsah. Meta keywords, hreflang a JSON-LD
	// ostávajú v SK – stránka cieli na slovenské vyhľadávanie.
	const c = $derived(content[$currentLang]);
	const sk = content.sk;

	const keywords =
		'oprava výfuku, oprava výfuku Bratislava, výmena výfuku, servis výfuku, tlmič výfuku, zváranie výfuku, katalyzátor, lambda sonda, výfukový systém, výfukové príruby, oprava katalyzátora, výmena lambda sondy, diagnostika výfuku, zváranie tlmiča, výfukový servis Bratislava';

	const schemas = jsonLd(
		autoRepairSchema(),
		serviceSchema({
			name: 'Oprava výfuku Bratislava',
			serviceType: 'Oprava a výmena výfukového systému (tlmič, katalyzátor, lambda)',
			url: pageUrl,
			description:
				'Odborná oprava výfuku v Bratislave – tlmič výfuku, zváranie výfuku, katalyzátor, lambda sonda, výfukové príruby. Komplexný servis výfukového systému.'
		}),
		faqSchema(sk.faq.map((f) => ({ q: f.q, a: f.a }))),
		breadcrumbSchema([
			{ name: sk.breadcrumbHome, url: `${SITE_URL}/` },
			{ name: sk.breadcrumbCurrent, url: pageUrl }
		])
	);

	const includeIcons = [
		'<path d="M3 12h18M3 12l5-5m-5 5l5 5m10-5l5-5m-5 5l5 5"/><circle cx="12" cy="12" r="2"/>',
		'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>',
		'<rect x="3" y="8" width="18" height="8" rx="2"/><path d="M7 4v4m10-4v4M7 16v4m10-4v4"/>',
		'<path d="M12 2v20M5 8h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"/><path d="M8 12h.01M16 12h.01"/>'
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

	<!-- KEDY RIEŠIŤ -->
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
