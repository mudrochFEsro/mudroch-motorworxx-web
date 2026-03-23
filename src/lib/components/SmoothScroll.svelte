<script lang="ts">
	import Lenis from 'lenis';
	import { gsap, ScrollTrigger } from '$lib/animations/gsap';

	let lenis: Lenis | null = null;

	$effect(() => {
		// Skip on mobile/touch devices and reduced motion
		const isMobile = window.innerWidth <= 768;
		const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (isMobile || isTouch || prefersReducedMotion) {
			return;
		}

		// Initialize Lenis - optimized for high refresh rate displays (120Hz+)
		lenis = new Lenis({
			duration: 0.8, // Slightly faster for snappier feel
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			touchMultiplier: 2,
			infinite: false,
			autoRaf: false // We use GSAP ticker for better sync
		});

		// Expose Lenis globally for smooth anchor scrolling
		(window as any).lenis = lenis;

		// Connect to GSAP ticker - syncs with display refresh rate
		lenis.on('scroll', ScrollTrigger.update);
		gsap.ticker.add((time) => lenis?.raf(time * 1000));

		return () => {
			if (lenis) {
				lenis.destroy();
				lenis = null;
				(window as any).lenis = null;
			}
		};
	});
</script>
