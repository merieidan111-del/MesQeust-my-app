import { Question, CourseResource } from '../../types/medical';

// Lesson 20: Paludisme
export const INFECTIO_LESSON_20_QUESTIONS: Question[] = [
  {
    id: 'q-inf-20-01',
    courseId: 'crs-inf-20',
    questionNumber: 1,
    type: 'QCM',
    content: "Quelle espèce parasitaire de Plasmodium est responsable de la quasi-totalité des formes graves mortelles de paludisme (neuropaludisme, détresse respiratoire) ?",
    options: [
      "A. Plasmodium malariae",
      "B. Plasmodium vivax",
      "C. Plasmodium falciparum",
      "D. Plasmodium ovale",
      "E. Plasmodium knowlesi"
    ],
    correctAnswers: [2],
    explanation: "Plasmodium falciparum est l'espèce la plus virulente et létale. Elle possède la capacité de cytoadhérence aux cellules endothéliales des capillaires viscéraux et cérébraux par l'intermédiaire de la protéine PfEMP-1, provoquant une séquestration microvasculaire à l'origine de l'anoxie tissulaire et des formes pernicieuses.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-02',
    courseId: 'crs-inf-20',
    questionNumber: 2,
    type: 'QCM',
    content: "Quelles espèces de Plasmodium sont caractérisées par la persistance de formes hépatiques quiescentes (hypnozoïtes) pouvant provoquer des rechutes tardives des mois après l'infestation ?",
    options: [
      "A. P. falciparum et P. malariae",
      "B. P. vivax et P. ovale",
      "C. P. malariae et P. knowlesi",
      "D. P. falciparum et P. vivax",
      "E. P. ovale et P. knowlesi"
    ],
    correctAnswers: [1],
    explanation: "Plasmodium vivax et Plasmodium ovale forment des hypnozoïtes hépatocytaires dormants qui peuvent se réactiver des mois voire des années plus tard. Leur éradication radicale nécessite l'utilisation d'une 8-aminoquinoléine (Primaquine ou Tafénoquine) après vérification de l'absence de déficit en G6PD.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-03',
    courseId: 'crs-inf-20',
    questionNumber: 3,
    type: 'QCM',
    content: "La triade clinique caractéristique de l'accès palustre périodique franc se déroule selon quelle séquence chronologique stéréotypée ?",
    options: [
      "A. Stade de sueurs -> Stade de froid -> Stade de chaleur",
      "B. Stade de frissons et sensation de froid intense -> Stade de chaleur brûlante avec fièvre à 40°C -> Stade de sueurs profuses avec défervescence",
      "C. Stade de coma d'emblée -> Stade de convulsions -> Stade de réveil fébrile",
      "D. Stade d'ictère -> Stade d'anémie -> Stade de purpura",
      "E. Stade d'apyrésie -> Stade de diarrhée profuse -> Stade de céphalées"
    ],
    correctAnswers: [1],
    explanation: "L'accès palustre intermittent typique dure environ 6 à 10 heures et comporte 3 phases stéréotypées successives : 1) Stade de frissons violents avec sensation de froid glacial (1 à 2 h) ; 2) Stade de chaleur avec fièvre élevée à 40-41°C et peau brûlante sèche (3 à 4 h) ; 3) Stade de sueurs profuses avec chute brutale de la température (2 à 4 h).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-04',
    courseId: 'crs-inf-20',
    questionNumber: 4,
    type: 'QCM',
    content: "Parmi les anomalies suivantes, laquelle constitue un critère de gravité majeur du paludisme à P. falciparum selon la définition de l'OMS ?",
    options: [
      "A. Une fièvre isolée à 39,2°C",
      "B. Une parasitémie à 0,1% sur frottis sanguin",
      "C. Une hypoglycémie sévère inférieure à 2,2 mmol/L (0,40 g/L) ou un coma (score de Glasgow < 11)",
      "D. Une diarrhée aqueuse de 2 selles par jour sans déshydratation",
      "E. Une numération plaquettaire à 120 000/mm³"
    ],
    correctAnswers: [2],
    explanation: "Les critères de paludisme grave de l'OMS comprennent : coma/neuropaludisme, détresse respiratoire/SDRA, acidose métabolique (lactates > 5 mmol/L), hypoglycémie (< 2,2 mmol/L), anémie sévère (Hb < 7 g/dL), insuffisance rénale aiguë, collapsus hémodynamique, saignements/CIVD et hyperparasitémie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-05',
    courseId: 'crs-inf-20',
    questionNumber: 5,
    type: 'QCM',
    content: "Quel est le traitement d'extrême urgence de PREMIÈRE INTENTION recommandé par l'OMS pour tout accès pernicieux ou paludisme grave à P. falciparum chez l'adulte et l'enfant ?",
    options: [
      "A. Quinine intraveineuse en perfusion lente",
      "B. Artésunate par voie intraveineuse (2,4 mg/kg à H0, H12, H24 puis toutes les 24h)",
      "C. Chloroquine par voie intramusculaire",
      "D. Méfloquine per os par sonde gastrique",
      "E. Doxycycline en perfusion continue"
    ],
    correctAnswers: [1],
    explanation: "L'Artésunate IV est le traitement de référence mondial du paludisme grave (réduit la mortalité de 35% chez l'adulte et 22% chez l'enfant par rapport à la quinine). La Quinine IV est désormais un traitement de seconde intention si l'artésunate n'est pas immédiatement disponible.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-06',
    courseId: 'crs-inf-20',
    questionNumber: 6,
    type: 'QCM',
    content: "Quel examen biologique de référence d'urgence associe l'identification spécifique de l'espèce plasmodiale et la quantification précise du pourcentage d'hématies parasitées (parasitémie) ?",
    options: [
      "A. La goutte épaisse seule",
      "B. Le frottis sanguin mince coloré au May-Grünwald-Giemsa (MGG)",
      "C. Le dosage de la protéine C réactive",
      "D. La vitesse de sédimentation à la 1ère heure",
      "E. L'hémoculture sur gélose au sang cuit"
    ],
    correctAnswers: [1],
    explanation: "Le frottis sanguin mince permet d'analyser la morphologie des hématies et des trophozoïtes pour identifier l'espèce avec certitude et calculer la parasitémie exacte (% d'hématies parasitées). La goutte épaisse est plus sensible mais ne permet pas un calcul précis de la parasitémie ni une identification morphologique aussi aisée.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-07',
    courseId: 'crs-inf-20',
    questionNumber: 7,
    type: 'QCM',
    content: "Quel effet indésirable métabolique grave doit être systématiquement surveillé et prévenu par des perfusions de soluté glucosé lors de l'utilisation de la Quinine intraveineuse ?",
    options: [
      "A. L'hyperkaliémie maligne",
      "B. L'hypoglycémie sévère par hyperinsulinisme réactionnel (stimulation des cellules bêta-pancréatiques)",
      "C. L'acidocétose diabétique",
      "D. L'hypernatrémie de déshydratation",
      "E. L'hyperuricémie aiguë"
    ],
    correctAnswers: [1],
    explanation: "La Quinine est un puissant sécrétagogue d'insuline par stimulation directe des récepteurs des cellules bêta des îlots de Langerhans. Elle induit un risque très élevé d'hypoglycémie sévère et potentiellement mortelle, nécessitant une perfusion continue sous apport glucosé (G10%) et un contrôle glycémique pluriquotidien.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-08',
    courseId: 'crs-inf-20',
    questionNumber: 8,
    type: 'QCM',
    content: "Quel est le traitement de choix d'un accès palustre simple (non grave) à Plasmodium falciparum chez un adulte de retour d'une zone d'endémie ?",
    options: [
      "A. Chloroquine orale pendant 3 jours",
      "B. Une combinaison thérapeutique à base de dérivés de l'artémisinine (ACT) par voie orale (ex: Artéméther-Luméfantrine ou Arténimol-Pipéraquine) pendant 3 jours",
      "C. Pénicilline V pendant 10 jours",
      "D. Primaquine seule pendant 2 semaines",
      "E. Quinine IV pendant 7 jours"
    ],
    correctAnswers: [1],
    explanation: "Les combinaisons thérapeutiques à base de dérivés de l'artémisinine (ACT : Artéméther-Luméfantrine ou Dihydroartémisinine-Pipéraquine) per os pendant 3 jours sont le traitement de première ligne mondial de l'accès palustre simple à P. falciparum (ou Atovaquone-Proguanil en alternative).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-09',
    courseId: 'crs-inf-20',
    questionNumber: 9,
    type: 'QCM',
    content: "Quel dosage enzymatique préalable est INDISPENSABLE avant d'administrer de la Primaquine pour le traitement radical des rechutes à P. vivax ou P. ovale ?",
    options: [
      "A. Le dosage des phosphatases alcalines",
      "B. Le dosage de l'activité de la Glucose-6-Phosphate Déshydrogénase (G6PD) érythrocytaire",
      "C. Le dosage de la créatine phosphokinase",
      "D. Le dosage de la lipase sérique",
      "E. Le dosage de l'amylase salivaire"
    ],
    correctAnswers: [1],
    explanation: "La Primaquine provoque une anémie hémolytique intravasculaire aiguë potentiellement fatale chez les sujets présentant un déficit en G6PD (favisme). Le dépistage d'un déficit en G6PD est donc une obligation médico-légale absolue avant toute prescription.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-10',
    courseId: 'crs-inf-20',
    questionNumber: 10,
    type: 'QCM',
    content: "Parmi les manifestations cliniques suivantes, laquelle définit le 'cinchonisme' induit par un surdosage ou une intolérance à la Quinine ?",
    options: [
      "A. Alopécie totale avec glossite atrophique",
      "B. Acouphènes, baisse de l'acuité auditive, vertiges, céphalées et nausées",
      "C. Arthrite aiguë de la cheville avec tophus",
      "D. Hémoptysie foudroyante bilatérale",
      "E. Éruption psoriasiforme du cuir chevelu"
    ],
    correctAnswers: [1],
    explanation: "Le cinchonisme regroupe les manifestations toxiques de la quinine : bourdonnements d'oreille (acouphènes), hypoacousie réversible, vertiges, céphalées et troubles visuels. Sur le plan cardiaque, elle allonge l'intervalle QTc.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-11',
    courseId: 'crs-inf-20',
    questionNumber: 11,
    type: 'QCM',
    content: "Quelle espèce de Plasmodium présente une périodicité des accès fébriles toutes les 72 heures (accès quarte) et peut se compliquer exceptionnellement d'un syndrome néphrotique quartanais ?",
    options: [
      "A. Plasmodium falciparum",
      "B. Plasmodium vivax",
      "C. Plasmodium malariae",
      "D. Plasmodium ovale",
      "E. Plasmodium knowlesi"
    ],
    correctAnswers: [2],
    explanation: "Plasmodium malariae a un cycle intra-érythrocytaire de 72 heures (fièvre quarte : J1, J4, J7...). Elle est capable de persister sous forme d'érythrocytémie à bas bruit pendant des décennies et peut induire une glomérulonéphrite membranoproliférative par complexes immuns.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-12',
    courseId: 'crs-inf-20',
    questionNumber: 12,
    type: 'QCM',
    content: "Quel vecteur assure la transmission biologique naturelle du paludisme à l'homme ?",
    options: [
      "A. Le moustique femelle du genre Anopheles (Anophèle)",
      "B. La mouche tsé-tsé (Glossina)",
      "C. Le phlébotome femelle",
      "D. La tique Ixodes ricinus",
      "E. Le moustique Aedes aegypti"
    ],
    correctAnswers: [0],
    explanation: "Le paludisme est transmis exclusivement par la piqûre de moustiques femelles hématophages appartenant au genre Anopheles, dont l'activité de piqûre est préférentiellement nocturne (du coucher au lever du soleil).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-13',
    courseId: 'crs-inf-20',
    questionNumber: 13,
    type: 'QCM',
    content: "Quelle mesure de protection physique mécanique est la plus efficace pour réduire la morbidité et la mortalité palustre chez les populations vivant en zone d'endémie ?",
    options: [
      "A. Les bracelets anti-moustiques aux huiles essentielles",
      "B. Les moustiquaires imprégnées d'insecticide d'action durable (MILD)",
      "C. Les lampes à ultra-violets d'intérieur",
      "D. Le port exclusif de vêtements sombres",
      "E. Les ultrasons électroniques de poche"
    ],
    correctAnswers: [1],
    explanation: "L'utilisation universelle de moustiquaires imprégnées d'insecticides pyréthrinoïdes à longue durée d'action (MILD) est la mesure de santé publique la plus efficiente validée par l'OMS pour prévenir le contact homme-vecteur durant la nuit.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-14',
    courseId: 'crs-inf-20',
    questionNumber: 14,
    type: 'QCM',
    content: "Quelle complication hémolytique retardée spécifique doit être surveillée 2 à 4 semaines après un traitement efficace d'un accès grave par l'Artésunate intraveineux ?",
    options: [
      "A. La coagulation intravasculaire disséminée récidivante",
      "B. L'anémie hémolytique auto-immune ou hémolyse retardée post-artésunate (PADH - Post-Artesunate Delayed Hemolysis)",
      "C. L'agranulocytose aiguë médicamenteuse",
      "D. L'aplasie médullaire globale irréversible",
      "E. La thrombocytémie de rebond supérieure à 2 millions"
    ],
    correctAnswers: [1],
    explanation: "L'artésunate tue rapidement les hématies parasitées qui sont ensuite éliminées par la rate ('pitting'). Une anémie hémolytique retardée peut survenir entre le 7ème et le 28ème jour post-traitement chez 10 à 20% des patients, justifiant un contrôle de la NFS à J7, J14 et J21.",
    difficulty: 'difficile'
  },
  {
    id: 'q-inf-20-15',
    courseId: 'crs-inf-20',
    questionNumber: 15,
    type: 'QCM',
    content: "Concernant la chimioprophylaxie du paludisme chez le voyageur non immun se rendant en zone de chimiorésistance à la chloroquine (Groupe 3), quelle molécule est préconisée ?",
    options: [
      "A. Chloroquine seule (Nivaquine)",
      "B. Atovaquone-Proguanil (Malarone) ou Doxycycline (ou Méfloquine)",
      "C. Pénicilline V",
      "D. Artéméther oral en prise continue",
      "E. Métronidazole"
    ],
    correctAnswers: [1],
    explanation: "Pour les zones de forte chloroquinorésistance (Groupe 3 / zone intertropicale), les options de chimioprophylaxie sont l'association Atovaquone-Proguanil (1 cp/j pendant le séjour et 7 jours après retour), la Doxycycline (100 mg/j pendant séjour et 4 semaines après retour), ou la Méfloquine.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-16',
    courseId: 'crs-inf-20',
    questionNumber: 16,
    type: 'QCM',
    content: "Quel examen paraclinique est contre-indiqué ou doit être interprété avec prudence en raison d'un risque majeur de rupture splénique au cours d'un accès palustre aigu ?",
    options: [
      "A. L'électrocardiogramme",
      "B. La palpation abdominale brutale et vigoureuse de la rate (risque de rupture d'une rate de consistance molle et friable)",
      "C. La radiographie thoracique",
      "D. L'échographie abdominale douce",
      "E. La mesure de la pression artérielle"
    ],
    correctAnswers: [1],
    explanation: "La rate palustre en phase aiguë est augmentée de volume, extrêmement congestive, hyperhémiée et friable ('rate d'accès pernicieux'). Toute palpation intempestive ou traumatisme minime expose au risque de rupture splénique cataclysmique hémopéritoine.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-17',
    courseId: 'crs-inf-20',
    questionNumber: 17,
    type: 'QCM',
    content: "Chez la femme enceinte, quelle est la conséquence fœto-maternelle redoutable du paludisme à Plasmodium falciparum liée au tropisme du parasite pour le placenta ?",
    options: [
      "A. Macrosomie fœtale supérieure à 5 kg",
      "B. Séquestration placentaire massive avec avortement spontané, accouchement prématuré, retard de croissance intra-utérin (RCIU) et anémie maternelle sévère",
      "C. Post-maturité prolongée sans souffrance fœtale",
      "D. Hypertrophie placentaire bénigne isolée",
      "E. Aucune anomalie car la barrière placentaire est totalement étanche au parasite"
    ],
    correctAnswers: [1],
    explanation: "P. falciparum adhère aux chondroïtine-sulfates A des villosités placentaires, causant une parasitose placentaire intense avec ischémie fœto-maternelle, avortements, hypotrophie fœtale (faible poids de naissance) et anémie maternelle grave.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-18',
    courseId: 'crs-inf-20',
    questionNumber: 18,
    type: 'QCM',
    content: "Quelle anomalie hématologique biologique non spécifique mais très fréquente accompagne quasi-constamment l'accès palustre ?",
    options: [
      "A. Thrombocytose majeure à 800 000/mm³",
      "B. Thrombopénie (souvent < 100 000/mm³) et anémie hémolytique régénérative",
      "C. Hyperéosinophilie sanguine massive > 5 000/mm³",
      "D. Polyglobulie avec hématocrite à 65%",
      "E. Agranulocytose totale d'emblée"
    ],
    correctAnswers: [1],
    explanation: "La thrombopénie est présente dans plus de 80% des accès palustres (liée au piégeage splénique et à la lyse périphérique). Elle s'associe à une anémie hémolytique de degré variable avec réticulocytose et hyperbilirubinémie libre.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-19',
    courseId: 'crs-inf-20',
    questionNumber: 19,
    type: 'QCM',
    content: "Quel test rapide de diagnostic (TDR) permet de détecter spécifiquement un antigène soluble sécrété par Plasmodium falciparum ?",
    options: [
      "A. La détection de l'antigène HRP-2 (Histidine-Rich Protein 2)",
      "B. La détection de la toxine cholérique",
      "C. Le dosage de la streptolysine O",
      "D. Le test d'oxydase sur bandelette",
      "E. L'antigène soluble de pneumocoque urinaire"
    ],
    correctAnswers: [0],
    explanation: "La protéine HRP-2 (Histidine-Rich Protein 2) est un antigène hydrosoluble synthétisé abondamment par P. falciparum, ciblé par la majorité des TDR paludisme rapides disponibles sur le terrain.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-20',
    courseId: 'crs-inf-20',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle est la règle d'or clinique absolue concernant tout patient présentant une fièvre au retour d'un séjour en zone intertropicale d'endémie palustre ?",
    options: [
      "A. Attendre 15 jours d'observation avant de pratiquer un bilan biologique",
      "B. Considérer la fièvre comme un paludisme à Plasmodium falciparum a priori jusqu'à preuve du contraire et réaliser immédiatement un frottis/goutte épaisse d'urgence",
      "C. Prescrire des antibiotiques à l'aveugle",
      "D. Faire uniquement un bilan urinaire à la recherche d'une cystite",
      "E. Rassurer le patient et surseoir à toute exploration si la température est < 38,5°C"
    ],
    correctAnswers: [1],
    explanation: "Toute fièvre au retour d'une zone tropicale est un paludisme à Plasmodium falciparum jusqu'à preuve parasitologique formelle du contraire. Tout retard diagnostique engage directement le pronostic vital par passage rapide en neuropaludisme.",
    difficulty: 'facile'
  },

  // 5 Progressive Clinical Cases for Lesson 20
  {
    id: 'q-inf-20-c1',
    courseId: 'crs-inf-20',
    questionNumber: 21,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - ÉTAPE 1 : Un cadre d'entreprise de 35 ans consulte aux urgences pour fièvre à 39,6°C avec frissons, céphalées pulsatiles rétro-orbitaires et myalgies diffuses. Il revient il y a 9 jours d'une mission professionnelle de 2 semaines en Côte d'Ivoire sans avoir pris de chimioprophylaxie. NFS : Hb 11 g/dL, Leucocytes 4 200/mm³, Plaquettes 65 000/mm³. Quel examen parasitologique d'urgence confirmez-vous immédiatement et quel germe suspectez-vous ?",
    options: [
      "A. Sérologie typhoïde de Widal ; Salmonella Typhi",
      "B. Frottis sanguin mince + goutte épaisse (ou TDR paludisme) en urgence ; Plasmodium falciparum",
      "C. Hémocultures à conserver 21 jours ; Brucella abortus",
      "D. Échographie hépatique ; Amibiase colique",
      "E. Recherche de légionelle urinaire ; Legionella pneumophila"
    ],
    correctAnswers: [1],
    explanation: "Fièvre au retour d'Afrique subsaharienne + thrombopénie = Paludisme à Plasmodium falciparum jusqu'à preuve du contraire. Le frottis sanguin et la goutte épaisse doivent être réalisés et lus dans un délai inférieur à 2 heures.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-c2',
    courseId: 'crs-inf-20',
    questionNumber: 22,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - ÉTAPE 1 : Le frottis sanguin de ce patient confirme la présence de trophozoïtes en anneau de Plasmodium falciparum avec une parasitémie estimée à 0,8%. Le patient est parfaitement lucide (Glasgow 15), la PA est à 125/75 mmHg, pas de détresse respiratoire ni d'ictère, tolérance digestive conservée. Quel est le traitement de choix à instaurer ?",
    options: [
      "A. Artésunate intraveineux pendant 10 jours en réanimation",
      "B. Combinaison thérapeutique orale à base d'artémisinine (ACT : Artéméther-Luméfantrine) pendant 3 jours par voie orale",
      "C. Quinine IV en perfusion continue",
      "D. Chloroquine per os pendant 3 jours",
      "E. Doxycycline seule pendant 1 mois"
    ],
    correctAnswers: [1],
    explanation: "Il s'agit d'un accès palustre simple (absence de critère de gravité OMS, parasitémie < 4%, tolérance orale). Le traitement ambulatoire de référence est un ACT oral (ex: Artéméther-Luméfantrine) pendant 3 jours avec une première prise lors d'un repas gras.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-c3',
    courseId: 'crs-inf-20',
    questionNumber: 23,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 - ÉTAPE 1 : Une voyageuse de 28 ans de retour du Cameroun est amenée dans un état de coma fébrile (Glasgow 8) avec crises convulsives généralisées répétées. Le frottis sanguin confirme Plasmodium falciparum avec 12% d'hématies parasitées. Glycémie : 1,8 mmol/L (0,32 g/L). Quels sont les deux gestes thérapeutiques d'extrême urgence ?",
    options: [
      "A. Perfusion d'eau pure et administration de paracétamol",
      "B. Resucrage immédiat par bolus de G30% IV (correction de l'hypoglycémie) ET mise en route d'Artésunate intraveineux à 2,4 mg/kg avec hospitalisation en réanimation",
      "C. Injections d'aspirine et transfert en médecine interne",
      "D. Ponction lombaire isolée sans traitement antipaludique",
      "E. Hémocultures seules et attente de 12 heures"
    ],
    correctAnswers: [1],
    explanation: "La patiente présente un neuropaludisme grave avec deux critères de sévérité majeurs : coma/convulsions et hypoglycémie menaçante (< 2,2 mmol/L). Il faut immédiatement corriger l'hypoglycémie par du G30% IV et débuter l'Artésunate IV en réanimation.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-c4',
    courseId: 'crs-inf-20',
    questionNumber: 24,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 - ÉTAPE 1 : Un patient guéri d'un accès palustre à Plasmodium vivax contracté à Madagascar revient 6 mois plus tard pour réapparition d'accès fébriles tierces réguliers. Le frottis retrouve à nouveau P. vivax. Quelle molécule doit être prescrite après traitement de l'accès aigu pour éviter toute nouvelle reviviscence, sous réserve d'un taux normal de G6PD ?",
    options: [
      "A. Primaquine pendant 14 jours",
      "B. Métronidazole pendant 10 jours",
      "C. Céfotaxime injectable",
      "D. Fluconazole en dose unique",
      "E. Spiramycine per os"
    ],
    correctAnswers: [0],
    explanation: "Les rechutes tardives de P. vivax sont causées par la réactivation des hypnozoïtes intrahépatiques dormants. Seule la Primaquine (ou Tafénoquine) est active sur ces formes tissulaires pour obtenir une guérison radicale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-20-c5',
    courseId: 'crs-inf-20',
    questionNumber: 25,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 - ÉTAPE 1 : Un patient traité avec succès par Artésunate IV pour paludisme grave présente 18 jours plus tard une asthénie avec pâleur cutanéo-muqueuse et ictère conjonctival. NFS : Hb 6,8 g/dL (vs 11 g/dL à la sortie), réticulocytes élevés, haptoglobine effondrée, bilirubine libre élevée, frottis sanguin négatif sans parasite. Quel diagnostic devez-vous évoquer ?",
    options: [
      "A. Échec du traitement et rechute parasitaire aiguë",
      "B. Hémolyse retardée post-artésunate (Post-Artesunate Delayed Hemolysis - PADH)",
      "C. Carence martiale aiguë brutale",
      "D. Leucémie aiguë myéloblastique",
      "E. Cirrhose hépatique terminale décompensée"
    ],
    correctAnswers: [1],
    explanation: "Il s'agit d'une hémolyse retardée post-artésunate (PADH), complication connue survenant 2 à 4 semaines après un traitement par artésunate IV chez des patients ayant présenté une forte parasitémie initiale, liée à l'élimination splénique différée des hématies préalablement parasitées.",
    difficulty: 'difficile'
  }
];

