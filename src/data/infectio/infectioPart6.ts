import { Question, CourseResource } from '../../types/medical';

// Lesson 16: Méningites purulentes
export const INFECTIO_LESSON_16_QUESTIONS: Question[] = [
  {
    id: 'q-inf-16-01',
    courseId: 'crs-inf-16',
    questionNumber: 1,
    type: 'QCM',
    content: "Quelle est la cause bactérienne la plus fréquente de méningite purulente chez l'adulte immunocompétent de plus de 25 ans ?",
    options: [
      "A. Neisseria meningitidis (méningocoque)",
      "B. Streptococcus pneumoniae (pneumocoque)",
      "C. Haemophilus influenzae sérotype b",
      "D. Listeria monocytogenes",
      "E. Staphylococcus aureus"
    ],
    correctAnswers: [1],
    explanation: "Chez l'adulte de plus de 25 ans, Streptococcus pneumoniae (pneumocoque) est la première cause de méningite bactérienne (environ 60% des cas), suivi de Neisseria meningitidis. Chez le sujet jeune (nourrisson > 1 an et adulte jeune 18-24 ans), le méningocoque prédomine.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-02',
    courseId: 'crs-inf-16',
    questionNumber: 2,
    type: 'QCM',
    content: "Devant un syndrome méningé fébrile, la découverte d'un purpura avec au moins un élément nécrotique ou ecchymotique de diamètre ≥ 3 mm impose quelle mesure prioritaire et immédiate ?",
    options: [
      "A. La réalisation urgente d'une ponction lombaire au lit du malade",
      "B. L'injection intraveineuse ou intramusculaire immédiate d'une C3G (Ceftriaxone ou Céfotaxime) avant tout examen",
      "C. La réalisation immédiate d'un scanner cérébral sans injection",
      "D. Une perfusion de Dexaméthasone seule et surveillance continue",
      "E. Un bilan d'hémostase en extrême urgence pour éliminer une CIVD"
    ],
    correctAnswers: [1],
    explanation: "Purpura fulminans = URGENCE VITALE ABSOLUE. L'administration d'une C3G injectable (Ceftriaxone 50-100 mg/kg ou Céfotaxime) doit être IMMÉDIATE, sans attendre la ponction lombaire ni l'imagerie ni les résultats de laboratoire, afin de prévenir le décès rapide par choc septique et défaillance multiviscérale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-03',
    courseId: 'crs-inf-16',
    questionNumber: 3,
    type: 'QCM',
    content: "Parmi les anomalies suivantes du liquide cérébrospinal (LCS), laquelle signe une méningite purulente typique ?",
    options: [
      "A. Liquide clair, cytose à 150/mm³ à 90% de lymphocytes, glycorachie normale",
      "B. Liquide trouble, hypercytose > 1 000/mm³ avec > 80% de PNN, protéinorachie > 1 g/L, rapport glycorachie/glycémie < 0,4",
      "C. Liquide xanthochromique, normocytose, protéinorachie > 3 g/L sans hypoglycorachie",
      "D. Liquide eau de roche, 15 cellules/mm³, protéinorachie à 0,30 g/L, chlorurorachie basse",
      "E. Liquide hémorragique désérythrocyté avec hyperprotéinorachie isolée"
    ],
    correctAnswers: [1],
    explanation: "La formule typique de méningite purulente associe un liquide trouble/purulent, une hypercytose massive à polynucléaires neutrophiles altérés, une hyperprotéinorachie élevée (> 1-2 g/L), une hypoglycorachie franche (rapport LCS/glycémie < 0,4) et une hyperlactatorachie (> 3,2 mmol/L).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-04',
    courseId: 'crs-inf-16',
    questionNumber: 4,
    type: 'QCM',
    content: "Dans quelle circonstance clinique un scanner cérébral est-il FORMELLEMENT INDIQUÉ AVANT la réalisation d'une ponction lombaire ?",
    options: [
      "A. Présence d'une fièvre isolée à 39,5°C avec céphalées",
      "B. Raideur méningée franche avec signe de Brudzinski positif",
      "C. Signes de focalisation neurologique (déficit moteur, paralysie faciale centrale) ou coma profond (Glasgow ≤ 11)",
      "D. Présence de vomissements en jet sans signe déficitaire",
      "E. Photophobie intense avec phonophobie"
    ],
    correctAnswers: [2],
    explanation: "Le scanner avant la PL n'est indiqué qu'en cas de risque d'engagement cérébral : signes neurologiques déficitaires focaux, coma avec Glasgow ≤ 11, crises d'épilepsie persistantes ou récentes (< 24-48h), anomalies pupillaires. En l'absence de ces signes, la PL doit être effectuée sans délai sans imagerie préalable.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-16-05',
    courseId: 'crs-inf-16',
    questionNumber: 5,
    type: 'QCM',
    content: "L'administration concomitante de Dexaméthasone dans la prise en charge d'une méningite bactérienne aiguë est particulièrement indiquée pour quel germe ?",
    options: [
      "A. Listeria monocytogenes",
      "B. Streptococcus pneumoniae (pneumocoque)",
      "C. Pseudomonas aeruginosa",
      "D. Cryptococcus neoformans",
      "E. Mycobacterium tuberculosis"
    ],
    correctAnswers: [1],
    explanation: "La corticothérapie précoce (Dexaméthasone 10 mg chez l'adulte IV juste avant ou en même temps que la 1ère dose d'antibiotique) réduit significativement la mortalité et les séquelles auditives/neurologiques de la méningite à Streptococcus pneumoniae, et les séquelles chez l'enfant à Hib.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-06',
    courseId: 'crs-inf-16',
    questionNumber: 6,
    type: 'QCM',
    content: "Chez un patient de 65 ans diabétique suspect de méningite bactérienne aiguë, quelle molécule doit être systématiquement ajoutée à la C3G injectable à posologie méningée ?",
    options: [
      "A. Gentamicine",
      "B. Amoxicilline (ou Ampicilline)",
      "C. Ciprofloxacine",
      "D. Métronidazole",
      "E. Cotrimoxazole"
    ],
    correctAnswers: [1],
    explanation: "Chez les sujets > 50-60 ans, immunodéprimés, diabétiques, éthyliques ou femmes enceintes, Listeria monocytogenes doit être couverte. Listeria possède une résistance naturelle à toutes les céphalosporines. On ajoute impérativement l'Amoxicilline (200 mg/kg/j IV) +/- Gentamicine.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-07',
    courseId: 'crs-inf-16',
    questionNumber: 7,
    type: 'QCM',
    content: "Quelle est la prophylaxie recommandée pour les sujets contacts proches d'un cas index de méningite à Neisseria meningitidis (méningocoque) ?",
    options: [
      "A. Amoxicilline 1 g x 3/jour pendant 10 jours",
      "B. Rifampicine 600 mg x 2/jour pendant 2 jours par voie orale",
      "C. Ciprofloxacine 500 mg x 2/jour pendant 7 jours",
      "D. Doxycycline 100 mg/jour pendant 14 jours",
      "E. Vaccination isolée sans antibiothérapie"
    ],
    correctAnswers: [1],
    explanation: "La chimioprophylaxie de référence de l'entourage proche d'une méningite à méningocoque repose sur la Rifampicine orale (600 mg x 2/j pendant 48 heures chez l'adulte). En cas de contre-indication (grossesse, allergie, interactions) : Ceftriaxone IM dose unique ou Ciprofloxacine dose unique.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-08',
    courseId: 'crs-inf-16',
    questionNumber: 8,
    type: 'QCM',
    content: "Un examen direct du LCR au microscope montre de nombreux petits cocci Gram positif en diplocoques encapsulés ou courtes chaînettes. Quel est le micro-organisme identifié ?",
    options: [
      "A. Neisseria meningitidis",
      "B. Streptococcus pneumoniae",
      "C. Listeria monocytogenes",
      "D. Staphylococcus epidermidis",
      "E. Enterococcus faecalis"
    ],
    correctAnswers: [1],
    explanation: "Streptococcus pneumoniae (pneumocoque) est un coccus Gram positif encapsulé, typiquement disposé en paires (diplocoques lancéolés) ou courtes chaînettes. Neisseria meningitidis est un diplocoque Gram négatif en 'grains de café'.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-09',
    courseId: 'crs-inf-16',
    questionNumber: 9,
    type: 'QCM',
    content: "Chez un adulte présentant une méningite récidivante à pneumocoque après antécédent d'accident de la voie publique ancien, quelle étiologie doit être recherchée systématiquement ?",
    options: [
      "A. Un déficit congénital en fractions terminales du complément (C5-C9)",
      "B. Une brèche ostéo-méningée (fracture de l'étage antérieur du crâne ou du rocher)",
      "C. Une maladie de Bruton méconnue",
      "D. Un anévrysme du polygone de Willis",
      "E. Une candidose méningée subaiguë"
    ],
    correctAnswers: [1],
    explanation: "Les méningites récidivantes à pneumocoque chez l'adulte sont quasi-pathognomoniques d'une brèche ostéo-méningée traumatique ou spontanée (rhinorrhée ou otorrhée de LCS), communicant avec les cavités aériques de la base du crâne. Un scanner cérébral en coupes fines est indispensable.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-16-10',
    courseId: 'crs-inf-16',
    questionNumber: 10,
    type: 'QCM',
    content: "Quel examen paraclinique est recommandé de façon systématique chez tout patient convalescent d'une méningite purulente à pneumocoque avant sa sortie de l'hôpital ?",
    options: [
      "A. Une IRM médullaire corps entier",
      "B. Un audiogramme de contrôle pour dépistage précoce d'une surdité de perception",
      "C. Une ponction lombaire de contrôle systématique",
      "D. Une sérologie VIH et dosage des immunoglobulines",
      "E. Une électromyographie des quatre membres"
    ],
    correctAnswers: [1],
    explanation: "L'audiométrie est obligatoire et systématique au décours d'une méningite à pneumocoque (ainsi qu'à Hib), car la labyrinthite ossifiante et la surdité neurosensorielle sont des séquelles fréquentes (10 à 30% des cas) nécessitant un repérage précoce pour implant cochléaire éventuel.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-11',
    courseId: 'crs-inf-16',
    questionNumber: 11,
    type: 'QCM',
    content: "Parmi les propositions suivantes concernant Listeria monocytogenes, laquelle est VRAIE ?",
    options: [
      "A. C'est un diplocoque Gram négatif intracellulaire strict",
      "B. Elle est hautement sensible aux céphalosporines de troisième génération (C3G)",
      "C. Elle possède une mobilité caractéristique à 22°C et un tropisme pour le tronc cérébral (rhombencéphalite)",
      "D. Elle se transmet principalement par voie respiratoire aérienne",
      "E. Elle donne une méningite avec hypoglycorachie toujours absente"
    ],
    correctAnswers: [2],
    explanation: "Listeria monocytogenes est un bacille Gram positif aéro-anaérobie facultatif, mobile à température ambiante (20-22°C), responsable de listériose neuroméningée avec atteinte fréquente des paires crâniennes et du tronc cérébral (rhombencéphalite). Elle résiste naturellement aux C3G.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-16-12',
    courseId: 'crs-inf-16',
    questionNumber: 12,
    type: 'QCM',
    content: "Quelle est la durée usuelle du traitement antibiotique d'une méningite bactérienne à méningocoque sans complication ?",
    options: [
      "A. 48 à 72 heures",
      "B. 4 à 7 jours",
      "C. 14 à 21 jours",
      "D. 4 semaines",
      "E. 6 semaines"
    ],
    correctAnswers: [1],
    explanation: "La durée de traitement d'une méningite à méningocoque est courte : 4 à 7 jours de C3G parentérale suffisent en l'absence de complication. Pour le pneumocoque, la durée recommandée est de 10 à 14 jours, et pour Listeria monocytogenes de 21 jours minimum.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-13',
    courseId: 'crs-inf-16',
    questionNumber: 13,
    type: 'QCM',
    content: "Chez un nourrisson de 6 mois, quel signe clinique doit faire évoquer en priorité une méningite aiguë purulente même en l'absence de raideur de nuque nette ?",
    options: [
      "A. Épistaxis bilatérale spontanée",
      "B. Bombement anormal de la fontanelle antérieure au repos, fixité du regard, geignements",
      "C. Hyperthermie maligne isolée sans somnolence",
      "D. Hépatomégalie isolée lisse et indolore",
      "E. Présence d'un hippocratisme digital"
    ],
    correctAnswers: [1],
    explanation: "Chez le nourrisson avant fermeture des fontanelles, les signes méningés classiques sont souvent absents ou trompeurs. Le bombement de la fontanelle antérieure (en dehors des pleurs), l'hypotonie, les geignements, le refus du biberon et l'altération du teint sont les signes cardinaux de méningite.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-14',
    courseId: 'crs-inf-16',
    questionNumber: 14,
    type: 'QCM',
    content: "Dans quel cas une ponction lombaire de contrôle à 48 heures est-elle FORMELLEMENT RECOMMANDÉE ?",
    options: [
      "A. Méningite à méningocoque A guérie apyrétique",
      "B. Méningite à pneumocoque de sensibilité diminuée à la pénicilline (PSDP) ou évolution clinique défavorable sous traitement",
      "C. Tout purpura fulminans ayant bien répondu aux C3G",
      "D. Méningite virale de l'adulte jeune",
      "E. Absence totale de fièvre après 24 heures de Céfotaxime"
    ],
    correctAnswers: [1],
    explanation: "La PL de contrôle systématique à 48h n'est plus indiquée en routine, sauf dans des situations ciblées : pneumocoque de sensibilité diminuée aux C3G (CMI élevée), souche résistante, utilisation de Vancomycine, ou détérioration / absence d'amélioration clinique après 48h de traitement bien conduit.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-16-15',
    courseId: 'crs-inf-16',
    questionNumber: 15,
    type: 'QCM',
    content: "Quelle mesure d'isolement doit être appliquée dès la suspicion clinique d'une méningite à Neisseria meningitidis ?",
    options: [
      "A. Isolement contact strict pendant toute la durée de l'hospitalisation",
      "B. Isolement gouttelettes (masque chirurgical pour le personnel et le patient) pendant les premières 24 heures d'antibiothérapie efficace",
      "C. Isolement protecteur en chambre stérile à pression positive",
      "D. Simple lavage des mains sans masque",
      "E. Aucun isolement requis"
    ],
    correctAnswers: [1],
    explanation: "Le méningocoque se transmet par gouttelettes respiratoires interhumaines rapprochées. L'isolement 'Gouttelettes' (chambre individuelle, port de masque chirurgical dans un rayon de 1,5 m) est impératif dès l'admission et peut être levé après 24 heures d'antibiothérapie par C3G efficace.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-16',
    courseId: 'crs-inf-16',
    questionNumber: 16,
    type: 'QCM',
    content: "Quel sérogroupe de Neisseria meningitidis est le plus historiquement responsable de grandes vagues épidémiques dans la 'ceinture de la méningite' en Afrique subsaharienne ?",
    options: [
      "A. Sérogroupe B",
      "B. Sérogroupe A",
      "C. Sérogroupe C",
      "D. Sérogroupe Y",
      "E. Sérogroupe 29E"
    ],
    correctAnswers: [1],
    explanation: "Le sérogroupe A était le principal responsable des épidémies dévastatrices dans la ceinture subsaharienne africaine de Lapeyssonnie (désormais remarquablement contrôlé grâce au vaccin conjugué MenAfriVac). En Europe et Afrique du Nord, les sérogroupes B et C dominent, avec émergence des souches W et Y.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-16-17',
    courseId: 'crs-inf-16',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans le cadre de la déclaration obligatoire (DO) d'une méningite à méningocoque en Algérie, que doit faire le médecin traitant ?",
    options: [
      "A. Attendre le résultat définitif de la culture bactériologique et de l'antibiogramme à J5",
      "B. Signaler sans délai par téléphone ou fax le cas suspect à la direction de la santé (DSP / SEMEP) pour déclencher l'enquête épidémiologique et la prophylaxie de l'entourage",
      "C. Réaliser uniquement un courrier postal à la fin du mois",
      "D. Ne déclarer que si le patient décède",
      "E. Se contenter d'un mot dans le dossier médical d'hospitalisation"
    ],
    correctAnswers: [1],
    explanation: "La méningite à méningocoque est une maladie à déclaration obligatoire (MDO) en extrême urgence (signalement immédiat sans attendre la confirmation bactériologique définitive) pour permettre le contact tracing, la prophylaxie par Rifampicine et la vaccination ciblée de l'entourage.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-18',
    courseId: 'crs-inf-16',
    questionNumber: 18,
    type: 'QCM',
    content: "Quel facteur favorisant spécifique expose particulièrement aux infections invasives et récidivantes à Neisseria meningitidis ?",
    options: [
      "A. Déficit en sous-classes d'IgG2",
      "B. Déficit congénital en fractions terminales du complément (C5, C6, C7, C8, C9) ou de la properdine",
      "C. Insuffisance surrénalienne chronique",
      "D. Asplénie fonctionnelle sans hypogammaglobulinémie",
      "E. Déficit en glucose-6-phosphate déshydrogénase (G6PD)"
    ],
    correctAnswers: [1],
    explanation: "Le complexe d'attaque membranaire (MAC) formé par les fractions C5b à C9 du complément est essentiel pour la lyse des bactéries encapsulées du genre Neisseria. Les déficits en fractions terminales multiplient par plusieurs milliers le risque d'infection invasive à méningocoque.",
    difficulty: 'difficile'
  },
  {
    id: 'q-inf-16-19',
    courseId: 'crs-inf-16',
    questionNumber: 19,
    type: 'QCM',
    content: "Concernant la posologie de la Ceftriaxone dans les méningites purulentes de l'adulte, quelle est la dose journalière préconisée pour obtenir une concentration thérapeutique optimale dans le LCS ?",
    options: [
      "A. 1 g par jour en une perfusion",
      "B. 2 g par jour en deux prises",
      "C. 70 à 100 mg/kg/jour (soit habituellement 4 g par jour en 1 ou 2 injections)",
      "D. 12 g par jour en continu",
      "E. 200 mg par jour"
    ],
    correctAnswers: [2],
    explanation: "Le passage des bêta-lactamines à travers la barrière hémato-encéphalique nécessite de très fortes posologies : pour la Ceftriaxone, 70 à 100 mg/kg/j (usuellement 4 g/j chez l'adulte) ; pour le Céfotaxime, 200 à 300 mg/kg/j (soit 8 à 12 g/j en 4 à 6 perfusions).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-16-20',
    courseId: 'crs-inf-16',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle est la principale contre-indication TEMPORAIRE à la ponction lombaire immédiate nécessitant une réanimation préalable ?",
    options: [
      "A. Céphalées intenses avec photophobie",
      "B. Instabilité hémodynamique sévère (état de choc non contrôlé) ou détresse respiratoire aiguë",
      "C. Fièvre supérieure à 40°C",
      "D. Hyperleucocytose sanguine à 25 000/mm³",
      "E. Signe de Kernig bilatéral"
    ],
    correctAnswers: [1],
    explanation: "L'instabilité hémodynamique sévère (choc septique décompensé) et la détresse respiratoire aiguë contre-indiquent temporairement la manipulation et la flexion du rachis pour la PL. On administre les antibiotiques en urgence, on stabilise le patient en réanimation, et la PL est différée.",
    difficulty: 'facile'
  },

  // 5 Progressive Clinical Cases for Lesson 16
  {
    id: 'q-inf-16-c1',
    courseId: 'crs-inf-16',
    questionNumber: 21,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - ÉTAPE 1 : Un étudiant de 20 ans vivant en cité universitaire est amené aux urgences pour céphalées violentes d'apparition brutale, frissons et vomissements. À l'examen : T° 39,8°C, PA 100/60 mmHg, FC 120 bpm, raideur de nuque nette. L'examen cutané révèle 3 pétéchies au niveau des membres inférieurs et une macule purpurique violacée de 5 mm sur la cuisse gauche. Quelle est l'attitude immédiate la plus adaptée ?",
    options: [
      "A. Réaliser une PL immédiate puis attendre l'examen direct",
      "B. Prescrire un scanner cérébral pour vérifier l'absence d'engagement",
      "C. Injecter immédiatement 2 g de Ceftriaxone IV (ou IM) et appeler l'équipe de réanimation",
      "D. Administrer du Paracétamol et refaire un examen cutané dans 2 heures",
      "E. Pratiquer des hémocultures et attendre 1 heure avant antibiothérapie"
    ],
    correctAnswers: [2],
    explanation: "La présence d'un purpura nécrotique > 3 mm avec syndrome méningé fébrile signe un purpura fulminans probable. L'injection d'une C3G est prioritaire sur TOUT autre geste ou examen, y compris la PL qui sera différée.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-c2',
    courseId: 'crs-inf-16',
    questionNumber: 22,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - ÉTAPE 1 : Un homme de 52 ans sans antécédent consulte pour syndrome méningé fébrile franc. Pas de purpura, pas de signe de localisation neurologique, score de Glasgow à 15. Une ponction lombaire ramène un liquide opalescent sous pression. L'analyse montre : 3 200 leucocytes/mm³ (88% PNN), protéines 2,8 g/L, glycémie sanguine 6 mmol/L, glycorachie 1,1 mmol/L. L'examen direct révèle des diplocoques Gram négatif. Quel est le germe responsable ?",
    options: [
      "A. Streptococcus pneumoniae",
      "B. Neisseria meningitidis",
      "C. Listeria monocytogenes",
      "D. Escherichia coli",
      "E. Haemophilus influenzae"
    ],
    correctAnswers: [1],
    explanation: "Les diplocoques Gram négatif en grains de café intra et extra-leucocytaires correspondent typiquement à Neisseria meningitidis (méningocoque).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-16-c3',
    courseId: 'crs-inf-16',
    questionNumber: 23,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 - ÉTAPE 1 : Un homme de 62 ans, diabétique mal équilibré, présente depuis 3 jours un état fébrile progressif à 38,5°C avec désorientation, paralysie faciale périphérique droite et diplopie par atteinte du nerf abducens (VI). La PL montre un liquide légèrement trouble, 450 cellules/mm³ à 60% de PNN et 40% de monocytes, hyperprotéinorachie à 1,9 g/L, glycorachie à 1,5 mmol/L (glycémie 8 mmol/L). Quel traitement probabiliste urgent prescrivez-vous ?",
    options: [
      "A. Ceftriaxone seule 4 g/j",
      "B. Amoxicilline 200 mg/kg/j + Gentamicine 5 mg/kg/j (+/- Ceftriaxone)",
      "C. Ciprofloxacine 400 mg x 3/j",
      "D. Vancomycine seule 60 mg/kg/j",
      "E. Métronidazole 500 mg x 3/j"
    ],
    correctAnswers: [1],
    explanation: "L'âge (> 50 ans), le diabète, l'installation subaiguë, la formule cellulaire panachée et surtout l'atteinte des paires crâniennes (rhombencéphalite) sont très évocateurs de Listeria monocytogenes. L'antibiothérapie de choix repose sur l'Amoxicilline forte dose associée à la Gentamicine.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-16-c4',
    courseId: 'crs-inf-16',
    questionNumber: 24,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 - ÉTAPE 1 : Une patiente de 28 ans présente une méningite purulente à pneumocoque confirmée par culture du LCS. On retrouve dans ses antécédents un traumatisme crânien avec fracture de l'ethmoïde survenu 4 ans auparavant. Elle signale un écoulement clair unilatéral par la narine gauche majoré lors de l'antéflexion de la tête. Quel examen paraclinique confirme la présence de LCS dans ce liquide nasal ?",
    options: [
      "A. Le dosage de la procalcitonine dans le liquide nasal",
      "B. Le dosage de la bêta-2-transferrine (ou bêta-trace protéine) dans le liquide nasal",
      "C. La numération formule sanguine",
      "D. Le test de sédimentation globulaire",
      "E. L'électrophorèse des protéines urinaires"
    ],
    correctAnswers: [1],
    explanation: "La détection de la bêta-2 transferrine (ou de la bêta-trace protéine) dans une sécrétion nasale ou auriculaire est le test de référence pour affirmer avec certitude une fuite de liquide cérébrospinal (rhinorrhée / otorrhée de LCS).",
    difficulty: 'difficile'
  },
  {
    id: 'q-inf-16-c5',
    courseId: 'crs-inf-16',
    questionNumber: 25,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 - ÉTAPE 1 : Un nourrisson de 4 mois non vacciné est hospitalisé pour méningite purulente aiguë avec bombement fontanellaire. La culture du LCR isole un Haemophilus influenzae sérotype b sécréteur de pénicillinase. Quel est le traitement de choix et la mesure préventive pour la fratrie de moins de 5 ans non vaccinée ?",
    options: [
      "A. Ampicilline pour le nourrisson ; pas de prophylaxie pour la fratrie",
      "B. Ceftriaxone injectable 100 mg/kg/j pour le nourrisson ; Rifampicine orale pour toute la famille avec un enfant non vacciné",
      "C. Pénicilline G à haute dose ; Doxycycline pour les frères et soeurs",
      "D. Érythromycine orale pendant 14 jours pour tous",
      "E. Gentamicine en monothérapie pendant 21 jours"
    ],
    correctAnswers: [1],
    explanation: "Haemophilus influenzae b résistant par pénicillinase se traite par une C3G injectable (Céfotaxime ou Ceftriaxone). La présence dans le foyer d'enfants non ou incomplètement vaccinés de moins de 4-5 ans justifie une chimioprophylaxie par Rifampicine (20 mg/kg/j pendant 4 jours) pour éradiquer le portage nasopharyngé.",
    difficulty: 'moyen'
  }
];

