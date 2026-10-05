import { Question, CourseResource } from '../../types/medical';

// Lesson 18: Bactériémie / Fongémie
export const INFECTIO_LESSON_18_QUESTIONS: Question[] = [
  {
    id: 'q-inf-18-01',
    courseId: 'crs-inf-18',
    questionNumber: 1,
    type: 'QCM',
    content: "Concernant la technique de réalisation des hémocultures, quelle règle de bonne pratique est essentielle pour limiter les faux positifs liés aux contaminants cutanés ?",
    options: [
      "A. Prélever le sang exclusivement sur un cathéter veineux central ancien déjà en place",
      "B. Réaliser une désinfection cutanée rigoureuse en 4 temps avec antiseptique alcoolique (chlorhexidine ou povidone iodée) et respecter le temps de séchage spontané",
      "C. Remplir les flacons avec moins de 1 ml de sang pour éviter la coagulation",
      "D. Prélever un seul flacon aérobie pour toute la durée de l'hospitalisation",
      "E. Conserver impérativement les flacons au réfrigérateur à 4°C avant acheminement"
    ],
    correctAnswers: [1],
    explanation: "Une désinfection cutanée rigoureuse en 4 temps (dégraissage, rinçage, séchage, antisepsie alcoolique) avec respect du temps de contact d'une minute est indispensable pour éviter la contamination par les commensaux cutanés (SCN, Cutibacterium acnes). Le volume recommandé est de 8 à 10 ml par flacon.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-02',
    courseId: 'crs-inf-18',
    questionNumber: 2,
    type: 'QCM',
    content: "L'isolement d'un Streptococcus gallolyticus (anciennement Streptococcus bovis) dans deux paires d'hémocultures impose obligatoirement la réalisation de quel examen complémentaire ?",
    options: [
      "A. Une tomodensitométrie des sinus maxillaires",
      "B. Une coloscopie totale à la recherche d'un adénome ou d'un adénocarcinome colique sous-jacent",
      "C. Une biopsie hépatique transpariétale",
      "D. Un myélogramme à la recherche d'une leucémie myéloïde",
      "E. Une fibroscopie bronchique avec lavage broncho-alvéolaire"
    ],
    correctAnswers: [1],
    explanation: "L'association entre bactériémie à Streptococcus gallolyticus (S. bovis biotype I) et néoplasie colorectale (polypes villeux, adénocarcinomes) est hautement significative. Une coloscopie totale est systématique et obligatoire, même en l'absence de tout signe d'appel digestif.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-03',
    courseId: 'crs-inf-18',
    questionNumber: 3,
    type: 'QCM',
    content: "Devant toute bactériémie confirmée à Staphylococcus aureus (SASM ou SARM), quel examen complémentaire non invasif est SYSTÉMATIQUEMENT recommandé même en l'absence de souffle cardiaque ?",
    options: [
      "A. Un électroencéphalogramme de veille",
      "B. Une échocardiographie transthoracique (ETT) +/- transœsophagienne (ETO) pour éliminer une endocardite infectieuse",
      "C. Une scintigraphie pulmonaire de ventilation-perfusion",
      "D. Un doppler veineux des membres inférieurs",
      "E. Une gastroscopie à visée hémostatique"
    ],
    correctAnswers: [1],
    explanation: "Staphylococcus aureus possède un tropisme endothélial et valvulaire majeur (greffe endocardique dans 10 à 20% des bactériémies). Une échocardiographie (ETT puis ETO si ETT douteuse ou présence de matériel prothétique) est obligatoire devant TOUTE bactériémie à S. aureus.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-04',
    courseId: 'crs-inf-18',
    questionNumber: 4,
    type: 'QCM',
    content: "Quelle est la durée MINIMALE de l'antibiothérapie par voie intraveineuse pour une bactériémie non compliquée à Staphylococcus aureus sans foyer secondaire identifié ?",
    options: [
      "A. 3 jours",
      "B. 5 jours",
      "C. 14 jours (2 semaines entières)",
      "D. 3 mois",
      "E. 6 mois"
    ],
    correctAnswers: [2],
    explanation: "Une bactériémie à S. aureus n'est JAMAIS une contamination. Même considérée comme non compliquée (hémocultures de contrôle négatives à 48h, apyrexie rapide, ETT/ETO normale, ablation de la porte d'entrée), elle nécessite au minimum 14 jours d'antibiothérapie bactéricide parentérale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-05',
    courseId: 'crs-inf-18',
    questionNumber: 5,
    type: 'QCM',
    content: "Concernant les fongémies (candidémies), quel est le traitement de première intention recommandé chez le patient hospitalisé en réanimation ou en médecine ?",
    options: [
      "A. Fluconazole en monothérapie à faible dose",
      "B. Une échinocandine (Caspofungine, Micafungine ou Anidulafungine) par voie intraveineuse",
      "C. Griséofulvine par voie orale",
      "D. Nystatine en suspension buvable",
      "E. Métronidazole injectable"
    ],
    correctAnswers: [1],
    explanation: "Les recommandations internationales (IDSA, ESCMID) préconisent une échinocandine (Caspofungine, Micafungine, Anidulafungine) en première ligne de traitement d'une candidémie, en raison de son activité fongicide, de son spectre couvrant la majorité des souches de Candida (y compris C. glabrata) et de sa tolérance.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-06',
    courseId: 'crs-inf-18',
    questionNumber: 6,
    type: 'QCM',
    content: "Chez tout patient présentant une candidémie avérée, quel examen spécialisé doit être réalisé systématiquement dès que l'état clinique le permet pour dépister une atteinte oculaire ?",
    options: [
      "A. Une tonométrie à aplanation",
      "B. Un fond d'œil dilaté bilatéral à la recherche d'une chorio-rétinite candidosique",
      "C. Une angiographie rétinienne à la fluorescéine",
      "D. Un champ visuel de Goldmann",
      "E. Une microscopie spéculaire cornéenne"
    ],
    correctAnswers: [1],
    explanation: "Une localisation oculaire (choriorétinite ou endophtalmie candidosique) survient dans 10 à 20% des candidémies et peut entraîner une cécité si elle n'est pas détectée. Un fond d'œil systématique après dilatation pupillaire est obligatoire dans la première semaine suivant le diagnostic.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-07',
    courseId: 'crs-inf-18',
    questionNumber: 7,
    type: 'QCM',
    content: "Dans quelle situation liée à une infection sur cathéter veineux central (CVC) l'ablation du cathéter est-elle FORMELLEMENT OBLIGATOIRE ?",
    options: [
      "A. Fièvre isolée sans frissons chez un patient avec cathéter posé la veille",
      "B. Infection à Staphylococcus aureus, Pseudomonas aeruginosa, Candida spp., ou présence d'un choc septique / d'une thrombophlébite suppurée",
      "C. Simple rougeur cutanée de moins de 5 mm au point d'insertion sans écoulement",
      "D. Isolement d'un Corynebacterium dans une seule boîte",
      "E. Dès que le cathéter a plus de 3 jours d'ancienneté même si stérile"
    ],
    correctAnswers: [1],
    explanation: "L'ablation immédiate du CVC est formelle en cas de : sepsis sévère/choc septique, tunnelite/thrombophlébite suppurée, endocardite, ou dès que le germe isolé est un Staphylococcus aureus, un Candida spp., ou un Pseudomonas aeruginosa, ainsi qu'en cas de bactériémie persistante > 48-72h sous traitement.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-08',
    courseId: 'crs-inf-18',
    questionNumber: 8,
    type: 'QCM',
    content: "Quel critère microbiologique permet de poser le diagnostic d'infection liée au cathéter avec conservation du cathéter par comparaison des hémocultures ?",
    options: [
      "A. Un délai différentiel de positivité (DDP) supérieur ou égal à 2 heures en faveur du prélèvement sur cathéter par rapport au prélèvement sur veine périphérique",
      "B. Un nombre égal de colonies sur les deux flacons",
      "C. Une négativation des hémocultures sur cathéter avant celles de la veine périphérique",
      "D. La présence exclusive de bactéries anaérobies sur le flacon périphérique",
      "E. Une différence de température de 1°C entre les deux flacons"
    ],
    correctAnswers: [0],
    explanation: "Le délai différentiel de positivité (DDP) ≥ 2 heures (flacon prélevé sur cathéter positif au moins 2 heures avant le flacon prélevé sur veine périphérique au même moment) est un critère validé très sensible et spécifique d'infection liée au cathéter.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-18-09',
    courseId: 'crs-inf-18',
    questionNumber: 9,
    type: 'QCM',
    content: "Parmi les micro-organismes suivants isolés dans une seule hémoculture sur six prélevées, lequel est le plus probablement un contaminant cutané plutôt qu'un vrai agent pathogène ?",
    options: [
      "A. Escherichia coli",
      "B. Cutibacterium acnes (anciennement Propionibacterium acnes)",
      "C. Streptococcus pneumoniae",
      "D. Pseudomonas aeruginosa",
      "E. Candida albicans"
    ],
    correctAnswers: [1],
    explanation: "Cutibacterium acnes, les staphylocoques à coagulase négative (SCN), Corynebacterium spp. et Bacillus spp. sont des bactéries commensales de la flore cutanée. Isolés dans un seul flacon sur une série d'hémocultures chez un patient sans matériel prothétique, ils représentent quasi-exclusivement une souillure.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-10',
    courseId: 'crs-inf-18',
    questionNumber: 10,
    type: 'QCM',
    content: "Une bactériémie à Escherichia coli chez un homme de 70 ans est le plus souvent secondaire à quelle porte d'entrée ?",
    options: [
      "A. Cutanée par furoncle",
      "B. Urinaire (pyélonéphrite aiguë ou prostatite aiguë obstructive)",
      "C. Sinusienne maxillaire",
      "D. Otitique chronique",
      "E. Ostéo-articulaire primitive"
    ],
    correctAnswers: [1],
    explanation: "La porte d'entrée urinaire (infection urinaire haute, prostatite, manœuvres urologiques) est la première cause de bactériémie à entérobactéries (E. coli, Klebsiella), suivie de la porte d'entrée digestive et biliaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-11',
    courseId: 'crs-inf-18',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans le traitement d'une bactériémie documentée à Staphylococcus aureus sensible à la méticilline (SASM), quelle est l'antibiothérapie de choix ?",
    options: [
      "A. Vancomycine IV en perfusion continue",
      "B. Pénicilline M intraveineuse (Oxacilline ou Cloxacilline) ou Céfazoline",
      "C. Amoxicilline simple orale",
      "D. Ciprofloxacine en monothérapie",
      "E. Colistine par voie parentérale"
    ],
    correctAnswers: [1],
    explanation: "Pour le SASM, les pénicillines anti-staphylococciques (Oxacilline, Cloxacilline) ou la Céfazoline sont nettement supérieures à la Vancomycine en termes de rapidité bactéricide, de clairance bactérienne et de réduction de la mortalité.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-12',
    courseId: 'crs-inf-18',
    questionNumber: 12,
    type: 'QCM',
    content: "Quel facteur de risque majeur est spécifiquement associé à l'émergence d'une fongémie à Candida glabrata ou Candida krusei plutôt qu'à Candida albicans ?",
    options: [
      "A. L'absence d'antécédent médical",
      "B. Une exposition préalable ou un traitement préventif par le Fluconazole",
      "C. Un régime riche en fibres",
      "D. L'âge inférieur à 20 ans",
      "E. L'arrêt précoce de tout traitement antibiotique"
    ],
    correctAnswers: [1],
    explanation: "L'exposition préalable aux dérivés azolés (notamment au Fluconazole) sélectionne des espèces non-albicans naturellement résistantes ou de sensibilité diminuée, en particulier Candida krusei (résistance naturelle intrinsèque au fluconazole) et Candida glabrata.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-18-13',
    courseId: 'crs-inf-18',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans la prise en charge d'une bactériémie nosocomiale à Pseudomonas aeruginosa, quelle association d'antibiotiques bactéricides synergiques est préconisée en probabiliste ou en début de traitement ciblé ?",
    options: [
      "A. Amoxicilline + Acide clavulanique",
      "B. Bêta-lactamine antipyocyanique (Ceftazidime, Céfépime, Pipéracilline-Tazobactam ou Méropénème) associée à un aminoside (Amikacine ou Tobramycine)",
      "C. Vancomycine + Rifampicine",
      "D. Métronidazole + Clarithromycine",
      "E. Érythromycine + Doxycycline"
    ],
    correctAnswers: [1],
    explanation: "Pour P. aeruginosa en situation sévère, une bithérapie bactéricide synergique associant une bêta-lactamine antipyocyanique et un aminoside (Amikacine) est recommandée pendant les 3 à 5 premiers jours pour élargir le spectre, accélérer la bactéricidie et prévenir l'émergence de mutants résistants.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-14',
    courseId: 'crs-inf-18',
    questionNumber: 14,
    type: 'QCM',
    content: "Après retrait d'un cathéter veineux central infecté chez un patient présentant une candidémie, quand doit-on débuter le décompte de la durée minimale de 14 jours de traitement antifongique ?",
    options: [
      "A. Dès le jour de l'admission à l'hôpital",
      "B. À partir du premier jour de négativation documentée des hémocultures de contrôle",
      "C. À partir de la pose du cathéter",
      "D. Dès l'obtention de l'antifongigramme",
      "E. Après 30 jours d'observation"
    ],
    correctAnswers: [1],
    explanation: "La durée minimale du traitement d'une candidémie (14 jours) se calcule obligatoirement à partir du jour où la première hémoculture de contrôle revient stérile ET après résolution des signes cliniques et ablation du cathéter.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-18-15',
    courseId: 'crs-inf-18',
    questionNumber: 15,
    type: 'QCM',
    content: "Quelle porte d'entrée doit être recherchée devant une bactériémie récidivante à Enterococcus faecalis chez un patient sans anomalie urinaire ?",
    options: [
      "A. Pulmonaire aiguë",
      "B. Digestive ou biliaire (et recherche systématique d'une endocardite infectieuse entéroococcique)",
      "C. Cutanée par piqûre de moustique",
      "D. Conjonctivale bilatérale",
      "E. Rhino-sinusienne"
    ],
    correctAnswers: [1],
    explanation: "Enterococcus faecalis est un hôte normal du tube digestif et des voies biliaires. Les bactériémies à entérocoque se compliquent d'endocardite dans 15 à 30% des cas, imposant une exploration digestive (coloscopie, écho biliaire) et cardiaque rigoureuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-16',
    courseId: 'crs-inf-18',
    questionNumber: 16,
    type: 'QCM',
    content: "Dans le cadre des infections sur matériel étranger d'ostéosynthèse, quel micro-organisme commensal de la peau est capable de former un biofilm tenace à l'origine d'infections chroniques torpides ?",
    options: [
      "A. Staphylococcus epidermidis (staphylocoque à coagulase négative)",
      "B. Streptococcus pneumoniae",
      "C. Neisseria meningitidis",
      "D. Shigella sonnei",
      "E. Vibrio cholerae"
    ],
    correctAnswers: [0],
    explanation: "Staphylococcus epidermidis produit un slime extracellulaire formant un biofilm protecteur sur les biomatériaux prothétiques, le rendant inaccessible aux défenses de l'hôte et tolérant aux antibiotiques usuels.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-17',
    courseId: 'crs-inf-18',
    questionNumber: 17,
    type: 'QCM',
    content: "Quelle anomalie ophtalmologique à l'examen du fond d'œil est caractéristique d'une dissémination hématogène lors d'une candidémie ?",
    options: [
      "A. Œdème papillaire bilatéral avec décollement de rétine rhegmatogène",
      "B. Exsudats cotonneux blanchâtres prérétiniens ou choriorétiniens 'en boules de coton' dans le vitré",
      "C. Hémorragies en flammèches péripapillaires isolées",
      "D. Taches de Roth pétéchiales sans infiltration blanche",
      "E. Occlusion de l'artère centrale de la rétine"
    ],
    correctAnswers: [1],
    explanation: "Les lésions rétiniennes de la chorioretinite candidosique sont typiquement des foyers exsudatifs blancs, saillants, 'en boules de coton', pouvant faire saillie dans la cavité vitréenne.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-18-18',
    courseId: 'crs-inf-18',
    questionNumber: 18,
    type: 'QCM',
    content: "Quelle est la conduite à tenir thérapeutique en cas de découverte d'une souche de Staphylococcus aureus résistant à la méticilline (SARM) responsable de bactériémie ?",
    options: [
      "A. Cloxacilline 12 g/jour",
      "B. Vancomycine IV (avec suivi du taux résiduel ou de l'AUC) ou Daptomycine à forte dose (8 à 10 mg/kg/j)",
      "C. Amoxicilline 1 g x 3/jour par voie orale",
      "D. Céfazoline 2 g x 3/jour",
      "E. Céfixime oral 400 mg/jour"
    ],
    correctAnswers: [1],
    explanation: "Le SARM résiste à toutes les bêta-lactamines classiques par production de PBP2a modifiée. Les molécules de référence sont les glycopeptides (Vancomycine avec maintien d'un taux résiduel de 15 à 20 mg/L) ou la Daptomycine à forte dose.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-19',
    courseId: 'crs-inf-18',
    questionNumber: 19,
    type: 'QCM',
    content: "Quel mécanisme bactérien confère à Staphylococcus aureus la résistance à la méticilline (SARM) ?",
    options: [
      "A. La sécrétion d'une pénicillinase plasmidique inductible",
      "B. L'acquisition du gène mecA ou mecC codant pour une nouvelle protéine de liaison à la pénicilline à faible affinité (PLP2a ou PBP2a)",
      "C. La perte d'une porine membranaire OmpC",
      "D. La mutation de la gyrase d'ADN GyrA",
      "E. La production d'une carbapénémase OXA-48"
    ],
    correctAnswers: [1],
    explanation: "La résistance à la méticilline chez S. aureus est médiée par le gène mecA situé sur la cassette chromosomique SCCmec, codant pour la PLP2a (PBP2a), qui possède une très faible affinité pour l'ensemble des bêta-lactamines usuelles.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-18-20',
    courseId: 'crs-inf-18',
    questionNumber: 20,
    type: 'QCM',
    content: "Quel volume de sang total par paire d'hémocultures (aérobie + anaérobie) est optimal chez l'adulte pour maximiser le rendement bactériologique sans dilution excessive ?",
    options: [
      "A. 1 à 2 ml au total",
      "B. 4 à 5 ml au total",
      "C. 16 à 20 ml au total (soit 8 à 10 ml par flacon)",
      "D. 50 ml par flacon",
      "E. 100 ml au total"
    ],
    correctAnswers: [2],
    explanation: "Le rendement des hémocultures dépend directement du volume de sang ensemencé. La recommandation consensuelle est de prélever 8 à 10 ml de sang par flacon, soit 16 à 20 ml par paire (aérobie/anaérobie), avec un minimum de 2 à 3 paires sur 24 heures (40 à 60 ml au total).",
    difficulty: 'facile'
  },

  // 5 Progressive Clinical Cases for Lesson 18
  {
    id: 'q-inf-18-c1',
    courseId: 'crs-inf-18',
    questionNumber: 21,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - ÉTAPE 1 : Une femme de 42 ans porteuse d'une voie veineuse centrale pour chimiothérapie présente un pic fébrile à 39,2°C avec frissons 30 minutes après une perfusion sur le cathéter. La peau autour de l'orifice cutané est propre. Deux paires d'hémocultures sont prélevées (une sur cathéter, une sur veine périphérique). L'hémoculture sur cathéter se positive en 6 heures avec des cocci Gram positif en amas (S. aureus sensible à la méticilline). L'hémoculture périphérique se positive en 14 heures. Quel diagnostic portez-vous et quelle décision prenez-vous pour le CVC ?",
    options: [
      "A. Simple contamination ; maintien du cathéter et surveillance",
      "B. Infection liée au CVC à Staphylococcus aureus (DDP = 8 heures > 2h) ; ablation impérative du cathéter et antibiothérapie par Cloxacilline IV pendant au moins 14 jours",
      "C. Choc anaphylactique retardé ; arrêt des solutés",
      "D. Changement de cathéter sur guide sans antibiothérapie",
      "E. Traitement par Vancomycine seule en conservant le CVC"
    ],
    correctAnswers: [1],
    explanation: "Le DDP est de 8h (positivité sur CVC 8 heures avant la veine périphérique), confirmant l'infection liée au cathéter. En présence de S. aureus, l'ablation du cathéter est non négociable en raison du risque de greffe métastatique et de récidive, avec Cloxacilline IV au moins 14 jours.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-c2',
    courseId: 'crs-inf-18',
    questionNumber: 22,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - ÉTAPE 1 : Un homme de 68 ans sans aucun antécédent cardiaque consulte pour fièvre vespérale et asthénie depuis 1 mois. Les 3 hémocultures isolent un Streptococcus gallolyticus. L'échocardiographie retrouve une végétation mobile de 12 mm sur le feuillet antérieur de la valve mitrale. Quelle exploration digestive est impérative avant la fin du séjour hospitalier ?",
    options: [
      "A. Transit du grêle au baryte",
      "B. Coloscopie totale à la recherche d'une néoplasie colique",
      "C. Manométrie œsophagienne",
      "D. Échographie hépatique seule",
      "E. Dosage des enzymes pancréatiques"
    ],
    correctAnswers: [1],
    explanation: "Une bactériémie/endocardite à Streptococcus gallolyticus impose une coloscopie totale pour dépister une lésion néoplasique colique sous-jacente (adénome villeux ou adénocarcinome).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-c3',
    courseId: 'crs-inf-18',
    questionNumber: 23,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 - ÉTAPE 1 : Un patient hospitalisé en réanimation depuis 18 jours pour pancréatite aiguë nécrosante, sous nutrition parentérale exclusive et antibiothérapie à large spectre (Méropénème + Vancomycine), développe une dégradation hémodynamique fébrile. Les flacons d'hémocultures révèlent la présence de levures bourgeonnantes. Quel est le traitement antifongique d'urgence à débuter et quel geste technique doit être réalisé sur les abords vasculaires ?",
    options: [
      "A. Fluconazole oral ; maintien du cathéter",
      "B. Échinocandine IV (Caspofungine ou Anidulafungine) en urgence et ablation immédiate du cathéter veineux central",
      "C. Amphothéricine B per os ; rinçage du cathéter par héparine",
      "D. Griséofulvine injectable ; surveillance",
      "E. Voriconazole en aérosols exclusifs"
    ],
    correctAnswers: [1],
    explanation: "Devant une candidémie chez un patient lourdement exposé aux antibiotiques en réanimation, le traitement de 1ère intention est une échinocandine IV. L'ablation du cathéter veineux central est obligatoire pour contrôler la source de l'infection.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-c4',
    courseId: 'crs-inf-18',
    questionNumber: 24,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 - ÉTAPE 1 : Un patient de 72 ans sous chimiothérapie pour myélome présente une bactériémie à Staphylococcus epidermidis résistant à la méticilline confirmée sur 3 hémocultures distinctes avec fièvre et sepsis. L'antibiogramme confirme la résistance aux bêta-lactamines et la sensibilité aux glycopeptides. Quel antibiotique parentéral prescrivez-vous avec surveillance obligatoire des taux sériques ?",
    options: [
      "A. Amoxicilline 1 g x 3/jour",
      "B. Vancomycine IV avec dosage du taux résiduel pour viser 15 à 20 mg/L",
      "C. Ciprofloxacine en monothérapie",
      "D. Céfotaxime à forte dose",
      "E. Spiramycine per os"
    ],
    correctAnswers: [1],
    explanation: "Les staphylocoques à coagulase négative résistants à la méticilline se traitent par les glycopeptides (Vancomycine). Pour éviter l'échec et la néphrotoxicité, un suivi thérapeutique pharmacologique (dosage du taux résiduel 15-20 mg/L ou AUC) est requis.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-18-c5',
    courseId: 'crs-inf-18',
    questionNumber: 25,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 - ÉTAPE 1 : Chez une patiente traitée pour candidémie à Candida albicans, une hémoculture de contrôle à 48 heures est négative. Le fond d'œil réalisé à J4 montre deux petites lésions choriorétiniennes blanchâtres sans atteinte vitréenne. Quelle est la conséquence sur le choix thérapeutique et la durée du traitement antifongique ?",
    options: [
      "A. Arrêt immédiat de tout antifongique car le vitré est indemne",
      "B. Poursuite d'un antifongique ayant une excellente pénétration oculaire (Fluconazole ou Voriconazole) pendant une durée prolongée d'au moins 4 à 6 semaines",
      "C. Utilisation exclusive de collyres antiseptiques",
      "D. Injection intravitréenne immédiate de corticoïdes purs",
      "E. Énucléation de l'œil atteint"
    ],
    correctAnswers: [1],
    explanation: "La chorioretinite candidosique impose un traitement par une molécule diffusant remarquablement dans les tissus oculaires (le Fluconazole à haute dose est le médicament de référence pour C. albicans) pour une durée prolongée de 4 à 6 semaines jusqu'à cicatrisation complète.",
    difficulty: 'moyen'
  }
];

