import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 1: LEUCÉMIE LYMPHOÏDE CHRONIQUE (LLC) - Pr S. Taoussi
// ==========================================
export const HEMATO_LESSON_1_QUESTIONS: Question[] = [
  {
    id: 'q-hem-01-01',
    courseId: 'crs-hemato-1',
    questionNumber: 1,
    type: 'QCM',
    content: "Concernant l’épidémiologie de la LLC en Algérie, quelle affirmation est exacte ?",
    options: [
      "A) L’âge médian au diagnostic est de 72 ans, similaire aux pays occidentaux",
      "B) L’incidence est estimée à 7,7 pour 100 000 habitants",
      "C) Il existe une légère prédominance féminine (sex-ratio F/H = 1,2)",
      "D) L’âge moyen en Algérie est de 67 ans, plus précoce qu’en Occident",
      "E) La LLC représente la leucémie la plus rare en Afrique du Nord"
    ],
    correctAnswers: [3],
    explanation: "La réponse D est correcte. Le cours précise : « En Algérie, âge moyen au diagnostic = 67 ans vs 72 ans en occident ». La LLC est la plus fréquente des leucémies en Occident, incidence Algérie ≈ 0,77/100 000, sex-ratio masculin (M/F=2).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-02',
    courseId: 'crs-hemato-1',
    questionNumber: 2,
    type: 'QCM',
    content: "Le mécanisme physiopathologique principal de la LLC repose sur :",
    options: [
      "A) Une prolifération blastique massive avec index mitotique élevé",
      "B) Une translocation t(9;22) entraînant une tyrosine kinase constitutive",
      "C) Un blocage des lymphocytes B en phase G0 et un défaut d’apoptose",
      "D) Une surexpression de CD34 médullaire avec maturation arrêtée",
      "E) Une infiltration médullaire par des lymphoblastes indifférenciés"
    ],
    correctAnswers: [2],
    explanation: "La LLC est peu proliférative mais accumulative : lymphocytes B matures bloqués en G0, résistance à l’apoptose → accumulation. Les autres options évoquent LAM, LMC ou LAL.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-03',
    courseId: 'crs-hemato-1',
    questionNumber: 3,
    type: 'QCM',
    content: "Le diagnostic de LLC est confirmé par l’immunophénotypage. Le score de Matutes :",
    options: [
      "A) Est basé sur 3 marqueurs membranaires : CD5, CD23, CD20",
      "B) Nécessite un score ≥ 3 pour affirmer la LLC",
      "C) Un score de 4/5 ou 5/5 confirme la LLC",
      "D) Utilise exclusivement des marqueurs cytoplasmiques",
      "E) Est remplacé par le myélogramme pour le diagnostic différentiel"
    ],
    correctAnswers: [2],
    explanation: "Le score de Matutes (5 points : CD5+, CD23+, FMC7-, CD22/sIg faible) ; un score ≥4 est typique de LLC. Un score 3 peut faire discuter d'autres syndromes lymphoprolifératifs.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-04',
    courseId: 'crs-hemato-1',
    questionNumber: 4,
    type: 'QCM',
    content: "Un patient de 70 ans présente une hyperlymphocytose à 18 000/μl persistante, asthénie modérée, pas d’adénopathies. Le frottis sanguin montre des ombres de Gümprecht. Quelle est la conduite diagnostique la plus appropriée ?",
    options: [
      "A) Myélogramme d’urgence avant tout traitement",
      "B) Biopsie ganglionnaire systématique",
      "C) Immunophénotypage par cytométrie en flux",
      "D) Dosage des beta2-microglobulines et LDH seuls",
      "E) Surveillance simple car stade précoce"
    ],
    correctAnswers: [2],
    explanation: "L’immunophénotypage est l’examen clé pour confirmer le diagnostic (score de Matutes). Le myélogramme n’est pas indispensable au diagnostic positif, la clinique + hémogramme + cytométrie suffisent.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-05',
    courseId: 'crs-hemato-1',
    questionNumber: 5,
    type: 'QCM',
    content: "Dans la LLC, l’hypogammaglobulinémie observée est due à :",
    options: [
      "A) Une fuite rénale des immunoglobulines",
      "B) Une carence nutritionnelle associée fréquente",
      "C) Un déficit de production lié à l’incompétence immunitaire des lymphocytes B monoclonaux",
      "D) Une consommation excessive par les infections chroniques",
      "E) Une chimiothérapie antérieure occulte"
    ],
    correctAnswers: [2],
    explanation: "Les lymphocytes B monoclonaux sont immunologiquement incompétents → diminution des immunoglobulines normales. C’est une complication fréquente favorisant les infections.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-06',
    courseId: 'crs-hemato-1',
    questionNumber: 6,
    type: 'QCM',
    content: "La classification de Binet pour la LLC prend en compte :",
    options: [
      "A) 5 aires ganglionnaires (tête/cou, aisselles, aine, rate, foie)",
      "B) Uniquement le taux d’hémoglobine et de plaquettes",
      "C) La présence de symptômes B (fièvre, sueurs, amaigrissement)",
      "D) La lymphocytose absolue et le temps de doublement",
      "E) L’existence de cytogénétique défavorable"
    ],
    correctAnswers: [0],
    explanation: "Binet utilise 5 aires : cervicales, axillaires, inguinales, rate et foie. Stade A : <3 aires atteintes, Stade B : ≥3 aires, Stade C : anémie (Hb<100 g/L) ou thrombopénie (Plaq<100 G/L).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-07',
    courseId: 'crs-hemato-1',
    questionNumber: 7,
    type: 'QCM',
    content: "Une anomalie cytogénétique de mauvais pronostic dans la LLC, associée à une résistance à l’immunochimiothérapie est :",
    options: [
      "A) Trisomie 12",
      "B) Délétion 13q14",
      "C) Délétion 17p (TP53)",
      "D) Translocation t(11;14)",
      "E) Délétion 11q (ATM)"
    ],
    correctAnswers: [2],
    explanation: "La délétion 17p (perte de TP53) est de très mauvais pronostic, réfractaire à la chimiothérapie classique ; nécessite des thérapies ciblées (ibrutinib, vénétoclax).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-08',
    courseId: 'crs-hemato-1',
    questionNumber: 8,
    type: 'QCM',
    content: "Un patient avec LLC stade A Binet, asymptomatique, âgé de 72 ans, sans anomalies TP53. La prise en charge recommandée est :",
    options: [
      "A) Chimiothérapie par Chlorambucil d’emblée",
      "B) Abstention thérapeutique et surveillance active",
      "C) Rituximab en monothérapie curative",
      "D) Splénectomie de principe",
      "E) Corticothérapie prophylactique"
    ],
    correctAnswers: [1],
    explanation: "Il est consensuel de ne pas traiter les stades A (survie >10 ans, proche de la population générale). Le traitement est indiqué en cas de progression (LLC active).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-09',
    courseId: 'crs-hemato-1',
    questionNumber: 9,
    type: 'QCM',
    content: "La première cause de mortalité dans la LLC est :",
    options: [
      "A) La transformation en syndrome de Richter",
      "B) Les hémorragies cérébrales par thrombopénie sévère",
      "C) Les infections (bactériennes, opportunistes)",
      "D) L’anémie hémolytique auto-immune réfractaire",
      "E) L’insuffisance cardiaque post-chimiothérapie"
    ],
    correctAnswers: [2],
    explanation: "Les complications infectieuses sont la première cause de mortalité (déficit immunitaire humoral, neutropénie).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-10',
    courseId: 'crs-hemato-1',
    questionNumber: 10,
    type: 'QCM',
    content: "Devant une anémie hémolytique auto-immune au cours d’une LLC, le test de Coombs direct est habituellement :",
    options: [
      "A) Positif avec anticorps froids anti-I",
      "B) Positif de type IgG ou IgG + complément (Ac chauds anti-Rhésus)",
      "C) Négatif dans la majorité des cas",
      "D) Uniquement positif pour le complément C3d",
      "E) Positif pour les anticorps anti-P"
    ],
    correctAnswers: [1],
    explanation: "L’anémie hémolytique auto-immune de la LLC est due à des auto-anticorps chauds IgG dirigés contre les antigènes Rhésus, Coombs direct positif.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-11',
    courseId: 'crs-hemato-1',
    questionNumber: 11,
    type: 'QCM',
    content: "Quels sont les critères hématologiques de la classification de Rai stade III ?",
    options: [
      "A) Lymphocytose + splénomégalie",
      "B) Lymphocytose + thrombopénie < 100 G/L",
      "C) Lymphocytose + anémie (Hb < 110 g/L)",
      "D) Lymphocytose seule",
      "E) Lymphocytose + adénopathies multiples + anémie"
    ],
    correctAnswers: [2],
    explanation: "Rai III = lymphocytose + anémie (Hb < 110 g/L), sans considération de thrombopénie. Rai IV = thrombopénie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-12',
    courseId: 'crs-hemato-1',
    questionNumber: 12,
    type: 'QCM',
    content: "Dans la surveillance d’un patient traité par Fludarabine pour LLC, la transfusion de concentrés globulaires nécessite :",
    options: [
      "A) Des produits sanguins phénotypés Kell",
      "B) Une irradiation préalable des produits sanguins",
      "C) Une leucoréduction systématique",
      "D) L’administration d’acide folique systématique",
      "E) Aucune précaution particulière"
    ],
    correctAnswers: [1],
    explanation: "Les analogues des purines (fludarabine) exposent à un risque de réaction du greffon contre l'hôte post-transfusionnelle (GVHD), d’où l’irradiation obligatoire des produits sanguins labiles.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-13',
    courseId: 'crs-hemato-1',
    questionNumber: 13,
    type: 'QCM',
    content: "Le syndrome de Richter correspond à :",
    options: [
      "A) Une anémie hémolytique avec hémoglobinurie",
      "B) Une transformation en leucémie aiguë myéloïde",
      "C) Une survenue d’un lymphome non hodgkinien agressif (grandes cellules B)",
      "D) Une atteinte méningée lymphomateuse",
      "E) Une complication rénale par infiltration tubulo-interstitielle"
    ],
    correctAnswers: [2],
    explanation: "Le syndrome de Richter est la transformation en lymphome diffus à grandes cellules B (LNH de haut grade), biopsie ganglionnaire nécessaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-14',
    courseId: 'crs-hemato-1',
    questionNumber: 14,
    type: 'QCM',
    content: "Le frottis sanguin d’un patient suspect de LLC montre des « ombres de Gümprecht ». Cela s’explique par :",
    options: [
      "A) Une fragilité membranaire des lymphocytes monoclonaux",
      "B) Un artefact de coloration lié à une hyperleucocytose extrême",
      "C) Une phagocytose des neutrophiles",
      "D) Une dysérythropoïèse associée",
      "E) Un phénomène de cryoagglutination"
    ],
    correctAnswers: [0],
    explanation: "Les lymphocytes LLC ont une membrane cytoplasmique fragile, générant lors de l’étalement des ombres nucléaires résiduelles (smudge cells).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-15',
    courseId: 'crs-hemato-1',
    questionNumber: 15,
    type: 'QCM',
    content: "Un homme de 80 ans, LLC stade B, porteur de délétion 17p et réfractaire aux analogues des purines, le traitement recommandé actuellement est :",
    options: [
      "A) Auto-greffe de cellules souches",
      "B) Polychimiothérapie type CHOP",
      "C) Thérapie ciblée : inhibiteur de BTK (Ibrutinib) ou anti-BCL2 (Venetoclax)",
      "D) Splénectomie d’induction",
      "E) Forte dose de corticothérapie"
    ],
    correctAnswers: [2],
    explanation: "Les patients avec anomalie TP53 (del17p) sont référés aux thérapies ciblées (anti-BTK, anti-BCL2).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-16',
    courseId: 'crs-hemato-1',
    questionNumber: 16,
    type: 'QCM',
    content: "Parmi les propositions suivantes, laquelle n’est PAS une indication de traitement actif de la LLC ?",
    options: [
      "A) Anémie progressive (Hb < 100 g/L) liée à l’infiltration médullaire",
      "B) Splénomégalie volumineuse symptomatique",
      "C) Lymphocytose isolée à 25 000/μl, asymptomatique, stade A Binet",
      "D) Thrombopénie sévère < 50 G/L avec purpura",
      "E) Temps de doublement des lymphocytes < 6 mois"
    ],
    correctAnswers: [2],
    explanation: "La lymphocytose isolée sans cytopénie ni signes tumoraux, stade A, ne justifie pas de traitement (surveillance).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-17',
    courseId: 'crs-hemato-1',
    questionNumber: 17,
    type: 'QCM',
    content: "Un patient sous ibrutinib (anti-BTK) pour LLC réfractaire consulte pour ecchymoses et saignements gingivaux. La conduite initiale est :",
    options: [
      "A) Arrêt définitif de l’ibrutinib",
      "B) Transfusion plaquettaire systématique",
      "C) Évaluer la numération plaquettaire, les co-médications et discuter la poursuite ou adaptation",
      "D) Prescrire de la vitamine K",
      "E) Changer pour vénétoclax en urgence"
    ],
    correctAnswers: [2],
    explanation: "Les inhibiteurs de BTK peuvent induire un risque hémorragique, une évaluation clinico-biologique s’impose. L’arrêt doit être pesé ; souvent surveillance ou adaptation.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-18',
    courseId: 'crs-hemato-1',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans la LLC, l’infiltration médullaire diffuse à la biopsie ostéomédullaire est :",
    options: [
      "A) Un critère diagnostique indispensable",
      "B) Un facteur de mauvais pronostic",
      "C) Toujours associée à des lésions ostéolytiques",
      "D) Réversible après traitement par rituximab seul",
      "E) Une indication systématique de chimiothérapie"
    ],
    correctAnswers: [1],
    explanation: "La biopsie ostéomédullaire n’est pas indispensable au diagnostic mais une infiltration diffuse est associée à un pronostic plus défavorable.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-19',
    courseId: 'crs-hemato-1',
    questionNumber: 19,
    type: 'QCM',
    content: "Concernant la vaccination chez le patient LLC, quelle affirmation est correcte ?",
    options: [
      "A) Les vaccins vivants atténués sont recommandés pour booster l’immunité",
      "B) L’efficacité vaccinale est excellente, supérieure à la population générale",
      "C) Les vaccins inactivés (grippe, pneumocoque) sont possibles mais leur efficacité est discutée",
      "D) La vaccination antitétanique est strictement contre-indiquée",
      "E) La vaccination contre le zona par vaccin vivant est encouragée"
    ],
    correctAnswers: [2],
    explanation: "Vaccins inactivés possibles mais anergie fréquente ; vaccins vivants atténués formellement contre-indiqués (risque disséminé).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-20',
    courseId: 'crs-hemato-1',
    questionNumber: 20,
    type: 'QCM',
    content: "Un patient de 65 ans, LLC Binet B, reçoit un traitement par Rituximab-Fludarabine-Cyclophosphamide. Pour prévenir la pneumocystose, la prophylaxie recommandée est :",
    options: [
      "A) Azithromycine 500 mg/jour",
      "B) Cotrimoxazole (Bactrim forte) 1 comprimé 3 fois par semaine",
      "C) Isoniazide pendant 9 mois",
      "D) Ganciclovir oral",
      "E) Fluconazole 400 mg/jour"
    ],
    correctAnswers: [1],
    explanation: "Bactrim forte (sulfaméthoxazole-triméthoprime) en prophylaxie primaire de Pneumocystis jirovecii chez les patients sous analogue des purines.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-21',
    courseId: 'crs-hemato-1',
    questionNumber: 21,
    type: 'QCM',
    content: "Le marqueur sérique reflet de la masse tumorale et pronostique dans la LLC est :",
    options: [
      "A) La CRP ultra-sensible",
      "B) Le dosage des chaînes légères libres",
      "C) La bêta-2-microglobuline et LDH",
      "D) La calcitonine",
      "E) La ferritine"
    ],
    correctAnswers: [2],
    explanation: "La bêta-2-microglobuline et les LDH sont des marqueurs pronostiques sériques reflétant la masse tumorale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-22',
    courseId: 'crs-hemato-1',
    questionNumber: 22,
    type: 'QCM',
    content: "Une femme de 60 ans, LLC suivie depuis 4 ans, développe une adénopathie unique rapidement progressive, fébrile, avec altération de l'état général. La biopsie ganglionnaire montre une prolifération de grandes cellules B. Il s’agit :",
    options: [
      "A) Une simple poussée ganglionnaire bénigne",
      "B) Un syndrome de Richter",
      "C) Une tuberculose ganglionnaire",
      "D) Une transformation en lymphome de Hodgkin",
      "E) Un sarcome de Kaposi"
    ],
    correctAnswers: [1],
    explanation: "Tableau clinique + histologie de grandes cellules B = syndrome de Richter, complication redoutable de la LLC.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-23',
    courseId: 'crs-hemato-1',
    questionNumber: 23,
    type: 'QCM',
    content: "L’erythroblastopénie auto-immune dans la LLC est :",
    options: [
      "A) La manifestation auto-immune la plus fréquente",
      "B) Traitée par transfusion de culots globulaires seuls",
      "C) Rare, mais peut être associée à une anémie sévère arégénérative",
      "D) Une complication réversible à l’arrêt de la fludarabine",
      "E) Un synonyme d’anémie hémolytique"
    ],
    correctAnswers: [2],
    explanation: "Rare, souvent associée à une immunodépression, elle se caractérise par une anémie arégénérative avec disparition des érythroblastes médullaires, nécessitant corticostéroïdes / immunosuppresseurs.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-01-24',
    courseId: 'crs-hemato-1',
    questionNumber: 24,
    type: 'QCM',
    content: "Un patient LLC bénéficie d’un traitement par vénétoclax (anti-BCL2). Le principal risque à l’initiation est :",
    options: [
      "A) Syndrome de lyse tumorale",
      "B) Hypertension artérielle sévère",
      "C) Neuropathie périphérique",
      "D) Hépatite fulminante",
      "E) Insuffisance surrénalienne"
    ],
    correctAnswers: [0],
    explanation: "Le vénétoclax induit une apoptose massive et rapide des cellules LLC, nécessitant une escalade posologique progressive et une hyperhydratation pour prévenir le syndrome de lyse tumorale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-25',
    courseId: 'crs-hemato-1',
    questionNumber: 25,
    type: 'QCM',
    content: "Dans la LLC, le temps de doublement de la lymphocytose inférieur à 12 mois est :",
    options: [
      "A) Un bon pronostic, indiquant une maladie indolente",
      "B) Un facteur prédictif d’évolutivité (mauvais pronostic)",
      "C) Une indication systématique de splénectomie",
      "D) Un critère exclusif de la classification de Rai",
      "E) Un marqueur d’anémie hémolytique"
    ],
    correctAnswers: [1],
    explanation: "Un temps de doublement < 12 mois annonce un mauvais pronostic et une maladie évolutive active nécessitant une prise en charge.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES FOR LESSON 1
  {
    id: 'q-hem-01-c01',
    courseId: 'crs-hemato-1',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Mr K., 68 ans, agriculteur, pas d’antécédent, consulte pour bilan préopératoire d’une hernie inguinale. Hémogramme : GB = 42 000/μl (lymphocytes 38 000/μl), Hb 13,2 g/dL, plaquettes 210 G/L. Frottis : petits lymphocytes matures ++, ombres de Gümprecht. Pas d’adénopathies palpables, rate non palpable. Quel examen permet de confirmer le diagnostic avec certitude ?",
    options: [
      "A) Myélogramme avec caryotype",
      "B) Biopsie ostéomédullaire",
      "C) Immunophénotypage lymphocytaire sanguin",
      "D) TEP-scanner",
      "E) Dosage des chaînes légères"
    ],
    correctAnswers: [2],
    explanation: "L'immunophénotypage (score de Matutes) est indispensable et suffisant pour affirmer le diagnostic de LLC.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-c02',
    courseId: 'crs-hemato-1',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Selon la classification de Binet, quel est le stade de Mr K. ?",
    options: [
      "A) Stade A",
      "B) Stade B",
      "C) Stade C",
      "D) Stade 0",
      "E) Stade III Rai"
    ],
    correctAnswers: [0],
    explanation: "Atteinte de moins de 3 aires ganglionnaires (aucune adénopathie), pas d’anémie ni de thrombopénie → Stade A.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-c03',
    courseId: 'crs-hemato-1',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 3) : Quelle attitude thérapeutique adopter en première intention pour Mr K. ?",
    options: [
      "A) Chlorambucil 10 mg/j",
      "B) Fludarabine + rituximab",
      "C) Surveillance clinico-biologique simple",
      "D) Splénectomie",
      "E) Corticothérapie à faible dose"
    ],
    correctAnswers: [2],
    explanation: "LLC stade A asymptomatique : abstention thérapeutique et surveillance active (survie prolongée identique à la population générale).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-c04',
    courseId: 'crs-hemato-1',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 1) : Femme 72 ans, suivie pour LLC depuis 3 ans sans traitement. Consultation pour fatigue intense, pâleur, subictère. Hb 7,2 g/dL, réticulocytes élevés, bilirubine libre augmentée, LDH élevée. Test de Coombs direct : positif IgG. GB 15 000/μl, plaquettes 190 G/L. Quel diagnostic complication est le plus probable ?",
    options: [
      "A) Erythroblastopénie",
      "B) Anémie hémolytique auto-immune (AHAI)",
      "C) Syndrome de Richter",
      "D) Infiltration médullaire massive",
      "E) Carence en vitamine B12"
    ],
    correctAnswers: [1],
    explanation: "Anémie hémolytique auto-immune : signes d’hémolyse régénérative + Coombs direct positif, complication classique de la LLC.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-c05',
    courseId: 'crs-hemato-1',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 2) : Quel est le traitement de première ligne de cette AHAI dans ce contexte ?",
    options: [
      "A) Transfusions répétées uniquement",
      "B) Splénectomie d’emblée",
      "C) Corticothérapie (prednisone 1 mg/kg/j)",
      "D) Rituximab seul",
      "E) Arrêt de tous les médicaments"
    ],
    correctAnswers: [2],
    explanation: "La corticothérapie (prednisone 1 mg/kg/j) est le traitement initial de première ligne de l'AHAI au cours de la LLC.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-c06',
    courseId: 'crs-hemato-1',
    questionNumber: 31,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 (Partie 1) : Mr A., 76 ans, LLC stade B (adénopathies multiples) non traité, présente des épisodes récurrents de pneumonies à pneumocoque et sinusites. Bilan : IgG total 3,8 g/L (N >7). Quelle mesure prophylactique pourrait réduire le risque infectieux ?",
    options: [
      "A) Vaccin pneumococcique vivant atténué",
      "B) Immunoglobulines polyvalentes IV (250-400 mg/kg/3-4 semaines)",
      "C) Antibiothérapie prophylactique par céphalosporine orale au long cours",
      "D) Arrêt de toute vaccination",
      "E) Granulocytes transfusés"
    ],
    correctAnswers: [1],
    explanation: "Les immunoglobulines IV sont indiquées en cas d'hypogammaglobulinémie profonde (<4 g/L) associée à des infections bactériennes graves récurrentes.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-c07',
    courseId: 'crs-hemato-1',
    questionNumber: 32,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 (Partie 2) : Concernant la vaccination chez ce patient, quelle affirmation est vraie ?",
    options: [
      "A) Vaccin ROR vivant est recommandé",
      "B) Vaccin antigrippal inactivé est possible mais efficacité discutée",
      "C) Pas de vaccin contre le pneumocoque à cause du risque infectieux",
      "D) Tous les vaccins sont contre-indiqués",
      "E) Seule la vaccination antitétanique est autorisée"
    ],
    correctAnswers: [1],
    explanation: "Les vaccins inactivés (grippe, pneumocoque) sont recommandés mais leur efficacité est amoindrie ; les vaccins vivants atténués sont formellement proscrits.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-c08',
    courseId: 'crs-hemato-1',
    questionNumber: 33,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 (Partie 1) : Patient 68 ans, LLC connue stade A depuis 5 ans, non traité. Depuis 2 mois : altération état général, fièvre, sueurs nocturnes, augmentation brutale d’un ganglion cervical (4 cm) dur. Biopsie ganglionnaire : prolifération diffuse de grandes cellules B, CD20+, Ki67 élevé. Le diagnostic est :",
    options: [
      "A) Lymphome folliculaire grade 3",
      "B) Transformation de Richter",
      "C) Tuberculose ganglionnaire",
      "D) Progression de la LLC sans Richter",
      "E) Lymphome de Hodgkin classique"
    ],
    correctAnswers: [1],
    explanation: "Syndrome de Richter (transformation en lymphome agressif diffus à grandes cellules B chez un patient porteur de LLC).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-c09',
    courseId: 'crs-hemato-1',
    questionNumber: 34,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 (Partie 2) : Quel examen avait permis le diagnostic initial de la LLC chez ce patient ?",
    options: [
      "A) Biopsie ganglionnaire",
      "B) Immunophénotypage sanguin + hémogramme",
      "C) TEP scanner",
      "D) Biopsie hépatique",
      "E) Ponction lombaire"
    ],
    correctAnswers: [1],
    explanation: "Le diagnostic initial de la LLC repose sur l'hémogramme et la cytométrie en flux (immunophénotype), et non sur la biopsie ganglionnaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-c10',
    courseId: 'crs-hemato-1',
    questionNumber: 35,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 (Partie 1) : Homme de 62 ans, LLC stade C (Hb 8 g/dL, plaquettes 80 G/L). Caryotype/FISH : délétion 17p (TP53). Réfractaire à la fludarabine. Le traitement le plus adapté actuellement est :",
    options: [
      "A) Polychimiothérapie CHOP",
      "B) Ibrutinib (inhibiteur BTK) ou vénétoclax (anti-BCL2)",
      "C) Autogreffe de cellules souches",
      "D) Corticoïdes à haute dose",
      "E) Interféron alpha"
    ],
    correctAnswers: [1],
    explanation: "En présence d'anomalie de TP53 (del17p), la chimiothérapie est inefficace : les thérapies ciblées (anti-BTK comme l'ibrutinib ou anti-BCL2 comme le vénétoclax) sont le standard.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-01-c11',
    courseId: 'crs-hemato-1',
    questionNumber: 36,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 (Partie 2) : Quel est l’effet indésirable spécifique de l’ibrutinib à surveiller de près ?",
    options: [
      "A) Cardiotoxicité avec allongement QT, fibrillation atriale et risque hémorragique",
      "B) Syndrome de lyse tumorale intense",
      "C) Neuropathie sensitive",
      "D) Hypercalcémie maligne",
      "E) Insuffisance rénale aiguë précoce"
    ],
    correctAnswers: [0],
    explanation: "Les inhibiteurs de BTK (ibrutinib) augmentent le risque de fibrillation atriale, d'hypertension artérielle et de saignements (dysfonction plaquettaire).",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_1_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-01-mindmap',
    courseId: 'crs-hemato-1',
    title: 'Mind Map : Leucémie Lymphoïde Chronique (LLC)',
    type: 'mindmap',
    content: `# Mind Map : Leucémie Lymphoïde Chronique (LLC) - Pr S. Taoussi

## 1. Définition & Épidémiologie
- Prolifération clonale de lymphocytes B matures bloqués en G0 (défaut d'apoptose)
- Âge moyen en Algérie = 67 ans (vs 72 ans en Occident)
- Sex-ratio M/F = 2 ; incidence = 0,77/100 000

## 2. Diagnostic Positif
- Hémogramme : Lymphocytose > 5000/μl persistante > 3 mois
- Frottis sanguin : Petits lymphocytes d'aspect mature + Ombres de Gümprecht
- Immunophénotypage (Cytométrie en flux) : Score de Matutes ≥ 4/5
  - CD5+, CD23+, FMC7-, sIg faible, CD79b/CD22 faible
- Myélogramme : NON indispensable au diagnostic

## 3. Classification Pronostique de Binet
- 5 aires : Tête/cou, Aisselles, Aines, Rate, Foie
- Stade A : < 3 aires, sans anémie ni thrombopénie (Survie > 10 ans) -> Surveillance
- Stade B : ≥ 3 aires, sans anémie ni thrombopénie (Survie ~7 ans) -> Traiter si actif
- Stade C : Hb < 100 g/L et/ou Plaquettes < 100 G/L (Survie ~4 ans) -> Traitement requis

## 4. Facteurs Pronostiques Défavorables
- Délétion 17p13 (TP53) / Mutation TP53 -> Résistance chimio classique
- Temps de doublement des lymphocytes < 12 mois
- Infiltration médullaire diffuse à la BOM, β2-microglobuline et LDH élevées

## 5. Thérapeutique
- Stade A : Abstention thérapeutique et surveillance armée
- Maladie active sans del(17p) : FCR (Fludarabine + Cyclophosphamide + Rituximab)
- Avec del(17p) ou rechute : Thérapies ciblées (Ibrutinib anti-BTK, Vénétoclax anti-BCL2)
- Prophylaxie : Bactrim (Pneumocystis), Aciclovir (VZV/HSV), IgIV si IgG < 4 g/L + infections`,
    author: 'Pr S. Taoussi | Blida'
  },
  {
    id: 'res-hem-01-astuces',
    courseId: 'crs-hemato-1',
    title: 'Astuces & Pièges aux Concours : LLC',
    type: 'astuce',
    content: `### Pièges Fréquents aux Examens de Résidanat

1. **Score de Matutes :**
   - Retenir la formule : CD5+, CD23+, FMC7-, sIg faible, CD22/CD79b faible.
   - Un score de 4 ou 5 confirme la LLC.
2. **Stade Binet C :**
   - Dès que Hb < 10 g/dL OU Plaquettes < 100 G/L, c'est un **Stade C**, peu importe le nombre d'aires ganglionnaires atteintes !
3. **Syndrome de Richter :**
   - Altération de l'état général brutale + hypertrophie asymétrique rapide d'un ganglion chez un patient LLC = **Syndrome de Richter** (LBDGC), impose la biopsie ganglionnaire.
4. **Vaccins vivants = CONTRE-INDICATION ABSOLUE :**
   - Jamais de vaccin vivant atténué chez un patient LLC (hypogammaglobulinémie profonde).
5. **Transfusion sous Fludarabine :**
   - Les concentrés de globules rouges et plaquettes doivent être **impérativement irradiés** pour prévenir la réaction du greffon contre l'hôte (GVHD) post-transfusionnelle.`,
    author: 'Pr S. Taoussi | Blida'
  }
];

