<script lang="ts">
	import { t } from '$lib/i18n';
	import { gsap, ScrollTrigger, prefersReducedMotion, animations } from '$lib/animations/gsap';

	let heroSection: HTMLElement;
	let logoElement: HTMLElement;
	let ctaElement: HTMLElement;

	$effect(() => {
		if (prefersReducedMotion()) {
			// Instant show without animations
			if (logoElement) logoElement.style.opacity = '1';
			if (ctaElement) ctaElement.style.opacity = '1';
			return;
		}

		// Set initial states
		gsap.set(logoElement, animations.heroLogo.from);
		gsap.set(ctaElement, { ...animations.heroCta.from, visibility: 'visible' });

		// Create timeline for hero animations
		const tl = gsap.timeline({ delay: 0.3 });

		tl.to(logoElement, animations.heroLogo.to)
		  .to(ctaElement, animations.heroCta.to, '-=0.4');

		// Scroll parallax for logo
		const scrollTrigger = ScrollTrigger.create({
			trigger: heroSection,
			start: 'top top',
			end: 'bottom top',
			scrub: true,
			onUpdate: (self) => {
				const progress = self.progress;
				gsap.set(logoElement, {
					y: progress * 150,
					opacity: 1 - progress * 0.5
				});
			}
		});

		return () => {
			tl.kill();
			scrollTrigger.kill();
		};
	});
</script>

<section class="hero" id="hero" aria-labelledby="hero-heading" bind:this={heroSection}>
	<div class="hero-bg" aria-hidden="true"></div>
	<div class="container hero-content">
		<h1 id="hero-heading" class="sr-only">
			{$t('hero.title')} {$t('hero.titleAccent')} - {$t('hero.subtitle')}
		</h1>

		<figure class="hero-logo" bind:this={logoElement}>
			<img
				src="/logo.svg"
				alt="MUDROCH MOTORWORXX - Profesionálny autoservis v Bratislave"
			/>
		</figure>

		<div class="hero-cta" bind:this={ctaElement}>
			<a
				href="tel:+421944122224"
				class="btn btn-primary"
				aria-label="Zavolajte nám na číslo {$t('hero.phone')}"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
					focusable="false"
				>
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
				</svg>
				<span>{$t('hero.phone')}</span>
			</a>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background: #222222;
		z-index: 0;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		padding: var(--space-xl) 0;
	}

	.hero-logo {
		margin: 0 0 var(--space-lg) 0;
		perspective: 1000px;
	}

	.hero-logo img {
		height: clamp(350px, 60vw, 650px);
		width: auto;
		margin: 0 auto var(--space-xl) auto;
		will-change: transform, opacity;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.hero-cta {
		visibility: hidden;
	}

	.hero-cta .btn {
		font-size: 1.25rem;
		padding: 1rem 2rem;
	}

	.hero-cta .btn:focus-visible {
		outline: 3px solid var(--color-white);
		outline-offset: 4px;
	}

	@media (max-width: 768px) {
		.hero-cta .btn {
			font-size: 1rem;
			padding: 0.875rem 1.5rem;
		}
	}
</style>
