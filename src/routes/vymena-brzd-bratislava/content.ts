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
		metaTitle: 'Výmena bŕzd Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Výmena bŕzd Bratislava – brzdové platničky a kotúče, brzdový strmeň, brzdová kvapalina, odvzdušnenie a diagnostika bŕzd. Servis brzdového systému v Podunajských Biskupiciach. Volajte: 0944 122 224',
		breadcrumbHome: 'Domov',
		breadcrumbCurrent: 'Výmena bŕzd Bratislava',
		heroH1: 'Výmena bŕzd',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Bezpečná <strong>výmena bŕzd</strong> pre všetky značky áut v Bratislave – Podunajských Biskupiciach. Meníme <strong>brzdové platničky</strong> aj <strong>brzdové kotúče</strong>, riešime <strong>brzdový strmeň</strong>, výmenu <strong>brzdovej kvapaliny</strong> aj odvzdušnenie bŕzd. Kompletný servis brzdového systému s dôrazom na vašu bezpečnosť.',
		callBtn: 'Zavolať',
		badges: ['Platničky aj kotúče', 'Brzdová kvapalina', 'Diagnostika bŕzd', 'Kým čakáte'],
		whenH2: 'Kedy meniť brzdy?',
		whenProse:
			'<p><strong>Brzdové platničky</strong> sa zvyčajne menia po <strong>30 000 – 50 000 km</strong>, <strong>brzdové kotúče</strong> po <strong>60 000 – 90 000 km</strong> – závisí to od štýlu jazdy a typu vozidla. Brzdy sú najdôležitejší bezpečnostný prvok auta, preto ich stav netreba podceňovať.</p><p>Ak si nie ste istí stavom bŕzd, príďte na <strong>kontrolu bŕzd</strong> a diagnostiku brzdového systému. V servise MUDROCH MOTORWORXX v Bratislave brzdy skontrolujeme a odporučíme, čo treba vymeniť.</p>',
		symptomsH2: 'Príznaky opotrebovaných bŕzd',
		symptomsProse:
			'Tieto príznaky znamenajú, že brzdy potrebujú kontrolu alebo výmenu. Pri problémoch s brzdením neodkladajte návštevu servisu – ide o vašu bezpečnosť.',
		symptomsList: [
			'Pískanie alebo škrípanie pri brzdení',
			'Chvenie volantu alebo pedálu pri brzdení',
			'Mäkký alebo prepadávajúci sa brzdový pedál',
			'Dlhšia brzdná dráha',
			'Rozsvietená kontrolka bŕzd',
			'Auto ťahá pri brzdení na jednu stranu'
		],
		includesH2: 'Čo zahŕňa servis bŕzd',
		includesProse:
			'Robíme kompletnú <strong>opravu a servis brzdového systému</strong> – od bežnej výmeny platničiek až po opravu strmeňov a výmenu brzdovej kvapaliny.',
		includesCards: [
			{ h3: 'Výmena brzdových platničiek', p: 'Nové brzdové platničky na prednú aj zadnú nápravu, vrátane kontroly stavu kotúčov.' },
			{ h3: 'Výmena brzdových kotúčov', p: 'Výmena opotrebovaných či zdeformovaných brzdových kotúčov za nové kvalitné diely.' },
			{ h3: 'Brzdová kvapalina a odvzdušnenie', p: 'Výmena brzdovej kvapaliny a odvzdušnenie bŕzd pre pevný pedál a spoľahlivé brzdenie.' },
			{ h3: 'Diagnostika a strmene', p: 'Diagnostika bŕzd, oprava brzdového strmeňa a kontrola celého brzdového okruhu.' }
		],
		priceH2: 'Cena výmeny bŕzd',
		priceProse:
			'<p>Cena <strong>výmeny bŕzd</strong> závisí od modelu auta a rozsahu – či meníte len brzdové platničky, alebo aj brzdové kotúče, riešite brzdový strmeň či výmenu brzdovej kvapaliny.</p><p>Pošlite nám <strong>ŠPZ alebo VIN</strong> vozidla a pripravíme vám <strong>presnú a férovú cenovú ponuku</strong> na mieru – bez skrytých poplatkov.</p>',
		whyH2: 'Prečo brzdy zveriť nám',
		whyCards: [
			{ h3: 'Bezpečnosť na prvom mieste', p: 'Brzdy riešime dôkladne – kontrolujeme celý brzdový systém, nie len opotrebovaný diel.' },
			{ h3: 'Kvalitné náhradné diely', p: 'Používame overené brzdové platničky a kotúče podľa špecifikácie vášho vozidla.' },
			{ h3: 'Férová cena a záruka', p: 'Presná cenová ponuka vopred a záruka na vykonaný servis bŕzd.' },
			{ h3: 'Mobilný autoservis v Bratislave', p: 'Sme mobilný autoservis so sídlom v Podunajských Biskupiciach – bežnú výmenu bŕzd vybavíme často počas jednej návštevy.' }
		],
		faqH2: 'Časté otázky – výmena bŕzd',
		faq: [
			{ q: 'Koľko stojí výmena bŕzd v Bratislave?', a: 'Cena závisí od modelu vozidla a rozsahu – či ide len o výmenu brzdových platničiek, alebo aj brzdových kotúčov, prípadne o opravu brzdového strmeňa a výmenu brzdovej kvapaliny. Pošlite nám ŠPZ alebo VIN a pripravíme presnú cenovú ponuku. Volajte 0944 122 224.' },
			{ q: 'Kedy meniť brzdové platničky a kotúče?', a: 'Brzdové platničky sa zvyčajne menia po 30 000 – 50 000 km, brzdové kotúče po 60 000 – 90 000 km, no závisí to od štýlu jazdy. Ak počujete pískanie alebo škrípanie, cítite chvenie pri brzdení alebo dlhšiu brzdnú dráhu, príďte na kontrolu bŕzd.' },
			{ q: 'Aké sú príznaky opotrebovaných bŕzd?', a: 'Najčastejšie príznaky sú pískanie alebo škrípanie pri brzdení, chvenie volantu či pedálu, mäkký alebo prepadávajúci sa brzdový pedál, dlhšia brzdná dráha a rozsvietená kontrolka bŕzd. Pri týchto príznakoch odporúčame okamžitú diagnostiku bŕzd.' },
			{ q: 'Ako často meniť brzdovú kvapalinu?', a: 'Brzdovú kvapalinu odporúčame meniť približne každé 2 roky. Časom pohlcuje vlhkosť, čím klesá jej bod varu a zhoršuje sa účinnosť bŕzd. Súčasťou výmeny je aj odvzdušnenie bŕzd, aby v systéme nezostal vzduch.' },
			{ q: 'Čo je odvzdušnenie bŕzd a kedy je potrebné?', a: 'Odvzdušnenie bŕzd je odstránenie vzduchu z brzdového systému. Je potrebné po výmene brzdovej kvapaliny, po oprave brzdového systému alebo keď je brzdový pedál mäkký a „hubovitý". Zabezpečí pevný pedál a spoľahlivé brzdenie.' },
			{ q: 'Opravujete brzdové strmene?', a: 'Áno. Robíme opravu aj výmenu brzdového strmeňa vrátane zaseknutých piestikov a vodítok. Súčasťou servisu brzdového systému je kontrola strmeňov, hadičiek a celého okruhu, aby brzdy fungovali bezpečne.' },
			{ q: 'Ako dlho trvá výmena bŕzd?', a: 'Výmenu brzdových platničiek či kotúčov na jednej náprave zvládneme zvyčajne za pár hodín, často počas jednej návštevy. Presný čas a termín vám povieme vopred pri objednaní.' }
		],
		relatedH2: 'Súvisiace služby',
		related: [
			{ href: '/vymena-rozvodov-bratislava', label: 'Výmena rozvodov Bratislava →' },
			{ href: '/#services', label: 'Všetky služby →' },
			{ href: '/#contact', label: 'Kontakt a otváracie hodiny →' }
		],
		ctaTitle: 'Objednajte výmenu bŕzd',
		ctaText: 'Zavolajte alebo napíšte na WhatsApp – poradíme, pripravíme cenovú ponuku a dohodneme termín.',
		waText: 'Dobrý deň, mám záujem o výmenu bŕzd. Moje vozidlo je: '
	},

	en: {
		metaTitle: 'Brake Replacement Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Brake replacement in Bratislava – brake pads and discs, brake caliper, brake fluid, bleeding and brake diagnostics. Brake system service in Podunajské Biskupice. Call: 0944 122 224',
		breadcrumbHome: 'Home',
		breadcrumbCurrent: 'Brake Replacement Bratislava',
		heroH1: 'Brake replacement',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Safe <strong>brake replacement</strong> for all car brands in Bratislava – Podunajské Biskupice. We replace both <strong>brake pads</strong> and <strong>brake discs</strong>, repair the <strong>brake caliper</strong>, change the <strong>brake fluid</strong> and bleed the brakes. A complete brake system service focused on your safety.',
		callBtn: 'Call',
		badges: ['Pads & discs', 'Brake fluid', 'Brake diagnostics', 'While you wait'],
		whenH2: 'When should brakes be replaced?',
		whenProse:
			'<p><strong>Brake pads</strong> are usually replaced every <strong>30,000 – 50,000 km</strong>, <strong>brake discs</strong> every <strong>60,000 – 90,000 km</strong> – it depends on your driving style and vehicle type. Brakes are the most important safety component of a car, so don’t underestimate their condition.</p><p>If you’re unsure about the state of your brakes, come in for a <strong>brake check</strong> and brake system diagnostics. At MUDROCH MOTORWORXX in Bratislava we’ll inspect your brakes and recommend what needs replacing.</p>',
		symptomsH2: 'Signs of worn brakes',
		symptomsProse:
			'These signs mean the brakes need a check or replacement. Don’t postpone a service visit when you have braking problems – it’s about your safety.',
		symptomsList: [
			'Squealing or grinding when braking',
			'Vibration of the steering wheel or pedal when braking',
			'A soft or sinking brake pedal',
			'Longer stopping distance',
			'Illuminated brake warning light',
			'The car pulls to one side when braking'
		],
		includesH2: 'What the brake service includes',
		includesProse:
			'We provide a complete <strong>brake system repair and service</strong> – from a routine pad change to caliper repair and brake fluid replacement.',
		includesCards: [
			{ h3: 'Brake pad replacement', p: 'New brake pads for the front and rear axle, including a check of the discs’ condition.' },
			{ h3: 'Brake disc replacement', p: 'Replacement of worn or warped brake discs with new, quality parts.' },
			{ h3: 'Brake fluid & bleeding', p: 'Brake fluid replacement and brake bleeding for a firm pedal and reliable braking.' },
			{ h3: 'Diagnostics & calipers', p: 'Brake diagnostics, brake caliper repair and inspection of the whole brake circuit.' }
		],
		priceH2: 'Brake replacement price',
		priceProse:
			'<p>The price of a <strong>brake replacement</strong> depends on the car model and scope – whether you replace only the brake pads or the brake discs too, deal with the brake caliper or change the brake fluid.</p><p>Send us the <strong>licence plate or VIN</strong> of your vehicle and we’ll prepare a <strong>precise, fair quote</strong> tailored to you – with no hidden fees.</p>',
		whyH2: 'Why entrust your brakes to us',
		whyCards: [
			{ h3: 'Safety first', p: 'We handle brakes thoroughly – we inspect the whole brake system, not just the worn part.' },
			{ h3: 'Quality spare parts', p: 'We use proven brake pads and discs to your vehicle’s specification.' },
			{ h3: 'Fair price and warranty', p: 'A precise quote up front and a warranty on the brake service performed.' },
			{ h3: 'Mobile car service in Bratislava', p: 'We are a mobile car service based in Podunajské Biskupice – a routine brake replacement is often done during a single visit.' }
		],
		faqH2: 'Frequently asked questions – brake replacement',
		faq: [
			{ q: 'How much does a brake replacement in Bratislava cost?', a: 'The price depends on the vehicle model and scope – whether it’s just a brake pad replacement, or discs too, or a brake caliper repair and brake fluid change. Send us your licence plate or VIN and we’ll prepare an exact quote. Call 0944 122 224.' },
			{ q: 'When should brake pads and discs be replaced?', a: 'Brake pads are usually replaced every 30,000 – 50,000 km, brake discs every 60,000 – 90,000 km, but it depends on driving style. If you hear squealing or grinding, feel vibration when braking or a longer stopping distance, come for a brake check.' },
			{ q: 'What are the symptoms of worn brakes?', a: 'The most common symptoms are squealing or grinding when braking, vibration of the steering wheel or pedal, a soft or sinking brake pedal, a longer stopping distance and an illuminated brake light. With these symptoms we recommend immediate brake diagnostics.' },
			{ q: 'How often should brake fluid be changed?', a: 'We recommend changing brake fluid roughly every 2 years. Over time it absorbs moisture, which lowers its boiling point and worsens braking performance. The change also includes bleeding the brakes so no air remains in the system.' },
			{ q: 'What is brake bleeding and when is it needed?', a: 'Brake bleeding is the removal of air from the brake system. It’s needed after a brake fluid change, after a brake system repair, or when the pedal is soft and “spongy”. It ensures a firm pedal and reliable braking.' },
			{ q: 'Do you repair brake calipers?', a: 'Yes. We repair and replace brake calipers, including seized pistons and guides. The brake service includes a check of calipers, hoses and the whole circuit so the brakes work safely.' },
			{ q: 'How long does a brake replacement take?', a: 'We usually replace brake pads or discs on one axle within a few hours, often during a single visit. We’ll tell you the exact time and date in advance when booking.' }
		],
		relatedH2: 'Related services',
		related: [
			{ href: '/vymena-rozvodov-bratislava', label: 'Timing belt replacement Bratislava →' },
			{ href: '/#services', label: 'All services →' },
			{ href: '/#contact', label: 'Contact & opening hours →' }
		],
		ctaTitle: 'Book your brake replacement',
		ctaText: 'Call us or write on WhatsApp – we’ll advise you, prepare a quote and arrange an appointment.',
		waText: 'Hello, I’m interested in a brake replacement. My vehicle is: '
	},

	de: {
		metaTitle: 'Bremsenwechsel Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Bremsenwechsel in Bratislava – Bremsbeläge und Bremsscheiben, Bremssattel, Bremsflüssigkeit, Entlüften und Bremsendiagnose. Bremsen-Service in Podunajské Biskupice. Anrufen: 0944 122 224',
		breadcrumbHome: 'Startseite',
		breadcrumbCurrent: 'Bremsenwechsel Bratislava',
		heroH1: 'Bremsenwechsel',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Sicherer <strong>Bremsenwechsel</strong> für alle Fahrzeugmarken in Bratislava – Podunajské Biskupice. Wir wechseln sowohl <strong>Bremsbeläge</strong> als auch <strong>Bremsscheiben</strong>, reparieren den <strong>Bremssattel</strong>, wechseln die <strong>Bremsflüssigkeit</strong> und entlüften die Bremsen. Kompletter Bremsen-Service mit Fokus auf Ihre Sicherheit.',
		callBtn: 'Anrufen',
		badges: ['Beläge & Scheiben', 'Bremsflüssigkeit', 'Bremsendiagnose', 'Während Sie warten'],
		whenH2: 'Wann sollten die Bremsen gewechselt werden?',
		whenProse:
			'<p><strong>Bremsbeläge</strong> werden meist alle <strong>30.000 – 50.000 km</strong> gewechselt, <strong>Bremsscheiben</strong> alle <strong>60.000 – 90.000 km</strong> – abhängig von Fahrstil und Fahrzeugtyp. Bremsen sind das wichtigste Sicherheitsbauteil des Autos, ihren Zustand sollten Sie daher nicht unterschätzen.</p><p>Wenn Sie sich beim Zustand der Bremsen unsicher sind, kommen Sie zur <strong>Bremsenkontrolle</strong> und Diagnose des Bremssystems. Bei MUDROCH MOTORWORXX in Bratislava prüfen wir Ihre Bremsen und empfehlen, was gewechselt werden muss.</p>',
		symptomsH2: 'Anzeichen verschlissener Bremsen',
		symptomsProse:
			'Diese Anzeichen bedeuten, dass die Bremsen eine Kontrolle oder einen Wechsel brauchen. Schieben Sie einen Werkstattbesuch bei Bremsproblemen nicht auf – es geht um Ihre Sicherheit.',
		symptomsList: [
			'Quietschen oder Schleifen beim Bremsen',
			'Vibrieren von Lenkrad oder Pedal beim Bremsen',
			'Weiches oder durchsackendes Bremspedal',
			'Längerer Bremsweg',
			'Leuchtende Bremsen-Kontrollleuchte',
			'Das Auto zieht beim Bremsen zur Seite'
		],
		includesH2: 'Was der Bremsen-Service umfasst',
		includesProse:
			'Wir bieten eine komplette <strong>Reparatur und Wartung des Bremssystems</strong> – vom routinemäßigen Belagwechsel bis zur Sattelreparatur und zum Bremsflüssigkeitswechsel.',
		includesCards: [
			{ h3: 'Bremsbelagwechsel', p: 'Neue Bremsbeläge für Vorder- und Hinterachse, inkl. Prüfung des Scheibenzustands.' },
			{ h3: 'Bremsscheibenwechsel', p: 'Ersatz verschlissener oder verzogener Bremsscheiben durch neue, hochwertige Teile.' },
			{ h3: 'Bremsflüssigkeit & Entlüften', p: 'Bremsflüssigkeitswechsel und Entlüften der Bremsen für ein festes Pedal und zuverlässiges Bremsen.' },
			{ h3: 'Diagnose & Bremssättel', p: 'Bremsendiagnose, Reparatur des Bremssattels und Kontrolle des gesamten Bremskreises.' }
		],
		priceH2: 'Preis für den Bremsenwechsel',
		priceProse:
			'<p>Der Preis für einen <strong>Bremsenwechsel</strong> hängt vom Automodell und Umfang ab – ob Sie nur die Bremsbeläge oder auch die Bremsscheiben wechseln, den Bremssattel bearbeiten oder die Bremsflüssigkeit wechseln.</p><p>Senden Sie uns das <strong>Kennzeichen oder die VIN</strong> Ihres Fahrzeugs und wir erstellen Ihnen ein <strong>präzises, faires Angebot</strong> nach Maß – ohne versteckte Gebühren.</p>',
		whyH2: 'Warum Sie uns Ihre Bremsen anvertrauen sollten',
		whyCards: [
			{ h3: 'Sicherheit an erster Stelle', p: 'Wir bearbeiten Bremsen gründlich – wir prüfen das ganze Bremssystem, nicht nur das verschlissene Teil.' },
			{ h3: 'Hochwertige Ersatzteile', p: 'Wir verwenden bewährte Bremsbeläge und -scheiben nach der Spezifikation Ihres Fahrzeugs.' },
			{ h3: 'Fairer Preis und Garantie', p: 'Ein präzises Angebot im Voraus und Garantie auf den durchgeführten Bremsen-Service.' },
			{ h3: 'Mobiler Autoservice in Bratislava', p: 'Wir sind ein mobiler Autoservice mit Sitz in Podunajské Biskupice – einen routinemäßigen Bremsenwechsel erledigen wir oft bei einem einzigen Besuch.' }
		],
		faqH2: 'Häufige Fragen – Bremsenwechsel',
		faq: [
			{ q: 'Wie viel kostet ein Bremsenwechsel in Bratislava?', a: 'Der Preis hängt vom Fahrzeugmodell und Umfang ab – ob es nur ein Bremsbelagwechsel ist, oder auch Scheiben, oder eine Bremssattelreparatur und ein Bremsflüssigkeitswechsel. Senden Sie uns Kennzeichen oder VIN und wir erstellen ein genaues Angebot. Rufen Sie 0944 122 224 an.' },
			{ q: 'Wann sollten Bremsbeläge und -scheiben gewechselt werden?', a: 'Bremsbeläge werden meist alle 30.000 – 50.000 km gewechselt, Bremsscheiben alle 60.000 – 90.000 km, abhängig vom Fahrstil. Wenn Sie Quietschen oder Schleifen hören, Vibrationen beim Bremsen oder einen längeren Bremsweg spüren, kommen Sie zur Bremsenkontrolle.' },
			{ q: 'Was sind die Anzeichen verschlissener Bremsen?', a: 'Die häufigsten Anzeichen sind Quietschen oder Schleifen beim Bremsen, Vibrieren von Lenkrad oder Pedal, ein weiches oder durchsackendes Bremspedal, ein längerer Bremsweg und eine leuchtende Bremsen-Kontrollleuchte. Bei diesen Anzeichen empfehlen wir eine sofortige Bremsendiagnose.' },
			{ q: 'Wie oft sollte die Bremsflüssigkeit gewechselt werden?', a: 'Wir empfehlen, die Bremsflüssigkeit etwa alle 2 Jahre zu wechseln. Mit der Zeit nimmt sie Feuchtigkeit auf, wodurch ihr Siedepunkt sinkt und die Bremswirkung nachlässt. Zum Wechsel gehört auch das Entlüften der Bremsen, damit keine Luft im System bleibt.' },
			{ q: 'Was ist Bremsenentlüften und wann ist es nötig?', a: 'Bremsenentlüften ist das Entfernen von Luft aus dem Bremssystem. Es ist nötig nach einem Bremsflüssigkeitswechsel, nach einer Reparatur des Bremssystems oder wenn das Pedal weich und „schwammig“ ist. Es sorgt für ein festes Pedal und zuverlässiges Bremsen.' },
			{ q: 'Reparieren Sie Bremssättel?', a: 'Ja. Wir reparieren und wechseln Bremssättel, inkl. festsitzender Kolben und Führungen. Zum Bremsen-Service gehört die Kontrolle von Sätteln, Schläuchen und dem gesamten Kreis, damit die Bremsen sicher funktionieren.' },
			{ q: 'Wie lange dauert ein Bremsenwechsel?', a: 'Bremsbeläge oder -scheiben an einer Achse wechseln wir meist innerhalb weniger Stunden, oft bei einem einzigen Besuch. Die genaue Zeit und den Termin teilen wir Ihnen bei der Buchung im Voraus mit.' }
		],
		relatedH2: 'Ähnliche Leistungen',
		related: [
			{ href: '/vymena-rozvodov-bratislava', label: 'Zahnriemenwechsel Bratislava →' },
			{ href: '/#services', label: 'Alle Leistungen →' },
			{ href: '/#contact', label: 'Kontakt & Öffnungszeiten →' }
		],
		ctaTitle: 'Buchen Sie Ihren Bremsenwechsel',
		ctaText: 'Rufen Sie uns an oder schreiben Sie auf WhatsApp – wir beraten Sie, erstellen ein Angebot und vereinbaren einen Termin.',
		waText: 'Guten Tag, ich habe Interesse an einem Bremsenwechsel. Mein Fahrzeug ist: '
	},

	hr: {
		metaTitle: 'Zamjena kočnica Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Zamjena kočnica u Bratislavi – kočione pločice i diskovi, kočiona čeljust, kočiona tekućina, odzračivanje i dijagnostika kočnica. Servis kočionog sustava u Podunajské Biskupice. Nazovite: 0944 122 224',
		breadcrumbHome: 'Početna',
		breadcrumbCurrent: 'Zamjena kočnica Bratislava',
		heroH1: 'Zamjena kočnica',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Sigurna <strong>zamjena kočnica</strong> za sve marke vozila u Bratislavi – Podunajské Biskupice. Mijenjamo i <strong>kočione pločice</strong> i <strong>kočione diskove</strong>, rješavamo <strong>kočionu čeljust</strong>, zamjenu <strong>kočione tekućine</strong> i odzračivanje kočnica. Kompletan servis kočionog sustava s naglaskom na vašu sigurnost.',
		callBtn: 'Nazovite',
		badges: ['Pločice i diskovi', 'Kočiona tekućina', 'Dijagnostika kočnica', 'Dok čekate'],
		whenH2: 'Kada mijenjati kočnice?',
		whenProse:
			'<p><strong>Kočione pločice</strong> obično se mijenjaju svakih <strong>30.000 – 50.000 km</strong>, <strong>kočioni diskovi</strong> svakih <strong>60.000 – 90.000 km</strong> – ovisi o stilu vožnje i tipu vozila. Kočnice su najvažniji sigurnosni element automobila, pa njihovo stanje ne treba podcjenjivati.</p><p>Ako niste sigurni u stanje kočnica, dođite na <strong>pregled kočnica</strong> i dijagnostiku kočionog sustava. U servisu MUDROCH MOTORWORXX u Bratislavi pregledat ćemo kočnice i preporučiti što treba zamijeniti.</p>',
		symptomsH2: 'Znakovi istrošenih kočnica',
		symptomsProse:
			'Ovi znakovi znače da kočnice trebaju pregled ili zamjenu. Kod problema s kočenjem ne odgađajte posjet servisu – radi se o vašoj sigurnosti.',
		symptomsList: [
			'Piskanje ili škripanje pri kočenju',
			'Vibracije volana ili papučice pri kočenju',
			'Meka ili propadajuća papučica kočnice',
			'Duži zaustavni put',
			'Upaljena kontrolna lampica kočnica',
			'Vozilo vuče na jednu stranu pri kočenju'
		],
		includesH2: 'Što uključuje servis kočnica',
		includesProse:
			'Obavljamo kompletan <strong>popravak i servis kočionog sustava</strong> – od uobičajene zamjene pločica do popravka čeljusti i zamjene kočione tekućine.',
		includesCards: [
			{ h3: 'Zamjena kočionih pločica', p: 'Nove kočione pločice za prednju i stražnju osovinu, uključujući provjeru stanja diskova.' },
			{ h3: 'Zamjena kočionih diskova', p: 'Zamjena istrošenih ili deformiranih kočionih diskova novim, kvalitetnim dijelovima.' },
			{ h3: 'Kočiona tekućina i odzračivanje', p: 'Zamjena kočione tekućine i odzračivanje kočnica za čvrstu papučicu i pouzdano kočenje.' },
			{ h3: 'Dijagnostika i čeljusti', p: 'Dijagnostika kočnica, popravak kočione čeljusti i provjera cijelog kočionog kruga.' }
		],
		priceH2: 'Cijena zamjene kočnica',
		priceProse:
			'<p>Cijena <strong>zamjene kočnica</strong> ovisi o modelu automobila i opsegu – mijenjate li samo kočione pločice ili i kočione diskove, rješavate li kočionu čeljust ili zamjenu kočione tekućine.</p><p>Pošaljite nam <strong>registarsku oznaku ili VIN</strong> vozila i pripremit ćemo vam <strong>točnu i poštenu ponudu</strong> po mjeri – bez skrivenih troškova.</p>',
		whyH2: 'Zašto kočnice povjeriti nama',
		whyCards: [
			{ h3: 'Sigurnost na prvom mjestu', p: 'Kočnice rješavamo temeljito – provjeravamo cijeli kočioni sustav, ne samo istrošeni dio.' },
			{ h3: 'Kvalitetni rezervni dijelovi', p: 'Koristimo provjerene kočione pločice i diskove prema specifikaciji vašeg vozila.' },
			{ h3: 'Poštena cijena i jamstvo', p: 'Točna ponuda unaprijed i jamstvo na obavljeni servis kočnica.' },
			{ h3: 'Mobilni autoservis u Bratislavi', p: 'Mi smo mobilni autoservis sa sjedištem u Podunajské Biskupice – uobičajenu zamjenu kočnica često obavimo tijekom jednog posjeta.' }
		],
		faqH2: 'Česta pitanja – zamjena kočnica',
		faq: [
			{ q: 'Koliko košta zamjena kočnica u Bratislavi?', a: 'Cijena ovisi o modelu vozila i opsegu – radi li se samo o zamjeni kočionih pločica, ili i diskova, odnosno popravku kočione čeljusti i zamjeni kočione tekućine. Pošaljite nam registarsku oznaku ili VIN i pripremit ćemo točnu ponudu. Nazovite 0944 122 224.' },
			{ q: 'Kada mijenjati kočione pločice i diskove?', a: 'Kočione pločice obično se mijenjaju svakih 30.000 – 50.000 km, kočioni diskovi svakih 60.000 – 90.000 km, no ovisi o stilu vožnje. Ako čujete piskanje ili škripanje, osjećate vibracije pri kočenju ili duži zaustavni put, dođite na pregled kočnica.' },
			{ q: 'Koji su znakovi istrošenih kočnica?', a: 'Najčešći znakovi su piskanje ili škripanje pri kočenju, vibracije volana ili papučice, meka ili propadajuća papučica kočnice, duži zaustavni put i upaljena lampica kočnica. Kod ovih znakova preporučujemo hitnu dijagnostiku kočnica.' },
			{ q: 'Koliko često mijenjati kočionu tekućinu?', a: 'Kočionu tekućinu preporučujemo mijenjati otprilike svake 2 godine. S vremenom upija vlagu, čime joj pada vrelište i slabi učinkovitost kočnica. Dio zamjene je i odzračivanje kočnica kako u sustavu ne bi ostao zrak.' },
			{ q: 'Što je odzračivanje kočnica i kada je potrebno?', a: 'Odzračivanje kočnica je uklanjanje zraka iz kočionog sustava. Potrebno je nakon zamjene kočione tekućine, nakon popravka kočionog sustava ili kada je papučica meka i „spužvasta“. Osigurava čvrstu papučicu i pouzdano kočenje.' },
			{ q: 'Popravljate li kočione čeljusti?', a: 'Da. Popravljamo i mijenjamo kočione čeljusti, uključujući zaglavljene klipove i vodilice. Servis kočnica uključuje provjeru čeljusti, crijeva i cijelog kruga kako bi kočnice radile sigurno.' },
			{ q: 'Koliko traje zamjena kočnica?', a: 'Zamjenu kočionih pločica ili diskova na jednoj osovini obično obavimo za nekoliko sati, često tijekom jednog posjeta. Točno vrijeme i termin reći ćemo vam unaprijed pri narudžbi.' }
		],
		relatedH2: 'Povezane usluge',
		related: [
			{ href: '/vymena-rozvodov-bratislava', label: 'Zamjena zupčastog remena Bratislava →' },
			{ href: '/#services', label: 'Sve usluge →' },
			{ href: '/#contact', label: 'Kontakt i radno vrijeme →' }
		],
		ctaTitle: 'Naručite zamjenu kočnica',
		ctaText: 'Nazovite ili pišite na WhatsApp – savjetovat ćemo vas, pripremiti ponudu i dogovoriti termin.',
		waText: 'Dobar dan, zanima me zamjena kočnica. Moje vozilo je: '
	}
};
