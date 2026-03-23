<script lang="ts">
	import { gsap } from 'gsap';

	let cursor: HTMLElement | null = $state(null);
	let wheel: HTMLElement | null = $state(null);
	let isVisible = $state(false);
	let isHovering = $state(false);
	let rotation = 0;
	let lastX = 0;
	let isTouchDevice = $state(true);

	$effect(() => {
		// Check if touch device
		const checkTouch = () => {
			return (
				'ontouchstart' in window ||
				navigator.maxTouchPoints > 0 ||
				window.matchMedia('(hover: none)').matches ||
				window.matchMedia('(pointer: coarse)').matches
			);
		};

		isTouchDevice = checkTouch();
		if (isTouchDevice) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		// Wait for elements to be bound
		if (!cursor || !wheel) return;

		const handleMouseMove = (e: MouseEvent) => {
			isVisible = true;

			const dx = e.clientX - lastX;
			rotation += dx * 2;
			lastX = e.clientX;

			if (cursor) {
				gsap.to(cursor, {
					x: e.clientX,
					y: e.clientY,
					duration: 0.08,
					ease: 'none',
					overwrite: true
				});
			}

			if (wheel) {
				gsap.to(wheel, {
					rotation: rotation,
					duration: 0.2,
					ease: 'power1.out',
					overwrite: true
				});
			}
		};

		const handleMouseEnter = () => {
			isVisible = true;
		};

		const handleMouseLeave = () => {
			isVisible = false;
		};

		const handleMouseDown = () => {
			if (cursor) gsap.to(cursor, { scale: 0.8, duration: 0.1 });
		};

		const handleMouseUp = () => {
			if (cursor) gsap.to(cursor, { scale: isHovering ? 1.4 : 1, duration: 0.2 });
		};

		const handleLinkEnter = () => {
			isHovering = true;
			if (cursor) gsap.to(cursor, { scale: 1.4, duration: 0.3 });
		};

		const handleLinkLeave = () => {
			isHovering = false;
			if (cursor) gsap.to(cursor, { scale: 1, duration: 0.3 });
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseenter', handleMouseEnter);
		document.addEventListener('mouseleave', handleMouseLeave);
		document.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mouseup', handleMouseUp);

		const els = document.querySelectorAll('a, button, .service-card, .value-card, .gallery-item, .contact-card, .contact-cta');
		els.forEach((el) => {
			el.addEventListener('mouseenter', handleLinkEnter);
			el.addEventListener('mouseleave', handleLinkLeave);
		});

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseenter', handleMouseEnter);
			document.removeEventListener('mouseleave', handleMouseLeave);
			document.removeEventListener('mousedown', handleMouseDown);
			document.removeEventListener('mouseup', handleMouseUp);
			els.forEach((el) => {
				el.removeEventListener('mouseenter', handleLinkEnter);
				el.removeEventListener('mouseleave', handleLinkLeave);
			});
		};
	});
</script>

{#if !isTouchDevice}
	<div class="cursor-container" class:visible={isVisible}>
		<div class="wheel-cursor" bind:this={cursor}>
			<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" bind:this={wheel}>
				<circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
				<circle cx="16" cy="16" r="12" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
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
				<circle cx="16" cy="16" r="3" fill="var(--color-red)"/>
				<circle cx="16" cy="16" r="1.5" fill="#1a1a1a"/>
			</svg>
		</div>
	</div>
{/if}

<style>
	.cursor-container {
		pointer-events: none;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		opacity: 0;
		transition: opacity 0.3s ease;
		display: none;
	}

	/* Only show on desktop with hover capability */
	@media (hover: hover) and (pointer: fine) {
		.cursor-container {
			display: block;
		}
	}

	.cursor-container.visible {
		opacity: 1;
	}

	.wheel-cursor {
		position: absolute;
		width: 28px;
		height: 28px;
		transform: translate(-50%, -50%);
		will-change: transform;
		backface-visibility: hidden;
	}

	.wheel-cursor svg {
		width: 100%;
		height: 100%;
		filter: drop-shadow(0 0 4px rgba(255, 0, 0, 0.4));
		will-change: transform;
	}
</style>
