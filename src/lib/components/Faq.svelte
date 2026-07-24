<script lang="ts">
	import { linkifyPhone } from '$lib/seo/business';

	let { items }: { items: { q: string; a: string }[] } = $props();

	// Každá položka sa dá otvoriť/zavrieť nezávisle (index → otvorené).
	let open = $state<boolean[]>([]);

	function toggle(i: number) {
		open[i] = !open[i];
	}
</script>

<div class="faq">
	{#each items as item, i (item.q)}
		<div class="faq-item" class:open={open[i] ?? false}>
			<h3 class="faq-heading">
				<button
					type="button"
					class="faq-trigger"
					id={`faq-trigger-${i}`}
					aria-expanded={open[i] ?? false}
					aria-controls={`faq-panel-${i}`}
					onclick={() => toggle(i)}
				>
					<span>{item.q}</span>
					<svg
						class="faq-icon"
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="m6 9 6 6 6-6" />
					</svg>
				</button>
			</h3>
			<div
				class="faq-panel"
				id={`faq-panel-${i}`}
				role="region"
				aria-labelledby={`faq-trigger-${i}`}
			>
				<div class="faq-panel-inner">
					<div class="faq-answer">{@html linkifyPhone(item.a)}</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.faq {
		max-width: 820px;
		margin-top: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.faq-item {
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-md);
		background: var(--color-gray);
		overflow: hidden;
		transition: border-color var(--transition-fast);
	}

	.faq-item.open {
		border-color: rgba(227, 6, 19, 0.5);
	}

	.faq-heading {
		margin: 0;
		font-size: inherit;
	}

	.faq-trigger {
		width: 100%;
		cursor: pointer;
		padding: var(--space-md) var(--space-lg);
		font-weight: 700;
		font-family: var(--font-primary);
		font-size: 1.05rem;
		color: var(--color-white);
		text-align: left;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-md);
		-webkit-tap-highlight-color: transparent;
	}

	.faq-trigger:hover {
		color: var(--color-red);
	}

	.faq-trigger:focus-visible {
		outline: 3px solid var(--color-red);
		outline-offset: -3px;
		border-radius: var(--radius-md);
	}

	.faq-icon {
		flex-shrink: 0;
		color: var(--color-red);
		transition: transform var(--transition-normal);
	}

	.faq-item.open .faq-icon {
		transform: rotate(180deg);
	}

	/* Plynulé otváranie/zatváranie cez animáciu grid-template-rows.
	   Obsah ostáva v DOM (dobré pre SEO/AEO), height sa animuje 0fr → 1fr. */
	.faq-panel {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows var(--transition-normal);
	}

	.faq-item.open .faq-panel {
		grid-template-rows: 1fr;
	}

	.faq-panel-inner {
		overflow: hidden;
		min-height: 0;
	}

	.faq-answer {
		padding: 0 var(--space-lg) var(--space-md);
		color: rgba(255, 255, 255, 0.78);
		line-height: 1.6;
	}

	.faq-answer :global(a[href^='tel:']) {
		color: var(--color-red);
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 2px;
		white-space: nowrap;
	}

	@media (prefers-reduced-motion: reduce) {
		.faq-panel,
		.faq-icon {
			transition: none;
		}
	}
</style>
