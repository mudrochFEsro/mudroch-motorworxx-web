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
	heroLede: string; // HTML (obsahuje <strong>)
	answer?: string; // HTML – priama odpoveď (answer-first blok pre AI/AEO)
	callBtn: string;
	badges: string[];
	whenH2: string;
	whenProse: string; // HTML
	symptomsH2: string;
	symptomsProse: string; // HTML
	symptomsList: string[];
	includesH2: string;
	includesProse: string; // HTML
	includesCards: Card[]; // 4 (poradie = ikony v šablóne)
	priceH2: string;
	priceProse: string; // HTML
	whyH2: string;
	whyCards: Card[]; // 4
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
		metaTitle: 'Výmena rozvodov Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Výmena rozvodov Bratislava – rozvodový remeň aj reťaz, výmena vodnej pumpy a diagnostika motora. Odborný servis rozvodov v Podunajských Biskupiciach. Zavolajte: 0944 122 224',
		breadcrumbHome: 'Domov',
		breadcrumbCurrent: 'Výmena rozvodov Bratislava',
		heroH1: 'Výmena rozvodov',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Profesionálna <strong>výmena rozvodov</strong> pre všetky značky áut v Bratislave – Podunajských Biskupiciach. Meníme <strong>rozvodový remeň</strong> aj <strong>rozvodovú reťaz</strong>, vrátane vodnej pumpy, kladiek a napínákov. Servis rozvodov robíme presne podľa predpisov výrobcu a s kvalitnými dielmi.',
		answer:
			'<strong>Výmena rozvodov</strong> je jednou z našich hlavných špecializácií – v Bratislave – Podunajských Biskupiciach meníme <strong>rozvodový remeň</strong> aj <strong>rozvodovú reťaz</strong> pre všetky značky, vždy spolu s vodnou pumpou, kladkami a napínákmi podľa predpisov výrobcu. Zavolajte na <strong>0944 122 224</strong> a pripravíme vám nezáväznú cenovú ponuku na mieru.',
		callBtn: 'Zavolať',
		badges: ['Remeň aj reťaz', 'Vodná pumpa v jednom', 'Diagnostika motora'],
		whenH2: 'Kedy meniť rozvody?',
		whenProse:
			'<p><strong>Interval výmeny rozvodov</strong> určuje výrobca vozidla – najčastejšie v rozmedzí <strong>60 000 – 180 000 km</strong> alebo po <strong>5 – 7 rokoch</strong>, podľa modelu a typu motora. Rozvody motora sú kritický komponent: ak sa zanedbajú, hrozí pretrhnutie rozvodového remeňa – alebo natiahnutie a preskočenie rozvodovej reťaze – a nákladná oprava motora.</p><p>Ak neviete, kedy boli rozvody menené naposledy, alebo kupujete jazdené auto, radšej si nechajte urobiť <strong>kontrolu a diagnostiku motora</strong>. V servise MUDROCH MOTORWORXX v Bratislave vám stav rozvodov posúdime a odporučíme termín výmeny.</p>',
		symptomsH2: 'Príznaky opotrebovaných rozvodov',
		symptomsProse:
			'Nasledujúce príznaky signalizujú, že rozvody potrebujú kontrolu alebo výmenu. Pri <strong>hlučných rozvodoch</strong> neváhajte – včasná oprava rozvodov je vždy lacnejšia ako oprava motora.',
		symptomsList: [
			'Hlučné rozvody – klepot, pískanie alebo hrkot spredu motora',
			'Nepravidelný chod motora či strata výkonu',
			'Ťažké alebo dlhé štartovanie',
			'Rozsvietená kontrolka motora (check engine)',
			'Únik oleja v okolí krytu rozvodov',
			'Vibrácie a trhanie pri jazde'
		],
		includesH2: 'Čo zahŕňa výmena rozvodov',
		includesProse:
			'Robíme kompletný <strong>servis rozvodov</strong> – nie len samotný remeň. Pri výmene rozvodového remeňa vždy meníme aj súvisiace diely – <strong>vodnú pumpu</strong>, kladky a napínák – aby výmena vydržala celý interval výmeny rozvodov.',
		includesCards: [
			{ h3: 'Výmena rozvodového remeňa', p: 'Nový rozvodový remeň, kladky a napínák podľa špecifikácie výrobcu vášho motora.' },
			{ h3: 'Výmena rozvodovej reťaze', p: 'Reťazové rozvody vrátane napínákov, vodítok a tesnení – kompletná výmena rozvodovej reťaze.' },
			{ h3: 'Výmena vodnej pumpy', p: 'Ak vodnú pumpu poháňa rozvod, vymeníme ju v jednom – ušetríte prácu aj peniaze.' },
			{ h3: 'Diagnostika motora', p: 'Počítačová diagnostika motora pred aj po výmene – istota, že je všetko v poriadku.' }
		],
		priceH2: 'Cena výmeny rozvodov',
		priceProse:
			'<p><strong>Cena výmeny rozvodov</strong> sa líši podľa značky a modelu auta, typu motora a rozsahu prác – či ide o výmenu rozvodového remeňa alebo rozvodovej reťaze a či sa súčasne mení vodná pumpa, kladky a napínáky.</p><p>Nechceme strašiť ani lákať na nereálne čísla. Pošlite nám <strong>ŠPZ alebo VIN</strong> vozidla a pripravíme vám <strong>presnú a férovú cenovú ponuku</strong> na mieru – bez skrytých poplatkov.</p>',
		whyH2: 'Prečo výmenu rozvodov zveriť nám',
		whyCards: [
			{ h3: 'Skúsenosti so všetkými značkami', p: 'Servis rozvodov osobných aj úžitkových vozidiel – benzín aj diesel, remeň aj reťaz.' },
			{ h3: 'Kvalitné náhradné diely', p: 'Používame overené značkové sady rozvodov podľa špecifikácie výrobcu vášho motora.' },
			{ h3: 'Férová cena a záruka', p: 'Presná cenová ponuka vopred, žiadne prekvapenia a záruka na vykonanú prácu.' },
			{ h3: 'Mobilný autoservis v Bratislave', p: 'Sme mobilný autoservis so sídlom v Podunajských Biskupiciach – väčšinu výmen rozvodov vybavíme do jedného dňa.' }
		],
		faqH2: 'Časté otázky – výmena rozvodov',
		faq: [
			{ q: 'Koľko stojí výmena rozvodov v Bratislave?', a: 'Cena výmeny rozvodov závisí od značky a modelu vozidla, typu motora a od toho, či meníte rozvodový remeň alebo rozvodovú reťaz a či sa súčasne mení vodná pumpa. Pošlite nám ŠPZ alebo VIN a pripravíme vám presnú cenovú ponuku. Volajte 0944 122 224.' },
			{ q: 'Kedy treba meniť rozvody?', a: 'Interval výmeny rozvodov predpisuje výrobca – zvyčajne po 60 000 až 180 000 km alebo po 5 až 7 rokoch, podľa modelu. Presný interval nájdete v servisnej knižke. Pri pochybnostiach rozvody skontrolujeme a odporučíme termín výmeny.' },
			{ q: 'Rozvodový remeň alebo reťaz – aký je rozdiel?', a: 'Rozvodový remeň je gumený a mení sa v pravidelnom intervale predpísanom výrobcom, zvyčajne aj s vodnou pumpou, kladkami a napínákom. Rozvodová reťaz je kovová a vydrží spravidla dlhšie, no ani ona nie je večná – časom sa naťahuje, opotrebuje sa napínák a vodítka, a pri zanedbaní môže preskočiť a poškodiť motor. V MUDROCH MOTORWORXX riešime kompletne oba typy rozvodov.' },
			{ q: 'Aké sú príznaky opotrebovaných rozvodov?', a: 'Typické príznaky sú hlučné rozvody (klepot alebo pískanie spredu motora), nepravidelný chod motora, ťažšie štartovanie či rozsvietená kontrolka motora. Pri akomkoľvek podozrení odporúčame okamžitú diagnostiku motora – pretrhnutý rozvodový remeň dokáže zničiť celý motor.' },
			{ q: 'Čo sa stane, ak praskne rozvodový remeň?', a: 'Pri väčšine moderných motorov (tzv. interferenčných) pretrhnutie rozvodového remeňa spôsobí zrážku ventilov s piestami a rozsiahle poškodenie motora. Následná oprava motora je násobne drahšia ako včasná výmena rozvodov, preto interval neodkladajte.' },
			{ q: 'Mám pri výmene rozvodov meniť aj vodnú pumpu?', a: 'Áno, odporúčame to. Pri mnohých motoroch vodnú pumpu poháňa rozvodový remeň a jej výmena je pri už rozobratom rozvode výrazne lacnejšia. Spoločná výmena rozvodov a vodnej pumpy vám ušetrí prácu aj peniaze do budúcna.' },
			{ q: 'Ako dlho trvá výmena rozvodov?', a: 'Väčšinu výmen rozvodov zvládneme do jedného pracovného dňa. Presný čas závisí od modelu a rozsahu (remeň, reťaz, vodná pumpa, kladky, napínák). Termín aj dobu odstávky vám povieme vopred pri objednaní.' },
			{ q: 'Robíte výmenu rozvodovej reťaze?', a: 'Áno. Vykonávame výmenu rozvodového remeňa aj výmenu rozvodovej reťaze vrátane napínákov, kladiek a tesnení. Reťazové rozvody riešime kompletne aj s prípadnou opravou motora, ak si to stav vyžaduje.' }
		],
		relatedH2: 'Súvisiace služby',
		related: [
			{ href: '/vymena-brzd-bratislava', label: 'Výmena bŕzd Bratislava →' },
			{ href: '/#services', label: 'Všetky služby →' },
			{ href: '/#contact', label: 'Kontakt a otváracie hodiny →' }
		],
		ctaTitle: 'Objednajte výmenu rozvodov',
		ctaText: 'Zavolajte alebo napíšte na WhatsApp – poradíme, pripravíme cenovú ponuku a dohodneme termín.',
		waText: 'Dobrý deň, mám záujem o výmenu rozvodov. Moje vozidlo je: '
	},

	en: {
		metaTitle: 'Timing Belt Replacement Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Timing belt & chain replacement in Bratislava – water pump replacement and engine diagnostics. Expert timing service in Podunajské Biskupice. Call: 0944 122 224',
		breadcrumbHome: 'Home',
		breadcrumbCurrent: 'Timing Belt Replacement Bratislava',
		heroH1: 'Timing belt replacement',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Professional <strong>timing belt replacement</strong> for all car brands in Bratislava – Podunajské Biskupice. We replace both the <strong>timing belt</strong> and the <strong>timing chain</strong>, including the water pump, pulleys and tensioners. We service the timing system exactly to the manufacturer’s specifications and with quality parts.',
		answer:
			'<strong>Timing belt replacement</strong> is one of our core specialities – in Bratislava – Podunajské Biskupice we replace both the <strong>timing belt</strong> and the <strong>timing chain</strong> for all brands, always together with the water pump, pulleys and tensioner, exactly to the manufacturer’s specification. Call <strong>0944 122 224</strong> and we’ll prepare a free, tailored quote.',
		callBtn: 'Call',
		badges: ['Belt & chain', 'Water pump included', 'Engine diagnostics'],
		whenH2: 'When should the timing belt be replaced?',
		whenProse:
			'<p>The <strong>timing belt replacement interval</strong> is set by the vehicle manufacturer – usually between <strong>60,000 – 180,000 km</strong> or every <strong>5 – 7 years</strong>, depending on the model and engine type. The timing system is a critical component: if neglected, the timing belt can snap – or a timing chain can stretch and jump – causing costly engine damage.</p><p>If you don’t know when the timing belt was last replaced, or you’re buying a used car, it’s better to have a <strong>check-up and engine diagnostics</strong> done. At MUDROCH MOTORWORXX in Bratislava we assess the condition of your timing system and recommend a replacement date.</p>',
		symptomsH2: 'Signs of a worn timing system',
		symptomsProse:
			'The following signs indicate that the timing system needs a check or replacement. Don’t hesitate with a <strong>noisy timing system</strong> – timely repair is always cheaper than engine repair.',
		symptomsList: [
			'Noisy timing – knocking, whistling or rattling from the front of the engine',
			'Rough engine running or loss of power',
			'Hard or long starting',
			'Illuminated engine warning light (check engine)',
			'Oil leak around the timing cover',
			'Vibration and jerking while driving'
		],
		includesH2: 'What timing belt replacement includes',
		includesProse:
			'We provide a complete <strong>timing service</strong> – not just the belt itself. With every timing belt replacement we also renew the related parts – the <strong>water pump</strong>, pulleys and tensioner – so the job lasts the whole timing belt interval.',
		includesCards: [
			{ h3: 'Timing belt replacement', p: 'A new timing belt, pulleys and tensioner to your engine manufacturer’s specification.' },
			{ h3: 'Timing chain replacement', p: 'Chain-driven timing including tensioners, guides and seals – a complete timing chain replacement.' },
			{ h3: 'Water pump replacement', p: 'If the water pump is driven by the timing belt, we replace it at the same time – saving you labour and money.' },
			{ h3: 'Engine diagnostics', p: 'Computer engine diagnostics before and after the job – certainty that everything is in order.' }
		],
		priceH2: 'Timing belt replacement price',
		priceProse:
			'<p>The <strong>price of a timing belt replacement</strong> varies by the car’s make and model, engine type and scope of work – whether it’s a timing belt or a timing chain, and whether the water pump, pulleys and tensioners are replaced at the same time.</p><p>We won’t scare you or lure you with unrealistic figures. Send us the <strong>licence plate or VIN</strong> of your vehicle and we’ll prepare a <strong>precise, fair quote</strong> tailored to you – with no hidden fees.</p>',
		whyH2: 'Why entrust your timing belt replacement to us',
		whyCards: [
			{ h3: 'Experience with all brands', p: 'Timing service for passenger and utility vehicles – petrol and diesel, belt and chain.' },
			{ h3: 'Quality spare parts', p: 'We use proven branded timing kits to your engine manufacturer’s specification.' },
			{ h3: 'Fair price and warranty', p: 'A precise quote up front, no surprises and a warranty on the work carried out.' },
			{ h3: 'Mobile car service in Bratislava', p: 'We are a mobile car service based in Podunajské Biskupice – most timing belt jobs are done within one day.' }
		],
		faqH2: 'Frequently asked questions – timing belt replacement',
		faq: [
			{ q: 'How much does a timing belt replacement in Bratislava cost?', a: 'The price depends on the make and model, engine type and whether you replace a timing belt or chain and whether the water pump is replaced at the same time. Send us your licence plate or VIN and we’ll prepare an exact quote. Call 0944 122 224.' },
			{ q: 'When should the timing belt be replaced?', a: 'The interval is prescribed by the manufacturer – usually every 60,000 to 180,000 km or every 5 to 7 years, depending on the model. You’ll find the exact interval in the service book. If in doubt, we’ll check the timing system and recommend a replacement date.' },
			{ q: 'Timing belt or chain – what’s the difference?', a: 'A timing belt is made of rubber and must be replaced at the manufacturer’s set interval, usually together with the water pump, pulleys and tensioner. A timing chain is metal and generally lasts longer, but it is not maintenance-free either – over time it stretches, the tensioner and guides wear, and a neglected chain can jump and damage the engine. At MUDROCH MOTORWORXX we service both types of timing system completely.' },
			{ q: 'What are the symptoms of a worn timing system?', a: 'Typical symptoms are a noisy timing system (knocking or whistling from the front of the engine), rough running, harder starting or an illuminated engine light. At any suspicion we recommend immediate engine diagnostics – a snapped timing belt can destroy the whole engine.' },
			{ q: 'What happens if the timing belt snaps?', a: 'On most modern (so-called interference) engines a snapped timing belt causes the valves to collide with the pistons and extensive engine damage. The subsequent engine repair is many times more expensive than a timely timing belt replacement, so don’t postpone the interval.' },
			{ q: 'Should the water pump be replaced together with the timing belt?', a: 'Yes, we recommend it. On many engines the water pump is driven by the timing belt and replacing it while the timing is already apart is significantly cheaper. Replacing the timing belt and water pump together saves you work and money in the future.' },
			{ q: 'How long does a timing belt replacement take?', a: 'We handle most timing belt jobs within one working day. The exact time depends on the model and scope (belt, chain, water pump, pulleys, tensioner). We’ll tell you the date and downtime in advance when booking.' },
			{ q: 'Do you replace timing chains?', a: 'Yes. We replace both timing belts and timing chains including tensioners, guides and seals. We handle chain-driven timing completely, including any engine repair if the condition requires it.' }
		],
		relatedH2: 'Related services',
		related: [
			{ href: '/vymena-brzd-bratislava', label: 'Brake replacement Bratislava →' },
			{ href: '/#services', label: 'All services →' },
			{ href: '/#contact', label: 'Contact & opening hours →' }
		],
		ctaTitle: 'Book your timing belt replacement',
		ctaText: 'Call us or write on WhatsApp – we’ll advise you, prepare a quote and arrange an appointment.',
		waText: 'Hello, I’m interested in a timing belt replacement. My vehicle is: '
	},

	de: {
		metaTitle: 'Zahnriemenwechsel Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Zahnriemen- und Steuerkettenwechsel in Bratislava – Wasserpumpenwechsel und Motordiagnose. Fachgerechter Steuerungsservice in Podunajské Biskupice. Anrufen: 0944 122 224',
		breadcrumbHome: 'Startseite',
		breadcrumbCurrent: 'Zahnriemenwechsel Bratislava',
		heroH1: 'Zahnriemenwechsel',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Professioneller <strong>Zahnriemenwechsel</strong> für alle Fahrzeugmarken in Bratislava – Podunajské Biskupice. Wir wechseln sowohl den <strong>Zahnriemen</strong> als auch die <strong>Steuerkette</strong>, inklusive Wasserpumpe, Umlenkrollen und Spanner. Den Steuerungsservice führen wir genau nach Herstellervorgaben und mit hochwertigen Teilen durch.',
		answer:
			'Der <strong>Zahnriemenwechsel</strong> gehört zu unseren Kernkompetenzen – in Bratislava – Podunajské Biskupice wechseln wir sowohl den <strong>Zahnriemen</strong> als auch die <strong>Steuerkette</strong> für alle Marken, stets zusammen mit Wasserpumpe, Umlenkrollen und Spanner, genau nach Herstellervorgabe. Rufen Sie <strong>0944 122 224</strong> an und wir erstellen Ihnen ein kostenloses, maßgeschneidertes Angebot.',
		callBtn: 'Anrufen',
		badges: ['Riemen & Kette', 'Wasserpumpe inklusive', 'Motordiagnose'],
		whenH2: 'Wann sollte der Zahnriemen gewechselt werden?',
		whenProse:
			'<p>Das <strong>Zahnriemen-Wechselintervall</strong> gibt der Fahrzeughersteller vor – meist zwischen <strong>60.000 – 180.000 km</strong> oder alle <strong>5 – 7 Jahre</strong>, je nach Modell und Motortyp. Die Steuerung ist ein kritisches Bauteil: Wird sie vernachlässigt, kann der Zahnriemen reißen – oder eine Steuerkette sich längen und überspringen – und teure Motorschäden verursachen.</p><p>Wenn Sie nicht wissen, wann der Zahnriemen zuletzt gewechselt wurde, oder ein Gebrauchtwagen kaufen, lassen Sie lieber eine <strong>Kontrolle und Motordiagnose</strong> durchführen. Bei MUDROCH MOTORWORXX in Bratislava beurteilen wir den Zustand Ihrer Steuerung und empfehlen einen Wechseltermin.</p>',
		symptomsH2: 'Anzeichen einer verschlissenen Steuerung',
		symptomsProse:
			'Folgende Anzeichen deuten darauf hin, dass die Steuerung eine Kontrolle oder einen Wechsel braucht. Zögern Sie bei einer <strong>lauten Steuerung</strong> nicht – eine rechtzeitige Reparatur ist immer günstiger als eine Motorreparatur.',
		symptomsList: [
			'Laute Steuerung – Klappern, Pfeifen oder Rasseln vorne am Motor',
			'Unrunder Motorlauf oder Leistungsverlust',
			'Schweres oder langes Starten',
			'Leuchtende Motorkontrollleuchte (Check Engine)',
			'Ölaustritt im Bereich der Steuerungsabdeckung',
			'Vibrationen und Ruckeln beim Fahren'
		],
		includesH2: 'Was der Zahnriemenwechsel umfasst',
		includesProse:
			'Wir bieten einen kompletten <strong>Steuerungsservice</strong> – nicht nur den Riemen selbst. Bei jedem Zahnriemenwechsel erneuern wir auch die zugehörigen Teile – <strong>Wasserpumpe</strong>, Umlenkrollen und Spanner –, damit der Wechsel das ganze Zahnriemen-Intervall hält.',
		includesCards: [
			{ h3: 'Zahnriemenwechsel', p: 'Neuer Zahnriemen, Umlenkrollen und Spanner nach der Spezifikation Ihres Motorherstellers.' },
			{ h3: 'Steuerkettenwechsel', p: 'Kettengesteuerte Steuerung inkl. Spanner, Führungen und Dichtungen – kompletter Steuerkettenwechsel.' },
			{ h3: 'Wasserpumpenwechsel', p: 'Wird die Wasserpumpe vom Zahnriemen angetrieben, wechseln wir sie gleich mit – das spart Arbeit und Geld.' },
			{ h3: 'Motordiagnose', p: 'Computergestützte Motordiagnose vor und nach dem Wechsel – die Gewissheit, dass alles in Ordnung ist.' }
		],
		priceH2: 'Preis für den Zahnriemenwechsel',
		priceProse:
			'<p>Der <strong>Preis für den Zahnriemenwechsel</strong> hängt von Marke und Modell des Autos, dem Motortyp und dem Arbeitsumfang ab – ob es sich um einen Zahnriemen oder eine Steuerkette handelt und ob gleichzeitig Wasserpumpe, Umlenkrollen und Spanner gewechselt werden.</p><p>Wir wollen weder Angst machen noch mit unrealistischen Zahlen locken. Senden Sie uns das <strong>Kennzeichen oder die VIN</strong> Ihres Fahrzeugs und wir erstellen Ihnen ein <strong>präzises, faires Angebot</strong> nach Maß – ohne versteckte Gebühren.</p>',
		whyH2: 'Warum Sie uns den Zahnriemenwechsel anvertrauen sollten',
		whyCards: [
			{ h3: 'Erfahrung mit allen Marken', p: 'Steuerungsservice für Pkw und Nutzfahrzeuge – Benzin und Diesel, Riemen und Kette.' },
			{ h3: 'Hochwertige Ersatzteile', p: 'Wir verwenden bewährte Marken-Zahnriemensätze nach der Spezifikation Ihres Motorherstellers.' },
			{ h3: 'Fairer Preis und Garantie', p: 'Ein präzises Angebot im Voraus, keine Überraschungen und Garantie auf die ausgeführte Arbeit.' },
			{ h3: 'Mobiler Autoservice in Bratislava', p: 'Wir sind ein mobiler Autoservice mit Sitz in Podunajské Biskupice – die meisten Zahnriemenwechsel erledigen wir an einem Tag.' }
		],
		faqH2: 'Häufige Fragen – Zahnriemenwechsel',
		faq: [
			{ q: 'Wie viel kostet ein Zahnriemenwechsel in Bratislava?', a: 'Der Preis hängt von Marke und Modell, Motortyp und davon ab, ob Sie einen Zahnriemen oder eine Kette wechseln und ob gleichzeitig die Wasserpumpe gewechselt wird. Senden Sie uns Kennzeichen oder VIN und wir erstellen ein genaues Angebot. Rufen Sie 0944 122 224 an.' },
			{ q: 'Wann muss der Zahnriemen gewechselt werden?', a: 'Das Intervall gibt der Hersteller vor – meist alle 60.000 bis 180.000 km oder alle 5 bis 7 Jahre, je nach Modell. Das genaue Intervall finden Sie im Serviceheft. Im Zweifel prüfen wir die Steuerung und empfehlen einen Wechseltermin.' },
			{ q: 'Zahnriemen oder Steuerkette – was ist der Unterschied?', a: 'Ein Zahnriemen besteht aus Gummi und muss im vom Hersteller vorgegebenen Intervall gewechselt werden, meist zusammen mit Wasserpumpe, Umlenkrollen und Spanner. Eine Steuerkette ist aus Metall und hält in der Regel länger, ist aber nicht wartungsfrei – mit der Zeit längt sie sich, Spanner und Führungen verschleißen, und eine vernachlässigte Kette kann überspringen und den Motor beschädigen. Bei MUDROCH MOTORWORXX betreuen wir beide Arten der Steuerung komplett.' },
			{ q: 'Was sind die Anzeichen einer verschlissenen Steuerung?', a: 'Typische Anzeichen sind eine laute Steuerung (Klappern oder Pfeifen vorne am Motor), unrunder Lauf, schwereres Starten oder eine leuchtende Motorkontrollleuchte. Bei jedem Verdacht empfehlen wir eine sofortige Motordiagnose – ein gerissener Zahnriemen kann den ganzen Motor zerstören.' },
			{ q: 'Was passiert, wenn der Zahnriemen reißt?', a: 'Bei den meisten modernen (sogenannten Interferenz-)Motoren führt ein gerissener Zahnriemen zum Zusammenstoß der Ventile mit den Kolben und zu umfangreichen Motorschäden. Die anschließende Motorreparatur ist um ein Vielfaches teurer als ein rechtzeitiger Zahnriemenwechsel – schieben Sie das Intervall daher nicht auf.' },
			{ q: 'Soll die Wasserpumpe zusammen mit dem Zahnriemen gewechselt werden?', a: 'Ja, das empfehlen wir. Bei vielen Motoren wird die Wasserpumpe vom Zahnriemen angetrieben und ihr Wechsel ist bei bereits zerlegter Steuerung deutlich günstiger. Der gemeinsame Wechsel von Zahnriemen und Wasserpumpe spart Ihnen künftig Arbeit und Geld.' },
			{ q: 'Wie lange dauert ein Zahnriemenwechsel?', a: 'Die meisten Zahnriemenwechsel erledigen wir an einem Arbeitstag. Die genaue Zeit hängt von Modell und Umfang ab (Riemen, Kette, Wasserpumpe, Rollen, Spanner). Termin und Ausfallzeit teilen wir Ihnen bei der Buchung im Voraus mit.' },
			{ q: 'Wechseln Sie auch Steuerketten?', a: 'Ja. Wir wechseln sowohl Zahnriemen als auch Steuerketten inkl. Spanner, Führungen und Dichtungen. Kettengesteuerte Steuerungen bearbeiten wir komplett, bei Bedarf auch mit Motorreparatur.' }
		],
		relatedH2: 'Ähnliche Leistungen',
		related: [
			{ href: '/vymena-brzd-bratislava', label: 'Bremsenwechsel Bratislava →' },
			{ href: '/#services', label: 'Alle Leistungen →' },
			{ href: '/#contact', label: 'Kontakt & Öffnungszeiten →' }
		],
		ctaTitle: 'Buchen Sie Ihren Zahnriemenwechsel',
		ctaText: 'Rufen Sie uns an oder schreiben Sie auf WhatsApp – wir beraten Sie, erstellen ein Angebot und vereinbaren einen Termin.',
		waText: 'Guten Tag, ich habe Interesse an einem Zahnriemenwechsel. Mein Fahrzeug ist: '
	},

	hr: {
		metaTitle: 'Zamjena zupčastog remena Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Zamjena zupčastog remena i lanca u Bratislavi – zamjena vodene pumpe i dijagnostika motora. Stručni servis razvoda u Podunajské Biskupice. Nazovite: 0944 122 224',
		breadcrumbHome: 'Početna',
		breadcrumbCurrent: 'Zamjena zupčastog remena Bratislava',
		heroH1: 'Zamjena zupčastog remena',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Profesionalna <strong>zamjena zupčastog remena</strong> za sve marke vozila u Bratislavi – Podunajské Biskupice. Mijenjamo i <strong>zupčasti remen</strong> i <strong>zupčasti lanac</strong>, uključujući vodenu pumpu, remenice i zatezače. Servis razvoda obavljamo točno prema uputama proizvođača i s kvalitetnim dijelovima.',
		answer:
			'<strong>Zamjena zupčastog remena</strong> jedna je od naših glavnih specijalnosti – u Bratislavi – Podunajské Biskupice mijenjamo i <strong>zupčasti remen</strong> i <strong>zupčasti lanac</strong> za sve marke, uvijek zajedno s vodenom pumpom, remenicama i zatezačem, točno prema specifikaciji proizvođača. Nazovite <strong>0944 122 224</strong> i pripremit ćemo vam besplatnu ponudu po mjeri.',
		callBtn: 'Nazovite',
		badges: ['Remen i lanac', 'Vodena pumpa uključena', 'Dijagnostika motora'],
		whenH2: 'Kada mijenjati zupčasti remen?',
		whenProse:
			'<p><strong>Interval zamjene zupčastog remena</strong> određuje proizvođač vozila – najčešće između <strong>60.000 – 180.000 km</strong> ili svakih <strong>5 – 7 godina</strong>, ovisno o modelu i tipu motora. Razvod motora je kritična komponenta: ako se zanemari, prijeti pucanje zupčastog remena – ili istezanje i preskakanje zupčastog lanca – i skup popravak motora.</p><p>Ako ne znate kada je remen zadnji put mijenjan ili kupujete rabljeni automobil, radije obavite <strong>pregled i dijagnostiku motora</strong>. U servisu MUDROCH MOTORWORXX u Bratislavi procijenit ćemo stanje razvoda i preporučiti termin zamjene.</p>',
		symptomsH2: 'Znakovi istrošenog razvoda',
		symptomsProse:
			'Sljedeći znakovi ukazuju na to da razvod treba pregled ili zamjenu. Kod <strong>bučnog razvoda</strong> ne oklijevajte – pravovremeni popravak uvijek je jeftiniji od popravka motora.',
		symptomsList: [
			'Bučan razvod – lupanje, zviždanje ili štropot s prednje strane motora',
			'Nepravilan rad motora ili gubitak snage',
			'Otežano ili dugo pokretanje',
			'Upaljena kontrolna lampica motora (check engine)',
			'Curenje ulja oko poklopca razvoda',
			'Vibracije i trzanje pri vožnji'
		],
		includesH2: 'Što uključuje zamjena zupčastog remena',
		includesProse:
			'Obavljamo kompletan <strong>servis razvoda</strong> – ne samo remen. Pri svakoj zamjeni zupčastog remena mijenjamo i pripadajuće dijelove – <strong>vodenu pumpu</strong>, remenice i zatezač – kako bi zamjena izdržala cijeli interval remena.',
		includesCards: [
			{ h3: 'Zamjena zupčastog remena', p: 'Novi zupčasti remen, remenice i zatezač prema specifikaciji proizvođača vašeg motora.' },
			{ h3: 'Zamjena zupčastog lanca', p: 'Lančani razvod uključujući zatezače, vodilice i brtve – kompletna zamjena zupčastog lanca.' },
			{ h3: 'Zamjena vodene pumpe', p: 'Ako vodenu pumpu pokreće razvod, mijenjamo je odjednom – uštedjet ćete i rad i novac.' },
			{ h3: 'Dijagnostika motora', p: 'Računalna dijagnostika motora prije i nakon zamjene – sigurnost da je sve u redu.' }
		],
		priceH2: 'Cijena zamjene zupčastog remena',
		priceProse:
			'<p><strong>Cijena zamjene zupčastog remena</strong> razlikuje se ovisno o marki i modelu automobila, tipu motora i opsegu radova – radi li se o zamjeni remena ili lanca te mijenjaju li se istovremeno vodena pumpa, remenice i zatezači.</p><p>Ne želimo plašiti ni mamiti nerealnim brojkama. Pošaljite nam <strong>registarsku oznaku ili VIN</strong> vozila i pripremit ćemo vam <strong>točnu i poštenu ponudu</strong> po mjeri – bez skrivenih troškova.</p>',
		whyH2: 'Zašto zamjenu razvoda povjeriti nama',
		whyCards: [
			{ h3: 'Iskustvo sa svim markama', p: 'Servis razvoda osobnih i gospodarskih vozila – benzin i dizel, remen i lanac.' },
			{ h3: 'Kvalitetni rezervni dijelovi', p: 'Koristimo provjerene markirane komplete razvoda prema specifikaciji proizvođača vašeg motora.' },
			{ h3: 'Poštena cijena i jamstvo', p: 'Točna ponuda unaprijed, bez iznenađenja i jamstvo na obavljeni rad.' },
			{ h3: 'Mobilni autoservis u Bratislavi', p: 'Mi smo mobilni autoservis sa sjedištem u Podunajské Biskupice – većinu zamjena razvoda obavimo u jednom danu.' }
		],
		faqH2: 'Česta pitanja – zamjena zupčastog remena',
		faq: [
			{ q: 'Koliko košta zamjena zupčastog remena u Bratislavi?', a: 'Cijena ovisi o marki i modelu, tipu motora te o tome mijenjate li remen ili lanac i mijenja li se istovremeno vodena pumpa. Pošaljite nam registarsku oznaku ili VIN i pripremit ćemo točnu ponudu. Nazovite 0944 122 224.' },
			{ q: 'Kada treba mijenjati zupčasti remen?', a: 'Interval propisuje proizvođač – obično svakih 60.000 do 180.000 km ili svakih 5 do 7 godina, ovisno o modelu. Točan interval nalazi se u servisnoj knjižici. U slučaju sumnje pregledat ćemo razvod i preporučiti termin zamjene.' },
			{ q: 'Zupčasti remen ili lanac – u čemu je razlika?', a: 'Zupčasti remen izrađen je od gume i mijenja se u intervalu koji propisuje proizvođač, obično zajedno s vodenom pumpom, remenicama i zatezačem. Zupčasti lanac je metalni i u pravilu traje dulje, no ni on nije vječan – s vremenom se isteže, troše se zatezač i vodilice, a zanemareni lanac može preskočiti i oštetiti motor. U MUDROCH MOTORWORXX kompletno servisiramo obje vrste razvoda.' },
			{ q: 'Koji su znakovi istrošenog razvoda?', a: 'Tipični znakovi su bučan razvod (lupanje ili zviždanje s prednje strane motora), nepravilan rad, otežano pokretanje ili upaljena lampica motora. Kod svake sumnje preporučujemo hitnu dijagnostiku motora – puknuti zupčasti remen može uništiti cijeli motor.' },
			{ q: 'Što se dogodi ako pukne zupčasti remen?', a: 'Kod većine modernih (tzv. interferentnih) motora pucanje zupčastog remena uzrokuje sudar ventila s klipovima i opsežno oštećenje motora. Naknadni popravak motora višestruko je skuplji od pravovremene zamjene remena, zato ne odgađajte interval.' },
			{ q: 'Trebam li pri zamjeni remena mijenjati i vodenu pumpu?', a: 'Da, preporučujemo. Kod mnogih motora vodenu pumpu pokreće zupčasti remen, a njezina je zamjena uz već rastavljen razvod znatno jeftinija. Zajednička zamjena remena i vodene pumpe štedi vam rad i novac u budućnosti.' },
			{ q: 'Koliko traje zamjena zupčastog remena?', a: 'Većinu zamjena obavimo u jednom radnom danu. Točno vrijeme ovisi o modelu i opsegu (remen, lanac, vodena pumpa, remenice, zatezač). Termin i vrijeme mirovanja vozila reći ćemo vam unaprijed pri narudžbi.' },
			{ q: 'Radite li zamjenu zupčastog lanca?', a: 'Da. Obavljamo zamjenu i zupčastog remena i zupčastog lanca uključujući zatezače, vodilice i brtve. Lančani razvod rješavamo kompletno, uz eventualni popravak motora ako to stanje zahtijeva.' }
		],
		relatedH2: 'Povezane usluge',
		related: [
			{ href: '/vymena-brzd-bratislava', label: 'Zamjena kočnica Bratislava →' },
			{ href: '/#services', label: 'Sve usluge →' },
			{ href: '/#contact', label: 'Kontakt i radno vrijeme →' }
		],
		ctaTitle: 'Naručite zamjenu zupčastog remena',
		ctaText: 'Nazovite ili pišite na WhatsApp – savjetovat ćemo vas, pripremiti ponudu i dogovoriti termin.',
		waText: 'Dobar dan, zanima me zamjena zupčastog remena. Moje vozilo je: '
	}
};