export const INFECTIO_LESSON_18_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-18-mindmap',
    courseId: 'crs-inf-18',
    title: 'Mind Map : Démarche Diagnostique & Thérapeutique des Bactériémies & Fongémies',
    type: 'mindmap',
    content: `
# MIND MAP : BACTÉRIÉMIES & FONGÉMIES
*Prise en charge standardisée selon les Conférences de Consensus Internationales*

## 1. STRATÉGIE DES HÉMOCULTURES
- **Volume** : 8-10 ml par flacon (16-20 ml par paire), 2 à 3 paires sur 24h.
- **Asepsie cutanée** : 4 temps (dégraissage, rinçage, séchage, alcoolique), respecter séchage spontané.
- **Moment** : Idéalement au frisson / pic thermique, TOUJOURS AVANT toute antibiothérapie.
- **Délai Différentiel de Positivité (DDP)** : Hémoculture sur cathéter positive ≥ 2h avant la veine périphérique = Infection liée au KT.

## 2. PORTES D'ENTRÉE & GERMES PRIVILÉGIÉS
- **Cutanée / Matériel vasculaire** : *Staphylococcus aureus*, *Staphylocoques à coagulase négative (SCN)*, *Candida*.
- **Urinaire** : *Escherichia coli*, *Klebsiella pneumoniae*, *Proteus mirabilis*.
- **Digestive / Biliaire** : *E. coli*, *Enterococcus faecalis*, anaérobies (*B. fragilis*), *Streptococcus gallolyticus* (**-> COLOSCOPIE OBLIGATOIRE**).
- **Pulmonaire** : *Streptococcus pneumoniae*, *Legionella pneumophila*.

## 3. LES 3 RÈGLES D'OR DE LA BACTÉRIÉMIE À STAPHYLOCOCCUS AUREUS
1. **JAMAIS un contaminant** : Toujours traitée et explorée.
2. **Échocardiographie systématique** (ETT +/- ETO) : 15-20% de greffes endocardiques méconnues.
3. **Durée minimale** : 14 jours IV pour les formes non compliquées, 4-6 semaines si compliquée.

## 4. CANDIDÉMIES (FONGÉMIES)
- **1ère intention** : Échinocandine IV (Caspofungine, Micafungine, Anidulafungine).
- **Gestes impératifs** :
  - Retrait systématique du CVC.
  - Fond d'œil dilaté (dépistage de choriorétinite).
  - Échocardiographie.
  - Durée : 14 jours minimum après la 1ère hémoculture stérile.
`
  },
  {
    id: 'res-inf-18-astuces',
    courseId: 'crs-inf-18',
    title: 'Astuces & Pièges aux Concours - Bactériémies & Fongémies',
    type: 'astuce',
    content: `
# ASTUCES & PIÈGES AU CONCOURS (BACTÉRIÉMIE & FONGÉMIE)
*Par Dr. LAIDANI.M - Urgences & Maladies Infectieuses*

### ⚠️ PIÈGE N°1 : Le Streptococcus bovis / gallolyticus
- Question récurrente au Résidanat : « Quel examen complémentaire demandez-vous devant une bactériémie à Streptococcus bovis ? »
- **Réponse réflexe** : Coloscopie totale (association formelle avec polype adénomateux et cancer colique).

### ⚠️ PIÈGE N°2 : La fausse négativité de l'hémoculture sur cathéter
- Ne jamais prélever de sang à travers une tubulure où passe une perfusion d'antibiotique en cours !

### ⚠️ PIÈGE N°3 : Le retrait du cathéter
- Retrait immédiat si : *Staph aureus*, *Candida*, *Pseudomonas*, choc septique, thrombophlébite suppurée ou tunnelite.
`
  }
];