// ==========================================
// LESSON 2: CAT DEVANT UN SYNDROME HÉMORRAGIQUE - Pr BenBournane
// ==========================================
export const HEMATO_LESSON_2_QUESTIONS: Question[] = [
  {
    id: 'q-hem-02-01',
    courseId: 'crs-hemato-2',
    questionNumber: 1,
    type: 'QCM',
    content: "Un patient présente des ecchymoses étendues et un saignement gingival spontané. La numération plaquettaire est à 22 000/mm³. Quel mécanisme est le plus probable ?",
    options: [
      "A. Thrombopathie constitutionnelle de type Bernard-Soulier",
      "B. Maladie de Willebrand de type 2B",
      "C. Thrombopénie périphérique immunologique",
      "D. Hémophilie A modérée",
      "E. Carence mixte en vitamine K et facteurs dépendants"
    ],
    correctAnswers: [2],
    explanation: "Une thrombopénie profonde (<30 000/mm³) expose à un risque hémorragique cutanéomuqueux spontané. L’absence de contexte médicamenteux et le caractère sévère évoquent une cause périphérique immunologique (PTI).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-02',
    courseId: 'crs-hemato-2',
    questionNumber: 2,
    type: 'QCM',
    content: "Un homme de 35 ans a des hémarthroses récidivantes du genou depuis l’enfance. Le TCA est très allongé, TQ normal, plaquettes normales. Quelle est l’hypothèse la plus probable ?",
    options: [
      "A. Maladie de Willebrand de type 3",
      "B. CIVD chronique",
      "C. Hémophilie A",
      "D. Thrombopathie de Glanzmann",
      "E. Insuffisance hépatocellulaire sévère"
    ],
    correctAnswers: [2],
    explanation: "Les hémarthroses récidivantes avec TCA allongé isolé et TQ normal sont typiques d’une hémophilie (A ou B). Le caractère héréditaire lié à l’X chez l'homme jeune renforce ce diagnostic.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-03',
    courseId: 'crs-hemato-2',
    questionNumber: 3,
    type: 'QCM',
    content: "Quel élément clinique oriente plutôt vers un trouble de l’hémostase primaire (vs anomalie de la coagulation) ?",
    options: [
      "A. Hémarthrose après un traumatisme mineur",
      "B. Saignement retardé (48h post-extraction dentaire)",
      "C. Purpura pétéchial et épistaxis spontanées",
      "D. Hématome profond des muscles psoas",
      "E. Céphalées brutales avec trouble de conscience"
    ],
    correctAnswers: [2],
    explanation: "L’hémostase primaire (plaquettes/vWF) se manifeste par des saignements cutanéomuqueux, précoces, spontanés : purpura, épistaxis, gingivorragies. La coagulation donne des hémarthroses et hématomes profonds retardés.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-04',
    courseId: 'crs-hemato-2',
    questionNumber: 4,
    type: 'QCM',
    content: "Une femme de 28 ans présente des ménorragies abondantes, des ecchymoses faciles, pas d’antécédents familiaux. Plaquettes = 280 000, TCA normal, TP normal. Quel test de 1ère intention est le plus pertinent ?",
    options: [
      "A. Dosage des facteurs VIII et IX",
      "B. Mesure du VWF:Ag et VWF:RCo",
      "C. Temps de saignement (TS) ou PFA-100",
      "D. Recherche d’anticoagulant circulant",
      "E. Biopsie médullaire"
    ],
    correctAnswers: [1],
    explanation: "Chez une femme jeune avec saignement cutanéo-muqueux, TCA et TP normaux, numération normale : la maladie de Willebrand est la plus fréquente. Le dosage du VWF:Ag et VWF:RCo est l'examen clé.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-05',
    courseId: 'crs-hemato-2',
    questionNumber: 5,
    type: 'QCM',
    content: "Un patient cirrhotique Child C présente un syndrome hémorragique diffus. TP bas, TCA allongé, plaquettes à 80 000, fibrinogène normal, D-dimères légèrement élevés. Le mécanisme principal est :",
    options: [
      "A. CIVD avec hyperfibrinolyse",
      "B. Hypovitaminose K secondaire à la cholestase",
      "C. Hémodilution et thrombopénie centrale",
      "D. Insuffisance hépatocellulaire avec diminution des facteurs II, VII, IX, X",
      "E. Hémophilie acquise par auto-anticorps anti-FVIII"
    ],
    correctAnswers: [3],
    explanation: "L’insuffisance hépatocellulaire sévère entraîne une synthèse diminuée des facteurs vitamine K-dépendants (II, VII, IX, X) et du facteur V. Le facteur VIII reste normal ou élevé car synthétisé aussi par l'endothélium.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-06',
    courseId: 'crs-hemato-2',
    questionNumber: 6,
    type: 'QCM',
    content: "Un homme de 20 ans a des saignements après extraction dentaire et des hématomes musculaires à l’effort. Examens : plaquettes normales, TCA allongé (ratio 2,5), TQ normal. Après mélange avec plasma témoin, le TCA se normalise. Que suspecter ?",
    options: [
      "A. Inhibiteur acquis de facteur VIII (hémophilie acquise)",
      "B. Déficit en facteur VIII ou IX (hémophilie)",
      "C. Anticoagulant lupique",
      "D. Déficit en facteur XII",
      "E. Carence en vitamine K"
    ],
    correctAnswers: [1],
    explanation: "La normalisation du TCA après mélange avec plasma normal (test de Rosner/mélange correcteur) élimine un inhibiteur circulant et affirme un déficit constitutionnel en facteur (FVIII ou FIX).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-07',
    courseId: 'crs-hemato-2',
    questionNumber: 7,
    type: 'QCM',
    content: "Le syndrome de Bernard-Soulier est dû à un déficit en :",
    options: [
      "A. Glycoprotéine IIb/IIIa (GPIIbIIIa)",
      "B. Granules plaquettaires δ",
      "C. Complexe GPIb/IX/V",
      "D. Facteur Willebrand",
      "E. Facteur XIII"
    ],
    correctAnswers: [2],
    explanation: "Le syndrome de Bernard-Soulier touche l’adhérence plaquettaire : anomalie du récepteur GPIb/IX/V (dont le ligand est le VWF). La thrombasthénie de Glanzmann correspond au déficit en GPIIb/IIIa (agrégation).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-08',
    courseId: 'crs-hemato-2',
    questionNumber: 8,
    type: 'QCM',
    content: "Parmi ces médicaments, lequel peut induire une thrombopathie acquise par inhibition des fonctions plaquettaires ?",
    options: [
      "A. Amoxicilline",
      "B. Paracétamol",
      "C. Clopidogrel",
      "D. Metformine",
      "E. Oméprazole"
    ],
    correctAnswers: [2],
    explanation: "Le clopidogrel (antiagrégant plaquettaire) inhibe de manière irréversible le récepteur P2Y12 de l’ADP, induisant une thrombopathie acquise.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-09',
    courseId: 'crs-hemato-2',
    questionNumber: 9,
    type: 'QCM',
    content: "Une patiente de 70 ans, sans antécédent hémorragique, présente un hématome géant du bras spontané, TCA allongé non corrigé par le mélange, TP normal. Diagnostic le plus probable ?",
    options: [
      "A. Hémophilie B asymptomatique jusque tard",
      "B. Hémophilie acquise (anti-FVIII)",
      "C. Maladie de Willebrand type 2N",
      "D. CIVD chronique",
      "E. Déficit en facteur XI"
    ],
    correctAnswers: [1],
    explanation: "L’hémophilie acquise est due à des auto-anticorps anti-FVIII, touchant le sujet âgé sans antécédent, avec TCA allongé non corrigé par le plasma témoin.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-10',
    courseId: 'crs-hemato-2',
    questionNumber: 10,
    type: 'QCM',
    content: "La triade hypofibrinogénémie, thrombopénie, TP & TCA allongés, D-dimères très élevés évoque :",
    options: [
      "A. Insuffisance hépatique terminale",
      "B. CIVD (coagulation intravasculaire disséminée)",
      "C. Carence en vitamine K",
      "D. Hémophilie A sévère",
      "E. Maladie de Willebrand type 3"
    ],
    correctAnswers: [1],
    explanation: "La CIVD associe thrombopénie de consommation, allongement TP/TCA, hypofibrinogénémie et élévation massive des D-dimères par fibrinolyse réactionnelle.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-11',
    courseId: 'crs-hemato-2',
    questionNumber: 11,
    type: 'QCM',
    content: "Le temps d’occlusion (PFA-100) allongé avec collagène-ADP et collagène-épinéphrine, un dosage VWF:Ag diminué et VWF:RCo diminué de façon parallèle évoque quel type de maladie de Willebrand ?",
    options: [
      "A. Type 2A",
      "B. Type 2B",
      "C. Type 1",
      "D. Type 2M",
      "E. Type 3"
    ],
    correctAnswers: [2],
    explanation: "Type 1 : déficit quantitatif partiel (VWF:Ag et VWF:RCo diminués de façon parallèle avec rapport > 0,7). Dans le type 2, le déficit est qualitatif avec rapport < 0,6.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-12',
    courseId: 'crs-hemato-2',
    questionNumber: 12,
    type: 'QCM',
    content: "Un homme de 45 ans, éthylique chronique, présente un purpura, un allongement du TP et TCA, une thrombopénie modérée à 80 000. Quel examen complémentaire confirme une carence en vitamine K ?",
    options: [
      "A. Dosage du facteur VIII",
      "B. Dosage des facteurs II, VII, IX, X",
      "C. Taux de fibrinogène",
      "D. Temps de thrombine",
      "E. Recherche d’anticoagulant lupique"
    ],
    correctAnswers: [1],
    explanation: "La carence en vitamine K entraîne une diminution des facteurs II, VII, IX, X avec conservation du facteur V (non vitamine K-dépendant).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-13',
    courseId: 'crs-hemato-2',
    questionNumber: 13,
    type: 'QCM',
    content: "La distinction entre thrombopénie centrale (médullaire) et périphérique repose sur :",
    options: [
      "A. Le taux de plaquettes",
      "B. Le myélogramme et la recherche de mégacaryocytes",
      "C. Le dosage des D-dimères",
      "D. Le TCA",
      "E. Le temps de saignement"
    ],
    correctAnswers: [1],
    explanation: "Le myélogramme étudie les mégacaryocytes : absents ou diminués dans les causes centrales (aplasie, leucémie, myélodysplasie) ; normaux ou augmentés dans les causes périphériques (PTI, hypersplénisme).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-14',
    courseId: 'crs-hemato-2',
    questionNumber: 14,
    type: 'QCM',
    content: "Un enfant présente un purpura pétéchial généralisé, épistaxis, plaquettes 12 000, hémoglobine normale. Moelle riche en mégacaryocytes. Le diagnostic le plus probable est :",
    options: [
      "A. Leucémie aiguë lymphoblastique",
      "B. Purpura thrombopénique immunologique (PTI)",
      "C. Syndrome myélodysplasique",
      "D. Thrombopénie d’héparine",
      "E. Maladie de Bernard-Soulier"
    ],
    correctAnswers: [1],
    explanation: "PTI : thrombopénie périphérique immunologique isolée de l’enfant, moelle riche en mégacaryocytes, sans blastes.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-15',
    courseId: 'crs-hemato-2',
    questionNumber: 15,
    type: 'QCM',
    content: "Dans la maladie de Willebrand type 2B, quelle particularité biologique peut être observée ?",
    options: [
      "A. Thrombocytose",
      "B. Thrombopénie modérée",
      "C. TCA constamment très allongé",
      "D. Absence de VWF multimères de haut poids moléculaire",
      "E. TP allongé"
    ],
    correctAnswers: [1],
    explanation: "Le variant 2B présente une affinité accrue du VWF pour les plaquettes, induisant une agrégation plaquettaire spontanée et une thrombopénie modérée fluctuante.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-02-16',
    courseId: 'crs-hemato-2',
    questionNumber: 16,
    type: 'QCM',
    content: "Le bilan de CIVD typique montre :",
    options: [
      "A. Fibrinogène élevé, D-dimères normaux",
      "B. Thrombopénie, hypofibrinogénémie, D-dimères élevés, TP/TCA allongés",
      "C. TCA seul allongé, facteur VIII diminué",
      "D. Hyperfibrinogénémie, plaquettes basses",
      "E. TP allongé corrigé par la vitamine K"
    ],
    correctAnswers: [1],
    explanation: "La CIVD associe consommation des facteurs et des plaquettes, et activation de la fibrinolyse secondaire (D-dimères très élevés).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-17',
    courseId: 'crs-hemato-2',
    questionNumber: 17,
    type: 'QCM',
    content: "Une hémophilie B (Christmas disease) correspond à un déficit en :",
    options: [
      "A. Facteur VIII",
      "B. Facteur IX",
      "C. Facteur XI",
      "D. Facteur VII",
      "E. Facteur X"
    ],
    correctAnswers: [1],
    explanation: "Hémophilie A = FVIII ; Hémophilie B = FIX. Toutes deux sont récessives liées à l'X.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-18',
    courseId: 'crs-hemato-2',
    questionNumber: 18,
    type: 'QCM',
    content: "Quel test permet le dépistage de la maladie de Willebrand en routine ?",
    options: [
      "A. Temps de thrombine",
      "B. Temps de Quick (TP)",
      "C. PFA-100 ou dosage du VWF",
      "D. Taux de plaquettes",
      "E. Fibrinogène"
    ],
    correctAnswers: [2],
    explanation: "Le PFA-100 (temps d’occlusion) est le test de dépistage de l’hémostase primaire, et les dosages de VWF:Ag / VWF:RCo posent le diagnostic.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-19',
    courseId: 'crs-hemato-2',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans le syndrome hémorragique d’origine fibrinolytique primaire, quel bilan est typique ?",
    options: [
      "A. Thrombopénie sévère, D-dimères bas",
      "B. TP allongé, fibrinogène normal, D-dimères élevés",
      "C. Allongement du temps de thrombine, diminution du fibrinogène, D-dimères élevés, plaquettes normales",
      "D. TCA allongé isolé",
      "E. TP allongé corrigé par K"
    ],
    correctAnswers: [2],
    explanation: "La fibrinolyse primaire détruit le fibrinogène circulant sans consommation plaquettaire initiale majeure, le temps de thrombine est très allongé.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-02-20',
    courseId: 'crs-hemato-2',
    questionNumber: 20,
    type: 'QCM',
    content: "Une thrombopathie constitutionnelle rare touchant l’agrégation plaquettaire par anomalie du récepteur GPIIb/IIIa est :",
    options: [
      "A. Syndrome de Bernard-Soulier",
      "B. Maladie de Glanzmann (thrombasthénie)",
      "C. Maladie de Willebrand type 3",
      "D. Syndrome de Hermansky-Pudlak",
      "E. Déficit en facteur XIII"
    ],
    correctAnswers: [1],
    explanation: "Thrombasthénie de Glanzmann = déficit en intégrine alphaIIb/beta3 (GPIIb/IIIa), défaut d'agrégation plaquettaire. Bernard-Soulier = GPIb/IX/V (adhésion).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-21',
    courseId: 'crs-hemato-2',
    questionNumber: 21,
    type: 'QCM',
    content: "Un TCA allongé, TP normal, avec antécédents d’hématomes après extraction dentaire et d’épistaxis, plaquettes normales, chez un homme de 22 ans : quel facteur est probablement diminué ?",
    options: [
      "A. Facteur VII",
      "B. Facteur II",
      "C. Facteur VIII ou IX",
      "D. Facteur V",
      "E. Facteur XIII"
    ],
    correctAnswers: [2],
    explanation: "TCA allongé isolé (voie endogène) chez un homme jeune avec saignements = déficit en FVIII (Hémophilie A) ou FIX (Hémophilie B).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-22',
    courseId: 'crs-hemato-2',
    questionNumber: 22,
    type: 'QCM',
    content: "La carence martiale peut être la conséquence de :",
    options: [
      "A. Hémarthroses chroniques",
      "B. Syndrome hémorragique muqueux (ménorragies, épistaxis itératives)",
      "C. Hémophilie sévère",
      "D. Purpura thrombopénique",
      "E. CIVD aiguë"
    ],
    correctAnswers: [1],
    explanation: "Les pertes sanguines répétées par saignements cutanéo-muqueux extériorisés (ménorragies, épistaxis, digestifs) mènent à une carence martiale par déperdition de fer.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-23',
    courseId: 'crs-hemato-2',
    questionNumber: 23,
    type: 'QCM',
    content: "Un patient sous aspirine quotidienne présente des ecchymoses. La numération plaquettaire est normale. Le mécanisme est :",
    options: [
      "A. Thrombopénie immune",
      "B. Thrombopathie par inhibition irréversible de la cyclo-oxygénase (COX-1)",
      "C. Carence en vitamine K",
      "D. Induction d’anticoagulant lupique",
      "E. Hypersplénisme"
    ],
    correctAnswers: [1],
    explanation: "L’aspirine acétyle irréversiblement la COX-1 plaquettaire, supprimant la synthèse de thromboxane A2 (TXA2) pendant toute la durée de vie des plaquettes (7-10 jours).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-24',
    courseId: 'crs-hemato-2',
    questionNumber: 24,
    type: 'QCM',
    content: "Dans la maladie de Willebrand acquise, quelle étiologie faut-il rechercher en priorité chez le sujet âgé ?",
    options: [
      "A. Hémophilie A associée",
      "B. Cirrhose hépatique",
      "C. Hypothyroïdie, dysglobulinémie monoclonale, valvulopathie (sténose aortique)",
      "D. Hyperparathyroïdie",
      "E. Déficit en antithrombine"
    ],
    correctAnswers: [2],
    explanation: "La maladie de Willebrand acquise complique typiquement les gammapathies monoclonales (MGUS), les syndromes lymphoprolifératifs, le rétrécissement aortique calcifié (syndrome de Heyde) et l'hypothyroïdie.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-02-25',
    courseId: 'crs-hemato-2',
    questionNumber: 25,
    type: 'QCM',
    content: "Quel est le seuil de risque hémorragique spontané majeur lié à la thrombopénie selon le cours ?",
    options: [
      "A. < 100 000/mm³",
      "B. < 80 000/mm³",
      "C. < 50 000/mm³",
      "D. < 30 000/mm³",
      "E. < 10 000/mm³"
    ],
    correctAnswers: [3],
    explanation: "Le risque de saignement spontané augmente nettement sous 30 000/mm³ (< 30 G/L), et devient critique engageant le pronostic vital sous 10 000/mm³.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES FOR LESSON 2
  {
    id: 'q-hem-02-c01',
    courseId: 'crs-hemato-2',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Mme S., 32 ans, sans antécédents, consulte pour des ménorragies abondantes depuis l’adolescence nécessitant une supplémentation martiale. Pas de saignement post-opératoire après césarienne. Examen clinique : pâleur, quelques ecchymoses aux membres. Bilan : Hb 9,8 g/dL, VGM 72 fL, plaquettes 320 000, TCA 30s (témoin 30), TP 100%, fibrinogène 3,5 g/L. Aucun antécédent familial. Quelle est l’hypothèse diagnostique la plus probable ?",
    options: [
      "A. Hémophilie A mineure",
      "B. Maladie de Willebrand type 1",
      "C. Thrombopénie constitutionnelle",
      "D. Thrombasthénie de Glanzmann",
      "E. Carence en vitamine K"
    ],
    correctAnswers: [1],
    explanation: "Les ménorragies chroniques + anémie ferriprive + bilan hémostatique standard normal (plaquettes, TCA, TP normaux) sont très évocateurs d’une maladie de Willebrand type 1 (déficit quantitatif partiel).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-c02',
    courseId: 'crs-hemato-2',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel examen biologique spécifique demandez-vous pour confirmer ce diagnostic ?",
    options: [
      "A. Dosage des facteurs VIII et IX",
      "B. Temps de saignement (Ivy)",
      "C. Anticorps antiplaquettaires",
      "D. VWF:Ag et VWF:RCo + FVIII",
      "E. Électrophorèse des protéines"
    ],
    correctAnswers: [3],
    explanation: "Le bilan spécifique de la maladie de Willebrand inclut le dosage antigénique (VWF:Ag), l'activité cofacteur de la ristocétine (VWF:RCo) et le taux de FVIII.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-c03',
    courseId: 'crs-hemato-2',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 1) : Mr B., 60 ans, sans antécédents hémorragiques personnels ni familiaux, hospitalisé pour un hématome géant du bras gauche apparu spontanément. Bilan : Hb 10 g/L, plaquettes 280 000, TCA 65s (témoin 30), TP 95%. Le mélange TCA + plasma témoin donne 58s (non corrigé). Quelle est l’étiologie la plus probable ?",
    options: [
      "A. Hémophilie A modérée révélée tardivement",
      "B. Anticoagulant circulant (anticoagulant lupique)",
      "C. Hémophilie acquise (inhibiteur anti-FVIII)",
      "D. Déficit en facteur XII",
      "E. Maladie de Willebrand type 3"
    ],
    correctAnswers: [2],
    explanation: "Sujet âgé, saignements graves cutanéo-musculaires spontanés, TCA allongé non corrigé par le mélange → Hémophilie acquise par auto-anticorps anti-FVIII.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-c04',
    courseId: 'crs-hemato-2',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 2) : Quel dosage confirme formellement l'hémophilie acquise ?",
    options: [
      "A. Facteur VIII diminué + recherche et titrage d’anticorps anti-FVIII (unités Bethesda)",
      "B. Facteur IX diminué",
      "C. VWF:Ag effondré",
      "D. Temps de thrombine allongé",
      "E. Test à la ristocétine"
    ],
    correctAnswers: [0],
    explanation: "Dosage du facteur VIII effondré associé à la quantification du titre de l'inhibiteur par la méthode de Bethesda.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-c05',
    courseId: 'crs-hemato-2',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Patient de 45 ans, choc septique sur pyélonéphrite. Apparition de purpura nécrotique, saignement au point de ponction vasculaire, oligurie. Biologie : plaquettes 40 000, TP 35%, TCA 72s, fibrinogène 0,9 g/L, D-dimères > 10 000 ng/mL. Diagnostic le plus probable ?",
    options: [
      "A. CIVD (Coagulation intravasculaire disséminée)",
      "B. Insuffisance hépatique aiguë",
      "C. Hypovitaminose K",
      "D. Hémophilie acquise",
      "E. Thrombopénie immunologique"
    ],
    correctAnswers: [0],
    explanation: "Contexte de sepsis sévère + consommation des plaquettes et du fibrinogène + TP/TCA très allongés + D-dimères massifs = CIVD.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-c06',
    courseId: 'crs-hemato-2',
    questionNumber: 31,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un garçon de 8 ans, en bonne santé habituelle, présente depuis 2 jours des pétéchies aux membres inférieurs et épistaxis. NFS : plaquettes 8 000, Hb 12, leucocytes 7000. Frottis sanguin : pas de schizocytes, quelques mégacaryocytes sur moelle. Quelle est la prise en charge initiale la plus appropriée ?",
    options: [
      "A. Corticothérapie après diagnostic de PTI",
      "B. Transfusion plaquettaire systématique",
      "C. Vitamine K",
      "D. Facteur VII activé",
      "E. Chimiothérapie"
    ],
    correctAnswers: [0],
    explanation: "PTI aigu de l'enfant : corticothérapie orale ou IgIV en fonction de la gravité clinique. Pas de transfusion plaquettaire prophylactique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-02-c07',
    courseId: 'crs-hemato-2',
    questionNumber: 32,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 : Mr K., 58 ans, cirrhose alcoolique Child C. Présente des ecchymoses diffuses, une épistaxis. Bilan : TP 35%, TCA 1,8 ratio, plaquettes 70 000, fibrinogène 2,1 g/L, FVIII élevé à 180%. Quel mécanisme est prédominant ?",
    options: [
      "A. CIVD",
      "B. Hypovitaminose K fonctionnelle",
      "C. Déficit de synthèse hépatique des facteurs (sauf FVIII)",
      "D. Hémophilie associée",
      "E. Hyperfibrinolyse primitive"
    ],
    correctAnswers: [2],
    explanation: "Insuffisance hépatocellulaire sévère : baisse des facteurs synthétisés par le foie (II, VII, IX, X, V) avec conservation du FVIII produit par l'endothélium.",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_2_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-02-mindmap',
    courseId: 'crs-hemato-2',
    title: 'Mind Map : CAT devant un syndrome hémorragique',
    type: 'mindmap',
    content: `# Mind Map : CAT devant un Syndrome Hémorragique - Pr BenBournane

## 1. Distinction Clinique Fondamentale
- **Hémostase Primaire (Plaquettes / vWF)** :
  - Saignements cutanéo-muqueux : purpura pétéchial, ecchymoses, épistaxis, gingivorragies, ménorragies
  - Spontanés, immédiats après blessure
- **Coagulation (Facteurs de coagulation)** :
  - Saignements profonds : hématomes musculaires, hémarthroses, saignements viscéraux
  - Provoqués, souvent retardés (quelques heures à 48h)

## 2. Bilan de Première Intention
- NFS / Plaquettes
- Taux de Prothrombine (TP) / INR
- Temps de Céphaline Activée (TCA)
- Dosage du Fibrinogène

## 3. Algorithme Décisionnel
- **Plaquettes < 150 000** :
  - Myélogramme : Central (aplasie, leucémie) vs Périphérique (PTI, hypersplénisme)
- **TCA allongé isolé (TP normal, Plaquettes normales)** :
  - Test de mélange avec plasma témoin :
    - *Corrigé* : Déficit en FVIII (Hémophilie A), FIX (Hémophilie B), FXI
    - *Non corrigé* : Inhibiteur (Hémophilie acquise anti-VIII) ou anticoagulant lupique
- **TP bas + TCA allongé** :
  - Fibrinogène bas + D-dimères très élevés = CIVD
  - Fibrinogène normal/bas + FVIII normal/élevé = Insuffisance hépatique
  - FV normal + FII, VII, IX, X bas = Carence en Vitamine K`,
    author: 'Pr BenBournane | CHU Blida'
  },
  {
    id: 'res-hem-02-astuces',
    courseId: 'crs-hemato-2',
    title: 'Astuces & Pièges aux Concours : Syndrome Hémorragique',
    type: 'astuce',
    content: `### Pièges Incontournables aux Concours

1. **Peau & Muqueuses vs Articulations :**
   - *Peau et muqueuses* = Hémostase primaire (Plaquettes, Willebrand).
   - *Hémarthroses et hématomes profonds* = Coagulation (Hémophilie).
2. **Facteurs Vitamine K dépendants :**
   - **II, VII, IX, X** + Protéines C et S. Le facteur V n'en fait PAS partie (il permet de distinguer la carence en vit K de l'insuffisance hépatique).
3. **Maladie de Willebrand Type 2B :**
   - Le seul type de maladie de Willebrand qui s'accompagne d'une **thrombopénie** modérée.
4. **Bernard-Soulier vs Glanzmann :**
   - **Bernard-Soulier** : Problème d'**adhérence** (complexe GPIb/IX/V).
   - **Glanzmann** : Problème d'**agrégation** ("Glue", intégrine GPIIb/IIIa).
5. **Hémophilie acquise :**
   - Sujet âgé sans antécédent familial avec gros hématome spontané et TCA allongé **non corrigé au mélange** = Hémophilie acquise par auto-anticorps anti-FVIII.`,
    author: 'Pr BenBournane | CHU Blida'
  }
];

