import { Question } from '../../types/medical';

export const ENDOCARDITE_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-endo-01',
    courseId: 'crs-endocardite',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel(s) micro-organisme(s) est/sont le(s) plus fréquemment en cause dans l'endocardite infectieuse sur valve native ?",
    options: [
      "a) Staphylococcus aureus",
      "b) Entérocoques",
      "c) Streptocoques (viridans et non groupables)",
      "d) Bacilles à Gram négatif",
      "e) Coxiella burnetii"
    ],
    correctAnswers: [2],
    explanation: "Les streptocoques (notamment les viridans) sont responsables d'environ 60% des EI sur valves natives, souvent via une porte d'entrée bucco-dentaire. Le staphylocoque (a) est plus fréquent dans les EI aiguës et sur prothèses.",
    clinicalPearl: "Valve native = Streptocoque viridans (60% des cas, porte d'entrée bucco-dentaire)."
  },
  {
    id: 'q-endo-02',
    courseId: 'crs-endocardite',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une endocardite sur prothèse précoce (dans les 12 mois post-opératoires) est le plus souvent due à :",
    options: [
      "a) Streptocoque viridans",
      "b) Staphylococcus epidermidis et Staphylococcus aureus",
      "c) Entérocoque",
      "d) Bacille Gram négatif",
      "e) Candida albicans"
    ],
    correctAnswers: [1],
    explanation: "Les staphylocoques (S. epidermidis et S. aureus), souvent acquis lors de l'intervention chirurgicale, sont les principaux responsables des endocardites sur prothèse précoce.",
    clinicalPearl: "Prothèse précoce (< 1 an) = Staphylocoques (S. epidermidis / aureus d'inoculation per-opératoire)."
  },
  {
    id: 'q-endo-03',
    courseId: 'crs-endocardite',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les signes physiques suivants, lequel est considéré comme un signe immunologique (lié aux dépôts de complexes immuns) ?",
    options: [
      "a) Fièvre",
      "b) Souffle cardiaque nouveau",
      "c) Lésion de Janeway",
      "d) Faux panaris d'Osler",
      "e) Splénomégalie"
    ],
    correctAnswers: [3],
    explanation: "Le faux panaris d'Osler (nodules douloureux pulpaire) est une manifestation immunologique. La lésion de Janeway (c) est plutôt embolique (non douloureuse). La splénomégalie (e) peut être liée à l'infection chronique.",
    clinicalPearl: "Nodules d'Osler = Phénomène immunologique douloureux pulpaire ; Taches de Janeway = Emboles septiques indolores."
  },
  {
    id: 'q-endo-04',
    courseId: 'crs-endocardite',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La recherche de la porte d'entrée d'une EI à entérocoque doit initialement se concentrer sur :",
    options: [
      "a) La sphère ORL",
      "b) La sphère cutanée",
      "c) La sphère digestive ou urinaire",
      "d) Un foyer dentaire",
      "e) Un dispositif intravasculaire"
    ],
    correctAnswers: [2],
    explanation: "Les entérocoques, faisant partie des streptocoques du groupe D, ont une porte d'entrée principalement digestive (colon) ou urinaire.",
    clinicalPearl: "EI à Entérocoque / S. gallolyticus = Bilan digestif (coloscopie) et urinaire systématique."
  },
  {
    id: 'q-endo-05',
    courseId: 'crs-endocardite',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen d'imagerie est le plus sensible pour détecter un abcès de l'anneau aortique ?",
    options: [
      "a) Radiographie pulmonaire",
      "b) Échocardiographie transthoracique (ETT)",
      "c) Échocardiographie transœsophagienne (ETO)",
      "d) Scanner cérébral",
      "e) Électrocardiogramme (ECG)"
    ],
    correctAnswers: [2],
    explanation: "L'ETO est nettement plus sensible que l'ETT pour visualiser les complications périvalvulaires comme les abcès, les fistules ou les désinsertions de prothèse.",
    clinicalPearl: "Abcès de l'anneau ou complication péri-valvulaire = ETO indispensable (sensibilité > 90%)."
  },
  {
    id: 'q-endo-06',
    courseId: 'crs-endocardite',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une hémoculture négative dans un contexte d'EI peut être due à :",
    options: [
      "a) Une antibiothérapie préalable, germe intracellulaire (Coxiella), endocardite fongique",
      "b) Une infection à staphylocoque doré aigu",
      "c) Un souffle cardiaque nouveau",
      "d) Une hyperkaliémie",
      "e) Une tamponnade"
    ],
    correctAnswers: [0],
    explanation: "Une antibiothérapie préalable, les germes intracellulaires (Coxiella, Bartonella) ou les levures sont les causes majeures d'endocardites à hémocultures négatives.",
    clinicalPearl: "1ère cause d'hémocultures négatives dans l'EI = Antibiothérapie préalable non documentée."
  },
  {
    id: 'q-endo-07',
    courseId: 'crs-endocardite',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les cardiopathies suivantes, laquelle expose à un HAUT risque d'EI nécessitant une antibioprophylaxie ?",
    options: [
      "a) Prolapsus valvulaire mitral isolé sans régurgitation",
      "b) Communication interauriculaire (CIA) opérée sans résidu",
      "c) Porteur de prothèse valvulaire ou antécédent d'endocardite",
      "d) Calcification de l'anneau mitral isolée",
      "e) Antécédent de rhumatisme articulaire aigu sans séquelle valvulaire"
    ],
    correctAnswers: [2],
    explanation: "Seuls les patients du groupe A (haut risque : prothèse valvulaire, antécédent d'EI, cardiopathie congénitale cyanogène non opérée) relèvent d'une antibioprophylaxie systématique.",
    clinicalPearl: "Haut risque d'EI : Prothèses valvulaires, antécédent d'EI et cardiopathies cyanogènes."
  },
  {
    id: 'q-endo-08',
    courseId: 'crs-endocardite',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La complication la plus fréquente de l'EI est :",
    options: [
      "a) L'embolie cérébrale",
      "b) L'insuffisance cardiaque",
      "c) L'abcès de l'anneau",
      "d) L'insuffisance rénale aiguë",
      "e) Le choc septique"
    ],
    correctAnswers: [1],
    explanation: "L'insuffisance cardiaque, liée à la destruction valvulaire (perforation, rupture de cordage), est la complication la plus fréquente (60-70%) et la première cause de mortalité.",
    clinicalPearl: "Complication n°1 et 1ère cause de décès dans l'EI = Insuffisance cardiaque par mutilation valvulaire."
  },
  {
    id: 'q-endo-09',
    courseId: 'crs-endocardite',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient de 75 ans présente une EI à hémocultures positives à Streptococcus gallolyticus (ex S. bovis). Quel bilan étiologique est prioritaire ?",
    options: [
      "a) Scanner cérébral",
      "b) Panendoscopie digestive (coloscopie)",
      "c) Échographie dentaire",
      "d) Scintigraphie osseuse",
      "e) Sérologie VIH"
    ],
    correctAnswers: [1],
    explanation: "S. gallolyticus est fortement associé aux cancers coliques et aux lésions pré-néoplasiques du côlon, imposant une exploration digestive complète (coloscopie totale).",
    clinicalPearl: "Streptococcus gallolyticus (bovis) = Coloscopie systématique à la recherche d'un cancer du côlon !"
  },
  {
    id: 'q-endo-10',
    courseId: 'crs-endocardite',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le traitement antibiotique de l'EI doit idéalement :",
    options: [
      "a) Être administré par voie intraveineuse, prolongé (4 à 6 semaines), bactéricide et synergique",
      "b) Être bactériostatique pour éviter le choc de lyse",
      "c) Être administré par voie orale ambulatoire d'emblée",
      "d) Être de courte durée (7 à 10 jours)",
      "e) Comprendre uniquement des macrolides"
    ],
    correctAnswers: [0],
    explanation: "Le traitement est IV pour une biodisponibilité optimale, prolongé (4-6 semaines), bactéricide et souvent synergique (ex: bêta-lactamine + aminoside).",
    clinicalPearl: "Principes de l'antibiothérapie de l'EI : Bactéricide, Synergique, Forte dose, IV, Prolongée (4-6 semaines)."
  },
  {
    id: 'q-endo-11',
    courseId: 'crs-endocardite',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'antibiothérapie prophylactique pour un geste dentaire à risque chez un patient à haut risque est :",
    options: [
      "a) Amoxicilline 2g per os 1h avant le geste (ou Clindamycine 600mg si allergie)",
      "b) Ciprofloxacine 500mg per os",
      "c) Administrée systématiquement avant tout soin dentaire bénin",
      "d) Gentamicine IV pendant 7 jours",
      "e) Inutile si le patient a une bonne hygiène buccale"
    ],
    correctAnswers: [0],
    explanation: "L'amoxicilline 2g per os en prise unique 1h avant le geste (ou clindamycine 600 mg si allergie aux pénicillines) est le protocole standard recommandé.",
    clinicalPearl: "Antibioprophylaxie dentaire haut risque : Amoxicilline 2g per os 1h avant (Clindamycine 600mg si allergie)."
  },
  {
    id: 'q-endo-12',
    courseId: 'crs-endocardite',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une complication neurologique de l'EI peut inclure :",
    options: [
      "a) Accident vasculaire cérébral ischémique",
      "b) Méningite purulente",
      "c) Anévrisme mycotique cérébral",
      "d) Abcès cérébral",
      "e) Toutes les réponses ci-dessus"
    ],
    correctAnswers: [4],
    explanation: "Toutes ces complications neurologiques sont possibles, soit par embolie septique, soit par dissémination infectieuse ou rupture d'anévrisme mycotique.",
    clinicalPearl: "Complications neuro de l'EI : AVC ischémique, hémorragie sur anévrisme mycotique, abcès, méningite."
  },
  {
    id: 'q-endo-13',
    courseId: 'crs-endocardite',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel élément de l'ECG est le plus évocateur d'un abcès de l'anneau aortique ?",
    options: [
      "a) Fibrillation auriculaire",
      "b) Bloc atrio-ventriculaire (BAV) d'apparition nouvelle ou évolutif",
      "c) Ondes Q de nécrose",
      "d) Sus-décalage du segment ST",
      "e) Tachycardie sinusale"
    ],
    correctAnswers: [1],
    explanation: "L'apparition ou l'aggravation d'un trouble de conduction (BAV, allongement du PR) est très suggestive de l'extension de l'infection dans le septum, formant un abcès de l'anneau.",
    clinicalPearl: "Allongement du PR ou BAV chez un patient avec endocardite aortique = Abcès septal/annulaire !"
  },
  {
    id: 'q-endo-14',
    courseId: 'crs-endocardite',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'endocardite du cœur droit (tricuspide) chez le toxicomane IV se caractérise par :",
    options: [
      "a) Embolies pulmonaires septiques fréquentes, germe prédominant Staphylococcus aureus",
      "b) Risque embolique cérébral majeur",
      "c) Absence totale de fièvre",
      "d) Présence constante d'un souffle diastolique",
      "e) Atteinte exclusive de la valve aortique"
    ],
    correctAnswers: [0],
    explanation: "L'EI du cœur droit (tricuspide) à staphylocoque doré est classique chez le toxicomane IV. Elle embolise dans la circulation pulmonaire (infarctus pulmonaires et abcès).",
    clinicalPearl: "Toxicomanie IV = Endocardite tricuspide à S. aureus avec embolies pulmonaires septiques."
  },
  {
    id: 'q-endo-15',
    courseId: 'crs-endocardite',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le \"faux panaris d'Osler\" se caractérise par :",
    options: [
      "a) Une lésion maculeuse non douloureuse de la paume des mains",
      "b) Des nodules sous-cutanés douloureux de la pulpe des doigts",
      "c) Des hémorragies linéaires sous-unguéales",
      "d) Une lésion nécrotique de l'orteil",
      "e) Une tache rétinienne hémorragique"
    ],
    correctAnswers: [1],
    explanation: "Ce sont des nodules douloureux de la pulpe des doigts ou des orteils, fugaces, d'origine immunologique par vascularite à complexes immuns.",
    clinicalPearl: "Nodules d'Osler = Nodules pulpaires éphémères et très douloureux."
  },
  {
    id: 'q-endo-16',
    courseId: 'crs-endocardite',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La présence de complexes immuns circulants et de facteur rhumatoïde dans le bilan d'une EI :",
    options: [
      "a) Est un signe indirect d'infection prolongée et est corrélée à des complications rénales (glomérulonéphrite)",
      "b) Est un élément diagnostique majeur obligatoire",
      "c) Contre-indique formellement l'antibiothérapie",
      "d) Est un marqueur spécifique de l'infection à staphylocoque",
      "e) Impose une corticothérapie immédiate"
    ],
    correctAnswers: [0],
    explanation: "Ces marqueurs témoignent d'une stimulation immunitaire chronique et peuvent être associés à des complications comme les glomérulonéphrites à dépôts immuns.",
    clinicalPearl: "Glomérulonéphrite de l'endocardite = Mécanisme immunologique par dépôts de complexes immuns."
  },
  {
    id: 'q-endo-17',
    courseId: 'crs-endocardite',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'échocardiographie dans l'EI recherche principalement :",
    options: [
      "a) La végétation, le mécanisme lésionnel, le retentissement hémodynamique et les complications périvalvulaires",
      "b) Uniquement la fraction d'éjection",
      "c) La présence de thrombus veineux profond",
      "d) Le diamètre des artères fémorales",
      "e) L'aspect de la plèvre"
    ],
    correctAnswers: [0],
    explanation: "L'échocardiographie (surtout l'ETO) est l'examen clé pour le diagnostic positif (végétations), l'évaluation des lésions et la recherche de complications (abcès, désinsertion, perforation).",
    clinicalPearl: "ETO systématique en cas de prothèse valvulaire, ETT douteuse ou suspicion de complication."
  },
  {
    id: 'q-endo-18',
    courseId: 'crs-endocardite',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une indication chirurgicale urgente dans l'EI est :",
    options: [
      "a) Insuffisance cardiaque réfractaire, abcès périvalvulaire, infection fongique, embolies récidivantes",
      "b) Présence d'une fièvre isolée à 38°C",
      "c) Présence d'un nodule d'Osler",
      "d) Hémoculture positive à streptocoque sensible",
      "e) Végétation millimétrique stable"
    ],
    correctAnswers: [0],
    explanation: "L'insuffisance cardiaque réfractaire, les complications périvalvulaires (abcès), les infections fongiques et les embolies récidivantes sous traitement bien conduit sont les indications majeures de chirurgie précoce.",
    clinicalPearl: "\"PATE\" pour la chirurgie d'urgence : Prothèse déhiscente, Abcès, Trouble conductif, Embolies récidivantes."
  },
  {
    id: 'q-endo-19',
    courseId: 'crs-endocardite',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'anticoagulation curative dans l'EI :",
    options: [
      "a) Est contre-indiquée sur valve native mais maintenue sous surveillance stricte en cas de prothèse mécanique",
      "b) Est systématique dans toutes les EI",
      "c) Est débutée dès que la végétation dépasse 10 mm",
      "d) Est remplacée par une quadrithérapie",
      "e) Est arrêtée définitivement sur prothèse mécanique"
    ],
    correctAnswers: [0],
    explanation: "Elle est contre-indiquée sur valve native (risque hémorragique cérébral majeur). Elle est maintenue en cas de prothèse mécanique en raison du risque thrombotique mortel.",
    clinicalPearl: "Valve native = Pas d'anticoagulant ! Prothèse mécanique = Maintenir avec surveillance rigoureuse."
  },
  {
    id: 'q-endo-20',
    courseId: 'crs-endocardite',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le groupe HACCEK regroupe des germes :",
    options: [
      "a) Bacilles Gram négatif fastidieux, à croissance lente, responsables d'EI à hémocultures négatives ou tardives",
      "b) Cocci Gram positif rapidement croissants",
      "c) Spores anaérobies telluriques",
      "d) Virus respiratoires",
      "e) Parasites protozoaires"
    ],
    correctAnswers: [0],
    explanation: "Les germes HACCEK sont des bacilles Gram négatif de la flore oropharyngée à croissance lente (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella).",
    clinicalPearl: "Groupe HACCEK = BGN buccaux à croissance lente, nécessitent une incubation prolongée des hémocultures."
  },
  {
    id: 'q-endo-21',
    courseId: 'crs-endocardite',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le pronostic de l'EI est aggravé par :",
    options: [
      "a) Âge avancé, insuffisance cardiaque, infection sur prothèse, terrain immunodéprimé, choc septique",
      "b) Jeune âge sans comorbidité",
      "c) Streptocoque viridans très sensible",
      "d) Apyrexie rapide sous traitement",
      "e) Absence de végétation à l'écho"
    ],
    correctAnswers: [0],
    explanation: "Tous ces facteurs (âge avancé, insuffisance cardiaque, prothèse, choc, Staphylococcus aureus) constituent des critères de mauvais pronostic.",
    clinicalPearl: "Facteurs de mauvais pronostic : S. aureus, insuffisance cardiaque, prothèse, âge > 70 ans."
  },
  {
    id: 'q-endo-22',
    courseId: 'crs-endocardite',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La spondylodiscite dans le cadre d'une EI est :",
    options: [
      "a) Un foyer infectieux secondaire d'embolisation métastatique, souvent lombaire, exploré par IRM",
      "b) Une maladie rhumatismale primitive",
      "c) Une contre-indication au traitement antibiotique",
      "d) Une complication exclusive des infections à candida",
      "e) Une atteinte sans gravité spontanément résolutive"
    ],
    correctAnswers: [0],
    explanation: "C'est un foyer infectieux secondaire embolique fréquent qu'on recherche par imagerie (IRM du rachis) devant toute douleur lombaire fébrile.",
    clinicalPearl: "Douleur lombaire chez un patient fébrile avec souffle = IRM rachidienne pour éliminer une spondylodiscite !"
  },
  {
    id: 'q-endo-23',
    courseId: 'crs-endocardite',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'antibioprophylaxie de l'EI est recommandée pour :",
    options: [
      "a) Une extraction dentaire ou manipulation gingivale chez un patient porteur de prothèse valvulaire",
      "b) Une coloscopie de dépistage simple",
      "c) Une amygdalectomie chez un enfant sans cardiopathie",
      "d) Une pose de sonde urinaire chez un patient à bas risque",
      "e) Un détartrage dentaire chez tout patient"
    ],
    correctAnswers: [0],
    explanation: "Seuls les patients à haut risque (prothèse valvulaire, antécédent d'EI, cardiopathie congénitale cyanogène) ayant un geste dentaire à risque (manipulation gingivale ou péri-apicale) bénéficient d'une prophylaxie.",
    clinicalPearl: "Prophylaxie ciblée : UNIQUEMENT patients à haut risque pour gestes DENTAIRES invasifs."
  },
  {
    id: 'q-endo-24',
    courseId: 'crs-endocardite',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le signe de Roth au fond d'œil est :",
    options: [
      "a) Une hémorragie rétinienne avec un centre clair, liée à des emboles septiques",
      "b) Un décollement de rétine exsudatif",
      "c) Une occlusion de l'artère centrale de la rétine isolée",
      "d) Une cataracte secondaire",
      "e) Une papille œdémateuse"
    ],
    correctAnswers: [0],
    explanation: "C'est une hémorragie rétinienne ovalaire avec un centre pâle ou blanc, résultant d'une vascularite ou d'un micro-embole septique.",
    clinicalPearl: "Taches de Roth = Hémorragies rétiniennes à centre blanc au fond d'œil."
  },
  {
    id: 'q-endo-25',
    courseId: 'crs-endocardite',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans l'EI, la surveillance du traitement antibiotique comprend :",
    options: [
      "a) Dosages sériques d'aminosides, répétition des hémocultures si fièvre persistante, échocardiographies de contrôle, surveillance rénale et poursuite de la durée totale prévue",
      "b) Arrêt de l'antibiothérapie dès l'obtention de l'apyrexie à J3",
      "c) Relais per os immédiat à 48 heures",
      "d) Aucune surveillance de la fonction rénale",
      "e) Diminution des doses de moitié dès J7"
    ],
    correctAnswers: [0],
    explanation: "La surveillance est clinique, biologique (syndrome inflammatoire, fonction rénale, taux d'aminoside) et paraclinique (ETT/ETO). L'antibiothérapie doit être poursuivie pendant toute la durée prévue même en cas d'apyrexie précoce.",
    clinicalPearl: "Ne JAMAIS raccourcir l'antibiothérapie d'une EI même si le patient va parfaitement bien !"
  },

  // 5 Cas Cliniques
  {
    id: 'cas-endo-01',
    courseId: 'crs-endocardite',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : L'Homme Jeune avec Douleurs Lombaires\nPrésentation : Un homme de 28 ans, sans antécédents, consulte pour des douleurs lombaires fébriles évoluant depuis 2 semaines, associées à des sueurs nocturnes et un amaigrissement. Il a bénéficié de soins dentaires il y a 1 mois. L'auscultation cardiaque trouve un souffle systolique mitral d'apparition récente.\nQCM : Quelle(s) est/sont la(les) démarche(s) diagnostique(s) prioritaire(s) ?",
    options: [
      "a) Radiographie lombaire seule",
      "b) Échocardiographie (ETT/ETO), Hémocultures (3 séries à 1h d'intervalle) et IRM lombaire",
      "c) Scanner abdomino-pelvien sans hémocultures",
      "d) Antibiothérapie orale probabiliste avant tout prélèvement",
      "e) Infiltration rachidienne de corticoïdes"
    ],
    correctAnswers: [1],
    explanation: "Le tableau est très évocateur d'une EI (fièvre, souffle nouveau, point d'appel dentaire). Les hémocultures et l'échocardiographie sont indispensables. Les douleurs lombaires font évoquer une spondylodiscite, complication classique dont l'IRM est l'examen de référence.",
    clinicalPearl: "Endocardite + Douleur lombaire fébrile = Hémocultures x3 + Échocardiographie + IRM rachidienne."
  },
  {
    id: 'cas-endo-02',
    courseId: 'crs-endocardite',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : La Patiente Âgée avec Confusion\nPrésentation : Une femme de 75 ans, porteuse d'une prothèse valvulaire aortique mécanique sous antivitamines K, est admise pour confusion et fièvre. Son INR est thérapeutique. L'examen neurologique trouve un déficit moteur de l'hémicorps droit.\nQCM : Quelle est la conduite à tenir la plus appropriée concernant son traitement anticoagulant ?",
    options: [
      "a) Arrêter immédiatement les antivitamines K et administrer du sulfate de protamine",
      "b) Augmenter les doses d'antivitamines K pour sur-anticoaguler la patiente",
      "c) Suspendre les antivitamines K et initier un relais par héparine IV à dose curative",
      "d) Maintenir les antivitamines K à la même posologie",
      "e) Remplacer les antivitamines K par un antiagrégant plaquettaire"
    ],
    correctAnswers: [2],
    explanation: "Le tableau évoque une EI sur prothèse compliquée d'un AVC embolique. Le risque thrombotique sur prothèse mécanique est majeur. Il faut assurer une anticoagulation efficace sans délai, tout en permettant une interruption rapide en cas de complication hémorragique ou de chirurgie urgente : l'héparine IV est l'agent de choix.",
    clinicalPearl: "Prothèse mécanique + AVC embolique fébrile = Relais AVK par Héparine IV à dose curative."
  },
  {
    id: 'cas-endo-03',
    courseId: 'crs-endocardite',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : L'Usager de Drogue Intraveineuse\nPrésentation : Un homme de 35 ans, toxicomane IV, présente une toux productive, une douleur thoracique latéralisée et une fièvre à 39,5°C. La radiographie pulmonaire montre des opacités rondes bilatérales excavées.\nQCM : Quel est le germe le plus probable et quelle est la localisation cardiaque la plus fréquente ?",
    options: [
      "a) Streptocoque viridans - Valve mitrale",
      "b) Staphylococcus aureus - Valve tricuspide",
      "c) Entérocoque - Valve aortique",
      "d) Coxiella burnetii - Valve aortique",
      "e) Streptococcus pneumoniae - Valve pulmonaire"
    ],
    correctAnswers: [1],
    explanation: "Chez le toxicomane IV, l'EI du cœur droit (tricuspide) à staphylocoque doré est classique. Les embolies septiques pulmonaires sont responsables du tableau respiratoire fébrile (abcès, infarctus pulmonaires).",
    clinicalPearl: "Toxicomane IV + Opacités pulmonaires excavées = EI tricuspide à Staphylococcus aureus."
  },
  {
    id: 'cas-endo-04',
    courseId: 'crs-endocardite',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : L'Endocardite à Hémocultures Négatives\nPrésentation : Un éleveur de 50 ans présente une fièvre au long cours, une asthénie importante et une hépatosplénomégalie. Trois séries d'hémocultures sont négatives. L'ETT montre une végétation sur la valve aortique.\nQCM : Quelle investigation spécifique doit être demandée en priorité ?",
    options: [
      "a) Sérologie pour Brucella et Coxiella burnetii (Fièvre Q)",
      "b) PCR sur la végétation si chirurgie",
      "c) Bilan immunologique à la recherche d'un lupus",
      "d) Scanner TAP pour rechercher un néoplasie occulte",
      "e) Ponction lombaire"
    ],
    correctAnswers: [0],
    explanation: "Le contexte d'élevage est un élément clé. Les germes intracellulaires comme Coxiella burnetii (Fièvre Q) et Brucella sont des causes classiques d'EI à hémocultures négatives. Les sérologies spécifiques sont le premier examen diagnostique.",
    clinicalPearl: "Contact avec bétail / éleveur + Hémocultures négatives = Sérologie Coxiella burnetii (Fièvre Q)."
  },
  {
    id: 'cas-endo-05',
    courseId: 'crs-endocardite',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : L'Insuffisance Cardiaque Révélatrice\nPrésentation : Un patient de 60 ans est admis pour un œdème aigu du poumon (OAP) inaugural. L'auscultation trouve un souffle diastolique aortique rude. Il est apyrétique.\nQCM : Quel élément du bilan parachèvera le diagnostic ?",
    options: [
      "a) Coronarographie",
      "b) Échocardiographie transœsophagienne (ETO)",
      "c) Bilan thyroïdien",
      "d) Dosage des BNP/NT-proBNP",
      "e) Scintigraphie myocardique"
    ],
    correctAnswers: [1],
    explanation: "Un OAP avec un souffle aortique diastolique (insuffisance aortique) doit faire évoquer en priorité une EI destructrice de la valve aortique, même en l'absence de fièvre. L'ETO est l'examen de choix pour visualiser les lésions valvulaires (perforation, rupture de sigmoïde) et confirmer le diagnostic.",
    clinicalPearl: "OAP brutal + Souffle d'insuffisance aortique = Endocardite aiguë mutilante (ETO d'urgence)."
  }
];
