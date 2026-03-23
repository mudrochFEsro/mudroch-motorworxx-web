import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);

	// High refresh rate optimization (120Hz, 144Hz, 240Hz+)
	// Disable lag smoothing for ultra-smooth animations on ProMotion/high-Hz displays
	gsap.ticker.lagSmoothing(0);

	// Remove FPS cap - let it run at native display refresh rate
	gsap.ticker.fps(-1);
}

// Utility functions
export function prefersReducedMotion(): boolean {
	if (typeof window === 'undefined') return true;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isMobile(): boolean {
	if (typeof window === 'undefined') return true;
	return window.innerWidth <= 768;
}

export function isTouch(): boolean {
	if (typeof window === 'undefined') return true;
	return (
		'ontouchstart' in window ||
		navigator.maxTouchPoints > 0 ||
		window.matchMedia('(hover: none)').matches ||
		window.matchMedia('(pointer: coarse)').matches
	);
}

// Global GSAP defaults - optimized for high refresh rate displays
gsap.defaults({
	ease: 'power3.out',
	duration: 0.6,
	force3D: true, // GPU acceleration
	overwrite: 'auto' // Prevent animation conflicts
});

// ScrollTrigger defaults - optimized for smooth scrolling
ScrollTrigger.defaults({
	toggleActions: 'play none none none',
	start: 'top 85%',
	fastScrollEnd: true // Better performance on fast scroll
});

// Export for use in components
export { gsap, ScrollTrigger };

// Animation presets - GPU optimized for 60fps
export const animations = {
	// Hero animations
	heroLogo: {
		from: { opacity: 0, yPercent: 15 },
		to: { opacity: 1, yPercent: 0, duration: 0.8, ease: 'power3.out' }
	},

	heroCta: {
		from: { opacity: 0, yPercent: 10 },
		to: { opacity: 1, yPercent: 0, duration: 0.5, ease: 'power3.out' }
	},

	// Section title
	sectionTitle: {
		from: { opacity: 0, yPercent: 20 },
		to: { opacity: 1, yPercent: 0, duration: 0.6, ease: 'power3.out' }
	},

	// Cards - GPU optimized
	card: {
		from: { opacity: 0, yPercent: 15 },
		to: { opacity: 1, yPercent: 0, duration: 0.5, ease: 'power3.out' }
	},

	// Mobile menu items
	mobileMenuItem: {
		from: { opacity: 0, xPercent: 10 },
		to: { opacity: 1, xPercent: 0, duration: 0.3, ease: 'power2.out' }
	},

	// Footer
	footerContent: {
		from: { opacity: 0, yPercent: 10 },
		to: { opacity: 1, yPercent: 0, duration: 0.5, ease: 'power3.out' }
	}
};

// Cleanup function
export function killScrollTriggers(triggers: ScrollTrigger[]): void {
	triggers.forEach((trigger) => trigger.kill());
}

// Safe animation wrapper - checks for reduced motion
export function safeAnimate(
	target: gsap.TweenTarget,
	fromVars: gsap.TweenVars,
	toVars: gsap.TweenVars
): gsap.core.Tween | null {
	if (prefersReducedMotion()) {
		gsap.set(target, { opacity: 1, x: 0, y: 0, scale: 1 });
		return null;
	}
	gsap.set(target, fromVars);
	return gsap.to(target, toVars);
}
