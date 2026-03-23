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
	let galleryGrid: HTMLElement;

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

		if (galleryGrid) {
			const items = galleryGrid.querySelectorAll('.gallery-item');
			gsap.set(items, animations.card.from);
			triggers.push(ScrollTrigger.create({
				trigger: galleryGrid,
				start: 'top 80%',
				onEnter: () => gsap.to(items, { ...animations.card.to, stagger: 0.08 })
			}));
		}

		return () => triggers.forEach(t => t.kill());
	});
</script>

<section class="gallery section" id="gallery">
	<div class="container">
		<h2 class="section-title" bind:this={sectionTitle}>{$t('gallery.title')}</h2>
		<ul class="gallery-grid" bind:this={galleryGrid}>
			{#each galleryImages as image}
				<li class="gallery-item">
					<figure class="gallery-placeholder">
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
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
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.gallery-item {
		aspect-ratio: 4/3;
		overflow: hidden;
		border-radius: var(--radius-lg);
		opacity: 0;
		-webkit-tap-highlight-color: transparent;
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
