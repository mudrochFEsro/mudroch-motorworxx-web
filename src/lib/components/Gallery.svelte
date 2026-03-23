<script lang="ts">
	import { t } from '$lib/i18n';

	const galleryImages = [
		{ id: 1, alt: 'Servis vozidla' },
		{ id: 2, alt: 'Diagnostika motora' },
		{ id: 3, alt: 'Oprava bŕzd' },
		{ id: 4, alt: 'Práca na podvozku' },
		{ id: 5, alt: 'Oprava motora' },
		{ id: 6, alt: 'Dielňa' }
	];
</script>

<section class="gallery section" id="gallery" aria-labelledby="gallery-heading">
	<div class="container">
		<h2 id="gallery-heading" class="section-title">{$t('gallery.title')}</h2>
		<ul class="gallery-grid" role="list" aria-label="Galéria fotografií">
			{#each galleryImages as image}
				<li class="gallery-item" role="listitem">
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

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
	}

	.gallery-item {
		aspect-ratio: 4/3;
		overflow: hidden;
		border-radius: var(--radius-md);
		transition: transform var(--transition-normal);
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
</style>
