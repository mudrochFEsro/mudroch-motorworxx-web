<script lang="ts">
	import '$lib/styles/landing.css';
	import { currentLang } from '$lib/i18n';
	import Faq from './Faq.svelte';
	import SocialMeta from './SocialMeta.svelte';
	import type { ArticleContentMap } from '$lib/content/articles/types';
	import {
		SITE_URL,
		articleSchema,
		faqSchema,
		breadcrumbSchema,
		webPageSchema,
		jsonLd
	} from '$lib/seo/business';
	import { urlFor, hreflangAlternates } from '$lib/seo/pages';

	let { pageKey, content }: { pageKey: string; content: ArticleContentMap } = $props();

	const c = $derived(content[$currentLang]);
	const pageUrl = $derived(`${SITE_URL}${urlFor(pageKey, $currentLang)}`);
	const alternates = $derived(hreflangAlternates(pageKey));
	const blogUrl = $derived(urlFor('blog', $currentLang));
	const relatedUrl = $derived(urlFor(c.relatedServiceKey, $currentLang));

	const schemas = $derived(
		jsonLd(
			articleSchema({
				url: pageUrl,
				headline: c.h1,
				description: c.metaDescription,
				datePublished: c.publishedISO,
				dateModified: c.updatedISO,
				lang: $currentLang
			}),
			...(c.faq ? [faqSchema(c.faq, $currentLang)] : []),
			breadcrumbSchema([
				{ name: c.breadcrumbBlog, url: `${SITE_URL}${blogUrl}` },
				{ name: c.h1, url: pageUrl }
			]),
			webPageSchema({
				url: pageUrl,
				name: c.metaTitle,
				lang: $currentLang,
				speakableSelectors: ['.landing-answer']
			})
		)
	);
</script>

<svelte:head>
	<title>{c.metaTitle}</title>
	<meta name="description" content={c.metaDescription} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
	<link rel="canonical" href={pageUrl} />
	{#each alternates as alt (alt.hreflang)}
		<link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
	{/each}
	{@html schemas}
</svelte:head>

<SocialMeta title={c.metaTitle} description={c.metaDescription} url={pageUrl} type="article" />

<article class="landing">
	<!-- HERO -->
	<header class="landing-hero">
		<div class="container">
			<nav class="landing-breadcrumb" aria-label="Breadcrumb">
				<a href={blogUrl}>{c.breadcrumbBlog}</a> / <span aria-current="page">{c.h1}</span>
			</nav>
			<h1>{c.h1}</h1>
			<p class="landing-answer">{@html c.answer}</p>
		</div>
	</header>

	<!-- SECTIONS -->
	{#each c.sections as section (section.h2)}
		<section class="landing-section">
			<div class="container">
				<h2>{section.h2}</h2>
				<div class="landing-prose">{@html section.prose}</div>
			</div>
		</section>
	{/each}

	<!-- FAQ -->
	{#if c.faq}
		<section class="landing-section">
			<div class="container">
				<h2>Často kladené otázky</h2>
				<Faq items={c.faq} />
			</div>
		</section>
	{/if}

	<!-- RELATED SERVICE CTA -->
	<section class="landing-section">
		<div class="container">
			<div class="landing-related-cta">
				<h2>{c.relatedLabel}</h2>
				<a href={relatedUrl} class="btn btn-primary">{c.relatedCta}</a>
			</div>
		</div>
	</section>
</article>

<style>
	.landing-related-cta {
		text-align: center;
		padding: var(--space-lg) 0;
	}

	.landing-related-cta h2 {
		margin-bottom: var(--space-md);
	}

	.landing-related-cta .btn {
		display: inline-block;
	}
</style>
