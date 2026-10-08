import { Question, CourseResource } from '../../types/medical';

export const ULCERE_GASTRO_DUODENAL_QUESTIONS: Question[] = [
  {
    "id": "q-ugd-01",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelles sont les deux principales causes étiologiques responsables de plus de 90% des ulcères gastro-duodénaux ?",
    "options": [
      "Le stress psychologique et l'alimentation épicée",
      "L'infection à Helicobacter pylori et la prise d'Anti-Inflammatoires Non Stéroïdiens (AINS) / Aspirine",
      "Le reflux biliaire et la cirrhose",
      "L'alcoolisme et la pancréatite",
      "Le syndrome de Zollinger-Ellison et les lymphomes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'infection à Helicobacter pylori (présente dans 85% des ulcères duodénaux et 70% des gastriques) et la consommation d'AINS/aspirine représentent les deux causes majeures de la maladie ulcéreuse.",
    "clinicalPearl": "Helicobacter pylori + AINS/Aspirine = plus de 90% des ulcères gastro-duodénaux."
  },
  {
    "id": "q-ugd-02",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la définition anatomopathologique stricte d'un ulcère par rapport à une simple érosion muqueuse ?",
    "options": [
      "Une perte de substance limitée à l'épithélium de surface",
      "Une perte de substance profonde de la paroi dépassant la muscularis mucosae et atteignant la musculeuse",
      "Une lésion superficielle sans infiltration inflammatoire",
      "Une prolifération adénomateuse bénigne",
      "Une congestion vasculaire sans brèche"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'érosion est limitée à la muqueuse ; l'ulcération intéresse la muscularis mucosae ; l'ulcère vrai est une perte de substance profonde atteignant ou traversant la musculeuse gastrique ou duodénale.",
    "clinicalPearl": "Ulcère vrai = perte de substance profonde atteignant la musculeuse (au-delà de la muscularis mucosae)."
  },
  {
    "id": "q-ugd-03",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans la sémiologie classique de l'ulcère duodénal non compliqué, comment se caractérise la douleur ulcéreuse typique ?",
    "options": [
      "Brûlure rétrosternale déclenchée par l'alimentation",
      "Crampe ou faim douloureuse épigastrique post-prandiale tardive (1 à 3h après le repas) et nocturne, soulagée par la prise alimentaire ou d'alcalins, avec périodicité annuelle",
      "Douleur péri-ombilicale continue aggravée par les repas",
      "Pesanteur de l'hypochondre gauche calmée par les selles",
      "Douleur en coup de poignard constante"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le syndrome ulcéreux typique associe crampe épigastrique, faim douloureuse post-prandiale tardive ou nocturne, calmée par les aliments, avec une périodicité nette dans l'année (rythmée par les saisons).",
    "clinicalPearl": "Douleur ulcéreuse typique : crampe épigastrique calmée par l'alimentation + rythmée par les repas + périodicité annuelle."
  },
  {
    "id": "q-ugd-04",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la différence fondamentale impérative concernant les BIOPSIES entre un ulcère GASTRIQUE et un ulcère DUODÉNAL lors de la FOGD ?",
    "options": [
      "On ne biopsie jamais l'estomac",
      "Biopsies multiples des berges et du fond systématiques sur l'ulcère GASTRIQUE (éliminer un cancer gastrique), biopsies non requises sur l'ulcère DUODÉNAL sauf recherche d'HP",
      "L'ulcère duodénal est toujours biopsié 10 fois pour éliminer un cancer",
      "Les deux sont toujours traités sans aucune biopsie",
      "La biopsie est contre-indiquée sur l'estomac"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Tout ulcère gastrique peut être un adénocarcinome ulcéré (biopsies systématiques des 4 quadrants des berges + contrôle endoscopique de cicatrisation à 6-8 semaines). Le cancer du bulbe duodénal étant exceptionnel, les biopsies duodénales ne sont pas nécessaires pour éliminer la malignité.",
    "clinicalPearl": "Ulcère gastrique = biopsies systématiques + FOGD de contrôle à 6-8 semaines. Ulcère duodénal = bénin en règle, pas de biopsie systématique de la lésion."
  },
  {
    "id": "q-ugd-05",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel examen non invasif d'une excellente sensibilité et spécificité est recommandé pour contrôler l'éradication d'Helicobacter pylori 4 semaines après la fin des antibiotiques ?",
    "options": [
      "La sérologie sanguine anti-HP (IgG)",
      "Le test respiratoire à l'urée marquée au carbone 13 (13C-UBT) ou la recherche d'antigènes fécaux",
      "Le scanner abdominal",
      "La fibroscopie systématique pour tout ulcère duodénal",
      "L'hémoculture"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le test respiratoire à l'urée 13C reflète la présence de bactéries vivantes (activité uréasique active). La sérologie reste positive des années après guérison et ne peut servir au contrôle.",
    "clinicalPearl": "Contrôle d'éradication d'HP : Test respiratoire à l'urée 13C (ou antigènes fécaux) à réaliser 4 semaines après l'arrêt des antibiotiques et 2 semaines après l'arrêt des IPP."
  },
  {
    "id": "q-ugd-06",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans le traitement de première ligne de l'éradication d'Helicobacter pylori, quel protocole quadrithérapie est aujourd'hui recommandé ?",
    "options": [
      "Amoxicilline seule pendant 3 jours",
      "Quadrithérapie bismuthée (Oméprazole + Bismuth + Tétracycline + Métronidazole) pendant 10 jours ou quadrithérapie concomitante non bismuthée pendant 14 jours",
      "Trithérapie amoxicilline-clarithromycine pendant 7 jours sans IPP",
      "Ciprofloxacine en monothérapie",
      "Gentamicine IV"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En raison du taux élevé de résistance de H. pylori à la clarithromycine, la quadrithérapie bismuthée (Pylera + IPP) ou la quadrithérapie concomitante (IPP + Amoxicilline + Clarithromycine + Métronidazole) pendant 10 à 14 jours sont les standards actuels.",
    "clinicalPearl": "Éradication d'H. pylori : Quadrithérapie bismuthée (10 jours) ou Quadrithérapie concomitante (14 jours)."
  },
  {
    "id": "q-ugd-07",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La perforation d'ulcère gastro-duodénal en péritoine libre se caractérise cliniquement par :",
    "options": [
      "Une douleur sourde progressive sans défense",
      "Une douleur foudroyante en 'coup de poignard' épigastrique avec contracture abdominale généralisée ('ventre de bois') et disparition de la matité hépatique (signe de Jobert)",
      "Une diarrhée motrice indolore",
      "Un ictère fébrile nu",
      "Une pollakiurie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'irruption brutale du liquide gastrique acide hyper-irritant dans la cavité péritonéale déclenche une douleur aiguë atroce instantanée et une contracture invincible des muscles abdominaux.",
    "clinicalPearl": "Ulcère perforé = coup de poignard épigastrique + ventre de bois + pneumopéritoine (croissant sous-diaphragmatique)."
  },
  {
    "id": "q-ugd-08",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle artère chemine immédiatement en arrière de la face postérieure du premier duodénum (bulbe) et peut être érodée lors d'un ulcère bulbaire postérieur, provoquant une hémorragie cataclysmique ?",
    "options": [
      "L'artère coronaire stomachique",
      "L'artère gastro-duodénale (branche de l'artère hépatique commune)",
      "L'artère splénique",
      "L'artère mésentérique inférieure",
      "L'artère rénale droite"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'artère gastro-duodénale passe immédiatement sur la face postérieure de D1 : un ulcère térébrant postérieur risque de l'éroder, provoquant une hémorragie massive cataclysmique par saignement artériel en jet.",
    "clinicalPearl": "Ulcère duodénal de la face postérieure = risque majeur d'érosion de l'artère gastro-duodénale."
  },
  {
    "id": "q-ugd-09",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "La sténose ulcéreuse (complication tardive par fibrose rétractile cicatricielle antropylorique ou bulbaire) se manifeste par :",
    "options": [
      "Une dysphagie haute",
      "Des vomissements post-prandiaux tardifs d'aliments digérés pris la veille avec clapotage gastrique à jeun et alcalose métabolique",
      "Une incontinence fécale",
      "Un météorisme colique tympanique",
      "Une hématurie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'obstacle mécanique pyloro-bulbaire empêche la vidange gastrique, conduisant à une distension gastrique majeure, clapotage à jeun et vomissements alimentaires nocturnes ou matinaux d'aliments ingérés longtemps auparavant.",
    "clinicalPearl": "Sténose pylorique ulcéreuse = vomissements post-prandiaux tardifs d'aliments de la veille + clapotage à jeun."
  },
  {
    "id": "q-ugd-10",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Le syndrome de Zollinger-Ellison (SZE) est caractérisé par :",
    "options": [
      "Une gastrite atrophique auto-immune sans acide",
      "Une hypersécrétion acide gastrique massive induite par une tumeur neuroendocrine sécrétant de la gastrine (gastrinome, souvent duodéno-pancréatique), avec ulcères sévères multiples ou récidivants et diarrhée",
      "Une absence congénitale de cellules pariétales",
      "Une maladie génétique du transport du chlore",
      "Une insuffisance surrénalienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le gastrinome sécrète de la gastrine en excès autonome stimulant la sécrétion d'HCl, responsable d'ulcères récidivants atypiques (duodénum distal, jéjunum), d'œsophagite sévère et de diarrhée sécrétoire.",
    "clinicalPearl": "Zollinger-Ellison = Gastrinome + hypersécrétion acide majeure + ulcères multiples/atypiques + diarrhée."
  },
  {
    "id": "q-ugd-11",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans le cadre de quelle néoplasie endocrinienne multiple (NEM) le syndrome de Zollinger-Ellison s'intègre-t-il dans environ 25% des cas ?",
    "options": [
      "NEM 1 (syndrome de Wermer : hyperparathyroïdie, adénome hypophysaire, gastrinome)",
      "NEM 2A (syndrome de Sipple)",
      "NEM 2B",
      "Maladie de Von Hippel-Lindau",
      "Neurofibromatose de type 1"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le syndrome de Zollinger-Ellison est associé à la NEM 1 (mutation du gène MEN1 codant la ménine) dans 25% des cas, associant hyperparathyroïdie primaire et adénome hypophysaire.",
    "clinicalPearl": "Zollinger-Ellison dans 25% des cas associé à la NEM 1 (hyperparathyroïdie + tumeur hypophysaire)."
  },
  {
    "id": "q-ugd-12",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen biologique affirme le diagnostic de syndrome de Zollinger-Ellison ?",
    "options": [
      "Une gastrinémie basale très élevée (> 1000 pg/mL) associée à un pH gastrique très acide (< 2)",
      "Une gastrinémie effondrée avec pH basique",
      "Un dosage d'amylase sérique",
      "Une calcitonine très basse",
      "Un test au synacthène négatif"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Une gastrinémie à jeun très élevée en présence d'un pH gastrique bas (< 2) affirme l'hypersécrétion acide autonome de gastrine ; en cas de doute, le test à la sécrétine induit une élévation paradoxale de la gastrine.",
    "clinicalPearl": "Diagnostic de Zollinger-Ellison : Gastrinémie très élevée (> 10N) + pH gastrique acide < 2 (+/- test à la sécrétine positif)."
  },
  {
    "id": "q-ugd-13",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la principale contre-indication à la prescription d'un test respiratoire à l'urée 13C pour la recherche d'Helicobacter pylori ?",
    "options": [
      "La prise d'antibiotiques dans les 4 semaines précédentes ou d'IPP dans les 2 semaines précédentes (faux négatifs)",
      "L'âge supérieur à 50 ans",
      "Le diabète de type 2",
      "L'hypertension artérielle",
      "La présence d'une allergie au pollen"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les antibiotiques et les IPP diminuent la charge bactérienne et inhibent l'uréase bactérienne, risquant d'induire un résultat faussement négatif. Ils doivent être interrompus respectivement 4 semaines et 2 semaines avant le test.",
    "clinicalPearl": "Faux négatifs du test respiratoire à l'urée : arrêt impératif des antibiotiques (4 semaines) et des IPP (2 semaines)."
  },
  {
    "id": "q-ugd-14",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle précaution systématique doit être prise lors de la prescription d'AINS au long cours chez un patient âgé de plus de 65 ans ou ayant un antécédent d'ulcère gastro-duodénal ?",
    "options": [
      "Co-prescription systématique d'un IPP protecteur gastrique à dose préventive",
      "Prescription d'aspirine à forte dose",
      "Suppression des boissons chaudes",
      "Arrêt de l'alimentation solide",
      "Prise d'anticoagulants"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Chez les patients à haut risque gastro-intestinal (âge > 65 ans, antécédent d'ulcère ou de complication ulcéreuse, prise conjointe d'aspirine ou corticoïdes ou anticoagulants), la prescription d'IPP protecteur est formellement requise.",
    "clinicalPearl": "AINS chez sujet à risque (> 65 ans, antécédent UGD, anticoagulants) = Co-prescription systématique d'un IPP."
  },
  {
    "id": "q-ugd-15",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel mécanisme explique la toxicité muqueuse digestive directe et systémique des anti-inflammatoires non stéroïdiens (AINS) classiques ?",
    "options": [
      "L'inhibition de l'enzyme cyclo-oxygénase 1 (COX-1), réduisant la synthèse de prostaglandines protectrices gastriques (PGE2 et PGI2)",
      "L'augmentation de la sécrétion de pepsinogène",
      "La stimulation de la motricité antrale",
      "La destruction de l'ADN des cellules bordantes",
      "L'inhibition de la somatostatine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les prostaglandines stimulent la sécrétion de mucus et de bicarbonates et maintiennent le flux sanguin muqueux. L'inhibition de la COX-1 par les AINS prive la muqueuse de ces défenses naturelles.",
    "clinicalPearl": "Toxicité des AINS = inhibition de la COX-1 -> effondrement des prostaglandines protectrices gastriques."
  },
  {
    "id": "q-ugd-16",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle bactérie spiralée à Gram négatif, microaérophile et pourvue d'une uréase puissante colonise la muqueuse gastrique de l'Homme ?",
    "options": [
      "Campylobacter jejuni",
      "Helicobacter pylori",
      "Vibrio cholerae",
      "Escherichia coli entéro-hémorragique",
      "Listeria monocytogenes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Helicobacter pylori colonise le mucus gastrique grâce à sa motilité et à sa production d'uréase qui neutralise l'acidité locale en générant de l'ammoniaque, induisant une gastrite chronique active.",
    "clinicalPearl": "Helicobacter pylori : bacille Gram négatif spiralé microaérophile à uréase puissante."
  },
  {
    "id": "q-ugd-17",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans l'ulcère gastrique, pourquoi la FOGD de contrôle avec biopsies systématiques est-elle FORMELLEMENT obligatoire après 6 à 8 semaines de traitement par IPP ?",
    "options": [
      "Pour vérifier que la vésicule biliaire est vide",
      "Pour prouver la cicatrisation complète et biopsier à nouveau la cicatrice pour exclure formellement un cancer gastrique méconnu",
      "Pour poser une sonde d'alimentation",
      "Pour enlever des polypes duodénaux",
      "Pour mesurer la clairance rénale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Un cancer gastrique peut s'ulcérer et cicatriser partiellement sous IPP. Seule la preuve endoscopique et histologique de la disparition de la lésion élimine formellement un adénocarcinome gastrique.",
    "clinicalPearl": "Ulcère gastrique = FOGD de contrôle obligatoire à 6-8 semaines avec biopsies répétées de la zone cicatricielle."
  },
  {
    "id": "q-ugd-18",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel facteur favorisant environnemental est un co-facteur majeur d'échec de cicatrisation et de récidive ulcéreuse gastro-duodénale ?",
    "options": [
      "Le tabagisme actif",
      "L'activité physique modérée",
      "La consommation de thé vert",
      "Le climat tempéré",
      "Le végétarisme"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le tabac diminue la sécrétion de bicarbonates, altère la microcirculation muqueuse, majore la sécrétion acide et augmente considérablement le taux de récidive et de complications ulcéreuses.",
    "clinicalPearl": "Tabac = facteur majeur de récidive ulcéreuse et de retard de cicatrisation (sevrage obligatoire)."
  },
  {
    "id": "q-ugd-19",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle anomalie de laboratoire est classiquement observée lors d'une sténose pylorique ulcéreuse évoluée compliquée de vomissements abondants ?",
    "options": [
      "Une acidose hyperchlorémique",
      "Une alcalose métabolique hypochlorémique et hypokaliémique avec déshydratation extracellulaire et insuffisance rénale fonctionnelle",
      "Une hypercalcémie maligne",
      "Une hyponatrémie par intoxication par l'eau pure",
      "Une hyperuricémie isolée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La perte massive d'acide chlorhydrique gastrique par vomissements engendre une alcalose métabolique avec hypochlorémie et fuite urinaire de potassium (alcalose hypochlorémique hypokaliémique).",
    "clinicalPearl": "Vomissements de sténose pylorique = Alcalose métabolique hypochlorémique et hypokaliémique."
  },
  {
    "id": "q-ugd-20",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle intervention chirurgicale historique consistait à supprimer la stimulation nerveuse parasympathique de la sécrétion acide gastrique ?",
    "options": [
      "La gastrectomie totale",
      "La vagotomie (tronculaire, sélective ou hypersélective)",
      "La cholécystectomie",
      "L'anastomose pancréatico-jéjunale",
      "La colectomie droite"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La vagotomie sectionne les rameaux du nerf vague (nerf X) innervant les cellules pariétales sécrétrices d'acide, aujourd'hui supplantée par l'efficacité des IPP et l'antibiothérapie d'éradication d'H. pylori.",
    "clinicalPearl": "Vagotomie = section des nerfs vagues stimulants de la sécrétion acide (historique)."
  },
  {
    "id": "q-ugd-21",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans l'évaluation de la résistance d'Helicobacter pylori aux antibiotiques, quelle méthode moderne par biologie moléculaire (PCR) peut être réalisée sur les biopsies gastriques ?",
    "options": [
      "Recherche des mutations conférant la résistance à la clarithromycine (gêne de l'ARNr 23S) et aux fluoroquinolones",
      "Dosage des anticorps sériques",
      "Électrophorèse des protéines",
      "Western Blot de la tuberculose",
      "Caryotype constitutionnel"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La PCR en temps réel sur biopsie gastrique détecte directement les mutations ponctuelles de l'ARNr 23S responsables de la résistance à la clarithromycine, permettant une antibiothérapie guidée sur mesure.",
    "clinicalPearl": "PCR Helicobacter pylori : détecte en quelques heures la résistance aux macrolides (clarithromycine)."
  },
  {
    "id": "q-ugd-22",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle localisation d'ulcère gastro-duodénal est la plus fréquemment sujette aux récidives hémorragiques sévères ?",
    "options": [
      "Le corps gastrique moyen",
      "La face postérieure du bulbe duodénal et la petite courbure gastrique haute (artère coronaire stomachique)",
      "Le dôme de la grosse tubérosité",
      "L'angle de Treitz",
      "Le tiers moyen du jéjunum"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les ulcères de la face postérieure du bulbe (artère gastro-duodénale) et de la petite courbure haute (artère gastrique gauche / coronaire stomachique) sont situés au contact direct d'axes artériels majeurs.",
    "clinicalPearl": "Ulcères à haut risque hémorragique : bulbe postérieur (artère gastro-duodénale) et petite courbure (artère gastrique gauche)."
  },
  {
    "id": "q-ugd-23",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle forme clinique d'ulcère gastroduodénal aigu survient classiquement en unité de réanimation chez le grand brûlé (ulcère de Curling) ou lors de traumatismes crâniens sévères (ulcère de Cushing) ?",
    "options": [
      "L'ulcère de stress",
      "L'ulcère peptique banal",
      "La maladie de Menetrier",
      "Le lymphome MALT",
      "L'adénome pylorique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'ulcère de stress est une nécrose muqueuse aiguë liée à l'ischémie splanchnique et à l'hyperacidité chez les patients critiques de réanimation (brûlés graves = Curling, lésions cérébrales = Cushing).",
    "clinicalPearl": "Ulcère de stress du brûlé = ulcère de Curling ; du traumatisé crânien = ulcère de Cushing."
  },
  {
    "id": "q-ugd-24",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle affection maligne gastrique à cellules B est directement induite par l'infection chronique à Helicobacter pylori et peut régresser complètement après simple éradication bactérienne ?",
    "options": [
      "L'adénocarcinome gastrique de type linitique",
      "Le lymphome gastrique du MALT (Mucosa-Associated Lymphoid Tissue) de bas grade",
      "Le GIST métastatique",
      "Le léiomyome gastrique",
      "Le carcinome neuroendocrine à petites cellules"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le lymphome du MALT gastrique de bas grade est une prolifération lymphoïde B dépendante de la stimulation antigénique d'Helicobacter pylori : l'éradication d'H. pylori entraîne une rémission complète dans 70-80% des cas.",
    "clinicalPearl": "Lymphome du MALT de bas grade = rémission complète par simple éradication d'Helicobacter pylori."
  },
  {
    "id": "q-ugd-25",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans la surveillance de la maladie ulcéreuse gastro-duodénale, la survenue d'un amaigrissement, d'une anémie ferriprive inexpliquée ou de vomissements chez un sujet de plus de 50 ans doit faire craindre en priorité :",
    "options": [
      "Une dégénérescence ou un cancer gastrique sous-jacent",
      "Une lithiase biliaire asymptomatique",
      "Une pancréatite aiguë résolue",
      "Une hépatite virale A",
      "Une maladie de Gilbert"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Toute modification des symptômes ulcéreux, amaigrissement ou anémie chez un patient de plus de 50 ans est un signe d'alerte imposant une FOGD avec biopsies pour éliminer un adénocarcinome gastrique.",
    "clinicalPearl": "Signes d'alarme après 50 ans (perte de poids, anémie, dysphagie, vomissements) = FOGD avec biopsies sans différer."
  },
  {
    "id": "q-cas-ugd-1",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Un homme de 35 ans, chauffeur routier, fumeur (1 paquet/jour), consulte pour des douleurs épigastriques à type de crampes survenant 2 à 3 heures après les repas et le réveillant fréquemment vers 3 heures du matin, calmées de manière spectaculaire dès qu'il mange un morceau de pain ou boit un verre de lait. Il a déjà présenté un épisode identique au printemps dernier. Il ne prend aucun médicament. La FOGD visualise au niveau de la face antérieure du bulbe duodénal une perte de substance ronde de 8 mm à fond blanchâtre régulier bordé d'un bourrelet œdémateux symétrique. La recherche d'Helicobacter pylori sur biopsies antrales et fundiques est positive au test rapide à l'uréase. Quel est le diagnostic et le traitement de première ligne ?",
    "options": [
      "Ulcère gastrique bénin ; traitement par IPP pendant 2 semaines sans contrôle",
      "Ulcère duodénal non compliqué lié à Helicobacter pylori ; traitement par quadrithérapie d'éradication d'H. pylori (bismuthée 10 jours ou concomitante 14 jours) puis arrêt des IPP sans contrôle endoscopique obligatoire si disparition des symptômes",
      "Cancer duodénal ; résection de la tête du pancréas",
      "Pancréatite chronique calcifiante ; enzymes pancréatiques",
      "Gastrite auto-immune ; vitamine B12 injectable"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Il s'agit d'un ulcère duodénal typique non compliqué avec présence de H. pylori. Le traitement repose sur la quadrithérapie d'éradication. Contrairement à l'ulcère gastrique, l'ulcère duodénal non compliqué et asymptomatique après traitement ne nécessite pas de FOGD de contrôle systématique (contrôle d'éradication par test respiratoire à l'urée).",
    "clinicalPearl": "Ulcère duodénal non compliqué : éradication d'HP -> pas de FOGD de contrôle si asymptomatique (test respiratoire à l'urée à 4 semaines)."
  },
  {
    "id": "q-cas-ugd-2",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Mme M., 68 ans, traitée par Diclofénac (AINS) pour gonarthrose sans protection gastrique, consulte pour des épigastralgies d'apparition récente avec anorexie et perte de 3 kg. La FOGD retrouve au niveau de la petite courbure gastrique antro-corporéale un ulcère de 18 mm à bords surélevés et fond fibrineux. Quelle démarche diagnostique et thérapeutique rigoureuse doit être appliquée ?",
    "options": [
      "Traiter par IPP sans réaliser de biopsie",
      "Réaliser au moins 6 à 8 biopsies des berges et du fond de l'ulcère pour éliminer un adénocarcinome gastrique ; traiter par IPP pendant 6 à 8 semaines et programmer obligatoirement une FOGD de contrôle avec nouvelles biopsies de la cicatrice à la fin du traitement",
      "Opérer d'urgence pour gastrectomie des 4/5èmes",
      "Prescrire des anti-acides liquides seuls",
      "Arrêter le bilan si la sérologie H. pylori est négative"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Tout ulcère gastrique exige des biopsies multiples (minimum 6-8) dès la FOGD initiale, un traitement par IPP pleine dose pendant 6 à 8 semaines, et une FOGD de contrôle systématique à 6-8 semaines avec nouvelles biopsies pour confirmer la bénignité et la cicatrisation complète.",
    "clinicalPearl": "Ulcère gastrique = biopsies initiales systématiques + IPP 6-8 semaines + FOGD de contrôle avec re-biopsies obligatoires."
  },
  {
    "id": "q-cas-ugd-3",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Un jeune homme de 28 ans sans antécédents est admis aux urgences pour l'apparition brutale, il y a 2 heures, d'une douleur abdominale épigastrique insoutenable 'en coup de poignard'. L'examen clinique retrouve une apyrexie, une polypnée superficielle, un abdomen immobile avec contracture musculaire rigide des 4 quadrants ('ventre de bois') et une disparition de la matité pré-hépatique à la percussion. L'abdomen sans préparation (ASP) debout centré sur les coupoles objective un croissant gazeux sous-diaphragmatique bilatéral franc. Quel est le diagnostic et la prise en charge immédiate ?",
    "options": [
      "Pancréatite aiguë modérée ; réhydratation en salle de médecine",
      "Péritonite aiguë généralisée par perforation d'ulcère gastro-duodénal ; urgence chirurgicale absolue : réanimation, IPP IV, antibiothérapie et laparotomie ou cœlioscopie pour suture de la brèche, omentoplastie et toilette péritonéale",
      "Infarctus du mésentère ; artériographie en urgence",
      "Pleurésie purulente droite ; ponction pleurale",
      "Colique néphrétique hyperalgique ; antispasmodiques"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La triade coup de poignard + ventre de bois + pneumopéritoine signe la perforation d'ulcère gastroduodénal en péritoine libre : urgence chirurgicale pour toilette péritonéale, suture et patch omental (Graham).",
    "clinicalPearl": "Ulcère perforé en péritoine libre = Suture + omentoplastie (patch de Graham) + toilette péritonéale + IPP IV."
  },
  {
    "id": "q-cas-ugd-4",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Un homme de 45 ans consulte pour des épisodes récidivants d'ulcères duodénaux multiples réfractaires au traitement par IPP à double dose, compliqués de deux hémorragies digestives antérieures. Il signale également une diarrhée motrice/sécrétoire liquidienne profuse (4 à 5 selles volumineuses par jour). La gastroscopie montre des ulcérations confluentes du 2ème duodénum et du premier jéjunum avec plis gastriques hypertrophiques. La gastrinémie à jeun est dosée à 1450 pg/mL (N < 100) avec un pH gastrique mesuré à 1,4. Quel syndrome devez-vous suspecter et quelle imagerie demandez-vous pour localiser la tumeur neuroendocrine ?",
    "options": [
      "Maladie de Crohn jéjunale ; coloscopie totale",
      "Syndrome de Zollinger-Ellison (gastrinome) ; scanner abdomino-pelvien triphasique, écho-endoscopie duodéno-pancréatique et imagerie des récepteurs de la somatostatine (TEP au 68Ga-DOTATOC)",
      "Lymphome gastrique ; myélogramme",
      "Carcinome hépatocellulaire ; IRM du foie",
      "Tuberculose intestinale ; PCR BK"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'association d'ulcères duodénaux atypiques multiples/post-bulbaires récidivants, diarrhée sécrétoire et gastrinémie > 1000 pg/mL avec pH acide affirme le syndrome de Zollinger-Ellison. La localisation du gastrinome repose sur l'écho-endoscopie et l'imagerie des récepteurs de la somatostatine (TEP Ga-DOTATOC).",
    "clinicalPearl": "Ulcères récidivants multiples + diarrhée + gastrine > 1000 pg/mL = Zollinger-Ellison -> TEP 68Ga-DOTATOC."
  },
  {
    "id": "q-cas-ugd-5",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Un patient de 60 ans avec antécédent d'ulcère bulbaire ancien mal traité consulte pour des vomissements alimentaires incoercibles survenant 3 à 4 heures après les repas, contenant des débris d'aliments consommés la veille. Il a perdu 7 kg en 2 mois. À l'examen clinique, l'abdomen est souple, avec un clapotage gastrique audible à jeun. L'ionogramme sanguin révèle une alcalose métabolique hypochlorémique avec hypokaliémie (K+ à 2,8 mmol/L, Cl- à 82 mmol/L, bicarbonates à 34 mmol/L) et insuffisance rénale fonctionnelle. Quel diagnostic posez-vous et quelle est la prise en charge initiale ?",
    "options": [
      "Gastroparésie diabétique ; métoclopramide oral",
      "Sténose pyloro-bulbaire ulcéreuse cicatricielle ; mise en condition avec aspiration naso-gastrique, compensation hydro-électrolytique par sérum physiologique avec chlorure de potassium IV, IPP forte dose IV puis FOGD",
      "Occlusion sur bride du grêle pelvien ; lavement baryté",
      "Appendicite aiguë péritonéale ; appendicectomie",
      "Sténose de l'œsophage cervical ; dilatation endoscopique immédiate"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les vomissements d'aliments de la veille, le clapotage à jeun et l'alcalose hypochlorémique hypokaliémique sont la présentation classique de la sténose pyloro-bulbaire ulcéreuse. La correction de la déshydratation au NaCl + KCl et l'aspiration nasogastrique précédent l'exploration endoscopique.",
    "clinicalPearl": "Sténose pylorique ulcéreuse = Aspiration gastrique + réhydratation NaCl/KCl + IPP IV -> FOGD (dilatation ou chirurgie)."
  }
];

export const ULCERE_GASTRO_DUODENAL_RESOURCES: CourseResource[] = [
  {
    "id": "res-ugd-summary",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Maladie Ulcéreuse Gastro-Duodénale",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Ulcère Gastro-Duodénal (UGD)\n- **Étiologies majeures (> 90%)** :\n  - *Helicobacter pylori* (85% des duodénaux, 70% des gastriques).\n  - *AINS et Aspirine* (inhibition de la COX-1 et des prostaglandines cytoprotectrices).\n  - Rares : Syndrome de Zollinger-Ellison (gastrinome, NEM 1), tabac, ulcères de stress (Curling, Cushing).\n- **Clinique** : Crampe ou faim douloureuse épigastrique post-prandiale tardive/nocturne, calmée par les aliments, périodique dans l'année.\n- **Diagnostic endoscopique (FOGD)** :\n  - *Ulcère gastrique* : Biopsies systématiques des berges (6-8) pour éliminer un adénocarcinome ; FOGD de contrôle obligatoire à 6-8 semaines.\n  - *Ulcère duodénal* : Pas de biopsies systématiques de la lésion ; pas de FOGD de contrôle si asymptomatique.\n- **Traitement d'éradication d'Helicobacter pylori** :\n  - Quadrithérapie bismuthée (10j) ou Quadrithérapie concomitante (14j).\n  - Contrôle d'éradication par test respiratoire à l'urée 13C à 4 semaines après l'arrêt des antibiotiques.\n- **Complications majeures** :\n  - Hémorragie (1ère cause d'hémorragie haute).\n  - Perforation (ventre de bois + pneumopéritoine).\n  - Sténose pyloro-bulbaire (vomissements tardifs + alcalose hypochlorémique hypokaliémique).",
    "author": "Faculté de Médecine - Collège de Gastroentérologie"
  },
  {
    "id": "res-ugd-pearls",
    "courseId": "crs-gastro-ulcere-gastro-duodenal",
    "type": "Astuce",
    "title": "Règles d'Or & Pièges : Ulcère Gastro-Duodénal",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Règle absolue** : Tout ulcère gastrique doit être biopsié et re-contrôlé à 6-8 semaines sous peine de méconnaître un cancer gastrique.\n- ⚡ **Bulbe postérieur** : risque d'érosion de l'artère gastro-duodénale (hémorragie cataclysmique).\n- ⚡ **Test respiratoire à l'urée** : attendre au moins 4 semaines après les antibiotiques et 2 semaines après les IPP (sinon faux négatif).",
    "author": "Commission Pédagogique"
  }
];
