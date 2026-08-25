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
		metaTitle: 'Autoservis Podunajské Biskupice | MUDROCH MOTORWORXX',
		metaDescription:
			'Autoservis v Podunajských Biskupiciach – komplexný servis áut, výmena rozvodov, bŕzd, tlmičov, oprava výfuku, diagnostika a príprava na STK/EK. Sídlime na Závodná 10143/26, ponúkame aj mobilný autoservis. Volajte: 0944 122 224',
		breadcrumbHome: 'Domov',
		breadcrumbCurrent: 'Autoservis Podunajské Biskupice',
		heroH1: 'Autoservis',
		heroH1Accent: 'Podunajské Biskupice',
		heroLede:
			'Váš spoľahlivý <strong>autoservis v Podunajských Biskupiciach</strong> s adresou <strong>Závodná 10143/26</strong>. Zabezpečíme kompletný servis vášho vozidla – <strong>výmena rozvodov a bŕzd</strong>, tlmiče, výfuk, diagnostika áut aj <strong>príprava na STK a EK</strong>. Sme priamo v Podunajských Biskupiciach, na dohľad od Vrakunskej cesty, a ponúkame aj mobilný autoservis.',
		answer:
			'Náš <strong>autoservis sídli priamo v Podunajských Biskupiciach</strong> na Závodnej 10143/26 – zabezpečíme kompletný servis od <strong>výmeny rozvodov a bŕzd</strong> cez tlmiče a výfuk až po diagnostiku a prípravu na STK a EK. Zavolajte na <strong>0944 122 224</strong> a dohodneme termín.',
		callBtn: 'Zavolať',
		badges: ['Závodná 10143/26', 'Mobilný autoservis', 'STK aj EK'],
		whenH2: 'Prečo autoservis v Podunajských Biskupiciach',
		whenProse:
			'<p>Náš autoservis sídli priamo v <strong>Podunajských Biskupiciach</strong> na ulici <strong>Závodná 10143/26</strong> – skladové priestory v srdci mestskej časti, dobre dostupné z Vrakunskej cesty aj Einsteinovy ulice. Aj keď nejde o showroom, práve tu riešime všetko, čo vaše auto potrebuje.</p><p>Okrem pevného sídla ponúkame aj <strong>mobilný autoservis</strong> – ak sa vám hodia opravy priamo u vás či v práci, stačí zavolať. Naša poloha nám umožňuje rýchlo obsluhovať celé Podunajské Biskupice, Vrakuňu aj ďalšie časti Bratislavy.</p>',
		symptomsH2: 'Kompletné služby autoservisu',
		symptomsProse:
			'Ponúkame celý rad servisných úkonov – od pravidelnej údržby až po náročné opravy motora. V autoservise Podunajské Biskupice vybavíte všetko, čo vaše vozidlo potrebuje.',
		symptomsList: [
			'Výmena rozvodov (ozubené aj reťazové)',
			'Výmena a servis bŕzd (platničky, kotúče, kvapalina)',
			'Výmena tlmičov pruženia',
			'Oprava výfukového systému',
			'Diagnostika motora a elektroniky',
			'Príprava vozidla na STK a emisnú kontrolu (EK)',
			'Servis podvozku a náprav',
			'Kontrola a výmena kvapalín'
		],
		includesH2: 'Čo u nás vybavíte',
		includesProse:
			'Náš autoservis v Podunajských Biskupiciach pokrýva všetky základné aj pokročilé opravy. Nemusíte riešiť viacero miest – všetko vybavíte u nás.',
		includesCards: [
			{ h3: 'Výmena rozvodov a bŕzd', p: 'Odborná výmena rozvodového remeňa či reťaze, servis brzdového systému – platničky, kotúče, strmeň, kvapalina a diagnostika bŕzd.' },
			{ h3: 'Tlmiče a pruženie', p: 'Výmena tlmičov prednej aj zadnej nápravy, diagnostika podvozku a oprava systému odpruženia pre komfortné a bezpečné jazdenie.' },
			{ h3: 'Výfuk a emisie', p: 'Oprava výfukového systému, kontrola katalyzátora, výmena tesnení či častí výfuku, merania na prípravu na emisnú kontrolu.' },
			{ h3: 'STK a diagnostika', p: 'Príprava na technickú kontrolu a emisnú kontrolu – skontrolujeme, čo treba dorobiť, opravíme a pripravíme vaše auto na úspešné absolvovanie STK a EK.' }
		],
		priceH2: 'Cenová ponuka vopred',
		priceProse:
			'<p>Cena servisu závisí od konkrétneho úkonu a modelu vozidla – či ide o výmenu rozvodov, bŕzd, tlmičov alebo prípravu na STK. V každom prípade dostanete <strong>férovú cenovú ponuku vopred</strong>, bez skrytých poplatkov.</p><p>Pošlite nám <strong>ŠPZ alebo VIN</strong> a popíšte, čo potrebujete – vypracujeme presnú ponuku priamo na váš prípad. Autoservis Podunajské Biskupice stavia na transparentnosti a dôvere.</p>',
		whyH2: 'Prečo práve náš autoservis',
		whyCards: [
			{ h3: 'Priamo v Podunajských Biskupiciach', p: 'Sídlime na Závodná 10143/26 – skladové priestory priamo v mestskej časti, dobre dostupné z Vrakunskej cesty aj okolia.' },
			{ h3: 'Mobilný autoservis', p: 'Okrem sídla ponúkame aj mobilný servis – vybavíme opravy priamo u vás doma či v práci, ak vám to viac vyhovuje.' },
			{ h3: 'Komplexné služby na jednom mieste', p: 'Od výmeny rozvodov, bŕzd a tlmičov až po prípravu na STK – všetko vybavíte u nás, nemusíte riešiť viacero servisov.' },
			{ h3: 'Férovosť a kvalitné diely', p: 'Používame overené náhradné diely podľa špecifikácie vášho vozidla, cenovú ponuku dostanete vždy vopred a s garancia na vykonanú prácu.' }
		],
		faqH2: 'Časté otázky – autoservis Podunajské Biskupice',
		faq: [
			{ q: 'Kde presne sídlite?', a: 'Náš autoservis sídli na adrese Závodná 10143/26, Podunajské Biskupice, Bratislava. Ide o skladové priestory (nie showroom), dobre dostupné z Vrakunskej cesty aj Einsteinovy ulice. Presné GPS súradnice vám poskytneme pri objednávaní.' },
			{ q: 'Treba sa objednať vopred?', a: 'Odporúčame objednávku vopred na telefónnom čísle 0944 122 224 alebo cez WhatsApp – vieme tak pripraviť všetko potrebné, dohodnúť termín a zabezpečiť, že vaše auto spravíme čo najrýchlejšie.' },
			{ q: 'Ponúkate mobilný autoservis?', a: 'Áno, ponúkame mobilný autoservis po celej Bratislave. Ak sa vám hodia opravy priamo u vás doma alebo v práci, zavolajte a dohodneme si podmienky – väčšinu bežných servisných úkonov vieme urobiť na mieste.' },
			{ q: 'Aké značky áut opravujete?', a: 'Opravujeme všetky značky osobných áut – VW, Škoda, Audi, Ford, Opel, Peugeot, Renault, Mercedes, BMW a ďalšie. Každému vozidlu sa venujeme individuálne a používame náhradné diely podľa výrobcu.' },
			{ q: 'Robíte prípravu na STK a EK?', a: 'Áno, zabezpečíme kompletnú prípravu vozidla na technickú kontrolu (STK) aj emisnú kontrolu (EK). Skontrolujeme stav, opravíme, čo treba, a pripravíme auto tak, aby kontrolou prešlo bez problémov.' },
			{ q: 'Koľko stojí servis v autoservise Podunajské Biskupice?', a: 'Cena závisí od typu servisu a modelu auta – či ide o výmenu rozvodov, bŕzd, tlmičov alebo diagnostiku. Pošlite nám ŠPZ alebo VIN a popíšte problém – pripravíme presnú cenovú ponuku priamo pre vaše vozidlo. Volajte 0944 122 224.' }
		],
		relatedH2: 'Súvisiace služby',
		related: [
			{ href: '/', label: 'Domov →' },
			{ href: '/vymena-rozvodov-bratislava', label: 'Výmena rozvodov Bratislava →' },
			{ href: '/vymena-brzd-bratislava', label: 'Výmena bŕzd Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'Príprava na STK a EK →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Diagnostika áut →' },
			{ href: '/autoservis-vrakuna', label: 'Autoservis Vrakuňa →' }
		],
		ctaTitle: 'Objednajte servis',
		ctaText: 'Zavolajte alebo napíšte na WhatsApp – poradíme, pripravíme cenovú ponuku a dohodneme termín servisu v Podunajských Biskupiciach.',
		waText: 'Dobrý deň, mám záujem o autoservis. Moje vozidlo je: '
	},

	en: {
		metaTitle: 'Car Service Podunajské Biskupice | MUDROCH MOTORWORXX',
		metaDescription:
			'Car service in Podunajské Biskupice – comprehensive auto repair, timing belt & brake replacement, shock absorbers, exhaust, diagnostics and MOT preparation. Located at Závodná 10143/26, we also offer mobile car service. Call: 0944 122 224',
		breadcrumbHome: 'Home',
		breadcrumbCurrent: 'Car Service Podunajské Biskupice',
		heroH1: 'Car service',
		heroH1Accent: 'Podunajské Biskupice',
		heroLede:
			'Your reliable <strong>car service in Podunajské Biskupice</strong> at <strong>Závodná 10143/26</strong>. We provide complete vehicle maintenance – <strong>timing belt and brake replacement</strong>, shock absorbers, exhaust, diagnostics and <strong>MOT preparation</strong>. We are located right in Podunajské Biskupice, close to Vrakunská road, and we also offer mobile car service.',
		answer:
			'Our <strong>car service is located right in Podunajské Biskupice</strong> at Závodná 10143/26 – we handle complete servicing from <strong>timing belt and brake replacement</strong> through shock absorbers and exhaust to diagnostics and MOT preparation. Call <strong>0944 122 224</strong> to arrange an appointment.',
		callBtn: 'Call',
		badges: ['Závodná 10143/26', 'Mobile service', 'MOT preparation'],
		whenH2: 'Why a car service in Podunajské Biskupice',
		whenProse:
			'<p>Our car service is based directly in <strong>Podunajské Biskupice</strong> at <strong>Závodná 10143/26</strong> – storage premises in the heart of the district, easily accessible from Vrakunská road and Einsteinova street. Although not a showroom, this is where we handle everything your car needs.</p><p>Besides our fixed location we offer <strong>mobile car service</strong> – if you prefer repairs at your home or workplace, just call. Our location allows us to quickly serve all of Podunajské Biskupice, Vrakuňa and other parts of Bratislava.</p>',
		symptomsH2: 'Complete car service range',
		symptomsProse:
			'We offer a full range of service tasks – from regular maintenance to demanding engine repairs. At our Podunajské Biskupice car service you can get everything your vehicle needs.',
		symptomsList: [
			'Timing belt replacement (belt and chain)',
			'Brake replacement and service (pads, discs, fluid)',
			'Shock absorber replacement',
			'Exhaust system repair',
			'Engine and electronics diagnostics',
			'MOT and emissions test preparation',
			'Chassis and axle service',
			'Fluid checks and replacement'
		],
		includesH2: 'What you can get with us',
		includesProse:
			'Our car service in Podunajské Biskupice covers all basic and advanced repairs. You don\'t need to deal with multiple places – you can get everything done with us.',
		includesCards: [
			{ h3: 'Timing belt & brake replacement', p: 'Expert timing belt or chain replacement, brake system service – pads, discs, calipers, fluid and brake diagnostics.' },
			{ h3: 'Shock absorbers & suspension', p: 'Replacement of front and rear axle shock absorbers, chassis diagnostics and suspension system repair for comfortable and safe driving.' },
			{ h3: 'Exhaust & emissions', p: 'Exhaust system repair, catalytic converter check, gasket or exhaust part replacement, measurements for emissions test preparation.' },
			{ h3: 'MOT & diagnostics', p: 'Preparation for technical inspection and emissions test – we check what needs to be done, repair and prepare your car for a successful MOT.' }
		],
		priceH2: 'Upfront quote',
		priceProse:
			'<p>The price of service depends on the specific task and vehicle model – whether it\'s timing belt replacement, brakes, shock absorbers or MOT preparation. In any case you\'ll get a <strong>fair quote upfront</strong>, with no hidden fees.</p><p>Send us your <strong>licence plate or VIN</strong> and describe what you need – we\'ll prepare a precise quote for your case. Podunajské Biskupice car service is built on transparency and trust.</p>',
		whyH2: 'Why choose our car service',
		whyCards: [
			{ h3: 'Right in Podunajské Biskupice', p: 'Located at Závodná 10143/26 – storage premises right in the district, easily accessible from Vrakunská road and the surrounding area.' },
			{ h3: 'Mobile car service', p: 'Besides our fixed location we offer mobile service – we can handle repairs at your home or workplace if that suits you better.' },
			{ h3: 'Complete services in one place', p: 'From timing belt, brake and shock absorber replacement to MOT preparation – you can get everything done with us, no need to deal with multiple garages.' },
			{ h3: 'Fair pricing and quality parts', p: 'We use proven spare parts according to your vehicle specification, you always get a quote upfront and a warranty on the work performed.' }
		],
		faqH2: 'Frequently asked questions – car service Podunajské Biskupice',
		faq: [
			{ q: 'Where exactly are you located?', a: 'Our car service is at Závodná 10143/26, Podunajské Biskupice, Bratislava. It\'s storage premises (not a showroom), easily accessible from Vrakunská road and Einsteinova street. We\'ll provide exact GPS coordinates when booking.' },
			{ q: 'Do I need to book in advance?', a: 'We recommend booking ahead on 0944 122 224 or via WhatsApp – that way we can prepare everything needed, arrange an appointment and ensure we fix your car as quickly as possible.' },
			{ q: 'Do you offer mobile car service?', a: 'Yes, we offer mobile car service throughout Bratislava. If you prefer repairs at your home or workplace, call and we\'ll arrange the details – we can do most routine service tasks on site.' },
			{ q: 'Which car brands do you repair?', a: 'We repair all car brands – VW, Škoda, Audi, Ford, Opel, Peugeot, Renault, Mercedes, BMW and more. We treat each vehicle individually and use spare parts according to the manufacturer.' },
			{ q: 'Do you do MOT preparation?', a: 'Yes, we provide comprehensive MOT and emissions test preparation. We check the condition, repair what\'s needed and prepare the car to pass the test without problems.' },
			{ q: 'How much does service in Podunajské Biskupice cost?', a: 'The price depends on the type of service and car model – whether it\'s timing belt, brake or shock absorber replacement or diagnostics. Send us your licence plate or VIN and describe the issue – we\'ll prepare a precise quote for your vehicle. Call 0944 122 224.' }
		],
		relatedH2: 'Related services',
		related: [
			{ href: '/', label: 'Home →' },
			{ href: '/vymena-rozvodov-bratislava', label: 'Timing belt replacement Bratislava →' },
			{ href: '/vymena-brzd-bratislava', label: 'Brake replacement Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'MOT preparation →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Car diagnostics →' },
			{ href: '/autoservis-vrakuna', label: 'Car Service Vrakuňa →' }
		],
		ctaTitle: 'Book your service',
		ctaText: 'Call or write on WhatsApp – we\'ll advise you, prepare a quote and arrange a service appointment in Podunajské Biskupice.',
		waText: 'Hello, I\'m interested in car service. My vehicle is: '
	},

	de: {
		metaTitle: 'Autoservice Podunajské Biskupice | MUDROCH MOTORWORXX',
		metaDescription:
			'Autoservice in Podunajské Biskupice – umfassender Kfz-Service, Zahnriemen- & Bremsenwechsel, Stoßdämpfer, Auspuff, Diagnose und HU-Vorbereitung. Standort Závodná 10143/26, wir bieten auch mobilen Autoservice. Anrufen: 0944 122 224',
		breadcrumbHome: 'Startseite',
		breadcrumbCurrent: 'Autoservice Podunajské Biskupice',
		heroH1: 'Autoservice',
		heroH1Accent: 'Podunajské Biskupice',
		heroLede:
			'Ihr zuverlässiger <strong>Autoservice in Podunajské Biskupice</strong> an der <strong>Závodná 10143/26</strong>. Wir bieten kompletten Fahrzeug-Service – <strong>Zahnriemen- und Bremsenwechsel</strong>, Stoßdämpfer, Auspuff, Diagnose und <strong>HU-Vorbereitung</strong>. Wir befinden uns direkt in Podunajské Biskupice, nahe der Vrakunská-Straße, und bieten auch mobilen Autoservice.',
		answer:
			'Unser <strong>Autoservice befindet sich direkt in Podunajské Biskupice</strong> an der Závodná 10143/26 – wir übernehmen den kompletten Service vom <strong>Zahnriemen- und Bremsenwechsel</strong> über Stoßdämpfer und Auspuff bis zu Diagnose und HU-Vorbereitung. Rufen Sie <strong>0944 122 224</strong> an, um einen Termin zu vereinbaren.',
		callBtn: 'Anrufen',
		badges: ['Závodná 10143/26', 'Mobiler Service', 'HU-Vorbereitung'],
		whenH2: 'Warum Autoservice in Podunajské Biskupice',
		whenProse:
			'<p>Unser Autoservice befindet sich direkt in <strong>Podunajské Biskupice</strong> an der <strong>Závodná 10143/26</strong> – Lagerräumlichkeiten im Herzen des Stadtteils, gut erreichbar von der Vrakunská-Straße und der Einsteinova-Straße. Obwohl kein Showroom, ist dies der Ort, wo wir alles erledigen, was Ihr Auto braucht.</p><p>Neben unserem festen Standort bieten wir auch <strong>mobilen Autoservice</strong> – wenn Sie Reparaturen zu Hause oder am Arbeitsplatz bevorzugen, rufen Sie einfach an. Unsere Lage ermöglicht uns, ganz Podunajské Biskupice, Vrakuňa und weitere Teile Bratislavas schnell zu bedienen.</p>',
		symptomsH2: 'Komplettes Autoservice-Angebot',
		symptomsProse:
			'Wir bieten eine volle Palette an Service-Aufgaben – von regelmäßiger Wartung bis zu anspruchsvollen Motorreparaturen. Im Autoservice Podunajské Biskupice bekommen Sie alles, was Ihr Fahrzeug braucht.',
		symptomsList: [
			'Zahnriemenwechsel (Riemen und Kette)',
			'Bremsenwechsel und -service (Beläge, Scheiben, Flüssigkeit)',
			'Stoßdämpferwechsel',
			'Auspuffsystem-Reparatur',
			'Motor- und Elektronikdiagnose',
			'HU- und Abgasprüfung-Vorbereitung',
			'Fahrwerk- und Achsen-Service',
			'Flüssigkeitschecks und -wechsel'
		],
		includesH2: 'Was Sie bei uns erledigen können',
		includesProse:
			'Unser Autoservice in Podunajské Biskupice deckt alle grundlegenden und fortgeschrittenen Reparaturen ab. Sie müssen nicht mehrere Orte aufsuchen – alles erledigen Sie bei uns.',
		includesCards: [
			{ h3: 'Zahnriemen & Bremsen', p: 'Fachgerechter Zahnriemen- oder Kettenwechsel, Bremssystem-Service – Beläge, Scheiben, Sättel, Flüssigkeit und Bremsendiagnose.' },
			{ h3: 'Stoßdämpfer & Federung', p: 'Wechsel von Vorder- und Hinterachsen-Stoßdämpfern, Fahrwerksdiagnose und Reparatur des Federungssystems für komfortables und sicheres Fahren.' },
			{ h3: 'Auspuff & Abgas', p: 'Auspuffsystem-Reparatur, Katalysator-Prüfung, Dichtungs- oder Auspuffteilwechsel, Messungen zur Abgasprüfung-Vorbereitung.' },
			{ h3: 'HU & Diagnose', p: 'Vorbereitung für Hauptuntersuchung und Abgasprüfung – wir prüfen, was zu tun ist, reparieren und bereiten Ihr Auto auf eine erfolgreiche HU vor.' }
		],
		priceH2: 'Angebot im Voraus',
		priceProse:
			'<p>Der Preis des Service hängt von der konkreten Aufgabe und dem Fahrzeugmodell ab – ob es Zahnriemen-, Bremsen- oder Stoßdämpferwechsel oder HU-Vorbereitung ist. In jedem Fall erhalten Sie ein <strong>faires Angebot im Voraus</strong>, ohne versteckte Gebühren.</p><p>Senden Sie uns Ihr <strong>Kennzeichen oder VIN</strong> und beschreiben Sie, was Sie benötigen – wir erstellen ein präzises Angebot für Ihren Fall. Autoservice Podunajské Biskupice steht für Transparenz und Vertrauen.</p>',
		whyH2: 'Warum unseren Autoservice wählen',
		whyCards: [
			{ h3: 'Direkt in Podunajské Biskupice', p: 'Standort Závodná 10143/26 – Lagerräume direkt im Stadtteil, gut erreichbar von der Vrakunská-Straße und Umgebung.' },
			{ h3: 'Mobiler Autoservice', p: 'Neben unserem festen Standort bieten wir mobilen Service – wir erledigen Reparaturen bei Ihnen zu Hause oder am Arbeitsplatz, wenn Ihnen das besser passt.' },
			{ h3: 'Komplette Leistungen an einem Ort', p: 'Von Zahnriemen-, Bremsen- und Stoßdämpferwechsel bis zur HU-Vorbereitung – alles erledigen Sie bei uns, Sie brauchen keine mehreren Werkstätten.' },
			{ h3: 'Faire Preise und Qualitätsteile', p: 'Wir verwenden bewährte Ersatzteile nach Ihrer Fahrzeugspezifikation, Sie erhalten immer ein Angebot im Voraus und Garantie auf die durchgeführte Arbeit.' }
		],
		faqH2: 'Häufige Fragen – Autoservice Podunajské Biskupice',
		faq: [
			{ q: 'Wo genau befinden Sie sich?', a: 'Unser Autoservice befindet sich an der Závodná 10143/26, Podunajské Biskupice, Bratislava. Es sind Lagerräumlichkeiten (kein Showroom), gut erreichbar von der Vrakunská-Straße und der Einsteinova-Straße. Die genauen GPS-Koordinaten teilen wir bei der Buchung mit.' },
			{ q: 'Muss ich im Voraus buchen?', a: 'Wir empfehlen eine Buchung im Voraus unter 0944 122 224 oder per WhatsApp – so können wir alles Nötige vorbereiten, einen Termin vereinbaren und sicherstellen, dass wir Ihr Auto so schnell wie möglich reparieren.' },
			{ q: 'Bieten Sie mobilen Autoservice?', a: 'Ja, wir bieten mobilen Autoservice in ganz Bratislava. Wenn Sie Reparaturen zu Hause oder am Arbeitsplatz bevorzugen, rufen Sie an und wir klären die Details – die meisten routinemäßigen Service-Aufgaben können wir vor Ort erledigen.' },
			{ q: 'Welche Automarken reparieren Sie?', a: 'Wir reparieren alle Automarken – VW, Škoda, Audi, Ford, Opel, Peugeot, Renault, Mercedes, BMW und weitere. Wir behandeln jedes Fahrzeug individuell und verwenden Ersatzteile nach Herstellervorgabe.' },
			{ q: 'Machen Sie HU-Vorbereitung?', a: 'Ja, wir bieten umfassende Vorbereitung für Hauptuntersuchung und Abgasprüfung. Wir prüfen den Zustand, reparieren, was nötig ist, und bereiten das Auto vor, damit es die Prüfung problemlos besteht.' },
			{ q: 'Wie viel kostet der Service in Podunajské Biskupice?', a: 'Der Preis hängt von der Art des Service und dem Automodell ab – ob es Zahnriemen-, Bremsen- oder Stoßdämpferwechsel oder Diagnose ist. Senden Sie uns Kennzeichen oder VIN und beschreiben Sie das Problem – wir erstellen ein präzises Angebot für Ihr Fahrzeug. Rufen Sie 0944 122 224 an.' }
		],
		relatedH2: 'Ähnliche Leistungen',
		related: [
			{ href: '/', label: 'Startseite →' },
			{ href: '/vymena-rozvodov-bratislava', label: 'Zahnriemenwechsel Bratislava →' },
			{ href: '/vymena-brzd-bratislava', label: 'Bremsenwechsel Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'HU-Vorbereitung →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Kfz-Diagnose →' },
			{ href: '/autoservis-vrakuna', label: 'Autoservice Vrakuňa →' }
		],
		ctaTitle: 'Buchen Sie Ihren Service',
		ctaText: 'Rufen Sie an oder schreiben Sie auf WhatsApp – wir beraten Sie, erstellen ein Angebot und vereinbaren einen Service-Termin in Podunajské Biskupice.',
		waText: 'Guten Tag, ich habe Interesse an Autoservice. Mein Fahrzeug ist: '
	},

	hr: {
		metaTitle: 'Autoservis Podunajské Biskupice | MUDROCH MOTORWORXX',
		metaDescription:
			'Autoservis u Podunajské Biskupice – sveobuhvatan servis vozila, zamjena zupčastog remena i kočnica, amortizeri, ispuh, dijagnostika i priprema za tehnički pregled. Adresa Závodná 10143/26, nudimo i mobilni autoservis. Nazovite: 0944 122 224',
		breadcrumbHome: 'Početna',
		breadcrumbCurrent: 'Autoservis Podunajské Biskupice',
		heroH1: 'Autoservis',
		heroH1Accent: 'Podunajské Biskupice',
		heroLede:
			'Vaš pouzdani <strong>autoservis u Podunajské Biskupice</strong> na adresi <strong>Závodná 10143/26</strong>. Pružamo kompletan servis vašeg vozila – <strong>zamjena zupčastog remena i kočnica</strong>, amortizeri, ispuh, dijagnostika i <strong>priprema za tehnički pregled</strong>. Smješteni smo direktno u Podunajské Biskupice, blizu Vrakunská ceste, i nudimo mobilni autoservis.',
		answer:
			'Naš <strong>autoservis nalazi se u Podunajské Biskupice</strong> na adresi Závodná 10143/26 – obavljamo kompletan servis od <strong>zamjene zupčastog remena i kočnica</strong> preko amortizera i ispuha do dijagnostike i pripreme za tehnički pregled. Nazovite <strong>0944 122 224</strong> i dogovorite termin.',
		callBtn: 'Nazovite',
		badges: ['Závodná 10143/26', 'Mobilni servis', 'Tehnički pregled'],
		whenH2: 'Zašto autoservis u Podunajské Biskupice',
		whenProse:
			'<p>Naš autoservis se nalazi direktno u <strong>Podunajské Biskupice</strong> na adresi <strong>Závodná 10143/26</strong> – skladišni prostori u srcu gradskog četvrti, lako dostupni s Vrakunská ceste i Einsteinove ulice. Iako nije showroom, ovdje rješavamo sve što vašem automobilu treba.</p><p>Osim fiksne lokacije, nudimo <strong>mobilni autoservis</strong> – ako preferirate popravke kod kuće ili na poslu, samo nazovite. Naša lokacija nam omogućava brzu uslugu cijelih Podunajské Biskupice, Vrakuňe i drugih dijelova Bratislave.</p>',
		symptomsH2: 'Kompletan spektar autoservisa',
		symptomsProse:
			'Nudimo puni spektar servisnih poslova – od redovnog održavanja do zahtjevnih popravaka motora. U autoservisu Podunajské Biskupice možete obaviti sve što vašem vozilu treba.',
		symptomsList: [
			'Zamjena zupčastog remena (remen i lanac)',
			'Zamjena i servis kočnica (pločice, diskovi, tekućina)',
			'Zamjena amortizera',
			'Popravak ispušnog sustava',
			'Dijagnostika motora i elektronike',
			'Priprema za tehnički pregled i emisije',
			'Servis podvozja i osovina',
			'Provjera i zamjena tekućina'
		],
		includesH2: 'Što možete obaviti kod nas',
		includesProse:
			'Naš autoservis u Podunajské Biskupice pokriva sve osnovne i napredne popravke. Ne morate ići na više mjesta – sve obavite kod nas.',
		includesCards: [
			{ h3: 'Zupčasti remen i kočnice', p: 'Stručna zamjena zupčastog remena ili lanca, servis kočionog sustava – pločice, diskovi, čeljusti, tekućina i dijagnostika kočnica.' },
			{ h3: 'Amortizeri i ovjes', p: 'Zamjena amortizera prednje i stražnje osovine, dijagnostika podvozja i popravak sustava ovjesa za udobnu i sigurnu vožnju.' },
			{ h3: 'Ispuh i emisije', p: 'Popravak ispušnog sustava, provjera katalizatora, zamjena brtvi ili dijelova ispuha, mjerenja za pripremu testa emisija.' },
			{ h3: 'Tehnički pregled i dijagnostika', p: 'Priprema za tehnički pregled i test emisija – provjeravamo što treba napraviti, popravljamo i pripremamo vaš auto za uspješan tehnički pregled.' }
		],
		priceH2: 'Ponuda unaprijed',
		priceProse:
			'<p>Cijena servisa ovisi o konkretnom poslu i modelu vozila – radi li se o zamjeni zupčastog remena, kočnica, amortizera ili pripremi za tehnički pregled. U svakom slučaju dobit ćete <strong>poštenu ponudu unaprijed</strong>, bez skrivenih troškova.</p><p>Pošaljite nam <strong>registarsku oznaku ili VIN</strong> i opišite što trebate – pripremit ćemo točnu ponudu za vaš slučaj. Autoservis Podunajské Biskupice temelji se na transparentnosti i povjerenju.</p>',
		whyH2: 'Zašto odabrati naš autoservis',
		whyCards: [
			{ h3: 'Direktno u Podunajské Biskupice', p: 'Smješteni na Závodná 10143/26 – skladišni prostori direktno u gradskoj četvrti, lako dostupni s Vrakunská ceste i okolice.' },
			{ h3: 'Mobilni autoservis', p: 'Osim fiksne lokacije, nudimo mobilni servis – možemo obaviti popravke kod vas doma ili na poslu ako vam to više odgovara.' },
			{ h3: 'Sveobuhvatne usluge na jednom mjestu', p: 'Od zamjene zupčastog remena, kočnica i amortizera do pripreme za tehnički pregled – sve obavite kod nas, ne trebate više servisa.' },
			{ h3: 'Poštene cijene i kvalitetni dijelovi', p: 'Koristimo provjerene rezervne dijelove prema specifikaciji vašeg vozila, uvijek dobijate ponudu unaprijed i jamstvo na obavljeni rad.' }
		],
		faqH2: 'Česta pitanja – autoservis Podunajské Biskupice',
		faq: [
			{ q: 'Gdje se točno nalazite?', a: 'Naš autoservis se nalazi na adresi Závodná 10143/26, Podunajské Biskupice, Bratislava. To su skladišni prostori (ne showroom), lako dostupni s Vrakunská ceste i Einsteinove ulice. Točne GPS koordinate dat ćemo vam pri rezervaciji.' },
			{ q: 'Moram li rezervirati unaprijed?', a: 'Preporučujemo rezervaciju unaprijed na broj 0944 122 224 ili preko WhatsApp-a – tako možemo pripremiti sve potrebno, dogovoriti termin i osigurati da vaš auto popravimo što brže.' },
			{ q: 'Nudite li mobilni autoservis?', a: 'Da, nudimo mobilni autoservis diljem Bratislave. Ako preferirate popravke kod kuće ili na poslu, nazovite i dogovorit ćemo detalje – većinu rutinskih servisnih poslova možemo obaviti na licu mjesta.' },
			{ q: 'Koje marke automobila popravljate?', a: 'Popravljamo sve marke automobila – VW, Škoda, Audi, Ford, Opel, Peugeot, Renault, Mercedes, BMW i druge. Svakom vozilu pristupamo individualno i koristimo rezervne dijelove prema proizvođaču.' },
			{ q: 'Radite li pripremu za tehnički pregled?', a: 'Da, pružamo sveobuhvatnu pripremu za tehnički pregled i test emisija. Provjeravamo stanje, popravljamo što je potrebno i pripremamo auto da prođe pregled bez problema.' },
			{ q: 'Koliko košta servis u Podunajské Biskupice?', a: 'Cijena ovisi o vrsti servisa i modelu automobila – radi li se o zamjeni zupčastog remena, kočnica, amortizera ili dijagnostici. Pošaljite nam registarsku oznaku ili VIN i opišite problem – pripremit ćemo točnu ponudu za vaše vozilo. Nazovite 0944 122 224.' }
		],
		relatedH2: 'Povezane usluge',
		related: [
			{ href: '/', label: 'Početna →' },
			{ href: '/vymena-rozvodov-bratislava', label: 'Zamjena zupčastog remena Bratislava →' },
			{ href: '/vymena-brzd-bratislava', label: 'Zamjena kočnica Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'Priprema za tehnički pregled →' },
			{ href: '/diagnostika-aut-bratislava', label: 'Dijagnostika vozila →' },
			{ href: '/autoservis-vrakuna', label: 'Autoservis Vrakuňa →' }
		],
		ctaTitle: 'Naručite servis',
		ctaText: 'Nazovite ili pišite na WhatsApp – savjetovat ćemo vas, pripremiti ponudu i dogovoriti termin servisa u Podunajské Biskupice.',
		waText: 'Dobar dan, zanima me autoservis. Moje vozilo je: '
	}
};
