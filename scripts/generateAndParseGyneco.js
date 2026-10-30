import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public/assets/aistudio');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// -------------------------------------------------------------
// Helper to create HTML template for the 5 files
// -------------------------------------------------------------
function makeHtml(title, subtitle, qcms, cases) {
  let qcmHtml = '';
  qcms.forEach((q, idx) => {
    const qNum = idx + 1;
    const optLis = q.options.map((opt, i) => {
      const letter = String.fromCharCode(65 + i);
      return `      <li data-letter="${letter}">${opt}</li>`;
    }).join('\n');

    const ansLetters = q.answers.map(i => String.fromCharCode(65 + i)).join(', ');

    qcmHtml += `
  <!-- Q${qNum} -->
  <div class="q-card">
    <div class="q-top">
      <span class="q-num">Q${qNum}</span>
      <span class="badge">${q.type || 'QCM'}</span>
    </div>
    <p class="q-text">${q.text}</p>
    <ul class="q-options">
${optLis}
    </ul>
    <details class="correction">
      <summary>Voir la correction et l'explication détaillée</summary>
      <div class="correction-body">
        <span class="answer-line">Réponse : ${ansLetters}</span>
        <div class="why">${q.explanation}</div>
      </div>
    </details>
  </div>
`;
  });

  let casesHtml = '';
  cases.forEach((c, idx) => {
    const casNum = idx + 1;
    const optLis = c.options.map((opt, i) => {
      const letter = String.fromCharCode(65 + i);
      return `      <li data-letter="${letter}">${opt}</li>`;
    }).join('\n');

    const ansLetters = c.answers.map(i => String.fromCharCode(65 + i)).join(', ');

    casesHtml += `
  <!-- CAS ${casNum} -->
  <article class="case">
    <div class="case-head">
      <h3>Cas Clinique N°${casNum} : ${c.title}</h3>
    </div>
    <div class="vignette">
      <p>${c.vignette}</p>
    </div>
    <div class="case-q">
      <p class="q-text"><strong>Question :</strong> ${c.question}</p>
      <ul class="q-options">
${optLis}
      </ul>
      <details class="correction">
        <summary>Correction</summary>
        <div class="correction-body">
          <span class="answer-line">Réponse : ${ansLetters}</span>
          <div class="why">${c.explanation}</div>
        </div>
      </details>
    </div>
  </article>
`;
  });

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | Révision 5ème Année Médecine</title>
</head>
<body>
<header>
  <h1>${title}</h1>
  <p>${subtitle}</p>
</header>
<main>
<section id="qcm">
  <h2>Banque de 25 QCM exigeants</h2>
${qcmHtml}
</section>
<section id="cas">
  <h2>5 Cas Cliniques Hospitaliers Algériens</h2>
${casesHtml}
</section>
</main>
</body>
</html>`;
}

// -------------------------------------------------------------
// DATA 1: Infections Génitales Basses & Hautes
// -------------------------------------------------------------
const infectionsQcms = [
  {
    text: "Parmi les propositions suivantes concernant la vaginose bactérienne à Gardnerella vaginalis, quelle est l'affirmation exacte ?",
    options: [
      "Elle se caractérise par des leucorrhées mousseuses, verdâtres et aérées avec prurit intense.",
      "Le pH vaginal est acide, habituellement inférieur à 4,5.",
      "Le test au KOH 10% (sniff test) dégage une odeur caractéristique d'amines volatiles (poisson pourri).",
      "La présence de levures bourgeonnantes à l'examen direct affirme le diagnostic.",
      "Le traitement de première intention repose sur les macrolides par voie générale."
    ],
    answers: [2],
    explanation: "La vaginose bactérienne associe des pertes grisâtres fluides, un pH vaginal > 4,5, un sniff test positif aux amines et la présence de clue cells à l'état frais. Le traitement de référence est le Métronidazole."
  },
  {
    text: "Quel est l'agent étiologique bactérien le plus fréquemment responsable de salpingite aiguë chez la femme jeune ?",
    options: [
      "Candida albicans",
      "Chlamydia trachomatis",
      "Streptocoque du groupe B",
      "Trichomonas vaginalis",
      "Treponema pallidum"
    ],
    answers: [1],
    explanation: "Chlamydia trachomatis est le germe prédominant des infections génitales hautes chez la femme jeune, souvent insidieux et pourvoyeur d'infertilité tubaire secondaire."
  },
  {
    text: "Quels sont les éléments cardinaux du trépied clinique évocateur d'une salpingite aiguë non compliquée ?",
    options: [
      "Douleurs pelviennes bilatérales spontanées ou provoquées à la mobilisation utérine",
      "Fièvre variable, parfois modérée ou absente",
      "Leucorrhées purulentes ou métrorragies sales associées",
      "Masse pelvienne fixée de plus de 10 cm au toucher vaginal",
      "Aménorrhée secondaire de plus de 3 mois"
    ],
    answers: [0, 1, 2],
    explanation: "Le trépied associe douleurs pelviennes, fièvre (inconstante) et pertes vaginales anormales purulentes."
  },
  {
    text: "Concernant le syndrome de Fitz-Hugh-Curtis, quelle est la proposition exacte ?",
    options: [
      "Il s'agit d'une périhépatite caractérisée par des adhérences en cordes de violon entre la capsule hépatique et le diaphragme.",
      "Il est exclusivement provoqué par le virus Herpes simplex de type 2.",
      "La symptomatologie prédomine au niveau de la fosse iliaque gauche.",
      "Il nécessite obligatoirement une hépatectomie partielle d'urgence.",
      "Les transaminases hépatiques sont constamment augmentées à plus de 50 fois la normale."
    ],
    answers: [0],
    explanation: "Périhépatite secondaire à Chlamydia ou au gonocoque avec adhérences péritonéales en « cordes de violon » à la cœlioscopie."
  },
  {
    text: "Quelle antibiothérapie probabiliste de première intention est recommandée dans la salpingite aiguë non compliquée ?",
    options: [
      "Amoxicilline seule per os pendant 5 jours",
      "Ceftriaxone IM (dose unique) + Doxycycline per os (14 jours) + Métronidazole per os (14 jours)",
      "Ciprofloxacine en monothérapie pendant 21 jours",
      "Gentamicine IV seule en cure courte de 48 heures",
      "Pénicilline G IV à forte dose pendant 10 jours"
    ],
    answers: [1],
    explanation: "Trithérapie ciblant gonocoque (C3G), Chlamydia (cyclines 14j) et anaérobies (métronidazole 14j)."
  },
  {
    text: "Concernant la trichomonase urogénitale à Trichomonas vaginalis, quelle est l'affirmation exacte ?",
    options: [
      "Il s'agit d'une infection non sexuellement transmissible à transmission hydrique exclusive.",
      "Les leucorrhées sont typiquement blanches, épaisses et grumeleuses en lait caillé.",
      "Le col utérin peut présenter un aspect piqueté framboisé caractéristique (colpitis macularis).",
      "L'examen parasitologique direct entre lame et lamelle est constamment négatif.",
      "Le traitement du partenaire n'est pas nécessaire."
    ],
    answers: [2],
    explanation: "IST à protozoaire flagellé mobile, leucorrhées verdâtres spumeuses, col framboisé. Métronidazole chez les 2 partenaires."
  },
  {
    text: "Quelle séquelle majeure à long terme complique fréquemment les salpingites aiguës méconnues ou récidivantes ?",
    options: [
      "Sténose de l'artère rénale",
      "Infertilité tubaire mécanique et sur-risque majeur de grossesse extra-utérine",
      "Cancer de l'endomètre",
      "Insuffisance ovarienne prématurée d'origine auto-immune",
      "Prolapsus génital de grade 3"
    ],
    answers: [1],
    explanation: "L'altération de la lumière tubaire et des cils conduit à l'obstruction tubaire (hydrosalpinx, stérilité) et à la GEU."
  },
  {
    text: "La candidose vulvo-vaginale à Candida albicans se manifeste typiquement par :",
    options: [
      "Des pertes fétides grises sans prurit",
      "Un prurit vulvaire féroce avec leucorrhées blanches grumeleuses en « lait caillé » et érythème vulvaire vif",
      "Un pH vaginal alcalin supérieur à 6",
      "Une fièvre supérieure à 39°C avec frissons",
      "Des ulcérations indurées indolores"
    ],
    answers: [1],
    explanation: "Prurit intense, pertes caillebotées blanches, pH vaginal normal ou acide (< 4,5), pseudo-hyphes à l'examen microscopique direct."
  },
  {
    text: "Devant toute infection génitale basse ou haute sexuellement transmissible, quelle mesure doit être systématique ?",
    options: [
      "L'abstention thérapeutique chez les partenaires asymptomatiques",
      "Le dépistage et traitement conjoint du ou des partenaires sexuels et le dépistage des autres IST (VIH, VHB, Syphilis)",
      "Une ovariectomie unilatérale de précaution",
      "La pose immédiate d'un dispositif intra-utérin pour drainer la cavité",
      "La réalisation d'un scanner thoraco-abdominal"
    ],
    answers: [1],
    explanation: "Prise en charge du partenaire pour casser la chaîne de transmission et bilan sérologique complet des IST."
  },
  {
    text: "Quelles sont les indications impératives d'hospitalisation d'une patiente pour infection génitale haute ?",
    options: [
      "Suspicion d'abcès tubo-ovarien ou péritonite pelvienne",
      "Grossesse en cours associée",
      "Doute diagnostique avec une urgence chirurgicale (appendicite, torsion d'annexe)",
      "Forme hyperalgique ou intolérance aux traitements per os",
      "Toutes les propositions sus-citées sont exactes"
    ],
    answers: [4],
    explanation: "Toutes ces situations justifient une hospitalisation en service de gynécologie pour traitement parentéral et surveillance continue."
  },
  {
    text: "Quel examen d'imagerie de première intention est indispensable pour éliminer un abcès tubo-ovarien ou un pyosalpinx ?",
    options: [
      "Échographie pelvienne par voie endovaginale et sus-pubienne avec Doppler",
      "Hystérosalpingographie en phase aiguë fébrile",
      "Radiographie du bassin sans préparation",
      "Scintigraphie osseuse au technétium",
      "Urographie intraveineuse"
    ],
    answers: [0],
    explanation: "L'échographie pelvienne endovaginale est l'examen clé. L'hystérosalpingographie est formellement contre-indiquée en phase aiguë fébrile."
  },
  {
    text: "Concernant l'infection génitale à Neisseria gonorrhoeae chez la femme, quelle proposition est exacte ?",
    options: [
      "Elle est constamment symptomatique avec douleurs fulgurantes dès les premières heures.",
      "Elle se traduit fréquemment par une cervicite mucopurulente avec col érythémateux et friable.",
      "La coloration de Gram montre des bacilles à Gram positif en chaînettes.",
      "Elle ne se dissémine jamais aux articulations ou à la peau.",
      "Le vaccin anti-gonococcique protège à 100% à vie."
    ],
    answers: [1],
    explanation: "Neisseria gonorrhoeae est un diplocoque Gram négatif en grains de café, provoquant une cervicite mucopurulente, asymptomatique chez 50% des femmes."
  },
  {
    text: "Quelle complication oculaire néonatale est prévenue par l'instillation systématique de collyre chez le nouveau-né à la naissance ?",
    options: [
      "La cataracte congénitale rubéoleuse",
      "L'ophtalmie purulente néonatale à gonocoque et Chlamydia",
      "Le glaucome congénital héréditaire",
      "Le rétinoblastome bilatéral",
      "Le décollement de rétine spontané"
    ],
    answers: [1],
    explanation: "Le collyre antibiotique prévient la conjonctivite purulente néonatale qui peut évoluer rapidement vers la cécité par perforation cornéenne."
  },
  {
    text: "Dans la vaginose bactérienne, quel test rapide réalisé en consultation permet d'objectiver l'odeur caractéristique d'amines ?",
    options: [
      "Test au lugol (Schiller)",
      "Test à la potasse (KOH à 10%) ou Whiff test",
      "Test de Fern (cristallisation en feuille de fougère)",
      "Test au bleu de méthylène sur frottis",
      "Test à l'acide acétique 5%"
    ],
    answers: [1],
    explanation: "L'addition d'une goutte de KOH 10% libère des polyamines volatiles (putrescine, cadavérique) produites par les bactéries anaérobies associées."
  },
  {
    text: "Quel geste diagnostique et thérapeutique de référence permet de visualiser les trompes et de réaliser un prélèvement bactériologique direct en cas de doute clinique sur une salpingite ?",
    options: [
      "La cœlioscopie (laparoscopie) abdominale",
      "La colonoscopie totale",
      "La cystoscopie rétrograde",
      "La culdocentèse à l'aveugle",
      "L'urographie rétrograde"
    ],
    answers: [0],
    explanation: "La cœlioscopie est l'examen de référence : elle visualise l'œdème tubaire, les fausses membranes, draine d'éventuels abcès et confirme la bactériologie."
  },
  {
    text: "Chez une femme porteuse d'un dispositif intra-utérin (DIU) présentant une salpingite aiguë grave, quelle conduite immédiate est requise ?",
    options: [
      "Laisser le DIU en place indéfiniment sans antibiothérapie",
      "Débuter l'antibiothérapie par voie intraveineuse et retirer le DIU après quelques heures sous couverture antibiotique",
      "Procéder à une hystérectomie totale immédiate",
      "Remplacer le DIU par un autre stérilet au cuivre dans la même séance",
      "Injecter du sérum physiologique intra-utérin sous pression"
    ],
    answers: [1],
    explanation: "Le DIU doit être retiré sous couverture antibiotique (après initiation du traitement) pour supprimer le corps étranger infecté, et envoyé en culture bactériologique."
  },
  {
    text: "Quel germe anaérobie filamenteux à Gram positif est spécifiquement associé aux infections pelviennes chroniques sur stérilet au long cours ?",
    options: [
      "Actinomyces israelii",
      "Pseudomonas aeruginosa",
      "Listeria monocytogenes",
      "Helicobacter pylori",
      "Vibrio cholerae"
    ],
    answers: [0],
    explanation: "Actinomyces israelii est classiquement retrouvé sur DIU maintenu de nombreuses années, pouvant donner des abcès pelviens pseudotumoraux avec grains jaunes soufrés."
  },
  {
    text: "Quelle est la durée minimale recommandée de traitement par Doxycycline dans la salpingite aiguë non compliquée à Chlamydia trachomatis ?",
    options: [
      "2 jours",
      "5 jours",
      "14 jours",
      "6 mois",
      "1 an"
    ],
    answers: [2],
    explanation: "14 jours complets sont requis pour éradiquer Chlamydia et prévenir la rechute et les séquelles tubaires."
  },
  {
    text: "Parmi les signes suivants, lequel plaide le plus en faveur d'un abcès du cul-de-sac de Douglas compliquant une pelvipéritonite ?",
    options: [
      "Cul-de-sac de Douglas souple et indolore",
      "Bombement douloureux, rénitent et chaud du cul-de-sac postérieur au toucher vaginal (« cri du Douglas »)",
      "Disparition complète des contractions utérines",
      "Hypotension isolée sans aucune douleur",
      "Échographie pelvienne strictement normale sans aucun épanchement"
    ],
    answers: [1],
    explanation: "L'abcès du Douglas donne un bombement très douloureux et rénitent accessible au toucher vaginal, justiciable d'un drainage chirurgical ou d'une ponction transvaginale sous échoguidage."
  },
  {
    text: "Concernant l'infection à Papillomavirus humain (HPV), quelle est l'affirmation exacte ?",
    options: [
      "Les sérotypes 6 et 11 sont à haut risque oncogène pour le col utérin.",
      "Les sérotypes 16 et 18 sont responsables de plus de 70% des cancers invasifs du col de l'utérus.",
      "L'infection par le HPV est systématiquement définitive et ne guérit jamais spontanément.",
      "Le préservatif confère une protection absolue à 100% contre la transmission du HPV.",
      "Il n'existe aucun vaccin prophylactique disponible contre le HPV."
    ],
    answers: [1],
    explanation: "HPV 16 et 18 sont les deux génotypes majeurs à haut risque oncogène (oncoprotéines E6 dégradant p53 et E7 inactivant pRb). 6 et 11 sont responsables des condylomes acuminés bénins."
  },
  {
    text: "Quel test moléculaire hautement sensible est aujourd'hui recommandé en première intention pour le dépistage de Chlamydia trachomatis et Neisseria gonorrhoeae ?",
    options: [
      "L'amplification des acides nucléiques (TAAN / PCR) sur premier jet d'urine ou prélèvement endocervical",
      "Le dosage des IgG sériques par ELISA",
      "La vitesse de sédimentation (VS)",
      "Le frottis cervico-vaginal conventionnel de Papanicolaou",
      "L'hémoculture sur gélose chocolat"
    ],
    answers: [0],
    explanation: "Les TAAN (PCR) présentent une sensibilité supérieure à 95% et représentent le test de référence."
  },
  {
    text: "Une bartholinite aiguë suppurée se présente typiquement comme :",
    options: [
      "Une tuméfaction douloureuse, unilatérale, inflammatoire du tiers postérieur de la grande lèvre",
      "Une ulcération indolore du clitoris",
      "Une masse rétro-utérine rénitente",
      "Une adénopathie sus-claviculaire gauche",
      "Une brûlure urétrale sans aucune anomalie vulvaire"
    ],
    answers: [0],
    explanation: "La glande de Bartholin siège au tiers postérieur de la grande lèvre. L'obstruction de son canal entraîne une surinfection avec abcès hyperalgique nécessitant drainage ou marsupialisation."
  },
  {
    text: "Dans la vaginite à Trichomonas, quelle est la couleur typique des sécrétions vaginales ?",
    options: [
      "Blanc épais cailleboté",
      "Jaune-verdâtre, fluide et spumeuse (mousseuse)",
      "Noirâtre goudronneuse",
      "Rouge vif hémorragique pure",
      "Incolore et visqueuse comme du blanc d'œuf"
    ],
    answers: [1],
    explanation: "Pertes verdâtres abondantes, spumeuses et malodorantes caractéristiques de Trichomonas."
  },
  {
    text: "Quel traitement minute (dose unique) est efficace dans la trichomonase urogénitale non compliquée ?",
    options: [
      "Métronidazole 2 g per os en prise unique",
      "Pénicilline V per os pendant 30 jours",
      "Fluconazole 50 mg par jour pendant 2 mois",
      "Gentamicine 160 mg en IM quotidienne pendant 10 jours",
      "Aspirine 1 g par jour"
    ],
    answers: [0],
    explanation: "Le Métronidazole 2g monodose (ou Tinidazole) traite efficacement Trichomonas vaginalis avec traitement simultané du partenaire."
  },
  {
    text: "Parmi les propositions suivantes concernant la flore vaginale normale (flore de Döderlein), laquelle est exacte ?",
    options: [
      "Elle est dominée par des staphylocoques dorés producteurs d'endotoxines.",
      "Elle est constituée de bacilles de Döderlein (Lactobacillus spp.) qui transforment le glycogène en acide lactique et maintiennent un pH acide protecteur (3,8 à 4,5).",
      "Elle est totalement absente chez la femme en période d'activité génitale.",
      "Son éradication par des douches vaginales quotidiennes est fortement recommandée.",
      "Elle est stimulée par la testostérone et inhibée par les œstrogènes."
    ],
    answers: [1],
    explanation: "Les lactobacilles maintiennent l'acidité vaginale via la production d'acide lactique et d'H2O2, empêchant la prolifération des pathogènes opportunistes."
  }
];

const infectionsCases = [
  {
    title: "Salpingite aiguë de la femme jeune",
    vignette: "Patiente de 24 ans, nulligeste, consulte pour des douleurs pelviennes bilatérales avec fièvre à 38,5°C et leucorrhées jaunâtres depuis 4 jours. Au TV : mobilisation utérine douloureuse et empâtement annexiel bilatéral.",
    question: "Quel est le diagnostic le plus probable et quel bilan de première intention réaliser ?",
    options: [
      "Salpingite aiguë non compliquée ; prélèvement bactériologique endocervical avec PCR Chlamydia/Gonocoque, NFS, CRP et échographie pelvienne.",
      "Grossesse extra-utérine rompue sans aucun besoin de prélèvement.",
      "Endométriose profonde sans rapport avec une infection.",
      "Appendicite rétro-cæcale isolée.",
      "Pyélonéphrite aiguë obstructive gauche."
    ],
    answers: [0],
    explanation: "Tableau d'infection génitale haute (salpingite) chez une femme jeune sexuellement active nécessitant bilan bactériologique et imagerie."
  },
  {
    title: "Périhépatite de Fitz-Hugh-Curtis",
    vignette: "Femme de 26 ans traitée pour salpingite il y a 2 semaines, consulte pour des douleurs vives de l'hypochondre droit exacerbées par l'inspiration profonde. Échographie biliaire normale, bilan hépatique subnormal.",
    question: "Quelle complication devez-vous évoquer ?",
    options: [
      "Colique hépatique lithiasique",
      "Syndrome de Fitz-Hugh-Curtis (périhépatite à Chlamydia trachomatis)",
      "Infarctus du myocarde inférieur",
      "Ulcère gastrique perforé",
      "Kyste hydatique rompu"
    ],
    answers: [1],
    explanation: "Adhérences péri-hépatiques en cordes de violon post-chlamydienne."
  },
  {
    title: "Vaginose bactérienne récidivante",
    vignette: "Patiente de 30 ans gênée par des pertes vaginales grisâtres très fluides et une odeur de poisson pourri accentuée après les rapports sexuels, sans démangeaison ni rougeur. Sniff test positif au KOH.",
    question: "Quel diagnostic posez-vous et quel est le traitement adapté ?",
    options: [
      "Vaginose bactérienne ; Métronidazole per os ou en ovules pendant 7 jours.",
      "Candidose aiguë ; ovule d'éconazole dose unique.",
      "Syphilis secondaire ; Pénicilline G retard.",
      "Herpès génital ; Aciclovir pendant 10 jours.",
      "Cancer du vagin ; radiothérapie externe."
    ],
    answers: [0],
    explanation: "Critères d'Amsel vérifiés pour la vaginose bactérienne. Traitement de choix : Métronidazole."
  },
  {
    title: "Abcès tubo-ovarien compliquant une salpingite",
    vignette: "Femme de 32 ans hospitalisée pour pelvipéritonite fébrile à 39,2°C avec masse latéro-utérine droite de 6 cm fluctuante et très douloureuse à l'échographie Doppler.",
    question: "Quelle est la stratégie thérapeutique immédiate ?",
    options: [
      "Antibiothérapie intraveineuse triple à large spectre (C3G + Métronidazole + Gentamicine) et drainage écho-guidé ou cœlioscopique en l'absence d'amélioration rapide à 48h.",
      "Traitement ambulatoire par comprimés oraux d'ibuprofène.",
      "Hystérectomie élargie d'emblée avec curage ganglionnaire lombo-aortique.",
      "Surveillance simple sans antibiotiques pendant 15 jours.",
      "Radiothérapie pelvienne anti-inflammatoire."
    ],
    answers: [0],
    explanation: "L'abcès tubo-ovarien est une urgence médico-chirurgicale associant antibiothérapie parentérale et drainage."
  },
  {
    title: "Bartholinite aiguë abcédée",
    vignette: "Femme de 22 ans présentant depuis 48 heures une tuméfaction ovalaire rouge, chaude et insomniante de la grande lèvre gauche, mesurant 4 cm, gênant la marche et la position assise.",
    question: "Quel geste thérapeutique permet un soulagement immédiat de la patiente ?",
    options: [
      "Incision-drainage et marsupialisation de la glande de Bartholin sous anesthésie locale ou générale, associée à une antibiothérapie adaptée.",
      "Ponction biopsie rénale.",
      "Application exclusive de compresses froides pendant un mois.",
      "Vulvectomie superficielle radicale.",
      "Chimiothérapie systémique."
    ],
    answers: [0],
    explanation: "L'évacuation de la collection purulente par incision et méchage ou marsupialisation apporte une antalgie spectaculaire."
  }
];

// Write Infections
fs.writeFileSync(
  path.join(publicDir, 'QCM_-_Infections_Genitales_Basses_Hautes.html'),
  makeHtml('Infections Génitales Basses & Hautes', 'Vaginites, Salpingites, Endométrites & MST | 5ème Année', infectionsQcms, infectionsCases)
);

// -------------------------------------------------------------
// DATA 2: Contraception Hormonale & Intra-Utérine
// -------------------------------------------------------------
const contraceptionQcms = [
  {
    text: "Concernant le mécanisme d'action principal de la contraception œstroprogestative combinée, quelle est la proposition exacte ?",
    options: [
      "Inhibition de l'ovulation par blocage du pic de LH et de FSH au niveau hypothalamo-hypophysaire",
      "Lésion cytotoxique directe sur les spermatozoïdes dans le vagin",
      "Destruction chirurgicale irréversible des ovaires",
      "Augmentation massive de la production de FSH hypophysaire",
      "Accélération du transit tubaire empêchant la fécondation"
    ],
    answers: [0],
    explanation: "L'effet antigonadotrope rétrocontrôle négatif de l'œstrogène et du progestatif bloque le pic ovulatoire de gonadotrophines (LH et FSH), associé à une atrophie endométriale et à l'imperméabilité de la glaire cervicale."
  },
  {
    text: "Parmi les situations cliniques suivantes, laquelle constitue une contre-indication absolue (Catégorie 4 OMS) à la contraception œstroprogestative ?",
    options: [
      "Antécédent personnel de thrombose veineuse profonde ou d'embolie pulmonaire",
      "Dysménorrhée primaire chez une adolescente",
      "Acné rétentionnelle modérée",
      "Kyste fonctionnel ovarien folliculaire",
      "Antécédent familial éloigné de diabète de type 2"
    ],
    answers: [0],
    explanation: "Tout antécédent thromboembolique veineux ou artériel, les thrombophilies constitutionnelles et le tabagisme > 35 ans sont des contre-indications absolues aux œstroprogestatifs."
  },
  {
    text: "Chez une femme de 38 ans qui fume 15 cigarettes par jour, quelle méthode contraceptive est formellement contre-indiquée ?",
    options: [
      "La pilule œstroprogestative combinée (minidosée)",
      "Le dispositif intra-utérin au cuivre",
      "L'implant progestatif sous-cutané à l'étonogestrel",
      "Les microprogestatifs oraux au lévonorgestrel ou désogestrel",
      "Le préservatif masculin"
    ],
    answers: [0],
    explanation: "Le tabagisme associé à l'âge supérieur à 35 ans majore dramatiquement le risque d'accidents vasculaires artériels et thromboemboliques veineux, contre-indiquant les œstrogènes."
  },
  {
    text: "Quel est le mécanisme d'action contraceptif prédominant du dispositif intra-utérin (DIU) au cuivre ?",
    options: [
      "Blocage complet de l'ovulation par suppression de l'axe hypothalamique",
      "Réaction inflammatoire aseptique de l'endomètre avec effet spermicide et cytotoxique des ions cuivre",
      "Fermeture chirurgicale des trompes de Fallope",
      "Destruction enzymatique des corps jaunes ovariens",
      "Induction d'une aménorrhée définitive"
    ],
    answers: [1],
    explanation: "Le DIU au cuivre induit une réaction à corps étranger inflammatoire aseptique avec libération d'ions cuivre spermicides, empêchant la fécondation et l'implantation."
  },
  {
    text: "Quelle contraception d'urgence non hormonale peut être posée jusqu'à 5 jours après un rapport sexuel non protégé ?",
    options: [
      "La pose d'un dispositif intra-utérin au cuivre",
      "L'injection d'un bolus de progestérone retard",
      "La pose d'un pessaire vaginal",
      "L'application d'un patch œstrogénique",
      "L'hystéroscopie diagnostique immédiate"
    ],
    answers: [0],
    explanation: "Le DIU au cuivre posé dans les 5 jours (120 heures) est la méthode de contraception d'urgence la plus efficace (> 99%), utilisable ensuite comme contraception régulière."
  },
  {
    text: "Concernant la contraception d'urgence hormonale par Lévonorgestrel (1,5 mg), quelle est la fenêtre temporelle optimale de prise ?",
    options: [
      "Le plus tôt possible, idéalement dans les 12 à 72 heures suivant le rapport",
      "Strictement entre le 10ème et le 14ème jour après le rapport",
      "Uniquement pendant la période menstruelle",
      "À la 6ème semaine après le retard de règles",
      "Exclusivement avant le rapport sexuel"
    ],
    answers: [0],
    explanation: "Le lévonorgestrel doit être pris le plus tôt possible, efficace jusqu'à 72 heures (3 jours). L'ulipristal acétate est efficace jusqu'à 120 heures (5 jours)."
  },
  {
    text: "Quel est l'effet secondaire métabolique ou vasculaire le plus redouté de la composante œstrogénique (éthinylestradiol) ?",
    options: [
      "L'hyperglycémie néonatale immédiate",
      "L'activation de la coagulation avec élévation du risque de maladie thrombo-embolique veineuse et artérielle",
      "La survenue systématique d'une ostéoporose fracturaire",
      "L'insuffisance rénale terminale anurique",
      "La pancréatite aiguë auto-immune"
    ],
    answers: [1],
    explanation: "L'éthinylestradiol stimule la synthèse hépatique des facteurs de coagulation (fibrinogène, facteurs VII, VIII, X) et diminue l'antithrombine III et la protéine S."
  },
  {
    text: "Parmi les propositions suivantes concernant l'implant contraceptif sous-cutané à l'étonogestrel, laquelle est exacte ?",
    options: [
      "Il assure une contraception très efficace pendant une durée de 3 ans.",
      "Il doit être inséré chirurgicalement dans le péritoine pelvien.",
      "Il contient une forte dose d'œstrogènes de synthèse.",
      "Il expose à un risque majeur de thrombose veineuse profonde chez la femme jeune.",
      "Il ne peut pas être retiré avant l'expiration des 3 ans."
    ],
    answers: [0],
    explanation: "L'implant sous-cutané progestatif (face interne du bras non dominant) a une efficacité de 99,9% pendant 3 ans, avec blocage ovulatoire et atrophie endométriale."
  },
  {
    text: "En cas d'oubli d'un comprimé d'œstroprogestatif combiné minidosé de plus de 12 heures, quelle est la règle d'or ?",
    options: [
      "Prendre immédiatement le comprimé oublié, continuer la plaquette à l'heure habituelle et utiliser des préservatifs pendant 7 jours consécutifs",
      "Arrêter définitivement la contraception pendant 6 mois",
      "Prendre 5 comprimés en une seule prise le soir même",
      "Réaliser un avortement thérapeutique d'urgence",
      "Doubler la dose quotidienne pendant tout le reste du cycle"
    ],
    answers: [0],
    explanation: "Règle des 12h : prendre le comprimé oublié dès le constat, poursuivre la plaquette normalement et adopter une contraception mécanique d'appoint pendant 7 jours."
  },
  {
    text: "Quel bénéfice non contraceptif prouvé est associé à l'utilisation prolongée des contraceptifs œstroprogestatifs ?",
    options: [
      "Réduction significative du risque de cancer de l'ovaire et de cancer de l'endomètre",
      "Disparition complète des céphalées et migraines avec aura",
      "Prévention absolue du cancer du sein",
      "Protection contre la transmission du VIH",
      "Inversion des prolapsus génitaux"
    ],
    answers: [0],
    explanation: "La prise de pilule combinée réduit de 50% le risque de cancer de l'ovaire et de l'endomètre, effet protecteur persistant des années après l'arrêt."
  },
  {
    text: "Chez une patiente présentant des migraines AVEC aura ophtalmique, la prescription d'un œstroprogestatif est :",
    options: [
      "Contre-indiquée de façon absolue (Catégorie 4 OMS) en raison du sur-risque majeur d'AVC ischémique",
      "Fortement recommandée pour guérir l'aura",
      "Autorisée uniquement à forte dose d'œstrogène",
      "Indiquée en cure continue pendant 10 ans",
      "Sans aucune incidence sur le risque neurologique"
    ],
    answers: [0],
    explanation: "Les migraines avec aura constituent une contre-indication absolue aux œstroprogestatifs en raison de l'augmentation marquée du risque d'accident vasculaire cérébral."
  },
  {
    text: "Concernant le DIU au lévonorgestrel (ex: Mirena), quel effet clinique est très fréquemment observé après quelques mois d'utilisation ?",
    options: [
      "Une diminution drastique du flux menstruel voire une aménorrhée de confort bénigne",
      "Des hémorragies cataclysmiques permanentes",
      "Une augmentation de volume des ovaires avec virilisation",
      "Une perforation spontanée dans 90% des cas",
      "Une perte de cheveux totale"
    ],
    answers: [0],
    explanation: "L'effet progestatif local atrophie fortement l'endomètre, entraînant oligo-ménorrhée ou aménorrhée chez plus de 50% des utilisatrices, très appréciée et protectrice contre l'anémie."
  },
  {
    text: "Quelle méthode contraceptive est particulièrement indiquée chez la femme allaitante dès la 3ème ou 4ème semaine du post-partum ?",
    options: [
      "Les microprogestatifs oraux (ex: désogestrel) ou l'implant progestatif",
      "La pilule œstroprogestative normodosée à 50 µg",
      "L'abstinence périodique stricte basée sur la température",
      "La radiothérapie ovarienne transitoire",
      "Le clomifène à visée contraceptive"
    ],
    answers: [0],
    explanation: "Les microprogestatifs ne passent pas significativement dans le lait maternel et n'altèrent ni la quantité ni la qualité de la lactation, contrairement aux œstrogènes."
  },
  {
    text: "Parmi les médicaments suivants, lequel est un inducteur enzymatique hépatique puissant capable de diminuer l'efficacité des pilules contraceptives ?",
    options: [
      "La Rifampicine (et certains antiépileptiques : carbamazépine, phénytoïne)",
      "Le paracétamol à dose thérapeutique",
      "La vitamine C",
      "L'aspirine à 100 mg",
      "Le sérum physiologique"
    ],
    answers: [0],
    explanation: "Les inducteurs du cytochrome P450 (rifampicine, phénobarbital, carbamazépine, millepertuis) accélèrent le catabolisme des stéroïdes contraceptifs et provoquent des échecs de contraception."
  },
  {
    text: "Avant la mise en place d'un dispositif intra-utérin (DIU), quel geste doit être réalisé systématiquement ?",
    options: [
      "Éliminer formellement une grossesse en cours (bêta-hCG ou date des règles) et dépister une infection cervico-vaginale active",
      "Réaliser un scanner pelvien injecté",
      "Effectuer un curage ganglionnaire iliaque",
      "Pratiquer une laparotomie exploratrice",
      "Administrer une héparinothérapie à dose curative"
    ],
    answers: [0],
    explanation: "Éliminer une grossesse et toute infection génitale active sont les deux prérequis absolus avant la pose d'un DIU pour éviter la dissémination endo-utérine."
  },
  {
    text: "Quel est l'indice international utilisé pour évaluer l'efficacité statistique d'une méthode contraceptive ?",
    options: [
      "L'indice de Pearl (nombre de grossesses pour 100 années-femmes)",
      "L'indice de Glasgow",
      "Le score d'Apgar",
      "L'index de Manning",
      "L'indice de Bishop"
    ],
    answers: [0],
    explanation: "L'indice de Pearl exprime le taux d'échec théorique et pratique d'une méthode contraceptive pour 100 femmes l'utilisant pendant 1 an."
  },
  {
    text: "Concernant la contraception définitive masculine (vasectomie), quelle affirmation est exacte ?",
    options: [
      "Elle consiste en la section et ligature bilatérale des canaux déférents sous anesthésie locale.",
      "Elle provoque une impuissance érectile immédiate et définitive.",
      "Elle arrête instantanément la spermatogenèse intra-testiculaire.",
      "Le sperme devient azoosperme dès la première heure post-opératoire.",
      "Elle protège à 100% contre la transmission du VIH et de la syphilis."
    ],
    answers: [0],
    explanation: "La vasectomie interrompt les canaux déférents. L'azoospermie n'est effective qu'après 3 mois (et une vingtaine d'éjaculations), contrôlée par un spermogramme."
  },
  {
    text: "Concernant la ligature tubaire chez la femme, quelle est la règle légale et médicale ?",
    options: [
      "Elle nécessite une information claire, un délai de réflexion obligatoire de 4 mois et un consentement écrit libre et éclairé.",
      "Elle peut être imposée par le conjoint sans l'accord de la patiente.",
      "Elle est réalisable dès l'âge de 14 ans sans autorisation.",
      "Elle nécessite l'accord obligatoire d'un comité d'éthique hospitalier.",
      "Elle entraîne systématiquement une ménopause précoce chirurgicale."
    ],
    answers: [0],
    explanation: "Méthode de stérilisation à visée contraceptive encadrée par la loi avec délai de réflexion de 4 mois et consentement écrit signé."
  },
  {
    text: "Quelle méthode mécanique reste la SEULE capable d'assurer simultanément la contraception et la protection contre les IST ?",
    options: [
      "Le préservatif masculin (ou féminin)",
      "Le stérilet au cuivre",
      "L'implant sous-cutané",
      "Le patch hebdomadaire",
      "L'anneau vaginal œstroprogestatif"
    ],
    answers: [0],
    explanation: "Le préservatif est la seule barrière physique réduisant la transmission des infections sexuellement transmissibles (VIH, hépatite B, gonococcie, Chlamydia)."
  },
  {
    text: "Parmi les affirmations suivantes sur la contraception du post-partum immédiat, laquelle est FAUSSE ?",
    options: [
      "La pilule œstroprogestative peut être débutée dès le premier jour suivant l'accouchement chez la femme qui allaite.",
      "L'allaitement maternel exclusif (méthode MAMA) confère une protection contraceptive relative jusqu'à 6 mois si aménorrhée persistante.",
      "Un microprogestatif peut être débuté dès J21-J28 du post-partum.",
      "La pose d'un DIU peut être réalisée à la visite post-natale des 6-8 semaines.",
      "Le risque thrombo-embolique est maximal dans les premières semaines du post-partum."
    ],
    answers: [0],
    explanation: "La pilule combinée est formellement contre-indiquée dans les 3 à 6 premières semaines du post-partum en raison du pic majeur de risque thromboembolique veineux et de l'inhibition de la lactation."
  },
  {
    text: "Concernant l'anneau vaginal contraceptif (étonogestrel / éthinylestradiol), quelle est sa modalité d'utilisation ?",
    options: [
      "Laissé en place pendant 3 semaines consécutives, puis retiré pendant 1 semaine pour provoquer l'hémorragie de privation",
      "Changé chaque matin au réveil",
      "Placé dans le canal cervical par un gynécologue chaque mois",
      "Conservé pendant 5 années consécutives sans interruption",
      "Exclusivement réservé aux femmes ménopausées"
    ],
    answers: [0],
    explanation: "L'anneau vaginal diffuse des hormones de façon constante pendant 21 jours, suivi d'une semaine d'arrêt."
  },
  {
    text: "Dans quel délai un dispositif intra-utérin déplacé ou dont les fils ne sont plus visibles doit-il être investigué ?",
    options: [
      "Par échographie pelvienne rapide pour localiser le DIU (intra-utérin, intramural ou expulsé dans le péritoine)",
      "Aucune exploration n'est nécessaire si la patiente ne se plaint de rien",
      "Par laparotomie médiane exploratrice d'emblée sans imagerie",
      "Par scintigraphie thyroïdienne",
      "Par mise sous plâtre du membre inférieur"
    ],
    answers: [0],
    explanation: "La disparition des fils au spéculum impose l'échographie endovaginale (ou radiographie de l'abdomen sans préparation en cas de suspicion de perforation péritonéale)."
  },
  {
    text: "La présence d'un antécédent de cancer du sein hormonodépendant chez une patiente :",
    options: [
      "Contre-indique formellement toute contraception hormonale, qu'elle soit œstroprogestative ou progestative pure (Catégorie 4 OMS)",
      "Nécessite une augmentation des doses d'œstrogène",
      "Indique la pose d'un implant progestatif à forte dose",
      "Est sans importance vis-à-vis des récepteurs hormonaux",
      "Autorise la prise de pilules combinées dès la rémission"
    ],
    answers: [0],
    explanation: "Les tumeurs mammaires hormonodépendantes contre-indiquent toute hormonothérapie stéroïdienne. Le DIU au cuivre ou les barrières mécaniques sont alors indiqués."
  },
  {
    text: "Concernant la contraception chez l'adolescente, quelle est la priorité clinique ?",
    options: [
      "Proposer une méthode efficace, accessible, confidentielle et promouvoir la double protection (contraception + préservatif)",
      "Exiger obligatoirement la présence des deux parents lors de la délivrance",
      "Refuser toute contraception avant 18 ans révolus",
      "Imposer la ligature tubaire précoce",
      "Interdire l'usage du préservatif"
    ],
    answers: [0],
    explanation: "La double protection prévient à la fois les grossesses non prévues et les IST, avec garantie légale du secret et de la gratuité/confidentialité."
  },
  {
    text: "Quel bilan biologique minimal préalable est recommandé avant la prescription d'une première pilule œstroprogestative chez une patiente sans antécédents ?",
    options: [
      "Glycémie à jeun et bilan lipidique (cholestérol total, triglycérides), associé à la mesure rigoureuse de la pression artérielle",
      "Bilan de thrombophilie génétique complet avec recherche de mutation facteur V de Leiden chez toutes les patientes",
      "IRM cérébrale et scanners thoraciques annuels",
      "Ponction lombaire et myélogramme",
      "Aucun interrogatoire ni mesure de la tension artérielle"
    ],
    answers: [0],
    explanation: "Recherche des facteurs de risque à l'interrogatoire, mesure de la TA et bilan lipidique/glycémique à 3-6 mois. Le bilan de thrombophilie n'est indiqué qu'en cas d'antécédents personnels ou familiaux au 1er degré de thrombose inexpliquée ou précoce."
  }
];

const contraceptionCases = [
  {
    title: "Prescription contraceptive chez une fumeuse de 36 ans",
    vignette: "Mme N., 36 ans, consulte pour renouveler sa contraception. Elle fume 1 paquet de cigarettes par jour depuis 15 ans. Sa tension artérielle est de 125/80 mmHg. Elle demande une pilule combinée.",
    question: "Quelle est votre décision médicale argumentée ?",
    options: [
      "Contre-indication absolue à la pilule œstroprogestative (tabac > 35 ans = risque thromboembolique artériel et veineux majeur) ; orienter vers un DIU (cuivre ou lévonorgestrel) ou un microprogestatif.",
      "Prescription d'une pilule combinée normodosée à 50 µg d'œstrogène.",
      "Autorisation de la pilule à condition d'associer de l'aspirine à forte dose.",
      "Ligature tubaire obligatoire immédiate sans son consentement.",
      "Abstention contraceptive totale."
    ],
    answers: [0],
    explanation: "L'association âge > 35 ans et tabac est une contre-indication de catégorie 4 de l'OMS aux œstroprogestatifs."
  },
  {
    title: "Oubli de pilule au-delà de 12 heures",
    vignette: "Jeune femme de 21 ans sous œstroprogestatif minidosé (21 jours). Elle constate à 20h qu'elle a oublié le comprimé de la veille au soir (oubli de plus de 24 heures en première semaine de plaquette). Un rapport non protégé a eu lieu la veille.",
    question: "Quelle conduite à tenir immédiate recommandez-vous ?",
    options: [
      "Prendre immédiatement le comprimé oublié, prendre celui du jour à l'heure normale, prendre une contraception d'urgence hormonale sans délai et utiliser des préservatifs pendant 7 jours.",
      "Arrêter la plaquette et attendre les prochaines règles dans un mois.",
      "Prendre 10 comprimés en une seule prise.",
      "Effectuer une hystérectomie de sécurité.",
      "Ne rien faire car un oubli en première semaine est sans danger."
    ],
    answers: [0],
    explanation: "L'oubli en semaine 1 est le plus à risque car il prolonge l'intervalle sans hormones. La contraception d'urgence s'impose vu le rapport récent."
  },
  {
    title: "Disparition des fils de stérilet",
    vignette: "Patiente de 29 ans porteuse d'un stérilet au cuivre depuis 2 ans. Lors de l'examen de routine au spéculum, le médecin ne retrouve pas les fils de traction au niveau de l'orifice externe du col.",
    question: "Quel examen complémentaire demandez-vous en première intention ?",
    options: [
      "Échographie pelvienne par voie endovaginale pour visualiser l'échogénicité du DIU dans la cavité endométriale ou rechercher une expulsion/perforation.",
      "Scintigraphie myocardique au thallium.",
      "Biopsie du col utérin aux 4 quadrants.",
      "Laparotomie médiane d'urgence au bloc.",
      "Cœlioscopie d'emblée sans imagerie préalable."
    ],
    answers: [0],
    explanation: "L'échographie pelvienne confirme immédiatement si le stérilet est bien en place, s'il a migré dans le myomètre ou s'il a été expulsé."
  },
  {
    title: "Désir de contraception d'urgence après 4 jours",
    vignette: "Étudiante de 22 ans consulte 90 heures (près de 4 jours) après un rapport sexuel accidentellement non protégé en milieu de cycle.",
    question: "Quelle option contraceptive d'urgence est la plus efficace à ce stade ?",
    options: [
      "La pose d'un DIU au cuivre (efficace jusqu'à 120 heures) ou la prise d'Ulipristal acétate (EllaOne, efficace jusqu'à 5 jours).",
      "Le lévonorgestrel classique qui reste efficace jusqu'à 10 jours.",
      "L'injection d'ocytocine en intramusculaire.",
      "La prise de 4 comprimés de paracétamol.",
      "Il n'existe plus aucune solution après 24 heures."
    ],
    answers: [0],
    explanation: "Le DIU au cuivre est efficace jusqu'à 120h (et au-delà de 99%), tout comme l'ulipristal acétate jusqu'à 5 jours. Le lévonorgestrel est inefficace au-delà de 72h."
  },
  {
    title: "Antécédent de thrombophlébite et choix contraceptif",
    vignette: "Femme de 31 ans avec antécédent documenté d'embolie pulmonaire post-fracture du fémur il y a 2 ans, porteuse d'une mutation hétérozygote du facteur V de Leiden. Elle souhaite une méthode contraceptive hautement fiable et de longue durée.",
    question: "Quelle méthode est la plus adaptée et sécuritaire ?",
    options: [
      "Dispositif intra-utérin au cuivre (aucun impact hémostatique) ou DIU au Lévonorgestrel (progestatif local sans augmentation du risque thromboembolique).",
      "Pilule œstroprogestative de 3ème génération.",
      "Anneau vaginal combiné.",
      "Patch contraceptif transdermique œstroprogestatif.",
      "Pilule séquentielle normodosée."
    ],
    answers: [0],
    explanation: "Toute contraception contenant des œstrogènes est formellement contre-indiquée. Le DIU au cuivre est la méthode de choix de première intention sans risque thrombotique."
  }
];

// Write Contraception
fs.writeFileSync(
  path.join(publicDir, 'QCM_-_Contraception.html'),
  makeHtml('Contraception Hormonale & Intra-Utérine', 'Œstroprogestatifs, Progestatifs, DIU, Contraception d\'Urgence | 5ème Année', contraceptionQcms, contraceptionCases)
);

// -------------------------------------------------------------
// DATA 3: Diabète et Grossesse
// -------------------------------------------------------------
const diabeteQcms = [
  {
    text: "Concernant le dépistage du diabète gestationnel au premier trimestre selon les critères IADPSG / OMS, quel seuil de glycémie à jeun permet d'affirmer le diagnostic ?",
    options: [
      "Glycémie veineuse à jeun ≥ 0,92 g/L (5,1 mmol/L)",
      "Glycémie à jeun ≥ 0,70 g/L",
      "Glycémie à jeun ≥ 1,40 g/L",
      "Glycémie post-prandiale ≥ 0,80 g/L",
      "Glycosurie isolée sans glycémie veineuse"
    ],
    answers: [0],
    explanation: "Au premier trimestre chez une patiente à risque, une glycémie veineuse à jeun entre 0,92 et 1,25 g/L pose le diagnostic de diabète gestationnel. ≥ 1,26 g/L signe un diabète avéré préexistant."
  },
  {
    text: "Quels sont les facteurs de risque justifiant un dépistage ciblé du diabète gestationnel dès la première consultation prénatale ?",
    options: [
      "Âge maternel ≥ 35 ans",
      "Indice de masse corporelle (IMC) prégestationnel ≥ 25 kg/m²",
      "Antécédent personnel de diabète gestationnel ou de macrosomie fœtale (poids de naissance ≥ 4000 g)",
      "Antécédent de diabète de type 2 chez un apparenté au premier degré",
      "Toutes les propositions sus-citées sont des facteurs de risque reconnus"
    ],
    answers: [4],
    explanation: "L'âge ≥ 35 ans, le surpoids/obésité, les antécédents familiaux de T2D et personnels de diabète gestationnel ou macrosomie imposent le dépistage."
  },
  {
    text: "Lors de l'HGPO avec 75 g de glucose réalisée entre 24 et 28 SA, quelles sont les valeurs seuils pathologiques (1 seule valeur anormale suffit) ?",
    options: [
      "À jeun ≥ 0,92 g/L ; à 1 heure ≥ 1,80 g/L ; à 2 heures ≥ 1,53 g/L",
      "À jeun ≥ 1,26 g/L ; à 1 heure ≥ 2,50 g/L ; à 2 heures ≥ 2,00 g/L",
      "À jeun ≥ 0,80 g/L ; à 1 heure ≥ 1,20 g/L ; à 2 heures ≥ 1,00 g/L",
      "À jeun ≥ 1,50 g/L uniquement",
      "À jeun ≥ 2,00 g/L quelle que soit la valeur post-charge"
    ],
    answers: [0],
    explanation: "Seuils IADPSG : T0 ≥ 0,92 g/L, T1h ≥ 1,80 g/L, T2h ≥ 1,53 g/L. Un seul critère au-dessus du seuil affirme le diagnostic de diabète gestationnel."
  },
  {
    text: "Quels sont les objectifs glycémiques stricts recommandés sous autosurveillance pluriquotidienne au cours de la grossesse diabétique ?",
    options: [
      "Glycémie à jeun ≤ 0,95 g/L et glycémie 2 heures post-prandiale < 1,20 g/L",
      "Glycémie à jeun ≤ 1,40 g/L et post-prandiale < 2,00 g/L",
      "Glycémie à jeun ≤ 0,50 g/L",
      "Glycémie constante à 2,50 g/L",
      "Aucun objectif chiffré n'est nécessaire"
    ],
    answers: [0],
    explanation: "Objectifs stricts pour prévenir la macrosomie : ≤ 0,95 g/L à jeun et < 1,20 g/L à 2 heures post-prandiale (ou < 1,40 g/L à 1 heure)."
  },
  {
    text: "Quelle complication néonatale majeure immédiate menace le nouveau-né de mère diabétique dans les premières heures suivant l'accouchement ?",
    options: [
      "L'hypoglycémie néonatale par hyperinsulinisme réactionnel fœtal",
      "L'hyperglycémie maligne cétosique fœtale",
      "La sténose du pylore néonatale",
      "L'atrésie de l'œsophage",
      "La surdité de perception bilatérale"
    ],
    answers: [0],
    explanation: "L'hyperglycémie maternelle stimule le pancréas fœtal (hyperinsulinisme fœtal). À la naissance, l'apport maternel en glucose est coupé alors que l'insuline fœtale reste élevée, provoquant une hypoglycémie précoce sévère."
  },
  {
    text: "Parmi les complications fœtales suivantes, laquelle est spécifiquement attribuable au mauvais équilibre glycémique périconceptionnel du diabète préexistant ?",
    options: [
      "Malformations congénitales cardiaques (transposition, CIV) et neurologiques (spina bifida, syndrome de régression caudale)",
      "Trisomie 21 par non-disjonction méiotique",
      "Syndrome de Turner 45,X0",
      "Maladie des membranes hyalines du post-terme",
      "Hémophilie A liée à l'X"
    ],
    answers: [0],
    explanation: "L'hyperglycémie pendant l'organogenèse (T1) est tératogène, multipliant par 3 à 5 le risque de cardiopathies congénitales et d'anomalies du tube neural."
  },
  {
    text: "Quelle complication mécanique redoutée lors de l'accouchement par voie basse d'un fœtus macrosome chez une mère diabétique ?",
    options: [
      "La dystocie des épaules avec risque d'élongation du plexus brachial (lésion de C5-C6)",
      "La rétention de tête dernière dans la présentation céphalique",
      "L'inversion utérine spontanée à l'engagement",
      "La rupture prématurée de la trompe droite",
      "L'apoplexie utéro-placentaire"
    ],
    answers: [0],
    explanation: "La macrosomie diabétique prédomine sur le tronc et le diamètre bi-acromial, augmentant le risque d'enclavement des épaules sous la symphyse pubienne."
  },
  {
    text: "Quelle est la mesure thérapeutique de première intention indispensable dès le diagnostic de diabète gestationnel ?",
    options: [
      "Prise en charge diététique adaptée (1600-2000 kcal/j, fractionnement en 3 repas + 2 collations) et activité physique régulière adaptée",
      "Insulinothérapie intraveineuse à forte dose d'emblée chez toutes les patientes",
      "Prescription de sulfamides hypoglycémiants oraux à forte dose",
      "Déclenchement immédiat du travail quel que soit l'âge gestationnel",
      "Jeûne complet jusqu'au terme"
    ],
    answers: [0],
    explanation: "Les règles hygiéno-diététiques normalisent la glycémie dans 70 à 80% des diabètes gestationnels. L'insuline n'est débutée qu'en cas d'échec des objectifs après 7 à 10 jours de diététique."
  },
  {
    text: "Les antidiabétiques oraux (metformine, sulfamides) au cours de la grossesse en pratique obstétricale courante de référence :",
    options: [
      "Sont généralement contre-indiqués ou évités, l'insuline étant le traitement de référence incontesté ne traversant pas la barrière placentaire",
      "Sont le traitement obligatoire de première intention",
      "Sont autorisés uniquement à dose double",
      "Doivent remplacer l'insuline chez les diabétiques de type 1",
      "Sont injectés en intra-amniotique"
    ],
    answers: [0],
    explanation: "L'insuline humaine ne passe pas la barrière fœto-placentaire et reste le traitement médicamenteux de référence de tout diabète gestationnel ou préexistant non équilibré par le régime."
  },
  {
    text: "Concernant l'hydramnios au cours de la grossesse diabétique, quel est son mécanisme physiopathologique principal ?",
    options: [
      "Polyurie fœtale induite par l'hyperglycémie et la diurèse osmotique du fœtus",
      "Sécrétion excessive de liquide amniotique par les bronches maternelles",
      "Absence congénitale de déglutition fœtale par atrésie bilatérale des trompes d'Eustache",
      "Rupture de la vessie maternelle dans l'utérus",
      "Transsudation de liquide ascitique maternel"
    ],
    answers: [0],
    explanation: "L'hyperglycémie fœtale entraîne une diurèse osmotique avec polyurie fœtale massive, gonflant le volume du liquide amniotique (index amniotique > 24 cm)."
  },
  {
    text: "Quelle cardiopathie hypertrophique fœtale réversible est classiquement observée chez le nouveau-né de mère diabétique mal équilibrée ?",
    options: [
      "Hypertrophie septale asymétrique sous-aortique",
      "Tétralogie de Fallot complète",
      "Coarctation de l'aorte serrée",
      "Atrésie tricuspide avec tronc artériel commun",
      "Communication inter-auriculaire type ostium secundum"
    ],
    answers: [0],
    explanation: "L'hyperinsulinisme fœtal stimule la synthèse myocardique et provoque une hypertrophie septale asymétrique qui régresse spontanément en quelques semaines à mois après la naissance."
  },
  {
    text: "Quelle surveillance échographique spécifique est recommandée chez la femme enceinte diabétique au 3ème trimestre ?",
    options: [
      "Évaluation mensuelle de la biométrie fœtale (diamètre bipariétal, circonférence abdominale CA > 90e percentile) et de la quantité de liquide amniotique",
      "Radiographie du bassin chaque semaine",
      "Échographie des glandes surrénales maternelles",
      "Mesure de la longueur du fémur toutes les 48 heures",
      "Arrêt total des échographies après 28 SA"
    ],
    answers: [0],
    explanation: "La circonférence abdominale (CA) reflète directement la taille hépatique et le dépôt adipeux fœtal sous l'effet de l'insuline fœtale, alertant sur la macrosomie."
  },
  {
    text: "À quel seuil de poids fœtal estimé (PFE) à l'échographie du terme la césarienne prophylactique programmée est-elle recommandée chez la patiente diabétique pour prévenir la dystocie des épaules ?",
    options: [
      "PFE ≥ 4500 g (ou 4250-4500 g selon les recommandations)",
      "PFE ≥ 3000 g",
      "PFE ≥ 2500 g",
      "PFE ≥ 6000 g uniquement",
      "Le poids fœtal n'a aucune influence sur la voie d'accouchement"
    ],
    answers: [0],
    explanation: "Chez la femme diabétique, le risque de dystocie des épaules augmente considérablement dès 4250-4500 g justifiant la proposition d'une césarienne prophylactique."
  },
  {
    text: "Concernant la surveillance du post-partum immédiat chez la patiente ayant présenté un diabète gestationnel pur :",
    options: [
      "Arrêt immédiat de l'insulinothérapie dès la délivrance et surveillance de la glycémie capillaire",
      "Maintien de l'insuline à double dose pendant 1 an",
      "Interdiction formelle de l'allaitement maternel",
      "Hospitalisation en réanimation pendant 3 semaines",
      "Pose systématique d'une pompe à insuline définitive"
    ],
    answers: [0],
    explanation: "La délivrance du placenta (source d'hormones placentaires hyperglycémiantes comme l'hPL) entraîne une chute brutale de l'insulinorésistance, permettant l'arrêt immédiat de l'insuline."
  },
  {
    text: "Quel test de dépistage à distance de l'accouchement (3 mois du post-partum) doit être prescrit à toute femme ayant eu un diabète gestationnel ?",
    options: [
      "Une glycémie à jeun ou une HGPO 75g pour dépister un diabète de type 2 ou une intolérance au glucose persistante",
      "Une scintigraphie des îlots de Langerhans",
      "Une biopsie pancréatique par laparotomie",
      "Un scanner cérébral avec perfusion",
      "Une coronarographie sélective"
    ],
    answers: [0],
    explanation: "Les femmes ayant eu un diabète gestationnel ont un risque de 50% de développer un diabète de type 2 dans les 10 à 20 ans, justifiant une HGPO à 3 mois puis un contrôle annuel."
  },
  {
    text: "Quelle hormone placentaire principale est responsable du pic d'insulinorésistance maternelle physiologique au 2ème et 3ème trimestre ?",
    options: [
      "L'hormone lactogène placentaire (hPL ou hCS)",
      "La thyréostimuline hypophysaire (TSH)",
      "L'hormone antidiurétique (ADH)",
      "L'érythropoïétine placentaire",
      "La parathormone (PTH)"
    ],
    answers: [0],
    explanation: "L'hPL, la progestérone, le cortisol et l'œstriol créent une insulinorésistance périphérique physiologique pour détourner le glucose vers la croissance fœtale."
  },
  {
    text: "Dans le diabète prégestationnel mal équilibré, quel est le risque placentaire et vasculaire maternel accru au 3ème trimestre ?",
    options: [
      "Prééclampsie et hypertension artérielle gravidique",
      "Cancer du placenta",
      "Hypotension artérielle chronique orthostatique sans protéinurie",
      "Insuffisance surrénalienne aiguë",
      "Kyste de l'ovaire géant"
    ],
    answers: [0],
    explanation: "Le diabète préexistant avec vasculopathie multiplie par 3 à 4 le risque de prééclampsie, de retard de croissance intra-utérin vasculaire et d'hématome rétroplacentaire."
  },
  {
    text: "Quelle anomalie hématologique néonatale fréquente résulte de l'hypoxie tissulaire chronique chez le fœtus de mère diabétique mal équilibrée ?",
    options: [
      "Polyglobulie néonatale (hématocrite > 65%) avec risque d'hyperviscosité et d'ictère à bilirubine libre",
      "Aplasie médullaire néonatale aiguë",
      "Agranulocytose congénitale pure",
      "Thrombocytémie essentielle clonale",
      "Anémie hémolytique auto-immune à anticorps chauds"
    ],
    answers: [0],
    explanation: "L'hyperglycémie et l'hyperinsulinisme fœtal majorent la consommation d'O2 fœtale, stimulant l'érythropoïétine fœtale avec polyglobulie et ictère néonatal précoce."
  },
  {
    text: "Chez une diabétique de type 1 envisageant une grossesse, quelle valeur cible d'hémoglobine glyquée (HbA1c) périconceptionnelle est recommandée ?",
    options: [
      "HbA1c < 6,5% (idéalement < 6,0%) sans hypoglycémies sévères",
      "HbA1c entre 9% et 12%",
      "HbA1c > 14%",
      "L'HbA1c n'a aucune valeur d'évaluation",
      "HbA1c à 0%"
    ],
    answers: [0],
    explanation: "Obtenir une HbA1c < 6,5% en période périconceptionnelle ramène le taux de malformations congénitales proches de celui de la population générale."
  },
  {
    text: "Quel est l'effet de l'allaitement maternel chez la patiente diabétique de type 1 dans le post-partum ?",
    options: [
      "Il diminue les besoins en insuline exogène et expose au risque d'hypoglycémies maternelles si les apports glucidiques ne sont pas augmentés",
      "Il double immédiatement les besoins en insuline",
      "Il est formellement contre-indiqué car le lait est toxique",
      "Il supprime totalement le diabète de type 1 à vie",
      "Il induit un coma acido-cétosique immédiat"
    ],
    answers: [0],
    explanation: "L'allaitement consomme du glucose pour la synthèse du lactose, réduisant les besoins insuliniques maternels de 20 à 30% et exigeant une collation avant chaque tétée."
  },
  {
    text: "Concernant la détresse respiratoire néonatale chez le nouveau-né de mère diabétique, quel mécanisme est en cause ?",
    options: [
      "Retard de maturation du surfactant alvéolaire pulmonaire lié à l'effet inhibiteur de l'hyperinsulinisme sur les pneumocytes de type II",
      "Absence congénitale des deux poumons",
      "Inhalation systématique de liquide méconial",
      "Sténose trachéale membraneuse",
      "Emphysème sous-cutané spontané"
    ],
    answers: [0],
    explanation: "L'insuline inhibe la synthèse du surfactant médiée par les corticoïdes fœtaux, favorisant la maladie des membranes hyalines même à terme proche."
  },
  {
    text: "Quelle malformation squelettique caudale rare mais hautement spécifique du diabète maternel très déséquilibré ?",
    options: [
      "Syndrome de régression caudale (agénésie sacrée avec hypoplasie des membres inférieurs)",
      "Luxation congénitale de hanche unilatérale",
      "Pied bot varus équin isolé",
      "Polydactylie pré-axiale",
      "Craniosténose scaphoïde"
    ],
    answers: [0],
    explanation: "Le syndrome de régression caudale est exceptionnel dans la population générale mais multiplié par 200 à 400 chez les mères diabétiques sévèrement déséquilibrées au premier trimestre."
  },
  {
    text: "Quel est le risque majeur d'un diabète de type 1 déséquilibré aigu pendant le deuxième ou troisième trimestre pour le fœtus ?",
    options: [
      "Mort fœtale in utero (MFIU) brutale par acidose lactique fœtale et hypoxie sévère",
      "Développement précoce d'une intelligence supérieure",
      "Infection à CMV congénitale",
      "Mutation génétique trisomique de novo",
      "Fusion des deux reins en fer à cheval"
    ],
    answers: [0],
    explanation: "L'acidocétose maternelle s'accompagne d'une acidose fœtale grave avec un risque d'arrêt cardiaque fœtal et de MFIU de 10 à 30%."
  },
  {
    text: "Dans le cadre de la surveillance du diabète gestationnel sous insuline, quel rythme de surveillance du bien-être fœtal est préconisé à partir de 36-38 SA ?",
    options: [
      "Enregistrement cardiotocographique (RCF) hebdomadaire ou bimensuel et profil biophysique de Manning",
      "Aucune surveillance jusqu'au terme de 42 SA",
      "Biopsie de trophoblaste hebdomadaire",
      "Amniocentèse systématique toutes les 48 heures",
      "Radiographie du crâne fœtal"
    ],
    answers: [0],
    explanation: "Surveillance renforcée du RCF et de la quantité de liquide amniotique au 9ème mois pour dépister une défaillance placentaire ou une souffrance fœtale."
  },
  {
    text: "Quelle supplémentation vitaminique périconceptionnelle à forte dose (5 mg/jour) est recommandée chez la femme diabétique de type 1 ou 2 ?",
    options: [
      "Acide folique (vitamine B9) débuté au moins 1 mois avant la conception pour prévenir les anomalies de fermeture du tube neural",
      "Vitamine A à forte dose",
      "Vitamine D à dose toxique",
      "Vitamine K1 intraveineuse quotidienne",
      "Aucune vitamine n'est utile"
    ],
    answers: [0],
    explanation: "La dose d'acide folique recommandée chez les femmes diabétiques à haut risque d'anomalies de fermeture du tube neural est de 5 mg/jour (au lieu de 0,4 mg/jour)."
  }
];

const diabeteCases = [
  {
    title: "Dépistage du diabète gestationnel au premier trimestre",
    vignette: "Patiente de 36 ans, G2P1 (premier enfant pesait 4200 g à terme), IMC prégestationnel à 29 kg/m². À 10 SA, la glycémie veineuse à jeun revient à 1,02 g/L.",
    question: "Quelle est votre interprétation et quelle attitude médicale immédiate adoptez-vous ?",
    options: [
      "Diabète gestationnel confirmé (seuil ≥ 0,92 g/L) ; mise en place immédiate de règles hygiéno-diététiques avec autosurveillance glycémique capillaire 6 fois par jour.",
      "Glycémie normale pour la grossesse ; aucun suivi particulier.",
      "Diabète de type 1 décompensé imposant une dialyse péritonéale d'urgence.",
      "Prescription immédiate d'antidiabétiques oraux à dose maximale.",
      "Interruption médicale de grossesse obligatoire."
    ],
    answers: [0],
    explanation: "La glycémie à jeun de 1,02 g/L au 1er trimestre chez une patiente à risque affirme le diabète gestationnel. Première étape : diététique et autosurveillance."
  },
  {
    title: "Échec des mesures hygiéno-diététiques et indication d'insuline",
    vignette: "Patiente de 31 ans suivie pour diabète gestationnel depuis 2 semaines. Malgré un régime diététique bien conduit de 1800 kcal/j, ses glycémies à jeun restent entre 1,05 et 1,15 g/L et ses post-prandiales à 1,35 g/L.",
    question: "Quelle modification thérapeutique s'impose ?",
    options: [
      "Introduction d'une insulinothérapie sous-cutanée (schéma basal-bolus ou insuline basale au coucher) adaptée aux glycémies capillaires.",
      "Jeûne hydrique strict sans aucun glucide pendant 10 jours.",
      "Prescription de glibenclamide à forte dose.",
      "Césarienne d'urgence à 26 SA.",
      "Arrêt de tout contrôle glycémique."
    ],
    answers: [0],
    explanation: "L'échec des objectifs glycémiques (à jeun ≤ 0,95 g/L) après 7-10 jours de régime bien suivi pose l'indication formelle de l'insulinothérapie."
  },
  {
    title: "Suspicion de macrosomie fœtale à 36 SA",
    vignette: "Femme de 33 ans, diabète gestationnel sous insuline. Échographie à 36 SA : circonférence abdominale fœtale au-delà du 95ème percentile, poids fœtal estimé à 3700 g, index amniotique à 22 cm.",
    question: "Quelle conduite obstétricale devez-vous programmer pour le terme ?",
    options: [
      "Surveillance fœtale rapprochée (RCF 2 fois/semaine) ; réévaluation échographique du poids fœtal à 38-39 SA et discussion de césarienne programmée si PFE ≥ 4500 g.",
      "Déclenchement immédiat dans l'heure par voie haute sans surveillance.",
      "Imposition d'une césarienne quel que soit le poids estimé.",
      "Administration d'un bolus de glucose hypertonique à la mère.",
      "Extraction instrumentale par forceps à domicile."
    ],
    answers: [0],
    explanation: "La surveillance du bien-être fœtal et l'estimation pondérale guident la voie d'accouchement pour éviter la dystocie des épaules."
  },
  {
    title: "Prise en charge néonatale immédiate d'un nouveau-né macrosome",
    vignette: "Nouveau-né de mère diabétique né par voie basse à 39 SA, poids de naissance 4350 g, Apgar 9 à 1 min et 10 à 5 min. À H1 de vie, le nouveau-né est trémulant et somnolent.",
    question: "Quelle complication néonatale devez-vous rechercher et traiter en urgence ?",
    options: [
      "Hypoglycémie néonatale précoce ; contrôle immédiat de la glycémie capillaire et alimentation précoce (sein ou lait maternisé) ou perfusion de glucosé 10% si sévère.",
      "Fracture isolée du sternum.",
      "Méningite bactérienne foudroyante.",
      "Hémorragie cérébro-méningée spontanée.",
      "Péritonite méconiale."
    ],
    answers: [0],
    explanation: "L'hyperinsulinisme fœtal réactionnel provoque une hypoglycémie néonatale symptomatique précoce nécessitant glycémie immédiate et resucrage rapide."
  },
  {
    title: "Post-partum et suivi à distance du diabète gestationnel",
    vignette: "Patiente de 32 ans qui a accouché hier à terme d'un garçon de 3800 g. Son diabète gestationnel avait nécessité 20 UI d'insuline par jour au 3ème trimestre. Elle allaite exclusivement.",
    question: "Quelle est la conduite à tenir thérapeutique en maternité et à 3 mois du post-partum ?",
    options: [
      "Arrêt immédiat de l'insuline dès la délivrance, contrôle glycémique capillaire avant la sortie, et prescription d'une HGPO 75g de contrôle à 3 mois du post-partum.",
      "Maintien de l'insuline à la même dose pendant 2 ans.",
      "Contre-indication de l'allaitement maternel.",
      "Prescription de metformine à vie sans bilan.",
      "Aucun suivi à distance."
    ],
    answers: [0],
    explanation: "La chute des hormones placentaires guérit immédiatement le diabète gestationnel dans la majorité des cas, justifiant l'arrêt de l'insuline et un dépistage à distance du T2D."
  }
];

// Write Diabète
fs.writeFileSync(
  path.join(publicDir, 'QCM_-_Diabete_et_Grossesse.html'),
  makeHtml('Diabète et Grossesse', 'Diabète Gestationnel & Diabète Préexistant | 5ème Année', diabeteQcms, diabeteCases)
);

// -------------------------------------------------------------
// DATA 4: La Délivrance Artificielle & Révision Utérine
// -------------------------------------------------------------
const delivranceArtQcms = [
  {
    text: "Quelle est la définition exacte de la délivrance artificielle (DA) ?",
    options: [
      "L'extraction manuelle du placenta hors de la cavité utérine par l'opérateur en introduisant une main stérile dans l'utérus à travers les voies naturelles",
      "L'expulsion spontanée du placenta sous l'effet des contractions sans aucune aide",
      "La traction vigoureuse sur le cordon ombilical à travers la paroi abdominale",
      "L'ablation chirurgicale de l'utérus en post-partum immédiat",
      "Le curetage métallique à la curette mousse sous anesthésie locale"
    ],
    answers: [0],
    explanation: "La DA consiste à décoller et extraire manuellement le placenta de la cavité utérine lorsque le décollement spontané n'a pas eu lieu."
  },
  {
    text: "Quel est le délai temporel classique définissant la rétention placentaire et posant l'indication formelle d'une délivrance artificielle ?",
    options: [
      "30 minutes après l'expulsion du fœtus sans décollement placentaire",
      "5 minutes après l'expulsion fœtale",
      "2 heures après le début du travail",
      "24 heures après la naissance",
      "7 jours après l'accouchement"
    ],
    answers: [0],
    explanation: "Au-delà de 30 minutes après la sortie du fœtus (ou immédiatement en cas d'hémorragie active), l'absence de décollement placentaire impose la délivrance artificielle."
  },
  {
    text: "Quelle règle d'asepsie et de sécurité majeure doit impérativement encadrer la délivrance artificielle ?",
    options: [
      "Asepsie chirurgicale rigoureuse (lavage chirurgical des mains, gants longs stériles, badigeon vulvo-périnéal), vessie vide et analgésie/anesthésie efficace",
      "Geste réalisé sans gants à mains nues pour une meilleure sensibilité tactile",
      "Vessie pleine sous pression pour repousser l'utérus",
      "Aucune désinfection périnéale nécessaire",
      "Réalisation du geste en position debout"
    ],
    answers: [0],
    explanation: "L'asepsie chirurgicale absolue et les gants stériles évitent l'introduction de germes dans la cavité utérine béante, sous analgésie adaptée."
  },
  {
    text: "Quel geste obstétrical endo-utérin doit SYSTÉMATIQUEMENT suivre toute délivrance artificielle ?",
    options: [
      "La révision utérine (RU) systématique pour vérifier la vacuité complète et l'absence de rupture utérine",
      "Une hystérectomie d'hémostase de principe",
      "La pose d'une sonde de Blakemore intra-utérine",
      "L'amputation du col utérin",
      "Une salpingectomie bilatérale"
    ],
    answers: [0],
    explanation: "Toute DA est systématiquement complétée par une révision utérine soigneuse pour s'assurer qu'aucun cotylédon ou fragment placentaire n'est retenu et qu'il n'y a pas de brèche utérine."
  },
  {
    text: "Quelle est la technique manuelle correcte pour décoller le placenta lors de la délivrance artificielle ?",
    options: [
      "Suivre le cordon ombilical jusqu'à l'insertion placentaire, trouver le plan de clivage décidual et décoller le placenta de la périphérie vers le centre avec le tranchant de la main en regardant le fond utérin maintenu par l'autre main abdominale",
      "Arracher violemment le placenta avec les doigts repliés en griffe",
      "Tirer de toutes ses forces sur le cordon ombilical jusqu'à rupture",
      "Utiliser une pince de Pozzi pour broyer les cotylédons",
      "Injecter de l'eau savonneuse sous haute pression dans la trompe"
    ],
    answers: [0],
    explanation: "La main intra-utérine progresse le long du cordon, trouve le bord placentaire et clive doucement au tranchant de la main dans l'espace décidual, tandis que la main sus-pubienne empaume et abaisse le fond utérin."
  },
  {
    text: "Quelle anomalie redoutée d'adhérence placentaire anormale se caractérise par l'absence totale de plan de clivage entre le placenta et le myomètre ?",
    options: [
      "Placenta accreta (ou increta / percreta)",
      "Placenta circumvallata bénin",
      "Insertion vélamenteuse du cordon sans adhérence",
      "Cotylédon aberrant isolé facilement clivable",
      "Placenta praevia latéral non adhérent"
    ],
    answers: [0],
    explanation: "Le placenta accreta correspond à une pénétration directe des villosités choriales dans le myomètre sans caduque basale intermédiaire, rendant le clivage manuel impossible et très hémorragique."
  },
  {
    text: "En cas d'échec de clivage au tranchant de la main et de constatation d'un placenta accreta complet, quelle attitude doit être adoptée ?",
    options: [
      "Ne pas s'acharner à arracher le placenta (risque d'hémorragie cataclysmique), tamponner, débuter les solutés/transfusion et envisager un traitement conservateur ou chirurgical (hystérectomie d'hémostase)",
      "Continuer à tirer avec des pinces métalliques jusqu'à déchirure du myomètre",
      "Laisser la patiente rentrer chez elle sans surveillance",
      "Prescrire uniquement des antalgiques mineurs",
      "Faire une manœuvre de Sellick"
    ],
    answers: [0],
    explanation: "Forcer le décollement d'un placenta accreta entraîne une hémorragie massive incoercible et une perforation utérine fatale. Il faut stopper les tractions et recourir aux gestes hémostatiques experts."
  },
  {
    text: "Quel examen visuel indispensable doit être réalisé immédiatement après l'extraction du placenta et des membranes ?",
    options: [
      "L'examen attentif du placenta (face fœtale, face maternelle avec cotylédons jointifs et intègres) et des membranes (orifice de déchirure, vaisseaux interrompus)",
      "La pesée exclusive du liquide amniotique résiduel",
      "L'analyse au microscope optique au lit de la malade",
      "L'immersion du placenta dans du formol sans l'examiner",
      "Aucun examen du délivre n'est utile"
    ],
    answers: [0],
    explanation: "L'intégrité de la galette placentaire et la continuité des cotylédons garantissent l'absence de rétention de cotylédon aberrant."
  },
  {
    text: "Quel médicament utérotonique est systématiquement administré dès la réalisation de la délivrance artificielle pour favoriser la rétraction utérine ?",
    options: [
      "L'ocytocine (Syntocinon) en injection intraveineuse lente ou perfusion continue",
      "La progestérone retard injectable",
      "Le sulfate de magnésium à forte dose",
      "La terbutaline tocolytique",
      "L'héparine non fractionnée en bolus"
    ],
    answers: [0],
    explanation: "L'ocytocine provoque des contractions puissantes et la rétraction du myomètre, assurant l'hémostase par les « ligatures vivantes » de Pinard comprimant les vaisseaux utérins."
  },
  {
    text: "Quelle antibioprophylaxie est préconisée lors de la réalisation d'une manœuvre endo-utérine (DA et RU) ?",
    options: [
      "Antibioprophylaxie par Céfaoline ou Amoxicilline-acide clavulanique (dose unique IV)",
      "Antibiothérapie par collyre ophtalmique",
      "Chimiothérapie anticancéreuse",
      "Traitement antiviral par oseltamivir",
      "Aucun antibiotique n'est jamais indiqué"
    ],
    answers: [0],
    explanation: "L'effraction des barrières endo-utérines expose à l'endométrite bactérienne post-partum, justifiant une antibioprophylaxie parentérale systématique."
  },
  {
    text: "Quelle complication iatrogène majeure peut être provoquée par une manœuvre de délivrance artificielle brutale ou une traction excessive sur le cordon utérus hypotonique ?",
    options: [
      "L'inversion utérine aiguë avec état de choc vagal et hémorragique sévère",
      "La rupture de la rate",
      "L'ulcère de stress duodénal",
      "Une dissection aortique aiguë",
      "Une appendicite aiguë"
    ],
    answers: [0],
    explanation: "Tirer sur le cordon avec un utérus non décollé et hypotonique peut invaginer le fond utérin dans la cavité (doigt de gant), réalisant une inversion utérine dramatique."
  },
  {
    text: "Quelle manœuvre permet la réduction immédiate d'une inversion utérine aiguë survenant en salle de travail ?",
    options: [
      "La manœuvre de Johnson (repousser manuellement le fond utérin vers le haut à travers le col sous tocolyse et anesthésie)",
      "La manœuvre de McRoberts",
      "La manœuvre de Mauriceau",
      "La manœuvre de Lovset",
      "L'ablation du col utérin à la lame froide"
    ],
    answers: [0],
    explanation: "La manœuvre de Johnson consiste à replacer le fond utérin avec la paume de la main dans l'axe de la cavité avant la constitution d'un anneau de striction cervical."
  },
  {
    text: "En cas d'hémorragie active immédiate de la délivrance avec placenta non décollé, quel est le délai d'attente avant la DA ?",
    options: [
      "Zéro délai : réalisation immédiate de la délivrance artificielle et révision utérine sans attendre les 30 minutes",
      "Attente stricte de 30 minutes quoi qu'il arrive",
      "Attente de 2 heures sous surveillance du pouls",
      "Attente du lendemain matin",
      "Attente de la survenue d'un arrêt circulatoire"
    ],
    answers: [0],
    explanation: "L'hémorragie active de la délivrance est une urgence vitale : la délivrance artificielle manuelle doit être réalisée immédiatement sans délai."
  },
  {
    text: "Quel est le risque infectieux tardif d'un cotylédon placentaire méconnu et retenu dans la cavité utérine ?",
    options: [
      "Endométrite du post-partum, lochies fétides, métrorragies secondaires et synéchies cicatricielles",
      "Pancréatite aiguë nécrosante",
      "Glomérulonéphrite aiguë post-streptococcique",
      "Thyroïdite subaiguë de De Quervain",
      "Ostéomyélite du fémur"
    ],
    answers: [0],
    explanation: "La rétention d'un cotylédon maintient une béance vasculaire (métrorragies secondaires) et sert de foyer de surinfection pour l'endométrite puerpérale."
  },
  {
    text: "Quelle est la définition de la « révision utérine » isolée (sans délivrance artificielle préalable) ?",
    options: [
      "L'exploration manuelle de la cavité utérine après expulsion spontanée du placenta, indiquée en cas d'hémorragie du post-partum ou de doute sur l'intégrité du délivre",
      "Le curetage métallique sous hystéroscopie opératoire",
      "La palpation superficielle de la peau du nombril",
      "L'examen du col au miroir vaginal seul",
      "La mesure de la hauteur utérine au mètre-ruban"
    ],
    answers: [0],
    explanation: "La RU consiste à introduire la main gantée dans l'utérus après délivrance pour vérifier la vacuité totale de la cavité et la continuité de la paroi myométriale."
  },
  {
    text: "Chez une femme ayant un utérus cicatriciel (antécédent de césarienne), dans quelle situation la révision utérine est-elle formellement indiquée après accouchement par voie basse ?",
    options: [
      "En cas d'hémorragie du post-partum, d'instabilité hémodynamique ou de douleurs sus-pubiennes anormales pour palper la cicatrice utérine",
      "Elle est interdite de façon absolue en cas de cicatrice utérine",
      "Uniquement chez les femmes de moins de 20 ans",
      "Uniquement si l'enfant est de sexe masculin",
      "Uniquement en l'absence de tout anesthésiste"
    ],
    answers: [0],
    explanation: "Chez la parturiente à utérus cicatriciel, la révision utérine permet de palper le segment inférieur et de vérifier l'intégrité de la déhiscence ou de la rupture utérine."
  },
  {
    text: "Lors de la délivrance artificielle, quel est le rôle fondamental de la main non dominante de l'opérateur placée sur l'abdomen maternel ?",
    options: [
      "Empaumer le fond utérin, le maintenir fermement abaissé et guider la main endo-utérine tout en évitant la perforation et l'inversion utérine",
      "Prendre la tension artérielle au brassard",
      "Écarter les cuisses de la patiente",
      "Injecter les solutés dans la perfusion",
      "Rédiger le compte-rendu d'accouchement"
    ],
    answers: [0],
    explanation: "La main sus-pubienne est indispensable : elle contre-appuie le fond utérin, l'abaisse et protège contre les déchirures et perforations utérines."
  },
  {
    text: "Quelle anomalie de rétention placentaire par striction myométriale localisée emprisonne le placenta décollé dans l'utérus ?",
    options: [
      "L'incarcération ou enchatonnement placentaire par spasme d'un anneau de striction cervical ou corporéal",
      "Le placenta praevia recouvrant",
      "L'hématome rétro-placentaire",
      "Le décollement prématuré du placenta",
      "La môle hydatiforme embryonnée"
    ],
    answers: [0],
    explanation: "L'enchatonnement ou incarcération survient lorsqu'un spasme localisé du myomètre emprisonne le placenta déjà décollé, nécessitant parfois une tocolyse d'appoint pour lever le spasme avant l'extraction."
  },
  {
    text: "Quel soluté tocolytique d'action rapide peut être utilisé transitoirement pour relâcher un anneau de striction cervical lors d'une délivrance artificielle difficile ?",
    options: [
      "Un dérivé nitré sublingual ou tocolytique d'action brève",
      "Une injection massive d'ocytociques",
      "Un bolus de gluconate de calcium",
      "De l'insuline rapide",
      "De la vitamine K"
    ],
    answers: [0],
    explanation: "Les dérivés nitrés (trinitrine) entraînent une relaxation transitoire puissante du myomètre et facilitent le passage de la main à travers l'anneau spastique."
  },
  {
    text: "Quelle surveillance clinique rapprochée doit être assurée en salle de travail pendant les 2 heures suivant une délivrance artificielle ?",
    options: [
      "Surveillance continue du globe de sécurité utérin (utérus tonique et rétracté), des pertes sanguines vulvaires, du pouls et de la pression artérielle toutes les 15 minutes",
      "Surveillance de la température une fois par semaine",
      "Aucune surveillance : transfert immédiat en chambre individuelle sans personnel",
      "Contrôle exclusif du poids de la patiente",
      "Réalisation d'une IRM corps entier"
    ],
    answers: [0],
    explanation: "La fenêtre des 2 heures du post-partum immédiat concentre plus de 80% des hémorragies de la délivrance ; le globe utérin ferme et rétracté sous l'ombilic est le signe cardinal de bonne hémostase."
  },
  {
    text: "En cas d'hémorragie persistante malgré une délivrance artificielle et une révision utérine complètes confirmant la vacuité utérine, quelle autre étiologie doit être recherchée systématiquement sous valves ?",
    options: [
      "Une déchirure des parties molles (déchirure cervicale, vaginale haute ou périnéale profonde)",
      "Une lithiase biliaire asymptomatique",
      "Une otite moyenne aiguë",
      "Une hernie inguinale réductible",
      "Un kyste synovial du poignet"
    ],
    answers: [0],
    explanation: "L'examen sous valves de l'ensemble de la filière génitale (vagin, col, périnée) permet de suturer une déchirure vasculaire cervicale ou vaginale passée inaperçue."
  },
  {
    text: "Quelle prostaglandine de 2ème intention est administrée en perfusion continue en cas d'atonie utérine persistante réfractaire à l'ocytocine après délivrance artificielle ?",
    options: [
      "Le Sulprostone (Nalador) en perfusion intraveineuse stricte au pousse-seringue électrique",
      "La prostacycline inhalée",
      "Le misoprostol par voie oculaire",
      "L'adrénaline en aérosol",
      "L'atropine en sous-cutané"
    ],
    answers: [0],
    explanation: "Le sulprostone (analogue de la prostaglandine E2) est le traitement pharmacologique de référence de l'atonie utérine résistante à l'ocytocine, administré sous surveillance cardiovasculaire étroite."
  },
  {
    text: "Quel geste de tamponnement intra-utérin mécanique temporaire peut être utilisé pour juguler une hémorragie de la délivrance persistante après révision utérine ?",
    options: [
      "La mise en place d'un ballon de tamponnement intra-utérin (ballon de Bakri)",
      "L'insertion d'une serviette éponge non stérile",
      "Le clampage de la trachée",
      "La pose d'un plâtre pelvien",
      "La résection transurétrale de la vessie"
    ],
    answers: [0],
    explanation: "Le ballon de Bakri gonflé au sérum physiologique stérile exerce une contre-pression hydrostatique hémostatique sur la surface endométriale hémorragique."
  },
  {
    text: "Quelle est la cause d'anémie aiguë maternelle la plus fréquente dans les suites de couches immédiates après rétention placentaire ?",
    options: [
      "L'hémorragie de la délivrance avec spoliation sanguine supérieure à 500 mL (ou 1000 mL en césarienne)",
      "Le paludisme congénital",
      "La carence d'apport en fer survenue pendant la nuit",
      "Une leucémie aiguë lymphoblastique foudroyante",
      "Une hémodilution physiologique exclusive"
    ],
    answers: [0],
    explanation: "La perte sanguine supérieure à 500 mL définit l'hémorragie du post-partum, dont la rétention placentaire et l'atonie utérine sont les deux causes majeures."
  },
  {
    text: "Après réalisation d'une délivrance artificielle chez une patiente de groupe sanguin Rhésus négatif avec nouveau-né Rhésus positif, quelle mesure immuno-hématologique est impérative ?",
    options: [
      "Doser les hématies fœtales dans le sang maternel (test de Kleihauer) et injecter des immunoglobulines anti-D dans les 72 heures pour prévenir l'allo-immunisation rhésus",
      "Réaliser une exsanguino-transfusion maternelle totale",
      "Interdire tout contact entre la mère et son enfant",
      "Prescrire une chimiothérapie immunosuppressive à vie",
      "Aucune mesure n'est requise en cas de Rhésus négatif"
    ],
    answers: [0],
    explanation: "Toute manœuvre endo-utérine majore le passage d'hématies fœtales dans la circulation maternelle, imposant le test de Kleihauer et l'injection d'anti-D adaptée à la dose d'hématies fœtales."
  }
];

const delivranceArtCases = [
  {
    title: "Rétention placentaire complète à 35 minutes de l'expulsion",
    vignette: "Primipare de 25 ans vient d'accoucher d'un nouveau-né eutrophe. 35 minutes après la naissance, le placenta n'est toujours pas décollé malgré des contractions utérines modérées. Il n'y a pas de saignement extériorisé. L'utérus est mou au-dessus de l'ombilic.",
    question: "Quelle est la prise en charge immédiate adaptée ?",
    options: [
      "Réaliser une délivrance artificielle manuelle en asepsie chirurgicale sous analgésie, suivie d'une révision utérine systématique et de l'administration d'ocytociques.",
      "Attendre 4 heures supplémentaires sans rien faire.",
      "Tirer violemment sur le cordon à pleines mains.",
      "Transférer la patiente au bloc de neurochirurgie.",
      "Appliquer des poches de glace sur le crâne."
    ],
    answers: [0],
    explanation: "Le dépassement des 30 minutes pose l'indication formelle de la délivrance artificielle pour prévenir l'hémorragie et l'infection."
  },
  {
    title: "Hémorragie active immédiate de la délivrance",
    vignette: "Multigeste de 33 ans (G4P3). Immédiatement après la sortie du fœtus (à 10 minutes), un saignement génital brutal rouge vif avec caillots survient, dépassant rapidement 400 mL. Le placenta est toujours intra-utérin.",
    question: "Quelle est la conduite d'urgence sans aucun délai d'attente ?",
    options: [
      "Appel de renforts, délivrance artificielle d'urgence sans attendre, révision utérine, massage utérin, ocytocine en perfusion et pose de 2 voies veineuses de gros calibre.",
      "Attendre l'expiration stricte des 30 minutes avant de toucher au placenta.",
      "Faire asseoir la patiente sur un fauteuil.",
      "Administrer un somnifère per os.",
      "Réaliser un lavement rectal évacuateur."
    ],
    answers: [0],
    explanation: "En présence d'un saignement actif abondant, la DA n'attend jamais 30 minutes : elle est immédiate pour juguler la source de l'hémorragie."
  },
  {
    title: "Suspicion de placenta accreta lors de la tentative de DA",
    vignette: "Patiente de 34 ans avec antécédent de 2 césariennes antérieures et placenta praevia antérieur. Lors de la délivrance artificielle, l'opérateur constate une absence complète de plan de clivage décidual sur toute la zone cicatricielle avec début de saignement important.",
    question: "Quelle attitude salvatrice s'impose à l'équipe obstétricale ?",
    options: [
      "Ne pas s'acharner à arracher le myomètre, tamponnement pelvien, appel de l'anesthésiste et du chirurgien gynécologue, transfert au bloc pour traitement conservateur ou hystérectomie d'hémostase.",
      "Forcer le décollement en arrachant la paroi utérine aux doigts.",
      "Injecter de l'alcool pur dans la cavité utérine.",
      "Déclarer l'accouchement terminé sans perfusion.",
      "Retirer la main et prescrire des antalgiques simples en chambre."
    ],
    answers: [0],
    explanation: "Le placenta accreta sur utérus cicatriciel ne doit jamais être arraché au risque d'une hémorragie cataclysmique foudroyante."
  },
  {
    title: "Métrorragies secondaires à un cotylédon aberrant retenu",
    vignette: "Accouchée à J+2 post-partum présentant des métrorragies rouges répétées avec utérus mal involué et fébricule à 38°C. L'échographie pelvienne retrouve une masse échogène intracavitaire de 25 mm richement vascularisée au Doppler.",
    question: "Quel est le diagnostic et quelle est la prise en charge ?",
    options: [
      "Rétention d'un cotylédon placentaire avec début d'endométrite ; évacuation utérine douce par révision utérine ou aspiration sous couverture antibiotique adaptée.",
      "Cancer de l'endomètre métastatique nécessitant une chimiothérapie lourde.",
      "Kyste de l'ovaire droit nécessitant une ponction transcutanée.",
      "Pyélonéphrite aiguë bilatérale sans anomalie gynécologique.",
      "Invagination intestinale aiguë."
    ],
    answers: [0],
    explanation: "La rétention de débris placentaires provoque métrorragies et endométrite, justifiant l'évacuation cavitaire et les antibiotiques."
  },
  {
    title: "Inversion utérine aiguë lors de la délivrance",
    vignette: "Après la naissance, l'interne tire sur le cordon alors que l'utérus n'est pas contracté. Brutalement, une masse rouge sombre volumineuse fait issue à la vulve, accompagnée d'une douleur syncopale foudroyante et d'un collapsus tensionnel à 70/40 mmHg avec bradycardie.",
    question: "Quel est le diagnostic et quel est le geste immédiat à réaliser avant la constriction du col ?",
    options: [
      "Inversion utérine aiguë de stade 3 ; manœuvre de Johnson immédiate (réduction manuelle du fond utérin par voie vaginale vers la cavité abdominale) sous anesthésie générale et tocolyse brève.",
      "Prolapsus rectal strangulé nécessitant une colostomie.",
      "Rupture de la vessie avec hernie vésicale.",
      "Hématome sous-cutané périnéal nécessitant de la glace.",
      "Infarctus du mésentère."
    ],
    answers: [0],
    explanation: "L'inversion utérine est une urgence dramatique avec choc neurogénique et hémorragique. La réintégration immédiate par la manœuvre de Johnson est salvatrice."
  }
];

// Write Délivrance Artificielle
fs.writeFileSync(
  path.join(publicDir, 'QCM_-_La_Delivrance_Artificielle.html'),
  makeHtml('La Délivrance Artificielle & Révision Utérine', 'Indications, Technique, Révision Utérine & Complications | 5ème Année', delivranceArtQcms, delivranceArtCases)
);

// -------------------------------------------------------------
// DATA 5: Maladies Trophoblastiques Gestationnelles
// -------------------------------------------------------------
const trophoQcms = [
  {
    text: "Concernant la constitution génétique de la môle hydatiforme complète (MHC), quelle est l'affirmation exacte ?",
    options: [
      "Elle est diploïde (46,XX dans 90% des cas) d'origine exclusivement paternelle (androgénique) par fécondation d'un ovocyte anucléé",
      "Elle est constamment triploïde (69,XXY) avec présence constante d'un embryon viable",
      "Elle provient d'une mutation mitochondriale maternelle exclusive",
      "Elle présente une caryotype 47,XXY de type Klinefelter",
      "Elle est liée à une délétion du chromosome 5p (cri-du-chat)"
    ],
    answers: [0],
    explanation: "La môle complète est diploïde 46,XX (ou 46,XY) exclusivement androgénique (duplication d'un spermatozoïde haploïde dans un ovule énucléé ou dispermie), sans embryon ni tissu fœtal."
  },
  {
    text: "Quelle est la formule génétique et la composition tissulaire caractéristique de la môle hydatiforme partielle (MHP) ?",
    options: [
      "Elle est triploïde (le plus souvent 69,XXY) par fécondation d'un ovocyte normal par deux spermatozoïdes (dispermie), avec présence possible de tissu embryonnaire",
      "Elle est haploïde 23,X",
      "Elle est tétraploïde 92,XXXX sans aucun tissu",
      "Elle est diploïde 46,YY non viable",
      "Elle est strictement identique à la môle complète"
    ],
    answers: [0],
    explanation: "La môle partielle est triploïde (69 chromosomes) par diandrie (2 lots paternels, 1 maternel) et comporte des fragments embryonnaires ou des globules rouges fœtaux."
  },
  {
    text: "Quel signe clinique cardinal au premier trimestre est le plus fréquemment révélateur d'une môle hydatiforme complète ?",
    options: [
      "Des métrorragies spontanées indolores, classiquement répétées et d'aspect « en jus de prune » ou séro-sanglantes",
      "Une aménorrhée avec douleurs brutales de la fosse iliaque droite sans aucun saignement",
      "Un ictère cutanéo-muqueux cholestatique pur",
      "Une alopécie aiguë diffuse",
      "Des céphalées isolées sans signe gynécologique"
    ],
    answers: [0],
    explanation: "Les métrorragies du premier trimestre (saignement brunâtre en « jus de prune ») constituent le signe d'appel dans plus de 80% des môles complètes."
  },
  {
    text: "À l'examen clinique d'une môle hydatiforme complète typique, quel élément physique est particulièrement évocateur ?",
    options: [
      "Un utérus augmenté de volume, mou, nettement plus gros que ne le voudrait l'âge gestationnel théorique",
      "Un utérus hypoplasique plus petit que la normale",
      "Un utérus dur comme du bois sans modification de volume",
      "Un col totalement absent",
      "Une inversion utérine spontanée"
    ],
    answers: [0],
    explanation: "L'hypertrophie utérine discordante (utérus trop grand pour le terme) et mou est retrouvée dans la moitié des môles complètes."
  },
  {
    text: "Quel est l'aspect échographique caractéristique en « tempête de neige » ou « floconneux » au cours de la môle complète ?",
    options: [
      "Cavité utérine distendue occupée par une masse hétérogène hyperéchogène criblée de multiples petites vésicules anéchogènes en grappes, sans embryon ni sac gestationnel visible",
      "Un embryon unique avec activité cardiaque normale",
      "Une cavité utérine strictement vide avec endomètre linéaire de 2 mm",
      "Un épanchement liquidien péritonéal isolé sans masse utérine",
      "Une lithiase intra-cavitaire calcifiée"
    ],
    answers: [0],
    explanation: "L'image en « grappe de raisin » ou « tempête de neige » correspond à l'œdème villositaire diffus et aux cavités kystiques du trophoblaste proliférant."
  },
  {
    text: "Quelle complication ovarienne bilatérale fréquente est induite par la stimulation massive des récepteurs à la LH par des taux d'hCG vertigineux ?",
    options: [
      "Kystes théco-lutéiniques bilatéraux volumineux et multiloculaires",
      "Tératomes kystiques matures calcifiés",
      "Tumeurs de Brenner fibromateuses",
      "Endométriomes ovariens cicatriciels",
      "Aplasie ovarienne bilatérale"
    ],
    answers: [0],
    explanation: "L'hypersécrétion d'hCG (dépassant souvent 100 000 à 200 000 UI/L) stimule les cellules de la thèque ovarienne, générant de volumineux kystes théco-lutéiniques bilatéraux qui régressent après l'évacuation de la môle."
  },
  {
    text: "Parmi les manifestations endocriniennes et générales de la môle hydatiforme complète, laquelle est liée à l'analogie structurale entre l'hCG et la TSH ?",
    options: [
      "Hyperthyroïdie clinique ou biologique (tachycardie, thermophobie, tremblements, baisse de la TSH et élévation de la T4 libre)",
      "Hypothyroïdie avec myxœdème congénital",
      "Diabète insipide central complet",
      "Syndrome de Cushing par adénome surrénalien",
      "Acromégalie par adénome hypophysaire"
    ],
    answers: [0],
    explanation: "La sous-unité alpha de l'hCG est identique à celle de la TSH, LH et FSH. Des taux astronomiques d'hCG activent les récepteurs à la TSH et induisent une thyrotoxicose gravidique."
  },
  {
    text: "Quel traitement de première intention est indispensable pour évacuer une môle hydatiforme de la cavité utérine ?",
    options: [
      "Aspiration endo-utérine douce sous contrôle échographique avec curetage prudent, envoyant TOUT le matériel évacué en analyse anatomopathologique",
      "Curetage métallique agressif à la curette tranchante sans contrôle",
      "Hystérectomie subtotale avec conservation des ovaires chez toutes les patientes",
      "Chimiothérapie exclusive sans évacuer l'utérus",
      "Surveillance sans évacuation pendant 9 mois"
    ],
    answers: [0],
    explanation: "L'aspiration sous contrôle échographique à la canule de gros calibre est la méthode de référence, limitant les risques de perforation du myomètre fragilisé."
  },
  {
    text: "Quelle analyse de laboratoire est formellement indispensable pour confirmer le diagnostic de certitude de môle hydatiforme ?",
    options: [
      "L'examen anatomopathologique des produits d'aspiration (hyperplasie trophoblastique et œdème villositaire)",
      "La numération formule sanguine seule",
      "La vitesse de sédimentation à 1 heure",
      "L'ionogramme sanguin",
      "Le dosage du cholestérol HDL"
    ],
    answers: [0],
    explanation: "Seule l'histologie affirme le caractère molaire, distingue la môle complète de la partielle et élimine un choriocarcinome d'emblée."
  },
  {
    text: "Quelle est la règle d'or du suivi biologique après évacuation complète d'une môle hydatiforme ?",
    options: [
      "Dosage hebdomadaire de l'hCG plasmatique totale jusqu'à négativation (taux indétectable 3 semaines consécutives), puis mensuel pendant 6 mois (môle complète)",
      "Dosage annuel de la TSH uniquement",
      "Dosage unique à 24 heures post-évacuation puis arrêt de toute surveillance",
      "Aucun dosage si la patiente ne saigne plus",
      "Dosage des plaquettes chaque jour pendant 5 ans"
    ],
    answers: [0],
    explanation: "La surveillance de la décroissance de l'hCG est la clé de voûte du suivi pour dépister précocement une rétention ou une tumeur trophoblastique gestationnelle (TTG)."
  },
  {
    text: "Selon les critères FIGO, quelle anomalie de la cinétique des bêta-hCG pose le diagnostic de Tumeur Trophoblastique Gestationnelle (TTG) post-molaire ?",
    options: [
      "Stagnation de l'hCG sur 4 dosages hebdomadaires successifs (J1, J7, J14, J21) OU réascension de l'hCG sur 3 dosages hebdomadaires consécutifs (J1, J7, J14)",
      "Baisse régulière de 50% de l'hCG chaque semaine",
      "Négativation complète de l'hCG dès la 2ème semaine",
      "Présence d'un taux d'hCG normal pour l'absence de grossesse",
      "Baisse de l'hCG accompagnée d'une perte de poids"
    ],
    answers: [0],
    explanation: "Les critères FIGO définissent la TTG par : plateau de l'hCG sur 4 mesures consécutives sur au moins 3 semaines, ou réascension sur au moins 3 mesures sur 2 semaines, ou persistance d'hCG détectable à 6 mois."
  },
  {
    text: "Quelle contraception efficace et obligatoire doit être prescrite pendant toute la durée de la surveillance post-molaire ?",
    options: [
      "Une contraception hormonale efficace (œstroprogestative ou progestative) pour éviter toute grossesse qui fausserait la surveillance des hCG",
      "Aucune contraception : la grossesse est encouragée immédiatement",
      "Pose immédiate d'un DIU dans la cavité encore hémorragique",
      "La ligature tubaire systématique chez toutes les patientes",
      "L'abstinence périodique non protégée"
    ],
    answers: [0],
    explanation: "Une nouvelle grossesse sécrétant de l'hCG empêcherait de distinguer une rechute maligne d'une grossesse physiologique. Le DIU est évité au début en raison du risque de perforation."
  },
  {
    text: "Quel organe est le site métastatique le plus fréquent du choriocarcinome gestationnel ?",
    options: [
      "Les poumons (métastases pulmonaires en « lâcher de ballons » à la radiographie ou au scanner thoracique)",
      "La rate",
      "Les os du tarse",
      "Le pancréas endocrine",
      "Le cristallin"
    ],
    answers: [0],
    explanation: "En raison du tropisme vasculaire hématogène majeur du trophoblaste, les métastases pulmonaires surviennent dans plus de 80% des TTG métastatiques, suivies du vagin et du cerveau."
  },
  {
    text: "Quel examen d'imagerie doit être réalisé systématiquement dans le bilan d'extension de toute tumeur trophoblastique gestationnelle diagnostiquée ?",
    options: [
      "Scanner thoraco-abdomino-pelvien et IRM cérébrale (ou scanner cérébral)",
      "Radiographie des sinus de la face",
      "Échographie de la cheville",
      "Scintigraphie salivaire",
      "Transit œso-gastro-duodénal"
    ],
    answers: [0],
    explanation: "Recherche systématique de métastases pulmonaires, hépatiques, pelviennes et cérébrales pour établir le score pronostique FIGO / OMS."
  },
  {
    text: "Quelle chimiothérapie en monothérapie est le traitement de première ligne des tumeurs trophoblastiques gestationnelles à bas risque (score FIGO ≤ 6) ?",
    options: [
      "Méthotrexate (associé à l'acide folinique)",
      "Polychimiothérapie lourde type cisplatine-doxorubicine",
      "Interféron alpha à forte dose",
      "Radiothérapie corporelle totale",
      "Immunothérapie par anticorps anti-CD20 seuls"
    ],
    answers: [0],
    explanation: "Le Méthotrexate en monothérapie guérit plus de 90% des TTG à bas risque tout en préservant parfaitement la fertilité ultérieure."
  },
  {
    text: "Quel protocole de polychimiothérapie de référence est utilisé dans les tumeurs trophoblastiques gestationnelles à haut risque pronostique (score FIGO ≥ 7) ?",
    options: [
      "Protocole EMA-CO (Étoposide, Méthotrexate, Actinomycine D, Cyclophosphamide, Oncovin/Vincristine)",
      "Monothérapie par aspirine",
      "Cure unique de 5-fluorouracile per os",
      "Hormonothérapie par tamoxifène",
      "Antibiotiques oraux simples"
    ],
    answers: [0],
    explanation: "Le schéma EMA-CO permet d'obtenir une rémission complète dans plus de 85-90% des formes métastatiques à haut risque."
  },
  {
    text: "Concernant la guérison du choriocarcinome gestationnel sous chimiothérapie, quelle est la réalité pronostique actuelle ?",
    options: [
      "C'est l'un des cancers les plus chimiosensibles et curables en oncologie humaine, avec un taux de guérison global supérieur à 90-95%",
      "C'est une tumeur totalement résistante à toute forme de chimiothérapie",
      "L'espérance de vie ne dépasse jamais 3 semaines après le diagnostic",
      "La mortalité est de 100% à court terme",
      "Seule la greffe de moelle osseuse allogénique est efficace"
    ],
    answers: [0],
    explanation: "Le choriocarcinome est un modèle remarquable de curabilité des tumeurs solides chimiosensibles, avec préservation de la fertilité dans la grande majorité des cas."
  },
  {
    text: "Quelle tumeur trophoblastique rare dérive du trophoblaste intermédiaire du site d'implantation et se caractérise par une faible sécrétion d'hCG mais une sécrétion d'hPL (hormone lactogène placentaire) ?",
    options: [
      "La tumeur trophoblastique du site d'implantation (TTSI)",
      "La môle hydatiforme complète classique",
      "Le tératome mature de l'ovaire",
      "Le polype endométrial glandulaire",
      "Le fibrome sous-séreux"
    ],
    answers: [0],
    explanation: "La TTSI produit peu d'hCG, est relativement chimiorésistante et son traitement repose principalement sur la chirurgie (hystérectomie)."
  },
  {
    text: "Devant des métrorragies inexpliquées survenant des semaines ou des mois après un avortement, un accouchement à terme ou une GEU, quel dosage biologique simple doit être immédiatement demandé ?",
    options: [
      "Dosage plasmatique quantitatif de l'hCG totale",
      "Vitesse de sédimentation",
      "Frottis de dépistage du col",
      "Bilan d'hémostase standard seul",
      "Électrophorèse des protéines sériques"
    ],
    answers: [0],
    explanation: "Un choriocarcinome peut survenir après TOUTE grossesse (50% après môle, 25% après avortement/GEU, 25% après accouchement normal). Tout saignement anormal post-gravidique impose un dosage des hCG."
  },
  {
    text: "Quelle lésion métastatique vulvo-vaginale très évocatrice de choriocarcinome se présente sous la forme d'un nodule bleuté hypervascularisé ?",
    options: [
      "Nodule vaginal sous-urétral bleuté, très friable et hémorragique (qu'il ne faut JAMAIS biopsier en consultation)",
      "Un chancre syphilitique induré blanc",
      "Une condylomatose acuminée en crête de coq",
      "Un kyste de la glande de Skene indolore",
      "Un angiome plan congénital"
    ],
    answers: [0],
    explanation: "Les métastases vaginales de choriocarcinome sont extrêmement vasculaires. Toute tentative de biopsie risque de provoquer une hémorragie cataclysmique incontrôlable. Le diagnostic est biologique (hCG élevés) et radiologique."
  },
  {
    text: "Parmi les facteurs de risque reconnus de survenue d'une môle hydatiforme, quel facteur épidémiologique est classiquement retrouvé ?",
    options: [
      "Les âges extrêmes de la reproduction (grossesses avant 15-18 ans et surtout après 40-45 ans)",
      "La grande multiparité entre 25 et 30 ans",
      "L'hypertension artérielle essentielle bien traitée",
      "L'activité sportive professionnelle de haut niveau",
      "Le tabagisme exclusif du père"
    ],
    answers: [0],
    explanation: "Le risque de môle complète est multiplié par 5 à 10 après 40 ans et considérablement accru après 45 ans."
  },
  {
    text: "À l'examen histologique d'une môle hydatiforme complète, on retrouve typiquement :",
    options: [
      "Une dégénérescence kystique hydropique de la totalité des villosités choriales, une hyperplasie trophoblastique diffuse circonférentielle et une absence totale de vaisseaux fœtaux",
      "Des villosités normales avec présence constante d'érythrocytes nucléés fœtaux",
      "Des cellules musculaires lisses bénignes sans aucun trophoblaste",
      "Du cartilage bronchique fœtal mature",
      "Un épithélium malpighien kératinisant"
    ],
    answers: [0],
    explanation: "Histologie clé de la MHC : œdème hydropique généralisé (« citernes »), prolifération trophoblastique (syncytio et cytotrophoblaste) sans embryon ni vaisseaux fœtaux."
  },
  {
    text: "Quelle complication clinique aiguë précoce peut compliquer une môle hydatiforme au 1er ou début du 2ème trimestre avant 20 SA ?",
    options: [
      "Prééclampsie précoce (HTA + protéinurie) survenant avant 20 SA, ce qui est quasi pathognomonique de la môle",
      "Choc anaphylactique au sperme",
      "Péritonite biliaire par rupture de la vésicule",
      "Embolie gazeuse artérielle",
      "Hypercalcémie maligne hypocalciurique"
    ],
    answers: [0],
    explanation: "Une prééclampsie avant 20 semaines d'aménorrhée doit faire évoquer en tout premier lieu une môle hydatiforme ou un syndrome des antiphospholipides."
  },
  {
    text: "Après rémission complète d'une tumeur trophoblastique gestationnelle sous chimiothérapie, quel délai de contraception est généralement conseillé avant d'autoriser une nouvelle grossesse ?",
    options: [
      "Un délai de 12 mois de rémission avec hCG négatifs réguliers",
      "Aucun délai : autorisation le jour même de la dernière cure",
      "Une interdiction définitive de toute nouvelle grossesse à vie",
      "Un délai obligatoire de 15 ans",
      "Une semaine après la cure"
    ],
    answers: [0],
    explanation: "Un intervalle de 12 mois permet de s'assurer de l'absence de rechute et d'éliminer les effets potentiellement tératogènes résiduels des cytostatiques."
  },
  {
    text: "Dans une grossesse ultérieure chez une patiente ayant des antécédents de môle hydatiforme, quelle surveillance est préconisée ?",
    options: [
      "Échographie pelvienne précoce dès 6-8 SA pour confirmer la normalité du sac gestationnel et analyse anatomopathologique du placenta à l'accouchement avec contrôle de l'hCG à 6 semaines du post-partum",
      "Aucune précaution particulière car la récidive est rigoureusement impossible",
      "Avortement thérapeutique systématique préventif",
      "Ligature tubaire de précaution dès le test positif",
      "Chimiothérapie préventive par méthotrexate pendant toute la grossesse"
    ],
    answers: [0],
    explanation: "Le risque de récidive de môle est d'environ 1 à 2% (10 fois plus élevé que dans la population générale), justifiant une échographie précoce et un contrôle systématique post-partum."
  }
];

const trophoCases = [
  {
    title: "Métrorragies en jus de prune et utérus discordeur",
    vignette: "Patiente de 42 ans, G3P2, aménorrhée de 11 SA. Consulte pour métrorragies brunâtres intermittentes en « jus de prune » et vomissements incoercibles. À l'examen : utérus augmenté de volume correspondant à 16 SA, mou et indolore. Bêta-hCG plasmatique à 240 000 UI/L.",
    question: "Quel diagnostic suspectez-vous et quel examen d'imagerie confirme immédiatement cette hypothèse ?",
    options: [
      "Môle hydatiforme complète ; échographie pelvienne montrant l'image en « tempête de neige » intracavitaire sans embryon et de volumineux kystes théco-lutéiniques bilatéraux.",
      "Grossesse gémellaire normale sans anomalie.",
      "Appendicite aiguë avec réaction péritonéale.",
      "Fibrome utérin en nécrobiose aseptique sans grossesse.",
      "Grossesse arrêtée simple sans anomalie trophoblastique."
    ],
    answers: [0],
    explanation: "L'association âge maternel, métrorragies foncées, utérus trop grand, hyperémèse gravidique, hCG vertigineux et image échographique floconneuse est typique de la môle complète."
  },
  {
    title: "Évacuation molaire et protocole opératoire",
    vignette: "Patiente de 38 ans chez qui le diagnostic de môle hydatiforme complète est posé à 10 SA. L'utérus mesure 14 cm de hauteur utérine.",
    question: "Quelle modalité d'évacuation utérine devez-vous mettre en œuvre ?",
    options: [
      "Aspiration endo-utérine sous contrôle échographique au bloc opératoire avec canule large, examen anatomopathologique complet de la totalité des débris et surveillance de la rétraction utérine.",
      "Curetage à la curette tranchante à sec en consultation.",
      "Déclenchement par perfusion d'ocytocine à forte dose sur col fermé.",
      "Laparotomie avec hystérotomie corporéale d'emblée.",
      "Attente de l'expulsion spontanée à domicile."
    ],
    answers: [0],
    explanation: "L'aspiration sous contrôle échographique évacue le tissu molaire en limitant le risque de perforation myométriale et d'hémorragie."
  },
  {
    title: "Plateau de l'hCG et diagnostic de TTG post-molaire",
    vignette: "Jeune femme de 26 ans évacuée d'une môle complète il y a 6 semaines. Les dosages d'hCG hebdomadaires successifs montrent : S3 = 4500 UI/L ; S4 = 4300 UI/L ; S5 = 4450 UI/L ; S6 = 4400 UI/L (stagnation sur 4 dosages).",
    question: "Quel diagnostic devez-vous porter et quel bilan devez-vous réaliser immédiatement ?",
    options: [
      "Tumeur Trophoblastique Gestationnelle (TTG) post-molaire selon les critères FIGO ; réaliser un bilan d'extension (scanner TAP, IRM cérébrale, écho pelvienne) et calculer le score pronostique FIGO.",
      "Évolution normale de la môle : poursuivre la surveillance sans traitement.",
      "Nouvelle grossesse intra-utérine débutante.",
      "Guérison définitive de la maladie molaire.",
      "Faux positif de laboratoire sans aucune valeur."
    ],
    answers: [0],
    explanation: "La stagnation des taux d'hCG sur 4 dosages hebdomadaires successifs affirme la TTG post-molaire imposant le bilan d'extension et la chimiothérapie."
  },
  {
    title: "Prise en charge d'une TTG à bas risque",
    vignette: "Patiente de 28 ans diagnostiquée avec une TTG post-molaire sans métastase extra-utérine (stade I FIGO), score pronostique OMS évalué à 2 (bas risque).",
    question: "Quel traitement médical de première intention garantit une guérison complète avec préservation de la fertilité ?",
    options: [
      "Monochimiothérapie par Méthotrexate (associé à l'acide folinique) jusqu'à normalisation des hCG plus 2 à 3 cures de consolidation.",
      "Hystérectomie totale avec ovariectomie bilatérale d'emblée.",
      "Polychimiothérapie lourde avec autogreffe de moelle.",
      "Radiothérapie pelvienne externe.",
      "Abstention thérapeutique complète."
    ],
    answers: [0],
    explanation: "Les TTG à bas risque répondent remarquablement au Méthotrexate seul avec plus de 90-95% de rémission complète sans chirurgie mutilante."
  },
  {
    title: "Choriocarcinome métastatique pulmonaire après accouchement",
    vignette: "Femme de 30 ans ayant accouché à terme il y a 4 mois sans incident. Consulte pour des hémoptysies répétées et des métrorragies persistantes. La radiographie thoracique montre de multiples opacités nodulaires bilatérales (« lâcher de ballons »). Le taux d'hCG est de 180 000 UI/L.",
    question: "Quel est le diagnostic le plus probable et quel est le pronostic global ?",
    options: [
      "Choriocarcinome gestationnel métastatique pulmonaire post-grossesse à terme ; le pronostic reste excellent (> 85-90% de guérison) grâce à la polychimiothérapie adaptée de type EMA-CO.",
      "Tuberculose pulmonaire miliaire sans rapport avec la grossesse.",
      "Cancer bronchique primitif à petites cellules de pronostic catastrophique.",
      "Embolie pulmonaire fibrino-cruorique bilatérale simple.",
      "Pneumonie à pneumocoque nécrosante."
    ],
    answers: [0],
    explanation: "Le choriocarcinome post-accouchement à terme est une tumeur hautement vasculaire métastasant aux poumons, mais qui demeure exceptionnellement curable sous polychimiothérapie spécialisée (EMA-CO)."
  }
];

// Write Maladies Trophoblastiques
fs.writeFileSync(
  path.join(publicDir, 'QCM_-_Maladies_Trophoblastiques.html'),
  makeHtml('Maladies Trophoblastiques Gestationnelles', 'Môle Hydatiforme & Choriocarcinome | 5ème Année', trophoQcms, trophoCases)
);

console.log('Successfully generated all 5 remaining HTML files with 25 MCQs + 5 Cas Cliniques each in public/assets/aistudio!');
