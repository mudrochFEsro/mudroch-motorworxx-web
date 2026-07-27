/**
 * Vygeneruje rastrové favicony z static/favicon.svg.
 * Spustenie (dev-only nástroje): pnpm add -D sharp png-to-ico && node scripts/gen-favicons.mjs
 */
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'node:fs';

const SRC = 'static/favicon.svg';

async function png(size, out, bg = { r: 0, g: 0, b: 0, alpha: 0 }) {
	let img = sharp(SRC, { density: 512 }).resize(size, size, {
		fit: 'contain',
		background: { r: 0, g: 0, b: 0, alpha: 0 }
	});
	if (bg.alpha !== 0) img = img.flatten({ background: bg });
	await img.png().toFile(out);
	console.log('wrote', out);
}

// Transparentné PNG pre prehliadače / Google.
await png(16, 'static/favicon-16.png');
await png(32, 'static/favicon-32.png');
await png(48, 'static/favicon-48.png');
await png(192, 'static/favicon-192.png');
await png(512, 'static/favicon-512.png');
// Apple touch icon – plné čierne pozadie (bez priehľadnosti pri home-screen).
await png(180, 'static/apple-touch-icon.png', { r: 0, g: 0, b: 0 });

// favicon.ico (16/32/48) – univerzálny default pre všetky prehliadače a Google.
const ico = await pngToIco(['static/favicon-16.png', 'static/favicon-32.png', 'static/favicon-48.png']);
writeFileSync('static/favicon.ico', ico);
console.log('wrote static/favicon.ico');