// ==========================================
// LESSON 3: ADÉNOPATHIE & SPLÉNOMÉGALIE - Dr BENLABIOD
// ==========================================
export const HEMATO_LESSON_3_QUESTIONS: Question[] = [
  {
    id: 'q-hem-03-01',
    courseId: 'crs-hemato-3',
    questionNumber: 1,
    type: 'QCM',
    content: "Selon le cours, une adénopathie périphérique est considérée comme suspecte lorsque son diamètre dépasse :",
    options: [
      "A. 0,5 cm",
      "B. 1 cm",
      "C. 1,5 cm",
      "D. 2 cm",
      "E. 3 cm"
    ],
    correctAnswers: [1],
    explanation: "Le seuil de 1 cm est retenu pour toute adénopathie périphérique ; au-delà, une évaluation étiologique s’impose.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-02',
    courseId: 'crs-hemato-3',
    questionNumber: 2,
    type: 'QCM',
    content: "Une adénopathie sus-claviculaire gauche (ganglion de Troisier) oriente prioritairement vers une tumeur primitive de quel organe ?",
    options: [
      "A. Sein",
      "B. Thyroïde",
      "C. Poumon ou estomac",
      "D. Cavum",
      "E. Membre supérieur"
    ],
    correctAnswers: [2],
    explanation: "Le canal thoracique se jette à gauche : le ganglion de Troisier sus-claviculaire gauche draine les viscères sous-diaphragmatiques (estomac, côlon, testicule) et le poumon gauche.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-03',
    courseId: 'crs-hemato-3',
    questionNumber: 3,
    type: 'QCM',
    content: "Parmi ces propositions, quel élément peut simuler une adénopathie cervicale et nécessite une échographie ?",
    options: [
      "A. Kyste du cordon spermatique",
      "B. Anévrisme carotidien",
      "C. Hernie crurale",
      "D. Lipome axillaire",
      "E. Éctopie testiculaire"
    ],
    correctAnswers: [1],
    explanation: "Au niveau cervical, les diagnostics différentiels d'une adénopathie incluent l'anévrisme carotidien (masse pulsatile), le kyste thyréoglosse, la glande sous-maxillaire ptôsée et les kystes branchiaux.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-04',
    courseId: 'crs-hemato-3',
    questionNumber: 4,
    type: 'QCM',
    content: "Quelle conduite est formellement déconseillée avant une biopsie ganglionnaire selon le document ?",
    options: [
      "A. Faire un hémogramme",
      "B. Prescrire une corticothérapie",
      "C. Réaliser une échographie",
      "D. Rechercher des signes généraux",
      "E. Ponction à l’aiguille fine"
    ],
    correctAnswers: [1],
    explanation: "JAMAIS DE CORTICOÏDES avant biopsie ganglionnaire : ils peuvent modifier l’architecture histologique, induire une nécrose cellulaire et fausser le diagnostic d'un lymphome ou d'une tuberculose.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-05',
    courseId: 'crs-hemato-3',
    questionNumber: 5,
    type: 'QCM',
    content: "La ponction à l’aiguille fine d’un ganglion montre des macrophages abondants sans cellules atypiques. Quelle est la conduite recommandée ?",
    options: [
      "A. Biopsie ganglionnaire en urgence",
      "B. Traitement antituberculeux probabiliste",
      "C. Biopsie inutile, surveillance ou étiologie bénigne",
      "D. Corticothérapie systématique",
      "E. Exérèse chirurgicale large"
    ],
    correctAnswers: [2],
    explanation: "Une adénite réactionnelle bénigne non spécifique ou d'inoculation riche en macrophages sans atypie dispense de la biopsie chirurgicale d'emblée.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-06',
    courseId: 'crs-hemato-3',
    questionNumber: 6,
    type: 'QCM',
    content: "Quelle caractéristique clinique est la plus évocatrice d’une adénopathie métastatique ?",
    options: [
      "A. Mobile, ferme, douloureuse",
      "B. Adhérente, dure, indolore",
      "C. Fluctuante avec fistulisation",
      "D. Siège inguinal bilatéral",
      "E. Associée à une fièvre et splénomégalie"
    ],
    correctAnswers: [1],
    explanation: "Une adénopathie métastatique est de consistance pierreuse/dure, indolore, et fixée aux plans profonds ou superficiels.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-07',
    courseId: 'crs-hemato-3',
    questionNumber: 7,
    type: 'QCM',
    content: "Concernant la splénomégalie, quelle affirmation est VRAIE ?",
    options: [
      "A. Toute rate palpable chez l’adulte est normale",
      "B. Seule une rate dépassant l’ombilic est pathologique",
      "C. Toute rate palpable chez l’adulte est pathologique (sauf nourrisson)",
      "D. La rate n’est jamais palpable en décubitus dorsal",
      "E. La percussion n’a aucun intérêt"
    ],
    correctAnswers: [2],
    explanation: "Physiologiquement, la rate adulte n'est pas palpable. Toute rate palpable chez l'adulte est pathologique (seul le nourrisson peut avoir une rate palpable physiologique).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-08',
    courseId: 'crs-hemato-3',
    questionNumber: 8,
    type: 'QCM',
    content: "Un patient a une rate qui atteint la ligne horizontale passant par l’ombilic mais ne descend pas en dessous. Quel stade de Hackett ?",
    options: [
      "A. Stade 1",
      "B. Stade 2",
      "C. Stade 3",
      "D. Stade 4",
      "E. Stade 5"
    ],
    correctAnswers: [2],
    explanation: "Classification de Hackett : Stade 1 = palpable en inspiration profonde ; Stade 2 = palpable sans dépasser la ligne ombilico-costale moyenne ; Stade 3 = atteint l’ombilic ; Stade 4 = dépasse l'ombilic vers les épines iliaques ; Stade 5 = plonge dans la fosse iliaque.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-09',
    courseId: 'crs-hemato-3',
    questionNumber: 9,
    type: 'QCM',
    content: "Parmi ces hémopathies, laquelle est classiquement responsable d’une splénomégalie volumineuse (parfois splénomégalie myéloïde géante) ?",
    options: [
      "A. Leucémie lymphoïde chronique stade A",
      "B. Leucémie myéloïde chronique (LMC)",
      "C. Anémie de Biermer",
      "D. Purpura thrombopénique immunologique",
      "E. Hémophilie A"
    ],
    correctAnswers: [1],
    explanation: "La leucémie myéloïde chronique (LMC) et la myélofibrose primitive sont les grandes causes de splénomégalie volumineuse géante (dépassant souvent l'ombilic).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-10',
    courseId: 'crs-hemato-3',
    questionNumber: 10,
    type: 'QCM',
    content: "Une splénomégalie fébrile avec altération de l’état général, chez un patient revenant d’une zone endémique méditerranéenne, fait suspecter :",
    options: [
      "A. Leishmaniose viscérale (Kala-Azar)",
      "B. Paludisme simple",
      "C. Mononucléose infectieuse",
      "D. Toxoplasmose ganglionnaire",
      "E. Amibiase hépatique"
    ],
    correctAnswers: [0],
    explanation: "La leishmaniose viscérale (Kala-azar, Leishmania infantum) sévit en Algérie et Méditerranée : triade fièvre au long cours + splénomégalie volumineuse + pancytopénie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-11',
    courseId: 'crs-hemato-3',
    questionNumber: 11,
    type: 'QCM',
    content: "Quel examen est recommandé en première intention pour confirmer et caractériser une splénomégalie ?",
    options: [
      "A. TDM thoracique",
      "B. IRM cérébrale",
      "C. Échographie abdominale",
      "D. Radiographie de l’abdomen sans préparation",
      "E. Fibroscopie oesogastroduodénale"
    ],
    correctAnswers: [2],
    explanation: "L'échographie abdominale confirme les mensurations de la rate (>12 cm de grand axe), analyse son échostructure et recherche des signes d'hypertension portale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-12',
    courseId: 'crs-hemato-3',
    questionNumber: 12,
    type: 'QCM',
    content: "Un patient avec adénopathie cervicale reçoit une corticothérapie avant tout bilan étiologique. Quel risque majeur ?",
    options: [
      "A. Aggravation de la douleur",
      "B. Fausse régression et retard diagnostic (lymphome/tuberculose)",
      "C. Hémorragie digestive",
      "D. Hypertension artérielle maligne",
      "E. Nécrose ganglionnaire stérile"
    ],
    correctAnswers: [1],
    explanation: "La corticothérapie fait fondre temporairement les lymphomes et modifie les granulomes tuberculeux, rendant la biopsie ultérieure faussement négative et retardant la prise en charge salvatrice.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-13',
    courseId: 'crs-hemato-3',
    questionNumber: 13,
    type: 'QCM',
    content: "La tuberculose ganglionnaire se manifeste typiquement par :",
    options: [
      "A. Adénopathie aiguë fébrile très douloureuse",
      "B. Adénopathie chronique cervicale, indolore, ferme ou fluctuante, parfois fistulisée",
      "C. Polyadénopathies diffuses fébriles avec splénomégalie majeure",
      "D. Adénopathie sus-claviculaire gauche isolée",
      "E. Adénopathie mobile, petite taille, régressive sous amoxicilline"
    ],
    correctAnswers: [1],
    explanation: "La tuberculose ganglionnaire (écrouelles / adénite tuberculeuse) : adénopathies cervicales chroniques indolores, évoluant vers le ramollissement et la fistulisation à la peau avec pus caséeux.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-14',
    courseId: 'crs-hemato-3',
    questionNumber: 14,
    type: 'QCM',
    content: "Une splénomégalie associée à une ascite, des varices œsophagiennes et une circulation collatérale abdominale oriente vers :",
    options: [
      "A. Splénomégalie myéloïde",
      "B. Hypertension portale",
      "C. Leucémie aiguë",
      "D. Leishmaniose viscérale",
      "E. Amylose primitive"
    ],
    correctAnswers: [1],
    explanation: "Splénomégalie congestive consécutive à l'hypertension portale (cirrhose, thrombose porte).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-15',
    courseId: 'crs-hemato-3',
    questionNumber: 15,
    type: 'QCM',
    content: "Une splénomégalie douloureuse, spontanément ou à la palpation, évoque en premier :",
    options: [
      "A. Splénomégalie chronique de la LMC",
      "B. Infarctus splénique ou splénomégalie aiguë inflammatoire",
      "C. Sarcoïdose splénique",
      "D. Maladie de Gaucher",
      "E. Métastase splénique calcifiée"
    ],
    correctAnswers: [1],
    explanation: "La douleur splénique aiguë avec frottement péritonéal traduit une mise en tension brutale de la capsule ou un infarctus splénique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-16',
    courseId: 'crs-hemato-3',
    questionNumber: 16,
    type: 'QCM',
    content: "Devant une adénopathie, l’hémogramme peut montrer des lymphocytes hyperbasophiles, des cellules blastiques ou une lymphocytose >10 G/L. Quelle étiologie est la plus probable ?",
    options: [
      "A. Toxoplasmose",
      "B. Hémopathie maligne (LNH, LLC, leucémie)",
      "C. Sarcoïdose",
      "D. Adénite à pyogènes",
      "E. Maladie sérique"
    ],
    correctAnswers: [1],
    explanation: "La présence de blastes circulants ou d'une lymphocytose monoclonale oriente formellement vers une hémopathie maligne sous-jacente.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-17',
    courseId: 'crs-hemato-3',
    questionNumber: 17,
    type: 'QCM',
    content: "Un jeune homme de 20 ans présente une angine érythémateuse, fièvre, adénopathies cervicales et une splénomégalie. L’agent causal probable est :",
    options: [
      "A. Toxoplasma gondii",
      "B. VIH",
      "C. EBV (virus d’Epstein-Barr)",
      "D. Mycobacterium tuberculosis",
      "E. Streptocoque pyogène"
    ],
    correctAnswers: [2],
    explanation: "Mononucléose infectieuse (MNI à EBV) : angine fébrile + polyadénopathies cervicales postérieures + splénomégalie (50%) + syndrome mononucléosique.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-18',
    courseId: 'crs-hemato-3',
    questionNumber: 18,
    type: 'QCM',
    content: "Dans la sarcoïdose, les adénopathies sont le plus souvent :",
    options: [
      "A. Uniquement périphériques et douloureuses",
      "B. Profondes médiastinales hilaires bilatérales et symétriques",
      "C. Isolées inguinales fistulisées",
      "D. Sus-claviculaires uniques",
      "E. Cervicales suppurées"
    ],
    correctAnswers: [1],
    explanation: "Adénopathies hilaires bilatérales, symétriques, non compressives au scanner thoracique (stade I de la sarcoïdose).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-19',
    courseId: 'crs-hemato-3',
    questionNumber: 19,
    type: 'QCM',
    content: "La présence d’une adénopathie épitrochléenne (au coude) doit faire rechercher :",
    options: [
      "A. Tumeur du cavum",
      "B. Lymphome ou infection du membre supérieur / sarcoïdose",
      "C. Cancer du sein controlatéral",
      "D. Tuberculose iliaque",
      "E. Métastase de cancer bronchique"
    ],
    correctAnswers: [1],
    explanation: "L'adénopathie épitrochléenne draine la main et l'avant-bras ; une adénopathie épitrochléenne bilatérale sans infection oriente vers un lymphome ou une sarcoïdose.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-20',
    courseId: 'crs-hemato-3',
    questionNumber: 20,
    type: 'QCM',
    content: "Une splénomégalie avec pancytopénie, moelle riche en cellules spumeuses surchargées en lipides (cellules de Gaucher) évoque :",
    options: [
      "A. Splénomégalie congestive",
      "B. Maladie de surcharge (Gaucher)",
      "C. Leucémie aiguë",
      "D. Cirrhose biliaire primitive",
      "E. Leishmaniose viscérale"
    ],
    correctAnswers: [1],
    explanation: "La maladie de Gaucher (déficit en glucocérébrosidase) est la maladie de surcharge lysosomale la plus fréquente, donnant une hépatosplénomégalie massive avec pancytopénie.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-21',
    courseId: 'crs-hemato-3',
    questionNumber: 21,
    type: 'QCM',
    content: "Parmi ces situations, laquelle impose une biopsie ganglionnaire chirurgicale sans délai ?",
    options: [
      "A. Adénopathie sous-maxillaire de 0,8 cm mobile chez un enfant fébrile",
      "B. Adénopathie axillaire chez une patiente avec mammographie normale",
      "C. Adénopathie sus-claviculaire dure, fixée, >2 cm, sans étiologie infectieuse évidente",
      "D. Adénopathie inguinale douloureuse avec plaie au pied",
      "E. Adénopathie cervicale de 1 cm, régressive après traitement antibiotique bien conduit"
    ],
    correctAnswers: [2],
    explanation: "Adénopathie sus-claviculaire, dure, fixée, de taille > 2 cm chez l'adulte = suspecte de malignité (lymphome ou métastase), impose la biopsie-exérèse.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-22',
    courseId: 'crs-hemato-3',
    questionNumber: 22,
    type: 'QCM',
    content: "La splénectomie à visée diagnostique est indiquée principalement dans :",
    options: [
      "A. Splénomégalie congestive avec varices",
      "B. Splénomégalie fébrile d’origine palustre",
      "C. Splénomégalie isolée après bilan invasif non concluant suspectant un lymphome ou tumeur maligne",
      "D. Toute splénomégalie de stade 2",
      "E. Splénomégalie chez le nouveau-né"
    ],
    correctAnswers: [2],
    explanation: "En cas de splénomégalie isolée inexpliquée après échec des examens biologiques, médullaires et d'imagerie, la splénectomie diagnostique permet l'analyse histologique.",
    difficulty: 'moyen'
  },
  {
    id: 'q-hem-03-23',
    courseId: 'crs-hemato-3',
    questionNumber: 23,
    type: 'QCM',
    content: "Quelle localisation est fréquente dans la maladie de Hodgkin ?",
    options: [
      "A. Adénopathie épitrochléenne bilatérale",
      "B. Adénopathie cervicale ou sus-claviculaire indolore, ferme, élastique, souvent associée à des signes B",
      "C. Adénopathie inguinale fistuleuse",
      "D. Adénopathie médiastinale isolée sans retentissement",
      "E. Polyadénopathies douloureuses aiguës"
    ],
    correctAnswers: [1],
    explanation: "La maladie de Hodgkin se révèle typiquement par une adénopathie cervicale basse ou sus-claviculaire indolore, ferme, asymétrique chez l'adulte jeune.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-24',
    courseId: 'crs-hemato-3',
    questionNumber: 24,
    type: 'QCM',
    content: "À l’échographie, une splénomégalie hétérogène avec zones hypoéchogènes multiples évoque :",
    options: [
      "A. Rate congestive homogène",
      "B. Infiltration lymphomateuse ou métastases",
      "C. Leishmaniose typique homogène",
      "D. Maladie de Gaucher (hyperéchogène)",
      "E. Infarctus splénique unique"
    ],
    correctAnswers: [1],
    explanation: "Des nodules spléniques hypoéchogènes multiples au sein d'une rate augmentée de volume orientent vers un lymphome ou des localisations secondaires.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-25',
    courseId: 'crs-hemato-3',
    questionNumber: 25,
    type: 'QCM',
    content: "La toxoplasmose ganglionnaire cervicale est habituellement :",
    options: [
      "A. Isolée, petite taille, parfois douloureuse, sans altération majeure de l'état général",
      "B. Polyadénopathie fébrile avec hépatomégalie",
      "C. Adénopathie fluctuante fistulisée",
      "D. Adénopathie calcifiée à la radiographie",
      "E. Adénopathie maligne évolutive rapidement"
    ],
    correctAnswers: [0],
    explanation: "La toxoplasmose ganglionnaire chez l'immunocompétent donne typiquement une adénite cervicale postérieure isolée, subaiguë, modérée, spontanément résolutive.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES FOR LESSON 3
  {
    id: 'q-hem-03-c01',
    courseId: 'crs-hemato-3',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Patient de 58 ans, tabagique, consulte pour une adénopathie sus-claviculaire gauche découverte fortuitement, indolore, dure, fixée, mesurant 3 cm. Pas de fièvre, altération de l’état général modérée. CRP élevée, hémogramme normal. Quelle est la première hypothèse diagnostique devant ce type d’adénopathie ?",
    options: [
      "A. Tuberculose ganglionnaire fistuleuse",
      "B. Adénite réactionnelle à pyogène",
      "C. Métastase d’un cancer broncho-pulmonaire ou digestif (signe de Troisier)",
      "D. Sarcoïdose médiastinale",
      "E. Maladie de Castleman"
    ],
    correctAnswers: [2],
    explanation: "Adénopathie sus-claviculaire gauche pierreuse, fixée chez un sujet de 58 ans = Ganglion de Troisier métastatique jusqu'à preuve du contraire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-c02',
    courseId: 'crs-hemato-3',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel examen complémentaire doit être réalisé en priorité pour obtenir la certitude histologique ?",
    options: [
      "A. Ponction à l’aiguille fine seule",
      "B. Biopsie-exérèse chirurgicale du ganglion pour examen anatomopathologique",
      "C. Corticothérapie test d'épreuve",
      "D. Sérologie VIH et toxoplasmose",
      "E. Échographie cervicale de contrôle à 3 mois"
    ],
    correctAnswers: [1],
    explanation: "La biopsie-exérèse chirurgicale en bloc permet l'étude de l'architecture ganglionnaire, l'immunohistochimie et le typage précis.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-c03',
    courseId: 'crs-hemato-3',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 1) : Patiente de 32 ans, enseignante, se plaint depuis 10 jours d’angine fébrile, asthénie, adénopathies cervicales postérieures bilatérales fermes, splénomégalie stade 2 (débord costal de 3 cm). Pas d’ictère. Hémogramme : lymphocytose avec grands lymphocytes hyperbasophiles (syndrome mononucléosique). Le diagnostic le plus probable est :",
    options: [
      "A. Leucémie aiguë lymphoblastique",
      "B. Mononucléose infectieuse (EBV)",
      "C. Tuberculose disséminée",
      "D. Lupus érythémateux systémique",
      "E. Paludisme viscéral"
    ],
    correctAnswers: [1],
    explanation: "Angine fébrile + polyadénopathies + splénomégalie + syndrome mononucléosique chez une femme jeune = MNI (EBV).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-c04',
    courseId: 'crs-hemato-3',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 (Partie 2) : Quel examen biologique simple confirme le diagnostic d'infection aiguë à EBV ?",
    options: [
      "A. Recherche de cellules de Sternberg",
      "B. Sérologie VIH",
      "C. MNI-test ou sérologie EBV spécifique (IgM anti-VCA positives)",
      "D. Biopsie médullaire",
      "E. Électrophorèse des protéines sériques"
    ],
    correctAnswers: [2],
    explanation: "Le MNI-test et la sérologie EBV avec présence d'IgM anti-VCA signent l'infection aiguë.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-c05',
    courseId: 'crs-hemato-3',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 (Partie 1) : Patient de 50 ans, sans fièvre, rate palpable jusqu’à l’épine iliaque antéro-supérieure (stade 4 de Hackett), ferme, indolore. Hémogramme : hyperleucocytose majeure à 140 G/L avec myélémie harmonieuse et basophilie. Quelle est l’hémopathie la plus caractéristique de ce tableau ?",
    options: [
      "A. Leucémie lymphoïde chronique",
      "B. Leucémie myéloïde chronique (LMC)",
      "C. Myélome multiple",
      "D. Lymphome splénique",
      "E. Anémie hémolytique autoimmune"
    ],
    correctAnswers: [1],
    explanation: "Splénomégalie géante + hyperleucocytose neutrophile avec myélémie harmonieuse et basophilie = Leucémie Myéloïde Chronique (LMC).",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-c06',
    courseId: 'crs-hemato-3',
    questionNumber: 31,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 (Partie 2) : Le geste diagnostique cytogénétique indispensable pour confirmer et guider le traitement ciblé est :",
    options: [
      "A. Biopsie ganglionnaire cervicale",
      "B. Ponction de moelle osseuse pour caryotype médullaire et RT-PCR (BCR-ABL)",
      "C. Splénectomie d’emblée",
      "D. TEP-scan",
      "E. Dosage de la vitamine B12"
    ],
    correctAnswers: [1],
    explanation: "Mise en évidence du chromosome Philadelphie t(9;22) par caryotype et du transcrit chimérique BCR-ABL par RT-PCR.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-c07',
    courseId: 'crs-hemato-3',
    questionNumber: 32,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 (Partie 1) : Patient alcoolique chronique, 55 ans, présente une splénomégalie stade 3, une ascite modérée, des varices œsophagiennes à l’endoscopie, ictère discret. Le mécanisme de la splénomégalie est :",
    options: [
      "A. Infiltration tumorale",
      "B. Splénomégalie congestive par hypertension portale",
      "C. Splénomégalie infectieuse",
      "D. Métastase splénique",
      "E. Myélofibrose primitive"
    ],
    correctAnswers: [1],
    explanation: "La splénomégalie congestive est secondaire à la stase veineuse par bloc intrahépatique cirrhotique dans le cadre de l'hypertension portale.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-c08',
    courseId: 'crs-hemato-3',
    questionNumber: 33,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 (Partie 2) : Quel examen non invasif évalue au mieux le système veineux porte ?",
    options: [
      "A. Biopsie splénique",
      "B. Échographie Doppler abdominale (calibre et flux porte)",
      "C. TEP-TDM",
      "D. Angio-IRM cérébrale",
      "E. Ponction lombaire"
    ],
    correctAnswers: [1],
    explanation: "L'écho-Doppler abdominal évalue la perméabilité et le sens du flux de la veine porte (flux hépatopète vs hépatofuge) et dépiste les voies de dérivation portosystémiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-c09',
    courseId: 'crs-hemato-3',
    questionNumber: 34,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 (Partie 1) : Enfant de 9 ans, adénopathie sous-angulo-maxillaire droite de 1,5 cm, ferme, mobile, non douloureuse, absence de fièvre ni altération générale. Sérologie VIH négative. Quelle étiologie bénigne est la plus fréquente devant ce tableau ?",
    options: [
      "A. Tuberculose ganglionnaire fistulisée",
      "B. Toxoplasmose ganglionnaire",
      "C. Lymphome malin",
      "D. Adénite à pyogènes aiguë",
      "E. Métastase de rhabdomyosarcome"
    ],
    correctAnswers: [1],
    explanation: "Adénite subaiguë/chronique isolée non suppurée chez l'enfant en bon état général = toxoplasmose ganglionnaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-hem-03-c10',
    courseId: 'crs-hemato-3',
    questionNumber: 35,
    type: 'Cas Clinique',
    content: "Cas Clinique 5 (Partie 2) : Devant cette adénopathie bénigne très probable, quelle attitude est recommandée ?",
    options: [
      "A. Biopsie chirurgicale en urgence",
      "B. Surveillance clinique et confirmation sérologique (IgG et IgM spécifiques)",
      "C. Corticothérapie prolongée",
      "D. Radiothérapie locale",
      "E. Ponction ganglionnaire répétée tous les 15 jours"
    ],
    correctAnswers: [1],
    explanation: "La règle est de ne pas biopsier toute adénopathie : confirmation par sérologie et surveillance clinique de la régression spontanée.",
    difficulty: 'facile'
  }
];

