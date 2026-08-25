<script lang="ts">
	import '$lib/styles/landing.css';
	import { currentLang } from '$lib/i18n';
	import SeoHead from './SeoHead.svelte';
	import SocialMeta from './SocialMeta.svelte';
	import { SITE_URL, blogSchema, jsonLd } from '$lib/seo/business';
	import { urlFor, hreflangAlternates, PAGES } from '$lib/seo/pages';
	import { articles } from '$lib/content/articles';

	const pageUrl = $derived(`${SITE_URL}${urlFor('blog', $currentLang)}`);
	const alternates = $derived(hreflangAlternates('blog'));

	const blogLabel = $derived(
		PAGES.find((p) => p.key === 'blog')?.label[$currentLang] ?? 'Blog'
	);

	const articleList = $derived(
		PAGES.filter((p) => p.type === 'article').map((p) => {
			const content = articles[p.key]?.[$currentLang];
			return {
				key: p.key,
				url: urlFor(p.key, $currentLang),
				fullUrl: `${SITE_URL}${urlFor(p.key, $currentLang)}`,
				title: content?.metaTitle ?? p.label[$currentLang],
				excerpt: content?.excerpt ?? ''
			};
		})
	);

	const intro = $derived(
		$currentLang === 'sk'
			? 'Praktické rady a návody pre starostlivosť o vaše vozidlo.'
			: $currentLang === 'en'
				? 'Practical advice and guides for looking after your vehicle.'
				: $currentLang === 'de'
					? 'Praktische Ratschläge und Anleitungen für die Pflege Ihres Fahrzeugs.'
					: 'Praktični savjeti i upute za održavanje vašeg vozila.'
	);

	const metaTitle = $derived(`${blogLabel} – MUDROCH MOTORWORXX`);

	const schemas = $derived(
		jsonLd(
			blogSchema({
				url: pageUrl,
				lang: $currentLang,
				posts: articleList.map((a) => ({ url: a.fullUrl, name: a.title }))
			})
		)
	);
</script>

<svelte:head>
	{@html schemas}
</svelte:head>

<SeoHead pageKey="blog" title={metaTitle} description={intro} />
<SocialMeta title={metaTitle} description={intro} url={pageUrl} />

<article class="landing">
	<header class="landing-hero">
		<div class="container">
			<h1>{blogLabel}</h1>
			<p class="landing-lede">{intro}</p>
		</div>
	</header>

	<section class="landing-section">
		<div class="container">
			<div class="blog-list">
				{#each articleList as article (article.key)}
					<a href={article.url} class="blog-card">
						<h2>{article.title}</h2>
						<p>{article.excerpt}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
</article>

<style>
	.blog-list {
		display: grid;
		gap: var(--space-md);
		max-width: 820px;
	}

	.blog-card {
		display: block;
		padding: var(--space-lg);
		background: var(--color-gray);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-md);
		transition: border-color 0.2s, transform 0.2s;
	}

	.blog-card:hover {
		border-color: var(--color-red);
		transform: translateY(-2px);
	}

	.blog-card h2 {
		font-size: 1.25rem;
		margin-bottom: var(--space-sm);
		color: var(--color-white);
	}

	.blog-card p {
		color: rgba(255, 255, 255, 0.78);
		line-height: 1.6;
		margin: 0;
	}
</style>
