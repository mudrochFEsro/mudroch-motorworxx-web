import { prefersReducedMotion, isMobile } from './gsap';

interface Particle {
	x: number;
	y: number;
	size: number;
	speedY: number;
	opacity: number;
	parallaxFactor: number;
}

interface ParticleSystemConfig {
	canvas: HTMLCanvasElement;
	particleCount?: number;
	color?: string;
	minOpacity?: number;
	maxOpacity?: number;
	minSize?: number;
	maxSize?: number;
	speedRange?: [number, number];
}

export class ParticleSystem {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private particles: Particle[] = [];
	private animationId: number | null = null;
	private mouseX: number = 0;
	private mouseY: number = 0;
	private isRunning: boolean = false;
	private config: Required<Omit<ParticleSystemConfig, 'canvas'>>;

	constructor(options: ParticleSystemConfig) {
		this.canvas = options.canvas;
		const ctx = this.canvas.getContext('2d');
		if (!ctx) throw new Error('Could not get canvas context');
		this.ctx = ctx;

		// Set defaults based on device
		const mobile = isMobile();
		this.config = {
			particleCount: options.particleCount ?? (mobile ? 35 : 70),
			color: options.color ?? '#ffffff',
			minOpacity: options.minOpacity ?? 0.1,
			maxOpacity: options.maxOpacity ?? 0.3,
			minSize: options.minSize ?? 1,
			maxSize: options.maxSize ?? (mobile ? 2 : 3),
			speedRange: options.speedRange ?? [0.2, 0.8]
		};
	}

	private resize(): void {
		const rect = this.canvas.getBoundingClientRect();
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		this.canvas.width = rect.width * dpr;
		this.canvas.height = rect.height * dpr;
		this.ctx.scale(dpr, dpr);
		this.canvas.style.width = `${rect.width}px`;
		this.canvas.style.height = `${rect.height}px`;
	}

	private createParticle(): Particle {
		const rect = this.canvas.getBoundingClientRect();
		return {
			x: Math.random() * rect.width,
			y: Math.random() * rect.height,
			size:
				this.config.minSize + Math.random() * (this.config.maxSize - this.config.minSize),
			speedY:
				this.config.speedRange[0] +
				Math.random() * (this.config.speedRange[1] - this.config.speedRange[0]),
			opacity:
				this.config.minOpacity +
				Math.random() * (this.config.maxOpacity - this.config.minOpacity),
			parallaxFactor: 0.02 + Math.random() * 0.03
		};
	}

	private initParticles(): void {
		this.particles = [];
		for (let i = 0; i < this.config.particleCount; i++) {
			this.particles.push(this.createParticle());
		}
	}

	private handleMouseMove = (e: MouseEvent): void => {
		const rect = this.canvas.getBoundingClientRect();
		this.mouseX = e.clientX - rect.left - rect.width / 2;
		this.mouseY = e.clientY - rect.top - rect.height / 2;
	};

	private draw(): void {
		const rect = this.canvas.getBoundingClientRect();
		this.ctx.clearRect(0, 0, rect.width, rect.height);

		const isDesktop = !isMobile();

		for (const particle of this.particles) {
			// Update position - drift down
			particle.y += particle.speedY;

			// Reset particle when it goes off screen
			if (particle.y > rect.height + 10) {
				particle.y = -10;
				particle.x = Math.random() * rect.width;
			}

			// Calculate position with parallax (desktop only)
			let drawX = particle.x;
			let drawY = particle.y;

			if (isDesktop) {
				drawX += this.mouseX * particle.parallaxFactor;
				drawY += this.mouseY * particle.parallaxFactor * 0.5;
			}

			// Draw particle
			this.ctx.beginPath();
			this.ctx.arc(drawX, drawY, particle.size, 0, Math.PI * 2);
			this.ctx.fillStyle = this.config.color;
			this.ctx.globalAlpha = particle.opacity;
			this.ctx.fill();
		}

		this.ctx.globalAlpha = 1;
	}

	private animate = (): void => {
		if (!this.isRunning) return;
		this.draw();
		this.animationId = requestAnimationFrame(this.animate);
	};

	private handleResize = (): void => {
		this.resize();
		this.initParticles();
	};

	start(): void {
		if (prefersReducedMotion()) return;
		if (this.isRunning) return;

		this.isRunning = true;
		this.resize();
		this.initParticles();

		// Add event listeners
		window.addEventListener('resize', this.handleResize);
		if (!isMobile()) {
			window.addEventListener('mousemove', this.handleMouseMove);
		}

		this.animate();
	}

	stop(): void {
		this.isRunning = false;
		if (this.animationId !== null) {
			cancelAnimationFrame(this.animationId);
			this.animationId = null;
		}

		window.removeEventListener('resize', this.handleResize);
		window.removeEventListener('mousemove', this.handleMouseMove);
	}

	destroy(): void {
		this.stop();
		this.particles = [];
	}
}

// Factory function for easier usage
export function createParticleSystem(canvas: HTMLCanvasElement): ParticleSystem {
	return new ParticleSystem({ canvas });
}
