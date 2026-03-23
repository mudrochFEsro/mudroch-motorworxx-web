<script lang="ts">
	import { t } from '$lib/i18n';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	let isMenuOpen = $state(false);
	let isScrolled = $state(false);
	let menuElement: HTMLElement;
	let touchStartX = 0;
	let touchCurrentX = 0;
	let isDragging = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeMenu() {
		isMenuOpen = false;
		document.body.style.overflow = '';
	}

	// Swipe gesture handlers
	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
		touchCurrentX = touchStartX;
		isDragging = true;
		if (menuElement) {
			menuElement.style.transition = 'none';
		}
	}

	function handleTouchMove(e: TouchEvent) {
		if (!isDragging) return;
		touchCurrentX = e.touches[0].clientX;
		const diff = touchCurrentX - touchStartX;

		// Only allow dragging to the right (positive diff)
		if (diff > 0 && menuElement) {
			menuElement.style.transform = `translateX(${diff}px)`;
		}
	}

	function handleTouchEnd() {
		if (!isDragging) return;
		isDragging = false;

		const diff = touchCurrentX - touchStartX;

		if (menuElement) {
			menuElement.style.transition = '';
			menuElement.style.transform = '';
		}

		// If swiped more than 80px to the right, close menu
		if (diff > 80) {
			closeMenu();
		}
	}

	// Smooth scroll to anchor - works on desktop (Lenis) and mobile (native)
	function smoothScrollTo(e: MouseEvent, href: string) {
		e.preventDefault();

		const wasMenuOpen = isMenuOpen;
		closeMenu();

		const targetId = href.replace('#', '');
		const target = document.getElementById(targetId);
		if (!target) return;

		const headerOffset = 69; // Account for fixed header

		// Scroll function
		const doScroll = () => {
			// Check if Lenis is available (desktop)
			const lenis = (window as any).lenis;
			if (lenis && typeof lenis.scrollTo === 'function') {
				lenis.scrollTo(target, { offset: -headerOffset, duration: 1.2 });
			} else {
				// Mobile/fallback - native smooth scroll
				const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth'
				});
			}
		};

		// If mobile menu was open, wait for close animation
		if (wasMenuOpen) {
			setTimeout(doScroll, 150);
		} else {
			doScroll();
		}
	}

	$effect(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isMenuOpen) {
				closeMenu();
			}
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('keydown', handleKeydown);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('keydown', handleKeydown);
			document.body.style.overflow = '';
		};
	});

	const navLinks = [
		{ href: '#services', key: 'nav.services' },
		{ href: '#about', key: 'nav.about' },
		{ href: '#gallery', key: 'nav.gallery' },
		{ href: '#contact', key: 'nav.contact' }
	];
</script>

