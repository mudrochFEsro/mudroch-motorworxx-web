<script lang="ts">
	import '$lib/styles/landing.css';
	import ServiceCta from '$lib/components/ServiceCta.svelte';
	import StickyCta from '$lib/components/StickyCta.svelte';
	import {
		SITE_URL,
		BUSINESS,
		autoRepairSchema,
		serviceSchema,
		faqSchema,
		breadcrumbSchema,
		jsonLd
	} from '$lib/seo/business';

	const pageUrl = `${SITE_URL}/vymena-rozvodov-bratislava`;
	const title = 'Výmena rozvodov Bratislava | MUDROCH MOTORWORXX';
	const description =
		'Výmena rozvodov Bratislava – rozvodový remeň aj reťaz, výmena vodnej pumpy a diagnostika motora. Odborný servis rozvodov v Podunajských Biskupiciach. Zavolajte: 0944 122 224';
	const keywords =
		'výmena rozvodov, výmena rozvodov Bratislava, oprava rozvodov, rozvody motora, rozvodový remeň, rozvodová reťaz, výmena rozvodového remeňa, výmena rozvodovej reťaze, servis rozvodov, výmena vodnej pumpy, diagnostika motora, oprava motora, cena výmeny rozvodov, interval výmeny rozvodov, hlučné rozvody';

	const faq = [
		{
			q: 'Koľko stojí výmena rozvodov v Bratislave?',
			a: 'Cena výmeny rozvodov závisí od značky a modelu vozidla, typu motora a od toho, či meníte rozvodový remeň alebo rozvodovú reťaz a či sa súčasne mení vodná pumpa. Pošlite nám ŠPZ alebo VIN a pripravíme vám presnú cenovú ponuku. Volajte 0944 122 224.'
		},
		{
			q: 'Kedy treba meniť rozvody?',
			a: 'Interval výmeny rozvodov predpisuje výrobca – zvyčajne po 60 000 až 180 000 km alebo po 5 až 7 rokoch, podľa modelu. Presný interval nájdete v servisnej knižke. Pri pochybnostiach rozvody skontrolujeme a odporučíme termín výmeny.'
		},
		{
			q: 'Aké sú príznaky opotrebovaných rozvodov?',
			a: 'Typické príznaky sú hlučné rozvody (klepot alebo pískanie spredu motora), nepravidelný chod motora, ťažšie štartovanie či rozsvietená kontrolka motora. Pri akomkoľvek podozrení odporúčame okamžitú diagnostiku motora – pretrhnutý rozvodový remeň dokáže zničiť celý motor.'
		},
		{
			q: 'Čo sa stane, ak praskne rozvodový remeň?',
			a: 'Pri väčšine moderných motorov (tzv. interferenčných) pretrhnutie rozvodového remeňa spôsobí zrážku ventilov s piestami a rozsiahle poškodenie motora. Následná oprava motora je násobne drahšia ako včasná výmena rozvodov, preto interval neodkladajte.'
		},
		{
			q: 'Mám pri výmene rozvodov meniť aj vodnú pumpu?',
			a: 'Áno, odporúčame to. Pri mnohých motoroch vodnú pumpu poháňa rozvodový remeň a jej výmena je pri už rozobratom rozvode výrazne lacnejšia. Spoločná výmena rozvodov a vodnej pumpy vám ušetrí prácu aj peniaze do budúcna.'
		},
		{
			q: 'Ako dlho trvá výmena rozvodov?',
			a: 'Väčšinu výmen rozvodov zvládneme do jedného pracovného dňa. Presný čas závisí od modelu a rozsahu (remeň, reťaz, vodná pumpa, kladky, napínák). Termín aj dobu odstávky vám povieme vopred pri objednaní.'
		},
		{
			q: 'Robíte výmenu rozvodovej reťaze?',
			a: 'Áno. Vykonávame výmenu rozvodového remeňa aj výmenu rozvodovej reťaze vrátane napínákov, kladiek a tesnení. Reťazové rozvody riešime kompletne aj s prípadnou opravou motora, ak si to stav vyžaduje.'
		}
	];

	const breadcrumb = [
		{ name: 'Domov', url: `${SITE_URL}/` },
		{ name: 'Výmena rozvodov Bratislava', url: pageUrl }
	];

	const schemas = jsonLd(
		autoRepairSchema(),
		serviceSchema({
			name: 'Výmena rozvodov Bratislava',
			serviceType: 'Výmena rozvodov (rozvodový remeň a reťaz)',
			url: pageUrl,
			description:
				'Odborná výmena rozvodov v Bratislave – rozvodový remeň, rozvodová reťaz, vodná pumpa, kladky a napínáky, vrátane diagnostiky motora.'
		}),
		faqSchema(faq.map((f) => ({ q: f.q, a: f.a }))),
		breadcrumbSchema(breadcrumb)
	);

	const waText = 'Dobrý deň, mám záujem o výmenu rozvodov. Moje vozidlo je: ';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
	<link rel="canonical" href={pageUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Výmena rozvodov Bratislava | MUDROCH MOTORWORXX" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:locale" content="sk_SK" />
	<meta property="og:site_name" content="MUDROCH MOTORWORXX" />
	<meta property="og:image" content={`${SITE_URL}/logo_2.svg`} />

	<!-- GEO / local SEO -->
	<meta name="geo.region" content="SK-BL" />
	<meta name="geo.placename" content="Podunajské Biskupice, Bratislava" />
	<meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
	<meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />

	<!-- hreflang (SK-only stránka) -->
	<link rel="alternate" hreflang="sk" href={pageUrl} />
	<link rel="alternate" hreflang="x-default" href={pageUrl} />

	{@html schemas}
</svelte:head>

<article class="landing">
	<!-- HERO -->
	<header class="landing-hero">
		<div class="container">
			<nav class="landing-breadcrumb" aria-label="Omrvinková navigácia">
				<a href="/">Domov</a> / <span aria-current="page">Výmena rozvodov Bratislava</span>
			</nav>
			<h1>Výmena rozvodov <span class="accent">Bratislava</span></h1>
			<p class="landing-lede">
				Profesionálna <strong>výmena rozvodov</strong> pre všetky značky áut v Bratislave –
				Podunajských Biskupiciach. Meníme <strong>rozvodový remeň</strong> aj
				<strong>rozvodovú reťaz</strong>, vrátane vodnej pumpy, kladiek a napínákov. Servis rozvodov
				robíme presne podľa predpisov výrobcu a s kvalitnými dielmi.
			</p>
			<div class="landing-hero-actions">
				<a href={`tel:${BUSINESS.phone}`} class="btn btn-primary">Zavolať {BUSINESS.phoneDisplay}</a>
			</div>
			<div class="landing-badges">
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
					Remeň aj reťaz
				</span>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
					Vodná pumpa v jednom
				</span>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
					Diagnostika motora
				</span>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
					Vybavíme do 1 dňa
				</span>
			</div>
		</div>
	</header>

	<!-- KEDY MENIŤ -->
	<section class="landing-section">
		<div class="container">
			<h2>Kedy meniť rozvody?</h2>
			<div class="landing-prose">
				<p>
					<strong>Interval výmeny rozvodov</strong> určuje výrobca vozidla – najčastejšie v rozmedzí
					<strong>60 000 – 180 000 km</strong> alebo po <strong>5 – 7 rokoch</strong>, podľa modelu a
					typu motora. Rozvody motora sú kritický komponent: ak sa zanedbajú, hrozí pretrhnutie
					rozvodového remeňa a nákladná oprava motora.
				</p>
				<p>
					Ak neviete, kedy boli rozvody menené naposledy, alebo kupujete jazdené auto, radšej si
					nechajte urobiť <strong>kontrolu a diagnostiku motora</strong>. V servise MUDROCH MOTORWORXX
					v Bratislave vám stav rozvodov posúdime a odporučíme termín výmeny.
				</p>
			</div>
		</div>
	</section>

	<!-- PRÍZNAKY -->
	<section class="landing-section">
		<div class="container">
			<h2>Príznaky opotrebovaných rozvodov</h2>
			<p class="landing-prose">
				Nasledujúce príznaky signalizujú, že rozvody potrebujú kontrolu alebo výmenu. Pri
				<strong>hlučných rozvodoch</strong> neváhajte – včasná oprava rozvodov je vždy lacnejšia ako
				oprava motora.
			</p>
			<ul class="landing-checklist">
				<li>Hlučné rozvody – klepot, pískanie alebo hrkot spredu motora</li>
				<li>Nepravidelný chod motora či strata výkonu</li>
				<li>Ťažké alebo dlhé štartovanie</li>
				<li>Rozsvietená kontrolka motora (check engine)</li>
				<li>Únik oleja v okolí krytu rozvodov</li>
				<li>Vibrácie a trhanie pri jazde</li>
			</ul>
		</div>
	</section>

	<!-- ČO ZAHŔŇA -->
	<section class="landing-section">
		<div class="container">
			<h2>Čo zahŕňa výmena rozvodov</h2>
			<p class="landing-prose">
				Robíme kompletný <strong>servis rozvodov</strong> – nie len samotný remeň. Vždy meníme aj
				súvisiace diely, aby výmena vydržala celý interval.
			</p>
			<div class="landing-grid">
				<div class="landing-card">
					<div class="landing-card-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>
					</div>
					<h3>Výmena rozvodového remeňa</h3>
					<p>Nový rozvodový remeň, kladky a napínák podľa špecifikácie výrobcu vášho motora.</p>
				</div>
				<div class="landing-card">
					<div class="landing-card-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/><path d="M9 12h6"/></svg>
					</div>
					<h3>Výmena rozvodovej reťaze</h3>
					<p>Reťazové rozvody vrátane napínákov, vodítok a tesnení – kompletná výmena rozvodovej reťaze.</p>
				</div>
				<div class="landing-card">
					<div class="landing-card-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v6m0 0a4 4 0 1 0 4 4"/><path d="M12 8a4 4 0 0 1 4 4"/></svg>
					</div>
					<h3>Výmena vodnej pumpy</h3>
					<p>Ak vodnú pumpu poháňa rozvod, vymeníme ju v jednom – ušetríte prácu aj peniaze.</p>
				</div>
				<div class="landing-card">
					<div class="landing-card-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"/></svg>
					</div>
					<h3>Diagnostika motora</h3>
					<p>Počítačová diagnostika motora pred aj po výmene – istota, že je všetko v poriadku.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CENA -->
	<section class="landing-section">
		<div class="container">
			<h2>Cena výmeny rozvodov</h2>
			<div class="landing-prose">
				<p>
					<strong>Cena výmeny rozvodov</strong> sa líši podľa značky a modelu auta, typu motora a
					rozsahu prác – či ide o výmenu rozvodového remeňa alebo rozvodovej reťaze a či sa súčasne
					mení vodná pumpa, kladky a napínáky.
				</p>
				<p>
					Nechceme strašiť ani lákať na nereálne čísla. Pošlite nám <strong>ŠPZ alebo VIN</strong>
					vozidla a pripravíme vám <strong>presnú a férovú cenovú ponuku</strong> na mieru – bez
					skrytých poplatkov.
				</p>
			</div>
		</div>
	</section>

	<!-- PREČO MY -->
	<section class="landing-section">
		<div class="container">
			<h2>Prečo výmenu rozvodov zveriť nám</h2>
			<div class="landing-grid">
				<div class="landing-card">
					<h3>Skúsenosti so všetkými značkami</h3>
					<p>Servis rozvodov osobných aj úžitkových vozidiel – benzín aj diesel, remeň aj reťaz.</p>
				</div>
				<div class="landing-card">
					<h3>Kvalitné náhradné diely</h3>
					<p>Používame overené značkové sady rozvodov podľa špecifikácie výrobcu vášho motora.</p>
				</div>
				<div class="landing-card">
					<h3>Férová cena a záruka</h3>
					<p>Presná cenová ponuka vopred, žiadne prekvapenia a záruka na vykonanú prácu.</p>
				</div>
				<div class="landing-card">
					<h3>Rýchlo v Bratislave</h3>
					<p>Sme v Podunajských Biskupiciach, väčšinu výmen rozvodov vybavíme do jedného dňa.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="landing-section">
		<div class="container">
			<h2>Časté otázky – výmena rozvodov</h2>
			<div class="landing-faq">
				{#each faq as item (item.q)}
					<details>
						<summary>{item.q}</summary>
						<div class="faq-answer">{item.a}</div>
					</details>
				{/each}
			</div>
		</div>
	</section>

	<!-- SÚVISIACE + CTA -->
	<section class="landing-section">
		<div class="container">
			<h2>Súvisiace služby</h2>
			<div class="landing-related">
				<a href="/vymena-brzd-bratislava">Výmena bŕzd Bratislava →</a>
				<a href="/#services">Všetky služby →</a>
				<a href="/#contact">Kontakt a otváracie hodiny →</a>
			</div>
		</div>
	</section>

	<div class="landing-cta-wrap">
		<div class="container">
			<ServiceCta
				title="Objednajte výmenu rozvodov"
				text="Zavolajte alebo napíšte na WhatsApp – poradíme, pripravíme cenovú ponuku a dohodneme termín."
				{waText}
			/>
		</div>
	</div>
</article>

<StickyCta {waText} />
