<script lang="ts">
	import { t } from '$lib/i18n';
	import { gsap, ScrollTrigger, prefersReducedMotion, animations } from '$lib/animations/gsap';

	let sectionTitle: HTMLElement;
	let textSection: HTMLElement;
	let valuesSection: HTMLElement;

	$effect(() => {
		if (prefersReducedMotion()) return;

		const triggers: ScrollTrigger[] = [];

		if (sectionTitle) {
			gsap.set(sectionTitle, animations.sectionTitle.from);
			triggers.push(ScrollTrigger.create({
				trigger: sectionTitle,
				start: 'top 85%',
				onEnter: () => gsap.to(sectionTitle, animations.sectionTitle.to)
			}));
		}

		if (textSection) {
			const paragraphs = textSection.querySelectorAll('p');
			gsap.set(paragraphs, animations.card.from);
			triggers.push(ScrollTrigger.create({
				trigger: textSection,
				start: 'top 80%',
				onEnter: () => gsap.to(paragraphs, { ...animations.card.to, stagger: 0.1 })
			}));
		}

		if (valuesSection) {
			const cards = valuesSection.querySelectorAll('.value-card');
			gsap.set(cards, animations.card.from);
			triggers.push(ScrollTrigger.create({
				trigger: valuesSection,
				start: 'top 80%',
				onEnter: () => gsap.to(cards, { ...animations.card.to, stagger: 0.1 })
			}));
		}

		return () => triggers.forEach(t => t.kill());
	});
</script>

<section class="about section" id="about">
	<div class="container">
		<h2 class="section-title" bind:this={sectionTitle}>{$t('about.title')}</h2>
		<div class="about-content">
			<article class="about-text" bind:this={textSection}>
				<p>{$t('about.text1')}</p>
				<p>{$t('about.text2')}</p>
				<p>{$t('about.text3')}</p>
			</article>
			<ul class="about-values" bind:this={valuesSection}>
				<li class="value-card">
					<div class="value-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
							<polyline points="22 4 12 14.01 9 11.01"></polyline>
						</svg>
					</div>
					<span>{$t('about.values.quality')}</span>
				</li>
				<li class="value-card">
					<div class="value-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"></circle>
							<polyline points="12 6 12 12 16 14"></polyline>
						</svg>
					</div>
					<span>{$t('about.values.experience')}</span>
				</li>
				<li class="value-card">
					<div class="value-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
	.section-title {
		opacity: 0;
	}

	.about-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: start;
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
		opacity: 0;
	}

	.about-text p:first-child {
		color: var(--color-white);
		font-weight: 500;
	}

	.about-values {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.value-card {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-lg);
		background: var(--color-gray);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-lg);
		opacity: 0;
		-webkit-tap-highlight-color: transparent;
	}

	.value-icon {
		width: 56px;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-black);
		border-radius: var(--radius-md);
		color: var(--color-red);
		flex-shrink: 0;
	}

	.value-card span {
		font-size: 1.2rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	@media (max-width: 768px) {
		.about-content {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.section-title,
		.about-text p,
		.value-card {
			opacity: 1;
		}
	}
</style>
