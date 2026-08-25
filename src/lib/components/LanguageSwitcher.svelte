<script lang="ts">
	import { page } from '$app/state';
	import { currentLang, languages } from '$lib/i18n';
	import { langFromPath } from '$lib/i18n/langFromPath';
	import { pageBySlug, urlFor } from '$lib/seo/pages';
	import type { Lang } from '$lib/i18n';

	function hrefFor(target: Lang): string {
		const path = page.url.pathname;
		const curLang = langFromPath(path);
		const parts = path.split('/').filter(Boolean);
		const slug = curLang === 'sk' ? parts.join('/') : parts.slice(1).join('/');
		const def = pageBySlug(curLang, slug);
		return def ? urlFor(def.key, target) : urlFor('home', target);
	}
</script>

<div class="lang-switcher" role="group" aria-label="Výber jazyka">
	{#each languages as lang (lang.code)}
		<a
			class="lang-btn"
			class:active={$currentLang === lang.code}
			href={hrefFor(lang.code)}
			aria-label="{lang.label} – prepnúť na {lang.name}"
			aria-current={$currentLang === lang.code ? 'page' : undefined}
			data-sveltekit-noscroll
		>
			<span aria-hidden="true">{lang.label}</span>
			<span class="sr-only">{lang.name}</span>
		</a>
	{/each}
</div>

<style>
	.lang-switcher {
		display: flex;
		gap: 0.25rem;
	}

	.lang-btn {
		padding: 0.5rem 0.75rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.6);
		background: transparent;
		border: 1px solid transparent;
		border-radius: var(--radius-sm);
		transition: all var(--transition-fast);
		min-width: 44px;
		min-height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		cursor: pointer;
	}

	.lang-btn:hover {
		color: var(--color-white);
	}

	.lang-btn:focus-visible {
		outline: 3px solid var(--color-red);
		outline-offset: 2px;
	}

	.lang-btn.active {
		color: var(--color-white);
		background: var(--color-red-cta);
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
