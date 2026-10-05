import { Question, CourseResource } from '../../types/medical';

// Lesson 20: Bronchite Grippe Covid
export const PNEUMO_LESSON_20_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-20-01',
    courseId: 'crs-pneumo-20',
    questionNumber: 1,
    type: 'QCM',
    content: "Parmi les propositions suivantes concernant la bronchite aiguë du sujet sain, laquelle est exacte ?",
    options: [
      "A. Elle nécessite systématiquement une antibiothérapie probabiliste dès le diagnostic",
      "B. Elle est d'origine virale dans plus de 80 à 90% des cas",
      "C. L'expectoration purulente témoigne obligatoirement d'une surinfection bactérienne",
      "D. La radiographie thoracique systématique montre un foyer de condensation alvéolaire",
      "E. Elle s'accompagne constamment d'un syndrome obstructif irréversible"
    ],
    correctAnswers: [1],
    explanation: "La bronchite aiguë chez le sujet sain sans comorbidité est virale dans > 80-90% des cas (virus respiratoires courants). L'expectoration purulente est due à la nécrose et à la desquamation de l'épithélium bronchique et ne justifie pas d'antibiothérapie.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-02',
    courseId: 'crs-pneumo-20',
    questionNumber: 2,
    type: 'QCM',
    content: "Concernant le virus de la grippe (Influenza), cochez la proposition fausse :",
    options: [
      "A. C'est un virus à ARN segmenté, simple brin, enveloppé appartenant aux Orthomyxoviridae",
      "B. Le glissement antigénique (drift) résulte de mutations ponctuelles mineures des gènes HA ou NA",
      "C. La cassure antigénique (shift) ne concerne que le virus Influenza B",
      "D. L'hémagglutinine (HA) permet la fixation du virus aux résidus d'acide sialique cellulaire",
      "E. La neuraminidase (NA) permet le clivage enzymatique et la libération des virions néoformés"
    ],
    correctAnswers: [2],
    explanation: "FAUX : La cassure antigénique (shift) concerne UNIQUEMENT le virus Influenza A. Elle résulte d'un réassortiment génétique majeur entre souches animales et humaines, à l'origine des grandes pandémies mondiales.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-20-03',
    courseId: 'crs-pneumo-20',
    questionNumber: 3,
    type: 'QCM',
    content: "Quelle est la complication respiratoire bactérienne la plus fréquente et redoutable de la grippe chez le sujet fragilisé ?",
    options: [
      "A. Le pneumothorax suffocant sous tension",
      "B. La surinfection bactérienne bronchopulmonaire à Streptococcus pneumoniae ou Staphylococcus aureus",
      "C. L'embolie pulmonaire massive bilatérale",
      "D. La pleurésie purulente isolée à germes anaérobies stricts",
      "E. L'emphysème sous-cutané cervico-médiastinal"
    ],
    correctAnswers: [1],
    explanation: "La surinfection bactérienne secondaire (post-grippale) survient classiquement après une phase d'amélioration thermique (V grippal). Les germes les plus fréquents sont S. pneumoniae, S. aureus (notamment sécréteur de PVL) et H. influenzae.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-04',
    courseId: 'crs-pneumo-20',
    questionNumber: 4,
    type: 'QCM',
    content: "Dans le traitement curatif antiviral de la grippe, l'oseltamivir (Tamiflu) :",
    options: [
      "A. Est un inhibiteur compétitif de la transcriptase inverse virale",
      "B. Est un inhibiteur spécifique de la neuraminidase virale des virus Influenza A et B",
      "C. Doit être débuté impérativement après plus de 5 jours d'évolution pour être efficace",
      "D. Est administré par voie intraveineuse stricte chez l'adulte ambulatoire",
      "E. Remplace complètement la vaccination antigrippale annuelle"
    ],
    correctAnswers: [1],
    explanation: "L'oseltamivir est un inhibiteur de la neuraminidase actif sur Influenza A et B. Il doit être initié le plus précocement possible (idéalement dans les 48 heures suivant l'apparition des symptômes) chez les patients à risque ou hospitalisés.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-20-05',
    courseId: 'crs-pneumo-20',
    questionNumber: 5,
    type: 'QCM',
    content: "Concernant l'infection à SARS-CoV-2 (COVID-19), quel est le récepteur cellulaire physiologique utilisé par la spicule (protéine S) pour infecter les cellules cibles ?",
    options: [
      "A. Le récepteur CD4 des lymphocytes T",
      "B. L'Enzyme de Conversion de l'Angiotensine 2 (ACE2)",
      "C. Le récepteur CCR5 des macrophages",
      "D. Le récepteur à la transferrine CD71",
      "E. Le récepteur cellulaire de l'interleukine 2 (CD25)"
    ],
    correctAnswers: [1],
    explanation: "Le SARS-CoV-2 se lie avec une forte affinité au récepteur ACE2 (Angiotensin-Converting Enzyme 2) exprimé à la surface des pneumocytes de type II, cellules endothéliales vasculaires et entérocytes, facilitant son entrée assistée par TMPRSS2.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-06',
    courseId: 'crs-pneumo-20',
    questionNumber: 6,
    type: 'QCM',
    content: "Sur la tomodensitométrie (TDM) thoracique d'un patient atteint de pneumonie à COVID-19, quel aspect scanographique élémentaire est le plus caractéristique ?",
    options: [
      "A. Condensations rétractiles unilatérales avec excavation nécrotique apicale",
      "B. Opacités en verre dépoli (ground-glass) bilatérales, multifocales, à prédominance périphérique, sous-pleurale et basale",
      "C. Épanchement pleural unilatéral de grande abondance sans atteinte parenchymateuse",
      "D. Adénomégalies hilaires volumineuses avec calcifications en coquille d'œuf",
      "E. Atélectasie complète d'un poumon par bourgeon endobronchique"
    ],
    correctAnswers: [1],
    explanation: "L'aspect typique scanographique de l'atteinte COVID-19 associe des opacités en verre dépoli bilatérales, périphériques, sous-pleurales et postérieures, parfois associées à un épaississement septal interlobulaire ('crazy paving') et des condensations.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-20-07',
    courseId: 'crs-pneumo-20',
    questionNumber: 7,
    type: 'QCM',
    content: "Quelle association antivirale orale ciblant la protéase 3CLpro est indiquée en phase précoce (≤ 5 jours) chez les patients COVID-19 à haut risque de forme sévère ?",
    options: [
      "A. Paxlovid (Nirmatrelvir boosté par Ritonavir)",
      "B. Sofosbuvir / Velpatasvir",
      "C. Hydroxychloroquine associée à l'Azithromycine",
      "D. Amoxicilline / Acide clavulanique",
      "E. Acyclovir à forte dose"
    ],
    correctAnswers: [0],
    explanation: "Le Paxlovid associe le nirmatrelvir (inhibiteur de la protéase 3CLpro du SARS-CoV-2) et le ritonavir (booster pharmacocinétique via l'inhibition du CYP3A4). Il réduit le risque d'hospitalisation et de décès de près de 88% lorsqu'il est débuté dans les 5 jours.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-20-08',
    courseId: 'crs-pneumo-20',
    questionNumber: 8,
    type: 'QCM',
    content: "Parmi les signes cliniques suivants, lequel ou lesquels témoignent d'une forme grave ou compliquée de grippe ou COVID-19 nécessitant une hospitalisation urgente ?",
    options: [
      "A. Polypnée avec fréquence respiratoire > 30 cycles/min et SpO2 < 92% en air ambiant",
      "B. Signes d'état de choc ou d'hypotension artérielle systémique",
      "C. Altération de la conscience, confusion ou agitation",
      "D. Décompensation d'une comorbidité cardiaque ou respiratoire préexistante",
      "E. Tous les éléments sus-cités sont des critères de gravité imposant l'hospitalisation"
    ],
    correctAnswers: [4],
    explanation: "Tous ces signes sont des critères majeurs d'hospitalisation immédiate et de mise en route d'une oxygénothérapie avec monitorage hémodynamique et respiratoire strict.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-09',
    courseId: 'crs-pneumo-20',
    questionNumber: 9,
    type: 'QCM',
    content: "Quel examen diagnostique constitue la méthode de référence (gold standard) pour confirmer l'étiologie virale lors d'une infection à SARS-CoV-2 ou virus grippal ?",
    options: [
      "A. Sérologie Elisa IgG sur prélèvement sanguin unique",
      "B. RT-PCR par amplification génique sur écouvillon nasopharyngé",
      "C. Examen cytobactériologique des crachats (ECBC) sans culture virale",
      "D. Intradermo-réaction à la tuberculine (IDR)",
      "E. Fibroscopie bronchique avec biopsie alvéolaire systématique"
    ],
    correctAnswers: [1],
    explanation: "La RT-PCR nasopharyngée est la méthode de référence diagnostique directe en phase aiguë d'infection virale respiratoire grâce à sa sensibilité et sa spécificité élevées.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-10',
    courseId: 'crs-pneumo-20',
    questionNumber: 10,
    type: 'QCM',
    content: "Dans les formes sévères de COVID-19 requérant une oxygénothérapie, quel traitement anti-inflammatoire a démontré une réduction majeure de la mortalité (essai RECOVERY) ?",
    options: [
      "A. Dexaméthasone à la posologie de 6 mg par jour pendant 10 jours",
      "B. Aspirine à dose anti-inflammatoire 3 g par jour",
      "C. Bolus de Solumédrol 1 g par jour chez le sujet non oxygéno-dépendant",
      "D. Anti-inflammatoires non stéroïdiens (Ibuprofène)",
      "E. Corticothérapie inhalée isolée sans oxygène"
    ],
    correctAnswers: [0],
    explanation: "L'essai RECOVERY a établi que la dexaméthasone (6 mg/j jusqu'à 10 jours) réduit significativement la mortalité chez les patients requérant une oxygénothérapie ou ventilés mécaniquement.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-20-11',
    courseId: 'crs-pneumo-20',
    questionNumber: 11,
    type: 'QCM',
    content: "Concernant la toux résiduelle après une bronchite aiguë virale non compliquée chez le sujet sain :",
    options: [
      "A. Elle prouve une tuberculose bacillifère sous-jacente",
      "B. Elle est souvent due à une hyperréactivité bronchique post-infectieuse transitoire pouvant durer 3 à 6 semaines",
      "C. Elle justifie une antibiothérapie par fluoroquinolones en seconde ligne",
      "D. Elle impose une corticothérapie générale prolongée",
      "E. Elle nécessite une tomodensitométrie thoracique en urgence"
    ],
    correctAnswers: [1],
    explanation: "L'épithélium respiratoire lésé par l'infection virale entraîne une hyperréactivité bronchique réactionnelle transitoire. La toux sèche résiduelle peut persister 3 à 6 semaines sans qu'il ne s'agisse d'une surinfection.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-12',
    courseId: 'crs-pneumo-20',
    questionNumber: 12,
    type: 'QCM',
    content: "Le tableau clinique typique du syndrome grippal 'franc' associe classiquement :",
    options: [
      "A. Début brutal, fièvre élevée (39-40°C) avec frissons, courbatures diffuses, céphalées et toux sèche quinteuse",
      "B. Début insidieux sur plusieurs semaines sans aucune élévation de température",
      "C. Syndrome méningé fébrile avec raideur de nuque sans aucun signe respiratoire",
      "D. Ictère cutanéomuqueux fébrile d'installation rapide",
      "E. Polyarthrite bilatérale symétrique destructrice isolée"
    ],
    correctAnswers: [0],
    explanation: "Le syndrome grippal typique commence brutalement ('coup de massue') associant fièvre élevée, frissons, myalgies intenses, céphalées fronto-orbitaires et catarrhe respiratoire avec toux sèche.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-13',
    courseId: 'crs-pneumo-20',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans l'orage cytokinique (hyper-inflammation) associé aux formes graves de COVID-19, quel profil biologique est typiquement retrouvé ?",
    options: [
      "A. Élévation majeure de la CRP et hyperferritinémie",
      "B. Élévation spectaculaire des D-Dimères témoignant de l'endothéliite et de la coagulopathie",
      "C. Élévation de l'Interleukine 6 (IL-6) et des LDH",
      "D. Lymphopénie profonde prédominante sur les lymphocytes T",
      "E. Toutes les anomalies sus-citées font partie du profil biologique classique de sévérité"
    ],
    correctAnswers: [4],
    explanation: "Les formes sévères d'orage cytokinique s'accompagnent de marqueurs inflammatoires extrêmes (CRP, ferritinémie, IL-6), d'une coagulopathie prothrombotique (D-Dimères élevés), d'une cytolyse tissulaire (LDH) et d'une lymphopénie marquée.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-20-14',
    courseId: 'crs-pneumo-20',
    questionNumber: 14,
    type: 'QCM',
    content: "Concernant le vaccin antigrippal standard administré chez les sujets cibles chaque automne :",
    options: [
      "A. C'est un vaccin à virus vivant atténué dangereux chez la femme enceinte",
      "B. C'est un vaccin inactivé tétravalent adapté chaque année aux souches prédites par l'OMS",
      "C. Il confère une immunité définitive à vie",
      "D. Il est strictement contre-indiqué chez les patients asthmatiques et les insuffisants cardiaques",
      "E. Il est administré par voie sous-cutanée stricte au niveau de la cuisse"
    ],
    correctAnswers: [1],
    explanation: "Le vaccin antigrippal saisonnier est un vaccin inactivé tétravalent (2 sous-types A et 2 lignées B) recommandé et prioritaire chez les sujets âgés, femmes enceintes et porteurs de comorbidités chroniques.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-15',
    courseId: 'crs-pneumo-20',
    questionNumber: 15,
    type: 'QCM',
    content: "Dans la prise en charge d'une bronchite aiguë chez un sujet sain sans facteur de risque, quelle est la conduite thérapeutique de première intention ?",
    options: [
      "A. Amoxicilline 1 g x 3 par jour pendant 7 jours",
      "B. Traitement purement symptomatique : repos, hydratation, paracétamol en cas de fièvre, abstention d'antibiotiques",
      "C. Antitussifs opiacés à forte dose chez le nourrisson",
      "D. Corticothérapie générale per os systématique",
      "E. Hospitalisation systématique en service de pneumologie"
    ],
    correctAnswers: [1],
    explanation: "Chez l'adulte sain, la bronchite aiguë guérit spontanément en 7 à 10 jours. L'antibiothérapie est inutile et formellement non recommandée.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-16',
    courseId: 'crs-pneumo-20',
    questionNumber: 16,
    type: 'QCM',
    content: "Parmi les complications vasculaires suivantes, laquelle survient avec une fréquence remarquablement élevée chez les patients hospitalisés pour COVID-19 sévère ?",
    options: [
      "A. La thrombose veineuse profonde et l'embolie pulmonaire (maladie thromboembolique)",
      "B. La sténose de l'artère rénale bilatérale",
      "C. La fistule artérioveineuse pulmonaire congénitale",
      "D. L'anévrisme mycotique de l'aorte abdominale",
      "E. La coarctation de l'aorte thoracique"
    ],
    correctAnswers: [0],
    explanation: "La thrombopathie et l'endothéliite associées au COVID-19 augmentent considérablement le risque d'embolie pulmonaire et de thrombose in situ, justifiant une anticoagulation préventive voire curative selon les situations cliniques.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-17',
    courseId: 'crs-pneumo-20',
    questionNumber: 17,
    type: 'QCM',
    content: "Quelle est la durée d'incubation habituelle du virus de la grippe saisonnière (Influenza) ?",
    options: [
      "A. 1 à 3 jours (en moyenne 48 heures)",
      "B. 14 à 21 jours",
      "C. 30 à 45 jours",
      "D. Moins de 2 heures",
      "E. 60 à 90 jours"
    ],
    correctAnswers: [0],
    explanation: "La grippe se caractérise par une incubation très courte, habituellement comprise entre 24 et 72 heures.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-18',
    courseId: 'crs-pneumo-20',
    questionNumber: 18,
    type: 'QCM',
    content: "La classique courbe thermique dite en 'V grippal' correspond à :",
    options: [
      "A. Une défervescence thermique passagère vers le 3e-4e jour suivie d'un rebond fébrile vers le 5e-6e jour",
      "B. Une hypothermie constante prolongée sur 10 jours",
      "C. Une fièvre oscillante avec pics toutes les 48 heures (fièvre tierce)",
      "D. Une absence totale de fièvre tout au long de l'infection",
      "E. Une onde fébrile inversée observée uniquement le soir"
    ],
    correctAnswers: [0],
    explanation: "Le 'V grippal' décrit la courbe thermique classique : fièvre initiale à 39-40°C pendant 2-3 jours, défervescence transitoire à J3-J4, puis recrudescence thermique modérée à J5-J6 avant la guérison définitive.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-19',
    courseId: 'crs-pneumo-20',
    questionNumber: 19,
    type: 'QCM',
    content: "Le mode prédominant de transmission interhumaine du SARS-CoV-2 et des virus grippaux est :",
    options: [
      "A. La transmission par gouttelettes respiratoires et aérosols émis lors de la parole, toux, éternuement en espace clos",
      "B. La transmission vectorielle obligatoire par piqûre de moustiques Culex",
      "C. La transmission féco-orale exclusive via l'eau non traitée",
      "D. La piqûre accidentelle de tiques forestières",
      "E. L'ingestion d'aliments contaminés bien cuits"
    ],
    correctAnswers: [0],
    explanation: "La transmission respiratoire par aérosols et gouttelettes émises lors des interactions rapprochées en milieu clos mal aéré est le mode de propagation dominant.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-20',
    courseId: 'crs-pneumo-20',
    questionNumber: 20,
    type: 'QCM',
    content: "Chez un patient porteur d'une BPCO modérée à sévère, un épisode de bronchite aiguë :",
    options: [
      "A. Doit être considéré comme une exacerbation aiguë de BPCO nécessitant une prise en charge adaptée (critères d'Anthonisen)",
      "B. Ne justifie aucune surveillance ni modification thérapeutique",
      "C. Est impossible car les bronches ne possèdent plus d'épithélium",
      "D. Impose l'arrêt immédiat de tous les bronchodilatateurs inhalés",
      "E. Doit être traité systématiquement par une lobectomie chirurgicale"
    ],
    correctAnswers: [0],
    explanation: "Chez l'insuffisant respiratoire / BPCO, l'infection des voies aériennes est la première cause d'exacerbation aiguë de BPCO, pouvant rapidement décompenser vers une insuffisance respiratoire aiguë hypercapnique.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-21',
    courseId: 'crs-pneumo-20',
    questionNumber: 21,
    type: 'QCM',
    content: "Le syndrome de détresse respiratoire aiguë (SDRA) observé dans les formes critiques de pneumopathie à COVID-19 se caractérise par :",
    options: [
      "A. Un rapport PaO2/FiO2 ≤ 300 mmHg sous PEP ≥ 5 cmH2O avec infiltrats bilatéraux non cardiogéniques",
      "B. Une pression artérielle pulmonaire d'occlusion (PAPO) constamment > 25 mmHg",
      "C. Une alcalose respiratoire pure sans aucune hypoxémie",
      "D. Une disparition complète des opacités alvéolaires au scanner",
      "E. Une hypertrophie auriculaire gauche isolée"
    ],
    correctAnswers: [0],
    explanation: "Selon la définition de Berlin, le SDRA associe une détresse respiratoire aiguë avec opacités bilatérales radiologiques non entièrement expliquées par une insuffisance cardiaque, et un rapport PaO2/FiO2 ≤ 300 mmHg avec PEP ≥ 5 cmH2O.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-20-22',
    courseId: 'crs-pneumo-20',
    questionNumber: 22,
    type: 'QCM',
    content: "Qu'appelle-t-on syndrome d''hypoxémie heureuse' ou silencieuse (happy hypoxemia) dans la pneumonie à COVID-19 ?",
    options: [
      "A. Une SpO2 effondrée (< 85-90%) sans sensation d'étouffement ni polypnée disproportionnée au début de l'atteinte",
      "B. Un état euphorique provoqué par une surdose de dexaméthasone",
      "C. Une hyperoxie induite par un débit d'oxygène trop élevé",
      "D. Une guérison spontanée en moins de 12 heures",
      "E. Une absence totale de lésions scanographiques"
    ],
    correctAnswers: [0],
    explanation: "L'hypoxémie heureuse est un phénomène déroutant où des patients présentent une hypoxémie sévère (SpO2 très basse) sans détresse respiratoire subjective initiale majeure, exposant au risque d'une décompensation brutale.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-20-23',
    courseId: 'crs-pneumo-20',
    questionNumber: 23,
    type: 'QCM',
    content: "La définition admise du syndrome post-COVID-19 (ou COVID long) repose sur :",
    options: [
      "A. La persistance ou la récurrence de symptômes physiques ou psychologiques au-delà de 3 mois de l'infection initiale, durant au moins 2 mois et inexpliqués par un autre diagnostic",
      "B. Une positivité continue de la PCR nasopharyngée au-delà de 6 mois",
      "C. Une infection bactérienne acquise en milieu de réanimation",
      "D. Une anémie ferriprive sans cause digestive",
      "E. L'apparition d'un lymphome gastrique du MALT"
    ],
    correctAnswers: [0],
    explanation: "Selon l'OMS, l'affection post-COVID-19 survient généralement 3 mois après le début du COVID-19, dure au moins 2 mois et ne peut être expliquée par un autre diagnostic (symptômes fréquents : asthénie intense, dyspnée, troubles cognitifs).",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-24',
    courseId: 'crs-pneumo-20',
    questionNumber: 24,
    type: 'QCM',
    content: "Quel paramètre simple et non invasif est le plus utile pour surveiller l'oxygénation d'un patient COVID-19 à domicile et décider d'un recours hospitalier ?",
    options: [
      "A. L'oxymètre de pouls (saturation pulsée en O2, SpO2)",
      "B. Le pic de débit expiratoire (DEP)",
      "C. La mesure du périmètre brachial",
      "D. L'électrocardiogramme de repos",
      "E. Le dosage de la troponine salivaire"
    ],
    correctAnswers: [0],
    explanation: "L'oxymétrie de pouls permet de mesurer la SpO2 en continu ou à l'effort; une SpO2 < 95% (ou une chute de plus de 3% à l'effort) constitue une indication à contacter les services d'urgence ou à hospitaliser.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-25',
    courseId: 'crs-pneumo-20',
    questionNumber: 25,
    type: 'QCM',
    content: "Parmi les facteurs prédictifs majeurs d'évolution vers une forme sévère ou létale lors d'une infection à grippe ou COVID-19, on retrouve :",
    options: [
      "A. Âge supérieur à 65 ans",
      "B. Obésité avec Indice de Masse Corporelle (IMC) ≥ 30 kg/m²",
      "C. Diabète déséquilibré et hypertension artérielle avec atteinte d'organe cible",
      "D. Immunodépression congénitale ou acquise",
      "E. Tous les facteurs cités majorent considérablement le risque"
    ],
    correctAnswers: [4],
    explanation: "Tous ces facteurs de vulnérabilité sont identifiés comme prédictifs majeurs de gravité, d'hospitalisation en réanimation et de mortalité.",
    difficulty: 'facile'
  },

  // Cas cliniques Lesson 20 (5 cas cliniques - 10 questions)
  {
    id: 'q-pnm-20-cc1-01',
    courseId: 'crs-pneumo-20',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Un jeune homme de 22 ans, non fumeur, sans antécédents, consulte pour une toux sèche évoluant depuis 4 jours, fébricule à 38°C, céphalées et myalgies diffuses. L'auscultation pulmonaire retrouve quelques râles bronchiques bilatéraux sans foyer de crépitants ni signe de détresse respiratoire. SpO2 à 98%.\n\nQuestion 1 : Quel est le diagnostic le plus probable ?",
    options: [
      "A. Pneumonie aiguë franche lobaire à pneumocoque",
      "B. Bronchite aiguë présumée virale du sujet sain",
      "C. Tuberculose pulmonaire active bacillifère",
      "D. Embolie pulmonaire bilatérale",
      "E. Bronchiectasie surinfectée"
    ],
    correctAnswers: [1],
    explanation: "Le tableau chez un adulte jeune sain sans anomalie auscultatoire focale ni détresse respiratoire est typique d'une bronchite aiguë virale.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-cc1-02',
    courseId: 'crs-pneumo-20',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 (Suite) : Le patient s'inquiète car ses crachats deviennent jaunâtres au 6e jour et demande un antibiotique.\n\nQuestion 2 : Quelle doit être votre attitude médicale ?",
    options: [
      "A. Prescrire une fluoroquinolone respiratoire pendant 10 jours",
      "B. Rassurer le patient : la purulence traduit la nécrose des cellules épithéliales bronchiques et ne justifie pas d'antibiothérapie chez le sujet sain",
      "C. Réaliser en urgence un scanner thoracique avec injection",
      "D. Prescrire une corticothérapie orale à 1 mg/kg/j",
      "E. Poser l'indication d'une bronchoscopie rigide"
    ],
    correctAnswers: [1],
    explanation: "La purulence de l'expectoration lors d'une bronchite aiguë chez le sujet sain est banale et reflète l'élimination des cellules nécrosées; elle n'indique pas d'infection bactérienne et ne justifie aucun antibiotique.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-cc2-01',
    courseId: 'crs-pneumo-20',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Une femme de 74 ans, diabétique et insuffisante cardiaque, présente en période épidémique hivernale une fièvre brutale à 39.5°C, frissons, courbatures intenses, rhinorrhée et toux sèche depuis 24 heures. La PCR multiplex confirme un virus Influenza A (H3N2).\n\nQuestion 1 : Quelle molécule antivirale spécifique est indiquée en première intention ?",
    options: [
      "A. Oseltamivir 75 mg deux fois par jour per os pendant 5 jours",
      "B. Ganciclovir intraveineux",
      "C. Amantadine per os",
      "D. Ribavirine en aérosol",
      "E. Lopinavir/ritonavir"
    ],
    correctAnswers: [0],
    explanation: "L'oseltamivir (75 mg x 2/j pendant 5 jours) est recommandé chez le sujet âgé ou à risque dès la confirmation ou forte suspicion de grippe dans les 48 premières heures.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-cc2-02',
    courseId: 'crs-pneumo-20',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 (Suite) : Au 5e jour, après une accalmie thermique, la fièvre remonte à 40°C avec expectorations rouillées, polypnée à 28/min, crépitants localisés à la base droite et SpO2 à 91% en air ambiant.\n\nQuestion 2 : Quelle complication devez-vous suspecter et quel traitement débuter sans délai ?",
    options: [
      "A. Une pneumopathie bactérienne de surinfection (à pneumocoque ou staphylocoque), justifiant l'hospitalisation et une antibiothérapie probabiliste (ex: Amoxicilline-Ac. clavulanique ou C3G)",
      "B. Une embolie gazeuse spontanée",
      "C. Un arrêt de l'oseltamivir par allergie",
      "D. Une tuberculose ganglionnaire aiguë",
      "E. Un syndrome de Guillain-Barré foudroyant"
    ],
    correctAnswers: [0],
    explanation: "Le rebond thermique avec foyer auscultatoire et crachats purulents/rouillés après amélioration initiale traduit une surinfection bactérienne post-grippale (Pneumocoque, S. aureus).",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-20-cc3-01',
    courseId: 'crs-pneumo-20',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Un homme de 58 ans, obèse (IMC = 36 kg/m²), consulte au 8e jour d'une infection COVID-19 confirmée pour majoration de la dyspnée. À l'examen : FR = 26/min, SpO2 = 91% en air ambiant (remontant à 95% sous 3 L/min d'O2 aux lunettes). Le scanner thoracique objective 30% d'atteinte parenchymateuse en verre dépoli bilatéral.\n\nQuestion 1 : Quelle mesure thérapeutique médicamenteuse a un bénéfice démontré sur la survie dans cette situation ?",
    options: [
      "A. Dexaméthasone 6 mg/j pendant au maximum 10 jours associée à une thromboprophylaxie par HBPM",
      "B. Chloroquine 1 g/j",
      "C. Azithromycine seule sans oxygène",
      "D. Arrêt strict de toute oxygénothérapie",
      "E. Vitamine C à méga-dose en perfusion continue"
    ],
    correctAnswers: [0],
    explanation: "Dès lors qu'une oxygénothérapie est requise chez un patient COVID-19, la corticothérapie par dexaméthasone (6 mg/j) réduit la mortalité, associée à l'anticoagulation préventive.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-cc3-02',
    courseId: 'crs-pneumo-20',
    questionNumber: 31,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 (Suite) : Malgré 6 L/min d'O2, le patient aggrave son hématose avec SpO2 à 88% sous masque à haute concentration et FR = 34/min. Quel positionnement postural simple peut améliorer l'oxygénation de ce patient conscient ?",
    options: [
      "A. Le décubitus ventral (venting / proning) par séances répétées",
      "B. La position de Trendelenburg pieds surélevés",
      "C. Le décubitus latéral droit strict sans bouger",
      "D. L'immersion en bain chaud",
      "E. L'hyperextension cervicale forcée"
    ],
    correctAnswers: [0],
    explanation: "Le décubitus ventral chez le patient vigile (awake prone positioning) améliore la ventilation des zones dorsales dépendantes, homogénéise le rapport ventilation/perfusion et améliore rapidement l'oxygénation.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-20-cc4-01',
    courseId: 'crs-pneumo-20',
    questionNumber: 32,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Un patient de 68 ans atteint de COVID-19 hospitalisé en médecine conventionnelle sous 2 L/min d'O2 présente brutalement à J10 une douleur thoracique basi-thoracique droite aiguë avec polypnée à 32/min, tachycardie à 120 bpm et chute de la SpO2 à 84%. D-Dimères à 6 200 µg/L.\n\nQuestion 1 : Quel est le diagnostic le plus probable à éliminer en extrême urgence ?",
    options: [
      "A. Embolie pulmonaire aiguë compliquant l'endothéliite virale prothrombotique",
      "B. Épanchement pleural tuberculeux bénin",
      "C. Crise d'asthme allergique aux acariens",
      "D. Sinusite maxillaire aiguë droite",
      "E. Pleurésie sérofibrineuse résolutive"
    ],
    correctAnswers: [0],
    explanation: "Une aggravation respiratoire brutale avec douleur thoracique et tachycardie chez un patient COVID-19 hospitalisé doit faire suspecter une embolie pulmonaire en premier lieu.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-cc4-02',
    courseId: 'crs-pneumo-20',
    questionNumber: 33,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 (Suite) : Quel examen d'imagerie confirme le diagnostic ?",
    options: [
      "A. Angioscanner thoracique des artères pulmonaires",
      "B. Échographie abdominale sous-costale",
      "C. Radiographie des sinus de la face",
      "D. Transit œsogastroduodénal baryté",
      "E. Scintigraphie thyroïdienne à l'iode 131"
    ],
    correctAnswers: [0],
    explanation: "L'angioscanner thoracique est l'examen de référence pour visualiser le thrombus endoluminal dans le réseau artériel pulmonaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-cc5-01',
    courseId: 'crs-pneumo-20',
    questionNumber: 34,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Une femme de 35 ans consulte 4 mois après un épisode aigu de COVID-19 non hospitalisé. Elle décrit un épuisement invalidant au moindre effort, un brouillard cérébral (brain fog) avec troubles de concentration, et des palpitations posturales sans anomalie à l'ECG ni au bilan biologique standard.\n\nQuestion 1 : Quelle entité diagnostique correspond à cette présentation ?",
    options: [
      "A. Syndrome post-COVID-19 (ou affection post-COVID-19 / COVID long)",
      "B. Démence d'Alzheimer précoce foudroyante",
      "C. Tumeur du tronc cérébral",
      "D. Fibrose pulmonaire terminale",
      "E. Hypothyroïdie fruste iatrogène"
    ],
    correctAnswers: [0],
    explanation: "La persistance au-delà de 3 mois de symptômes fluctuants et invalidants (asthénie chronique, dysautonomie, dysfonction cognitive) après une infection aiguë par SARS-CoV-2 caractérise le COVID long.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-20-cc5-02',
    courseId: 'crs-pneumo-20',
    questionNumber: 35,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 (Suite) : Quels sont les principes de la prise en charge thérapeutique recommandée pour ce syndrome post-COVID ?",
    options: [
      "A. Prise en charge multidisciplinaire : réadaptation à l'effort progressive adaptée au seuil de fatigue, soutien psychologique et gestion des symptômes",
      "B. Antibiothérapie par vancomycine IV à vie",
      "C. Chimiothérapie adjuvante",
      "D. Corticothérapie continue à très forte dose sans arrêt",
      "E. Alitement strict complet et interdiction d'activité motrice"
    ],
    correctAnswers: [0],
    explanation: "La prise en charge du syndrome post-COVID est globale, basée sur la réadaptation physique progressive personnalisée (évitant les malaises post-effort), l'orthophonie/neuropsychologie si besoin et le traitement symptomatique.",
    difficulty: 'facile'
  }
];

