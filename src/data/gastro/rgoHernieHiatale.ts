import { Question, CourseResource } from '../../types/medical';

export const RGO_HERNIE_HIATALE_QUESTIONS: Question[] = [
  {
    "id": "q-rgo-01",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel est le mécanisme physiopathologique prédominant responsable du reflux gastro-œsophagien (RGO) acide ?",
    "options": [
      "Une hypersécrétion gastrique acide isolée",
      "Les relaxations transitoires inappropriées du sphincter inférieur de l'œsophage (SIO)",
      "Une achalasie primitive",
      "Une sténose duodénale congénitale",
      "Une atrophie des cellules bordantes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les relaxations transitoires spontanées et inappropriées du SIO (non déclenchées par la déglutition) représentent la cause majeure du RGO acide, favorisées par la perte de la barrière anatomique antireflux.",
    "clinicalPearl": "Physiopathologie du RGO : relaxations transitoires inappropriées du sphincter inférieur de l'œsophage (SIO)."
  },
  {
    "id": "q-rgo-02",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel syndrome fonctionnel clinique associe la triade sémiologique typique caractéristique du RGO chez l'adulte ?",
    "options": [
      "Nausées matinales, diarrhée et ténesme",
      "Pyrosis ascendant rétrosternal, régurgitations acides posturales/nocturnes et syndrome postural (signe du lacet)",
      "Dysphagie douloureuse permanente aux liquides",
      "Hématémèse cataclysmique et méléna",
      "Épigastralgie calmée par les épices"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le trépied typique du RGO associe pyrosis (brûlure rétrosternale ascendante), régurgitations acides sans nausée, et accentuation posturale à l'antéflexion (signe du lacet) ou au décubitus dorsal.",
    "clinicalPearl": "RGO typique : Pyrosis + Régurgitations acides + Signe du lacet (déclenchement à l'antéflexion/décubitus)."
  },
  {
    "id": "q-rgo-03",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Chez un patient de moins de 50 ans présentant des symptômes typiques de RGO sans aucun signe d'alarme (dysphagie, anémie, amaigrissement, hématémèse), quelle est la prise en charge initiale recommandée ?",
    "options": [
      "Réalisation d'une FOGD en urgence",
      "Traitement d'épreuve par inhibiteurs de la pompe à protons (IPP) à demi-dose ou pleine dose pendant 4 semaines sans endoscopie préalable",
      "pH-métrie des 24h d'emblée",
      "Chirurgie antireflux immédiate",
      "Scanner thoraco-abdominal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Devant des symptômes typiques chez un sujet de < 50 ans sans signe d'alarme, la FOGD n'est pas nécessaire d'emblée : un traitement d'épreuve par IPP pendant 4 semaines suffit.",
    "clinicalPearl": "Sujet < 50 ans + RGO typique sans signe d'alarme = IPP d'épreuve 4 semaines sans FOGD."
  },
  {
    "id": "q-rgo-04",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans quelle situation une endoscopie œso-gastro-duodénale (FOGD) est-elle formellement indiquée de première intention devant un RGO ?",
    "options": [
      "Âge > 50 ans, présence de signes d'alarme (dysphagie, amaigrissement, anémie, saignement) ou résistance au traitement médical par IPP",
      "Chez tout adolescent sans antécédents",
      "Uniquement si le patient est végétarien",
      "En cas de toux isolée sans reflux",
      "Avant toute prise d'anti-acides"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La présence de signes d'alarme (dysphagie en tête), un âge > 50 ans ou la récidive/résistance sous IPP imposent une FOGD pour dépister œsophagite sévère, sténose peptique, EBO ou cancer.",
    "clinicalPearl": "Indications de FOGD dans le RGO : âge > 50 ans, signes d'alarme (dysphagie +++), échec des IPP."
  },
  {
    "id": "q-rgo-05",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle classification endoscopique internationale gradue la sévérité de l'œsophagite peptique par reflux de A à D ?",
    "options": [
      "Classification de Savary-Miller ou classification de Los Angeles",
      "Classification de Balthazar",
      "Classification de Forrest",
      "Classification de Child-Pugh",
      "Classification de Hinchey"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La classification de Los Angeles gradue l'œsophagite de A (érosions < 5 mm non confluentes) à D (érosions circonférentielles > 75% de la circonférence). La classification de Savary-Miller reste également très utilisée en France et Algérie.",
    "clinicalPearl": "Classification de Los Angeles : grade A à D ; Savary-Miller : stade I à IV (IV = ulcère/sténose/EBO)."
  },
  {
    "id": "q-rgo-06",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "L'endobrachyœsophage (EBO / muqueuse de Barrett) est défini histologiquement par :",
    "options": [
      "La prolifération d'un épithélium malpighien kératinisé",
      "Le remplacement de l'épithélium malpighien normal du bas œsophage par un épithélium glandulaire métaplasique de type intestinal avec cellules caliciformes",
      "Une nécrose bactérienne muqueuse",
      "Une atrophie des glandes de Brunner",
      "Une fibrose sous-muqueuse sans métaplasie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'EBO est une complication de l'agression acide chronique, caractérisée par une métaplasie intestinale (cellules caliciformes) de la muqueuse œsophagienne distale au-dessus de la jonction anatomique.",
    "clinicalPearl": "EBO (muqueuse de Barrett) = métaplasie intestinale avec cellules caliciformes dans l'œsophage distal."
  },
  {
    "id": "q-rgo-07",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "L'EBO constitue la lésion précancéreuse majeure de quelle tumeur maligne de l'œsophage ?",
    "options": [
      "Carcinome épidermoïde",
      "Adénocarcinome de l'œsophage distal et du cardia",
      "GIST œsophagien",
      "Lymphome MALT",
      "Carcinome sarcomatoïde"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'EBO multiplie par 30 à 40 le risque d'adénocarcinome du bas œsophage via la séquence : métaplasie -> dysplasie de bas grade -> dysplasie de haut grade -> adénocarcinome invasif.",
    "clinicalPearl": "EBO = principal facteur de risque de l'adénocarcinome du bas œsophage."
  },
  {
    "id": "q-rgo-08",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est l'examen de référence (gold standard) pour confirmer et quantifier un reflux acide pathologique en l'absence de lésions d'œsophagite à l'endoscopie ?",
    "options": [
      "Le transit baryté de l'œsophage",
      "La pH-métrie (ou pH-impédancemétrie) œsophagienne des 24 heures",
      "L'échographie abdominale",
      "La manométrie de haute résolution seule",
      "Le scanner thoracique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La pH-métrie des 24h mesure le pourcentage de temps à pH < 4 (pathologique si > 4-6%) et calcule le score composite de DeMeester ainsi que l'indice de corrélation symptôme-reflux (SAP/SI).",
    "clinicalPearl": "FOGD normale + suspicion de RGO = pH-impédancemétrie des 24h de référence."
  },
  {
    "id": "q-rgo-09",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle hernie hiatale est de loin la plus fréquente (> 85-90% des cas), caractérisée par l'ascension du cardia dans le médiastin postérieur à travers l'orifice hiatal élargi ?",
    "options": [
      "Hernie hiatale par roulement (para-œsophagienne)",
      "Hernie hiatale par glissement (type I)",
      "Hernie diaphragmatique de Bochdalek",
      "Hernie de Morgagni-Larrey",
      "Hernie de Spiegel"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La hernie hiatale par glissement (type I) correspond au glissement axial du cardia et du bas œsophage au-dessus du diaphragme, favorisant directement le reflux acide.",
    "clinicalPearl": "Hernie hiatale par glissement (type I) = 90% des hernies hiatales (associée au RGO)."
  },
  {
    "id": "q-rgo-10",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle complication mécanique redoutable est spécifique de la hernie hiatale par roulement (para-œsophagienne / type II) où la grosse tubérosité roule à côté d'un cardia en place ?",
    "options": [
      "L'insuffisance hépatique aiguë",
      "L'étranglement herniaire avec volvulus gastrique intra-thoracique et risque de nécrose/perforation de l'estomac",
      "L'infarctus du myocarde",
      "L'apparition d'un lymphome",
      "La colite ischémique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La hernie par roulement expose à l'incarcération et au volvulus organo-axial de l'estomac dans le médiastin, constituant une urgence chirurgicale mécanique indépendante du reflux.",
    "clinicalPearl": "Hernie hiatale par roulement (type II) = risque de volvulus gastrique intrathoracique et strangulation."
  },
  {
    "id": "q-rgo-11",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Parmi les manifestations extra-œsophagiennes dites 'atypiques' du RGO, lesquelles sont les plus fréquentes ?",
    "options": [
      "Lithiase salivaire et sinusite frontale",
      "Toux chronique inexpliquée (souvent nocturne), asthme intrinsèque résistant, laryngite chronique postérieure et érosions dentaires linguales",
      "Sciatique bilatérale",
      "Péricardite aiguë virale",
      "Ulcère cornéen"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le micro-reflux acide dans l'arbre respiratoire et l'oropharynx peut se traduire par une toux chronique sèche, un asthme nocturne rebelle, des fausses routes, un enrouement matinal et une usure de l'émail dentaire.",
    "clinicalPearl": "Signes atypiques de RGO : Toux chronique inexpliquée, asthme nocturne résistant, laryngite et érosions dentaires."
  },
  {
    "id": "q-rgo-12",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen fonctionnel œsophagien est FORMELLEMENT OBLIGATOIRE avant toute décision de chirurgie antireflux (fundoplicature) pour éliminer un trouble moteur sous-jacent ?",
    "options": [
      "La fibroscopie bronchique",
      "La manométrie œsophagienne de haute résolution (pour éliminer une achalasie ou une apéristaltisme majeur)",
      "La coloscopie totale",
      "La scintigraphie de vidange gastrique",
      "L'échographie cervicale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La manométrie vérifie le péristaltisme du corps œsophagien et élimine un trouble moteur primaire (achalasie, sclérodermie). Une fundoplicature sur un œsophage non contractile provoquerait une aphagie postopératoire définitive.",
    "clinicalPearl": "Manométrie œsophagienne obligatoire avant chirurgie antireflux (élimine une achalasie)."
  },
  {
    "id": "q-rgo-13",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle intervention chirurgicale antireflux est la technique de référence par cœlioscopie (fundoplicature complète à 360°) ?",
    "options": [
      "Intervention de Lewis-Santy",
      "Intervention de Nissen (valve fundique complète à 360° manchonnant le bas œsophage)",
      "Intervention de Hartmann",
      "Intervention de Whipple",
      "Gastrectomie longitudinale en manchon"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La fundoplicature selon Nissen (valve antireflux à 360° confectionnée à partir de la grosse tubérosité gastrique passée en arrière de l'œsophage) est le standard laparoscopique.",
    "clinicalPearl": "Chirurgie de référence du RGO = Intervention de Nissen (fundoplicature à 360° sous cœlioscopie)."
  },
  {
    "id": "q-rgo-14",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle variante de fundoplicature partielle postérieure (valve à 270°) est préférée en cas d'hypomotilité œsophagienne modérée pour réduire le risque de dysphagie résiduelle ?",
    "options": [
      "Intervention de Toupet",
      "Intervention de Billroth II",
      "Intervention de Graham",
      "Intervention de Miles",
      "Intervention de Lichtenstein"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'intervention de Toupet (hémivalve postérieure de 270°) entraîne moins de dysphagie et d'impossibilité d'éructer que la valve complète de Nissen.",
    "clinicalPearl": "Fundoplicature partielle postérieure (270°) = Intervention de Toupet."
  },
  {
    "id": "q-rgo-15",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans l'endobrachyœsophage (EBO), quelle classification endoscopique standardisée permet de mesurer l'extension de la métaplasie en hauteur circulaire (C) et maximale (M) ?",
    "options": [
      "Classification de Prague (critères C et M)",
      "Classification de Forrest",
      "Classification de Bismuth",
      "Classification de Hinchey",
      "Classification de Paris"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les critères de Prague mesurent la hauteur circonférentielle (C) et la hauteur maximale (M) en centimètres au-dessus de la limite supérieure des plis gastriques.",
    "clinicalPearl": "Classification de Prague pour l'EBO : hauteur circonférentielle (C) et hauteur maximale (M)."
  },
  {
    "id": "q-rgo-16",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel traitement endoscopique d'ablation thermique est recommandé en cas d'EBO avec dysplasie confirmée pour éradiquer la muqueuse pathologique ?",
    "options": [
      "La ligature élastique",
      "L'ablation par radiofréquence (système Barrx) après résection muqueuse des zones surélevées",
      "L'injection de colle biologique",
      "La pose de sonde naso-gastrique",
      "La radiothérapie externe"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'ablation par radiofréquence (Barrx) détruit thermiquement la muqueuse dysplasique sur une profondeur contrôlée, permettant la repousse d'un épithélium malpighien sain sous IPP.",
    "clinicalPearl": "EBO avec dysplasie : résection endoscopique des nodules visibles + radiofréquence (Barrx) de la muqueuse résiduelle."
  },
  {
    "id": "q-rgo-17",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle complication cicatricielle du RGO sévère au long cours se traduit par l'apparition progressive d'une dysphagie organique indolore aux solides avec paradoxalement DISPARITION du pyrosis ?",
    "options": [
      "La sténose peptique de l'œsophage",
      "L'ulcère de Dieulafoy",
      "La rupture de varice",
      "Le méga-œsophage idiopathique",
      "Le diverticule de Zenker"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La sténose peptique résulte de la fibrose rétractile de l'œsophage distal secondaire à l'inflammation chronique. En rétrécissant la lumière, elle fait obstacle au reflux acide (disparition du pyrosis) au prix d'une dysphagie progressive.",
    "clinicalPearl": "Sténose peptique : dysphagie progressive aux solides avec disparition du pyrosis (traitement : dilatation + IPP)."
  },
  {
    "id": "q-rgo-18",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel est le traitement médical de première intention d'une œsophagite peptique sévère (grade C ou D de Los Angeles / stade III-IV de Savary-Miller) ?",
    "options": [
      "Anti-acides de contact seuls après les repas",
      "Inhibiteur de la pompe à protons (IPP) à pleine dose (ou double dose) pendant au moins 8 semaines suivi d'un contrôle endoscopique",
      "Chirurgie en extrême urgence",
      "Antibiothérapie par amoxicilline",
      "Régime liquide exclusif"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les formes sévères d'œsophagite (grades C et D) nécessitent un traitement d'attaque par IPP pleine ou double dose pendant 8 semaines, avec FOGD de contrôle systématique pour vérifier la cicatrisation et traquer un EBO masqué par l'inflammation.",
    "clinicalPearl": "Œsophagite sévère (grades C-D) = IPP pleine dose 8 semaines + FOGD de contrôle obligatoire."
  },
  {
    "id": "q-rgo-19",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle mesure hygiéno-diététique a démontré une réelle efficacité clinique pour réduire le reflux acide nocturne ?",
    "options": [
      "Boire un grand verre de jus d'orange avant de dormir",
      "Surélévation de la tête du lit de 15 à 20 cm (cales sous les pieds du lit) et respect d'un délai d'au moins 2 à 3 heures entre le dîner et le coucher",
      "Dormir strictement sur le ventre sans oreiller",
      "Manger des repas riches en lipides le soir",
      "Consommer de la menthe forte après le repas"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La surélévation de la tête du lit et l'espacement du dîner par rapport au coucher empêchent le reflux gravitationnel nocturne. Le sevrage tabagique et la perte de poids chez le sujet en surpoids sont également majeurs.",
    "clinicalPearl": "Mesures hygiéno-diététiques validées : surélévation de la tête du lit de 15 cm + délai dîner-coucher > 2h + perte de poids."
  },
  {
    "id": "q-rgo-20",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'évaluation pH-métrique œsophagienne, le reflux gastro-œsophagien acide est défini par une chute du pH œsophagien au-dessous de :",
    "options": [
      "pH < 7,0",
      "pH < 4,0",
      "pH < 2,0",
      "pH < 1,0",
      "pH > 8,0"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Un épisode de reflux acide est conventionnellement défini par une chute du pH intra-œsophagien en dessous du seuil critique de 4,0.",
    "clinicalPearl": "Seuil de reflux acide en pH-métrie = pH < 4,0."
  },
  {
    "id": "q-rgo-21",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle anomalie congénitale de l'anneau hiatal peut se révéler par une occlusion ou détresse respiratoire néonatale précoce (hernie postéro-latérale) ?",
    "options": [
      "Hernie de Bochdalek",
      "Hernie de Morgagni",
      "Hernie crurale",
      "Hernie ombilicale",
      "Hernie de Spiegel"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La hernie diaphragmatique postéro-latérale congénitale de Bochdalek (le plus souvent gauche) est une malformation néonatale grave avec hypoplasie pulmonaire.",
    "clinicalPearl": "Hernie congénitale postéro-latérale = Hernie de Bochdalek."
  },
  {
    "id": "q-rgo-22",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel médicament prokinétique ou protecteur de muqueuse est couramment associé aux IPP pour former un gel surnageant protecteur à la surface du bol gastrique ?",
    "options": [
      "L'Alginate de sodium",
      "L'Aspirine",
      "L'Atropine",
      "Le Furosémide",
      "Le Métronidazole"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'alginate de sodium forme un gel moussant visqueux qui surnage au-dessus du chyme gastrique, formant une barrière mécanique physique au niveau de la jonction œso-gastrique.",
    "clinicalPearl": "Alginates = barrière mécanique surnageante anti-reflux prise après les repas."
  },
  {
    "id": "q-rgo-23",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle complication d'un RGO acide sévère peut simuler un syndrome coronarien aigu avec douleur thoracique constrictive rétro-sternale ?",
    "options": [
      "Le spasme œsophagien secondaire à l'irritation acide ou œsophagite ulcéreuse",
      "Une appendicite aiguë",
      "Une torsion ovarienne",
      "Une occlusion du grêle",
      "Une pyélonéphrite"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'acidité peut déclencher des spasmes œsophagiens réflexes très douloureux et angoissants, simulant une angine de poitrine. Un bilan cardiologique d'élimination préalable est obligatoire.",
    "clinicalPearl": "Douleur thoracique pseudo-angineuse : toujours éliminer une cause coronaire avant d'attribuer la douleur au RGO."
  },
  {
    "id": "q-rgo-24",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge d'un patient présentant un pyrosis quotidien sous IPP simple dose, quelle est la première étape d'optimisation médicale ?",
    "options": [
      "Indiquer la chirurgie en urgence",
      "Vérifier l'observance et les règles de prise (30 minutes avant le petit-déjeuner) et doubler la dose d'IPP (prise matin et soir) pendant 4 à 8 semaines",
      "Arrêter immédiatement tout traitement",
      "Prescrire des antibiotiques",
      "Réaliser une gastrectomie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Près de 30% des échecs d'IPP sont liés à une mauvaise prise (l'IPP doit être pris 30 minutes avant le repas pour bloquer les pompes activées). L'optimisation repose sur la prise bi-quotidienne matin et soir avant les repas.",
    "clinicalPearl": "Échec d'IPP : vérifier la prise 30 min avant les repas -> passage à double dose (matin et soir)."
  },
  {
    "id": "q-rgo-25",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle affection inflammatoire chronique de l'œsophage se manifeste par une dysphagie capricieuse aux solides et des impactions alimentaires fréquentes chez l'adulte jeune atopique, mimant un RGO réfractaire ?",
    "options": [
      "L'œsophagite à éosinophiles",
      "La maladie de Crohn gastrique",
      "L'achalasie du cardia de type 3",
      "Le carcinome épidermoïde précoce",
      "La candidose œsophagienne"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'œsophagite à éosinophiles touche l'adulte jeune atopique (asthme, eczéma) : aspect endoscopique en 'trachéalisation' (anneaux circulaires multiples) et biopsies montrant >= 15 éosinophiles par champ à fort grandissement.",
    "clinicalPearl": "Jeune atopique + impactions alimentaires / dysphagie = Œsophagite à éosinophiles (trachéalisation de l'œsophage)."
  },
  {
    "id": "q-cas-rgo-1",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Un homme de 38 ans, non fumeur, sans antécédents, consulte pour des brûlures rétrosternales ascendantes quotidiennes survenant 1 heure après les repas et majorées lorsqu'il se penche en avant pour lacer ses chaussures (signe du lacet franc). Il décrit également des régurgitations acides nocturnes acides sans nausée. Il n'a aucune dysphagie, son poids est stable et son hémoglobine est normale à 15 g/dL. Quel est le diagnostic et quelle est la prise en charge de première intention recommandée ?",
    "options": [
      "Suspicion de cancer de l'œsophage ; scanner TAP et FOGD en urgence",
      "Reflux gastro-œsophagien non compliqué typique chez un sujet de moins de 50 ans sans signe d'alarme ; prescription d'un traitement d'épreuve par inhibiteur de la pompe à protons (IPP) pleine dose pendant 4 semaines associé aux règles hygiéno-diététiques, sans réaliser d'endoscopie d'emblée",
      "Achalasie du cardia ; manométrie œsophagienne immédiate",
      "Ulcère gastrique perforé ; chirurgie de Graham",
      "Coronaropathie instable ; coronarographie d'urgence"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les symptômes sont stéréotypés et typiques (pyrosis, régurgitations, signe du lacet). Chez un patient de moins de 50 ans sans aucun signe d'alarme, la FOGD n'est pas recommandée en première intention : un traitement médical par IPP pendant 4 semaines est le standard.",
    "clinicalPearl": "RGO typique < 50 ans sans signe d'alarme = IPP 4 semaines d'emblée, sans FOGD préalable."
  },
  {
    "id": "q-cas-rgo-2",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Un homme de 58 ans en surpoids (IMC 29 kg/m²), ayant des antécédents de RGO ancien négligé, consulte car depuis 2 mois il ressent une gêne lors de la déglutition des aliments solides (viande, pain) qui semblent 'accrocher' au bas du thorax, sans vomissements. Il a perdu 4 kg. Quelle démarche diagnostique s'impose sans délai ?",
    "options": [
      "Augmenter simplement la dose d'IPP et revoir dans 6 mois",
      "Réaliser une endoscopie œso-gastro-duodénale (FOGD) avec biopsies en raison de l'âge > 50 ans et de la présence de signes d'alarme (dysphagie et amaigrissement)",
      "Demander une pH-métrie ambulatoire des 24h",
      "Prescrire un traitement anxiolytique pour globus hystericus",
      "Proposer une chirurgie antireflux sans imagerie"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La survenue d'une dysphagie chez un patient de plus de 50 ans est un signe d'alarme absolu qui impose formellement une FOGD pour rechercher une sténose peptique, un adénocarcinome sur EBO ou un carcinome épidermoïde.",
    "clinicalPearl": "Toute dysphagie chez un patient avec RGO impose une FOGD avec biopsies sans différer."
  },
  {
    "id": "q-cas-rgo-3",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Chez ce même patient de 58 ans, la FOGD révèle à 36 cm des arcades dentaires, au-dessus de la ligne Z, une muqueuse saumonée d'allure glandulaire s'étendant sur 4 cm en hauteur circonférentielle (C4M5 selon la classification de Prague). Les biopsies étagées mettent en évidence une muqueuse métaplasique de type intestinal avec présence de cellules caliciformes, confirmant un endobrachyœsophage (EBO). L'anatomopathologiste ne retrouve aucune lésion de dysplasie. Quelle est la stratégie de prise en charge et de surveillance recommandée ?",
    "options": [
      "Œsophagectomie de Lewis-Santy d'emblée",
      "Traitement par IPP au long cours pour contrôler les symptômes acides et surveillance endoscopique régulière par FOGD haute définition avec biopsies étagées tous les 3 à 5 ans",
      "Arrêt de tout traitement et pas de surveillance",
      "Chimiothérapie par 5-FU",
      "Radiothérapie externe exclusive"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En présence d'un EBO sans dysplasie, la prise en charge repose sur les IPP au long cours et une surveillance endoscopique programmée tous les 3 à 5 ans selon la longueur du segment (protocole de Seattle avec biopsies dans les 4 quadrants tous les 2 cm) pour dépister une dysplasie.",
    "clinicalPearl": "EBO sans dysplasie : IPP au long cours + surveillance par FOGD tous les 3 à 5 ans."
  },
  {
    "id": "q-cas-rgo-4",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Une femme de 45 ans souffre d'un RGO acide sévère résistant aux IPP simple dose. Le passage à double dose soulage partiellement les symptômes, mais elle présente une récidive immédiate dès toute tentative d'arrêt. Elle souhaite une solution chirurgicale définitive. La FOGD montre une hernie hiatale par glissement de 4 cm et une œsophagite grade B de Los Angeles. Avant de poser l'indication d'une fundoplicature cœlioscopique de Nissen, quel examen fonctionnel devez-vous OBLIGATOIREMENT prescrire ?",
    "options": [
      "Un lavement baryté colique",
      "Une manométrie œsophagienne de haute résolution (pour éliminer formellement un trouble moteur majeur type achalasie et évaluer le péristaltisme)",
      "Une scintigraphie hépatique",
      "Un scanner des sinus de la face",
      "Une biopsie hépatique transjugulaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La manométrie œsophagienne préopératoire est formellement obligatoire avant toute chirurgie antireflux pour éliminer un trouble moteur primitif (achalasie) et s'assurer que le corps de l'œsophage a une force contractile suffisante pour franchir la valve.",
    "clinicalPearl": "Bilan pré-opératoire de chirurgie du RGO : FOGD + Manométrie œsophagienne systématique (+ pH-métrie si doute)."
  },
  {
    "id": "q-cas-rgo-5",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Une femme de 75 ans sans antécédent de reflux acide consulte pour une pesanteur épigastrique post-prandiale précoce avec dyspnée d'effort d'aggravation récente. La radiographie thoracique de face objective une volumineuse clarté aérique rétro-cardiaque avec niveau hydro-aérique projetée dans le médiastin postérieur. Le transit baryté et le scanner confirment l'ascension de la totalité de la grosse tubérosité gastrique dans le thorax à côté d'un cardia qui demeure en position sous-diaphragmatique normale (hernie hiatale de type II par roulement volumineuse). Quel est le risque évolutif majeur justifiant la cure chirurgicale ?",
    "options": [
      "La survenue d'un adénocarcinome duodénal",
      "L'étranglement herniaire avec volvulus gastrique intra-thoracique et ischémie gastrique aiguë",
      "Une hépatite fulminante",
      "Une pancréatite aiguë nécrosante",
      "Un ulcère de Dieulafoy rectal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La hernie hiatale par roulement (para-œsophagienne) expose au risque redoutable d'incarcération, de volvulus gastrique et de nécrose ischémique intra-thoracique de l'estomac, justifiant une réintégration chirurgicale avec fermeture des piliers et gastropexie.",
    "clinicalPearl": "Hernie hiatale par roulement : risque de volvulus gastrique aigu intrathoracique et nécrose -> indication chirurgicale."
  }
];

export const RGO_HERNIE_HIATALE_RESOURCES: CourseResource[] = [
  {
    "id": "res-rgo-summary",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : RGO et Hernie Hiatale",
    "contentMarkdown": "### 🎯 Synthèse Clinique : RGO et Hernie Hiatale\n- **Physiopathologie** : Relaxations transitoires inappropriées du SIO + défaillance de la barrière anatomique antireflux (hernie hiatale).\n- **Clinique** :\n  - *Typique* : Pyrosis ascendant + régurgitations acides + signe du lacet (déclenchement postural/décubitus).\n  - *Atypique* : Toux chronique inexpliquée nocturne, asthme résistant, laryngite, érosions dentaires, douleurs thoraciques pseudo-angineuses.\n- **Stratégie diagnostique** :\n  - < 50 ans sans signe d'alarme : IPP test 4 semaines sans FOGD.\n  - > 50 ans, signes d'alarme (dysphagie +++), échec du traitement : FOGD avec biopsies.\n  - FOGD normale + doute diagnostique : pH-impédancemétrie des 24h.\n  - Avant chirurgie : Manométrie œsophagienne obligatoire (éliminer achalasie).\n- **Complications** :\n  - Œsophagite peptique (Los Angeles A à D).\n  - Sténose peptique (dysphagie + disparition du pyrosis).\n  - Endobrachyœsophage (EBO / Barrett) : métaplasie intestinale précancéreuse -> risque d'adénocarcinome -> surveillance FOGD tous les 3-5 ans.\n- **Hernies hiatales** :\n  - Type I (glissement, 90%) : favorise le RGO.\n  - Type II (roulement) : risque d'étranglement et de volvulus gastrique intrathoracique -> chirurgie.",
    "author": "Faculté de Médecine - Collège de Gastroentérologie"
  },
  {
    "id": "res-rgo-pearls",
    "courseId": "crs-gastro-rgo-hernie-hiatale",
    "type": "Astuce",
    "title": "Règles d'Or & Pièges : RGO et Hernie Hiatale",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Règle absolue** : Dysphagie chez un patient avec RGO = FOGD obligatoire sans attendre (recherche de cancer ou sténose).\n- ⚡ **Bilan préopératoire** : Manométrie œsophagienne indispensable pour ne pas opérer une achalasie méconnue.\n- ⚡ **EBO** : métaplasie intestinale avec cellules caliciformes = surveillance endoscopique codifiée (Seattle).",
    "author": "Commission Pédagogique"
  }
];
