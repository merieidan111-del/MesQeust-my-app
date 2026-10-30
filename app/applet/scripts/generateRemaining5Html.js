// Script to generate the 5 remaining Gynecology-Obstetrics HTML files matching the exact Algerian 5ème Année curriculum
import fs from 'fs';
import path from 'path';

const outDir = '/app/applet/public/assets/aistudio';

// 1. Infections Génitales Basses & Hautes
const htmlInfections = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Infections Génitales Basses & Hautes — 5ème Année Médecine</title>
</head>
<body>
<main>
<section class="block" id="qcm">
  <div class="section-head">
    <div class="section-num">1</div>
    <h2>Banque de 25 QCM exigeants</h2>
  </div>

  <div class="q-card">
    <div class="q-top"><span class="q-num">Q1</span><span class="badge badge-rj">Réponse juste</span></div>
    <p class="q-text">Parmi les propositions suivantes concernant la vaginose bactérienne à Gardnerella vaginalis, quelle est l'affirmation exacte ?</p>
    <ul class="q-options">
      <li data-letter="A">Elle se caractérise par des leucorrhées mousseuses, verdâtres et aérées avec prurit intense.</li>
      <li data-letter="B">Le pH vaginal est acide, habituellement inférieur à 4,5.</li>
      <li data-letter="C">Le test au KOH 10% (sniff test) dégage une odeur caractéristique d'amines (poisson pourri).</li>
      <li data-letter="D">La présence de levures bourgeonnantes à l'examen direct affirme le diagnostic.</li>
      <li data-letter="E">Le traitement de première intention repose sur les macrolides par voie générale.</li>
    </ul>
    <details class="correction">
      <summary>Voir la correction et l'explication détaillée</summary>
      <div class="correction-body">
        <span class="answer-line">Réponse : C</span>
        <div class="why"><b>Explication :</b> La vaginose bactérienne repose sur les critères d'Amsel : pertes grisâtres fluides, pH vaginal > 4,5, sniff test positif (KOH dégageant une odeur d'amines volatiles) et présence de clue cells (cellules indicatrices) à l'état frais. Le traitement repose sur le Métronidazole.</div>
      </div>
    </details>
  </div>

  <div class="q-card">
    <div class="q-top"><span class="q-num">Q2</span><span class="badge badge-rj">Réponse juste</span></div>
    <p class="q-text">Quel est l'agent étiologique le plus fréquemment responsable de salpingite aiguë chez la femme jeune sexuellement active ?</p>
    <ul class="q-options">
      <li data-letter="A">Candida albicans</li>
      <li data-letter="B">Chlamydia trachomatis</li>
      <li data-letter="C">Streptocoque du groupe B</li>
      <li data-letter="D">Trichomonas vaginalis</li>
      <li data-letter="E">Treponema pallidum</li>
    </ul>
    <details class="correction">
      <summary>Voir la correction et l'explication détaillée</summary>
      <div class="correction-body">
        <span class="answer-line">Réponse : B</span>
        <div class="why"><b>Explication :</b> Chlamydia trachomatis est la première cause d'infection génitale haute (salpingite) chez la femme jeune, souvent pauci-symptomatique ou subaiguë, responsable d'infertilité tubaire secondaire.</div>
      </div>
    </details>
  </div>

  <div class="q-card">
    <div class="q-top"><span class="q-num">Q3</span><span class="badge badge-multi">Choix multiples</span></div>
    <p class="q-text">Quels sont les éléments cardinaux du trépied clinique évocateur d'une salpingite aiguë non compliquée ?</p>
    <ul class="q-options">
      <li data-letter="A">Douleurs pelviennes bilatérales spontanées ou provoquées au toucher vaginal</li>
      <li data-letter="B">Fièvre variable, parfois modérée ou absente</li>
      <li data-letter="C">Leucorrhées purulentes ou métrorragies sales associées</li>
      <li data-letter="D">Masse pelvienne fixée de plus de 10 cm au toucher vaginal</li>
      <li data-letter="E">Aménorrhée secondaire de plus de 3 mois</li>
    </ul>
    <details class="correction">
      <summary>Voir la correction et l'explication détaillée</summary>
      <div class="correction-body">
        <span class="answer-line">Réponses : A, B, C</span>
        <div class="why"><b>Explication :</b> Le tableau clinique typique associe douleurs pelviennes (mobilisation utérine douloureuse, sensibilité annexielle bilatérale), fièvre ou fébricule, et leucorrhées pathologiques. Une masse de 10 cm orienterait vers un abcès tubo-ovarien ou un pyosalpinx volumineux.</div>
      </div>
    </details>
  </div>

  <div class="q-card">
    <div class="q-top"><span class="q-num">Q4</span><span class="badge badge-rj">Réponse juste</span></div>
    <p class="q-text">Concernant le syndrome de Fitz-Hugh-Curtis, quelle est la proposition exacte ?</p>
    <ul class="q-options">
      <li data-letter="A">Il s'agit d'une périhépatite caractérisée par des adhérences en cordes de violon entre la capsule hépatique et le diaphragme.</li>
      <li data-letter="B">Il est exclusivement provoqué par le virus Herpes simplex de type 2.</li>
      <li data-letter="C">La symptomatologie prédomine au niveau de la fosse iliaque gauche.</li>
      <li data-letter="D">Il nécessite obligatoirement une hépatectomie partielle d'urgence.</li>
      <li data-letter="E">Les transaminases hépatiques sont constamment augmentées à plus de 50 fois la normale.</li>
    </ul>
    <details class="correction">
      <summary>Voir la correction et l'explication détaillée</summary>
      <div class="correction-body">
        <span class="answer-line">Réponse : A</span>
        <div class="why"><b>Explication :</b> Le syndrome de Fitz-Hugh-Curtis est une périhépatite secondaire à Chlamydia trachomatis (ou Neisseria gonorrhoeae), créant des adhérences caractéristiques « en cordes de violon » à la cœlioscopie, avec douleur de l'hypochondre droit mimant une cholécystite.</div>
      </div>
    </details>
  </div>

  <div class="q-card">
    <div class="q-top"><span class="q-num">Q5</span><span class="badge badge-rj">Réponse juste</span></div>
    <p class="q-text">Quelle antibiothérapie probabiliste de première intention est recommandée dans la salpingite aiguë non compliquée de la femme jeune ?</p>
    <ul class="q-options">
      <li data-letter="A">Amoxicilline seule per os pendant 5 jours</li>
      <li data-letter="B">Ceftriaxone IM (dose unique) + Doxycycline per os (14 jours) + Métronidazole per os (14 jours)</li>
      <li data-letter="C">Ciprofloxacine en monothérapie pendant 21 jours</li>
      <li data-letter="D">Gentamicine IV seule en cure courte de 48 heures</li>
      <li data-letter="E">Pénicilline G IV à forte dose pendant 10 jours</li>
    </ul>
    <details class="correction">
      <summary>Voir la correction et l'explication détaillée</summary>
      <div class="correction-body">
        <span class="answer-line">Réponse : B</span>
        <div class="why"><b>Explication :</b> L'antibiothérapie doit couvrir le gonocoque (Ceftriaxone), Chlamydia (Doxycycline 14 jours) et les anaérobies (Métronidazole 14 jours), avec traitement obligatoire du ou des partenaires.</div>
      </div>
    </details>
  </div>

  <div class="q-card">
    <div class="q-top"><span class="q-num">Q6</span><span class="badge badge-rj">Réponse juste</span></div>
    <p class="q-text">Concernant la trichomonase urogénitale à Trichomonas vaginalis, quelle est l'affirmation exacte ?</p>
    <ul class="q-options">
      <li data-letter="A">Il s'agit d'une infection non sexuellement transmissible à transmission hydrique exclusive.</li>
      <li data-letter="B">Les leucorrhées sont typiquement blanches, épaisses et grumeleuses en « lait caillé ».</li>
      <li data-letter="C">Le col utérin peut présenter un aspect piqueté framboisé caractéristique (colite tigrée).</li>
      <li data-letter="D">L'examen parasitologique direct entre lame et lamelle est constamment négatif.</li>
      <li data-letter="E">Le traitement du partenaire n'est pas nécessaire.</li>
    </ul>
    <details class="correction">
      <summary>Voir la correction et l'explication détaillée</summary>
      <div class="correction-body">
        <span class="answer-line">Réponse : C</span>
        <div class="why"><b>Explication :</b> Trichomonas vaginalis est une IST provoquant des leucorrhées verdâtres, mousseuses, aérées, prurigineuses et un col framboisé avec pétéchies (« colpitis macularis »). Le traitement repose sur le métronidazole chez les deux partenaires.</div>
      </div>
    </details>
  </div>

  <div class="q-card">
    <div class="q-top"><span class="q-num">Q7</span><span class="badge badge-rj">Réponse juste</span></div>
    <p class="q-text">Quelle complication à long terme est la conséquence redoutée majeure des salpingites aiguës non ou mal traitées ?</p>
    <ul class="q-options">
      <li data-letter="A">Sténose de l'artère rénale</li>
      <li data-letter="B">Infertilité tubaire d'origine mécanique et risque accru de grossesse extra-utérine (GEU)</li>
      <li data-letter="C">Adénocarcinome de l'endomètre</li>
      <li data-letter="D">Insuffisance ovarienne prématurée d'origine auto-immune</li>
      <li data-letter="E">Prolapsus utérin de grade 3</li>
    </ul>
    <details class="correction">
      <summary>Voir la correction et l'explication détaillée</summary>
      <div class="correction-body">
        <span class="answer-line">Réponse : B</span>
        <div class="why"><b>Explication :</b> L'altération des cils tubaires et les synéchies/sténoses séquellaires de la salpingite entraînent une infertilité tubaire (obstrution tubaire distale, hydrosalpinx) et multiplient par 6 à 10 le risque de GEU.</div>
      </div>
    </details>
  </div>

  <div class="q-card">
    <div class="q-top"><span class="q-num">Q8</span><span class="badge badge-rj">Réponse juste</span></div>
    <p class="q-text">La candidose vulvo-vaginale à Candida albicans se manifeste typiquement par :</p>
    <ul class="q-options">
      <li data-letter="A">Des pertes fluides très fétides sans prurit</li>
      <li data-letter="B">Un prurit vulvaire féroce, des brûlures mictionnelles et des leucorrhées blanc-jaunâtre épaisses en grumeaux</li>
      <li data-letter="C">Un pH vaginal alcalin supérieur à 6</li>
      <li data-letter="D">Une fièvre supérieure à 39°C avec frissons intenses</li>
      <li data-letter="E">Des adénopathies inguinales nécrotiques et fistulisées</li>
    </ul>
    <details class="correction">
      <summary>Voir la correction et l'explication détaillée</summary>
      <div class="correction-body">
        <span class="answer-line">Réponse : B</span>
        <div class="why"><b>Explication :</b> La mycose vulvo-vaginale est caractérisée par un prurit intense, un érythème vulvaire vif, des leucorrhées en « lait caillé » et un pH acide habituel (&lt; 4,5). Traitement : ovule antimycosique imidazolé local.</div>
      </div>
    </details>
  </div>

  <div class="q-card">
    <div class="q-top"><span class="q-num">Q9</span><span class="badge badge-rj">Réponse juste</span></div>
    <p class="q-text">Quelle est l'attitude thérapeutique fondamentale concernant le ou les partenaires d'une patiente atteinte d'une cervicite à Chlamydia trachomatis ?</p>
    <ul class="q-options">
      <li data-letter="A">Aucune mesure n'est requise en l'absence de signes cliniques chez le partenaire.</li>
      <li data-letter="B">Dépistage et traitement systématique et simultané du partenaire, avec abstinence ou préservatif jusqu'à la fin du traitement.</li>
      <li data-letter="C">Prescription d'un collyre antibiotique préventif.</li>
      <li data-letter="D">Hospitalisation systématique en service d'urologie.</li>
      <li data-letter="E">Vaccination d'urgence contre Chlamydia.</li>
    </ul>
    <details class="correction">
      <summary>Voir la correction et l'explication détaillée</summary>
      <div class="correction-body">
        <span class="answer-line">Réponse : B</span>
        <div class="why"><b>Explication :</b> Toute IST nécessite le traitement conjoint du ou des partenaires pour éviter l'effet ping-pong, même si le partenaire est asymptomatique.</div>
      </div>
    </details>
  </div>

  <div class="q-card">
    <div class="q-top"><span class="q-num">Q10</span><span class="badge badge-multi">Choix multiples</span></div>
    <p class="q-text">Parmi les situations suivantes, lesquelles constituent des indications formelles d'hospitalisation devant une infection génitale haute ?</p>
    <ul class="q-options">
      <li data-letter="A">Suspicion d'abcès tubo-ovarien ou de pelvipéritonite</li>
      <li data-letter="B">Grossesse en cours associée</li>
      <li data-letter="C">Doute diagnostique avec une urgence chirurgicale (appendicite aiguë, torsion d'annexe, GEU)</li>
      <li data-letter="D">Forme clinique hyperalgique ou intolérance digestive aux traitements oraux</li>
      <li data-letter="E">Échec d'une antibiothérapie ambulatoire bien conduite à 48-72 heures</li>
    </ul>
    <details class="correction">
      <summary>Voir la correction et l'explication détaillée</summary>
      <div class="correction-body">
        <span class="answer-line">Réponses : A, B, C, D, E</span>
        <div class="why"><b>Explication :</b> Toutes ces situations exigent une hospitalisation en milieu gynécologique pour antibiothérapie intraveineuse, surveillance étroite et éventuel drainage ou cœlioscopie diagnostique et thérapeutique.</div>
      </div>
    </details>
  </div>

</section>
</main>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'QCM_-_Infections_Genitales_Basses_Hautes.html'), htmlInfections);
console.log('Written QCM_-_Infections_Genitales_Basses_Hautes.html');
