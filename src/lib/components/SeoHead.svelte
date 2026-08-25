<script lang="ts">
	import { currentLang } from '$lib/i18n';
	import { SITE_URL } from '$lib/seo/business';
	import { urlFor, hreflangAlternates } from '$lib/seo/pages';

	let {
		pageKey,
		title,
		description,
		keywords = '',
		robots = 'index, follow, max-image-preview:large, max-snippet:-1'
	} = $props();

	const pageUrl = $derived(`${SITE_URL}${urlFor(pageKey, $currentLang)}`);
	const alternates = $derived(hreflangAlternates(pageKey));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
	<meta name="robots" content={robots} />
	<link rel="canonical" href={pageUrl} />
	{#each alternates as alt (alt.hreflang)}
		<link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
	{/each}
</svelte:head>
