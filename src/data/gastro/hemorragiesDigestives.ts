import { Question, CourseResource } from '../../types/medical';

export const HEMORRAGIES_DIGESTIVES_QUESTIONS: Question[] = [
  {
    "id": "q-hd-01",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Par quelle limite anatomique sépare-t-on traditionnellement une hémorragie digestive haute d'une hémorragie digestive basse ?",
    "options": [
      "Le cardia œsophagien",
      "Le sphincter pylorique",
      "L'angle duodéno-jéjunal (angle de Treitz / ligament de Treitz)",
      "La valvule iléo-caecale de Bauhin",
      "La charnière recto-sigmoïdienne"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "L'angle de Treitz (angle duodéno-jéjunal) sépare les hémorragies digestives hautes (en amont) des hémorragies digestives basses (en aval).",
    "clinicalPearl": "Angle de Treitz = frontière anatomique entre hémorragies digestives hautes et basses."
  },
  {
    "id": "q-hd-02",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la cause étiologique la plus fréquente d'hémorragie digestive haute (représentant plus de 50% des cas) ?",
    "options": [
      "Le syndrome de Mallory-Weiss",
      "La maladie ulcéreuse gastro-duodénale (ulcère gastrique ou duodénal)",
      "La rupture de varices œsophagiennes",
      "Le cancer de l'estomac",
      "L'œsophagite peptique sévère"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'ulcère gastro-duodénal (UGD) est la cause numéro 1 d'hémorragie digestive haute, suivi de la rupture de varices œsophagiennes ou gastriques d'hypertension portale.",
    "clinicalPearl": "1ère cause d'hémorragie digestive haute = Ulcère gastro-duodénal (environ 50% des cas)."
  },
  {
    "id": "q-hd-03",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Dans l'évaluation initiale d'une hémorragie digestive aiguë, quelle est la priorité absolue avant toute exploration endoscopique ?",
    "options": [
      "Poser une sonde naso-gastrique",
      "L'évaluation et la stabilisation hémodynamique (pouls, PA, voies veineuses, oxygénothérapie, remplissage et transfusion)",
      "Administrer un lavement évacuateur",
      "Réaliser un transit baryté",
      "Faire une coloscopie en urgence"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La prise en charge débute toujours par la réanimation hémodynamique : 2 VVP de gros calibre, monitoring cardio-tensionnel, remplissage par cristalloïdes et culots globulaires si besoin.",
    "clinicalPearl": "Priorité absolue d'une hémorragie digestive = Stabilisation hémodynamique du patient."
  },
  {
    "id": "q-hd-04",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans quel délai l'endoscopie œso-gastro-duodénale (FOGD) doit-elle être réalisée chez un patient stabilisé ?",
    "options": [
      "Dans les 12 à 24 heures après stabilisation hémodynamique",
      "Après 5 jours d'hospitalisation",
      "Dès la première minute même si la TA est imprenable",
      "Uniquement après la reprise de l'alimentation",
      "Le mois suivant"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La FOGD doit être réalisée précocement, idéalement dans les 12 à 24 heures suivant l'admission une fois l'hémodynamique stabilisée, pour identifier la cause et traiter le saignement.",
    "clinicalPearl": "FOGD précoce dans les 12 à 24h après stabilisation hémodynamique."
  },
  {
    "id": "q-hd-05",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle classification endoscopique est utilisée pour évaluer le risque de récidive hémorragique d'un ulcère gastro-duodénal et guider l'hémostase endoscopique ?",
    "options": [
      "Classification de Balthazar",
      "Classification de Forrest",
      "Classification de Savary-Miller",
      "Classification de Child-Pugh",
      "Classification de Hinchey"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La classification de Forrest classe les lésions d'ulcère : Ia (saignement artériel en jet), Ib (saignement en nappe), IIa (vaisseau visible non hémorragique), IIb (caillot adhérent), IIc (taches pigmentées), III (fond propre blanchatre).",
    "clinicalPearl": "Classification de Forrest : Ia/Ib (saignement actif) et IIa (vaisseau visible) = indication formelle d'hémostase endoscopique."
  },
  {
    "id": "q-hd-06",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quels stades de la classification de Forrest imposent formellement un traitement d'hémostase endoscopique en raison d'un risque élevé de récidive saignante ?",
    "options": [
      "Stades IIc et III",
      "Stades Ia, Ib et IIa",
      "Stade III uniquement",
      "Aucun stade",
      "Stade IIc seul"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les stades Forrest Ia (jet), Ib (nappe) et IIa (vaisseau visible) ont un risque de récidive de 40 à 90% et justifient une hémostase endoscopique combinée immédiate.",
    "clinicalPearl": "Forrest Ia, Ib et IIa = Hémostase endoscopique obligatoire."
  },
  {
    "id": "q-hd-07",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel traitement médical pharmacologique parentéral à forte dose est initié immédiatement dès la suspicion d'hémorragie par ulcère gastro-duodénal ?",
    "options": [
      "Inhibiteur de la pompe à protons (IPP) par voie IV (bolus de 80 mg puis perfusion continue de 8 mg/h ou 40 mg x 2/j)",
      "Antibiotiques seuls",
      "Anti-inflammatoires non stéroïdiens",
      "Aspirine IV",
      "Antidiarrhéiques"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les IPP à forte dose maintiennent un pH gastrique > 6, ce qui stabilise le caillot sanguin en empêchant la fibrinolyse et l'agrégation plaquettaire acide-dépendante.",
    "clinicalPearl": "IPP forte dose IV (bolus 80 mg puis perfusion) : stabilise le caillot en maintenant le pH gastrique > 6."
  },
  {
    "id": "q-hd-08",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Devant une hémorragie digestive haute chez un patient cirrhotique connu, quel médicament vasoactif splanchnique doit être débuté SANS DÉLAI dès l'admission avant même la fibroscopie ?",
    "options": [
      "Bêtabloquant non cardiosélectif (Propranolol)",
      "Analogue de la somatostatine (Octréotide) ou Terlipressine",
      "Noradrénaline à haute dose isolée",
      "Furosémide",
      "Digoxine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les dérivés vasoactifs (terlipressine ou octréotide ou somatostatine) diminuent la pression portale et le flux splanchnique. Ils doivent être injectés dès la suspicion d'hémorragie variqueuse.",
    "clinicalPearl": "Hémorragie chez le cirrhotique = Vasoactif IV immédiat (Terlipressine ou Octréotide) AVANT l'endoscopie."
  },
  {
    "id": "q-hd-09",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle antibioprophylaxie systématique est formellement indiquée chez tout patient cirrhotique présentant une hémorragie digestive haute ?",
    "options": [
      "Pénicilline G pendant 1 mois",
      "Ceftriaxone IV (1 g/j) ou Norfloxacine pendant 7 jours",
      "Métronidazole seul",
      "Amoxicilline orale",
      "Vancomycine systématique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'antibiothérapie systématique (Ceftriaxone 1 g/j pendant 7 jours) réduit de façon démontrée le risque d'infection d'ascite, de récidive hémorragique et la mortalité chez le cirrhotique.",
    "clinicalPearl": "Cirrhose + hémorragie = Ceftriaxone 1 g/j pendant 7 jours systématique (réduit récidive et mortalité)."
  },
  {
    "id": "q-hd-10",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel traitement endoscopique de référence permet d'éradiquer les varices œsophagiennes hémorragiques ?",
    "options": [
      "L'injection de colle biologique cyanoacrylate",
      "La ligature élastique des varices œsophagiennes (LEVO)",
      "La mucosectomie",
      "La coagulation au plasma argon isolée",
      "La dilatation pneumatique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La ligature élastique est la méthode de choix pour le traitement hémostatique curatif et préventif des varices œsophagiennes, supérieure à la sclérothérapie.",
    "clinicalPearl": "Varices œsophagiennes = Ligature élastique endoscopique (LEVO) de première intention."
  },
  {
    "id": "q-hd-11",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Pour l'hémostase endoscopique des varices gastriques cardio-tubérositaires (fonds gastrique / GOV2 / IGV1), quelle technique est la plus efficace ?",
    "options": [
      "La ligature élastique simple",
      "L'encollage par injection intra-variqueuse de colle cyanoacrylate (Histoacryl)",
      "L'injection de sérum physiologique seul",
      "La pose de clips métalliques",
      "Le tamponnement gastrique définitif"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les varices tubérositaires sous forte pression répondent mal aux élastiques. L'injection de cyanoacrylate (colle biologique) polymérisant au contact du sang est le gold standard.",
    "clinicalPearl": "Varices tubérositaires gastriques = Encollage par cyanoacrylate (Histoacryl)."
  },
  {
    "id": "q-hd-12",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel dispositif temporaire de sauvetage mécanique par ballonnet compressif peut être utilisé en cas d'hémorragie cataclysmique par rupture de varices œsophagiennes non contrôlée ?",
    "options": [
      "La sonde de Foley",
      "La sonde de Sengstaken-Blakemore (ou sonde de Linton)",
      "La sonde de Salem",
      "Le drain de Redon",
      "Le tube de Faucher"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La sonde de Blakemore (ballonnet gastrique et œsophagien) permet une compression mécanique temporaire (< 24h) en attendant un traitement hémostatique définitif (TIPS ou ré-endoscopie).",
    "clinicalPearl": "Tamponnement d'urgence de varices réfractaires = Sonde de Sengstaken-Blakemore (ou prothèse métallique couverte d'œsophage)."
  },
  {
    "id": "q-hd-13",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la définition d'un méléna ?",
    "options": [
      "L'émission par la bouche de sang rouge non digéré",
      "L'évacuation par l'anus de sang noir, digéré, fétide, pâteux comme du goudron ('poix')",
      "L'émission de sang rouge par l'anus",
      "La présence de glaires sanglantes avec épreintes",
      "Une urine sanglante foncée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le méléna résulte de la dégradation de l'hémoglobine par les sucs gastriques et les bactéries digestives, signant habituellement un saignement en amont de l'angle colique droit (au moins 50 à 100 mL de sang).",
    "clinicalPearl": "Méléna = selles noires comme du goudron, poisseuses et fétides (sang digéré haut situé)."
  },
  {
    "id": "q-hd-14",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Une rectorragie abondante de sang rouge avec retentissement hémodynamique sévère peut provenir de :",
    "options": [
      "Exclusivement d'une hémorroïde interne",
      "D'une hémorragie digestive haute massive à débit très rapide (dans 10-15% des cas) transitant sans digestion",
      "Uniquement du canal anal",
      "D'un polype gastrique millimétrique",
      "D'une lithiase biliaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Dans 10 à 15% des cas, une rectorragie massive avec choc est causée par un saignement digestif haut cataclysmique (transit accéléré ne laissant pas le temps au sang d'être digéré en méléna).",
    "clinicalPearl": "Rectorragie massive avec instabilité = éliminer une hémorragie digestive haute fulgurante (FOGD)."
  },
  {
    "id": "q-hd-15",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Le syndrome de Mallory-Weiss correspond à :",
    "options": [
      "Une rupture transmurale complète de l'œsophage",
      "Une déchirure longitudinale superficielle de la muqueuse du bas œsophage et du cardia induite par des efforts répétés de vomissements",
      "Une tumeur villeuse duodénale",
      "Une malformation artério-veineuse caecale",
      "Une œsophagite médicamenteuse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le syndrome de Mallory-Weiss survient typiquement chez l'alcoolique ou après nausées intenses : déchirure muqueuse de la jonction œso-gastrique après vomissements répétés à glaireux puis sanglants.",
    "clinicalPearl": "Mallory-Weiss : hématémèse survenant APRÈS plusieurs épisodes de vomissements alimentaires répétés."
  },
  {
    "id": "q-hd-16",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle cause fréquente d'hémorragie digestive basse aiguë abondante chez le sujet âgé correspond à un saignement artériel indolore et brutal ?",
    "options": [
      "L'ulcère de Dieulafoy colique",
      "L'hémorragie diverticulaire du côlon",
      "La maladie cœliaque",
      "Le syndrome de l'intestin irritable",
      "La fissure anale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hémorragie diverticulaire est la première cause de rectorragie massive chez le sujet âgé : saignement artériel brusque, abondant, indolore, cessant spontanément dans 80% des cas.",
    "clinicalPearl": "Hémorragie diverticulaire = rectorragie brutale massive indolore chez le sujet âgé."
  },
  {
    "id": "q-hd-17",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "L'angiodysplasie digestive (ectasie vasculaire) est fréquemment associée à quelle cardiopathie valvulaire chez le sujet âgé (syndrome de Heyde) ?",
    "options": [
      "L'insuffisance mitrale",
      "Le rétrécissement aortique calcifié",
      "La communication interauriculaire",
      "La péricardite constrictive",
      "L'endocardite infectieuse droite"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le syndrome de Heyde associe rétrécissement aortique et saignements sur angiodysplasies digestives, favorisés par un déficit acquis en multimères de haut poids moléculaire du facteur Willebrand.",
    "clinicalPearl": "Syndrome de Heyde = Rétrécissement aortique + Angiodysplasies digestives saignantes."
  },
  {
    "id": "q-hd-18",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "L'ulcère de Dieulafoy est défini anatomopathologiquement par :",
    "options": [
      "Un volumineux cancer ulcéré",
      "Une artériole sous-muqueuse aberrante de calibre anormalement volumineux qui s'érode à travers une muqueuse par ailleurs normale",
      "Un hématome disséquant de l'œsophage",
      "Une infection bactérienne fulgurante",
      "Une nécrose caustique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'exulceratio simplex de Dieulafoy est une anomalie vasculaire congénitale (artère sous-muqueuse tortueuse non ramifiée) dont la rupture déclenche une hémorragie cataclysmique sur une brèche millimétrique.",
    "clinicalPearl": "Ulcère de Dieulafoy = artère sous-muqueuse anormalement dilatée érodée sans ulcère franc."
  },
  {
    "id": "q-hd-19",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel seuil transfusionnel d'hémoglobine (stratégie restrictive) est recommandé chez le patient sans antécédent cardiovasculaire lors d'une hémorragie digestive haute ?",
    "options": [
      "Hémoglobine < 12 g/dL",
      "Hémoglobine < 7 g/dL (objectif cible entre 7 et 9 g/dL)",
      "Hémoglobine < 10 g/dL systématique",
      "Hémoglobine < 5 g/dL uniquement",
      "Transfusion systématique sans doser"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La stratégie transfusionnelle restrictive (transfusion si Hb < 7 g/dL pour cible 7-9 g/dL) diminue significativement la récidive hémorragique et la mortalité, notamment chez le cirrhotique en évitant le rebond de pression portale.",
    "clinicalPearl": "Transfusion restrictive : seuil Hb < 7 g/dL (ou 8-9 g/dL si coronarien) -> diminue récidive et mortalité."
  },
  {
    "id": "q-hd-20",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Le score de Glasgow-Blatchford sert à :",
    "options": [
      "Évaluer la fibrose hépatique",
      "Stratifier le risque des hémorragies digestives hautes dès l'admission avant endoscopie pour identifier les patients à très faible risque pouvant être pris en charge en ambulatoire (score = 0)",
      "Mesurer la taille de la rate",
      "Prédire la survenue d'un cancer gastrique",
      "Graduer la sévérité d'une brûlure caustique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le score de Glasgow-Blatchford (basé sur l'urée, l'hémoglobine, la PA, le pouls, méléna, syncope, comorbidités) identifie les patients à bas risque (score 0-1) éligibles à une prise en charge ambulatoire.",
    "clinicalPearl": "Score de Glasgow-Blatchford : stratification pré-endoscopique du risque d'hémorragie digestive haute."
  },
  {
    "id": "q-hd-21",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "En cas d'échec de deux tentatives d'hémostase endoscopique pour hémorragie ulcéreuse gastroduodénale réfractaire, quelle est l'option thérapeutique mini-invasive de choix ?",
    "options": [
      "L'artério-embolisation radiologique hémostatique percutanée",
      "La chimiothérapie digestive",
      "Le jeûne prolongé de 15 jours",
      "La coloscopie totale",
      "L'injection de colle dans la carotide"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'artériographie avec embolisation sélective de l'artère gastro-duodénale est l'alternative de référence en cas d'échec endoscopique, réduisant le recours à la chirurgie d'hémostase en urgence.",
    "clinicalPearl": "Échec de l'hémostase endoscopique d'un ulcère = Embolisation artérielle radiologique (ou chirurgie)."
  },
  {
    "id": "q-hd-22",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Chez le cirrhotique, en cas de rupture de varices œsophagiennes réfractaire ou à très haut risque d'échec précoce (Child C ou Child B avec saignement actif), quel geste interventionnel précoce (TIPS préemptif) est recommandé dans les 72h ?",
    "options": [
      "La transplantation rénale",
      "La pose d'un TIPS (shunt porto-systémique intrahépatique par voie transjugulaire)",
      "La gastrectomie totale",
      "Une cholécystectomie sous cœlioscopie",
      "Une hépatectomie droite"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le TIPS précoce ('préemptif') posé dans les 24 à 72 heures chez les cirrhotiques à haut risque (Child C < 14 ou Child B avec saignement actif) réduit drastiquement les récidives et améliore la survie.",
    "clinicalPearl": "Cirrhose grave avec hémorragie variqueuse = TIPS préemptif dans les 24 à 72h."
  },
  {
    "id": "q-hd-23",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle préparation médicamenteuse prokinétique intraveineuse 30 à 60 minutes avant la FOGD permet de vider l'estomac des caillots et d'améliorer la visibilité endoscopique ?",
    "options": [
      "L'Érythromycine IV (250 mg)",
      "La Morphine",
      "Le Lopéramide",
      "L'Atropine",
      "Le Furosémide"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'érythromycine (agoniste de la motiline) induit des contractions gastriques puissantes qui vidangent les caillots vers le duodénum, améliorant la qualité de la FOGD.",
    "clinicalPearl": "Érythromycine 250 mg IV 30-60 min avant la FOGD : vidange l'estomac des caillots et facilite le geste."
  },
  {
    "id": "q-hd-24",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle cause rare mais gravissime d'hémorragie digestive haute cataclysmique survient typiquement chez un patient porteur d'une prothèse aortique abdominale ?",
    "options": [
      "La fistule aorto-duodénale (généralement entre l'aorte et le 3ème duodénum)",
      "Le diverticule de Zenker",
      "Le polype jéjunal",
      "La rectite radique",
      "La gastrite à éosinophiles"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Toute hémorragie digestive chez un porteur de prothèse aortique est une fistule aorto-duodénale jusqu'à preuve du contraire (saignement 'sentinelle' puis hémorragie cataclysmique mortelle).",
    "clinicalPearl": "Prothèse aortique + hémorragie digestive = Fistule aorto-duodénale (urgence chirurgicale absolue)."
  },
  {
    "id": "q-hd-25",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Dans l'hémorragie digestive basse par diverticule de Meckel chez l'adolescent ou le jeune adulte, quelle hétérotopie tissulaire est responsable de l'ulcération saignante ?",
    "options": [
      "Une hétérotopie de muqueuse gastrique sécrétante acide",
      "Une hétérotopie rénale",
      "Une hétérotopie pulmonaire",
      "Une hétérotopie splénique",
      "Une hétérotopie cutanée"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "L'hétérotopie gastrique au sein du diverticule de Meckel sécrète de l'acide chlorhydrique qui ulcère la muqueuse iléale adjacente non protégée, provoquant des méléna ou rectorragies.",
    "clinicalPearl": "Diverticule de Meckel saignant : hétérotopie muqueuse gastrique acide -> scintigraphie au Technétium 99m."
  },
  {
    "id": "q-cas-hd-1",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Un homme de 58 ans sans antécédent prend depuis 5 jours du Kétoprofène (AINS) pour une sciatique. Il est transporté aux urgences pour de multiples hématémèses de sang rouge avec caillots suivies de méléna fétide. À l'admission : sueurs, pâleur, TA 85/50 mmHg, pouls 125 bpm, hémoglobine à 7,8 g/dL. Après pose de 2 VVP de fort calibre, remplissage par 1000 mL de Ringer Lactate et bolus d'Oméprazole 80 mg IV, sa tension se stabilise à 110/70 mmHg et le pouls à 90 bpm. La FOGD réalisée à H4 met en évidence au niveau de la face postérieure du bulbe duodénal un ulcère de 15 mm avec un saignement artériel actif pulsatile en jet (stade Forrest Ia). Quelle est l'attitude thérapeutique hémostatique endoscopique recommandée ?",
    "options": [
      "Injection isolée de sérum physiologique sans autre geste",
      "Hémostase combinée associant au moins deux techniques (injection d'adrénaline diluée + traitement mécanique par clips métalliques ou thermocoagulation)",
      "Biopsies immédiates de l'ulcère sans hémostase",
      "Arrêt de l'endoscopie et attente de 48 heures",
      "Pose d'une sonde de Blackmore dans le duodénum"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Pour un ulcère Forrest Ia (saignement en jet), la recommandation formelle est une bithérapie hémostatique endoscopique combinant l'injection d'adrénaline (vasoconstriction) et un procédé mécanique (clips) ou thermique (sonde chauffante/bipolaire), réduisant le risque de récidive.",
    "clinicalPearl": "Ulcère Forrest Ia/Ib = Hémostase endoscopique combinée (Adrénaline + Clip ou méthode thermique) + IPP IV."
  },
  {
    "id": "q-cas-hd-2",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Mr C., 52 ans, cirrhotique connu d'origine alcoolique (score de Child-Pugh B8), consulte pour un malaise avec hématémèse de sang rouge estimée à 500 mL. À l'arrivée aux urgences : TA 95/60 mmHg, pouls 110 bpm, ictère conjonctival, ascite modérée, pas d'encéphalopathie. Quelle prise en charge pharmacologique immédiate doit être initiée AVANT le transfert en salle d'endoscopie ?",
    "options": [
      "Prescription de diurétiques et paracétamol",
      "Administration immédiate d'un analogue vasoactif (Terlipressine ou Octréotide IV) + antibioprophylaxie systématique par Ceftriaxone 1 g/j IV + perfusion d'IPP",
      "Laxatifs oraux et lavement au sulfate de baryte",
      "Prescription de propranolol à forte dose en urgence",
      "Transfusion massive pour atteindre une hémoglobine de 14 g/dL"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La prise en charge pré-endoscopique de l'hémorragie chez le cirrhotique repose sur le trépied : 1) Stabilisation hémodynamique prudente (cible Hb 7-9 g/dL), 2) Vasoactif précoce (terlipressine ou somatostatine/octréotide) pour baisser la pression portale, 3) Antibiothérapie systématique (ceftriaxone 7j).",
    "clinicalPearl": "Hémorragie du cirrhotique : Vasoactif précoce + Ceftriaxone 7j + transfusion restrictive (Hb 7-9 g/dL)."
  },
  {
    "id": "q-cas-hd-3",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Chez ce même patient cirrhotique Mr C., la FOGD réalisée sous protection des voies aériennes retrouve 3 cordons de varices œsophagiennes grade III dont l'une présente un saignement actif en nappe avec un signe rouge majeur (choc hémostatique par LEVO réalisé avec succès). Cependant, à J2 d'hospitalisation, le patient présente une récidive brutale cataclysmique d'hématémèse avec état de choc non contrôlé par une nouvelle tentative de ligature endoscopique. Quelle procédure de sauvetage définitive doit être envisagée en urgence ?",
    "options": [
      "Tamponnement temporaire par sonde de Sengstaken-Blakemore ou prothèse couverte suivi de la pose d'un TIPS (shunt porto-systémique intrahépatique transjugulaire)",
      "Gastrectomie totale de principe",
      "Hémorroïdectomie chirurgicale",
      "Perfusion continue de furosémide",
      "Biopsie duodénale immédiate"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "En cas d'échec du traitement médical et endoscopique de l'hémorragie variqueuse, le tamponnement mécanique temporaire (sonde de Blakemore ou prothèse métallique amovible de Danis) sert de pont vers la mise en place d'un TIPS d'urgence pour décomprimer le système porte.",
    "clinicalPearl": "Échec du contrôle endoscopique d'une rupture variqueuse = Tamponnement mécanique temporaire puis TIPS d'urgence."
  },
  {
    "id": "q-cas-hd-4",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Un patient de 76 ans hypertendu, sans trouble du transit antérieur, présente brutalement sans aucune douleur abdominale deux émissions successives de sang rouge vif abondant avec caillots par l'anus (rectorragies franches). À l'examen clinique : apyrétique, TA 120/75 mmHg, pouls 85 bpm, abdomen totalement souple, indolore, sans masse ni organomégalie. Le toucher rectal retrouve des traces de sang rouge sans tumeur palpée. Après hémodynamique rassurante et préparation colique rapide, la coloscopie totale met en évidence une volumineuse diverticulose sigmoïdienne avec un diverticule contenant un caillot adhérent saignotant, sans autre lésion du côlon ni du rectum. Quel est le diagnostic et l'évolution naturelle la plus fréquente ?",
    "options": [
      "Cancer du côlon droit sténosant ; colectomie immédiate",
      "Hémorragie diverticulaire colique aiguë ; l'arrêt du saignement est spontané dans près de 80% des cas",
      "Maladie de Crohn colique fulgurante ; corticothérapie",
      "Infarctus mésentérique complet ; laparotomie",
      "Fissure anale surinfectée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hémorragie diverticulaire est la 1ère cause d'hémorragie basse aiguë chez le sujet âgé. Elle est caractérisée par son caractère indolore et brutal et son évolution spontanément favorable vers l'arrêt du saignement dans 75-80% des cas.",
    "clinicalPearl": "Hémorragie diverticulaire = 1ère cause de rectorragie massive chez le sujet âgé (arrêt spontané dans 80% des cas)."
  },
  {
    "id": "q-cas-hd-5",
    "courseId": "crs-gastro-hemorragies-digestives",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Un homme de 62 ans coronarien avec stent actif récent sous bithérapie antiplaquettaire (Aspirine + Clopidogrel) est hospitalisé pour méléna avec anémie à 7,2 g/dL. La FOGD visualise un ulcère duodénal Forrest IIa (vaisseau visible) traité par pose de deux clips métalliques avec succès et IPP forte dose IV. Comment devez-vous gérer la bithérapie antiplaquettaire chez ce patient coronarien à haut risque de thrombose de stent ?",
    "options": [
      "Arrêter définitivement et à vie toute aspirine et tout antiplaquettaire",
      "Maintenir l'Aspirine sans interruption (ou la reprendre dès 24-48h après contrôle de l'hémostase) et discuter la reprise du Clopidogrel le plus rapidement possible (dans les 3 à 5 jours) en accord avec le cardiologue",
      "Remplacer les antiplaquettaires par un traitement par héparine à forte dose",
      "Remplacer l'aspirine par des anti-inflammatoires non stéroïdiens",
      "Réaliser une gastrectomie prophylactique"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Chez un coronarien avec stent récent, l'interruption complète de l'aspirine majore dramatiquement la mortalité cardiovasculaire par thrombose de stent. L'aspirine ne doit pas être interrompue (ou reprise très précocement sous IPP), et le 2ème antiplaquettaire réintroduit dès stabilisation.",
    "clinicalPearl": "Stent coronarien récent : ne jamais interrompre l'aspirine durablement ; réintroduction précoce sous couverture par IPP."
  }
];

export const HEMORRAGIES_DIGESTIVES_RESOURCES: CourseResource[] = [
  {
    "id": "res-hd-summary",
    "courseId": "crs-gastro-hemorragies-digestives",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Hémorragies Digestives Hautes et Basses",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Hémorragies Digestives\n- **Définition** : Séparation par l'angle de Treitz (duodéno-jéjunal).\n- **Hémorragies Hautes (Hématémèse, Méléna)** :\n  - *Causes* : Ulcère gastro-duodénal (50%), Rupture de varices œsophagiennes/gastriques (HTP/cirrhose, 20-30%), Mallory-Weiss, œsophagite, cancer gastrique, Dieulafoy.\n  - *Prise en charge pré-endoscopique* : Stabilisation hémodynamique (2 VVP, cristalloïdes, transfusion restrictive Hb 7-9 g/dL).\n  - *Ulcère* : IPP forte dose IV (bolus 80 mg + 8 mg/h) ; FOGD à H12-H24 ; Forrest Ia, Ib, IIa = hémostase combinée (Adrénaline + Clips/Thermique).\n  - *Cirrhose* : Vasoactif immédiat (Terlipressine/Octréotide) + Ceftriaxone 1 g/j (7j) + Ligature élastique (LEVO) ; TIPS si échec.\n- **Hémorragies Basses (Rectorragies)** :\n  - Diverticule colique (indolore, arrêt spontané 80%), angiodysplasies (Heyde), colite ischémique/infectieuse/MICI, polypes/cancers, hémorroïdes.\n  - Toujours éliminer une hémorragie haute massive à débit rapide (FOGD si instabilité).",
    "author": "Faculté de Médecine - Collège de Gastroentérologie et Réanimation"
  },
  {
    "id": "res-hd-pearls",
    "courseId": "crs-gastro-hemorragies-digestives",
    "type": "Astuce",
    "title": "Règles d'Or & Pièges : Hémorragies Digestives",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Classification de Forrest** : Ia (jet), Ib (nappe), IIa (vaisseau visible) = geste d'hémostase endoscopique obligatoire.\n- ⚡ **Cirrhotique qui saigne** : Vasoactif (Terlipressine) + Ceftriaxone IV d'emblée SANS attendre la fibroscopie.\n- ⚡ **Transfusion restrictive** : cible 7 à 9 g/dL d'hémoglobine (évite le rebond de pression portale et la surmortalité).",
    "author": "Commission Pédagogique"
  }
];
