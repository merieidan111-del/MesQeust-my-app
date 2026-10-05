import { Question, CourseResource } from '../../types/medical';

// Lesson 1: DHBNN & DHBN (Dermo-Hypodermites Bactériennes)
export const INFECTIO_LESSON_1_QUESTIONS: Question[] = [
  {
    id: 'q-inf-1-01',
    courseId: 'crs-inf-1',
    questionNumber: 1,
    type: 'QCM',
    content: "Dans les dermohypodermites bactériennes non nécrosantes (DHBNN) typiques de l’adulte, quel est le germe le plus fréquemment en cause ?",
    options: [
      "A. Staphylococcus aureus (sensible à la méticilline)",
      "B. Streptococcus agalactiae (streptocoque B)",
      "C. Streptococcus pyogenes (streptocoque β-hémolytique du groupe A)",
      "D. Escherichia coli",
      "E. Pseudomonas aeruginosa"
    ],
    correctAnswers: [2],
    explanation: "L’érysipèle, forme principale de DHBNN, est causé dans 85% des cas par Streptococcus pyogenes (SGA). S. aureus est plus rare (sauf contexte de varicelle ou post-soins). Les autres germes ne sont pas typiques des DHBNN pures.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-02',
    courseId: 'crs-inf-1',
    questionNumber: 2,
    type: 'QCM',
    content: "Un patient de 60 ans, obèse, diabétique, présente une « grosse jambe rouge fébrile » unilatérale, douloureuse, avec adénopathie inguinale. Pas de crépitation, ni zone grisâtre. Quel diagnostic est le plus probable ?",
    options: [
      "A. Fascite nécrosante streptococcique",
      "B. Thrombose veineuse profonde surinfectée",
      "C. Érysipèle du membre inférieur (DHBNN)",
      "D. Gangrène de Fournier",
      "E. Staphylococcie maligne de la face"
    ],
    correctAnswers: [2],
    explanation: "Le tableau « grosse jambe rouge aiguë fébrile » unilatérale avec adénopathie et absence de nécrose/crépitation est l’érysipèle typique (DHBNN). La fascite nécrosante donnerait une douleur disproportionnée, une extension rapide, des signes de sepsis sévère.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-03',
    courseId: 'crs-inf-1',
    questionNumber: 3,
    type: 'QCM',
    content: "Parmi les propositions suivantes, quel est le principal facteur local favorisant la survenue d’un érysipèle du membre inférieur ?",
    options: [
      "A. Varices non compliquées",
      "B. Intertrigo interorteil (port d’entrée cutanée)",
      "C. HTA maligne",
      "D. Hypercholestérolémie familiale",
      "E. Antécédent de zona ophtalmique"
    ],
    correctAnswers: [1],
    explanation: "La porte d’entrée cutanée est essentielle : intertrigo, plaie chronique, ulcère, piqûre. L’intertrigo interorteil (ou interfessier) est très fréquent. L’œdème lymphatique favorise aussi, mais le facteur déclenchant est souvent une brèche cutanée.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-04',
    courseId: 'crs-inf-1',
    questionNumber: 4,
    type: 'QCM',
    content: "Un patient hospitalisé pour érysipèle non nécrosant, sans signe de gravité, est mis sous antibiothérapie. Quelle est la durée recommandée (recommandations actuelles) ?",
    options: [
      "A. 3 jours",
      "B. 7 jours",
      "C. 14 jours",
      "D. 21 jours",
      "E. 5 jours puis réévaluation systématique"
    ],
    correctAnswers: [1],
    explanation: "La durée standard pour une DHBNN non compliquée est de 7 jours d’antibiothérapie (amoxicilline ou alternative). La régression cutanée peut être plus lente, mais ne justifie pas une prolongation systématique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-05',
    courseId: 'crs-inf-1',
    questionNumber: 5,
    type: 'QCM',
    content: "Dans la prise en charge d’une dermohypodermite bactérienne non nécrosante (érysipèle), quel traitement est formellement contre-indiqué ?",
    options: [
      "A. Paracétamol",
      "B. Héparine de bas poids moléculaire prophylactique",
      "C. Amoxicilline orale",
      "D. Anti-inflammatoires non stéroïdiens (AINS) et corticoïdes",
      "E. Compression veineuse élastique après guérison"
    ],
    correctAnswers: [3],
    explanation: "Les AINS et corticoïdes aggravent l’infection, favorisent la nécrose et masquent les signes de gravité. Ils sont contre-indiqués formellement devant toute suspicion de dermohypodermite, en particulier avant élimination d’une forme nécrosante.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-06',
    courseId: 'crs-inf-1',
    questionNumber: 6,
    type: 'QCM',
    content: "Un patient présente un placard érythémateux unilatéral de la joue, fébrile, avec bourrelet périphérique. Quel diagnostic différentiel grave faut-il éliminer en urgence ?",
    options: [
      "A. Herpès cutané",
      "B. Staphylococcie maligne de la face",
      "C. Eczéma de contact allergique",
      "D. Acné rosacée fulminans",
      "E. Carcinome basocellulaire inflammatoire"
    ],
    correctAnswers: [1],
    explanation: "La staphylococcie maligne de la face est une forme nécrosante souvent due à S. aureus, à ne pas confondre avec l’érysipèle facial. Elle associe un œdème marqué, des signes de choc et nécessite une prise en charge chirurgicale.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-1-07',
    courseId: 'crs-inf-1',
    questionNumber: 7,
    type: 'QCM',
    content: "Quel signe clinique précoce doit faire évoquer une fascite nécrosante plutôt qu’un simple érysipèle ?",
    options: [
      "A. Fièvre à 38,5°C et frissons",
      "B. Douleur intense, disproportionnée par rapport aux signes cutanés, non calmée par antalgiques usuels",
      "C. Décollement bulleux clair",
      "D. Adénopathie satellite douloureuse",
      "E. Érythème bien limité"
    ],
    correctAnswers: [1],
    explanation: "La douleur sévère, spontanée et à la palpation, souvent « hors de proportion » avec l’aspect cutané, est un signal d’alarme majeur de nécrose des tissus profonds. Les bulles claires peuvent exister dans l’érysipèle, mais les douleurs intenses orientent vers la nécrose.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-1-08',
    courseId: 'crs-inf-1',
    questionNumber: 8,
    type: 'QCM',
    content: "Une patiente avec lymphœdème du bras après curage axillaire pour cancer du sein consulte pour un placard rouge chaud. Quel diagnostic est le plus fréquent ?",
    options: [
      "A. Érysipèle du membre supérieur",
      "B. Fascite nécrosante post-chirurgicale",
      "C. Lymphangite carcinomateuse",
      "D. Syndrome de Stewart-Treves",
      "E. Thrombophlébite superficielle septique"
    ],
    correctAnswers: [0],
    explanation: "Le lymphœdème post-curage est un terrain favorisant l’érysipèle du membre supérieur. La localisation au bras est typique, souvent streptococcique. La fascite nécrosante est rare mais possible ; le contexte oriente d’abord vers DHBNN.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-1-09',
    courseId: 'crs-inf-1',
    questionNumber: 9,
    type: 'QCM',
    content: "Quelle mesure préventive est recommandée en cas de récidives fréquentes d’érysipèle sur insuffisance lymphatique chronique ?",
    options: [
      "A. Vaccination anti-pneumococcique annuelle",
      "B. Antibioprophylaxie par benzathine pénicilline (ou phénoxyméthylpénicilline)",
      "C. Corticothérapie au long cours",
      "D. Antibiothérapie à chaque épisode grippal",
      "E. Cures d’AINS systématiques en hiver"
    ],
    correctAnswers: [1],
    explanation: "L’antibioprophylaxie par pénicilline V ou benzathine pénicilline G toutes les 2 à 4 semaines réduit le risque de récidive chez les patients ayant des épisodes répétés (lymphœdème, insuffisance veino-lymphatique).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-10',
    courseId: 'crs-inf-1',
    questionNumber: 10,
    type: 'QCM',
    content: "Un patient mordu par un chat il y a 6 heures présente une plaie inflammatoire, une dermohypodermite et une adénopathie. Quel antibiotique probabiliste associe-t-on généralement ?",
    options: [
      "A. Amoxicilline seule",
      "B. Amoxicilline-acide clavulanique",
      "C. Ciprofloxacine",
      "D. Clindamycine seule",
      "E. Céfazoline"
    ],
    correctAnswers: [1],
    explanation: "Morsure de chat : Pasteurella multocida fréquente, mais flore mixte. L’amoxicilline-acide clavulanique couvre Pasteurella, streptocoques, staphylocoques et anaérobies. Alternative possible doxycycline + métronidazole.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-11',
    courseId: 'crs-inf-1',
    questionNumber: 11,
    type: 'QCM',
    content: "Dans une fascite nécrosante confirmée, quelle est la priorité absolue ?",
    options: [
      "A. IRM en urgence pour cartographier l’extension",
      "B. Débridement chirurgical large et répété des tissus nécrosés",
      "C. Antibiothérapie orale pendant 48h avant décision",
      "D. Élévation du membre et AINS puissants",
      "E. Ponction biopsie cutanée systématique"
    ],
    correctAnswers: [1],
    explanation: "L’urgence est médico-chirurgicale : la chirurgie de débridement large doit être réalisée sans délai, l’antibiothérapie IV est adjuvante. L’imagerie ne doit pas retarder la prise en charge.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-12',
    courseId: 'crs-inf-1',
    questionNumber: 12,
    type: 'QCM',
    content: "La gangrène de Fournier est une forme de DHBN nécrosante touchant :",
    options: [
      "A. La région cervicale profonde",
      "B. Le périnée, organes génitaux externes et région anale",
      "C. Le membre supérieur post-poney",
      "D. Le cuir chevelu",
      "E. La plante des pieds"
    ],
    correctAnswers: [1],
    explanation: "La gangrène de Fournier est une fasciite nécrosante périnéale, souvent polymicrobienne, avec extension rapide aux bourses, pénis, périnée et paroi abdominale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-13',
    courseId: 'crs-inf-1',
    questionNumber: 13,
    type: 'QCM',
    content: "Devant un érysipèle typique sans signe de choc, quel bilan est généralement suffisant ?",
    options: [
      "A. Hémocultures systématiques, prélèvement biopsique",
      "B. Numération formule sanguine et CRP ; pas d’examen complémentaire indispensable",
      "C. Scanner avec injection",
      "D. Ponction lombaire",
      "E. Dosage des anticorps antistreptolysine O"
    ],
    correctAnswers: [1],
    explanation: "Le diagnostic de DHBNN est clinique. On peut doser CRP et NFS mais hémocultures rarement positives (<10%). Les examens invasifs sont inutiles en l’absence de signe de gravité.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-14',
    courseId: 'crs-inf-1',
    questionNumber: 14,
    type: 'QCM',
    content: "Quel élément est associé à une surmortalité dans les fascites nécrosantes ?",
    options: [
      "A. Débridement chirurgical précoce",
      "B. Prise d’AINS avant le diagnostic",
      "C. Infection monomicrobienne à Streptococcus pyogenes uniquement",
      "D. Localisation au membre inférieur",
      "E. Administration de clindamycine en première intention"
    ],
    correctAnswers: [1],
    explanation: "La prise d’AINS avant ou au début de l’infection est un facteur aggravant, associé à un risque accru de nécrose et de choc. La chirurgie précoce améliore le pronostic.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-15',
    courseId: 'crs-inf-1',
    questionNumber: 15,
    type: 'QCM',
    content: "Quelle association probabiliste est adaptée à une dermohypodermite après morsure humaine ?",
    options: [
      "A. Amoxicilline-acide clavulanique",
      "B. Ceftriaxone seule",
      "C. Métronidazole seul",
      "D. Vancomycine + gentamicine",
      "E. Azithromycine"
    ],
    correctAnswers: [0],
    explanation: "Flore mixte aérobie-anaérobie, incluant Eikenella corrodens, anaérobies, streptocoques. L’amoxicilline-acide clavulanique couvre bien ce spectre.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-16',
    courseId: 'crs-inf-1',
    questionNumber: 16,
    type: 'QCM',
    content: "Un patient avec dermohypodermite présente une zone grisâtre, hypoesthésique, sans crépitation. Ceci évoque :",
    options: [
      "A. Érysipèle bulleux banal",
      "B. Nécrose tissulaire (fascite nécrosante)",
      "C. Réaction allergique aux antibiotiques",
      "D. Eczéma nummulaire",
      "E. Porphyrie cutanée"
    ],
    correctAnswers: [1],
    explanation: "L’apparition de zones grisâtres, d’hypoesthésie (destruction nerveuse) et l’absence de crépitation n’excluent pas la nécrose. Ce sont des signes de nécrose avancée.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-17',
    courseId: 'crs-inf-1',
    questionNumber: 17,
    type: 'QCM',
    content: "Chez l’enfant, une dermohypodermite compliquant une varicelle est souvent due à :",
    options: [
      "A. Streptococcus pneumoniae",
      "B. Streptococcus pyogenes ou Staphylococcus aureus",
      "C. Haemophilus influenzae",
      "D. Neisseria meningitidis",
      "E. Enterococcus faecalis"
    ],
    correctAnswers: [1],
    explanation: "La varicelle est une porte d’entrée classique pour les infections cutanées invasives à SGA ou S. aureus (y compris toxine PVL).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-18',
    courseId: 'crs-inf-1',
    questionNumber: 18,
    type: 'QCM',
    content: "Quelle est la principale complication de l’érysipèle non nécrosant ?",
    options: [
      "A. Amputation",
      "B. Récidives (20-30%)",
      "C. Endocardite",
      "D. Glomérulonéphrite post-streptococcique",
      "E. Arthrite septique métastatique"
    ],
    correctAnswers: [1],
    explanation: "La récidive est la complication la plus fréquente (insuffisance lymphatique, persistance porte d’entrée). L’endocardite et la glomérulonéphrite sont rares.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-19',
    courseId: 'crs-inf-1',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans la prise en charge d’une suspicion de fascite nécrosante, l’imagerie (scanner/IRM) :",
    options: [
      "A. Est obligatoire avant tout geste chirurgical",
      "B. Ne doit pas retarder la chirurgie ; son intérêt est limité en urgence vitale",
      "C. Permet d’éviter le débridement chez 80%",
      "D. L’échographie doppler est l’examen clé",
      "E. L’IRM est indispensable si patient instable"
    ],
    correctAnswers: [1],
    explanation: "La chirurgie ne doit pas être retardée par l’imagerie. Le diagnostic est clinique. L’imagerie peut aider en cas de doute, mais jamais au détriment du geste de débridement.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-1-20',
    courseId: 'crs-inf-1',
    questionNumber: 20,
    type: 'QCM',
    content: "Quel antibiotique probabiliste est recommandé en première intention dans la gangrène de Fournier ?",
    options: [
      "A. Amoxicilline-clavulanate + gentamicine",
      "B. Pipéracilline-tazobactam + gentamicine",
      "C. Ciprofloxacine + métronidazole",
      "D. Ceftriaxone seule",
      "E. Linézolide"
    ],
    correctAnswers: [1],
    explanation: "Le traitement probabiliste des infections nécrosantes périnéales repose sur une large couverture : pipéracilline-tazobactam + aminoside (gentamicine) pour couvrir entérobactéries, anaérobies et streptocoques.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-1-21',
    courseId: 'crs-inf-1',
    questionNumber: 21,
    type: 'QCM',
    content: "L’érysipèle du visage touche environ quel pourcentage des cas ?",
    options: [
      "A. 25-30%",
      "B. 5-10%",
      "C. 40%",
      "D. 15%",
      "E. 1%"
    ],
    correctAnswers: [1],
    explanation: "Selon les données, l’érysipèle de la face représente 5 à 10% des DHBNN, souvent lié à une porte d’entrée ORL ou dentaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-22',
    courseId: 'crs-inf-1',
    questionNumber: 22,
    type: 'QCM',
    content: "Le « rouget du porc » ou érysipléatoïde est dû à :",
    options: [
      "A. Streptococcus pyogenes",
      "B. Erysipelothrix rhusiopathiae",
      "C. Bacillus anthracis",
      "D. Francisella tularensis",
      "E. Yersinia pestis"
    ],
    correctAnswers: [1],
    explanation: "Le rouget du porc est une zoonose professionnelle (bouchers, pêcheurs) due à Erysipelothrix rhusiopathiae. Ne pas confondre avec l’érysipèle streptococcique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-23',
    courseId: 'crs-inf-1',
    questionNumber: 23,
    type: 'QCM',
    content: "Une patiente après curage axillaire pour cancer du sein développe un érysipèle. Quelle est la mesure clé pour éviter les récidives ?",
    options: [
      "A. Antibiotiques à vie",
      "B. Traitement du lymphœdème par contention élastique et drainage lymphatique",
      "C. Exérèse du membre",
      "D. Vaccin anti-streptocoque",
      "E. Corticothérapie locale"
    ],
    correctAnswers: [1],
    explanation: "La prise en charge du lymphœdème (compression, soins) réduit les facteurs de stase et les récidives. L’antibioprophylaxie est réservée aux récidives multiples malgré les mesures.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-24',
    courseId: 'crs-inf-1',
    questionNumber: 24,
    type: 'QCM',
    content: "Dans les formes nécrosantes à S. pyogenes, l’exotoxine superantigénique peut provoquer :",
    options: [
      "A. Un syndrome de choc toxique streptococcique (choc, défaillance multiviscérale)",
      "B. Une polyarthrite rhumatoïde",
      "C. Une thrombocytose extrême",
      "D. Une hépatite ictérique bénigne",
      "E. Une néphrite interstitielle"
    ],
    correctAnswers: [0],
    explanation: "Les souches de SGA productrices d’exotoxines superantigéniques déclenchent un syndrome de choc toxique streptococcique avec hypotension, insuffisance rénale, détresse respiratoire.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-1-25',
    courseId: 'crs-inf-1',
    questionNumber: 25,
    type: 'QCM',
    content: "Pour une DHBNN hospitalisée avec voie IV initiale, le relais per os est possible après amélioration. Durée totale recommandée ?",
    options: [
      "A. 3-5 jours",
      "B. 7 jours (au total)",
      "C. 14 jours",
      "D. 10 jours minimum",
      "E. 21 jours"
    ],
    correctAnswers: [1],
    explanation: "La durée totale de traitement dans les DHBNN non nécrosantes (y compris formes sévères) est de 7 jours ; prolonger n’est pas nécessaire.",
    difficulty: 'facile'
  },

  // 5 Cas cliniques DHBNN
  {
    id: 'q-inf-1-cc1',
    courseId: 'crs-inf-1',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Mme F., 72 ans, diabète type 2, obésité, insuffisance veineuse chronique. Consulte pour 3ème épisode en 18 mois de jambe droite rouge, œdémateuse, douloureuse, fièvre 39°C. Pas de crépitation.\n\nQuel traitement préventif des récidives proposez-vous après guérison de l’épisode actuel ?",
    options: [
      "A. Colchicine au long cours",
      "B. Antibioprophylaxie par pénicilline V orale ou benzathine pénicilline IM toutes les 2-4 semaines",
      "C. Rivaroxaban 20 mg/jour",
      "D. Cure de prednisone 1 mg/kg pendant 6 mois",
      "E. Amoxicilline 3g/jour à vie"
    ],
    correctAnswers: [1],
    explanation: "Les récidives fréquentes d’érysipèle sur insuffisance veino-lymphatique justifient une antibioprophylaxie par pénicilline. Les AINS/corticoïdes sont contre-indiqués. Les anticoagulants ne préviennent pas l’infection.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-cc2',
    courseId: 'crs-inf-1',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Un jeune homme de 28 ans est mordu par son chien à la main. Après 12h, apparition d’un œdème inflammatoire extensif, bulles hémorragiques, douleur intense et fièvre 40°C. TA 90/60 mmHg.\n\nQuelle attitude initiale est impérative ?",
    options: [
      "A. Mise sous amoxicilline PO et surveillance ambulatoire",
      "B. Débridement chirurgical en urgence + biopsie + antibiothérapie IV large (amoxicilline-clavulanique, clindamycine)",
      "C. IRM des parties molles avant toute décision",
      "D. Antibiothérapie par ceftriaxone seule 14 jours",
      "E. Hospitalisation en médecine interne pour AINS et réhydratation"
    ],
    correctAnswers: [1],
    explanation: "Le tableau (douleur intense, bulles hémorragiques, choc) est évocateur d’une fascite nécrosante (Capnocytophaga, streptocoques). La chirurgie de débridement ne doit pas être retardée. L’antibiothérapie probabiliste couvre les germes anaérobies et aérobies.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-1-cc3',
    courseId: 'crs-inf-1',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Homme de 55 ans, diabétique, consulte pour douleur périnéale, œdème scrotal, érythème s’étendant aux cuisses, fièvre 39,5°C et confusion. Crépitation palpable.\n\nQuel est le diagnostic le plus probable ?",
    options: [
      "A. Érysipèle scrotal banal",
      "B. Fournier gangrène (fascite nécrosante périnéale)",
      "C. Orchite tuberculeuse",
      "D. Hernie étranglée infectée",
      "E. Pyodermite streptococcique superficielle"
    ],
    correctAnswers: [1],
    explanation: "La gangrène de Fournier associe nécrose des parties génitales, crépitation, sepsis sévère. Urgence chirurgicale. L’antibiothérapie doit couvrir entérobactéries, anaérobies, streptocoques (pipéracilline-tazobactam + aminoside).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-1-cc4',
    courseId: 'crs-inf-1',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Un patient de 45 ans, sans antécédent, présente une plaque rouge douloureuse de la joue gauche avec œdème palpébral, fièvre. Le placard est bien limité, sans trouble de sensibilité.\n\nQuel élément oriente plutôt vers un érysipèle streptococcique qu’une staphylococcie maligne ?",
    options: [
      "A. Présence de bulles claires et adénopathie sous-maxillaire",
      "B. Nécrose extensive et hypoesthésie",
      "C. Présence de crépitation",
      "D. Trismus et dysphagie",
      "E. Choc septique d’emblée"
    ],
    correctAnswers: [0],
    explanation: "L’érysipèle facial classique donne un bourrelet périphérique, une adénopathie, des bulles claires possibles mais pas de nécrose ni d’hypoesthésie. La staphylococcie maligne est plus agressive avec nécrose et signes généraux sévères.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-1-cc5',
    courseId: 'crs-inf-1',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Une patiente a un érysipèle de jambe, le médecin de ville prescrit de l’ibuprofène et de la prednisone. 48h plus tard, elle revient avec aggravation : extension des lésions, bulles violacées, douleur atroce.\n\nQue s’est-il passé ?",
    options: [
      "A. Réaction d’hypersensibilité aux AINS",
      "B. Aggravation iatrogène : les AINS/corticoïdes ont favorisé la progression vers une forme nécrosante",
      "C. Évolution naturelle indépendante du traitement",
      "D. Surinfection fongique surajoutée",
      "E. Embolie septique d’origine dentaire"
    ],
    correctAnswers: [1],
    explanation: "Les AINS et corticoïdes sont contre-indiqués formellement dans les dermohypodermites, car ils masquent les signes de gravité, altèrent la réponse immunitaire et favorisent la nécrose. Ceci illustre un accident iatrogène classique.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_1_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-1-mindmap',
    courseId: 'crs-inf-1',
    title: 'Carte mentale : DHBNN (Érysipèle) vs DHBN nécrosante',
    type: 'mindmap',
    content: `# Carte Mentale : DHBNN & DHBN

## 1. DHBNN (Érysipèle)
- **Germe** : Streptococcus pyogenes (SGA) +++ (>85%)
- **Clinique** : Grosse jambe rouge aiguë unilatérale, bourrelet périphérique, fièvre, adénopathie, PAS de nécrose ni crépitation
- **Traitement** : Amoxicilline 7 jours
- **Contre-indication absolue** : AINS et corticoïdes
- **Complication principale** : Récidive (20-30%) -> prévention par contention et antibioprophylaxie (pénicilline)

## 2. DHBN Nécrosante (Fasciite nécrosante)
- **Gravité** : URGENCE médico-chirurgicale vitale
- **Clinique** : Douleur intense disproportionnée, hypoesthésie, bulles hémorragiques, crépitation, sepsis/choc
- **Localisations** : Membre inférieur, région cervico-faciale, périnée (Gangrène de Fournier)
- **Traitement** : Débridement chirurgical large immédiat + antibiothérapie large spectre (Pipéracilline-tazobactam + Clindamycine ou Aminoside)`
  },
  {
    id: 'res-inf-1-astuces',
    courseId: 'crs-inf-1',
    title: 'Mnémotechniques & Perles DHBNN / DHBN',
    type: 'astuce',
    content: `### Perles & Mnémotechniques (Dr. LAIDANI.M)

1. **« ÉRYSIPÈLE » (signes évocateurs) :**
   - **É**rythème œdémateux
   - **R**ouge vif, chaud
   - **Y** (pourquoi?) porte d’entrée ++ (intertrigo)
   - **S**tride douloureux + adénopathie
   - **I**nterdit AINS/corticoïdes
   - **P**énicilline / Amoxicilline = traitement roi
   - **E**xamen clinique suffit au diagnostic

2. **« NÉCROSE » (Drapeaux rouges de la Fasciite) :**
   - **N** = Nécrose cutanée / hypoesthésie
   - **É** = Évolution rapide (entourer la zone au feutre)
   - **C** = Crépitation (anaérobies)
   - **R** = Résistance aux antalgiques usuels (douleur atroce disproportionnée)
   - **O** = Œdème dépassant largement l’érythème
   - **S** = Sepsis sévère / choc
   - **E** = Excision chirurgicale immédiate sans attendre l'imagerie !`
  }
];