// Lesson 19: Sepsis & Choc septique
export const INFECTIO_LESSON_19_QUESTIONS: Question[] = [
  {
    id: 'q-inf-19-01',
    courseId: 'crs-inf-19',
    questionNumber: 1,
    type: 'QCM',
    content: "Selon la définition internationale Sepsis-3 (2016), comment le 'Sepsis' est-il actuellement défini ?",
    options: [
      "A. La présence d'une bactériémie confirmée par au moins deux hémocultures positives",
      "B. Une dysfonction d'organe menaçant le pronostic vital, causée par une réponse dérégulée de l'hôte à une infection (variation aiguë du score SOFA ≥ 2)",
      "C. La présence d'au moins 2 critères du syndrome de réponse inflammatoire systémique (SIRS)",
      "D. Une fièvre supérieure à 39°C avec hyperleucocytose > 15 000/mm³",
      "E. Une hypotension artérielle transitoire répondant immédiatement au remplissage"
    ],
    correctAnswers: [1],
    explanation: "Selon le consensus international Sepsis-3 (JAMA 2016), le sepsis est défini comme une dysfonction d'organe menaçant le pronostic vital causée par une réponse inappropriée de l'hôte à l'infection, objectivée par une augmentation d'au moins 2 points du score SOFA.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-02',
    courseId: 'crs-inf-19',
    questionNumber: 2,
    type: 'QCM',
    content: "Quels sont les 3 critères cliniques simples constituant le score de dépistage rapide qSOFA (Quick SOFA) hors réanimation ?",
    options: [
      "A. Fièvre > 38,5°C, Diurèse < 30 ml/h, Leucocytes > 12 000/mm³",
      "B. Fréquence respiratoire ≥ 22/min, Altération de la conscience (Glasgow < 15), et Pression artérielle systolique (PAS) ≤ 100 mmHg",
      "C. Tachycardie > 100 bpm, Fréquence respiratoire > 20/min, Température < 36°C",
      "D. Lactates > 2 mmol/L, Glycémie > 10 mmol/L, Thrombopénie < 100 000/mm³",
      "E. Saturation O2 < 90%, Marbrures cutanées, Oligurie"
    ],
    correctAnswers: [1],
    explanation: "Le score qSOFA comprend 3 items cotés chacun à 1 point : 1) Fréquence respiratoire ≥ 22/min ; 2) Altération de l'état de conscience (Glasgow < 15) ; 3) Pression artérielle systolique ≤ 100 mmHg. Un score qSOFA ≥ 2 identifie les patients à haut risque d'évolution défavorable.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-03',
    courseId: 'crs-inf-19',
    questionNumber: 3,
    type: 'QCM',
    content: "Selon Sepsis-3, quels sont les deux critères clinico-biologiques définissant le Choc Septique après réanimation volémique adéquate ?",
    options: [
      "A. Température > 40°C et leucocytes > 25 000/mm³",
      "B. Nécessité de vasopresseurs pour maintenir une PAM ≥ 65 mmHg ET hyperlactatémie persistante > 2 mmol/L (18 mg/dL)",
      "C. Présence de marbrures cutanées et frissons intenses",
      "D. Baisse de la diurèse à zéro pendant 15 minutes",
      "E. Saturation veineuse centrale en O2 (ScvO2) > 90%"
    ],
    correctAnswers: [1],
    explanation: "Le choc septique est un sous-ensemble du sepsis associant : 1) une hypotension réfractaire au remplissage nécessitant l'emploi de vasopresseurs pour maintenir une pression artérielle moyenne (PAM) ≥ 65 mmHg ; ET 2) une anomalie du métabolisme cellulaire avec lactates sanguins > 2 mmol/L.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-04',
    courseId: 'crs-inf-19',
    questionNumber: 4,
    type: 'QCM',
    content: "Dans le cadre du 'Hour-1 Bundle' de la Surviving Sepsis Campaign, quel est le délai maximal impératif pour administrer l'antibiothérapie par voie intraveineuse à large spectre dès la reconnaissance du sepsis ou choc septique ?",
    options: [
      "A. Dans les 6 heures",
      "B. Dans la 1ère heure (≤ 60 minutes)",
      "C. Dans les 24 heures après les résultats bactériologiques",
      "D. Dans les 12 heures",
      "E. Dès le troisième jour"
    ],
    correctAnswers: [1],
    explanation: "L'administration des antibiotiques à large spectre doit être débutée dans la 1ère heure (< 1h) suivant l'identification du sepsis ou du choc septique. Chaque heure de retard augmente significativement la mortalité.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-05',
    courseId: 'crs-inf-19',
    questionNumber: 5,
    type: 'QCM',
    content: "Quel est le soluté de perfusion de premier choix recommandé pour le remplissage vasculaire initial dans le choc septique ?",
    options: [
      "A. Soluté glucosé à 5% ou 10%",
      "B. Solutés colloïdes de synthèse (Hydroxyéthylamidons)",
      "C. Solutés cristalloïdes isotoniques (sérum salé à 0,9% ou cristalloïdes équilibrés type Ringer Lactate) à la dose de 30 ml/kg",
      "D. Gélatines fluides modifiées à forte dose",
      "E. Albumine humaine à 20% en première intention exclusive"
    ],
    correctAnswers: [2],
    explanation: "Les cristalloïdes isotoniques équilibrés (ou le NaCl 0,9%) sont les solutés de premier choix, administrés à la posologie standard de 30 ml/kg dans les 3 premières heures. Les hydroxyéthylamidons (HEA) sont formellement contre-indiqués (toxicité rénale et surmortalité).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-06',
    courseId: 'crs-inf-19',
    questionNumber: 6,
    type: 'QCM',
    content: "Quel est le vasopresseur de première intention recommandé pour restaurer et maintenir une pression artérielle moyenne (PAM) ≥ 65 mmHg dans le choc septique ?",
    options: [
      "A. Dopamine",
      "B. Noradrénaline (perfusion continue au pousse-seringue)",
      "C. Adrénaline en bolus itératifs de 1 mg",
      "D. Phényléphrine",
      "E. Éphédrine"
    ],
    correctAnswers: [1],
    explanation: "La Noradrénaline est le vasopresseur de référence de 1ère intention. Elle possède une puissante action alpha-1 vasoconstrictrice et une action bêta-1 inotrope modérée, avec moins de tachyarythmies et une mortalité inférieure par rapport à la dopamine.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-07',
    courseId: 'crs-inf-19',
    questionNumber: 7,
    type: 'QCM',
    content: "Quelle est la cible initiale optimale de Pression Artérielle Moyenne (PAM) à atteindre lors de la réanimation d'un choc septique ?",
    options: [
      "A. PAM ≥ 50 mmHg",
      "B. PAM ≥ 65 mmHg",
      "C. PAM ≥ 95 mmHg",
      "D. PAM ≥ 120 mmHg",
      "E. PAM peu importe si le pouls est palpable"
    ],
    correctAnswers: [1],
    explanation: "La cible thérapeutique recommandée pour la pression artérielle moyenne est de PAM ≥ 65 mmHg, garantissant une pression de perfusion suffisante pour les organes nobles (cerveau, rein) sans majorer inutilement la post-charge cardiaque.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-08',
    courseId: 'crs-inf-19',
    questionNumber: 8,
    type: 'QCM',
    content: "Dans quelle circonstance une corticothérapie par Hydrocortisone (200 mg/jour IV) est-elle indiquée dans le choc septique ?",
    options: [
      "A. Dès l'admission de tout patient suspect de sepsis sans hypotension",
      "B. Uniquement en cas de choc septique réfractaire persistant malgré un remplissage vasculaire adéquat et l'utilisation de doses élevées de vasopresseurs",
      "C. En association systématique avec les anti-inflammatoires non stéroïdiens",
      "D. Pour accélérer la cicatrisation cutanée",
      "E. Dès que la CRP dépasse 100 mg/L"
    ],
    correctAnswers: [1],
    explanation: "L'Hydrocortisone à dose substitutive (200 mg/jour en perfusion continue ou en 4 injections de 50 mg) est réservée au choc septique réfractaire qui persiste malgré une réanimation volémique optimale et des doses croissantes de noradrénaline (≥ 0,25-0,5 µg/kg/min).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-19-09',
    courseId: 'crs-inf-19',
    questionNumber: 9,
    type: 'QCM',
    content: "Quel paramètre biologique simple mesurable au lit du malade ou aux gaz du sang est le meilleur marqueur de l'hypoxie tissulaire et de l'efficacité de la réanimation dans le choc septique ?",
    options: [
      "A. La glycémie capillaire",
      "B. Le taux de lactate sanguin et sa cinétique de clairance à H2-H4",
      "C. L'acide urique sérique",
      "D. Le cholestérol total",
      "E. La calcémie ionisée"
    ],
    correctAnswers: [1],
    explanation: "La clairance des lactates sanguins (diminution du taux de lactate d'au moins 10-20% toutes les 2 heures) est un indicateur capital de restauration d'une perfusion tissulaire efficace et un facteur pronostique majeur de survie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-10',
    courseId: 'crs-inf-19',
    questionNumber: 10,
    type: 'QCM',
    content: "Quelle molécule inotrope positive est recommandée en cas de dysfonction myocardique septique persistante documentée avec bas débit cardiaque malgré une PAM satisfaisante ?",
    options: [
      "A. Propranolol",
      "B. Dobutamine",
      "C. Diltiazem",
      "D. Nicardipine",
      "E. Vérapamil"
    ],
    correctAnswers: [1],
    explanation: "La Dobutamine (agoniste bêta-1) est le médicament inotrope de choix en cas de cardiomyopathie septique (dysfonction ventriculaire gauche à l'échocardiographie, ScvO2 basse, persistance d'une hypoperfusion tissulaire malgré PAM ≥ 65 mmHg sous noradrénaline).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-11',
    courseId: 'crs-inf-19',
    questionNumber: 11,
    type: 'QCM',
    content: "Parmi les éléments suivants, quel est le score de gravité polyviscérale complet utilisé en réanimation pour évaluer le Sepsis ?",
    options: [
      "A. Le score de Glasgow",
      "B. Le score SOFA (Sequential Organ Failure Assessment)",
      "C. Le score de Child-Pugh",
      "D. Le score de Framingham",
      "E. Le score de Wells"
    ],
    correctAnswers: [1],
    explanation: "Le score SOFA évalue 6 fonctions vitales : respiratoire (PaO2/FiO2), hématologique (plaquettes), hépatique (bilirubine), cardiovasculaire (pression artérielle et drogues vasoactives), neurologique (Glasgow) et rénale (créatinine et diurèse).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-12',
    courseId: 'crs-inf-19',
    questionNumber: 12,
    type: 'QCM',
    content: "Quel est l'objectif minimal de débit urinaire (diurèse) recherché lors de la prise en charge d'un état de choc septique ?",
    options: [
      "A. > 0,1 ml/kg/h",
      "B. > 0,5 ml/kg/h",
      "C. > 5 ml/kg/h",
      "D. > 20 ml/kg/h",
      "E. Aucune diurèse requise"
    ],
    correctAnswers: [1],
    explanation: "Une diurèse horaire > 0,5 ml/kg/h témoigne d'une perfusion rénale minimale adéquate et constitue un des critères d'efficacité de la réanimation hémodynamique initiale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-13',
    courseId: 'crs-inf-19',
    questionNumber: 13,
    type: 'QCM',
    content: "Quel examen physique cutané rapide permet de quantifier cliniquement l'hypoperfusion périphérique et est corrélé à la gravité du choc septique ?",
    options: [
      "A. Le signe du godet",
      "B. Le score de marbrures (Knee Mottling Score) et le temps de recoloration cutanée (TRC)",
      "C. Le dermographisme rouge",
      "D. Le pli cutané sous-ombilical",
      "E. La recherche d'un signe de Darier"
    ],
    correctAnswers: [1],
    explanation: "Le score de marbrures au niveau des genoux (gradé de 0 à 5 selon l'extension) et le temps de recoloration cutanée (TRC > 3 secondes) sont d'excellents reflets cliniques de l'hypoperfusion microcirculatoire et de puissants prédicteurs de mortalité à 14 jours.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-19-14',
    courseId: 'crs-inf-19',
    questionNumber: 14,
    type: 'QCM',
    content: "Dans la prise en charge étiologique du choc septique, quel principe fondamental de traitement médico-chirurgical ne doit jamais être négligé ?",
    options: [
      "A. L'augmentation infinie des doses d'antibiotiques sans chercher de foyer",
      "B. Le contrôle précoce et impératif de la source de l'infection (éradication du foyer : drainage d'un abcès, nécrosectomie, dérivation urinaire sur pyélonéphrite obstructive, retrait d'un matériel infecté)",
      "C. L'attente de 72h avant tout geste chirurgical",
      "D. L'alitement strict sans examen physique complet",
      "E. L'arrêt de l'oxygénothérapie"
    ],
    correctAnswers: [1],
    explanation: "Le contrôle de la porte d'entrée et de la source de l'infection ('source control') dans les 6 à 12 premières heures (ex: dérivation d'un obstacle pyélocaliciel, drainage chirurgical, laparotomie pour perforation digestive) est tout aussi capital que l'antibiothérapie pour la survie du patient.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-15',
    courseId: 'crs-inf-19',
    questionNumber: 15,
    type: 'QCM',
    content: "Concernant la transfusion érythrocytaire dans le choc septique stabilisé, quel est le seuil d'hémoglobine recommandé en l'absence de coronaropathie aiguë ou d'hypoxémie sévère ?",
    options: [
      "A. Transfuser dès que l'hémoglobine est < 12 g/dL",
      "B. Seuil restrictif : transfuser uniquement si l'hémoglobine est < 7 g/dL (objectif 7 à 8 g/dL)",
      "C. Transfuser systématiquement 4 culots globulaires à l'admission",
      "D. Seuil à 10 g/dL pour tous les patients",
      "E. Aucune transfusion n'est jamais indiquée"
    ],
    correctAnswers: [1],
    explanation: "Une stratégie transfusionnelle restrictive (seuil d'hémoglobine à 7 g/dL avec cible entre 7 et 8 g/dL) est recommandée chez les patients de réanimation septiques sans insuffisance coronarienne aiguë, car elle est équivalente voire supérieure en termes de pronostic à une stratégie libérale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-16',
    courseId: 'crs-inf-19',
    questionNumber: 16,
    type: 'QCM',
    content: "Quelle est la principale complication hématologique de consommation des facteurs de l'hémostase survenant dans le choc septique grave ?",
    options: [
      "A. L'hémophilie acquise A",
      "B. La Coagulation Intravasculaire Disséminée (CIVD) avec consommation des plaquettes, du fibrinogène et élévation majeure des D-dimères",
      "C. La maladie de Willebrand constitutionnelle",
      "D. La polyglobulie réactionnelle",
      "E. La thrombocytémie essentielle"
    ],
    correctAnswers: [1],
    explanation: "La libération massive de cytokines pro-inflammatoires (TNF-alpha, IL-1, IL-6) active le facteur tissulaire et la cascade de la coagulation tout en inhibant la fibrinolyse, provoquant une CIVD avec microthromboses d'organes et syndrome hémorragique de consommation.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-17',
    courseId: 'crs-inf-19',
    questionNumber: 17,
    type: 'QCM',
    content: "Quelle est la cible glycémique recommandée chez le patient hospitalisé en réanimation pour choc septique ?",
    options: [
      "A. Contrôle strict de la glycémie entre 4 et 5 mmol/L (0,7 - 0,9 g/L)",
      "B. Glycémie contrôlée entre 8 et 10 mmol/L (1,40 et 1,80 g/L) en évitant formellement l'hypoglycémie",
      "C. Tolérance d'une hyperglycémie jusqu'à 25 mmol/L",
      "D. Zéro apport de glucose pendant 7 jours",
      "E. Glycémie constante à 2 mmol/L"
    ],
    correctAnswers: [1],
    explanation: "L'essai NICE-SUGAR a démontré que le contrôle glycémique très strict augmentait le risque d'hypoglycémies mortelles. La recommandation consensuelle est de débuter l'insuline si la glycémie dépasse 10 mmol/L (1,80 g/L) avec une cible entre 8 et 10 mmol/L (1,40-1,80 g/L).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-19-18',
    courseId: 'crs-inf-19',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans l'évaluation hémodynamique avancée du choc septique, quelle épreuve dynamique permet de prédire avec fiabilité si le patient augmentera son débit cardiaque après un apport volémique ?",
    options: [
      "A. La mesure isolée de la pression veineuse centrale (PVC)",
      "B. L'épreuve de lever de jambe passif (Passive Leg Raising) avec mesure continue du volume d'éjection systolique",
      "C. La radiographie pulmonaire",
      "D. L'auscultation cardiaque seule",
      "E. Le dosage de la troponine"
    ],
    correctAnswers: [1],
    explanation: "Le lever de jambe passif simule un autoremplissage transitoire d'environ 300 ml de sang veineux. Une augmentation du débit cardiaque ou de l'ITV aortique ≥ 10% lors de cette manœuvre réversible prédit une réponse positive au remplissage ('fluid-responsiveness').",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-19-19',
    courseId: 'crs-inf-19',
    questionNumber: 19,
    type: 'QCM',
    content: "Quelle classe de solutés de remplissage est FORMELLEMENT PROSCRITE dans la réanimation du sepsis et du choc septique en raison d'un sur-risque prouvé d'insuffisance rénale aiguë et de recours à l'épuration extrarénale ?",
    options: [
      "A. Les cristalloïdes équilibrés (Ringer Lactate)",
      "B. Le sérum physiologique à 0,9%",
      "C. Les Hydroxyéthylamidons (HEA)",
      "D. L'albumine humaine à 20%",
      "E. Le sérum salé isotonique"
    ],
    correctAnswers: [2],
    explanation: "Les Hydroxyéthylamidons (HEA) sont contre-indiqués dans le sepsis en raison d'une toxicité tubulaire rénale directe majeure démontrée par plusieurs grands essais cliniques randomisés (surmortalité et doublement du recours à la dialyse).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-20',
    courseId: 'crs-inf-19',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle mesure de prévention thromboembolique doit être initiée chez tout patient hospitalisé en réanimation pour choc septique dès que le risque hémorragique est contrôlé ?",
    options: [
      "A. Aspirine à forte dose (1 g/j)",
      "B. Héparine de bas poids moléculaire (HBPM) à dose préventive ou héparine non fractionnée",
      "C. Anti-vitamines K d'emblée à pleine dose",
      "D. Clopidogrel seul",
      "E. Aucune héparine n'est autorisée"
    ],
    correctAnswers: [1],
    explanation: "La thromboprophylaxie par HBPM (ex: Énoxaparine 40 mg/j SC) ou HNF est systématique chez tous les patients septiques en réanimation en raison du risque thromboembolique veineux très élevé induit par l'état pro-inflammatoire et l'alitement.",
    difficulty: 'facile'
  },

  // 5 Progressive Clinical Cases for Lesson 19
  {
    id: 'q-inf-19-c1',
    courseId: 'crs-inf-19',
    questionNumber: 21,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - ÉTAPE 1 : Un homme de 62 ans est admis aux urgences pour pyélonéphrite aiguë fébrile. Constantes initiales : PA 80/45 mmHg (PAM 56 mmHg), FC 128 bpm, FR 26/min, SpO2 93% en air ambiant, T° 39,5°C, patient confus (Glasgow 13). Lactates sanguins veineux : 4,2 mmol/L. Les marbrures atteignent le tiers inférieur des cuisses (score de marbrures = 2). Calculez le score qSOFA et énoncez la prise en charge immédiate dans les 60 minutes.",
    options: [
      "A. qSOFA = 1 ; simple surveillance hydrique par voie orale",
      "B. qSOFA = 3 (FR ≥ 22, PAS ≤ 100, Glasgow < 15) ; Sepsis sévère avec hypoperfusion -> Remplissage cristalloïde 30 ml/kg, hémocultures immédiates, antibiothérapie à large spectre IV (ex: C3G + Amikacine) dans la première heure, transfert déchocage/réa",
      "C. qSOFA = 0 ; traitement ambulatoire",
      "D. Attente de la TDM abdominale avant tout remplissage ou antibiotique",
      "E. Prescription de Paracétamol seul et réévaluation à 6 heures"
    ],
    correctAnswers: [1],
    explanation: "Les 3 critères du qSOFA sont présents (score = 3). Le patient est en état d'hypoperfusion sévère (lactates > 4 mmol/L, PAM < 65 mmHg). Le 'Hour-1 Bundle' doit être appliqué sans délai : hémocultures, antibiothérapie IV, remplissage 30 ml/kg et monitorage strict.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-c2',
    courseId: 'crs-inf-19',
    questionNumber: 22,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - ÉTAPE 1 : Après perfusion rapide de 2 000 ml de cristalloïdes équilibrés chez ce patient (soit 30 ml/kg), la PA reste à 82/48 mmHg (PAM 59 mmHg) et les marbrures persistent. Les gaz du sang montrent des lactates à 3,8 mmol/L. Quelle est la définition exacte de cet état et quelle drogue vasoactive doit être introduite immédiatement ?",
    options: [
      "A. Choc cardiogénique pur ; injection de Furosémide 80 mg",
      "B. Choc septique avéré (hypotension persistante avec lactates > 2 mmol/L malgré remplissage adéquat) ; introduction immédiate de Noradrénaline au pousse-seringue électrique avec pour cible une PAM ≥ 65 mmHg",
      "C. Choc hypovolémique simple ; continuer à perfuser 10 litres de soluté salé",
      "D. Intoxication médicamenteuse ; charbon activé",
      "E. Hypotension réflexe bénigne ; surélévation des membres sans traitement"
    ],
    correctAnswers: [1],
    explanation: "La persistance d'une PAM < 65 mmHg avec hyperlactatémie malgré 30 ml/kg de cristalloïdes signe le choc septique. La Noradrénaline est le vasopresseur de premier choix impératif pour remonter la PAM au-dessus de 65 mmHg.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-c3',
    courseId: 'crs-inf-19',
    questionNumber: 23,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 - ÉTAPE 1 : Une patiente de 74 ans présente un choc septique secondaire à une cholécystite aiguë gangreneuse lithiasique. Sous Noradrénaline à 0,3 µg/kg/min, la PAM est stabilisée à 68 mmHg. L'échographie abdominale confirme une vésicule biliaire distendue à paroi épaissie dédoublée avec calcul enclavé. Quelle est l'étape thérapeutique indispensable sans laquelle l'antibiothérapie sera vouée à l'échec ?",
    options: [
      "A. Augmenter la noradrénaline à 2 µg/kg/min sans geste chirurgical",
      "B. Réaliser le contrôle rapide de la source de l'infection ('source control') par cholécystectomie urgente (ou drainage percutané de la vésicule biliaire)",
      "C. Attendre 15 jours d'antibiothérapie exclusive pour refroidir le sepsis",
      "D. Donner de la vitamine C à haute dose",
      "E. Réaliser un lavage gastrique au sérum glacé"
    ],
    correctAnswers: [1],
    explanation: "Le contrôle de la source infectieuse (cholécystectomie urgente ou drainage percutané sous radiologie si risque anesthésique extrême) est capital dans le choc septique abdominal : aucun antibiotique ne peut stériliser une vésicule gangrenée sous tension.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-c4',
    courseId: 'crs-inf-19',
    questionNumber: 24,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 - ÉTAPE 1 : Un patient en réanimation pour choc septique d'origine pulmonaire reste instable sur le plan tensionnel malgré 0,8 µg/kg/min de Noradrénaline et un remplissage optimisé par échocardiographie. Le dosage de la lactatémie augmente à 5,5 mmol/L. Quel traitement adjuvant par corticostéroïde doit être instauré conformément aux recommandations ?",
    options: [
      "A. Dexaméthasone 20 mg/jour pendant 3 semaines",
      "B. Hydrocortisone à la dose de 200 mg/jour par voie intraveineuse (en perfusion continue ou 50 mg toutes les 6 heures)",
      "C. Méthylprednisolone en bolus de 1 g",
      "D. Béclométhasone inhalée",
      "E. Les corticoïdes sont formellement contre-indiqués"
    ],
    correctAnswers: [1],
    explanation: "Dans le choc septique réfractaire nécessitant de fortes doses de vasopresseurs (Noradrénaline ≥ 0,25-0,5 µg/kg/min), l'Hydrocortisone (200 mg/j) permet d'accélérer le sevrage des catécholamines et de raccourcir la durée du choc.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-19-c5',
    courseId: 'crs-inf-19',
    questionNumber: 25,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 - ÉTAPE 1 : Un patient pris en charge pour choc septique présente au bilan à H12 : Plaquettes 48 000/mm³ (vs 220 000 à l'entrée), TP à 42%, TCA ratio à 2,1, Fibrinogène à 0,9 g/L, et D-dimères > 20 000 ng/mL. On note des saignements en nappe aux points de ponction veineuse. Quel diagnostic portez-vous et quel est le traitement prioritaire ?",
    options: [
      "A. Hémophilie constitutionnelle tardive ; facteur VIII",
      "B. Coagulation Intravasculaire Disséminée (CIVD) décompensée de consommation ; le traitement repose en priorité sur le traitement étiologique du choc septique associé à la transfusion de plasma frais congelé (PFC), concentrés plaquettaires et fibrinogène si syndrome hémorragique actif",
      "C. Purpura thrombopénique idiopathique (PTI) ; splénectomie en urgence",
      "D. Surdosage accidentel en aspirine",
      "E. Syndrome myélodysplasique aigu"
    ],
    correctAnswers: [1],
    explanation: "L'association thrombopénie sévère, baisse du TP, effondrement du fibrinogène (< 1 g/L) et élévation massive des D-dimères avec saignements définit une CIVD aiguë de consommation compliquant le choc septique. Le traitement étiologique du choc est la priorité, complété par l'apport de PFC, plaquettes et fibrinogène.",
    difficulty: 'moyen'
  }
];

export const INFECTIO_LESSON_19_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-19-mindmap',
    courseId: 'crs-inf-19',
    title: 'Mind Map : Prise en Charge du Sepsis & Choc Septique (Consensus Sepsis-3 & Surviving Sepsis Campaign)',
    type: 'mindmap',
    content: `
# MIND MAP : SEPSIS & CHOC SEPTIQUE (RECOMMANDATIONS 2024)
*Prise en Charge Urgente & Réanimation Médicale*

## 1. DÉFINITIONS CLÉS (SEPSIS-3)
- **Sepsis** : Infection suspectée ou prouvée + Dysfonction d'organe aiguë (**Score SOFA ≥ 2 points**).
- **qSOFA (Dépistage rapide hors réa, ≥ 2 critères)** :
  1. Fréquence respiratoire ≥ 22 /min
  2. Altération de la conscience (Glasgow < 15)
  3. Pression artérielle systolique ≤ 100 mmHg
- **Choc Septique** : Sepsis + Hypotension nécessitant vasopresseurs pour **PAM ≥ 65 mmHg** ET **Lactates > 2 mmol/L** malgré remplissage adéquat.

## 2. LE PAQUET DE MESURES DE LA 1ÈRE HEURE ("HOUR-1 BUNDLE")
1. **Doser les lactates sanguins** (re-doser si > 2 mmol/L).
2. **Prélever les hémocultures** avant les antibiotiques (sans retarder l'ATB > 45 min).
3. **Administrer une antibiothérapie IV à large spectre** dans l'heure (< 60 min).
4. **Débuter un remplissage par cristalloïdes isotoniques (30 ml/kg)** si PAS < 90 ou lactates ≥ 4 mmol/L.
5. **Introduire la Noradrénaline** si la PAM reste < 65 mmHg pendant ou après le remplissage.

## 3. OBJECTIFS THÉRAPEUTIQUES
- **PAM ≥ 65 mmHg** (Noradrénaline en 1ère intention).
- **Diurèse horaire > 0,5 ml/kg/h**.
- **Clairance des lactates** (> 10-20% toutes les 2h).
- **Disparition des marbrures** et normalisation du temps de recoloration cutanée (< 3s).

## 4. GESTES COMPLÉMENTAIRES ESSENTIELS
- **Source Control** : Drainage, dérivation d'obstacle, ablation de matériel dans les 6 à 12h.
- **Hydrocortisone (200 mg/j)** : Uniquement si choc réfractaire aux vasopresseurs.
- **Dobutamine** : Si dysfonction myocardique septique persistante.
- **Transfusion restrictive** : Seuil à Hb < 7 g/dL (cible 7-8 g/dL).
`
  },
  {
    id: 'res-inf-19-astuces',
    courseId: 'crs-inf-19',
    title: 'Astuces Concours & Pièges Fréquents - Sepsis & Choc Septique',
    type: 'astuce',
    content: `
# ASTUCES & PIÈGES AU CONCOURS (SEPSIS & CHOC SEPTIQUE)
*Par Dr. LAIDANI.M - Réanimation Médicale & Infectiologie*

### ⚠️ PIÈGE N°1 : Les anciens critères SIRS vs Sepsis-3
- Ne cochez plus les critères SIRS (Tachycardie, Leucocytose, etc.) pour définir le sepsis ! Sepsis-3 a aboli le terme 'sepsis sévère'. C'est désormais : **Sepsis** (SOFA ≥ 2) ou **Choc Septique** (Noradrénaline pour PAM ≥ 65 + Lactates > 2 mmol/L).

### ⚠️ PIÈGE N°2 : Le délai de l'antibiothérapie
- Si la question demande le délai maximal pour les antibiotiques dans le choc septique : cochez **1 heure** (pas 3 heures, pas 6 heures !).

### ⚠️ PIÈGE N°3 : Le choix du soluté de remplissage
- Contre-indication absolue des amidons (Hydroxyéthylamidons / Voluven) : toxicité rénale démontrée.
- Toujours choisir : **Cristalloïdes équilibrés (Ringer Lactate) ou Sérum salé 0,9% à 30 ml/kg**.

### ⚠️ PIÈGE N°4 : La Noradrénaline en 1ère ligne
- La Dopamine est détrônée depuis plus de 10 ans : le bon choix QCM est **toujours la Noradrénaline**.
`
  }
];
