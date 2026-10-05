import { Question, CourseResource } from '../../types/medical';

// ==========================================
// LESSON 13: CRANIOSTÉNOSES
// ==========================================
export const NEURO_LESSON_13_QUESTIONS: Question[] = [
  {
    id: 'q-nro-13-01',
    courseId: 'crs-neuro-13',
    questionNumber: 1,
    type: 'QCM',
    content: "Une craniosténose se définit rigoureusement par :",
    options: [
      "A) Une déformation positionnelle bénigne du crâne sans fermeture prématurée de suture.",
      "B) Une fermeture prématurée, congénitale, d'une ou plusieurs sutures crâniennes chez le nourrisson.",
      "C) Une absence congénitale de boîte crânienne (anencéphalie).",
      "D) Une microcéphalie primitive par arrêt de croissance du parenchyme cérébral.",
      "E) Une distension des ventricules cérébraux avec disjonction suturaire."
    ],
    correctAnswers: [1],
    explanation: "La craniosténose est l'oblitération précoce et anormale d'une ou plusieurs sutures de la voûte ou de la base crânienne, perturbant la morphogénèse normale du crâne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-02',
    courseId: 'crs-neuro-13',
    questionNumber: 2,
    type: 'QCM',
    content: "Selon la loi de Virchow régissant la morphologie crânienne dans les craniosténoses :",
    options: [
      "A) La croissance osseuse s'arrête perpendiculairement à la suture synostosée et s'accélère parallèlement à celle-ci.",
      "B) La croissance crânienne est globalement augmentée dans tous les plans de l'espace.",
      "C) Le crâne se dilate perpendiculairement à la suture soudée pour compenser le volume.",
      "D) La suture opposée se ferme obligatoirement de manière symétrique.",
      "E) Le périmètre crânien reste obligatoirement strictement constant."
    ],
    correctAnswers: [0],
    explanation: "Loi de Virchow : La soudure prématurée d'une suture empêche la croissance osseuse perpendiculaire à son axe et compense par une expansion exagérée parallèle à la suture sténosée.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-13-03',
    courseId: 'crs-neuro-13',
    questionNumber: 3,
    type: 'QCM',
    content: "La craniosténose isolée la plus fréquente chez le garçon est :",
    options: [
      "A) La trigonocéphalie (suture métopique).",
      "B) La brachycéphalie antérieure (sutures coronales bilatérales).",
      "C) La scaphocéphalie (ou dolichocéphalie, suture sagittale).",
      "D) La plagiocéphalie antérieure (suture coronale unilatérale).",
      "E) L'oxycéphalie (synostose pan-crânienne tardive)."
    ],
    correctAnswers: [2],
    explanation: "La scaphocéphalie représente 50 à 60 % de l'ensemble des craniosténoses. Elle prédomine nettement chez le garçon (ratio 4/1) et touche la suture sagittale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-04',
    courseId: 'crs-neuro-13',
    questionNumber: 4,
    type: 'QCM',
    content: "Dans la scaphocéphalie (synostose de la suture sagittale), l'aspect typique du crâne est :",
    options: [
      "A) Un crâne triangulaire vu du dessus avec crête frontale médiane.",
      "B) Un crâne allongé dans le sens antéro-postérieur, étroit transversalement, avec bombement frontal et occipital.",
      "C) Un crâne court, large et aplati dans le sens antéro-postérieur.",
      "D) Une asymétrie fronto-orbitaire unilatérale avec recul du sourcil.",
      "E) Un crâne en forme de tour ou de pain de sucre."
    ],
    correctAnswers: [1],
    explanation: "Par fermeture de la suture sagittale, la croissance transversale est bloquée, d'où un crâne allongé d'avant en arrière (dolichocéphalie/scaphocéphalie en forme de carène de bateau).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-05',
    courseId: 'crs-neuro-13',
    questionNumber: 5,
    type: 'QCM',
    content: "La fermeture prématurée de la suture métopique (inter-frontale) entraîne :",
    options: [
      "A) Une scaphocéphalie.",
      "B) Une trigonocéphalie avec front en proue de navire et hypotélorisme.",
      "C) Une plagiocéphalie postérieure.",
      "D) Une brachycéphalie avec hypertélorisme franc.",
      "E) Une oxycéphalie avec cécité précoce."
    ],
    correctAnswers: [1],
    explanation: "La trigonocéphalie résulte de la sténose de la suture métopique. Elle donne un front étroit, triangulaire en carène avec une crête médiane visible et palpable, et un hypotélorisme.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-06',
    courseId: 'crs-neuro-13',
    questionNumber: 6,
    type: 'QCM',
    content: "La plagiocéphalie antérieure d'origine synostotique est due à la fusion unilatérale de :",
    options: [
      "A) La suture lambdoïde.",
      "B) La suture coronale (fronto-pariétale).",
      "C) La suture métopique.",
      "D) La suture squameuse.",
      "E) La suture sagittale."
    ],
    correctAnswers: [1],
    explanation: "La plagiocéphalie antérieure est la synostose unilatérale de la suture coronale, provoquant un aplatissement frontal homolatéral et une déformation de l'orbite.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-07',
    courseId: 'crs-neuro-13',
    questionNumber: 7,
    type: 'QCM',
    content: "Sur le plan radiologique, le signe de 'l'orbite d'Arlequin' (elevation du bord supéro-externe de l'orbite) est caractéristique de :",
    options: [
      "A) La scaphocéphalie isolée.",
      "B) La plagiocéphalie coronale unilatérale.",
      "C) La plagiocéphalie positionnelle occipitale.",
      "D) L'hydrocéphalie communicante.",
      "E) La trigonocéphalie pure."
    ],
    correctAnswers: [1],
    explanation: "L'ascension de la petite aile du sphénoïde et de l'orbite donne l'aspect radiologique d'œil ou d'orbite de 'Pierrot' ou 'Arlequin' du côté de la synostose coronale.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-13-08',
    courseId: 'crs-neuro-13',
    questionNumber: 8,
    type: 'QCM',
    content: "Comment distingue-t-on cliniquement une plagiocéphalie occipitale positionnelle (bénigne) d'une synostose lambdoïde unilatérale vraie ?",
    options: [
      "A) Dans la déformation positionnelle, l'oreille homolatérale est avancée (aspect en parallélogramme vu du dessus) ; dans la synostose lambdoïde, elle est reculée.",
      "B) La déformation positionnelle s'accompagne d'une HIC majeure au fond d'œil.",
      "C) La synostose lambdoïde régresse spontanément sur le ventre.",
      "D) L'oreille est toujours symétrique dans les deux cas.",
      "E) Le périmètre crânien diminue de façon drastique dans la déformation positionnelle."
    ],
    correctAnswers: [0],
    explanation: "Vue du vertex : la plagiocéphalie positionnelle crée un parallélogramme avec oreille homolatérale et bosse frontale homolatérale avancées. La synostose lambdoïde crée un trapèze avec oreille reculée.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-13-09',
    courseId: 'crs-neuro-13',
    questionNumber: 9,
    type: 'QCM',
    content: "Le syndrome de Crouzon associe une craniosténose facio-crânienne à :",
    options: [
      "A) Une syndactylie complexe complète des 4 membres (mains en mitaine).",
      "B) Une hypoplasie du maxillaire supérieur, un hypertélorisme, une exophtalmie et une transmission autosomique dominante liée au gène FGFR2.",
      "C) Une agénésie rénale bilatérale et une cardiopathie congénitale cyanogène.",
      "D) Un retard mental sévère constant dès la naissance.",
      "E) Une polydactylie post-axiale avec obésité morbide."
    ],
    correctAnswers: [1],
    explanation: "Le Crouzon associe faciocraniosténose, rétrognathisme maxillaire avec occlusion inversée, exophtalmie et hypertélorisme, SANS anomalie des extrémités (contrairement au syndrome d'Apert).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-10',
    courseId: 'crs-neuro-13',
    questionNumber: 10,
    type: 'QCM',
    content: "Quelle caractéristique clinique différencie formellement le syndrome d'Apert du syndrome de Crouzon ?",
    options: [
      "A) La présence d'une synostose coronale bilatérale.",
      "B) L'exophtalmie avec hypertélorisme.",
      "C) La présence d'une syndactylie membraneuse et osseuse sévère des mains et des pieds ('mains en cuillère' ou 'en mitaine').",
      "D) La transmission autosomique dominante.",
      "E) L'absence totale de risque d'hypertension intracrânienne."
    ],
    correctAnswers: [2],
    explanation: "Le syndrome d'Apert (acrocéphalosyndactylie) est caractérisé par la syndactylie osseuse et cutanée symétrique des 4 extrémités.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-11',
    courseId: 'crs-neuro-13',
    questionNumber: 11,
    type: 'QCM',
    content: "La principale complication fonctionnelle menaçante d'une craniosténose non traitée est :",
    options: [
      "A) Le diabète insipide central précoce.",
      "B) L'hypertension intracrânienne chronique pouvant entraîner atrophie optique et cécité irréversible.",
      "C) L'hypothyroïdie congénitale périphérique.",
      "D) La survenue d'un AVC ischémique sylvien malin.",
      "E) Une encéphalopathie hépatique subaiguë."
    ],
    correctAnswers: [1],
    explanation: "Le risque majeur des craniosténoses (surtout complexes et oxycéphalies) est la compression du cerveau en croissance générant une HIC chronique avec atrophie optique irréversible.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-12',
    courseId: 'crs-neuro-13',
    questionNumber: 12,
    type: 'QCM',
    content: "L'âge optimal recommandé pour la correction chirurgicale d'une craniosténose non syndromique (ex: scaphocéphalie) se situe généralement :",
    options: [
      "A) Durant les 24 premières heures de vie.",
      "B) Entre 3 et 9 mois de vie.",
      "C) Après l'âge de 5 ans lorsque l'ossification est complète.",
      "D) À la puberté après le pic de croissance faciale.",
      "E) Uniquement s'il existe une cécité avérée."
    ],
    correctAnswers: [1],
    explanation: "La chirurgie est idéalement réalisée entre 3 et 9 mois : l'os est encore malléable, le potentiel de régénération osseuse est maximal et le risque d'HIC est prévenu.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-13-13',
    courseId: 'crs-neuro-13',
    questionNumber: 13,
    type: 'QCM',
    content: "Sur la tomodensitométrie crânienne avec reconstruction 3D d'une craniosténose, on recherche :",
    options: [
      "A) L'effacement complet des sillons corticaux sans visualiser l'os.",
      "B) La disparition de la ligne de déhiscence suturaire et la présence d'un bombement osseux ou bourrelet cicatriciel.",
      "C) Un épaississement exclusif des méninges molles.",
      "D) Une calcification du corps calleux.",
      "E) Une atélectasie lobaire pulmonaire."
    ],
    correctAnswers: [1],
    explanation: "Le scanner 3D basse dose confirme la synostose : disparition de l'espace suturaire hypodense, condensation et bourrelet osseux, et permet la planification chirurgicale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-14',
    courseId: 'crs-neuro-13',
    questionNumber: 14,
    type: 'QCM',
    content: "L'oxycéphalie est une craniosténose caractérisée par :",
    options: [
      "A) Une atteinte exclusive de la suture temporo-pariétale.",
      "B) Une synostose pan-crânienne tardive (coronale + sagittale) avec crâne conique en pointe et risque très élevé d'HIC et de cécité.",
      "C) Une absence de tout retentissement neuro-visuel.",
      "D) Une atteinte prédominant exclusivement chez le nouveau-né prématuré.",
      "E) Une rémission spontanée sans chirurgie."
    ],
    correctAnswers: [1],
    explanation: "L'oxycéphalie est la fusion combinée et harmonieuse mais étouffante des sutures coronale et sagittale, se manifestant plus tardivement (2-3 ans) par un crâne en dôme/pain de sucre et un haut risque d'atrophie optique.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-13-15',
    courseId: 'crs-neuro-13',
    questionNumber: 15,
    type: 'QCM',
    content: "Dans le syndrome de Pfeiffer, la craniosténose est associée à :",
    options: [
      "A) Des pouces et gros orteils élargis et déviés (mégalodactylie/brachydactylie axiale).",
      "B) Une atrophie cérébelleuse pure.",
      "C) Une absence complète d'os frontaux.",
      "D) Un diabète néonatal transitoire.",
      "E) Des fractures spontanées multiples des os longs."
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Pfeiffer associe craniosténose, hypoplasie du tiers moyen de la face et pouces/hallux particulièrement larges et déviés.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-13-16',
    courseId: 'crs-neuro-13',
    questionNumber: 16,
    type: 'QCM',
    content: "Quel examen du fond d'œil est impératif dans le bilan et le suivi d'un enfant suspect de craniosténose ?",
    options: [
      "A) La recherche d'un décollement de rétine périphérique.",
      "B) La recherche d'un œdème papillaire ou d'une pâleur papillaire (atrophie optique post-stase).",
      "C) Le dépistage d'une thrombose de la veine centrale de la rétine.",
      "D) La mesure de l'épaisseur cornéenne centrale.",
      "E) La recherche d'une luxation du cristallin."
    ],
    correctAnswers: [1],
    explanation: "Le fond d'œil recherche les signes d'hypertension intracrânienne : stase et œdème papillaire, ou pâleur séquellaire témoignant d'une atrophie optique débutante.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-17',
    courseId: 'crs-neuro-13',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans la prise en charge d'une plagiocéphalie positionnelle postérieure (sans craniosténose) chez un nourrisson de 4 mois, la première mesure est :",
    options: [
      "A) Une craniectomie lambdoïde bilatérale immédiate.",
      "B) Le repositionnement postural en période d'éveil, l'évitement de l'appui permanent sur le méplat et la kinésithérapie pour éventuel torticolis associé.",
      "C) La mise sous anticoagulation préventive.",
      "D) Une ponction lombaire évacuatrice.",
      "E) L'alitement strict en décubitus dorsal prolongé."
    ],
    correctAnswers: [1],
    explanation: "La plagiocéphalie positionnelle est bénigne : mesures posturales ('tummy time' surveillé pendant l'éveil), kinésithérapie si torticolis congénital musculaire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-18',
    courseId: 'crs-neuro-13',
    questionNumber: 18,
    type: 'QCM',
    content: "La présence d'impressions digitiformes diffuses très marquées sur la radiographie du crâne d'un enfant de 3 ans avec craniosténose évoque :",
    options: [
      "A) Une ossification normale liée à la marche.",
      "B) Une hypertension intracrânienne chronique par conflit contenant/contenu.",
      "C) Une ostéopétrose maligne infantile.",
      "D) Un rachitisme carentiel sévère.",
      "E) Une méningite tuberculeuse calcifiée."
    ],
    correctAnswers: [1],
    explanation: "Les impressions digitiformes prononcées traduisent l'érosion de la table interne de la voûte par les circonvolutions cérébrales sous tension sous l'effet d'une HIC chronique.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-19',
    courseId: 'crs-neuro-13',
    questionNumber: 19,
    type: 'QCM',
    content: "La mutation génétique la plus fréquemment mise en cause dans les formes syndromiques de craniosténoses (Crouzon, Apert, Pfeiffer) touche :",
    options: [
      "A) Les récepteurs des facteurs de croissance des fibroblastes (FGFR1, FGFR2, FGFR3).",
      "B) Le gène de la dystrophine (DMD).",
      "C) Le récepteur de l'acétylcholine (AChR).",
      "D) Le gène de la huntingtine (HTT).",
      "E) Le canal calcique voltage-dépendant."
    ],
    correctAnswers: [0],
    explanation: "Les mutations hétérozygotes 'gain de fonction' de la famille FGFR (Fibroblast Growth Factor Receptor) sont à l'origine de la quasi-totalité des faciocraniosténoses génétiques.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-13-20',
    courseId: 'crs-neuro-13',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle attitude est recommandée face à une scaphocéphalie isolée bien tolérée chez un nourrisson de 4 mois ?",
    options: [
      "A) Abstention complète car la déformation disparaît toujours à 6 ans.",
      "B) Évaluation neurochirurgicale pédiatrique pour programmer une craniectomie ou plastie de remodelage de voûte afin de rétablir un volume et une forme harmonieux.",
      "C) Ponction ventriculaire transpariétale systématique.",
      "D) Prescription de corticoïdes à forte dose au long cours.",
      "E) Pose immédiate d'une dérivation ventriculo-péritonéale."
    ],
    correctAnswers: [1],
    explanation: "La scaphocéphalie relève d'une chirurgie de remodelage de la voûte (craniectomie sagittale avec ostéotomies de décharge) entre 3 et 6-9 mois pour des raisons morphologiques et de prévention d'HIC.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-21',
    courseId: 'crs-neuro-13',
    questionNumber: 21,
    type: 'QCM',
    content: "Parmi les propositions suivantes concernant les fontanelles et sutures normales :",
    options: [
      "A) La fontanelle antérieure (bregma) se ferme normalement vers 2 à 3 mois.",
      "B) La fontanelle postérieure (lambda) se ferme physiologiquement vers 2 à 3 mois de vie.",
      "C) La suture métopique reste ouverte jusqu'à l'âge de 20 ans.",
      "D) Les sutures crâniennes sont complètement ossifiées dès la naissance.",
      "E) La fontanelle antérieure mesure physiologiquement plus de 10 cm à l'âge de 1 an."
    ],
    correctAnswers: [1],
    explanation: "La fontanelle postérieure se ferme tôt (autour de 2-3 mois), alors que la fontanelle antérieure se ferme entre 9 et 18 mois. La métopique se ferme vers 6-8 mois.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-22',
    courseId: 'crs-neuro-13',
    questionNumber: 22,
    type: 'QCM',
    content: "Une brachycéphalie vraie non syndromique résulte de :",
    options: [
      "A) La fusion prématurée bilatérale des sutures coronales.",
      "B) L'oblitération isolée de la suture sagittale.",
      "C) La fusion unilatérale de la suture temporo-pariétale.",
      "D) Une compression intra-utérine sans aucune synostose.",
      "E) Une déhiscence permanente du bregma."
    ],
    correctAnswers: [0],
    explanation: "La synostose coronale bilatérale empêche le développement longitudinal du crâne, produisant un crâne très court d'avant en arrière et très large transversalement : la brachycéphalie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-23',
    courseId: 'crs-neuro-13',
    questionNumber: 23,
    type: 'QCM',
    content: "Quel risque anesthésique et peropératoire immédiat doit être rigoureusement anticipé lors de la chirurgie des craniosténoses du nourrisson ?",
    options: [
      "A) L'hypothermie maligne peropératoire systématique.",
      "B) Le saignement osseux et veineux méningé pouvant mener à un choc hémorragique aigu nécessitant transfusion.",
      "C) La survenue d'un pneumothorax bilatéral sous tension.",
      "D) L'ischémie myocardique aiguë.",
      "E) Une poussée hypertensive réfractaire."
    ],
    correctAnswers: [1],
    explanation: "Le risque majeur chez le nourrisson de moins de 1 an est la spoliation sanguine peropératoire (volume sanguin circulant faible ~80 ml/kg), nécessitant un contrôle strict de l'hémostase et de la volémie.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-13-24',
    courseId: 'crs-neuro-13',
    questionNumber: 24,
    type: 'QCM',
    content: "Dans le syndrome de Saethre-Chotzen, la craniosténose est associée à :",
    options: [
      "A) Une implantation basse des cheveux, des oreilles petites et rondes, une syndactylie cutanée partielle (surtout doigts 2-3) et mutation de TWIST1.",
      "B) Une cécité congénitale bilatérale par agénésie des nerfs optiques.",
      "C) Une lissencéphalie complète.",
      "D) Un pectus excavatum sévère isolé.",
      "E) Une microcéphalie avec polydactylie hexadactyle."
    ],
    correctAnswers: [0],
    explanation: "Le syndrome de Saethre-Chotzen est causé par des mutations du gène TWIST1 et associe craniosténose coronale, implantation basse des cheveux et anomalies discrètes des mains.",
    difficulty: 'difficile'
  },
  {
    id: 'q-nro-13-25',
    courseId: 'crs-neuro-13',
    questionNumber: 25,
    type: 'QCM',
    content: "Dans la prise en charge postopératoire des craniosténoses chez le nourrisson, on surveille particulièrement :",
    options: [
      "A) Le taux de procalcitonine toutes les heures.",
      "B) L'hémoglobinémie postopératoire, l'apparition d'un œdème palpébral transitoire et la morphologie de la cicatrice coronale.",
      "C) La glycémie capillaire toutes les 15 minutes.",
      "D) L'apparition d'un souffle aortique d'insuffisance.",
      "E) Le réflexe stapédien auditif."
    ],
    correctAnswers: [1],
    explanation: "La surveillance cible l'hémodynamique (taux d'Hb, compensation des pertes) et l'œdème palpébral/facial qui est fréquent et bénin après décollement sous-périosté coronal.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES (CAS PROGRESSIFS)
  {
    id: 'q-nro-13-c01',
    courseId: 'crs-neuro-13',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Un nourrisson de 2 mois est amené en consultation pour une déformation crânienne remarquée depuis la naissance. Le crâne apparaît très allongé d'avant en arrière, étroit dans le sens transversal, avec une crête osseuse médiane palpable le long de la suture sagittale. La fontanelle antérieure est punctiforme. L'enfant s'alimente normalement et son développement psychomoteur est régulier. Quel est le diagnostic le plus probable ?",
    options: [
      "A) Plagiocéphalie occipitale positionnelle.",
      "B) Scaphocéphalie (synostose prématurée de la suture sagittale).",
      "C) Trigonocéphalie métopique.",
      "D) Syndrome d'Apert.",
      "E) Brachycéphalie bilatérale."
    ],
    correctAnswers: [1],
    explanation: "L'allongement antéro-postérieur avec réduction transversale et crête sagittale palpable signe la scaphocéphalie (dolichocéphalie synostotique).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-c02',
    courseId: 'crs-neuro-13',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel examen d'imagerie est indiqué pour confirmer le diagnostic et planifier la prise en charge ?",
    options: [
      "A) Électroencéphalogramme de sieste.",
      "B) Scanner cérébral hélicoïdal basse dose avec reconstructions osseuses 3D de la voûte crânienne.",
      "C) Scintigraphie osseuse au technétium 99m.",
      "D) Artériographie cérébrale des quatre axes.",
      "E) Ponction lombaire avec mesure de pression d'ouverture."
    ],
    correctAnswers: [1],
    explanation: "Le scanner 3D crânien confirme l'oblitération de la suture sagittale et la morphologie de la carène sans exposer excessivement l'enfant aux radiations.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-c03',
    courseId: 'crs-neuro-13',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Un enfant de 4 mois présente un front pointu et triangulaire avec une crête médiane saillante entre les sourcils et le bregma. Les yeux paraissent rapprochés (hypotélorisme). Il s'agit d'une :",
    options: [
      "A) Trigonocéphalie par fermeture prématurée de la suture métopique.",
      "B) Oxycéphalie par fermeture prématurée des sutures coronales et sagittales.",
      "C) Brachycéphalie par fermeture précoce des deux sutures lambdoïdes.",
      "D) Plagiocéphalie antérieure unilatérale droite.",
      "E) Dysplasie cranio-diaphysaire héréditaire."
    ],
    correctAnswers: [0],
    explanation: "Le front en proue de navire (trigone) avec crête métopique médiane et hypotélorisme est la définition clinique de la trigonocéphalie.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-c04',
    courseId: 'crs-neuro-13',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Nouveau-né présentant un crâne court et haut, une rétromorphie maxillaire importante avec proptose oculaire marquée, hypertélorisme et une fusion cutanée et osseuse complète des doigts des deux mains ('mains en mitaine'). Quel syndrome devez-vous porter au premier plan ?",
    options: [
      "A) Syndrome de Crouzon.",
      "B) Syndrome d'Apert (acrocéphalosyndactylie de type I).",
      "C) Syndrome de Saethre-Chotzen.",
      "D) Syndrome de Carpenter.",
      "E) Maladie de Morquio."
    ],
    correctAnswers: [1],
    explanation: "L'association faciocraniosténose + syndactylie osseuse complète des 4 extrémités signe le syndrome d'Apert.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-13-c05',
    courseId: 'crs-neuro-13',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un nourrisson de 5 mois est vu pour asymétrie crânienne. Vu du dessus, l'os frontal droit est aplati, l'orbite droite est ascensionnée et étirée, et l'oreille droite est plus antérieure que la gauche. Il s'agit d'une :",
    options: [
      "A) Plagiocéphalie coronale synostotique antérieure droite.",
      "B) Scaphocéphalie asymétrique.",
      "C) Hydrocéphalie asymétrique univentriculaire.",
      "D) Plagiocéphalie positionnelle lambdoïde pure.",
      "E) Tumeur de la fosse postérieure droite."
    ],
    correctAnswers: [0],
    explanation: "Le recul du front droit avec ascension orbitaire homolatérale (orbite en arlequin) traduit la synostose prématurée de la suture coronale droite.",
    difficulty: 'moyen'
  }
];

export const NEURO_LESSON_13_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-13-mindmap',
    courseId: 'crs-neuro-13',
    title: 'Mind Map : Craniosténoses Isolées & Syndromiques',
    type: 'mindmap',
    content: `# Mind Map : Craniosténoses & Dysmorphies Crâniennes

## 1. Classification selon la suture atteinte (Loi de Virchow)
- **Scaphocéphalie (Sagittale, 50-60%)**
  - Allongement antéro-postérieur, crâne étroit, carène médiane.
  - Garçon +++ (4:1). Risque d'HIC modéré (~10-15%).
- **Trigonocéphalie (Métopique, ~15-20%)**
  - Front triangulaire en carène de bateau, hypotélorisme, fossettes temporales creusées.
- **Plagiocéphalie antérieure (Coronale unilatérale, ~15%)**
  - Aplatissement frontal unilatéral, élévation de l'orbite ("orbite d'Arlequin").
- **Brachycéphalie (Coronale bilatérale, ~5%)**
  - Crâne court et large, recul du bandeau frontal, hypertélorisme.
- **Oxycéphalie (Fusion pan-suturaire tardive)**
  - Crâne en pain de sucre / tour. Risque d'HIC et de cécité majeur (> 60%).

## 2. Craniosténoses Syndromiques (Mutations FGFR / TWIST)
- **Syndrome de Crouzon** : Faciocraniosténose, exophtalmie, occlusion inversée. SANS atteinte des mains.
- **Syndrome d'Apert** : Faciocraniosténose sévère + Syndactylie symétrique des 4 membres ("mitaines").
- **Syndrome de Pfeiffer** : Craniosténose + Pouces et gros orteils très larges et déviés.

## 3. Prise en Charge
- **Bilan** : Scanner 3D basse dose, Fond d'œil (œdème / atrophie optique), examen visuel et psychomoteur.
- **Chirurgie** : Remodelage de voûte / avancée fronto-orbitaire entre 3 et 9 mois.`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-13-astuces',
    courseId: 'crs-neuro-13',
    title: 'Astuces & Pièges aux Concours : Craniosténoses',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Plagiocéphalie positionnelle vs Synostose :**
   - *Positionnelle* : crâne en parallélogramme vu du dessus, oreille avancée du côté aplati. Pas d'HIC, ne s'opère pas (kiné + positionnement).
   - *Synostotique lambdoïde* : trapèze, oreille reculée du côté aplati. Suture fermée au scanner.
2. **Apert vs Crouzon :**
   - Les deux ont une faciocraniosténose avec exophtalmie (FGFR2).
   - La présence d'une syndactylie osseuse des mains élimine formellement Crouzon et signe **Apert**.
3. **Loi de Virchow :**
   - L'arrêt de croissance se fait **perpendiculairement** à la suture synostosée ; la compensation se fait **parallèlement**.
4. **Complication redoutée :**
   - L'atrophie optique séquellaire par hypertension intracrânienne chronique insidieuse. Le fond d'œil est l'examen de surveillance capital.`,
    author: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 14: PATHOLOGIES NEURODÉGÉNÉRATIVES
// ==========================================
export const NEURO_LESSON_14_QUESTIONS: Question[] = [
  {
    id: 'q-nro-14-01',
    courseId: 'crs-neuro-14',
    questionNumber: 1,
    type: 'QCM',
    content: "La Sclérose Latérale Amyotrophique (SLA ou maladie de Charcot) se caractérise sémiologiquement par l'association concomitante de :",
    options: [
      "A) Un syndrome cérébelleux cinétique et des troubles sensitifs thermo-algiques purs.",
      "B) Un syndrome du motoneurone central (syndrome pyramidal) et un syndrome du motoneurone périphérique (syndrome neurogène périphérique avec amyotrophie et fasciculations).",
      "C) Un syndrome extrapyramidal rigido-akinétique et une démence corticale précoce.",
      "D) Une atteinte motrice pure associée obligatoirement à des troubles sphinctériens précoces.",
      "E) Une ophtalmoplégie internucléaire et des névrites optiques récurrentes."
    ],
    correctAnswers: [1],
    explanation: "La SLA est la maladie dégénérative du système moteur caractérisée par l'atteinte simultanée des 1er motoneurones (cortex moteur/voie pyramidale) et 2èmes motoneurones (corne antérieure de la moelle et noyaux bulbaires).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-02',
    courseId: 'crs-neuro-14',
    questionNumber: 2,
    type: 'QCM',
    content: "Dans la SLA typique, quels éléments cliniques sont classiquement RESPECTÉS et constituent des critères d'exclusion s'ils sont présents ?",
    options: [
      "A) Les réflexes ostéo-tendineux et la force des membres supérieurs.",
      "B) L'oculomotricité (noyaux III, IV, VI), la fonction sphinctérienne vésico-rectale et la sensibilité.",
      "C) La musculature linguale et le voile du palais.",
      "D) Les muscles respiratoires intercostaux et diaphragmatiques.",
      "E) Le tonus musculaire des membres inférieurs."
    ],
    correctAnswers: [1],
    explanation: "La SLA respecte classiquement l'oculomotricité, le contrôle des sphincters (noyau d'Onuf) et les sensibilités. Leur atteinte doit faire remettre en cause le diagnostic.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-03',
    courseId: 'crs-neuro-14',
    questionNumber: 3,
    type: 'QCM',
    content: "Le seul traitement médicamenteux ayant démontré un allongement modeste de la survie sans trachéotomie dans la SLA est :",
    options: [
      "A) La L-Dopa.",
      "B) Le Riluzole (antagoniste glutamatergique).",
      "C) La pyridostigmine (Mestinon).",
      "D) Les corticoïdes à forte dose.",
      "E) L'interféron bêta-1a."
    ],
    correctAnswers: [1],
    explanation: "Le Riluzole (50 mg x 2/j), anti-glutamate, allonge la survie moyenne d'environ 3 mois dans la SLA.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-04',
    courseId: 'crs-neuro-14',
    questionNumber: 4,
    type: 'QCM',
    content: "La chorée de Huntington est une affection neurodégénérative à transmission :",
    options: [
      "A) Autosomique récessive liée à la frataxine.",
      "B) Autosomique dominante avec pénétrance complète, causée par l'expansion de triplets CAG sur le gène HTT (chromosome 4).",
      "C) Récessive liée au chromosome X.",
      "D) Exclusivement mitochondriale maternelle.",
      "E) Non génétique, purement environnementale."
    ],
    correctAnswers: [1],
    explanation: "La maladie de Huntington est autosomique dominante à pénétrance complète, liée à l'expansion anormale de répétitions du triplet CAG (> 36-39 répétitions) codant pour la polyglutamine dans l'huntingtine.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-05',
    courseId: 'crs-neuro-14',
    questionNumber: 5,
    type: 'QCM',
    content: "La triade clinique caractéristique de la maladie de Huntington associe :",
    options: [
      "A) Mouvements choréiques involontaires, troubles psychiatriques/comportementaux (dépression, irritabilité) et démence sous-cortico-frontale progressive.",
      "B) Tremblement de repos, akinésie et rigidité plastique.",
      "C) Ataxie cérébelleuse, aréflexie ostéotendineuse et signe de Babinski bilatéral.",
      "D) Crises d'épilepsie myoclonique, surdité et diabète sucré.",
      "E) Paraparésie spastique pure, neuropathie optique et ichtyose."
    ],
    correctAnswers: [0],
    explanation: "La triade choréique classique associe mouvements choréo-athétosiques généralisés, syndrome psychiatrique (parfois inaugural) et déclin cognitif progressif.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-06',
    courseId: 'crs-neuro-14',
    questionNumber: 6,
    type: 'QCM',
    content: "À l'IRM cérébrale d'un patient atteint de chorée de Huntington avérée, l'anomalie morphologique typique est :",
    options: [
      "A) Une dilatation du 4ème ventricule isolée.",
      "B) Une atrophie bilatérale et symétrique de la tête des noyaux caudés donnant un aspect élargi et carré aux cornes frontales des ventricules latéraux.",
      "C) Des hypersignaux périventriculaires en doigts de Dawson.",
      "D) Un aspect en 'croix' du pont (hot cross bun sign).",
      "E) Une atélectasie des pédoncules cérébelleux moyens."
    ],
    correctAnswers: [1],
    explanation: "L'atrophie sévère de la tête des noyaux caudés efface le relief externe normal des cornes frontales ventriculaires, qui deviennent rectangulaires/carrées.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-14-07',
    courseId: 'crs-neuro-14',
    questionNumber: 7,
    type: 'QCM',
    content: "L'Ataxie de Friedreich est caractérisée génétiquement par :",
    options: [
      "A) Une expansion de triplets GAA dans le gène FXN codant pour la frataxine (chromosome 9), transmise sur le mode autosomique récessif.",
      "B) Une délétion du chromosome 5q.",
      "C) Une mutation du gène de la superoxide dismutase (SOD1).",
      "D) Une transmission dominante liée à l'X.",
      "E) Une translocation robertsonienne équilibrée."
    ],
    correctAnswers: [0],
    explanation: "L'ataxie de Friedreich est la plus fréquente des ataxies héréditaires (transmission autosomique récessive) causée par une expansion instable de triplets GAA dans le gène de la frataxine.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-08',
    courseId: 'crs-neuro-14',
    questionNumber: 8,
    type: 'QCM',
    content: "Le tableau neurologique clinique de l'Ataxie de Friedreich associe typiquement :",
    options: [
      "A) Un syndrome cérébelleux mixte (statique et cinétique), une aréflexie ostéotendineuse aux membres inférieurs, un syndrome cordonnal postérieur (perte du sens vibratoire) et un signe de Babinski bilatéral.",
      "B) Une hémiplégie flasque pure avec aphasie de Broca.",
      "C) Un tremblement d'attitude isolé sensible à l'alcool.",
      "D) Une tétraplégie aiguë ascendante flasque fébrile.",
      "E) Des céphalées en casque avec paralysie du regard vers le haut."
    ],
    correctAnswers: [0],
    explanation: "Friedreich associe atteinte spinocérébelleuse (ataxie), cordonale postérieure (proprioception altérée, aréflexie) et pyramidale (Babinski bilatéral paradoxalement associé à l'aréflexie).",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-14-09',
    courseId: 'crs-neuro-14',
    questionNumber: 9,
    type: 'QCM',
    content: "Parmi les atteintes extra-neurologiques de l'Ataxie de Friedreich, quelle complication conditionne le pronostic vital majeur ?",
    options: [
      "A) L'insuffisance surrénalienne aiguë.",
      "B) La cardiomyopathie hypertrophique avec troubles du rythme et insuffisance cardiaque.",
      "C) La colite ulcéreuse chronique.",
      "D) La lithiase vésiculaire pigmentaire récurrente.",
      "E) Le mélanome malin cutané."
    ],
    correctAnswers: [1],
    explanation: "La cardiomyopathie hypertrophique (souvent obstructive) est présente chez plus de 60-80% des patients et constitue la principale cause de mortalité précoce dans la maladie de Friedreich.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-10',
    courseId: 'crs-neuro-14',
    questionNumber: 10,
    type: 'QCM',
    content: "L'atrophie multisystématisée (AMS) se distingue de la maladie de Parkinson idiopathique par :",
    options: [
      "A) Une excellente réponse prolongée et stable à de faibles doses de L-Dopa.",
      "B) Une dysautonomie précoce et sévère (hypotension orthostatique, impuissance, incontinence urinaire), un syndrome cérébelleux ou pyramidal et une mauvaise réponse à la L-Dopa.",
      "C) L'absence complète de rigidité musculaire.",
      "D) Un tremblement de repos unilatéral pur à 4-6 Hz persistant 20 ans.",
      "E) La survenue exclusive chez l'enfant de moins de 10 ans."
    ],
    correctAnswers: [1],
    explanation: "L'AMS (synucléinopathie) associe parkinsonisme peu dopasensible, dysautonomie précoce marquée et atteinte pyramidale ou cérébelleuse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-11',
    courseId: 'crs-neuro-14',
    questionNumber: 11,
    type: 'QCM',
    content: "La Paralysie Supranucléaire Progressive (PSP ou maladie de Steele-Richardson-Olszewski) se caractérise cliniquement par :",
    options: [
      "A) Des chutes précoces vers l'arrière (rétropulsion), une paralysie préférentielle du regard vertical vers le bas et une rigidité axiale.",
      "B) Une cécité corticale avec hallucinations auditives.",
      "C) Un nystagmus giratoire pur avec hémiparésie transitoire.",
      "D) Une chorée généralisée avec amyotrophie distale.",
      "E) Une tétraplégie spasmodique avec coma prolongé."
    ],
    correctAnswers: [0],
    explanation: "La PSP (taupathie) est marquée par une instabilité posturale avec chutes précoces en arrière, une dystonie cervicale en extension et une paralysie du regard vertical descendant.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-12',
    courseId: 'crs-neuro-14',
    questionNumber: 12,
    type: 'QCM',
    content: "Le signe du 'colibri' ou du 'pingouin' à l'IRM sagittale encéphalique correspond à l'atrophie du tegmentum mésencéphalique évocatrice de :",
    options: [
      "A) La maladie d'Alzheimer débutante.",
      "B) La paralysie supranucléaire progressive (PSP).",
      "C) La sclérose en plaques rémittente.",
      "D) L'abcès cérébral à pyogènes.",
      "E) Le craniopharyngiome kystique."
    ],
    correctAnswers: [1],
    explanation: "L'atrophie sélective du mésencéphale avec préservation du pont donne à la coupe sagittale T1 une silhouette évoquant un colibri ou un pingouin, très évocatrice de PSP.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-14-13',
    courseId: 'crs-neuro-14',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans la Démence à Corps de Lewy (DCL), les critères cardinaux associent :",
    options: [
      "A) Des fluctuations cognitives marquées, des hallucinations visuelles précises et récurrentes, un syndrome parkinsonien spontané et une hypersensibilité majeure aux neuroleptiques.",
      "B) Une aphasie de Wernicke brutale avec agraphie pure.",
      "C) Une chorée aiguë post-streptococcique.",
      "D) Une épilepsie généralisée tonico-clonique dès l'âge de 20 ans.",
      "E) Une paraplégie flasque avec anesthésie thermo-algique en niveau."
    ],
    correctAnswers: [0],
    explanation: "Les critères diagnostiques de la DCL incluent : fluctuations de l'attention/cognition, hallucinations visuelles élaborées et spontanées, parkinsonisme et sensibilité catastrophique aux neuroleptiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-14',
    courseId: 'crs-neuro-14',
    questionNumber: 14,
    type: 'QCM',
    content: "La Dégénérescence Corticobasale (DCB) se manifeste de manière caractéristique par :",
    options: [
      "A) Une atrophie musculaire spinale bilatérale symétrique pure.",
      "B) Une asymétrie motrice majeure, une apraxie idéomotrice unilatérale avec phénomène de 'membre étranger' (main capricieuse/aliénée) et une dystonie focale.",
      "C) Une fièvre ondulante avec splénomégalie.",
      "D) Une neuropathie périphérique sensitive pure axonale.",
      "E) Des vomissements en jet matinaux récurrents."
    ],
    correctAnswers: [1],
    explanation: "La DCB présente un syndrome asymétrique avec rigidité dystonique, apraxie sévère d'un membre et syndrome de la main étrangère (alien limb).",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-14-15',
    courseId: 'crs-neuro-14',
    questionNumber: 15,
    type: 'QCM',
    content: "Quelle est la principale cause de décès chez les patients atteints de Sclérose Latérale Amyotrophique ?",
    options: [
      "A) L'insuffisance rénale terminale par néphropathie tubulaire.",
      "B) La décompensation respiratoire aiguë consécutive à la paralysie des muscles diaphragmatiques et intercostaux, souvent précipitée par une fausse route ou surinfection bronchique.",
      "C) L'infarctus du myocarde transmural.",
      "D) L'hémorragie digestive haute par rupture de varices œsophagiennes.",
      "E) L'accident vasculaire cérébral hémorragique."
    ],
    correctAnswers: [1],
    explanation: "L'atteinte des motoneurones innervant le diaphragme et les fausses routes répétées (paralysie bulbaire) mènent à l'insuffisance respiratoire terminale (90% des décès dans la SLA).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-16',
    courseId: 'crs-neuro-14',
    questionNumber: 16,
    type: 'QCM',
    content: "À l'électromyogramme (EMG), quel tableau est exigé pour affirmer le diagnostic de SLA selon les critères révisés d'El Escorial ?",
    options: [
      "A) Un tracé purement myogène avec potentiels polyphasiques de brève durée.",
      "B) Des signes de dénervation active (fibrillations, ondes lentes positives, potentiels de fasciculation) et de réinnervation chronique dans au moins 3 territoires (bulbaire, cervical, thoracique ou lombo-sacré).",
      "C) Des blocs de conduction motrice persistants hors des zones d'enclavement anatomique.",
      "D) Un ralentissement exclusif des vitesses de conduction sensitive sans anomalie motrice.",
      "E) Un décrément significatif à la stimulation répétitive à 3 Hz."
    ],
    correctAnswers: [1],
    explanation: "L'EMG confirme l'atteinte diffuse de la corne antérieure : potentiels de fasciculations et dénervation active disséminée dans au moins 3 étages sans anomalie sensitive.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-14-17',
    courseId: 'crs-neuro-14',
    questionNumber: 17,
    type: 'QCM',
    content: "Dans la maladie de Charcot-Marie-Tooth (CMT de type 1A), quelle est l'anomalie génétique la plus commune ?",
    options: [
      "A) Une duplication du gène PMP22 sur le chromosome 17p11.2.",
      "B) Une délétion du chromosome 22q11.",
      "C) Une mutation du gène de la dystrophine.",
      "D) Une expansion de triplets CTG dans le gène DMPK.",
      "E) Une trisomie partielle 21."
    ],
    correctAnswers: [0],
    explanation: "CMT1A (neuropathie démyélinisante motrice et sensitive héréditaire la plus fréquente) est causée dans 70-80% des cas par une duplication de 1,5 Mb englobant le gène PMP22.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-14-18',
    courseId: 'crs-neuro-14',
    questionNumber: 18,
    type: 'QCM',
    content: "L'aspect sémiologique caractéristique des membres inférieurs chez un patient atteint d'une maladie de Charcot-Marie-Tooth évoluée est :",
    options: [
      "A) Des cuisses épaissies avec jambes œdématiées en poteau.",
      "B) Une amyotrophie distale en 'jarretière' ou 'en bouteille de champagne renversée' avec pieds creux et orteils en griffe.",
      "C) Des genoux en genu valgum majeur avec laxité ligamentaire généralisée.",
      "D) Des ulcérations trophiques perforantes indolores avec anesthésie thermoalgique pure.",
      "E) Une hypertrophie musculaire globale des quadriceps."
    ],
    correctAnswers: [1],
    explanation: "L'amyotrophie distale prédominant sur la loge antéro-externe de jambe donne l'aspect classique de jambe de coq ou bouteille de champagne renversée, associée à des pieds creux bilatéraux.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-19',
    courseId: 'crs-neuro-14',
    questionNumber: 19,
    type: 'QCM',
    content: "Dans les démences fronto-temporales (DFT, maladie de Pick), les manifestations inaugurales prédominent sur :",
    options: [
      "A) Les troubles précoces du comportement, la désinhibition sociale, l'apathie, l'anosognosie et les stéréotypies avec conservation relative initiale de la mémoire épisodique.",
      "B) L'amnésie antérograde pure isolée sans trouble comportemental.",
      "C) Une apraxie constructive exclusive.",
      "D) Une perte brutale de l'audition bilatérale.",
      "E) Une hémi-négligence gauche aiguë."
    ],
    correctAnswers: [0],
    explanation: "La DFT est marquée d'abord par les altérations des conduites sociales et de la personnalité (désinhibition, gloutonnerie, apathie, perte d'empathie) avant les déficits mnésiques.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-20',
    courseId: 'crs-neuro-14',
    questionNumber: 20,
    type: 'QCM',
    content: "Quelle précaution thérapeutique majeure doit être impérativement respectée chez un patient suspect de Démence à Corps de Lewy ?",
    options: [
      "A) Ne jamais administrer d'inhibiteur de l'acétylcholinestérase.",
      "B) Éviter formellement la prescription de neuroleptiques conventionnels (antipsychotiques typiques) en raison du risque de syndrome malin ou d'aggravation parkinsonienne léthale.",
      "C) Interdire toute hydratation orale.",
      "D) Éviter toute rééducation motrice kinésithérapique.",
      "E) Proscrire systématiquement les analgésiques de palier 1."
    ],
    correctAnswers: [1],
    explanation: "La DCL comporte une sensibilité idiosyncrasique gravissime aux neuroleptiques (qui peuvent déclencher rigidité catatonique, dysautonomie fatale ou syndrome malin des neuroleptiques).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-21',
    courseId: 'crs-neuro-14',
    questionNumber: 21,
    type: 'QCM',
    content: "L'Amyotrophie Spinale Antérieure (SMA) de type 1 (maladie de Werdnig-Hoffmann) se manifeste chez le nouveau-né ou nourrisson par :",
    options: [
      "A) Une hypotonie sévère ('nourrisson de chiffon'), une aréflexie ostéotendineuse, des fasciculations linguales et une paralysie motrice prédominant sur les racines et le tronc, liée à des mutations du gène SMN1.",
      "B) Une hypertonie pyramidale élastique avec clonus inépuisable des chevilles.",
      "C) Un nystagmus congénital pur.",
      "D) Une surdité de perception isolée.",
      "E) Des convulsions néonatales réfractaires sans déficit moteur."
    ],
    correctAnswers: [0],
    explanation: "La SMA de type 1 est la forme la plus grave de dégénérescence des motoneurones de la moelle chez le nourrisson (gène SMN1 en 5q13) : hypotonie majeure, fasciculations de la langue, détresse respiratoire.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-22',
    courseId: 'crs-neuro-14',
    questionNumber: 22,
    type: 'QCM',
    content: "Le phénomène d'anticipation génétique, particulièrement net dans la chorée de Huntington, se traduit par :",
    options: [
      "A) Une transmission qui s'arrête spontanément après deux générations.",
      "B) Une survenue de la maladie à un âge de plus en plus précoce et avec une sévérité clinique accrue au fil des générations successives, surtout lors de la transmission paternelle.",
      "C) Une mutation qui devient récessive avec les générations.",
      "D) L'apparition obligatoire d'anomalies rénales associées.",
      "E) Une résistance accrue aux médicaments sédatifs."
    ],
    correctAnswers: [1],
    explanation: "L'expansion instable des triplets CAG lors de la méiose (surtout lors de la spermatogénèse) allonge le nombre de répétitions chez les descendants, avançant l'âge de début de la maladie.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-14-23',
    courseId: 'crs-neuro-14',
    questionNumber: 23,
    type: 'QCM',
    content: "La prise en charge nutritionnelle d'un patient atteint de SLA présentant des fausses routes récurrentes et une perte de poids de 15% repose sur :",
    options: [
      "A) L'arrêt de toute nutrition.",
      "B) La pose d'une gastrostomie percutanée radiologique ou endoscopique (GPR/GPE) avant que la capacité vitale forcée (CVF) ne chute sous 50%.",
      "C) Le gavage par sonde nasogastrique permanente pendant plusieurs années.",
      "D) La prescription d'antidiarrhéiques de façon systématique.",
      "E) L'administration exclusive de sérum glucosé par voie sous-cutanée."
    ],
    correctAnswers: [1],
    explanation: "La gastrostomie est préconisée tôt dès une perte de poids > 10% ou troubles majeurs de déglutition, impérativement avant une insuffisance respiratoire sévère (CVF > 50%) pour limiter le risque anesthésique.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-14-24',
    courseId: 'crs-neuro-14',
    questionNumber: 24,
    type: 'QCM',
    content: "Concernant la protéinopathie en cause dans la Sclérose Latérale Amyotrophique non liée à SOD1, la protéine majoritairement accumulée dans les inclusions intraneuronales est :",
    options: [
      "A) La protéine TDP-43 (hyperphosphorylée et tronquée).",
      "B) La protéine bêta-amyloïde Aβ42.",
      "C) La protéine huntingtine mutée uniquement.",
      "D) La chaîne légère des immunoglobulines.",
      "E) La myosine cardiaque."
    ],
    correctAnswers: [0],
    explanation: "Plus de 95% des formes sporadiques et familiales de SLA (et DFT associées) présentent des agrégats nucléocytoplasmiques anormaux de protéine TDP-43.",
    difficulty: 'difficile'
  },
  {
    id: 'q-nro-14-25',
    courseId: 'crs-neuro-14',
    questionNumber: 25,
    type: 'QCM',
    content: "Dans le syndrome de Guillain-Barré par opposition aux neuropathies dégénératives génétiques, la caractéristique d'installation est :",
    options: [
      "A) Une évolution lentement progressive sur plusieurs dizaines d'années.",
      "B) Une polyradiculonévrite aiguë démyélinisante d'installation rapide en quelques jours à 4 semaines, souvent post-infectieuse, avec dissociation albumino-cytologique au LCR.",
      "C) Une transmission mendélienne autosomique dominante avec pénétrance variable.",
      "D) Une atteinte motrice asymétrique pure sans aucun signe sensitif subjectif.",
      "E) Une guérison impossible avec décès obligatoire en quelques semaines."
    ],
    correctAnswers: [1],
    explanation: "Guillain-Barré est une urgence inflammatoire aiguë post-infectieuse (installation < 4 semaines, dissociation albumino-cytologique), à l'inverse des dégénérescences motoneuronales et neuropathies génétiques.",
    difficulty: 'facile'
  },

  // 5 CLINICAL CASES
  {
    id: 'q-nro-14-c01',
    courseId: 'crs-neuro-14',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Un homme de 58 ans consulte pour une maladresse progressive de la main droite avec difficulté à ouvrir les bouteilles et tourner les clés, apparue il y a 6 mois. À l'examen, vous notez une amyotrophie des éminences thénar et des premiers espaces interosseux de la main droite avec de fines secousses musculaires spontanées (fasciculations). Étonnamment, le réflexe bicipital droit est très vif et polycinétique, et le réflexe styloradial droit est également exagéré avec signe de Hoffmann positif. Il n'y a aucun trouble sensitif ni sphinctérien. Quel diagnostic devez-vous évoquer en priorité ?",
    options: [
      "A) Syndrome du canal carpien bilatéral sévère.",
      "B) Sclérose Latérale Amyotrophique (maladie de Charcot).",
      "C) Sclérose en plaques forme rémittente.",
      "D) Polyradiculonévrite chronique CIDP.",
      "E) Myasthénie auto-immune généralisée."
    ],
    correctAnswers: [1],
    explanation: "La coexistence dans le même territoire d'un syndrome neurogène périphérique (amyotrophie, fasciculations) et d'un syndrome pyramidal (ROT vifs, polycinétiques, Hoffmann) sans atteinte sensitive est pathognomonique de la SLA.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-c02',
    courseId: 'crs-neuro-14',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : Quel examen complémentaire devez-vous réaliser en première intention pour étayer ce diagnostic et éliminer un bloc de conduction motrice ?",
    options: [
      "A) Électroneuromyogramme (ENMG) des 4 membres et des muscles de la face/langue.",
      "B) Électroencéphalogramme prolongé avec vidéo.",
      "C) Biopsie musculaire du quadriceps.",
      "D) Dosage des anticorps anti-récepteur de l'acétylcholine.",
      "E) Scintigraphie thyroïdienne à l'iode 131."
    ],
    correctAnswers: [0],
    explanation: "L'ENMG confirme la dénervation motrice diffuse dans plusieurs étages et élimine une neuropathie motrice à blocs de conduction (NMBC) qui est le grand diagnostic différentiel curable par IgIV.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-c03',
    courseId: 'crs-neuro-14',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Un homme de 42 ans, sans antécédent personnel, est amené par son épouse pour irritabilité croissante, impulsivité, désintérêt pour son travail et mouvements brusques involontaires des membres et de la tête, ressemblant à une danse saccadée. Son père est décédé en institution à l'âge de 52 ans dans un tableau de démence et de mouvements anormaux. L'IRM cérébrale montre une atrophie marquée de la tête des noyaux caudés. Quel diagnostic posez-vous ?",
    options: [
      "A) Maladie de Parkinson à début précoce.",
      "B) Chorée de Sydenham post-streptococcique.",
      "C) Chorée de Huntington.",
      "D) Maladie de Wilson.",
      "E) Dégénérescence fronto-temporale avec corps de Pick."
    ],
    correctAnswers: [2],
    explanation: "L'histoire familiale autosomique dominante, les troubles comportementaux, la chorée et l'atrophie bicaudée à l'IRM signent la maladie de Huntington.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-c04',
    courseId: 'crs-neuro-14',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Une adolescente de 15 ans présente des troubles de l'équilibre à la marche, aggravés dans l'obscurité. L'examen retrouve une ataxie proprioceptive et cérébelleuse, une abolition complète des réflexes rotuliens et achilléens, mais paradoxalement un signe de Babinski bilatéral. L'examen des pieds montre des pieds creux bilatéraux avec scoliose dorsale. L'échocardiographie objective une cardiomyopathie hypertrophique concentrique. Quel est le diagnostic génétique sous-jacent ?",
    options: [
      "A) Sclérose tubéreuse de Bourneville.",
      "B) Maladie de Duchenne de Boulogne.",
      "C) Ataxie de Friedreich (mutation du gène de la frataxine).",
      "D) Syndrome de Guillain-Barré forme motrice pure.",
      "E) Maladie de Tay-Sachs."
    ],
    correctAnswers: [2],
    explanation: "L'association ataxie spinocérébelleuse + aréflexie + Babinski bilatéral + pieds creux + cardiomyopathie hypertrophique chez l'adolescent est typique de l'ataxie de Friedreich.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-14-c05',
    courseId: 'crs-neuro-14',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un patient de 68 ans est adressé pour chutes inexpliquées survenues dès la première année d'évolution d'un syndrome parkinsonien rigide axial. L'examen note une immobilité faciale avec regard fixe, une rétropulsion majeure au demi-tour, et une impossibilité d'abaisser les yeux sur commande alors que le réflexe oculo-céphalique vertical (yeux de poupée) est parfaitement préservé. Quel syndrome parkinsonien atypique présente ce patient ?",
    options: [
      "A) Maladie de Parkinson idiopathique forme trémulante.",
      "B) Paralysie Supranucléaire Progressive (maladie de Steele-Richardson-Olszewski).",
      "C) Maladie de Creutzfeldt-Jakob forme sporadique.",
      "D) Atrophie multisystématisée forme cérébelleuse.",
      "E) Hydrocéphalie à pression normale décompensée."
    ],
    correctAnswers: [1],
    explanation: "Le déficit du regard vertical vers le bas surmontable aux manœuvres oculo-céphaliques (atteinte supranucléaire) avec chutes précoces en arrière définit la PSP.",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_14_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-14-mindmap',
    courseId: 'crs-neuro-14',
    title: 'Mind Map : Pathologies Neurodégénératives Majeures',
    type: 'mindmap',
    content: `# Mind Map : Pathologies Neurodégénératives

## 1. Maladie du Motoneurone : SLA (Charcot)
- **Physiopathologie** : Dégénérescence 1er MN (pyramidal) + 2ème MN (corne antérieure/noyaux bulbaires). Protéine TDP-43.
- **Sémiologie** : Amyotrophie + fasciculations + crampes + ROT exagérés/Babinski dans le même territoire.
- **Respects cardinaux** : Oculomotricité, sphincters, sensibilité.
- **Traitement** : Riluzole (survie +3 mois), VNI si CVF < 50%, gastrostomie si fausses routes/perte > 10%.

## 2. Chorée de Huntington
- **Génétique** : Autosomique dominante, triplets CAG (> 36) sur HTT (chromosome 4). Phénomène d'anticipation.
- **Clinique** : Chorée + Démence sous-cortico-frontale + Troubles psychiatriques (dépression, agressivité).
- **Imagerie** : Atrophie bilatérale de la tête du noyau caudé (cornes frontales élargies).

## 3. Ataxie de Friedreich
- **Génétique** : Autosomique récessive, triplets GAA sur FXN (frataxine, chr 9).
- **Clinique** : Ataxie cérébelleuse + Atteinte cordonale postérieure + Aréflexie avec Babinski bilatéral + Pieds creux + Scoliose.
- **Complication vitale** : Cardiomyopathie hypertrophique obstructive.

## 4. Syndromes Parkinsoniens Atypiques (Parkinson-Plus)
- **AMS** : Dysautonomie sévère (hypotension orthostatique) + Parkinsonisme non dopasensible + Atteinte cérébelleuse/pyramidale.
- **PSP** : Paralysie supranucléaire du regard vertical (vers le bas) + Chutes précoces en arrière (rétropulsion) + Signe du colibri.
- **DCL** : Hallucinations visuelles précises + Fluctuations attentionnelles + Sensibilité mortelle aux neuroleptiques.
- **DCB** : Asymétrie sévère + Apraxie + Phénomène de membre étranger (main aliénée).`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-14-astuces',
    courseId: 'crs-neuro-14',
    title: 'Astuces & Pièges aux Concours : Maladies Neurodégénératives',
    type: 'astuce',
    content: `### Pièges Incontournables aux Concours

1. **SLA = Association Pyramidal + Périphérique sans troubles sensitifs ni sphinctériens :**
   - Si troubles sensitifs objectifs au diapason ou troubles sphinctériens inauguraux -> **Éliminer la SLA** (penser à compression médullaire ou sclérose en plaques).
2. **Friedreich = Paradoxe des réflexes :**
   - Abolition des ROT aux membres inférieurs (dégénérescence cordonale/radiculaire) mais signe de **Babinski bilatéral** présent (dégénérescence pyramidale).
3. **Huntington vs Wilson :**
   - Huntington : antécédent familial dominant, atrophie des noyaux caudés.
   - Wilson : cuivre urinaire élevé, céruléoplasmine basse, anneau de Kayser-Fleischer, curable par D-pénicillamine / Zinc.
4. **PSP :**
   - La paralysie du regard touche d'abord la **verticalité vers le bas** (difficulté pour descendre les escaliers et lire) ; elle est *supranucléaire* (conservation du regard oculo-céphalique ou réflexe des yeux de poupée).
5. **Neuroleptiques dans la Démence à Corps de Lewy :**
   - Contre-indication formelle aux neuroleptiques classiques ! En cas d'agitation ou hallucinations intolérables : privilégier les anticholinestérasiques (Donepezil, Rivastigmine) ou Clozapine à micro-doses sous surveillance hématologique.`,
    author: 'Dr. LAIDANI.M'
  }
];

// ==========================================
// LESSON 15: SPINA BIFIDA & DYSRAPHISMES SPINAUX
// ==========================================
export const NEURO_LESSON_15_QUESTIONS: Question[] = [
  {
    id: 'q-nro-15-01',
    courseId: 'crs-neuro-15',
    questionNumber: 1,
    type: 'QCM',
    content: "Le Spina Bifida est une anomalie congénitale du développement embryonnaire résultant d'un défaut de fermeture de :",
    options: [
      "A) L'intestin primitif postérieur à la 8ème semaine.",
      "B) Tube neural et des arcs vertébraux postérieurs entre le 21ème et le 28ème jour de vie embryonnaire (stade de neurulation primaire).",
      "C) La membrane pharyngienne à la 12ème semaine.",
      "D) La fente branchiale première.",
      "E) La tente du cervelet à la naissance."
    ],
    correctAnswers: [1],
    explanation: "Le spina bifida (dysraphisme) correspond à l'absence de soudure des lames vertébrales et des tissus méningo-neuraux liée à un défaut de fermeture du neuropore postérieur vers J27-J28.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-02',
    courseId: 'crs-neuro-15',
    questionNumber: 2,
    type: 'QCM',
    content: "Quelle mesure de santé publique préconceptionnelle a démontré une réduction de plus de 70% de l'incidence des anomalies de fermeture du tube neural (AFTN) ?",
    options: [
      "A) La supplémentation précoce en vitamine D à forte dose.",
      "B) La supplémentation systématique en acide folique (vitamine B9) à raison de 0,4 mg/jour (ou 5 mg/j si antécédent) débutée 1 mois avant la conception et poursuivie jusqu'à 12 SA.",
      "C) L'éviction totale du chlorure de sodium durant le premier trimestre.",
      "D) La prescription préventive d'acide acétylsalicylique à 100 mg/j.",
      "E) L'administration de vitamine A dès le test de grossesse positif."
    ],
    correctAnswers: [1],
    explanation: "La prise périconceptionnelle d'acide folique (0,4 mg/j en population générale, 5 mg/j chez les patientes à haut risque : antécédent d'AFTN ou prise d'anti-épileptiques) diminue drastiquement le spina bifida.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-03',
    courseId: 'crs-neuro-15',
    questionNumber: 3,
    type: 'QCM',
    content: "Dans la forme aperta (ouverte) la plus sévère et la plus fréquente du Spina Bifida, la myéloméningocèle se caractérise par :",
    options: [
      "A) Une extériorisation uniquement du LCR et des méninges molles recouverte d'une peau normale.",
      "B) Une issue de la moelle épinière dysplasique (plaque médullaire ou placode) et des racines nerveuses à travers la déhiscence osseuse, baignant dans le LCR sans couverture cutanée saine.",
      "C) Une absence complète de déficit neurologique moteur ou sensitif sous-jacent.",
      "D) Une conservation systématique de la motricité vésico-sphinctérienne.",
      "E) Une localisation cervicale pure dans 95% des cas."
    ],
    correctAnswers: [1],
    explanation: "La myéloméningocèle associe extériorisation des enveloppes méningées et de la plaque neurale malformée, exposée à l'air libre, avec un risque septique néonatal majeur (méningite) et déficits neurologiques sous-lésionnels.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-04',
    courseId: 'crs-neuro-15',
    questionNumber: 4,
    type: 'QCM',
    content: "À l'échographie fœtale du 2ème trimestre, quels signes indirects intracrâniens sont fortement évocateurs d'un spina bifida aperta ?",
    options: [
      "A) Le signe du 'citron' (déformation biconcave frontale du crâne) et le signe de la 'banane' (écrasement et bascule du cervelet dans le trou occipital dans le cadre d'un Chiari II).",
      "B) La présence d'un hygroma kystique cervical pur.",
      "C) Un aspect en double bulle duodénale.",
      "D) Une agénésie isolée des os propres du nez.",
      "E) Une mégavessie sans oligoamnios."
    ],
    correctAnswers: [0],
    explanation: "Le signe du citron (calpulli frontal) et le signe de la banane (cervelet incurvé comprimé dans la fosse postérieure par traction rachidienne - Chiari II) orientent vers la myéloméningocèle.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-15-05',
    courseId: 'crs-neuro-15',
    questionNumber: 5,
    type: 'QCM',
    content: "Quelle malformation encéphalique est quasi-constamment associée (dans plus de 80-90% des cas) à la myéloméningocèle lombo-sacrée ?",
    options: [
      "A) L'holoprosencéphalie alobaire.",
      "B) La malformation de Chiari de type II (hernie des amygdales cérébelleuses, du vermis et du tronc dans le foramen magnum avec hydrocéphalie).",
      "C) La lissencéphalie de type Miller-Dieker.",
      "D) L'hémimégalencéphalie unilatérale.",
      "E) Le kyste colloïde du 3ème ventricule."
    ],
    correctAnswers: [1],
    explanation: "La malformation d'Arnold-Chiari II est indissociable de la myéloméningocèle et s'accompagne très fréquemment d'une hydrocéphalie obstructive nécessitant un traitement neurochirurgical.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-06',
    courseId: 'crs-neuro-15',
    questionNumber: 6,
    type: 'QCM',
    content: "Dans le Spina Bifida Occulta (dysraphisme fermé), les stigmates cutanés lombaires ou sacrés qui doivent faire pratiquer une IRM médullaire de dépistage sont :",
    options: [
      "A) Une touffe de poils médiane (trichose), une fossette cutanée sus-coccygienne borgne ou angiome plan médian, et un lipome sous-cutané lombosacré.",
      "B) Une tache mongoloïde gris-bleutée banale du sacrum.",
      "C) Un rash maculeux érythémateux transitoire.",
      "D) Des télangiectasies péri-orbitaires bilatérales.",
      "E) Un purpura pétéchial fébrile."
    ],
    correctAnswers: [0],
    explanation: "Toute anomalie cutanée médiane du bas du dos (touffe pilaire, sinus dermique, lipome, aplasie cutanée) signale un dysraphisme occulte risquant de cacher une moelle attachée basse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-07',
    courseId: 'crs-neuro-15',
    questionNumber: 7,
    type: 'QCM',
    content: "Le syndrome de la 'moelle attachée basse' (tethered cord syndrome) consécutif à un dysraphisme spinal se manifeste typiquement chez l'enfant en croissance par :",
    options: [
      "A) Une surdité brusque avec strabisme convergent.",
      "B) Une détérioration motrice des membres inférieurs (boiterie, pied bot évolutif), des douleurs radiculaires/lombaires et des troubles sphinctériens vésicaux insidieux.",
      "C) Une puberté précoce centrale avec polyphagie.",
      "D) Une hypertension artérielle maligne rénovasculaire.",
      "E) Une cirrhose hépatique micronodulaire."
    ],
    correctAnswers: [1],
    explanation: "La traction mécanique sur le cône médullaire retenu anormalement sous L2 lors de la croissance rachidienne provoque une souffrance ischémique du cône : troubles sphinctériens, déformation orthopédique des pieds, paraparésie.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-15-08',
    courseId: 'crs-neuro-15',
    questionNumber: 8,
    type: 'QCM',
    content: "Quelle est la prise en charge immédiate d'un nouveau-né présentant une myéloméningocèle ouverte rompue à la naissance ?",
    options: [
      "A) Application de pansements secs serrés et positionnement sur le dos.",
      "B) Maintien de l'enfant en décubitus ventral strict, pansements stériles occlusifs imbibés de sérum physiologique tiède, antibioprophylaxie IV et fermeture neurochirurgicale de la placode en urgence dans les premières 24-48h de vie.",
      "C) Abstention thérapeutique complète en attendant la fermeture cutanée spontanée.",
      "D) Ponction directe de la placode neurale à l'aiguille de gros calibre.",
      "E) Bain antiseptique complet prolongé."
    ],
    correctAnswers: [1],
    explanation: "La priorité absolue est d'éviter la méningite néonatale et la dessiccation nerveuse : décubitus ventral, pansement stérile humide non compressif et fermeture neurochirurgicale réparatrice dans les 24-48 heures.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-09',
    courseId: 'crs-neuro-15',
    questionNumber: 9,
    type: 'QCM',
    content: "Dans le suivi à long terme d'un enfant porteur de myéloméningocèle, quel retentissement viscéral met le plus en jeu le pronostic fonctionnel rénal ?",
    options: [
      "A) L'insuffisance pancréatique exocrine.",
      "B) La vessie neurologique neurogène avec dyssynergie vésico-sphinctérienne, hyperpression intravésicale et reflux vésico-urétéral pouvant mener à l'insuffisance rénale chronique.",
      "C) Le reflux gastro-œsophagien acide avec œsophagite peptique.",
      "D) L'ischémie mésentérique chronique récurrente.",
      "E) Le syndrome de grêle court congénital."
    ],
    correctAnswers: [1],
    explanation: "La vessie neurogène non prise en charge (sans autosondages propres intermittents) détruit le parenchyme rénal par pyélonéphrites à répétition et reflux sous haute pression.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-10',
    courseId: 'crs-neuro-15',
    questionNumber: 10,
    type: 'QCM',
    content: "Parmi les traitements antiépileptiques suivants, lequel expose la femme enceinte au risque tératogène le plus élevé de spina bifida ?",
    options: [
      "A) La lamotrigine.",
      "B) L'acide valproïque (Dépakine®).",
      "C) Le lévétiracétam (Képpra®).",
      "D) La gabapentine.",
      "E) L'éthosuximide."
    ],
    correctAnswers: [1],
    explanation: "L'acide valproïque multiplie par 10 à 20 le risque de dysraphisme spinal (1 à 2 % de risque absolu de spina bifida lors d'une exposition au 1er trimestre).",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-11',
    courseId: 'crs-neuro-15',
    questionNumber: 11,
    type: 'QCM',
    content: "Le cône terminal de la moelle épinière chez l'adulte et le grand enfant se termine physiologiquement en regard de :",
    options: [
      "A) S3-S4.",
      "B) L1-L2 (au-dessus du disque L1-L2 ou bord supérieur de L2).",
      "C) T6-T7.",
      "D) C7-T1.",
      "E) Au sommet du coccyx."
    ],
    correctAnswers: [1],
    explanation: "À la naissance, le cône est vers L2-L3, puis il atteint son niveau définitif d'adulte en regard de L1-L2 vers l'âge de 2 ans. Tout cône situé sous L2 chez le grand enfant signe une moelle attachée basse.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-12',
    courseId: 'crs-neuro-15',
    questionNumber: 12,
    type: 'QCM',
    content: "L'allergie au latex est une complication immuno-allergique remarquablement fréquente chez les patients atteints de spina bifida, en raison de :",
    options: [
      "A) Une anomalie génétique liée au gène de la frataxine.",
      "B) L'exposition médicale précoce, massive et itérative aux gants et sondes en latex lors des chirurgies et des autosondages urinaires répétés.",
      "C) Un déficit congénital en IgA sécrétoires.",
      "D) Une intolérance croisée exclusive avec le gluten.",
      "E) L'administration systématique de vaccins vivants atténués."
    ],
    correctAnswers: [1],
    explanation: "L'exposition peropératoire et urologique précoce et répétée sensibilise jusqu'à 50-70% des patients spina bifida au latex, justifiant un environnement 'latex-free' strict dès la salle d'accouchement.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-15-13',
    courseId: 'crs-neuro-15',
    questionNumber: 13,
    type: 'QCM',
    content: "Dans le bilan prénatal d'une anomalie de fermeture du tube neural aperta, quel marqueur biochimique est classiquement très élevé dans le liquide amniotique et le sérum maternel ?",
    options: [
      "A) L'alpha-fœtoprotéine (AFP) et l'acétylcholinestérase amniotique.",
      "B) La bilirubine totale non conjuguée.",
      "C) Le cholestérol LDL.",
      "D) L'antigène carcino-embryonnaire (ACE).",
      "E) La calcitonine fœtale."
    ],
    correctAnswers: [0],
    explanation: "La fuite de sérum fœtal et de LCR par la brèche méningo-neurale ouverte entraîne une élévation franche de l'AFP sérique maternelle et de l'AFP amniotique, confirmée par l'acétylcholinestérase.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-14',
    courseId: 'crs-neuro-15',
    questionNumber: 14,
    type: 'QCM',
    content: "La dyssynergie vésico-sphinctérienne striée chez l'enfant spina bifida se caractérise par :",
    options: [
      "A) Une vidange vésicale complète et involontaire sans aucune contraction détrusorienne.",
      "B) Une contraction simultanée du sphincter urétral externe strié lors de la contraction du muscle détrusor, provoquant un obstacle fonctionnel majeur à l'écoulement de l'urine.",
      "C) Une anurie sécrétoire aiguë d'origine glomérulaire.",
      "D) Une disparition de tout volume vésical résiduel.",
      "E) Une polyurie osmotique constante."
    ],
    correctAnswers: [1],
    explanation: "La dyssynergie vésico-sphinctérienne est la contraction incoordonnée du sphincter strié pendant la vidange, créant des pics de pression intraluminale destructeurs pour le haut appareil urinaire.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-15-15',
    courseId: 'crs-neuro-15',
    questionNumber: 15,
    type: 'QCM',
    content: "Parmi les malformations orthopédiques secondaires les plus fréquentes chez l'enfant atteint de myéloméningocèle lombo-sacrée, on retrouve :",
    options: [
      "A) Le pied bot varus équin, la luxation congénitale de hanche paralytique et la scoliose neuromusculaire.",
      "B) L'agénésie radiale bilatérale pure.",
      "C) L'hyperostose frontale interne isolée.",
      "D) La syndactylie membraneuse des 4 membres.",
      "E) Les synostoses radio-ulnaires bilatérales."
    ],
    correctAnswers: [0],
    explanation: "Le déséquilibre musculaire agoniste/antagoniste dû à la dénervation motrice périphérique provoque des déformations articulaires majeures des membres inférieurs et du rachis.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-16',
    courseId: 'crs-neuro-15',
    questionNumber: 16,
    type: 'QCM',
    content: "Une méningocèle pure (par opposition à la myéloméningocèle) se caractérise anatomiquement par :",
    options: [
      "A) La présence d'une moelle épinière complètement extériorisée et nécrosée.",
      "B) Une hernie exclusive des méninges remplie de liquide cérébro-spinal, sans tissu nerveux neural médullaire contenu dans le sac herniaire.",
      "C) Une absence complète d'ouverture des arcs vertébraux postérieurs.",
      "D) Une cécité corticale bilatérale systématique.",
      "E) Une mortalité néonatale proche de 100%."
    ],
    correctAnswers: [1],
    explanation: "Dans la méningocèle simple, le sac herniaire ne contient que la dure-mère et l'arachnoïde avec du LCR ; la moelle reste intrarachidienne et l'examen neurologique est souvent normal.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-17',
    courseId: 'crs-neuro-15',
    questionNumber: 17,
    type: 'QCM',
    content: "L'attitude de référence pour la prévention des infections urinaires et de l'insuffisance rénale chez l'enfant spina bifida avec rétention et dyssynergie est :",
    options: [
      "A) La pose d'une sonde à demeure à vie dès la naissance.",
      "B) L'apprentissage précoce des sondages vésicaux intermittents propres (autosondages / hétérosondages 4 à 6 fois par jour) associés si besoin à des anticholinergiques (oxybutynine).",
      "C) L'administration continue d'antibiotiques à dose curative sans sondage.",
      "D) La cystectomie totale avec urétérostomie cutanée bilatérale systématique.",
      "E) La restriction hydrique sévère à moins de 200 ml/j."
    ],
    correctAnswers: [1],
    explanation: "Le cathétérisme intermittent propre régulier (Lapides) couplé aux parasympatholytiques pour réduire la pression vésicale est le gold standard absolu de protection rénale.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-18',
    courseId: 'crs-neuro-15',
    questionNumber: 18,
    type: 'QCM',
    content: "Lors de la fermeture chirurgicale néonatale d'une myéloméningocèle, l'objectif fondamental du neurochirurgien est :",
    options: [
      "A) D'amputer complètement la moelle épinière dysplasique au-dessus de la lésion.",
      "B) De libérer la placode neurale, de la réintégrer délicatement dans le canal rachidien en reconstruisant un tube dural étanche pour éviter toute fuite de LCR et infection méningée.",
      "C) D'injecter des antibiotiques intra-thécaux sous forte pression.",
      "D) De pratiquer une résection bilatérale des reins.",
      "E) De fusionner les têtes fémorales au bassin."
    ],
    correctAnswers: [1],
    explanation: "La cure chirurgicale consiste en la dissection de la placode des berges cutanées, sa fermeture en cylindre, la fermeture étanche de la dure-mère puis la couverture aponévrotique et cutanée.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-15-19',
    courseId: 'crs-neuro-15',
    questionNumber: 19,
    type: 'QCM',
    content: "La chirurgie prénatale (in utero) de la myéloméningocèle (réalisée entre 19 et 26 SA selon l'essai MOMS) a montré par rapport à la chirurgie postnatale :",
    options: [
      "A) Une absence de tout bénéfice avec mortalité fœtale accrue.",
      "B) Une diminution significative du besoin de dérivation de l'hydrocéphalie, une régression de la hernie du cervelet (Chiari II) et une amélioration de la motricité des membres inférieurs à l'âge de 30 mois.",
      "C) Une guérison complète avec retour à un état neurologique strictement indemne.",
      "D) La disparition immédiate de tout risque de prématurité.",
      "E) L'éviction totale de toute vessie neurogène."
    ],
    correctAnswers: [1],
    explanation: "L'essai randomisé MOMS a démontré que la chirurgie fœtale in utero divise par deux le recours à la dérivation ventriculaire pour hydrocéphalie et améliore significativement la motricité fonctionnelle.",
    difficulty: 'difficile'
  },
  {
    id: 'q-nro-15-20',
    courseId: 'crs-neuro-15',
    questionNumber: 20,
    type: 'QCM',
    content: "Quel type de méningite infectieuse aiguë est le plus redouté chez un nouveau-né porteur d'une myéloméningocèle non encore opérée ?",
    options: [
      "A) Méningite à méningocoque B de transmission pharyngée.",
      "B) Méningite à entérobactéries (Escherichia coli, Klebsiella) ou Staphylococcus epidermidis / aureus par contamination cutanéo-fécale locale de la brèche méningée.",
      "C) Méningite lymphocytaire à virus West-Nile.",
      "D) Méningite amibienne primitive par Naegleria fowleri.",
      "E) Méningite syphilitique tardive."
    ],
    correctAnswers: [1],
    explanation: "La brèche cutanéo-durale en zone périnéale expose aux germes de la flore fécale et cutanée (entérobactéries, staphylocoques), justifiant une antibiothérapie large en cas de surinfection.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-21',
    courseId: 'crs-neuro-15',
    questionNumber: 21,
    type: 'QCM',
    content: "Dans le Spina Bifida avec hydrocéphalie secondaire, la surveillance du nourrisson opéré doit impérativement comporter :",
    options: [
      "A) La mesure répétée de la glycémie à jeun.",
      "B) La courbe du périmètre crânien (PC), la palpation de la fontanelle antérieure et la recherche de signes de dysfonctionnement de valve (somnolence, vomissements, regard en coucher de soleil).",
      "C) Des radiographies du thorax mensuelles systématiques.",
      "D) Un test à la sueur semestriel.",
      "E) Une surveillance de l'oxymétrie de pouls nocturne continue."
    ],
    correctAnswers: [1],
    explanation: "La mesure scrupuleuse du périmètre crânien et la recherche de l'hypertension intracrânienne par dysfonction de valve (ventriculopéritonéale) sont fondamentales chez ces enfants.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-22',
    courseId: 'crs-neuro-15',
    questionNumber: 22,
    type: 'QCM',
    content: "Le diastématomyélie est un dysraphisme spinal caractérisé par :",
    options: [
      "A) Une duplication du tube digestif antérieur.",
      "B) Une fente longitudinale séparant la moelle épinière en deux hémi-moelles distinctes, séparées par un éperon osseux, cartilagineux ou fibreux médian.",
      "C) Une absence congénitale de dure-mère crânienne.",
      "D) Une agénésie du corps calleux isolée.",
      "E) Une hernie gastrique trans-diaphragmatique."
    ],
    correctAnswers: [1],
    explanation: "La diastématomyélie divise la moelle épinière en deux moitiés par un septum ou éperon médian rigide qui fixe la moelle et génère un syndrome de moelle attachée basse.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-15-23',
    courseId: 'crs-neuro-15',
    questionNumber: 23,
    type: 'QCM',
    content: "Quelle posologie quotidienne d'acide folique doit être prescrite à une femme ayant un antécédent personnel ou obstétrical d'anomalie de fermeture du tube neural qui désire concevoir ?",
    options: [
      "A) 0,05 mg par jour.",
      "B) 0,4 mg par jour.",
      "C) 5 mg par jour, débutée au moins 1 à 3 mois avant la conception et poursuivie jusqu'à la fin du 1er trimestre.",
      "D) 50 mg par jour au 3ème trimestre uniquement.",
      "E) L'acide folique est formellement contre-indiqué en cas d'antécédent."
    ],
    correctAnswers: [2],
    explanation: "En cas d'antécédent d'AFTN ou traitement antiépileptique inducteur/valproate, la posologie est majorée à 5 mg/jour (dose forte) au lieu de 0,4 mg/jour.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-24',
    courseId: 'crs-neuro-15',
    questionNumber: 24,
    type: 'QCM',
    content: "Le sinus dermique congénital est une variété de dysraphisme occulte qui comporte un risque redoutable de :",
    options: [
      "A) Méningites bactériennes purulentes à répétition ou d'abcès médullaire / épidural par communication directe entre la surface cutanée et le canal rachidien.",
      "B) Perforation gastrique aiguë.",
      "C) Rétinoblastome bilatéral.",
      "D) Phéochromocytome ectopique.",
      "E) Myocardiopathie dilatée familiale."
    ],
    correctAnswers: [0],
    explanation: "Le sinus dermique forme un trajet tubulaire fistuleux borgne entre la peau et les méninges ou la moelle : c'est une porte d'entrée infectieuse menant à des méningites récidivantes et des abcès.",
    difficulty: 'moyen'
  },
  {
    id: 'q-nro-15-25',
    courseId: 'crs-neuro-15',
    questionNumber: 25,
    type: 'QCM',
    content: "Chez un enfant spina bifida atteint d'une atteinte lombo-sacrée basse (S1-S4), le tableau moteur attendu est :",
    options: [
      "A) Une tétraplégie flasque complète.",
      "B) Une marche autonome possible avec déficit de la flexion plantaire du pied (triceps sural) et fessiers, mais persistance majeure de troubles sphinctériens vésico-anaux.",
      "C) Une absence de tout réflexe du tronc cérébral.",
      "D) Une paraplégie complète haute spastique avec anesthésie sous-mamelonnaire.",
      "E) Une ataxie cérébelleuse pure sans déficit de force."
    ],
    correctAnswers: [1],
    explanation: "Les lésions sacrées préservent le psoas (L2) et le quadriceps (L3-L4), autorisant la marche, mais frappent le contingent sacré (S2-S4) régissant les sphincters et la sensibilité périnéale en selle.",
    difficulty: 'moyen'
  },

  // 5 CLINICAL CASES
  {
    id: 'q-nro-15-c01',
    courseId: 'crs-neuro-15',
    questionNumber: 26,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 1) : Une jeune femme de 26 ans, épileptique traitée par valproate de sodium (1000 mg/j), consulte à 8 semaines d'aménorrhée pour découverte de grossesse non planifiée. Elle n'a pris aucune supplémentation vitaminique. L'échographie morphologique précoce montre une lésion kystique postérieure de la région lombo-sacrée avec visualisation d'une plaque neurale affleurant à la surface et un crâne en forme de citron avec cervelet incurvé en banane. Quel diagnostic anatomique posez-vous ?",
    options: [
      "A) Spina bifida aperta avec myéloméningocèle et malformation d'Arnold-Chiari II.",
      "B) Tératome sacro-coccygien bénin pur.",
      "C) Spina bifida occulta asymptomatique.",
      "D) Encéphalocèle occipitale isolée.",
      "E) Craniosténose coronale fœtale."
    ],
    correctAnswers: [0],
    explanation: "L'exposition au valproate, l'absence de folates, la masse lombo-sacrée ouverte et les signes intracrâniens (citron + banane) signent la myéloméningocèle avec Chiari II.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-c02',
    courseId: 'crs-neuro-15',
    questionNumber: 27,
    type: 'Cas Clinique',
    content: "Cas Clinique 1 (Partie 2) : À la naissance de ce nouveau-né à terme par césarienne programmée, quelle est l'attitude immédiate en salle de travail ?",
    options: [
      "A) Poser l'enfant sur le dos, laver la lésion au savon ordinaire et attendre 1 semaine avant avis spécialisé.",
      "B) Placer le nouveau-né en décubitus ventral strict, couvrir la placode avec des compresses stériles imbibées de sérum physiologique tiède sous champ occlusif étanche non compressif, démarrer une antibiothérapie intraveineuse et transférer d'urgence en neurochirurgie pédiatrique pour fermeture précoce.",
      "C) Pratiquer une ponction lombaire d'emblée à travers la placode médullaire.",
      "D) Réaliser un cathétérisme de la veine ombilicale et administrer du chlorure de potassium.",
      "E) Pratiquer des tractions vigoureuses sur les membres inférieurs."
    ],
    correctAnswers: [1],
    explanation: "Prise en charge néonatale standardisée : décubitus ventral, pansement stérile humide protecteur, asepsie stricte, antibioprophylaxie et neurochirurgie réparatrice dans les premières 24-48 heures.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-c03',
    courseId: 'crs-neuro-15',
    questionNumber: 28,
    type: 'Cas Clinique',
    content: "Cas Clinique 2 : Un nourrisson de 6 mois présente au milieu du sacrum une fossette cutanée avec une touffe de poils bruns et un petit angiome plan. Les parents rapportent que l'enfant bouge bien les deux jambes. Quel examen d'imagerie devez-vous prescrire pour rechercher un dysraphisme occulte ou une moelle attachée basse ?",
    options: [
      "A) Une tomodensitométrie abdominale avec injection.",
      "B) Une IRM médullo-rachidienne lombo-sacrée.",
      "C) Une scintigraphie rénale au DMSA.",
      "D) Une radiographie du bassin de face isolée.",
      "E) Un électroencéphalogramme."
    ],
    correctAnswers: [1],
    explanation: "L'IRM médullaire est l'examen de référence pour visualiser la terminaison du cône médullaire, l'éventuelle présence d'un lipome intradural, d'un filum terminal épaissi ou d'une moelle attachée sous L2.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-c04',
    courseId: 'crs-neuro-15',
    questionNumber: 29,
    type: 'Cas Clinique',
    content: "Cas Clinique 3 : Un garçon de 7 ans opéré d'une myéloméningocèle néonatale développe depuis 3 mois une dégradation de la marche avec aggravation d'un pied bot équin droit, des douleurs lombaires d'effort et l'apparition récente de fuites urinaires diurnes alors qu'il était continent. L'IRM montre un cône médullaire situé en L4 tracté vers le bas par un tissu cicatriciel fibreux. De quel syndrome s'agit-il ?",
    options: [
      "A) Syndrome de la moelle attachée basse secondaire (retethering).",
      "B) Sclérose en plaques forme pédiatrique rémittente.",
      "C) Méningite bactérienne décapitée.",
      "D) Myopathie facio-scapulo-humérale.",
      "E) Compression médullaire extradurale sur hématome épidural spontané."
    ],
    correctAnswers: [0],
    explanation: "Le retethering ou réattachement médullaire cicatriciel est une complication classique lors de la poussée de croissance de l'enfant : douleurs, aggravation motrice, déformations orthopédiques et dégradation sphinctérienne.",
    difficulty: 'facile'
  },
  {
    id: 'q-nro-15-c05',
    courseId: 'crs-neuro-15',
    questionNumber: 30,
    type: 'Cas Clinique',
    content: "Cas Clinique 4 : Un enfant de 4 ans porteur d'une myéloméningocèle lombo-sacrée présente une dilatation pyélocalicielle bilatérale au bilan échographique de routine. Le bilan urodynamique révèle une vessie de faible capacité avec contractions non inhibées du détrusor à 70 cmH2O et fermeture tonique du sphincter urétral strié pendant les contractions. Quelle stratégie urologique permet de préserver la fonction rénale de cet enfant ?",
    options: [
      "A) Instaurer des autosondages/hétérosondages intermittents réguliers (4 à 6 fois par jour) associés à un traitement parasympatholytique anticholinergique (ex: oxybutynine) pour abaisser la pression vésicale.",
      "B) Pratiquer une néphrectomie unilatérale d'emblée.",
      "C) Prescrire une cure prolongée de diurétiques de l'anse (furosémide).",
      "D) Mettre en place un collecteur pénien externe sans aucun sondage.",
      "E) Forcer la miction par manœuvres de Credé appuyées sur l'hypogastre."
    ],
    correctAnswers: [0],
    explanation: "Les pressions vésicales élevées (> 40 cmH2O) détruisent les reins : la prise en charge repose impérativement sur le sondage intermittent pluriquotidien + anticholinergiques (les manœuvres de poussée ou Credé sont formellement proscrites car augmentent le reflux).",
    difficulty: 'facile'
  }
];

export const NEURO_LESSON_15_RESOURCES: CourseResource[] = [
  {
    id: 'res-nro-15-mindmap',
    courseId: 'crs-neuro-15',
    title: 'Mind Map : Spina Bifida & Dysraphismes Spinaux',
    type: 'mindmap',
    content: `# Mind Map : Spina Bifida & Dysraphismes Spinaux

## 1. Classification Anatomique
- **Spina Bifida Aperta (Ouvert, 80%)**
  - **Myéloméningocèle** : Issue de méninges + placode médullaire à vif. Risque infectieux majeur + déficit neurologique sévère.
  - **Méningocèle** : Issue de méninges et LCR seuls sans moelle. Peau souvent saine, examen neurologique normal.
- **Spina Bifida Occulta (Fermé)**
  - Lésion recouverte par peau normale.
  - Signes cutanés sentinelles : Touffe de poils, sinus dermique, lipome sacré, angiome plan médian.
  - Risque : Moelle attachée basse (tethered cord).

## 2. Étiologies & Prévention
- Défaut de fermeture du neuropore postérieur (J27-J28).
- Facteurs de risque : Valproate de sodium, diabète maternel, carence en folates.
- **Prévention capitale** : Acide folique (Vit B9) périconceptionnel
  - 0,4 mg/j en population générale (1 mois avant conception -> 12 SA).
  - 5 mg/j si antécédent d'AFTN ou traitement par antiépileptiques.

## 3. Complications et Retentissements Systémiques
- **Neurologique** : Hydrocéphalie obstructive (80%), Malformation de Chiari II, paraplégie/paraparésie.
- **Urologique (Pronostic Vital)** : Vessie neurogène, dyssynergie vésico-sphinctérienne, reflux, pyélonéphrites, insuffisance rénale.
- **Orthopédique** : Pieds bots, luxation paralytique de hanche, scoliose neurogène.
- **Allergologique** : Allergie au Latex majeure (> 60%) par exposition itérative.

## 4. Prise en Charge
- **Naissance** : Décubitus ventral, pansement stérile tiède humide, antibioprophylaxie, cure neurochirurgicale < 48h.
- **Urologie** : Sondages intermittents propres + Anticholinergiques (Oxybutynine). Proscrire le Credé !`,
    author: 'Dr. LAIDANI.M'
  },
  {
    id: 'res-nro-15-astuces',
    courseId: 'crs-neuro-15',
    title: 'Astuces & Pièges aux Concours : Spina Bifida',
    type: 'astuce',
    content: `### Pièges Fréquents aux Concours de Résidanat

1. **Acide Folique : Posologies à savoir par cœur :**
   - Sans antécédent : **0,4 mg/jour** (400 μg).
   - Avec antécédent d'AFTN ou sous Valproate/inducteurs : **5 mg/jour**.
   - Doit être débuté **avant la fécondation** (1 mois avant) pour être efficace car la fermeture du tube neural se produit à J28 !
2. **Chiari II vs Chiari I :**
   - Chiari I : Hernie des amygdales cérébelleuses isolée chez l'adulte/ado, sans spina bifida.
   - Chiari II : Hernie du vermis, du tronc cérébral et du 4ème ventricule, **indissociable de la myéloméningocèle**.
3. **Manœuvres de Credé (pression manuelle hypogastrique) :**
   - **Formellement contre-indiquées** en cas de dyssynergie car elles majorent le reflux vésico-urétéral sous haute pression vers les reins.
4. **Allergie au Latex :**
   - Tout patient atteint de spina bifida doit être considéré comme allergique au latex jusqu'à preuve du contraire : matériel 100% sans latex ("latex-free") dès la naissance.`,
    author: 'Dr. LAIDANI.M'
  }
];
