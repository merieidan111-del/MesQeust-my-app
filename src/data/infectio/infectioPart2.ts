import { Question, CourseResource } from '../../types/medical';

// Lesson 4: Ictères infectieux
export const INFECTIO_LESSON_4_QUESTIONS: Question[] = [
  {
    id: 'q-inf-4-01',
    courseId: 'crs-inf-4',
    questionNumber: 1,
    type: 'QCM',
    content: "Un patient présente un ictère franc, des urines claires, des selles normalement colorées et pas de prurit. La bilirubinémie totale est à 120 µmol/L. Quel mécanisme est le plus probable ?",
    options: [
      "A. Cholestase extra-hépatique par lithiase CBD",
      "B. Hépatite aiguë avec cholestase intra-hépatique",
      "C. Hémolyse avec hyperbilirubinémie non conjuguée",
      "D. Syndrome de Dubin-Johnson",
      "E. Obstruction tumorale de la voie biliaire principale"
    ],
    correctAnswers: [2],
    explanation: "Urines claires + selles normales + absence de prurit -> bilirubine non conjuguée (libre). L’hémolyse entraîne une surproduction de bilirubine libre, non filtrée par le rein (urines claires). L’ictère hémolytique typique associe pâleur, splénomégalie, LDH élevées.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-02',
    courseId: 'crs-inf-4',
    questionNumber: 2,
    type: 'QCM',
    content: "Devant un ictère fébrile avec troubles du comportement, astérixis, et flapping tremor, quel est le geste prioritaire ?",
    options: [
      "A. Échographie abdominale systématique",
      "B. Recherche d’une hémolyse par goutte épaisse",
      "C. Évaluation du TP, glycémie, et prise en charge en réanimation",
      "D. Sérodiagnostic de leptospirose",
      "E. Ponction d’ascite diagnostique"
    ],
    correctAnswers: [2],
    explanation: "Astérixis + troubles conscience = encéphalopathie hépatique, signe de gravité absolu d'insuffisance hépatocellulaire sévère nécessitant bilan d'hémostase (TP, facteur V), glycémie et réanimation.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-03',
    courseId: 'crs-inf-4',
    questionNumber: 3,
    type: 'QCM',
    content: "Un étudiant rentre du Burkina Faso sans chimioprophylaxie, présente depuis 48h une fièvre à 40°C, ictère, splénomégalie et troubles de conscience. Quel examen confirme le diagnostic en urgence ?",
    options: [
      "A. Sérologie palustre (IgM)",
      "B. Goutte épaisse et frottis sanguin",
      "C. Recherche d’antigènes solubles dans les urines",
      "D. PCR palustre (disponible en 48h)",
      "E. NFS avec formule leucocytaire"
    ],
    correctAnswers: [1],
    explanation: "Le paludisme grave (accès pernicieux) avec ictère hémolytique nécessite un diagnostic immédiat par goutte épaisse / frottis sanguin mince.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-04',
    courseId: 'crs-inf-4',
    questionNumber: 4,
    type: 'QCM',
    content: "Un patient de 70 ans, lithiase vésiculaire connue, présente une triade de Charcot : fièvre, douleur HCD, ictère. À l’examen, hypotension et confusion. L’examen paraclinique initial le plus pertinent est :",
    options: [
      "A. Bili-IRM",
      "B. Échographie abdominale + NFS + CRP + hémocultures",
      "C. Angio-TDM abdominal",
      "D. CPRE diagnostique",
      "E. Sérologie virale hépatite A"
    ],
    correctAnswers: [1],
    explanation: "L’angiocholite est une urgence médico-chirurgicale (pentade de Reynolds). L’échographie abdominale en urgence recherche une dilatation des voies biliaires et une lithiase.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-05',
    courseId: 'crs-inf-4',
    questionNumber: 5,
    type: 'QCM',
    content: "Un éleveur de porcs présente une fièvre élevée, conjonctivite injectée, myalgies des mollets, ictère et oligurie. Quelle est la complication rénale typique de cette leptospirose ?",
    options: [
      "A. Glomérulonéphrite rapidement progressive",
      "B. Nécrose tubulaire aiguë avec hypokaliémie",
      "C. Insuffisance rénale aiguë vasculaire",
      "D. Syndrome de Fanconi",
      "E. Pyélonéphrite emphysémateuse"
    ],
    correctAnswers: [1],
    explanation: "Leptospira interrogans cause une néphrite interstitielle et une nécrose tubulaire aiguë avec oligurie et hypokaliémie initiale évocatrice (maladie de Weil).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-4-06',
    courseId: 'crs-inf-4',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans une hépatite virale aiguë (VHA), quel profil biologique est le plus évocateur ?",
    options: [
      "A. ASAT/ALAT normales, PAL très élevées",
      "B. ALAT > 10 N, PAL peu augmentées, TP normal ou modérément diminué",
      "C. Bilirubine conjuguée isolée, GGT normale",
      "D. Hyperleucocytose à PNN, CRP > 150",
      "E. Augmentation des GGT isolée"
    ],
    correctAnswers: [1],
    explanation: "Hépatite virale aiguë = cytolyse majeure prédominante sur les ALAT (> 10-20 N) avec cholestase modérée.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-07',
    courseId: 'crs-inf-4',
    questionNumber: 7,
    type: 'QCM',
    content: "Lequel de ces éléments N’EST PAS un signe de gravité immédiat devant un ictère infectieux ?",
    options: [
      "A. Hypotension artérielle",
      "B. Purpura thrombopénique",
      "C. Encéphalopathie hépatique",
      "D. Prurit cholestatique isolé",
      "E. Oligoanurie"
    ],
    correctAnswers: [3],
    explanation: "Le prurit, bien que gênant, n’est pas un signe de gravité mettant en jeu le pronostic vital, contrairement au choc, encéphalopathie, IRA ou purpura.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-08',
    courseId: 'crs-inf-4',
    questionNumber: 8,
    type: 'QCM',
    content: "Un sepsis à Clostridium perfringens se manifeste typiquement par un ictère hémolytique. Quel contexte est le plus évocateur ?",
    options: [
      "A. Post-partum ou post-chirurgie abdomino-pelvienne",
      "B. Consommation d’eau de puits contaminée",
      "C. Morsure de tique",
      "D. Vaccination récente",
      "E. Transfusion de concentrés globulaires"
    ],
    correctAnswers: [0],
    explanation: "Clostridium perfringens est un anaérobie responsable d'infections post-avortement ou post-chirurgicales pelviennes avec hémolyse intravasculaire massive par la toxine alpha.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-09',
    courseId: 'crs-inf-4',
    questionNumber: 9,
    type: 'QCM',
    content: "Quel paramètre biologique est le meilleur reflet de la fonction hépatocellulaire et un élément clé pour décider d’une transplantation ?",
    options: [
      "A. Taux de bilirubine libre",
      "B. Taux de prothrombine (TP) / Facteur V",
      "C. Transaminases ASAT",
      "D. Gamma-GT",
      "E. Albuminémie"
    ],
    correctAnswers: [1],
    explanation: "Le TP et le facteur V (< 50%) avec encéphalopathie définissent l'hépatite fulminante.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-10',
    courseId: 'crs-inf-4',
    questionNumber: 10,
    type: 'QCM',
    content: "La fièvre jaune (yellow fever) provoque un ictère avec hémorragies. Quel est le vecteur et la mesure préventive majeure ?",
    options: [
      "A. Moustique Anophèle – chimioprophylaxie",
      "B. Tique – vaccination antibrucellique",
      "C. Moustique Aedes aegypti – vaccination 17D",
      "D. Puces des rats – antibiotiques",
      "E. Phlébotome – répulsifs cutanés"
    ],
    correctAnswers: [2],
    explanation: "La fièvre jaune est une arbovirose transmise par Aedes aegypti prévenue efficacement par le vaccin vivant atténué 17D.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-11',
    courseId: 'crs-inf-4',
    questionNumber: 11,
    type: 'QCM',
    content: "Une patiente se plaint de prurit intense, urines foncées, selles argileuses. Bilirubine conjuguée élevée, PAL x5. L’échographie montre des voies biliaires non dilatées. Quelle cause est la plus probable ?",
    options: [
      "A. Lithiase de la voie biliaire principale",
      "B. Tumeur de la tête du pancréas",
      "C. Cholestase intra-hépatique (médicamenteuse, hépatite virale)",
      "D. Hémolyse sévère",
      "E. Syndrome de Gilbert"
    ],
    correctAnswers: [2],
    explanation: "Voies biliaires non dilatées à l'échographie = cholestase intra-hépatique (médicamenteuse, virale, sepsis).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-4-12',
    courseId: 'crs-inf-4',
    questionNumber: 12,
    type: 'QCM',
    content: "Dans le paludisme grave à Plasmodium falciparum, la composante de l’ictère est principalement :",
    options: [
      "A. Cholestatique par obstruction microcanaliculaire",
      "B. Mixte avec prédominance de bilirubine conjuguée",
      "C. Hémolytique (hyperbilirubinémie non conjuguée) et parfois cytolyse associée",
      "D. Pure rétention par déficit de conjugaison",
      "E. Liée à une carence en G6PD"
    ],
    correctAnswers: [2],
    explanation: "L'ictère palustre résulte de l'hémolyse intravasculaire avec hyperbilirubinémie à prédominance libre, parfois associée à une atteinte hépatocytaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-13',
    courseId: 'crs-inf-4',
    questionNumber: 13,
    type: 'QCM',
    content: "Une patiente en post-opératoire de cholécystectomie présente un ictère fébrile, frissons, PA 80/50. Quel est le traitement empirique le plus adapté en attendant l’antibiogramme ?",
    options: [
      "A. Amoxicilline seule PO",
      "B. Ceftriaxone + métronidazole",
      "C. Voriconazole",
      "D. Doxycycline + quinine",
      "E. Cotrimoxazole"
    ],
    correctAnswers: [1],
    explanation: "Sepsis biliaire post-opératoire à BGN et anaérobies : C3G (Ceftriaxone ou Céfotaxime) + métronidazole.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-14',
    courseId: 'crs-inf-4',
    questionNumber: 14,
    type: 'QCM',
    content: "Quel virus de l’hépatite est le plus souvent transmis par voie fécale-orale et peut causer des épidémies liées à l’eau contaminée ?",
    options: [
      "A. VHB",
      "B. VHC",
      "C. VHA et VHE",
      "D. VHD",
      "E. CMV"
    ],
    correctAnswers: [2],
    explanation: "VHA et VHE sont à transmission entérique féco-orale (eau et aliments souillés).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-15',
    courseId: 'crs-inf-4',
    questionNumber: 15,
    type: 'QCM',
    content: "Un patient avec fièvre, ictère, splénomégalie, et une anémie hémolytique auto-immune : quel agent infectieux est classiquement associé à ce tableau ?",
    options: [
      "A. Rickettsia conorii",
      "B. Mycoplasma pneumoniae",
      "C. Virus d’Epstein-Barr (MNI)",
      "D. Borrelia burgdorferi",
      "E. Salmonella typhi"
    ],
    correctAnswers: [2],
    explanation: "La mononucléose infectieuse (EBV) peut se compliquer d'anémie hémolytique auto-immune à anticorps froids (anti-i) et de cytolyse hépatique avec subictère.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-4-16',
    courseId: 'crs-inf-4',
    questionNumber: 16,
    type: 'QCM',
    content: "Devant une suspicion d’angiocholite avec échographie non contributive (doute sur lithiase), l’examen de référence pour visualiser les voies biliaires est :",
    options: [
      "A. Radiographie de l’abdomen sans préparation",
      "B. CPRE (cholangiopancréatographie rétrograde)",
      "C. IRM biliaire (bili-IRM) ou écho-endoscopie",
      "D. TDM sans injection",
      "E. Lavement baryté"
    ],
    correctAnswers: [2],
    explanation: "La bili-IRM non invasive et l'écho-endoscopie sont les examens de référence diagnostiques pour visualiser la voie biliaire principale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-17',
    courseId: 'crs-inf-4',
    questionNumber: 17,
    type: 'QCM',
    content: "Parmi ces étiologies, laquelle est une cause classique d’hépatite granulomateuse avec ictère cholestatique ?",
    options: [
      "A. Hépatite B aiguë",
      "B. Leptospirose",
      "C. Brucellose",
      "D. Paludisme",
      "E. Infection à VIH primaire"
    ],
    correctAnswers: [2],
    explanation: "La brucellose, la tuberculose et la fièvre Q provoquent des granulomes hépatiques (hépatite granulomateuse).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-4-18',
    courseId: 'crs-inf-4',
    questionNumber: 18,
    type: 'QCM',
    content: "Quel signe clinique parmi les suivants traduit une hypertension portale et non une insuffisance hépatocellulaire ?",
    options: [
      "A. Angiomes stellaires",
      "B. Encéphalopathie",
      "C. Ascite + circulation veineuse collatérale abdominale",
      "D. Ictère flamboyant",
      "E. Hippocratisme digital"
    ],
    correctAnswers: [2],
    explanation: "L'ascite et les voies de dérivation porto-cave (circulation collatérale abdominale) signent l'hypertension portale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-19',
    courseId: 'crs-inf-4',
    questionNumber: 19,
    type: 'QCM',
    content: "Un ictère fébrile avec syndrome typhoïdique (bradycardie relative, roséole, splénomégalie) évoque quelle bactérie ?",
    options: [
      "A. Rickettsia prowazekii",
      "B. Salmonella Typhi",
      "C. Coxiella burnetii",
      "D. Yersinia pestis",
      "E. Borrelia recurrentis"
    ],
    correctAnswers: [1],
    explanation: "La fièvre typhoïde (Salmonella Typhi) peut s'accompagner d'une hépatite typhique avec subictère fébrile.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-20',
    courseId: 'crs-inf-4',
    questionNumber: 20,
    type: 'QCM',
    content: "Un homme de 35 ans, fièvre, douleur HCD, hépatomégalie douloureuse, ictère modéré, et aspect échographique : lésion hypoéchogène unique. Le sérodiagnostic positif pour Entamoeba histolytica. Quel traitement spécifique ?",
    options: [
      "A. Métronidazole + paromomycine",
      "B. Quinine + doxycycline",
      "C. Ceftriaxone seule",
      "D. Albendazole",
      "E. Pentamidine"
    ],
    correctAnswers: [0],
    explanation: "Abcès amibien du foie : amoebicide tissulaire (Métronidazole) suivi d'un amoebicide de contact intraluminal (Paromomycine).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-21',
    courseId: 'crs-inf-4',
    questionNumber: 21,
    type: 'QCM',
    content: "La physiopathologie de l’ictère au cours du sepsis à BGN associe principalement :",
    options: [
      "A. Hémolyse mécanique",
      "B. Cholestase sans cytolyse majeure (cholestase septique fonctionnelle)",
      "C. Hépatite nécrosante massive",
      "D. Thrombose de la veine porte",
      "E. Destruction directe des hépatocytes par les endotoxines"
    ],
    correctAnswers: [1],
    explanation: "La cholestase septique résulte de l'inhibition des transporteurs canalaires de la bilirubine par les cytokines pro-inflammatoires (TNF-alpha, IL-6).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-4-22',
    courseId: 'crs-inf-4',
    questionNumber: 22,
    type: 'QCM',
    content: "Patient porteur d’une valve mécanique, fièvre, ictère hémolytique, anémie, splénomégalie. À quel mécanisme doit-on penser en premier ?",
    options: [
      "A. Hépatite virale C",
      "B. Endocardite infectieuse avec hémolyse mécanique sur dysfonction prothétique",
      "C. Paludisme viscéral",
      "D. Lithiase biliaire",
      "E. Thrombose de valve"
    ],
    correctAnswers: [1],
    explanation: "L'association fièvre + ictère hémolytique + prothèse valvulaire impose d'éliminer une endocardite sur prothèse avec fuite paraprothétique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-23',
    courseId: 'crs-inf-4',
    questionNumber: 23,
    type: 'QCM',
    content: "Une femme enceinte au 3ème trimestre se présente avec ictère fébrile, nausées, hépatomégalie. Le bilan montre cytolyse élevée, TP bas. Quel virus est particulièrement redoutable chez la femme enceinte (mortalité élevée jusqu'à 25%) ?",
    options: [
      "A. VHA",
      "B. VHB",
      "C. VHE (Virus de l'Hépatite E)",
      "D. VHC",
      "E. HSV (herpès)"
    ],
    correctAnswers: [2],
    explanation: "Le VHE entraîne chez la femme enceinte au 3ème trimestre un risque majeur d'hépatite fulminante mortelle dans 20-25% des cas.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-24',
    courseId: 'crs-inf-4',
    questionNumber: 24,
    type: 'QCM',
    content: "Un ictère avec bilirubinémie à 180 µmol/L, prédominance conjuguée, selles argileuses, prurit et urines foncées. Quel bilan enzymatique confirme la cholestase ?",
    options: [
      "A. ALAT élevées > 15N",
      "B. PAL et GGT élevées (≥ 3N)",
      "C. Haptoglobine effondrée",
      "D. LDH augmentées",
      "E. ASAT/ALAT < 1"
    ],
    correctAnswers: [1],
    explanation: "L'élévation conjointe des Phosphatases Alcalines (PAL) et des Gamma-GT confirme la cholestase biologique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-25',
    courseId: 'crs-inf-4',
    questionNumber: 25,
    type: 'QCM',
    content: "Quel traitement doit être administré en première intention devant un paludisme grave avec ictère et défaillance d’organe en Algérie (recommandations OMS) ?",
    options: [
      "A. Quinine IV",
      "B. Artésunate IV",
      "C. Cotrimoxazole PO",
      "D. Doxycycline seule",
      "E. Chloroquine IV"
    ],
    correctAnswers: [1],
    explanation: "L'Artésunate IV est le traitement de choix de première intention du paludisme grave selon l'OMS et le référentiel algérien.",
    difficulty: 'facile'
  },

  // 5 Cas cliniques Ictères
  {
    id: 'q-inf-4-cc1',
    courseId: 'crs-inf-4',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Patient de 28 ans, agriculteur à Blida, consulte pour fièvre à 39,5°C, céphalées intenses, myalgies des mollets, conjonctivite, puis apparition d’un ictère franc et d’une oligurie après avoir marché dans des eaux stagnantes suite à des inondations.\n\nQuelle est l’étiologie la plus probable ?",
    options: [
      "A. Hépatite A",
      "B. Fièvre typhoïde",
      "C. Leptospirose (maladie de Weil)",
      "D. Paludisme",
      "E. Brucellose"
    ],
    correctAnswers: [2],
    explanation: "Leptospirose (maladie de Weil). Triade : ictère, atteinte rénale oligurique, fièvre, conjonctivite injectée, myalgies des mollets + eaux souillées par urine de rongeurs.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-cc2',
    courseId: 'crs-inf-4',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Femme de 26 ans, 10 jours après accouchement par voie basse, se plaint de fatigue intense, vomissements, ictère sévère, puis confusion. TP = 28%, facteur V = 25%. Sérologies : IgM anti-HEV positives.\n\nQuel diagnostic retenez-vous ?",
    options: [
      "A. Hépatite B aiguë",
      "B. Hépatite E grave fulminante",
      "C. Syndrome de HELLP",
      "D. Stéatose aiguë gravidique",
      "E. Leptospirose"
    ],
    correctAnswers: [1],
    explanation: "Hépatite E en péripartum : risque élevé d'hépatite fulminante (TP et facteur V effondrés, encéphalopathie).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-cc3',
    courseId: 'crs-inf-4',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Homme 72 ans, antécédent de lithiase vésiculaire, douleur HCD, frissons, ictère, confusion, PA 85/50, T° 39,8°C. Hyperleucocytose à 18 000, CRP 240.\n\nQuelle est la conduite à tenir immédiate ?",
    options: [
      "A. CPRE en urgence seule sans réanimation",
      "B. Antibiothérapie IV large (C3G + métronidazole) + réhydratation/remplissage + échographie abdominale",
      "C. Cholécystectomie d’emblée sous cœlioscopie",
      "D. Antibiothérapie orale et surveillance ambulatoire",
      "E. Bili-IRM avant tout traitement"
    ],
    correctAnswers: [1],
    explanation: "Angiocholite sévère avec choc septique : antibiothérapie C3G + métronidazole + réanimation hémodynamique puis décompression biliaire urgente.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-cc4',
    courseId: 'crs-inf-4',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Jeune de 22 ans, retour du Cameroun sans prophylaxie, fièvre depuis 4j, ictère, pâleur, prostration, splénomégalie. Goutte épaisse positive à Plasmodium falciparum, parasitémie 8%.\n\nQuel traitement parentéral choisir ?",
    options: [
      "A. Quinine IV + doxycycline",
      "B. Artésunate IV",
      "C. Cotrimoxazole IV",
      "D. Méfloquine PO",
      "E. Chloroquine IV"
    ],
    correctAnswers: [1],
    explanation: "Artésunate IV en urgence (recommandation OMS et référentiel national pour le paludisme grave à P. falciparum).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-4-cc5',
    courseId: 'crs-inf-4',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Patient 45 ans, éleveur de moutons, fièvre vespérale, sueurs nocturnes, arthralgies, ictère modéré, hépatomégalie. Sérologie de Wright positive (1/320).\n\nQuelle est l'étiologie la plus probable de cet ictère ?",
    options: [
      "A. Fièvre Q",
      "B. Brucellose (hépatite granulomateuse brucellienne)",
      "C. Tuberculose miliaire",
      "D. Leishmaniose viscérale",
      "E. Rickettsiose"
    ],
    correctAnswers: [1],
    explanation: "Brucellose aiguë / subaiguë avec hépatite granulomateuse chez un éleveur (Wright positif à 1/320). Traitement par Doxycycline + Rifampicine ou Gentamicine.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_4_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-4-mindmap',
    courseId: 'crs-inf-4',
    title: 'Mind Map : Démarche devant un Ictère Infectieux',
    type: 'mindmap',
    content: `# Mind Map : Ictères Infectieux

## 1. Orientation Mécanistique
- **Bilirubine Libre (Non Conjuguée)** : Urines claires, selles normales, pas de prurit
  - *Hémolyse* : Paludisme grave, Clostridium perfringens, sepsis sévère, anémie hémolytique (EBV)
- **Bilirubine Conjuguée** : Urines foncées (« bière brune »), selles décolorées, prurit
  - *Cholestase extra-hépatique* : Angiocholite lithiasique (triade de Charcot, choc)
  - *Cholestase intra-hépatique / cytolyse* : Hépatites virales (A, B, C, D, E), Leptospirose (Weil), Brucellose, Abcès amibien

## 2. Urgences Vitales Immédiates
- **Paludisme grave** -> Goutte épaisse / frottis -> Artésunate IV
- **Angiocholite** -> Triade de Charcot -> C3G + Métronidazole + drainage biliaire
- **Leptospirose grave** -> Conjonctivite + myalgies + IRA -> Ceftriaxone / Pénicilline G
- **Hépatite fulminante** (VHB, VHE chez la femme enceinte) -> TP < 50%, encéphalopathie -> Réanimation`
  },
  {
    id: 'res-inf-4-astuces',
    courseId: 'crs-inf-4',
    title: 'Astuces & Mnémos : Ictères Fébrile',
    type: 'astuce',
    content: `### Mnémotechniques Ictères (Dr. LAIDANI.M)

1. **Causes d'Ictère Fébrile Grave : « PALUD-CHOLEPTO »**
   - **PALUD**isme grave
   - **CHOL**angite (Angiocholite)
   - **LEPTO**spirose (Maladie de Weil)
   - **H**épatite fulminante (VHE / VHB)
   - **S**epsis à Clostridium perfringens

2. **Libre vs Conjugué :**
   - *« Selles claires + urines foncées = Cholestase conjuguée »*
   - *« Selles normales + urines claires = Hémolyse libre »*`
  }
];