// Lesson 2: Fièvre Boutonneuse Méditerranéenne (FBM)
export const INFECTIO_LESSON_2_QUESTIONS: Question[] = [
  {
    id: 'q-inf-2-01',
    courseId: 'crs-inf-2',
    questionNumber: 1,
    type: 'QCM',
    content: "Concernant le vecteur principal de Rickettsia conorii en Algérie, quelle proposition est exacte ?",
    options: [
      "A. Ixodes ricinus, tique des forêts, assure également la transmission transovarienne",
      "B. Rhipicephalus sanguineus est à la fois réservoir et vecteur grâce à la transmission transovarienne",
      "C. La tique du chien ne peut pas transmettre la bactérie avant 48 heures de repas sanguin",
      "D. La transmission nécessite obligatoirement un réservoir canin sauvage, sans transmission verticale chez le vecteur",
      "E. La femelle tique ne transmet pas l’infection à sa descendance, seul le chien est réservoir"
    ],
    correctAnswers: [1],
    explanation: "Rhipicephalus sanguineus (tique brune du chien) est à la fois vecteur et réservoir grâce à la transmission transovarienne (femelle -> œufs). Cette particularité entretient l’endémie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-02',
    courseId: 'crs-inf-2',
    questionNumber: 2,
    type: 'QCM',
    content: "Un patient de 68 ans, diabétique, tabagique, présente une fièvre à 40°C depuis 6 jours, une éruption maculopapuleuse des membres avec quelques lésions purpuriques, une hypotonie et une confusion. Quel est le pronostic de cette forme ?",
    options: [
      "A. Forme bénigne, guérison spontanée en 10 jours",
      "B. Forme maligne (FBM sévère) avec mortalité pouvant atteindre 30 % dans ce sous-groupe",
      "C. La mortalité globale de la FBM est de 15 %, surtout chez les femmes enceintes",
      "D. Les facteurs de risque n’influencent pas la sévérité",
      "E. Le traitement par doxycycline est contre-indiqué en raison de l’âge"
    ],
    correctAnswers: [1],
    explanation: "La FBM maligne (6-7% des cas) associe défaillance polyviscérale, purpura, coma, et survient sur terrain à risque (âge>60, diabète, alcool, G6PD). Mortalité environ 1/3 dans ce groupe (~2% de toutes les FBM). La doxycycline reste le gold standard.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-2-03',
    courseId: 'crs-inf-2',
    questionNumber: 3,
    type: 'QCM',
    content: "Quelle est la durée minimale de repas de la tique pour transmettre efficacement Rickettsia conorii ?",
    options: [
      "A. Moins de 5 minutes, la bactérie est présente dans la salive dès la piqûre",
      "B. Environ 2 heures suffisent pour une inoculation certaine",
      "C. Plus de 20 heures de fixation prolongée",
      "D. 72 heures sont indispensables en raison de la réactivation bactérienne",
      "E. Le délai est variable selon la charge bactérienne, mais souvent 1 heure"
    ],
    correctAnswers: [2],
    explanation: "La transmission nécessite une piqûre indolore prolongée (>20h) car Rickettsia conorii se multiplie dans les cellules intestinales de la tique puis migre vers les glandes salivaires.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-04',
    courseId: 'crs-inf-2',
    questionNumber: 4,
    type: 'QCM',
    content: "Devant une suspicion de FBM chez une femme enceinte au premier trimestre, quel antibiotique est recommandé en première intention ?",
    options: [
      "A. Doxycycline par voie orale, 200 mg/j pendant 7 jours",
      "B. Josamycine (3 g/j chez l’adulte) pendant 10 jours",
      "C. Ciprofloxacine IV",
      "D. Chloramphénicol uniquement",
      "E. Aucun traitement avant le deuxième trimestre"
    ],
    correctAnswers: [1],
    explanation: "La doxycycline est contre-indiquée chez la femme enceinte. La josamycine (macrolide) est l’alternative recommandée (3g/j adulte, 50 mg/kg/j enfant ≤7 ans).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-05',
    courseId: 'crs-inf-2',
    questionNumber: 5,
    type: 'QCM',
    content: "Quel est le mécanisme physiopathologique principal des lésions cutanées (tache noire et éruption) dans la FBM ?",
    options: [
      "A. Nécrose épidermique directe par exotoxine bactérienne",
      "B. Vascularite leucocytoclasique avec dépôts de complexes immuns et prolifération endothéliale",
      "C. Endothélite rickettsienne -> ischémie dermique puis vascularite systémique",
      "D. Réaction d’hypersensibilité retardée vis-à-vis des antigènes de la tique",
      "E. Activation des polynucléaires neutrophiles avec formation de microabcès"
    ],
    correctAnswers: [2],
    explanation: "R. conorii a un tropisme pour les cellules endothéliales : elle y prolifère, provoque une endothélite, une ischémie (escarre), puis une vascularite secondaire aux dépôts immuns.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-2-06',
    courseId: 'crs-inf-2',
    questionNumber: 6,
    type: 'QCM',
    content: "Quel élément biologique évocateur est fréquemment retrouvé en phase précoce (3-5 jours) de la FBM ?",
    options: [
      "A. Hyperleucocytose à polynucléaires neutrophiles d’emblée",
      "B. Lymphocytose majeure > 8000/mm³",
      "C. Leucopénie, thrombopénie puis hyperleucocytose secondaire",
      "D. Anémie hémolytique avec haptoglobine basse",
      "E. CRP constamment normale"
    ],
    correctAnswers: [2],
    explanation: "La biologie initiale montre une leucopénie, une thrombopénie, puis secondairement une hyperleucocytose à PNN, avec VS accélérée et cytolyse hépatique modérée (ASAT/ALAT élevées).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-2-07',
    courseId: 'crs-inf-2',
    questionNumber: 7,
    type: 'QCM',
    content: "La sérologie de référence pour le diagnostic de FBM est :",
    options: [
      "A. Test de Weil-Felix (Proteus OX19)",
      "B. Immunofluorescence indirecte (IFI)",
      "C. ELISA IgM spécifique sans nécessité de sérum de contrôle",
      "D. Hémoculture sur milieu acellulaire",
      "E. Western blot pour détection d’antigène circulant"
    ],
    correctAnswers: [1],
    explanation: "L’IFI est la méthode de référence (sensibilité et spécificité élevées). Weil-Felix est obsolète. La PCR sur biopsie d’escarre est également très utile en phase précoce.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-08',
    courseId: 'crs-inf-2',
    questionNumber: 8,
    type: 'QCM',
    content: "Un enfant de 30 kg présente une FBM non compliquée. Quelle est la posologie recommandée de doxycycline selon le cours ?",
    options: [
      "A. 5 mg/kg en dose unique",
      "B. 100 mg/j pendant 10 jours",
      "C. 2,5 mg/kg deux fois par jour pendant 7 jours",
      "D. Suspension de doxycycline 200 mg/j en 2 prises",
      "E. Contre-indication formelle avant 12 ans"
    ],
    correctAnswers: [0],
    explanation: "Chez l’enfant <45 kg, la doxycycline est utilisée en dose unique de 5 mg/kg (sans dépasser 200 mg). Ce schéma court est très efficace et sans risque d'altération dentaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-09',
    courseId: 'crs-inf-2',
    questionNumber: 9,
    type: 'QCM',
    content: "Quelle manifestation extra-cutanée est la plus fréquente au cours de la FBM ?",
    options: [
      "A. Hépatite cytolytique sévère (ictère franc)",
      "B. Méningite purulente",
      "C. Asthénie extrême, anorexie et myalgies",
      "D. Insuffisance rénale aiguë anurique",
      "E. Pancréatite aiguë nécrosante"
    ],
    correctAnswers: [2],
    explanation: "La phase d’état associe une asthénie sévère, anorexie, amaigrissement, myalgies et céphalées intenses.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-10',
    courseId: 'crs-inf-2',
    questionNumber: 10,
    type: 'QCM',
    content: "La tache noire (escarre de Pieri) :",
    options: [
      "A. Est toujours douloureuse et prurigineuse",
      "B. Est retrouvée dans 100% des cas de FBM",
      "C. Peut siéger au niveau du cuir chevelu, de l’aine ou des plis interfessiers",
      "D. N’est jamais associée à une adénopathie satellite",
      "E. Est une contre-indication à la biopsie cutanée"
    ],
    correctAnswers: [2],
    explanation: "L’escarre est indolore, présente dans 50 à 75% des cas. Sièges électifs : cuir chevelu, aine, pli interfessier. Elle s'accompagne souvent d'une adénopathie satellite indolore.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-11',
    courseId: 'crs-inf-2',
    questionNumber: 11,
    type: 'QCM',
    content: "Saisonnalité typique de la FBM en Algérie :",
    options: [
      "A. Hiver (décembre-février) en raison de l’humidité",
      "B. Printemps et automne, pics en avril et novembre",
      "C. Été, surtout juillet-août, activité maximale des tiques de mai à octobre",
      "D. Toute l’année sans variation saisonnière",
      "E. Saison des pluies uniquement"
    ],
    correctAnswers: [2],
    explanation: "La FBM est estivale : les tiques sont actives entre mai et octobre, avec un pic des cas humains en juillet et août.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-12',
    courseId: 'crs-inf-2',
    questionNumber: 12,
    type: 'QCM',
    content: "Le délai d’incubation moyen de la FBM est de :",
    options: [
      "A. 1 à 2 jours",
      "B. 6 jours (extrêmes 3 à 16 jours)",
      "C. 21 jours",
      "D. 48 heures après la piqûre",
      "E. 10 jours exactement"
    ],
    correctAnswers: [1],
    explanation: "Incubation : 3 à 16 jours, moyenne de 6 jours. La fièvre débute ensuite brutalement.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-13',
    courseId: 'crs-inf-2',
    questionNumber: 13,
    type: 'QCM',
    content: "Quelle complication ophtalmique a été décrite dans les formes sévères de FBM ?",
    options: [
      "A. Uvéite antérieure isolée",
      "B. Rétinites et choriorétinites",
      "C. Kératite herpétique",
      "D. Glaucome aigu par thrombose veineuse rétinienne",
      "E. Cataracte secondaire"
    ],
    correctAnswers: [1],
    explanation: "L’atteinte ophtalmique est rare mais grave : rétinites et choriorétinites nécessitant un avis ophtalmologique spécialisé.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-2-14',
    courseId: 'crs-inf-2',
    questionNumber: 14,
    type: 'QCM',
    content: "La FBM peut être confondue avec une méningite lymphocytaire. Dans ce contexte, quel élément clinique oriente fortement vers une rickettsiose ?",
    options: [
      "A. Hyperesthésie cutanée diffuse",
      "B. Présence d’une escarre et d’une éruption des extrémités (paumes, plantes)",
      "C. Raideur de nuque avec signe de Kernig franc",
      "D. Liquide céphalo-rachidien glucorachique < 0,2 g/L",
      "E. Purpura extensif sans fièvre"
    ],
    correctAnswers: [1],
    explanation: "L’escarre d'inoculation et l’éruption maculopapuleuse touchant les paumes et les plantes sont très évocatrices de FBM.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-15',
    courseId: 'crs-inf-2',
    questionNumber: 15,
    type: 'QCM',
    content: "Un patient de 45 ans, alcoolique chronique, présente une FBM. Après 3 jours de doxycycline, la fièvre persiste à 39°C. Quelle conduite est la plus adaptée ?",
    options: [
      "A. Changer pour une céphalosporine de troisième génération",
      "B. Prolonger la doxycycline jusqu’à 10 jours ; la défervescence survient en moyenne entre J2 et J4",
      "C. Ajouter une corticothérapie à forte dose",
      "D. Hospitaliser en réanimation pour assistance hépatique",
      "E. Réaliser une sérologie de contrôle immédiate"
    ],
    correctAnswers: [1],
    explanation: "Sous doxycycline, l’apyrexie est obtenue en 2 à 4 jours. L’absence de réponse à J3 ne justifie pas d’arrêter, il faut poursuivre le traitement.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-2-16',
    courseId: 'crs-inf-2',
    questionNumber: 16,
    type: 'QCM',
    content: "La déclaration de la FBM en Algérie est :",
    options: [
      "A. Facultative, uniquement pour les formes graves",
      "B. Obligatoire +++ (maladie à déclaration obligatoire)",
      "C. Inutile car bénigne",
      "D. Réservée aux cas pédiatriques",
      "E. Effectuée seulement par les laboratoires de biologie"
    ],
    correctAnswers: [1],
    explanation: "La FBM est une maladie à déclaration obligatoire (MDO) en Algérie pour surveillance épidémiologique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-17',
    courseId: 'crs-inf-2',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans les formes malignes de FBM, le traitement parentéral recommandé est :",
    options: [
      "A. Ceftriaxone + gentamicine",
      "B. Doxycycline IV 200 mg/j pendant 10 jours",
      "C. Josamycine IV",
      "D. Corticostéroïdes seuls",
      "E. Oseltamivir en raison d’un possible syndrome grippal"
    ],
    correctAnswers: [1],
    explanation: "Formes graves : doxycycline IV (200 mg/j) pendant 10 jours est le traitement de référence.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-18',
    courseId: 'crs-inf-2',
    questionNumber: 18,
    type: 'QCM',
    content: "La prévention individuelle de la FBM repose sur :",
    options: [
      "A. Vaccination antirickettsienne obligatoire",
      "B. Éviter les piqûres de tiques en été en zone endémique (vêtements longs, inspection)",
      "C. Antibioprophylaxie systématique après toute piqûre de tique",
      "D. Supprimer tous les chiens des zones urbaines",
      "E. Ivermectine prophylactique"
    ],
    correctAnswers: [1],
    explanation: "Il n'existe pas de vaccin. La prévention repose sur la lutte anti-vectorielle et éviter les morsures (vêtements couvrants, répulsifs, inspection corporelle).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-19',
    courseId: 'crs-inf-2',
    questionNumber: 19,
    type: 'QCM',
    content: "La conjonctivite dans la FBM :",
    options: [
      "A. Est toujours purulente avec adénopathie pré-auriculaire",
      "B. Peut remplacer l’escarre d’inoculation (forme conjonctivale)",
      "C. Contre-indique tout traitement local",
      "D. Est due à une réaction allergique à la tique",
      "E. N’apparaît jamais chez l’enfant"
    ],
    correctAnswers: [1],
    explanation: "Une escarre peut siéger au niveau conjonctival, se présentant comme une conjonctivite folliculaire ou un nodule conjonctival d'inoculation.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-2-20',
    courseId: 'crs-inf-2',
    questionNumber: 20,
    type: 'QCM',
    content: "Le test de Weil-Felix détecte des anticorps dirigés contre :",
    options: [
      "A. Rickettsia conorii directement",
      "B. Des antigènes communs avec Proteus OX19, OX2",
      "C. La tique Rhipicephalus",
      "D. Les chiens errants",
      "E. La doxycycline"
    ],
    correctAnswers: [1],
    explanation: "Weil-Felix repose sur une réaction croisée hétérophile entre rickettsies et certaines souches de Proteus (OX19/OX2).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-21',
    courseId: 'crs-inf-2',
    questionNumber: 21,
    type: 'QCM',
    content: "L’éruption cutanée de la FBM respecte habituellement :",
    options: [
      "A. Les paumes et les plantes",
      "B. Le visage",
      "C. Les membres inférieurs",
      "D. Le tronc",
      "E. La région lombaire"
    ],
    correctAnswers: [1],
    explanation: "L’éruption atteint typiquement le tronc et les extrémités (y compris paumes et plantes), mais respecte habituellement le visage.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-22',
    courseId: 'crs-inf-2',
    questionNumber: 22,
    type: 'QCM',
    content: "Un patient sous doxycycline depuis 48h pour FBM présente une photosensibilité. Que faire ?",
    options: [
      "A. Arrêter immédiatement et prescrire de l’azithromycine",
      "B. Protéger du soleil, poursuivre le traitement car la photosensibilité est un effet indésirable connu mais non dangereux",
      "C. Remplacer par une quinolone systématiquement",
      "D. Hospitaliser en urgence",
      "E. Réduire la dose à 100 mg/j"
    ],
    correctAnswers: [1],
    explanation: "La doxycycline peut causer une photosensibilité. Il convient de conseiller une éviction solaire stricte et maintenir le traitement.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-23',
    courseId: 'crs-inf-2',
    questionNumber: 23,
    type: 'QCM',
    content: "La présence d’un déficit en G6PD dans un contexte de FBM est particulièrement redoutable car :",
    options: [
      "A. La doxycycline déclenche une hémolyse aiguë",
      "B. La rickettsie peut précipiter une crise hémolytique, majorant la gravité de la forme maligne",
      "C. Le chloramphénicol est le seul traitement possible",
      "D. La vaccination est obligatoire",
      "E. La thrombopénie est plus sévère"
    ],
    correctAnswers: [1],
    explanation: "Le déficit en G6PD est un facteur de risque majeur de forme maligne sévère avec hémolyse aiguë précipitée par l'infection rickettsienne.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-2-24',
    courseId: 'crs-inf-2',
    questionNumber: 24,
    type: 'QCM',
    content: "Quel prélèvement est le plus sensible pour la PCR précoce dans la FBM ?",
    options: [
      "A. Sérum uniquement",
      "B. Biopsie cutanée de l’escarre ou écouvillonnage de l’escarre",
      "C. LCR",
      "D. Selles",
      "E. Expectoration"
    ],
    correctAnswers: [1],
    explanation: "La PCR sur biopsie ou écouvillonnage de la tache noire (escarre de Pieri) est très sensible et permet un diagnostic précoce avant séroconversion.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-25',
    courseId: 'crs-inf-2',
    questionNumber: 25,
    type: 'QCM',
    content: "La durée totale recommandée du traitement par doxycycline dans la FBM non compliquée de l'adulte est :",
    options: [
      "A. 3 jours",
      "B. 200 mg/j jusqu’à apyrexie + 2 à 4 jours supplémentaires (environ 5 à 7 jours au total)",
      "C. 14 jours minimum",
      "D. Une dose unique seulement",
      "E. 1 mois pour éviter les rechutes"
    ],
    correctAnswers: [1],
    explanation: "Doxycycline 200 mg/j jusqu’à 2-4 jours après apyrexie (soit environ 5 à 7 jours au total).",
    difficulty: 'facile'
  },

  // 5 Cas cliniques FBM
  {
    id: 'q-inf-2-cc1',
    courseId: 'crs-inf-2',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Un homme de 35 ans, jardinier à Blida en août, consulte pour fièvre à 39,5°C évoluant depuis 5 jours, céphalées intenses, myalgies. Petite lésion noirâtre au cuir chevelu entourée d’un halo érythémateux, indolore. Adénopathie rétro-auriculaire. Éruption maculopapuleuse discrète aux membres inférieurs respectant le visage. Tique retirée il y a 10 jours.\n\nQuel est le diagnostic le plus probable et le traitement probabiliste de première intention ?",
    options: [
      "A. Méningite à tiques / Ceftriaxone",
      "B. Fièvre boutonneuse méditerranéenne (FBM) / Doxycycline 200 mg/j",
      "C. Dengue / Paracétamol",
      "D. Infection à méningocoque / Céfotaxime",
      "E. Syndrome de Kawasaki / Aspirine"
    ],
    correctAnswers: [1],
    explanation: "FBM typique (escarre d'inoculation, fièvre estivale, éruption respectant le visage, piqûre de tique du chien). Traitement de choix = Doxycycline 200 mg/j.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-cc2',
    courseId: 'crs-inf-2',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Patiente de 72 ans, diabétique, admise pour AEG, fièvre à 40°C, purpura ecchymotique aux membres, confusion, dyspnée. Pas d’escarre visible. CRP 220 mg/L, leucopénie, thrombopénie. Vit avec plusieurs chiens dans une villa et jardinait souvent.\n\nQuelle entité devez-vous suspecter et quel traitement IV débuter en urgence ?",
    options: [
      "A. Leptospirose ictéro-hémorragique / Pénicilline G",
      "B. Forme maligne de FBM / Doxycycline IV 200 mg/j",
      "C. Purpura thrombopénique idiopathique / Corticoïdes",
      "D. Paludisme grave / Artésunate",
      "E. Endocardite à staphylocoque / Vancomycine"
    ],
    correctAnswers: [1],
    explanation: "Terrain âgé + diabète + purpura + atteinte polyviscérale = Forme maligne de FBM (6-7% des cas, mortalité 30%). Traitement d'urgence par Doxycycline IV.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-2-cc3',
    courseId: 'crs-inf-2',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Garçon de 6 ans, 20 kg, fièvre depuis 4 jours, éruption maculopapuleuse des membres, promenade en forêt. Petite escarre dans le pli de l’aine. Diagnostic de FBM retenu.\n\nQuel est le traitement approprié selon le cours ?",
    options: [
      "A. Doxycycline 5 mg/kg en dose unique (100 mg)",
      "B. Amoxicilline 80 mg/kg/j",
      "C. Josamycine 50 mg/kg/j pendant 10 jours",
      "D. Abstention thérapeutique",
      "E. Corticothérapie orale"
    ],
    correctAnswers: [0],
    explanation: "Chez l'enfant < 45 kg, la doxycycline en prise unique à 5 mg/kg est le protocole de référence efficace et bien toléré.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-cc4',
    courseId: 'crs-inf-2',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Femme enceinte (12 SA) fébrile à 38,8°C, céphalées, escarre au niveau du sillon inter-fessier. Diagnostic clinique de FBM.\n\nQuel antibiotique prescrire ?",
    options: [
      "A. Doxycycline 200 mg/j",
      "B. Josamycine 3 g/j pendant 10 jours",
      "C. Ciprofloxacine 500 mg x2/j",
      "D. Azithromycine 500 mg 3 jours",
      "E. Chloramphénicol IV"
    ],
    correctAnswers: [1],
    explanation: "La josamycine est le macrolide recommandé pendant la grossesse et chez l'enfant < 7 ans en alternative aux cyclines contre-indiquées.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-2-cc5',
    courseId: 'crs-inf-2',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Homme de 28 ans, retour de balade en Kabylie, fièvre élevée, arthralgies, éruption maculeuse généralisée sans escarre évidente initialement. Sérologie dengue négative. Examen minutieux retrouve une micro-escarre sous l'aisselle. NFS : leucopénie.\n\nQuelle conduite est la plus appropriée ?",
    options: [
      "A. Traitement par Doxycycline probabiliste d'emblée",
      "B. Recherche de paludisme uniquement",
      "C. Ponction lombaire immédiate",
      "D. Hospitalisation en réanimation sans antibiotique",
      "E. Antibiothérapie par macrolide seul"
    ],
    correctAnswers: [0],
    explanation: "Toute fièvre éruptive estivale en zone d'endémie avec escarre cutanée doit être traitée comme une FBM jusqu'à preuve du contraire.",
    difficulty: 'facile'
  }
];

