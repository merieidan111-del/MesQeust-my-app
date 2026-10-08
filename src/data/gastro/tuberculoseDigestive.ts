import { Question, CourseResource } from '../../types/medical';

export const TUBERCULOSE_DIGESTIVE_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Tuberculose Intestinale & Péritonéale (Dr Rechach - CHU Douera)
  // -------------------------------------------------------------
  {
    id: 'q-tb-dig-01',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En 2023, selon l'OMS, la tuberculose abdominale représente quel pourcentage de l'ensemble des tuberculoses extra-pulmonaires ?",
    options: [
      "1 - 2 %",
      "3 - 5 %",
      "8 - 10 %",
      "12 - 15 %",
      "18 - 20 %"
    ],
    correctAnswers: [1],
    explanation: "La tuberculose abdominale représente 3 à 5 % de toutes les tuberculoses extra-pulmonaires (les localisations extra-pulmonaires représentant elles-mêmes environ 15 % de toutes les tuberculoses).",
    clinicalPearl: "Tuberculose abdominale = 3 à 5 % des tuberculoses extra-pulmonaires. Localisation péritonéale (58%) > intestinale (40%)."
  },
  {
    id: 'q-tb-dig-02',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la voie de dissémination la plus fréquente dans la tuberculose intestinale primitive ?",
    options: [
      "Propagation hématogène pure",
      "Déglutition de sécrétions respiratoires contaminées par Mycobacterium tuberculosis",
      "Propagation lymphatique rétrograde",
      "Ingestion de produits laitiers non pasteurisés (M. bovis)",
      "Extension directe depuis un foyer contigu"
    ],
    correctAnswers: [1],
    explanation: "La déglutition de sécrétions respiratoires riches en bacilles de Koch est la voie prédominante dans la tuberculose intestinale. La voie hématogène est plus fréquente dans les formes disséminées ou miliaires.",
    clinicalPearl: "Voie de contamination intestinale prédominante = Déglutition de crachats bacillifères chez un patient avec tuberculose pulmonaire active ou méconnue."
  },
  {
    id: 'q-tb-dig-03',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le site digestif le plus fréquemment atteint par la tuberculose intestinale (environ 64 % des cas) est :",
    options: [
      "Le jéjunum proximal",
      "L'iléon proximal",
      "La région iléo-cæcale",
      "Le côlon transverse",
      "Le rectum"
    ],
    correctAnswers: [2],
    explanation: "La région iléo-cæcale est le site de prédilection (64 % des cas). Cela s'explique par la stase relative du chyme, l'abondance du tissu lymphoïde (plaques de Peyer) et la résorption hydro-électrolytique maximale.",
    clinicalPearl: "Site préférentiel TB intestinale = Région iléo-cæcale (64%) grâce à la richesse en plaques de Peyer et la stase physiologique."
  },
  {
    id: 'q-tb-dig-04',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À l'analyse anatomopathologique de la tuberculose intestinale, quelle lésion histologique est caractéristique et pathognomonique ?",
    options: [
      "Le granulome épithélioïde et gigantocellulaire sans nécrose",
      "Le granulome avec nécrose caséeuse centrale",
      "La fibrose sous-muqueuse isolée sans histiocytes",
      "Une infiltration massive éosinophile transmurale",
      "Une hyperplasie lymphoïde folliculaire pure"
    ],
    correctAnswers: [1],
    explanation: "La nécrose caséeuse au centre du granulome épithélioïde et gigantocellulaire est la signature histologique pathognomonique de la tuberculose. Elle permet de la distinguer formellement de la maladie de Crohn où les granulomes sont dépourvus de caséum.",
    clinicalPearl: "Histologie TB vs Crohn : Granulome AVEC nécrose caséeuse = Tuberculose. Granulome SANS nécrose caséeuse = Maladie de Crohn."
  },
  {
    id: 'q-tb-dig-05',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Un patient présente des douleurs fébriles de la fosse iliaque droite, un amaigrissement et une masse palpable de la FID. Quelle forme de tuberculose est la plus évocatrice ?",
    options: [
      "Tuberculose colique distale isolée",
      "Tuberculose iléo-cæcale (forme hypertrophique ou ulcéro-hypertrophique)",
      "Péritonite tuberculeuse ascitique pure",
      "Tuberculose duodénale sténosante",
      "Tuberculose anorectale fistulisée"
    ],
    correctAnswers: [1],
    explanation: "La triade douleur de la fosse iliaque droite + altération de l'état général / fièvre vespérale + masse palpable de la FID correspond au tableau classique de la tuberculose iléo-cæcale.",
    clinicalPearl: "Masse fébrile de la FID chez un sujet jeune en Algérie = Évoquer en priorité la Tuberculose iléo-cæcale !"
  },
  {
    id: 'q-tb-dig-06',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À l'iléo-coloscopie, quel aspect de la valvule iléo-cæcale est très évocateur de tuberculose intestinale ?",
    options: [
      "Valvule atone et béante sans bourgeon",
      "Aspect déformé, rétracté et figé en « bouche de poisson »",
      "Valvule saine avec ulcérations aphtoïdes isolées duodénales",
      "Sténose longue et souple de l'angle colique",
      "Polype adénomateux sessile unique"
    ],
    correctAnswers: [1],
    explanation: "La valvule en « bouche de poisson » (déformée, œdémateuse, rétractée et béante) associée à des ulcérations transversales ou circulaires est très caractéristique de la tuberculose iléo-cæcale (40 à 55 % des cas).",
    clinicalPearl: "Aspect coloscopique classique de la TB : Valvule iléo-cæcale déformée en « bouche de poisson » + ulcères transversaux à bords décollés."
  },
  {
    id: 'q-tb-dig-07',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Au scanner abdominal, quel signe tomodensitométrique ganglionnaire est hautement évocateur d'une tuberculose abdominale ?",
    options: [
      "Adénopathies mésentériques à centre hypodense nécrotique avec rehaussement périphérique en anneau",
      "Adénopathies homogènes calcifiées diffuses rétro-aortiques",
      "Atrophie ganglionnaire totale du carrefour mésentérique",
      "Micro-adénopathies homogènes sans hypodensité",
      "Adénopathies hilaires hépatiques hyperdenses spontanément"
    ],
    correctAnswers: [0],
    explanation: "Les adénopathies à centre nécrotique (hypodenses) avec rehaussement périphérique en couronne après injection de produit de contraste iodé sont très évocatrices de tuberculose ganglionnaire/abdominale.",
    clinicalPearl: "Signe TDM évocateur de TB abdominale : Ganglions mésentériques avec nécrose centrale caséeuse (couronne rehaussée)."
  },
  {
    id: 'q-tb-dig-08',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel élément histologique ou biologique permet de distinguer avec le plus de certitude la tuberculose intestinale de la maladie de Crohn ?",
    options: [
      "La présence de diarrhée glairo-sanglante",
      "L'atteinte préférentielle iléo-cæcale",
      "La présence d'un granulome avec nécrose caséeuse ou la positivité de la PCR/culture BK",
      "L'existence d'une fistule périnéale",
      "Une élévation de la CRP"
    ],
    correctAnswers: [2],
    explanation: "Le granulome avec nécrose caséeuse, la présence de bacilles acido-alcoolo-résistants (BAAR) à la coloration de Ziehl-Neelsen ou la positivité de la culture/PCR BK sur biopsies apportent la certitude absolue de la tuberculose.",
    clinicalPearl: "Critère formel de distinction TB vs Crohn : Présence de nécrose caséeuse au sein du granulome."
  },
  {
    id: 'q-tb-dig-09',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le bilan biologique standard d'une tuberculose abdominale évolutive, quelle anomalie est la plus constante ?",
    options: [
      "Hyperleucocytose à polynucléaires neutrophiles > 25 000/mm³",
      "Syndrome inflammatoire biologique franc avec élévation marquée de la VS et de la CRP",
      "Hypercalcémie majeure avec hypocalciurie",
      "Cytolyse hépatique aiguë sévère à 20 fois la normale",
      "Thrombocytose extrême supérieure à 1 000 000/mm³"
    ],
    correctAnswers: [1],
    explanation: "Un syndrome inflammatoire avec VS et CRP élevées est présent dans 50 à 80 % des cas. On observe souvent une anémie inflammatoire et une lymphopénie ou une leucopénie plutôt qu'une franche hyperleucocytose à PNN.",
    clinicalPearl: "Biologie TB abdominale : Syndrome inflammatoire (VS/CRP), anémie inflammatoire, sans franche neutrophilie."
  },
  {
    id: 'q-tb-dig-10',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'examen microscopique direct par coloration de Ziehl-Neelsen sur des biopsies endoscopiques digestives a une sensibilité d'environ :",
    options: [
      "> 85 %",
      "60 à 70 %",
      "Faible, inférieure à 10 - 20 % (tuberculose paucibacillaire)",
      "Nulle en toutes circonstances",
      "100 % si les biopsies sont faites au fond d'un ulcère"
    ],
    correctAnswers: [2],
    explanation: "La sensibilité de l'examen direct (Ziehl-Neelsen) sur biopsies digestives est faible (< 10-20 %) en raison du caractère paucibacillaire des lésions. La culture sur Lowenstein-Jensen et la PCR augmentent le rendement.",
    clinicalPearl: "Un examen direct négatif à la coloration de Ziehl n'élimine JAMAIS une tuberculose digestive !"
  },
  {
    id: 'q-tb-dig-11',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est l'examen de référence (gold standard) pour confirmer avec certitude le diagnostic de tuberculose péritonéale ?",
    options: [
      "L'échographie abdominale avec ponction",
      "Le scanner abdominal avec injection",
      "La cœlioscopie (laparoscopie) avec biopsies péritonéales dirigées",
      "Le dosage de l'ADA dans le sang",
      "La radiographie pulmonaire"
    ],
    correctAnswers: [2],
    explanation: "La laparoscopie avec biopsies péritonéales dirigées est l'examen de référence avec une précision diagnostique proche de 95-100 %. Elle visualise les granulations blanchâtres (tubercules miliaires) sur le péritoine et prélève le tissu pour histologie et culture.",
    clinicalPearl: "Gold standard TB péritonéale = Cœlioscopie exploratrice avec biopsies multiples des granulations péritonéales."
  },
  {
    id: 'q-tb-dig-12',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le protocole antituberculeux standard de première intention recommandé chez l'adulte pour la tuberculose abdominale est :",
    options: [
      "6 mois : 2 mois de quadrithérapie RHZE puis 4 mois de bithérapie RH (2 RHZE / 4 RH)",
      "9 mois : 2 RHZE / 7 RH systématiques",
      "4 mois : 2 RH / 2 RZ",
      "12 mois : 2 RHZE / 10 RH",
      "Monothérapie par Isoniazide pendant 9 mois"
    ],
    correctAnswers: [0],
    explanation: "Le schéma thérapeutique de référence est une durée totale de 6 mois : 2 mois de quadrithérapie initiale par Rifampicine + Isoniazide + Pyrazinamide + Éthambutol (2 RHZE), suivis de 4 mois de bithérapie par Rifampicine + Isoniazide (4 RH).",
    clinicalPearl: "Schéma antituberculeux standard : 2 RHZE / 4 RH (Durée totale 6 mois)."
  },
  {
    id: 'q-tb-dig-13',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La complication mécanique locale la plus fréquente de la tuberculose intestinale (environ 44 % des complications) est :",
    options: [
      "La perforation péritonéale libre d'emblée",
      "La fistule entéro-vésicale",
      "La sténose intestinale cicatricielle",
      "L'hémorragie cataclysmique par rupture de la mésentérique supérieure",
      "La thrombose de la veine splénique"
    ],
    correctAnswers: [2],
    explanation: "La sténose intestinale est la complication la plus fréquente (44 %), suivie par la perforation (25-32 %). Les sténoses sont souvent courtes et peuvent être uniques ou multiples et étagées.",
    clinicalPearl: "Complications TB intestinale : Sténose (1ère cause = 44 %) > Perforation (2ème cause = 25-32 %)."
  },
  {
    id: 'q-tb-dig-14',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la tuberculose péritonéale, le signe physique et fonctionnel le plus fréquent (environ 73 % des cas) est :",
    options: [
      "L'ictère rétentionnel franc",
      "L'ascite (distension abdominale liquide)",
      "L'occlusion intestinale aiguë fébrile d'emblée",
      "L'hépatomégalie nodulaire pierreuse",
      "Les rectorragies abondantes"
    ],
    correctAnswers: [1],
    explanation: "L'ascite est présente dans près des 3/4 des cas (73 %) de tuberculose péritonéale, souvent associée à une altération de l'état général et à une fébricule vespérale.",
    clinicalPearl: "Signe révélateur de la TB péritonéale = Ascite fébrile exsudative d'installation subaiguë."
  },
  {
    id: 'q-tb-dig-15',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'analyse biochimique et cytologique du liquide d'ascite dans la tuberculose péritonéale met en évidence :",
    options: [
      "Un transsudat pauvre en protéines (< 25 g/L) et riche en polynucléaires",
      "Un liquide exsudatif (protéines > 25-30 g/L), à prédominance lymphocytaire (> 60-70 %) et GASA < 11 g/L",
      "Un liquide chyleux riche en triglycérides purs sans cellules",
      "Un liquide purulent avec 95 % de PNN altérés",
      "Un liquide hémo-péritonéal coagulant d'emblée"
    ],
    correctAnswers: [1],
    explanation: "L'ascite tuberculeuse est typiquement un exsudat jaune citrin riche en protides (> 30 g/L), riche en cellules avec nette prédominance lymphocytaire (> 70 %), et un gradient d'albumine sérum-ascite (GASA) abaissé (< 11 g/L, confirmant l'absence d'hypertension portale sinusoïdale).",
    clinicalPearl: "Ponction d'ascite TB : Exsudat lymphocytaire (protides > 30 g/L, lymphocytes > 70 %, GASA < 11 g/L)."
  },
  {
    id: 'q-tb-dig-16',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel seuil d'Adénosine Désaminase (ADA) dans le liquide d'ascite est hautement évocateur d'une tuberculose péritonéale en zone d'endémie ?",
    options: [
      "> 10 UI/L",
      "> 20 UI/L",
      "≥ 40 UI/L (sensibilité ~100 %, spécificité ~96 %)",
      "> 100 UI/L uniquement",
      "L'ADA n'est jamais mesuré dans le liquide d'ascite"
    ],
    correctAnswers: [2],
    explanation: "Un taux d'Adénosine Désaminase (ADA) ≥ 40 UI/L dans l'ascite offre une sensibilité de 100 % et une spécificité de 96 % pour la tuberculose péritonéale. C'est un biomarqueur rapide et non invasif fondamental.",
    clinicalPearl: "Biomarqueur clé : ADA dans l'ascite ≥ 40 UI/L = Tuberculose péritonéale hautement probable (Se 100%, Sp 96%)."
  },
  {
    id: 'q-tb-dig-17',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À la tomodensitométrie abdominale, quel aspect est le plus évocateur d'une tuberculose péritonéale ?",
    options: [
      "Ascite dense, épaississement péritonéal lisse et régulier, et adénopathies nécrotiques",
      "Nodules péritonéaux irréguliers et ascite hémorragique sans adénopathies",
      "Calcifications diffuses en coquille d'œuf du foie et de la rate",
      "Absence complète d'ascite avec dilatation gastrique aiguë",
      "Épaississement exclusif du grand omentum sans épanchement"
    ],
    correctAnswers: [0],
    explanation: "La TDM montre typiquement une ascite de densité élevée (> 20-30 UH), un épaississement péritonéal régulier et lisse (contrairement aux nodules irréguliers de la carcinose péritonéale), avec des adénopathies à centre nécrotique.",
    clinicalPearl: "TDM TB péritonéale : Épaississement péritonéal lisse et régulier (≠ Carcinose péritonéale qui est nodulaire et bosselée)."
  },
  {
    id: 'q-tb-dig-18',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À la laparoscopie exploratrice, l'aspect macroscopique caractéristique de la tuberculose péritonéale est :",
    options: [
      "Des granulations miliaires blanc-jaunâtre régulières (< 5 mm) disséminées sur le péritoine pariétal et viscéral",
      "De volumineuses masses péritonéales polylobées bourgeonnantes",
      "Un péritoine complètement sain et lisse sans la moindre granulation",
      "Des plaques nécrotiques noirâtres disséminées",
      "Une perforation colique systématique"
    ],
    correctAnswers: [0],
    explanation: "La laparoscopie montre des granulations miliaires typiques : petits nodules blanc-jaunâtre de taille uniforme (< 5 mm) parsemant le péritoine pariétal, viscéral et le grand épiploon, souvent associés à des adhérences inflammatoires.",
    clinicalPearl: "Macroscopie cœlioscopique : Granulations miliaires blanc-jaunâtre uniformes (< 5 mm) tapissant le péritoine."
  },
  {
    id: 'q-tb-dig-19',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel diagnostic différentiel majeur doit être systématiquement évoqué devant une ascite exsudative avec épaississement péritonéal chez l'adulte ?",
    options: [
      "L'insuffisance cardiaque congestive",
      "La cirrhose alcoolique décompensée non compliquée",
      "La carcinose péritonéale (d'origine gynécologique ou digestive)",
      "Le syndrome néphrotique pur",
      "Le kyste mésentérique bénin"
    ],
    correctAnswers: [2],
    explanation: "La carcinose péritonéale (notamment ovarienne, gastrique ou colique) est le principal diagnostic différentiel d'une ascite exsudative fébrile ou altérant l'état général. La cœlioscopie avec biopsies est indispensable pour trancher.",
    clinicalPearl: "Diagnostic différentiel numéro 1 d'une ascite exsudative : Carcinose péritonéale vs Tuberculose péritonéale."
  },
  {
    id: 'q-tb-dig-20',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'adjonction d'une corticothérapie brève (prednisone 0,5 mg/kg/j dégressive) au traitement antituberculeux dans la forme péritonéale est discutée pour :",
    options: [
      "Remplacer les antibiotiques antituberculeux en cas d'hépatite",
      "Accélérer la résorption de l'ascite et réduire le risque de brides et synéchies fibreuses rétractiles",
      "Éradiquer directement le bacille de Koch dans les ganglions",
      "Prévenir l'apparition de métastases",
      "Éviter la résistance à la Rifampicine"
    ],
    correctAnswers: [1],
    explanation: "Les corticoïdes peuvent être associés durant les 3 à 4 premières semaines pour diminuer la réaction inflammatoire exsudative intense, réduire la formation d'adhérences péritonéales et le risque d'occlusion tardive.",
    clinicalPearl: "Corticothérapie adjuvante en phase aiguë : Diminue l'inflammation exsudative et prévient les adhérences péritonéales rétractiles."
  },
  {
    id: 'q-tb-dig-21',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la tuberculose duodénale, le segment le plus fréquemment touché est :",
    options: [
      "Le bulbe duodénal (D1)",
      "Le deuxième duodénum (D2)",
      "Le troisième duodénum (D3)",
      "Le quatrième duodénum (D4)",
      "L'angle de Treitz uniquement"
    ],
    correctAnswers: [2],
    explanation: "Le troisième duodénum (D3) est le siège le plus fréquent de la tuberculose duodénale, responsable de sténoses extrinsèques ou intrinsèques et de syndrome occlusif haut.",
    clinicalPearl: "Tuberculose duodénale : Atteinte préférentielle du 3ème duodénum (D3), mémorisable par la stase et le passage rétro-péritonéal."
  },
  {
    id: 'q-tb-dig-22',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La perforation intestinale au cours d'une tuberculose du grêle survient dans quel pourcentage des cas et quelle est sa gravité ?",
    options: [
      "Moins de 2 %, bénigne sans péritonite",
      "5 à 10 %, résolutive sous antibiotiques seuls",
      "25 à 32 % des complications, associée à une mortalité opératoire d'environ 30 %",
      "60 %, quasi constante dès la première semaine",
      "Elle n'existe jamais dans la tuberculose"
    ],
    correctAnswers: [2],
    explanation: "La perforation survient dans 25 à 32 % des formes compliquées de tuberculose intestinale. Elle représente une urgence médico-chirurgicale grave avec une mortalité pouvant atteindre 30 %.",
    clinicalPearl: "Perforation tuberculeuse du grêle : 25-32 % des complications, grevée d'une lourde mortalité (~30 %)."
  },
  {
    id: 'q-tb-dig-23',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'atteinte colique isolée (hors région iléo-cæcale) dans la tuberculose digestive représente environ :",
    options: [
      "Plus de 60 % des cas",
      "Environ 10 % des cas (plus fréquente chez les patients immunodéprimés VIH)",
      "Moins de 0,1 %",
      "80 % des formes de l'enfant",
      "Toujours associée à une cirrhose"
    ],
    correctAnswers: [1],
    explanation: "L'atteinte colique isolée est rapportée dans environ 10,8 % des cas de tuberculose digestive, plus particulièrement observée chez les patients immunodéprimés (VIH+).",
    clinicalPearl: "Atteinte colique isolée : Rare (~10 %), à suspecter en priorité chez l'immunodéprimé (VIH)."
  },
  {
    id: 'q-tb-dig-24',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Devant une lésion anorectale récurrente, traînante, résistante aux traitements usuels, associée à une altération de l'état général en Algérie, il faut évoquer :",
    options: [
      "Une tuberculose anorectale (fistules, ulcérations périnéales)",
      "Un sinus pilonidal simple",
      "Une hémorroïde interne thrombosée",
      "Un prolapsus rectal muqueux",
      "Une diverticulite rectale"
    ],
    correctAnswers: [0],
    explanation: "La tuberculose anorectale est rare (environ 1 % des cas de tuberculose digestive) mais doit être évoquée devant toute lésion fissuraire ou fistuleuse anopérinéale torpide, récidivante ou atone en zone d'endémie.",
    clinicalPearl: "Fistule anale torpide récidivante en zone d'endémie = Penser à la tuberculose anorectale !"
  },
  {
    id: 'q-tb-dig-25',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une sténose tuberculeuse du grêle courte, fibreuse et accessible sans signe de perforation relève préférentiellement de :",
    options: [
      "Une colectomie totale d'emblée",
      "Une dilatation endoscopique au ballonnet associée à la poursuite du traitement médical",
      "Une chimiothérapie par 5-FU",
      "Une corticothérapie exclusive sans antituberculeux",
      "Une stricte surveillance sans aucun traitement"
    ],
    correctAnswers: [1],
    explanation: "Pour les sténoses courtes et accessibles, la dilatation endoscopique au ballonnet offre une alternative mini-invasive efficace évitant une résection chirurgicale, sous couvert du traitement antituberculeux.",
    clinicalPearl: "Sténose courte non compliquée = Dilatation endoscopique au ballonnet sous couverture antituberculeuse."
  },

  // -------------------------------------------------------------
  // CAS CLINIQUES (17 questions d'application)
  // -------------------------------------------------------------
  // Cas 1 : Homme de 34 ans, douleur FID et fièvre
  {
    id: 'q-cas-tb-1-1',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 26,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (Homme de 34 ans, Algérie) - Douleurs de la FID depuis 3 mois, fièvre vespérale (38,7 °C), sueurs nocturnes, perte de 6 kg. Masse sensible de la FID. Radio thoracique normale. CRP à 85 mg/L. Quelle est l'hypothèse diagnostique la plus probable ?",
    options: [
      "Appendicite aiguë catarrhale",
      "Maladie de Crohn iléale",
      "Tuberculose iléo-cæcale",
      "Cancer du cæcum",
      "Lymphome de Burkitt abdominal"
    ],
    correctAnswers: [2],
    explanation: "La triade douleur chronique de la FID + masse palpable + signes généraux d'imprégnation tuberculeuse (fièvre vespérale, sueurs, amaigrissement) chez un jeune en Algérie oriente au premier chef vers une tuberculose iléo-cæcale.",
    clinicalPearl: "Masse fébrile de la FID chez un jeune adulte en zone d'endémie = Tuberculose iléo-cæcale en priorité."
  },
  {
    id: 'q-cas-tb-1-2',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 27,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Quel examen endoscopique est le plus approprié pour explorer cette masse de la FID ?",
    options: [
      "Coloscopie totale avec iléoscopie rétrograde et biopsies multiples",
      "Fibroscopie œsogastrique seule",
      "Vidéocapsule du grêle sans bilan préalable",
      "Rectosigmoïdoscopie au tube court",
      "Écho-endoscopie rectale"
    ],
    correctAnswers: [0],
    explanation: "La coloscopie totale avec franchissement de la valvule de Bauhin (iléoscopie rétrograde) permet de visualiser les lésions cæcales et iléales terminales et de réaliser des biopsies indispensables.",
    clinicalPearl: "Examen endoscopique de choix = Iléo-coloscopie totale avec biopsies étagées."
  },
  {
    id: 'q-cas-tb-1-3',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 28,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - À l'endoscopie, quel aspect lésionnel macroscopique est le plus évocateur de tuberculose iléo-cæcale ?",
    options: [
      "Ulcérations longitudinales serpentines profondes séparées par une muqueuse saine",
      "Valvule iléo-cæcale œdématiée, rétractée et déformée en « bouche de poisson » avec ulcères circulaires/transversaux",
      "Polypose adénomateuse diffuse avec > 100 polypes",
      "Muqueuse colique normale avec biopsies positives",
      "Sténose régulière souple sans la moindre ulcération"
    ],
    correctAnswers: [1],
    explanation: "L'aspect déformé en « bouche de poisson » de la valvule iléo-cæcale associé à des ulcérations transversales à bords décollés est caractéristique de la tuberculose (contrairement aux ulcères longitudinaux de la maladie de Crohn).",
    clinicalPearl: "Valvule en « bouche de poisson » et ulcérations circulaires/transversales = Tuberculose iléo-cæcale."
  },
  {
    id: 'q-cas-tb-1-4',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 29,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Quel prélèvement apportera la certitude diagnostique formelle ?",
    options: [
      "Hémocultures standards sur milieu aérobie",
      "Biopsies endoscopiques montrant un granulome caséeux et/ou culture positive sur milieu de Lowenstein-Jensen / PCR BK",
      "Sérologie VIH isolée",
      "Dosage des marqueurs tumoraux ACE et CA 19-9",
      "Intradermo-réaction à la tuberculine (IDR)"
    ],
    correctAnswers: [1],
    explanation: "L'analyse histologique des biopsies (granulome avec nécrose caséeuse) et/ou la microbiologie (PCR GeneXpert, culture sur Lowenstein-Jensen) apporte la certitude diagnostique formelle.",
    clinicalPearl: "Diagnostic de certitude = Granulome caséeux à l'histologie et/ou identification du BK (culture/PCR)."
  },

  // Cas 2 : Femme de 45 ans, ascite fébrile
  {
    id: 'q-cas-tb-2-1',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 30,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (Femme de 45 ans, diabétique) - Ascite d'installation subaiguë avec fièvre vespérale, douleurs abdominales et amaigrissement. Échographie : ascite libre abondante, épaississement péritonéal et adénopathies profondes. CRP 120 mg/L. Ponction d'ascite : liquide jaune citrin, exsudat lymphocytaire (protéines 38 g/L, 85 % lymphocytes). Quelle est l'orientation diagnostique principale ?",
    options: [
      "Cirrhose alcoolique décompensée",
      "Carcinose péritonéale d'origine digestive",
      "Tuberculose péritonéale",
      "Péritonite bactérienne spontanée du cirrhotique",
      "Syndrome de Budd-Chiari aigu"
    ],
    correctAnswers: [2],
    explanation: "L'ascite fébrile exsudative et lymphocytaire chez une patiente jeune avec altération de l'état général oriente au premier chef vers une tuberculose péritonéale (la cirrhose donnant un transsudat, et l'infection de liquide d'ascite étant neutrophilique).",
    clinicalPearl: "Ascite exsudative lymphocytaire fébrile en Algérie = Tuberculose péritonéale jusqu'à preuve du contraire."
  },
  {
    id: 'q-cas-tb-2-2',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 31,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Le dosage de l'ADA (Adénosine Désaminase) dans le liquide d'ascite revient à 58 UI/L. Que conclure ?",
    options: [
      "Il élimine formellement la tuberculose",
      "Il conforte très fortement le diagnostic de tuberculose péritonéale (valeur ≥ 40 UI/L)",
      "Il est ininterprétable car non standardisé",
      "Il signe de manière formelle une cirrhose cardiaque",
      "Il nécessite obligatoirement d'être refait à jeun"
    ],
    correctAnswers: [1],
    explanation: "Un taux d'ADA ≥ 40 UI/L dans l'ascite (ici 58 UI/L) conforte très fortement la tuberculose péritonéale avec une excellente sensibilité et spécificité (Se 100 %, Sp 96 %).",
    clinicalPearl: "ADA dans l'ascite > 40 UI/L = Argument biologique majeur en faveur de la tuberculose péritonéale."
  },
  {
    id: 'q-cas-tb-2-3',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 32,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Quel examen invasif constitue le gold standard pour affirmer le diagnostic avec biopsies ?",
    options: [
      "Scanner abdominal avec produit de contraste",
      "Cœlioscopie (laparoscopie) avec biopsies péritonéales dirigées",
      "PCR sur liquide d'ascite seule",
      "Cytoponction hépatique à l'aveugle",
      "Biopsie rectale systématique"
    ],
    correctAnswers: [1],
    explanation: "La cœlioscopie permet de visualiser directement les granulations miliaires sur le péritoine et de prélever des biopsies multiples pour histologie (caséum) et microbiologie (PCR/culture).",
    clinicalPearl: "Cœlioscopie = Visualisation directe des granulations miliaires + biopsies dirigées."
  },
  {
    id: 'q-cas-tb-2-4',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 33,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - En attendant les résultats histologiques et bactériologiques, quelle est la conduite thérapeutique la plus adaptée devant ce faisceau d'arguments ?",
    options: [
      "Corticothérapie seule à forte dose",
      "Mise en route du traitement antituberculeux quadrithérapie (2 RHZE / 4 RH) avec surveillance clinique et biologique",
      "Antibiothérapie par fluoroquinolones en monothérapie",
      "Chimiothérapie anticancéreuse d'épreuve",
      "Diurétiques seuls sans aucun anti-infectieux"
    ],
    correctAnswers: [1],
    explanation: "Devant une très forte présomption clinique, biologique (ADA 58 UI/L, ascite lymphocytaire) et tomodensitométrique en zone d'endémie, l'instauration précoce d'une quadrithérapie antituberculeuse (2 RHZE / 4 RH) est la règle.",
    clinicalPearl: "Traitement antituberculeux d'épreuve rapide en zone d'endémie devant un faisceau concordant."
  },

  // Cas 3 : Diagnostic différentiel Crohn vs Tuberculose
  {
    id: 'q-cas-tb-3-1',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 34,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (Homme de 28 ans) - Douleurs abdominales, diarrhée avec rectorragies et fistule anopérinéale. Coloscopie : ulcères longitudinaux profonds de l'iléon terminal séparés par une muqueuse saine, avec valvule iléo-cæcale respectée. Quel diagnostic est le plus probable ?",
    options: [
      "Tuberculose iléo-cæcale",
      "Maladie de Crohn iléo-colique",
      "Rectocolite hémorragique (RCH)",
      "Lymphome du grêle",
      "Colite ischémique aiguë"
    ],
    correctAnswers: [1],
    explanation: "Les ulcérations longitudinales profondes, la présence d'intervalles de muqueuse saine, l'atteinte périnéale (fistule) et le respect de la valvule iléo-cæcale sont les caractéristiques phares de la maladie de Crohn (contrairement à la tuberculose où la valvule est déformée et les ulcères transversaux).",
    clinicalPearl: "Ulcères longitudinaux + muqueuse saine intercalaire + atteinte anopérinéale = Maladie de Crohn."
  },
  {
    id: 'q-cas-tb-3-2',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 35,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (suite) - Quel examen complémentaire permettra d'éliminer définitivement une tuberculose avant d'initier un traitement lourd de MICI ?",
    options: [
      "Biopsies iléales et coliques pour recherche de granulome caséeux et PCR/culture BK + Quantiféron et radio pulmonaire",
      "Scanner cérébral injecté",
      "Transit du grêle baryté seul",
      "Échographie de la thyroïde",
      "Coproculture bactérienne standard"
    ],
    correctAnswers: [0],
    explanation: "L'histologie (recherche de caséum), la recherche de BK (culture/PCR), le test IGRA (Quantiféron) et le cliché thoracique sont indispensables pour écarter formellement la tuberculose avant tout traitement immunosuppresseur.",
    clinicalPearl: "Éliminer la tuberculose est un prérequis absolu avant tout traitement par corticoïdes ou anti-TNF !"
  },
  {
    id: 'q-cas-tb-3-3',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 36,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (suite) - Quelle classe thérapeutique est formellement contre-indiquée si une tuberculose sous-jacente n'a pas été formellement éliminée ou traitée ?",
    options: [
      "Les dérivés 5-ASA (Mésalazine)",
      "Les biothérapies anti-TNFalpha (Infliximab, Adalimumab)",
      "Les régimes sans résidus",
      "Les antispasmodiques musculotropes",
      "Les probiotiques"
    ],
    correctAnswers: [1],
    explanation: "Les agents anti-TNFalpha provoquent un risque majeur de dissémination foudroyante de la tuberculose (tuberculose miliaire, méningite tuberculeuse) en détruisant les granulomes qui contenaient les bacilles vivants.",
    clinicalPearl: "Anti-TNFalpha + Tuberculose non traitée = Risque de tuberculose disséminée gravissime mortelle !"
  },

  // Cas 4 : Complication obstructive (sténose)
  {
    id: 'q-cas-tb-4-1',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 37,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (Patient de 52 ans) - Traité pour tuberculose iléo-cæcale depuis 3 mois, présente des douleurs abdominales paroxystiques, des vomissements et un arrêt du transit avec bruits de lutte. Quelle complication est survenue ?",
    options: [
      "Perforation digestive d'emblée",
      "Sténose intestinale cicatricielle rétractile",
      "Fistule entéro-cutanée",
      "Péritonite biliaire aiguë",
      "Infarctus mésentérique complet"
    ],
    correctAnswers: [1],
    explanation: "Sous traitement antituberculeux, la guérison tissulaire entraîne une fibrose cicatricielle qui peut provoquer ou aggraver une sténose intestinale, responsable d'un syndrome occlusif du grêle (44 % des complications).",
    clinicalPearl: "La cicatrisation sous antituberculeux peut induire une fibrose rétractile responsable de sténose occlusive !"
  },
  {
    id: 'q-cas-tb-4-2',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 38,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (suite) - Devant une sténose iléale courte (< 3-4 cm) sans signe de nécrose pariétale, quelle modalité thérapeutique conservatrice peut être tentée ?",
    options: [
      "Chirurgie d'exérèse étendue immédiate",
      "Dilatation endoscopique au ballonnet sous couverture antituberculeuse",
      "Augmentation des doses de Rifampicine seule",
      "Arrêt complet du traitement antituberculeux",
      "Ponction percutanée sous scanner"
    ],
    correctAnswers: [1],
    explanation: "La dilatation endoscopique au ballonnet est une excellente alternative conservatrice pour les sténoses courtes accessibles, évitant le recours à une résection chirurgicale.",
    clinicalPearl: "Sténose courte post-tuberculeuse = Dilatation endoscopique au ballonnet."
  },
  {
    id: 'q-cas-tb-4-3',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 39,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (suite) - Si la sténose est longue, serrée ou multiple et étagée sur le grêle, quel geste chirurgical d'épargne intestinale est recommandé ?",
    options: [
      "Stricturoplastie (sténoplastie) ou résections segmentaires limitées pour prévenir le syndrome de grêle court",
      "Résection de 2 mètres de grêle systématique",
      "Dérivation externe définitive sans traitement",
      "Laparotomie sans aucun geste",
      "Embolisation des vaisseaux mésentériques"
    ],
    correctAnswers: [0],
    explanation: "Le principe chirurgical fondamental dans la tuberculose est l'épargne parenchymateuse : on privilégie les stricturoplasties et les résections limitées pour éviter le syndrome de l'intestin court.",
    clinicalPearl: "Chirurgie de la sténose tuberculeuse : Principe d'épargne tissulaire (stricturoplastie) !"
  },

  // Cas 5 : Patient immunodéprimé (VIH+)
  {
    id: 'q-cas-tb-5-1',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 40,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (Homme de 38 ans, VIH+, CD4 = 120/mm³) - Diarrhée chronique, fièvre et amaigrissement. TDM : épaississement du côlon ascendant et adénopathies mésentériques nécrotiques. Chez ce patient immunodéprimé, quelle localisation colique est la plus fréquemment rencontrée ?",
    options: [
      "Le cæcum et le côlon ascendant",
      "Le côlon sigmoïde isolé",
      "Le rectum sous-muqueux pur",
      "L'appendice uniquement",
      "L'estomac moyen"
    ],
    correctAnswers: [0],
    explanation: "Chez l'immunodéprimé, l'atteinte colique est plus fréquente, mais le cæcum et le côlon droit demeurent les sites préférentiels de fixation du bacille.",
    clinicalPearl: "Tuberculose colique chez le sujet VIH : Cæcum et côlon ascendant préférentiellement touchés."
  },
  {
    id: 'q-cas-tb-5-2',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 41,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (suite) - Pourquoi l'intradermoréaction (IDR) ou les tests IGRA peuvent-ils être faussement négatifs chez ce patient ?",
    options: [
      "En raison d'un taux trop élevé d'anticorps",
      "En raison de l'anergie tuberculinique liée à l'effondrement des lymphocytes T CD4 (< 200/mm³)",
      "Car le bacille mute spontanément dans le côlon",
      "Car le test n'est sensible que pour les enfants",
      "Par interférence avec le traitement antirétroviral"
    ],
    correctAnswers: [1],
    explanation: "L'immunodépression sévère (CD4 < 200/mm³) entraîne une anergie cellulaire majeure : les tests immunologiques basés sur la réponse lymphocytaire T (IDR, Quantiféron) sont fréquemment faussement négatifs.",
    clinicalPearl: "Chez l'immunodéprimé (CD4 < 200) : Risque majeur de faux négatifs des tests IDR/IGRA par anergie cellulaire."
  },
  {
    id: 'q-cas-tb-5-3',
    courseId: 'crs-gastro-tuberculose-digestive',
    questionNumber: 42,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (suite) - Quelle est la durée standard recommandée du traitement antituberculeux chez ce patient VIH sans critère de multirésistance ?",
    options: [
      "Schéma de 6 mois identique au sujet immunocompétent (2 RHZE / 4 RH) avec surveillance des interactions avec les antirétroviraux",
      "Réduction à 3 mois",
      "Traitement à vie obligatoire",
      "Monothérapie par Rifampicine",
      "Corticothérapie prolongée 1 an"
    ],
    correctAnswers: [0],
    explanation: "Selon les directives de l'OMS, la durée du traitement antituberculeux chez le patient VIH sans résistance est de 6 mois (2 RHZE / 4 RH), avec gestion rigoureuse des interactions médicamenteuses entre la Rifampicine et les antirétroviraux (inhibiteurs de protéase, etc.).",
    clinicalPearl: "Durée du traitement TB chez le patient VIH : 6 mois standard (2 RHZE / 4 RH), attention aux interactions Rifampicine/ARV."
  }
];

