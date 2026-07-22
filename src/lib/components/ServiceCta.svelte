<script lang="ts">
	import { BUSINESS } from '$lib/seo/business';

	let {
		title = 'Objednajte sa ešte dnes',
		text = 'Zavolajte alebo napíšte na WhatsApp – poradíme a dohodneme termín.',
		waText = ''
	}: { title?: string; text?: string; waText?: string } = $props();

	const telHref = `tel:${BUSINESS.phone}`;
	const waHref = $derived(
		`https://wa.me/${BUSINESS.whatsapp}${waText ? `?text=${encodeURIComponent(waText)}` : ''}`
	);
</script>

<div class="cta-box">
	<div class="cta-copy">
		<h2 class="cta-title">{title}</h2>
		<p class="cta-text">{text}</p>
	</div>
	<div class="cta-actions">
		<a href={telHref} class="cta-btn cta-btn--phone">
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
			</svg>
			<span>Zavolať {BUSINESS.phoneDisplay}</span>
		</a>
		<a href={waHref} target="_blank" rel="noopener noreferrer" class="cta-btn cta-btn--wa">
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
			</svg>
			<span>WhatsApp</span>
		</a>
	</div>
</div>

<style>
	.cta-box {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-lg);
		padding: var(--space-xl);
		background: var(--color-gray);
		border: 2px solid var(--color-red);
		border-radius: var(--radius-lg);
	}

	.cta-title {
		font-family: var(--font-heading);
		font-size: clamp(1.5rem, 3.5vw, 2.2rem);
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-bottom: var(--space-sm);
	}

	.cta-text {
		color: rgba(255, 255, 255, 0.75);
		font-size: 1.05rem;
		max-width: 44ch;
	}

	.cta-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-md);
	}

	.cta-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 1rem 1.5rem;
		border-radius: var(--radius-md);
		font-weight: 700;
		font-size: 1.05rem;
		min-height: 52px;
		transition: transform var(--transition-fast), background var(--transition-fast);
		-webkit-tap-highlight-color: transparent;
	}

	.cta-btn--phone {
		background: var(--color-red);
		color: var(--color-white);
	}

	.cta-btn--wa {
		background: #25d366;
		color: #05231a;
	}

	.cta-btn:hover {
		transform: translateY(-2px);
	}

	.cta-btn:focus-visible {
		outline: 3px solid var(--color-white);
		outline-offset: 3px;
	}

	@media (max-width: 768px) {
		.cta-box {
			flex-direction: column;
			align-items: flex-start;
			padding: var(--space-lg);
		}

		.cta-actions {
			width: 100%;
		}

		.cta-btn {
			flex: 1;
			justify-content: center;
		}
	}
</style>
