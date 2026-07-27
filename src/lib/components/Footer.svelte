<script lang="ts">
	import { t } from '$lib/i18n';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container footer-inner">
		<div class="footer-content">
			<div class="footer-brand">
				<a href="/">
					<img src="/logo_2.svg" alt="MUDROCHMOTORWORXX" class="footer-logo" width="200" height="200" loading="lazy" decoding="async" />
				</a>
				<p class="footer-tagline">{$t('footer.tagline')}</p>
			</div>
			<nav class="footer-links">
				<LanguageSwitcher />
			</nav>
		</div>
		<div class="footer-bottom">
			<p>
				<small>&copy; {currentYear} MUDROCHMOTORWORXX. {$t('footer.copyright')}</small>
				<small class="footer-sep" aria-hidden="true">|</small>
				<small>Created by <a href="https://mudrochfe.net" target="_blank" rel="noopener">Mudroch.FE s.r.o.</a></small>
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: var(--space-xl) 0 var(--space-lg);
		background: var(--color-gray);
	}

	.footer-inner {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
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

	.footer-sep {
		margin: 0 0.5rem;
		color: rgba(255, 255, 255, 0.3);
	}

	.footer-bottom a {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s;
	}

	.footer-bottom a:hover {
		color: rgba(255, 255, 255, 0.85);
		text-decoration: underline;
	}

	/* Priestor pod footerom, aby ho neprekrývala fixná sticky lišta
	   (Zavolať/WhatsApp), ktorá je viditeľná do 1024px. */
	@media (max-width: 1024px) {
		.footer {
			padding-bottom: calc(72px + env(safe-area-inset-bottom, 0));
		}
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
