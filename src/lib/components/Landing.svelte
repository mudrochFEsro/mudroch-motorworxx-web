<script lang="ts">
	import '$lib/styles/landing.css';
	import { currentLang } from '$lib/i18n';
	import type { LandingContentMap } from '$lib/content/landing-types';
	import ServiceCta from './ServiceCta.svelte';
	import StickyCta from './StickyCta.svelte';
	import Faq from './Faq.svelte';
	import SeoHead from './SeoHead.svelte';
	import SocialMeta from './SocialMeta.svelte';
	import {
		SITE_URL, BUSINESS, autoRepairSchema, serviceSchema, faqSchema, breadcrumbSchema, webPageSchema, jsonLd, linkifyPhone
	} from '$lib/seo/business';
	import { urlFor, hreflangAlternates } from '$lib/seo/pages';
	import { landingSeo } from '$lib/seo/landingSeo';

	let { pageKey, content }: { pageKey: string; content: LandingContentMap } = $props();

	const c = $derived(content[$currentLang]);
	const sk = $derived(content.sk);
	const pageUrl = $derived(`${SITE_URL}${urlFor(pageKey, $currentLang)}`);
	const seo = $derived(landingSeo[pageKey]);
	const includeIcons = $derived(seo.icons ?? []);
	const keywords = $derived(seo.keywords[$currentLang]);
	const alternates = $derived(hreflangAlternates(pageKey));

	const schemas = $derived(jsonLd(
		autoRepairSchema(),
		serviceSchema({ name: c.metaTitle, serviceType: seo.service.serviceType, url: pageUrl, description: seo.service.description, lang: $currentLang }),
		faqSchema(c.faq.map((f: {q:string;a:string}) => ({ q: f.q, a: f.a })), $currentLang),
		webPageSchema({ url: pageUrl, name: c.metaTitle, lang: $currentLang, speakableSelectors: c.answer ? ['.landing-answer', '.landing-lede'] : ['.landing-lede'] }),
		breadcrumbSchema([
			{ name: c.breadcrumbHome, url: `${SITE_URL}${urlFor('home', $currentLang)}` },
			{ name: c.breadcrumbCurrent, url: pageUrl }
		])
	));
</script>

<svelte:head>
	<meta name="geo.region" content="SK-BL" />
	<meta name="geo.placename" content="Podunajské Biskupice, Bratislava" />
	<meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
	<meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />
	{@html schemas}
</svelte:head>

<SeoHead pageKey={pageKey} title={c.metaTitle} description={c.metaDescription} keywords={keywords} />
<SocialMeta title={c.metaTitle} description={c.metaDescription} url={pageUrl} />

<article class="landing">
	<!-- HERO -->
	<header class="landing-hero">
		<div class="container">
			<nav class="landing-breadcrumb" aria-label="Breadcrumb">
				<a href="/">{c.breadcrumbHome}</a> / <span aria-current="page">{c.breadcrumbCurrent}</span>
			</nav>
			<h1>{c.heroH1} <span class="accent">{c.heroH1Accent}</span></h1>
			<p class="landing-lede">{@html c.heroLede}</p>
			{#if c.answer}
				<p class="landing-answer">{@html linkifyPhone(c.answer)}</p>
			{/if}
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
			<div class="landing-prose">{@html linkifyPhone(c.whenProse)}</div>
		</div>
	</section>

	<!-- PRÍZNAKY -->
	<section class="landing-section">
		<div class="container">
			<h2>{c.symptomsH2}</h2>
			<p class="landing-prose">{@html linkifyPhone(c.symptomsProse)}</p>
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
			<p class="landing-prose">{@html linkifyPhone(c.includesProse)}</p>
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
			<div class="landing-prose">{@html linkifyPhone(c.priceProse)}</div>
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
