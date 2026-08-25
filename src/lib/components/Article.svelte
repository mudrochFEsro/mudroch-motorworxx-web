<script lang="ts">
	import '$lib/styles/landing.css';
	import { currentLang, t } from '$lib/i18n';
	import Faq from './Faq.svelte';
	import SeoHead from './SeoHead.svelte';
	import SocialMeta from './SocialMeta.svelte';
	import type { ArticleContentMap } from '$lib/content/articles/types';
	import {
		SITE_URL,
		BUSINESS,
		articleSchema,
		faqSchema,
		breadcrumbSchema,
		webPageSchema,
		jsonLd,
		linkifyPhone
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
	{@html schemas}
</svelte:head>

<SeoHead pageKey={pageKey} title={c.metaTitle} description={c.metaDescription} />
<SocialMeta title={c.metaTitle} description={c.metaDescription} url={pageUrl} type="article" />

<article class="landing">
	<!-- HERO -->
	<header class="landing-hero">
		<div class="container">
			<nav class="landing-breadcrumb" aria-label="Breadcrumb">
				<a href={blogUrl}>{c.breadcrumbBlog}</a> / <span aria-current="page">{c.h1}</span>
			</nav>
			<h1>{c.h1}</h1>
			<p class="landing-answer">{@html linkifyPhone(c.answer)}</p>
			<div class="landing-hero-actions">
				<a href={`tel:${BUSINESS.phone}`} class="btn btn-primary">{$t('nav.call')}&nbsp;<nobr>{BUSINESS.phoneDisplay}</nobr></a>
			</div>
		</div>
	</header>

	<!-- SECTIONS -->
	{#each c.sections as section (section.h2)}
		<section class="landing-section">
			<div class="container">
				<h2>{section.h2}</h2>
				<div class="landing-prose">{@html linkifyPhone(section.prose)}</div>
			</div>
		</section>
	{/each}

	<!-- FAQ -->
	{#if c.faq}
		<section class="landing-section">
			<div class="container">
				<h2>{$t('faq.heading')}</h2>
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
