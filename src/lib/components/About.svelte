<script lang="ts">
	import { t } from '$lib/i18n';
	import { gsap, ScrollTrigger, prefersReducedMotion, animations } from '$lib/animations/gsap';

	let sectionTitle: HTMLElement;
	let paragraphs: HTMLElement[] = [];
	let valueCards: HTMLElement[] = [];
	let valueIcons: HTMLElement[] = [];

	$effect(() => {
		if (prefersReducedMotion()) {
			// Show all elements instantly
			if (sectionTitle) sectionTitle.style.opacity = '1';
			paragraphs.forEach(p => { if (p) p.style.opacity = '1'; });
			valueCards.forEach(card => { if (card) card.style.opacity = '1'; });
			return;
		}

		const triggers: ScrollTrigger[] = [];
		const iconTimelines: gsap.core.Timeline[] = [];

		// Section title animation
		if (sectionTitle) {
			gsap.set(sectionTitle, animations.sectionTitle.from);

			const titleTrigger = ScrollTrigger.create({
				trigger: sectionTitle,
				start: 'top 85%',
				onEnter: () => {
					gsap.to(sectionTitle, animations.sectionTitle.to);
				}
			});
			triggers.push(titleTrigger);
		}

		// Paragraphs animation - blur and slide from left
		const validParagraphs = paragraphs.filter(Boolean);
		if (validParagraphs.length > 0) {
			gsap.set(validParagraphs, animations.aboutParagraph.from);

			const paragraphTrigger = ScrollTrigger.create({
				trigger: validParagraphs[0],
				start: 'top 80%',
				onEnter: () => {
					gsap.to(validParagraphs, {
						...animations.aboutParagraph.to,
						stagger: 0.2
					});
				}
			});
			triggers.push(paragraphTrigger);
		}

		// Value cards animation - slide from right with rotation
		const validValueCards = valueCards.filter(Boolean);
		if (validValueCards.length > 0) {
			gsap.set(validValueCards, animations.valueCard.from);

			const valueCardTrigger = ScrollTrigger.create({
				trigger: validValueCards[0],
				start: 'top 80%',
				onEnter: () => {
					gsap.to(validValueCards, {
						...animations.valueCard.to,
						stagger: 0.15
					});
				}
			});
			triggers.push(valueCardTrigger);
		}

		// Icon pulse animation - continuous
		const validIcons = valueIcons.filter(Boolean);
		validIcons.forEach(icon => {
			const tl = gsap.timeline({ repeat: -1, yoyo: true });
			tl.to(icon, {
				scale: 1.1,
				duration: 1.5,
				ease: 'power1.inOut'
			});
			iconTimelines.push(tl);
		});

		return () => {
			triggers.forEach(t => t.kill());
			iconTimelines.forEach(tl => tl.kill());
		};
	});
</script>

<section class="about section" id="about" aria-labelledby="about-heading">
	<div class="container">
		<h2 id="about-heading" class="section-title" bind:this={sectionTitle}>{$t('about.title')}</h2>
		<div class="about-content">
			<article class="about-text">
				<p bind:this={paragraphs[0]}>{$t('about.text1')}</p>
				<p bind:this={paragraphs[1]}>{$t('about.text2')}</p>
				<p bind:this={paragraphs[2]}>{$t('about.text3')}</p>
			</article>
			<ul class="about-values" role="list" aria-label="Naše hodnoty">
				<li class="value-card" role="listitem" bind:this={valueCards[0]}>
					<div class="value-icon" aria-hidden="true" bind:this={valueIcons[0]}>
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">
							<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
							<polyline points="22 4 12 14.01 9 11.01"></polyline>
						</svg>
					</div>
					<span>{$t('about.values.quality')}</span>
				</li>
				<li class="value-card" role="listitem" bind:this={valueCards[1]}>
					<div class="value-icon" aria-hidden="true" bind:this={valueIcons[1]}>
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">
							<circle cx="12" cy="12" r="10"></circle>
							<polyline points="12 6 12 12 16 14"></polyline>
						</svg>
					</div>
					<span>{$t('about.values.experience')}</span>
				</li>
				<li class="value-card" role="listitem" bind:this={valueCards[2]}>
					<div class="value-icon" aria-hidden="true" bind:this={valueIcons[2]}>
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
	.section-title {
		opacity: 0;
	}

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
	}

	.value-card {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-lg);
		background: var(--color-gray);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-lg);
		transition: border-color var(--transition-normal);
		opacity: 0;
	}

	.value-card:hover,
	.value-card:focus-within {
		border-color: var(--color-red);
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
		will-change: transform;
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
	}

	@media (prefers-reduced-motion: reduce) {
		.section-title,
		.about-text p,
		.value-card {
			opacity: 1;
		}
	}
</style>