export const INFECTIO_LESSON_16_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-16-mindmap',
    courseId: 'crs-inf-16',
    title: 'Mind Map : Arbre Décisionnel des Méningites Purulentes & Purpura Fulminans',
    type: 'mindmap',
    content: `
# MIND MAP : MÉNINGITES PURULENTES & URGENCE THÉRAPEUTIQUE
*Référence Pédagogique - Infectiologie & Urgences Médicales Algérie*

## 1. TRIADE CLINIQUE CARDINALE
- **Syndrome méningé** : Céphalées intenses 'en casque', vomissements en jet sans nausée, photophobie, phonophobie.
- **Signes physiques** : Raideur de nuque, signe de Kernig (douleur à l'extension du genou), signe de Brudzinski (flexion involontaire des cuisses à la flexion de la nuque).
- **Syndrome infectieux** : Fièvre élevée (39-40°C), frissons, tachycardie, courbatures.

## 2. ARBRE DÉCISIONNEL D'URGENCE (REGLE D'OR)
- **Purpura fulminans (macule nécrotique ≥ 3 mm)** -> **C3G IMMÉDIATE (IV/IM)** -> SAMU/Réa -> Pas de PL préalable !
- **Signes d'engagement cérébral ou focalisation neurologique** -> Hémocultures -> ATB probabiliste + Dexaméthasone -> Scanner cérébral -> PL secondaire si scanner normal.
- **Tableau typique sans signe de gravité neurologique** -> PL immédiate -> Analyse LCS -> ATB + Dexaméthasone sans délai.

## 3. CYTOCHIMIE COMPARATIVE DU LCS
| Paramètre | Normal | Méningite Purulente | Méningite à Listeria | Méningite Virale |
| :--- | :--- | :--- | :--- | :--- |
| **Aspect** | Eau de roche | Trouble à purulent | Clair ou opalescent | Clair (eau de roche) |
| **Cytologie** | < 5 / mm³ | > 1 000 / mm³ (> 80% PNN) | 100 - 1 000 (panachée PNN/Lympho) | 50 - 500 (> 80% Lymphocytes) |
| **Protéinorachie**| 0,15 - 0,45 g/L | > 1,5 à 4 g/L | > 1 à 2 g/L | < 1 g/L (normale ou discrète) |
| **Glycorachie** | 50-60% glycémie | **Effondrée (< 40% glycémie)** | **Basse (< 40% glycémie)** | **Normale (> 50% glycémie)** |
| **Lactates** | < 2,5 mmol/L | **Élevés (> 3,2 mmol/L)** | **Élevés** | Normaux (< 2,5 mmol/L) |

## 4. SCHÉMAS THÉRAPEUTIQUES DE RÉFÉRENCE
- **Adulte immunocompétent < 60 ans** :
  - Ceftriaxone 70-100 mg/kg/j (ou Céfotaxime 200-300 mg/kg/j)
  - + Dexaméthasone 10 mg IV avant ou avec la première injection (poursuivie 4 jours si pneumocoque).
- **Adulte > 60 ans / Immunodéprimé / Femme enceinte** :
  - C3G + Amoxicilline 200 mg/kg/j (couverture de Listeria) +/- Gentamicine 5 mg/kg/j.
- **Nourrisson / Enfant** :
  - Céfotaxime 200-300 mg/kg/j (+/- Vancomycine 60 mg/kg/j si suspicion de PSDP).
`
  },
  {
    id: 'res-inf-16-astuces',
    courseId: 'crs-inf-16',
    title: 'Astuces Concours & Pièges Fréquents - Méningites Purulentes',
    type: 'astuce',
    content: `
# ASTUCES & PIÈGES AU CONCOURS (RÉSUMÉ MÉNINGITES PURULENTES)
*Par Dr. LAIDANI.M - Spécialité Médicale Algérie*

### ⚠️ PIÈGE N°1 : La fausse bonne idée du scanner cérébral systématique
- **Règle absolue** : La majorité des méningites purulentes N'ONT PAS BESOIN de scanner avant la PL !
- Faire un scanner retarde l'antibiothérapie de plusieurs heures et aggrave considérablement la mortalité.
- **Seules indications du scanner préalable** : Déficit moteur focal, coma profond (Glasgow ≤ 11), crises convulsives récentes, instabilité pupillaire.

### ⚠️ PIÈGE N°2 : La Listeria et le piège des C3G
- Les C3G sont inefficaces à 100% sur Listeria monocytogenes (résistance naturelle liée aux PBP).
- Si le sujet est âgé, diabétique ou enceinte : **PENSEZ TOUJOURS À AJOUTER L'AMOXICILLINE**.

### ⚠️ PIÈGE N°3 : Le purpura fulminans au QCM
- QCM classique : « Que faites-vous en premier ? A. PL, B. Scanner, C. Ceftriaxone IV/IM ».
- **Réponse obligatoire** : C3G immédiate, même au domicile ou en cabinet de ville avant l'évacuation !
`
  }
];

