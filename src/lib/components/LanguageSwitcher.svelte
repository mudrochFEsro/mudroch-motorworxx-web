<script lang="ts">
	import { currentLang, languages } from '$lib/i18n';

	function switchLang(code: 'sk' | 'en' | 'de') {
		currentLang.set(code);
	}

	function handleKeydown(event: KeyboardEvent, code: 'sk' | 'en' | 'de') {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			switchLang(code);
		}
	}
</script>

<div class="lang-switcher" role="group" aria-label="Výber jazyka">
	{#each languages as lang}
		<button
			class="lang-btn"
			class:active={$currentLang === lang.code}
			onclick={() => switchLang(lang.code)}
			onkeydown={(e) => handleKeydown(e, lang.code)}
			aria-label="Prepnúť na {lang.name}"
			aria-pressed={$currentLang === lang.code}
			type="button"
		>
			<span aria-hidden="true">{lang.label}</span>
			<span class="sr-only">{lang.name}</span>
		</button>
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
		background: var(--color-red);
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
