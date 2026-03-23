<script lang="ts">
	import { t } from '$lib/i18n';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer" role="contentinfo">
	<div class="container">
		<div class="footer-content">
			<div class="footer-brand">
				<a href="/" aria-label="MUDROCH MOTORWORXX - Domov">
					<img src="/logo_2.svg" alt="" class="footer-logo" aria-hidden="true" />
				</a>
				<p class="footer-tagline">{$t('footer.tagline')}</p>
			</div>
			<nav class="footer-links" aria-label="Výber jazyka v pätičke">
				<LanguageSwitcher />
			</nav>
		</div>
		<div class="footer-bottom">
			<p>
				<small>&copy; {currentYear} MUDROCH MOTORWORXX. {$t('footer.copyright')}</small>
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: var(--space-xl) 0 var(--space-lg);
		background: var(--color-gray);
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-lg);
	}

	.footer-brand {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.footer-brand a {
		border-radius: var(--radius-sm);
		display: inline-block;
	}

	.footer-brand a:focus-visible {
		outline: 3px solid var(--color-red);
		outline-offset: 4px;
	}

	.footer-logo {
		height: 40px;
		width: auto;
	}

	.footer-tagline {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.9rem;
	}

	.footer-bottom {
		padding-top: var(--space-md);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		text-align: center;
	}

	.footer-bottom p {
		color: rgba(255, 255, 255, 0.5);
		font-size: 0.85rem;
	}

	@media (max-width: 768px) {
		.footer-content {
			flex-direction: column;
			gap: var(--space-lg);
			text-align: center;
		}

		.footer-brand {
			align-items: center;
		}
	}
</style>