export const INFECTIO_LESSON_2_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-2-mindmap',
    courseId: 'crs-inf-2',
    title: 'Mind Map : Fièvre Boutonneuse Méditerranéenne (FBM)',
    type: 'mindmap',
    content: `# Mind Map : Fièvre Boutonneuse Méditerranéenne (Rickettsia conorii)

## 1. Épidémiologie
- **Vecteur & Réservoir** : Tique brune du chien (Rhipicephalus sanguineus)
- **Transmission** : Piqûre indolore prolongée (> 20h), transovarienne chez la tique
- **Saisonnalité** : Estivale (mai à octobre, pic juillet-août)
- **Endémie** : Maghreb, Algérie (urbain et rural)

## 2. Physiopathologie & Clinique
- **Tropisme** : Endothélite rickettsienne -> vascularite et ischémie
- **Incubation** : 3-16 jours (moyenne 6 jours)
- **Triade clinique classique** :
  1. Fièvre brutale (39-40°C) avec céphalées et myalgies
  2. Tache noire (escarre d'inoculation de Pieri, 50-75% des cas, indolore, aine/aisselle/cuir chevelu)
  3. Éruption maculopapuleuse généralisée (atteignant paumes et plantes, respectant le visage)
- **Forme maligne (6-7%)** : Purpura, atteinte neurologique, insuffisance rénale, mortalité 30%

## 3. Diagnostic & Traitement
- **Biologie** : Leucopénie, thrombopénie, cytolyse modérée
- **Confirmation** : IFI (référence) ou PCR sur biopsie d'escarre (précoce)
- **Traitement de référence** :
  - Adulte : Doxycycline 200 mg/j (5 à 7 jours)
  - Enfant < 45 kg : Doxycycline 5 mg/kg en dose unique
  - Femme enceinte : Josamycine 3 g/j x 10 jours`
  },
  {
    id: 'res-inf-2-astuces',
    courseId: 'crs-inf-2',
    title: 'Astuces & Mnémotechniques FBM',
    type: 'astuce',
    content: `### Perles & Mnémos FBM (Dr. LAIDANI.M)

1. **« 3T » pour la Triade Clinique :**
   - **T**ique (morsure)
   - **T**ache noire (escarre indolore)
   - **T**empérature élevée (fièvre à 40°C) + Éruption paumes & plantes

2. **Siège de l'Escarre : « C.A.P. »**
   - **C**uir chevelu
   - **A**ine / aisselle
   - **P**li interfessier

3. **Facteurs de forme maligne : « Vieux DATe G6PD »**
   - **Vieux** (> 60 ans)
   - **D**iabète
   - **A**lcool
   - **T**abac
   - Déficit en **G6PD** (risque d'hémolyse aiguë)`
  }
];

