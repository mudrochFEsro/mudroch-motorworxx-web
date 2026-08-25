import type { Lang } from '$lib/i18n';

export type Card = { h3: string; p: string };
export type Qa = { q: string; a: string };

export type LandingContent = {
	metaTitle: string;
	metaDescription: string;
	breadcrumbHome: string;
	breadcrumbCurrent: string;
	heroH1: string;
	heroH1Accent: string;
	heroLede: string;
	answer?: string;
	callBtn: string;
	badges: string[];
	whenH2: string;
	whenProse: string;
	symptomsH2: string;
	symptomsProse: string;
	symptomsList: string[];
	includesH2: string;
	includesProse: string;
	includesCards: Card[];
	priceH2: string;
	priceProse: string;
	whyH2: string;
	whyCards: Card[];
	faqH2: string;
	faq: Qa[];
	relatedH2: string;
	related: { href: string; label: string }[];
	ctaTitle: string;
	ctaText: string;
	waText: string;
};

export const content: Record<Lang, LandingContent> = {
	sk: {
		metaTitle: 'Výmena tlmičov a oprava podvozku Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Výmena tlmičov Bratislava – predné a zadné tlmiče, silentbloky, čapy riadenia, ramená nápravy, ložiská podvozku. Oprava podvozku a diagnostika pruženia v Podunajských Biskupiciach. Volajte: 0944 122 224',
		breadcrumbHome: 'Domov',
		breadcrumbCurrent: 'Výmena tlmičov a podvozok Bratislava',
		heroH1: 'Výmena tlmičov a oprava podvozku',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Profesionálna <strong>výmena tlmičov</strong> a <strong>oprava podvozku</strong> pre všetky značky áut v Bratislave – Podunajských Biskupiciach. Meníme <strong>predné aj zadné tlmiče pruženia</strong>, <strong>silentbloky</strong>, <strong>čapy riadenia</strong>, <strong>ramená nápravy</strong> a <strong>ložiská podvozku</strong>. Náš mobilný autoservis rieši kompletnú diagnostiku a servis podvozku s dôrazom na vašu bezpečnosť a jazdný komfort.',
		answer:
			'<strong>Výmenu tlmičov a opravu podvozku v Bratislave</strong> riešime komplexne – vymeníme opotrebované tlmiče pruženia, silentbloky aj guľové čapy a zdiagnostikujeme klepanie z podvozku či zhoršené držanie stopy. Pre férovú cenovú ponuku na mieru zavolajte na <strong>0944 122 224</strong>.',
		callBtn: 'Zavolať',
		badges: ['Tlmiče pruženia', 'Silentbloky a čapy', 'Diagnostika podvozku'],
		whenH2: 'Kedy meniť tlmiče a podvozok?',
		whenProse:
			'<p><strong>Tlmiče pruženia</strong> sa odporúčajú meniť približne po <strong>60 000 – 100 000 km</strong>, no ich životnosť závisí od štýlu jazdy, kvality ciest a typu vozidla. <strong>Silentbloky</strong> a <strong>čapy</strong> sa bežne menia po <strong>80 000 – 120 000 km</strong>, ale pri výraznom opotrebení aj skôr.</p><p>Ak si nie ste istí stavom podvozku, príďte na <strong>kontrolu tlmičov</strong> a <strong>diagnostiku podvozku</strong>. V servise MUDROCH MOTORWORXX v Bratislave podvozok dôkladne skontrolujeme a odporučíme, ktoré diely treba vymeniť.',
		symptomsH2: 'Príznaky opotrebovaného podvozku',
		symptomsProse:
			'Tieto príznaky znamenajú, že tlmiče alebo iné diely podvozku potrebujú kontrolu alebo výmenu. Pri problémoch s podvozkom neodkladajte návštevu servisu – ide o bezpečnosť a pohodlie jazdy.',
		symptomsList: [
			'Auto sa hádzajúce pri jazde cez výtlky',
			'Dlhší výkyv karosérie po prechode nerovnosti',
			'Bublavý alebo cvakavý hluk z podvozku',
			'Horšie držanie stopy a stabilita v zákrutách',
			'Nerovnomerné opotrebenie pneumatík',
			'Mastiace alebo vlnkujúce sa vedenie auta'
		],
		includesH2: 'Čo zahŕňa servis podvozku',
		includesProse:
			'Robíme kompletnú <strong>opravu a servis podvozku</strong> – od výmeny tlmičov cez silentbloky a čapy až po ramená nápravy a ložiská.',
		includesCards: [
			{ h3: 'Výmena tlmičov pruženia', p: 'Predné aj zadné tlmiče – výmena opotrebovaných tlmičov za nové kvalitné diely, vrátane kontroly pružín a opôr.' },
			{ h3: 'Silentbloky a čapy', p: 'Výmena silentblokov ramien, stojanovej tyče, čapov riadenia a stabilizátora pre tichý a presný chod podvozku.' },
			{ h3: 'Ramená nápravy a ložiská', p: 'Výmena ramien prednej či zadnej nápravy a ložísk kolies – odstránenie vôle a hluku z podvozku.' },
			{ h3: 'Diagnostika podvozku', p: 'Kontrola geometrie, stavu tlmičov, pruženia a všetkých dielov podvozku – presné zistenie závad pred opravou.' }
		],
		priceH2: 'Cena výmeny tlmičov a podvozku',
		priceProse:
			'<p>Cena <strong>výmeny tlmičov</strong> a <strong>opravy podvozku</strong> závisí od modelu auta a rozsahu – či meníte len tlmiče, silentbloky, čapy, ramená či ložiská, alebo riešite kompletnú obnovu podvozku.</p><p>Pošlite nám <strong>ŠPZ alebo VIN</strong> vozidla a pripravíme vám <strong>presnú a férovú cenovú ponuku</strong> na mieru – bez skrytých poplatkov.</p>',
		whyH2: 'Prečo podvozok zveriť nám',
		whyCards: [
			{ h3: 'Komplexný prístup', p: 'Podvozok kontrolujeme celý – nielen opotrebovaný diel. Diagnostikujeme všetky súvisiace komponenty, aby sme predišli skorým opravám.' },
			{ h3: 'Kvalitné náhradné diely', p: 'Používame overené tlmiče, silentbloky, čapy a ramená podľa špecifikácie vášho vozidla, nie náhrady pochybnej kvality.' },
			{ h3: 'Férová cena a záruka', p: 'Presná cenová ponuka vopred a záruka na vykonanú výmenu tlmičov a opravu podvozku.' },
			{ h3: 'Mobilný autoservis v Bratislave', p: 'Sme mobilný autoservis so sídlom v Podunajských Biskupiciach – výmenu tlmičov a servis podvozku zvládneme často počas jednej návštevy.' }
		],
		faqH2: 'Časté otázky – výmena tlmičov a podvozok',
		faq: [
			{ q: 'Koľko stojí výmena tlmičov v Bratislave?', a: 'Cena závisí od modelu vozidla a rozsahu – či ide len o výmenu predných alebo zadných tlmičov, alebo aj o silentbloky, čapy a iné diely podvozku. Pošlite nám ŠPZ alebo VIN a pripravíme presnú cenovú ponuku. Volajte 0944 122 224.' },
			{ q: 'Kedy meniť tlmiče pruženia?', a: 'Tlmiče sa odporúčajú meniť približne po 60 000 – 100 000 km, no závisí to od štýlu jazdy a kvality ciest. Ak auto skáče cez výtlky, dlho sa kýva alebo z podvozku počuť bublavý hluk, príďte na kontrolu tlmičov.' },
			{ q: 'Aké sú príznaky opotrebovaných tlmičov?', a: 'Najčastejšie príznaky sú hádzajúce sa auto pri jazde cez nerovnosti, dlhší výkyv karosérie, zlé držanie stopy v zákrutách, bublavý hluk z podvozku a nerovnomerné opotrebenie pneumatík. Pri týchto príznakoch odporúčame okamžitú diagnostiku podvozku.' },
			{ q: 'Čo sú silentbloky a kedy ich meniť?', a: 'Silentbloky sú gumovo-kovové puzdra, ktoré tlmia nárazy a vibrácii v uložení ramien a stabilizátora. Menia sa približne po 80 000 – 120 000 km, prípadne skôr pri cvakavom hluku, vôli v riadení alebo mastiavom volanom.' },
			{ q: 'Opravujete aj čapy riadenia a ramená?', a: 'Áno. Meníme čapy riadenia, kulové čapy, ramená prednej aj zadnej nápravy a opravujeme vôle v uložení. Súčasťou servisu podvozku je aj diagnostika geometrie a kontrola celého systému pruženia.' },
			{ q: 'Ako prebieha diagnostika podvozku?', a: 'Podvozok kontrolujeme na zdviháku – skúšame vôle v čapoch, ramená, stav tlmičov, silentblokov, ložísk a pružín. Po diagnostike vás presne informujeme, ktoré diely treba vymeniť a čo je len odporúčanie do budúcna.' },
			{ q: 'Ako dlho trvá výmena tlmičov?', a: 'Výmenu tlmičov na jednej náprave zvládneme zvyčajne za pár hodín, často počas jednej návštevy. Pri komplexnej oprave podvozku (silentbloky, čapy, ramená) môže trvať práca dlhšie. Presný čas a termín vám povieme vopred pri objednaní.' }
		],
		relatedH2: 'Súvisiace služby',
		related: [
			{ href: '/', label: 'Domov →' },
			{ href: '/vymena-brzd-bratislava', label: 'Výmena bŕzd Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'Príprava na STK a EK →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Diagnostika áut →' }
		],
		ctaTitle: 'Objednajte výmenu tlmičov a opravu podvozku',
		ctaText: 'Zavolajte alebo napíšte na WhatsApp – poradíme, pripravíme cenovú ponuku a dohodneme termín.',
		waText: 'Dobrý deň, mám záujem o výmenu tlmičov a podvozok. Moje vozidlo je: '
	},

	en: {
		metaTitle: 'Shock Absorber Replacement & Suspension Repair Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Shock absorber replacement in Bratislava – front and rear shock absorbers, bushings, ball joints, control arms, wheel bearings. Suspension repair and diagnostics in Podunajské Biskupice. Call: 0944 122 224',
		breadcrumbHome: 'Home',
		breadcrumbCurrent: 'Shock Absorber Replacement Bratislava',
		heroH1: 'Shock absorber replacement & suspension repair',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Professional <strong>shock absorber replacement</strong> and <strong>suspension repair</strong> for all car brands in Bratislava – Podunajské Biskupice. We replace both <strong>front and rear shock absorbers</strong>, <strong>bushings</strong>, <strong>ball joints</strong>, <strong>control arms</strong> and <strong>wheel bearings</strong>. Our mobile car service handles complete suspension diagnostics and service with a focus on your safety and driving comfort.',
		answer:
			'<strong>Shock absorber replacement and suspension repair in Bratislava</strong> – we replace worn shock absorbers, bushings and ball joints and diagnose knocking from the suspension or poor road holding. For a fair, tailored quote call <strong>0944 122 224</strong>.',
		callBtn: 'Call',
		badges: ['Shock absorbers', 'Bushings & ball joints', 'Suspension diagnostics'],
		whenH2: 'When to replace shock absorbers and suspension parts?',
		whenProse:
			'<p><strong>Shock absorbers</strong> are recommended to be replaced approximately every <strong>60,000 – 100,000 km</strong>, but their lifespan depends on driving style, road quality and vehicle type. <strong>Bushings</strong> and <strong>ball joints</strong> are usually replaced every <strong>80,000 – 120,000 km</strong>, or earlier if significantly worn.</p><p>If you\'re unsure about the condition of your suspension, come in for a <strong>shock absorber check</strong> and <strong>suspension diagnostics</strong>. At MUDROCH MOTORWORXX in Bratislava we\'ll thoroughly inspect the suspension and recommend which parts need replacing.',
		symptomsH2: 'Signs of worn suspension',
		symptomsProse:
			'These signs mean the shock absorbers or other suspension parts need checking or replacement. Don\'t postpone a service visit when you have suspension problems – it\'s about safety and driving comfort.',
		symptomsList: [
			'Car bouncing over bumps',
			'Longer body oscillation after crossing unevenness',
			'Knocking or clunking noise from the suspension',
			'Poor road holding and stability in corners',
			'Uneven tyre wear',
			'Grinding or wavy steering'
		],
		includesH2: 'What the suspension service includes',
		includesProse:
			'We provide a complete <strong>suspension repair and service</strong> – from shock absorber replacement via bushings and ball joints to control arms and bearings.',
		includesCards: [
			{ h3: 'Shock absorber replacement', p: 'Front and rear shock absorbers – replacement of worn shocks with new quality parts, including inspection of springs and mounts.' },
			{ h3: 'Bushings & ball joints', p: 'Replacement of control arm bushings, strut rod, ball joints and stabiliser bar for quiet and precise suspension operation.' },
			{ h3: 'Control arms & bearings', p: 'Replacement of front or rear axle control arms and wheel bearings – elimination of play and noise from the suspension.' },
			{ h3: 'Suspension diagnostics', p: 'Inspection of geometry, shock absorber condition, suspension and all suspension parts – precise fault detection before repair.' }
		],
		priceH2: 'Shock absorber and suspension replacement price',
		priceProse:
			'<p>The price of <strong>shock absorber replacement</strong> and <strong>suspension repair</strong> depends on the car model and scope – whether you replace only the shocks, bushings, ball joints, control arms or bearings, or you\'re dealing with a complete suspension overhaul.</p><p>Send us the <strong>licence plate or VIN</strong> of your vehicle and we\'ll prepare a <strong>precise, fair quote</strong> tailored to you – with no hidden fees.</p>',
		whyH2: 'Why entrust your suspension to us',
		whyCards: [
			{ h3: 'Comprehensive approach', p: 'We inspect the entire suspension – not just the worn part. We diagnose all related components to prevent early repairs.' },
			{ h3: 'Quality spare parts', p: 'We use proven shock absorbers, bushings, ball joints and control arms to your vehicle\'s specification, not dubious quality replacements.' },
			{ h3: 'Fair price and warranty', p: 'A precise quote up front and a warranty on the shock absorber replacement and suspension repair performed.' },
			{ h3: 'Mobile car service in Bratislava', p: 'We are a mobile car service based in Podunajské Biskupice – shock absorber replacement and suspension service is often done during a single visit.' }
		],
		faqH2: 'Frequently asked questions – shock absorbers & suspension',
		faq: [
			{ q: 'How much does shock absorber replacement in Bratislava cost?', a: 'The price depends on the vehicle model and scope – whether it\'s just a front or rear shock absorber replacement, or bushings, ball joints and other suspension parts. Send us your licence plate or VIN and we\'ll prepare an exact quote. Call 0944 122 224.' },
			{ q: 'When should shock absorbers be replaced?', a: 'Shock absorbers are recommended to be replaced approximately every 60,000 – 100,000 km, but it depends on driving style and road quality. If the car bounces over bumps, oscillates for a long time or there\'s a knocking noise from the suspension, come for a shock absorber check.' },
			{ q: 'What are the symptoms of worn shock absorbers?', a: 'The most common symptoms are a bouncing car over unevenness, longer body oscillation, poor road holding in corners, knocking noise from the suspension and uneven tyre wear. With these symptoms we recommend immediate suspension diagnostics.' },
			{ q: 'What are bushings and when should they be replaced?', a: 'Bushings are rubber-metal sleeves that dampen impacts and vibrations in control arm and stabiliser bar mountings. They are replaced approximately every 80,000 – 120,000 km, or earlier if there\'s a clicking noise, play in the steering or a grinding steering wheel.' },
			{ q: 'Do you also repair ball joints and control arms?', a: 'Yes. We replace steering ball joints, ball joints, front and rear axle control arms and repair play in mountings. The suspension service also includes geometry diagnostics and inspection of the entire suspension system.' },
			{ q: 'How does suspension diagnostics work?', a: 'We inspect the suspension on a lift – checking play in ball joints, control arms, shock absorber condition, bushings, bearings and springs. After diagnostics we\'ll precisely inform you which parts need replacing and what\'s just a recommendation for the future.' },
			{ q: 'How long does shock absorber replacement take?', a: 'We usually replace shock absorbers on one axle within a few hours, often during a single visit. With comprehensive suspension repair (bushings, ball joints, control arms) the work may take longer. We\'ll tell you the exact time and date in advance when booking.' }
		],
		relatedH2: 'Related services',
		related: [
			{ href: '/', label: 'Home →' },
			{ href: '/vymena-brzd-bratislava', label: 'Brake replacement Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'MOT preparation →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Car diagnostics →' }
		],
		ctaTitle: 'Book your shock absorber replacement',
		ctaText: 'Call us or write on WhatsApp – we\'ll advise you, prepare a quote and arrange an appointment.',
		waText: 'Hello, I\'m interested in shock absorber replacement and suspension repair. My vehicle is: '
	},

	de: {
		metaTitle: 'Stoßdämpferwechsel & Fahrwerksreparatur Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Stoßdämpferwechsel in Bratislava – vordere und hintere Stoßdämpfer, Buchsen, Kugelgelenke, Querlenker, Radlager. Fahrwerksreparatur und Diagnose in Podunajské Biskupice. Anrufen: 0944 122 224',
		breadcrumbHome: 'Startseite',
		breadcrumbCurrent: 'Stoßdämpferwechsel Bratislava',
		heroH1: 'Stoßdämpferwechsel & Fahrwerksreparatur',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Professioneller <strong>Stoßdämpferwechsel</strong> und <strong>Fahrwerksreparatur</strong> für alle Fahrzeugmarken in Bratislava – Podunajské Biskupice. Wir wechseln sowohl <strong>vordere als auch hintere Stoßdämpfer</strong>, <strong>Buchsen</strong>, <strong>Kugelgelenke</strong>, <strong>Querlenker</strong> und <strong>Radlager</strong>. Unser mobiler Autoservice erledigt komplette Fahrwerksdiagnose und -wartung mit Fokus auf Ihre Sicherheit und Fahrkomfort.',
		answer:
			'<strong>Stoßdämpferwechsel und Fahrwerksreparatur in Bratislava</strong> – wir ersetzen verschlissene Stoßdämpfer, Buchsen und Kugelgelenke und diagnostizieren Klopfen aus dem Fahrwerk oder schlechte Straßenlage. Für ein faires Angebot nach Maß rufen Sie <strong>0944 122 224</strong> an.',
		callBtn: 'Anrufen',
		badges: ['Stoßdämpfer', 'Buchsen & Gelenke', 'Fahrwerksdiagnose'],
		whenH2: 'Wann sollten Stoßdämpfer und Fahrwerksteile gewechselt werden?',
		whenProse:
			'<p><strong>Stoßdämpfer</strong> werden empfohlen, etwa alle <strong>60.000 – 100.000 km</strong> zu wechseln, aber ihre Lebensdauer hängt von Fahrstil, Straßenqualität und Fahrzeugtyp ab. <strong>Buchsen</strong> und <strong>Kugelgelenke</strong> werden meist alle <strong>80.000 – 120.000 km</strong> gewechselt, oder früher bei deutlichem Verschleiß.</p><p>Wenn Sie sich beim Zustand des Fahrwerks unsicher sind, kommen Sie zur <strong>Stoßdämpferkontrolle</strong> und <strong>Fahrwerksdiagnose</strong>. Bei MUDROCH MOTORWORXX in Bratislava prüfen wir das Fahrwerk gründlich und empfehlen, welche Teile gewechselt werden müssen.',
		symptomsH2: 'Anzeichen eines verschlissenen Fahrwerks',
		symptomsProse:
			'Diese Anzeichen bedeuten, dass die Stoßdämpfer oder andere Fahrwerksteile eine Kontrolle oder einen Wechsel brauchen. Schieben Sie einen Werkstattbesuch bei Fahrwerksproblemen nicht auf – es geht um Sicherheit und Fahrkomfort.',
		symptomsList: [
			'Auto hüpft über Bodenunebenheiten',
			'Längere Karosserie-Schwingung nach Unebenheiten',
			'Klopfen oder Klappern vom Fahrwerk',
			'Schlechte Straßenlage und Stabilität in Kurven',
			'Ungleichmäßiger Reifenverschleiß',
			'Schleifende oder wellige Lenkung'
		],
		includesH2: 'Was der Fahrwerks-Service umfasst',
		includesProse:
			'Wir bieten eine komplette <strong>Fahrwerksreparatur und -wartung</strong> – vom Stoßdämpferwechsel über Buchsen und Kugelgelenke bis zu Querlenkern und Lagern.',
		includesCards: [
			{ h3: 'Stoßdämpferwechsel', p: 'Vordere und hintere Stoßdämpfer – Ersatz verschlissener Dämpfer durch neue, hochwertige Teile, inkl. Prüfung von Federn und Lagern.' },
			{ h3: 'Buchsen & Kugelgelenke', p: 'Ersatz von Querlenkerbuchsen, Streben, Kugelgelenken und Stabilisator für leisen und präzisen Fahrwerkslauf.' },
			{ h3: 'Querlenker & Lager', p: 'Ersatz von Vorder- oder Hinterachs-Querlenkern und Radlagern – Beseitigung von Spiel und Geräuschen vom Fahrwerk.' },
			{ h3: 'Fahrwerksdiagnose', p: 'Prüfung von Geometrie, Stoßdämpferzustand, Federung und allen Fahrwerksteilen – präzise Fehlererkennung vor der Reparatur.' }
		],
		priceH2: 'Preis für Stoßdämpfer- und Fahrwerkswechsel',
		priceProse:
			'<p>Der Preis für <strong>Stoßdämpferwechsel</strong> und <strong>Fahrwerksreparatur</strong> hängt vom Automodell und Umfang ab – ob Sie nur die Dämpfer, Buchsen, Kugelgelenke, Querlenker oder Lager wechseln, oder eine komplette Fahrwerksüberholung durchführen.</p><p>Senden Sie uns das <strong>Kennzeichen oder die VIN</strong> Ihres Fahrzeugs und wir erstellen Ihnen ein <strong>präzises, faires Angebot</strong> nach Maß – ohne versteckte Gebühren.</p>',
		whyH2: 'Warum Sie uns Ihr Fahrwerk anvertrauen sollten',
		whyCards: [
			{ h3: 'Umfassender Ansatz', p: 'Wir prüfen das ganze Fahrwerk – nicht nur das verschlissene Teil. Wir diagnostizieren alle zugehörigen Komponenten, um frühe Reparaturen zu vermeiden.' },
			{ h3: 'Hochwertige Ersatzteile', p: 'Wir verwenden bewährte Stoßdämpfer, Buchsen, Kugelgelenke und Querlenker nach der Spezifikation Ihres Fahrzeugs, keine zweifelhaften Qualitätsersatzteile.' },
			{ h3: 'Fairer Preis und Garantie', p: 'Ein präzises Angebot im Voraus und Garantie auf den durchgeführten Stoßdämpferwechsel und die Fahrwerksreparatur.' },
			{ h3: 'Mobiler Autoservice in Bratislava', p: 'Wir sind ein mobiler Autoservice mit Sitz in Podunajské Biskupice – Stoßdämpferwechsel und Fahrwerks-Service erledigen wir oft bei einem einzigen Besuch.' }
		],
		faqH2: 'Häufige Fragen – Stoßdämpfer & Fahrwerk',
		faq: [
			{ q: 'Wie viel kostet ein Stoßdämpferwechsel in Bratislava?', a: 'Der Preis hängt vom Fahrzeugmodell und Umfang ab – ob es nur ein Vorder- oder Hinterachs-Stoßdämpferwechsel ist, oder auch Buchsen, Kugelgelenke und andere Fahrwerksteile. Senden Sie uns Kennzeichen oder VIN und wir erstellen ein genaues Angebot. Rufen Sie 0944 122 224 an.' },
			{ q: 'Wann sollten Stoßdämpfer gewechselt werden?', a: 'Stoßdämpfer werden empfohlen, etwa alle 60.000 – 100.000 km zu wechseln, abhängig vom Fahrstil und der Straßenqualität. Wenn das Auto über Unebenheiten hüpft, lange schwingt oder ein Klopfen vom Fahrwerk kommt, kommen Sie zur Stoßdämpferkontrolle.' },
			{ q: 'Was sind die Anzeichen verschlissener Stoßdämpfer?', a: 'Die häufigsten Anzeichen sind ein hüpfendes Auto über Unebenheiten, längere Karosserie-Schwingung, schlechte Straßenlage in Kurven, Klopfgeräusche vom Fahrwerk und ungleichmäßiger Reifenverschleiß. Bei diesen Anzeichen empfehlen wir eine sofortige Fahrwerksdiagnose.' },
			{ q: 'Was sind Buchsen und wann sollten sie gewechselt werden?', a: 'Buchsen sind Gummi-Metall-Hülsen, die Stöße und Vibrationen in Querlenker- und Stabilisatorlagerungen dämpfen. Sie werden etwa alle 80.000 – 120.000 km gewechselt, oder früher bei Klickgeräuschen, Spiel in der Lenkung oder schleifendem Lenkrad.' },
			{ q: 'Reparieren Sie auch Kugelgelenke und Querlenker?', a: 'Ja. Wir wechseln Lenk-Kugelgelenke, Kugelgelenke, Vorder- und Hinterachs-Querlenker und reparieren Spiel in Lagerungen. Zum Fahrwerks-Service gehört auch Geometrie-Diagnose und Prüfung des gesamten Federungssystems.' },
			{ q: 'Wie funktioniert die Fahrwerksdiagnose?', a: 'Wir prüfen das Fahrwerk auf der Hebebühne – Spiel in Kugelgelenken, Querlenkern, Stoßdämpferzustand, Buchsen, Lagern und Federn. Nach der Diagnose informieren wir Sie präzise, welche Teile gewechselt werden müssen und was nur eine Empfehlung für die Zukunft ist.' },
			{ q: 'Wie lange dauert ein Stoßdämpferwechsel?', a: 'Stoßdämpfer an einer Achse wechseln wir meist innerhalb weniger Stunden, oft bei einem einzigen Besuch. Bei umfassender Fahrwerksreparatur (Buchsen, Kugelgelenke, Querlenker) kann die Arbeit länger dauern. Die genaue Zeit und den Termin teilen wir Ihnen bei der Buchung im Voraus mit.' }
		],
		relatedH2: 'Ähnliche Leistungen',
		related: [
			{ href: '/', label: 'Startseite →' },
			{ href: '/vymena-brzd-bratislava', label: 'Bremsenwechsel Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'HU-Vorbereitung →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Fahrzeugdiagnose →' }
		],
		ctaTitle: 'Buchen Sie Ihren Stoßdämpferwechsel',
		ctaText: 'Rufen Sie uns an oder schreiben Sie auf WhatsApp – wir beraten Sie, erstellen ein Angebot und vereinbaren einen Termin.',
		waText: 'Guten Tag, ich habe Interesse an einem Stoßdämpferwechsel und Fahrwerksreparatur. Mein Fahrzeug ist: '
	},

	hr: {
		metaTitle: 'Zamjena amortizera i popravak ovjesa Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Zamjena amortizera u Bratislavi – prednji i stražnji amortizeri, silentblokovi, kuglasti zglobovi, nosači osovine, ležajevi kotača. Popravak ovjesa i dijagnostika u Podunajské Biskupice. Nazovite: 0944 122 224',
		breadcrumbHome: 'Početna',
		breadcrumbCurrent: 'Zamjena amortizera Bratislava',
		heroH1: 'Zamjena amortizera i popravak ovjesa',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Profesionalna <strong>zamjena amortizera</strong> i <strong>popravak ovjesa</strong> za sve marke vozila u Bratislavi – Podunajské Biskupice. Mijenjamo i <strong>prednje i stražnje amortizere</strong>, <strong>silentblokove</strong>, <strong>kuglaste zglobove</strong>, <strong>nosače osovine</strong> i <strong>ležajeve kotača</strong>. Naš mobilni autoservis obavlja kompletan dijagnostiku i servis ovjesa s naglaskom na vašu sigurnost i udobnost vožnje.',
		answer:
			'<strong>Zamjena amortizera i popravak ovjesa u Bratislavi</strong> – mijenjamo istrošene amortizere, silentblokove i kuglaste zglobove te dijagnosticiramo lupanje iz ovjesa ili slabo držanje ceste. Za poštenu ponudu po mjeri nazovite <strong>0944 122 224</strong>.',
		callBtn: 'Nazovite',
		badges: ['Amortizeri', 'Silentblokovi i zglobovi', 'Dijagnostika ovjesa'],
		whenH2: 'Kada mijenjati amortizere i dijelove ovjesa?',
		whenProse:
			'<p><strong>Amortizeri</strong> se preporučuje mijenjati otprilike svakih <strong>60.000 – 100.000 km</strong>, no njihov vijek ovisi o stilu vožnje, kvaliteti cesta i tipu vozila. <strong>Silentblokovi</strong> i <strong>kuglasti zglobovi</strong> obično se mijenjaju svakih <strong>80.000 – 120.000 km</strong>, ili ranije kod izrazitog istrošenja.</p><p>Ako niste sigurni u stanje ovjesa, dođite na <strong>pregled amortizera</strong> i <strong>dijagnostiku ovjesa</strong>. U servisu MUDROCH MOTORWORXX u Bratislavi temeljito ćemo pregledati ovjes i preporučiti koje dijelove treba zamijeniti.',
		symptomsH2: 'Znakovi istrošenog ovjesa',
		symptomsProse:
			'Ovi znakovi znače da amortizeri ili drugi dijelovi ovjesa trebaju pregled ili zamjenu. Kod problema s ovjesom ne odgađajte posjet servisu – radi se o sigurnosti i udobnosti vožnje.',
		symptomsList: [
			'Vozilo skače preko neravnina',
			'Duži njihanje karoserije nakon neravnine',
			'Lupanje ili škljocanje iz ovjesa',
			'Slabije držanje puta i stabilnost u zavojima',
			'Neravnomjerno trošenje guma',
			'Trzanje ili valovito upravljanje'
		],
		includesH2: 'Što uključuje servis ovjesa',
		includesProse:
			'Obavljamo kompletan <strong>popravak i servis ovjesa</strong> – od zamjene amortizera preko silentblokova i zglobova do nosača osovine i ležajeva.',
		includesCards: [
			{ h3: 'Zamjena amortizera', p: 'Prednji i stražnji amortizeri – zamjena istrošenih amortizera novim, kvalitetnim dijelovima, uključujući provjeru opruga i oslonaca.' },
			{ h3: 'Silentblokovi i zglobovi', p: 'Zamjena silentblokova nosača, potpornih šipki, kuglastih zglobova i stabilizatora za tihi i precizan rad ovjesa.' },
			{ h3: 'Nosači osovine i ležajevi', p: 'Zamjena nosača prednje ili stražnje osovine i ležajeva kotača – uklanjanje zazora i buke iz ovjesa.' },
			{ h3: 'Dijagnostika ovjesa', p: 'Provjera geometrije, stanja amortizera, ovjesa i svih dijelova – precizno utvrđivanje kvarova prije popravka.' }
		],
		priceH2: 'Cijena zamjene amortizera i ovjesa',
		priceProse:
			'<p>Cijena <strong>zamjene amortizera</strong> i <strong>popravka ovjesa</strong> ovisi o modelu automobila i opsegu – mijenjate li samo amortizere, silentblokove, kuglaste zglobove, nosače ili ležajeve, ili provodite kompletan remont ovjesa.</p><p>Pošaljite nam <strong>registarsku oznaku ili VIN</strong> vozila i pripremit ćemo vam <strong>točnu i poštenu ponudu</strong> po mjeri – bez skrivenih troškova.</p>',
		whyH2: 'Zašto ovjes povjeriti nama',
		whyCards: [
			{ h3: 'Sveobuhvatan pristup', p: 'Pregledavamo cijeli ovjes – ne samo istrošeni dio. Dijagnosticiramo sve povezane komponente kako bi izbjegli rane popravke.' },
			{ h3: 'Kvalitetni rezervni dijelovi', p: 'Koristimo provjerene amortizere, silentblokove, kuglaste zglobove i nosače prema specifikaciji vašeg vozila, ne sumnjive zamjene kvalitete.' },
			{ h3: 'Poštena cijena i jamstvo', p: 'Točna ponuda unaprijed i jamstvo na obavljenu zamjenu amortizera i popravak ovjesa.' },
			{ h3: 'Mobilni autoservis u Bratislavi', p: 'Mi smo mobilni autoservis sa sjedištem u Podunajské Biskupice – zamjenu amortizera i servis ovjesa često obavimo tijekom jednog posjeta.' }
		],
		faqH2: 'Česta pitanja – amortizeri i ovjes',
		faq: [
			{ q: 'Koliko košta zamjena amortizera u Bratislavi?', a: 'Cijena ovisi o modelu vozila i opsegu – radi li se samo o zamjeni prednjih ili stražnjih amortizera, ili i o silentblokovima, kuglastim zglobovima i drugim dijelovima ovjesa. Pošaljite nam registarsku oznaku ili VIN i pripremit ćemo točnu ponudu. Nazovite 0944 122 224.' },
			{ q: 'Kada mijenjati amortizere?', a: 'Amortizeri se preporučuje mijenjati otprilike svakih 60.000 – 100.000 km, no ovisi o stilu vožnje i kvaliteti cesta. Ako vozilo skače preko neravnina, dugo se njiha ili se čuje lupanje iz ovjesa, dođite na pregled amortizera.' },
			{ q: 'Koji su znakovi istrošenih amortizera?', a: 'Najčešći znakovi su vozilo koje skače preko neravnina, duže njihanje karoserije, slabo držanje puta u zavojima, lupanje iz ovjesa i neravnomjerno trošenje guma. Kod ovih znakova preporučujemo hitnu dijagnostiku ovjesa.' },
			{ q: 'Što su silentblokovi i kada ih mijenjati?', a: 'Silentblokovi su gumeno-metalne čahure koje prigušuju udare i vibracije u ležištima nosača i stabilizatora. Mijenjaju se otprilike svakih 80.000 – 120.000 km, ili ranije kod škljocanja, zazora u upravljanju ili trzajućeg volana.' },
			{ q: 'Popravljate li i kuglaste zglobove i nosače?', a: 'Da. Mijenjamo kuglaste zglobove upravljanja, kuglaste zglobove, nosače prednje i stražnje osovine i popravljamo zazore u ležištima. Servis ovjesa uključuje i dijagnostiku geometrije i provjeru cijelog sustava ovjesa.' },
			{ q: 'Kako funkcionira dijagnostika ovjesa?', a: 'Ovjes pregledavamo na podizaču – provjeravamo zazore u kuglastim zglobovima, nosačima, stanje amortizera, silentblokova, ležajeva i opruga. Nakon dijagnostike točno vas informiramo koji dijelovi trebaju zamjenu i što je samo preporuka za budućnost.' },
			{ q: 'Koliko traje zamjena amortizera?', a: 'Zamjenu amortizera na jednoj osovini obično obavimo za nekoliko sati, često tijekom jednog posjeta. Kod sveobuhvatnog popravka ovjesa (silentblokovi, kuglasti zglobovi, nosači) rad može trajati duže. Točno vrijeme i termin reći ćemo vam unaprijed pri narudžbi.' }
		],
		relatedH2: 'Povezane usluge',
		related: [
			{ href: '/', label: 'Početna →' },
			{ href: '/vymena-brzd-bratislava', label: 'Zamjena kočnica Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'Priprema za tehnički pregled →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Dijagnostika vozila →' }
		],
		ctaTitle: 'Naručite zamjenu amortizera',
		ctaText: 'Nazovite ili pišite na WhatsApp – savjetovat ćemo vas, pripremiti ponudu i dogovoriti termin.',
		waText: 'Dobar dan, zanima me zamjena amortizera i popravak ovjesa. Moje vozilo je: '
	}
};