<!-- Desktop & Mobile Header -->
<header class="header" class:scrolled={isScrolled}>
	<div class="container header-inner">
		<a href="/" class="logo" onclick={closeMenu}>
			<img src="/logo_2.svg" alt="MUDROCH MOTORWORXX" />
		</a>

		<!-- Desktop Nav -->
		<nav class="desktop-nav">
			{#each navLinks as link}
				<a href={link.href} onclick={(e) => smoothScrollTo(e, link.href)}>{$t(link.key)}</a>
			{/each}
			<LanguageSwitcher />
		</nav>

		<!-- Mobile Hamburger -->
		<button
			class="hamburger"
			class:active={isMenuOpen}
			onclick={toggleMenu}
			aria-label={isMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
			aria-expanded={isMenuOpen}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>
</header>

<!-- Mobile Menu Overlay -->
<div
	class="mobile-overlay"
	class:open={isMenuOpen}
	onclick={closeMenu}
	role="button"
	tabindex="-1"
	onkeydown={(e) => e.key === 'Enter' && closeMenu()}
></div>
<nav
	class="mobile-menu"
	class:open={isMenuOpen}
	bind:this={menuElement}
	ontouchstart={handleTouchStart}
	ontouchmove={handleTouchMove}
	ontouchend={handleTouchEnd}
>
	<div class="mobile-menu-header">
		<a href="/" class="mobile-logo" onclick={closeMenu}>
			<img src="/logo.svg" alt="MUDROCH MOTORWORXX" />
		</a>
	</div>
	<div class="mobile-menu-content">
		{#each navLinks as link, i}
			<a
				href={link.href}
				class="mobile-link"
				onclick={(e) => smoothScrollTo(e, link.href)}
				style="transition-delay: {isMenuOpen ? i * 0.05 : 0}s"
			>
				{$t(link.key)}
			</a>
		{/each}
		<div class="mobile-lang">
			<LanguageSwitcher />
		</div>
	</div>
</nav>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 1rem 0;
		transition: background 0.3s, padding 0.3s;
	}

	.header.scrolled {
		background: rgba(0, 0, 0, 0.95);
		backdrop-filter: blur(10px);
		padding: 0.75rem 0;
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		z-index: 200;
	}

	.logo img {
		height: 45px;
		width: auto;
	}

	/* Desktop Nav */
	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.desktop-nav a {
		font-weight: 500;
		text-transform: uppercase;
		font-size: 0.9rem;
		letter-spacing: 0.5px;
		transition: color 0.2s;
	}

	.desktop-nav a:hover {
		color: var(--color-red);
	}

	/* Hamburger */
	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 6px;
		width: 44px;
		height: 44px;
		padding: 10px;
		z-index: 200;
		background: transparent;
		border: none;
		cursor: pointer;
	}

	.hamburger span {
		display: block;
		width: 100%;
		height: 2px;
		background: white;
		transition: 0.3s;
		transform-origin: center;
	}

	.hamburger.active span:nth-child(1) {
		transform: rotate(45deg) translateY(5.5px);
	}

	.hamburger.active span:nth-child(2) {
		opacity: 0;
		transform: scaleX(0);
	}

	.hamburger.active span:nth-child(3) {
		transform: rotate(-45deg) translateY(-5.5px);
	}

	/* Mobile Overlay */
	.mobile-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 150;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease, visibility 0.3s ease;
		pointer-events: none;
	}

	.mobile-overlay.open {
		opacity: 1;
		visibility: visible;
		pointer-events: auto;
	}

	/* Mobile Menu - Slide from right */
	.mobile-menu {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 280px;
		max-width: 85vw;
		background: #111;
		z-index: 160;
		padding: 2rem;
		border-left: 1px solid rgba(255, 255, 255, 0.1);
		display: flex;
		flex-direction: column;
		transform: translateX(100%);
		transition: transform 0.3s ease;
		pointer-events: none;
	}

	.mobile-menu.open {
		transform: translateX(0);
		pointer-events: auto;
	}

	.mobile-menu-header {
		padding: 2rem 1.5rem;
		margin: -2rem -2rem 1rem -2rem;
		text-align: center;
		background: var(--color-gray);
	}

	.mobile-logo img {
		height: 180px;
		width: auto;
		max-width: 100%;
	}

	.mobile-menu-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.mobile-link {
		display: block;
		font-size: 1.1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 1rem 0;
		color: white;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		transition: color 0.2s, padding-left 0.2s, opacity 0.3s ease, transform 0.3s ease;
		opacity: 0;
		transform: translateX(20px);
	}

	.mobile-menu.open .mobile-link {
		opacity: 1;
		transform: translateX(0);
	}

	.mobile-link:hover {
		color: var(--color-red);
		padding-left: 0.5rem;
	}

	.mobile-lang {
		margin-top: 2rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		opacity: 0;
		transform: translateX(20px);
		transition: opacity 0.3s ease 0.2s, transform 0.3s ease 0.2s;
	}

	.mobile-menu.open .mobile-lang {
		opacity: 1;
		transform: translateX(0);
	}

	/* Mobile breakpoint */
	@media (max-width: 768px) {
		.desktop-nav {
			display: none;
		}

		.hamburger {
			display: flex;
		}
	}
</style>