export const INFECTIO_LESSON_20_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-20-mindmap',
    courseId: 'crs-inf-20',
    title: 'Mind Map : Paludisme (Cycle, Diagnostic d\'Urgence, Formes Graves & Thérapeutique)',
    type: 'mindmap',
    content: `
# MIND MAP : PALUDISME HUMAIN (PLASMODIUM)
*Recommandations Internationales OMS & Prise en Charge en Urgence*

## 1. LES 5 ESPÈCES ET LEURS PARTICULARITÉS
- **Plasmodium falciparum** : La plus redoutable (95% des décès). Séquestration microvasculaire via PfEMP-1, fièvre tierce maligne, neuropaludisme.
- **Plasmodium vivax & ovale** : Hypnozoïtes hépatiques quiescents (**Rechutes tardives -> Primaquine obligatoire après test G6PD**). Fièvre tierce bénigne (cycle de 48h).
- **Plasmodium malariae** : Fièvre quarte (cycle de 72h), glomérulonéphrite quartanaire à complexes immuns.
- **Plasmodium knowlesi** : Asie du Sud-Est (singes), cycle rapide de 24h.

## 2. TRIADE CLINIQUE DE L'ACCÈS INTERMITTENT
1. **Frissons** (1 à 2 h) : Froid intense, claquement de dents, peau d'oie.
2. **Chaleur** (3 à 4 h) : Fièvre à 40-41°C, peau brûlante sèche, céphalées violentes.
3. **Sueurs** (2 à 4 h) : Sueurs profuses, défervescence thermique brutale, sensation de bien-être.

## 3. CRITÈRES DE PALUDISME GRAVE (OMS)
- Neurologique : Coma (Glasgow < 11), convulsions répétées (≥ 2/24h).
- Respiratoire : Détresse respiratoire, SDRA, œdème pulmonaire.
- Hémodynamique : Collapsus, PAS < 80 mmHg.
- Métabolique : Acidose (lactates > 5 mmol/L), **Hypoglycémie (< 2,2 mmol/L)**.
- Rénal : Insuffisance rénale aiguë (créatinine > 265 µmol/L).
- Hématologique : Anémie sévère (Hb < 7 g/dL), hémorragies/CIVD.
- Parasitémie : > 4% chez le sujet non immun, > 10% en général.

## 4. SCHÉMAS THÉRAPEUTIQUES DE RÉFÉRENCE
- **Accès Grave (Urgence Vitale)** :
  - **Artésunate IV (2,4 mg/kg à H0, H12, H24 puis toutes les 24h)** en réanimation.
  - Relais par 3 jours d'ACT oral dès tolérance digestive.
  - Alternative : Quinine IV (dose de charge 20 mg/kg sur G5% sous surveillance ECG/glycémie).
- **Accès Simple à P. falciparum** :
  - **ACT par voie orale pendant 3 jours** (Artéméther-Luméfantrine ou Arténimol-Pipéraquine) ou Atovaquone-Proguanil.
- **P. vivax / P. ovale** :
  - ACT ou Chloroquine + **Primaquine 14 jours** (après vérification G6PD normale).
`
  },
  {
    id: 'res-inf-20-astuces',
    courseId: 'crs-inf-20',
    title: 'Astuces & Pièges aux Concours - Paludisme',
    type: 'astuce',
    content: `
# ASTUCES & PIÈGES AU CONCOURS (PALUDISME)
*Par Dr. LAIDANI.M - Médecine Tropicale & Maladies Infectieuses*

### ⚠️ PIÈGE N°1 : La règle d'or du voyageur fébrile
- « Toute fièvre au retour d'un pays tropical d'endémie est un paludisme à Plasmodium falciparum jusqu'à preuve du contraire ». Un QCM proposant une attente ou un traitement antibiotique d'emblée sans frottis est FAUX.

### ⚠️ PIÈGE N°2 : Le traitement de 1ère intention du paludisme grave
- L'Artésunate IV est le premier choix mondial depuis les essais SEAQUAMAT et AQUAMAT (supérieur à la quinine). Ne pas hésiter à cocher l'Artésunate en 1ère intention.

### ⚠️ PIÈGE N°3 : Le danger de la Primaquine sans test G6PD
- Ne JAMAIS administrer de la Primaquine sans dosage préalable de la G6PD : risque d'anémie hémolytique aiguë médicamenteuse foudroyante.

### ⚠️ PIÈGE N°4 : Quinine et hypoglycémie
- Tout patient sous Quinine IV doit recevoir des perfusions de sérum glucosé (G10%) en continu car la quinine stimule directement l'insuline pancréatique.
`
  }
];

