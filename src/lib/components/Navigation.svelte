<script lang="ts">
	import { t } from '$lib/i18n';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { gsap, prefersReducedMotion, animations } from '$lib/animations/gsap';

	let isMenuOpen = $state(false);
	let isScrolled = $state(false);
	let menuButtonRef: HTMLButtonElement;
	let firstMenuLink: HTMLAnchorElement;
	let navElement: HTMLElement;
	let menuLinks: HTMLElement[] = [];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
		menuButtonRef?.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isMenuOpen) {
			closeMenu();
		}
	}

	$effect(() => {
		if (prefersReducedMotion()) return;

		const handleScroll = () => {
			const scrolled = window.scrollY > 50;
			if (scrolled !== isScrolled) {
				isScrolled = scrolled;
				// GSAP smooth transition for nav
				gsap.to(navElement, {
					backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
					backdropFilter: scrolled ? 'blur(10px)' : 'none',
					padding: scrolled ? '0.75rem 0' : '1rem 0',
					duration: 0.3,
					ease: 'power2.out'
				});
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	// CSS fallback for scroll effect
	$effect(() => {
		if (prefersReducedMotion()) {
			const handleScroll = () => {
				isScrolled = window.scrollY > 50;
			};
			window.addEventListener('scroll', handleScroll);
			handleScroll();
			return () => window.removeEventListener('scroll', handleScroll);
		}
	});

	$effect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
			document.addEventListener('keydown', handleKeydown);
			// Focus first menu item when opened
			setTimeout(() => firstMenuLink?.focus(), 100);

			// Animate mobile menu items
			if (!prefersReducedMotion()) {
				const validLinks = menuLinks.filter(Boolean);
				gsap.set(validLinks, animations.mobileMenuItem.from);
				gsap.to(validLinks, {
					...animations.mobileMenuItem.to,
					stagger: 0.08,
					delay: 0.1
				});
			}
		} else {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleKeydown);
		}

		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	const navLinks = [
		{ href: '#services', key: 'nav.services' },
		{ href: '#about', key: 'nav.about' },
		{ href: '#gallery', key: 'nav.gallery' },
		{ href: '#contact', key: 'nav.contact' }
	];
</script>

<header class="nav" class:scrolled={isScrolled} role="banner" bind:this={navElement}>
	<nav class="container nav-container" aria-label="Hlavná navigácia">
		<a href="/" class="logo" onclick={closeMenu} aria-label="MUDROCH MOTORWORXX - Domov">
			<img src="/logo_2.svg" alt="" aria-hidden="true" />
		</a>

		<button
			bind:this={menuButtonRef}
			class="hamburger"
			class:active={isMenuOpen}
			onclick={toggleMenu}
			aria-label={isMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
			aria-expanded={isMenuOpen}
			aria-controls="main-menu"
			type="button"
		>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</button>

		<div
			id="main-menu"
			class="nav-menu"
			class:open={isMenuOpen}
			role="dialog"
			aria-modal={isMenuOpen ? 'true' : undefined}
			aria-label="Navigačné menu"
		>
			<ul class="nav-links" role="list">
				{#each navLinks as link, i}
					<li role="listitem" bind:this={menuLinks[i]}>
						{#if i === 0}
							<a
								href={link.href}
								onclick={closeMenu}
								bind:this={firstMenuLink}
							>
								{$t(link.key)}
							</a>
						{:else}
							<a
								href={link.href}
								onclick={closeMenu}
							>
								{$t(link.key)}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
			<LanguageSwitcher />
		</div>
	</nav>
</header>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: var(--z-nav);
		padding: 1rem 0;
		transition: background-color var(--transition-normal), padding var(--transition-normal);
		will-change: background-color, padding;
	}

	.nav.scrolled {
		background: rgba(0, 0, 0, 0.95);
		backdrop-filter: blur(10px);
		padding: 0.75rem 0;
	}

	.nav-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		z-index: 10;
		border-radius: var(--radius-sm);
	}

	.logo:focus-visible {
		outline: 3px solid var(--color-red);
		outline-offset: 4px;
	}

	.logo img {
		height: 50px;
		width: auto;
		transition: height var(--transition-normal);
	}

	.nav.scrolled .logo img {
		height: 40px;
	}

	.nav-menu {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-links a {
		font-weight: 500;
		text-transform: uppercase;
		font-size: 0.9rem;
		letter-spacing: 0.5px;
		position: relative;
		transition: color var(--transition-fast);
		padding: 0.5rem 0;
		border-radius: var(--radius-sm);
	}

	.nav-links a:focus-visible {
		outline: 3px solid var(--color-red);
		outline-offset: 4px;
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--color-red);
		transition: width var(--transition-normal);
	}

	.nav-links a:hover,
	.nav-links a:focus {
		color: var(--color-red);
	}

	.nav-links a:hover::after,
	.nav-links a:focus::after {
		width: 100%;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 44px;
		height: 44px;
		z-index: 10;
		padding: 7px;
		border-radius: var(--radius-sm);
	}

	.hamburger:focus-visible {
		outline: 3px solid var(--color-red);
		outline-offset: 2px;
	}

	.hamburger span {
		display: block;
		width: 100%;
		height: 2px;
		background: var(--color-white);
		transition: all var(--transition-normal);
	}

	.hamburger.active span:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.hamburger.active span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.active span:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -5px);
	}

	@media (max-width: 768px) {
		.hamburger {
			display: flex;
		}

		.nav-menu {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: var(--color-black);
			flex-direction: column;
			justify-content: center;
			gap: 3rem;
			opacity: 0;
			visibility: hidden;
			transition: all var(--transition-normal);
		}

		.nav-menu.open {
			opacity: 1;
			visibility: visible;
		}

		.nav-links {
			flex-direction: column;
			align-items: center;
			gap: 1.5rem;
		}

		.nav-links li {
			perspective: 1000px;
		}

		.nav-links a {
			font-size: 1.5rem;
			padding: 0.75rem 1rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.nav {
			transition: none;
		}
	}
</style>
