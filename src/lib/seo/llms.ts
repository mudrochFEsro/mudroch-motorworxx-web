import { BUSINESS, SITE_URL } from './business';
import { PAGES, urlFor, LANGS } from './pages';

/**
 * Generates the /llms.txt document (Markdown) — a concise, structured summary
 * for LLM/AI agents: who we are, contact/hours, and every service page in all
 * 4 languages. One source of truth (business.ts + pages.ts).
 */
export function buildLlmsTxt(): string {
	const lines: string[] = [];
	lines.push(`# MUDROCH MOTORWORXX`);
	lines.push('');
	lines.push(
		`> Autoservis (car repair shop) in Bratislava – Podunajské Biskupice, Slovakia. ` +
			`Specialists in timing belt replacement and brakes; full service for all car makes, ` +
			`computer diagnostics, suspension/shock absorbers, exhaust repair, and MOT/STK preparation. ` +
			`On-site and mobile service across Bratislava.`
	);
	lines.push('');
	lines.push(`## Contact`);
	lines.push(`- Name: ${BUSINESS.name}`);
	lines.push(`- Address: ${BUSINESS.street}, ${BUSINESS.district}, ${BUSINESS.city} ${BUSINESS.postalCode}, Slovakia`);
	lines.push(`- Phone: ${BUSINESS.phoneDisplay} (tel:${BUSINESS.phone})`);
	lines.push(`- Hours: Mon–Fri ${BUSINESS.opens}–${BUSINESS.closes}`);
	lines.push(`- Areas served: Podunajské Biskupice, Vrakuňa, Ružinov, Nivy, Prievoz, all of Bratislava`);
	lines.push('');
	lines.push(`## Services (pages in Slovak / English / German / Croatian)`);
	for (const p of PAGES) {
		lines.push(`### ${p.label.en}`);
		for (const lang of LANGS) {
			lines.push(`- ${lang}: ${SITE_URL}${urlFor(p.key, lang)}`);
		}
	}
	lines.push('');
	lines.push(`## More`);
	lines.push(`- Homepage: ${SITE_URL}/`);
	lines.push(`- Sitemap: ${SITE_URL}/sitemap.xml`);
	lines.push('');
	return lines.join('\n');
}
