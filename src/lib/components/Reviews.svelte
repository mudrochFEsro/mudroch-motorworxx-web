<script lang="ts">
	import { t, currentLang } from '$lib/i18n';
	import {
		fetchReviews,
		pickReviewText,
		formatRelative,
		reviewNoun,
		formatRating,
		type ReviewsData,
		type Review
	} from '$lib/reviews/featurable';

	let data = $state<ReviewsData | null>(null);
	let loading = $state(true);

	$effect(() => {
		let alive = true;
		fetchReviews().then((d) => {
			if (!alive) return;
			data = d;
			loading = false;
		});
		return () => {
			alive = false;
		};
	});

	// Repeat reviews so the marquee is wide enough, then duplicate the whole
	// sequence once so a -50% translate loops seamlessly.
	const marquee = $derived.by(() => {
		const list = data?.reviews ?? [];
		if (list.length === 0) return [] as Review[];
		let base = [...list];
		while (base.length < 8) base = base.concat(list);
		return base.concat(base);
	});

	function initials(name: string): string {
		return name
			.split(' ')
			.filter(Boolean)
			.slice(0, 2)
			.map((w) => w[0]?.toUpperCase() ?? '')
			.join('');
	}
</script>

{#if loading}
	<section class="reviews" aria-busy="true">
		<div class="reviews-inner">
			<p class="reviews-loading">{$t('reviews.loading')}</p>
		</div>
	</section>
{:else if data && data.reviews.length > 0}
	<section class="reviews" id="reviews">
		<div class="reviews-inner">
			<div class="reviews-head">
				<h2 class="reviews-title">{$t('reviews.title')}</h2>
				<div class="reviews-summary">
					<span class="reviews-score">{formatRating(data.rating, $currentLang)}</span>
					<span class="reviews-stars" aria-hidden="true">
						{#each Array(5) as _, i (i)}
							<svg
								class:filled={i < Math.round(data.rating)}
								width="22"
								height="22"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.5l1.6-7L2 9.8l7.1-.6z"
								/>
							</svg>
						{/each}
					</span>
					<span class="reviews-count">
						{data.count}
						{reviewNoun(data.count, $currentLang)}
						{$t('reviews.on_google')}
					</span>
				</div>
				{#if data.writeAReviewUri}
					<a class="reviews-cta" href={data.writeAReviewUri} target="_blank" rel="noopener">
						{$t('reviews.cta')}
					</a>
				{/if}
			</div>

			<div class="reviews-marquee">
				<ul class="reviews-track">
					{#each marquee as review, i (review.id + '-' + i)}
						<li class="review-card">
							<div class="review-top">
								{#if review.avatarUrl}
									<img
										class="review-avatar"
										src={review.avatarUrl}
										alt=""
										width="44"
										height="44"
										loading="lazy"
										referrerpolicy="no-referrer"
									/>
								{:else}
									<span class="review-avatar review-avatar--fallback" aria-hidden="true"
										>{initials(review.authorName)}</span
									>
								{/if}
								<div class="review-meta">
									<span class="review-name">{review.authorName}</span>
									<span class="review-date">{formatRelative(review.publishedAt, $currentLang)}</span>
								</div>
								<svg class="review-g" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
									<path
										fill="#4285F4"
										d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9z"
									/>
									<path
										fill="#34A853"
										d="M12 23c2.9 0 5.4-1 7.2-2.7l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23z"
									/>
									<path fill="#FBBC05" d="M6 14.3a6.6 6.6 0 0 1 0-4.2V7.3H2.3a11 11 0 0 0 0 9.8z" />
									<path
										fill="#EA4335"
										d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 0 0 12 1 11 11 0 0 0 2.3 7.3L6 10.1c.9-2.6 3.2-4.7 6-4.7z"
									/>
								</svg>
							</div>
							<div class="review-stars" aria-label={`${review.rating}/5`}>
								{#each Array(5) as _, s (s)}
									<svg
										class:filled={s < review.rating}
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.5l1.6-7L2 9.8l7.1-.6z"
										/>
									</svg>
								{/each}
							</div>
							<p class="review-text">{pickReviewText(review, $currentLang)}</p>
						</li>
					{/each}
				</ul>
			</div>

			{#if data.showBranding}
				<p class="reviews-branding">
					{$t('reviews.powered_by')}
					<a href="https://featurable.com" target="_blank" rel="noopener">Featurable</a>
				</p>
			{/if}
		</div>
	</section>
{/if}

<style>
	.reviews {
		padding: clamp(4rem, 10vw, 8rem) 0;
		overflow: hidden;
	}
	.reviews-inner {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}
	.reviews-loading {
		text-align: center;
		opacity: 0.5;
	}
	.reviews-head {
		text-align: center;
		margin-bottom: clamp(2rem, 5vw, 3.5rem);
	}
	.reviews-title {
		font-size: clamp(2rem, 5vw, 3.5rem);
		margin: 0 0 1rem;
		text-transform: uppercase;
		letter-spacing: -0.02em;
	}
	.reviews-summary {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		flex-wrap: wrap;
		justify-content: center;
	}
	.reviews-score {
		font-size: 1.8rem;
		font-weight: 800;
	}
	.reviews-stars,
	.review-stars {
		display: inline-flex;
		color: #999;
	}
	.reviews-stars :global(svg.filled),
	.review-stars :global(svg.filled) {
		color: #fbbc05;
	}
	.reviews-count {
		opacity: 0.7;
	}
	.reviews-cta {
		display: inline-block;
		margin-top: 1.2rem;
		padding: 0.8rem 1.6rem;
		border: 2px solid currentColor;
		border-radius: 999px;
		font-weight: 700;
		text-decoration: none;
		transition: transform 0.2s ease;
	}
	.reviews-cta:hover {
		transform: translateY(-2px);
	}
	.reviews-marquee {
		position: relative;
		mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
	}
	.reviews-track {
		display: flex;
		gap: 1.5rem;
		width: max-content;
		margin: 0;
		padding: 1rem 0;
		list-style: none;
		animation: reviews-scroll 60s linear infinite;
	}
	.reviews-marquee:hover .reviews-track {
		animation-play-state: paused;
	}
	@keyframes reviews-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
	.review-card {
		flex: 0 0 340px;
		max-width: 340px;
		padding: 1.5rem;
		border: 1px solid rgba(128, 128, 128, 0.25);
		border-radius: 16px;
		background: rgba(128, 128, 128, 0.06);
	}
	.review-top {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
	}
	.review-avatar {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		object-fit: cover;
		flex: 0 0 auto;
	}
	.review-avatar--fallback {
		display: grid;
		place-items: center;
		background: #fbbc05;
		color: #000;
		font-weight: 700;
	}
	.review-meta {
		display: flex;
		flex-direction: column;
		min-width: 0;
		margin-right: auto;
	}
	.review-name {
		font-weight: 700;
	}
	.review-date {
		font-size: 0.8rem;
		opacity: 0.6;
	}
	.review-text {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.5;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.reviews-branding {
		text-align: center;
		margin-top: 2rem;
		font-size: 0.8rem;
		opacity: 0.5;
	}
	.reviews-branding a {
		color: inherit;
	}
	@media (prefers-reduced-motion: reduce) {
		.reviews-track {
			animation: none;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			width: 100%;
			-webkit-overflow-scrolling: touch;
		}
		.review-card {
			scroll-snap-align: start;
		}
	}
</style>
