<script lang="ts">
	import Home from '$lib/components/Home.svelte';
	import Landing from '$lib/components/Landing.svelte';
	import Article from '$lib/components/Article.svelte';
	import BlogIndex from '$lib/components/BlogIndex.svelte';
	import type { LandingContentMap } from '$lib/content/landing-types';

	// Static content imports (bundler-friendly; required for prerender)
	import { content as rozvody } from '../../vymena-rozvodov-bratislava/content';
	import { content as brzdy } from '../../vymena-brzd-bratislava/content';
	import { content as stk } from '../../priprava-na-stk-bratislava/content';
	import { content as diagnostika } from '../../diagnostika-aut-bratislava/content';
	import { content as tlmice } from '../../vymena-tlmicov-bratislava/content';
	import { content as vyfuk } from '../../oprava-vyfuku-bratislava/content';
	import { content as areaPb } from '../../autoservis-podunajske-biskupice/content';
	import { content as areaVrakuna } from '../../autoservis-vrakuna/content';
	import { articles } from '$lib/content/articles';

	let { data } = $props();

	const CONTENT: Record<string, LandingContentMap> = {
		rozvody,
		brzdy,
		stk,
		diagnostika,
		tlmice,
		vyfuk,
		'area-pb': areaPb,
		'area-vrakuna': areaVrakuna
	};
</script>

{#if data.pageType === 'home'}
	<Home />
{:else if data.pageType === 'blog'}
	<BlogIndex />
{:else if data.pageType === 'article'}
	<Article pageKey={data.pageKey} content={articles[data.pageKey]} />
{:else}
	<Landing pageKey={data.pageKey} content={CONTENT[data.pageKey]} />
{/if}
