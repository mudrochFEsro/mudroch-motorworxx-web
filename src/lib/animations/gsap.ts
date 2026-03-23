import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Utility functions
export function prefersReducedMotion(): boolean {
	if (typeof window === 'undefined') return false;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isMobile(): boolean {
	if (typeof window === 'undefined') return false;
	return window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
}

export function isTouch(): boolean {
	if (typeof window === 'undefined') return false;
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Global GSAP defaults
gsap.defaults({
	ease: 'power4.out',
	duration: 0.8
});

// ScrollTrigger defaults
ScrollTrigger.defaults({
	toggleActions: 'play none none none',
	start: 'top 85%'
});

// Export for use in components
export { gsap, ScrollTrigger };

// Animation presets
export const animations = {
	// Hero animations
	heroLogo: {
		from: {
			scale: 0.7,
			opacity: 0,
			rotateX: 15,
			y: 60
		},
		to: {
			scale: 1,
			opacity: 1,
			rotateX: 0,
			y: 0,
			duration: 1.2,
			ease: 'power4.out'
		}
	},

	heroCta: {
		from: {
			y: 40,
			opacity: 0
		},
		to: {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'back.out(1.7)'
		}
	},

	// Section title reveal
	sectionTitle: {
		from: {
			clipPath: 'inset(100% 0 0 0)',
			y: 50,
			opacity: 0
		},
		to: {
			clipPath: 'inset(0% 0 0 0)',
			y: 0,
			opacity: 1,
			duration: 1,
			ease: 'power4.out'
		}
	},

	// Service cards
	serviceCard: {
		from: {
			opacity: 0,
			y: 100,
			rotateY: -15,
			scale: 0.9
		},
		to: {
			opacity: 1,
			y: 0,
			rotateY: 0,
			scale: 1,
			duration: 0.8,
			ease: 'power4.out'
		}
	},

	// About paragraphs
	aboutParagraph: {
		from: {
			x: -80,
			opacity: 0,
			filter: 'blur(10px)'
		},
		to: {
			x: 0,
			opacity: 1,
			filter: 'blur(0px)',
			duration: 0.8,
			ease: 'power4.out'
		}
	},

	// Value cards
	valueCard: {
		from: {
			x: 150,
			rotateZ: 5,
			opacity: 0
		},
		to: {
			x: 0,
			rotateZ: 0,
			opacity: 1,
			duration: 0.7,
			ease: 'power4.out'
		}
	},

	// Gallery items
	galleryItem: {
		from: {
			scale: 0.8,
			opacity: 0
		},
		to: {
			scale: 1,
			opacity: 1,
			duration: 0.8,
			ease: 'power4.out'
		}
	},

	// Contact cards
	contactCard: {
		from: {
			y: 80,
			scale: 0.95,
			opacity: 0
		},
		to: {
			y: 0,
			scale: 1,
			opacity: 1,
			duration: 0.7,
			ease: 'power4.out'
		}
	},

	// CTA box
	ctaBox: {
		from: {
			scale: 0.9,
			y: 50,
			opacity: 0
		},
		to: {
			scale: 1,
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: 'power4.out'
		}
	},

	// Phone number
	phoneNumber: {
		from: {
			y: 30,
			scale: 1.2,
			opacity: 0
		},
		to: {
			y: 0,
			scale: 1,
			opacity: 1,
			duration: 0.6,
			ease: 'back.out(1.7)'
		}
	},

	// Mobile menu items
	mobileMenuItem: {
		from: {
			y: 30,
			rotateX: -15,
			opacity: 0
		},
		to: {
			y: 0,
			rotateX: 0,
			opacity: 1,
			duration: 0.4,
			ease: 'power4.out'
		}
	},

	// Footer
	footerContent: {
		from: {
			y: 30,
			opacity: 0
		},
		to: {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power4.out'
		}
	}
};

// 3D Tilt effect for cards (desktop only)
export function create3DTilt(element: HTMLElement, intensity: number = 15): () => void {
	if (isTouch() || prefersReducedMotion()) return () => {};

	const handleMouseMove = (e: MouseEvent) => {
		const rect = element.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -intensity;
		const rotateY = ((x - centerX) / centerX) * intensity;

		gsap.to(element, {
			rotateX,
			rotateY,
			duration: 0.3,
			ease: 'power2.out',
			transformPerspective: 1000
		});
	};

	const handleMouseLeave = () => {
		gsap.to(element, {
			rotateX: 0,
			rotateY: 0,
			duration: 0.5,
			ease: 'power2.out'
		});
	};

	element.addEventListener('mousemove', handleMouseMove);
	element.addEventListener('mouseleave', handleMouseLeave);

	return () => {
		element.removeEventListener('mousemove', handleMouseMove);
		element.removeEventListener('mouseleave', handleMouseLeave);
	};
}

// Cleanup function for ScrollTrigger
export function killScrollTriggers(triggers: ScrollTrigger[]): void {
	triggers.forEach((trigger) => trigger.kill());
}
