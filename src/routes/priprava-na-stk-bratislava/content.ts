import type { Lang } from '$lib/i18n';
import type { LandingContent } from '$lib/content/landing-types';

export const content: Record<Lang, LandingContent> = {
	sk: {
		metaTitle: 'Príprava na STK a EK Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Príprava na STK a EK Bratislava – kontrola a oprava bŕzd, tlmičov, svetiel, emisií, geometrie a výfuku. Mobilný autoservis pre úspešné absolvovanie technickej a emisnej kontroly. Volajte: 0944 122 224',
		breadcrumbHome: 'Domov',
		breadcrumbCurrent: 'Príprava na STK a EK Bratislava',
		heroH1: 'Príprava na STK a EK',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Profesionálna <strong>príprava vozidla na STK a EK</strong> v Bratislave – Podunajských Biskupiciach. Skontrolujeme a opravíme <strong>brzdy</strong>, <strong>tlmiče</strong>, <strong>svetlá</strong>, <strong>emisie</strong>, <strong>geometriu</strong> a <strong>výfuk</strong>. Mobilný autoservis, ktorý zabezpečí, že na technickú a emisnú kontrolu pôjdete s istotou.',
		answer:
			'<strong>Príprava na STK a EK</strong> znamená, že vopred skontrolujeme a opravíme všetko, čo by na technickej a emisnej kontrole neprešlo – brzdy, tlmiče, svetlá, výfuk, emisie aj geometriu – aby vaše auto <strong>prešlo na prvýkrát</strong>. Zavolajte na <strong>0944 122 224</strong> a dohodneme kontrolu ešte pred termínom STK.',
		callBtn: 'Zavolať',
		badges: ['Kontrola pred STK', 'Oprava pred EK', 'Kompletný servis'],
		whenH2: 'Kedy pripravovať auto na STK/EK?',
		whenProse:
			'<p><strong>Technická kontrola (STK)</strong> a <strong>emisná kontrola (EK)</strong> sú povinné pre všetky vozidlá – periodicita závisí od veku a typu auta. Nové auto absolvuje prvú STK po <strong>4 rokoch</strong>, staršie vozidlá každé <strong>2 roky</strong>, vozidlá staršie ako 10 rokov každý <strong>1 rok</strong>.</p><p>Ak máte pochybnosti o stave vozidla alebo blíži sa platnosť STK, odporúčame <strong>preventívnu kontrolu pred STK a EK</strong>. V servise MUDROCH MOTORWORXX v Bratislave skontrolujeme všetko, čo môže spôsobiť neúspech, a opravíme to ešte pred samotnou kontrolou.</p>',
		symptomsH2: 'Časté dôvody neúspechu na STK/EK',
		symptomsProse:
			'Tieto problémy sú najčastejšími príčinami, prečo vozidlá neuspejú na technickej alebo emisnej kontrole. Ich opravou pred STK/EK sa vyhýbate zbytočným návštevám a doplatkom.',
		symptomsList: [
			'Opotrebované brzdové platničky alebo kotúče',
			'Netesný výfuk alebo katalyzátor',
			'Nefunkčné alebo nesprávne nastavené svetlá',
			'Netesné tlmiče alebo poškodené pružiny',
			'Rozbitá svetelná signalizácia (stop lampy, smerovky)',
			'Nesprávne nastavená geometria podvozku',
			'Vysoké emisie výfukových plynov (CO, NOx)',
			'Vybitá kontrolka motora (check engine) alebo ABS'
		],
		includesH2: 'Čo zahŕňa príprava na STK/EK',
		includesProse:
			'Kompletná <strong>kontrola a oprava vozidla pred technickou a emisnou kontrolou</strong> – kontrolujeme všetky systémy, ktoré môžu ovplyvniť výsledok STK a EK.',
		includesCards: [
			{ h3: 'Kontrola bŕzd', p: 'Kontrola brzdového systému – platničky, kotúče, kvapalina, strmene. Opravíme alebo vymeníme opotrebované diely.' },
			{ h3: 'Kontrola tlmičov a podvozku', p: 'Kontrola tlmičov, pružín, riadenia a ložísk. Oprava alebo výmena poškodených komponentov.' },
			{ h3: 'Kontrola svetiel a elektro', p: 'Kontrola svetlometov, smeroviek, stop lámp, nastavenie svetiel a diagnostika palubných systémov.' },
			{ h3: 'Kontrola výfuku a emisií', p: 'Kontrola výfukového systému, katalyzátora a emisií. Oprava netesností a nastavenie spaľovania.' }
		],
		priceH2: 'Cena prípravy na STK a EK',
		priceProse:
			'<p>Cena <strong>prípravy na STK a EK</strong> závisí od modelu vozidla a rozsahu potrebných opráv – od bežnej kontroly a drobných úprav až po výmenu tlmičov, bŕzd či opravy výfuku.</p><p>Pošlite nám <strong>ŠPZ alebo VIN</strong> vozidla a pripravíme vám <strong>presnú a férovú cenovú ponuku</strong> na mieru – za kontrolu aj prípadné opravy, bez skrytých poplatkov.</p>',
		whyH2: 'Prečo prípravu na STK zveriť nám',
		whyCards: [
			{ h3: 'Komplexná kontrola', p: 'Skontrolujeme všetky systémy, ktoré kontroluje STK/EK – brzdy, podvozok, svetlá, emisie, výfuk, geometriu.' },
			{ h3: 'Opravy na mieste', p: 'Väčšinu chýb opravíme hneď pri diagnostike – nemusíte absolvovať niekoľko návštev.' },
			{ h3: 'Férová cena bez prekvapení', p: 'Presná cenová ponuka vopred, platíte len za skutočne potrebné opravy a servis.' },
			{ h3: 'Mobilný autoservis v Bratislave', p: 'Sme mobilný autoservis so sídlom v Podunajských Biskupiciach – prípravu na STK vybavíme rýchlo a profesionálne.' }
		],
		faqH2: 'Časté otázky – príprava na STK a EK',
		faq: [
			{ q: 'Koľko stojí príprava na STK a EK v Bratislave?', a: 'Cena závisí od modelu vozidla a rozsahu potrebných opráv. Základná kontrola je od približne 30 €, opravy sa účtujú podľa skutočného rozsahu – výmena bŕzd, tlmičov, oprava výfuku, nastavenie svetiel. Pošlite nám ŠPZ alebo VIN a pripravíme presnú ponuku. Volajte 0944 122 224.' },
			{ q: 'Čo kontrolujete pri príprave na STK?', a: 'Kontrolujeme všetky systémy, ktoré vyhodnocuje technická kontrola: brzdový systém (platničky, kotúče, kvapalina), tlmiče a pružiny, svetelné systémy (svetlomety, smerovky, stop lampy), výfukový systém a emisie, geometriu podvozku, palubné systémy a chybové kódy motora (check engine, ABS).' },
			{ q: 'Aké sú najčastejšie dôvody neúspechu na STK?', a: 'Najčastejšie problémy sú opotrebované brzdové platničky alebo kotúče, netesný výfuk, nefunkčné alebo nesprávne nastavené svetlá, netesné tlmiče, nesprávna geometria podvozku, vysoké emisie výfukových plynov, rozsvietená kontrolka motora (check engine) a poškodená svetelná signalizácia.' },
			{ q: 'Musím pred STK opraviť všetky chyby?', a: 'Nie všetky chyby sú dôvodom na neúspech – závisí to od ich závažnosti. Chyby kategórie "Nebezpečná" znamenajú automatický neúspech, "Ťažká" chyba spôsobí neúspech po opakovanom zistení, "Malá" chyba je len upozornenie. Pri kontrole vám povieme, čo je kritické a čo môžete odložiť.' },
			{ q: 'Ako prebieha príprava na emisnú kontrolu (EK)?', a: 'Emisnú kontrolu pripravíme diagnostikou motora, kontrolou výfukového systému a katalyzátora. Ak sú emisie príliš vysoké, riešime netesnosti výfuku, kontrolujeme stav katalyzátora, senzory (lambda sonda) a nastavenie spaľovania. Po oprave auto úspešne prejde EK.' },
			{ q: 'Ako dlho trvá príprava na STK a EK?', a: 'Základná kontrola trvá približne 1–2 hodiny, opravy závisia od rozsahu. Drobné úpravy (nastavenie svetiel, kontrola bŕzd) vybavíme často počas jednej návštevy. Väčšie opravy (výmena tlmičov, bŕzd) môžu trvať pol dňa až celý deň – presný čas a termín vám povieme pri objednaní.' }
		],
		relatedH2: 'Súvisiace služby',
		related: [
			{ href: '/', label: 'Domov →' },
			{ href: '/vymena-brzd-bratislava', label: 'Výmena bŕzd Bratislava →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Diagnostika áut Bratislava →' },
			{ href: '/oprava-vyfuku-bratislava', label: 'Oprava výfuku Bratislava →' }
		],
		ctaTitle: 'Objednajte prípravu na STK/EK',
		ctaText: 'Zavolajte alebo napíšte na WhatsApp – skontrolujeme vozidlo, poradíme, pripravíme cenovú ponuku a dohodneme termín.',
		waText: 'Dobrý deň, mám záujem o prípravu vozidla na STK a EK. Moje vozidlo je: '
	},

	en: {
		metaTitle: 'MOT & Emissions Preparation Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'MOT & emissions preparation in Bratislava – brake, suspension, lights, emissions, alignment and exhaust check & repair. Mobile car service for successful technical and emissions inspection. Call: 0944 122 224',
		breadcrumbHome: 'Home',
		breadcrumbCurrent: 'MOT & Emissions Preparation Bratislava',
		heroH1: 'MOT & emissions preparation',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Professional <strong>vehicle preparation for MOT and emissions inspection</strong> in Bratislava – Podunajské Biskupice. We check and repair <strong>brakes</strong>, <strong>suspension</strong>, <strong>lights</strong>, <strong>emissions</strong>, <strong>alignment</strong> and <strong>exhaust</strong>. Mobile car service ensuring you go to the technical and emissions test with confidence.',
		answer:
			'<strong>MOT and emissions preparation</strong> means we check and fix everything that would fail the technical and emission inspection in advance – brakes, suspension, lights, exhaust, emissions and alignment – so your car <strong>passes first time</strong>. Call <strong>0944 122 224</strong> and we\'ll arrange a pre-MOT check before your inspection date.',
		callBtn: 'Call',
		badges: ['Pre-MOT check', 'Emissions repair', 'Full service'],
		whenH2: 'When to prepare your car for MOT/emissions?',
		whenProse:
			'<p><strong>Technical inspection (MOT)</strong> and <strong>emissions inspection</strong> are mandatory for all vehicles – frequency depends on age and type. A new car has its first MOT after <strong>4 years</strong>, older vehicles every <strong>2 years</strong>, vehicles older than 10 years every <strong>1 year</strong>.</p><p>If you have doubts about the condition of your vehicle or your MOT validity is approaching, we recommend a <strong>preventive pre-MOT and emissions check</strong>. At MUDROCH MOTORWORXX in Bratislava we\'ll check everything that could cause failure and fix it before the actual inspection.</p>',
		symptomsH2: 'Common reasons for MOT/emissions failure',
		symptomsProse:
			'These issues are the most common reasons why vehicles fail a technical or emissions inspection. Repairing them before the MOT/emissions test saves you unnecessary visits and extra fees.',
		symptomsList: [
			'Worn brake pads or discs',
			'Leaking exhaust or catalytic converter',
			'Faulty or incorrectly adjusted lights',
			'Leaking shock absorbers or damaged springs',
			'Broken lighting (stop lights, indicators)',
			'Incorrect suspension alignment',
			'High exhaust emissions (CO, NOx)',
			'Illuminated engine light (check engine) or ABS'
		],
		includesH2: 'What MOT/emissions preparation includes',
		includesProse:
			'Complete <strong>vehicle check and repair before technical and emissions inspection</strong> – a thorough pre-MOT check of all systems that can affect the MOT and emissions result, so we fix them before the test.',
		includesCards: [
			{ h3: 'Brake check', p: 'Brake system inspection – pads, discs, fluid, calipers. We repair or replace worn parts.' },
			{ h3: 'Suspension & chassis check', p: 'Shock absorbers, springs, steering and bearings check. Repair or replacement of damaged components.' },
			{ h3: 'Lights & electrics check', p: 'Headlights, indicators, stop lights inspection, light adjustment and dashboard diagnostics.' },
			{ h3: 'Exhaust & emissions check', p: 'Exhaust system, catalytic converter and emissions check. Leak repair and combustion adjustment.' }
		],
		priceH2: 'MOT & emissions preparation price',
		priceProse:
			'<p>The price of <strong>MOT & emissions preparation</strong> depends on the vehicle model and scope of repairs needed – from a routine check and minor adjustments to shock absorber or brake replacement or exhaust repairs.</p><p>Send us the <strong>licence plate or VIN</strong> of your vehicle and we\'ll prepare a <strong>precise, fair quote</strong> tailored to you – for both the check and any repairs, with no hidden fees.</p>',
		whyH2: 'Why entrust your MOT prep to us',
		whyCards: [
			{ h3: 'Comprehensive check', p: 'We check all systems inspected in the MOT/emissions test – brakes, chassis, lights, emissions, exhaust, alignment.' },
			{ h3: 'On-site repairs', p: 'Most faults are repaired immediately during diagnostics – you don\'t need several visits.' },
			{ h3: 'Fair price, no surprises', p: 'A precise quote up front, you only pay for genuinely necessary repairs and service.' },
			{ h3: 'Mobile car service in Bratislava', p: 'We are a mobile car service based in Podunajské Biskupice – we handle MOT preparation quickly and professionally.' }
		],
		faqH2: 'Frequently asked questions – MOT & emissions preparation',
		faq: [
			{ q: 'How much does MOT and emissions preparation in Bratislava cost?', a: 'The price depends on the vehicle model and scope of repairs. A basic check is from roughly €30, repairs are charged according to actual scope – brake or shock absorber replacement, exhaust repair, light adjustment. Send us your licence plate or VIN and we\'ll prepare an exact quote. Call 0944 122 224.' },
			{ q: 'What do you check during MOT preparation?', a: 'We check all systems evaluated by the technical inspection: brake system (pads, discs, fluid), shock absorbers and springs, lighting systems (headlights, indicators, stop lights), exhaust system and emissions, suspension alignment, dashboard systems and engine error codes (check engine, ABS).' },
			{ q: 'What are the most common reasons for MOT failure?', a: 'The most common problems are worn brake pads or discs, a leaking exhaust, faulty or incorrectly adjusted lights, leaking shock absorbers, incorrect suspension alignment, high exhaust emissions, an illuminated engine light (check engine) and damaged lighting.' },
			{ q: 'Do I have to fix all faults before the MOT?', a: 'Not all faults are grounds for failure – it depends on their severity. "Dangerous" category faults mean automatic failure, a "Major" fault causes failure on repeat detection, a "Minor" fault is just a warning. During the check we\'ll tell you what\'s critical and what can be postponed.' },
			{ q: 'How does emissions inspection preparation work?', a: 'We prepare for emissions inspection with engine diagnostics, exhaust system and catalytic converter checks. If emissions are too high, we address exhaust leaks, check the catalytic converter condition, sensors (lambda probe) and combustion settings. After the repair the car will pass the emissions test.' },
			{ q: 'How long does MOT and emissions preparation take?', a: 'A basic check takes roughly 1–2 hours, repairs depend on scope. Minor adjustments (light adjustment, brake check) are often done during a single visit. Bigger repairs (shock absorber or brake replacement) can take half a day to a whole day – we\'ll tell you the exact time and date when booking.' }
		],
		relatedH2: 'Related services',
		related: [
			{ href: '/', label: 'Home →' },
			{ href: '/vymena-brzd-bratislava', label: 'Brake replacement Bratislava →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Car diagnostics Bratislava →' },
			{ href: '/oprava-vyfuku-bratislava', label: 'Exhaust repair Bratislava →' }
		],
		ctaTitle: 'Book your MOT/emissions preparation',
		ctaText: 'Call us or write on WhatsApp – we\'ll check your vehicle, advise you, prepare a quote and arrange an appointment.',
		waText: 'Hello, I\'m interested in MOT and emissions preparation. My vehicle is: '
	},

	de: {
		metaTitle: 'TÜV & AU Vorbereitung Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'TÜV & AU Vorbereitung in Bratislava – Bremsen-, Fahrwerks-, Licht-, Abgas-, Spureinstellungs- und Auspuffprüfung & Reparatur. Mobiler Autoservice für erfolgreiche Haupt- und Abgasuntersuchung. Anrufen: 0944 122 224',
		breadcrumbHome: 'Startseite',
		breadcrumbCurrent: 'TÜV & AU Vorbereitung Bratislava',
		heroH1: 'TÜV & AU Vorbereitung',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Professionelle <strong>Fahrzeugvorbereitung auf TÜV und AU</strong> in Bratislava – Podunajské Biskupice. Wir prüfen und reparieren <strong>Bremsen</strong>, <strong>Fahrwerk</strong>, <strong>Licht</strong>, <strong>Abgase</strong>, <strong>Spureinstellung</strong> und <strong>Auspuff</strong>. Mobiler Autoservice, damit Sie zur Haupt- und Abgasuntersuchung mit Sicherheit fahren.',
		answer:
			'<strong>TÜV- und AU-Vorbereitung</strong> bedeutet, dass wir vorab alles prüfen und reparieren, was bei der Haupt- und Abgasuntersuchung beanstandet würde – Bremsen, Fahrwerk, Licht, Auspuff, Abgase und Spureinstellung – damit Ihr Auto <strong>gleich beim ersten Mal besteht</strong>. Rufen Sie <strong>0944 122 224</strong> an und wir vereinbaren eine Vorprüfung vor Ihrem TÜV-Termin.',
		callBtn: 'Anrufen',
		badges: ['TÜV-Vorprüfung', 'AU-Reparatur', 'Komplettservice'],
		whenH2: 'Wann das Auto auf TÜV/AU vorbereiten?',
		whenProse:
			'<p><strong>Hauptuntersuchung (TÜV)</strong> und <strong>Abgasuntersuchung (AU)</strong> sind für alle Fahrzeuge Pflicht – die Häufigkeit hängt von Alter und Typ ab. Ein neues Auto hat seine erste HU nach <strong>4 Jahren</strong>, ältere Fahrzeuge alle <strong>2 Jahre</strong>, Fahrzeuge älter als 10 Jahre jedes <strong>1 Jahr</strong>.</p><p>Bei Zweifeln am Fahrzeugzustand oder nahender TÜV-Gültigkeit empfehlen wir eine <strong>vorbeugende TÜV- und AU-Prüfung</strong>. Bei MUDROCH MOTORWORXX in Bratislava prüfen wir alles, was zum Durchfall führen kann, und reparieren es vor der eigentlichen Untersuchung.</p>',
		symptomsH2: 'Häufige Gründe für TÜV/AU-Durchfall',
		symptomsProse:
			'Diese Probleme sind die häufigsten Ursachen, warum Fahrzeuge bei der Haupt- oder Abgasuntersuchung durchfallen. Ihre Reparatur vor TÜV/AU erspart Ihnen unnötige Besuche und Aufpreise.',
		symptomsList: [
			'Verschlissene Bremsbeläge oder -scheiben',
			'Undichter Auspuff oder Katalysator',
			'Defekte oder falsch eingestellte Scheinwerfer',
			'Undichte Stoßdämpfer oder beschädigte Federn',
			'Kaputte Beleuchtung (Bremslichter, Blinker)',
			'Falsch eingestellte Fahrwerksgeometrie',
			'Hohe Abgasemissionen (CO, NOx)',
			'Leuchtende Motorkontrollleuchte (Check Engine) oder ABS'
		],
		includesH2: 'Was die TÜV/AU Vorbereitung umfasst',
		includesProse:
			'Komplette <strong>Fahrzeugprüfung und Reparatur vor Haupt- und Abgasuntersuchung</strong> – eine gründliche Vorbereitung auf die Hauptuntersuchung, bei der wir alle Systeme prüfen, die das TÜV- und AU-Ergebnis beeinflussen können, und sie vor dem TÜV reparieren.',
		includesCards: [
			{ h3: 'Bremsenprüfung', p: 'Bremssysteminspektion – Beläge, Scheiben, Flüssigkeit, Sättel. Wir reparieren oder ersetzen verschlissene Teile.' },
			{ h3: 'Fahrwerk & Chassis-Prüfung', p: 'Stoßdämpfer-, Federn-, Lenkungs- und Lagerprüfung. Reparatur oder Ersatz beschädigter Komponenten.' },
			{ h3: 'Licht & Elektrik-Prüfung', p: 'Scheinwerfer-, Blinker-, Bremslichtinspektion, Lichteinstellung und Armaturenbrettdiagnose.' },
			{ h3: 'Auspuff & Abgasprüfung', p: 'Auspuffanlage-, Katalysator- und Abgasprüfung. Leckabdichtung und Verbrennungseinstellung.' }
		],
		priceH2: 'Preis für TÜV & AU Vorbereitung',
		priceProse:
			'<p>Der Preis für die <strong>TÜV & AU Vorbereitung</strong> hängt vom Fahrzeugmodell und Reparaturumfang ab – von der routinemäßigen Prüfung und kleineren Anpassungen bis zum Stoßdämpfer- oder Bremsenwechsel oder Auspuffreparaturen.</p><p>Senden Sie uns das <strong>Kennzeichen oder die VIN</strong> Ihres Fahrzeugs und wir erstellen Ihnen ein <strong>präzises, faires Angebot</strong> nach Maß – für Prüfung und eventuelle Reparaturen, ohne versteckte Gebühren.</p>',
		whyH2: 'Warum Sie uns Ihre TÜV-Vorbereitung anvertrauen sollten',
		whyCards: [
			{ h3: 'Umfassende Prüfung', p: 'Wir prüfen alle bei TÜV/AU kontrollierten Systeme – Bremsen, Fahrwerk, Licht, Abgase, Auspuff, Spureinstellung.' },
			{ h3: 'Vor-Ort-Reparaturen', p: 'Die meisten Mängel werden sofort bei der Diagnose behoben – Sie brauchen nicht mehrere Besuche.' },
			{ h3: 'Fairer Preis, keine Überraschungen', p: 'Ein präzises Angebot im Voraus, Sie zahlen nur für tatsächlich notwendige Reparaturen und Service.' },
			{ h3: 'Mobiler Autoservice in Bratislava', p: 'Wir sind ein mobiler Autoservice mit Sitz in Podunajské Biskupice – wir erledigen die TÜV-Vorbereitung schnell und professionell.' }
		],
		faqH2: 'Häufige Fragen – TÜV & AU Vorbereitung',
		faq: [
			{ q: 'Wie viel kostet TÜV- und AU-Vorbereitung in Bratislava?', a: 'Der Preis hängt vom Fahrzeugmodell und Reparaturumfang ab. Eine Basisprüfung kostet ab etwa 30 €, Reparaturen werden nach tatsächlichem Umfang berechnet – Bremsen- oder Stoßdämpferwechsel, Auspuffreparatur, Lichteinstellung. Senden Sie uns Kennzeichen oder VIN und wir erstellen ein genaues Angebot. Rufen Sie 0944 122 224 an.' },
			{ q: 'Was prüfen Sie bei der TÜV-Vorbereitung?', a: 'Wir prüfen alle von der Hauptuntersuchung bewerteten Systeme: Bremssystem (Beläge, Scheiben, Flüssigkeit), Stoßdämpfer und Federn, Lichtsysteme (Scheinwerfer, Blinker, Bremslichter), Auspuffanlage und Abgase, Fahrwerksgeometrie, Armaturenbrettsysteme und Motor-Fehlercodes (Check Engine, ABS).' },
			{ q: 'Was sind die häufigsten Gründe für TÜV-Durchfall?', a: 'Die häufigsten Probleme sind verschlissene Bremsbeläge oder -scheiben, ein undichter Auspuff, defekte oder falsch eingestellte Scheinwerfer, undichte Stoßdämpfer, falsche Fahrwerksgeometrie, hohe Abgasemissionen, eine leuchtende Motorkontrollleuchte (Check Engine) und kaputte Beleuchtung.' },
			{ q: 'Muss ich alle Mängel vor dem TÜV beheben?', a: 'Nicht alle Mängel sind Durchfallgründe – es hängt von ihrer Schwere ab. Mängel der Kategorie „Gefährlich" bedeuten automatischen Durchfall, ein „Erheblicher" Mangel führt bei wiederholter Feststellung zum Durchfall, ein „Geringer" Mangel ist nur eine Warnung. Bei der Prüfung sagen wir Ihnen, was kritisch ist und was verschoben werden kann.' },
			{ q: 'Wie funktioniert die Vorbereitung auf die Abgasuntersuchung?', a: 'Wir bereiten auf die AU mit Motordiagnose, Auspuffanlagen- und Katalysatorprüfung vor. Bei zu hohen Abgasen beheben wir Auspuffundichtigkeiten, prüfen Katalysatorzustand, Sensoren (Lambdasonde) und Verbrennungseinstellungen. Nach der Reparatur besteht das Auto die AU.' },
			{ q: 'Wie lange dauert die TÜV- und AU-Vorbereitung?', a: 'Eine Basisprüfung dauert etwa 1–2 Stunden, Reparaturen hängen vom Umfang ab. Kleinere Anpassungen (Lichteinstellung, Bremsenprüfung) werden oft bei einem einzigen Besuch erledigt. Größere Reparaturen (Stoßdämpfer- oder Bremsenwechsel) können einen halben bis ganzen Tag dauern – wir sagen Ihnen die genaue Zeit und den Termin bei der Buchung.' }
		],
		relatedH2: 'Ähnliche Leistungen',
		related: [
			{ href: '/', label: 'Startseite →' },
			{ href: '/vymena-brzd-bratislava', label: 'Bremsenwechsel Bratislava →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Autodiagnose Bratislava →' },
			{ href: '/oprava-vyfuku-bratislava', label: 'Auspuffreparatur Bratislava →' }
		],
		ctaTitle: 'Buchen Sie Ihre TÜV/AU Vorbereitung',
		ctaText: 'Rufen Sie uns an oder schreiben Sie auf WhatsApp – wir prüfen Ihr Fahrzeug, beraten Sie, erstellen ein Angebot und vereinbaren einen Termin.',
		waText: 'Guten Tag, ich habe Interesse an TÜV- und AU-Vorbereitung. Mein Fahrzeug ist: '
	},

	hr: {
		metaTitle: 'Priprema za tehnički i emisijski pregled Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Priprema za tehnički i emisijski pregled u Bratislavi – provjera i popravak kočnica, ovješenja, svjetala, emisija, geometrije i ispuha. Mobilni autoservis za uspješno obavljanje tehničkog i emisijskog pregleda. Nazovite: 0944 122 224',
		breadcrumbHome: 'Početna',
		breadcrumbCurrent: 'Priprema za tehnički i emisijski pregled Bratislava',
		heroH1: 'Priprema za tehnički i emisijski pregled',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Profesionalna <strong>priprema vozila za tehnički i emisijski pregled</strong> u Bratislavi – Podunajské Biskupice. Provjeravamo i popravljamo <strong>kočnice</strong>, <strong>ovješenje</strong>, <strong>svjetla</strong>, <strong>emisije</strong>, <strong>geometriju</strong> i <strong>ispuh</strong>. Mobilni autoservis koji osigurava da na tehnički i emisijski pregled idete s pouzdanjem.',
		answer:
			'<strong>Priprema za tehnički i emisijski pregled</strong> znači da unaprijed provjerimo i popravimo sve što bi na tehničkom i ekološkom pregledu palo – kočnice, ovješenje, svjetla, ispuh, emisije i geometriju – kako bi vaš automobil <strong>prošao iz prve</strong>. Nazovite <strong>0944 122 224</strong> i dogovorit ćemo provjeru prije termina tehničkog pregleda.',
		callBtn: 'Nazovite',
		badges: ['Provjera prije pregleda', 'Popravak emisija', 'Kompletan servis'],
		whenH2: 'Kada pripremiti auto za tehnički/emisijski pregled?',
		whenProse:
			'<p><strong>Tehnički pregled</strong> i <strong>emisijski pregled</strong> su obvezni za sva vozila – učestalost ovisi o starosti i tipu vozila. Novi automobil ima prvi pregled nakon <strong>4 godine</strong>, starija vozila svake <strong>2 godine</strong>, vozila starija od 10 godina svake <strong>1 godine</strong>.</p><p>Ako imate sumnje o stanju vozila ili se približava valjanost pregleda, preporučujemo <strong>preventivnu provjeru prije tehničkog i emisijskog pregleda</strong>. U servisu MUDROCH MOTORWORXX u Bratislavi provjerit ćemo sve što može uzrokovati neuspjeh i popraviti prije samog pregleda.</p>',
		symptomsH2: 'Česti razlozi neuspjeha na tehničkom/emisijskom pregledu',
		symptomsProse:
			'Ovi problemi su najčešći razlozi zašto vozila ne uspiju na tehničkom ili emisijskom pregledu. Njihovim popravkom prije pregleda izbjegavate nepotrebne posjete i dopunske troškove.',
		symptomsList: [
			'Istrošene kočione pločice ili diskovi',
			'Propusni ispuh ili katalizator',
			'Neispravna ili pogrešno podešena svjetla',
			'Propusni amortizeri ili oštećene opruge',
			'Pokvarena signalizacija (stop svjetla, žmigavci)',
			'Pogrešno podešena geometrija ovješenja',
			'Visoke emisije ispušnih plinova (CO, NOx)',
			'Upaljena kontrolna lampica motora (check engine) ili ABS'
		],
		includesH2: 'Što uključuje priprema za tehnički/emisijski pregled',
		includesProse:
			'Kompletna <strong>provjera i popravak vozila prije tehničkog i emisijskog pregleda</strong> – temeljit pregled svih sustava prije tehničkog koji mogu utjecati na rezultat tehničkog i ekološkog pregleda, koje popravljamo prije samog termina.',
		includesCards: [
			{ h3: 'Provjera kočnica', p: 'Inspekcija kočionog sustava – pločice, diskovi, tekućina, čeljusti. Popravljamo ili mijenjamo istrošene dijelove.' },
			{ h3: 'Provjera ovješenja i šasije', p: 'Provjera amortizera, opruga, upravljanja i ležajeva. Popravak ili zamjena oštećenih komponenti.' },
			{ h3: 'Provjera svjetala i elektrike', p: 'Inspekcija farova, žmigavaca, stop svjetala, podešavanje svjetala i dijagnostika kontrolne ploče.' },
			{ h3: 'Provjera ispuha i emisija', p: 'Provjera ispušnog sustava, katalizatora i emisija. Popravak propuštanja i podešavanje izgaranja.' }
		],
		priceH2: 'Cijena pripreme za tehnički i emisijski pregled',
		priceProse:
			'<p>Cijena <strong>pripreme za tehnički i emisijski pregled</strong> ovisi o modelu vozila i opsegu potrebnih popravaka – od rutinske provjere i manjih prilagodbi do zamjene amortizera ili kočnica ili popravka ispuha.</p><p>Pošaljite nam <strong>registarsku oznaku ili VIN</strong> vozila i pripremit ćemo vam <strong>točnu i poštenu ponudu</strong> po mjeri – za provjeru i eventualne popravke, bez skrivenih troškova.</p>',
		whyH2: 'Zašto pripremu za pregled povjeriti nama',
		whyCards: [
			{ h3: 'Sveobuhvatna provjera', p: 'Provjeravamo sve sustave koji se pregledavaju na tehničkom/emisijskom pregledu – kočnice, šasija, svjetla, emisije, ispuh, geometrija.' },
			{ h3: 'Popravci na licu mjesta', p: 'Većinu kvarova popravljamo odmah tijekom dijagnostike – ne trebate nekoliko posjeta.' },
			{ h3: 'Poštena cijena bez iznenađenja', p: 'Točna ponuda unaprijed, plaćate samo stvarno potrebne popravke i servis.' },
			{ h3: 'Mobilni autoservis u Bratislavi', p: 'Mi smo mobilni autoservis sa sjedištem u Podunajské Biskupice – pripremu za pregled obavljamo brzo i profesionalno.' }
		],
		faqH2: 'Česta pitanja – priprema za tehnički i emisijski pregled',
		faq: [
			{ q: 'Koliko košta priprema za tehnički i emisijski pregled u Bratislavi?', a: 'Cijena ovisi o modelu vozila i opsegu popravaka. Osnovna provjera je od otprilike 30 €, popravci se naplaćuju prema stvarnom opsegu – zamjena kočnica ili amortizera, popravak ispuha, podešavanje svjetala. Pošaljite nam registarsku oznaku ili VIN i pripremit ćemo točnu ponudu. Nazovite 0944 122 224.' },
			{ q: 'Što provjeravate pri pripremi za tehnički pregled?', a: 'Provjeravamo sve sustave koje ocjenjuje tehnički pregled: kočioni sustav (pločice, diskovi, tekućina), amortizere i opruge, sustave osvjetljenja (farovi, žmigavci, stop svjetla), ispušni sustav i emisije, geometriju ovješenja, sustave kontrolne ploče i kodove greške motora (check engine, ABS).' },
			{ q: 'Koji su najčešći razlozi neuspjeha na tehničkom pregledu?', a: 'Najčešći problemi su istrošene kočione pločice ili diskovi, propusni ispuh, neispravna ili pogrešno podešena svjetla, propusni amortizeri, pogrešna geometrija ovješenja, visoke emisije ispuha, upaljena kontrolna lampica motora (check engine) i pokvarena signalizacija.' },
			{ q: 'Moram li popraviti sve kvarove prije tehničkog pregleda?', a: 'Nisu svi kvarovi razlog za neuspjeh – ovisi o njihovoj ozbiljnosti. Kvarovi kategorije „Opasan" znače automatski neuspjeh, „Težak" kvar uzrokuje neuspjeh pri ponovljenom otkrivanju, „Manji" kvar je samo upozorenje. Pri provjeri reći ćemo vam što je kritično a što može biti odgođeno.' },
			{ q: 'Kako se priprema za emisijski pregled?', a: 'Pripremamo za emisijski pregled dijagnostikom motora, provjerom ispušnog sustava i katalizatora. Ako su emisije previsoke, rješavamo propuštanja ispuha, provjeravamo stanje katalizatora, senzore (lambda sonda) i postavke izgaranja. Nakon popravka automobil prolazi emisijski pregled.' },
			{ q: 'Koliko traje priprema za tehnički i emisijski pregled?', a: 'Osnovna provjera traje otprilike 1–2 sata, popravci ovise o opsegu. Manje prilagodbe (podešavanje svjetala, provjera kočnica) često obavimo tijekom jednog posjeta. Veći popravci (zamjena amortizera ili kočnica) mogu trajati pola dana do cijelog dana – reći ćemo vam točno vrijeme i termin pri narudžbi.' }
		],
		relatedH2: 'Povezane usluge',
		related: [
			{ href: '/', label: 'Početna →' },
			{ href: '/vymena-brzd-bratislava', label: 'Zamjena kočnica Bratislava →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Dijagnostika automobila Bratislava →' },
			{ href: '/oprava-vyfuku-bratislava', label: 'Popravak ispuha Bratislava →' }
		],
		ctaTitle: 'Naručite pripremu za tehnički/emisijski pregled',
		ctaText: 'Nazovite ili pišite na WhatsApp – provjerit ćemo vozilo, savjetovati vas, pripremiti ponudu i dogovoriti termin.',
		waText: 'Dobar dan, zanima me priprema vozila za tehnički i emisijski pregled. Moje vozilo je: '
	}
};
