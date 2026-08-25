<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import { articles } from '$lib/content/articles';

	let { data } = $props();
</script>

<Article pageKey={data.pageKey} content={articles[data.pageKey]} />
