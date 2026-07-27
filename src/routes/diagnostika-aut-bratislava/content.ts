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
		metaTitle: 'Diagnostika áut Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Diagnostika áut Bratislava – počítačová diagnostika vozidiel, vyčítanie chybových kódov, kontrolka motora, ABS, airbag. Diagnostika motora, elektroniky a podvozku OBD. Mobilný autoservis Podunajské Biskupice. Volajte: 0944 122 224',
		breadcrumbHome: 'Domov',
		breadcrumbCurrent: 'Diagnostika áut Bratislava',
		heroH1: 'Diagnostika áut',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Profesionálna <strong>počítačová diagnostika vozidiel</strong> pre všetky značky áut v Bratislave – Podunajských Biskupiciach. Vyčítame <strong>chybové kódy</strong>, riešime rozsvietené <strong>kontrolky motora</strong> (Check Engine), ABS, airbag a ďalšie. Diagnostika <strong>motora, elektroniky a podvozku</strong> cez <strong>OBD diagnostiku</strong>. Presná identifikácia porúch s odborným výkladom.',
		callBtn: 'Zavolať',
		badges: ['Vyčítanie chybových kódov', 'Kontrolky motora, ABS, airbag', 'Diagnostika OBD'],
		whenH2: 'Kedy treba na diagnostiku?',
		whenProse:
			'<p><strong>Počítačová diagnostika vozidiel</strong> je nevyhnutná vždy, keď sa rozsvietila <strong>kontrolka motora</strong> (Check Engine), ABS, airbag, ESP alebo iná výstražná kontrolka. Moderné vozidlá ukladajú chybové kódy do počítača – bez diagnostiky OBD nejde zistiť presnú príčinu poruchy.</p><p>Diagnostiku odporúčame aj pred <strong>kúpou ojazdeného auta</strong>, pred <strong>STK</strong>, pri zhoršených jazdných vlastnostiach alebo nárastu spotreby. V servise MUDROCH MOTORWORXX v Bratislave vám diagnostiku spravíme rýchlo a odborne vysvetlíme, čo auta trápi a aké riešenia sú možné.</p>',
		symptomsH2: 'Príznaky potreby diagnostiky',
		symptomsProse:
			'Tieto príznaky znamenajú, že vozidlo potrebuje počítačovú diagnostiku. Neodkladajte návštevu servisu – chybový kód často odhalí problém skôr, než dôjde k vážnej poruche.',
		symptomsList: [
			'Rozsvietená kontrolka motora (Check Engine Light)',
			'Kontrolka ABS, airbag, ESP alebo iných systémov',
			'Pokles výkonu motora alebo chod narýchlo',
			'Náhly nárast spotreby paliva',
			'Problémy pri štarte motora',
			'Nepravidelný chod motora alebo trhanie'
		],
		includesH2: 'Čo zahŕňa diagnostika áut',
		includesProse:
			'Robíme kompletnú <strong>počítačovú diagnostiku vozidiel</strong> – vyčítame a vymažeme chybové kódy, diagnostikujeme motor, elektroniku, podvozok a ďalšie systémy cez OBD diagnostiku.',
		includesCards: [
			{ h3: 'Vyčítanie chybových kódov OBD', p: 'Počítačové vyčítanie chybových kódov z riadiacej jednotky motora a ďalších modulov – zistíme, čo hlási auto.' },
			{ h3: 'Diagnostika motora a elektroniky', p: 'Podrobná diagnostika motora, vstrekového systému, zapaľovania, lambda sondy, EGR a ďalších komponentov.' },
			{ h3: 'Kontrolky: Check Engine, ABS, airbag', p: 'Diagnostika rozsvietených kontroliek – Check Engine Light, ABS, airbag, ESP, klimatizácia a iné systémy.' },
			{ h3: 'Výklad a odporúčanie riešenia', p: 'Odborný výklad chybových kódov – povieme vám, čo chyba znamená, aká je príčina a ako to treba opraviť.' }
		],
		priceH2: 'Cena diagnostiky áut',
		priceProse:
			'<p>Cena <strong>počítačovej diagnostiky vozidiel</strong> závisí od rozsahu – či ide len o vyčítanie chybových kódov pri rozsvietenej kontrolke, alebo o komplexnú diagnostiku motora, podvozku a elektroniky.</p><p>Pošlite nám <strong>ŠPZ alebo VIN</strong> vozidla a opíšte problém – pripravíme vám <strong>presnú a férovú cenovú ponuku</strong> na mieru. Pri objednaní opravy u nás je diagnostika často zdarma.</p>',
		whyH2: 'Prečo diagnostiku zveriť nám',
		whyCards: [
			{ h3: 'Profesionálne diagnostické prístroje', p: 'Používame kvalitné diagnostické prístroje s aktuálnymi databázami chybových kódov pre všetky značky áut.' },
			{ h3: 'Odborný výklad a poradenstvo', p: 'Diagnostiku nevykonávame mechanicky – povieme vám, čo chybové kódy znamenajú, aká je príčina a aké sú možnosti riešenia.' },
			{ h3: 'Férová cena a transparentnosť', p: 'Presná cenová ponuka vopred a žiadne predražené „odporúčané opravy" – povieme len to, čo je skutočne potrebné.' },
			{ h3: 'Mobilný autoservis v Bratislave', p: 'Sme mobilný autoservis so sídlom v Podunajských Biskupiciach – diagnostiku a bežné opravy vybavíme často počas jednej návštevy.' }
		],
		faqH2: 'Časté otázky – diagnostika áut',
		faq: [
			{ q: 'Koľko stojí diagnostika auta v Bratislave?', a: 'Cena závisí od rozsahu – základné vyčítanie chybových kódov začína od cca 20 – 30 €, komplexná diagnostika viacerých systémov je drahšia. Pri objednaní opravy u nás je diagnostika často zdarma. Pošlite nám ŠPZ alebo VIN a opíšte problém – pripravíme presnú cenovú ponuku. Volajte 0944 122 224.' },
			{ q: 'Čo je počítačová diagnostika vozidiel a OBD diagnostika?', a: 'Počítačová diagnostika vozidiel je vyčítanie chybových kódov z riadiacich jednotiek auta cez diagnostický port OBD (On-Board Diagnostics). Moderné autá ukladajú všetky poruchy do pamäte – diagnostika OBD vám povie presne, čo auto hlási a v ktorom systéme je problém.' },
			{ q: 'Čo znamená rozsvietená kontrolka motora (Check Engine)?', a: 'Rozsvietená kontrolka motora (Check Engine Light) znamená, že riadiaca jednotka zaznamenala chybu v systéme motora alebo emisií. Bez diagnostiky OBD nejde zistiť presnú príčinu – môže ísť od lambda sondy cez zapaľovanie až po vážnu poruchu motora. Príďte na diagnostiku čím skôr.' },
			{ q: 'Dokážete vymazať chybové kódy a zhasnúť kontrolku?', a: 'Áno, chybové kódy vieme vymazať a kontrolku zhasnúť – ale dôležité je zistiť príčinu. Ak chyba trvá, kontrolka sa znova rozsvieti. Najprv spravíme diagnostiku, povieme vám príčinu a odporučíme riešenie. Po oprave chybu vymažeme natrvalo.' },
			{ q: 'Čo všetko dokáže diagnostika odhaliť?', a: 'Počítačová diagnostika odhalí chyby motora (vstrekovanie, zapaľovanie, lambda sonda, EGR), poruchy podvozku (ABS, ESP, tlmiče), airbag systému, klimatizácie, svetelných systémov a ďalších elektronických modulov. Presný rozsah závisí od modelu vozidla a rozsahu diagnostiky.' },
			{ q: 'Robíte diagnostiku pred kúpou ojazdeného auta?', a: 'Áno, robíme diagnostiku pred kúpou ojazdeného vozidla. Vyčítame všetky chybové kódy z pamäte riadiacich jednotiek – zistíte, či auto nemá skryté poruchy alebo historické chyby, ktoré predajca nezmiešal. Odporučíme, či je auto v poriadku alebo aké riešenia by boli potrebné.' },
			{ q: 'Ako dlho trvá diagnostika vozidla?', a: 'Základné vyčítanie chybových kódov a diagnostika OBD trvá zvyčajne 15 – 30 minút. Komplexná diagnostika viacerých systémov a hľadanie príčiny môže trvať dlhšie, podľa zložitosti problému. Presný čas a termín vám povieme vopred pri objednaní.' }
		],
		relatedH2: 'Súvisiace služby',
		related: [
			{ href: '/', label: 'Domov →' },
			{ href: '/vymena-brzd-bratislava', label: 'Výmena bŕzd Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'Príprava na STK a EK →' },
			{ href: '/vymena-rozvodov-bratislava', label: 'Výmena rozvodov Bratislava →' }
		],
		ctaTitle: 'Objednajte diagnostiku áut',
		ctaText: 'Zavolajte alebo napíšte na WhatsApp – poradíme, pripravíme cenovú ponuku a dohodneme termín.',
		waText: 'Dobrý deň, mám záujem o diagnostiku áut. Moje vozidlo je: '
	},

	en: {
		metaTitle: 'Car Diagnostics Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Car diagnostics in Bratislava – computer diagnostics, error code reading, check engine light, ABS, airbag. Engine, electronics and chassis diagnostics OBD. Mobile car service Podunajské Biskupice. Call: 0944 122 224',
		breadcrumbHome: 'Home',
		breadcrumbCurrent: 'Car Diagnostics Bratislava',
		heroH1: 'Car diagnostics',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Professional <strong>computer vehicle diagnostics</strong> for all car brands in Bratislava – Podunajské Biskupice. We read <strong>error codes</strong>, deal with illuminated <strong>engine warning lights</strong> (Check Engine), ABS, airbag and more. Diagnostics of <strong>engine, electronics and chassis</strong> via <strong>OBD diagnostics</strong>. Precise fault identification with expert explanation.',
		callBtn: 'Call',
		badges: ['Error code reading', 'Engine, ABS, airbag lights', 'OBD diagnostics'],
		whenH2: 'When do you need diagnostics?',
		whenProse:
			'<p><strong>Computer vehicle diagnostics</strong> are essential whenever an <strong>engine warning light</strong> (Check Engine), ABS, airbag, ESP or other warning light has come on. Modern vehicles store error codes in the computer – without OBD diagnostics you can\'t determine the exact cause of the fault.</p><p>We also recommend diagnostics before <strong>buying a used car</strong>, before the <strong>technical inspection</strong>, when driving characteristics worsen or fuel consumption increases. At MUDROCH MOTORWORXX in Bratislava we\'ll do the diagnostics quickly and explain expertly what\'s wrong with the car and what solutions are possible.</p>',
		symptomsH2: 'Signs you need diagnostics',
		symptomsProse:
			'These signs mean the vehicle needs computer diagnostics. Don\'t postpone a service visit – an error code often reveals a problem before a serious fault occurs.',
		symptomsList: [
			'Illuminated engine warning light (Check Engine Light)',
			'ABS, airbag, ESP or other system warning lights',
			'Drop in engine power or running roughly',
			'Sudden increase in fuel consumption',
			'Engine starting problems',
			'Irregular engine running or jerking'
		],
		includesH2: 'What car diagnostics includes',
		includesProse:
			'We provide comprehensive <strong>computer vehicle diagnostics</strong> – we read and clear error codes, diagnose the engine, electronics, chassis and other systems via OBD diagnostics.',
		includesCards: [
			{ h3: 'OBD error code reading', p: 'Computer reading of error codes from the engine control unit and other modules – we find out what the car is reporting.' },
			{ h3: 'Engine and electronics diagnostics', p: 'Detailed diagnostics of the engine, injection system, ignition, lambda probe, EGR and other components.' },
			{ h3: 'Lights: Check Engine, ABS, airbag', p: 'Diagnostics of illuminated warning lights – Check Engine Light, ABS, airbag, ESP, air conditioning and other systems.' },
			{ h3: 'Explanation and solution recommendation', p: 'Expert explanation of error codes – we tell you what the fault means, what\'s the cause and how it should be fixed.' }
		],
		priceH2: 'Car diagnostics price',
		priceProse:
			'<p>The price of <strong>computer vehicle diagnostics</strong> depends on the scope – whether it\'s just reading error codes for an illuminated warning light, or comprehensive diagnostics of the engine, chassis and electronics.</p><p>Send us the <strong>licence plate or VIN</strong> of your vehicle and describe the problem – we\'ll prepare a <strong>precise, fair quote</strong> tailored to you. When ordering a repair with us, diagnostics are often free.</p>',
		whyH2: 'Why entrust your diagnostics to us',
		whyCards: [
			{ h3: 'Professional diagnostic equipment', p: 'We use quality diagnostic tools with up-to-date error code databases for all car brands.' },
			{ h3: 'Expert explanation and advice', p: 'We don\'t do diagnostics mechanically – we tell you what error codes mean, what\'s the cause and what the solution options are.' },
			{ h3: 'Fair price and transparency', p: 'A precise quote up front and no overpriced "recommended repairs" – we only say what\'s really needed.' },
			{ h3: 'Mobile car service in Bratislava', p: 'We are a mobile car service based in Podunajské Biskupice – diagnostics and routine repairs are often done during a single visit.' }
		],
		faqH2: 'Frequently asked questions – car diagnostics',
		faq: [
			{ q: 'How much does car diagnostics in Bratislava cost?', a: 'The price depends on the scope – basic error code reading starts from around €20 – 30, comprehensive diagnostics of multiple systems is more expensive. When ordering a repair with us, diagnostics are often free. Send us your licence plate or VIN and describe the problem – we\'ll prepare an exact quote. Call 0944 122 224.' },
			{ q: 'What is computer vehicle diagnostics and OBD diagnostics?', a: 'Computer vehicle diagnostics is reading error codes from the car\'s control units via the OBD (On-Board Diagnostics) port. Modern cars store all faults in memory – OBD diagnostics tell you exactly what the car is reporting and which system has the problem.' },
			{ q: 'What does an illuminated engine warning light (Check Engine) mean?', a: 'An illuminated engine warning light (Check Engine Light) means the control unit has detected a fault in the engine or emissions system. Without OBD diagnostics you can\'t determine the exact cause – it can range from a lambda probe through ignition to a serious engine fault. Come for diagnostics as soon as possible.' },
			{ q: 'Can you clear error codes and turn off the warning light?', a: 'Yes, we can clear error codes and turn off the warning light – but it\'s important to determine the cause. If the fault persists, the light will come on again. We first do diagnostics, tell you the cause and recommend a solution. After repair we clear the fault permanently.' },
			{ q: 'What can diagnostics reveal?', a: 'Computer diagnostics reveal engine faults (injection, ignition, lambda probe, EGR), chassis faults (ABS, ESP, shock absorbers), airbag system, air conditioning, lighting systems and other electronic modules. The exact scope depends on the vehicle model and diagnostics range.' },
			{ q: 'Do you do diagnostics before buying a used car?', a: 'Yes, we do diagnostics before buying a used vehicle. We read all error codes from the memory of control units – you find out if the car has hidden faults or historical errors the seller didn\'t mention. We advise whether the car is fine or what solutions would be needed.' },
			{ q: 'How long does vehicle diagnostics take?', a: 'Basic error code reading and OBD diagnostics usually take 15 – 30 minutes. Comprehensive diagnostics of multiple systems and finding the cause can take longer, depending on the problem complexity. We\'ll tell you the exact time and date in advance when booking.' }
		],
		relatedH2: 'Related services',
		related: [
			{ href: '/', label: 'Home →' },
			{ href: '/vymena-brzd-bratislava', label: 'Brake replacement Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'Technical inspection preparation →' },
			{ href: '/vymena-rozvodov-bratislava', label: 'Timing belt replacement Bratislava →' }
		],
		ctaTitle: 'Book your car diagnostics',
		ctaText: 'Call us or write on WhatsApp – we\'ll advise you, prepare a quote and arrange an appointment.',
		waText: 'Hello, I\'m interested in car diagnostics. My vehicle is: '
	},

	de: {
		metaTitle: 'Autodiagnostik Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Autodiagnostik in Bratislava – Computer-Fahrzeugdiagnose, Fehlercode-Auslesung, Motorkontrollleuchte, ABS, Airbag. Motor-, Elektronik- und Fahrwerksdiagnose OBD. Mobiler Autoservice Podunajské Biskupice. Anrufen: 0944 122 224',
		breadcrumbHome: 'Startseite',
		breadcrumbCurrent: 'Autodiagnostik Bratislava',
		heroH1: 'Autodiagnostik',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Professionelle <strong>Computer-Fahrzeugdiagnose</strong> für alle Fahrzeugmarken in Bratislava – Podunajské Biskupice. Wir lesen <strong>Fehlercodes</strong> aus, beheben leuchtende <strong>Motorkontrollleuchten</strong> (Check Engine), ABS, Airbag und mehr. Diagnose von <strong>Motor, Elektronik und Fahrwerk</strong> via <strong>OBD-Diagnose</strong>. Präzise Fehleridentifikation mit fachkundiger Erklärung.',
		callBtn: 'Anrufen',
		badges: ['Fehlercode-Auslesung', 'Motor-, ABS-, Airbag-Leuchten', 'OBD-Diagnose'],
		whenH2: 'Wann brauchen Sie eine Diagnose?',
		whenProse:
			'<p>Eine <strong>Computer-Fahrzeugdiagnose</strong> ist unverzichtbar, wenn eine <strong>Motorkontrollleuchte</strong> (Check Engine), ABS, Airbag, ESP oder eine andere Warnleuchte aufgeleuchtet ist. Moderne Fahrzeuge speichern Fehlercodes im Computer – ohne OBD-Diagnose lässt sich die genaue Ursache nicht ermitteln.</p><p>Wir empfehlen eine Diagnose auch vor dem <strong>Kauf eines Gebrauchtwagens</strong>, vor der <strong>technischen Prüfung</strong>, bei verschlechterten Fahreigenschaften oder steigendem Verbrauch. Bei MUDROCH MOTORWORXX in Bratislava führen wir die Diagnose schnell durch und erklären fachkundig, was mit dem Auto los ist und welche Lösungen möglich sind.</p>',
		symptomsH2: 'Anzeichen für den Bedarf einer Diagnose',
		symptomsProse:
			'Diese Anzeichen bedeuten, dass das Fahrzeug eine Computer-Diagnose braucht. Schieben Sie einen Werkstattbesuch nicht auf – ein Fehlercode offenbart oft ein Problem, bevor ein schwerwiegender Defekt auftritt.',
		symptomsList: [
			'Leuchtende Motorkontrollleuchte (Check Engine Light)',
			'ABS-, Airbag-, ESP- oder andere Systemwarnleuchten',
			'Leistungsabfall des Motors oder unruhiger Lauf',
			'Plötzlicher Anstieg des Kraftstoffverbrauchs',
			'Motorstartprobleme',
			'Unregelmäßiger Motorlauf oder Ruckeln'
		],
		includesH2: 'Was die Autodiagnostik umfasst',
		includesProse:
			'Wir bieten eine umfassende <strong>Computer-Fahrzeugdiagnose</strong> – wir lesen und löschen Fehlercodes, diagnostizieren Motor, Elektronik, Fahrwerk und andere Systeme via OBD-Diagnose.',
		includesCards: [
			{ h3: 'OBD-Fehlercode-Auslesung', p: 'Computer-Auslesung von Fehlercodes aus dem Motorsteuergerät und anderen Modulen – wir finden heraus, was das Auto meldet.' },
			{ h3: 'Motor- und Elektronikdiagnose', p: 'Detaillierte Diagnose von Motor, Einspritzsystem, Zündung, Lambdasonde, AGR und anderen Komponenten.' },
			{ h3: 'Leuchten: Check Engine, ABS, Airbag', p: 'Diagnose leuchtender Warnleuchten – Check Engine Light, ABS, Airbag, ESP, Klimaanlage und andere Systeme.' },
			{ h3: 'Erklärung und Lösungsempfehlung', p: 'Fachkundige Erklärung der Fehlercodes – wir sagen Ihnen, was der Fehler bedeutet, was die Ursache ist und wie er behoben werden sollte.' }
		],
		priceH2: 'Preis für Autodiagnostik',
		priceProse:
			'<p>Der Preis für eine <strong>Computer-Fahrzeugdiagnose</strong> hängt vom Umfang ab – ob es nur um das Auslesen von Fehlercodes bei einer leuchtenden Warnleuchte geht oder um eine umfassende Diagnose von Motor, Fahrwerk und Elektronik.</p><p>Senden Sie uns das <strong>Kennzeichen oder die VIN</strong> Ihres Fahrzeugs und beschreiben Sie das Problem – wir erstellen Ihnen ein <strong>präzises, faires Angebot</strong> nach Maß. Bei Auftragserteilung einer Reparatur bei uns ist die Diagnose oft kostenlos.</p>',
		whyH2: 'Warum Sie uns Ihre Diagnose anvertrauen sollten',
		whyCards: [
			{ h3: 'Professionelle Diagnosegeräte', p: 'Wir verwenden hochwertige Diagnosewerkzeuge mit aktuellen Fehlercode-Datenbanken für alle Fahrzeugmarken.' },
			{ h3: 'Fachkundige Erklärung und Beratung', p: 'Wir führen keine mechanische Diagnose durch – wir sagen Ihnen, was Fehlercodes bedeuten, was die Ursache ist und welche Lösungsoptionen es gibt.' },
			{ h3: 'Fairer Preis und Transparenz', p: 'Ein präzises Angebot im Voraus und keine überteuerten „empfohlenen Reparaturen" – wir sagen nur, was wirklich nötig ist.' },
			{ h3: 'Mobiler Autoservice in Bratislava', p: 'Wir sind ein mobiler Autoservice mit Sitz in Podunajské Biskupice – Diagnose und routinemäßige Reparaturen erledigen wir oft bei einem einzigen Besuch.' }
		],
		faqH2: 'Häufige Fragen – Autodiagnostik',
		faq: [
			{ q: 'Wie viel kostet eine Autodiagnostik in Bratislava?', a: 'Der Preis hängt vom Umfang ab – eine grundlegende Fehlercode-Auslesung beginnt bei ca. 20 – 30 €, eine umfassende Diagnose mehrerer Systeme ist teurer. Bei Auftragserteilung einer Reparatur bei uns ist die Diagnose oft kostenlos. Senden Sie uns Kennzeichen oder VIN und beschreiben Sie das Problem – wir erstellen ein genaues Angebot. Rufen Sie 0944 122 224 an.' },
			{ q: 'Was ist Computer-Fahrzeugdiagnose und OBD-Diagnose?', a: 'Computer-Fahrzeugdiagnose ist das Auslesen von Fehlercodes aus den Steuergeräten des Autos über den OBD-Port (On-Board Diagnostics). Moderne Autos speichern alle Fehler im Speicher – OBD-Diagnose sagt Ihnen genau, was das Auto meldet und in welchem System das Problem liegt.' },
			{ q: 'Was bedeutet eine leuchtende Motorkontrollleuchte (Check Engine)?', a: 'Eine leuchtende Motorkontrollleuchte (Check Engine Light) bedeutet, dass das Steuergerät einen Fehler im Motor- oder Abgassystem erkannt hat. Ohne OBD-Diagnose lässt sich die genaue Ursache nicht ermitteln – es kann von einer Lambdasonde über die Zündung bis zu einem schwerwiegenden Motordefekt reichen. Kommen Sie so bald wie möglich zur Diagnose.' },
			{ q: 'Können Sie Fehlercodes löschen und die Warnleuchte ausschalten?', a: 'Ja, wir können Fehlercodes löschen und die Warnleuchte ausschalten – aber es ist wichtig, die Ursache zu ermitteln. Wenn der Fehler bestehen bleibt, leuchtet die Lampe wieder auf. Wir führen zunächst eine Diagnose durch, sagen Ihnen die Ursache und empfehlen eine Lösung. Nach der Reparatur löschen wir den Fehler dauerhaft.' },
			{ q: 'Was kann eine Diagnose aufdecken?', a: 'Computer-Diagnose deckt Motorfehler (Einspritzung, Zündung, Lambdasonde, AGR), Fahrwerksfehler (ABS, ESP, Stoßdämpfer), Airbagsystem, Klimaanlage, Beleuchtungssysteme und andere elektronische Module auf. Der genaue Umfang hängt vom Fahrzeugmodell und Diagnoseumfang ab.' },
			{ q: 'Führen Sie eine Diagnose vor dem Kauf eines Gebrauchtwagens durch?', a: 'Ja, wir führen eine Diagnose vor dem Kauf eines Gebrauchtfahrzeugs durch. Wir lesen alle Fehlercodes aus dem Speicher der Steuergeräte aus – Sie finden heraus, ob das Auto versteckte Fehler oder historische Fehler hat, die der Verkäufer nicht erwähnt hat. Wir empfehlen, ob das Auto in Ordnung ist oder welche Lösungen nötig wären.' },
			{ q: 'Wie lange dauert eine Fahrzeugdiagnose?', a: 'Eine grundlegende Fehlercode-Auslesung und OBD-Diagnose dauert in der Regel 15 – 30 Minuten. Eine umfassende Diagnose mehrerer Systeme und Ursachenfindung kann je nach Problemkomplexität länger dauern. Die genaue Zeit und den Termin teilen wir Ihnen bei der Buchung im Voraus mit.' }
		],
		relatedH2: 'Ähnliche Leistungen',
		related: [
			{ href: '/', label: 'Startseite →' },
			{ href: '/vymena-brzd-bratislava', label: 'Bremsenwechsel Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'Vorbereitung auf die technische Prüfung →' },
			{ href: '/vymena-rozvodov-bratislava', label: 'Zahnriemenwechsel Bratislava →' }
		],
		ctaTitle: 'Buchen Sie Ihre Autodiagnostik',
		ctaText: 'Rufen Sie uns an oder schreiben Sie auf WhatsApp – wir beraten Sie, erstellen ein Angebot und vereinbaren einen Termin.',
		waText: 'Guten Tag, ich habe Interesse an einer Autodiagnostik. Mein Fahrzeug ist: '
	},

	hr: {
		metaTitle: 'Dijagnostika automobila Bratislava | MUDROCH MOTORWORXX',
		metaDescription:
			'Dijagnostika automobila u Bratislavi – računalna dijagnostika vozila, očitavanje kodova grešaka, kontrolna lampica motora, ABS, airbag. Dijagnostika motora, elektronike i podvozja OBD. Mobilni autoservis Podunajské Biskupice. Nazovite: 0944 122 224',
		breadcrumbHome: 'Početna',
		breadcrumbCurrent: 'Dijagnostika automobila Bratislava',
		heroH1: 'Dijagnostika automobila',
		heroH1Accent: 'Bratislava',
		heroLede:
			'Profesionalna <strong>računalna dijagnostika vozila</strong> za sve marke automobila u Bratislavi – Podunajské Biskupice. Očitavamo <strong>kodove grešaka</strong>, rješavamo upaljene <strong>kontrolne lampice motora</strong> (Check Engine), ABS, airbag i druge. Dijagnostika <strong>motora, elektronike i podvozja</strong> putem <strong>OBD dijagnostike</strong>. Precizna identifikacija kvarova sa stručnim objašnjenjem.',
		callBtn: 'Nazovite',
		badges: ['Očitavanje kodova grešaka', 'Lampice motora, ABS, airbag', 'OBD dijagnostika'],
		whenH2: 'Kada trebate dijagnostiku?',
		whenProse:
			'<p><strong>Računalna dijagnostika vozila</strong> neophodna je kad god se upali <strong>kontrolna lampica motora</strong> (Check Engine), ABS, airbag, ESP ili druga kontrolna lampica. Moderna vozila pohranjuju kodove grešaka u računalo – bez OBD dijagnostike ne može se utvrditi točan uzrok kvara.</p><p>Dijagnostiku preporučujemo i prije <strong>kupnje rabljenog automobila</strong>, prije <strong>tehničkog pregleda</strong>, kod pogoršanih voznih svojstava ili povećane potrošnje. U servisu MUDROCH MOTORWORXX u Bratislavi brzo ćemo izvršiti dijagnostiku i stručno objasniti što muči automobil i koja su rješenja moguća.</p>',
		symptomsH2: 'Znakovi potrebe za dijagnostikom',
		symptomsProse:
			'Ovi znakovi znače da vozilo treba računalnu dijagnostiku. Ne odgađajte posjet servisu – kod greške često otkriva problem prije nego što dođe do ozbiljnog kvara.',
		symptomsList: [
			'Upaljena kontrolna lampica motora (Check Engine Light)',
			'Kontrolne lampice ABS, airbag, ESP ili drugih sustava',
			'Pad snage motora ili neravan rad',
			'Nagli porast potrošnje goriva',
			'Problemi pri pokretanju motora',
			'Nepravilan rad motora ili trzanje'
		],
		includesH2: 'Što uključuje dijagnostika automobila',
		includesProse:
			'Obavljamo kompletan <strong>računalnu dijagnostiku vozila</strong> – očitavamo i brišemo kodove grešaka, dijagnosticiramo motor, elektroniku, podvozje i druge sustave putem OBD dijagnostike.',
		includesCards: [
			{ h3: 'Očitavanje OBD kodova grešaka', p: 'Računalno očitavanje kodova grešaka iz upravljačke jedinice motora i drugih modula – saznajemo što automobil javlja.' },
			{ h3: 'Dijagnostika motora i elektronike', p: 'Detaljna dijagnostika motora, ubrizgavajućeg sustava, paljenja, lambda sonde, EGR-a i drugih komponenti.' },
			{ h3: 'Lampice: Check Engine, ABS, airbag', p: 'Dijagnostika upaljenih kontrolnih lampica – Check Engine Light, ABS, airbag, ESP, klima uređaj i drugi sustavi.' },
			{ h3: 'Objašnjenje i preporuka rješenja', p: 'Stručno objašnjenje kodova grešaka – kažemo vam što greška znači, koji je uzrok i kako to treba popraviti.' }
		],
		priceH2: 'Cijena dijagnostike automobila',
		priceProse:
			'<p>Cijena <strong>računalne dijagnostike vozila</strong> ovisi o opsegu – radi li se samo o očitavanju kodova grešaka kod upaljene kontrolne lampice ili o sveobuhvatnoj dijagnostici motora, podvozja i elektronike.</p><p>Pošaljite nam <strong>registarsku oznaku ili VIN</strong> vozila i opišite problem – pripremit ćemo vam <strong>točnu i poštenu ponudu</strong> po mjeri. Kod naručivanja popravka kod nas dijagnostika je često besplatna.</p>',
		whyH2: 'Zašto dijagnostiku povjeriti nama',
		whyCards: [
			{ h3: 'Profesionalna dijagnostička oprema', p: 'Koristimo kvalitetne dijagnostičke uređaje s ažuriranim bazama podataka kodova grešaka za sve marke automobila.' },
			{ h3: 'Stručno objašnjenje i savjet', p: 'Ne obavljamo dijagnostiku mehanički – kažemo vam što kodovi grešaka znače, koji je uzrok i koje su opcije rješenja.' },
			{ h3: 'Poštena cijena i transparentnost', p: 'Točna ponuda unaprijed i nikakvi precijenjeni „preporučeni popravci" – kažemo samo ono što je stvarno potrebno.' },
			{ h3: 'Mobilni autoservis u Bratislavi', p: 'Mi smo mobilni autoservis sa sjedištem u Podunajské Biskupice – dijagnostiku i uobičajene popravke često obavimo tijekom jednog posjeta.' }
		],
		faqH2: 'Česta pitanja – dijagnostika automobila',
		faq: [
			{ q: 'Koliko košta dijagnostika automobila u Bratislavi?', a: 'Cijena ovisi o opsegu – osnovno očitavanje kodova grešaka počinje od cca 20 – 30 €, sveobuhvatna dijagnostika više sustava je skuplja. Kod naručivanja popravka kod nas dijagnostika je često besplatna. Pošaljite nam registarsku oznaku ili VIN i opišite problem – pripremit ćemo točnu ponudu. Nazovite 0944 122 224.' },
			{ q: 'Što je računalna dijagnostika vozila i OBD dijagnostika?', a: 'Računalna dijagnostika vozila je očitavanje kodova grešaka iz upravljačkih jedinica automobila putem OBD priključka (On-Board Diagnostics). Moderna vozila pohranjuju sve greške u memoriju – OBD dijagnostika vam kaže točno što automobil javlja i u kojem je sustavu problem.' },
			{ q: 'Što znači upaljena kontrolna lampica motora (Check Engine)?', a: 'Upaljena kontrolna lampica motora (Check Engine Light) znači da je upravljačka jedinica otkrila grešku u sustavu motora ili emisija. Bez OBD dijagnostike ne može se utvrditi točan uzrok – može se raditi od lambda sonde preko paljenja do ozbiljnog kvara motora. Dođite na dijagnostiku što prije.' },
			{ q: 'Možete li izbrisati kodove grešaka i ugasiti kontrolnu lampicu?', a: 'Da, možemo izbrisati kodove grešaka i ugasiti kontrolnu lampicu – ali važno je utvrditi uzrok. Ako greška traje, lampica će se ponovno upaliti. Prvo obavljamo dijagnostiku, kažemo vam uzrok i preporučujemo rješenje. Nakon popravka trajno brišemo grešku.' },
			{ q: 'Što sve dijagnostika može otkriti?', a: 'Računalna dijagnostika otkriva greške motora (ubrizgavanje, paljenje, lambda sonda, EGR), greške podvozja (ABS, ESP, amortizeri), sustav airbaga, klime, svjetlosnih sustava i drugih elektroničkih modula. Točan opseg ovisi o modelu vozila i opsegu dijagnostike.' },
			{ q: 'Radite li dijagnostiku prije kupnje rabljenog automobila?', a: 'Da, radimo dijagnostiku prije kupnje rabljenog vozila. Očitavamo sve kodove grešaka iz memorije upravljačkih jedinica – saznajete ima li automobil skrivene greške ili povijesne greške koje prodavač nije spomenuo. Preporučit ćemo je li automobil u redu ili koja bi rješenja bila potrebna.' },
			{ q: 'Koliko traje dijagnostika vozila?', a: 'Osnovno očitavanje kodova grešaka i OBD dijagnostika obično traju 15 – 30 minuta. Sveobuhvatna dijagnostika više sustava i traženje uzroka može trajati duže, ovisno o složenosti problema. Točno vrijeme i termin reći ćemo vam unaprijed pri narudžbi.' }
		],
		relatedH2: 'Povezane usluge',
		related: [
			{ href: '/', label: 'Početna →' },
			{ href: '/vymena-brzd-bratislava', label: 'Zamjena kočnica Bratislava →' },
			{ href: '/priprava-na-stk-bratislava', label: 'Priprema za tehnički pregled →' },
			{ href: '/vymena-rozvodov-bratislava', label: 'Zamjena zupčastog remena Bratislava →' }
		],
		ctaTitle: 'Naručite dijagnostiku automobila',
		ctaText: 'Nazovite ili pišite na WhatsApp – savjetovat ćemo vas, pripremiti ponudu i dogovoriti termin.',
		waText: 'Dobar dan, zanima me dijagnostika automobila. Moje vozilo je: '
	}
};
