import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 7: HÉMORRAGIES INTRACÉRÉBRALES (HIC)
// ==========================================
export const NEURO_LESSON_7_QUESTIONS: Question[] = [
  {
    id: 'q-nro-7-01',
    courseId: 'crs-neuro-7',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans l'hémorragie intracérébrale hypertensive, quelle est la lésion histopathologique prédominante des artérioles perforantes ?",
    options: [
      "A) Athérosclérose",
      "B) Lipohyalinose",
      "C) Amylose",
      "D) Nécrose fibrinoïde",
      "E) Anévrysme sacciforme"
    ],
    correctAnswers: [1],
    explanation: "La lipohyalinose est la lésion caractéristique de la microangiopathie hypertensive chronique. Elle correspond à une infiltration lipidique et hyaline de la paroi des artérioles perforantes (<200 µm), les fragilisant et prédisposant à la rupture.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-02',
    courseId: 'crs-neuro-7',
    questionNumber: 2,
    type: 'QCM',
    content: "Un patient de 70 ans, hypertendu connu, présente un hématome thalamique gauche à la TDM. Quel examen angiographique est le moins justifié en première intention ?",
    options: [
      "A) AngioTDM",
      "B) AngioIRM",
      "C) Angiographie cérébrale conventionnelle",
      "D) Écho-Doppler transcrânien",
      "E) Aucun examen angiographique n'est nécessaire"
    ],
    correctAnswers: [2],
    explanation: "Chez un sujet de plus de 45 ans avec HTA connue et hématome profond typique (thalamus, putamen), une malformation vasculaire sous-jacente est rare ; l’artériographie conventionnelle, invasive, n’est pas indiquée en 1ère intention.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-03',
    courseId: 'crs-neuro-7',
    questionNumber: 3,
    type: 'QCM',
    content: "À la phase aiguë d'une HIC, quelle séquence d'IRM est la plus sensible pour détecter le saignement et les microhémorragies ?",
    options: [
      "A) T1 pondéré",
      "B) T2 pondéré",
      "C) T2* (écho de gradient / susceptibilité magnétique SWI)",
      "D) FLAIR",
      "E) Diffusion"
    ],
    correctAnswers: [2],
    explanation: "La séquence T2* (ou écho de gradient / SWI) est très sensible à l'effet de susceptibilité magnétique de l'hémosidérine et des dérivés de l'hémoglobine, générant un hyposignal marqué ('effet de trou noir').",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-04',
    courseId: 'crs-neuro-7',
    questionNumber: 4,
    type: 'QCM',
    content: "Quel facteur est le plus fortement corrélé à une augmentation de volume de l'hématome dans les premières 24 heures ?",
    options: [
      "A) Glycémie > 10 mmol/L",
      "B) Pression artérielle systolique (PAS) > 180 mmHg",
      "C) Score de Glasgow initial à 15",
      "D) Âge < 50 ans",
      "E) Localisation lobaire"
    ],
    correctAnswers: [1],
    explanation: "L’hypertension artérielle sévère non contrôlée favorise la poursuite de l'extravasation sanguine et l’expansion précoce de l’hématome. L’objectif est de ramener rapidement la PAS < 140 mmHg.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-05',
    courseId: 'crs-neuro-7',
    questionNumber: 5,
    type: 'QCM',
    content: "Le signe radiologique TDM le plus spécifique d'une HIC à la phase hyperaiguë (premières heures) est :",
    options: [
      "A) Un effet de masse",
      "B) Une prise de contraste périphérique",
      "C) Une hyperdensité spontanée bien limitée",
      "D) Un œdème périlésionnel important",
      "E) Une hypodensité centripète"
    ],
    correctAnswers: [2],
    explanation: "Le sang frais riche en hémoglobine apparaît spontanément hyperdense (blanc, densité 60-80 UH) au scanner sans injection dès les premières minutes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-06',
    courseId: 'crs-neuro-7',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans l'angiopathie amyloïde cérébrale, la topographie préférentielle des hémorragies est :",
    options: [
      "A) Profonde (thalamus, noyaux gris centraux)",
      "B) Cérébelleuse",
      "C) Protubérantielle",
      "D) Lobaire, à la jonction cortico-sous-corticale",
      "E) Intraventriculaire isolée"
    ],
    correctAnswers: [3],
    explanation: "L'angiopathie amyloïde touche les vaisseaux corticaux et leptoméningés par dépôt de protéine bêta-amyloïde chez le sujet âgé, causant des hématomes lobaires superficiels récidivants.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-07',
    courseId: 'crs-neuro-7',
    questionNumber: 7,
    type: 'QCM',
    content: "Quel traitement hémostatique est prioritaire en cas d'HIC sous anticoagulants par AVK avec INR élevé ?",
    options: [
      "A) Vitamine K intraveineuse seule",
      "B) Transfusion de culots globulaires",
      "C) Administration de PPSB (concentrés de complexes prothrombiniques) associée à la vitamine K",
      "D) Administration d'acide tranéxamique",
      "E) Arrêt des AVK et simple surveillance"
    ],
    correctAnswers: [2],
    explanation: "Le PPSB neutralise immédiatement en quelques minutes le déficit en facteurs vitamine K-dépendants (cible INR < 1,5), complété par la vitamine K IV pour une action durable.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-08',
    courseId: 'crs-neuro-7',
    questionNumber: 8,
    type: 'QCM',
    content: "Concernant les crises convulsives lors d'une HIC, quelle affirmation est vraie ?",
    options: [
      "A) Elles sont plus fréquentes dans les hémorragies profondes",
      "B) Elles sont toujours généralisées tonico-cloniques",
      "C) Elles sont un facteur de bon pronostic",
      "D) Elles sont plus souvent partielles (focales) que généralisées",
      "E) Leur présence contre-indique tout traitement antiépileptique"
    ],
    correctAnswers: [3],
    explanation: "Les crises comitiales post-HIC sont le plus souvent focales (~60%), secondaires à l'irritation corticale directe par le sang, notamment dans les hématomes lobaires.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-09',
    courseId: 'crs-neuro-7',
    questionNumber: 9,
    type: 'QCM',
    content: "Le drainage ventriculaire externe (DVE) est le plus indiqué dans quelle situation ?",
    options: [
      "A) Toute HIC avec céphalées",
      "B) Hémorragie cérébelleuse de 2 cm sans hydrocéphalie",
      "C) Hydrocéphalie aiguë obstructive secondaire à une inondation ventriculaire (HIV)",
      "D) Hématome putaminal de 30 mL sans effet de masse",
      "E) Œdème périlésionnel modéré"
    ],
    correctAnswers: [2],
    explanation: "Le DVE est impératif en urgence en cas d'hydrocéphalie aiguë obstructive liée au blocage des voies ventriculaires par des caillots sanguins.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-10',
    courseId: 'crs-neuro-7',
    questionNumber: 10,
    type: 'QCM',
    content: "Quel est le principal mécanisme physiopathologique de l'hypertension intracrânienne (HTIC) lors d'une HIC massive ?",
    options: [
      "A) Hypervolémie",
      "B) Vasodilatation cérébrale généralisée",
      "C) Effet de masse de l'hématome et de l'œdème périlésionnel dans une boîte inextensible",
      "D) Hypercapnie",
      "E) Hypoxie cellulaire"
    ],
    correctAnswers: [2],
    explanation: "Selon la loi de Monro-Kellie, l'addition brutale du volume sanguin de l'hématome et de l'œdème vasogénique s'oppose à l'inextensibilité crânienne, provoquant l'élévation critique de la PIC.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-11',
    courseId: 'crs-neuro-7',
    questionNumber: 11,
    type: 'QCM',
    content: "Quelle est la localisation la plus fréquente d'une HIC hypertensive primaire ?",
    options: [
      "A) Lobaire",
      "B) Cervelet",
      "C) Tronc cérébral (pont)",
      "D) Noyaux gris centraux (putamen, thalamus)",
      "E) Corps calleux"
    ],
    correctAnswers: [3],
    explanation: "Les noyaux gris centraux (en particulier le putamen par rupture des artères lenticulostriées) représentent plus de 50 à 60% des hématomes hypertensifs.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-12',
    courseId: 'crs-neuro-7',
    questionNumber: 12,
    type: 'QCM',
    content: "Un hématome cérébelleux de 3,5 cm de diamètre avec obnubilation justifie :",
    options: [
      "A) Une simple surveillance clinique",
      "B) Un traitement médical anti-œdémateux uniquement",
      "C) Une évacuation chirurgicale urgente par craniotomie sous-occipitale",
      "D) Une thrombolyse intraveineuse",
      "E) Une angiographie en urgence"
    ],
    correctAnswers: [2],
    explanation: "Dans la fosse postérieure étroite, un hématome cérébelleux > 3 cm ou avec altération de conscience menace directement le tronc cérébral d'engagement et impose l'évacuation chirurgicale immédiate.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-13',
    courseId: 'crs-neuro-7',
    questionNumber: 13,
    type: 'QCM',
    content: "Quel est le principal objectif du contrôle tensionnel strict dans les premières heures d'une HIC ?",
    options: [
      "A) Guérir l'hypertension chronique",
      "B) Prévenir l'expansion précoce de l'hématome (cible PAS ~140 mmHg)",
      "C) Éviter un accident ischémique associé",
      "D) Diminuer les céphalées",
      "E) Faciliter l'angiographie"
    ],
    correctAnswers: [1],
    explanation: "Le contrôle intensif de la PAS (cible ~140 mmHg) limite le risque d’expansion précoce du volume de l’hématome, principal déterminant de la mortalité.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-14',
    courseId: 'crs-neuro-7',
    questionNumber: 14,
    type: 'QCM',
    content: "Quelle caractéristique TDM oriente le plus vers une HIC secondaire à une métastase cérébrale ?",
    options: [
      "A) Hyperdensité homogène",
      "B) Œdème périlésionnel très important disproportionné par rapport à la taille de l'hématome",
      "C) Localisation thalamique",
      "D) Absence d'effet de masse",
      "E) Calcifications"
    ],
    correctAnswers: [1],
    explanation: "Un œdème vasogénique majeur disproportionné entourant un nodule hémorragique de taille modeste oriente fortement vers une néoplasie ou métastase saignante.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-15',
    courseId: 'crs-neuro-7',
    questionNumber: 15,
    type: 'QCM',
    content: "Le pronostic fonctionnel à 6 mois après une HIC est le plus étroitement lié à :",
    options: [
      "A) La présence initiale de céphalées",
      "B) L'âge du patient et le volume initial de l'hématome (score ICH)",
      "C) Le sexe du patient",
      "D) Le taux de cholestérol",
      "E) La présence de vomissements initiaux"
    ],
    correctAnswers: [1],
    explanation: "Le score ICH intègre le score de Glasgow initial, l'âge, le volume de l'hématome (> 30 mL), la présence d'une inondation ventriculaire et la localisation infratentorielle.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-16',
    courseId: 'crs-neuro-7',
    questionNumber: 16,
    type: 'QCM',
    content: "Quel examen est indispensable pour planifier le traitement d'une malformation artério-veineuse (MAV) cérébrale rompue ?",
    options: [
      "A) TDM cérébrale sans injection",
      "B) IRM pondérée en diffusion",
      "C) Angiographie cérébrale conventionnelle (artériographie des 4 axes)",
      "D) Électroencéphalogramme (EEG)",
      "E) Ponction lombaire"
    ],
    correctAnswers: [2],
    explanation: "L'artériographie conventionnelle est le gold standard pour définir l'angio-architecture de la MAV (afférences, nidus, drainage veineux, anévrismes associés) avant embolisation ou chirurgie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-17',
    courseId: 'crs-neuro-7',
    questionNumber: 17,
    type: 'QCM',
    content: "Une HIC chez un jeune adulte de 25 ans sans HTA connue doit faire évoquer en priorité :",
    options: [
      "A) Une angiopathie amyloïde",
      "B) Une rupture de malformation vasculaire (anévrysme artériel ou MAV)",
      "C) Une thrombophlébite cérébrale",
      "D) Une hémorragie hypertensive",
      "E) Une métastase"
    ],
    correctAnswers: [1],
    explanation: "Chez l'adulte jeune non hypertendu, les malformations vasculaires (MAV, anévrysmes, cavernomes) sont la première cause d'hématome intracérébral.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-18',
    courseId: 'crs-neuro-7',
    questionNumber: 18,
    type: 'QCM',
    content: "Quelle mesure générale n'est PAS recommandée dans la prise en charge initiale systématique d'une HIC ?",
    options: [
      "A) Surveillance neurologique stricte (GCS, NIHSS)",
      "B) Correction d'une hyperglycémie > 10 mmol/L",
      "C) Mise en position allongée stricte tête à plat",
      "D) Prévention de l'hypoxie",
      "E) Traitement d'une hyperthermie > 37.5°C"
    ],
    correctAnswers: [2],
    explanation: "La position tête à plat est formellement proscrite car elle entrave le retour veineux jugulaire et majore l'HTIC. La tête du lit doit être surélevée à 30°.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-19',
    courseId: 'crs-neuro-7',
    questionNumber: 19,
    type: 'QCM',
    content: "Le signe clinique le plus spécifique pour distinguer une HIC d'un AVC ischémique au lit du malade est :",
    options: [
      "A) L'installation brutale du déficit",
      "B) La présence d'une hémiplégie",
      "C) L'existence de crises convulsives au début",
      "D) La présence de céphalées intenses et de vomissements inauguraux précoces",
      "E) L'âge du patient"
    ],
    correctAnswers: [3],
    explanation: "Des céphalées brutales intenses associées à des vomissements et une altération rapide de la vigilance sont très évocatrices d'un saignement (acronyme SANG).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-20',
    courseId: 'crs-neuro-7',
    questionNumber: 20,
    type: 'QCM',
    content: "Dans l'évolution scanographique d'un hématome intraparenchymateux, l'isodensité avec le parenchyme cérébral survient vers :",
    options: [
      "A) La 24ème heure",
      "B) La 1ère semaine",
      "C) La 3ème à 4ème semaine",
      "D) Le 2ème mois",
      "E) Le 6ème mois"
    ],
    correctAnswers: [2],
    explanation: "L'hématome passe d'hyperdense à isodense en 3 à 4 semaines par dégradation de l'hémoglobine, avant d'évoluer vers une séquelle kystique hypodense.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-7-21',
    courseId: 'crs-neuro-7',
    questionNumber: 21,
    type: 'QCM',
    content: "Quelle formule simple permet d'estimer rapidement le volume d'un hématome intracérébral sur les coupes TDM ?",
    options: [
      "A) Formule de Cockcroft",
      "B) Règle ABC/2 (Volume en mL ≈ [A × B × C] / 2)",
      "C) Règle de Wallace",
      "D) Formule de Friedewald",
      "E) Règle de Parkland"
    ],
    correctAnswers: [1],
    explanation: "La méthode d'estimation de Kothari (ABC/2) multiplie le plus grand diamètre (A), le diamètre perpendiculaire (B) et la hauteur calculée par le nombre de coupes (C), divisé par 2.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-22',
    courseId: 'crs-neuro-7',
    questionNumber: 22,
    type: 'QCM',
    content: "Un hématome putaminal volumineux avec engagement sous-falcoriel justifie :",
    options: [
      "A) Une thrombolyse intraveineuse",
      "B) Une évacuation chirurgicale en urgence pour lever l'effet de masse",
      "C) Un traitement anti-agrégant plaquettaire",
      "D) Une simple surveillance",
      "E) Une corticothérapie à forte dose"
    ],
    correctAnswers: [1],
    explanation: "L'engagement sous la faux du cerveau menace le pronostic vital par ischémie et compression et relève d'une prise en charge neurochirurgicale de décompression en urgence.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-23',
    courseId: 'crs-neuro-7',
    questionNumber: 23,
    type: 'QCM',
    content: "Le traitement par mannitol en bolus dans l'HTIC aiguë menaçant le pronostic vital a pour but principal :",
    options: [
      "A) De réduire la pression artérielle",
      "B) De diminuer la viscosité sanguine",
      "C) D'exercer un effet osmotique transitoire réduisant le volume cérébral",
      "D) De corriger l'hyponatrémie",
      "E) D'améliorer la contractilité myocardique"
    ],
    correctAnswers: [2],
    explanation: "Le mannitol 20% attire l'eau du parenchyme cérébral vers le secteur vasculaire par effet osmotique, réduisant temporairement la PIC en attente de la chirurgie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-24',
    courseId: 'crs-neuro-7',
    questionNumber: 24,
    type: 'QCM',
    content: "Quelle complication systémique est fréquemment observée lors des HIC massives avec souffrance du tronc cérébral ?",
    options: [
      "A) Œdème pulmonaire neurogénique et poussée d'HTA sévère réflexe",
      "B) Pancréatite aiguë",
      "C) Insuffisance surrénalienne aiguë",
      "D) Thrombose portale",
      "E) Anémie hémolytique"
    ],
    correctAnswers: [0],
    explanation: "La décharge sympathique catécholergique massive induite par la compression du tronc provoque une vasoconstriction pulmonaire intense responsable d'un œdème pulmonaire neurogénique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-25',
    courseId: 'crs-neuro-7',
    questionNumber: 25,
    type: 'QCM',
    content: "En cas d'HIC sous traitement par anticoagulant oral direct (AOD) comme le dabigatran, quel antidote spécifique est indiqué en urgence ?",
    options: [
      "A) L'Idarucizumab (Praxbind)",
      "B) L'Andexanet alfa",
      "C) La protamine",
      "D) Le PPSB seul",
      "E) La vitamine K"
    ],
    correctAnswers: [0],
    explanation: "L'Idarucizumab est l'anticorps monoclonal neutralisant spécifique du dabigatran. L'Andexanet alfa neutralise les anti-Xa (apixaban, rivaroxaban).",
    difficulty: 'moyen'
  },

  // 5 Clinical Cases for Lesson 7
  {
    id: 'q-nro-7-c1',
    courseId: 'crs-neuro-7',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 : Homme de 58 ans hypertendu mal suivi, présente en 15 min une hémiparésie droite, une dysarthrie et céphalée frontale pulsatille (GCS 14, PA 210/110 mmHg). La TDM sans injection montre un hématome putaminal gauche de 25 mL. Quelle est la mesure thérapeutique immédiate la plus importante ?",
    options: [
      "A) Administration d'aspirine",
      "B) Contrôle tensionnel intensif avec objectif PAS ~140 mmHg par antihypertenseur IV (nicardipine/urapidil)",
      "C) Mise sous héparine en IV",
      "D) Perfusion de soluté glucosé",
      "E) Intervention chirurgicale immédiate"
    ],
    correctAnswers: [1],
    explanation: "La priorité absolue est de stopper l'expansion de l'hématome en abaissant la PAS aux alentours de 140 mmHg par des agents titrables par voie intraveineuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-c2',
    courseId: 'crs-neuro-7',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 : Femme de 72 ans avec troubles cognitifs antérieurs, retrouvée confuse avec parésie du bras gauche (PAS 150/85). La TDM montre un hématome lobaire pariétal droit à la jonction cortico-sous-corticale. Quel diagnostic étiologique évoquez-vous et quel examen confirme ?",
    options: [
      "A) Microangiopathie hypertensive ; Doppler",
      "B) Angiopathie amyloïde cérébrale ; IRM avec séquences T2* (écho de gradient) et FLAIR",
      "C) Métastase ; Scanner TAP",
      "D) Thrombophlébite ; Angioscanner",
      "E) MAV ; Artériographie"
    ],
    correctAnswers: [1],
    explanation: "Âge avancé + troubles mnésiques + hématome lobaire superficiel = Angiopathie amyloïde. L'IRM montre les micro-saignements corticaux multiples en hyposignal T2*.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-c3',
    courseId: 'crs-neuro-7',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 : Jeune homme de 28 ans sans antécédent, céphalée brutale 'en coup de tonnerre', perte de connaissance brève puis déficit moteur de la jambe droite. La TDM montre une hémorragie sous-arachnoïdienne associée à un hématome lobaire frontal. Quel examen est indispensable pour guider le traitement étiologique ?",
    options: [
      "A) EEG",
      "B) Angiographie cérébrale (ou angioTDM / angioIRM) pour localiser l'anévrisme ou la MAV",
      "C) IRM cardiaque",
      "D) Dosage des D-dimères",
      "E) Ponction lombaire"
    ],
    correctAnswers: [1],
    explanation: "Chez un sujet jeune, l'association HSA + hématome frontal oriente vers un anévrisme artériel cérébral antérieur/communicant antérieur rompu, imposant le bilan angiographique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-c4',
    courseId: 'crs-neuro-7',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 : Femme de 45 ans sous AVK pour valve mécanique mitrale, chute avec confusion et asymétrie faciale. INR à 4,5. La TDM montre un hématome temporal. Quelle est la priorité thérapeutique et comment gérer la reprise de l'anticoagulation à J7 ?",
    options: [
      "A) Vitamine K seule ; reprise immédiate des AVK à dose pleine",
      "B) Concentrés de complexes prothrombiniques (PPSB) IV + Vitamine K ; relais héparine curative à distance dès stabilisation radiologique puis reprise AVK",
      "C) Transfusion de culots globulaires ; arrêt définitif de toute anticoagulation",
      "D) Attente de normalisation spontanée de l'INR",
      "E) Remplacement valvulaire en urgence"
    ],
    correctAnswers: [1],
    explanation: "Neutralisation immédiate par PPSB + vitamine K. La valve mécanique expose à un risque thrombotique majeur imposant une reprise prudente sous héparine dès stabilisation de l'hématome à l'imagerie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-7-c5',
    courseId: 'crs-neuro-7',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 : Homme de 65 ans, coma d'emblée (GCS 6). La TDM montre un hématome cérébelleux gauche de 4 cm de diamètre avec hydrocéphalie aiguë et effacement des citernes. Quel est le risque vital et le geste chirurgical approprié ?",
    options: [
      "A) Convulsions ; Dérivation ventriculaire seule",
      "B) Déshydratation ; Ponction stéréotaxique",
      "C) Compression du tronc cérébral et engagement amygdalien ; Craniotomie sous-occipitale pour évacuation urgente de l'hématome",
      "D) OAP ; Ventilation assistée sans geste chirurgical",
      "E) Infection urinaire ; Antibiothérapie"
    ],
    correctAnswers: [2],
    explanation: "Hématome cérébelleux > 3 cm avec coma = urgence chirurgicale d'évacuation par craniotomie sous-occipitale pour décomprimer le tronc cérébral.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_7_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-7-mindmap',
    courseId: 'crs-neuro-7',
    title: 'Mind Map : Hémorragies Intracérébrales (HIC Spontanées)',
    type: 'mindmap',
    content: `
# MIND MAP : HÉMORRAGIES INTRACÉRÉBRALES (HIC)
*Basé sur le cours du Pr Kesraoui - Faculté de Médecine d'Algérie*

## 1. ÉTIOLOGIES (DEUX GRANDS GROUPES)
- **Primaires (70-90%)** : HTA chronique par lipohyalinose des petites artères perforantes -> Siège profond typique (Putamen, Thalamus, Pont, Cervelet).
- **Secondaires** :
  - *Malformations vasculaires (MAV, Anévrysmes)* : Sujet jeune < 45 ans, hématomes lobaires.
  - *Angiopathie Amyloïde Cérébrale (AAC)* : Sujet âgé, démence, hématomes lobaires superficiels récidivants.
  - *Troubles de l'hémostase / Anticoagulants (AVK, AOD)*.
  - *Tumeurs saignantes (Mélanome, rein, choriocarcinome)*.

## 2. IMAGERIE & PRONOSTIC
- **TDM sans injection** : Examen roi en urgence (hyperdensité spontanée homogène précoce).
- **Volume de l'hématome (Règle ABC/2)** : > 30 mL (sus-tentoriel) ou > 3 cm (cérébelleux) = Pronostic sévère.
- **Score ICH** : GCS, âge, volume, inondation ventriculaire (HIV), localisation infra-tentorielle.

## 3. PRISE EN CHARGE URGENTE (MNÉMO « NICOLAS »)
- **N**ormoglycémie (< 10 mmol/L)
- **I**ntensif contrôle tensionnel (**Cible PAS ~140 mmHg**)
- **C**orrection de la coagulation (PPSB + Vit K si AVK ; Idarucizumab si dabigatran)
- **O**xygénation normoxique
- **L**utte contre l'hyperthermie (> 37,5°C)
- **A**nti-œdémateux si HTIC menaçante (Mannitol)
- **S**urélévation de la tête à 30° (favorise le drainage jugulaire)
`
  },
  {
    id: 'res-nro-7-astuces',
    courseId: 'crs-neuro-7',
    title: 'Astuces & Mnémotechniques : HIC',
    type: 'astuce',
    content: `
# ASTUCES & RÉFLEXES DE CONCOURS (HIC)
*Par Dr. LAIDANI.MERIEM*

- **Cibles Thérapeutiques d'Urgence : « NICOLAS »**
  - **N**ormoglycémie (< 10 mmol/L)
  - **I**ntensif contrôle de la PA (PAS ~140)
  - **C**oagulation corrigée
  - **O**xygénation
  - **L**utte contre la fièvre
  - **A**nti-œdème si besoin
  - **S**urélévation de la tête à 30°

- **Localisation et Étiologie :**
  - **Profonde** (Noyaux gris, thalamus) = **P**ression (**HTA**).
  - **Lobaire** (Cortex) = **CALM** (**C**ortex, **A**gés, **L**obaire, **M**icrohémorragies = **A**ngiopathie amyloïde ou **M**AV chez le jeune).

- **Signes HIC vs AVC Ischémique : « SANG »**
  - **S**ouvent céphalées brutales
  - **A**ltération rapide de la vigilance
  - **N**ausées et vomissements précoces
  - **G**CS qui chute rapidement
`
  }
];

