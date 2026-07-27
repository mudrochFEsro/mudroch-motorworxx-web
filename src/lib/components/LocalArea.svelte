<script lang="ts">
	import { currentLang } from '$lib/i18n';
	import { BUSINESS } from '$lib/seo/business';
	import { localArea } from '$lib/seo/localArea';
	import { LANDING_ROUTES } from '$lib/seo/routes';

	const c = $derived(localArea[$currentLang]);
	const mapSrc = `https://www.google.com/maps?q=${BUSINESS.lat},${BUSINESS.lng}&z=15&output=embed`;
</script>

<section class="local-area section" id="oblasti">
	<div class="container">
		<h2 class="section-title">{c.title}</h2>

		<div class="local-grid">
			<div class="local-text">
				<p class="local-lead">{@html c.lead}</p>

				<h3 class="local-sub">{c.servicesTitle}</h3>
				<ul class="local-links">
					{#each LANDING_ROUTES as r (r.slug)}
						<li><a href={`/${r.slug}`}>{r.label[$currentLang]}</a></li>
					{/each}
				</ul>

				<h3 class="local-sub">{c.areasTitle}</h3>
				<ul class="local-areas">
					{#each c.areas as area (area)}
						<li>{area}</li>
					{/each}
				</ul>
			</div>

			<div class="local-map">
				<iframe
					title={c.mapTitle}
					src={mapSrc}
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</div>
</section>

<style>
	.section-title {
		margin-bottom: var(--space-xl);
	}

	.local-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: start;
	}

	.local-lead {
		font-size: 1.1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.85);
		margin-bottom: var(--space-lg);
	}

	.local-lead :global(strong) {
		color: var(--color-white);
	}

	.local-sub {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: rgba(255, 255, 255, 0.6);
		font-family: var(--font-primary);
		font-weight: 600;
		margin: var(--space-md) 0 var(--space-sm);
	}

	.local-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		list-style: none;
		margin: 0 0 var(--space-md);
		padding: 0;
	}

	.local-links a {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: var(--color-gray);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 999px;
		font-size: 0.95rem;
		font-weight: 600;
		text-decoration: none;
		color: var(--color-white);
		transition: border-color 0.2s, transform 0.2s;
		-webkit-tap-highlight-color: transparent;
	}

	.local-links a:hover {
		border-color: var(--color-red);
		transform: translateY(-2px);
	}

	.local-areas {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.local-areas li {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.75);
		padding: 0.3rem 0.75rem;
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: var(--radius-md);
	}

	.local-map {
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 3;
		border-radius: var(--radius-lg);
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.local-map iframe {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: 0;
		filter: invert(90%) hue-rotate(180deg);
	}

	@media (max-width: 900px) {
		.local-grid {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}

		.local-map {
			aspect-ratio: 16 / 10;
		}
	}
</style>