export const TUBERCULOSE_DIGESTIVE_RESOURCES: CourseResource[] = [
  {
    id: 'res-tb-dig-mindmap',
    courseId: 'crs-gastro-tuberculose-digestive',
    type: 'Resume',
    title: 'Fiche Synthèse : Tuberculose Intestinale & Péritonéale',
    contentMarkdown: `## Tuberculose Intestinale & Péritonéale : L'Essentiel pour le Résidanat
*D'après le cours du Dr Rechach – CHU Douera*

### 1. Épidémiologie & Transmission
- **Importance** : 3 à 5 % des tuberculoses extra-pulmonaires.
- **Topographie** : Péritonéale (58 %) > Intestinale (40 %) > Ganglionnaire mésentérique.
- **Voies d'infection** :
  - *Déglutition de sécrétions bacillifères* (voie prédominante).
  - *Voie hématogène* (dissémination miliaire).
  - *Ingestion de lait non pasteurisé* (*M. bovis*).

### 2. Formes Cliniques & Anatomopathologie
- **Tuberculose Intestinale (Région iléo-cæcale = 64 %)** :
  - Clinique : Douleur FID, masse fébrile, sueurs nocturnes, amaigrissement.
  - Endoscopie : Valvule iléo-cæcale déformée en « bouche de poisson », ulcérations transversales/circulaires à bords décollés.
  - Anapath : **Granulome épithélioïde et gigantocellulaire AVEC nécrose caséeuse** (différence clé avec Crohn).
  - TDM : Adénopathies mésentériques à centre nécrotique hypodense.
- **Tuberculose Péritonéale (Ascite = 73 %)** :
  - Clinique : Ascite fébrile subaiguë, altération de l'état général.
  - Ponction : **Exsudat lymphocytaire** (protéines > 30 g/L, lymphocytes > 70 %, GASA < 11 g/L).
  - Biomarqueur : **ADA ≥ 40 UI/L** (Sensibilité 100 %, Spécificité 96 %).
  - Gold standard : **Cœlioscopie** (granulations miliaires blanc-jaunâtre < 5 mm) + biopsies péritonéales dirigées.

### 3. Diagnostic Différentiel Clé : Tuberculose vs Maladie de Crohn
| Critères | Tuberculose Intestinale | Maladie de Crohn |
| :--- | :--- | :--- |
| **Ulcérations** | Transversales / circulaires | Longitudinales / serpigineuses |
| **Valvule** | Déformée en « bouche de poisson » | Souvent respectée |
| **Granulome** | **Avec nécrose caséeuse** | Sans nécrose caséeuse |
| **Atteinte anale** | Rare (1 %) | Fréquente (fistules, fissures) |
| **Culture / PCR BK** | Positive | Négative |

### 4. Traitement
- **Médical de 1ère intention** : **6 mois** = **2 RHZE / 4 RH**.
  - R = Rifampicine, H = Isoniazide, Z = Pyrazinamide, E = Éthambutol.
- **Corticothérapie adjuvante** : Formes péritonéales très inflammatoires (réduit les brides).
- **Chirurgie d'épargne** : Stricturoplastie ou résection limitée pour sténoses compliquées ou perforations. Dilatation endoscopique pour sténoses courtes.`,
    author: 'Dr Rechach - CHU Douera'
  },
  {
    id: 'res-tb-dig-mnemo',
    courseId: 'crs-gastro-tuberculose-digestive',
    type: 'Astuce',
    title: 'Mnémotechniques : Tuberculose Abdominale',
    contentMarkdown: `### 💡 Mnémotechniques d'Examen (Dr Rechach)

1. **Protocole Thérapeutique : « R.H.Z.E »**
   - **2 mois** de Quadrithérapie : **R**ifampicine + **H**émisuccinate d'Isoniazide + **Z**yrazinamide (Pyrazinamide) + **E**thambutol
   - **4 mois** de Bithérapie : **R**ifampicine + **H** (Isoniazide)

2. **Ascite Tuberculeuse : « E.L.A »**
   - **E** : **E**xsudat (protéines > 30 g/L, GASA < 11)
   - **L** : **L**ymphocytes prédominants (> 70 %)
   - **A** : **A**DA élevé (≥ 40 UI/L)

3. **Différentiel Ulcères : « T.T vs C.L »**
   - **T**uberculose = Ulcères **T**ransversaux
   - **C**rohn = Ulcères **L**ongitudinaux

4. **Complications : « 1ère Sténose, 2ème Trou »**
   - Sténose (44 %)
   - Perforation (25-32 %)`,
    author: 'Dr Rechach - CHU Douera'
  }
];
