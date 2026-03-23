<script lang="ts">
	import '$lib/styles/global.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SmoothScroll from '$lib/components/SmoothScroll.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';

	let { children } = $props();
</script>

<SmoothScroll />
<CustomCursor />

<!-- Skip link pre klávesnicovú navigáciu -->
<a href="#main-content" class="skip-link">
	Preskočiť na hlavný obsah
</a>

<Navigation />

<main id="main-content" tabindex="-1">
	{@render children()}
</main>

<Footer />

<style>
	.skip-link {
		position: absolute;
		top: -100%;
		left: 50%;
		transform: translateX(-50%);
		background: var(--color-red);
		color: var(--color-white);
		padding: 1rem 2rem;
		z-index: 9999;
		font-weight: 600;
		border-radius: var(--radius-md);
		transition: top var(--transition-fast);
	}

	.skip-link:focus {
		top: 1rem;
		outline: 3px solid var(--color-white);
		outline-offset: 2px;
	}

	main {
		min-height: 100vh;
	}

	main:focus {
		outline: none;
	}
</style>
