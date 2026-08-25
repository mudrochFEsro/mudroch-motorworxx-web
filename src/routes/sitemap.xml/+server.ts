import { buildSitemap } from './build';

export const prerender = true;

export function GET() {
	return new Response(buildSitemap('2026-08-25'), {
		headers: { 'Content-Type': 'application/xml' }
	});
}