// Lesson 5: Accident d'Exposition au Sang (AES)
export const INFECTIO_LESSON_5_QUESTIONS: Question[] = [
  {
    id: 'q-inf-5-01',
    courseId: 'crs-inf-5',
    questionNumber: 1,
    type: 'QCM',
    content: "Parmi les situations suivantes, laquelle correspond à un Accident d’Exposition au Sang (AES) selon la définition officielle ?",
    options: [
      "A. Projection de salive sur une peau saine sans lésion",
      "B. Piqûre par aiguille de suture pleine sans sang",
      "C. Contact d’une muqueuse conjonctivale avec du sang sans effraction cutanée",
      "D. Morsure sans effraction cutanée par un patient",
      "E. Crachat sur une main gantée, gant intact"
    ],
    correctAnswers: [2],
    explanation: "Un AES inclut tout contact avec du sang ou liquide biologique contaminé par effraction cutanée (piqûre, coupure) OU projection sur muqueuse (œil, bouche) ou peau lésée.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-02',
    courseId: 'crs-inf-5',
    questionNumber: 2,
    type: 'QCM',
    content: "Quel est le risque moyen de séroconversion après une exposition percutanée au VHB chez un soignant non vacciné ?",
    options: [
      "A. 0,3%",
      "B. 3%",
      "C. 10%",
      "D. 30%",
      "E. 50%"
    ],
    correctAnswers: [3],
    explanation: "Le risque de séroconversion après piqûre pour le VHB atteint environ 30% chez le non-vacciné (contre 3% pour le VHC et 0,3% pour le VIH).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-03',
    courseId: 'crs-inf-5',
    questionNumber: 3,
    type: 'QCM',
    content: "Quel antiseptique est recommandé en première intention pour la désinfection d’une plaie après piqûre par aiguille ?",
    options: [
      "A. Alcool à 70°",
      "B. Polyvidone iodée seule (Bétadine)",
      "C. Eau oxygénée",
      "D. Dérivé chloré (Dakin ou eau de Javel diluée au 1/5)",
      "E. Chlorhexidine alcoolique"
    ],
    correctAnswers: [3],
    explanation: "L’antisepsie cutanée après AES repose sur un dérivé chloré (Dakin ou eau de Javel à 2,6% diluée au 1/5) pendant 5 minutes de contact.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-04',
    courseId: 'crs-inf-5',
    questionNumber: 4,
    type: 'QCM',
    content: "Un soignant se pique avec une aiguille creuse de prélèvement veineux contenant du sang d’un patient VIH+ avec charge virale élevée. Quel est le niveau de risque VIH ?",
    options: [
      "A. Risque faible",
      "B. Risque intermédiaire",
      "C. Risque important (justifiant TPE en urgence)",
      "D. Risque nul",
      "E. Risque modéré mais TPE non indiqué"
    ],
    correctAnswers: [2],
    explanation: "Aiguille creuse + sang visible + geste intravasculaire + charge virale élevée = risque important, indication formelle au TPE.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-05',
    courseId: 'crs-inf-5',
    questionNumber: 5,
    type: 'QCM',
    content: "Après un AES par piqûre, quel geste est formellement déconseillé ?",
    options: [
      "A. Nettoyer à l’eau et au savon",
      "B. Rincer abondamment",
      "C. Faire saigner la plaie par compression mécanique",
      "D. Antisepsie au Dakin pendant 5 minutes",
      "E. Déclarer l’accident du travail dans les 48h"
    ],
    correctAnswers: [2],
    explanation: "Il ne faut JAMAIS faire saigner la plaie par pression ou expression, car cela dilacère les tissus et favorise l'inoculation virale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-06',
    courseId: 'crs-inf-5',
    questionNumber: 6,
    type: 'QCM',
    content: "Délai maximal recommandé pour débuter la prophylaxie post-exposition (TPE) contre le VIH ?",
    options: [
      "A. 4 heures",
      "B. 12 heures",
      "C. 24 heures",
      "D. 48 heures (idéalement dans les 4 premières heures)",
      "E. 72 heures"
    ],
    correctAnswers: [3],
    explanation: "Le TPE doit être débuté le plus tôt possible, idéalement dans les 4 heures, et au plus tard dans les 48 heures.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-07',
    courseId: 'crs-inf-5',
    questionNumber: 7,
    type: 'QCM',
    content: "Pour le VHC après AES, quelle est la conduite juste ?",
    options: [
      "A. Prophylaxie par interféron immédiat",
      "B. Immunoglobulines spécifiques anti-VHC dans 72h",
      "C. Pas de traitement prophylactique, suivi sérologique à 3 et 6 mois",
      "D. Vaccination anti-VHC",
      "E. TPE identique au VIH"
    ],
    correctAnswers: [2],
    explanation: "Il n'existe ni vaccin ni prophylaxie post-exposition pour le VHC. La prise en charge repose sur le suivi sérologique et PCR (traitement précoce par AAD si séroconversion).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-08',
    courseId: 'crs-inf-5',
    questionNumber: 8,
    type: 'QCM',
    content: "Quelle est la posologie des immunoglobulines anti-VHB après AES chez un sujet non immunisé ?",
    options: [
      "A. 200 UI",
      "B. 500 UI en IM",
      "C. 1000 UI",
      "D. 1500 UI",
      "E. Dose poids-dépendante"
    ],
    correctAnswers: [1],
    explanation: "Immunoglobulines spécifiques anti-VHB à la dose de 500 UI en intramusculaire dans les 72h, associées à la première dose de vaccin VHB.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-5-09',
    courseId: 'crs-inf-5',
    questionNumber: 9,
    type: 'QCM',
    content: "Un infirmier se blesse avec une aiguille abandonnée dans une poubelle (aiguille souillée depuis plusieurs heures). Le risque VIH est considéré comme :",
    options: [
      "A. Élevé car aiguille creuse",
      "B. Faible car le sang est coagulé et le virus fragile dans le milieu extérieur",
      "C. Nul",
      "D. Identique à une aiguille fraîchement utilisée",
      "E. Risque intermédiaire si patient inconnu"
    ],
    correctAnswers: [1],
    explanation: "Le VIH est très fragile dans l'environnement extérieur. Le sang coagulé et séché depuis plusieurs heures réduit drastiquement la charge virale infectante (risque faible).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-10',
    courseId: 'crs-inf-5',
    questionNumber: 10,
    type: 'QCM',
    content: "Lors d’une projection de sang sur la conjonctive, la durée minimale de rinçage recommandée est de :",
    options: [
      "A. 30 secondes",
      "B. 1 minute",
      "C. 5 minutes au sérum physiologique ou à l'eau",
      "D. 10 minutes",
      "E. Jusqu’à disparition de la sensation"
    ],
    correctAnswers: [2],
    explanation: "Rinçage immédiat et abondant pendant au moins 5 minutes au sérum physiologique ou à défaut à l'eau courante.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-11',
    courseId: 'crs-inf-5',
    questionNumber: 11,
    type: 'QCM',
    content: "Quel facteur n’augmente pas le risque de transmission du VIH lors d’un AES ?",
    options: [
      "A. Aiguille creuse contenant du sang",
      "B. Charge virale élevée du patient source",
      "C. Profondeur de la blessure",
      "D. Port de gants en latex (facteur protecteur)",
      "E. Blessure avec aiguille de suture pleine sur artère"
    ],
    correctAnswers: [3],
    explanation: "Le port de gants est un facteur protecteur (il essuie jusqu'à 50-80% de l'inoculum sanguin lors de la traversée de l'aiguille).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-12',
    courseId: 'crs-inf-5',
    questionNumber: 12,
    type: 'QCM',
    content: "Concernant la vaccination VHB après AES, le schéma vaccinal usuel chez l’adulte non antérieurement vacciné est :",
    options: [
      "A. Une dose unique 40µg",
      "B. Trois doses de 20µg à M0, M1, M6 (ou schéma accéléré)",
      "C. Deux doses à J0 et J30",
      "D. Dose 10µg répétée à 0,1,6 mois",
      "E. Vaccin uniquement si AgHBs source positif"
    ],
    correctAnswers: [1],
    explanation: "Schéma classique à 3 injections (M0, M1, M6) avec 20 µg d'antigène HBs dans le deltoïde.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-13',
    courseId: 'crs-inf-5',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans les 4 heures suivant un AES, la priorité médicale est :",
    options: [
      "A. Faire une sérologie VIH de la victime",
      "B. Contacter le médecin référent pour évaluation du risque et prescription du TPE si indiqué",
      "C. Hospitaliser le patient source",
      "D. Déclarer l’accident à la CNAS",
      "E. Informer la famille du soignant"
    ],
    correctAnswers: [1],
    explanation: "La priorité absolue est de contacter le référent AES / infectiologue pour évaluer le risque et initier le TPE dans les 4 premières heures.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-14',
    courseId: 'crs-inf-5',
    questionNumber: 14,
    type: 'QCM',
    content: "Quelle est la durée totale du traitement post-exposition antirétroviral (TPE) en cas d’indication ?",
    options: [
      "A. 7 jours",
      "B. 14 jours",
      "C. 28 jours",
      "D. 45 jours",
      "E. 3 mois"
    ],
    correctAnswers: [2],
    explanation: "Le TPE contre le VIH dure 28 jours consécutifs avec une trithérapie antirétrovirale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-15',
    courseId: 'crs-inf-5',
    questionNumber: 15,
    type: 'QCM',
    content: "L’administration des immunoglobulines anti-VHB et du vaccin VHB est possible jusqu’à quel délai après l’exposition ?",
    options: [
      "A. 24h",
      "B. 48h",
      "C. 72h (voire 7 jours)",
      "D. 10 jours",
      "E. 15 jours"
    ],
    correctAnswers: [2],
    explanation: "Idéalement dans les 72 heures, et au maximum jusqu'à 7 jours après l'exposition.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-16',
    courseId: 'crs-inf-5',
    questionNumber: 16,
    type: 'QCM',
    content: "Lors de l’évaluation d’une projection cutanéo-muqueuse (œil) de sang > 15 min, le risque VIH est classé :",
    options: [
      "A. Négligeable",
      "B. Faible",
      "C. Intermédiaire",
      "D. Important",
      "E. Mineur"
    ],
    correctAnswers: [2],
    explanation: "Une projection muqueuse avec un contact prolongé (> 15 min) constitue un risque intermédiaire justifiant une évaluation spécialisée pour le TPE.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-5-17',
    courseId: 'crs-inf-5',
    questionNumber: 17,
    type: 'QCM',
    content: "Quel examen sérologique n’est PAS indispensable en urgence chez le patient source après un AES ?",
    options: [
      "A. AgHBs",
      "B. Anti-VHC",
      "C. Anti-HBc total isolé sans AgHBs",
      "D. Charge virale VIH si patient VIH connu",
      "E. Sérologie VIH (test rapide)"
    ],
    correctAnswers: [2],
    explanation: "En urgence, les marqueurs clés chez la source sont le statut VIH (TROD/ELISA rapide), l'AgHBs (VHB) et les anticorps anti-VHC.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-5-18',
    courseId: 'crs-inf-5',
    questionNumber: 18,
    type: 'QCM',
    content: "Un médecin se fait mordre par un patient VIH+ sans effraction cutanée (ecchymose sous peau intacte). Le risque de transmission VIH est :",
    options: [
      "A. Important",
      "B. Intermédiaire",
      "C. Faible / négligeable",
      "D. 30%",
      "E. Nul si pas de sang visible"
    ],
    correctAnswers: [2],
    explanation: "Peau intacte sans effraction cutanée ni saignement = risque négligeable / nul.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-19',
    courseId: 'crs-inf-5',
    questionNumber: 19,
    type: 'QCM',
    content: "Après un AES, le suivi sérologique standard pour le VIH chez la victime non soumise à TPE est habituellement réalisé à :",
    options: [
      "A. J0, J15, J30",
      "B. J0, M3 (ou 6 semaines avec ELISA 4G) et M6",
      "C. J0, M1, M3, M6",
      "D. J0, M6 seulement",
      "E. M1, M3, M12"
    ],
    correctAnswers: [1],
    explanation: "Suivi sérologique VIH à J0 (statut basal), 3 mois (ou 6 semaines avec test 4G combiné Ag/Ac) et 6 mois si TPE.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-20',
    courseId: 'crs-inf-5',
    questionNumber: 20,
    type: 'QCM',
    content: "Quel est l’agent infectieux pour lequel une immunoglobuline spécifique + vaccin est recommandé après AES chez un sujet non immunisé ?",
    options: [
      "A. VIH",
      "B. VHC",
      "C. VHB",
      "D. CMV",
      "E. Herpès"
    ],
    correctAnswers: [2],
    explanation: "Seul le VHB bénéficie d'une séro-vaccination combinée préventive efficace (Ig spécifiques 500 UI + vaccin).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-21',
    courseId: 'crs-inf-5',
    questionNumber: 21,
    type: 'QCM',
    content: "Quelle situation clinique correspond à un risque important pour le VIH ?",
    options: [
      "A. Piqûre par aiguille à suture pleine",
      "B. Projection oculaire < 5 min",
      "C. Morsure avec peau saine",
      "D. Aiguille creuse de ponction veineuse ou artérielle avec sang visible",
      "E. Coupure avec verre souillé de sérum physiologique"
    ],
    correctAnswers: [3],
    explanation: "Aiguille creuse contenant du sang frais après prélèvement vasculaire = risque le plus élevé de transmission.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-22',
    courseId: 'crs-inf-5',
    questionNumber: 22,
    type: 'QCM',
    content: "Le délai de prescription du traitement post-exposition VIH ne doit pas dépasser (sauf exception rare) :",
    options: [
      "A. 4 heures",
      "B. 12 heures",
      "C. 24 heures",
      "D. 48 heures",
      "E. 72 heures"
    ],
    correctAnswers: [3],
    explanation: "Le délai butoir d'efficacité du TPE est de 48 heures au-delà duquel son bénéfice n'est plus démontré.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-23',
    courseId: 'crs-inf-5',
    questionNumber: 23,
    type: 'QCM',
    content: "Lors de la prise en charge initiale, quel bilan est demandé EN URGENCE chez la victime d’un AES ?",
    options: [
      "A. Groupe sanguin, NFS",
      "B. Sérologies VIH, VHB (AgHBs, anti-HBs), VHC (statut de référence à J0)",
      "C. Bilan hépatique complet",
      "D. PCR VIH",
      "E. Electrophorèse des protéines"
    ],
    correctAnswers: [1],
    explanation: "Il est impératif d'attester de la négativité initiale de la victime à J0 pour la prise en charge médico-légale et déterminer le statut immunitaire vis-à-vis du VHB.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-24',
    courseId: 'crs-inf-5',
    questionNumber: 24,
    type: 'QCM',
    content: "En cas de patient source VHB chronique positif (AgHBs+), et victime soignante vaccinée avec un taux d'anticorps anti-HBs protecteur (> 10 UI/L), quelle attitude adopter ?",
    options: [
      "A. Immunoglobulines spécifiques + rappel vaccinal",
      "B. Aucun traitement spécifique, le soignant est protégé",
      "C. Dose de rappel vaccinal seule",
      "D. Immunoglobulines seules",
      "E. Reprendre une primovaccination complète"
    ],
    correctAnswers: [1],
    explanation: "Si le titre d'anti-HBs est ≥ 10 UI/L, la protection est complète et pérenne; aucun traitement ni prophylaxie n'est requis.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-25',
    courseId: 'crs-inf-5',
    questionNumber: 25,
    type: 'QCM',
    content: "Le risque moyen de transmission du VHC après exposition percutanée par piqûre d'aiguille est d'environ :",
    options: [
      "A. 0,1%",
      "B. 0,3%",
      "C. 1,8%",
      "D. 3%",
      "E. 6%"
    ],
    correctAnswers: [3],
    explanation: "Le risque moyen de transmission après piqûre contaminée par le VHC est de 3% (règle des 0,3% pour le VIH, 3% pour le VHC, 30% pour le VHB).",
    difficulty: 'facile'
  },

  // 5 Cas cliniques AES
  {
    id: 'q-inf-5-cc1',
    courseId: 'crs-inf-5',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Mme S., infirmière en réanimation, se pique avec une aiguille creuse après un prélèvement artériel chez un patient VIH+ avec charge virale à 200 000 copies/mL. Elle ne portait pas de gants.\n\nQuel est le niveau de risque et la conduite immédiate ?",
    options: [
      "A. Risque nul / Surveillance simple",
      "B. Risque faible / Bilan dans 48h",
      "C. Risque intermédiaire / Avis différé",
      "D. Risque important / TPE en extrême urgence dans les 4 premières heures pendant 28 jours",
      "E. Risque modéré / Vaccin seul"
    ],
    correctAnswers: [3],
    explanation: "Aiguille creuse, geste artériel, sang visible, charge virale élevée = risque maximal. Soins locaux immédiats (eau-savon + Dakin 5 min) + TPE débuté avant H4 pour 28 jours.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-cc2',
    courseId: 'crs-inf-5',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Médecin aux urgences recevant une projection de sang dans l’œil lors d’une suture. Rinçage immédiat effectué pendant 2 minutes. Patient source inconnu.\n\nQuelle doit être la durée minimale de rinçage recommandée et quelle conduite ?",
    options: [
      "A. 30 secondes",
      "B. 1 minute",
      "C. 5 minutes minimum au sérum physiologique, puis sérologie source en urgence et évaluation du TPE",
      "D. 10 minutes",
      "E. 15 minutes"
    ],
    correctAnswers: [2],
    explanation: "Rinçage continu d'au moins 5 minutes au sérum physiologique. Bilan de la source en urgence (TROD VIH) et évaluation du risque pour TPE.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-cc3',
    courseId: 'crs-inf-5',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Aide-soignant en hémodialyse, blessé par une aiguille abandonnée dans un sac à déchets. Patient source porteur d'une hépatite B chronique (AgHBs+). La victime n'a jamais été vaccinée contre le VHB. Délai de 48 heures.\n\nQuelle prophylaxie vis-à-vis du VHB est indiquée ?",
    options: [
      "A. Vaccin seul",
      "B. Immunoglobulines spécifiques anti-VHB (500 UI) + 1ère dose de vaccin VHB dans les 72h",
      "C. Immunoglobulines seules",
      "D. Surveillance sérologique sans traitement",
      "E. Interféron alpha"
    ],
    correctAnswers: [1],
    explanation: "Sujet non immunisé exposé à une source AgHBs+ : association d'immunoglobulines spécifiques (500 UI) et de la 1ère dose de vaccin VHB avant H72.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-cc4',
    courseId: 'crs-inf-5',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Interne en chirurgie se piquant avec une aiguille pleine de suture utilisée chez un patient porteur d'une hépatite C active (ARN VHC positif). Plaie superficielle.\n\nQuelle est la conduite à tenir vis-à-vis du VHC ?",
    options: [
      "A. Traitement préventif par sofosbuvir pendant 28 jours",
      "B. Immunoglobulines anti-VHC",
      "C. Pas de prophylaxie validée : surveillance par ALAT et ARN-VHC à M1 et sérologie VHC à M3 et M6",
      "D. Vaccination anti-VHC",
      "E. Interféron préemptif immédiat"
    ],
    correctAnswers: [2],
    explanation: "Pas de vaccin ni de prophylaxie post-exposition pour le VHC. La surveillance précoce permet de traiter immédiatement par antiviraux à action directe en cas de virémie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-5-cc5',
    courseId: 'crs-inf-5',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Sage-femme en salle d'accouchement, projection de liquide amniotique teinté de sang sur une zone d'eczéma des mains. Le statut du patient source est inconnu. La sage-femme présente un carnet de vaccination attestant d'une vaccination VHB complète avec un dosage d'anticorps anti-HBs à 250 UI/L.\n\nQuelle prise en charge vis-à-vis du VHB ?",
    options: [
      "A. Rappel vaccinal immédiat",
      "B. Immunoglobulines spécifiques",
      "C. Aucune prophylaxie VHB nécessaire (taux protecteur > 10 UI/L)",
      "D. Double dose de vaccin",
      "E. Nouveau schéma complet"
    ],
    correctAnswers: [2],
    explanation: "La sage-femme est immunisée avec un titre d'anti-HBs supérieur à 10 UI/L, conférant une protection complète et durable. Aucune mesure VHB requise.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_5_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-5-mindmap',
    courseId: 'crs-inf-5',
    title: 'Mind Map : Conduite à Tenir devant un AES',
    type: 'mindmap',
    content: `# Mind Map : Accident d'Exposition au Sang (AES)

## 1. Gestes Locaux Immédiats (Sur le champ)
- **Cutané (piqûre/coupure)** :
  - NE PAS FAIRE SAIGNER
  - Laver abondamment à l'eau et au savon
  - Trempage antiseptique : Dérivé chloré (Dakin ou Javel diluée 1/5) pendant 5 min
- **Muqueuse / Œil** :
  - Rincer abondamment au sérum phy ou eau pendant ≥ 5 minutes

## 2. Évaluation du Risque de Transmission
- **Règle des 3** :
  - VHB : **30%** (si non vacciné)
  - VHC : **3%**
  - VIH : **0,3%**
- **Facteurs de gravité VIH** : Aiguille creuse, geste intra-artériel/veineux, sang visible, charge virale élevée

## 3. Prise en Charge Spécifique
- **VIH** : TPE (trithérapie 28 jours) débuté < 4h (max 48h)
- **VHB** : Si victime non vaccinée -> Ig spécifiques anti-HBs (500 UI) + vaccin < 72h
- **VHC** : Pas de TPE, suivi sérologique/PCR à M1, M3, M6
- **Médico-légal** : Déclaration accident de travail dans les 48h`
  },
  {
    id: 'res-inf-5-astuces',
    courseId: 'crs-inf-5',
    title: 'Mnémotechniques & Règles Clés AES',
    type: 'astuce',
    content: `### Formules Infaillibles AES (Dr. LAIDANI.M)

1. **La règle « 4H - 48H - 28J » (VIH) :**
   - Débuter le TPE idéalement avant **4 heures**
   - Délai limite absolu : **48 heures**
   - Durée du traitement : **28 jours**

2. **La règle « 30 - 3 - 0,3 » :**
   - Risque de séroconversion après piqûre : VHB = 30%, VHC = 3%, VIH = 0,3%

3. **Ne jamais faire saigner :**
   - « Pas de pression, pas d'aspiration, juste Dakin et dilution ! »`
  }
];

