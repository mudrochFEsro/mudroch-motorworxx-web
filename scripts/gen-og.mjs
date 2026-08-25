/**
 * Vygeneruje brandovaný Open Graph obrázok 1200×630 z loga a brand farieb.
 * Spustenie (dev-only nástroje): pnpm add -D sharp && node scripts/gen-og.mjs
 */
import sharp from 'sharp';

const LOGO_SRC = 'static/logo_2.svg';
const OUTPUT = 'static/og-image.png';
const WIDTH = 1200;
const HEIGHT = 630;

// Brand farby z src/lib/styles/variables.css
const BG_DARK = '#000000';     // --color-black
const RED_ACCENT = '#E30613';  // --color-red-cta
const WHITE = '#FFFFFF';       // --color-white
const GRAY = '#CCCCCC';        // Lighter tone pre tagline

// Vytvorenie SVG pozadia s textom a červeným akcentom
const backgroundSvg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <!-- Tmavé pozadie -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG_DARK}"/>

  <!-- Červený akcentový pás (diagonálny) -->
  <polygon points="0,0 120,0 0,${HEIGHT}" fill="${RED_ACCENT}" opacity="0.15"/>

  <!-- Hlavný nadpis -->
  <text x="480" y="280"
        font-family="Arial, Helvetica, sans-serif"
        font-size="72"
        font-weight="700"
        fill="${WHITE}"
        text-anchor="start">MUDROCH</text>
  <text x="480" y="360"
        font-family="Arial, Helvetica, sans-serif"
        font-size="72"
        font-weight="700"
        fill="${WHITE}"
        text-anchor="start">MOTORWORXX</text>

  <!-- Podnadpis / tagline -->
  <text x="480" y="430"
        font-family="Arial, Helvetica, sans-serif"
        font-size="28"
        font-weight="400"
        fill="${GRAY}"
        text-anchor="start">Autoservis Bratislava</text>
  <text x="480" y="470"
        font-family="Arial, Helvetica, sans-serif"
        font-size="24"
        font-weight="400"
        fill="${GRAY}"
        text-anchor="start">Podunajské Biskupice · Vrakuňa</text>

  <!-- Červený akcentový pás (vertikálny vpravo) -->
  <rect x="${WIDTH - 8}" y="0" width="8" height="${HEIGHT}" fill="${RED_ACCENT}"/>
</svg>
`;

async function generateOgImage() {
	// 1. Render pozadia z SVG na PNG
	const backgroundPng = await sharp(Buffer.from(backgroundSvg))
		.png()
		.toBuffer();

	// 2. Načítanie a zmena veľkosti loga
	const logoHeight = 280;
	const logoPng = await sharp(LOGO_SRC, { density: 512 })
		.resize({ height: logoHeight })
		.png()
		.toBuffer();

	// 3. Získanie rozmerov loga pre pozíciu
	const logoMeta = await sharp(logoPng).metadata();
	const logoWidth = logoMeta.width;

	// Pozícia loga: ľavý okraj s marginom
	const logoLeft = 60;
	const logoTop = (HEIGHT - logoHeight) / 2; // Vertikálne vycentrované

	// 4. Kompozícia loga na pozadie
	await sharp(backgroundPng)
		.composite([{
			input: logoPng,
			left: logoLeft,
			top: Math.round(logoTop)
		}])
		.png()
		.toFile(OUTPUT);

	console.log(`Wrote ${OUTPUT} (${WIDTH}×${HEIGHT})`);

	// 5. Overenie rozmerov
	const meta = await sharp(OUTPUT).metadata();
	console.log(`Verified: ${meta.width}×${meta.height} ${meta.format}`);
}

generateOgImage().catch(err => {
	console.error('Error generating OG image:', err);
	process.exit(1);
});