// Lesson 21: Varicelle & Zona
export const INFECTIO_LESSON_21_QUESTIONS: Question[] = [
  {
    id: 'q-inf-21-01',
    courseId: 'crs-inf-21',
    questionNumber: 1,
    type: 'QCM',
    content: "Quel virus de la famille des Herpesviridae est l'agent étiologique unique de la varicelle lors de la primo-infection et du zona lors de la réactivation tardive ?",
    options: [
      "A. Le virus Epstein-Barr (EBV / HHV-4)",
      "B. Le virus Varicelle-Zona (VZV / HHV-3)",
      "C. Le Cytomégalovirus (CMV / HHV-5)",
      "D. L'Herpes Simplex Virus type 1 (HSV-1)",
      "E. L'Herpèsvirus humain type 8 (HHV-8)"
    ],
    correctAnswers: [1],
    explanation: "Le VZV (Virus Varicelle-Zona ou Human Herpesvirus 3) est un virus à ADN double brin enveloppé qui donne la varicelle en primo-infection (souvent chez l'enfant), puis reste latent dans les ganglions sensitifs rachidiens ou crâniens et peut se réactiver sous forme de zona métamérique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-02',
    courseId: 'crs-inf-21',
    questionNumber: 2,
    type: 'QCM',
    content: "Quelle est la durée moyenne d'incubation silencieuse de la varicelle après contage respiratoire ou cutané ?",
    options: [
      "A. 24 à 48 heures",
      "B. 14 jours (extrêmes de 10 à 21 jours)",
      "C. 6 semaines",
      "D. 3 mois",
      "E. 6 mois"
    ],
    correctAnswers: [1],
    explanation: "L'incubation de la varicelle est typiquement de 14 jours (avec des extrêmes habituels de 10 à 21 jours). La période de contagiosité débute 24 à 48 heures avant l'éruption et persiste jusqu'à la dessiccation complète de toutes les vésicules en croûtes (environ 5 à 7 jours).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-03',
    courseId: 'crs-inf-21',
    questionNumber: 3,
    type: 'QCM',
    content: "Parmi les caractéristiques sémiologiques suivantes de l'éruption cutanée de la varicelle, laquelle est PATHOGNOMONIQUE ?",
    options: [
      "A. Présence de macules érythémateuses sans vésicule débutant aux membres inférieurs",
      "B. Coexistence simultanée de lésions d'âges différents (macules, papules, vésicules 'en goutte de rosée' à liquide clair et croûtes) avec atteinte du cuir chevelu et des muqueuses",
      "C. Éruption vésiculeuse strictement unilatérale limitée à un seul métamère thoracique",
      "D. Purpura pétéchial nécrotique prédominant aux plis de flexion",
      "E. Absence totale de prurit cutané"
    ],
    correctAnswers: [1],
    explanation: "L'éruption de la varicelle évolue par poussées successives de 3-4 jours, réalisant l'aspect caractéristique de polymorphisme lésionnel (lésions d'âges différents sur un même territoire cutané : macules, papules, vésicules claires ombilicales et croûtes brunes) avec atteinte constante du cuir chevelu et énanthème buccal.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-04',
    courseId: 'crs-inf-21',
    questionNumber: 4,
    type: 'QCM',
    content: "Quelle classe thérapeutique médicamenteuse est FORMELLEMENT CONTRE-INDIQUÉE au cours de la varicelle en raison du risque prouvé de complications cutanées nécrosantes bactériennes graves (fascite nécrosante) ?",
    options: [
      "A. Le Paracétamol",
      "B. Les Anti-Inflammatoires Non Stéroïdiens (AINS comme l'Ibuprofène ou le Kétoprofène)",
      "C. Les antihistaminiques anti-H1 oraux",
      "D. Les antiseptiques locaux moussants aqueux",
      "E. Les macrolides"
    ],
    correctAnswers: [1],
    explanation: "Les AINS (Ibuprofène, etc.) sont formellement proscrits dans la varicelle : ils favorisent les surinfections bactériennes profondes invasives à streptocoque A (dermohypodermite nécrosante, fascite nécrosante, choc toxique). L'aspirine est également contre-indiquée en raison du risque de syndrome de Reye.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-05',
    courseId: 'crs-inf-21',
    questionNumber: 5,
    type: 'QCM',
    content: "Quelle complication pulmonaire aiguë grave survient préférentiellement chez l'adulte jeune (notamment fumeur ou femme enceinte) au cours d'une varicelle ?",
    options: [
      "A. L'asthme aigu grave allergique",
      "B. La pneumopathie varicelleuse aiguë hypoxémiante avec infiltrat micronodulaire miliaire diffus bilatéral",
      "C. Le pneumothorax suffocant par rupture de blebs",
      "D. L'emphysème sous-cutané cervical spontané",
      "E. La pleurésie purulente enkystée à staphylocoque"
    ],
    correctAnswers: [1],
    explanation: "La pneumopathie varicelleuse est la complication viscérale majeure de l'adulte (favorisée par le tabagisme et la grossesse). Elle se manifeste par une toux sèche, une dyspnée aiguë, des hémoptysies et une hypoxémie sévère avec radiographie montrant un infiltrat interstitiel micronodulaire bilatéral 'en lâcher de ballons' ou miliaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-06',
    courseId: 'crs-inf-21',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans quelle circonstance clinique un traitement antiviral curatif par Aciclovir par voie intraveineuse (10 à 15 mg/kg toutes les 8h) est-il formellement indiqué au cours d'une varicelle ?",
    options: [
      "A. Varicelle simple non compliquée de l'enfant de 4 ans",
      "B. Varicelle de l'adulte, du sujet immunodéprimé, de la femme enceinte au 3ème trimestre, forme avec atteinte viscérale (pneumopathie, encéphalite) ou varicelle néonatale",
      "C. Simple présence de 10 vésicules sur le tronc chez un enfant apyrétique",
      "D. Cicatrisation croûteuse complète au 8ème jour",
      "E. Chez tout enfant scolarisé en crèche"
    ],
    correctAnswers: [1],
    explanation: "L'Aciclovir IV n'est jamais indiqué dans la varicelle banale de l'enfant sain. Il est réservé aux formes graves et aux terrains à haut risque de complications mortelles : immunodéprimés, adultes, femmes enceintes, pneumopathies et encéphalites varicelleuses, nouveau-nés.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-07',
    courseId: 'crs-inf-21',
    questionNumber: 7,
    type: 'QCM',
    content: "Le zona intercostal typique se caractérise cliniquement par :",
    options: [
      "A. Une éruption bilatérale symétrique touchant l'ensemble de la paroi abdominale",
      "B. Une éruption unilatérale, métamérique, suspendue, sur fond érythémateux le long d'un dermatome thoracique, précédée de brûlures radiculaires intenses",
      "C. Des lésions vésiculeuses confluentes uniquement sur les paumes et plantes",
      "D. Un placard érythémateux dermo-épidermique sans vésicule avec bourrelet périphérique",
      "E. Une anesthésie totale et indolore du thorax sans lésion cutanée"
    ],
    correctAnswers: [1],
    explanation: "Le zona intercostal est la forme la plus fréquente (50% des zonas). Il se traduit par une éruption vésiculeuse unilatérale, radiculaire, métamérique (ne franchissant pas la ligne médiane), très douloureuse à type de brûlure ou cuisson, précédée de douleurs neuropathiques prodromiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-08',
    courseId: 'crs-inf-21',
    questionNumber: 8,
    type: 'QCM',
    content: "Dans le zona ophtalmique (atteinte du ganglion de Gasser / branche V1 du trijumeau), quel signe cutané au niveau de l'aile du nez traduit l'atteinte de la branche naso-ciliaire et constitue un signal d'alerte majeur pour l'œil ?",
    options: [
      "A. Le signe de Koplik",
      "B. Le signe de Hutchinson",
      "C. Le signe de Nikolsky",
      "D. Le signe de Darier",
      "E. Le signe du lacet"
    ],
    correctAnswers: [1],
    explanation: "Le signe de Hutchinson (vésicules zostériennes sur la pointe et l'aile du nez) traduit l'atteinte du nerf naso-ciliaire (branche interne du V1) qui innerve également le globe oculaire, annonçant une atteinte oculaire sévère (kératite, uvéite) dans plus de 75% des cas.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-09',
    courseId: 'crs-inf-21',
    questionNumber: 9,
    type: 'QCM',
    content: "Quelle est la principale séquelle chronique invalidante du zona chez le sujet âgé de plus de 65 ans ?",
    options: [
      "A. L'insuffisance rénale terminale",
      "B. Les névralgies post-zostériennes (NPZ) persistant plus de 3 mois après la cicatrisation cutanée",
      "C. La perte définitive de la marche par paraplégie flasque",
      "D. La survenue d'un diabète de type 1",
      "E. L'ankylose articulaire du coude"
    ],
    correctAnswers: [1],
    explanation: "Les douleurs neuropathiques séquellaires ou douleurs post-zostériennes (NPZ), définies par des douleurs à type de brûlures, d'allodynie ou d'élancements persistant plus de 90 jours après le début de l'éruption, touchent près de 50% des sujets de plus de 70 ans et altèrent lourdement la qualité de vie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-10',
    courseId: 'crs-inf-21',
    questionNumber: 10,
    type: 'QCM',
    content: "Quel est le traitement antiviral de référence par voie orale d'un zona aigu chez un adulte immunocompétent de plus de 50 ans, à débuter dans les 72 premières heures de l'éruption ?",
    options: [
      "A. Amoxicilline 1 g x 3/jour pendant 10 jours",
      "B. Valaciclovir oral à la posologie de 1 000 mg (1 g) 3 fois par jour pendant 7 jours",
      "C. Oseltamivir 75 mg x 2/jour pendant 5 jours",
      "D. Ganciclovir en collyre",
      "E. Lamivudine 100 mg/jour"
    ],
    correctAnswers: [1],
    explanation: "Le Valaciclovir (prodrogue de l'aciclovir à excellente biodisponibilité orale) à la dose de 1 g x 3/jour pendant 7 jours, administré dans les 72h suivant le début des vésicules, accélère la cicatrisation, réduit l'intensité de la douleur aiguë et diminue l'incidence des douleurs post-zostériennes.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-11',
    courseId: 'crs-inf-21',
    questionNumber: 11,
    type: 'QCM',
    content: "Le syndrome de Ramsay Hunt associe une éruption zostérienne au niveau de la conque de l'oreille (zone de Ramsay Hunt) à :",
    options: [
      "A. Une cécité brutale unilatérale",
      "B. Une paralysie faciale périphérique homolatérale avec vertiges, acouphènes et hypoacousie (atteinte du nerf facial VII et auditif VIII)",
      "C. Une hémiplégie controlatérale motrice pure",
      "D. Une perte totale de l'odorat bilatérale",
      "E. Un trismus invincible sans paralysie"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Ramsay Hunt est lié à la réactivation du VZV dans le ganglion géniculé du nerf facial (VII bis). Il associe l'éruption vésiculeuse dans la zone de Ramsay Hunt (conque de l'oreille, CAE, tympan), une paralysie faciale périphérique et des signes cochléovestibulaires (vertiges, hypoacousie par contiguïté avec le VIII).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-12',
    courseId: 'crs-inf-21',
    questionNumber: 12,
    type: 'QCM',
    content: "Concernant la varicelle néonatale, quel intervalle de temps entre le début de la varicelle chez la mère et l'accouchement expose le nouveau-né au risque maximal de varicelle néonatale disséminée gravissime ?",
    options: [
      "A. Varicelle maternelle survenue au 1er trimestre de la grossesse",
      "B. Varicelle maternelle survenue entre 5 jours avant l'accouchement et 2 jours après l'accouchement",
      "C. Varicelle maternelle survenue 2 mois avant le terme",
      "D. Varicelle maternelle contractée dans l'enfance guérie",
      "E. Varicelle survenue 3 semaines après l'accouchement"
    ],
    correctAnswers: [1],
    explanation: "Si la mère développe une varicelle entre J-5 avant la naissance et J+2 après, le nouveau-né est massivement contaminé par voie hématogène transplacentaire sans avoir eu le temps de recevoir les anticorps protecteurs maternels (IgG), entraînant une varicelle viscérale fulminante (mortalité de 20-30%).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-21-13',
    courseId: 'crs-inf-21',
    questionNumber: 13,
    type: 'QCM',
    content: "Quelle molécule analgésique centrale antineuropathique est particulièrement efficace en première ligne pour soulager les douleurs post-zostériennes (NPZ) chroniques ?",
    options: [
      "A. Paracétamol seul à forte dose",
      "B. Gabapentinoïdes (Gabapentine ou Prégabaline) ou antidépresseurs tricycliques (Amitriptyline)",
      "C. Ibuprofène 400 mg 3 fois par jour",
      "D. Aspirine 3 g par jour",
      "E. Morphine en bolus exclusif sans traitement de fond"
    ],
    correctAnswers: [1],
    explanation: "Les douleurs neuropathiques post-zostériennes sont peu sensibles aux antalgiques de palier 1 et 2. Les traitements de référence sont les gabapentinoïdes (Prégabaline, Gabapentine), les antidépresseurs tricycliques (Amitriptyline) ou les patchs cutanés de Lidocaïne à 5%.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-14',
    courseId: 'crs-inf-21',
    questionNumber: 14,
    type: 'QCM',
    content: "Quelle anomalie neurologique bénigne et spontanément résolutive survient classiquement au décours de la varicelle chez l'enfant d'âge préscolaire ?",
    options: [
      "A. La chorée de Sydenham",
      "B. L'ataxie cérébelleuse aiguë post-varicelleuse (démarche ébrieuse, tremblement intentionnel)",
      "C. La sclérose latérale amyotrophique",
      "D. Le syndrome de Guillain-Barré foudroyant",
      "E. La maladie de Parkinson juvénile"
    ],
    correctAnswers: [1],
    explanation: "La cérébellite post-varicelleuse (ataxie cérébelleuse aiguë) survient quelques jours après l'éruption chez l'enfant. Elle se traduit par une démarche ébrieuse, une hypotonie et un nystagmus. Son pronostic est excellent avec récupération complète spontanée en quelques semaines.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-15',
    courseId: 'crs-inf-21',
    questionNumber: 15,
    type: 'QCM',
    content: "Quel est le risque foetal d'une primo-infection par le VZV survenant chez une femme enceinte avant la 20ème semaine d'aménorrhée ?",
    options: [
      "A. Trisomie 21 fœtale",
      "B. Syndrome de varicelle congénitale (hypoplasie des membres, cicatrices cutanées métamériques, microcéphalie, choriorétinite)",
      "C. Spina bifida ouvert isolé",
      "D. Diabète néonatal transitoire",
      "E. Hypertrophie cardiaque réversible"
    ],
    correctAnswers: [1],
    explanation: "Avant 20 SA, le passage transplacentaire du VZV peut entraîner un syndrome de varicelle congénitale (environ 1-2% des cas) associant hypoplasie des membres avec malformations osseuses, cicatrices cutanées zosteriformes en zig-zag, microphtalmie et retard mental sévère.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-21-16',
    courseId: 'crs-inf-21',
    questionNumber: 16,
    type: 'QCM',
    content: "Chez un patient immunodéprimé sévère (ex: allogreffe de moelle, chimiothérapie aplasiante), quelle forme atypique et extensive de zona peut survenir ?",
    options: [
      "A. Zona disséminé ou zona généralisé 'varicelliforme' avec localisations viscérales (hépatique, pulmonaire, neurologique)",
      "B. Zona strictement sous-unguéal",
      "C. Zona sans aucune lésion cutanée ni douleur",
      "D. Zona limitant la pousse des cheveux",
      "E. Zona provoquant une obésité morbide"
    ],
    correctAnswers: [0],
    explanation: "Chez l'immunodéprimé, le zona peut déborder son métamère d'origine pour donner un zona nécrotique extensif, multi-métamérique, ou une dissémination hématogène mimant une varicelle diffuse (zona généralisé) avec défaillances viscérales mortelles imposant l'Aciclovir IV en urgence.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-17',
    courseId: 'crs-inf-21',
    questionNumber: 17,
    type: 'QCM',
    content: "Quel test virologique direct rapide et sensible permet de confirmer en laboratoire la présence du VZV dans le liquide d'une vésicule cutanée atypique ?",
    options: [
      "A. La réaction de fixation du complément seule",
      "B. La PCR ADN VZV sur écouvillonnage du plancher d'une vésicule fraîche",
      "C. La biopsie musculaire profonde",
      "D. L'électrophorèse de l'hémoglobine",
      "E. Le dosage de la troponine"
    ],
    correctAnswers: [1],
    explanation: "La PCR (Polymerase Chain Reaction) sur liquide de vésicule ou écouvillon cutané grattant le plancher de la lésion est la technique de référence de diagnostic direct du VZV, dotée d'une sensibilité et d'une spécificité proches de 100%.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-18',
    courseId: 'crs-inf-21',
    questionNumber: 18,
    type: 'QCM',
    content: "Quelle mesure d'hygiène et de soins locaux simples est primordiale dans la prise en charge quotidienne d'une varicelle non compliquée de l'enfant pour éviter les surinfections ?",
    options: [
      "A. Bains prolongés de 2 heures dans de l'eau javellisée",
      "B. Bains ou douches tièdes quotidiens avec un savon dermatologique doux, séchage soigneux par tamponnement sans frotter, ongles coupés ras et désinfection des mains",
      "C. Application de talc et de poudres occlusives épaisses sur toutes les vésicules",
      "D. Pommades grasses aux corticoïdes sur tout le corps",
      "E. Interdiction de laver la peau pendant 15 jours"
    ],
    correctAnswers: [1],
    explanation: "Les soins locaux reposent sur une hygiène rigoureuse : douche quotidienne au savon doux, séchage délicat par tamponnement, ongles coupés courts pour limiter les lésions de grattage. Les poudres, talcs et crèmes occlusives sont contre-indiqués car ils favorisent la macération et la surinfection bactérienne.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-19',
    courseId: 'crs-inf-21',
    questionNumber: 19,
    type: 'QCM',
    content: "Quelle complication rare mais gravissime associe une encéphalopathie aiguë avec œdème cérébral et une stéatose hépatique microvésiculaire chez l'enfant recevant de l'Aspirine lors d'une varicelle ou d'un syndrome grippal ?",
    options: [
      "A. Le syndrome hémolytique et urémique",
      "B. Le syndrome de Reye",
      "C. La maladie de Kawasaki",
      "D. Le purpura rhumatoïde de Henoch-Schönlein",
      "E. Le syndrome de Lyell"
    ],
    correctAnswers: [1],
    explanation: "Le syndrome de Reye est une encéphalopathie hépatique toxique aiguë pédiatrique rare mais mortelle dans 30-50% des cas, déclenchée par la prise d'acide acétylsalicylique (Aspirine) lors d'un épisode viral aigu (Varicelle, Grippe). L'Aspirine est donc rigoureusement proscrite chez l'enfant fébrile.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-20',
    courseId: 'crs-inf-21',
    questionNumber: 20,
    type: 'QCM',
    content: "Dans le cadre de la prévention de la transmission de la varicelle en milieu hospitalier, quelles précautions complémentaires d'isolement doivent être appliquées dès l'admission ?",
    options: [
      "A. Précautions standard simples sans masque",
      "B. Isolement combiné 'Air' (chambre individuelle à pression négative, masque FFP2) et 'Contact' jusqu'au stade de croûtes",
      "C. Isolement gouttelettes uniquement pendant 12 heures",
      "D. Aucun isolement requis",
      "E. Lavage simple des mains à l'eau sans solution hydroalcoolique"
    ],
    correctAnswers: [1],
    explanation: "Le VZV se transmettant à la fois par voie aérienne respiratoire (aérosols) et par contact direct avec les sécrétions des vésicules, un isolement combiné 'Air' (masque FFP2) et 'Contact' (gants, surblouse) est strictement nécessaire jusqu'à ce que toutes les lésions soient au stade de croûtes sèches.",
    difficulty: 'facile'
  },

  // 5 Progressive Clinical Cases for Lesson 21
  {
    id: 'q-inf-21-c1',
    courseId: 'crs-inf-21',
    questionNumber: 21,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - ÉTAPE 1 : Un garçonnet de 5 ans présente depuis 48 heures une éruption vésiculeuse fébrile très prurigineuse débutée au cuir chevelu et s'étendant au tronc et aux membres, avec coexistence de papules, vésicules translucides ombiliquées et croûtes. Ses parents lui ont administré du sirop d'Ibuprofène pour faire baisser la fièvre. Quelle recommandation immédiate capitale devez-vous formuler aux parents ?",
    options: [
      "A. Continuer l'Ibuprofène à double dose",
      "B. Arrêter IMMÉDIATEMENT l'Ibuprofène (contre-indication absolue des AINS dans la varicelle en raison du risque de fascite nécrosante streptococcique sévère) et privilégier uniquement le Paracétamol",
      "C. Donner de l'Aspirine à la place",
      "D. Mettre du talc sur toutes les vésicules",
      "E. Interdire toute douche pendant 10 jours"
    ],
    correctAnswers: [1],
    explanation: "L'administration d'AINS au cours de la varicelle multiplie par 5 à 10 le risque de dermohypodermite bactérienne nécrosante et de choc toxique. L'Ibuprofène doit être arrêté sur-le-champ et seul le Paracétamol doit être utilisé comme antipyrétique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-c2',
    courseId: 'crs-inf-21',
    questionNumber: 22,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - ÉTAPE 1 : Un homme de 32 ans, fumeur régulier (15 PA), sans antécédent de varicelle dans l'enfance, développe une varicelle profuse avec plus de 500 vésicules. À J3, il présente une toux sèche quinteuse, une polypnée à 28/min, des douleurs thoraciques et une cyanose des lèvres. SpO2 : 88% en air ambiant. La radiographie thoracique montre un syndrome interstitiel réticulo-micronodulaire bilatéral diffus. Quel est le diagnostic et le traitement d'urgence ?",
    options: [
      "A. Crise d'asthme ; bronchodilatateurs inhalés seuls",
      "B. Pneumopathie varicelleuse aiguë hypoxémiante ; hospitalisation en soins intensifs, oxygénothérapie et Aciclovir IV à forte dose (10-15 mg/kg toutes les 8 heures)",
      "C. Embolie pulmonaire massive ; thrombolyse immédiate",
      "D. Pneumocoque typique ; Amoxicilline orale",
      "E. Pneumocystose pulmonaire pure ; Cotrimoxazole"
    ],
    correctAnswers: [1],
    explanation: "La pneumopathie varicelleuse est la complication viscérale majeure de l'adulte fumeur. Elle engage le pronostic vital par hypoxémie réfractaire. Le traitement d'extrême urgence est l'Aciclovir par voie intraveineuse forte dose associé à l'oxygénothérapie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-c3',
    courseId: 'crs-inf-21',
    questionNumber: 23,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 - ÉTAPE 1 : Une femme de 68 ans consulte pour une sensation de brûlure intense et d'hyperesthésie cutanée sous le sein gauche évoluant depuis 3 jours, suivie de l'apparition de bouquets de vésicules reposant sur un fond érythémateux disposés en bande horizontale unilatérale le long du 5ème espace intercostal sans dépasser la ligne médiane. Le diagnostic de zona intercostal aigu est posé. Quel traitement antiviral per os prescrivez-vous pour réduire la douleur et le risque de névralgies séquellaires ?",
    options: [
      "A. Amoxicilline 3 g/jour pendant 7 jours",
      "B. Valaciclovir oral : 1 000 mg (1 g) 3 fois par jour pendant 7 jours",
      "C. Érythromycine 500 mg x 3/jour",
      "D. Corticothérapie par prednisone seule sans antiviral",
      "E. Application locale exclusive de crème à l'aciclovir"
    ],
    correctAnswers: [1],
    explanation: "Chez le sujet de plus de 50 ans, le traitement antiviral systémique par Valaciclovir per os (1 g x 3/j pendant 7 jours) est formellement indiqué dans les 72h pour réduire la durée de l'éruption, accélérer la guérison et diminuer le risque de névralgies post-zostériennes.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-c4',
    courseId: 'crs-inf-21',
    questionNumber: 24,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 - ÉTAPE 1 : Un homme de 70 ans consulte pour une éruption vésiculeuse du front gauche et de la paupière supérieure gauche. Vous notez la présence de plusieurs vésicules croûteuses sur la pointe et l'aile gauche du nez (signe de Hutchinson). L'œil gauche est rouge et douloureux avec photophobie. Quels sont les deux gestes indispensables immédiats ?",
    options: [
      "A. Prescrire des collyres corticoïdes purs sans avis spécialisé",
      "B. Débuter en urgence un traitement antiviral systémique (Valaciclovir 1 g x 3/j per os ou Aciclovir IV) ET demander une consultation ophtalmologique urgente à la lampe à fente pour éliminer une kératite zostérienne ou une uvéite",
      "C. Poser un pansement oculaire occlusif pendant 10 jours sans examen",
      "D. Rassurer le patient sur la nature bénigne sans aucun traitement",
      "E. Donner uniquement un collyre antiallergique"
    ],
    correctAnswers: [1],
    explanation: "Le signe de Hutchinson prouve l'atteinte du nerf nasociliaire et le risque majeur d'atteinte oculaire grave (kératite dendritique ou stromale, uvéite antérieure). L'examen ophtalmologique d'urgence et le traitement antiviral à dose maximale sont obligatoires.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-21-c5',
    courseId: 'crs-inf-21',
    questionNumber: 25,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 - ÉTAPE 1 : Une patiente de 76 ans guérie d'un zona intercostal il y a 4 mois continue de présenter des douleurs atroces et insomniantes à type de brûlures continues dans le même dermatome, avec sensation insupportable de piqûres au simple frôlement des vêtements (allodynie mécanique). Le paracétamol et le tramadol sont totalement inefficaces. Quelle thérapeutique antineuropathique de première intention instaurez-vous ?",
    options: [
      "A. AINS par voie intraveineuse",
      "B. Un gabapentinoïde (Prégabaline à posologie progressive ou Gabapentine) associé si besoin à des patchs de Lidocaïne 5%",
      "C. Injections d'antibiotiques à large spectre",
      "D. Antibiotiques locaux",
      "E. Séances d'ultrasons froids"
    ],
    correctAnswers: [1],
    explanation: "Il s'agit de douleurs post-zostériennes chroniques (NPZ). La Prégabaline ou la Gabapentine (modulateurs des canaux calciques voltage-dépendants) constituent la première ligne de traitement médical des douleurs neuropathiques, avec une augmentation très progressive des doses.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_21_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-21-mindmap',
    courseId: 'crs-inf-21',
    title: 'Mind Map : Varicelle & Zona (VZV - Primo-Infection, Complications & Thérapeutique)',
    type: 'mindmap',
    content: `
# MIND MAP : VIRUS VARICELLE-ZONA (VZV / HHV-3)
*Pathologie Cutanéo-Muqueuse & Complications Viscérales*

## 1. PRIMO-INFECTION : LA VARICELLE
- **Incubation** : 14 jours (10-21 jours). Contagiosité : J-2 avant éruption jusqu'au stade de croûtes.
- **Clinique** : Éruption polymorphe (macules, papules, vésicules en 'goutte de rosée', croûtes), poussées successives de 3-4 jours, atteinte du cuir chevelu et muqueuses.
- **RÈGLE PHARMACEUTIQUE D'OR** :
  - **CONTRE-INDICATION ABSOLUE DES AINS (Ibuprofène, Kétoprofène)** -> Risque de fascite nécrosante bactérienne !
  - **CONTRE-INDICATION DE L'ASPIRINE** -> Risque de Syndrome de Reye !
  - **Paracétamol uniquement**.

## 2. COMPLICATIONS DE LA VARICELLE
- **Pneumopathie varicelleuse de l'adulte (tabac / femme enceinte)** : Détresse respiratoire aiguë, infiltrat miliaire bilatéral -> **Aciclovir IV en urgence (10-15 mg/kg/8h)**.
- **Neurologique** : Ataxie cérébelleuse aiguë de l'enfant (bénigne), encéphalite (grave).
- **Varicelle fœto-maternelle** : Syndrome de varicelle congénitale (< 20 SA) ; varicelle néonatale gravissime (si varicelle maternelle entre J-5 et J+2 du terme).

## 3. RÉACTIVATION : LE ZONA
- **Physiopathologie** : Réactivation du VZV latent dans les ganglions sensitifs rachidiens ou crâniens.
- **Clinique** : Éruption vésiculeuse unilatérale, métamérique, suspendue, précédée de brûlures intenses.
- **Formes Topographiques Particulières** :
  - **Zona intercostal (50%)** : Le plus fréquent.
  - **Zona ophtalmique (V1)** : Signe de Hutchinson (aile/pointe du nez) = alerte d'atteinte oculaire (kératite, uvéite) -> Examen lampe à fente + antiviral d'urgence.
  - **Syndrome de Ramsay Hunt (ganglion géniculé VII bis)** : Conque de l'oreille + paralysie faciale périphérique + vertiges/hypoacousie.

## 4. TRAITEMENTS DU ZONA
- **Curatif précoce (< 72h)** : Valaciclovir oral 1 g x 3/j pendant 7 jours (> 50 ans ou zona ophtalmique). Aciclovir IV si immunodéprimé.
- **Névralgies Post-Zostériennes (NPZ > 3 mois)** : Prégabaline, Gabapentine, Amitriptyline, patch de Lidocaïne 5%.
`
  },
  {
    id: 'res-inf-21-astuces',
    courseId: 'crs-inf-21',
    title: 'Astuces Concours & Pièges Fréquents - Varicelle & Zona',
    type: 'astuce',
    content: `
# ASTUCES & PIÈGES AU CONCOURS (VARICELLE & ZONA)
*Par Dr. LAIDANI.M - Pédiatrie & Maladies Infectieuses*

### ⚠️ PIÈGE N°1 : L'Ibuprofène dans la varicelle
- Question favorite de tous les concours de Résidanat : « Quel médicament est formellement contre-indiqué dans la varicelle de l'enfant ? »
- **Réponse réflexe** : Les AINS (Ibuprofène) en raison du risque de fascite nécrosante fulminante à SGA.

### ⚠️ PIÈGE N°2 : Le signe de Hutchinson
- Ne pas confondre le signe de Hutchinson de la syphilis congénitale (dents en tournevis) et le **signe de Hutchinson du zona ophtalmique** (vésicules sur l'aile et la pointe du nez traduisant l'atteinte du nerf nasociliaire).

### ⚠️ PIÈGE N°3 : Le traitement de la varicelle simple de l'enfant
- L'Aciclovir n'est PAS indiqué dans la varicelle simple d'un enfant en bonne santé. Ne pas cocher d'antiviral systématique ! Le traitement est purement symptomatique.
`
  }
];
