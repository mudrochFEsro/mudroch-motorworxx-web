<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<section class="about section" id="about" aria-labelledby="about-heading">
	<div class="container">
		<h2 id="about-heading" class="section-title">{$t('about.title')}</h2>
		<div class="about-content">
			<article class="about-text">
				<p>{$t('about.text1')}</p>
				<p>{$t('about.text2')}</p>
				<p>{$t('about.text3')}</p>
			</article>
			<ul class="about-values" role="list" aria-label="Naše hodnoty">
				<li class="value-card" role="listitem">
					<div class="value-icon" aria-hidden="true">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">
							<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
							<polyline points="22 4 12 14.01 9 11.01"></polyline>
						</svg>
					</div>
					<span>{$t('about.values.quality')}</span>
				</li>
				<li class="value-card" role="listitem">
					<div class="value-icon" aria-hidden="true">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">
							<circle cx="12" cy="12" r="10"></circle>
							<polyline points="12 6 12 12 16 14"></polyline>
						</svg>
					</div>
					<span>{$t('about.values.experience')}</span>
				</li>
				<li class="value-card" role="listitem">
					<div class="value-icon" aria-hidden="true">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
						</svg>
					</div>
					<span>{$t('about.values.trust')}</span>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.about-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: center;
	}

	.about-text {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.about-text p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.7);
	}

	.about-text p:first-child {
		color: var(--color-white);
		font-weight: 500;
	}

	.about-values {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.value-card {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-lg);
		background: var(--color-gray);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-lg);
		transition: all var(--transition-normal);
	}

	.value-card:hover,
	.value-card:focus-within {
		border-color: var(--color-red);
		transform: translateX(10px);
	}

	.value-icon {
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-black);
		border-radius: var(--radius-md);
		color: var(--color-red);
		flex-shrink: 0;
	}

	.value-card span {
		font-size: 1.25rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	@media (max-width: 768px) {
		.about-content {
			grid-template-columns: 1fr;
		}

		.about-values {
			margin-top: var(--space-lg);
		}

		.value-card:hover,
		.value-card:focus-within {
			transform: none;
		}
	}
</style>
