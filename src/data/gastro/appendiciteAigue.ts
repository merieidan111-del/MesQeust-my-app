import { Question, CourseResource } from '../../types/medical';

export const APPENDICITE_AIGUE_QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // 25 QCMs - Appendicite Aiguë (Dr LOUDDANI A. - Université Blida 1)
  // -------------------------------------------------------------
  {
    id: 'q-app-01',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 1,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant l'épidémiologie de l'appendicite aiguë, quelle proposition est exacte ?",
    options: [
      "Elle est plus fréquente chez le nourrisson que chez l'adulte jeune",
      "La prédominance féminine est très nette après 40 ans",
      "L'incidence est maximale chez l'adolescent et l'adulte jeune (15-30 ans), avec une légère prédominance masculine dans certaines séries",
      "Chez le vieillard, le diagnostic est précoce grâce à une symptomatologie d'emblée bruyante",
      "La répartition géographique est uniforme, sans aucune influence du régime alimentaire"
    ],
    correctAnswers: [2],
    explanation: "L'appendicite aiguë est l'urgence chirurgicale abdominale la plus fréquente. Le pic d'incidence se situe entre 15 et 30 ans avec une légère prédominance masculine. Chez le vieillard, le diagnostic est souvent trompeur et retardé. L'alimentation pauvre en fibres joue un rôle favorisant.",
    clinicalPearl: "Épidémiologie : 1ère urgence chirurgicale abdominale, pic chez l'adolescent et l'adulte jeune (15-30 ans)."
  },
  {
    id: 'q-app-02',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 2,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Laquelle de ces positions appendiculaires ne peut PAS être expliquée par les anomalies de rotation et d'accolement embryologique du côlon ?",
    options: [
      "Rétro-cæcale",
      "Sous-hépatique",
      "Pelvienne",
      "Intra-thoracique",
      "Mésocœliaque"
    ],
    correctAnswers: [3],
    explanation: "L'organogenèse normale et les défauts de rotation ou d'accolement du caecum expliquent les positions rétro-cæcale (la plus fréquente des ectopies), sous-hépatique (défaut de descente), pelvienne, ou mésocœliaque. L'appendice n'a aucune localisation thoracique.",
    clinicalPearl: "Positions anatomiques : Latéro-cæcale interne (normale 65 %), rétro-cæcale (25 %), pelvienne (5 %), sous-hépatique (2 %)."
  },
  {
    id: 'q-app-03',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 3,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "L'artère appendiculaire est une branche terminale issue de :",
    options: [
      "L'artère colique droite",
      "L'artère iléo-cæco-colo-appendiculaire (branche de l'artère iléo-colique)",
      "L'artère mésentérique inférieure",
      "L'artère iliaque interne",
      "L'artère sigmoïdienne moyenne"
    ],
    correctAnswers: [1],
    explanation: "L'artère appendiculaire chemine dans le méso-appendice et constitue une branche terminale sans suppléance de l'artère iléo-cæco-colo-appendiculaire (branche de l'artère iléo-colique, tributaire de l'artère mésentérique supérieure). Son caractère terminal explique la rapidité de la nécrose ischémique en cas d'hyperpression.",
    clinicalPearl: "Vascularisation appendiculaire : Artère TERMINALE sans anastomose -> Thrombose précoce et risque rapide d'ischémie/nécrose."
  },
  {
    id: 'q-app-04',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 4,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le mécanisme obstructif intraluminal le plus fréquemment impliqué dans l'appendicite aiguë de l'enfant et de l'adulte jeune est :",
    options: [
      "Un stercolithe (coprolithe) calcifié",
      "Une hyperplasie lymphoïde de la sous-muqueuse (réactionnelle)",
      "Un corps étranger alimentaire (pépin, arête)",
      "Un bouchon muqueux dans le cadre d'une mucoviscidose",
      "Une tumeur neuroendocrine (carcinoïde)"
    ],
    correctAnswers: [1],
    explanation: "Chez l'enfant et l'adulte jeune, l'hyperplasie du tissu lymphoïde sous-muqueux (stimulée par un épisode viral ou bactérien ORL/digestif) est la cause d'obstruction luminale la plus fréquente (60 %). Le stercolithe prédomine chez l'adulte plus âgé (35 %).",
    clinicalPearl: "Étiologie de l'obstruction : Hyperplasie lymphoïde chez le jeune (60 %) ; Stercolithe / fécalithe chez le sujet mûr (35 %)."
  },
  {
    id: 'q-app-05',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 5,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle séquence histopathologique correspond à l'évolution naturelle d'une appendicite aiguë non opérée ?",
    options: [
      "Catarrhale -> gangrène -> ulcérée -> perforée",
      "Ulcérée -> catarrhale -> purulente -> plastron",
      "Catarrhale -> ulcérée -> purulente (empyème) -> gangrène (nécrose) -> perforée",
      "Purulente -> gangrène -> catarrhale -> abcès",
      "Ulcérée -> perforée d'emblée sans stade intermédiaire"
    ],
    correctAnswers: [2],
    explanation: "L'évolution anatomopathologique progressive comporte : 1) Appendicite catarrhale (congestive), 2) Ulcérée, 3) Purulente ou empyème appendiculaire, 4) Gangréneuse (nécrose ischémique pariétale), 5) Perforée avec issue de pus/stercolithe.",
    clinicalPearl: "Stades anatomopathologiques : Catarrhale -> Suppurée/Ulcérée -> Gangréneuse -> Perforée."
  },
  {
    id: 'q-app-06',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 6,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La douleur débutant en région épigastrique ou péri-ombilicale puis migrant secondairement vers la fosse iliaque droite correspond à :",
    options: [
      "Le signe de Rovsing",
      "Le signe de Blumberg",
      "La séquence ou migration douloureuse classique de l'appendicite",
      "Le signe du psoas",
      "L'irradiation cholécystique classique"
    ],
    correctAnswers: [2],
    explanation: "Cette migration douloureuse (douleur viscérale initiale médiée par le plexus solaire T10 projetée à l'épigastre, puis douleur somatique pariétale nette en fosse iliaque droite par irritation du péritoine pariétal) est la présentation classique décrite chez plus de 50-60 % des patients.",
    clinicalPearl: "Migration douloureuse : Épigastre/ombilic (douleur viscérale) -> Fosse iliaque droite (douleur pariétale péritonéale)."
  },
  {
    id: 'q-app-07',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 7,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Devant une appendicite aiguë non compliquée en fosse iliaque droite, quel signe physique est le plus précoce et fidèle ?",
    options: [
      "Une contracture abdominale généralisée invincible en « ventre de bois »",
      "Une défense pariétale localisée de la fosse iliaque droite",
      "Une matité déclive des deux flancs",
      "Un météorisme silencieux",
      "Un tympanisme sous-hépatique de Chilaiditi"
    ],
    correctAnswers: [1],
    explanation: "La défense pariétale localisée (résistance musculaire involontaire à la palpation profonde que le relâchement respiratoire ne parvient pas à vaincre) est le signe physique cardinal de l'appendicite aiguë en FID. La contracture généralisée signe déjà une péritonite.",
    clinicalPearl: "Signe physique cardinal de l'appendicite aiguë = Défense pariétale localisée en fosse iliaque droite."
  },
  {
    id: 'q-app-08',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 8,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Concernant les examens biologiques dans l'appendicite aiguë typique :",
    options: [
      "Une CRP normale élimine formellement le diagnostic d'appendicite",
      "Une hyperleucocytose > 25 000/mm³ est constante dès la 2ème heure",
      "La CRP et les globules blancs sont souvent élevés, mais une NFS normale au tout début n'élimine pas l'appendicite",
      "La vitesse de sédimentation est toujours strictement normale à 48 heures",
      "Une thrombopénie profonde est un signe caractéristique précoce"
    ],
    correctAnswers: [2],
    explanation: "Une hyperleucocytose à polynucléaires neutrophiles (> 10 000/mm³) et une élévation de la CRP sont classiques, mais le dosage biologique peut être pris en défaut dans les premières heures (NFS encore normale). Le diagnostic reste avant tout clinique.",
    clinicalPearl: "Biologie : Hyperleucocytose à PNN + élévation de la CRP. Une biologie normale précoce n'élimine pas l'appendicite !"
  },
  {
    id: 'q-app-09',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 9,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "À l'échographie abdominale, quel critère morphologique est caractéristique d'une appendicite aiguë en coupe transversale ?",
    options: [
      "Une structure digestive compressible de 3 mm",
      "Une invagination intestinale avec bourrelet asymétrique",
      "Une image tubulée borgne, non compressible, avec diamètre supérieur à 6 mm et aspect « en cocarde »",
      "Une lithiase mobile intra-vésiculaire",
      "Un épanchement péri-rénal droit isolé"
    ],
    correctAnswers: [2],
    explanation: "Les critères échographiques d'appendicite aiguë associent : structure tubulée borgne non compressible, diamètre externe > 6 mm, épaisseur pariétale > 3 mm, aspect en cocarde en coupe transversale, infiltration de la graisse adjacente et stercolithe éventuel.",
    clinicalPearl: "Échographie de l'appendicite : Diamètre > 6 mm, non compressible, aspect en « cocarde », hyperhémie Doppler."
  },
  {
    id: 'q-app-10',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 10,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une appendicite rétro-cæcale se manifeste cliniquement de manière typique par :",
    options: [
      "Une douleur hypogastrique avec hématurie massive d'emblée",
      "Une douleur lombaire ou du flanc droit, parfois un psoïtis (douleur à l'extension de la cuisse), avec défense antérieure souvent discrète ou absente",
      "Une occlusion fébrile d'emblée avec arrêt total des matières et vomissements fécaloïdes",
      "Un ictère rétentionnel avec grosse vésicule",
      "Des rectorragies profuses isolées"
    ],
    correctAnswers: [1],
    explanation: "Dans la position rétro-cæcale (25 % des cas), l'appendice est masqué par le cæcum : la défense antérieure en FID est atténuée. La douleur siège dans le flanc droit ou la fosse lombaire (mimant une pyélonéphrite), avec signe du psoas positif.",
    clinicalPearl: "Appendicite rétro-cæcale : Douleur lombaire/flanc droit, défense antérieure trompeusement discrète, signe du psoas positif."
  },
  {
    id: 'q-app-11',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 11,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez la femme enceinte au 3ème trimestre, le diagnostic d'appendicite est rendu plus complexe car :",
    options: [
      "L'appendice migre vers la fosse iliaque gauche",
      "Les douleurs abdominales sont toujours totalement absentes",
      "Le cæcum et l'appendice sont refoulés progressivement vers le haut et le dehors par l'utérus gravide (hypochondre ou flanc droit)",
      "La fièvre est constamment supérieure à 40 °C",
      "La CRP reste indétectable tout au long de la grossesse"
    ],
    correctAnswers: [2],
    explanation: "Au cours de la grossesse, l'utérus gravide refoule progressivement le cæcum et l'appendice vers l'hypochondre droit et le flanc. La douleur ne siège plus en FID mais plus haut, mimant une cholécystite ou une pyélonéphrite.",
    clinicalPearl: "Femme enceinte au 3ème trimestre : L'appendice monte ! Douleur au flanc ou hypochondre droit -> Échographie ou IRM."
  },
  {
    id: 'q-app-12',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 12,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Devant un plastron appendiculaire (masse blindée, douloureuse et fébrile de la FID sans péritonite généralisée), la prise en charge initiale recommandée est :",
    options: [
      "Une appendicectomie immédiate en urgence absolue au bloc",
      "Un traitement médical premier (antibiothérapie parentérale, repos, vessie de glace), puis appendicectomie à froid différée après 6 à 8 semaines",
      "Un drainage percutané sans antibiothérapie",
      "Une hémicolectomie droite oncologique d'emblée",
      "L'application de pansements chauds avec laxatifs"
    ],
    correctAnswers: [1],
    explanation: "Le plastron appendiculaire est une péritonite localisée et enkystée par le grand épiploon et les anses agglutinées. Opérer en phase aiguë expose à un risque majeur de plaies digestives. On traite médicalement d'abord, puis appendicectomie à froid à distance (6 à 8 semaines).",
    clinicalPearl: "Plastron appendiculaire : Traitement médical d'abord (ATB IV + repos) -> Appendicectomie à froid après 2 mois."
  },
  {
    id: 'q-app-13',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 13,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Une jeune femme de 22 ans se plaint de douleurs hypogastriques, pollakiurie et fébricule à 38,3 °C. Quel diagnostic différentiel gynécologique est le plus fréquemment discuté avec une appendicite pelvienne ?",
    options: [
      "Cholécystite alithiasique",
      "Pyélonéphrite bilatérale",
      "Salpingite aiguë (infection génitale haute), torsion/rupture de kyste ovarien, ou grossesse extra-utérine (GEU)",
      "Diverticulite colique gauche",
      "Pancréatite chronique"
    ],
    correctAnswers: [2],
    explanation: "Chez la femme jeune en période d'activité génitale, l'appendicite pelvienne simule les urgences gynécologiques (salpingite, GEU, kyste rompu). Le test de grossesse (bêta-HCG) et l'échographie pelvienne sont indispensables.",
    clinicalPearl: "Femme jeune avec douleur pelvienne/FID : Bêta-HCG systématique ! Éliminer GEU, salpingite et kyste ovarien."
  },
  {
    id: 'q-app-14',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 14,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Pour une appendicectomie par laparotomie conventionnelle dans une forme non compliquée, l'incision élective de référence est :",
    options: [
      "L'incision médiane sus-ombilicale",
      "L'incision transversale de Pfannenstiel",
      "L'incision de McBurney (ou laparoscopie / cœlioscopie)",
      "L'incision thoraco-abdominale droite",
      "La lombotomie rétro-péritonéale"
    ],
    correctAnswers: [2],
    explanation: "L'incision de McBurney (au tiers externe de la ligne reliant l'épine iliaque antéro-supérieure à l'ombilic) par dissociation musculaire, ou la laparoscopie (3 trocarts), constitue la voie d'abord élective standard.",
    clinicalPearl: "Voie d'abord élective : McBurney ou Cœlioscopie (recommandée chez la femme et le sujet obèse)."
  },
  {
    id: 'q-app-15',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 15,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Le classique « syndrome du 5ème jour » survenant après une appendicectomie évoque au premier chef :",
    options: [
      "Une occlusion mécanique sur bride cicatricielle ancienne",
      "Un abcès résiduel du cul-de-sac de Douglas ou un abcès sous-phrénique",
      "Une embolie pulmonaire massive",
      "Une éviscération spontanée",
      "Une lithiase biliaire révélée"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome du 5ème jour associe reprise de la fièvre, douleurs pelviennes, ténesme rectal ou dysurie, et correspond à la constitution d'un abcès profond du Douglas suite à une toilette péritonéale incomplète.",
    clinicalPearl: "Syndrome du 5ème jour : Fièvre + pollakiurie/ténesme au 5ème jour postopératoire = Abcès du Douglas !"
  },
  {
    id: 'q-app-16',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 16,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel signe physique est pathognomonique d'une péritonite généralisée par rupture appendiculaire ?",
    options: [
      "Une défense isolée au point de McBurney",
      "Une contracture abdominale généralisée, permanente, invincible et douloureuse (« ventre de bois »)",
      "Une hépatomégalie indolore",
      "Une diarrhée aqueuse profuse",
      "Un ictère nu sans douleur"
    ],
    correctAnswers: [1],
    explanation: "La contracture abdominale généralisée (permanente, invincible, douloureuse et involontaire) traduit l'irritation de tout le feuillet péritonéal pariétal par le pus et les germes : c'est le 'ventre de bois', urgence chirurgicale vitale.",
    clinicalPearl: "Contracture abdominale en « ventre de bois » = Péritonite aiguë généralisée -> Bloc opératoire d'urgence !"
  },
  {
    id: 'q-app-17',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 17,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Devant un abcès appendiculaire collecté de 5 cm chez un patient stable sans signe de péritonite diffuse, l'attitude de choix est :",
    options: [
      "Une antibiothérapie exclusive sans aucun geste de drainage",
      "Un drainage radiologique percutané (échoguidé ou scanoguidé) associé à l'antibiothérapie, puis appendicectomie différée",
      "Une appendicectomie immédiate en milieu septique franc",
      "Une ponction cytologique à visée diagnostique seule",
      "Une colectomie droite d'urgence"
    ],
    correctAnswers: [1],
    explanation: "L'abcès collecté volumineux (> 3-4 cm) relève d'un drainage percutané radiologique avec antibiothérapie. Cela évite une chirurgie difficile et hémorragique en terrain inflammatoire septique.",
    clinicalPearl: "Abcès appendiculaire collecté = Drainage percutané guidé par imagerie + Antibiothérapie IV, puis appendicectomie à froid."
  },
  {
    id: 'q-app-18',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 18,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez le sujet âgé (> 70 ans), l'appendicite est particulièrement redoutable et retardée au diagnostic car :",
    options: [
      "Elle donne une fièvre hyperthermique d'emblée à 41 °C",
      "La réponse péritonéale est atténuée (défense discrète ou absente) et elle prend volontiers le masque d'une occlusion fébrile ou d'une altération de l'état général",
      "La douleur est projetée dans le dos",
      "La CRP reste à zéro",
      "L'appendice est toujours ectopique"
    ],
    correctAnswers: [1],
    explanation: "Chez la personne âgée, la pauvreté des signes pariétaux (défense minime), l'atrophie musculaire et la fréquence des présentations subocclusives retardent le diagnostic, augmentant la fréquence des péritonites perforatives (mortalité 5-10 %).",
    clinicalPearl: "Appendicite du sujet âgé : Tableau fruste, tableau pseudo-occlusif fébrile, perforation fréquente -> TDM indispensable !"
  },
  {
    id: 'q-app-19',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 19,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Sur un cliché d'Abdomen Sans Préparation (ASP), la mise en évidence d'une opacité ronde ou ovalaire calcifiée en fosse iliaque droite évoque :",
    options: [
      "Une lithiase biliaire exclue",
      "Un stercolithe (coprolithe) appendiculaire",
      "Une calcification pancréatique",
      "Un calcul vésical",
      "Un phlébolithe veineux banal obligatoire"
    ],
    correctAnswers: [1],
    explanation: "Un stercolithe appendiculaire est visible sur l'ASP sous forme d'une opacité calcifiée en FID dans 10 à 15 % des cas. Associé à la clinique, il est très spécifique d'une appendicite obstructive à haut risque de gangrène.",
    clinicalPearl: "Opacité calcifiée en FID sur l'ASP = Stercolithe appendiculaire (facteur d'appendicite grave et de perforation rapide)."
  },
  {
    id: 'q-app-20',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 20,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les bactéries responsables d'adénolymphite mésentérique simulant parfaitement une appendicite aiguë chez l'enfant, on retrouve :",
    options: [
      "Clostridioides difficile",
      "Yersinia pseudotuberculosis ou Yersinia enterocolitica",
      "Helicobacter pylori",
      "Mycobacterium leprae",
      "Vibrio cholerae"
    ],
    correctAnswers: [1],
    explanation: "L'infection à Yersinia (entérite et adénolymphite mésentérique) provoque une douleur fébrile de la fosse iliaque droite simulant trait pour trait une appendicite aiguë. L'échographie montre des adénopathies mésentériques groupées avec un appendice sain.",
    clinicalPearl: "Yersiniose mésentérique : Grand simulateur de l'appendicite aiguë chez l'enfant et l'adulte jeune."
  },
  {
    id: 'q-app-21',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 21,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Chez l'enfant de moins de 10 ans, le diagnostic différentiel le plus fréquent de l'appendicite aiguë non compliquée est :",
    options: [
      "Une cholécystite lithiasique",
      "L'adénolymphite mésentérique aiguë virale",
      "L'ulcère gastrique perforé",
      "L'infarctus mésentérique",
      "Le cancer du cæcum"
    ],
    correctAnswers: [1],
    explanation: "L'adénolymphite mésentérique aiguë (souvent post-virose ORL) est la première cause d'abdomen aigu mimant l'appendicite chez l'enfant. L'échographie permet d'affirmer la présence de volumineux ganglions mésentériques avec appendice normal.",
    clinicalPearl: "Diagnostic différentiel n°1 chez l'enfant = Adénolymphite mésentérique virale (antécédent de rhinopharyngite récente)."
  },
  {
    id: 'q-app-22',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 22,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Lors d'une intervention pour appendicite, la découverte fortuite sur l'iléon d'un diverticule de Meckel macroscopiquement parfaitement sain impose :",
    options: [
      "Une résection systématique d'emblée dans tous les cas",
      "De le respecter (pas de résection systématique chez l'adulte) et de le notifier rigoureusement dans le compte-rendu opératoire",
      "Une hémicolectomie droite de sécurité",
      "Une iléostomie d'amont",
      "Une résection de 50 cm de grêle"
    ],
    correctAnswers: [1],
    explanation: "Un diverticule de Meckel sain découvert fortuitement chez l'adulte ne justifie pas une résection systématique en milieu opératoire appendiculaire non préparé, afin de ne pas ajouter de risque de fistule sur le grêle.",
    clinicalPearl: "Diverticule de Meckel sain découvert lors de l'appendicectomie : On le respecte et on le note dans le CRO."
  },
  {
    id: 'q-app-23',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 23,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "La riche sous-muqueuse lymphoïde de l'appendice iléo-cæcal (l'« amygdale abdominale ») :",
    options: [
      "Augmente la contractilité musculaire",
      "Constitue un organe lymphoïde secondaire dont l'hyperplasie inflammatoire est le primum movens de l'occlusion luminale chez le sujet jeune",
      "Sécrète de la bile de stockage",
      "Protège définitivement contre toute infection colique",
      "Disparaît complètement dès l'âge de 6 mois"
    ],
    correctAnswers: [1],
    explanation: "L'appendice possède une abondante composante lymphoïde (GALT). Son gonflement rapide lors d'un stimulus infectieux obstrue la lumière étroite, entraînant stase, hypersécrétion de mucus et pullulation bactérienne.",
    clinicalPearl: "L'appendice est l'« amygdale abdominale » : L'hypertrophie lymphoïde bouche la lumière et lance la cascade infectieuse."
  },
  {
    id: 'q-app-24',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 24,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Si l'analyse anatomopathologique définitive d'une pièce d'appendicectomie met en évidence un adénocarcinome appendiculaire invasif pT2/pT3 :",
    options: [
      "Une simple surveillance sans aucun traitement est suffisante",
      "Une chimiothérapie orale par 5-FU seule sans chirurgie",
      "Une ré-intervention pour hémicolectomie droite oncologique avec curage ganglionnaire iléo-colique",
      "Une radiothérapie externe",
      "Une greffe hépatique"
    ],
    correctAnswers: [2],
    explanation: "Un adénocarcinome vrai de l'appendice (différent d'une petite tumeur carcinoïde < 1-2 cm au sommet) se traite comme un cancer colique droit : il impose une reprise chirurgicale pour hémicolectomie droite avec curage ganglionnaire.",
    clinicalPearl: "Adénocarcinome invasif découvert sur appendicectomie = Hémicolectomie droite avec curage ganglionnaire de reprise."
  },
  {
    id: 'q-app-25',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 25,
    type: 'QCM',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est l'adage chirurgical fondamental souligné dans le cours concernant l'attitude devant un doute diagnostique persistant d'appendicite ?",
    options: [
      "Attendre obligatoirement 48 heures pour répéter le scanner",
      "« En cas de doute persistant, il vaut mieux enlever un appendice normal que de laisser évoluer une appendicite vers une péritonite grave »",
      "Prescrire une antibiothérapie orale et renvoyer le patient à domicile",
      "L'appendicite ne se traite jamais chirurgicalement",
      "Faire une coloscopie en urgence absolue"
    ],
    correctAnswers: [1],
    explanation: "Le risque d'une péritonite par perforation (sepsis sévère, brides, mortalité) est infiniment plus grand que celui d'une appendicectomie 'blanche'. L'adage traditionnel reste vrai : en cas de doute raisonnable non résolu, l'intervention s'impose.",
    clinicalPearl: "Maxime chirurgicale : « Mieux vaut opérer une appendicite douteuse qu'opérer une péritonite confirmée trop tard ! »"
  },

  // -------------------------------------------------------------
  // CAS CLINIQUES (11 questions d'application)
  // -------------------------------------------------------------
  // Cas 1 : Étudiant de 20 ans, urgences Blida
  {
    id: 'q-cas-app-1-1',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 26,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (Étudiant de 20 ans aux urgences) - Douleurs depuis 14 heures, débutées à l'épigastre puis fixées en fosse iliaque droite. Nausées, fébricule à 38,2 °C. Examen : douleur vive au point de McBurney, défense pariétale localisée, signe de Blumberg positif. Quel est le diagnostic le plus probable ?",
    options: [
      "Pyélonéphrite aiguë droite",
      "Appendicite aiguë iléo-cæcale non compliquée",
      "Cholécystite aiguë lithiasique",
      "Pancréatite aiguë œdémateuse",
      "Diverticulite sigmoïdienne"
    ],
    correctAnswers: [1],
    explanation: "Migration douloureuse épigastre -> FID, fièvre modérée, défense localisée au point de McBurney et signe de décompression de Blumberg chez un jeune de 20 ans : tableau princeps de l'appendicite aiguë.",
    clinicalPearl: "Tableau classique : Douleur en FID + McBurney douloureux + Défense + Blumberg positif = Appendicite aiguë."
  },
  {
    id: 'q-cas-app-1-2',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 27,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Quel bilan complémentaire de première intention est le plus adapté avant la décision chirurgicale ?",
    options: [
      "Urographie intraveineuse",
      "Scanner abdominopelvien avec triple contraste systématique d'emblée",
      "Bilan biologique (NFS, CRP) et Échographie abdominale",
      "Coloscopie en urgence",
      "Bili-IRM"
    ],
    correctAnswers: [2],
    explanation: "Chez l'adulte jeune, le couple NFS/CRP et l'échographie abdominale constitue le bilan standard de 1ère intention confirmant le diagnostic et éliminant une cause urologique ou digestive autre.",
    clinicalPearl: "Bilan standard : NFS/CRP + Échographie abdominale (rapide, non irradiant)."
  },
  {
    id: 'q-cas-app-1-3',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 28,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 1 (suite) - Quelle est la prise en charge thérapeutique de choix pour cet étudiant ?",
    options: [
      "Appendicectomie en urgence (par cœlioscopie ou voie de McBurney)",
      "Drainage percutané",
      "Antibiothérapie orale seule pendant 14 jours",
      "Hémicolectomie droite prophylactique",
      "Simple antalgique et retour au domicile"
    ],
    correctAnswers: [0],
    explanation: "Pour une appendicite aiguë non compliquée de l'adulte jeune, l'appendicectomie (de préférence cœlioscopique) est le traitement curatif de référence incontournable.",
    clinicalPearl: "Prise en charge curative de référence = Appendicectomie chirurgicale (cœlioscopie ou McBurney)."
  },

  // Cas 2 : Femme enceinte de 32 SA
  {
    id: 'q-cas-app-2-1',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 29,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (Femme de 28 ans à 32 semaines d'aménorrhée) - Douleur de l'hypochondre droit et du flanc, nausées, fièvre 38 °C, CRP 85 mg/L. Pourquoi le diagnostic d'appendicite est-il difficile à ce terme ?",
    options: [
      "Car l'utérus gravide refoule progressivement le cæcum et l'appendice vers le haut et le dehors (position sous-hépatique ou flanc)",
      "Car l'appendice s'atrophie physiologiquement au 3ème trimestre",
      "Car les leucocytes sont toujours bas chez la femme enceinte",
      "Car l'appendice devient intra-thoracique",
      "Car la fièvre est toujours absente"
    ],
    correctAnswers: [0],
    explanation: "L'augmentation de volume de l'utérus déplace le carrefour iléo-cæcal vers l'hypochondre droit : la douleur est trompeusement haute, mimant une colique hépatique ou une pyélonéphrite.",
    clinicalPearl: "Grossesse avancée : Déplacement de l'appendice vers l'hypochondre droit par l'utérus gravide."
  },
  {
    id: 'q-cas-app-2-2',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 30,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 2 (suite) - Quelle est la séquence d'imagerie diagnostique recommandée pour cette femme enceinte ?",
    options: [
      "Scanner abdominopelvien injecté d'emblée sans précaution",
      "Échographie abdominale en 1ère intention, complétée par une IRM abdominale sans injection de gadolinium si l'échographie est non conclusive",
      "Radiographie d'ASP debout et couché",
      "Coloscopie virtuelle avec insufflation de CO2",
      "Scintigraphie pulmonaire"
    ],
    correctAnswers: [1],
    explanation: "Pour éviter l'irradiation fœtale, on réalise d'abord une échographie hépatobiliaire et obstétricale. Si elle est non concluante, l'IRM abdominale sans injection de gadolinium est l'examen de référence de 2ème intention.",
    clinicalPearl: "Imagerie chez la femme enceinte : 1ère ligne = Échographie -> 2ème ligne = IRM sans gadolinium (zéro radiation fœtale)."
  },

  // Cas 3 : Patient de 76 ans, diabétique
  {
    id: 'q-cas-app-3-1',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 31,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (Homme de 76 ans, diabétique) - Syndrome subocclusif fébrile (38,7 °C), ballonnement abdominal, défense minime ou absente en FID, CRP 210 mg/L, GB 17 000/mm³. Quelle est l'hypothèse principale ?",
    options: [
      "Iléus biliaire par calcul",
      "Appendicite aiguë gangréneuse ou péritonite appendiculaire à révélation fruste chez le sujet âgé",
      "Pancréatite aiguë auto-immune",
      "Colite ischémique bénigne",
      "Gastro-entérite virale"
    ],
    correctAnswers: [1],
    explanation: "Chez la personne âgée et le diabétique, la défense péritonéale est atténuée ou absente, et l'appendicite se démasque souvent sous l'aspect d'une occlusion fébrile avec syndrome septique grave (stade d'ischémie/gangrène).",
    clinicalPearl: "Sujet âgé : Pauvreté des signes pariétaux, présentation pseudo-occlusive fébrile -> Penser à l'appendicite compliquée !"
  },
  {
    id: 'q-cas-app-3-2',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 32,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 3 (suite) - Quel examen morphologique est le plus performant pour faire le bilan lésionnel complet chez ce patient âgé ?",
    options: [
      "TDM (scanner) abdominopelvienne avec injection iodée",
      "Échographie isolée",
      "Lavement baryté",
      "Radiographie thoracique",
      "Sérologie Yersinia"
    ],
    correctAnswers: [0],
    explanation: "Chez le sujet âgé, le scanner TAP injecté est l'examen de référence de première ligne pour confirmer l'appendicite, mesurer la nécrose, rechercher un abcès ou un pneumopéritoine et éliminer un cancer colique perforé.",
    clinicalPearl: "Chez le sujet âgé : Le scanner abdominal injecté est INDISPENSABLE pour confirmer l'appendicite et ses complications."
  },

  // Cas 4 : Jeune femme de 19 ans, forme pelvienne
  {
    id: 'q-cas-app-4-1',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 33,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (Jeune femme de 19 ans) - Douleurs hypogastriques, pollakiurie, fièvre 38,4 °C, toucher pelvien douloureux à droite, bêta-HCG négatifs. Échographie : discret épanchement péri-vésical, ovaires normaux, appendice non visualisé. Quelle topographie appendiculaire est la plus suspecte ?",
    options: [
      "Rétro-cæcale",
      "Sous-hépatique",
      "Pelvienne (au contact de la vessie et des organes génitaux)",
      "Mésocœliaque",
      "Fosse iliaque gauche"
    ],
    correctAnswers: [2],
    explanation: "Dans l'appendicite pelvienne, le contact avec le dôme vésical et le Douglas engendre des signes urinaires (pollakiurie, dysurie) et un toucher rectal/vaginal très douloureux à droite.",
    clinicalPearl: "Appendicite pelvienne : Signes urinaires (pollakiurie) + TR/TV très douloureux à droite."
  },
  {
    id: 'q-cas-app-4-2',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 34,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 4 (suite) - Quelle exploration permet à la fois d'affirmer le diagnostic et de traiter la lésion chez cette jeune femme en éliminant une cause gynécologique ?",
    options: [
      "La cœlioscopie (laparoscopie) diagnostique et thérapeutique",
      "L'IRM cérébrale",
      "La coloscopie totale",
      "Une biopsie de l'endomètre",
      "Une cystoscopie"
    ],
    correctAnswers: [0],
    explanation: "La cœlioscopie permet de visualiser l'appendice pelvien enflammé, de vérifier les trompes et ovaires (éliminant salpingite ou kyste), et de réaliser l'appendicectomie dans le même temps opératoire.",
    clinicalPearl: "Chez la jeune femme : La cœlioscopie est l'outil idéal combinant diagnostic visuel direct et geste thérapeutique."
  },

  // Cas 5 : Homme de 45 ans, masse fébrile depuis 5 jours
  {
    id: 'q-cas-app-5-1',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 35,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (Homme de 45 ans) - Douleur de la FID depuis 5 jours, fièvre à 39 °C, masse blindée mal limitée douloureuse en FID. Échographie : infiltration de la graisse mésentérique avec anses agglutinées formant un bloc sans collection liquidienne pure. Quel est le diagnostic ?",
    options: [
      "Abcès appendiculaire collecté pur",
      "Plastron appendiculaire",
      "Tumeur villeuse colique",
      "Appendicite catarrhale débutante",
      "Maladie de Whipple"
    ],
    correctAnswers: [1],
    explanation: "Le plastron appendiculaire est un magma inflammatoire formé par l'accolement du grand épiploon et des anses intestinales autour de l'appendice infecté, se manifestant par une masse fébrile, douloureuse et blindée.",
    clinicalPearl: "Masse blindée de la FID après 4-5 jours d'évolution fébrile = Plastron appendiculaire."
  },
  {
    id: 'q-cas-app-5-2',
    courseId: 'crs-gastro-appendicite-aigue',
    questionNumber: 36,
    type: 'Cas Clinique',
    module: 'Hépato-Gastroentérologie',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas 5 (suite) - Quelle est la conduite thérapeutique initiale pour ce plastron appendiculaire non collecté ?",
    options: [
      "Appendicectomie chirurgicale en urgence immédiate",
      "Traitement conservateur : antibiothérapie IV à large spectre, repos au lit, vessie de glace, puis appendicectomie à froid dans 6 à 8 semaines",
      "Hémicolectomie droite avec stomie",
      "Radiothérapie anti-inflammatoire",
      "Ponction évacuatrice à l'aveugle"
    ],
    correctAnswers: [1],
    explanation: "En phase de plastron non collecté, la chirurgie d'urgence est dangereuse et hémorragique. On refroidit le plastron par antibiotiques parentéraux et repos, puis on réalise l'appendicectomie à froid après 2 mois.",
    clinicalPearl: "Plastron = Antibiothérapie IV première + refroidissement -> Appendicectomie à froid (6-8 semaines)."
  }
];

export const APPENDICITE_AIGUE_RESOURCES: CourseResource[] = [
  {
    id: 'res-app-mindmap',
    courseId: 'crs-gastro-appendicite-aigue',
    type: 'Resume',
    title: 'Fiche Synthèse : Appendicite Aiguë',
    contentMarkdown: `## Appendicite Aiguë : L'Essentiel pour le Résidanat
*D'après le cours du Dr LOUDDANI A. – Université Blida 1*

### 1. Physiopathologie & Anatomie
- **Artère appendiculaire** : Branche terminale sans suppléance -> Ischémie et nécrose rapide en cas d'hyperpression.
- **Mécanisme déclenchant** :
  - *Sujet jeune* : Hyperplasie lymphoïde sous-muqueuse (60 %).
  - *Sujet mûr* : Stercolithe / fécalithe obstructif (35 %).
- **Positions ectopiques** :
  - *Rétro-cæcale (25 %)* : Douleur lombaire/flanc droit, signe du psoas (+), défense antérieure minime.
  - *Pelvienne (5 %)* : Signes urinaires (pollakiurie), toucher rectal douloureux.
  - *Sous-hépatique (2 %)* : Mime une cholécystite (attention à la femme enceinte au 3e trimestre).

### 2. Diagnostic Clinique
- **Signes fonctionnels** :
  - Douleur épigastrique/ombilicale migrant en fosse iliaque droite (FID).
  - Nausées, vomissements, fébricule modérée (38 °C - 38,5 °C).
- **Signes physiques** :
  - **Défense en FID** (signe cardinal).
  - Douleur au point de McBurney.
  - Signe de Blumberg (décompression brutale en FID douloureuse).
  - Signe de Rovsing (palpation de la FIG douloureuse en FID).

### 3. Examens Complémentaires
- **Biologie** : Hyperleucocytose à PNN (> 10 000/mm³), CRP augmentée.
- **Échographie abdominale** :
  - Diamètre appendiculaire > 6 mm.
  - Non compressible.
  - Aspect en cocarde en coupe transversale.
  - Infiltration de la graisse péricæcale.
- **TDM abdomino-pelvien injecté** : Examen de référence chez le sujet âgé, obèse ou en cas de doute diagnostique.

### 4. Formes Compliquées
- **Plastron appendiculaire** : Masse blindée fébrile -> Traitement médical premier (ATB IV + repos) -> Appendicectomie à froid (6-8 semaines).
- **Abcès appendiculaire** : Collection purulente -> Drainage percutané guidé par imagerie + ATB IV -> Chirurgie différée.
- **Péritonite généralisée** : Contracture en « ventre de bois » -> Urgence chirurgicale absolue (toilette péritonéale + appendicectomie).
- **Syndrome du 5ème jour** : Fièvre + pollakiurie/ténesme au 5e jour post-op -> Abcès du Douglas.`,
    author: 'Dr LOUDDANI A. - Université Blida 1'
  },
  {
    id: 'res-app-mnemo',
    courseId: 'crs-gastro-appendicite-aigue',
    type: 'Astuce',
    title: 'Mnémotechniques : Appendicite Aiguë',
    contentMarkdown: `### 💡 Mnémotechniques d'Examen (Dr LOUDDANI A.)

1. **Signes Cliniques : « M.A.C. B.U.R.N.E.Y »**
   - **M** : **M**igration de la douleur (épigastre -> FID)
   - **A** : **A**norexie
   - **C** : **C**onstipation ou nausées
   - **B** : **B**lumberg (décompression douloureuse)
   - **U** : **U**rine (pollakiurie si forme pelvienne)
   - **R** : **R**ovsing (palper à gauche fait mal à droite)
   - **N** : **N**ausées / vomissements
   - **E** : **É**chographie : cocarde > 6 mm
   - **Y** : **Y**ersinia (diagnostic différentiel)

2. **Échographie : « 6 mm et Cocarde »**
   - Diamètre > 6 mm
   - Incompressible
   - Épaississement pariétal > 3 mm

3. **Femme Enceinte : « L'appendice prend l'ascenseur »**
   - Au 3e trimestre, l'appendice monte vers l'hypochondre droit !

4. **Adage Chirurgical :**
   - *« Mieux vaut une appendicectomie blanche qu'une péritonite noire ! »*`,
    author: 'Dr LOUDDANI A. - Blida 1'
  }
];
