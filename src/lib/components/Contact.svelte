<script lang="ts">
	import { t } from '$lib/i18n';
	import { gsap, ScrollTrigger, prefersReducedMotion, animations } from '$lib/animations/gsap';

	let sectionTitle: HTMLElement;
	let contactCards: HTMLElement[] = [];
	let ctaBox: HTMLElement;
	let phoneNumber: HTMLElement;

	$effect(() => {
		if (prefersReducedMotion()) {
			// Show all elements instantly
			if (sectionTitle) sectionTitle.style.opacity = '1';
			contactCards.forEach(card => { if (card) card.style.opacity = '1'; });
			if (ctaBox) ctaBox.style.opacity = '1';
			if (phoneNumber) phoneNumber.style.opacity = '1';
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

		// Contact cards staggered animation
		const validCards = contactCards.filter(Boolean);
		if (validCards.length > 0) {
			gsap.set(validCards, animations.contactCard.from);

			const cardsTrigger = ScrollTrigger.create({
				trigger: validCards[0],
				start: 'top 80%',
				onEnter: () => {
					gsap.to(validCards, {
						...animations.contactCard.to,
						stagger: 0.12
					});
				}
			});
			triggers.push(cardsTrigger);
		}

		// CTA box animation
		if (ctaBox) {
			gsap.set(ctaBox, animations.ctaBox.from);

			const ctaTrigger = ScrollTrigger.create({
				trigger: ctaBox,
				start: 'top 85%',
				onEnter: () => {
					gsap.to(ctaBox, animations.ctaBox.to);
				}
			});
			triggers.push(ctaTrigger);
		}

		// Phone number animation (no glow)
		if (phoneNumber) {
			gsap.set(phoneNumber, animations.phoneNumber.from);

			const phoneTrigger = ScrollTrigger.create({
				trigger: phoneNumber,
				start: 'top 90%',
				onEnter: () => {
					gsap.to(phoneNumber, animations.phoneNumber.to);
				}
			});
			triggers.push(phoneTrigger);
		}

		return () => {
			triggers.forEach(t => t.kill());
		};
	});
</script>

<section class="contact section" id="contact" aria-labelledby="contact-heading">
	<div class="container">
		<h2 id="contact-heading" class="section-title" bind:this={sectionTitle}>{$t('contact.title')}</h2>
		<div class="contact-content">
			<address class="contact-info">
				<div class="contact-card" bind:this={contactCards[0]}>
					<div class="contact-icon" aria-hidden="true">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
						</svg>
					</div>
					<div class="contact-details">
						<h3>{$t('contact.phone')}</h3>
						<a href="tel:+421944122224" class="contact-link phone" aria-label="Zavolať na číslo 0944 122 224">
							0944 122 224
						</a>
					</div>
				</div>

				<div class="contact-card" bind:this={contactCards[1]}>
					<div class="contact-icon whatsapp" aria-hidden="true">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" focusable="false">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
						</svg>
					</div>
					<div class="contact-details">
						<h3>{$t('contact.whatsapp')}</h3>
						<a
							href="https://wa.me/421944122224"
							target="_blank"
							rel="noopener noreferrer"
							class="contact-link"
							aria-label="Napísať správu cez WhatsApp na číslo 0944 122 224 (otvorí sa v novom okne)"
						>
							0944 122 224
						</a>
					</div>
				</div>

				<div class="contact-card" bind:this={contactCards[2]}>
					<div class="contact-icon" aria-hidden="true">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
					</div>
					<div class="contact-details">
						<h3>{$t('contact.location')}</h3>
						<p>{$t('contact.address')}</p>
					</div>
				</div>

			</address>

			<a
				href="tel:+421944122224"
				class="contact-cta"
				aria-label="Zavolať na číslo 0944 122 224"
				bind:this={ctaBox}
			>
				<p class="cta-text">{$t('contact.cta')}</p>
				<span class="phone-number" bind:this={phoneNumber}>0944 122 224</span>
			</a>
		</div>
	</div>
</section>

<style>
	.section-title {
		opacity: 0;
	}

	.contact-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.contact-info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--space-md);
		font-style: normal;
	}

	.contact-card {
		display: flex;
		align-items: flex-start;
		gap: var(--space-md);
		padding: var(--space-lg);
		background: var(--color-gray);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-lg);
		transition: border-color var(--transition-normal);
		opacity: 0;
	}

	.contact-card:hover,
	.contact-card:focus-within {
		border-color: var(--color-red);
	}

	.contact-icon {
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-black);
		border-radius: var(--radius-md);
		color: var(--color-red);
		flex-shrink: 0;
	}

	.contact-icon.whatsapp {
		color: #25D366;
	}

	.contact-details h3 {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: var(--space-xs);
		text-transform: uppercase;
		letter-spacing: 0.5px;
		font-family: var(--font-primary);
		font-weight: 500;
	}

	.contact-details p,
	.contact-link {
		font-size: 1.1rem;
		font-weight: 600;
	}

	.contact-link {
		transition: color var(--transition-fast);
		border-radius: var(--radius-sm);
	}

	.contact-link:hover,
	.contact-link:focus {
		color: var(--color-red);
	}

	.contact-link:focus-visible {
		outline: 3px solid var(--color-red);
		outline-offset: 4px;
	}

	.contact-link.phone {
		font-size: 1.25rem;
	}

	.contact-cta {
		display: block;
		text-align: center;
		padding: var(--space-xl);
		background: var(--color-gray);
		border: 2px solid var(--color-red);
		border-radius: var(--radius-lg);
		opacity: 0;
		transition: all var(--transition-normal);
	}

	.contact-cta:hover,
	.contact-cta:focus {
		background: var(--color-red);
		transform: scale(1.02);
	}

	.contact-cta:hover .phone-number,
	.contact-cta:focus .phone-number {
		color: var(--color-white);
	}

	.contact-cta:focus-visible {
		outline: 3px solid var(--color-white);
		outline-offset: 4px;
	}

	.cta-text {
		font-size: 1.5rem;
		margin-bottom: var(--space-md);
		color: var(--color-white);
	}

	.phone-number {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 6vw, 3.5rem);
		font-weight: 700;
		color: var(--color-red);
		letter-spacing: 2px;
		display: block;
		transition: color var(--transition-normal);
		opacity: 0;
	}

	@media (max-width: 768px) {
		.contact-info {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.section-title,
		.contact-card,
		.contact-cta,
		.phone-number {
			opacity: 1;
		}
	}
</style>
