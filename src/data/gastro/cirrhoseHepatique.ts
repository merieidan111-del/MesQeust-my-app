import { Question, CourseResource } from '../../types/medical';

export const CIRRHOSE_HEPATIQUE_QUESTIONS: Question[] = [
  {
    "id": "q-cirr-01",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 1,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "La définition histologique rigoureuse et universelle de la cirrhose hépatique associe obligatoirement :",
    "options": [
      "Une stéatose microvésiculaire isolée sans nécrose",
      "Une atteinte diffuse du parenchyme associant nécrose hépatocytaire, fibrose mutilante annulaire et nodules de régénération",
      "Une dilatation congénitale des voies biliaires intra-hépatiques",
      "Une thrombose exclusive de l'artère hépatique",
      "Une prolifération bénigne de cellules de Kupffer"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La cirrhose est définie histologiquement par une désorganisation diffuse de l'architecture hépatique avec fibrose extensive annulaire délimitant des nodules hépatocytaires de régénération anormaux.",
    "clinicalPearl": "Définition anatomopathologique : Atteinte diffuse + Fibrose mutilante annulaire + Nodules de régénération."
  },
  {
    "id": "q-cirr-02",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 2,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quels sont les cinq paramètres constituant le score pronostique de Child-Pugh évaluant la sévérité de la cirrhose ?",
    "options": [
      "Âge, glycémie, créatinine, ALAT, sodium",
      "Bilirubine totale, Albumine sérique, Taux de prothrombine (TP) ou INR, Ascite, Encéphalopathie hépatique",
      "Plaquettes, hémoglobine, urée, CRP, ferritinémie",
      "Pression portale, taille de la rate, AFP, kaliémie, ASAT",
      "Volume du foie, cholestérol, calcémie, triglycérides, gamma-GT"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le score de Child-Pugh combine 2 critères cliniques (ascite, encéphalopathie) et 3 critères biologiques (bilirubine, albumine, TP/INR). Classe A (5-6), B (7-9), C (10-15).",
    "clinicalPearl": "Mnémonique Child-Pugh (BATEA) : Bilirubine, Ascite, TP/INR, Encéphalopathie, Albumine."
  },
  {
    "id": "q-cirr-03",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 3,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle valeur seuil de gradient de pression veineuse hépatique (GPVH) définit l'hypertension portale cliniquement significative avec risque d'apparition de varices œsophagiennes et d'ascite ?",
    "options": [
      ">= 5 mmHg",
      ">= 10 mmHg",
      ">= 25 mmHg",
      ">= 2 mmHg",
      ">= 50 mmHg"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le gradient normal est de 1 à 5 mmHg. L'HTP est définie pour un GPVH > 5 mmHg, mais elle ne devient cliniquement significative (varices, ascite) qu'à partir de 10 mmHg. Le risque de rupture variqueuse augmente au-delà de 12 mmHg.",
    "clinicalPearl": "GPVH normal : 1-5 mmHg. HTP significative : >= 10 mmHg. Risque de rupture variqueuse : >= 12 mmHg."
  },
  {
    "id": "q-cirr-04",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 4,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen non invasif d'élastométrie impulsionnelle ultrasonore (FibroScan) permet d'évaluer la dureté hépatique pour diagnostiquer une cirrhose ?",
    "options": [
      "L'échographie Doppler simple",
      "L'élastométrie hépatique (FibroScan) mesurée en kiloPascals (kPa)",
      "La tomodensitométrie hélicoïdale avec temps portal",
      "La cholangio-IRM",
      "Le transit baryté œso-gastro-duodénal"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le FibroScan mesure l'élasticité hépatique (en kPa). Une valeur > 12,5 à 14 kPa évoque très fortement une cirrhose hépatique constituée.",
    "clinicalPearl": "FibroScan hépatique : > 12.5 - 14 kPa = cirrhose hépatique (stade F4)."
  },
  {
    "id": "q-cirr-05",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 5,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel signe cutanéo-muqueux est le plus caractéristique de l'insuffisance hépatocellulaire chronique chez le cirrhotique ?",
    "options": [
      "Érythème noueux prétibial",
      "Angiomes stellaires prédominant sur le territoire cave supérieur (visage, cou, thorax)",
      "Taches café-au-lait",
      "Vitiligo diffus",
      "Livedo reticularis"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Les angiomes stellaires (surtout si > 5 et localisés au territoire de la veine cave supérieure), l'érythème palmaire, les ongles blancs de Terry et le fœtor hepaticus signent l'insuffisance hépatocellulaire.",
    "clinicalPearl": "Angiomes stellaires en territoire cave supérieur + érythème palmaire = Insuffisance hépatocellulaire."
  },
  {
    "id": "q-cirr-06",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 6,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel facteur de la coagulation permet de différencier avec certitude une insuffisance hépatocellulaire d'une carence en vitamine K ?",
    "options": [
      "Le facteur II",
      "Le facteur VII",
      "Le facteur V (proaccélérine)",
      "Le facteur IX",
      "Le facteur X"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le facteur V est synthétisé par les hépatocytes et n'est PAS vitamine K-dépendant. Une baisse concomitante du TP et du facteur V affirme l'atteinte parenchymateuse hépatique sévère.",
    "clinicalPearl": "Facteur V bas = Insuffisance hépatocellulaire (non vitamine K-dépendant). Facteur V normal avec TP bas = Carence en vit K."
  },
  {
    "id": "q-cirr-07",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 7,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel examen de surveillance semestrielle systématique à vie est recommandé chez tout patient cirrhotique pour le dépistage précoce du carcinome hépatocellulaire (CHC) ?",
    "options": [
      "Scanner thoraco-abdomino-pelvien avec injection",
      "Échographie hépatique tous les 6 mois (associée au dosage de l'alpha-fœtoprotéine)",
      "Bili-IRM annuelle",
      "Endoscopie œsogastrique trimestrielle",
      "Biopsie hépatique annuelle"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le dépistage systématique du CHC repose sur une échographie abdominale réalisée tous les 6 mois par un opérateur expérimenté, souvent couplée au dosage de l'AFP.",
    "clinicalPearl": "Surveillance cirrhose : Échographie abdominale semestrielle (tous les 6 mois) à vie."
  },
  {
    "id": "q-cirr-08",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 8,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel critère biologique formel définit l'Infection Spontanée du Liquide d'Ascite (ISLA ou péritonite bactérienne spontanée) à la ponction exploratrice ?",
    "options": [
      "Taux de polynucléaires neutrophiles (PNN) > 250 / mm³ dans le liquide d'ascite",
      "Taux de lymphocytes > 500 / mm³",
      "Protéinorachie > 30 g/L",
      "Bactériologie positive avec examen direct positif obligatoire",
      "Taux d'hématies > 10 000 / mm³"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le diagnostic d'ISLA repose sur un compte de PNN > 250/mm³ dans le liquide d'ascite, justifiant une antibiothérapie probabiliste immédiate sans attendre la culture (souvent monomicrobienne à BGN).",
    "clinicalPearl": "ISLA / Péritonite bactérienne spontanée : PNN > 250/mm³ dans le liquide d'ascite = Antibiothérapie immédiate !"
  },
  {
    "id": "q-cirr-09",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 9,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle antibiothérapie de première intention est recommandée en urgence devant une infection spontanée du liquide d'ascite (ISLA) ?",
    "options": [
      "Pénicilline G IV",
      "Céphalosporine de 3ème génération injectable (ex: Céfotaxime ou Ceftriaxone) pendant 5 à 7 jours",
      "Vancomycine per os",
      "Métronidazole seul",
      "Amoxicilline orale"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le traitement de référence de l'ISLA est une C3G parentérale (Céfotaxime 2g x 3/j ou Ceftriaxone 1 à 2g/j IV) associée à une perfusion d'albumine humaine pour prévenir le syndrome hépato-rénal.",
    "clinicalPearl": "ISLA : C3G injectable (Céfotaxime/Ceftriaxone) + perfusion d'albumine humaine (J1 et J3)."
  },
  {
    "id": "q-cirr-10",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 10,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Pourquoi perfuse-t-on de l'albumine humaine à J1 (1,5 g/kg) et J3 (1 g/kg) lors du traitement d'une ISLA chez un cirrhotique ?",
    "options": [
      "Pour traiter l'infection directement",
      "Pour prévenir la survenue d'un syndrome hépato-rénal et réduire la mortalité",
      "Pour corriger une anémie",
      "Pour alcaliniser les urines",
      "Pour faire remonter les plaquettes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La perfusion d'albumine à J1 et J3 réduit de manière prouvée l'incidence de l'insuffisance rénale aiguë (syndrome hépato-rénal) et diminue la mortalité globale liée à l'ISLA.",
    "clinicalPearl": "ISLA = C3G IV + Albumine IV (1,5 g/kg à J1, 1 g/kg à J3) pour protéger la fonction rénale."
  },
  {
    "id": "q-cirr-11",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 11,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge de l'ascite non compliquée chez le patient cirrhotique, quelle est la règle diététique initiale incontournable ?",
    "options": [
      "Régime hyposodé modéré (environ 2 à 4 g de NaCl/jour, soit 50-80 mmol de sodium/j)",
      "Restriction hydrique stricte systématique à moins de 200 ml/j",
      "Régime hyperprotéiné sans sel absolu",
      "Régime sans glucides",
      "Alimentation parentérale exclusive"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le traitement de base de l'ascite repose sur le régime désodé modéré (environ 2g de sodium, soit 5g de NaCl par jour). La restriction hydrique n'est indiquée qu'en cas d'hyponatrémie sévère (< 125 mmol/L).",
    "clinicalPearl": "Ascite cirrhotique : Régime désodé modéré (2-4 g sel/j). Restriction hydrique SEULEMENT si Na < 125 mmol/L."
  },
  {
    "id": "q-cirr-12",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 12,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle association de diurétiques est la plus classique pour traiter l'ascite cirrhotique récalcitrante au régime sans sel seul ?",
    "options": [
      "Furosémide seul à forte dose",
      "Spironolactone (anti-aldostérone) en 1ère ligne, associée si besoin au Furosémide (diurétique de l'anse)",
      "Hydrochlorothiazide en monothérapie",
      "Acétazolamide et Mannitol",
      "Amiloride seul"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La spironolactone (100 à 400 mg/j) est le diurétique de choix (hyperaldostéronisme secondaire). Si réponse insuffisante, on associe le furosémide (40 à 160 mg/j), en surveillant kaliémie et créatinine.",
    "clinicalPearl": "Diurétiques de l'ascite : Spironolactone (100 mg/j) +/- Furosémide (40 mg/j). Objectif : perte de 500g/j (ou 1kg/j si œdèmes)."
  },
  {
    "id": "q-cirr-13",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 13,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Lors d'une paracentèse évacuatrice d'ascite de gros volume (> 5 litres), quelle compensation intraveineuse est obligatoire pour prévenir le dysfonctionnement circulatoire post-ponction ?",
    "options": [
      "Perfusion de sérum physiologique au même volume",
      "Perfusion d'albumine humaine à 20% à raison de 8 g par litre d'ascite évacué au-delà du 5ème litre",
      "Perfusion de plasma frais congelé (PFC)",
      "Injection de furosémide IV",
      "Perfusion de culots globulaires"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Pour éviter l'hypovolémie efficace brutale et l'insuffisance rénale, toute paracentèse > 5 L nécessite une expansion volémique par albumine à 20% (environ 8 g d'albumine par litre d'ascite retiré).",
    "clinicalPearl": "Ponction d'ascite > 5 Litres = Albumine à 20% IV (8 g par litre extrait) systématique."
  },
  {
    "id": "q-cirr-14",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 14,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical d'urgence est indiqué dès la suspicion d'hémorragie digestive par rupture de varices œsophagiennes chez un cirrhotique ?",
    "options": [
      "Héparine sodique IV",
      "Vasoactif splanchnique précoce (Terlipressine, Somatostatine ou Octréotide) associé à une antibiothérapie prophylactique par Ceftriaxone",
      "Inhibiteurs calciques à forte dose",
      "Bétabloquants IV en bolus",
      "Diurétiques de l'anse à forte dose"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La prise en charge précoce comprend un agent vasoactif réduisant la pression portale (Terlipressine/Octréotide/Somatostatine) dès l'admission, une antibiothérapie prophylactique (Ceftriaxone 1g/j pour 7j), et la ligature endoscopique dans les 12h.",
    "clinicalPearl": "Rupture de VO : Vasoactif (Terlipressine) + Antibiothérapie prophylactique (C3G) + Ligature endoscopique < 12h."
  },
  {
    "id": "q-cirr-15",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 15,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prophylaxie primaire de l'hémorragie par rupture de varices œsophagiennes de taille moyenne à grande (grade II ou III), quelles options thérapeutiques sont recommandées ?",
    "options": [
      "Anticoagulation préventive",
      "Bêtabloquants non cardiosélectifs (Propranolol, Nadolol, Carvédilol) OU Ligature élastique des varices œsophagiennes",
      "Chirurgie de dérivation porto-cave d'emblée",
      "Dérivés nitrés en monothérapie",
      "Transplantation hépatique urgente"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En prophylaxie primaire des VO grade II/III, on préconise soit les bêtabloquants non cardiosélectifs (propranolol/carvédilol) avec titration sur la FC, soit la ligature élastique itérative.",
    "clinicalPearl": "Prophylaxie primaire rupture VO grade II/III = Bêtabloquant non cardiosélectif (Propranolol/Carvédilol) OU Ligature endoscopique."
  },
  {
    "id": "q-cirr-16",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 16,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel facteur déclenchant est le plus fréquemment retrouvé à l'origine d'un épisode d'encéphalopathie hépatique chez le cirrhotique ?",
    "options": [
      "L'exercice musculaire",
      "Une hémorragie digestive haute (digestion du sang apportant une surcharge d'azote et ammoniac) ou une infection (ISLA, pneumopathie)",
      "La consommation d'eau hypotonique",
      "L'arrêt des diurétiques",
      "L'exposition au soleil"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'hémorragie digestive (charges azotées coliques) et les infections sont les 2 principales causes déclenchantes de l'encéphalopathie hépatique, suivies de la constipation, la déshydratation et les sédatifs/benzodiazépines.",
    "clinicalPearl": "Facteurs déclenchants de l'encéphalopathie hépatique : Hémorragie digestive, Infection, Déshydratation, Constipation, Sédatifs."
  },
  {
    "id": "q-cirr-17",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 17,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical de première intention est administré pour diminuer la production et l'absorption digestive d'ammoniac dans l'encéphalopathie hépatique ?",
    "options": [
      "Charbon actif en comprimés",
      "Disaccharide non absorbable : Lactulose (ou Lactitol) par voie orale ou en lavement, associé si besoin à la Rifaximine",
      "Antibiotiques aminosides IV",
      "Mannitol à 20%",
      "L-dopa"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le Lactulose acidifie la lumière colique (convertit NH3 en NH4+ non absorbable) et accélère le transit. La rifaximine (antibiotique non absorbable) est utilisée en adjuvant pour réduire la flore ammoniogénique.",
    "clinicalPearl": "Encéphalopathie hépatique = Traiter le facteur déclenchant + Lactulose (viser 2-3 selles molles/j) +/- Rifaximine."
  },
  {
    "id": "q-cirr-18",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 18,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle complication rénale hémodynamique fonctionnelle gravissime de la cirrhose est caractérisée par une vasoconstriction rénale extrême sans lésion organique du parenchyme rénal ?",
    "options": [
      "La nécrose tubulaire aiguë",
      "La glomérulonéphrite membrano-proliférative",
      "Le syndrome hépato-rénal (SHR)",
      "La lithiase urique obstructive",
      "La pyélonéphrite aiguë"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le syndrome hépato-rénal (SHR-AKI) est une insuffisance rénale aiguë fonctionnelle induite par une vasodilatation splanchnique massive entraînant une vasoconstriction corticale rénale réflexe intense, non corrigée par l'expansion volémique par albumine.",
    "clinicalPearl": "Syndrome hépato-rénal (SHR) = Insuffisance rénale fonctionnelle réfractaire au remplissage par albumine chez un cirrhotique."
  },
  {
    "id": "q-cirr-19",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 19,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel traitement médical spécifique d'urgence associe-t-on pour lever la vasoconstriction rénale dans le syndrome hépato-rénal ?",
    "options": [
      "Furosémide et IEC",
      "Vasoconstricteur systémique/splanchnique (Terlipressine ou Noradrénaline) combiné à des perfusions d'albumine humaine",
      "Dialyse péritonéale immédiate seule",
      "AINS à forte dose",
      "Bêtabloquants IV"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le traitement médical du SHR repose sur la Terlipressine (ou Noradrénaline en réanimation) associée à l'albumine intraveineuse (1 g/kg à J1 puis 20-40 g/j), dans l'attente d'une transplantation hépatique.",
    "clinicalPearl": "Traitement du syndrome hépato-rénal = Terlipressine IV + Albumine humaine IV."
  },
  {
    "id": "q-cirr-20",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 20,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans l'évaluation de la cirrhose en vue d'une transplantation hépatique, quel score basé sur la bilirubine, l'INR, la créatinine (et le sodium) est utilisé pour attribuer la priorité de greffe ?",
    "options": [
      "Score de Glasgow",
      "Score MELD (Model for End-Stage Liver Disease)",
      "Score de Ranson",
      "Score de Blatchford",
      "Score de Balthazar"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le score MELD (calculé à partir de la créatinine, de la bilirubine et de l'INR, avec variante MELD-Na) est le score objectif continu de référence utilisé mondialement pour allouer les greffons hépatiques.",
    "clinicalPearl": "Score MELD = Bilirubine, INR, Créatinine (+/- Na) = Détermine la priorité d'attribution des greffons hépatiques."
  },
  {
    "id": "q-cirr-21",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 21,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quel syndrome pulmonaire est défini chez le cirrhotique par une hypoxémie artérielle induite par des dilatations vasculaires intra-pulmonaires, aggravée en position debout (platypnée-orthodéoxie) ?",
    "options": [
      "L'hypertension porto-pulmonaire",
      "Le syndrome hépato-pulmonaire (SHP)",
      "L'embolie pulmonaire massive",
      "L'asthme cardiaque",
      "La broncho-pneumopathie chronique obstructive"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Le syndrome hépato-pulmonaire associe cirrhose hépatique, dilatations vasculaires micro-artériolaires intrapulmonaires et hypoxémie avec platypnée-orthodéoxie (l'hypoxie s'aggrave au passage en position debout).",
    "clinicalPearl": "Syndrome hépato-pulmonaire = Dilatations vasculaires intrapulmonaires + Platypnée-orthodéoxie (guéri par la greffe hépatique)."
  },
  {
    "id": "q-cirr-22",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 22,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle anomalie hématologique périphérique est la conséquence la plus fréquente de la splénomégalie congestive d'hypertension portale chez le cirrhotique ?",
    "options": [
      "Une thrombocytose majeure (> 800 000/mm³)",
      "Une polyglobulie",
      "Une thrombopénie d'hypersplénisme (souvent associée à une leucopénie modérée)",
      "Une éosinophilie massive",
      "Une agranulocytose complète"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "L'hypersplénisme secondaire à la stase portale entraîne une séquestration splénique des éléments figurés du sang, se manifestant typiquement par une thrombopénie isolée ou une bicytopénie (plaquettes + leucocytes).",
    "clinicalPearl": "Hypersplénisme portal = Thrombopénie modérée (souvent 50 000 - 100 000/mm³) et leucopénie."
  },
  {
    "id": "q-cirr-23",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 23,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Chez un patient cirrhotique ayant une ascite réfractaire aux fortes doses de diurétiques ou des récidives hémorragiques variqueuses incontrôlables, quelle intervention radiologique de dérivation portale intrahépatique peut être proposée ?",
    "options": [
      "La pose d'un TIPS (Transjugular Intrahepatic Portosystemic Shunt)",
      "Une artériographie coronaire",
      "Une néphrostomie percutanée",
      "Une embolisation splénique totale",
      "Une sphinctérotomie endoscopique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Le TIPS (shunt porto-systémique intrahépatique par voie transjugulaire) est une prothèse mise entre une branche portale et une veine sus-hépatique pour décomprimer l'arbre portal en cas d'ascite réfractaire ou récidive hémorragique.",
    "clinicalPearl": "TIPS = Shunt porto-systémique intrahépatique transjugulaire = Traitement de l'ascite réfractaire et des récidives de rupture de varices."
  },
  {
    "id": "q-cirr-24",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 24,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Dans la prise en charge d'un patient cirrhotique sous bêtabloquants non cardiosélectifs en prophylaxie de rupture variqueuse, quel est l'objectif clinique de fréquence cardiaque au repos ?",
    "options": [
      "FC entre 75 et 85 bpm",
      "FC entre 55 et 60 battements par minute (ou diminution de 25% de la FC basale)",
      "FC < 40 bpm",
      "FC > 100 bpm",
      "Pas de cible de fréquence cardiaque"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "L'efficacité hémodynamique des bêtabloquants (propranolol/nadolol) est évaluée sur la réduction de la fréquence cardiaque au repos, avec une cible de 55-60 bpm sans baisse excessive de la pression artérielle.",
    "clinicalPearl": "Cible Propranolol dans l'HTP : Fréquence cardiaque au repos entre 55 et 60 bpm."
  },
  {
    "id": "q-cirr-25",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 25,
    "type": "QCM",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Standard",
    "questionText": "Quelle est la seule thérapeutique curative définitive de la cirrhose hépatique terminale (Child C ou MELD élevé) ?",
    "options": [
      "L'antibiothérapie au long cours",
      "La transplantation hépatique (greffe de foie)",
      "La corticothérapie à forte dose",
      "La résection hépatique subtotale",
      "L'hémodialyse quotidienne"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "La transplantation hépatique est le seul traitement curatif de la cirrhose au stade terminal décompensé ou compliquée de carcinome hépatocellulaire répondant aux critères de Milan.",
    "clinicalPearl": "Transplantation hépatique = Seul traitement curatif de la cirrhose terminale et des décompensations réfractaires."
  },
  {
    "id": "cas-cirr-01",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 26,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Un homme de 54 ans, aux antécédents d'éthylisme chronique sévère (100 g/j pendant 25 ans), consulte pour une augmentation rapide du volume abdominal depuis 2 semaines. L'examen note une matité déclive des flancs, des œdèmes des membres inférieurs prenant le godet, des angiomes stellaires sur le thorax et un ictère conjonctival discret. Il n'a pas de fièvre. Quelle démarche diagnostique initiale urgente s'impose pour explorer cette ascite ?",
    "options": [
      "Débuter directement des diurétiques à forte dose sans ponction",
      "Réaliser une ponction d'ascite exploratrice systématique avec analyse cytologique, biochimique (protéines) et bactériologique",
      "Réaliser une laparoscopie exploratrice d'emblée",
      "Prescrire un scanner corps entier avec ingestion de baryte",
      "Attendre 15 jours sous régime sans sel avant tout examen"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Toute ascite inaugurale ou toute décompensation d'ascite impose une ponction exploratrice d'ascite immédiate pour éliminer une infection spontanée du liquide d'ascite (PNN), analyser les protéines (transsudat vs exsudat) et guider la prise en charge.",
    "clinicalPearl": "Toute ascite nouvelle ou décompensée impose une PONCTION D'ASCITE EXPLORATRICE immédiate."
  },
  {
    "id": "cas-cirr-02",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 27,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Le liquide d'ascite retiré est jaune citrin. La biologie retrouve : Protéines de l'ascite = 14 g/L, Leucocytes = 120/mm³ dont 15% de PNN (18 PNN/mm³). L'albumine sérique est à 24 g/L. Le gradient séro-ascitique d'albumine (GASA = Albumine sérique - Albumine ascite) est calculé à 16 g/L (> 11 g/L). Quelle est la conclusion ?",
    "options": [
      "Péritonite tuberculeuse exsudative",
      "Carcinose péritonéale maligne",
      "Ascite transsudative liée à une hypertension portale sans infection spontanée du liquide d'ascite",
      "Infection spontanée de l'ascite nécessitant des antibiotiques d'urgence",
      "Chylothorax péritonéal"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Un GASA >= 11 g/L affirme que l'ascite est liée à une hypertension portale (sensibilité > 97%). Le taux de PNN est < 250/mm³, éliminant une infection spontanée du liquide d'ascite.",
    "clinicalPearl": "GASA (Albumine sérum - ascite) >= 11 g/L = Hypertension portale (cirrhose, IC droite). PNN < 250 = pas d'infection."
  },
  {
    "id": "cas-cirr-03",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 28,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Trois jours plus tard, le patient présente une fièvre à 38,8°C avec des frissons, des douleurs abdominales diffuses et une somnolence diurne. Une nouvelle ponction d'ascite montre un liquide trouble avec 680 éléments/mm³ dont 78% de PNN (530 PNN/mm³). Quelle est la prise en charge thérapeutique immédiate ?",
    "options": [
      "Surveillance simple en attendant les résultats des hémocultures dans 48h",
      "Mise en route immédiate d'une antibiothérapie par Céfotaxime ou Ceftriaxone IV associée à une perfusion d'albumine humaine (1,5 g/kg à J1)",
      "Laparotomie en urgence pour péritonite chirurgicale",
      "Augmentation des diurétiques et restriction hydrique",
      "Arrêt de toute prise en charge et transfert en soins palliatifs"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "PNN > 250/mm³ = Infection spontanée du liquide d'ascite (urgence médicale). Le traitement repose sur une C3G parentérale sans attendre la culture, couplée à l'albumine IV pour prévenir le syndrome hépato-rénal.",
    "clinicalPearl": "PNN > 250/mm³ = C3G parentérale immédiate + Albumine IV (1.5 g/kg à J1 puis 1 g/kg à J3)."
  },
  {
    "id": "cas-cirr-04",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 29,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Le patient développe un flapping tremor (astérixis) franc bilatéral, un ralentissement psychomoteur et une inversion du rythme nycthéméral. À quel stade d'encéphalopathie hépatique (classification de West-Haven) se situe-t-il ?",
    "options": [
      "Stade 0 (subclinique)",
      "Stade 1 (troubles discrets de l'attention, inversion rythme sommeil, sans astérixis)",
      "Stade 2 (confusion modérée, léthargie, astérixis franc)",
      "Stade 4 (coma hépatique profond)"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Le stade 2 de West-Haven associe léthargie/somnolence, désorientation temporelle, astérixis (flapping tremor) franc et modifications comportementales.",
    "clinicalPearl": "Stade 2 d'encéphalopathie hépatique = Astérixis (flapping tremor) franc + ralentissement psychomoteur et désorientation."
  },
  {
    "id": "cas-cirr-05",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "questionNumber": 30,
    "type": "Cas Clinique",
    "module": "Hépato-Gastroentérologie",
    "academicYear": "4ème Année",
    "difficulty": "Difficile",
    "questionText": "Une fibroscopie œso-gastro-duodénale réalisée après stabilisation objective des varices œsophagiennes de stade III avec des signes rouges (« red spots »). Le patient n'a jamais saigné. Quelle mesure de prophylaxie primaire doit être instaurée ?",
    "options": [
      "Abstention thérapeutique complète",
      "Prescription d'un bêtabloquant non cardiosélectif (Propranolol) ou réalisation de séances de ligature élastique des varices œsophagiennes",
      "Pose prophylactique d'une sonde de Blakemore",
      "Sclérose endoscopique prophylactique",
      "Transfusion systématique d'un culot globulaire"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "En prophylaxie primaire des varices de grade II ou III (surtout avec signes rouges prédictifs de rupture imminente), la ligature élastique endoscopique ou les bêtabloquants non cardiosélectifs sont impératifs.",
    "clinicalPearl": "Varices grade III avec signes rouges : Ligature élastique itérative OU Bêtabloquants non cardiosélectifs (Propranolol)."
  }
];

export const CIRRHOSE_HEPATIQUE_RESOURCES: CourseResource[] = [
  {
    "id": "res-cirr-summary",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "type": "Fiche Synthèse",
    "title": "Synthèse Clinique : Cirrhose Hépatique & Décompensations",
    "contentMarkdown": "### 🎯 Points Clés : Cirrhose Hépatique\n- **Définition histologique** : fibrose annulaire + nodules de régénération + perte d'architecture lobulaire.\n- **Score de Child-Pugh** : Bilirubine, Albumine, TP/INR, Ascite, Encéphalopathie (Classe A 5-6, B 7-9, C 10-15).\n- **Complications majeures** :\n  1. Rupture de VO (urgence : vasoactif + antibiothérapie + ligature).\n  2. Ascite & Infection spontanée (PNN > 250/mm³ -> C3G + albumine).\n  3. Encéphalopathie hépatique (Lactulose + traitement du facteur déclenchant).\n  4. Syndrome hépato-rénal (Terlipressine + albumine).\n  5. Dépistage du CHC semestriel par échographie.",
    "author": "Collège National des Enseignants d’Hépatologie"
  },
  {
    "id": "res-cirr-tips",
    "courseId": "crs-gastro-cirrhose-hepatique",
    "type": "Astuce",
    "title": "Mnémoniques & Règles : Cirrhose",
    "contentMarkdown": "### 💡 Facteur V de la coagulation :\n- Le Facteur V n'est PAS vitamine K-dépendant.\n- Si TP bas avec Facteur V bas = Insuffisance hépatocellulaire.\n- Si TP bas avec Facteur V normal = Carence en vitamine K.",
    "author": "Faculté de Médecine"
  }
];
