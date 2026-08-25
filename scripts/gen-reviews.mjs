/**
 * Fetchne Featurable widget API a zapíše snapshot reviews pre build-time aggregateRating.
 * Pri AKOMKOĽVEK errore zapíše {} a exit 0 – NESMIE zlyhať build.
 * Spustenie: node scripts/gen-reviews.mjs (dev/CI helper)
 */
const WIDGET_ID = '408c7ee2-ffb1-4fee-b357-87b1158e5e45';
const API_URL = `https://api.featurable.com/v2/widgets/${WIDGET_ID}`;
const OUT = 'src/lib/seo/reviews-snapshot.json';

async function main() {
	try {
		console.log(`Fetching ${API_URL}...`);
		const res = await fetch(API_URL, { headers: { accept: 'application/json' } });
		if (!res.ok) {
			console.warn(`HTTP ${res.status} – writing empty snapshot`);
			await writeEmpty();
			return;
		}
		const raw = await res.json();
		if (!raw || typeof raw !== 'object' || raw.success !== true) {
			console.warn('Invalid response shape – writing empty snapshot');
			await writeEmpty();
			return;
		}
		const widget = raw.widget;
		if (!widget || typeof widget !== 'object') {
			console.warn('No widget in response – writing empty snapshot');
			await writeEmpty();
			return;
		}
		const summary = widget.gbpLocationSummary || {};
		const rating = Number(summary.rating ?? 0);
		const count = Number(summary.reviewsCount ?? 0);

		if (rating > 0 && count > 0) {
			const snapshot = { rating, count };
			await write(snapshot);
			console.log(`✓ Wrote snapshot: rating=${rating}, count=${count}`);
		} else {
			console.warn(`No valid rating/count (${rating}/${count}) – writing empty snapshot`);
			await writeEmpty();
		}
	} catch (err) {
		console.error('Error fetching reviews:', err.message);
		console.warn('Writing empty snapshot due to error');
		await writeEmpty();
	}
}

async function write(obj) {
	const { writeFile } = await import('node:fs/promises');
	await writeFile(OUT, JSON.stringify(obj, null, 2) + '\n', 'utf-8');
}

async function writeEmpty() {
	await write({});
}

main();