// Lesson 3: La Rage
export const INFECTIO_LESSON_3_QUESTIONS: Question[] = [
  {
    id: 'q-inf-3-01',
    courseId: 'crs-inf-3',
    questionNumber: 1,
    type: 'QCM',
    content: "Le virus de la rage appartient à quelle classification taxonomique exacte ?",
    options: [
      "A. Ordre Mononegavirales, famille Paramyxoviridae, genre Lyssavirus",
      "B. Ordre Mononegavirales, famille Rhabdoviridae, genre Lyssavirus",
      "C. Ordre Nidovirales, famille Rhabdoviridae, genre Rabdovirus",
      "D. Ordre Mononegavirales, famille Filoviridae, genre Lyssavirus",
      "E. Ordre Bunyavirales, famille Rhabdoviridae, genre Lyssavirus"
    ],
    correctAnswers: [1],
    explanation: "Le virus de la rage appartient à l'ordre Mononegavirales, famille Rhabdoviridae, genre Lyssavirus. Virus à ARN monocaténaire négatif en forme de balle de fusil.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-02',
    courseId: 'crs-inf-3',
    questionNumber: 2,
    type: 'QCM',
    content: "Quelle proportion des décès humains par rage dans le monde est imputable aux chiens ?",
    options: [
      "A. 60 %",
      "B. 75 %",
      "C. 85 %",
      "D. 99 %",
      "E. 90 %"
    ],
    correctAnswers: [3],
    explanation: "Les chiens sont responsables de 99 % des cas de rage humaine dans le monde. En Algérie, les chiens représentent 82,6 % des animaux mordeurs.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-03',
    courseId: 'crs-inf-3',
    questionNumber: 3,
    type: 'QCM',
    content: "Parmi les voies de transmission suivantes, laquelle est la plus fréquente pour la rage ?",
    options: [
      "A. Aérienne par aérosol",
      "B. Muqueuse par projection de salive",
      "C. Cutanée (morsure, griffure, léchage sur peau excoriée) représentant 99 %",
      "D. Greffe d'organe",
      "E. Transfusion sanguine"
    ],
    correctAnswers: [2],
    explanation: "La voie cutanée représente 99 % des transmissions, principalement par morsure. La transmission transfusionnelle n'est pas décrite.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-04',
    courseId: 'crs-inf-3',
    questionNumber: 4,
    type: 'QCM',
    content: "Concernant la physiopathologie, quelle est la vitesse de migration rétroaxonale du virus de la rage vers le SNC ?",
    options: [
      "A. 0,1 à 0,3 cm/j",
      "B. 0,5 à 1 cm/j (centripète)",
      "C. 2 à 3 cm/j",
      "D. 5 à 10 cm/j",
      "E. 10 à 20 cm/j"
    ],
    correctAnswers: [1],
    explanation: "Le virus migre lentement à 0,5 à 1 cm/jour par voie rétroaxonale centripète vers la moelle épinière puis l'encéphale, ce qui explique la longue période d'incubation.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-3-05',
    courseId: 'crs-inf-3',
    questionNumber: 5,
    type: 'QCM',
    content: "Quel pourcentage des cas de rage clinique se présente sous la forme encéphalitique dite « rage furieuse » ?",
    options: [
      "A. 20 %",
      "B. 40 %",
      "C. 60 %",
      "D. 80 % (contre 20 % de forme paralytique)",
      "E. 95 %"
    ],
    correctAnswers: [3],
    explanation: "La forme encéphalitique (« furieuse ») représente environ 80 % des cas (hydrophobie, agitation), et la forme paralytique (« muette ») environ 20 % (simulant un Guillain-Barré).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-06',
    courseId: 'crs-inf-3',
    questionNumber: 6,
    type: 'QCM',
    content: "L'hydrophobie dans la rage furieuse est due à quel mécanisme physiopathologique ?",
    options: [
      "A. Atteinte des récepteurs gustatifs provoquant une aversion à l'eau",
      "B. Spasmes pharyngo-laryngés intenses déclenchés par la tentative d'avaler un liquide ou sa simple évocation",
      "C. Hyperréflexie du réflexe de toux rendant la déglutition douloureuse",
      "D. Lésion du centre de la soif au niveau hypothalamique",
      "E. Dysphagie d'origine musculaire liée à une myosite rabique"
    ],
    correctAnswers: [1],
    explanation: "L'hydrophobie résulte de spasmes violents et douloureux du pharynx et du larynx déclenchés par la tentative de déglutition de liquide ou sa simple vue/évocation sonore.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-07',
    courseId: 'crs-inf-3',
    questionNumber: 7,
    type: 'QCM',
    content: "La période d'incubation de la rage dans 69 % des cas est inférieure ou égale à :",
    options: [
      "A. 30 jours",
      "B. 60 jours",
      "C. 90 jours (3 mois)",
      "D. 180 jours",
      "E. 365 jours"
    ],
    correctAnswers: [2],
    explanation: "Dans 69 % des cas, l'incubation est ≤ 90 jours (moyenne 1 à 3 mois). Elle peut varier de quelques jours (morsure à la face chez l'enfant) à plus d'un an.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-3-08',
    courseId: 'crs-inf-3',
    questionNumber: 8,
    type: 'QCM',
    content: "Lors d'une exposition de grade III (morsure transdermique avec saignement, léchage de muqueuse ou animal sauvage), quelle est la prise en charge correcte ?",
    options: [
      "A. Soins locaux seuls",
      "B. Vaccin antirabique seul",
      "C. Immunoglobulines seules sans vaccin",
      "D. Soins locaux + vaccin antirabique + immunoglobulines antirabiques (IGAR)",
      "E. Attendre le résultat de l'analyse de l'animal avant de débuter le traitement"
    ],
    correctAnswers: [3],
    explanation: "Le grade III requiert immédiatement la triple prise en charge : soins locaux (lavage 15 min eau-savon) + vaccination antirabique + IGAR infiltrées au niveau de la plaie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-09',
    courseId: 'crs-inf-3',
    questionNumber: 9,
    type: 'QCM',
    content: "Quelle est la dose correcte des immunoglobulines antirabiques d'origine équine (sérum équin disponible en Algérie) en prophylaxie post-exposition ?",
    options: [
      "A. 20 UI/kg sans dépasser 1500 UI",
      "B. 40 UI/kg sans dépasser 3000 UI",
      "C. 60 UI/kg sans dépasser 4000 UI",
      "D. 20 UI/kg sans dépasser 2000 UI",
      "E. 40 UI/kg sans dépasser 5000 UI"
    ],
    correctAnswers: [1],
    explanation: "Sérum équin : 40 UI/kg, avec un plafond maximal de 3 000 UI. (Les immunoglobulines humaines sont à 20 UI/kg). Infiltration maximale autour de la plaie.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-10',
    courseId: 'crs-inf-3',
    questionNumber: 10,
    type: 'QCM',
    content: "Parmi ces espèces animales, pour laquelle la prophylaxie antirabique post-exposition n'est-elle PAS indiquée ?",
    options: [
      "A. Chien errant",
      "B. Cheval",
      "C. Hamster domestique (petits rongeurs et lagomorphes)",
      "D. Chat errant",
      "E. Renard"
    ],
    correctAnswers: [2],
    explanation: "Les petits rongeurs (souris, rats, hamsters) et lagomorphes (lapins) ne transmettent quasiment jamais la rage et ne justifient pas de prophylaxie antirabique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-11',
    courseId: 'crs-inf-3',
    questionNumber: 11,
    type: 'QCM',
    content: "Le premier geste local après une morsure potentiellement rabique consiste à laver la plaie à l'eau et au savon pendant 15 minutes. Cela réduit le risque d'infection rabique d'environ :",
    options: [
      "A. 30 %",
      "B. 50 %",
      "C. 70 %",
      "D. 90 %",
      "E. 99 %"
    ],
    correctAnswers: [3],
    explanation: "Le lavage immédiat et abondant à l'eau et au savon pendant 15 minutes inactive le virus enveloppé et réduit le risque de transmission d'environ 90 %.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-12',
    courseId: 'crs-inf-3',
    questionNumber: 12,
    type: 'QCM',
    content: "Chez un patient jamais vacciné, quel protocole vaccinal par voie IM est recommandé avec le vaccin sur culture cellulaire (protocole « Zagreb ») ?",
    options: [
      "A. J0 – J3 – J7 – J14 – J28 (5 injections)",
      "B. J0 (2 doses dans 2 sites) – J7 (1 dose) – J21 (1 dose) (protocole 2-1-1)",
      "C. J0 – J7 – J21 (3 injections)",
      "D. J0 – J3 – J7 – J14 (protocole « Essen » 4 injections)",
      "E. J0 – J14 – J28 (3 injections)"
    ],
    correctAnswers: [1],
    explanation: "Le protocole de Zagreb (2-1-1) comporte 2 doses à J0 (deltoïde droit et gauche), 1 dose à J7, et 1 dose à J21.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-3-13',
    courseId: 'crs-inf-3',
    questionNumber: 13,
    type: 'QCM',
    content: "Quelle technique diagnostique permet la confirmation de la rage chez l'humain en pré-mortem ?",
    options: [
      "A. Immunofluorescence directe (DFAT) sur biopsie cérébrale",
      "B. RT-PCR sur follicules pileux (nuque), salive, LCS ou urines",
      "C. Sérologie ELISA sur sang périphérique",
      "D. Culture virale sur liquide céphalorachidien",
      "E. IRM cérébrale avec séquences FLAIR"
    ],
    correctAnswers: [1],
    explanation: "En pré-mortem, la RT-PCR sur follicules pileux de la nuque, salive et LCR est la méthode diagnostique de référence.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-3-14',
    courseId: 'crs-inf-3',
    questionNumber: 14,
    type: 'QCM',
    content: "La rage paralytique (forme tranquille) peut être confondue cliniquement avec :",
    options: [
      "A. La méningite bactérienne",
      "B. Le syndrome de Guillain-Barré",
      "C. L'encéphalite herpétique (HSV1)",
      "D. Le neuropaludisme",
      "E. La maladie de Parkinson"
    ],
    correctAnswers: [1],
    explanation: "La forme paralytique débute par une parésie ascendante flasque avec abolition des ROT et troubles sphinctériens, simulant parfaitement un syndrome de Guillain-Barré.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-15',
    courseId: 'crs-inf-3',
    questionNumber: 15,
    type: 'QCM',
    content: "En Algérie, quel est le réservoir sauvage principal de la rage selvatique ?",
    options: [
      "A. Les chauve-souris",
      "B. Les singes",
      "C. Le chacal et le renard",
      "D. Les rats et rongeurs",
      "E. Les rapaces"
    ],
    correctAnswers: [2],
    explanation: "En Algérie, la rage sauvage ou selvatique est entretenue par le chacal (Canis aureus) et le renard roux.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-16',
    courseId: 'crs-inf-3',
    questionNumber: 16,
    type: 'QCM',
    content: "Quelle antibioprophylaxie est recommandée après une morsure animale en l'absence d'allergie aux bêtalactamines ?",
    options: [
      "A. Amoxicilline seule pendant 7 jours",
      "B. Amoxicilline-acide clavulanique pendant 5 jours",
      "C. Ciprofloxacine pendant 5 jours",
      "D. Métronidazole seul pendant 7 jours",
      "E. Céphalosporine de 3ème génération en IV pendant 3 jours"
    ],
    correctAnswers: [1],
    explanation: "Amoxicilline-acide clavulanique (Augmentin) pendant 5 jours est le traitement de référence couvrant Pasteurella multocida, les anaérobies et les staphylocoques.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-17',
    courseId: 'crs-inf-3',
    questionNumber: 17,
    type: 'QCM',
    content: "Un patient correctement vacciné (≥ 2 doses documentées) subit une nouvelle exposition grade III. Quelle est la conduite à tenir vaccinale ?",
    options: [
      "A. Reprendre le protocole complet (4 doses) + IGAR",
      "B. Vaccin seul en protocole complet sans IGAR",
      "C. 2 rappels vaccinaux IM à J0 et J3, sans IGAR",
      "D. Aucun traitement nécessaire si vacciné il y a moins d'un an",
      "E. IGAR seules sans vaccin"
    ],
    correctAnswers: [2],
    explanation: "Chez une personne antérieurement vaccinée (documentée), la réexposition nécessite 2 rappels IM à J0 et J3 sans injection d'IGAR.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-3-18',
    courseId: 'crs-inf-3',
    questionNumber: 18,
    type: 'QCM',
    content: "L'homme dans le cycle épidémiologique de la rage est qualifié de « cul-de-sac ». Cela signifie :",
    options: [
      "A. L'homme peut transmettre la rage à d'autres animaux",
      "B. L'homme est un hôte terminal n'assurant pas la propagation du virus dans la nature",
      "C. L'homme est le réservoir principal de la rage en zone urbaine",
      "D. Le virus ne peut pas passer de l'animal à l'homme",
      "E. L'homme est un amplificateur du virus dans l'environnement"
    ],
    correctAnswers: [1],
    explanation: "L'homme est un cul-de-sac épidémiologique : il contracte l'infection et en meurt, mais ne transmet pas le virus à d'autres hôtes (hors rares cas de greffes).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-19',
    courseId: 'crs-inf-3',
    questionNumber: 19,
    type: 'QCM',
    content: "Concernant les IGAR (sérum équin), à partir de quel délai après le début de la vaccination ne sont-elles plus indiquées ?",
    options: [
      "A. 3 jours",
      "B. 5 jours",
      "C. 7 jours",
      "D. 14 jours",
      "E. 21 jours"
    ],
    correctAnswers: [2],
    explanation: "Les IGAR ne sont plus indiquées au-delà de J7 après la 1ère dose de vaccin car l'immunité active humorale commence à se développer et neutraliserait les anticorps passifs.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-20',
    courseId: 'crs-inf-3',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle est la durée d'observation vétérinaire obligatoire d'un animal mordeur connu et vivant ?",
    options: [
      "A. 7 jours avec certificat à J0 et J7",
      "B. 10 jours avec certificat à J0, J5 et J10",
      "C. 15 jours avec certificat vétérinaire à J0, J7 et J14",
      "D. 21 jours avec certificat à J0, J7 et J21",
      "E. 30 jours avec certificat unique à J30"
    ],
    correctAnswers: [2],
    explanation: "L'animal mordeur (chien/chat) vivant et gardé doit être mis en observation vétérinaire pendant 15 jours avec 3 certificats (J0, J7, J14). L'animal excrète le virus au max 5-7 jours avant la mort.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-21',
    courseId: 'crs-inf-3',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans la physiopathologie de la rage, la dissémination centrifuge finale du virus (depuis le SNC vers la périphérie) atteint en premier :",
    options: [
      "A. Le foie et les reins",
      "B. Les glandes salivaires, les follicules pileux et les cornées",
      "C. La rate et les ganglions lymphatiques",
      "D. Les muscles squelettiques",
      "E. Le tissu pulmonaire"
    ],
    correctAnswers: [1],
    explanation: "La dissémination centrifuge par voie axonale descendante gagne les glandes salivaires (rendant la salive infectante), les follicules pileux et la cornée.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-3-22',
    courseId: 'crs-inf-3',
    questionNumber: 22,
    type: 'QCM',
    content: "Le vaccin antirabique fabriqué localement par l'Institut Pasteur d'Algérie (vaccin tissulaire) se distingue du vaccin sur culture cellulaire par :",
    options: [
      "A. Voie IM, immunité 2–3 ans",
      "B. Voie ID, immunité 2–3 ans",
      "C. Voie sous-cutanée (S/C), immunité 6–12 mois",
      "D. Voie sous-cutanée, immunité 2–3 ans",
      "E. Voie IM, immunité 6–12 mois"
    ],
    correctAnswers: [2],
    explanation: "Le vaccin tissulaire (IPA, cerveau de souriceaux) s'administre en sous-cutané et confère une immunité de 6-12 mois, alors que les vaccins cellulaires sont IM/ID avec immunité de 2-3 ans.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-3-23',
    courseId: 'crs-inf-3',
    questionNumber: 23,
    type: 'QCM',
    content: "Parmi ces situations, laquelle correspond à une exposition de GRADE I ne nécessitant aucune prophylaxie antirabique ?",
    options: [
      "A. Griffure superficielle au niveau de la cheville sans saignement",
      "B. Léchage de la peau intacte par un chien errant",
      "C. Morsure à la main avec ecchymose sans plaie ouverte",
      "D. Contact de la salive avec la conjonctive oculaire",
      "E. Manipulation d'une chauve-souris sans morsure visible"
    ],
    correctAnswers: [1],
    explanation: "Grade I : toucher ou nourrir des animaux, ou léchage sur peau intacte -> aucun risque, pas de traitement.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-24',
    courseId: 'crs-inf-3',
    questionNumber: 24,
    type: 'QCM',
    content: "Concernant la mortalité mondiale par rage, quel chiffre est le plus exact ?",
    options: [
      "A. 5 000 décès/an",
      "B. 15 000 décès/an",
      "C. Environ 59 000 décès/an (Asie et Afrique)",
      "D. 120 000 décès/an",
      "E. 200 000 décès/an"
    ],
    correctAnswers: [2],
    explanation: "L'OMS estime la mortalité annuelle mondiale à environ 59 000 décès, quasi exclusivement en Asie et en Afrique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-25',
    courseId: 'crs-inf-3',
    questionNumber: 25,
    type: 'QCM',
    content: "Parmi les diagnostics différentiels à éliminer en priorité devant un tableau d'encéphalite aiguë chez un patient potentiellement exposé à la rage, lequel est traitable et donc doit être exclu en premier ?",
    options: [
      "A. Encéphalite à HSV1 et neuropaludisme",
      "B. Maladie d'Alzheimer et démence à corps de Lewy",
      "C. Sclérose en plaques et neuromyélite optique",
      "D. Épilepsie idiopathique et psychose aiguë",
      "E. AVC ischémique et hémorragie sous-arachnoïdienne"
    ],
    correctAnswers: [0],
    explanation: "Devant toute encéphalite aiguë, il faut d'abord éliminer les étiologies curables en urgence : l'encéphalite herpétique (HSV1) et le neuropaludisme.",
    difficulty: 'facile'
  },

  // 5 Cas cliniques La Rage
  {
    id: 'q-inf-3-cc1',
    courseId: 'crs-inf-3',
    questionNumber: 26,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS CLINIQUE 1 : Ahmed, 8 ans, amené aux urgences 2h après avoir été mordu au visage et au cou par un chien errant en fuite. Plaies multiples profondes saignantes au niveau de la joue gauche et du cou. Jamais vacciné contre la rage.\n\nQuel grade d'exposition classez-vous ce cas et quelle conduite immédiate ?",
    options: [
      "A. Grade I / Soins locaux seuls",
      "B. Grade II / Vaccin seul",
      "C. Grade III / Soins locaux immédiats + Vaccin antirabique + IGAR infiltrées",
      "D. Grade II / IGAR seules",
      "E. Grade III / Attendre 15 jours l'animal"
    ],
    correctAnswers: [2],
    explanation: "Grade III : morsures profondes avec saignement au visage et au cou (zone à haut risque) par animal inconnu. Prise en charge urgente : lavage 15 min + vaccin + IGAR 40 UI/kg.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-cc2',
    courseId: 'crs-inf-3',
    questionNumber: 27,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS CLINIQUE 2 : Kamel, 35 ans, vétérinaire rural, admis pour agitation, anxiété, insomnie depuis 3 jours. Il refuse de boire de l'eau (douleur pharyngée à la déglutition). Hypersalivation, fièvre à 40,5°C, contractures, hyperréactivité au bruit et à l'air. Griffé par un chat errant il y a 45 jours sans consultation.\n\nQuel est le diagnostic et quel est le pronostic thérapeutique ?",
    options: [
      "A. Encéphalite herpétique / Curable sous aciclovir",
      "B. Tétanos généralisé / Curable sous réanimation",
      "C. Rage encéphalitique (forme furieuse) / Fatal à 100%, soins palliatifs exclusifs",
      "D. Neuropaludisme / Curable sous artésunate",
      "E. Intoxication organophosphorée / Curable sous atropine"
    ],
    correctAnswers: [2],
    explanation: "Rage furieuse typique (hydrophobie, aérophobie, agitation, hypersialorrhée après griffure il y a 45 jours). Une fois déclarée, la mortalité est de 100 %, aucun traitement curatif n'existe.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-3-cc3',
    courseId: 'crs-inf-3',
    questionNumber: 28,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS CLINIQUE 3 : Fatima, 32 ans, enceinte de 20 SA, consulte car son chien domestique (vacciné il y a 18 mois, sain, vivant) a léché son bras porteur d'une excoriation superficielle.\n\nQuel grade d'exposition et quelle attitude médicale ?",
    options: [
      "A. Grade I / Aucune prophylaxie",
      "B. Grade II / Vaccin antirabique (la grossesse n'est pas une contre-indication) + surveillance vétérinaire du chien pendant 15 jours",
      "C. Grade III / Vaccin + IGAR immédiatement",
      "D. Grade II / Vaccin formellement contre-indiqué pendant la grossesse",
      "E. Grade III / IGAR seules"
    ],
    correctAnswers: [1],
    explanation: "Grade II (léchage sur peau excoriée) : vaccination antirabique immédiate (l'anatoxine est sans danger pendant la grossesse) + mise en observation vétérinaire du chien (J0, J7, J14).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-3-cc4',
    courseId: 'crs-inf-3',
    questionNumber: 29,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS CLINIQUE 4 : Mourad, 45 ans, hospitalisé pour paralysie flasque ascendante progressive des membres inférieurs depuis 7 jours avec troubles sphinctériens, conscience préservée. Mordu par un chien errant il y a 2 mois à la jambe sans consultation.\n\nQuel diagnostic et quel examen confirme en pré-mortem ?",
    options: [
      "A. Syndrome de Guillain-Barré / EMG",
      "B. Rage paralytique (forme tranquille) / RT-PCR sur biopsie cutanée de la nuque (follicules pileux)",
      "C. Myélopathie cervicale / IRM médullaire",
      "D. Sclérose latérale amyotrophique / EMG",
      "E. Intoxication au plomb / Plombémie"
    ],
    correctAnswers: [1],
    explanation: "La rage paralytique (20% des cas) simule un Guillain-Barré (paralysie flasque ascendante). La RT-PCR sur biopsie de nuque confirme le diagnostic en pré-mortem.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-3-cc5',
    courseId: 'crs-inf-3',
    questionNumber: 30,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS CLINIQUE 5 : Rania, 12 ans, 40 kg, mordue par un renard à la main (morsure profonde saignante). Elle a un schéma vaccinal antirabique documenté complet reçu il y a 1 an.\n\nQuelle prise en charge prophylactique et quelle dose d'IGAR si le médecin décide d'en prescrire (flacon 200 UI/ml) ?",
    options: [
      "A. Reprendre 4 doses de vaccin sans IGAR",
      "B. Soins locaux + 2 rappels vaccinaux à J0 et J3 (personne antérieurement vaccinée), calcul IGAR = 8 ml (1600 UI)",
      "C. Soins locaux seuls",
      "D. Protocole complet 5 doses",
      "E. Attendre 15 jours"
    ],
    correctAnswers: [1],
    explanation: "Personne antérieurement vaccinée : 2 doses de rappel à J0 et J3. Dose IGAR théorique = 40 UI/kg x 40 kg = 1600 UI / 200 UI/ml = 8 ml.",
    difficulty: 'moyen'
  }
];

