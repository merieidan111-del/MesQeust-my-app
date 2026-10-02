import { Question } from '../../types/medical';

export const CHOC_OAP_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-choc-01',
    courseId: 'crs-choc-oap',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le profil hémodynamique caractéristique du choc cardiogénique mesuré au cathétérisme droit par sonde de Swan-Ganz ?",
    options: [
      "A) Index cardiaque (Ic) effondré (< 2,2 L/min/m²), pression artérielle pulmonaire d'occlusion (PAPO) élevée (> 15 à 18 mmHg) et résistances vasculaires systémiques (RVS) augmentées.",
      "B) Index cardiaque élevé (> 4 L/min/m²), PAPO basse et résistances effondrées.",
      "C) Index cardiaque normal, PAPO effondrée < 5 mmHg et RVS normales.",
      "D) Index cardiaque effondré avec PAPO effondrée et résistances effondrées.",
      "E) Index cardiaque très élevé avec shunt gauche-droit pur."
    ],
    correctAnswers: [0],
    explanation: "Le choc cardiogénique est une défaillance de la pompe cardiaque définie par : Index Cardiaque effondré (< 2,2 L/min/m²), pressions de remplissage VG très élevées (PAPO > 15-18 mmHg) et vasoconstriction réactionnelle avec augmentation des résistances périphériques (RVS > 1200 dynes.s.cm⁻⁵).",
    clinicalPearl: "Profil hémodynamique du choc cardiogénique : Index cardiaque ↓ + PAPO ↑ (> 18 mmHg) + RVS ↑."
  },
  {
    id: 'q-choc-02',
    courseId: 'crs-choc-oap',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est l'étiologie de loin la plus fréquente responsable de plus de 70% des états de choc cardiogénique chez l'adulte ?",
    options: [
      "A) L'infarctus aigu du myocarde étendu (perte de plus de 40% de la masse contractile du VG) ou ses complications mécaniques.",
      "B) La péricardite aiguë bénigne virale.",
      "C) La communication interauriculaire de type ostium secundum.",
      "D) Le bloc de branche droit isolé.",
      "E) L'intoxication au paracétamol à dose thérapeutique."
    ],
    correctAnswers: [0],
    explanation: "L'infarctus aigu du myocarde (STEMI ou NSTEMI massif intéressant le territoire antérieur ou avec nécrose étendue touchant > 40% du VG) est la cause première de choc cardiogénique, avec une mortalité hospitalière historique de 40 à 50%.",
    clinicalPearl: "1ère cause de choc cardiogénique = Infarctus aigu du myocarde étendu (revascularisation coronaire urgente vitale)."
  },
  {
    id: 'q-choc-03',
    courseId: 'crs-choc-oap',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quel vasopresseur de première intention est formellement recommandé par les directives internationales pour restaurer la pression de perfusion dans le choc cardiogénique avec hypotension sévère ?",
    options: [
      "A) La Noradrénaline (par rapport à la dopamine qui majore l'arythmogénicité et la mortalité).",
      "B) La Dopamine à forte dose.",
      "C) L'Isoprénaline seule.",
      "D) L'Éphédrine per os.",
      "E) Le Nitroprussiate de sodium."
    ],
    correctAnswers: [0],
    explanation: "L'essai SOAP II a formellement démontré la supériorité de la Noradrénaline sur la dopamine dans le choc cardiogénique, avec une réduction significative des arythmies graves et de la mortalité. La noradrénaline est le vasopresseur de premier choix.",
    clinicalPearl: "Vasopresseur de choix dans le choc cardiogénique = Noradrénaline (la dopamine est proscrite car arythmogène et plus létale)."
  },
  {
    id: 'q-choc-04',
    courseId: 'crs-choc-oap',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel inotrope positif agoniste des récepteurs bêta-1 adrénergiques est l'agent de choix pour améliorer le débit cardiaque dans le choc cardiogénique une fois la pression artérielle moyenne restaurée ?",
    options: [
      "A) La Dobutamine en perfusion intraveineuse continue (2,5 à 10 µg/kg/min).",
      "B) L'Atropine en bolus sous-cutané.",
      "C) Le Bisoprolol à forte dose.",
      "D) Le Diltiazem intraveineux continu.",
      "E) Le Vérapamil."
    ],
    correctAnswers: [0],
    explanation: "La Dobutamine stimule les récepteurs bêta-1 myocardiques, augmentant la contractilité (inotropisme) et le volume d'éjection systolique sans vasoconstriction excessive. Elle est le support inotrope de référence dans la défaillance myocardique.",
    clinicalPearl: "Inotrope de référence dans le choc cardiogénique = Dobutamine (associée à la noradrénaline si PAM < 65 mmHg)."
  },
  {
    id: 'q-choc-05',
    courseId: 'crs-choc-oap',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la triade sémiologique auscultatoire classique de l'œdème aigu du poumon cardiogénique (OAP hémodynamique) ?",
    options: [
      "A) Râles crépitants bilatéraux symétriques ascendants 'en marée montante', polypnée superficielle avec orthopnée et tachycardie avec bruit de galop B3.",
      "B) Silence auscultatoire complet avec tympanisme unilatéral.",
      "C) Frottement péricardique méso-systolique avec pouls paradoxal.",
      "D) Souffle tubaire avec égophonie au sommet droit.",
      "E) Sibilants expiratoires purs isolés sans aucun crépitant."
    ],
    correctAnswers: [0],
    explanation: "L'OAP hémodynamique se traduit par l'inondation alvéolaire due au passage de transsudat lorsque la pression capillaire pulmonaire dépasse la pression oncotique (> 25 mmHg), provoquant la marée montante de râles crépitants fins, l'orthopnée majeure et l'expectoration mousseuse saumonée.",
    clinicalPearl: "OAP cardiogénique : Orthopnée + Râles crépitants 'en marée montante' + Expectoration mousseuse rosée saumonée."
  },
  {
    id: 'q-choc-06',
    courseId: 'crs-choc-oap',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le traitement médical d'urgence de première ligne de l'OAP hypertensif hypervolémique chez un patient avec PAS > 160 mmHg ?",
    options: [
      "A) Diurétique de l'anse IV (Furosémide) associé à des Dérivés Nitrés intraveineux à forte dose (Dinitrate d'isosorbide ou Trinitrine) titrés selon la pression artérielle.",
      "B) Bêta-bloquant intraveineux à forte dose d'emblée.",
      "C) Perfusion de 1000 mL de soluté salé isotonique en 30 minutes.",
      "D) Digoxine intraveineuse continue.",
      "E) Adrénaline intraveineuse en bolus répétés."
    ],
    correctAnswers: [0],
    explanation: "Dans l'OAP cardiogénique hypertensif, les dérivés nitrés IV puissants vasodilatateurs veineux et artériels réduisent la précharge et la post-charge VG, complétés par le furosémide IV pour assurer la décongestion hydrosodée.",
    clinicalPearl: "OAP avec poussée hypertensive : Dérivés nitrés IV (titration agressive) + Furosémide IV = Soulagement immédiat."
  },
  {
    id: 'q-choc-07',
    courseId: 'crs-choc-oap',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel mode de support ventilatoire non invasif au masque facial est recommandé en première intention dans la détresse respiratoire aiguë sur OAP pour réduire le travail respiratoire et le recours à l'intubation ?",
    options: [
      "A) La ventilation non invasive en pression positive continue (CPAP de Boussignac ou VNI avec aide inspiratoire et PEP).",
      "B) La lunette nasale d'oxygène à 1 L/min simple.",
      "C) Le masque à nébulisation d'eau pure.",
      "D) L'hypoventilation contrôlée au ballon autogonflable.",
      "E) La trachéotomie d'emblée."
    ],
    correctAnswers: [0],
    explanation: "La CPAP ou VNI en pression positive réduit la précharge et la post-charge VG (diminue la transmuralité), recrute les alvéoles inondées et améliore spectaculairement l'hématose tout en évitant l'intubation endotrachéale dans plus de 80% des cas.",
    clinicalPearl: "VNI / CPAP dans l'OAP : Pression positive réduisant la précharge/postcharge et diminuant le recours à l'intubation trachéale."
  },
  {
    id: 'q-choc-08',
    courseId: 'crs-choc-oap',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quelle assistance circulatoire mécanique percutanée temporaire (ECLS / ECMO veino-artérielle) assure à la fois le support circulatoire biventriculaire et l'oxygénation extracorporelle dans le choc cardiogénique réfractaire ?",
    options: [
      "A) L'ECMO veino-artérielle (VA-ECMO).",
      "B) Le ballon de contre-pulsion intra-aortique (CPIA) isolé.",
      "C) L'assistance ventriculaire gauche seule (Impella CP).",
      "D) La dialyse péritonéale continue.",
      "E) Le pacemaker temporaire endocavitaire."
    ],
    correctAnswers: [0],
    explanation: "La VA-ECMO (Extracorporeal Membrane Oxygenation veino-artérielle) draine le sang veineux désoxygéné, l'oxygène à travers une membrane et le réinjecte sous pression dans le système artériel (fémoral), suppléant totalement la défaillance hémodynamique et respiratoire.",
    clinicalPearl: "Choc cardiogénique réfractaire biventriculaire : ECMO veino-artérielle (VA-ECMO) comme pont vers la récupération ou la greffe."
  },
  {
    id: 'q-choc-09',
    courseId: 'crs-choc-oap',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le signe biologique tissulaire d'hypoperfusion le plus fidèle permettant d'évaluer la gravité et la réponse au traitement du choc cardiogénique ?",
    options: [
      "A) La lactatémie artérielle (hyperlactatémie > 2 mmol/L avec acidose métabolique).",
      "B) La glycémie à jeun.",
      "C) Le taux sérique de bilirubine totale.",
      "D) Le cholestérol LDL.",
      "E) La numération des globules blancs."
    ],
    correctAnswers: [0],
    explanation: "La production de lactate traduit le métabolisme anaérobie induit par l'hypoxie cellulaire et l'hypoperfusion tissulaire. La cinétique de clairance du lactate est un indicateur pronostique majeur d'efficacité de la réanimation hémodynamique.",
    clinicalPearl: "Marqueur d'hypoperfusion tissulaire dans le choc = Lactatémie artérielle (> 2 mmol/L) et saturation veineuse centrale en O2 (ScvO2 < 70%)."
  },
  {
    id: 'q-choc-10',
    courseId: 'crs-choc-oap',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle complication mécanique aiguë redoutable d'un infarctus inférieur ou antérieur peut déclencher un choc cardiogénique foudroyant avec apparition d'un souffle holosystolique rude en rayon de roue ?",
    options: [
      "A) La rupture du septum interventriculaire (communication interventriculaire post-infarctus).",
      "B) L'anévrisme du sinus coronaire.",
      "C) La sténose de la veine sous-clavière.",
      "D) La perforation d'un ulcère duodénal.",
      "E) La thrombose de la veine rénale."
    ],
    correctAnswers: [0],
    explanation: "La rupture septale post-infarctus crée un shunt gauche-droit massif aigu entraînant une surcharge volumique brutale du VD et un effondrement du débit cardiaque gauche, nécessitant une chirurgie cardiaque urgente de fermeture.",
    clinicalPearl: "Infarctus + Choc brutal + Souffle holosystolique rude avec frémissement = Rupture du septum interventriculaire !"
  },
  {
    id: 'q-choc-11',
    courseId: 'crs-choc-oap',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle anomalie auscultatoire signe la rupture aiguë d'un pilier mitral (ischiatrique) lors d'un infarctus inférieur ou postérieur ?",
    options: [
      "A) Un souffle d'insuffisance mitrale holosystolique aigu apexien avec œdème pulmonaire asymétrique unilatéral droit prédominant.",
      "B) Un claquement d'ouverture mitrale diastolique.",
      "C) Un souffle continu sous-clavier gauche.",
      "D) Un roulement diastolique d'Austin Flint.",
      "E) Un souffle de sténose pulmonaire méso-systolique."
    ],
    correctAnswers: [0],
    explanation: "La rupture de pilier mitral (le plus souvent le pilier postéro-médial vascularisé uniquement par l'artère coronaire droite ou circonflexe) provoque une fuite mitrale massive aiguë dont le jet régurgitant orienté vers la veine pulmonaire supérieure droite crée un OAP unilatéral droit trompeur.",
    clinicalPearl: "Rupture de pilier mitral : Choc cardiogénique avec OAP unilatéral prédominant au poumon droit (jet régurgitant mitral)."
  },
  {
    id: 'q-choc-12',
    courseId: 'crs-choc-oap',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel signe radiologique pulmonaire précoce traduit l'hypertension veineuse pulmonaire pré-œdémateuse avant l'inondation alvéolaire ?",
    options: [
      "A) La redistribution vasculaire vers les sommets (inversion de la trame vasculaire) et les lignes B de Kerley septales.",
      "B) L'élargissement de la trachée > 3 cm.",
      "C) L'hyperclarté des deux bases pulmonaires.",
      "D) L'atélectasie lobaire supérieure droite pure.",
      "E) Le pneumothorax sous tension bilatéral."
    ],
    correctAnswers: [0],
    explanation: "La radiographie montre successivement : 1) Redistribution du flux vers les sommets (Pcap 13-18 mmHg), 2) Œdème interstitiel avec lignes B de Kerley aux bases et flou péribronchique (Pcap 18-25 mmHg), 3) Œdème alvéolaire avec opacités floconneuses hilifuges en ailes de papillon (Pcap > 25 mmHg).",
    clinicalPearl: "Stades radiologiques de l'OAP : Redistribution aux apex → Lignes B de Kerley (interstitiel) → Ailes de papillon (alvéolaire)."
  },
  {
    id: 'q-choc-13',
    courseId: 'crs-choc-oap',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la cible minimale de Pression Artérielle Moyenne (PAM) recommandée lors de la réanimation initiale du choc cardiogénique pour garantir l'autorégulation de la perfusion rénale et coronaire ?",
    options: [
      "A) PAM >= 65 mmHg.",
      "B) PAM >= 110 mmHg.",
      "C) PAM entre 40 et 50 mmHg.",
      "D) PAM > 130 mmHg.",
      "E) PAM inférieure à 35 mmHg."
    ],
    correctAnswers: [0],
    explanation: "La PAM cible fondamentale dans tous les états de choc (dont le choc cardiogénique) est >= 65 mmHg pour maintenir une perfusion d'organes adéquate sans surcharger inutilement la post-charge du ventricule gauche défaillant.",
    clinicalPearl: "Cible hémodynamique universelle : PAM >= 65 mmHg (titration de la noradrénaline)."
  },
  {
    id: 'q-choc-14',
    courseId: 'crs-choc-oap',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen d'imagerie au lit du malade (Point-Of-Care Ultrasound : POCUS) est indispensable dès les premières minutes devant tout choc cardiogénique suspecté ?",
    options: [
      "A) L'échocardiographie transthoracique (ETT) ciblée.",
      "B) La scintigraphie myocardique d'effort.",
      "C) L'IRM cérébrale avec temps de vol.",
      "D) Le scanner abdominal avec lavement aux hydrosolubles.",
      "E) La mammographie bilatérale."
    ],
    correctAnswers: [0],
    explanation: "L'ETT au lit du malade identifie instantanément le mécanisme causal : cinétique segmentaire/globale du VG, fonction VD, épanchement péricardique/tamponnade, valvulopathie aiguë (IM, IA), complication mécanique d'infarctus ou obstacle à l'éjection.",
    clinicalPearl: "Échocardiographie au lit (POCUS) : Obligatoire dès l'admission pour identifier la cause et le mécanisme du choc cardiogénique."
  },
  {
    id: 'q-choc-15',
    courseId: 'crs-choc-oap',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle intervention coronaire percutanée en urgence est la seule mesure ayant démontré une réduction majeure de la mortalité dans le choc cardiogénique compliquant un infarctus aigu (essai SHOCK) ?",
    options: [
      "A) La revascularisation coronaire immédiate par angioplastie primaire de l'artère coupable (ou pontage en urgence).",
      "B) La fibrinolyse intraveineuse différée à J3.",
      "C) Le traitement médical conservateur sans coronarographie.",
      "D) L'angioplastie coronaire programmée 1 mois plus tard.",
      "E) La pose d'un stent carotidien préventif."
    ],
    correctAnswers: [0],
    explanation: "L'essai princeps SHOCK (et ses suivis à long terme) a prouvé que seule la revascularisation coronaire d'urgence (angioplastie de l'artère occluse responsable) améliore spectaculairement la survie à 6 mois et à 1 an (réduction absolue de mortalité de 13%).",
    clinicalPearl: "Choc cardiogénique sur infarctus : Coronarographie et angioplastie primaire de l'artère coupable en URGENCE VITALE (Salle de KT immédiate)."
  },
  {
    id: 'q-choc-16',
    courseId: 'crs-choc-oap',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le choc d'infarctus du ventricule droit (choc VD hémodynamique), quelle est la mesure thérapeutique initiale essentielle avant toute autre thérapeutique ?",
    options: [
      "A) L'expansion volémique prudente par soluté salé isotonique (250 à 500 mL) pour augmenter la précharge du VD, et la PROSCRIPTION FORMELLE des dérivés nitrés et diurétiques.",
      "B) La saignée de 500 mL de sang.",
      "C) L'administration de Furosémide 250 mg IVD.",
      "D) La mise sous Trinitrine sublinguale répétée.",
      "E) La prescription d'un diurétique thiazidique oral."
    ],
    correctAnswers: [0],
    explanation: "Le ventricule droit ischémié et dilaté est dépendant d'une précharge élevée pour franchir la résistance pulmonaire et remplir le VG. Les diurétiques et nitrés réduisent la précharge et induisent un désamorçage cardiaque immédiat fatal.",
    clinicalPearl: "Choc sur infarctus du VD : Remplissage prudent + Noradrénaline + Coronarographie d'urgence (JAMAIS DE DÉRIVÉS NITRÉS NI DIURÉTIQUES) !"
  },
  {
    id: 'q-choc-17',
    courseId: 'crs-choc-oap',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel peptide natriurétique cardiaque est le marqueur de choix pour distinguer avec certitude une dyspnée aiguë par OAP cardiogénique d'une décompensation de BPCO aux urgences ?",
    options: [
      "A) Le BNP (seuil d'exclusion < 100 pg/mL) ou le NT-proBNP (< 300 pg/mL).",
      "B) L'angiotensine II plasmatique.",
      "C) L'aldostérone urinaire.",
      "D) La vasopressine sérique.",
      "E) La rénine active circulante."
    ],
    correctAnswers: [0],
    explanation: "Les peptides natriurétiques (BNP et NT-proBNP) sont sécrétés par les cardiomyocytes en réponse à l'étirement pariétal et à l'augmentation des pressions de remplissage. Une valeur basse élimine l'OAP avec une VPN > 98%.",
    clinicalPearl: "Dyspnée aux urgences : BNP < 100 pg/mL ou NT-proBNP < 300 pg/mL exclut formellement l'OAP cardiaque."
  },
  {
    id: 'q-choc-18',
    courseId: 'crs-choc-oap',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle anomalie rénale biologique aiguë est une conséquence directe de l'hypodébit cardiaque et de la congestion veineuse rénale dans le choc cardiogénique (syndrome cardio-rénal aigu de type 1) ?",
    options: [
      "A) Oligo-anurie (< 0,5 mL/kg/h) avec élévation rapide de la créatininémie et de l'urée sanguine.",
      "B) Polyurie osmotique > 5 litres par jour.",
      "C) Protéinurie massive à 15 g/24h sans insuffisance rénale.",
      "D) Hématurie microscopique isolée sans aucune variation de la clairance.",
      "E) Glycosurie rénale normoglycémique."
    ],
    correctAnswers: [0],
    explanation: "L'oligurie est un signe clinique cardinal d'hypoperfusion périphérique dans le choc. La baisse de pression de perfusion rénale associée à l'élévation de la pression veineuse centrale (congestion rétrograde) altère le gradient de filtration glomérulaire.",
    clinicalPearl: "Signe clinique précoce d'hypoperfusion dans le choc : Diurèse < 0,5 mL/kg/h (surveillance horaire par sonde urinaire)."
  },
  {
    id: 'q-choc-19',
    courseId: 'crs-choc-oap',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel effet délétère de la morphine intraveineuse anciennement utilisée dans l'OAP a conduit les recommandations récentes à en déconseiller l'usage systématique ?",
    options: [
      "A) Dépression respiratoire centrale, augmentation du recours à l'intubation trachéale et surmortalité hospitalière.",
      "B) Hypertension artérielle maligne réflexe.",
      "C) Hyperglycémie hyperosmolaire.",
      "D) Hémorragie rétinienne bilatérale.",
      "E) Rupture myocardique iatrogène."
    ],
    correctAnswers: [0],
    explanation: "Plusieurs registres et méta-analyses ont montré que l'utilisation de morphine dans l'OAP aigu est associée à un risque accru de dépression respiratoire, d'intubation endotrachéale et de décès hospitalier. Son usage est désormais réservé aux patients très anxieux ou douloureux sous surveillance étroite.",
    clinicalPearl: "Morphine dans l'OAP : Déconseillée en routine (majore les besoins d'intubation et la mortalité)."
  },
  {
    id: 'q-choc-20',
    courseId: 'crs-choc-oap',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle assistance ventriculaire mécanique percutanée consiste en une micro-pompe axiale insérée par l'artère fémorale jusque dans la cavité ventriculaire gauche pour aspirer le sang du VG et le propulser dans l'aorte ascendante ?",
    options: [
      "A) Le dispositif Impella (Impella CP / Impella 5.5).",
      "B) Le ballon de contre-pulsion aortique simple.",
      "C) Le filtre de Greenfield.",
      "D) Le clip mitral MitraClip.",
      "E) L'ombrelle d'Amplatzer."
    ],
    correctAnswers: [0],
    explanation: "Le dispositif Impella est une pompe microaxiale transvalvulaire positionnée à travers la valve aortique. Elle décharge activement le ventricule gauche (déchargement de la précharge et du volume VG) tout en assurant un débit cardiaque direct de 2,5 à 5,5 L/min dans l'aorte.",
    clinicalPearl: "Dispositif Impella : Pompe microaxiale transvalvulaire assurant la décharge directe du VG et un débit systémique."
  },
  {
    id: 'q-choc-21',
    courseId: 'crs-choc-oap',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle classe de classification de la SCAI (Society for Cardiovascular Angiography and Interventions) correspond au choc cardiogénique réfractaire avec défaillance multiviscérale nécessitant de multiples vasopresseurs et une assistance mécanique (stade E) ?",
    options: [
      "A) Stade E : 'Extremis' (collapsus circulatoire terminal, arrêt cardiaque réfractaire ou réanimation sous ECMO).",
      "B) Stade A : 'At risk' (patient coronarien stable).",
      "C) Stade B : 'Beginning' (tachycardie sans hypotension).",
      "D) Stade C : 'Classic' (hypotension répondant à un inotrope).",
      "E) Stade D : 'Deteriorating' (détérioration sous un traitement)."
    ],
    correctAnswers: [0],
    explanation: "La classification SCAI stadifie le choc cardiogénique de A à E : A (À risque), B (Débutant), C (Classique avec inotrope), D (Détérioration/Aggravation malgré 1 support), E (Extremis : collapsus circulatoire terminal avec multiples assistances/réanimation active).",
    clinicalPearl: "Stades SCAI du choc cardiogénique : A (At risk) → B (Beginning) → C (Classic) → D (Deteriorating) → E (Extremis)."
  },
  {
    id: 'q-choc-22',
    courseId: 'crs-choc-oap',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pourquoi le ballon de contre-pulsion intra-aortique (CPIA) n'est-il plus recommandé en routine dans le choc cardiogénique post-infarctus sans complication mécanique (essai IABP-SHOCK II) ?",
    options: [
      "A) Il n'a démontré aucun bénéfice sur la survie à 30 jours ni à 1 an par rapport au traitement médical optimal seul.",
      "B) Il provoque une oblitération bilatérale systématique des carotides.",
      "C) Il est inefficace pour gonfler en diastole.",
      "D) Il est totalement contre-indiqué en salle de coronarographie.",
      "E) Il augmente la post-charge aortique en systole."
    ],
    correctAnswers: [0],
    explanation: "L'essai randomisé multicentrique IABP-SHOCK II a démontré que l'utilisation systématique du ballon de contre-pulsion aortique n'améliore pas la mortalité à 30 jours ni à 1 an dans le choc post-SCA revascularisé. Il garde une indication en cas de complication mécanique (IM aiguë, CIV).",
    clinicalPearl: "CPIA dans le choc post-infarctus : Pas d'indication en routine (essai IABP-SHOCK II négatif) ; réservé aux complications mécaniques (CIV, IM aiguë)."
  },
  {
    id: 'q-choc-23',
    courseId: 'crs-choc-oap',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est l'effet physiologique immédiat de la position assise jambes pendantes chez un patient en détresse respiratoire aiguë sur OAP ?",
    options: [
      "A) Séquestration veineuse splanchnique et périphérique réduisant le retour veineux et la précharge cardiaque.",
      "B) Augmentation massive du retour veineux cave vers le cœur droit.",
      "C) Vasoconstriction rénale artérielle sélective.",
      "D) Diminution de la compliance thoraco-pulmonaire.",
      "E) Augmentation du débit coronaire gauche."
    ],
    correctAnswers: [0],
    explanation: "L'installation assise jambes pendantes est le premier geste salvateur simple : la gravité piège le sang veineux dans les membres inférieurs, diminuant le retour veineux au cœur droit (baisse de précharge) et soulageant la pression capillaire pulmonaire.",
    clinicalPearl: "Position assise jambes pendantes = 'Saignée blanche' physiologique réduisant immédiatement la précharge cardiaque."
  },
  {
    id: 'q-choc-24',
    courseId: 'crs-choc-oap',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel inhibiteur de la phosphodiestérase III (inotrope et vasodilatateur systémique et pulmonaire) peut être utilisé en alternative ou association dans le choc cardiogénique avec vasoconstriction pulmonaire importante ?",
    options: [
      "A) La Milrinone.",
      "B) L'Adrénaline en aérosol.",
      "C) Le Vérapamil.",
      "D) Le Salbutamol IV.",
      "E) L'Acétazolamide."
    ],
    correctAnswers: [0],
    explanation: "La Milrinone est un inodilatateur : elle augmente l'AMP cyclique intracellulaire, renforçant l'inotropisme tout en exerçant une vasodilatation périphérique et surtout artérielle pulmonaire, utile dans l'hypertension pulmonaire aiguë décompensée.",
    clinicalPearl: "Milrinone / Lévosimendan = Inodilatateurs indiqués si HTAP post-capillaire majeure ou résistance aux catécholamines."
  },
  {
    id: 'q-choc-25',
    courseId: 'crs-choc-oap',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quelle anomalie gazométrique sévère dans l'OAP épuisé doit faire poser sans délai l'indication d'une intubation orotrachéale avec ventilation mécanique invasive ?",
    options: [
      "A) Hypercapnie majeure progressive (PaCO2 > 55-60 mmHg) avec acidose respiratoire décompensée (pH < 7,20), bradypnée et troubles de conscience.",
      "B) Alcalose respiratoire hypocapnique avec PaO2 à 95%.",
      "C) Alcalose métabolique pure avec kaliémie à 4,0 mmol/L.",
      "D) PaO2 normale sous masque à haute concentration.",
      "E) PaCO2 à 32 mmHg avec polypnée efficace."
    ],
    correctAnswers: [0],
    explanation: "L'épuisement respiratoire se traduit par l'apparition d'une hypercapnie progressive, d'un collapsus ventilatoire (bradypnée, respiration paradoxale thoraco-abdominale), de troubles de conscience et d'une acidose respiratoire sévère (pH < 7,20), imposant l'intubation en urgence.",
    clinicalPearl: "Critères d'intubation dans l'OAP : Épuisement ventilatoire (hypercapnie, acidose pH < 7,20, bradypnée, coma)."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-choc-01',
    courseId: 'crs-choc-oap',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : Le STEMI antérieur compliqué de choc cardiogénique\nUn homme de 61 ans fumeur et dyslipidémique ressent une douleur thoracique constrictive depuis 4 heures. À l'arrivée du SMUR : patient obnubilé, marbré jusqu'aux genoux, sueurs profuses froides. PA à 75/45 mmHg, FC 115 bpm, SpO2 86% en air ambiant. L'auscultation pulmonaire retrouve des râles crépitants jusqu'à mi-champs bilatéraux. L'ECG montre un sus-décalage de ST de 6 mm en V1-V6, D1, aVL (infarctus antérieur étendu). La glycémie est à 11 mmol/L, lactates à 4,8 mmol/L.\nQ1. Quel est le diagnostic syndromique complet ?\nQ2. Quelle est la séquence thérapeutique de sauvetage immédiate ?",
    options: [
      "A) Choc cardiogénique (stade C SCAI) sur STEMI antérieur étendu / Oxygénothérapie/VNI, perfusion immédiate de Noradrénaline (visant PAM >= 65 mmHg) associée à la Dobutamine, et transfert direct en salle de coronarographie pour angioplastie primaire de l'IVA en urgence vitale absolue.",
      "B) Choc septique à point de départ pulmonaire / Antibiothérapie large spectre sans coronarographie.",
      "C) Tamponnade péricardique pure / Ponction péricardique sous-xiphoïdienne aveugle.",
      "D) Embolie pulmonaire bilatérale / Thrombolyse systémique sans coronarographie.",
      "E) Déshydratation aiguë fébrile / Perfusion de 3 litres de sérum glucosé."
    ],
    correctAnswers: [0],
    explanation: "Le patient présente un choc cardiogénique classique sur infarctus antérieur massif. Les piliers du sauvetage sont : support hémodynamique par noradrénaline (pour restaurer la perfusion cérébrale et coronaire) + dobutamine, oxygénation/VNI, et transfert DIRECT sans passer par les urgences en salle de cathétérisme pour revasculariser l'artère coronaire occluse.",
    clinicalPearl: "Choc cardiogénique sur STEMI : Noradrénaline (PAM >= 65) + Dobutamine + Revascularisation coronaire urgente en salle de KT."
  },
  {
    id: 'cas-choc-02',
    courseId: 'crs-choc-oap',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : L'OAP flash hypertensif\nUne femme de 76 ans hypertendue non observante se réveille à 3 heures du matin en asphyxie aiguë brutale. Elle est assise au bord du lit, cyanosée, en sueurs, ne pouvant prononcer un mot. Aux urgences : PA 235/130 mmHg, FC 128 bpm, polypnée à 38/min, SpO2 78% en air ambiant. L'auscultation cardiaque est difficile mais perçoit un galop B3 ; l'auscultation pulmonaire retrouve une marée montante de crépitants fins des bases jusqu'aux apex avec expectoration mousseuse rosée.\nQ1. Quel est le mécanisme hémodynamique prédominant de cet OAP 'flash' ?\nQ2. Quelle trithérapie d'attaque immédiate permet de juguler la crise ?",
    options: [
      "A) Augmentation paroxystique de la post-charge VG par poussée hypertensive avec dysfonction diastolique aiguë / VNI en mode CPAP au masque + Dérivés nitrés IV à forte dose (Dinitrate d'isosorbide ou Trinitrine en titration rapide) + Furosémide IV.",
      "B) Déshydratation extracellulaire sévère / Remplissage vasculaire massif immédiat.",
      "C) Choc anaphylactique alimentaire / Adrénaline IM 0,5 mg répétée.",
      "D) Crise d'asthme aiguë grave / Aérosols répétés de bêta-2 mimétiques sans dérivés nitrés.",
      "E) Pneumopathie bilatérale à pneumocoque / Amoxicilline seule."
    ],
    correctAnswers: [0],
    explanation: "L'OAP flash de l'adulte hypertendu résulte d'un découplage ventriculo-artériel brutal : l'élévation paroxystique des résistances systémiques (post-charge) dépasse la capacité d'éjection du VG, provoquant une élévation catastrophique des pressions capillaires pulmonaires sans rétention hydrosodée préalable majeure. Le traitement d'urgence repose sur la baisse agressive de la post-charge par dérivés nitrés IV titrés et CPAP.",
    clinicalPearl: "OAP flash hypertensif : Dérivés nitrés IV à forte dose + CPAP de Boussignac (le furosémide est secondaire car l'hypovolémie relative guette)."
  },
  {
    id: 'cas-choc-03',
    courseId: 'crs-choc-oap',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : La complication mécanique d'infarctus à J4\nUn patient de 68 ans est hospitalisé en soins intensifs pour un infarctus du myocarde inférieur revascularisé tardivement à la 18e heure. À J4, il présente une dégradation hémodynamique brutale avec collapsus (PA 70/40 mmHg), marbrures et polypnée. L'examen découvre l'apparition de novo d'un souffle holosystolique rude, intense 4/6, irradiant en rayon de roue avec un frémissement palpé au bord gauche du sternum. L'auscultation pulmonaire montre des crépitants aux bases.\nQ1. Quelle complication mécanique aiguë devez-vous suspecter en priorité absolue ?\nQ2. Quel examen d'imagerie au lit confirme le diagnostic et quelle est la sanction ?",
    options: [
      "A) Rupture septale interventriculaire (CIV post-infarctus) / Échocardiographie transthoracique au lit du malade (Doppler couleur montrant le shunt gauche-droit intraventriculaire) et indication chirurgicale urgente de fermeture.",
      "B) Dissection aortique rétrograde / Scanner abdominal.",
      "C) Récidive d'infarctus transmural / Fibrinolyse intraveineuse sans chirurgie.",
      "D) Péricardite post-infarctus (syndrome de Dressler) / Colchicine seule.",
      "E) Rupture de la paroi libre du ventricule droit sans conséquence hémodynamique."
    ],
    correctAnswers: [0],
    explanation: "L'apparition brutale d'un souffle holosystolique rude avec frémissement en rayon de roue à J4 d'un infarctus chez un patient en état de choc signe la rupture du septum interventriculaire. L'ETT confirme le passage turbulent gauche-droit. Le pronostic dépend d'une stabilisation hémodynamique (CPIA / ECMO) et d'une chirurgie cardiaque de fermeture septale en urgence.",
    clinicalPearl: "Souffle holosystolique rude avec frémissement présternal à J4 d'un infarctus = Rupture du septum interventriculaire (CIV post-infarctus)."
  },
  {
    id: 'cas-choc-04',
    courseId: 'crs-choc-oap',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : L'infarctus ventriculaire droit piège\nUn homme de 58 ans consulte pour douleur angineuse épigastrique avec nausées depuis 2 heures. L'ECG 12 dérivations montre un sus-décalage de ST de 3 mm en D2, D3, aVF avec miroir en D1 et aVL. L'infirmier administre une bouffée de Trinitrine sublinguale. Dans les deux minutes, le patient devient cyanosé, obnubilé, et la pression artérielle chute de 135/85 mmHg à 55/30 mmHg avec pouls filant à 55 bpm. Les veines jugulaires sont turgescentes au cou, mais les champs pulmonaires restent strictement clairs à l'auscultation.\nQ1. Quelle dérivation ECG complémentaire fallait-il impérativement réaliser avant de donner les dérivés nitrés ?\nQ2. Quelle est la conduite thérapeutique immédiate pour restaurer la pression artérielle ?",
    options: [
      "A) Dérivations précordiales droites V3R-V4R (sus-décalage en V4R signant l'infarctus du VD) / Arrêt immédiat des nitrés, remplissage vasculaire rapide par sérum physiologique (500 mL) et transfert direct en coronarographie.",
      "B) Dérivations postérieures V7-V8-V9 / Injection d'insuline rapide.",
      "C) Électroencéphalogramme / Injection de furosémide 120 mg IVD.",
      "D) Radiographie du bassin / Mise en position demi-assise avec garrots.",
      "E) Troponine répétée à 6 heures d'intervalle sans traitement."
    ],
    correctAnswers: [0],
    explanation: "Dans tout infarctus inférieur (D2, D3, aVF), la réalisation des dérivations droites V3R et V4R est une règle d'or absolue pour dépister l'extension au ventricule droit. En cas d'atteinte du VD, les dérivés nitrés effondrent la précharge et provoquent un collapsus gravissime réversible sous remplissage vasculaire rapide au sérum salé.",
    clinicalPearl: "Infarctus inférieur : V3R et V4R obligatoires ! Si V4R sus-décalé = DÉRIVÉS NITRÉS STRICTEMENT INTERDITS (remplissage + coronarographie)."
  },
  {
    id: 'cas-choc-05',
    courseId: 'crs-choc-oap',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Le choc cardiogénique réfractaire en réanimation\nUn homme de 48 ans sans comorbidité présente une myocardite fulminante aiguë à entérovirus. Malgré une intubation trachéale, une perfusion de Noradrénaline à 1,5 µg/kg/min et de Dobutamine à 15 µg/kg/min, la PAM reste à 52 mmHg, l'index cardiaque à 1,4 L/min/m² et les lactates sanguins grimpent à 7,2 mmol/L avec oligo-anurie complète (créatinine à 210 µmol/L). L'ETT montre une akinésie quasi-totale avec FEVG mesurée à 10%.\nQ1. Dans quel stade de la classification SCAI du choc se situe ce patient ?\nQ2. Quelle thérapeutique d'assistance circulatoire mécanique de sauvetage extrême s'impose sans délai ?",
    options: [
      "A) Stade E de la SCAI ('Extremis') / Implantation d'une assistance circulatoire par ECMO veino-artérielle (VA-ECMO fémorale) en urgence comme pont vers la récupération ou la greffe cardiaque.",
      "B) Stade A de la SCAI / Arrêt des drogues inotropes et extubation immédiate.",
      "C) Stade B de la SCAI / Traitement par diurétiques thiazidiques oraux seuls.",
      "D) Choc cardiogénique guéri / Transfert en chambre standard.",
      "E) Indication d'un stimulateur cardiaque simple chambre VVI sans assistance."
    ],
    correctAnswers: [0],
    explanation: "Ce patient est au stade E ('Extremis') de la SCAI : défaillance hémodynamique et métabolique réfractaire aux doses maximales de catécholamines. La seule chance de survie repose sur l'implantation d'une VA-ECMO périphérique qui prend en charge 100% du travail cardiaque et assure la perfusion d'organes, en attendant la récupération de la myocardite ou une greffe cardiaque.",
    clinicalPearl: "Choc cardiogénique réfractaire aux catécholamines à forte dose = VA-ECMO d'urgence comme pont vers la guérison ou la transplantation."
  }
];
