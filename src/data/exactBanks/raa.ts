import { Question } from '../../types/medical';

export const RAA_EXACT_QUESTIONS: Question[] = [
  // 25 QCMs
  {
    id: 'q-raa-01',
    courseId: 'crs-raa',
    questionNumber: 1,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel agent infectieux bactérien est le déclencheur exclusif du rhumatisme articulaire aigu (RAA) par mécanisme immunologique croisé ?",
    options: [
      "A) Le Streptocoque bêta-hémolytique du groupe A (Streptococcus pyogenes) pharyngé.",
      "B) Le Staphylocoque doré (Staphylococcus aureus) cutané.",
      "C) Le Pneumocoque (Streptococcus pneumoniae).",
      "D) L'Entérocoque (Enterococcus faecalis).",
      "E) Le Streptocoque du groupe B (Streptococcus agalactiae)."
    ],
    correctAnswers: [0],
    explanation: "Le RAA est une complication non suppurée tardive (survenant 2 à 3 semaines après une angine ou pharyngite) due exclusivement au Streptocoque bêta-hémolytique du groupe A par mimétisme moléculaire entre les antigènes streptococciques (protéine M) et les tissus de l'hôte.",
    clinicalPearl: "Le RAA succède EXCLUSIVEMENT à une infection pharyngée à Streptocoque du groupe A (jamais à une infection cutanée)."
  },
  {
    id: 'q-raa-02',
    courseId: 'crs-raa',
    questionNumber: 2,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Selon les critères de Jones révisés pour les populations à risque modéré à élevé, lequel des items suivants est un critère MAJEUR ?",
    options: [
      "A) La chorée de Sydenham (chorée rhumatismale de Saint-Guy).",
      "B) Une arthralgie simple fébrile.",
      "C) Une VS élevée > 30 mm à la première heure.",
      "D) Un allongement isolé de l'espace PR à l'ECG.",
      "E) Une fièvre isolée à 38,5°C."
    ],
    correctAnswers: [0],
    explanation: "Les critères majeurs de Jones sont résumés par le mnémonique 'JONES' : J (Joints : polyarthrite mobile et fugace), O (Cardite / Pancardite), N (Nodules sous-cutanés de Meynet), E (Érythème marginé de Besnier), S (Sydenham chorea).",
    clinicalPearl: "Critères majeurs de Jones = 'JONES' : Joints (polyarthrite), O (Cardite), Nodules de Meynet, Érythème marginé, Sydenham (chorée)."
  },
  {
    id: 'q-raa-03',
    courseId: 'crs-raa',
    questionNumber: 3,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle caractéristique clinique est typique de l'atteinte articulaire du rhumatisme articulaire aigu de l'enfant ou du jeune adulte ?",
    options: [
      "A) Une polyarthrite aiguë des grosses articulations (genoux, chevilles, coudes), mobile, fugace, migratrice, très douloureuse et sans séquelles destructrices.",
      "B) Une monoarthrite chronique érosive de la hanche.",
      "C) Une oligoarthrite asymétrique ankylosante axiale.",
      "D) Une dactylite des orteils en saucisse sans douleur.",
      "E) Une atteinte symétrique bilatérale déformante des petites articulations des doigts."
    ],
    correctAnswers: [0],
    explanation: "L'arthrite du RAA est une polyarthrite touchant les grosses articulations des membres, de caractère mobile et sauteur (une articulation guérit spontanément tandis qu'une autre s'enflamme), spectaculairement sensible aux salicylés et guérissant sans aucune séquelle radiologique.",
    clinicalPearl: "Arthrite du RAA : Grosses articulations, mobile, fugace, migratrice, spectaculairement sensible à l'Aspirine, sans séquelle."
  },
  {
    id: 'q-raa-04',
    courseId: 'crs-raa',
    questionNumber: 4,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle lésion histologique pathognomonique de la cardite rhumatismale siège dans le tissu interstitiel myocardique ?",
    options: [
      "A) Le nodule d'Aschoff.",
      "B) Le granulome caséeux de Koch.",
      "C) Le corps de Councilman.",
      "D) Le nodule de Bouchard.",
      "E) La cellule géante de Reed-Sternberg."
    ],
    correctAnswers: [0],
    explanation: "Le nodule d'Aschoff est la lésion élémentaire histologique caractéristique de la cardite rhumatismale. Il est constitué d'un foyer central de nécrose fibrinoïde entouré de lymphocytes et de volumineuses cellules histiocytaires modifiées (cellules d'Anitschkow).",
    clinicalPearl: "Lésion histopathologique spécifique du RAA = Nodule d'Aschoff (myocarde interstitiel et péri-vasculaire)."
  },
  {
    id: 'q-raa-05',
    courseId: 'crs-raa',
    questionNumber: 5,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle valve cardiaque est la plus fréquemment et précocement lésée lors d'une première poussée de cardite rhumatismale ?",
    options: [
      "A) La valve mitrale (se traduisant initialement par une insuffisance mitrale aiguë).",
      "B) La valve tricuspide isolée.",
      "C) La valve pulmonaire.",
      "D) La valve de la veine cave inférieure.",
      "E) Le septum interventriculaire membraneux."
    ],
    correctAnswers: [0],
    explanation: "L'atteinte valvulaire rhumatismale touche en premier lieu la valve mitrale (65 à 70% des cas), puis l'aorte (25%), rarement la tricuspide et exceptionnellement la pulmonaire. À la phase aiguë, c'est l'insuffisance mitrale qui prédomine ; le rétrécissement mitral serré se constitue plus tardivement après plusieurs années.",
    clinicalPearl: "Valve la plus touchée dans le RAA = Valve mitrale (IM à la phase aiguë précoce, RM à la phase chronique tardive)."
  },
  {
    id: 'q-raa-06',
    courseId: 'crs-raa',
    questionNumber: 6,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quelle est la définition de la cardite infraclinique (ou subclinique) selon les critères de Jones ESC/AHA ?",
    options: [
      "A) Une atteinte valvulaire régurgitante mitrale ou aortique pathologique formellement détectée à l'échocardiographie Doppler en l'absence de souffle auscultatoire perçu.",
      "B) Une élévation des ASLO sans aucun symptôme.",
      "C) Un bloc de branche droit isolé sans régurgitation.",
      "D) Une extrasystolie ventriculaire nocturne.",
      "E) Une fièvre isolée avec radiographie pulmonaire normale."
    ],
    correctAnswers: [0],
    explanation: "La cardite subclinique correspond à la découverte échocardiographique Doppler de critères stricts de régurgitation valvulaire mitrale ou aortique chez un patient sans souffle auscultatoire audible. Elle est désormais reconnue comme critère MAJEUR dans les critères de Jones révisés.",
    clinicalPearl: "Critères de Jones révisés : La cardite subclinique (détectée uniquement à l'écho-doppler) est un critère MAJEUR !"
  },
  {
    id: 'q-raa-07',
    courseId: 'crs-raa',
    questionNumber: 7,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel examen biologique sérologique apporte la preuve formelle d'une infection streptococcique récente indispensable au diagnostic de RAA ?",
    options: [
      "A) Le titre élevé ou croissant d'Antistreptolysines O (ASLO >= 200 à 400 UI/mL) ou d'anti-DNase B.",
      "B) Une hémoculture aérobie positive à Staphylococcus epidermidis.",
      "C) La présence d'anticorps anti-nucléaires (AAN) au 1/80e.",
      "D) Un test de Coombs direct positif.",
      "E) Une sérologie VIH positive."
    ],
    correctAnswers: [0],
    explanation: "La preuve d'une infection streptococcique récente est un pré-requis obligatoire pour affirmer le diagnostic de RAA (sauf pour la chorée isolée ou la cardite insidieuse tardive). Elle repose sur un taux élevé ou une ascension d'un facteur 2 des ASLO ou des anti-streptodornases B.",
    clinicalPearl: "Diagnostic de RAA : 2 critères majeurs (ou 1 majeur + 2 mineurs) + Preuve OBLIGATOIRE d'infection streptococcique (ASLO ou anti-DNase B)."
  },
  {
    id: 'q-raa-08',
    courseId: 'crs-raa',
    questionNumber: 8,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel est le traitement anti-inflammatoire de première intention de la polyarthrite aiguë rhumatismale pure (sans cardite associée) ?",
    options: [
      "A) L'Acide acétylsalicylique (Aspirine) à forte dose (80 à 100 mg/kg/j en 4 à 6 prises chez l'enfant).",
      "B) Les corticoïdes per os à 2 mg/kg/j d'emblée.",
      "C) La colchicine 1 mg/j en monothérapie.",
      "D) Les immunoglobulines intraveineuses polyvalentes.",
      "E) Le méthotrexate sous-cutané hebdomadaire."
    ],
    correctAnswers: [0],
    explanation: "Pour la forme articulaire pure sans cardite, le traitement de référence est l'Aspirine à dose anti-inflammatoire forte (80 à 100 mg/kg/j chez l'enfant, 3 à 4 g/j chez l'adulte) pendant 2 à 3 semaines, avec une défervescence et une sédation articulaire spectaculaires en moins de 48 heures.",
    clinicalPearl: "Arthrite pure du RAA = Aspirine à forte dose (80-100 mg/kg/j) ; rémission clinique quasi-immédiate en 24-48h."
  },
  {
    id: 'q-raa-09',
    courseId: 'crs-raa',
    questionNumber: 9,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En présence d'une cardite rhumatismale avérée modérée à sévère (insuffisance cardiaque, cardiomégalie), quel traitement anti-inflammatoire majeur est préconisé d'emblée ?",
    options: [
      "A) La corticothérapie générale par voie orale (Prednisone 1 à 2 mg/kg/j) avec décroissance progressive sur 6 à 8 semaines.",
      "B) L'aspirine à faible dose 75 mg/j.",
      "C) Le paracétamol seul à la demande.",
      "D) Les inhibiteurs de la calcineurine.",
      "E) L'échange plasmatique thérapeutique."
    ],
    correctAnswers: [0],
    explanation: "Dès lors qu'il existe une cardite clinique significative ou une atteinte myocardique, les corticoïdes (Prednisone 1 à 2 mg/kg/j) sont indiqués pendant 2 à 3 semaines, suivis d'un relais par l'Aspirine pour prévenir le rebond inflammatoire lors du sevrage cortisonique.",
    clinicalPearl: "Cardite rhumatismale significative = Corticothérapie orale (Prednisone 2 mg/kg/j) pendant 2 à 3 semaines avec relais Aspirine."
  },
  {
    id: 'q-raa-10',
    courseId: 'crs-raa',
    questionNumber: 10,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel antibiotique de référence est administré immédiatement pour l'éradication du portage pharyngé du streptocoque A chez un patient diagnostiqué avec un RAA ?",
    options: [
      "A) La Pénicilline G benzathine en injection intramusculaire unique (1,2 million d'unités chez l'adulte ou 600 000 UI si < 27 kg).",
      "B) La Ciprofloxacine per os pendant 1 mois.",
      "C) La Gentamicine IV pendant 14 jours.",
      "D) La Vancomycine intraveineuse continue.",
      "E) Le Métronidazole en ovules."
    ],
    correctAnswers: [0],
    explanation: "Le traitement curatif de l'angine streptococcique (éradication du réservoir pharyngé) repose sur une injection intramusculaire unique de Benzathine Pénicilline G (ou Pénicilline V per os pendant 10 jours ; ou Macrolides en cas d'allergie vraie).",
    clinicalPearl: "Éradication du foyer streptococcique : Benzathine-Pénicilline G (Extencilline) en IM unique (1,2 MUI)."
  },
  {
    id: 'q-raa-11',
    courseId: 'crs-raa',
    questionNumber: 11,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quelle est la durée minimale recommandée de l'antibioprophylaxie secondaire (prévention des récidives) chez un patient ayant présenté un RAA avec cardite et valvulopathie séquellaire persistante ?",
    options: [
      "A) Au moins 10 ans depuis le dernier épisode OU jusqu'à l'âge de 40 ans (voire à vie si exposition à haut risque).",
      "B) 6 mois après la fin de la poussée aiguë.",
      "C) 1 an seulement.",
      "D) Uniquement pendant les mois d'hiver.",
      "E) 5 ans ou jusqu'à l'âge de 18 ans sans prolongation."
    ],
    correctAnswers: [0],
    explanation: "Selon les directives de l'OMS et de l'AHA : RAA avec cardite et valvulopathie persistante = prophylaxie pendant 10 ans après le dernier épisode ou jusqu'à 40 ans (le plus long des deux), et parfois à vie en cas de profession à haut risque (enseignant, pédiatre).",
    clinicalPearl: "Prophylaxie secondaire du RAA avec séquelles valvulaires : Au moins 10 ans ou jusqu'à 40 ans (le plus tardif des deux)."
  },
  {
    id: 'q-raa-12',
    courseId: 'crs-raa',
    questionNumber: 12,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle modalité d'antibioprophylaxie secondaire a démontré la plus grande efficacité pour prévenir les rechutes de RAA ?",
    options: [
      "A) Injection intramusculaire de Pénicilline G benzathine toutes les 3 à 4 semaines (21 à 28 jours).",
      "B) Prise quotidienne per os d'amoxicilline 1 g/j sans suivi.",
      "C) Injection intraveineuse trimestrielle de ceftriaxone.",
      "D) Prise discontinue d'azithromycine un week-end par mois.",
      "E) Gargarismes antiseptiques biquotidiens."
    ],
    correctAnswers: [0],
    explanation: "L'injection intramusculaire de Benzathine Pénicilline G toutes les 3 ou 4 semaines est la méthode de choix de la prophylaxie secondaire car elle assure une pénicillinémie protectrice constante et garantit une observance parfaite par rapport aux formes orales quotidiennes.",
    clinicalPearl: "Prophylaxie secondaire de référence = Benzathine-Pénicilline G en IM profonde toutes les 3 à 4 semaines."
  },
  {
    id: 'q-raa-13',
    courseId: 'crs-raa',
    questionNumber: 13,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Parmi les manifestations cutanées majeures du RAA, quelle est la description clinique exacte de l'érythème marginé de Besnier ?",
    options: [
      "A) Macules ou plaques érythémateuses non prurigineuses, à bordure externe serpigineuse surélevée et centre pâle qui s'efface, siégeant sur le tronc et la racine des membres.",
      "B) Éruption vésiculeuse en bouquet le long d'un métamère thoracique.",
      "C) Plaques érythémateuses squameuses épaisses sur les faces d'extension des coudes.",
      "D) Papules purpuriques nécrotiques palpables des membres inférieurs.",
      "E) Érythème malaire en ailes de papillon sur le visage."
    ],
    correctAnswers: [0],
    explanation: "L'érythème marginé de Besnier est une éruption érythémateuse fugace, non prurigineuse, à centre clair et bordure rouge festonnée serpigineuse, respectant toujours le visage et localisée au tronc et aux racines des membres.",
    clinicalPearl: "Érythème marginé de Besnier : Anneaux à centre clair et bord serpigineux, non prurigineux, épargnant le visage."
  },
  {
    id: 'q-raa-14',
    courseId: 'crs-raa',
    questionNumber: 14,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Où siègent de façon préférentielle les nodules sous-cutanés de Meynet dans le RAA ?",
    options: [
      "A) En regard des saillies osseuses et des tendons extenseurs (coudes, genoux, poignets, rachis, occiput).",
      "B) Sur la muqueuse buccale et jugale.",
      "C) Au niveau de la pulpe des doigts sous les ongles.",
      "D) Dans le pli inguinal exclusivement.",
      "E) Sur les lobes des oreilles bilatéraux."
    ],
    correctAnswers: [0],
    explanation: "Les nodules sous-cutanés de Meynet sont des nodosités fermes, indolores, roulant sous le doigt, sans inflammation de la peau en regard, localisés sur les surfaces d'extension des articulations et les apophyses osseuses. Ils sont quasi-constamment associés à une cardite sévère.",
    clinicalPearl: "Nodules de Meynet : Fermes, indolores, en regard des saillies osseuses (coudes, genoux), quasi-toujours associés à une cardite."
  },
  {
    id: 'q-raa-15',
    courseId: 'crs-raa',
    questionNumber: 15,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle manifestation neurologique du RAA, touchant préférentiellement les fillettes, se caractérise par des mouvements involontaires, désordonnés, amples, disparaissant pendant le sommeil ?",
    options: [
      "A) La chorée de Sydenham (chorée rhumatismale).",
      "B) La chorée de Huntington génétique.",
      "C) La maladie des tics de Gilles de la Tourette.",
      "D) Le tremblement parkinsonien de repos.",
      "E) Le myoclonus d'action de Lance et Adams."
    ],
    correctAnswers: [0],
    explanation: "La chorée de Sydenham est une encéphalite auto-immune post-streptococcique des noyaux gris centraux. Elle associe mouvements choréiques involontaires, hypotonie musculaire et instabilité émotionnelle. Elle peut survenir isolément après une longue période de latence (1 à 6 mois).",
    clinicalPearl: "Chorée de Sydenham : Mouvements involontaires anarchiques post-angine chez l'enfant, suffisant seul au diagnostic de RAA."
  },
  {
    id: 'q-raa-16',
    courseId: 'crs-raa',
    questionNumber: 16,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel souffle auscultatoire d'insuffisance mitrale aiguë de la phase active du RAA est souvent associé à un roulement méso-diastolique apexien fonctionnel ?",
    options: [
      "A) Le roulement de Carey Coombs.",
      "B) Le roulement d'Austin Flint.",
      "C) Le souffle continu de Gibson.",
      "D) Le souffle de Graham Steell.",
      "E) Le click de prolapsus d'Erb."
    ],
    correctAnswers: [0],
    explanation: "Le roulement méso-diastolique de Carey Coombs est un roulement apexien doux et transitoire audible lors d'une cardite mitrale aiguë. Il est dû à l'hyperdébit diastolique à travers une valve mitrale œdématiée (et non à un rétrécissement mitral organique anatomique).",
    clinicalPearl: "Roulement de Carey Coombs = Roulement méso-diastolique fonctionnel d'hyperdébit mitral lors de la cardite rhumatismale aiguë."
  },
  {
    id: 'q-raa-17',
    courseId: 'crs-raa',
    questionNumber: 17,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quel signe électrique ECG est inclus comme critère MINEUR dans la classification de Jones pour le diagnostic de RAA ?",
    options: [
      "A) L'allongement de l'espace PR adapté à l'âge (BAV du 1er degré).",
      "B) Le sus-décalage de ST concave diffus.",
      "C) Le raccourcissement du QT < 0,30 s.",
      "D) L'inversion isolée de l'onde T en V1.",
      "E) Le bloc de branche gauche complet."
    ],
    correctAnswers: [0],
    explanation: "L'allongement de l'espace PR (BAV 1) au-delà de la limite supérieure normale pour l'âge et la fréquence cardiaque traduit l'atteinte inflammatoire du nœud atrioventriculaire et compte comme un critère mineur de Jones (si la cardite n'est pas déjà retenue comme critère majeur).",
    clinicalPearl: "Critère mineur de Jones électrique = Allongement de l'intervalle PR (BAV 1er degré)."
  },
  {
    id: 'q-raa-18',
    courseId: 'crs-raa',
    questionNumber: 18,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "En cas d'allergie avérée à la pénicilline (anaphylaxie), quel antibiotique est le traitement oral alternatif pour l'éradication du streptocoque A dans le RAA ?",
    options: [
      "A) L'Érythromycine ou l'Azithromycine (Macrolides).",
      "B) L'Amoxicilline à forte dose.",
      "C) L'Ampicilline injectable.",
      "D) La Céfazoline.",
      "E) L'Augmentin."
    ],
    correctAnswers: [0],
    explanation: "Chez les patients ayant une allergie confirmée aux bêta-lactamines, les macrolides (Érythromycine, Azithromycine ou Clarithromycine) ou la Clindamycine sont les molécules recommandées pour l'éradication et la prophylaxie secondaire.",
    clinicalPearl: "Allergie à la Pénicilline dans le RAA = Relais par Macrolides (Érythromycine / Azithromycine)."
  },
  {
    id: 'q-raa-19',
    courseId: 'crs-raa',
    questionNumber: 19,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle mesure de santé publique préventive primaire permet d'éradiquer quasi-totalement la survenue du RAA dans une population ?",
    options: [
      "A) Le diagnostic précoce et le traitement antibiotique systématique par Pénicilline de toute angine bactérienne à streptocoque du groupe A.",
      "B) La vaccination universelle annuelle contre le pneumocoque.",
      "C) L'administration de vitamine D chez tous les nourrissons.",
      "D) Le dépistage systématique par radiographie thoracique en milieu scolaire.",
      "E) L'ablation préventive des amygdales dès l'âge de 2 ans."
    ],
    correctAnswers: [0],
    explanation: "La prévention primaire du RAA repose sur le traitement antibiotique efficace de toute angine streptococcique aiguë (par test de diagnostic rapide TDR et Pénicilline pendant 6 à 10 jours), ce qui empêche le déclenchement de la réaction immunopathologique croisée.",
    clinicalPearl: "Prévention primaire du RAA = Traitement précoce et complet de TOUTE angine streptococcique par Pénicilline."
  },
  {
    id: 'q-raa-20',
    courseId: 'crs-raa',
    questionNumber: 20,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la complication valvulaire chronique tardive la plus redoutable du RAA, apparaissant classiquement 10 à 20 ans après les poussées initiales ?",
    options: [
      "A) Le rétrécissement mitral serré (RM) avec fusion commissurale et rétraction des cordages.",
      "B) La bicuspidie aortique calcifiée.",
      "C) La communication interventriculaire restrictive.",
      "D) La dysplasie arythmogène biventriculaire.",
      "E) Le myxome de l'atrium gauche."
    ],
    correctAnswers: [0],
    explanation: "La séquelle chronique majeure du RAA est le rétrécissement mitral (RM) rhumatismal, secondaire à une fibrose progressive avec soudure des commissures valvulaires, épaississement et calcification des feuillets et fusion de l'appareil sous-valvulaire.",
    clinicalPearl: "Le rétrécissement mitral chez l'adulte est dans plus de 95% des cas d'origine post-rhumatismale (RAA)."
  },
  {
    id: 'q-raa-21',
    courseId: 'crs-raa',
    questionNumber: 21,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Dans les critères de Jones, combien de critères majeurs et mineurs sont requis en présence d'une preuve d'infection streptococcique récente pour poser le diagnostic de RAA initial ?",
    options: [
      "A) Deux critères majeurs OU un critère majeur + deux critères mineurs.",
      "B) Trois critères majeurs obligatoires.",
      "C) Quatre critères mineurs sans aucun critère majeur.",
      "D) Un seul critère mineur suffit si la VS est > 100 mm.",
      "E) Tous les critères majeurs doivent être simultanément présents."
    ],
    correctAnswers: [0],
    explanation: "La règle diagnostique fondamentale de Jones est : Preuve d'infection streptococcique récente + soit 2 critères majeurs, soit 1 critère majeur et 2 critères mineurs.",
    clinicalPearl: "Diagnostic formel de RAA : Preuve streptococcique + [2 Majeurs] OU [1 Majeur + 2 Mineurs]."
  },
  {
    id: 'q-raa-22',
    courseId: 'crs-raa',
    questionNumber: 22,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la principale contre-indication de l'acide acétylsalicylique à forte dose chez l'enfant en cours de RAA qui doit faire préférer les corticoïdes ou surveiller étroitement l'apparition d'un syndrome viral ?",
    options: [
      "A) Le risque de syndrome de Reye lors d'une infection virale concomitante (grippe, varicelle).",
      "B) L'alcalose métabolique sévère.",
      "C) L'hypertrichose cutanée.",
      "D) La luxation congénitale de la hanche.",
      "E) L'hyperplasie gingivale médicamenteuse."
    ],
    correctAnswers: [0],
    explanation: "L'administration d'Aspirine chez l'enfant lors d'un épisode viral aigu (grippe, varicelle) expose au risque d'encéphalopathie hépatique aiguë potentiellement mortelle (syndrome de Reye).",
    clinicalPearl: "Aspirine chez l'enfant : Attention au syndrome de Reye si varicelle ou syndrome grippal associé."
  },
  {
    id: 'q-raa-23',
    courseId: 'crs-raa',
    questionNumber: 23,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle est la cause de la cardite rhumatismale sur le plan physiopathologique ?",
    options: [
      "A) Une réaction auto-immune humorale et cellulaire médiée par des anticorps dirigés contre la protéine M streptococcique qui réagissent de manière croisée avec la myosine et les glycoprotéines valvulaires de l'hôte.",
      "B) Une colonisation bactérienne directe et suppurée des valves cardiaques par le streptocoque.",
      "C) Un dépôt de complexes immuns circulants avec consommation de complément dans les glomérules.",
      "D) Une toxine bactérienne cytolytique nécrosante directe transmise par voie lymphatique.",
      "E) Une infection virale opportuniste favorisée par l'angine."
    ],
    correctAnswers: [0],
    explanation: "La cardite n'est PAS une infection bactérienne directe des valves (ce n'est pas une endocardite infectieuse) ; c'est une réaction auto-immune stérile post-infectieuse où les anticorps anti-streptococciques attaquent par mimétisme antigénique les structures endocardiques de l'hôte.",
    clinicalPearl: "Le RAA n'est pas une endocardite bactérienne : c'est une maladie inflammatoire post-streptococcique aseptique."
  },
  {
    id: 'q-raa-24',
    courseId: 'crs-raa',
    questionNumber: 24,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Standard',
    questionText: "Quelle surveillance biologique hebdomadaire permet de guider la décroissance et l'arrêt du traitement anti-inflammatoire dans le RAA pour éviter le rebond ?",
    options: [
      "A) La vitesse de sédimentation (VS) et la Protéine C-Réactive (CRP).",
      "B) Le taux de prothrombine (TP) et INR.",
      "C) Le dosage des transaminases ALAT.",
      "D) La clairance de la créatinine.",
      "E) Le bilan lipidique complet."
    ],
    correctAnswers: [0],
    explanation: "La normalisation de la CRP (qui chute rapidement en quelques jours) puis de la VS (qui se normalise en 2 à 4 semaines) est le critère biologique indispensable avant d'entamer la baisse posologique et le sevrage des corticoïdes et de l'aspirine pour éviter une rechute inflammatoire.",
    clinicalPearl: "Surveillance du RAA aigu : Décroissance thérapeutique guidée par la négativation de la CRP puis de la VS."
  },
  {
    id: 'q-raa-25',
    courseId: 'crs-raa',
    questionNumber: 25,
    type: 'QCM',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Quel geste chirurgical ou percutané est indiqué en première intention chez un adulte jeune porteur d'un rétrécissement mitral rhumatismal serré pur avec valves souples, sans calcification et sans régurgitation mitrale significative ?",
    options: [
      "A) La commissurotomie mitrale percutanée au ballonnet (technique d'Inoue).",
      "B) Le remplacement valvulaire par prothèse mécanique d'emblée.",
      "C) L'ablation chirurgicale de l'oreillette gauche.",
      "D) La pose d'une valve transcathéter TAVI mitrale.",
      "E) La greffe cardio-pulmonaire."
    ],
    correctAnswers: [0],
    explanation: "Chez les patients jeunes atteints de RM rhumatismal avec anatomie valvulaire favorable (score de Wilkins <= 8 : valves souples non calcifiées, appareil sous-valvulaire peu remanié, pas de thrombus dans l'AG, fuite mitrale <= grade 1), la commissurotomie mitrale percutanée au ballon (Inoue) est le traitement de choix.",
    clinicalPearl: "RM rhumatismal serré avec valves souples (Wilkins <= 8) : Commissurotomie mitrale percutanée au ballonnet d'emblée."
  },

  // 5 Cas Cliniques
  {
    id: 'cas-raa-01',
    courseId: 'crs-raa',
    questionNumber: 26,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 1 : La polyarthrite fébrile de l'écolier\nUn enfant de 10 ans sans antécédent particulier est amené aux urgences pédiatriques pour une impotence fonctionnelle majeure des membres inférieurs fébrile à 38,8°C. Il y a 3 jours, son genou droit était rouge, chaud et très tuméfié. Ce matin, le genou droit a complètement dégonflé, mais c'est maintenant la cheville gauche qui est devenue inflammatoire et intolérable à la marche. L'interrogatoire retrouve la notion d'un mal de gorge avec fièvre traité par paracétamol seul il y a 3 semaines. L'examen cardiaque est normal sans souffle audible. Le bilan biologique montre : CRP à 145 mg/L, VS à 85 mm à la première heure, ASLO à 950 UI/mL (normale < 200).\nQ1. Quel est le diagnostic certain selon les critères de Jones ?\nQ2. Quelle prise en charge thérapeutique immédiate est indiquée ?",
    options: [
      "A) Rhumatisme Articulaire Aigu (polyarthrite migratrice + fièvre + VS élevée + preuve streptococcique) / Hospitalisation, repos au lit, éradication streptococcique par Pénicilline G benzathine IM et Aspirine à 80 mg/kg/j per os.",
      "B) Arthrite septique bactérienne staphylococcique / Arthrotomie chirurgicale d'urgence.",
      "C) Maladie de Still juvénile idiopathique / Méthotrexate à forte dose d'emblée.",
      "D) Drépanocytose en crise vaso-occlusive / Transfusion de culots globulaires.",
      "E) Leucémie aiguë lymphoblastique / Chimiothérapie d'induction."
    ],
    correctAnswers: [0],
    explanation: "Le tableau remplit parfaitement les critères de Jones révisés : preuve streptococcique formelle (ASLO à 950 UI/mL) + 1 critère majeur (polyarthrite mobile et fugace) + 2 critères mineurs (fièvre et syndrome inflammatoire biologique majeur avec CRP/VS élevées). La prise en charge associe éradication du streptocoque par Extencilline et traitement anti-inflammatoire par Aspirine forte dose.",
    clinicalPearl: "Polyarthrite migratrice des grosses articulations + ASLO très élevées post-angine = RAA (Extencilline + Aspirine 80 mg/kg/j)."
  },
  {
    id: 'cas-raa-02',
    courseId: 'crs-raa',
    questionNumber: 27,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 2 : La cardite rhumatismale inaugurale\nUne adolescente de 13 ans consulte pour dyspnée d'effort d'apparition récente avec palpitations et fébricule vespérale. L'auscultation cardiaque objective un souffle holosystolique 3/6 apexien en jet de vapeur irradiant à l'aisselle gauche et un bruit de galop B3. L'ECG montre un rythme sinusal avec allongement de l'intervalle PR à 0,22 s. L'échocardiographie transthoracique met en évidence une insuffisance mitrale de grade 3 par prolapsus du feuillet antérieur avec épaississement nodulaire des bords libres des valves et une dilatation ventriculaire gauche modérée (DTD 56 mm, FEVG 54%). Le bilan inflammatoire montre une CRP à 78 mg/L et des ASLO à 640 UI/mL.\nQ1. Quel critère de gravité majeur est présent dans ce tableau de RAA ?\nQ2. Quelle est la conduite thérapeutique anti-inflammatoire adaptée ?",
    options: [
      "A) Cardite rhumatismale sévère avec insuffisance mitrale aiguë / Corticothérapie générale par Prednisone 2 mg/kg/j pendant 3 semaines, puis relais décroissant par Aspirine sous surveillance échocardiographique.",
      "B) Endocardite infectieuse à entérocoque / Trithérapie antibiotique pendant 6 semaines sans corticoïdes.",
      "C) Myocardite virale isolée / Simple surveillance sans traitement.",
      "D) Prolapsus mitral congénital sans lien avec le RAA / Surveillance annuelle.",
      "E) Péricardite purulente / Drainage péricardique chirurgical d'emblée."
    ],
    correctAnswers: [0],
    explanation: "La découverte d'une insuffisance mitrale aiguë significative au décours d'une infection streptococcique affirme la cardite rhumatismale aiguë. En présence d'une cardite avec fuite sévère et BAV I, la corticothérapie orale (Prednisone 2 mg/kg/j) est formellement indiquée pour limiter les remaniements fibreux valvulaires définitifs.",
    clinicalPearl: "Cardite mitrale rhumatismale aiguë : Corticothérapie (Prednisone 2 mg/kg/j) + Extencilline IM + Prophylaxie secondaire prolongée."
  },
  {
    id: 'cas-raa-03',
    courseId: 'crs-raa',
    questionNumber: 28,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 3 : La chorée de Sydenham isolée\nUne fillette de 9 ans est adressée en pédiatrie par son institutrice qui a remarqué depuis un mois une baisse spectaculaire des résultats scolaires, une écriture devenue totalement illisible et des mouvements anormaux involontaires 'bizarres' des membres supérieurs et du visage (grimaces). À l'examen, on objective une hypotonie musculaire diffuse, des mouvements choréiques involontaires brusques, non rythmés, s'accentuant lors des épreuves de préhension manuelle et disparaissant la nuit. L'examen somatique est par ailleurs strictement normal, sans arthrite ni souffle cardiaque. Le bilan inflammatoire (CRP, VS) est normal. Les ASLO sont à 320 UI/mL.\nQ1. Quel est le diagnostic certain ?\nQ2. Quelle est la particularité diagnostique de cette manifestation dans les critères de Jones ?",
    options: [
      "A) Chorée de Sydenham (chorée rhumatismale) / Elle constitue à elle seule un diagnostic suffisant de RAA sans nécessité d'autres critères ni d'élévation inflammatoire.",
      "B) Tumeur des noyaux gris centraux / Indication d'une biopsie stéréotaxique cérébrale.",
      "C) Crises d'épilepsie myoclonique juvénile / Débuter le valproate de sodium.",
      "D) Trouble psychiatrique de conversion / Prise en charge psychothérapeutique exclusive.",
      "E) Intoxication au plomb (saturnisme) / Traitement chélateur par EDTA."
    ],
    correctAnswers: [0],
    explanation: "La chorée de Sydenham survient classiquement après une longue période de latence (1 à 6 mois après l'angine streptococcique), à un moment où le syndrome inflammatoire s'est souvent déjà éteint. Elle constitue à elle seule un critère suffisant pour affirmer le diagnostic de RAA et justifie la mise en route d'une antibioprophylaxie secondaire.",
    clinicalPearl: "Chorée de Sydenham : Mouvements anormaux choréiques + hypotonie post-angine. Suffit à elle seule pour poser le diagnostic de RAA."
  },
  {
    id: 'cas-raa-04',
    courseId: 'crs-raa',
    questionNumber: 29,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 4 : Stratégie de prophylaxie secondaire au long cours\nUn jeune homme de 22 ans est revu en consultation de contrôle. Il a présenté à l'âge de 11 ans une poussée inaugurale de RAA compliquée d'une cardite mitro-aortique. Il est actuellement asymptomatique sous Pénicilline G benzathine IM toutes les 3 semaines. L'échocardiographie de contrôle montre la persistance d'une insuffisance mitrale de grade 2 et d'une fuite aortique minime avec FEVG préservée à 62%.\nQ1. Quelle est la durée minimale d'antibioprophylaxie secondaire encore requise chez ce patient ?",
    options: [
      "A) Poursuite de la Benzathine Pénicilline G toutes les 3 semaines jusqu'à l'âge de 40 ans au minimum (ou au moins 10 ans depuis le dernier épisode).",
      "B) Arrêt immédiat de la prophylaxie car il a dépassé l'âge de 18 ans.",
      "C) Diminution des injections à une seule injection annuelle en hiver.",
      "D) Remplacement définitif par des bains de bouche antiseptiques.",
      "E) Arrêt de la pénicilline et remplacement par de l'aspirine à faible dose."
    ],
    correctAnswers: [0],
    explanation: "En présence d'une séquelle valvulaire persistante (cardite avec valvulopathie résiduelle), la prophylaxie secondaire doit être poursuivie pendant au moins 10 ans après le dernier épisode ET au moins jusqu'à l'âge de 40 ans (voire à vie si le patient est exposé à un risque continu de contact streptococcique).",
    clinicalPearl: "Prophylaxie secondaire du RAA avec valvulopathie résiduelle = Poursuite jusqu'à 40 ans au moins (Extencilline IM toutes les 3 semaines)."
  },
  {
    id: 'cas-raa-05',
    courseId: 'crs-raa',
    questionNumber: 30,
    type: 'CasClinique',
    module: 'Cardiologie & Vasculaire',
    academicYear: '4ème Année',
    difficulty: 'Concours Résidanat',
    questionText: "Cas Clinique 5 : Le rétrécissement mitral rhumatismal tardif de l'adulte\nUne femme de 32 ans, originaire d'Afrique du Nord, consulte pour dyspnée d'effort d'aggravation progressive (NYHA classe II) et survenue d'un épisode d'hémoptysie minime à l'effort. L'auscultation cardiaque à la pointe retrouve un éclat du premier bruit (B1), un claquement d'ouverture mitrale (COM) protodiastolique et un roulement diastolique à renforcement présystolique. L'échocardiographie Doppler confirme un rétrécissement mitral serré avec surface mitrale à 1,1 cm², gradient transmitral moyen à 11 mmHg, valves souples avec calcifications minimes limitées aux commissures (score de Wilkins à 6), sans fuite mitrale associée et absence de thrombus dans l'auricule gauche.\nQ1. Quelle est l'étiologie quasi-certaine de ce rétrécissement mitral ?\nQ2. Quelle est la thérapeutique interventionnelle de première intention indiquée ?",
    options: [
      "A) Séquelle tardive de Rhumatisme Articulaire Aigu (RAA) / Commissurotomie mitrale percutanée au ballonnet (CMPB).",
      "B) Rétrécissement mitral dégénératif sénile / Remplacement valvulaire mécanique sous CEC.",
      "C) Myxome obstructif de l'oreillette gauche / Résection chirurgicale en urgence.",
      "D) Maladie mitrale congénitale / Plastie chirurgicale avec anneau prothétique.",
      "E) Endocardite infectieuse d'Osler / Trithérapie antibiotique intraveineuse."
    ],
    correctAnswers: [0],
    explanation: "Le rétrécissement mitral serré avec triade auscultatoire de Duroziez (éclat de B1, claquement d'ouverture, roulement diastolique) chez une jeune adulte est la séquelle par excellence du RAA survenu dans l'enfance. Le score de Wilkins favorable (<= 8) sans régurgitation mitrale ni thrombus atrial est l'indication reine de la commissurotomie mitrale percutanée au ballonnet (CMPB).",
    clinicalPearl: "RM rhumatismal serré symptomatique à valves souples (Wilkins <= 8) = Commissurotomie mitrale percutanée (succès > 95% sans CEC)."
  }
];
