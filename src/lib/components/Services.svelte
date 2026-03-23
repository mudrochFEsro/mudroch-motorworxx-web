<script lang="ts">
	import { t } from '$lib/i18n';

	const serviceKeys = [
		'service1', 'service2', 'service3', 'service4', 'service5',
		'service6', 'service7', 'service8', 'service9'
	];
</script>

<section class="services section" id="services" aria-labelledby="services-heading">
	<div class="container">
		<h2 id="services-heading" class="section-title">{$t('services.title')}</h2>
		<ul class="services-grid" role="list">
			{#each serviceKeys as key, i}
				<li class="service-card" role="listitem">
					<div class="service-icon" aria-hidden="true">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false">
							{#if i === 0}
								<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path>
								<circle cx="7" cy="17" r="2"></circle>
								<circle cx="17" cy="17" r="2"></circle>
							{:else if i === 1}
								<circle cx="12" cy="12" r="10"></circle>
								<path d="M12 6v6l4 2"></path>
							{:else if i === 2}
								<circle cx="12" cy="12" r="10"></circle>
								<path d="M12 8v4l2 2"></path>
							{:else if i === 3}
								<path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
							{:else if i === 4}
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
							{:else if i === 5}
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
								<polyline points="22 4 12 14.01 9 11.01"></polyline>
							{:else if i === 6}
								<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
								<line x1="8" y1="21" x2="16" y2="21"></line>
								<line x1="12" y1="17" x2="12" y2="21"></line>
							{:else if i === 7}
								<circle cx="12" cy="12" r="3"></circle>
								<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
							{:else}
								<path d="M18 10h-4V6"></path>
								<path d="M14 10l7.4-7.4"></path>
								<path d="M6 14h4v4"></path>
								<path d="M10 14l-7.4 7.4"></path>
							{/if}
						</svg>
					</div>
					<h3 class="service-title">{$t(`services.items.${key}.title`)}</h3>
					<p class="service-description">{$t(`services.items.${key}.description`)}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.services {
		background: var(--color-black);
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--space-lg);
	}

	.service-card {
		background: var(--color-gray);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
		transition: all var(--transition-normal);
	}

	.service-card:hover,
	.service-card:focus-within {
		border-color: var(--color-red);
		transform: translateY(-5px);
	}

	.service-icon {
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-black);
		border-radius: var(--radius-md);
		margin-bottom: var(--space-md);
		color: var(--color-red);
	}

	.service-title {
		font-size: 1.1rem;
		margin-bottom: var(--space-sm);
		font-family: var(--font-primary);
		text-transform: none;
		font-weight: 600;
	}

	.service-description {
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.95rem;
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.services-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
