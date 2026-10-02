import { Question } from '../../types/medical';

export const CARDIOMYOPATHIES_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-cm-01',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel mode de transmission génétique est de loin le plus fréquent dans la cardiomyopathie hypertrophique (CMH) héréditaire ?",
    options: [
      "A) Autosomique dominant à pénétrance variable.",
      "B) Autosomique récessif strict.",
      "C) Lié à l'X récessif.",
      "D) Mitochondrial maternel exclusif.",
      "E) Polygénique complexe sans gène majeur."
    ],
    correctAnswers: [0],
    explanation: "La cardiomyopathie hypertrophique est la maladie génétique cardiaque la plus fréquente (1/500), transmise selon le mode autosomique dominant dans plus de 90% des cas familiaux, avec des mutations touchant principalement les protéines du sarcomère (MYBPC3, MYH7).",
    clinicalPearl: "CMH héréditaire : Transmission autosomique dominante à pénétrance variable (mutations du sarcomère cardiaque)."
  },
  {
    id: 'q-cm-02',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Dans la cardiomyopathie hypertrophique obstructive (CMHO), quelle manœuvre clinique augmente l'intensité du souffle systolique d'éjection intra-ventriculaire ?",
    options: [
      "A) La manœuvre de Valsalva (ou le passage en orthostatisme).",
      "B) L'accroupissement rapide (squatting).",
      "C) L'effort isométrique des deux mains (handgrip).",
      "D) L'inspiration profonde bloquée.",
      "E) La position de décubitus dorsal jambes surélevées."
    ],
    correctAnswers: [0],
    explanation: "Toute manœuvre qui diminue le volume télédiastolique du ventricule gauche (baisse de la précharge comme Valsalva ou l'orthostatisme) rapproche le septum du feuillet mitral et majore l'obstruction dynamique sous-aortique, renforçant le souffle.",
    clinicalPearl: "Souffle de CMHO : Augmenté par Valsalva et l'orthostatisme ; diminué par l'accroupissement (squatting)."
  },
  {
    id: 'q-cm-03',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel signe échocardiographique caractéristique de la CMHO correspond à l'attraction du feuillet antérieur mitral vers le septum interventriculaire en pleine systole ?",
    options: [
      "A) Le mouvement systolique antérieur (SAM : Systolic Anterior Motion) de la valve mitrale.",
      "B) Le claquement d'ouverture mitrale diastolique.",
      "C) Le notch protodiastolique de l'artère pulmonaire.",
      "D) Le roulement de Flint télédiastolique.",
      "E) Le prolapsus méso-systolique de la petite valve mitrale."
    ],
    correctAnswers: [0],
    explanation: "Le SAM (Systolic Anterior Motion) est le déplacement anormal vers l'avant du feuillet mitral antérieur en systole sous l'effet de succion (effet Venturi) créé par l'éjection VG accélérée, provoquant l'obstruction et une fuite mitrale méso-télésystolique dirigée en arrière.",
    clinicalPearl: "SAM mitral (Systolic Anterior Motion) = Mécanisme clé de l'obstruction dynamique intra-VG dans la CMHO."
  },
  {
    id: 'q-cm-04',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel traitement pharmacologique de première intention est indiqué pour réduire les symptômes et le gradient d'obstruction dans la CMHO ?",
    options: [
      "A) Les Bêta-bloquants non vasodilatateurs (Bisoprolol, Métoprolol ou Propranolol).",
      "B) Les diurétiques de l'anse à forte dose.",
      "C) Les dérivés nitrés d'action prolongée.",
      "D) La digoxine en perfusion intraveineuse.",
      "E) Les inhibiteurs de l'enzyme de conversion à dose maximale."
    ],
    correctAnswers: [0],
    explanation: "Les bêtabloquants réduisent la contractilité (inotropes négatifs) et allongent le temps de remplissage diastolique (chronotropes négatifs), ce qui diminue l'obstruction intra-VG et améliore la tolérance fonctionnelle.",
    clinicalPearl: "Traitement de première intention de la CMHO symptomatique = Bêtabloquants (titration progressive)."
  },
  {
    id: 'q-cm-05',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle classe médicamenteuse est FORMELLEMENT CONTRE-INDIQUÉE dans la cardiomyopathie hypertrophique obstructive en raison du risque de collapsus cardiovasculaire et d'aggravation de l'obstruction ?",
    options: [
      "A) Les dérivés nitrés (Trinitrine) et les inotropes positifs (Digoxine).",
      "B) Les bêta-bloquants cardiologiques.",
      "C) Les anticoagulants oraux directs.",
      "D) Les anti-arythmiques de classe III (Amiodarone).",
      "E) Les statines."
    ],
    correctAnswers: [0],
    explanation: "Les dérivés nitrés diminuent la précharge (diminuent le volume du VG) et aggravent spectaculairement l'obstruction intraventriculaire. La digoxine renforce la contraction du septum hypertrophié (inotropisme positif) et majore la sténose sous-aortique.",
    clinicalPearl: "CMHO : Contre-indication formelle aux dérivés nitrés, diurétiques à forte dose, dihydropyridines et inotropes positifs !"
  },
  {
    id: 'q-cm-06',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quel score de risque pronostique validé par l'ESC permet d'estimer le risque de mort subite à 5 ans pour décider de l'implantation d'un défibrillateur (DAI) en prévention primaire dans la CMH ?",
    options: [
      "A) Le score HCM Risk-SCD (âge, épaisseur maximale, gradient VG, antécédent familial de mort subite, TVNS, syncope inexpliquée, taille AG).",
      "B) Le score GRACE de risque ischémique.",
      "C) Le score de Timi pour l'angor.",
      "D) Le score de Baux pour les brûlures.",
      "E) Le score MELD hépatique."
    ],
    correctAnswers: [0],
    explanation: "Le modèle HCM Risk-SCD de l'ESC évalue le risque de mort subite à 5 ans. Si le score est >= 6% (haut risque), l'implantation d'un défibrillateur automatique implantable (DAI) en prévention primaire est recommandée (Classe IIa).",
    clinicalPearl: "Score HCM Risk-SCD >= 6% à 5 ans = Indication d'implantation d'un DAI en prévention primaire."
  },
  {
    id: 'q-cm-07',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la définition diagnostique échocardiographique de la cardiomyopathie dilatée (CMD) ?",
    options: [
      "A) Dilatation ventriculaire gauche (diamètre télédiastolique > 2 DS corrigé de la surface corporelle) avec altération de la fraction d'éjection (FEVG < 50%) non expliquée par une maladie coronaire ou valvulaire sévère.",
      "B) Épaisseur pariétale du septum interventriculaire > 15 mm avec FEVG normale.",
      "C) Dilatation atriale droite isolée sans atteinte ventriculaire.",
      "D) Prolapsus bivalvulaire mitral avec fuite minime.",
      "E) Épanchement péricardique liquidien > 20 mm."
    ],
    correctAnswers: [0],
    explanation: "La CMD se caractérise par une dilatation du VG associée à une dysfonction systolique globale (FEVG altérée), en l'absence de coronaropathie sténosante, d'hypertension sévère ou de valvulopathie primitive causale.",
    clinicalPearl: "CMD = Dilatation ventriculaire gauche + Dysfonction systolique globale en l'absence de coronaropathie obstructive."
  },
  {
    id: 'q-cm-08',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle toxique consommée en excès chronique est la cause non ischémique la plus fréquente de cardiomyopathie dilatée acquise potentiellement réversible à l'arrêt ?",
    options: [
      "A) L'alcool éthylique (cardiomyopathie éthylique).",
      "B) Le monoxyde de carbone professionnel.",
      "C) Le café en consommation modérée.",
      "D) Le lithium à dose thérapeutique.",
      "E) Le paracétamol."
    ],
    correctAnswers: [0],
    explanation: "L'intoxication alcoolique chronique (> 80 g/jour pendant plusieurs années) est une cause fréquente de CMD toxique. Le sevrage complet permet une récupération spectaculaire de la FEVG dans une proportion importante de cas.",
    clinicalPearl: "Cardiomyopathie alcoolique : Le sevrage alcoolique précoce et total permet la réversibilité de la dysfonction VG !"
  },
  {
    id: 'q-cm-09',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle chimiothérapie anticancéreuse est célèbre pour sa toxicité myocardique dose-dépendante cumulée pouvant induire une cardiomyopathie dilatée irréversible ?",
    options: [
      "A) Les anthracyclines (Doxorubicine, Daunorubicine).",
      "B) Le méthotrexate à faible dose.",
      "C) Le 5-Fluorouracile seul.",
      "D) Le cisplatine.",
      "E) La vincristine."
    ],
    correctAnswers: [0],
    explanation: "Les anthracyclines induisent un stress oxydatif et une nécrose des cardiomyocytes dose-dépendante cumulée (seuil critique pour la doxorubicine : 450-550 mg/m²), justifiant une surveillance étroite de la FEVG et du strain longitudinal (GLS).",
    clinicalPearl: "Cardiotoxicité des anthracyclines : Dose-dépendante cumulée et irréversible (surveillance échocardiographique régulière)."
  },
  {
    id: 'q-cm-10',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quelle est la principale étiologie générale des cardiomyopathies restrictives (CMR) dans les pays développés, caractérisée par une infiltration protéique anormale du myocarde ?",
    options: [
      "A) L'amylose cardiaque (AL à chaînes légères ou ATTR à transthyrétine).",
      "B) La sarcoïdose pulmonaire stade I.",
      "C) La maladie de Fabry non traitée.",
      "D) L'hémochromatose génétique précoce.",
      "E) La maladie de Chagas endémique."
    ],
    correctAnswers: [0],
    explanation: "L'amylose cardiaque est la cause majeure de cardiomyopathie restrictive. Elle se manifeste par des parois épaissies et brillantes (aspect granité scintillant), une dysfonction diastolique sévère, une dilatation bi-auriculaire et un microvoltage paradoxal à l'ECG.",
    clinicalPearl: "Amylose cardiaque : Parois myocardiques épaissies à l'écho MAIS microvoltage à l'ECG = Signe pathognomonique."
  },
  {
    id: 'q-cm-11',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen d'imagerie moderne est devenu indispensable dans le bilan d'une cardiomyopathie pour analyser la fibrose myocardique via le rehaussement tardif au Gadolinium (LGE) ?",
    options: [
      "A) L'IRM cardiaque (résonance magnétique cardiaque).",
      "B) Le scanner coronaire sans contraste.",
      "C) La scintigraphie myocardique au Thallium.",
      "D) La tomographie par émission de positons cérébrale.",
      "E) La radiographie thoracique en inspiration/expiration."
    ],
    correctAnswers: [0],
    explanation: "L'IRM cardiaque est la technique de référence pour caractériser le tissu myocardique : quantification précise des volumes et de la masse, recherche d'œdème (séquences T2), et détection de la fibrose interstitielle par rehaussement tardif (LGE), élément pronostique majeur.",
    clinicalPearl: "IRM cardiaque : Le rehaussement tardif (LGE) visualise la fibrose myocardique et guide le risque rythmique."
  },
  {
    id: 'q-cm-12',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la cardiomyopathie arythmogène du ventricule droit (CAVD), quelle anomalie ECG classique est observée en fin de complexe QRS dans les dérivations précordiales droites (V1-V3) ?",
    options: [
      "A) L'onde Epsilon.",
      "B) L'onde delta.",
      "C) L'onde Osborn d'hypothermie.",
      "D) L'onde T géante d'ischémie.",
      "E) L'onde U de surcharge potassique."
    ],
    correctAnswers: [0],
    explanation: "L'onde Epsilon est une déflexion de faible amplitude à la fin du QRS ou au début du segment ST dans les dérivations V1 à V3, traduisant un retard de conduction pariétale dans les zones de tissu fibro-adipeux du ventricule droit.",
    clinicalPearl: "Onde Epsilon en V1-V3 = Marqueur diagnostique majeur de cardiomyopathie arythmogène du ventricule droit (CAVD)."
  },
  {
    id: 'q-cm-13',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le tableau clinique typique du syndrome de Takotsubo (cardiomyopathie de stress ou ballonisation apicale) ?",
    options: [
      "A) Tableau simulant un syndrome coronarien aigu avec sus-décalage de ST chez une femme ménopausée après un stress émotionnel intense, avec coronaires normales à la coronarographie.",
      "B) Endocardite bactérienne avec abcès de l'anneau aortique.",
      "C) Thrombose de valve mécanique en position mitrale.",
      "D) Embolie gazeuse après plongée sous-marine.",
      "E) Hémorragie méningée avec mort cérébrale d'emblée."
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Takotsubo reproduit les signes d'un infarctus aigu (douleur, sus-décalage ST, troponine positive) déclenché par un stress aigu, avec une akinésie apicale transitoire en amphore à l'écho et des artères coronaires angiographiquement saines.",
    clinicalPearl: "Takotsubo : Douleur angineuse + Sus-décalage ST post-stress chez la femme ménopausée, coronaires angiographiquement saines."
  },
  {
    id: 'q-cm-14',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la principale mesure hygiéno-diététique obligatoire chez tout patient porteur d'une cardiomyopathie hypertrophique génétique ?",
    options: [
      "A) L'interdiction formelle de pratiquer des sports de compétition ou d'endurance intensive.",
      "B) Le régime cétogène sans glucides.",
      "C) La prise systématique de suppléments de créatine.",
      "D) L'exposition solaire quotidienne d'au moins 2 heures.",
      "E) La consommation obligatoire de 5 tasses de thé vert par jour."
    ],
    correctAnswers: [0],
    explanation: "La CMH est la première cause de mort subite chez le sportif jeune de moins de 35 ans. La contre-indication aux sports de compétition et aux activités physiques d'intensité vigoureuse est une recommandation fondamentale de sécurité.",
    clinicalPearl: "CMH : Contre-indication stricte aux sports de compétition (1ère cause de mort subite du sportif jeune)."
  },
  {
    id: 'q-cm-15',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans le dépistage familial d'une cardiomyopathie hypertrophique héréditaire, qui doit bénéficier d'un bilan cardiologique de dépistage (ECG + Échocardiographie) ?",
    options: [
      "A) Tous les apparentés au premier degré (parents, frères/sœurs, enfants).",
      "B) Uniquement les enfants de sexe masculin.",
      "C) Seulement les membres de la famille qui présentent des symptômes.",
      "D) Les cousins au troisième degré uniquement.",
      "E) Personne, le dépistage familial n'étant pas recommandé."
    ],
    correctAnswers: [0],
    explanation: "En raison du mode de transmission autosomique dominant avec risque de transmission de 50%, tous les apparentés au premier degré d'un patient atteint doivent bénéficier d'un dépistage clinique, électrocardiographique et échocardiographique régulier.",
    clinicalPearl: "Dépistage de la CMH : ECG + Échocardiographie tous les 3-5 ans pour TOUS les apparentés au 1er degré."
  },
  {
    id: 'q-cm-16',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel nouveau médicament inhibiteur sélectif allostérique de la myosine cardiaque a démontré une efficacité majeure pour réduire le gradient d'obstruction dans la CMHO ?",
    options: [
      "A) Le Mavacamten.",
      "B) Le Lévosimendan.",
      "C) La Dobutamine.",
      "D) La Milrinone.",
      "E) L'Isoprénaline."
    ],
    correctAnswers: [0],
    explanation: "Le Mavacamten est le premier inhibiteur direct et réversible de la myosine cardiaque sarcomérique. Il diminue la formation excessive de ponts d'actomyosine, réduisant le gradient d'obstruction sous-aortique et améliorant la FEVG et les symptômes.",
    clinicalPearl: "Mavacamten : Premier inhibiteur direct de la myosine cardiaque dans la CMHO obstructive symptomatique."
  },
  {
    id: 'q-cm-17',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle intervention non pharmacologique percutanée consiste à injecter de l'alcool pur dans une branche coronaire septale pour réduire l'obstruction dans la CMHO résistante aux médicaments ?",
    options: [
      "A) L'alcoolisation septale percutanée (ablation septale à l'alcool).",
      "B) L'angioplastie au ballonnet de l'artère circonflexe.",
      "C) La pose d'un stent pharmaco-actif dans l'IVA.",
      "D) L'athérectomie rotationnelle de la carotide interne.",
      "E) La dénervation rénale par radiofréquence."
    ],
    correctAnswers: [0],
    explanation: "L'alcoolisation septale percutanée crée un infarctus thérapeutique contrôlé et ciblé de la partie hypertrophiée du septum interventriculaire basal, diminuant son épaisseur et levant l'obstacle à l'éjection VG.",
    clinicalPearl: "CMHO sévère résistante : Myectomie chirurgicale de Morrow ou Alcoolisation septale percutanée."
  },
  {
    id: 'q-cm-18',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle complication rythmique auriculaire est la plus fréquente dans la CMH et justifie une anticoagulation orale précoce quel que soit le score CHA2DS2-VASc ?",
    options: [
      "A) La fibrillation auriculaire (FA).",
      "B) La tachycardie sinusale inappropriée.",
      "C) La maladie de l'oreillette saine.",
      "D) Le rythme idioventriculaire accéléré.",
      "E) L'asystolie d'effort."
    ],
    correctAnswers: [0],
    explanation: "La FA survient chez 20 à 25% des patients CMH du fait de la dilatation atriale gauche et de l'augmentation des pressions de remplissage. Elle est très mal tolérée hémodynamiquement et comporte un risque thrombo-embolique majeur justifiant une anticoagulation à vie d'emblée.",
    clinicalPearl: "FA sur CMH = Anticoagulation curative à vie obligatoire d'emblée (quel que soit le score CHA2DS2-VASc) !"
  },
  {
    id: 'q-cm-19',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle surcharge d'organe génétique traitable par saignées (phlébotomies) peut se manifester par une cardiomyopathie dilatée ou mixte avec pigmentation cutanée et diabète ?",
    options: [
      "A) L'hémochromatose génétique (mutation C282Y du gène HFE).",
      "B) La maladie de Wilson hépatique.",
      "C) Le déficit en alpha-1 antitrypsine.",
      "D) La tyrosinémie de type 1.",
      "E) La maladie de Gaucher."
    ],
    correctAnswers: [0],
    explanation: "L'hémochromatose primitive entraîne une surcharge en fer toxique dans les cardiomyocytes (coefficient de saturation de la transferrine > 45%, ferritine très élevée), conduisant à une cardiomyopathie dilato-restrictive traitable efficacement par saignées précoces.",
    clinicalPearl: "Hémochromatose : Surcharge en fer myocardique réversible sous déplétion martiale par saignées itératives."
  },
  {
    id: 'q-cm-20',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel seuil d'épaisseur maximale de paroi myocardique ventriculaire gauche (à l'écho ou à l'IRM) en l'absence d'autre cause d'hypertrophie définit le critère diagnostique formel de CMH chez l'adulte ?",
    options: [
      "A) Épaisseur maximale >= 15 mm (ou >= 13 mm en cas d'antécédent familial certain).",
      "B) Épaisseur maximale >= 8 mm.",
      "C) Épaisseur maximale >= 25 mm obligatoire.",
      "D) Épaisseur de paroi postérieure isolée à 11 mm.",
      "E) Diamètre télédiastolique > 75 mm."
    ],
    correctAnswers: [0],
    explanation: "Chez l'adulte, le diagnostic morphologique de CMH repose sur la mise en évidence d'une épaisseur pariétale maximale >= 15 mm dans un ou plusieurs segments du VG, non expliquée par les conditions de charge (HTA sévère ou rétrécissement aortique). Chez un apparenté au 1er degré, le seuil est abaissé à >= 13 mm.",
    clinicalPearl: "Critère morphologique de CMH = Épaisseur pariétale VG >= 15 mm (ou >= 13 mm si contexte familial au 1er degré)."
  },
  {
    id: 'q-cm-21',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans la cardiomyopathie restrictive, quel profil de flux transmitral au Doppler pulsé est caractéristique du syndrome restrictif hémodynamique ?",
    options: [
      "A) Onde E très ample et étroite, onde A minuscule, rapport E/A > 2 et temps de décélération de l'onde E très court (< 140 ms).",
      "B) Onde E petite, onde A prédominante avec rapport E/A < 0,8.",
      "C) Onde E et onde A fusionnées avec fréquence cardiaque à 50 bpm.",
      "D) Absence totale d'onde E.",
      "E) Inversion complète de l'onde S pulmonaire."
    ],
    correctAnswers: [0],
    explanation: "Le profil restrictif mitral traduit des pressions auriculaires gauches très élevées avec remplissage passif rapide brutal (onde E géante) et une compliance VG effondrée stoppant prématurément le flux (temps de décélération court < 140 ms, E/A > 2).",
    clinicalPearl: "Doppler mitral restrictif : Onde E géante + onde A minuscule + temps de décélération < 140 ms (E/A > 2)."
  },
  {
    id: 'q-cm-22',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel traitement spécifique stabilisateur de la protéine tétramérique transthyrétine a révolutionné le pronostic de l'amylose cardiaque à transthyrétine (ATTR) ?",
    options: [
      "A) Le Tafamidis.",
      "B) Le Cyclophosphamide.",
      "C) La Colchicine.",
      "D) Le Bortézomib.",
      "E) L'Hydroxychloroquine."
    ],
    correctAnswers: [0],
    explanation: "Le Tafamidis est un stabilisateur spécifique du tétramère de la transthyrétine (sauvage ou mutée). Il empêche sa dissociation en monomères amyloïdogènes, réduisant significativement la mortalité et les hospitalisations CV dans l'amylose ATTR.",
    clinicalPearl: "Amylose cardiaque ATTR : Tafamidis = Traitement étiologique spécifique qui stabilise la transthyrétine."
  },
  {
    id: 'q-cm-23',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle anomalie génétique de la chaîne lourde de bêta-myosine (MYH7) ou de la protéine C de liaison à la myosine (MYBPC3) est responsable de plus de la moitié des cas familiaux identifiés de :",
    options: [
      "A) Cardiomyopathie hypertrophique (CMH).",
      "B) Maladie de Kawasaki.",
      "C) Tétralogie de Fallot.",
      "D) Coarctation de l'aorte thoracique.",
      "E) Athérosclérose coronarienne précoce."
    ],
    correctAnswers: [0],
    explanation: "Les mutations des gènes MYBPC3 et MYH7 codant pour les protéines du sarcomère contractile représentent à elles seules plus de 70% des anomalies génétiques identifiées dans la cardiomyopathie hypertrophique sarcomérique.",
    clinicalPearl: "Gènes clés de la CMH : MYBPC3 et MYH7 (protéines sarcomériques)."
  },
  {
    id: 'q-cm-24',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle forme de cardiomyopathie du péripartum (CMPP) survient classiquement au cours du dernier mois de grossesse ou dans les 5 mois post-partum chez une femme sans cardiopathie préalable ?",
    options: [
      "A) Une cardiomyopathie dilatée aiguë avec dysfonction systolique sévère (FEVG < 45%).",
      "B) Une sténose pulmonaire congénitale isolée.",
      "C) Une péricardite constrictive calcifiée.",
      "D) Un anévrisme du sinus de Valsalva.",
      "E) Une communication interauriculaire de type ostium secundum."
    ],
    correctAnswers: [0],
    explanation: "La CMPP (syndrome de Meadows) est une forme d'insuffisance cardiaque aiguë par dysfonction systolique VG (FE < 45%) survenant en fin de grossesse ou dans les 5 mois du post-partum, favorisée par des fragments anti-angiogéniques de prolactine clivée (16-kDa prolactine).",
    clinicalPearl: "Cardiomyopathie du péripartum : Insuffisance cardiaque avec FE < 45% survenant de M-1 à M+5 de l'accouchement."
  },
  {
    id: 'q-cm-25',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quelle intervention chirurgicale de référence sous circulation extracorporelle consiste à réséquer une portion du septum hypertrophié obstructif dans la CMHO sévère (intervention de Morrow) ?",
    options: [
      "A) La myectomie septale chirurgicale trans-aortique.",
      "B) L'ablation par radiofréquence du nœud atrioventriculaire.",
      "C) Le cerclage de l'artère pulmonaire.",
      "D) L'opération de Ross.",
      "E) L'opération de Fontan."
    ],
    correctAnswers: [0],
    explanation: "La myectomie septale trans-aortique (intervention de Morrow) est le traitement chirurgical gold standard de la CMHO chez les patients symptomatiques avec gradient intraventriculaire >= 50 mmHg réfractaire au traitement médical maximal.",
    clinicalPearl: "Traitement chirurgical de référence de la CMHO réfractaire = Myectomie chirurgicale trans-aortique de Morrow."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-cm-01',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : La syncope d'effort chez le jeune footballeur\nUn jeune homme de 19 ans, joueur de football en club universitaire, présente une perte de connaissance brève survenue en plein match lors d'une accélération. À l'interrogatoire, son oncle maternel est décédé subitement à l'âge de 24 ans. L'examen retrouve un souffle systolique éjectionnel rude méso-cardiaque 3/6 s'accentuant nettement au passage à l'orthostatisme. L'ECG montre une HVG électrique majeure avec ondes T négatives géantes en précordiales et ondes Q étroites profondes en D1, aVL, V5-V6.\nQ1. Quel est le diagnostic le plus probable ?\nQ2. Quelle mesure préventive immédiate et formelle devez-vous lui notifier dès la consultation ?",
    options: [
      "A) Cardiomyopathie hypertrophique obstructive (CMHO) / Arrêt définitif immédiat du sport de compétition.",
      "B) Syncope vagale bénigne / Reprise immédiate des entraînements.",
      "C) Rétrécissement mitral rhumatismal / Prescription de digoxine.",
      "D) Dissection aortique aiguë / Remplacement prothétique immédiat.",
      "E) Syndrome de Wolff-Parkinson-White sans gravité."
    ],
    correctAnswers: [0],
    explanation: "L'association syncope d'effort chez un jeune sportif, souffle augmenté par les manœuvres diminuant la précharge, antécédent familial de mort subite et ECG évocateur pose le diagnostic de CMHO. La première mesure médico-légale et de sécurité vitale est la contre-indication stricte et définitive aux sports de compétition.",
    clinicalPearl: "Syncope d'effort + souffle rude augmenté par Valsalva chez un jeune sportif = CMHO → Interdiction formelle du sport de compétition."
  },
  {
    id: 'cas-cm-02',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : L'insuffisance cardiaque inexpliquée de l'adulte jeune\nUn homme de 36 ans sans antécédent cardiovasculaire consulte pour une dyspnée d'effort d'aggravation rapide avec œdèmes des membres inférieurs et prise de 5 kg en 3 semaines. L'auscultation retrouve un bruit de galop B3 et un souffle d'insuffisance mitrale holosystolique fonctionnel. La radiographie thoracique montre une cardiomégalie globale avec index cardio-thoracique à 0,62. L'échocardiographie montre un VG très dilaté (DTD 68 mm) avec FEVG effondrée à 24% sans anomalie segmentaire de la cinétique. La coronarographie élimine toute sténose athéromateuse.\nQ1. Quel est le diagnostic retenu ?\nQ2. Quelle quadrithérapie fondamentale doit être instaurée pour améliorer sa survie ?",
    options: [
      "A) Cardiomyopathie dilatée (CMD) primitive non ischémique / Quadrithérapie fondamentale : ARNI (Sacubitril/Valsartan) ou IEC + Bêtabloquant (Bisoprolol/Carvédilol) + ARM (Spironolactone) + Inhibiteur du SGLT2 (Dapagliflozine).",
      "B) Infarctus du myocarde transmural / Fibrinolyse intraveineuse d'urgence.",
      "C) Péricardite aiguë bénigne / Aspirine forte dose seule.",
      "D) Rétrécissement aortique critique / Valvuloplastie percutanée immédiate.",
      "E) Embolie pulmonaire bilatérale / Thrombolyse curative."
    ],
    correctAnswers: [0],
    explanation: "La dilatation ventriculaire gauche majeure avec altération globale de la FEVG et coronaires saines confirme la cardiomyopathie dilatée. Le traitement étiopathogénique indispensable repose sur la quadrithérapie neuro-hormonale optimale (Fantastic Four) pour bloquer le remodelage et prévenir la mort subite.",
    clinicalPearl: "CMD avec FEVG <= 40% : Quadrithérapie d'emblée (ARNI/IEC + Bêtabloquant + ARM + iSGLT2) pour sauver le pronostic vital."
  },
  {
    id: 'cas-cm-03',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : Le paradoxe électrique de l'amylose\nUn homme de 74 ans suivi pour un canal carpien bilatéral opéré consulte pour une dyspnée d'effort et une asthénie. L'échocardiographie transthoracique montre une hypertrophie biventriculaire concentrique sévère (septum à 18 mm) avec aspect scintillant granité du myocarde, dilatation bi-auriculaire majeure et petit épanchement péricardique. L'ECG 12 dérivations montre un microvoltage diffus dans les dérivations frontales (QRS < 5 mm) avec aspect de pseudonécrose en V1-V3.\nQ1. Quel diagnostic doit être évoqué en priorité absolue ?\nQ2. Quel examen d'imagerie isotopique moderne permet de poser le diagnostic d'amylose à transthyrétine (ATTR) sans biopsie ?",
    options: [
      "A) Amylose cardiaque à transthyrétine (ATTR) / Scintigraphie osseuse au diphosphonate (Technétium-99m DPD ou HMDP).",
      "B) Cardiopathie hypertensive simple / Échographie rénale doppler.",
      "C) Infarctus antérieur ancien / Scintigraphie pulmonaire de ventilation.",
      "D) Coarctation de l'aorte / Angioscanner de l'aorte abdominale.",
      "E) Myocardite virale aiguë à parvovirus B19 / Sérologies virales simples."
    ],
    correctAnswers: [0],
    explanation: "La discordance frappante entre une hypertrophie pariétale massive à l'écho et un microvoltage à l'ECG chez un sujet âgé aux antécédents de canal carpien bilatéral est pathognomonique de l'amylose cardiaque. La scintigraphie osseuse au Technétium (DPD ou HMDP) montrant une fixation myocardique de grade 2 ou 3 permet d'affirmer l'amylose ATTR sans biopsie myocardique si les chaînes légères sériques/urinaires sont normales.",
    clinicalPearl: "Canal carpien bilatéral + myocarde épais à l'écho + microvoltage ECG = Amylose cardiaque ATTR (Scintigraphie osseuse DPD)."
  },
  {
    id: 'cas-cm-04',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : La douleur thoracique post-émotionnelle (Takotsubo)\nUne femme de 66 ans sans facteur de risque cardiovasculaire est admise aux urgences pour une douleur rétrosternale constrictive violente survenue 1 heure après avoir appris le décès accidentel de son fils unique. La PA est à 105/65 mmHg, FC 88 bpm. L'ECG montre un sus-décalage du segment ST de 3 mm en V2-V5 avec allongement important du QT. La troponine I est modérément augmentée à 1,8 µg/L (normale < 0,04). La coronarographie en urgence montre un réseau coronaire strictement lisse sans sténose. La ventriculographie gauche montre une akinésie apicale et médio-ventriculaire avec hypercontractilité des segments basaux (aspect de piège à poulpe japonais).\nQ1. Quel est le diagnostic certain ?\nQ2. Quelle est l'évolution clinique et échocardiographique habituelle sous traitement symptomatique ?",
    options: [
      "A) Cardiomyopathie de stress de Takotsubo / Récupération complète spontanée ad integrum de la fonction ventriculaire gauche en quelques semaines.",
      "B) Infarctus transmural par dissection coronaire spontanée / Nécrose myocardique définitive irréversible.",
      "C) Dissection aortique rétrograde / Décès rapide inévitable sans chirurgie.",
      "D) Rupture de cordage mitral idiopathique / Chirurgie sous 24 heures.",
      "E) Spasme œsophagien diffus / Aucune atteinte myocardique."
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Takotsubo (cardiomyopathie par sidération myocardique médiée par un orage catécholaminergique post-stress) est caractérisé par une cinétique en amphore apicale sans lésion coronaire angiographique. Le pronostic est généralement favorable avec récupération complète de la contractilité ventriculaire gauche en 3 à 6 semaines sous traitement médical de soutien.",
    clinicalPearl: "Takotsubo : Ballonisation apicale post-stress à coronaires saines = Récupération complète ad integrum de la FEVG en quelques semaines."
  },
  {
    id: 'cas-cm-05',
    courseId: 'crs-cardiomyopathies',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Le choix du défibrillateur dans la CMH\nUn homme de 28 ans suivi pour CMH sarcomérique (mutation MYH7) consulte pour bilan de stratification rythmique. Il est asymptomatique sous Bisoprolol 5 mg/j. Le bilan retrouve : épaisseur maximale du septum à 26 mm, taille de l'atrium gauche à 48 mm, gradient intraventriculaire à 35 mmHg au repos. Le Holter-ECG des 48h objective 3 salves de tachycardie ventriculaire non soutenue (TVNS) de 6 complexes à 170 bpm. Son père est décédé subitement à l'âge de 38 ans. Le calcul du score ESC HCM Risk-SCD estime son risque de mort subite à 7,8% à 5 ans.\nQ1. Quel est le niveau de risque de mort subite de ce jeune patient ?\nQ2. Quelle thérapeutique de prévention de mort subite est formellement indiquée ?",
    options: [
      "A) Haut risque de mort subite (> 6% à 5 ans) / Implantation d'un défibrillateur automatique implantable (DAI) en prévention primaire.",
      "B) Risque faible (< 2%) / Arrêt de tout traitement et surveillance annuelle simple.",
      "C) Indication d'une greffe cardiaque en super-urgence.",
      "D) Alcoolisation septale percutanée d'emblée sans défibrillateur.",
      "E) Traitement par aspirine seule à vie."
    ],
    correctAnswers: [0],
    explanation: "Un score HCM Risk-SCD >= 6% à 5 ans chez un patient présentant des facteurs de gravité majeurs (antécédent familial au 1er degré de mort subite précoce, hypertrophie massive > 25 mm, salves de TVNS au Holter) constitue une indication recommandée (Classe IIa ESC) à l'implantation d'un DAI en prévention primaire.",
    clinicalPearl: "CMH avec score HCM Risk-SCD >= 6% et TVNS = Indication formelle d'implantation d'un DAI en prévention primaire."
  }
];
