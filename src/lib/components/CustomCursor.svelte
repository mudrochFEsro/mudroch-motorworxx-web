<script lang="ts">
	import { gsap, prefersReducedMotion, isTouch } from '$lib/animations/gsap';

	let cursor: HTMLElement;
	let wheel: HTMLElement;
	let isVisible = $state(false);
	let isHovering = $state(false);
	let rotation = 0;
	let lastX = 0;

	$effect(() => {
		if (isTouch() || prefersReducedMotion()) return;

		const handleMouseMove = (e: MouseEvent) => {
			if (!isVisible) isVisible = true;

			// Calculate horizontal movement for rotation
			const dx = e.clientX - lastX;
			rotation += dx * 2;
			lastX = e.clientX;

			// Move cursor
			gsap.to(cursor, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.1,
				ease: 'power2.out'
			});

			// Rotate wheel based on movement
			gsap.to(wheel, {
				rotation: rotation,
				duration: 0.3,
				ease: 'power2.out'
			});
		};

		const handleMouseEnter = () => {
			isVisible = true;
		};

		const handleMouseLeave = () => {
			isVisible = false;
		};

		const handleMouseDown = () => {
			gsap.to(cursor, {
				scale: 0.8,
				duration: 0.1
			});
		};

		const handleMouseUp = () => {
			gsap.to(cursor, {
				scale: isHovering ? 1.4 : 1,
				duration: 0.2,
				ease: 'back.out(1.7)'
			});
		};

		const handleLinkEnter = () => {
			isHovering = true;
			gsap.to(cursor, {
				scale: 1.4,
				duration: 0.3
			});
		};

		const handleLinkLeave = () => {
			isHovering = false;
			gsap.to(cursor, {
				scale: 1,
				duration: 0.3
			});
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseenter', handleMouseEnter);
		document.addEventListener('mouseleave', handleMouseLeave);
		document.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mouseup', handleMouseUp);

		const addHoverListeners = () => {
			const els = document.querySelectorAll('a, button, .service-card, .value-card, .gallery-item, .contact-card');
			els.forEach((el) => {
				el.addEventListener('mouseenter', handleLinkEnter);
				el.addEventListener('mouseleave', handleLinkLeave);
			});
			return els;
		};

		const els = addHoverListeners();
		const observer = new MutationObserver(() => addHoverListeners());
		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseenter', handleMouseEnter);
			document.removeEventListener('mouseleave', handleMouseLeave);
			document.removeEventListener('mousedown', handleMouseDown);
			document.removeEventListener('mouseup', handleMouseUp);
			observer.disconnect();
			els.forEach((el) => {
				el.removeEventListener('mouseenter', handleLinkEnter);
				el.removeEventListener('mouseleave', handleLinkLeave);
			});
		};
	});
</script>

<div class="cursor-container" class:visible={isVisible} class:hovering={isHovering}>
	<div class="wheel-cursor" bind:this={cursor}>
		<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" bind:this={wheel}>
			<!-- Tire -->
			<circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>

			<!-- Rim outer -->
			<circle cx="16" cy="16" r="12" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>

			<!-- 5 Spokes -->
			{#each [0, 72, 144, 216, 288] as angle}
				<line
					x1="16"
					y1="16"
					x2={16 + 10 * Math.cos((angle - 90) * Math.PI / 180)}
					y2={16 + 10 * Math.sin((angle - 90) * Math.PI / 180)}
					stroke="var(--color-red)"
					stroke-width="2"
					stroke-linecap="round"
				/>
			{/each}

			<!-- Center hub -->
			<circle cx="16" cy="16" r="3" fill="var(--color-red)"/>
			<circle cx="16" cy="16" r="1.5" fill="#1a1a1a"/>
		</svg>
	</div>
</div>

<style>
	.cursor-container {
		pointer-events: none;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.cursor-container.visible {
		opacity: 1;
	}

	.wheel-cursor {
		position: absolute;
		width: 28px;
		height: 28px;
		transform: translate(-50%, -50%);
	}

	.wheel-cursor svg {
		width: 100%;
		height: 100%;
		filter: drop-shadow(0 0 4px rgba(255, 0, 0, 0.4));
		transition: filter 0.3s ease;
	}

	.cursor-container.hovering .wheel-cursor svg {
		filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.7));
	}

	@media (hover: none) and (pointer: coarse) {
		.cursor-container {
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cursor-container {
			display: none;
		}
	}
</style>