// ==========================================
// LESSON 8: TRAUMATISMES CRÂNIO-ENCÉPHALIQUES (TCE)
// ==========================================
export const NEURO_LESSON_8_QUESTIONS: Question[] = [
  {
    id: 'q-nro-8-01',
    courseId: 'crs-neuro-8',
    questionNumber: 1,
    type: 'QCM',
    content: "Un patient de 22 ans, victime d’un accident de la voie publique, présente un score de Glasgow à 7 à l’arrivée aux urgences. Quelle est la conduite immédiate la plus prioritaire ?",
    options: [
      "A) Radio du crâne",
      "B) TDM cérébral sans injection",
      "C) Libération des voies aériennes, intubation trachéale et ventilation assistée",
      "D) Administration de mannitol 20%",
      "E) Mise en condition pour chirurgie"
    ],
    correctAnswers: [2],
    explanation: "Un score de Glasgow < 8 définit un traumatisme crânien grave. La sécurisation des voies aériennes par intubation orotrachéale et ventilation assistée est la priorité absolue (système ABC) avant tout transport à l'imagerie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-02',
    courseId: 'crs-neuro-8',
    questionNumber: 2,
    type: 'QCM',
    content: "Quel mécanisme physiopathologique explique principalement l’apparition d’un œdème cérébral après un TCE ?",
    options: [
      "A) Augmentation du débit sanguin cérébral",
      "B) Rupture de la barrière hémato-encéphalique et ischémie cellulaire (œdème vasogénique et cytotoxique)",
      "C) Vasodilatation artériolaire réflexe",
      "D) Hypernatrémie",
      "E) Libération excessive de CSF"
    ],
    correctAnswers: [1],
    explanation: "L'agression mécanique et les lésions secondaires provoquent une altération de la BHE (œdème vasogénique) et une faillite énergétique neuronale (œdème cytotoxique).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-03',
    courseId: 'crs-neuro-8',
    questionNumber: 3,
    type: 'QCM',
    content: "Un intervalle libre de lucidité de quelques heures suivi d’une dégradation rapide de la conscience et d'une mydriase unilatérale évoque en priorité :",
    options: [
      "A) Hématome sous-dural aigu",
      "B) Contusion cérébrale",
      "C) Hématome extradural (HED)",
      "D) Hémorragie méningée",
      "E) Œdème cérébral diffus"
    ],
    correctAnswers: [2],
    explanation: "La séquence : choc initial avec PCI -> intervalle libre lucide (1 à 24h) -> réaggravation brutale avec coma et mydriase homolatérale par engagement temporal est classique de l'hématome extradural artériel.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-04',
    courseId: 'crs-neuro-8',
    questionNumber: 4,
    type: 'QCM',
    content: "À la TDM cérébrale sans injection, un hématome sous-dural aigu se présente typiquement comme :",
    options: [
      "A) Une lentille biconvexe hyperdense limitée par les sutures osseuses",
      "B) Un croissant de lune hyperdense longeant toute la convexité hémisphérique sans limitation suturale",
      "C) Un croissant de lune hypodense",
      "D) Une zone hétérogène avec œdème périlésionnel",
      "E) Un épanchement dans les citernes de la base"
    ],
    correctAnswers: [1],
    explanation: "L'HSD aigu (veineux) s'étale librement dans l'espace sous-dural sous forme d'une hyperdensité extra-axiale concave en dedans ('croissant de lune'). L'HED (artériel) décolle la dure-mère en lentille biconvexe limitée par les sutures.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-05',
    courseId: 'crs-neuro-8',
    questionNumber: 5,
    type: 'QCM',
    content: "Une fracture de la base du crâne de l’étage antérieur peut se manifester cliniquement par :",
    options: [
      "A) Otorragie et ecchymose mastoïdienne",
      "B) Paralysie faciale périphérique",
      "C) Épistaxis, ecchymose péri-orbitaire bilatérale (yeux de panda) et rhinorrhée de LCR",
      "D) Anosmie isolée",
      "E) Surdité de transmission"
    ],
    correctAnswers: [2],
    explanation: "La fracture de la lame criblée de l'ethmoïde et de l'étage antérieur se manifeste par le syndrome 'en lunettes' (ecchymose périorbitaire bilatérale), l'épistaxis, l'anosmie et la rhinorrhée cérébrospinale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-06',
    courseId: 'crs-neuro-8',
    questionNumber: 6,
    type: 'QCM',
    content: "Le traitement préventif des convulsions post-TCE est particulièrement recommandé en cas de :",
    options: [
      "A) Chez tous les patients avec fracture du crâne sans lésion",
      "B) Uniquement en cas d’hémorragie méningée",
      "C) Contusion cérébrale corticale, embarrure ou hématome intracrânien traumatique",
      "D) Seulement si le patient a des antécédents d’épilepsie",
      "E) Jamais, car il aggrave le pronostic"
    ],
    correctAnswers: [2],
    explanation: "La prophylaxie antiépileptique précoce (≤ 7 jours, ex : phénytoïne ou lévétiracétam) est recommandée dans les traumatismes graves avec contusion parenchymateuse ou hématome pour éviter les pics de PIC induits par les crises.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-07',
    courseId: 'crs-neuro-8',
    questionNumber: 7,
    type: 'QCM',
    content: "Une fracture avec enfoncement d’un fragment osseux de la voûte crânienne comprimant le cortex est appelée :",
    options: [
      "A) Fracas",
      "B) Embarrure",
      "C) Fracture linéaire",
      "D) Diastase",
      "E) Fracture en bois vert"
    ],
    correctAnswers: [1],
    explanation: "L’embarrure correspond à l'enfoncement d'un fragment de la voûte vers le parenchyme cérébral. Ouverte, elle constitue une plaie crânio-cérébrale nécessitant un parage et relevage chirurgical d'urgence.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-08',
    courseId: 'crs-neuro-8',
    questionNumber: 8,
    type: 'QCM',
    content: "Le syndrome subjectif post-traumatique des traumatisés du crâne (SSPT) :",
    options: [
      "A) Est corrélé à la gravité initiale du coma",
      "B) Apparaît surtout après un TCE bénin ou modéré (céphalées, vertiges, instabilité, troubles du sommeil et de la concentration)",
      "C) Correspond toujours à une lésion visible à l’IRM",
      "D) Nécessite systématiquement un traitement chirurgical",
      "E) Se manifeste par des crises comitiales"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome subjectif des traumatisés crâniens survient paradoxalement après un traumatisme léger sans lésion à l'imagerie (céphalées, asthénie, vertiges positionnels, irritabilité).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-09',
    courseId: 'crs-neuro-8',
    questionNumber: 9,
    type: 'QCM',
    content: "L’hématome sous-dural chronique est particulièrement fréquent chez :",
    options: [
      "A) Le sujet jeune après un traumatisme grave",
      "B) Le sujet âgé ou éthylique après un traumatisme crânien minime ou oublié",
      "C) L’adolescent sportif",
      "D) La femme enceinte",
      "E) L'enfant de moins de 1 an"
    ],
    correctAnswers: [1],
    explanation: "L'atrophie cérébrale du sujet âgé met sous tension les veines ponts cortico-durales qui se déchirent lors de traumatismes très minimes, formant une collection hypodense progressive en plusieurs semaines.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-10',
    courseId: 'crs-neuro-8',
    questionNumber: 10,
    type: 'QCM',
    content: "Lors d’un traumatisme crânien survenu par accident de la voie publique, l’immobilisation systématique du rachis cervical est justifiée car :",
    options: [
      "A) Uniquement si le Glasgow est < 8",
      "B) Tout traumatisé crânien doit être considéré comme un traumatisé du rachis cervical jusqu'à preuve du contraire",
      "C) Seulement en cas de tétraplégie",
      "D) Pour faciliter l'intubation",
      "E) Uniquement si le cou est douloureux"
    ],
    correctAnswers: [1],
    explanation: "Règle d'or de médecine d'urgence : « Tout traumatisé crânien est un traumatisé du rachis jusqu'à preuve radiologique formelle du contraire » (pose systématique d'un collier cervical rigide).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-11',
    courseId: 'crs-neuro-8',
    questionNumber: 11,
    type: 'QCM',
    content: "L’hyperventilation transitoire dans le TCE grave a pour but physiologique de :",
    options: [
      "A) Corriger une acidose métabolique",
      "B) Augmenter la PaO2",
      "C) Diminuer la PaCO2 (hypocapnie modérée 30-35 mmHg) entraînant une vasoconstriction cérébrale pour abaisser la PIC d'urgence",
      "D) Réchauffer le patient",
      "E) Diminuer la glycémie"
    ],
    correctAnswers: [2],
    explanation: "L’hypocapnie induit une vasoconstriction des artérioles cérébrales réduisant le volume sanguin cérébral et la PIC en situation d'engagement imminent.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-12',
    courseId: 'crs-neuro-8',
    questionNumber: 12,
    type: 'QCM',
    content: "Le « signe de Battle » correspond à :",
    options: [
      "A) Une ecchymose rétro-auriculaire mastoïdienne traduisant une fracture de l'étage moyen du crâne (rocher)",
      "B) Une ecchymose péri-orbitaire bilatérale",
      "C) Une paralysie faciale",
      "D) Une otorragie",
      "E) Une épistaxis"
    ],
    correctAnswers: [0],
    explanation: "Le signe de Battle est l'ecchymose rétro-auriculaire mastoïdienne apparaissant 24 à 48 heures après une fracture de l'étage moyen de la base du crâne (os temporal/rocher).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-13',
    courseId: 'crs-neuro-8',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans la prise en charge d'un TCE grave, quel niveau de Pression Artérielle Moyenne (PAM) doit être maintenu pour éviter l'ischémie cérébrale secondaire (ACSOS) ?",
    options: [
      "A) PAM ≥ 60 mmHg",
      "B) PAM ≥ 80 à 90 mmHg (voire ≥ 100 mmHg pour garantir une PPC = PAM - PIC ≥ 60-70 mmHg)",
      "C) PAM ≤ 50 mmHg",
      "D) Peu importe la tension",
      "E) PAS < 90 mmHg"
    ],
    correctAnswers: [1],
    explanation: "L'hypotension artérielle est le premier facteur d'aggravation secondaire d'origine systémique (ACSOS). Le maintien d'une PAM élevée est crucial pour préserver la pression de perfusion cérébrale (PPC).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-14',
    courseId: 'crs-neuro-8',
    questionNumber: 14,
    type: 'QCM',
    content: "Une fracture linéaire de la voûte chez le nourrisson de moins de 3 ans peut se compliquer à distance d'une :",
    options: [
      "A) Méningite",
      "B) Hydrocéphalie",
      "C) Fracture évolutive (growing skull fracture) par déchirure durale sous-jacente",
      "D) Maladie d'Alzheimer",
      "E) Épilepsie généralisée d'emblée"
    ],
    correctAnswers: [2],
    explanation: "Chez le nourrisson, la pulsation cérébrale à travers une brèche durale non cicatrisée élargit progressivement les berges de la fracture, formant une lacune osseuse évolutive (growing fracture).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-15',
    courseId: 'crs-neuro-8',
    questionNumber: 15,
    type: 'QCM',
    content: "Quel signe scannographique précoce témoigne d'une hypertension intracrânienne globale majeure post-traumatique ?",
    options: [
      "A) La présence d’une fracture fermée",
      "B) L’effacement des citernes de la base du cerveau (citernes péri-mésencéphaliques)",
      "C) Une dilatation des ventricules latéraux",
      "D) Une hyperdensité de la faux",
      "E) Une pneumatisation des sinus"
    ],
    correctAnswers: [1],
    explanation: "L'aplatissement ou la disparition complète des citernes de la base traduit un gonflement cérébral diffus comprimant les espaces liquidiens, signe prémonitoire d'engagement.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-16',
    courseId: 'crs-neuro-8',
    questionNumber: 16,
    type: 'QCM',
    content: "Le principal risque infectieux d’une fracture ouverte de la base du crâne avec rhinorrhée ou otorrhée de LCS est :",
    options: [
      "A) L’abcès cérébral",
      "B) L’ostéomyélite du crâne",
      "C) La méningite bactérienne aiguë (notamment à pneumocoque)",
      "D) L’encéphalite herpétique",
      "E) La mastoïdite"
    ],
    correctAnswers: [2],
    explanation: "La brèche ostéo-méningée crée une porte d'entrée directe de la flore rhinopharyngée vers les espaces sous-arachnoïdiens, exposant au risque majeur de méningite à pneumocoque.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-17',
    courseId: 'crs-neuro-8',
    questionNumber: 17,
    type: 'QCM',
    content: "Une épilepsie post-traumatique proprement dite (séquellaire) se définit par des crises survenant :",
    options: [
      "A) Dans les 24 premières heures",
      "B) Dans la première semaine",
      "C) Plus de 7 jours après le traumatisme (souvent entre 2 mois et 2 ans)",
      "D) Uniquement chez le sujet âgé",
      "E) Sans rapport avec une lésion corticale"
    ],
    correctAnswers: [2],
    explanation: "Les crises précoces (< 7 jours) sont réactionnelles. L'épilepsie post-traumatique vraie correspond à des crises tardives (> 7 jours) liées à la gliose cicatricielle.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-18',
    courseId: 'crs-neuro-8',
    questionNumber: 18,
    type: 'QCM',
    content: "L'artère dont la rupture est la cause de plus de 85% des hématomes extraduraux temporaux est :",
    options: [
      "A) L'artère cérébrale antérieure",
      "B) L'artère méningée moyenne (branche de l'artère maxillaire interne)",
      "C) L'artère ophtalmique",
      "D) L'artère sylvienne",
      "E) L'artère carotide interne"
    ],
    correctAnswers: [1],
    explanation: "L'artère méningée moyenne chemine dans une gouttière osseuse au niveau de l'écaille du temporal et est vulnérable aux fractures de la région temporo-pariétale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-19',
    courseId: 'crs-neuro-8',
    questionNumber: 19,
    type: 'QCM',
    content: "La mydriase unilatérale aréactive survenant lors d'un hématome extradural temporal est causée par :",
    options: [
      "A) L'ischémie rétinienne",
      "B) La compression de la 3ème paire crânienne (nerf oculomoteur) par l'uncus temporal hernié dans l'incisure tentorielle",
      "C) La paralysie du nerf optique",
      "D) Une lésion du nerf sympathique cervical",
      "E) Une fracture de l'orbite"
    ],
    correctAnswers: [1],
    explanation: "L'engagement temporal interne pousse l'uncus de l'hippocampe contre le bord libre de la tente du cervelet, écrasant les fibres pupilloconstrictrices périphériques du nerf III.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-20',
    courseId: 'crs-neuro-8',
    questionNumber: 20,
    type: 'QCM',
    content: "Parmi les éléments suivants, quel est le score de Glasgow (GCS) d'un patient qui ouvre les yeux à la demande, localise la douleur et formule des paroles inappropriées ?",
    options: [
      "A) 10",
      "B) 11",
      "C) 12 (E3 + M5 + V3 = 11 ou 12 selon cotation)",
      "D) 13",
      "E) 8"
    ],
    correctAnswers: [1],
    explanation: "Ouverture des yeux à la demande = E3. Réponse motrice avec localisation à la douleur = M5. Réponse verbale inappropriée = V3. Total GCS = 3 + 5 + 3 = 11.",
    difficulty: 'facile'
  },

  // 5 Clinical Cases for Lesson 8
  {
    id: 'q-nro-8-c1',
    courseId: 'crs-neuro-8',
    questionNumber: 21,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 : Motocycliste de 30 ans percuté sans casque. GCS 14 à l'arrivée du SMU, puis devient somnolent durant le transport. Aux urgences : GCS 8, mydriase droite aréactive. Quelle est la lésion et la conduite à tenir immédiate ?",
    options: [
      "A) Contusion frontale ; surveillance",
      "B) Hématome extradural temporal droit avec engagement temporal ; intubation trachéale, TDM cérébrale d'extrême urgence et transfert au bloc de neurochirurgie",
      "C) Hémorragie méningée diffuse ; ponction lombaire",
      "D) Commotion cérébrale bénigne",
      "E) Hématome sous-dural chronique"
    ],
    correctAnswers: [1],
    explanation: "L'intervalle libre suivi d'un coma avec mydriase homolatérale est pathognomonique de l'hématome extradural avec engagement de l'uncus : c'est l'extrême urgence neurochirurgicale de trépanation.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-c2',
    courseId: 'crs-neuro-8',
    questionNumber: 22,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 : Femme de 78 ans, chute de sa hauteur il y a 3 semaines. Depuis 5 jours : céphalées progressives, somnolence fluctuante et hémiparésie gauche discrète sans fièvre. Quelle imagerie demander en première intention ?",
    options: [
      "A) IRM cérébrale fonctionnelle",
      "B) TDM cérébrale sans injection montrant une collection en croissant hypodense extra-axiale",
      "C) Radiographie du crâne",
      "D) Angio-TDM",
      "E) Échographie"
    ],
    correctAnswers: [1],
    explanation: "Le scanner sans injection confirme immédiatement l'hématome sous-dural chronique hypodense (ou isodense) comprimant le cortex.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-c3',
    courseId: 'crs-neuro-8',
    questionNumber: 23,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 : Nourrisson de 9 mois amené pour pleurs inhabituels et somnolence 2h après une chute de la table à langer. Fontanelle antérieure tendue et bombante, réflexe pupillaire ralenti à droite. Quel diagnostic et quel examen ?",
    options: [
      "A) Hématome sous-dural aigu ; TDM cérébrale sans injection en urgence",
      "B) Commotion simple ; retour à domicile",
      "C) Fracture sans gravité ; radio du crâne seule",
      "D) Méningite virale ; ponction lombaire d'emblée",
      "E) Déshydratation aiguë"
    ],
    correctAnswers: [0],
    explanation: "Chez le nourrisson, la fontanelle bombante signe l'HTIC aiguë post-traumatique par hématome sous-dural aigu. La TDM sans injection est impérative.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-c4',
    courseId: 'crs-neuro-8',
    questionNumber: 24,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 : Conducteur de 35 ans polytraumatisé, éjecté. GCS 5, PA 80/40 mmHg, FR 30/min, fracture ouverte du fémur gauche, mydriase bilatérale aréactive. Quelle est la séquence de prise en charge prioritaire ?",
    options: [
      "A) Scanner corps entier immédiat avant réanimation",
      "B) Sécurisation immédiate (Airway, Breathing, Circulation) : intubation, ventilation, remplissage vasculaire massif et stabilisation hémodynamique puis TDM",
      "C) Radiographie du crâne seule",
      "D) Injection de mannitol sans remplissage",
      "E) Transfert immédiat en neurochirurgie"
    ],
    correctAnswers: [1],
    explanation: "L'extrême urgence vitale impose de restaurer la volémie et l'oxygénation : le choc hypovolémique aggrave mortellement l'ischémie cérébrale. La stabilisation prime sur l'imagerie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-8-c5',
    courseId: 'crs-neuro-8',
    questionNumber: 25,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 : Homme de 72 ans sous AVK pour fibrillation atriale, consulte pour céphalées progressives, troubles de marche et confusion après une chute minime dans son jardin il y a 3 semaines. Quel est le signe scanographique attendu ?",
    options: [
      "A) Collection hyperdense biconvexe",
      "B) Collection hypodense (ou isodense) extra-axiale en croissant de lune le long de la voûte",
      "C) Prise de contraste méningée diffuse",
      "D) Lacune ischémique ancienne",
      "E) Calcification de la faux"
    ],
    correctAnswers: [1],
    explanation: "L'HSD chronique du patient sous anticoagulant se traduit au scanner par un croissant hypodense caractéristique lié à la liquéfaction du sang ancien.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_8_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-8-mindmap',
    courseId: 'crs-neuro-8',
    title: 'Carte Mentale : Traumatismes Crânio-Encéphaliques (TCE)',
    type: 'mindmap',
    content: `
# CARTE MENTALE : TRAUMATISMES CRÂNIO-ENCÉPHALIQUES (TCE)
*Évaluation, Prise en Charge Initiale et Urgences Chirurgicales*

## 1. CLASSIFICATION DE GRAVITÉ (SCORE DE GLASGOW)
- **TCE Léger** : GCS 13 - 15. Surveillance, TDM si perte de connaissance ou critères de gravité.
- **TCE Modéré** : GCS 9 - 12. TDM systématique, hospitalisation.
- **TCE Grave** : GCS ≤ 8 -> **Intubation trachéale en urgence**, sédation, ventilation, TDM rapide.

## 2. LES HÉMATOMES TRAUMATIQUES (DUEL HED vs HSD)
- **Hématome Extradural (HED)** :
  - *Origine* : Artérielle (artère méningée moyenne sous fracture temporale).
  - *Clinique* : Intervalle libre de quelques heures -> dégradation brutale -> mydriase homolatérale (engagement temporal).
  - *TDM* : Lentille biconvexe hyperdense limitée par les sutures osseuses.
  - *Traitement* : Urgence chirurgicale absolue (trou de trépan / volet osseux).
- **Hématome Sous-Dural Aigu (HSDA)** :
  - *Origine* : Veineuse ou lacération corticale.
  - *TDM* : Croissant de lune hyperdense longeant toute la convexité cérébrale.
- **Hématome Sous-Dural Chronique (HSDc)** :
  - *Sujet âgé / éthylique / anticoagulant*, traumatisme minime ancien. Croissant hypodense au scanner.

## 3. FRACTURES DE LA BASE DU CRÂNE
- **Étage Antérieur (lame criblée)** : Épistaxis, anosmie, rhinorrhée de LCR, ecchymose périorbitaire bilatérale (« yeux de panda »).
- **Étage Moyen (rocher / temporal)** : Otorragie, otorrhée de LCR, paralysie faciale périphérique (VII), surdité (VIII), ecchymose mastoïdienne (**Signe de Battle**).
`
  },
  {
    id: 'res-nro-8-astuces',
    courseId: 'crs-neuro-8',
    title: 'Astuces & Mnémotechniques : TCE',
    type: 'astuce',
    content: `
# ASTUCES & MNÉMOTECHNIQUES (TCE)
*Par Dr. LAIDANI.MERIEM*

- **Fracture de la base - Étage antérieur : « NYS »**
  - **N**ez qui coule (rhinorrhée de LCR)
  - **Y**eux de panda (ecchymose périorbitaire bilatérale en lunettes)
  - **S**ent plus rien (anosmie par atteinte du nerf olfactif I)

- **Fracture de la base - Étage moyen : « OFE »**
  - **O**reille qui saigne / coule (otorragie, otorrhée)
  - **F**ace paralysée (atteinte du nerf facial VII)
  - **E**ntendre moins (surdité par lésion du nerf cochléaire VIII)
  - *+ Signe de Battle (ecchymose rétro-auriculaire)*

- **HED vs HSD aigu : La règle des « 3 L » pour l'HED**
  - **L**entille (forme biconvexe)
  - **L**ibre (intervalle libre de lucidité)
  - **L**e III comprimé (mydriase homolatérale unilatérale)
`
  }
];

// ==========================================
// LESSON 9: CÉPHALÉES ET ALGIES FACIALES
// ==========================================
export const NEURO_LESSON_9_QUESTIONS: Question[] = [
  {
    id: 'q-nro-9-01',
    courseId: 'crs-neuro-9',
    questionNumber: 1,
    type: 'QCM',
    content: "Une patiente de 28 ans consulte pour des céphalées unilatérales pulsatiles, associées à des nausées et une photophobie, durant entre 4 et 12 heures, déclenchées par le stress et le manque de sommeil. L’examen neurologique est normal. Quel est le diagnostic le plus probable ?",
    options: [
      "A) Céphalée de tension chronique",
      "B) Algie vasculaire de la face",
      "C) Migraine sans aura",
      "D) Névralgie du trijumeau",
      "E) Hémorragie méningée"
    ],
    correctAnswers: [2],
    explanation: "La description correspond aux critères internationaux ICHD de la migraine sans aura : céphalée unilatérale, pulsatile, durée 4-72h, nausées/photophobie, aggravée par l'effort, examen intercritique strictement normal.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-02',
    courseId: 'crs-neuro-9',
    questionNumber: 2,
    type: 'QCM',
    content: "Un homme de 35 ans présente des crises de douleurs orbitaires droites atroces en 'broiement', survenant chaque nuit vers 2h, durant 45 minutes, avec larmoiement et rhinorrhée ipsilatérale. Quelle est la périodicité caractéristique de cette pathologie ?",
    options: [
      "A) Périodicité mensuelle",
      "B) Double périodicité circadienne (horaire fixe) et circannuelle (périodes actives de quelques semaines)",
      "C) Périodicité uniquement liée aux repas",
      "D) Périodicité aléatoire",
      "E) Périodicité saisonnière exclusive"
    ],
    correctAnswers: [1],
    explanation: "L'algie vasculaire de la face (AVF / cluster headache) présente une double périodicité remarquable : circadienne (crises à horaires réguliers, souvent la nuit) et circannuelle (grappes de crises durant 2 à 8 semaines par an).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-03',
    courseId: 'crs-neuro-9',
    questionNumber: 3,
    type: 'QCM',
    content: "Parmi les signes d’alarme suivants, lequel impose systématiquement une imagerie cérébrale en urgence face à une céphalée ?",
    options: [
      "A) Céphalée pulsatile chez une femme jeune",
      "B) Céphalée brutale 'en coup de tonnerre' atteignant son paroxysme en moins d'une minute",
      "C) Céphalée aggravée par la lumière",
      "D) Antécédents familiaux de migraine",
      "E) Céphalée calmée par le sommeil"
    ],
    correctAnswers: [1],
    explanation: "Une céphalée explosive en coup de tonnerre impose un scanner cérébral sans délai pour éliminer une hémorragie sous-arachnoïdienne (HSA).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-04',
    courseId: 'crs-neuro-9',
    questionNumber: 4,
    type: 'QCM',
    content: "Quel traitement spécifique d'urgence est hautement efficace pour juguler un accès d’algie vasculaire de la face ?",
    options: [
      "A) Paracétamol",
      "B) Carbamazépine",
      "C) Sumatriptan en injection sous-cutanée (6 mg) ou oxygénothérapie normobare à haut débit (12-15 L/min au masque)",
      "D) Amitriptyline",
      "E) Indométacine"
    ],
    correctAnswers: [2],
    explanation: "Le sumatriptan 6 mg SC et l'oxygène à haut débit (12 à 15 L/min pendant 15 minutes) sont les deux traitements de crise de référence de l'AVF.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-05',
    courseId: 'crs-neuro-9',
    questionNumber: 5,
    type: 'QCM',
    content: "Une névralgie essentielle (typique) du trijumeau se caractérise par tous les éléments suivants SAUF :",
    options: [
      "A) Douleur en éclair ou décharge électrique unilatérale",
      "B) Présence d'un déficit sensitif objectif dans le territoire du V",
      "C) Existence d’une zone gâchette (trigger zone)",
      "D) Douleur déclenchée par la mastication, l'effleurement ou le brossage",
      "E) Efficacité remarquable de la carbamazépine"
    ],
    correctAnswers: [1],
    explanation: "Dans la névralgie essentielle classique du trijumeau, l'examen neurologique est strictement normal : la présence d'un déficit sensitif (hypoesthésie faciale) signe une névralgie symptomatique secondaire (tumeur, SEP).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-06',
    courseId: 'crs-neuro-9',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans la migraine avec aura, l’aura neurologique la plus fréquente est :",
    options: [
      "A) L'aura visuelle (scotomes scintillants, créneaux géométriques)",
      "B) L'aura motrice",
      "C) L'aura auditive",
      "D) L'aura olfactive",
      "E) L'aura dysautonomique"
    ],
    correctAnswers: [0],
    explanation: "L’aura visuelle ophtalmique (scotome scintillant en roue dentée) représente plus de 90% des auras migraineuses, s'installant progressivement sur 5 à 20 minutes.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-07',
    courseId: 'crs-neuro-9',
    questionNumber: 7,
    type: 'QCM',
    content: "Quel examen anatomopathologique apporte la certitude diagnostique devant une suspicion d'artérite temporale de Horton chez un patient de plus de 60 ans ?",
    options: [
      "A) Ponction lombaire",
      "B) Biopsie de l’artère temporale (BAT)",
      "C) Scanner cérébral sans injection",
      "D) Électroencéphalogramme",
      "E) Angio-IRM cérébrale"
    ],
    correctAnswers: [1],
    explanation: "La biopsie de l’artère temporale montre le panartérite gigantocellulaire avec fragmentation de la limitante élastique interne, confirmant formellement la maladie de Horton.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-08',
    courseId: 'crs-neuro-9',
    questionNumber: 8,
    type: 'QCM',
    content: "La céphalée par abus médicamenteux (CAM) est une céphalée quotidienne chronique favorisée par la prise fréquente de :",
    options: [
      "A) Dérivés codéinés, triptans ou antalgiques simples pris plus de 10 à 15 jours par mois",
      "B) Bêta-bloquants",
      "C) Antidépresseurs tricycliques",
      "D) Vitamines",
      "E) Corticoïdes seuls"
    ],
    correctAnswers: [0],
    explanation: "La surconsommation chronique d'antalgiques de crise (paracétamol, AINS, codéine, triptans) entretient un état d'accoutumance et de céphalée chronique quotidienne rebelle nécessitant un sevrage.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-09',
    courseId: 'crs-neuro-9',
    questionNumber: 9,
    type: 'QCM',
    content: "Quel traitement de fond est recommandé en première intention chez un migraineux présentant des crises fréquentes et invalidantes (> 3 crises par mois) ?",
    options: [
      "A) Paracétamol continu",
      "B) Bêta-bloquants sans activité sympathomimétique intrinsèque (Propranolol, Métoprolol)",
      "C) Carbamazépine",
      "D) Sumatriptan quotidien",
      "E) Aspirine 3 g par jour"
    ],
    correctAnswers: [1],
    explanation: "Les bêtabloquants (propranolol 40 à 160 mg/j) constituent le traitement de fond de premier choix de la maladie migraineuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-10',
    courseId: 'crs-neuro-9',
    questionNumber: 10,
    type: 'QCM',
    content: "La dépression corticale envahissante de Leão (spreading depression) est le phénomène neurobiologique à l'origine de :",
    options: [
      "A) La névralgie du trijumeau",
      "B) L'aura migraineuse",
      "C) La céphalée de tension",
      "D) L'algie vasculaire de la face",
      "E) La sinusite"
    ],
    correctAnswers: [1],
    explanation: "L’onde de dépolarisation neuronale et gliale progressive cheminant d’arrière en avant sur le cortex cérébral occipital (dépression corticale envahissante) sous-tend l’aura migraineuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-11',
    courseId: 'crs-neuro-9',
    questionNumber: 11,
    type: 'QCM',
    content: "Une femme de 65 ans consulte pour céphalées temporales récentes, claudication de la mâchoire à la mastication et induration douloureuse de l'artère temporale. La VS est à 85 mm. Le traitement d'urgence à débuter sans délai pour prévenir la cécité est :",
    options: [
      "A) Antalgiques simples de palier 1",
      "B) Corticothérapie orale à forte dose (Prednisone 0,7 à 1 mg/kg/jour)",
      "C) Triptans",
      "D) Antibiotiques",
      "E) Anticoagulants"
    ],
    correctAnswers: [1],
    explanation: "La maladie de Horton fait peser un risque immédiat d'ischémie optique antérieure aiguë irréversible (cécité définitive). La corticothérapie doit être débutée sans attendre le résultat de la biopsie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-12',
    courseId: 'crs-neuro-9',
    questionNumber: 12,
    type: 'QCM',
    content: "Le traitement médical de première intention de la névralgie essentielle du trijumeau est :",
    options: [
      "A) La Carbamazépine (Tégrétol®)",
      "B) Le Paracétamol",
      "C) Le Sumatriptan",
      "D) Le Vérapamil",
      "E) L'Indométacine"
    ],
    correctAnswers: [0],
    explanation: "La carbamazépine (200 à 1 200 mg/j avec augmentation progressive) est le médicament de référence absolu de la névralgie faciale essentielle, apportant un soulagement rapide dans 80% des cas.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-13',
    courseId: 'crs-neuro-9',
    questionNumber: 13,
    type: 'QCM',
    content: "L’hémicrânie paroxystique chronique se distingue formellement de l’algie vasculaire de la face par :",
    options: [
      "A) Sa localisation occipitale bilatérale",
      "B) Sa réponse spectaculaire, complète et obligatoire à l’Indométacine",
      "C) L'absence totale de signes végétatifs",
      "D) Une prédominance masculine exclusive",
      "E) Des accès durant plus de 24 heures"
    ],
    correctAnswers: [1],
    explanation: "L’hémicrânie paroxystique (accès très brefs et fréquents chez la femme) a pour critère diagnostique pathognomonique sa sensibilité absolue et exclusive à l'indométacine.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-14',
    courseId: 'crs-neuro-9',
    questionNumber: 14,
    type: 'QCM',
    content: "Quel nerf est impliqué dans la névralgie d'Arnold (douleur occipitale en éclair irradiant au sommet du crâne) ?",
    options: [
      "A) Nerf trijumeau (V)",
      "B) Grand nerf occipital d'Arnold (branche postérieure de la racine C2)",
      "C) Nerf facial (VII)",
      "D) Nerf glossopharyngien (IX)",
      "E) Nerf vague (X)"
    ],
    correctAnswers: [1],
    explanation: "La névralgie d'Arnold correspond à l'irritation du grand nerf occipital (C2), avec point gâchette d'émergence sous-occipital sensible.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-15',
    courseId: 'crs-neuro-9',
    questionNumber: 15,
    type: 'QCM',
    content: "La céphalée post-ponction lombaire (syndrome d'hypotension intracrânienne) est typiquement :",
    options: [
      "A) Pulsatile et augmentée couché",
      "B) Posturale : nettement déclenchée ou aggravée par l'orthostatisme (position debout/assise) et soulagée par le décubitus dorsal complet",
      "C) Associée à une rougeur oculaire unilatérale",
      "D) Résistante à l'hydratation",
      "E) Insensible au blood-patch"
    ],
    correctAnswers: [1],
    explanation: "La céphalée de brèche durale est strictement posturale (orthostatique). Si elle persiste malgré repos et caféine, le traitement de référence est le blood-patch épidural autologue.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-16',
    courseId: 'crs-neuro-9',
    questionNumber: 16,
    type: 'QCM',
    content: "Parmi les médicaments suivants de la crise migraineuse, lequel est contre-indiqué en cas de coronaropathie ou d'antécédent d'AVC ?",
    options: [
      "A) Paracétamol",
      "B) Ibuprofène",
      "C) Triptans (ex : Sumatriptan, Zolmitriptan) en raison de leur effet vasoconstricteur coronarien",
      "D) Métoclopramide",
      "E) Magnésium"
    ],
    correctAnswers: [2],
    explanation: "Les triptans sont des agonistes sélectifs 5-HT1B/1D qui induisent une vasoconstriction artérielle cérébrale et coronarienne, contre-indiqués dans les affections vasculaires occlusives.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-17',
    courseId: 'crs-neuro-9',
    questionNumber: 17,
    type: 'QCM',
    content: "Les équivalents migraineux chez l'enfant peuvent se manifester sans céphalée sous forme de :",
    options: [
      "A) Vomissements cycliques récurrents ou de crises de migraine abdominale",
      "B) Crises de somnambulisme",
      "C) Épilepsie généralisée tonico-clonique",
      "D) Chorée",
      "E) Strabisme intermittent"
    ],
    correctAnswers: [0],
    explanation: "Chez l'enfant pré-pubère, la migraine se manifeste fréquemment par des équivalents pédiatriques : syndrome de vomissements cycliques, douleurs abdominales paroxystiques récurrentes, vertiges bénins.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-18',
    courseId: 'crs-neuro-9',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans l'évaluation clinique d'une céphalée, quel acronyme mnémonique résume les critères diagnostiques de la migraine sans aura selon l'ICHD ?",
    options: [
      "A) FAST",
      "B) PUNCH (Pulsatile, Unilatérale, Nausées/vomissements, Contrariée par l'effort, Heuristique/photophobie)",
      "C) COMA",
      "D) STOP",
      "E) GLASGOW"
    ],
    correctAnswers: [1],
    explanation: "L'acronyme PUNCH résume : Pulsatile, Unilatérale, Nausées, Contrariée par l'effort, Hypersensibilité sensorielle (photo/phonophobie).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-19',
    courseId: 'crs-neuro-9',
    questionNumber: 19,
    type: 'QCM',
    content: "Quelle est la durée habituelle d'un accès douloureux d'algie vasculaire de la face (AVF) non traité ?",
    options: [
      "A) Quelques secondes",
      "B) 15 à 180 minutes (typiquement 45 à 60 minutes)",
      "C) 4 à 72 heures",
      "D) Continue sur plusieurs semaines",
      "E) Moins de 2 minutes"
    ],
    correctAnswers: [1],
    explanation: "Les crises d'AVF durent entre 15 et 180 minutes, se répétant 1 à 8 fois par jour lors des périodes critiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-20',
    courseId: 'crs-neuro-9',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle molécule constitue le traitement de fond de premier choix de l'algie vasculaire de la face épisodique ou chronique ?",
    options: [
      "A) Propranolol",
      "B) Le Vérapamil (Isoptine® à posologie progressive avec surveillance ECG)",
      "C) Carbamazépine",
      "D) Paracétamol",
      "E) Aspirine"
    ],
    correctAnswers: [1],
    explanation: "Le vérapamil (240 à 720 mg/j avec contrôle régulier de l'espace PR à l'ECG) est le traitement de fond de référence absolue de l'AVF.",
    difficulty: 'facile'
  },

  // 5 Clinical Cases for Lesson 9
  {
    id: 'q-nro-9-c1',
    courseId: 'crs-neuro-9',
    questionNumber: 21,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 : Homme de 50 ans hypertendu, céphalée explosive brutale en coup de tonnerre survenue à la toux, nausées et raideur méningée. Quel examen demander en première intention en urgence ?",
    options: [
      "A) IRM cérébrale avec séquences épileptologiques",
      "B) Scanner cérébral (TDM) sans injection en extrême urgence",
      "C) Ponction lombaire immédiate",
      "D) Angio-IRM",
      "E) Radiographie du crâne"
    ],
    correctAnswers: [1],
    explanation: "La TDM sans injection est l'examen immédiat de première ligne devant toute céphalée en coup de tonnerre pour détecter le sang sous-arachnoïdien.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-c2',
    courseId: 'crs-neuro-9',
    questionNumber: 22,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 : Femme de 25 ans, troubles visuels récurrents (scotomes scintillants en fortifications durant 20 min) suivis d'une céphalée hémicrânienne pulsatile avec nausées 2 fois par mois. Examen neurologique normal. Diagnostic :",
    options: [
      "A) AVC occipital",
      "B) Migraine avec aura visuelle typique",
      "C) Épilepsie occipitale",
      "D) Décollement de rétine",
      "E) Céphalée de tension"
    ],
    correctAnswers: [1],
    explanation: "L'aura visuelle réversible en 20 minutes suivie d'une hémicrânie pulsatile typique signe la migraine avec aura selon les critères de l'IHS.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-c3',
    courseId: 'crs-neuro-9',
    questionNumber: 23,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 : Homme de 30 ans fumeur, crises nocturnes quotidiennes de douleur périorbitaire droite en broiement réveillant à 3h du matin (45 min), avec larmoiement et rhinorrhée. Quel diagnostic et quel traitement de crise ?",
    options: [
      "A) Névralgie du V1 ; Carbamazépine",
      "B) Algie vasculaire de la face (Cluster headache) ; Oxygénothérapie normobare à haut débit (12-15 L/min au masque) ou Sumatriptan 6 mg SC",
      "C) Sinusite aiguë ; Amoxicilline",
      "D) Migraine ophtalmique ; Paracétamol",
      "E) Glaucome aigu ; Collyre"
    ],
    correctAnswers: [1],
    explanation: "L'horaire fixe nocturne, l'intensité atroce, la durée brève et les signes végétatifs unilatéraux sont pathognomoniques de l'AVF, traitée en crise par O2 haut débit ou sumatriptan SC.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-c4',
    courseId: 'crs-neuro-9',
    questionNumber: 24,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 : Femme de 45 ans avec sclérose en plaques, douleurs en décharge électrique de la joue droite au toucher et hypoesthésie faciale V2-V3. Quel type de névralgie et quel examen d'imagerie prioritaire ?",
    options: [
      "A) Névralgie essentielle ; Radiographie des sinus",
      "B) Névralgie symptomatique (secondaire) du trijumeau ; IRM encéphalique avec séquences fines sur le tronc et le trajet du V",
      "C) Algie vasculaire ; Scanner sans injection",
      "D) Névralgie d'Arnold ; Scanner cervical",
      "E) Céphalée de tension"
    ],
    correctAnswers: [1],
    explanation: "La présence d'un déficit sensitif objectif dans le territoire du V et le terrain de SEP définissent une névralgie symptomatique secondaire par plaque de démyélinisation au niveau de la racine du V.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-9-c5',
    courseId: 'crs-neuro-9',
    questionNumber: 25,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 : Homme de 72 ans, céphalées temporales bilatérales, cuir chevelu sensible au peignage, douleurs à la mastication et asthénie avec VS à 90 mm/h. Quel bilan biologique simple et quel traitement immédiat ?",
    options: [
      "A) Ionogramme ; Antalgiques simples",
      "B) Vitesse de sédimentation (VS) et CRP ; Corticothérapie à forte dose en urgence (Prednisone 1 mg/kg/j) avant la biopsie de l'artère temporale",
      "C) Hémocultures ; Céphalosporines",
      "D) Bilan hépatique ; AINS",
      "E) Scanner sans injection ; Surveillance"
    ],
    correctAnswers: [1],
    explanation: "Suspicion d'artérite temporale de Horton. Le syndrome inflammatoire biologique (VS/CRP très élevées) impose la corticothérapie immédiate pour éviter une cécité définitive par ischémie ophtalmique.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_9_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-9-mindmap',
    courseId: 'crs-neuro-9',
    title: 'Mind Map : Céphalées & Algies Faciales',
    type: 'mindmap',
    content: `
# MIND MAP : CÉPHALÉES & ALGIES FACIALES
*Classification ICHD & Conduite Pratique aux Urgences*

## 1. CÉPHALÉES PRIMAIRES (90%)
- **Migraine** :
  - *Sans aura* : Pulsatile, unilatérale, nausées/vomissements, photo/phonophobie, 4-72h, aggravée par l'effort.
  - *Avec aura* : Signes neurologiques transitoires réversibles (visuelle 90% > sensitive > aphasique), 5-60 min.
  - *Traitement* : Crise (AINS, Triptans) / Fond si > 2-3 crises/mois (Bêtabloquants, Topiramate, Amitriptyline).
- **Céphalée de Tension** : Bilatérale « en étau / casque », continue, non pulsatile, sans nausées, non aggravée par l'effort.
- **Algie Vasculaire de la Face (AVF)** : Homme jeune, fumeur, douleur orbitaire unilatérale atroce en broiement, 15-180 min, signes végétatifs ipsilatéraux (larmoiement, rhinorrhée, myosis/ptosis). Crise : O2 haut débit (15 L/min) + Sumatriptan SC. Fond : Vérapamil.

## 2. CÉPHALÉES SECONDAIRES (URGENCES À ÉLIMINER)
- **Hémorragie sous-arachnoïdienne (HSA)** : Céphalée en « coup de tonnerre » maximale d'emblée -> TDM immédiat.
- **Maladie de Horton** : Sujet > 60 ans, céphalée temporale, claudication de la mâchoire, VS > 50 mm/h -> Corticoïdes en urgence + BAT.
- **Hypertension intracrânienne (HTIC)** : Céphalées matinales, vomissements en jet, œdème papillaire.
- **Thrombophlébite cérébrale** : Céphalée progressive, terrain pro-thrombotique (post-partum, contraception).
- **Glaucome aigu** : Œil rouge dur douloureux, mydriase semi-aréactive, halos colorés.
`
  },
  {
    id: 'res-nro-9-astuces',
    courseId: 'crs-neuro-9',
    title: 'Astuces & Mnémotechniques : Céphalées & Algies',
    type: 'astuce',
    content: `
# ASTUCES & RÉFLEXES DE CONCOURS (CÉPHALÉES)
*Par Dr. LAIDANI.MERIEM*

- **Critères Migraine sans aura : « PUNCH »**
  - **P**ulsatile
  - **U**nilatérale
  - **N**ausées / Vomissements
  - **C**ontrariée par l'effort physique
  - **H**ypersensibilité sensorielle (Photo/Phonophobie)

- **Algie Vasculaire : « CLUSTER »**
  - **C**ircadienne (horaires nocturnes réguliers)
  - **L**armoiement et rhinorrhée ipsilatéraux
  - **U**nilatérale orbitaire stricte
  - **S**umatriptan injectable efficace
  - **T**rès douloureuse en broiement
  - **E**rythème facial
  - **R**ésolution en grappe (semaines)

- **Névralgie du Trijumeau : « ZAP »**
  - **Z**one gâchette (trigger zone)
  - **A**ntiépileptique efficace (Carbamazépine)
  - **P**aroxysmes en éclair unilatéraux
`
  }
];