// Lesson 17: Brucellose
export const INFECTIO_LESSON_17_QUESTIONS: Question[] = [
  {
    id: 'q-inf-17-01',
    courseId: 'crs-inf-17',
    questionNumber: 1,
    type: 'QCM',
    content: "Quelle espèce du genre Brucella est la plus fréquemment responsable des formes graves et de la majorité des cas humains en Algérie et dans le bassin méditerranéen ?",
    options: [
      "A. Brucella abortus (réservoir bovin)",
      "B. Brucella melitensis (réservoir ovin et caprin)",
      "C. Brucella suis (réservoir porcin)",
      "D. Brucella canis (réservoir canin)",
      "E. Brucella ovis"
    ],
    correctAnswers: [1],
    explanation: "Brucella melitensis (hébergée par les chèvres et les moutons) est de loin l'espèce la plus virulente, la plus invasive pour l'homme et la cause prédominante de la brucellose humaine en Algérie et dans le pourtour méditerranéen.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-02',
    courseId: 'crs-inf-17',
    questionNumber: 2,
    type: 'QCM',
    content: "Quel est le mode de contamination indirect le plus fréquent de la brucellose humaine en milieu communautaire ?",
    options: [
      "A. La consommation de viande bien cuite",
      "B. L'ingestion de lait cru non pasteurisé ou de fromages frais traditionnels (Lben, jben)",
      "C. Les piqûres de tiques de bétail",
      "D. L'inhalation de poussières de laine lavée",
      "E. La morsure d'animaux domestiques"
    ],
    correctAnswers: [1],
    explanation: "La contamination indirecte digestive par ingestion de lait cru d'ovin ou de caprin non bouilli et de dérivés laitiers frais traditionnels (fromage blanc, lben, beurre artisanal) représente plus de 80% des contaminations en population générale.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-03',
    courseId: 'crs-inf-17',
    questionNumber: 3,
    type: 'QCM',
    content: "La triade clinique caractéristique de la phase aiguë septicémique de la brucellose est la fièvre sudoro-algique. Quels sont ses éléments constitutifs ?",
    options: [
      "A. Fièvre hectique, diarrhée profuse et érythème noueux",
      "B. Fièvre ondulante, sueurs nocturnes profuses d'odeur de 'paille mouillée', et arthro-myalgies diffuses",
      "C. Fièvre en plateau, épistaxis et taches rosées lenticulaires",
      "D. Fièvre continue avec ictère flamboyant et oligo-anurie",
      "E. Accès fébriles tierces réguliers avec splénomégalie isolée"
    ],
    correctAnswers: [1],
    explanation: "La brucellose aiguë septicémique se manifeste classiquement par la fièvre ondulante sudoro-algique : ondulations thermiques fébriles de 10-15 jours, sueurs nocturnes profuses caractéristiques dites d'odeur de 'paille mouillée', et algies diffuses (rachialgies, myalgies, arthralgies fluctuantes).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-04',
    courseId: 'crs-inf-17',
    questionNumber: 4,
    type: 'QCM',
    content: "Parmi les localisations ostéo-articulaires de la brucellose subaiguë focalisée, quelle est la plus classique et caractéristique au rachis ?",
    options: [
      "A. Cervicarthrose C5-C6",
      "B. Spondylodiscite lombaire (L3-L4 ou L4-L5) avec signe du pont osseux de Pedro Pons",
      "C. Tassement vertébral thoracique pur D1-D2 sans atteinte discale",
      "D. Sacro-iliite bilatérale ankylosante symétrique précoce",
      "E. Scoliose lombaire aiguë purulente"
    ],
    correctAnswers: [1],
    explanation: "La spondylodiscite brucellienne touche préférentiellement l'étage lombaire (L3-L4 ou L4-L5). Radiologiquement, elle se caractérise par l'atteinte du coin antéro-supérieur de la vertèbre et l'ostéophytose caractéristique dite de 'Pedro Pons'.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-17-05',
    courseId: 'crs-inf-17',
    questionNumber: 5,
    type: 'QCM',
    content: "Quelle précaution microbiologique particulière est impérative lors de l'envoi d'hémocultures au laboratoire chez un patient suspect de brucellose ?",
    options: [
      "A. Congélation immédiate à -80°C",
      "B. Prévenir impérativement le laboratoire de la suspicion diagnostique (bactérie de classe 3 à haut risque de contamination accidentelle du personnel de laboratoire et nécessité de culture prolongée 21 à 30 jours sur milieu de Castaneda)",
      "C. Réaliser le prélèvement uniquement lors de l'apyrexie matinale",
      "D. Ne prélever que sur tube hépariné",
      "E. Incubation exclusive en anaérobiose stricte"
    ],
    correctAnswers: [1],
    explanation: "Brucella est une bactérie hautement infectieuse par aérosolisation (danger biologique de laboratoire de classe 3). De plus, sa croissance est lente (jusqu'à 3-4 semaines), imposant de maintenir les hémocultures 21 à 30 jours sur milieux biphasiques de Castaneda.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-06',
    courseId: 'crs-inf-17',
    questionNumber: 6,
    type: 'QCM',
    content: "Le sérodiagnostic de Wright est la réaction sérologique historique de référence de la brucellose. Quel titre d'agglutination est retenu comme seuil de positivité significative en zone d'endémie ?",
    options: [
      "A. 1/10",
      "B. 1/20",
      "C. 1/80 ou 1/160",
      "D. 1/1280",
      "E. 1/10 000"
    ],
    correctAnswers: [2],
    explanation: "Le sérodiagnostic de Wright (séromagglutination) dépiste principalement les anticorps totaux (surtout IgM). Un titre ≥ 1/80 (ou ≥ 1/160 en zone d'endémie comme l'Algérie) témoigne d'une infection aiguë active.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-07',
    courseId: 'crs-inf-17',
    questionNumber: 7,
    type: 'QCM',
    content: "Quelle anomalie sérologique peut conduire à un faux négatif du sérodiagnostic de Wright à faible dilution en présence d'une très forte charge d'anticorps ?",
    options: [
      "A. Le phénomène d'activation complémentaire",
      "B. Le phénomène de zone (ou effet prozone)",
      "C. La lyse précoce des hématies de mouton",
      "D. L'absence totale d'antigènes O",
      "E. La présence de cryoglobulines"
    ],
    correctAnswers: [1],
    explanation: "Le phénomène de prozone correspond à un excès d'anticorps par rapport à l'antigène bactérien qui inhibe l'agglutination aux faibles dilutions, donnant un faux résultat négatif. Il est résolu par la dilution systématique du sérum au-delà de 1/320.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-17-08',
    courseId: 'crs-inf-17',
    questionNumber: 8,
    type: 'QCM',
    content: "Quel est le traitement antibiotique oral standard de référence de la brucellose aiguë septicémique chez l'adulte sans foyer (recommandations OMS) ?",
    options: [
      "A. Amoxicilline 1 g x 3/jour pendant 10 jours",
      "B. Doxycycline 200 mg/jour + Rifampicine 600-900 mg/jour pendant 6 semaines",
      "C. Ciprofloxacine en monothérapie pendant 14 jours",
      "D. Métronidazole + Spiramycine pendant 3 semaines",
      "E. Pénicilline V pendant 6 semaines"
    ],
    correctAnswers: [1],
    explanation: "L'OMS recommande en première intention pour la brucellose aiguë non compliquée de l'adulte l'association orale : Doxycycline (200 mg/j) + Rifampicine (600 à 900 mg/j) pendant 6 semaines (42 jours) sans interruption pour éviter les rechutes.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-09',
    courseId: 'crs-inf-17',
    questionNumber: 9,
    type: 'QCM',
    content: "Chez la femme enceinte au deuxième trimestre atteinte de brucellose aiguë, quelle antibiothérapie doit être prescrite compte tenu des contre-indications médicamenteuses ?",
    options: [
      "A. Doxycycline + Streptomycine",
      "B. Rifampicine + Cotrimoxazole (ou Rifampicine seule / associée à la Ceftriaxone selon le terme)",
      "C. Ciprofloxacine + Lévofloxacine",
      "D. Tétracycline forte dose",
      "E. Chloramphénicol"
    ],
    correctAnswers: [1],
    explanation: "Les cyclines sont formellement contre-indiquées chez la femme enceinte (toxicité osseuse et dyschromie dentaire fœtale) et les aminosides sont ototoxiques. On utilise l'association Rifampicine + Cotrimoxazole (ou Rifampicine + Ceftriaxone au 3ème trimestre).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-17-10',
    courseId: 'crs-inf-17',
    questionNumber: 10,
    type: 'QCM',
    content: "Quelle est la localisation viscérale focalisée la plus rare mais la plus redoutable et la principale cause de mortalité dans la brucellose ?",
    options: [
      "A. L'orchi-épididymite unilatérale",
      "B. L'endocardite infectieuse brucellienne (à prédominance aortique)",
      "C. La bursite prépatellaire",
      "D. La sacro-iliite unilatérale aiguë",
      "E. L'uvéite antérieure résolutive"
    ],
    correctAnswers: [1],
    explanation: "L'endocardite brucellienne (< 2% des cas) est la complication la plus grave et la cause majeure de décès. Elle touche préférentiellement la valve aortique et nécessite une poly-antibiothérapie prolongée associée fréquemment au remplacement valvulaire chirurgical.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-11',
    courseId: 'crs-inf-17',
    questionNumber: 11,
    type: 'QCM',
    content: "Concernant la neurobrucellose, quelle présentation clinique et du liquide cérébrospinal est la plus caractéristique ?",
    options: [
      "A. Méningite purulente à 10 000 PNN/mm³ avec polynucléose sanguine",
      "B. Méningite ou méningo-encéphalite subaiguë à liquide clair, lymphocytaire, hyperprotéinorachique et hypoglycorachique",
      "C. Abcès cérébral amibien sous-dural",
      "D. Hémorragie méningée par rupture anévrysmale mycotique sans fièvre",
      "E. Normocytose avec protéinorachie normale"
    ],
    correctAnswers: [1],
    explanation: "La neurobrucellose se présente sous forme d'une méningite ou d'une méningo-radiculite subaiguë/chronique à liquide clair lymphocytaire avec hyperprotéinorachie nette et hypoglycorachie modérée.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-17-12',
    courseId: 'crs-inf-17',
    questionNumber: 12,
    type: 'QCM',
    content: "La 'brucellose chronique afocale' (dite brucellose d'effort ou patraquerie brucellienne) se définit par :",
    options: [
      "A. La persistance d'hémocultures positives à chaque poussée fébrile",
      "B. Une asthénie physique et psychique majeure, des algies erratiques polymorphes, sans fièvre ni foyer infectieux évolutif décelable",
      "C. La destruction rapide des articulations coxofémorales",
      "D. Une splénomégalie géante avec hypersplénisme franc",
      "E. Une anémie hémolytique auto-immune fulminante"
    ],
    correctAnswers: [1],
    explanation: "La brucellose chronique se caractérise par la triade de patraquerie : asthénie globale prédominante, algies fluctuantes multifocales (rachis, articulations) et dystonie neurovégétative, en l'absence de foyer actif et avec hémocultures négatives.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-13',
    courseId: 'crs-inf-17',
    questionNumber: 13,
    type: 'QCM',
    content: "Quel test d'agglutination rapide sur lame utilisant un antigène tamponné acidifié à pH 3,65 est largement utilisé pour le dépistage d'urgence de la brucellose humaine et animale ?",
    options: [
      "A. Le test au latex CRP",
      "B. L'épreuve à l'antigène tamponné (EAT) ou test au Rose Bengale",
      "C. Le test de Coombs indirect",
      "D. La réaction de VDRL",
      "E. Le test de Paul-Bunnell-Davidsohn"
    ],
    correctAnswers: [1],
    explanation: "Le test au Rose Bengale (ou épreuve à l'antigène tamponné EAT) est un test d'agglutination sur lame très rapide, hautement sensible (près de 99%), idéal pour le dépistage précoce de la brucellose en pratique courante.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-14',
    courseId: 'crs-inf-17',
    questionNumber: 14,
    type: 'QCM',
    content: "Quelle est la durée recommandée du traitement antibiotique d'une spondylodiscite brucellienne confirmée sans complication neurologique compressive ?",
    options: [
      "A. 10 jours",
      "B. 3 semaines",
      "C. Au minimum 3 mois (12 semaines) à 6 mois",
      "D. 2 ans continus",
      "E. 5 jours par voie parentérale"
    ],
    correctAnswers: [2],
    explanation: "Pour les localisations osseuses (spondylodiscite, ostéite), la durée de traitement doit être prolongée à un minimum de 3 mois (souvent 3 à 6 mois) par Doxycycline + Rifampicine (parfois complétée par un aminoside les premières semaines).",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-17-15',
    courseId: 'crs-inf-17',
    questionNumber: 15,
    type: 'QCM',
    content: "Chez l'enfant de moins de 8 ans atteint de brucellose aiguë, quelle molécule alternative est préférée pour remplacer la Doxycycline ?",
    options: [
      "A. Ciprofloxacine",
      "B. Cotrimoxazole (Sulfaméthoxazole-Triméthoprime)",
      "C. Lévofloxacine",
      "D. Tétracycline ordinaire",
      "E. Minocycline"
    ],
    correctAnswers: [1],
    explanation: "Avant 8 ans, les tétracyclines sont contre-indiquées en raison du risque de coloration définitive de l'émail dentaire et d'hypoplasie osseuse. Le traitement repose sur l'association Cotrimoxazole + Rifampicine pendant 6 semaines.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-16',
    courseId: 'crs-inf-17',
    questionNumber: 16,
    type: 'QCM',
    content: "L'orchi-épididymite brucellienne présente quelle particularité clinique par rapport aux orchi-épididymites banales à entérobactéries ?",
    options: [
      "A. Elle est constamment bilatérale et nécrosante d'emblée",
      "B. Elle est souvent unilatérale, d'évolution subaiguë, s'accompagnant de la persistance de l'état général altéré et de sueurs nocturnes",
      "C. Elle s'accompagne d'une leucocyturie massive aseptique",
      "D. Elle ne répond jamais aux antibiotiques",
      "E. Elle s'associe à un écoulement urétral purulent profus"
    ],
    correctAnswers: [1],
    explanation: "L'orchi-épididymite brucellienne est une localisation fréquente chez l'homme jeune (5 à 10% des brucelloses). Elle est typiquement unilatérale, subaiguë, survenant dans un contexte d'asthénie et de sueurs nocturnes, sans urétrite associée.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-17-17',
    courseId: 'crs-inf-17',
    questionNumber: 17,
    type: 'QCM',
    content: "Quel examen d'imagerie moderne est le plus sensible pour détecter précocement une spondylodiscite brucellienne et apprécier l'extension épidurale ?",
    options: [
      "A. La radiographie standard du rachis face et profil",
      "B. L'échographie abdominale haute",
      "C. L'Imagerie par Résonance Magnétique (IRM) du rachis",
      "D. Le transit œso-gastro-duodénal",
      "E. La densitométrie osseuse"
    ],
    correctAnswers: [2],
    explanation: "L'IRM rachidienne est l'examen de choix précoce (hypointensité T1, hyperintensité T2 du disque et des corps vertébraux adjacents, prise de contraste au Gadolinium) et permet de dépister un abcès épidural débutant avant les signes radiographiques standards souvent tardifs.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-18',
    courseId: 'crs-inf-17',
    questionNumber: 18,
    type: 'QCM',
    content: "En Algérie, la brucellose humaine chez un vétérinaire ou un employé d'abattoir est reconnue comme :",
    options: [
      "A. Un accident de la circulation",
      "B. Une maladie professionnelle indemnisable au titre du tableau n° 24 de la sécurité sociale",
      "C. Une infection opportuniste sans droit à indemnisation",
      "D. Une simple affection de longue durée non professionnelle",
      "E. Une faute inexcusable du salarié"
    ],
    correctAnswers: [1],
    explanation: "La brucellose professionnelle (vétérinaires, éleveurs, bouchers, équarrisseurs, personnel de laboratoire) est une maladie professionnelle reconnue et indemnisable au titre du tableau légal des maladies professionnelles.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-19',
    courseId: 'crs-inf-17',
    questionNumber: 19,
    type: 'QCM',
    content: "Quelle anomalie hématologique biologique courante est observée lors de la phase aiguë d'une brucellose ?",
    options: [
      "A. Hyperleucocytose majeure à 30 000 PNN/mm³",
      "B. Leucopénie ou normoleucocytose avec neutropénie relative et lymphocytose relative, thrombocytopénie modérée",
      "C. Polyglobulie vraie de Vaquez",
      "D. Thrombocytose majeure à 1 000 000/mm³",
      "E. Agranulocytose toxique d'emblée"
    ],
    correctAnswers: [1],
    explanation: "Comme dans la majorité des infections à germes intracellulaires, l'hémogramme de la brucellose aiguë montre classiquement une leucopénie ou formule normale avec neutropénie et lymphocytose relative, parfois une anémie et une thrombopénie modérées.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-17-20',
    courseId: 'crs-inf-17',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle mesure de santé publique vétérinaire est la plus efficace pour éradiquer la brucellose à l'échelle d'un pays ?",
    options: [
      "A. L'administration d'antibiotiques à dose massive dans l'alimentation du bétail",
      "B. Le dépistage sérologique systématique du cheptel avec abattage indemnisé des animaux séropositifs et la vaccination des jeunes femelles (vaccin Rev 1 / B19)",
      "C. L'interdiction complète de l'élevage ovin",
      "D. La congélation systématique des carcasses animales",
      "E. La désinfection des pâturages par épandage chimique"
    ],
    correctAnswers: [1],
    explanation: "L'éradication de la brucellose repose sur la politique vétérinaire : prophylaxie sanitaire (dépistage sérologique du troupeau, abattage des bêtes infectées avec compensation financière des éleveurs) et prophylaxie médicale (vaccination des génisses et antenaises par souches atténuées comme Rev 1).",
    difficulty: 'facile'
  },

  // 5 Progressive Clinical Cases for Lesson 17
  {
    id: 'q-inf-17-c1',
    courseId: 'crs-inf-17',
    questionNumber: 21,
    type: 'Cas Clinique',
    clinicalCaseNumber: 1,
    content: "CAS 1 - ÉTAPE 1 : Un éleveur d'ovins de 44 ans résidant à Djelfa consulte pour une fièvre évoluant depuis 3 semaines, caractérisée par des poussées thermiques vespérales à 39°C entrecoupées de rémissions, des sueurs nocturnes abondantes d'odeur de foin mouillé et des courbatures généralisées. À l'examen : T° 38,8°C, hépato-splénomégalie modérée indolore, pas de foyer infectieux cutané ou pulmonaire. Quel premier test sérologique rapide en cabinet permet d'orienter le diagnostic en quelques minutes ?",
    options: [
      "A. Le test de Wright avec dilution",
      "B. Le test au Rose Bengale (épreuve à l'antigène tamponné)",
      "C. L'hémoculture sur milieu Castaneda",
      "D. L'intradermoréaction à la tuberculine",
      "E. Le test de Widal et Félix"
    ],
    correctAnswers: [1],
    explanation: "Le test au Rose Bengale est un test d'agglutination rapide sur lame réalisable en 4 minutes en consultation, doté d'une excellente sensibilité pour le dépistage de la brucellose aiguë.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-c2',
    courseId: 'crs-inf-17',
    questionNumber: 22,
    type: 'Cas Clinique',
    clinicalCaseNumber: 2,
    content: "CAS 2 - ÉTAPE 1 : Le test au Rose Bengale revient franchement positif chez cet éleveur. Le sérodiagnostic de Wright confirme le diagnostic avec un titre à 1/320. Il ne présente aucune localisation clinique cardiaque ou neurologique. Quelle est la prescription thérapeutique de première intention conforme aux recommandations de l'OMS ?",
    options: [
      "A. Amoxicilline 3 g/j pendant 15 jours",
      "B. Doxycycline 100 mg x 2/jour + Rifampicine 900 mg/jour en une prise à jeun pendant 6 semaines",
      "C. Ciprofloxacine 500 mg x 2/jour pendant 3 semaines",
      "D. Doxycycline en monothérapie pendant 3 semaines",
      "E. Gentamicine IM seule pendant 10 jours"
    ],
    correctAnswers: [1],
    explanation: "Le traitement standard de la brucellose aiguë sans foyer repose sur la bithérapie Doxycycline 200 mg/j + Rifampicine 900 mg/j pendant 6 semaines entières (42 jours).",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-c3',
    courseId: 'crs-inf-17',
    questionNumber: 23,
    type: 'Cas Clinique',
    clinicalCaseNumber: 3,
    content: "CAS 3 - ÉTAPE 1 : Un berger de 55 ans présente depuis 2 mois des lombalgies basses inflammatoires invalidantes insomniantes. L'examen note une raideur lombaire segmentaire marquée. L'IRM montre un hypersignal T2 et un rehaussement après injection au niveau du disque L4-L5 et des plateaux adjacents avec érosion du rebord antéro-supérieur de L5. La sérologie brucellienne est positive. Quel est le diagnostic et la durée minimale de traitement ?",
    options: [
      "A. Hernie discale simple exclue ; traitement chirurgical immédiat",
      "B. Spondylodiscite brucellienne ; traitement médical par antibiothérapie combinée pendant au moins 3 mois (12 semaines)",
      "C. Mal de Pott tuberculeux d'emblée résistant ; quadrithérapie 18 mois",
      "D. Métastase osseuse vertébrale lytique ; chimiothérapie",
      "E. Spondylarthrite ankylosante HLA-B27 ; anti-TNF alpha"
    ],
    correctAnswers: [1],
    explanation: "Il s'agit d'une spondylodiscite brucellienne lombaire (signe de Pedro Pons). L'atteinte osseuse impose une prolongation de l'antibiothérapie combinée (Doxycycline + Rifampicine +/- aminoside initial) pendant 3 à 6 mois minimum.",
    difficulty: 'moyen'
  },
  {
    id: 'q-inf-17-c4',
    courseId: 'crs-inf-17',
    questionNumber: 24,
    type: 'Cas Clinique',
    clinicalCaseNumber: 4,
    content: "CAS 4 - ÉTAPE 1 : Un jeune homme de 22 ans consommant régulièrement du fromage frais artisanal non pasteurisé développe une tuméfaction unilatérale douloureuse de la bourse droite avec peau scrotale rouge et chaude. L'échographie scrotale montre une orchi-épididymite droite sans anomalie du flux Doppler testiculaire. Les ECBU et sérologies gonocoque/chlamydia sont négatifs, mais le sérodiagnostic de Wright est positif à 1/640. Quelle est la conduite à tenir ?",
    options: [
      "A. Orchidectomie droite immédiate",
      "B. Traitement médical par Doxycycline + Rifampicine pendant 6 semaines avec port de suspensoir et antalgiques",
      "C. Ponction-aspiration du testicule sous anesthésie locale",
      "D. Céfotaxime IV pendant 48 heures sans relais oral",
      "E. Abstention thérapeutique car résolution toujours spontanée"
    ],
    correctAnswers: [1],
    explanation: "L'orchi-épididymite brucellienne guérit sous traitement médical antibiotique spécifique de 6 semaines (Doxycycline + Rifampicine). La chirurgie n'est indiquée qu'en cas exceptionnel d'abcédation scrotale non résolutive.",
    difficulty: 'facile'
  },
  {
    id: 'q-inf-17-c5',
    courseId: 'crs-inf-17',
    questionNumber: 25,
    type: 'Cas Clinique',
    clinicalCaseNumber: 5,
    content: "CAS 5 - ÉTAPE 1 : Une fillette de 6 ans vivant dans une zone pastorale présente une fièvre récurrente avec sueurs et hépatomégalie. Le diagnostic de brucellose aiguë est confirmé par sérologie. Quelle prescription antibiotique adaptez-vous en tenant compte strictement de son âge ?",
    options: [
      "A. Doxycycline 100 mg/j + Rifampicine 15 mg/kg/j",
      "B. Cotrimoxazole (Sulfaméthoxazole 40 mg/kg/j + Triméthoprime 8 mg/kg/j) associé à la Rifampicine (15 mg/kg/j) pendant 6 semaines",
      "C. Ciprofloxacine pendant 3 mois",
      "D. Clarithromycine en monothérapie",
      "E. Streptomycine seule pendant 6 semaines"
    ],
    correctAnswers: [1],
    explanation: "Chez l'enfant de moins de 8 ans, les cyclines sont contre-indiquées (dents jaunes, troubles de croissance osseuse). Le traitement recommandé par l'OMS et les sociétés de pédiatrie est l'association Cotrimoxazole + Rifampicine pendant 6 semaines.",
    difficulty: 'moyen'
  }
];

