<script lang="ts">
	import Lenis from 'lenis';
	import { gsap, ScrollTrigger, prefersReducedMotion } from '$lib/animations/gsap';

	let lenis: Lenis | null = null;

	$effect(() => {
		if (prefersReducedMotion()) return;

		// Initialize Lenis
		lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			touchMultiplier: 2
		});

		// Connect Lenis to GSAP ScrollTrigger
		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis?.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		return () => {
			if (lenis) {
				lenis.destroy();
				lenis = null;
			}
		};
	});
</script>
