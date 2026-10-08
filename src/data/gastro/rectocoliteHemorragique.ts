import { Question, CourseResource } from '../../types/medical';

export const RECTOCOLITE_HEMORRAGIQUE_QUESTIONS: Question[] = [
  {
    "id": "q-rch-01",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la caractéristique topographique fondamentale de l'atteinte digestive dans la rectocolite hémorragique (RCH) ?",
    "options": [
      "Atteinte discontinue de tout le tube digestif avec respect du rectum",
      "Atteinte constante du rectum s'étendant de façon continue, circonférentielle et ascendante vers le côlon d'amont sans intervalle de muqueuse saine, strictement limitée au côlon et au rectum",
      "Atteinte isolée du grêle",
      "Atteinte exclusive de la vésicule biliaire",
      "Atteinte péri-anale inaugurale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La RCH débute constamment au niveau du rectum (rectite) et progresse de façon continue sans aucun intervalle de muqueuse saine vers le côlon gauche ou tout le cadre colique (pancolite), sans jamais toucher le grêle (sauf iléite de reflux 'backwash').",
    "clinicalPearl": "RCH : atteinte rectale constante (100%), continue, ascendante, sans muqueuse saine intermédiaire, limitée au côlon."
  },
  {
    "id": "q-rch-02",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la profondeur pariétale des lésions tissulaires inflammatoires dans la RCH par opposition à la maladie de Crohn ?",
    "options": [
      "Atteinte transmurale traversant la séreuse",
      "Atteinte superficielle strictement limitée à la muqueuse et à la sous-muqueuse",
      "Atteinte mésentérique pure",
      "Atteinte ganglionnaire isolée",
      "Atteinte de la musculeuse sans toucher la muqueuse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Dans la RCH, l'inflammation est superficielle (muqueuse et sous-muqueuse), sans atteinte de la musculeuse (sauf dans la forme fulminante avec colectasie toxique).",
    "clinicalPearl": "RCH = inflammation superficielle (muqueuse/sous-muqueuse) ; Crohn = atteinte transmurale (toute la paroi)."
  },
  {
    "id": "q-rch-03",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel est le maître symptôme clinique révélateur le plus constant dans la rectocolite hémorragique ?",
    "options": [
      "Une dysphagie basse",
      "Le syndrome rectal associant rectorragies, émissions glairo-sanglantes afécales, épreintes et ténesme",
      "Une hématémèse massive",
      "Une douleur de l'hypochondre droit",
      "Une constipation atonique indolore"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le syndrome rectal (ténesme, épreintes, faux besoins) associé à des émissions sanglantes et glaireuses afécales (crachats rectaux) est le symptôme cardinal de la RCH présente dans plus de 95% des cas.",
    "clinicalPearl": "Maître symptôme de la RCH = Rectorragies + syndrome rectal (émissions glairo-sanglantes, faux besoins, épreintes)."
  },
  {
    "id": "q-rch-04",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quel aspect endoscopique caractéristique de la muqueuse colique est observé lors d'une poussée évolutive de RCH ?",
    "options": [
      "Des ulcérations aphtoïdes sur muqueuse saine",
      "Une muqueuse érythémateuse, granitée, friable, saignant spontanément ou au moindre contact de l'endoscope, avec disparition du réseau vasculaire sous-muqueux",
      "Des pseudomembranes confluentes dures",
      "Des villosités blanchâtres géantes",
      "Des varices sous-muqueuses"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'endoscopie montre une muqueuse congestive, dépolie, 'granitée', très friable (saignant au contact), avec perte du réseau vasculaire sous-muqueux, ulcérations superficielles et écoulement mucopus.",
    "clinicalPearl": "Endoscopie de la RCH : muqueuse granitée, friable, saignant au contact, perte du trame vasculaire (score de Mayo)."
  },
  {
    "id": "q-rch-05",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel score clinique et paraclinique de référence est universellement utilisé pour définir la gravité d'une poussée de RCH (poussée sévère aiguë) ?",
    "options": [
      "Score de Glasgow",
      "Critères de Truelove et Witts",
      "Score de Child-Pugh",
      "Score de Balthazar",
      "Score de Ranson"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les critères de Truelove et Witts définissent la poussée sévère : au moins 6 selles sanglantes par jour + au moins un critère systémique parmi : fièvre > 37,5°C, tachycardie > 90 bpm, anémie Hb < 10,5 g/dL, ou VS > 30 mm (ou CRP > 30 mg/L).",
    "clinicalPearl": "Poussée sévère de RCH (Truelove et Witts) = >= 6 selles sanglantes/j + 1 signe systémique (fièvre, pouls > 90, Hb < 10,5, CRP/VS élevée)."
  },
  {
    "id": "q-rch-06",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement de première intention en traitement d'attaque ET d'entretien est le gold standard des formes légères à modérées de RCH ?",
    "options": [
      "Les dérivés de l'acide 5-aminosalicylique (5-ASA / Mésalazine / Sulfasalazine) par voie orale et/ou rectale",
      "La corticothérapie générale continue à vie",
      "L'Infliximab d'emblée pour toute forme",
      "Le métronidazole oral",
      "La ciclosporine injectable"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les dérivés 5-ASA (Mésalazine per os et suppositoires/lavements rectaux) représentent le traitement de référence de première ligne pour induire et maintenir la rémission dans la RCH légère à modérée.",
    "clinicalPearl": "RCH légère à modérée : 5-ASA (Mésalazine) oral + topique rectal (traitement d'attaque et d'entretien de base)."
  },
  {
    "id": "q-rch-07",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle complication hépatobiliaire chronique inflammatoire auto-immune touchant les voies biliaires intra- et extra-hépatiques est très fortement associée à la RCH (près de 5% des RCH et 70-80% des CSP) ?",
    "options": [
      "La cirrhose biliaire primitive (CBP)",
      "La cholangite sclérosante primitive (CSP)",
      "La stéatose hépatique simple",
      "Le kyste hydatique du foie",
      "L'hépatite virale C"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La cholangite sclérosante primitive (CSP) est étroitement associée à la RCH (sténoses étagées des voies biliaires en chapelet à la bili-IRM, cholestase, risque élevé de cholangiocarcinome et de cancer colorectal).",
    "clinicalPearl": "Association majeure RCH + Cholangite Sclérosante Primitive (CSP) : bili-IRM annuelle et coloscopie annuelle."
  },
  {
    "id": "q-rch-08",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge d'une colite aiguë grave (CAG) de RCH hospitalisée en urgence, quel est le traitement médical d'induction de première ligne ?",
    "options": [
      "Mésalazine orale seule",
      "Corticothérapie intraveineuse à forte dose (Méthylprednisolone 0,8 à 1 mg/kg/j) associée à une héparinoprophylaxie préventive et mise à jeun",
      "Infliximab à double dose sans corticoïde",
      "Colectomie totale immédiate sans réanimation",
      "Laxatifs lubrifiants"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La CAG est une urgence vitale : corticothérapie intraveineuse à forte dose pendant 5 à 7 jours, HBPM préventive (risque thromboembolique majeur), surveillance quotidienne du diamètre colique (ASP/TDM).",
    "clinicalPearl": "Colite aiguë grave de RCH = Corticothérapie IV forte dose + HBPM préventive (évaluation de la réponse à J3-J5)."
  },
  {
    "id": "q-rch-09",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "À quel jour de traitement d'une colite aiguë grave sous corticoïdes IV évalue-t-on formellement la réponse selon le score de Lichtiger ou les critères de Travis (persistance de > 8 selles/j ou CRP > 45 mg/L) pour décider d'un traitement de sauvetage ?",
    "options": [
      "Au 1er jour (H12)",
      "Entre le 3ème et le 5ème jour (J3-J5)",
      "À la 4ème semaine",
      "Après 3 mois",
      "Au 15ème jour"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'évaluation précoce à J3-J5 (critères de Travis : > 8 selles/j ou CRP > 45 mg/L) identifie 85% d'échec des corticoïdes et impose un traitement de sauvetage médical (Infliximab ou Ciclosporine IV) ou chirurgical.",
    "clinicalPearl": "Colite aiguë grave : évaluation impérative à J3-J5 (Travis : selles > 8 ou CRP > 45 = échec corticoïdes -> sauvetage)."
  },
  {
    "id": "q-rch-10",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelles sont les deux options médicales de sauvetage validées en cas d'échec de la corticothérapie IV à J3-J5 d'une colite aiguë grave ?",
    "options": [
      "5-ASA à quadruple dose ou aspirine",
      "Infliximab (anti-TNF) OU Ciclosporine intraveineuse",
      "Azathioprine d'emblée ou méthotrexate",
      "Antibiotiques seuls ou probiotiques",
      "Interféron alpha ou chimio-embolisation"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'Infliximab (5 mg/kg aux semaines 0, 2 et 6) ou la Ciclosporine IV (2 mg/kg/j avec surveillance des taux résiduels) sont les deux traitements de sauvetage équivalents pour éviter la colectomie d'urgence.",
    "clinicalPearl": "Sauvetage médical de la colite aiguë grave à J3-J5 = Infliximab OU Ciclosporine IV."
  },
  {
    "id": "q-rch-11",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle complication colique aiguë redoutable d'une poussée sévère de RCH se traduit par une dilatation toxique du côlon transverse > 6 cm au scanner ou à l'ASP, menaçant de perforation diastatique stercorale ?",
    "options": [
      "Le volvulus du sigmoïde",
      "La colectasie aiguë (mégacôlon toxique)",
      "La polypose adénomateuse",
      "La colite collagène",
      "L'appendicite sous-séreuse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La colectasie aiguë (dilatation transverse > 6 cm avec amincissement pariétal et toxicité systémique) impose une décompression d'urgence et une colectomie subtotale si absence de régression rapide sous 48h.",
    "clinicalPearl": "Mégacôlon toxique (colectasie > 6 cm) = risque imminent de perforation -> Colectomie subtotale en urgence."
  },
  {
    "id": "q-rch-12",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle intervention chirurgicale CURATIVE permet de guérir définitivement la rectocolite hémorragique tout en rétablissant la continuité digestive sans stomie définitive ?",
    "options": [
      "Hémicolonectomie gauche simple",
      "Coloproctectomie totale avec anastomose iléo-anale et réservoir iléal en 'J' (AIA)",
      "Résection segmentaire du sigmoïde",
      "Intervention de Hartmann",
      "Vagotomie tronculaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'ablation complète de tout le côlon et de tout le rectum (coloproctectomie totale) éradique définitivement la maladie ; la confection d'un réservoir iléal en 'J' anastomosé à l'anus rétablit la continuité défécatoire par les voies naturelles.",
    "clinicalPearl": "Chirurgie curative de la RCH = Coloproctectomie totale avec Anastomose Iléo-Anale (AIA) sur réservoir en J."
  },
  {
    "id": "q-rch-13",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle complication inflammatoire spécifique du réservoir iléal survient chez près de 40 à 50% des patients opérés d'une anastomose iléo-anale pour RCH ?",
    "options": [
      "La pochite (pouchite)",
      "La diverticulite",
      "L'iléus biliaire",
      "L'ulcère de Dieulafoy",
      "La sténose pylorique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La pochite (inflammation aiguë ou chronique du réservoir iléal en J) se manifeste par une recrudescence du nombre de selles, des rectorragies et des crampes, traitée en première intention par Ciprofloxacine ou Métronidazole.",
    "clinicalPearl": "Pochite (pouchite) = inflammation du réservoir iléal en J après AIA (traitement : Ciprofloxacine / Métronidazole)."
  },
  {
    "id": "q-rch-14",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la RCH, quel profil sérologique auto-immun est typiquement retrouvé chez 60 à 70% des patients ?",
    "options": [
      "p-ANCA positifs (anticorps anti-cytoplasme des polynucléaires à fluorescence périnucléaire) et ASCA négatifs",
      "ASCA positifs et p-ANCA négatifs",
      "Anticorps anti-transglutaminase",
      "Anticorps anti-SSA et anti-SSB",
      "Facteur rhumatoïde"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "La présence de p-ANCA atypiques associée à la négativité des ASCA est le profil sérologique classique de la rectocolite hémorragique.",
    "clinicalPearl": "RCH = p-ANCA (+) dans 60-70% des cas, ASCA (-)."
  },
  {
    "id": "q-rch-15",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel facteur comportemental environnemental a un effet protecteur paradoxal bien documenté sur la survenue et les poussées de la RCH (les poussées survenant souvent après son arrêt) ?",
    "options": [
      "L'alcoolisme",
      "Le tabagisme (consommation de tabac)",
      "La sédentarité",
      "Le jeûne intermittent",
      "La consommation de café"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le tabagisme actif diminue paradoxalement l'incidence et la sévérité des poussées de RCH (le sevrage tabagique précipite souvent le début ou une rechute de la maladie), à l'inverse de la maladie de Crohn.",
    "clinicalPearl": "Le tabac est paradoxalement 'protecteur' dans la RCH (mais néfaste pour la santé globale) ; délétère dans Crohn."
  },
  {
    "id": "q-rch-16",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est la principale anomalie histologique élémentaire observée dans les cryptes coliques lors d'une poussée active de RCH ?",
    "options": [
      "Les granulomes tuberculoïdes caséeux",
      "Les abcès cryptiques à polynucléaires neutrophiles avec distorsion architecturale et déplétion mucipare",
      "L'atrophie villositaire totale",
      "La nécrose fibrinoïde des grosses artères",
      "L'infiltration lymphocytaire sous-séreuse exclusive"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'histologie de la RCH montre une distorsion des cryptes, des abcès au fond des cryptes remplis de PNN, une raréfaction des cellules à mucus (déplétion mucipare) et un infiltrat lymphoplasmocytaire de la muqueuse.",
    "clinicalPearl": "Histologie de la RCH : abcès cryptiques à PNN + distorsion architecturale des glandes + déplétion mucipare."
  },
  {
    "id": "q-rch-17",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quel est le risque de cancer à long terme justifiant une surveillance coloscopique régulière tous les 1 à 3 ans par chromoendoscopie à partir de 8 ans d'évolution de la RCH ?",
    "options": [
      "Le cancer de l'estomac",
      "L'adénocarcinome colorectal sur dysplasie muqueuse",
      "Le cancer du pancréas",
      "Le léiomyosarcome rectal",
      "Le lymphome de Burkitt"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le risque de cancer colorectal augmente avec la durée d'évolution (> 8 ans), l'étendue de la colite (pancolite) et l'association à une CSP, justifiant une surveillance par chromoendoscopie avec biopsies ciblées.",
    "clinicalPearl": "RCH étendue évoluant depuis > 8 ans = coloscopie de dépistage avec chromo-endoscopie tous les 1 à 3 ans."
  },
  {
    "id": "q-rch-18",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "En cas de découverte d'une dysplasie de haut grade invisible ou multifocale non résécable endoscopiquement lors d'une coloscopie de surveillance d'une RCH, quelle est l'attitude thérapeutique recommandée ?",
    "options": [
      "Simple surveillance dans 5 ans",
      "Coloproctectomie totale prophylactique en raison du risque très élevé de cancer colorectal synchrone ou métachrone méconnu",
      "Traitement par aspirine",
      "Chimiothérapie isolée",
      "Radiothérapie pelvienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La dysplasie de haut grade sur muqueuse plane ou non résécable dans la RCH s'associe à un cancer colorectal synchrone invasif dans plus de 40 à 50% des cas, imposant la coloproctectomie totale.",
    "clinicalPearl": "Dysplasie de haut grade non résécable sur RCH = Coloproctectomie totale indiquée."
  },
  {
    "id": "q-rch-19",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle molécule orale inhibitrice sélective des Janus kinases (JAK-inhibiteur, ex: Tofacitinib ou Filgotinib) est désormais disponible pour le traitement de la RCH modérée à sévère réfractaire ?",
    "options": [
      "Les anti-JAK (petites molécules orales)",
      "Les anti-IL-17",
      "Les interférons",
      "Les corticoïdes inhalés",
      "Les anti-histaminiques"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Les inhibiteurs des JAK (ex: tofacitinib, filgotinib, upadacitinib) sont des thérapies ciblées orales efficaces en induction et entretien dans la RCH après échec des biomédicaments.",
    "clinicalPearl": "Inhibiteurs des JAK (Upadacitinib, Tofacitinib, Filgotinib) : petites molécules orales indiquées dans la RCH réfractaire."
  },
  {
    "id": "q-rch-20",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle précaution infectieuse majeure doit être prise chez les patients sous anti-JAK ou anti-TNF en raison du risque accru de zona (réactivation de varicelle-zona) ?",
    "options": [
      "Vaccination préventive anti-zona (vaccin recombinant non vivant)",
      "Prise d'aspirine continue",
      "Isolement respiratoire permanent",
      "Éviction de tout produit laitier",
      "Changement de domicile"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le risque de zona étant nettement accru sous anti-JAK, la vaccination préventive par vaccin zona recombinant est fortement préconisée chez ces patients.",
    "clinicalPearl": "Anti-JAK dans la RCH : sur-risque de réactivation zostérienne (vaccination anti-zona recommandée)."
  },
  {
    "id": "q-rch-21",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Quelle atteinte oculaire inflammatoire peut compliquer la RCH lors des poussées et justifie un examen ophtalmologique d'urgence en présence d'un œil rouge douloureux ?",
    "options": [
      "La cataracte congénitale",
      "L'uvéite antérieure aiguë (iridocyclite) ou l'épisclérite",
      "Le décollement de rétine spontané",
      "La conjonctivite allergique simple",
      "Le glaucome congénital"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'épisclérite (parallèle à l'activité digestive) et l'uvéite antérieure (œil rouge douloureux avec baisse d'acuité visuelle, urgence ophtalmologique) sont les atteintes oculaires classiques des MICI.",
    "clinicalPearl": "Œil rouge douloureux chez un patient atteint de RCH = éliminer une uvéite antérieure aiguë en urgence."
  },
  {
    "id": "q-rch-22",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "La survenue d'un mégacôlon toxique chez un patient atteint de colite grave contre-indique formellement quel examen ?",
    "options": [
      "L'abdomen sans préparation (ASP)",
      "La coloscopie totale avec insufflation d'air (risque majeur de perforation colique diastatique)",
      "L'hémoculture",
      "L'ionogramme sanguin",
      "L'échographie cardiaque"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'endoscopie basse totale avec insufflation est formellement proscrite lors d'une poussée aiguë sévère ou d'une colectasie, car la fragilité et l'hyperpression conduiraient inévitablement à la perforation péritonéale.",
    "clinicalPearl": "Colite aiguë grave / Colectasie : coloscopie totale formellement contre-indiquée (rectosigmoïdoscopie prudente sans insufflation tolérée au début)."
  },
  {
    "id": "q-rch-23",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Pourquoi l'héparinoprophylaxie par HBPM à dose préventive est-elle formellement OBLIGATOIRE lors d'une poussée aiguë de RCH hospitalisée, même en présence de rectorragies abondantes ?",
    "options": [
      "Pour fluidifier le sang et arrêter le saignement",
      "Parce que les MICI en poussée induisent un état d'hypercoagulabilité majeur avec risque très élevé de thrombose veineuse profonde et d'embolie pulmonaire mortelle",
      "Pour remplacer les culots globulaires",
      "Pour traiter une colite à Clostridioides",
      "Pour stimuler la motricité intestinale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les poussées de MICI s'accompagnent d'un risque thromboembolique veineux multiplié par 3 à 4 : la présence de sang dans les selles n'est PAS une contre-indication à l'anticoagulation préventive par HBPM.",
    "clinicalPearl": "Poussée de RCH hospitalisée : HBPM préventive systématique obligatoire malgré les rectorragies (risque d'EP)."
  },
  {
    "id": "q-rch-24",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel germe bactérien toxinogène responsable de colite pseudomembraneuse doit être SYSTÉMATIQUEMENT recherché dans les selles par PCR/toxines lors de toute poussée de RCH ?",
    "options": [
      "Salmonella typhi",
      "Clostridioides difficile (et le Cytomégalovirus par biopsie rectale)",
      "Vibrio cholerae",
      "Helicobacter pylori",
      "Shigella sonnei"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La surinfection à Clostridioides difficile et la réactivation colique à CMV aggravent et miment une poussée de RCH résistante : recherche systématique des toxines/PCR C. difficile et PCR CMV sur biopsies.",
    "clinicalPearl": "Toute poussée de RCH : recherche systématique de Clostridioides difficile (selles) et CMV (biopsies si échec corticoïdes)."
  },
  {
    "id": "q-rch-25",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Quelle est l'évolution habituelle de la maladie après une coloproctectomie totale avec anastomose iléo-anale pour RCH ?",
    "options": [
      "Récidive colique immédiate",
      "Guérison définitive de la maladie digestive (la RCH ne récidive pas car tout le tissu colique et rectal a été retiré)",
      "Apparition systématique d'une maladie de Crohn",
      "Sténose de l'œsophage",
      "Cancer du foie obligatoire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La RCH étant une maladie strictement limitée au côlon et au rectum, la coloproctectomie totale confère une guérison digestive définitive, à l'exception des manifestations extra-intestinales axiales ou de la pochite.",
    "clinicalPearl": "Coloproctectomie totale = Guérison définitive de la RCH."
  },
  {
    "id": "q-cas-rch-1",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 1,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 1 : Une femme de 28 ans, non fumeuse, consulte pour des émissions rectales glairo-sanglantes afécales quotidiennes (5 à 6 par jour) associées à un ténesme et des épreintes depuis 4 semaines. Elle n'a pas de fièvre ni de douleurs abdominales intenses. La biologie montre : hémoglobine à 12,2 g/dL, CRP à 18 mg/L, calprotectine fécale à 750 µg/g. La coproculture et la recherche de toxines de Clostridioides difficile sont négatives. La rectosigmoïdoscopie retrouve une muqueuse rectale et sigmoïdienne uniformément érythémateuse, dépolie, friable et saignant spontanément au contact, sans intervalle de muqueuse saine, s'arrêtant de façon nette à 35 cm de la marge anale. Les biopsies confirment une colite ulcéreuse chronique active superficielle avec abcès cryptiques et déplétion en mucus. Quel est le diagnostic précis et le traitement de première ligne ?",
    "options": [
      "Maladie de Crohn colique ; corticothérapie générale forte dose d'emblée",
      "Rectocolite hémorragique (forme colite gauche / rectosigmoïdite) ; traitement de première intention associant 5-ASA (Mésalazine) par voie orale (2 à 3 g/j) et 5-ASA par voie rectale (lavement ou suppositoire 1 g/j)",
      "Colite ischémique aiguë ; héparine curative",
      "Cancer du rectum sténosant ; radiothérapie néoadjuvante",
      "Amibiase colique ; métronidazole seul"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'atteinte rectale continue ascendante avec syndrome rectal et muqueuse friable saignant au contact sans intervalle sain signe la RCH. Le traitement de référence de la poussée légère à modérée est l'association de 5-ASA oral et topique rectal (synergie démontrée).",
    "clinicalPearl": "RCH colite gauche modérée : 5-ASA oral (2-3 g/j) + 5-ASA rectal (1 g/j) = traitement optimal de première intention."
  },
  {
    "id": "q-cas-rch-2",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 2,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 2 : Un homme de 35 ans atteint de RCH pancolique connue est admis aux urgences pour une poussée sévère : 9 émissions sanglantes par 24h, température à 38,4°C, tachycardie à 110 bpm, pâleur intense, tension artérielle à 105/65 mmHg. Biologie : Hémoglobine à 8,9 g/dL, CRP à 85 mg/L, albumine à 28 g/L. L'ASP montre un côlon non dilaté (calibre < 4 cm). Quel est le diagnostic selon les critères de Truelove et Witts et quelle est la prise en charge immédiate en unité hospitalière ?",
    "options": [
      "Poussée bénigne ambulatoire sous mésalazine orale seule",
      "Colite aiguë grave (CAG) de RCH ; hospitalisation immédiate, mise à jeun, corticothérapie intraveineuse à forte dose (Méthylprednisolone 0,8 à 1 mg/kg/j), héparinothérapie préventive par HBPM, compensation hydro-électrolytique et surveillance médico-chirurgicale rapprochée",
      "Colectomie totale immédiate sans traitement médical préalable",
      "Prescription d'antidiarrhéiques type lopéramide à forte dose",
      "Antibiotiques oraux ambulatoires"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le patient remplit tous les critères d'une colite aiguë grave de Truelove et Witts (>= 6 selles sanglantes + fièvre + tachycardie + anémie + CRP élevée). Elle impose une hospitalisation d'urgence avec corticoïdes IV et HBPM préventive (risque thrombotique majeur). Les ralentisseurs du transit sont formellement contre-indiqués.",
    "clinicalPearl": "Colite aiguë grave de RCH : Hospitalisation d'urgence + Corticoïdes IV (Méthylprednisolone) + HBPM préventive."
  },
  {
    "id": "q-cas-rch-3",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 3,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 3 : Chez ce même patient hospitalisé pour colite aiguë grave, au 4ème jour (J4) de corticothérapie intraveineuse, il persiste 8 selles sanglantes par jour et la CRP reste très élevée à 60 mg/L (critères de Travis positifs prédisant un échec des corticoïdes dans 85% des cas). Le calibre colique reste normal à l'ASP. Quelle démarche thérapeutique de sauvetage doit être mise en œuvre sans tarder ?",
    "options": [
      "Poursuivre les corticoïdes IV seuls pendant 3 semaines supplémentaires",
      "Proposer un traitement médical de sauvetage par Infliximab (anti-TNF à 5 mg/kg) ou Ciclosporine IV, avec avis chirurgical conjoint d'alerte pour colectomie de sauvetage en cas d'absence de réponse rapide",
      "Arrêter tout traitement et réalimenter normalement",
      "Prescrire de la mésalazine en lavement seul",
      "Réaliser une coloscopie totale avec préparation vigoureuse"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'échec des corticoïdes à J3-J5 de la colite aiguë grave impose une ligne de sauvetage rapide par Infliximab ou Ciclosporine sous surveillance médico-chirurgicale conjointe pour ne pas retarder une colectomie salvatrice en cas d'aggravation.",
    "clinicalPearl": "Échec corticoïdes à J4-J5 (Travis) = Traitement médical de sauvetage par Infliximab ou Ciclosporine."
  },
  {
    "id": "q-cas-rch-4",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 4,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 4 : Un patient de 42 ans suivi pour colite aiguë grave de RCH développe brutalement à J5 une distension abdominale douloureuse majeure, une fièvre à 39,5°C avec prostration, une tension artérielle à 85/55 mmHg et une tachycardie à 130 bpm. L'auscultation abdominale retrouve un silence complet avec disparition des bruits hydro-aériques et défense épigastrique. Le cliché d'abdomen sans préparation (ASP) en décubitus dorsal montre une dilatation aérique impressionnante du côlon transverse mesuré à 7,8 cm de diamètre. Quel diagnostic posez-vous et quelle décision thérapeutique salvatrice s'impose en urgence ?",
    "options": [
      "Volvulus caecal ; détorsion endoscopique au tube de Faucher",
      "Colectasie aiguë (mégacôlon toxique) compliquant la RCH avec menace imminente de perforation ; indication chirurgicale formelle en urgence de colectomie subtotale avec iléostomie terminale et sigmoïdostomie (ou fermeture du moignon)",
      "Constipation réflexe ; lavement évacuateur",
      "Pancréatite aiguë modérée ; surveillance simple",
      "Appendicite aiguë simple ; appendicectomie isolée"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La dilatation du transverse > 6 cm associée à une toxicité générale sévère définit le mégacôlon toxique (colectasie aiguë), complication létale de la RCH. En l'absence de réponse immédiate ou en cas de menace de perforation, la colectomie subtotale d'urgence avec iléostomie est l'intervention de sauvetage.",
    "clinicalPearl": "Colectasie aiguë toxique de RCH (diamètre colique > 6 cm + sepsis) = Colectomie subtotale en extrême urgence."
  },
  {
    "id": "q-cas-rch-5",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "clinicalCaseNumber": 5,
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Concours Résidanat",
    "questionText": "Cas Clinique 5 : Un homme de 50 ans avec antécédent de RCH diagnostiquée il y a 12 ans présente lors de son bilan biologique de suivi une élévation isolée des phosphatases alcalines à 3,5 fois la normale et des gamma-GT à 4N. Il est asymptomatique sans ictère. La bili-IRM met en évidence des sténoses courtes multifocales alternant avec des dilatations sacciformes des voies biliaires intra- et extra-hépatiques réalisant un aspect typique en 'chapelet de perles'. Quel diagnostic hépato-biliaire associé posez-vous et quelle surveillance spécifique colique devez-vous instaurer ?",
    "options": [
      "Lithiase de la voie biliaire principale ; surveillance annuelle standard",
      "Cholangite sclérosante primitive (CSP) associée à la RCH ; surveillance coloscopique annuelle systématique avec chromo-endoscopie et biopsies étagées en raison du risque considérablement accru de cancer colorectal précoce",
      "Cirrhose biliaire primitive ; biopsie hépatique annuelle",
      "Hépatite médicamenteuse au paracétamol",
      "Cancer de la vésicule biliaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'aspect en chapelet à la bili-IRM confirme la Cholangite Sclérosante Primitive (CSP). L'association RCH + CSP multiplie de façon spectaculaire le risque de cancer colorectal et de cholangiocarcinome : la coloscopie de dépistage devient annuelle dès le diagnostic de CSP.",
    "clinicalPearl": "RCH associée à une Cholangite Sclérosante Primitive (CSP) = Coloscopie annuelle avec chromo-endoscopie obligatoire."
  }
];

export const RECTOCOLITE_HEMORRAGIQUE_RESOURCES: CourseResource[] = [
  {
    "id": "res-rch-summary",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Rectocolite Hémorragique (RCH)",
    "contentMarkdown": "### 🎯 Synthèse Clinique : Rectocolite Hémorragique (RCH)\n- **Topographie & Histologie** : Atteinte constante du rectum (100%), continue, ascendante, superficielle (muqueuse/sous-muqueuse), sans intervalle de muqueuse saine, strictement colique. Abcès cryptiques et déplétion en mucus.\n- **Clinique** : Syndrome rectal (rectorragies, émissions glairo-sanglantes afécales, épreintes, ténesme).\n- **Biologie** : p-ANCA (+) dans 60-70%, ASCA (-). Calprotectine fécale élevée.\n- **Endoscopie** : Muqueuse granitée, friable, saignant au contact, perte du dessin vasculaire (score de Mayo).\n- **Stratégie Thérapeutique** :\n  - *Poussée légère à modérée* : 5-ASA (Mésalazine) oral + topique rectal (lavement/suppositoire).\n  - *Poussée sévère (Truelove et Witts)* : Hospitalisation, Corticoïdes IV (Méthylprednisolone 0,8 mg/kg/j), HBPM préventive systématique. Évaluation à J3-J5 (Travis) -> sauvetage par Infliximab ou Ciclosporine IV.\n  - *Chirurgie curative* : Coloproctectomie totale avec anastomose iléo-anale sur réservoir en J.\n- **Complications majeures** : Colectasie aiguë (mégacôlon toxique > 6 cm), perforation, hémorragie massive, cancer colorectal sur dysplasie (> 8 ans), Cholangite Sclérosante Primitive (CSP).",
    "author": "Faculté de Médecine - Collège de Gastroentérologie"
  },
  {
    "id": "res-rch-pearls",
    "courseId": "crs-gastro-rectocolite-hemorragique",
    "type": "Astuce",
    "title": "Règles d'Or & Pièges : Rectocolite Hémorragique",
    "contentMarkdown": "### 💡 Pièges & Perles d'Examen\n- ⚡ **Poussée sévère hospitalisée** : HBPM préventive obligatoire malgré les rectorragies (hypercoagulabilité majeure).\n- ⚡ **Contre-indication formelle** : Jamais de coloscopie totale ni de ralentisseurs du transit lors d'une poussée sévère (risque de mégacôlon toxique).\n- ⚡ **Association CSP + RCH** : coloscopie de surveillance annuelle obligatoire dès le diagnostic de CSP.",
    "author": "Commission Pédagogique"
  }
];
