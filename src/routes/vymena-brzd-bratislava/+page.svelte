<script lang="ts">
	import '$lib/styles/landing.css';
	import ServiceCta from '$lib/components/ServiceCta.svelte';
	import StickyCta from '$lib/components/StickyCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import {
		SITE_URL,
		BUSINESS,
		autoRepairSchema,
		serviceSchema,
		faqSchema,
		breadcrumbSchema,
		jsonLd
	} from '$lib/seo/business';

	const pageUrl = `${SITE_URL}/vymena-brzd-bratislava`;
	const title = 'Výmena bŕzd Bratislava | MUDROCH MOTORWORXX';
	const description =
		'Výmena bŕzd Bratislava – brzdové platničky a kotúče, brzdový strmeň, brzdová kvapalina, odvzdušnenie a diagnostika bŕzd. Servis brzdového systému v Podunajských Biskupiciach. Volajte: 0944 122 224';
	const keywords =
		'výmena bŕzd, výmena bŕzd Bratislava, oprava bŕzd, servis bŕzd, brzdové platničky, brzdové kotúče, výmena brzdových platničiek, výmena brzdových kotúčov, brzdový strmeň, brzdová kvapalina, odvzdušnenie bŕzd, diagnostika bŕzd, kontrola bŕzd, oprava brzdového systému, servis brzdového systému';

	const faq = [
		{
			q: 'Koľko stojí výmena bŕzd v Bratislave?',
			a: 'Cena závisí od modelu vozidla a rozsahu – či ide len o výmenu brzdových platničiek, alebo aj brzdových kotúčov, prípadne o opravu brzdového strmeňa a výmenu brzdovej kvapaliny. Pošlite nám ŠPZ alebo VIN a pripravíme presnú cenovú ponuku. Volajte 0944 122 224.'
		},
		{
			q: 'Kedy meniť brzdové platničky a kotúče?',
			a: 'Brzdové platničky sa zvyčajne menia po 30 000 – 50 000 km, brzdové kotúče po 60 000 – 90 000 km, no závisí to od štýlu jazdy. Ak počujete pískanie alebo škrípanie, cítite chvenie pri brzdení alebo dlhšiu brzdnú dráhu, príďte na kontrolu bŕzd.'
		},
		{
			q: 'Aké sú príznaky opotrebovaných bŕzd?',
			a: 'Najčastejšie príznaky sú pískanie alebo škrípanie pri brzdení, chvenie volantu či pedálu, mäkký alebo prepadávajúci sa brzdový pedál, dlhšia brzdná dráha a rozsvietená kontrolka bŕzd. Pri týchto príznakoch odporúčame okamžitú diagnostiku bŕzd.'
		},
		{
			q: 'Ako často meniť brzdovú kvapalinu?',
			a: 'Brzdovú kvapalinu odporúčame meniť približne každé 2 roky. Časom pohlcuje vlhkosť, čím klesá jej bod varu a zhoršuje sa účinnosť bŕzd. Súčasťou výmeny je aj odvzdušnenie bŕzd, aby v systéme nezostal vzduch.'
		},
		{
			q: 'Čo je odvzdušnenie bŕzd a kedy je potrebné?',
			a: 'Odvzdušnenie bŕzd je odstránenie vzduchu z brzdového systému. Je potrebné po výmene brzdovej kvapaliny, po oprave brzdového systému alebo keď je brzdový pedál mäkký a „hubovitý". Zabezpečí pevný pedál a spoľahlivé brzdenie.'
		},
		{
			q: 'Opravujete brzdové strmene?',
			a: 'Áno. Robíme opravu aj výmenu brzdového strmeňa vrátane zaseknutých piestikov a vodítok. Súčasťou servisu brzdového systému je kontrola strmeňov, hadičiek a celého okruhu, aby brzdy fungovali bezpečne.'
		},
		{
			q: 'Ako dlho trvá výmena bŕzd?',
			a: 'Výmenu brzdových platničiek či kotúčov na jednej náprave zvládneme zvyčajne za pár hodín, často počas jednej návštevy. Presný čas a termín vám povieme vopred pri objednaní.'
		}
	];

	const breadcrumb = [
		{ name: 'Domov', url: `${SITE_URL}/` },
		{ name: 'Výmena bŕzd Bratislava', url: pageUrl }
	];

	const schemas = jsonLd(
		autoRepairSchema(),
		serviceSchema({
			name: 'Výmena bŕzd Bratislava',
			serviceType: 'Výmena a servis bŕzd (platničky, kotúče, kvapalina)',
			url: pageUrl,
			description:
				'Odborná výmena bŕzd v Bratislave – brzdové platničky a kotúče, brzdový strmeň, brzdová kvapalina, odvzdušnenie a diagnostika brzdového systému.'
		}),
		faqSchema(faq.map((f) => ({ q: f.q, a: f.a }))),
		breadcrumbSchema(breadcrumb)
	);

	const waText = 'Dobrý deň, mám záujem o výmenu bŕzd. Moje vozidlo je: ';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
	<link rel="canonical" href={pageUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Výmena bŕzd Bratislava | MUDROCH MOTORWORXX" />
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
				<a href="/">Domov</a> / <span aria-current="page">Výmena bŕzd Bratislava</span>
			</nav>
			<h1>Výmena bŕzd <span class="accent">Bratislava</span></h1>
			<p class="landing-lede">
				Bezpečná <strong>výmena bŕzd</strong> pre všetky značky áut v Bratislave – Podunajských
				Biskupiciach. Meníme <strong>brzdové platničky</strong> aj <strong>brzdové kotúče</strong>,
				riešime <strong>brzdový strmeň</strong>, výmenu <strong>brzdovej kvapaliny</strong> aj
				odvzdušnenie bŕzd. Kompletný servis brzdového systému s dôrazom na vašu bezpečnosť.
			</p>
			<div class="landing-hero-actions">
				<a href={`tel:${BUSINESS.phone}`} class="btn btn-primary">Zavolať&nbsp;<nobr>{BUSINESS.phoneDisplay}</nobr></a>
			</div>
			<div class="landing-badges">
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
					Platničky aj kotúče
				</span>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
					Brzdová kvapalina
				</span>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
					Diagnostika bŕzd
				</span>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
					Kým čakáte
				</span>
			</div>
		</div>
	</header>

	<!-- KEDY MENIŤ -->
	<section class="landing-section">
		<div class="container">
			<h2>Kedy meniť brzdy?</h2>
			<div class="landing-prose">
				<p>
					<strong>Brzdové platničky</strong> sa zvyčajne menia po <strong>30 000 – 50 000 km</strong>,
					<strong>brzdové kotúče</strong> po <strong>60 000 – 90 000 km</strong> – závisí to od štýlu
					jazdy a typu vozidla. Brzdy sú najdôležitejší bezpečnostný prvok auta, preto ich stav
					netreba podceňovať.
				</p>
				<p>
					Ak si nie ste istí stavom bŕzd, príďte na <strong>kontrolu bŕzd</strong> a diagnostiku
					brzdového systému. V servise MUDROCH MOTORWORXX v Bratislave brzdy skontrolujeme a
					odporučíme, čo treba vymeniť.
				</p>
			</div>
		</div>
	</section>

	<!-- PRÍZNAKY -->
	<section class="landing-section">
		<div class="container">
			<h2>Príznaky opotrebovaných bŕzd</h2>
			<p class="landing-prose">
				Tieto príznaky znamenajú, že brzdy potrebujú kontrolu alebo výmenu. Pri problémoch s brzdením
				neodkladajte návštevu servisu – ide o vašu bezpečnosť.
			</p>
			<ul class="landing-checklist">
				<li>Pískanie alebo škrípanie pri brzdení</li>
				<li>Chvenie volantu alebo pedálu pri brzdení</li>
				<li>Mäkký alebo prepadávajúci sa brzdový pedál</li>
				<li>Dlhšia brzdná dráha</li>
				<li>Rozsvietená kontrolka bŕzd</li>
				<li>Auto ťahá pri brzdení na jednu stranu</li>
			</ul>
		</div>
	</section>

	<!-- ČO MENÍME -->
	<section class="landing-section">
		<div class="container">
			<h2>Čo zahŕňa servis bŕzd</h2>
			<p class="landing-prose">
				Robíme kompletnú <strong>opravu a servis brzdového systému</strong> – od bežnej výmeny
				platničiek až po opravu strmeňov a výmenu brzdovej kvapaliny.
			</p>
			<div class="landing-grid">
				<div class="landing-card">
					<div class="landing-card-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg>
					</div>
					<h3>Výmena brzdových platničiek</h3>
					<p>Nové brzdové platničky na prednú aj zadnú nápravu, vrátane kontroly stavu kotúčov.</p>
				</div>
				<div class="landing-card">
					<div class="landing-card-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/></svg>
					</div>
					<h3>Výmena brzdových kotúčov</h3>
					<p>Výmena opotrebovaných či zdeformovaných brzdových kotúčov za nové kvalitné diely.</p>
				</div>
				<div class="landing-card">
					<div class="landing-card-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v6m0 0a4 4 0 1 0 4 4"/><path d="M12 8a4 4 0 0 1 4 4"/></svg>
					</div>
					<h3>Brzdová kvapalina a odvzdušnenie</h3>
					<p>Výmena brzdovej kvapaliny a odvzdušnenie bŕzd pre pevný pedál a spoľahlivé brzdenie.</p>
				</div>
				<div class="landing-card">
					<div class="landing-card-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"/></svg>
					</div>
					<h3>Diagnostika a strmene</h3>
					<p>Diagnostika bŕzd, oprava brzdového strmeňa a kontrola celého brzdového okruhu.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CENA -->
	<section class="landing-section">
		<div class="container">
			<h2>Cena výmeny bŕzd</h2>
			<div class="landing-prose">
				<p>
					Cena <strong>výmeny bŕzd</strong> závisí od modelu auta a rozsahu – či meníte len brzdové
					platničky, alebo aj brzdové kotúče, riešite brzdový strmeň či výmenu brzdovej kvapaliny.
				</p>
				<p>
					Pošlite nám <strong>ŠPZ alebo VIN</strong> vozidla a pripravíme vám <strong>presnú a férovú
					cenovú ponuku</strong> na mieru – bez skrytých poplatkov.
				</p>
			</div>
		</div>
	</section>

	<!-- PREČO MY -->
	<section class="landing-section">
		<div class="container">
			<h2>Prečo brzdy zveriť nám</h2>
			<div class="landing-grid">
				<div class="landing-card">
					<h3>Bezpečnosť na prvom mieste</h3>
					<p>Brzdy riešime dôkladne – kontrolujeme celý brzdový systém, nie len opotrebovaný diel.</p>
				</div>
				<div class="landing-card">
					<h3>Kvalitné náhradné diely</h3>
					<p>Používame overené brzdové platničky a kotúče podľa špecifikácie vášho vozidla.</p>
				</div>
				<div class="landing-card">
					<h3>Férová cena a záruka</h3>
					<p>Presná cenová ponuka vopred a záruka na vykonaný servis bŕzd.</p>
				</div>
				<div class="landing-card">
					<h3>Mobilný autoservis v Bratislave</h3>
					<p>Sme mobilný autoservis so sídlom v Podunajských Biskupiciach – bežnú výmenu bŕzd vybavíme často počas jednej návštevy.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="landing-section">
		<div class="container">
			<h2>Časté otázky – výmena bŕzd</h2>
			<Faq items={faq} />
		</div>
	</section>

	<!-- SÚVISIACE -->
	<section class="landing-section">
		<div class="container">
			<h2>Súvisiace služby</h2>
			<div class="landing-related">
				<a href="/vymena-rozvodov-bratislava">Výmena rozvodov Bratislava →</a>
				<a href="/#services">Všetky služby →</a>
				<a href="/#contact">Kontakt a otváracie hodiny →</a>
			</div>
		</div>
	</section>

	<div class="landing-cta-wrap">
		<div class="container">
			<ServiceCta
				title="Objednajte výmenu bŕzd"
				text="Zavolajte alebo napíšte na WhatsApp – poradíme, pripravíme cenovú ponuku a dohodneme termín."
				{waText}
			/>
		</div>
	</div>
</article>

<StickyCta {waText} />