export const PNEUMO_LESSON_20_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-20-mindmap',
    courseId: 'crs-pneumo-20',
    title: 'Mind Map : Infections Virales Respiratoires (Grippe, COVID-19, Bronchite)',
    type: 'mindmap',
    content: `# Mind Map : Bronchite Aiguë, Grippe & COVID-19

## 1. Bronchite Aiguë du Sujet Sain
- **Étiologie** : > 90% virale (Rhinovirus, Coronavirus communs, Adénovirus, VRS, Métapneumovirus).
- **Clinique** :
  - Début par catarrhe des VAS.
  - Toux sèche initiale devenant productive.
  - Expectoration muqueuse ou purulente (nécrose épithéliale ≠ surinfection).
  - Absence de foyer crépitant auscultatoire, pas de détresse respiratoire.
- **Règle d'or** : PAS d'antibiothérapie chez l'adulte sain ! Traitement symptomatique (paracétamol, hydratation).

## 2. Grippe Saisonnière (Influenza A et B)
- **Virus** : ARN segmenté enveloppé (Orthomyxoviridae).
  - *Hémagglutinine (HA)* : fixation cellulaire.
  - *Neuraminidase (NA)* : libération virale.
  - *Drift* (glissement mineur) = épidémies saisonnières annuelles.
  - *Shift* (cassure majeure, réservoir animal) = Influenza A uniquement -> PANDÉMIES.
- **Clinique** : Incubation 24-48 h, début brutal ('coup de massue'), fièvre 39-40°C, myalgies intenses, V grippal à J5.
- **Complications** :
  - Grippe maligne primitive (SDRA virologique foudroyant).
  - Surinfection bactérienne (Pneumocoque, S. aureus, H. influenzae).
  - Décompensation de comorbidités (insuffisance cardiaque, BPCO).
- **Traitement** : Oseltamivir (75 mg x 2/j x 5 j) si terrain à risque et début < 48 h. Prévention : vaccin tétravalent automnal annuel.

## 3. SARS-CoV-2 (COVID-19)
- **Physiopathologie** : Récepteur ACE2 via glycoprotéine Spike (S). Endothéliite, hypercoagulabilité (thromboses), orage cytokinique (IL-6, ferritinémie).
- **Imagerie TDM** : Verre dépoli bilatéral, sous-pleural, basal, crazy-paving, condensations.
- **Formes Sévères & SDRA** :
  - Oxygénothérapie ciblée (SpO2 92-96%).
  - Dexaméthasone 6 mg/j x 10 j si oxygéno-dépendant.
  - Décubitus ventral chez le patient vigile / intubé.
  - Anticoagulation préventive ou curative.
- **Complications tardives** : COVID Long (asthénie, dyspnée, brouillard cognitif > 3 mois).`
  },
  {
    id: 'res-pnm-20-astuces',
    courseId: 'crs-pneumo-20',
    title: 'Astuces & Pièges QCM : Bronchite, Grippe & COVID-19',
    type: 'astuce',
    content: `### Astuces Clés & Pièges aux Examens (Dr. LAIDANI.M)

1. **Piège récurrent sur la bronchite :**
   - « Crachats jaunes ou verts = antibiotiques » -> **FAUX ARCHI FAUX** ! Chez le sujet sain, la purulence est liée à la desquamation cellulaire et aux polynucléaires sans infection bactérienne.
   - Ne pas confondre avec l'exacerbation de BPCO où les critères d'Anthonisen (dyspnée +, volume crachats +, purulence +) guident l'antibiothérapie.

2. **Shift vs Drift du virus de la grippe :**
   - **Glissement (Drift)** : mutations ponctuelles, touche A et B, cause des épidémies saisonnières (impose le changement annuel du vaccin).
   - **Cassure (Shift)** : réassortiment génomique complet, touche **UNIQUEMENT Influenza A**, cause des pandémies mondiales historiques (1918, 1957, 1968, 2009).

3. **Le V Grippal :**
   - Chute de température vers le 3e-4e jour, réascension thermique modérée vers le 5e jour.
   - *Attention* : Si la fièvre remonte avec crachats purulents/rouillés et foyer crépitant -> c'est une surinfection bactérienne post-grippale (Pneumocoque / Staphylocoque) !

4. **COVID-19 et thérapeutiques :**
   - Corticoïdes (Dexaméthasone 6 mg/j) : **UNIQUEMENT** si le patient a besoin d'oxygène (SpO2 < 94% en air ambiant). Si administrés trop tôt chez un patient sans hypoxémie, ils diminuent la clairance virale sans bénéfice !
   - Anticoagulation : systématique chez l'hospitalisé en raison du sur-risque thromboembolique majeur.`
  }
];

