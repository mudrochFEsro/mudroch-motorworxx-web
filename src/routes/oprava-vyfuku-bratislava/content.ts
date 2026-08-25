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
	answer?: string; // HTML – priama odpoveď (answer-first blok pre AI/AEO)
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
		metaTitle: 'Oprava výfuku Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Oprava výfuku Bratislava – tlmič výfuku, zváranie výfuku, katalyzátor, lambda sonda, výfukové príruby. Komplexný servis výfukového systému v Podunajských Biskupiciach. Volajte: 0944 122 224',
		breadcrumbHome: 'Domov',
		breadcrumbCurrent: 'Oprava výfuku Bratislava',
		heroH1: 'Oprava výfuku',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Profesionálna <strong>oprava a výmena výfuku</strong> pre všetky značky áut v Bratislave – Podunajských Biskupiciach. Meníme a opravujeme <strong>tlmič výfuku</strong>, <strong>katalyzátor</strong>, <strong>lambda sondu</strong>, riešime <strong>zváranie výfuku</strong> a výmenu poškodených častí. Mobilný autoservis s dôrazom na kvalitu a spoľahlivosť.',
		answer:
			'<strong>Oprava výfuku</strong> u nás zahŕňa <strong>zváranie výfuku</strong>, výmenu <strong>tlmiča výfuku</strong> aj potrubí a riešenie <strong>katalyzátora</strong> či <strong>lambda sondy</strong> – opravíme netesnosti a hluk tak, aby výfukový systém opäť tesnil a spĺňal emisie. Zavolajte na <strong>0944 122 224</strong> a pripravíme vám cenovú ponuku na mieru.',
		callBtn: 'Zavolať',
		badges: ['Tlmič výfuku', 'Katalyzátor a lambda', 'Zváranie výfuku'],
		whenH2: 'Kedy riešiť výfuk?',
		whenProse:
			'<p><strong>Výfukový systém</strong> je vystavený vysokým teplotám, vlhkosti a soleniu ciest – korózia a prasknutie výfuku nie sú výnimkou. <strong>Tlmič výfuku</strong> a <strong>katalyzátor</strong> majú obmedzenú životnosť a ich stav ovplyvňuje výkon, spotrebu paliva aj emisie.</p><p>Ak auto hlučnejšie štartuje, cítite zápach výfukových plynov alebo sa rozsvieti <strong>kontrolka motora (check engine)</strong>, je čas na kontrolu výfuku. Mobilný autoservis MUDROCH MOTORWORXX v Bratislave skontroluje celý výfukový systém a odporučí optimálne riešenie.</p>',
		symptomsH2: 'Príznaky poškodeného výfuku',
		symptomsProse:
			'Tieto príznaky naznačujú problém s výfukom. Pri podozrení neodkladajte návštevu servisu – poškodený výfuk ovplyvňuje výkon motora aj bezpečnosť.',
		symptomsList: [
			'Hlasný motor, zvýšený hluk z výfuku',
			'Rozsvietená kontrolka motora (check engine)',
			'Zápach výfukových plynov v kabíne',
			'Strata výkonu motora, horšia dynamika',
			'Vyššia spotreba paliva',
			'Viditeľná korózia, diera alebo prasknutý tlmič'
		],
		includesH2: 'Čo zahŕňa servis výfuku',
		includesProse:
			'Robíme kompletnú <strong>opravu a výmenu výfukového systému</strong> – od zváračských opráv po výmenu katalyzátora a lambda sondy.',
		includesCards: [
			{ h3: 'Oprava a zváranie výfuku', p: 'Zváranie prasklín, oprava poškodených úsekov výfuku a výmena prírub pre tesné spojenie.' },
			{ h3: 'Výmena tlmiča výfuku', p: 'Nový tlmič výfuku pre tichšiu a kultivovanejšiu jazdu, vhodný na vaše vozidlo.' },
			{ h3: 'Katalyzátor a lambda sonda', p: 'Diagnostika a výmena katalyzátora či lambda sondy pri kontrolke motora a problémoch s emisiami.' },
			{ h3: 'Diagnostika výfukového systému', p: 'Kontrola celého výfuku – tesnosť, korózia, upevnenie, funkčnosť snímačov – vrátane vyčítania chybových kódov.' }
		],
		priceH2: 'Cena opravy výfuku',
		priceProse:
			'<p>Cena <strong>opravy výfuku</strong> závisí od modelu auta a rozsahu – či ide o jednoduché zváranie výfuku, výmenu tlmiča, katalyzátora alebo lambda sondy.</p><p>Pošlite nám <strong>ŠPZ alebo VIN</strong> vozidla a pripravíme vám <strong>presnú a férovú cenovú ponuku</strong> na mieru – bez skrytých poplatkov.</p>',
		whyH2: 'Prečo výfuk zveriť nám',
		whyCards: [
			{ h3: 'Komplexná diagnostika', p: 'Nekontrolujeme len prasklé miesto – preveríme celý výfukový systém vrátane katalyzátora a senzoru lambda.' },
			{ h3: 'Kvalitné diely a zváračské práce', p: 'Používame osvedčené náhradné diely a spoľahlivú zváračskú technológiu pre dlhú životnosť opravy.' },
			{ h3: 'Férová cena a záruka', p: 'Presná cenová ponuka vopred a záruka na vykonaný servis výfuku.' },
			{ h3: 'Mobilný autoservis v Bratislave', p: 'Sme mobilný autoservis so sídlom v Podunajských Biskupiciach – bežnú opravu výfuku často vybavíme rýchlo a flexibilne.' }
		],
		faqH2: 'Časté otázky – oprava výfuku',
		faq: [
			{ q: 'Koľko stojí oprava výfuku v Bratislave?', a: 'Cena závisí od rozsahu práce – či ide o zváranie praskliny, výmenu tlmiča výfuku, katalyzátora alebo lambda sondy. Pošlite nám ŠPZ alebo VIN a pripravíme presnú cenovú ponuku. Volajte 0944 122 224.' },
			{ q: 'Ako spoznám, že výfuk potrebuje opravu?', a: 'Najčastejšie príznaky sú zvýšený hluk z výfuku, rozsvietená kontrolka motora, zápach výfukových plynov v kabíne, strata výkonu, vyššia spotreba paliva a viditeľná korózia či prasknutý tlmič. Pri týchto príznakoch odporúčame okamžitú kontrolu.' },
			{ q: 'Dá sa výfuk zvárať alebo treba vymeniť celý tlmič?', a: 'Závisí to od rozsahu poškodenia. Menšie praskliny a dierky sa dajú zvárať, no ak je tlmič výfuku značne skorodovaný alebo prelomený, odporúčame výmenu za nový diel. Po diagnostike vám povieme najvhodnejšie riešenie.' },
			{ q: 'Čo je katalyzátor a kedy ho treba meniť?', a: 'Katalyzátor je súčasť výfuku, ktorá znižuje škodlivé emisie. Meníme ho vtedy, keď je upchatý, poškodený alebo rozsvieti sa kontrolka motora s kódom katalyzátora. Nefunkčný katalyzátor zhoršuje výkon motora, zvyšuje spotrebu a spôsobuje problémy na STK.' },
			{ q: 'Čo robí lambda sonda a ako spoznám jej poruchu?', a: 'Lambda sonda meria obsah kyslíka vo výfukových plynoch a pomáha regulovať zmes paliva a vzduchu. Pri poruche sa môže rozsvieti kontrolka motora, motor má nerovnomernú prevádzku, zvýšenú spotrebu alebo emisie. Vadnú lambda sondu odporúčame vymeniť.' },
			{ q: 'Ako dlho trvá oprava výfuku?', a: 'Jednoduché zváranie výfuku či výmenu tlmiča zvládneme zvyčajne v priebehu pár hodín, výmena katalyzátora či lambda sondy môže trvať trochu dlhšie. Presný čas a termín vám povieme pri objednaní.' }
		],
		relatedH2: 'Súvisiace služby',
		related: [
			{ href: '/', label: 'Domov →' },
			{ href: '/vymena-brzd-bratislava', label: 'Výmena bŕzd Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'Príprava na STK Bratislava →' },
			{ href: '/vymena-tlmicov-bratislava', label: 'Výmena tlmičov Bratislava →' }
		],
		ctaTitle: 'Objednajte opravu výfuku',
		ctaText: 'Zavolajte alebo napíšte na WhatsApp – poradíme, pripravíme cenovú ponuku a dohodneme termín.',
		waText: 'Dobrý deň, mám záujem o opravu výfuku. Moje vozidlo je: '
	},

	en: {
		metaTitle: 'Exhaust Repair Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Exhaust repair in Bratislava – exhaust muffler, exhaust welding, catalytic converter, lambda sensor, exhaust flanges. Complete exhaust system service in Podunajské Biskupice. Call: 0944 122 224',
		breadcrumbHome: 'Home',
		breadcrumbCurrent: 'Exhaust Repair Bratislava',
		heroH1: 'Exhaust repair',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Professional <strong>exhaust repair and replacement</strong> for all car brands in Bratislava – Podunajské Biskupice. We replace and repair <strong>exhaust mufflers</strong>, <strong>catalytic converters</strong>, <strong>lambda sensors</strong>, and handle <strong>exhaust welding</strong> and replacement of damaged parts. Mobile car service focused on quality and reliability.',
		answer:
			'<strong>Exhaust repair</strong> with us covers <strong>exhaust pipe welding</strong>, <strong>muffler replacement</strong> and pipes, plus <strong>catalytic converter</strong> and <strong>lambda sensor</strong> issues – we fix leaks and noise so the exhaust system seals again and meets emissions. Call <strong>0944 122 224</strong> and we\'ll prepare a tailored quote.',
		callBtn: 'Call',
		badges: ['Muffler', 'Catalytic converter & lambda', 'Exhaust welding'],
		whenH2: 'When to fix the exhaust?',
		whenProse:
			'<p>The <strong>exhaust system</strong> is exposed to high temperatures, moisture and road salt – corrosion and exhaust cracks are not uncommon. The <strong>exhaust muffler</strong> and <strong>catalytic converter</strong> have a limited lifespan and their condition affects performance, fuel consumption and emissions.</p><p>If your car starts louder, you smell exhaust fumes or the <strong>check engine light</strong> comes on, it\'s time for an exhaust check. MUDROCH MOTORWORXX mobile car service in Bratislava will inspect the entire exhaust system and recommend the best solution.</p>',
		symptomsH2: 'Signs of a damaged exhaust',
		symptomsProse:
			'These signs indicate an exhaust problem. Don\'t postpone a service visit if you suspect an issue – a damaged exhaust affects engine performance and safety, and timely exhaust pipe welding or muffler replacement usually restores it.',
		symptomsList: [
			'Loud engine, increased exhaust noise',
			'Illuminated check engine light',
			'Smell of exhaust fumes in the cabin',
			'Loss of engine power, worse dynamics',
			'Higher fuel consumption',
			'Visible corrosion, hole or cracked muffler'
		],
		includesH2: 'What the exhaust service includes',
		includesProse:
			'We provide a complete <strong>exhaust system repair and replacement</strong> – from welding repairs to catalytic converter and lambda sensor replacement.',
		includesCards: [
			{ h3: 'Exhaust repair & welding', p: 'Welding cracks, repairing damaged exhaust sections and replacing flanges for a tight connection.' },
			{ h3: 'Exhaust muffler replacement', p: 'A new exhaust muffler for quieter and more refined driving, suitable for your vehicle.' },
			{ h3: 'Catalytic converter & lambda sensor', p: 'Diagnostics and replacement of the catalytic converter or lambda sensor when the check engine light is on and emission problems occur.' },
			{ h3: 'Exhaust system diagnostics', p: 'Inspection of the entire exhaust – leak-tightness, corrosion, mounting, sensor function – including error code reading.' }
		],
		priceH2: 'Exhaust repair price',
		priceProse:
			'<p>The price of an <strong>exhaust repair</strong> depends on the car model and scope – whether it\'s simple exhaust welding, muffler replacement, catalytic converter or lambda sensor.</p><p>Send us the <strong>licence plate or VIN</strong> of your vehicle and we\'ll prepare a <strong>precise, fair quote</strong> tailored to you – with no hidden fees.</p>',
		whyH2: 'Why entrust your exhaust to us',
		whyCards: [
			{ h3: 'Comprehensive diagnostics', p: 'We don\'t just check the cracked spot – we inspect the whole exhaust system including the catalytic converter and lambda sensor.' },
			{ h3: 'Quality parts and welding work', p: 'We use proven spare parts and reliable welding technology for long repair life.' },
			{ h3: 'Fair price and warranty', p: 'A precise quote up front and a warranty on the exhaust service performed.' },
			{ h3: 'Mobile car service in Bratislava', p: 'We are a mobile car service based in Podunajské Biskupice – a routine exhaust repair is often done quickly and flexibly.' }
		],
		faqH2: 'Frequently asked questions – exhaust repair',
		faq: [
			{ q: 'How much does an exhaust repair in Bratislava cost?', a: 'The price depends on the scope of work – whether it\'s welding a crack, replacing the exhaust muffler, catalytic converter or lambda sensor. Send us your licence plate or VIN and we\'ll prepare an exact quote. Call 0944 122 224.' },
			{ q: 'How do I know the exhaust needs repair?', a: 'The most common signs are increased exhaust noise, illuminated check engine light, smell of exhaust fumes in the cabin, loss of power, higher fuel consumption and visible corrosion or a cracked muffler. With these symptoms we recommend immediate inspection.' },
			{ q: 'Can the exhaust be welded or does the whole muffler need replacing?', a: 'It depends on the extent of damage. Small cracks and holes can be welded, but if the exhaust muffler is significantly corroded or broken, we recommend replacement with a new part. After diagnostics we\'ll tell you the best solution.' },
			{ q: 'What is a catalytic converter and when does it need replacing?', a: 'A catalytic converter is part of the exhaust that reduces harmful emissions. We replace it when it\'s clogged, damaged or the check engine light comes on with a catalytic converter code. A non-functional catalytic converter worsens engine performance, increases consumption and causes STK (MOT) problems.' },
			{ q: 'What does a lambda sensor do and how do I recognise its failure?', a: 'A lambda sensor measures the oxygen content in exhaust gases and helps regulate the fuel and air mixture. When it fails, the check engine light may come on, the engine has uneven operation, increased consumption or emissions. We recommend replacing a faulty lambda sensor.' },
			{ q: 'How long does an exhaust repair take?', a: 'Simple exhaust welding or muffler replacement usually takes a few hours, catalytic converter or lambda sensor replacement may take a bit longer. We\'ll tell you the exact time and date when booking.' }
		],
		relatedH2: 'Related services',
		related: [
			{ href: '/', label: 'Home →' },
			{ href: '/vymena-brzd-bratislava', label: 'Brake replacement Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'STK preparation Bratislava →' },
			{ href: '/vymena-tlmicov-bratislava', label: 'Shock absorber replacement Bratislava →' }
		],
		ctaTitle: 'Book your exhaust repair',
		ctaText: 'Call us or write on WhatsApp – we\'ll advise you, prepare a quote and arrange an appointment.',
		waText: 'Hello, I\'m interested in an exhaust repair. My vehicle is: '
	},

	de: {
		metaTitle: 'Auspuffreparatur Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Auspuffreparatur in Bratislava – Endschalldämpfer, Auspuff schweißen, Katalysator, Lambdasonde, Auspuffflansche. Kompletter Auspuffanlage-Service in Podunajské Biskupice. Anrufen: 0944 122 224',
		breadcrumbHome: 'Startseite',
		breadcrumbCurrent: 'Auspuffreparatur Bratislava',
		heroH1: 'Auspuffreparatur',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Professionelle <strong>Auspuffreparatur und -wechsel</strong> für alle Fahrzeugmarken in Bratislava – Podunajské Biskupice. Wir wechseln und reparieren <strong>Endschalldämpfer</strong>, <strong>Katalysatoren</strong>, <strong>Lambdasonden</strong> und führen <strong>Auspuff-Schweißarbeiten</strong> und Ersatz beschädigter Teile durch. Mobiler Autoservice mit Fokus auf Qualität und Zuverlässigkeit.',
		answer:
			'<strong>Auspuffreparatur</strong> umfasst bei uns das <strong>Schweißen des Auspuffs</strong>, das Wechseln von <strong>Endschalldämpfern</strong> und Rohren sowie Probleme mit <strong>Katalysator</strong> und <strong>Lambdasonde</strong> – wir beheben Undichtigkeiten und Geräusche, damit die Auspuffanlage wieder dicht ist und die Abgaswerte erfüllt. Rufen Sie <strong>0944 122 224</strong> an und wir erstellen ein Angebot nach Maß.',
		callBtn: 'Anrufen',
		badges: ['Schalldämpfer', 'Katalysator & Lambda', 'Auspuff schweißen'],
		whenH2: 'Wann sollte der Auspuff repariert werden?',
		whenProse:
			'<p>Die <strong>Auspuffanlage</strong> ist hohen Temperaturen, Feuchtigkeit und Streusalz ausgesetzt – Korrosion und Auspuffrisse sind keine Seltenheit. Der <strong>Endschalldämpfer</strong> und der <strong>Katalysator</strong> haben eine begrenzte Lebensdauer und ihr Zustand beeinflusst Leistung, Kraftstoffverbrauch und Emissionen.</p><p>Wenn Ihr Auto lauter startet, Sie Abgasgeruch wahrnehmen oder die <strong>Motorkontrollleuchte (Check Engine)</strong> aufleuchtet, ist es Zeit für eine Auspuffkontrolle. Der mobile Autoservice MUDROCH MOTORWORXX in Bratislava prüft die gesamte Auspuffanlage und empfiehlt die beste Lösung.</p>',
		symptomsH2: 'Anzeichen eines beschädigten Auspuffs',
		symptomsProse:
			'Diese Anzeichen deuten auf ein Auspuffproblem hin. Schieben Sie einen Werkstattbesuch bei Verdacht nicht auf – ein beschädigter Auspuff beeinträchtigt Motorleistung und Sicherheit, und rechtzeitiges Auspuff-Schweißen oder ein Schalldämpferwechsel stellt ihn meist wieder her.',
		symptomsList: [
			'Lauter Motor, erhöhte Auspuffgeräusche',
			'Leuchtende Motorkontrollleuchte',
			'Geruch von Abgasen im Innenraum',
			'Leistungsverlust des Motors, schlechtere Dynamik',
			'Höherer Kraftstoffverbrauch',
			'Sichtbare Korrosion, Loch oder gerissener Schalldämpfer'
		],
		includesH2: 'Was der Auspuff-Service umfasst',
		includesProse:
			'Wir bieten eine komplette <strong>Auspuffanlage-Reparatur und -wechsel</strong> – von Schweißreparaturen bis zum Katalysator- und Lambdasondenwechsel.',
		includesCards: [
			{ h3: 'Auspuffreparatur & Schweißen', p: 'Schweißen von Rissen, Reparatur beschädigter Auspuffabschnitte und Austausch von Flanschen für eine dichte Verbindung.' },
			{ h3: 'Endschalldämpfer-Wechsel', p: 'Ein neuer Endschalldämpfer für leiseres und kultiviertes Fahren, passend für Ihr Fahrzeug.' },
			{ h3: 'Katalysator & Lambdasonde', p: 'Diagnose und Wechsel von Katalysator oder Lambdasonde bei leuchtender Motorkontrollleuchte und Emissionsproblemen.' },
			{ h3: 'Auspuffanlage-Diagnose', p: 'Überprüfung der gesamten Auspuffanlage – Dichtheit, Korrosion, Befestigung, Sensorfunktion – inkl. Auslesen von Fehlercodes.' }
		],
		priceH2: 'Preis für die Auspuffreparatur',
		priceProse:
			'<p>Der Preis für eine <strong>Auspuffreparatur</strong> hängt vom Automodell und Umfang ab – ob es einfaches Auspuff-Schweißen, Schalldämpferwechsel, Katalysator oder Lambdasonde ist.</p><p>Senden Sie uns das <strong>Kennzeichen oder die VIN</strong> Ihres Fahrzeugs und wir erstellen Ihnen ein <strong>präzises, faires Angebot</strong> nach Maß – ohne versteckte Gebühren.</p>',
		whyH2: 'Warum Sie uns Ihren Auspuff anvertrauen sollten',
		whyCards: [
			{ h3: 'Umfassende Diagnose', p: 'Wir prüfen nicht nur die gerissene Stelle – wir inspizieren die gesamte Auspuffanlage einschließlich Katalysator und Lambdasonde.' },
			{ h3: 'Hochwertige Teile und Schweißarbeiten', p: 'Wir verwenden bewährte Ersatzteile und zuverlässige Schweißtechnologie für lange Reparaturlebensdauer.' },
			{ h3: 'Fairer Preis und Garantie', p: 'Ein präzises Angebot im Voraus und Garantie auf den durchgeführten Auspuff-Service.' },
			{ h3: 'Mobiler Autoservice in Bratislava', p: 'Wir sind ein mobiler Autoservice mit Sitz in Podunajské Biskupice – eine routinemäßige Auspuffreparatur erledigen wir oft schnell und flexibel.' }
		],
		faqH2: 'Häufige Fragen – Auspuffreparatur',
		faq: [
			{ q: 'Wie viel kostet eine Auspuffreparatur in Bratislava?', a: 'Der Preis hängt vom Arbeitsumfang ab – ob es Schweißen eines Risses, Wechsel des Endschalldämpfers, Katalysators oder Lambdasonde ist. Senden Sie uns Kennzeichen oder VIN und wir erstellen ein genaues Angebot. Rufen Sie 0944 122 224 an.' },
			{ q: 'Wie erkenne ich, dass der Auspuff eine Reparatur braucht?', a: 'Die häufigsten Anzeichen sind erhöhte Auspuffgeräusche, leuchtende Motorkontrollleuchte, Geruch von Abgasen im Innenraum, Leistungsverlust, höherer Kraftstoffverbrauch und sichtbare Korrosion oder gerissener Schalldämpfer. Bei diesen Symptomen empfehlen wir eine sofortige Kontrolle.' },
			{ q: 'Kann der Auspuff geschweißt werden oder muss der ganze Schalldämpfer gewechselt werden?', a: 'Es hängt vom Schadensumfang ab. Kleine Risse und Löcher können geschweißt werden, aber wenn der Endschalldämpfer stark korrodiert oder durchgebrochen ist, empfehlen wir den Austausch durch ein neues Teil. Nach der Diagnose teilen wir Ihnen die beste Lösung mit.' },
			{ q: 'Was ist ein Katalysator und wann muss er gewechselt werden?', a: 'Ein Katalysator ist Teil des Auspuffs, der schädliche Emissionen reduziert. Wir wechseln ihn, wenn er verstopft, beschädigt ist oder die Motorkontrollleuchte mit einem Katalysatorcode aufleuchtet. Ein nicht funktionierender Katalysator verschlechtert die Motorleistung, erhöht den Verbrauch und verursacht STK- (TÜV-) Probleme.' },
			{ q: 'Was macht eine Lambdasonde und wie erkenne ich ihren Ausfall?', a: 'Eine Lambdasonde misst den Sauerstoffgehalt in Abgasen und hilft, das Kraftstoff-Luft-Gemisch zu regulieren. Bei Ausfall kann die Motorkontrollleuchte aufleuchten, der Motor hat ungleichmäßigen Betrieb, erhöhten Verbrauch oder Emissionen. Wir empfehlen den Austausch einer defekten Lambdasonde.' },
			{ q: 'Wie lange dauert eine Auspuffreparatur?', a: 'Einfaches Auspuff-Schweißen oder Schalldämpferwechsel dauert meist wenige Stunden, Katalysator- oder Lambdasondenwechsel kann etwas länger dauern. Die genaue Zeit und den Termin teilen wir Ihnen bei der Buchung mit.' }
		],
		relatedH2: 'Ähnliche Leistungen',
		related: [
			{ href: '/', label: 'Startseite →' },
			{ href: '/vymena-brzd-bratislava', label: 'Bremsenwechsel Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'STK-Vorbereitung Bratislava →' },
			{ href: '/vymena-tlmicov-bratislava', label: 'Stoßdämpferwechsel Bratislava →' }
		],
		ctaTitle: 'Buchen Sie Ihre Auspuffreparatur',
		ctaText: 'Rufen Sie uns an oder schreiben Sie auf WhatsApp – wir beraten Sie, erstellen ein Angebot und vereinbaren einen Termin.',
		waText: 'Guten Tag, ich habe Interesse an einer Auspuffreparatur. Mein Fahrzeug ist: '
	},

	hr: {
		metaTitle: 'Popravak ispušnog sustava Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Popravak ispušnog sustava u Bratislavi – prigušivač ispuha, zavarivanje ispuha, katalizator, lambda sonda, prirubnice ispuha. Kompletan servis ispušnog sustava u Podunajské Biskupice. Nazovite: 0944 122 224',
		breadcrumbHome: 'Početna',
		breadcrumbCurrent: 'Popravak ispušnog sustava Bratislava',
		heroH1: 'Popravak ispuha',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Profesionalan <strong>popravak i zamjena ispušnog sustava</strong> za sve marke vozila u Bratislavi – Podunajské Biskupice. Mijenjamo i popravljamo <strong>prigušivače ispuha</strong>, <strong>katalizatore</strong>, <strong>lambda sonde</strong> te obavljamo <strong>zavarivanje ispuha</strong> i zamjenu oštećenih dijelova. Mobilni autoservis s naglaskom na kvalitetu i pouzdanost.',
		answer:
			'<strong>Popravak ispuha</strong> kod nas uključuje <strong>zavarivanje ispuha</strong>, <strong>zamjenu auspuha</strong> i cijevi te rješavanje <strong>katalizatora</strong> i <strong>lambda sonde</strong> – uklanjamo propuštanja i buku kako bi ispušni sustav ponovno brtvio i zadovoljio emisije. Nazovite <strong>0944 122 224</strong> i pripremit ćemo ponudu po mjeri.',
		callBtn: 'Nazovite',
		badges: ['Prigušivač', 'Katalizator i lambda', 'Zavarivanje ispuha'],
		whenH2: 'Kada riješiti ispuh?',
		whenProse:
			'<p><strong>Ispušni sustav</strong> izložen je visokim temperaturama, vlazi i soli s cesta – korozija i pucanje ispuha nisu neobični. <strong>Prigušivač ispuha</strong> i <strong>katalizator</strong> imaju ograničen vijek trajanja i njihovo stanje utječe na performanse, potrošnju goriva i emisije.</p><p>Ako automobil glasnije pali, osjećate miris ispušnih plinova ili se upali <strong>kontrolna lampica motora (check engine)</strong>, vrijeme je za pregled ispuha. Mobilni autoservis MUDROCH MOTORWORXX u Bratislavi pregledat će cijeli ispušni sustav i preporučiti optimalno rješenje.</p>',
		symptomsH2: 'Znakovi oštećenog ispuha',
		symptomsProse:
			'Ovi znakovi ukazuju na problem s ispuhom. Kod sumnje ne odgađajte posjet servisu – oštećeni ispuh utječe na performanse motora i sigurnost, a pravovremeno zavarivanje ispuha ili zamjena auspuha obično ga vraća u red.',
		symptomsList: [
			'Bučan motor, povećana buka iz ispuha',
			'Upaljena kontrolna lampica motora (check engine)',
			'Miris ispušnih plinova u kabini',
			'Gubitak snage motora, lošija dinamika',
			'Veća potrošnja goriva',
			'Vidljiva korozija, rupa ili puknut prigušivač'
		],
		includesH2: 'Što uključuje servis ispuha',
		includesProse:
			'Obavljamo kompletan <strong>popravak i zamjenu ispušnog sustava</strong> – od zavarivačkih popravaka do zamjene katalizatora i lambda sonde.',
		includesCards: [
			{ h3: 'Popravak i zavarivanje ispuha', p: 'Zavarivanje pukotina, popravak oštećenih dijelova ispuha i zamjena prirubnica za čvrsti spoj.' },
			{ h3: 'Zamjena prigušivača ispuha', p: 'Novi prigušivač ispuha za tišu i kulturniju vožnju, prilagođen vašem vozilu.' },
			{ h3: 'Katalizator i lambda sonda', p: 'Dijagnostika i zamjena katalizatora ili lambda sonde kod upaljene kontrolne lampice motora i problema s emisijama.' },
			{ h3: 'Dijagnostika ispušnog sustava', p: 'Provjera cijelog ispuha – tesnoća, korozija, pričvršćivanje, funkcija senzora – uključujući očitanje kodova greške.' }
		],
		priceH2: 'Cijena popravka ispuha',
		priceProse:
			'<p>Cijena <strong>popravka ispuha</strong> ovisi o modelu automobila i opsegu – radi li se o jednostavnom zavarivanju ispuha, zamjeni prigušivača, katalizatora ili lambda sonde.</p><p>Pošaljite nam <strong>registarsku oznaku ili VIN</strong> vozila i pripremit ćemo vam <strong>točnu i poštenu ponudu</strong> po mjeri – bez skrivenih troškova.</p>',
		whyH2: 'Zašto ispuh povjeriti nama',
		whyCards: [
			{ h3: 'Sveobuhvatna dijagnostika', p: 'Ne provjeravamo samo puknutu točku – pregledavamo cijeli ispušni sustav uključujući katalizator i lambda sondu.' },
			{ h3: 'Kvalitetni dijelovi i zavarivački radovi', p: 'Koristimo provjerene rezervne dijelove i pouzdanu zavarivačku tehnologiju za dug vijek trajanja popravka.' },
			{ h3: 'Poštena cijena i jamstvo', p: 'Točna ponuda unaprijed i jamstvo na obavljeni servis ispuha.' },
			{ h3: 'Mobilni autoservis u Bratislavi', p: 'Mi smo mobilni autoservis sa sjedištem u Podunajské Biskupice – uobičajen popravak ispuha često obavimo brzo i fleksibilno.' }
		],
		faqH2: 'Česta pitanja – popravak ispuha',
		faq: [
			{ q: 'Koliko košta popravak ispuha u Bratislavi?', a: 'Cijena ovisi o opsegu rada – radi li se o zavarivanju pukotine, zamjeni prigušivača ispuha, katalizatora ili lambda sonde. Pošaljite nam registarsku oznaku ili VIN i pripremit ćemo točnu ponudu. Nazovite 0944 122 224.' },
			{ q: 'Kako prepoznati da ispuh treba popravak?', a: 'Najčešći znakovi su povećana buka iz ispuha, upaljena kontrolna lampica motora, miris ispušnih plinova u kabini, gubitak snage, veća potrošnja goriva i vidljiva korozija ili puknut prigušivač. Kod ovih simptoma preporučujemo hitnu provjeru.' },
			{ q: 'Može li se ispuh zavariti ili treba zamijeniti cijeli prigušivač?', a: 'Ovisi o opsegu oštećenja. Male pukotine i rupice mogu se zavariti, no ako je prigušivač ispuha značajno korodiran ili polomljen, preporučujemo zamjenu novim dijelom. Nakon dijagnostike reći ćemo vam najprikladnije rješenje.' },
			{ q: 'Što je katalizator i kada ga treba mijenjati?', a: 'Katalizator je dio ispuha koji smanjuje štetne emisije. Mijenjamo ga kada je začepljen, oštećen ili se upali kontrolna lampica motora s kodom katalizatora. Nefunkcionalni katalizator pogoršava performanse motora, povećava potrošnju i uzrokuje probleme na tehničkom pregledu.' },
			{ q: 'Što radi lambda sonda i kako prepoznati njezin kvar?', a: 'Lambda sonda mjeri sadržaj kisika u ispušnim plinovima i pomaže regulirati mješavinu goriva i zraka. Pri kvaru može se upaliti kontrolna lampica motora, motor ima neravnomjeran rad, povećanu potrošnju ili emisije. Preporučujemo zamjenu neispravne lambda sonde.' },
			{ q: 'Koliko traje popravak ispuha?', a: 'Jednostavno zavarivanje ispuha ili zamjena prigušivača obično traje nekoliko sati, zamjena katalizatora ili lambda sonde može trajati nešto duže. Točno vrijeme i termin reći ćemo vam pri narudžbi.' }
		],
		relatedH2: 'Povezane usluge',
		related: [
			{ href: '/', label: 'Početna →' },
			{ href: '/vymena-brzd-bratislava', label: 'Zamjena kočnica Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'Priprema za tehnički pregled Bratislava →' },
			{ href: '/vymena-tlmicov-bratislava', label: 'Zamjena amortizera Bratislava →' }
		],
		ctaTitle: 'Naručite popravak ispuha',
		ctaText: 'Nazovite ili pišite na WhatsApp – savjetovat ćemo vas, pripremiti ponudu i dogovoriti termin.',
		waText: 'Dobar dan, zanima me popravak ispuha. Moje vozilo je: '
	}
};