export const INFECTIO_LESSON_3_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-3-mindmap',
    courseId: 'crs-inf-3',
    title: 'Mind Map : La Rage humaine et animale',
    type: 'mindmap',
    content: `# Mind Map : La Rage (Lyssavirus)

## 1. Virologie & Épidémiologie
- **Virus** : Rhabdoviridae, Lyssavirus (ARN négatif enveloppé en balle de fusil)
- **Réservoirs** :
  - Monde & Algérie urbaine : Chien (99% des cas humains)
  - Algérie sauvage (selvatique) : Chacal, Renard
  - Homme = **cul-de-sac épidémiologique**
- **Transmission** : Salive via morsure (99%), griffure, léchage sur excoriation ou muqueuse

## 2. Physiopathologie & Clinique
- **Trajet** : Fixation aux récepteurs nicotiniques ACh -> migration rétroaxonale lente (0,5-1 cm/j) vers le SNC -> encéphalomyélite -> dissémination centrifuge (salive, nuque, cornée)
- **Incubation** : 1 à 3 mois (extrêmes : 9 jours à > 1 an)
- **Deux formes cliniques** :
  - *Forme furieuse (80%)* : Hydrophobie (spasmes pharyngés à l'eau), aérophobie, agitation, hypersalivation, fièvre 40°C
  - *Forme paralytique (20%)* : Paralysie flasque ascendante simulant un Guillain-Barré
- **Pronostic** : Létale à 100% dès les premiers signes

## 3. Diagnostic & Prophylaxie Post-Exposition (PPE)
- **Diagnostic pré-mortem** : RT-PCR sur biopsie de nuque (follicules), salive, LCR
- **Diagnostic post-mortem** : DFAT (immunofluorescence directe cerveau)
- **Prise en charge post-exposition (URGENCE ABSOLUE)** :
  - *Soins locaux* : Eau + savon 15 min (-90% risque) + antiseptique (Bétadine)
  - *Grade I* (peau saine) : Rien
  - *Grade II* (morsure superficielle sans saignement) : Vaccin seul
  - *Grade III* (saignement, face/mains, animal sauvage) : Vaccin + IGAR (40 UI/kg sérum équin infiltré)
  - *Animal connu* : Observation vétérinaire 15 jours (J0, J7, J14)`
  },
  {
    id: 'res-inf-3-astuces',
    courseId: 'crs-inf-3',
    title: 'Mnémotechniques & Règles d\'Or de la Rage',
    type: 'astuce',
    content: `### Perles & Mnémos La Rage (Dr. LAIDANI.M)

1. **Règle « 40 - 3000 - 7 » pour les IGAR :**
   - **40** UI/kg (sérum équin)
   - Max **3000** UI
   - Inutile après **J7** de vaccination débutée !

2. **Grades d'Exposition : « P-M-H »**
   - **Grade I** : **P**eau intacte -> Pas de vaccin
   - **Grade II** : **M**orsure simple sans sang -> Monovaccination (vaccin seul)
   - **Grade III** : **H**émorragie / face / sauvage -> Hyperprophylaxie (Vaccin + IGAR)

3. **Protocole Zagreb (2-1-1) :**
   - J0 (2 doses dans 2 sites différents) + J7 (1 dose) + J21 (1 dose)

4. **Sujet déjà vacciné :**
   - Seulement 2 rappels : J0 et J3 (PAS d'IGAR !)`
  }
];