// Lesson 21: Classifications TNM du Cancer Bronchique (8e édition)
export const PNEUMO_LESSON_21_QUESTIONS: Question[] = [
  {
    id: 'q-pnm-21-01',
    courseId: 'crs-pneumo-21',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans la classification TNM 8e édition des cancers bronchiques non à petites cellules (CBNPC), quelle est la taille maximale d'une tumeur classée T1a ?",
    options: [
      "A. Tumeur ≤ 1 cm dans sa plus grande dimension",
      "B. Tumeur > 1 cm mais ≤ 2 cm",
      "C. Tumeur > 2 cm mais ≤ 3 cm",
      "D. Tumeur ≤ 0,5 cm",
      "E. Tumeur ≤ 5 cm"
    ],
    correctAnswers: [0],
    explanation: "Dans la 8e édition TNM : T1a = tumeur ≤ 1 cm; T1b = > 1 cm et ≤ 2 cm; T1c = > 2 cm et ≤ 3 cm.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-21-02',
    courseId: 'crs-pneumo-21',
    questionNumber: 2,
    type: 'QCM',
    content: "Une tumeur bronchique mesurant 4,2 cm dans sa plus grande dimension, sans atteinte pleurale ni ganglionnaire, est classée :",
    options: [
      "A. T1c",
      "B. T2a",
      "C. T2b",
      "D. T3",
      "E. T4"
    ],
    correctAnswers: [2],
    explanation: "La catégorie T2 correspond à une taille > 3 cm et ≤ 5 cm : T2a = > 3 cm et ≤ 4 cm; T2b = > 4 cm et ≤ 5 cm. Une tumeur de 4,2 cm est donc classée T2b.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-21-03',
    courseId: 'crs-pneumo-21',
    questionNumber: 3,
    type: 'QCM',
    content: "Parmi les critères suivants, lequel classe directement une tumeur pulmonaire dans la catégorie T3 (selon la 8e édition TNM) ?",
    options: [
      "A. Tumeur mesurant entre > 5 cm et ≤ 7 cm",
      "B. Envahissement de la plèvre pariétale ou de la paroi thoracique",
      "C. Présence d'un ou plusieurs nodules tumoraux satellites distincts dans le MÊME lobe pulmonaire que la tumeur primitive",
      "D. Envahissement du nerf phrénique ou du péricarde pariétal",
      "E. Tous les critères sus-cités définissent un descripteur T3"
    ],
    correctAnswers: [4],
    explanation: "Sont classées T3 : tumeur > 5 cm et ≤ 7 cm, ou envahissant paroi thoracique/plèvre pariétale, nerf phrénique, péricarde pariétal, ou nodule(s) tumoral(aux) séparé(s) dans le même lobe.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-21-04',
    courseId: 'crs-pneumo-21',
    questionNumber: 4,
    type: 'QCM',
    content: "Un envahissement tumoral direct de l'une des structures suivantes classe la tumeur d'emblée en T4, SAUF :",
    options: [
      "A. Diaphragme",
      "B. Médiastin ou cœur et gros vaisseaux (aorte, veine cave)",
      "C. Rachis ou carène bronchique trachéale",
      "D. Nerf laryngé récurrent",
      "E. Nerf phrénique"
    ],
    correctAnswers: [4],
    explanation: "L'envahissement du nerf phrénique classe la tumeur en T3 (et non en T4). Le diaphragme, le médiastin, le cœur, les gros vaisseaux, la carène, le nerf récurrent et le rachis sont des critères de T4.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-21-05',
    courseId: 'crs-pneumo-21',
    questionNumber: 5,
    type: 'QCM',
    content: "La présence d'un deuxième nodule tumoral synchrone situé dans un AUTRE LOBE du MÊME POUMON que la tumeur primitive correspond au descripteur :",
    options: [
      "A. T3",
      "B. T4",
      "C. M1a",
      "D. M1b",
      "E. N3"
    ],
    correctAnswers: [1],
    explanation: "Nodule satellite dans le même lobe = T3. Nodule satellite dans un lobe ipsilatéral différent = T4. Nodule tumoral dans le poumon controlatéral = M1a.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-21-06',
    courseId: 'crs-pneumo-21',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans l'évaluation ganglionnaire (descripteur N), une atteinte des ganglions médiastinaux CONTROLATÉRAUX ou sus-claviculaires (homo- ou controlatéraux) est classée :",
    options: [
      "A. N0",
      "B. N1",
      "C. N2",
      "D. N3",
      "E. M1"
    ],
    correctAnswers: [3],
    explanation: "N1 = ganglions péri-bronchiques ou hilaires ipsilatéraux. N2 = ganglions médiastinaux ipsilatéraux et/ou sous-carinaires. N3 = ganglions médiastinaux controlatéraux, hilaires controlatéraux, ou sus-claviculaires homo- ou controlatéraux.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-21-07',
    courseId: 'crs-pneumo-21',
    questionNumber: 7,
    type: 'QCM',
    content: "Selon la 8e édition TNM, comment est classé un épanchement pleural malin (avec cellules tumorales à la ponction) associé à un cancer du poumon ?",
    options: [
      "A. T3",
      "B. T4",
      "C. M1a",
      "D. M1b",
      "E. M1c"
    ],
    correctAnswers: [2],
    explanation: "M1a regroupe les métastases intrathoraciques : nodule tumoral dans le poumon controlatéral, nodules pleuraux ou péricardiques, et épanchement pleural ou péricardique malin.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-21-08',
    courseId: 'crs-pneumo-21',
    questionNumber: 8,
    type: 'QCM',
    content: "La catégorie métastatique M1b de la 8e classification TNM correspond à :",
    options: [
      "A. Une métastase extra-thoracique unique dans un seul organe",
      "B. Des métastases multiples dans un seul organe",
      "C. Des métastases multiples disséminées dans plusieurs organes",
      "D. Un nodule tumoral controlatéral isolé",
      "E. Une métastase ganglionnaire sous-claviculaire"
    ],
    correctAnswers: [0],
    explanation: "8e édition : M1a = métastase intrathoracique; M1b = métastase extrathoracique UNIQUE (oligométastase); M1c = métastases multiples extrathoraciques (dans un ou plusieurs organes).",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-21-09',
    courseId: 'crs-pneumo-21',
    questionNumber: 9,
    type: 'QCM',
    content: "Quel est le stade anatomoclinique d'une tumeur bronchique classée T1a N0 M0 ?",
    options: [
      "A. Stade IA1",
      "B. Stade IA2",
      "C. Stade IB",
      "D. Stade IIA",
      "E. Stade IIIA"
    ],
    correctAnswers: [0],
    explanation: "T1a (≤ 1 cm) N0 M0 correspond au Stade IA1. T1b N0 M0 = Stade IA2. T1c N0 M0 = Stade IA3. T2a N0 M0 = Stade IB.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-21-10',
    courseId: 'crs-pneumo-21',
    questionNumber: 10,
    type: 'QCM',
    content: "Une tumeur bronchique classée T2a N1 M0 correspond au stade :",
    options: [
      "A. Stade IB",
      "B. Stade IIA",
      "C. Stade IIB",
      "D. Stade IIIA",
      "E. Stade IIIB"
    ],
    correctAnswers: [2],
    explanation: "Dans le groupement par stades (8e édition) : T2a N1 M0 = Stade IIB (tout comme T2b N1 M0 et T3 N0 M0).",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-21-11',
    courseId: 'crs-pneumo-21',
    questionNumber: 11,
    type: 'QCM',
    content: "Une atteinte ganglionnaire médiastinale ipsilatérale (N2) associée à une tumeur T2a sans métastase (T2a N2 M0) est classée au stade :",
    options: [
      "A. Stade IIB",
      "B. Stade IIIA",
      "C. Stade IIIB",
      "D. Stade IIIC",
      "E. Stade IV"
    ],
    correctAnswers: [1],
    explanation: "T1-T2 N2 M0 est classé au Stade IIIA. T3-T4 N2 M0 passe au Stade IIIB.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-21-12',
    courseId: 'crs-pneumo-21',
    questionNumber: 12,
    type: 'QCM',
    content: "Une tumeur T3 associée à un envahissement ganglionnaire controlatéral ou sus-claviculaire N3 sans métastase à distance (T3 N3 M0) relève du stade :",
    options: [
      "A. Stade IIIA",
      "B. Stade IIIB",
      "C. Stade IIIC",
      "D. Stade IVA",
      "E. Stade IVB"
    ],
    correctAnswers: [2],
    explanation: "La 8e édition a introduit le Stade IIIC pour les tumeurs locorégionales très avancées : T3 N3 M0 et T4 N3 M0.",
    difficulty: 'moyen'
  },
  {
    id: 'q-pnm-21-13',
    courseId: 'crs-pneumo-21',
    questionNumber: 13,
    type: 'QCM',
    content: "Le stade IVB de la classification TNM 8e édition correspond à :",
    options: [
      "A. Tout T, tout N avec M1c (métastases extrathoraciques multiples)",
      "B. T4 N3 M0",
      "C. M1a intrathoracique isolé",
      "D. Métastase cérébrale unique réséquable",
      "E. Nodule satellite pulmonaire bilatéral sans atteinte extrathoracique"
    ],
    correctAnswers: [0],
    explanation: "Stade IVA = M1a ou M1b (maladie oligométastatique). Stade IVB = M1c (métastases extrathoraciques multiples dans un ou plusieurs organes).",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-21-14',
    courseId: 'crs-pneumo-21',
    questionNumber: 14,
    type: 'QCM',
    content: "Dans le bilan d'extension ganglionnaire médiastinal (staging N) d'un CBNPC, quelle exploration invasive mini-invasive sous échographie endobronchique permet de ponctionner les adénopathies des stations 4R, 4L, 7 et hilaires ?",
    options: [
      "A. L'EBUS-TBNA (Endobronchial Ultrasound - Transbronchial Needle Aspiration)",
      "B. La médiastinotomie antérieure de Chamberlain",
      "C. La thoracotomie exploratrice postéro-latérale",
      "D. La ponction lombaire",
      "E. La laparoscopie exploratrice"
    ],
    correctAnswers: [0],
    explanation: "L'EBUS-TBNA est l'examen de référence de première intention pour l'évaluation cyto-histologique des adénopathies médiastinales (stations 2, 4, 7, 10, 11) avec une excellente sensibilité et une faible morbidité.",
    difficulty: 'facile'
  },
  {
    id: 'q-pnm-21-15',
    courseId: 'crs-pneumo-21',
    questionNumber: 15,
    type: 'QCM',
    content: "Chez un patient porteur d'un cancer bronchique non à petites cellules, la résécabilité chirurgicale complète d'emblée à visée curative (lobectomie + curage) est classiquement réservée aux stades :",
    options: [
      "A. Stades I et II (et certains cas très sélectionnés de stade IIIA)",
      "B. Tous les stades IIIB et IIIC",
      "C. Stade IVB d'emblée",
      "D. Uniquement les tumeurs avec envahissement de l'aorte thoracique",
      "E. Aucune chirurgie n'est jamais indiquée dans le CBNPC"
    ],
    correctAnswers: [0],
    explanation: "L'exérèse chirurgicale curative d'emblée concerne principalement les stades localisés I et II. Le stade IIIA est discuté en RCP au cas par cas (chimiothérapie néoadjuvante puis réévaluation).",
    difficulty: 'facile'
  },

  // 46 Cas cliniques & exercices de staging TNM
  ...Array.from({ length: 46 }, (_, i) => {
    const num = i + 1;
    // Let's create realistic staging situations spanning all stations and combinations
    const cases = [
      { t: "T1a", n: "N0", m: "M0", desc: "Nodule pulmonaire périphérique de 0,8 cm du lobe supérieur droit, découvert fortuitement, sans adénopathie ni métastase.", stage: "Stade IA1", ans: 0 },
      { t: "T1b", n: "N0", m: "M0", desc: "Tumeur de 1,7 cm du culmen gauche, plèvre viscérale indemne, médiastin sain, TEP négatif à distance.", stage: "Stade IA2", ans: 1 },
      { t: "T1c", n: "N0", m: "M0", desc: "Tumeur de 2,6 cm du lobe inférieur droit sans contact bronchique souche ni adénopathie.", stage: "Stade IA3", ans: 2 },
      { t: "T2a", n: "N0", m: "M0", desc: "Masse pulmonaire de 3,8 cm du lobe moyen sans atteinte ganglionnaire ni à distance.", stage: "Stade IB", ans: 0 },
      { t: "T2b", n: "N0", m: "M0", desc: "Tumeur de 4,7 cm du lobe supérieur gauche, scanner cérébral et TEP normaux.", stage: "Stade IIA", ans: 1 },
      { t: "T1a", n: "N1", m: "M0", desc: "Tumeur de 0,9 cm avec adénopathie hilaire ipsilatérale station 10R métastatique prouvée.", stage: "Stade IIB", ans: 2 },
      { t: "T1b", n: "N1", m: "M0", desc: "Tumeur de 1,8 cm avec adénopathie péri-bronchique ipsilatérale N1 sans atteinte médiastinale.", stage: "Stade IIB", ans: 2 },
      { t: "T1c", n: "N1", m: "M0", desc: "Tumeur de 2,5 cm avec ganglion lobaire interlobaire ipsilatéral N1.", stage: "Stade IIB", ans: 2 },
      { t: "T2a", n: "N1", m: "M0", desc: "Tumeur de 3,5 cm avec ganglion hilaire ipsilatéral N1 sans métastase.", stage: "Stade IIB", ans: 2 },
      { t: "T2b", n: "N1", m: "M0", desc: "Masse de 4,5 cm du lobe inférieur gauche avec ganglion hilaire gauche station 10L.", stage: "Stade IIB", ans: 2 },
      { t: "T3", n: "N0", m: "M0", desc: "Tumeur de 5,8 cm du lobe supérieur droit sans adénopathie ni métastase.", stage: "Stade IIB", ans: 2 },
      { t: "T3", n: "N0", m: "M0", desc: "Tumeur de 3 cm envahissant la plèvre pariétale et la 4e côte (paroi thoracique), sans ganglion.", stage: "Stade IIB", ans: 2 },
      { t: "T3", n: "N0", m: "M0", desc: "Tumeur de 2 cm avec un nodule satellite distinct dans le même lobe pulmonaire, sans atteinte ganglionnaire.", stage: "Stade IIB", ans: 2 },
      { t: "T1a", n: "N2", m: "M0", desc: "Nodule de 1 cm avec adénopathie médiastinale sous-carinaire (station 7) métastatique à l'EBUS.", stage: "Stade IIIA", ans: 3 },
      { t: "T1b", n: "N2", m: "M0", desc: "Tumeur de 1,5 cm avec ganglion médiastinal paratrachéal droit (station 4R) ipsilatéral.", stage: "Stade IIIA", ans: 3 },
      { t: "T1c", n: "N2", m: "M0", desc: "Tumeur de 2,8 cm avec ganglions médiastinaux ipsilatéraux station 4L.", stage: "Stade IIIA", ans: 3 },
      { t: "T2a", n: "N2", m: "M0", desc: "Tumeur de 3,5 cm avec adénopathie médiastinale sous-carinaire N2.", stage: "Stade IIIA", ans: 3 },
      { t: "T2b", n: "N2", m: "M0", desc: "Masse de 4,8 cm avec ganglion médiastinal ipsilatéral prouvé.", stage: "Stade IIIA", ans: 3 },
      { t: "T3", n: "N1", m: "M0", desc: "Tumeur de 6 cm avec ganglion hilaire ipsilatéral station 10R sans atteinte médiastinale.", stage: "Stade IIIA", ans: 3 },
      { t: "T4", n: "N0", m: "M0", desc: "Tumeur de 4 cm envahissant le corps vertébral thoracique sans adénopathie.", stage: "Stade IIIA", ans: 3 },
      { t: "T4", n: "N0", m: "M0", desc: "Tumeur mesurant 8,2 cm dans sa plus grande dimension sans ganglion.", stage: "Stade IIIA", ans: 3 },
      { t: "T4", n: "N1", m: "M0", desc: "Tumeur de 7,5 cm avec ganglion hilaire ipsilatéral N1.", stage: "Stade IIIA", ans: 3 },
      { t: "T4", n: "N0", m: "M0", desc: "Tumeur avec nodule satellite dans un autre lobe du même poumon, sans adénopathie.", stage: "Stade IIIA", ans: 3 },
      { t: "T1a", n: "N3", m: "M0", desc: "Petit nodule de 1 cm avec adénopathie sus-claviculaire droite prouvée.", stage: "Stade IIIB", ans: 4 },
      { t: "T1b", n: "N3", m: "M0", desc: "Tumeur de 1,8 cm avec ganglion médiastinal controlatéral 4L chez un patient porteur d'une tumeur droite.", stage: "Stade IIIB", ans: 4 },
      { t: "T1c", n: "N3", m: "M0", desc: "Tumeur de 2,9 cm du poumon gauche avec ganglion hilaire droit 10R.", stage: "Stade IIIB", ans: 4 },
      { t: "T2a", n: "N3", m: "M0", desc: "Tumeur de 3,5 cm avec adénopathie sus-claviculaire N3.", stage: "Stade IIIB", ans: 4 },
      { t: "T2b", n: "N3", m: "M0", desc: "Tumeur de 4,4 cm avec ganglion sus-claviculaire ipsilatéral N3.", stage: "Stade IIIB", ans: 4 },
      { t: "T3", n: "N2", m: "M0", desc: "Tumeur de 6 cm avec adénopathie sous-carinaire N2.", stage: "Stade IIIB", ans: 4 },
      { t: "T4", n: "N2", m: "M0", desc: "Tumeur de 8 cm avec ganglion médiastinal ipsilatéral 4R.", stage: "Stade IIIB", ans: 4 },
      { t: "T4", n: "N2", m: "M0", desc: "Tumeur envahissant la carène avec ganglion médiastinal ipsilatéral.", stage: "Stade IIIB", ans: 4 },
      { t: "T3", n: "N3", m: "M0", desc: "Tumeur de 6,5 cm avec ganglion médiastinal controlatéral N3.", stage: "Stade IIIC", ans: 0 },
      { t: "T4", n: "N3", m: "M0", desc: "Tumeur envahissant le médiastin et le diaphragme avec adénopathie sus-claviculaire bilatérale.", stage: "Stade IIIC", ans: 0 },
      { t: "T4", n: "N3", m: "M0", desc: "Masse de 9 cm avec ganglions sus-claviculaires métastatiques.", stage: "Stade IIIC", ans: 0 },
      { t: "T1a", n: "N0", m: "M1a", desc: "Tumeur de 1 cm avec nodule pulmonaire distinct dans le poumon controlatéral.", stage: "Stade IVA", ans: 1 },
      { t: "T2a", n: "N1", m: "M1a", desc: "Tumeur de 3,5 cm avec épanchement pleural malin cytology-positive.", stage: "Stade IVA", ans: 1 },
      { t: "T3", n: "N2", m: "M1a", desc: "Tumeur de 5,5 cm avec nodules pleuraux tumoraux ipsilatéraux.", stage: "Stade IVA", ans: 1 },
      { t: "T1b", n: "N0", m: "M1b", desc: "Tumeur de 1,5 cm sans ganglion mais avec métastase cérébrale unique asymptomatique.", stage: "Stade IVA", ans: 1 },
      { t: "T2b", n: "N2", m: "M1b", desc: "Tumeur de 4,5 cm N2 avec métastase surrénalienne droite unique.", stage: "Stade IVA", ans: 1 },
      { t: "T3", n: "N0", m: "M1b", desc: "Tumeur pariétale de 6 cm avec nodule hépatique unique métastatique réséquable.", stage: "Stade IVA", ans: 1 },
      { t: "T4", n: "N1", m: "M1b", desc: "Tumeur de 8 cm avec métastase osseuse unique L2.", stage: "Stade IVA", ans: 1 },
      { t: "T1a", n: "N0", m: "M1c", desc: "Tumeur de 1 cm avec multiples métastases hépatiques, osseuses et cérébrales.", stage: "Stade IVB", ans: 2 },
      { t: "T2a", n: "N1", m: "M1c", desc: "Tumeur de 3,5 cm avec multiples nodules hépatiques bilatéraux.", stage: "Stade IVB", ans: 2 },
      { t: "T3", n: "N2", m: "M1c", desc: "Tumeur de 6 cm avec localisations osseuses diffuses et métastases surrénaliennes bilatérales.", stage: "Stade IVB", ans: 2 },
      { t: "T4", n: "N3", m: "M1c", desc: "Cancer bronchique étendu avec atteinte ganglionnaire bilatérale et dissémination multiviscérale.", stage: "Stade IVB", ans: 2 },
      { t: "T2a", n: "N2", m: "M1c", desc: "Tumeur de 3,2 cm N2 avec plus de 3 métastases cérébrales et 2 métastases osseuses.", stage: "Stade IVB", ans: 2 }
    ];

    const c = cases[i];
    return {
      id: `q-pnm-21-cc-${String(num).padStart(2, '0')}`,
      courseId: 'crs-pneumo-21',
      questionNumber: 15 + num,
      type: 'Cas Clinique' as const,
      clinicalCaseNumber: num,
      content: `CAS CLINIQUE ${num} (Staging TNM 8e édition) :\n${c.desc}\nClassée ${c.t} ${c.n} ${c.m}.\n\nQuel est le groupement par stade exact de ce patient ?`,
      options: [
        "A. " + (c.ans === 0 ? c.stage : "Stade IA1 / Stade IIB"),
        "B. " + (c.ans === 1 ? c.stage : "Stade IB / Stade IIIA"),
        "C. " + (c.ans === 2 ? c.stage : "Stade IIA / Stade IVB"),
        "D. " + (c.ans === 3 ? c.stage : "Stade IIIA / Stade IIIC"),
        "E. " + (c.ans === 4 ? c.stage : "Stade IIIB / Stade IVA")
      ],
      correctAnswers: [c.ans],
      explanation: `Détail : La combinaison ${c.t} ${c.n} ${c.m} correspond précisément au ${c.stage} selon la 8e édition IASLC du cancer broncho-pulmonaire.`,
      difficulty: 'moyen' as const
    };
  })
];

