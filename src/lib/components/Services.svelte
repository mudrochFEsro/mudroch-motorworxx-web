<script lang="ts">
	import { t } from '$lib/i18n';
	import { gsap, ScrollTrigger, prefersReducedMotion, animations } from '$lib/animations/gsap';

	const serviceKeys = [
		'service1', 'service2', 'service3', 'service4', 'service5',
		'service6', 'service7', 'service8', 'service9'
	];

	let sectionTitle: HTMLElement;
	let cardsContainer: HTMLElement;

	$effect(() => {
		if (prefersReducedMotion()) return;

		const triggers: ScrollTrigger[] = [];

		// Title animation
		if (sectionTitle) {
			gsap.set(sectionTitle, animations.sectionTitle.from);
			triggers.push(ScrollTrigger.create({
				trigger: sectionTitle,
				start: 'top 85%',
				onEnter: () => gsap.to(sectionTitle, animations.sectionTitle.to)
			}));
		}

		// Cards animation
		if (cardsContainer) {
			const cards = cardsContainer.querySelectorAll('.service-card');
			gsap.set(cards, animations.card.from);
			triggers.push(ScrollTrigger.create({
				trigger: cardsContainer,
				start: 'top 80%',
				onEnter: () => gsap.to(cards, { ...animations.card.to, stagger: 0.08 })
			}));
		}

		return () => triggers.forEach(t => t.kill());
	});
</script>

<section class="services section" id="services">
	<div class="container">
		<h2 class="section-title" bind:this={sectionTitle}>{$t('services.title')}</h2>
		<ul class="services-grid" bind:this={cardsContainer}>
			{#each serviceKeys as key, i}
				<li class="service-card">
					<div class="service-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							{#if i === 0}
								<!-- Servis - kľúč a skrutkovač -->
								<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
							{:else if i === 1}
								<!-- Diagnostika - OBD konektor/scan -->
								<rect x="2" y="6" width="20" height="12" rx="2"></rect>
								<path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01"></path>
								<path d="M6 14h12"></path>
							{:else if i === 2}
								<!-- Brzdy - brzdový kotúč -->
								<circle cx="12" cy="12" r="10"></circle>
								<circle cx="12" cy="12" r="6"></circle>
								<circle cx="12" cy="12" r="2"></circle>
								<path d="M12 2v2M12 20v2M2 12h2M20 12h2"></path>
							{:else if i === 3}
								<!-- Tlmiče - pružina/tlmič -->
								<path d="M12 2v2"></path>
								<path d="M12 20v2"></path>
								<path d="M8 6h8"></path>
								<path d="M6 10h12"></path>
								<path d="M8 14h8"></path>
								<path d="M6 18h12"></path>
								<rect x="10" y="4" width="4" height="2" rx="1"></rect>
								<rect x="10" y="18" width="4" height="2" rx="1"></rect>
							{:else if i === 4}
								<!-- Bodykit/tuning - auto so šípkou dole -->
								<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path>
								<circle cx="7" cy="17" r="2"></circle>
								<circle cx="17" cy="17" r="2"></circle>
								<path d="M12 5v3M10 7l2 2 2-2"></path>
							{:else if i === 5}
								<!-- STK - clipboard s checkom -->
								<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
								<rect x="9" y="3" width="6" height="4" rx="1"></rect>
								<path d="M9 14l2 2 4-4"></path>
							{:else if i === 6}
								<!-- Čelné sklo -->
								<path d="M3 8l3-3h12l3 3"></path>
								<path d="M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8"></path>
								<path d="M7 12l4 4"></path>
								<path d="M11 12l4 4"></path>
							{:else if i === 7}
								<!-- Rozvody - ozubené koleso s reťazou -->
								<circle cx="12" cy="12" r="5"></circle>
								<circle cx="12" cy="12" r="2"></circle>
								<path d="M12 7V5M12 19v-2M7 12H5M19 12h-2"></path>
								<path d="M8.5 8.5L7 7M17 17l-1.5-1.5M8.5 15.5L7 17M17 7l-1.5 1.5"></path>
							{:else}
								<!-- Výfuk - výfukové potrubie -->
								<path d="M4 14h6"></path>
								<ellipse cx="13" cy="14" rx="3" ry="2"></ellipse>
								<path d="M16 14h2c1 0 2-.5 2-2s-1-2-2-2h-1"></path>
								<path d="M20 14c1 0 2 .5 2 1.5s-1 1.5-2 1.5"></path>
								<path d="M4 14c0-2 1-4 4-4h2"></path>
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

	.section-title {
		opacity: 0;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-lg);
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.service-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		background: var(--color-gray);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
		opacity: 0;
		-webkit-tap-highlight-color: transparent;
	}

	.service-icon {
		width: 56px;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-black);
		border-radius: var(--radius-md);
		color: var(--color-red);
	}

	.service-title {
		font-size: 1.1rem;
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

	@media (prefers-reduced-motion: reduce) {
		.section-title,
		.service-card {
			opacity: 1;
		}
	}
</style>