// Lesson 6: Bon Usage des Antibiotiques & Antibiorésistance
export const INFECTIO_LESSON_6_QUESTIONS: Question[] = [
  {
    id: 'q-inf-6-01',
    courseId: 'crs-inf-6',
    questionNumber: 1,
    type: 'QCM',
    content: "Concernant la découverte et l’histoire des antibiotiques, laquelle de ces affirmations est EXACTE ?",
    options: [
      "A. La pénicilline a été purifiée par Florey, Chain et Heatley dès 1928, immédiatement après l’observation de Fleming",
      "B. Pendant la Seconde Guerre mondiale, la production industrielle de pénicilline a utilisé une souche de Penicillium chrysogenum issue d’un melon contaminé",
      "C. Les antibiotiques sont tous des molécules synthétiques créées après 1950 sans équivalent naturel",
      "D. La première grande classe d’antibiotiques à large spectre découverte après 1987 est la famille des carbapénèmes",
      "E. L’utilisation de pain moisi par les Anciens était inefficace car aucune moisissure ne produit de substance antibactérienne"
    ],
    correctAnswers: [1],
    explanation: "En 1942, la découverte d'une souche très productive de Penicillium chrysogenum sur un melon moisi (Peoria, Illinois) a permis la production industrielle de pénicilline.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-02',
    courseId: 'crs-inf-6',
    questionNumber: 2,
    type: 'QCM',
    content: "Selon les données OMS et les projections, quelle affirmation concernant la mortalité liée à l’antibiorésistance est JUSTE ?",
    options: [
      "A. En 2003, le nombre de décès directs par an était inférieur à 100 000",
      "B. En 2016, on estimait environ 1,3 million de décès directs par an",
      "C. Si aucune mesure n’est prise, l’antibiorésistance deviendra la 1ère cause de mortalité devant le cancer (10 millions de morts/an en 2050)",
      "D. La RAM est classée par l’OMS comme menace prioritaire uniquement dans les pays à faible revenu",
      "E. En 2019, la résistance aux antiviraux était la 3e menace mondiale, avant le paludisme"
    ],
    correctAnswers: [2],
    explanation: "Les projections estiment que sans action d'envergure, l'antibiorésistance causera plus de 10 millions de décès par an d'ici 2050, dépassant la mortalité par cancer.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-03',
    courseId: 'crs-inf-6',
    questionNumber: 3,
    type: 'QCM',
    content: "Parmi les associations suivantes, laquelle associe correctement un antibiotique à son effet principal (bactéricide ou bactériostatique) ?",
    options: [
      "A. Macrolides -> bactéricide dépendant de la concentration",
      "B. Cyclines (doxycycline) -> bactéricide sur les bactéries à Gram positif",
      "C. Métronidazole -> bactériostatique sur les anaérobies",
      "D. Fluoroquinolones -> bactéricide (inhibition de l'ADN gyrase et topoisomérase IV)",
      "E. Linézolide -> bactéricide sur entérocoques"
    ],
    correctAnswers: [3],
    explanation: "Les fluoroquinolones sont bactéricides par inhibition directe des topoisomérases bactériennes (ADN gyrase et topoisomérase IV). Les macrolides et cyclines sont bactériostatiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-04',
    courseId: 'crs-inf-6',
    questionNumber: 4,
    type: 'QCM',
    content: "Un patient présente une infection à Klebsiella pneumoniae productrice de BLSE (CTX-M). Quel antibiotique reste le traitement de référence le plus fiable ?",
    options: [
      "A. Ceftriaxone",
      "B. Amoxicilline + acide clavulanique",
      "C. Céfépime seul",
      "D. Céfotaxime",
      "E. Imipénème (ou Méropénème)"
    ],
    correctAnswers: [4],
    explanation: "Les carbapénèmes (imipénème, méropénème) sont stables vis-à-vis des BLSE et demeurent le traitement de référence des infections sévères à entérobactéries BLSE.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-05',
    courseId: 'crs-inf-6',
    questionNumber: 5,
    type: 'QCM',
    content: "Une souche sauvage d’Enterococcus faecalis est naturellement résistante à :",
    options: [
      "A. L’amoxicilline",
      "B. La vancomycine",
      "C. Les céphalosporines (toutes générations)",
      "D. La gentamicine",
      "E. La daptomycine"
    ],
    correctAnswers: [2],
    explanation: "Tous les entérocoques possèdent une résistance naturelle à l'ensemble des céphalosporines (absence de fixation sur leurs PLP).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-06',
    courseId: 'crs-inf-6',
    questionNumber: 6,
    type: 'QCM',
    content: "Quel mécanisme explique l’échec des C3G lors d’une infection à Enterobacter cloacae après quelques jours de traitement ?",
    options: [
      "A. Acquisition plasmidique d’une carbapénémase KPC",
      "B. Dérépression de la céphalosporinase AmpC chromosomique (mutation du gène ampD)",
      "C. Production constitutive d’une BLSE de type CTX-M",
      "D. Modification des PLP par recombinaison homologue",
      "E. Surexpression des pompes d’efflux MexAB-OprM"
    ],
    correctAnswers: [1],
    explanation: "Enterobacter cloacae possède une céphalosporinase chromosomique inductible AmpC. Sous pression de C3G, la sélection d'un mutant déréprimé (mutation ampD) surproduit AmpC et inactive le traitement.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-6-07',
    courseId: 'crs-inf-6',
    questionNumber: 7,
    type: 'QCM',
    content: "À l’antibiogramme, la présence d’un « bouchon de champagne » (image de synergie) entre un disque d’amoxicilline-acide clavulanique et un disque de C3G indique :",
    options: [
      "A. Une carbapénémase de type OXA-48",
      "B. Une céphalosporinase AmpC non inhibée",
      "C. Une β-lactamase à spectre étendu (BLSE)",
      "D. Une hyperproduction de pénicillinase",
      "E. Une résistance aux carbapénèmes par perte de porines"
    ],
    correctAnswers: [2],
    explanation: "L'image en « bouchon de champagne » signe la synergie entre l'inhibiteur de bêtalactamase (acide clavulanique) et la C3G, confirmant une BLSE.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-08',
    courseId: 'crs-inf-6',
    questionNumber: 8,
    type: 'QCM',
    content: "Lequel des antibiotiques suivants possède une biodisponibilité orale excellente (> 90%) permettant un relais per os précoce ?",
    options: [
      "A. Céfixime",
      "B. Amoxicilline",
      "C. Gentamicine",
      "D. Vancomycine",
      "E. Métronidazole (ou Fluoroquinolones, Rifampicine)"
    ],
    correctAnswers: [4],
    explanation: "Le métronidazole, les fluoroquinolones, la rifampicine et le linézolide ont une biodisponibilité orale quasi complète (> 90-100%).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-09',
    courseId: 'crs-inf-6',
    questionNumber: 9,
    type: 'QCM',
    content: "Chez un patient avec méningite bactérienne, quel antibiotique diffuse TRÈS MAL dans le LCS même en cas d’inflammation méningée ?",
    options: [
      "A. Ceftriaxone",
      "B. Gentamicine (aminosides en général)",
      "C. Méropénème",
      "D. Fosfomycine",
      "E. Linézolide"
    ],
    correctAnswers: [1],
    explanation: "Les aminosides (gentamicine, amikacine) sont hydrosolubles et ne franchissent pratiquement pas la barrière hémato-encéphalique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-10',
    courseId: 'crs-inf-6',
    questionNumber: 10,
    type: 'QCM',
    content: "Un antibiotique concentration-dépendant (ex : aminosides) aura une efficacité bactéricide optimale si :",
    options: [
      "A. La durée pendant laquelle la concentration dépasse la CMI est la plus longue possible",
      "B. Le pic de concentration sérique (Cmax) est très élevé par rapport à la CMI (ratio Cmax/CMI élevé)",
      "C. La concentration reste constamment inférieure à la CMI",
      "D. On privilégie une administration en perfusion continue sur 24h",
      "E. On évite absolument l’effet post-antibiotique"
    ],
    correctAnswers: [1],
    explanation: "Les aminosides sont concentration-dépendants : leur efficacité dépend du pic sérique Cmax/CMI (viser un ratio > 8 à 10) d'où la monodose journalière.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-11',
    courseId: 'crs-inf-6',
    questionNumber: 11,
    type: 'QCM',
    content: "Une entérobactérie productrice de NDM (New Delhi Métallo-β-lactamase) est résistante aux carbapénèmes et à la ceftazidime-avibactam. Quel antibiotique reste souvent actif in vitro ?",
    options: [
      "A. Imipénème",
      "B. Méropénème",
      "C. Amoxicilline-acide clavulanique",
      "D. Céfépime",
      "E. Colistine (Polymyxine E)"
    ],
    correctAnswers: [4],
    explanation: "Les métallo-bêtalactamases de classe B (NDM) hydrolysent toutes les bêtalactamines et ne sont pas inhibées par l'avibactam. La colistine reste l'un des rares recours.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-6-12',
    courseId: 'crs-inf-6',
    questionNumber: 12,
    type: 'QCM',
    content: "Une souche d’E. coli résistante aux carbapénèmes (productrice de carbapénémase OXA-48) est classée comme :",
    options: [
      "A. Bactérie multi-résistante (BMR) uniquement",
      "B. Bactérie hautement résistante émergente (BHRe)",
      "C. Souche sauvage sans risque particulier",
      "D. Résistance naturelle aux carbapénèmes",
      "E. Bactérie sensible"
    ],
    correctAnswers: [1],
    explanation: "Les entérobactéries productrices de carbapénémases (EPC) sont classées BHRe et justifient des mesures d'isolement contact renforcé strict.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-13',
    courseId: 'crs-inf-6',
    questionNumber: 13,
    type: 'QCM',
    content: "D’après les données du Réseau Algérien de Surveillance (AARN), quelle observation concernant Acinetobacter baumannii en Algérie est correcte ?",
    options: [
      "A. La résistance à l’imipénème est restée inférieure à 10%",
      "B. La résistance à l’imipénème a augmenté de façon spectaculaire, dépassant 80% dans de nombreux services de réanimation",
      "C. La colistine n’est jamais utilisée",
      "D. A. baumannii est toujours sensible aux C3G",
      "E. Le taux de BLSE chez Klebsiella est nul"
    ],
    correctAnswers: [1],
    explanation: "En Algérie, les données de l'AARN montrent que la résistance d'Acinetobacter baumannii à l'imipénème dépasse 80% en milieu hospitalier réanimatoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-14',
    courseId: 'crs-inf-6',
    questionNumber: 14,
    type: 'QCM',
    content: "Concernant l’antibiorésistance en médecine vétérinaire et l’approche One Health, laquelle des propositions est FAUSSE ?",
    options: [
      "A. Environ 50% des antibiotiques produits mondialement sont destinés aux animaux",
      "B. L’Algérie présente un niveau élevé de résistance bactérienne animale, notamment chez la volaille",
      "C. L’usage des antibiotiques comme facteurs de croissance est encouragé sans aucune restriction légale",
      "D. Les fluoroquinolones et céphalosporines critiques sont encore utilisées en élevage",
      "E. Les stations d’épuration peuvent constituer des points chauds d’échange de gènes de résistance"
    ],
    correctAnswers: [2],
    explanation: "L'usage des antibiotiques comme facteurs de croissance est interdit ou strictement réglementé au niveau international pour freiner la sélection de résistances.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-15',
    courseId: 'crs-inf-6',
    questionNumber: 15,
    type: 'QCM',
    content: "La résistance naturelle de Pseudomonas aeruginosa à de nombreux antibiotiques (macrolides, tétracyclines) s’explique par :",
    options: [
      "A. Production de BLSE plasmidique",
      "B. Pompes d’efflux constitutives (ex: MexAB-OprM) et faible perméabilité de sa membrane externe",
      "C. Modification de la cible ribosomale",
      "D. Production de carbapénémase KPC",
      "E. Absence totale de peptidoglycane"
    ],
    correctAnswers: [1],
    explanation: "Le pyocyanique possède des pompes d'efflux multidrogues constitutives et une membrane externe très peu perméable.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-6-16',
    courseId: 'crs-inf-6',
    questionNumber: 16,
    type: 'QCM',
    content: "Pour une infection sur prothèse ou matériel avec formation de biofilm, quels antibiotiques possèdent une excellente activité anti-biofilm ?",
    options: [
      "A. Gentamicine seule",
      "B. Rifampicine (en association) et fluoroquinolones",
      "C. Pénicilline G seule",
      "D. Métronidazole",
      "E. Colistine seule"
    ],
    correctAnswers: [1],
    explanation: "La rifampicine (toujours en association) et les fluoroquinolones ont une pénétration remarquable dans le biofilm bactérien.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-17',
    courseId: 'crs-inf-6',
    questionNumber: 17,
    type: 'QCM',
    content: "Les bacilles à Gram négatif sont naturellement résistants aux glycopeptides (vancomycine) car :",
    options: [
      "A. Ils produisent une β-lactamase qui détruit la vancomycine",
      "B. La molécule volumineuse de vancomycine ne peut pas traverser les porines de leur membrane externe",
      "C. Ils modifient le peptidoglycane en D-Ala-D-Lac",
      "D. Ils possèdent des pompes d'efflux spécifiques",
      "E. Ils ne possèdent pas de paroi"
    ],
    correctAnswers: [1],
    explanation: "La vancomycine est une grosse molécule hydrophile incapable de franchir les porines de la membrane externe des BGN.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-18',
    courseId: 'crs-inf-6',
    questionNumber: 18,
    type: 'QCM',
    content: "Un antibiotique qui inhibe la synthèse des protéines en se fixant sur la sous-unité 50S du ribosome bactérien est :",
    options: [
      "A. Gentamicine",
      "B. Tétracycline",
      "C. Linézolide (ou Macrolides)",
      "D. Rifampicine",
      "E. Triméthoprime"
    ],
    correctAnswers: [2],
    explanation: "Le linézolide et les macrolides se fixent sur la sous-unité ribosomale 50S, tandis que les aminosides et tétracyclines ciblent la 30S.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-19',
    courseId: 'crs-inf-6',
    questionNumber: 19,
    type: 'QCM',
    content: "La « désescalade » antibiotique correspond à :",
    options: [
      "A. Augmenter les doses d’antibiotique en cas d’échec",
      "B. Remplacer une bi-antibiothérapie par une monothérapie plus large",
      "C. Réduire le spectre antimicrobien dès réception de l'antibiogramme (passer à une molécule à spectre étroit ciblée)",
      "D. Arrêter tout antibiotique après 24 heures",
      "E. Utiliser systématiquement les molécules de dernier recours"
    ],
    correctAnswers: [2],
    explanation: "La désescalade consiste à restreindre le spectre antibiotique à H48-72 dès que l'antibiogramme identifie le germe sensible.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-20',
    courseId: 'crs-inf-6',
    questionNumber: 20,
    type: 'QCM',
    content: "Pour traiter une infection à bactérie intracellulaire (comme Brucella melitensis), on utilise des molécules à excellente pénétration cellulaire telles que :",
    options: [
      "A. Amoxicilline seule",
      "B. Doxycycline + Rifampicine",
      "C. Céfazoline",
      "D. Vancomycine",
      "E. Colistine"
    ],
    correctAnswers: [1],
    explanation: "Les cyclines (doxycycline) et les rifamycines (rifampicine) diffusent remarquablement à l'intérieur des macrophages.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-21',
    courseId: 'crs-inf-6',
    questionNumber: 21,
    type: 'QCM',
    content: "Laquelle de ces résistances bactériennes est le PLUS souvent liée à un transfert horizontal plasmidique favorisant une diffusion épidémique ?",
    options: [
      "A. Résistance aux céphalosporines de 3G par AmpC déréprimée chromosomique",
      "B. Résistance naturelle de Klebsiella à l'amoxicilline",
      "C. Résistance aux carbapénèmes par gène bla_NDM ou bla_OXA-48 porté par plasmide",
      "D. Résistance naturelle de Pseudomonas aux cyclines",
      "E. Résistance aux macrolides par mutation chromosomique de l'ARNr 23S"
    ],
    correctAnswers: [2],
    explanation: "Les carbapénémases plasmidiques (NDM, OXA-48) sont portées par des éléments génétiques mobiles transférables horizontalement entre bactéries.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-6-22',
    courseId: 'crs-inf-6',
    questionNumber: 22,
    type: 'QCM',
    content: "Parmi ces entérobactéries, laquelle fait partie du groupe ESCPM (à risque d'AmpC inductible déréprimable sous C3G) ?",
    options: [
      "A. Escherichia coli",
      "B. Salmonella Typhi",
      "C. Morganella morganii (ou Enterobacter, Serratia, Citrobacter)",
      "D. Klebsiella pneumoniae",
      "E. Shigella sonnei"
    ],
    correctAnswers: [2],
    explanation: "Groupe ESCPM : Enterobacter, Serratia, Citrobacter freundii, Providencia, Morganella morganii.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-6-23',
    courseId: 'crs-inf-6',
    questionNumber: 23,
    type: 'QCM',
    content: "Les bactéries anaérobies strictes sont naturellement résistantes aux aminosides car :",
    options: [
      "A. Elles produisent des enzymes inactivatrices",
      "B. Le transport actif membranaire des aminosides nécessite de l'oxygène et un métabolisme oxydatif aérobie",
      "C. Elles modifient la sous-unité 30S",
      "D. Leur paroi est calcifiée",
      "E. Elles détruisent les aminosides par fermentation"
    ],
    correctAnswers: [1],
    explanation: "La pénétration des aminosides dans la cellule bactérienne requiert un transport dépendant de l'oxygène absent chez les anaérobies stricts.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-24',
    courseId: 'crs-inf-6',
    questionNumber: 24,
    type: 'QCM',
    content: "Selon la classification d’Ambler, les métallo-β-lactamases (classe B) se distinguent par :",
    options: [
      "A. Un site actif à résidu sérine",
      "B. Un site actif à ion zinc (métallo-enzyme) inhibé par l’EDTA",
      "C. Une sensibilité à l’acide clavulanique",
      "D. Une hydrolyse isolée des pénicillines",
      "E. Une absence totale d'activité sur les carbapénèmes"
    ],
    correctAnswers: [1],
    explanation: "Les métallo-bêtalactamases de classe B utilisent un cation métallique (zinc) dans leur site catalytique.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-6-25',
    courseId: 'crs-inf-6',
    questionNumber: 25,
    type: 'QCM',
    content: "Pour éviter une antibiothérapie inutile lors d’une infection respiratoire fébrile, quel biomarqueur biologique permet de distinguer une infection bactérienne d'une virale ?",
    options: [
      "A. Créatininémie",
      "B. Procalcitonine (PCT) ou CRP",
      "C. Lactates sériques",
      "D. Ferritine",
      "E. Bilirubine totale"
    ],
    correctAnswers: [1],
    explanation: "La procalcitonine (PCT < 0,25-0,5 ng/mL) aide à exclure une infection bactérienne et à limiter les prescriptions antibiotiques inappropriées.",
    difficulty: 'facile'
  },

  // 5 Cas cliniques Bon usage antibiotiques
  {
    id: 'q-inf-6-cc1',
    courseId: 'crs-inf-6',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Femme de 28 ans, enceinte à 7 SA, fièvre à 38,8°C, brûlures mictionnelles, lombalgie. ECBU : > 10^5 UFC/mL E. coli résistant à amoxicilline et C1G, sensible à la fosfomycine, amox-clav et ceftriaxone. Pas de gravité.\n\nQuel antibiotique est le plus adapté en première intention selon le contexte obstétrical ?",
    options: [
      "A. Ciprofloxacine per os",
      "B. Ceftriaxone IV ou Fosfomycine-trométamol",
      "C. Doxycycline",
      "D. Cotrimoxazole",
      "E. Gentamicine seule"
    ],
    correctAnswers: [1],
    explanation: "La ceftriaxone (ou fosfomycine selon la forme haute vs basse) est sûre pendant la grossesse; les fluoroquinolones et cyclines sont contre-indiquées.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-cc2',
    courseId: 'crs-inf-6',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Patient de 65 ans en réanimation pour PAVM. Prélèvement : Klebsiella pneumoniae résistante aux C3G et à la céfoxitine, avec test de synergie positif (bouchon de champagne), sensible à l'imipénème.\n\nQuel est le mécanisme de résistance et le traitement de référence ?",
    options: [
      "A. BLSE / Imipénème (ou Méropénème)",
      "B. Céphalosporinase AmpC / Céfépime seul",
      "C. Carbapénémase KPC / Colistine",
      "D. Pénicillinase simple / Amoxicilline",
      "E. SARM / Vancomycine"
    ],
    correctAnswers: [0],
    explanation: "Le test de synergie signe une BLSE. L'imipénème reste la molécule de référence pour traiter une pneumonie nosocomiale sévère à BLSE.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-cc3',
    courseId: 'crs-inf-6',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Patient transplanté rénal porteur rectal d’une souche d’E. coli résistante aux carbapénèmes avec test EDTA positif (inhibition par l'EDTA).\n\nQuel est le type de carbapénémase et la mesure d'hygiène immédiate ?",
    options: [
      "A. KPC / Isolement standard",
      "B. NDM (Métallo-β-lactamase) / Isolement contact strict et signalement BHRe",
      "C. OXA-48 / Aucune précaution",
      "D. Pénicillinase / Traitement ambulatoire",
      "E. Résistance naturelle / Levée d'isolement"
    ],
    correctAnswers: [1],
    explanation: "L'inhibition par l'EDTA caractérise les métallo-bêtalactamases dépendantes du zinc (NDM, VIM). La détection d'une EPC impose le signalement et les mesures BHRe.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-6-cc4',
    courseId: 'crs-inf-6',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Enfant de 4 ans suspect de méningite bactérienne communautaire à cocci Gram positif en diplocoques. Le médecin choisit l'antibiothérapie probabiliste initiale.\n\nQuelle association garantit une excellente diffusion méningée et couvre le pneumocoque de sensibilité diminuée (PSDP) ?",
    options: [
      "A. Amoxicilline + gentamicine",
      "B. Ceftriaxone (ou Céfotaxime) + Vancomycine",
      "C. Céfalexine per os",
      "D. Fosfomycine + colistine",
      "E. Clindamycine seule"
    ],
    correctAnswers: [1],
    explanation: "C3G injectable à forte dose + Vancomycine est l'association de référence assurant la couverture du pneumocoque de sensibilité diminuée dans le LCR.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-6-cc5',
    courseId: 'crs-inf-6',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Homme de 45 ans porteur d’une ostéite à Staphylococcus aureus méti-sensible (MSSA), avec antécédent de choc anaphylactique prouvé à la pénicilline.\n\nQuel antibiotique à excellente diffusion osseuse et anti-biofilm peut être utilisé en alternative ?",
    options: [
      "A. Gentamicine seule en IM",
      "B. Clindamycine ou Rifampicine associée à une fluoroquinolone (Lévofloxacine)",
      "C. Céfazoline",
      "D. Érythromycine",
      "E. Ampicilline"
    ],
    correctAnswers: [1],
    explanation: "La clindamycine, la rifampicine et les fluoroquinolones ont une pénétration osseuse exceptionnelle (> 40-70%) et constituent des alternatives de premier ordre.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_6_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-6-mindmap',
    courseId: 'crs-inf-6',
    title: 'Mind Map : Bon Usage des Antibiotiques & Résistance',
    type: 'mindmap',
    content: `# Mind Map : Bon Usage des Antibiotiques & Antibiorésistance

## 1. Mécanismes d'Action
- **Paroi** : Bêta-lactamines, Glycopeptides, Fosfomycine
- **Protéines** :
  - *Sous-unité 30S* : Aminosides (bactéricides), Tétracyclines (bactériostatiques)
  - *Sous-unité 50S* : Macrolides, Clindamycine, Linézolide
- **ADN** : Fluoroquinolones (gyrase / topo IV)
- **Folates** : Cotrimoxazole (TMP-SMX)

## 2. Profils PK/PD & Diffusion
- **Temps-dépendant (T > CMI)** : Bêta-lactamines -> perfusion prolongée ou fractionnée
- **Concentration-dépendant (Cmax/CMI)** : Aminosides -> dose unique quotidienne avec pic élevé
- **Diffusion osseuse optimale** : Rifampicine, Fluoroquinolones, Clindamycine, Linézolide
- **Diffusion méningée** : C3G, Méropénème, Fosfomycine (Aminosides = inefficaces dans le LCR)

## 3. Mécanismes de Résistance
- **BLSE** : Inactive pénicillines et C3G, inhibée par acide clavulanique (image en bouchon de champagne), carbapénèmes actifs
- **AmpC déréprimée** (ESCPM) : Résistance sous C3G par mutation ampD -> carbapénème ou céfépime
- **Carbapénémases** : KPC (classe A), NDM (métallo classe B), OXA-48 (classe D) -> BHRe`
  },
  {
    id: 'res-inf-6-astuces',
    courseId: 'crs-inf-6',
    title: 'Mnémotechniques & Règles d\'Or Antibio',
    type: 'astuce',
    content: `### Perles & Mnémos Antibiotiques (Dr. LAIDANI.M)

1. **Entérobactéries ESCPM (AmpC inductible) :**
   - **E**nterobacter
   - **S**erratia
   - **C**itrobacter freundii
   - **P**rovidencia
   - **M**organella
   *Piège : Ne JAMAIS traiter par C3G seule en raison du risque de dérépression !*

2. **Diffusion Osseuse : « RIFACLICO »**
   - **RIFA**mpicine
   - **CLI**ndamycine
   - **CO**trimoxazole / Quinolones

3. **Règle de la Désescalade à H48 :**
   - « Frapper fort et large d'abord, resserrer et cibler dès l'antibiogramme ! »`
  }
];
