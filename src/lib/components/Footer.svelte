<script lang="ts">
	import { t } from '$lib/i18n';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-brand">
				<a href="/">
					<img src="/logo_2.svg" alt="MUDROCH MOTORWORXX" class="footer-logo" />
				</a>
				<p class="footer-tagline">{$t('footer.tagline')}</p>
			</div>
			<nav class="footer-links">
				<LanguageSwitcher />
			</nav>
		</div>
		<div class="footer-bottom">
			<p><small>&copy; {currentYear} MUDROCH MOTORWORXX. {$t('footer.copyright')}</small></p>
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
		-webkit-tap-highlight-color: transparent;
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