export const HEMATO_LESSON_3_RESOURCES: CourseResource[] = [
  {
    id: 'res-hem-03-mindmap',
    courseId: 'crs-hemato-3',
    title: 'Mind Map : Adénopathies & Splénomégalie',
    type: 'mindmap',
    content: `# Mind Map : Adénopathies & Splénomégalie - Dr Benlabiod

## 1. Adénopathie (> 1 cm)
- **Caractères Cliniques** :
  - *Maligne* : Dure, pierreuse, indolore, fixée, non inflammatoire, évolutive.
  - *Inflammatoire / Infectieuse* : Douloureuse, chaude, mobile, signes locaux.
- **Règles d'Or** :
  - Ne pas tout biopsier !
  - **JAMAIS de corticoïdes** avant la biopsie ganglionnaire.
  - Ganglion de Troisier (sus-claviculaire gauche) = Métastase sous-diaphragmatique / pulmonaire.
- **Étiologies** :
  - Infectieuses : Tuberculose (fistulisation, caséum), MNI (EBV), Toxoplasmose, VIH, pyogènes.
  - Malignes : Métastases (VADS, sein, poumon, tube digestif), Hémopathies (Lymphomes LH/LNH, LLC).
  - Inflammatoires : Sarcoïdose (médiastinale bilatérale), Lupus.

## 2. Splénomégalie (Rate palpable = Pathologique chez l'adulte)
- **Stades de Hackett** :
  - Stade 1 : Palpable en inspiration profonde
  - Stade 2 : Palpable sans dépasser la ligne ombilico-costale
  - Stade 3 : Atteint l’ombilic
  - Stade 4 : Entre ombilic et crête iliaque
  - Stade 5 : Plonge dans la fosse iliaque gauche
- **Étiologies Majeures** :
  - *Hématologiques* : LMC (splénomégalie géante), Myélofibrose, LLC, Anémies hémolytiques.
  - *Congestives* : Hypertension portale (Cirrhose, thrombose porte).
  - *Infectieuses* : Leishmaniose viscérale (Kala-Azar), Paludisme, Endocardite d'Osler, EBV.
  - *Surcharges* : Maladie de Gaucher, Amylose.`,
    author: 'Dr Benlabiod | Blida'
  },
  {
    id: 'res-hem-03-astuces',
    courseId: 'crs-hemato-3',
    title: 'Astuces & Pièges aux Concours : Adénopathies & Splénomégalie',
    type: 'astuce',
    content: `### Pièges Fréquents aux Examens

1. **JAMAIS DE CORTICOÏDES AVANT BIOPSIE :**
   - Piège n°1 absolu : prescririez-vous des corticoïdes pour faire dégonfler un gros ganglion suspect ? NON ! Cela stérilise le diagnostic histologique d'un lymphome.
2. **Rate normale chez l'adulte :**
   - Elle n'est **JAMAIS palpable** chez l'adulte normal (contrairement au nourrisson). Toute rate perçue sous le rebord costal est pathologique.
3. **Classification de Hackett :**
   - Mémoriser : 1 (inspire), 2 (sous-costal), 3 (ombilic), 4 (épine iliaque), 5 (fosse iliaque).
4. **Ganglion de Troisier :**
   - Toujours sus-claviculaire **gauche** (embouchure du canal thoracique).
5. **Kala-Azar (Leishmaniose viscérale) :**
   - Piège de l'étudiant en Algérie : enfant ou adulte avec fièvre au long cours + splénomégalie volumineuse + pancytopénie = penser Kala-Azar (médullogramme : corps de Leishman).`,
    author: 'Dr Benlabiod | Blida'
  }
];