export const INFECTIO_LESSON_17_RESOURCES: CourseResource[] = [
  {
    id: 'res-inf-17-mindmap',
    courseId: 'crs-inf-17',
    title: 'Mind Map : Brucellose (Épidémiologie, Clinique, Diagnostic & Thérapeutique)',
    type: 'mindmap',
    content: `
# MIND MAP : BRUCELLOSE HUMAINE (ZOONOSE MÉDITERRANÉENNE)
*Conforme au Programme Médical National & Concours Résidanat Algérie*

## 1. BACTÉRIOLOGIE & TRANSMISSION
- **Germe** : *Brucella melitensis* (chèvres, moutons - 90% des cas en Algérie), *B. abortus* (vaches). Petit coccobacille Gram négatif, intracellulaire facultatif, aérobie strict.
- **Transmission directe** : Cutanéo-muqueuse professionnelle (vétérinaires, éleveurs, abattoirs, mise bas, avortements du bétail).
- **Transmission indirecte** : Digestive (lait cru de brebis/chèvre, fromage blanc artisanal 'jben', petit lait 'lben').

## 2. LES 3 PHASES CLINIQUES
- **Phase 1 : Aiguë Septicémique**
  - Fièvre sudoro-algique : Fièvre ondulante (ondulations de 10-15 jours), sueurs nocturnes d'odeur de 'paille mouillée', arthro-myalgies diffuses.
  - Hépato-splénomégalie, micro-adénopathies.
- **Phase 2 : Subaiguë Focalisée (Localisée)**
  - *Ostéo-articulaire (80%)* : Spondylodiscite lombaire (L3-L4/L4-L5, signe de Pedro Pons), sacro-iliite unilatérale.
  - *Génitale* : Orchi-épididymite unilatérale subaiguë du sujet jeune.
  - *Neurologique* : Méningite à liquide clair lymphocytaire, myélite, neuropathie.
  - *Cardiovasculaire* : Endocardite aortique (rare mais mortelle).
- **Phase 3 : Chronique Afocale (Patraquerie)**
  - Asthénie chronique invalidante + algies diverses erratiques + dystonie neurovégétative (hémocultures négatives).

## 3. DIAGNOSTIC BIOLOGIQUE
- **Dépistage rapide** : Rose Bengale (EAT) -> positif en 4 min (très sensible).
- **Confirmation sérologique** : Sérodiagnostic de Wright (positif si ≥ 1/80 ou 1/160). Attention au phénomène de prozone.
- **Confirmation directe** : Hémocultures sur milieu de Castaneda gardées 21 à 30 jours (danger de contamination laboratoire classe 3).

## 4. SCHÉMAS THÉRAPEUTIQUES
- **Forme aiguë standard (adulte)** :
  - **Doxycycline 200 mg/j + Rifampicine 600-900 mg/j pendant 6 semaines (42 jours)**.
  - Alternative : Doxycycline 6 semaines + Streptomycine 1 g/j IM pendant les 2-3 premières semaines.
- **Localisation osseuse (spondylodiscite)** : Même bithérapie prolongée pendant **3 à 6 mois**.
- **Femme enceinte & Enfant < 8 ans** : **Cotrimoxazole + Rifampicine pendant 6 semaines** (Tétracyclines contre-indiquées).
`
  },
  {
    id: 'res-inf-17-astuces',
    courseId: 'crs-inf-17',
    title: 'Astuces & Pièges aux Examens - Brucellose',
    type: 'astuce',
    content: `
# ASTUCES & PIÈGES AU CONCOURS (BRUCELLOSE)
*Par Dr. LAIDANI.M - Faculté de Médecine*

### 💡 L'astuce mnémonique de la Brucellose : « LES 4 S »
- **S**ueur nocturne (odeur caractéristique de paille mouillée)
- **S**pondylodiscite (Pedro Pons, lombaire)
- **S**acro-iliite (unilatérale)
- **S**ix semaines de traitement (durée minimale absolue de la bithérapie)

### ⚠️ PIÈGE N°1 : La durée du traitement
- Tout traitement inférieur à 6 semaines (ex: 15 ou 21 jours) est sanctionné d'un taux de rechute supérieur à 40%. La réponse au QCM doit TOUJOURS comporter 6 semaines pour la forme aiguë et 3 à 6 mois pour la spondylodiscite.

### ⚠️ PIÈGE N°2 : La monothérapie
- La monothérapie est FORMELLEMENT PROSCRITE dans la brucellose. Elle expose à l'échec et aux rechutes. Toujours prescrire une BITHÉRAPIE synergique intracellulaire.

### ⚠️ PIÈGE N°3 : Le phénomène de prozone au sérodiagnostic de Wright
- Si forte suspicion clinique mais Wright négatif à 1/20 ou 1/40 : faire diluer le sérum au-delà de 1/320 pour lever l'inhibition par excès d'anticorps.
`
  }
];
