<script lang="ts">
	import { t } from '$lib/i18n';
	import { gsap, ScrollTrigger, prefersReducedMotion, animations } from '$lib/animations/gsap';

	const galleryImages = [
		{ id: 1, alt: 'Servis vozidla' },
		{ id: 2, alt: 'Diagnostika motora' },
		{ id: 3, alt: 'Oprava bŕzd' },
		{ id: 4, alt: 'Práca na podvozku' },
		{ id: 5, alt: 'Oprava motora' },
		{ id: 6, alt: 'Dielňa' }
	];

	let sectionTitle: HTMLElement;
	let gallerySection: HTMLElement;
	let galleryItems: HTMLElement[] = [];

	$effect(() => {
		if (prefersReducedMotion()) {
			// Show all elements instantly
			if (sectionTitle) sectionTitle.style.opacity = '1';
			galleryItems.forEach(item => { if (item) item.style.opacity = '1'; });
			return;
		}

		const triggers: ScrollTrigger[] = [];

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

		// Gallery items with alternating y offset and random stagger
		const validItems = galleryItems.filter(Boolean);
		if (validItems.length > 0) {
			validItems.forEach((item, index) => {
				const yOffset = index % 2 === 0 ? 100 : -100;
				gsap.set(item, {
					...animations.galleryItem.from,
					y: yOffset
				});
			});

			const itemsTrigger = ScrollTrigger.create({
				trigger: gallerySection,
				start: 'top 80%',
				onEnter: () => {
					validItems.forEach((item, index) => {
						const delay = Math.random() * 0.3;
						gsap.to(item, {
							...animations.galleryItem.to,
							y: 0,
							delay
						});
					});
				}
			});
			triggers.push(itemsTrigger);

			// Scroll parallax for each item
			validItems.forEach((item, index) => {
				const parallaxFactor = 0.05 + (index % 3) * 0.03;

				const parallaxTrigger = ScrollTrigger.create({
					trigger: item,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
					onUpdate: (self) => {
						const yOffset = (self.progress - 0.5) * 100 * parallaxFactor;
						gsap.set(item, { y: yOffset });
					}
				});
				triggers.push(parallaxTrigger);
			});
		}

		return () => {
			triggers.forEach(t => t.kill());
		};
	});
</script>

<section class="gallery section" id="gallery" aria-labelledby="gallery-heading" bind:this={gallerySection}>
	<div class="container">
		<h2 id="gallery-heading" class="section-title" bind:this={sectionTitle}>{$t('gallery.title')}</h2>
		<ul class="gallery-grid" role="list" aria-label="Galéria fotografií">
			{#each galleryImages as image, i}
				<li class="gallery-item" role="listitem" bind:this={galleryItems[i]}>
					<figure class="gallery-placeholder">
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
							<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
							<circle cx="8.5" cy="8.5" r="1.5"></circle>
							<polyline points="21 15 16 10 5 21"></polyline>
						</svg>
						<figcaption>{image.alt}</figcaption>
					</figure>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.gallery {
		background: var(--color-gray);
	}

	.section-title {
		opacity: 0;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
	}

	.gallery-item {
		aspect-ratio: 4/3;
		overflow: hidden;
		border-radius: var(--radius-lg);
		transition: transform var(--transition-normal);
		opacity: 0;
		will-change: transform, opacity;
	}

	.gallery-item:hover,
	.gallery-item:focus-within {
		transform: scale(1.02);
	}

	.gallery-placeholder {
		width: 100%;
		height: 100%;
		margin: 0;
		background: rgba(0, 0, 0, 0.3);
		border: 1px dashed rgba(255, 255, 255, 0.3);
		border-radius: var(--radius-lg);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		color: rgba(255, 255, 255, 0.5);
	}

	.gallery-placeholder figcaption {
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		.gallery-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.gallery-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.section-title,
		.gallery-item {
			opacity: 1;
		}
	}
</style>