export const PNEUMO_LESSON_21_RESOURCES: CourseResource[] = [
  {
    id: 'res-pnm-21-mindmap',
    courseId: 'crs-pneumo-21',
    title: 'Mind Map : Classification TNM 8e édition du Cancer Bronchique',
    type: 'mindmap',
    content: `# Mind Map : Staging TNM 8e Édition (IASLC)

## 1. Descripteur T (Tumeur Primitive)
- **T1 (≤ 3 cm)** :
  - *T1a* : ≤ 1 cm
  - *T1b* : > 1 cm et ≤ 2 cm
  - *T1c* : > 2 cm et ≤ 3 cm
- **T2 (> 3 cm et ≤ 5 cm)** ou bronche souche sans carène, ou plèvre viscérale (PL1/PL2), ou atélectasie partielle :
  - *T2a* : > 3 cm et ≤ 4 cm
  - *T2b* : > 4 cm et ≤ 5 cm
- **T3 (> 5 cm et ≤ 7 cm)** ou envahissement paroi thoracique, nerf phrénique, péricarde pariétal, ou nodule satellite distinct dans le MÊME lobe.
- **T4 (> 7 cm)** ou envahissement diaphragme, médiastin, cœur, gros vaisseaux, trachée, nerf récurrent, carène, corps vertébral, ou nodule satellite dans un LOBE IPSILATÉRAL DIFFÉRENT.

## 2. Descripteur N (Adénopathies Régionales)
- **N0** : Pas de métastase ganglionnaire régionale.
- **N1** : Ganglions péribronchiques, intrapulmonaires et/ou hilaires ipsilatéraux.
- **N2** : Ganglions médiastinaux ipsilatéraux et/ou sous-carinaires (station 7).
- **N3** : Ganglions médiastinaux controlatéraux, hilaires controlatéraux, ou sus-claviculaires (homo- ou controlatéraux).

## 3. Descripteur M (Métastases à Distance)
- **M0** : Pas de métastase.
- **M1a** : Intrathoracique (nodule poumon controlatéral, épanchement pleural/péricardique malin, nodules pleuraux).
- **M1b** : Métastase extrathoracique UNIQUE (oligométastase unique).
- **M1c** : Métastases extrathoraciques MULTIPLES (un ou plusieurs organes).

## 4. Groupement par Stades
- **Stade IA1** : T1a N0 M0
- **Stade IA2** : T1b N0 M0
- **Stade IA3** : T1c N0 M0
- **Stade IB** : T2a N0 M0
- **Stade IIA** : T2b N0 M0
- **Stade IIB** : T1-T2 N1 M0 ou T3 N0 M0
- **Stade IIIA** : T1-T2 N2 M0 ou T3 N1 M0 ou T4 N0-N1 M0
- **Stade IIIB** : T1-T2 N3 M0 ou T3-T4 N2 M0
- **Stade IIIC** : T3-T4 N3 M0
- **Stade IVA** : Tout T Tout N avec M1a ou M1b
- **Stade IVB** : Tout T Tout N avec M1c`
  },
  {
    id: 'res-pnm-21-astuces',
    courseId: 'crs-pneumo-21',
    title: 'Astuces & Pièges QCM : TNM 8e Édition',
    type: 'astuce',
    content: `### Astuces Infaillibles sur le TNM 8e Édition (Dr. LAIDANI.M)

1. **Règle des coupures centimétriques en T :**
   - 1 cm (T1a), 2 cm (T1b), 3 cm (T1c), 4 cm (T2a), 5 cm (T2b), 7 cm (T3), > 7 cm (T4). Retenez : **1, 2, 3, 4, 5, 7** !

2. **Les Nodules Satellites (Piège d'examen n°1) :**
   - Nodule dans le **même lobe** que la tumeur primitive = **T3**.
   - Nodule dans un **autre lobe du même poumon** = **T4**.
   - Nodule dans le **poumon controlatéral** = **M1a** !

3. **Nerf Phrénique vs Nerf Récurrent :**
   - Nerf **phrénique** (paralysie d'une coupole) = **T3**.
   - Nerf **laryngé récurrent** (dysphonie, paralysie corde vocale) = **T4** !

4. **Nouveautés 8e édition :**
   - *Stade IIIC* : n'existait pas en 7e édition. Il correspond aux tumeurs localement avancées inopérables T3-T4 N3 M0.
   - *M1b vs M1c* : M1b = métastase unique (accessible à un traitement local stéréotaxique/chirurgical); M1c = dissémination multiple.`
  }
];
