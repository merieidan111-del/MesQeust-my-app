import React from 'react';
import { getPhotoIconForModule } from '../data/medicalPhotoIcons';
import pneumoExactPhotoImg from '../assets/images/pneumo_study_mascot_1792055113698.jpg';
import heartExactPhotoImg from '../assets/images/heart_study_mascot_1790933045954.jpg';
import brainExactPhotoImg from '../assets/images/brain_study_mascot_1790933058616.jpg';
import liverExactPhotoImg from '../assets/images/liver_study_mascot_1790933325382.jpg';
import germExactPhotoImg from '../assets/images/germ_study_mascot_1792054551977.jpg';
import hematoExactPhotoImg from '../assets/images/hemato_study_mascot_1792055112715.jpg';
import gynecoExactPhotoImg from '../assets/images/gyneco_study_mascot_1792055136184.jpg';
import pediatrieExactPhotoImg from '../assets/images/pediatrie_study_mascot_1792055135871.jpg';
import uronephroExactPhotoImg from '../assets/images/uronephro_study_mascot_1792055162771.jpg';
import endocrinoExactPhotoImg from '../assets/images/endocrino_study_mascot_1792055161935.jpg';
import psychiatrieExactPhotoImg from '../assets/images/psychiatrie_study_mascot_1792055195313.jpg';

export type MascotImpression = 'studious' | 'joyful' | 'sad' | 'proud' | 'encourage';

export interface ModuleLogoProps {
  moduleId?: string;
  moduleTitle?: string;
  impression?: MascotImpression;
  size?: number;
  className?: string;
  showCardFrame?: boolean;
  showDiplomaLabel?: boolean;
}

/**
 * Normalizes any module ID or title to a standard key matching the uploaded clinical icon sheet:
 * - cardio: Anatomical heart with aorta & pulmonary trunk (Coral red / pink)
 * - pneumo: Lungs with trachea & bronchial tree (Coral pink / tan trachea)
 * - infectio: Spherical virus particle + flagellated green bacterium
 * - neuro: Anatomical brain with cerebral gyri & cerebellum (Soft tan/peach)
 * - hemato: Red blood cells (erythrocytes) cluster + leukocyte (Coral red)
 * - gastro: Liver (purple/mauve) + Stomach (peach/tan) side-by-side
 * - psy: Profile head silhouette with tangled mind loop knot
 * - gyneco: Uterus with fallopian tubes & ovaries (Peach/purple)
 * - pediatrie: Swaddled newborn baby in coral wrap with pacifier
 * - nephro: Dual kidneys with ureters & bladder (Mauve/tan)
 * - ortho: Articulating joint bones with cartilage & pain radial lines
 * - endo: Butterfly thyroid gland wrapped over tracheal rings
 * - semio: Eyeball cross-section / clinical diagnostic
 * - pharma: Medical capsule pill / pharmacology
 */
export function getNormalizedModuleKey(moduleId?: string, moduleTitle?: string): string {
  const query = `${moduleId || ''} ${moduleTitle || ''}`.toLowerCase();

  if (query.includes('cardio') || query.includes('coeur') || query.includes('vascul') || query.includes('heart')) return 'cardio';
  if (query.includes('neuro') || query.includes('cerveau') || query.includes('crane') || query.includes('brain')) return 'neuro';
  if (query.includes('pneumo') || query.includes('pulmon') || query.includes('resp') || query.includes('wind') || query.includes('lung')) return 'pneumo';
  if (query.includes('gastro') || query.includes('estomac') || query.includes('hepato') || query.includes('foie') || query.includes('intestin') || query.includes('liver')) return 'gastro';
  if (query.includes('endo') || query.includes('thyro') || query.includes('diabete')) return 'endo';
  if (query.includes('ped') || query.includes('enfant') || query.includes('bebe') || query.includes('baby')) return 'pediatrie';
  if (query.includes('gyn') || query.includes('obst') || query.includes('femme') || query.includes('uterus')) return 'gyneco';
  if (query.includes('ortho') || query.includes('otr') || query.includes('os') || query.includes('locomot') || query.includes('trauma') || query.includes('bone')) return 'ortho';
  if (query.includes('infectio') || query.includes('microb') || query.includes('virus') || query.includes('bacteri') || query.includes('germ')) return 'infectio';
  if (query.includes('hemato') || query.includes('sang') || query.includes('onco') || query.includes('cellul') || query.includes('blood') || query.includes('rbc')) return 'hemato';
  if (query.includes('nephro') || query.includes('uro') || query.includes('rein') || query.includes('kidney') || query.includes('bladder')) return 'nephro';
  if (query.includes('psy') || query.includes('mental') || query.includes('mind')) return 'psy';
  if (query.includes('semio') || query.includes('proped') || query.includes('eye')) return 'semio';
  if (query.includes('pharma') || query.includes('medicam') || query.includes('drug') || query.includes('pill')) return 'pharma';

  return 'cardio';
}

// -----------------------------------------------------------------------------
// 1. CARDIOLOGIE : Anatomical Heart (Photo 1 & Photo 2)
// Red/pink myocardium, aorta with 3 supra-aortic branches, superior vena cava,
// pulmonary artery, coronary sulcus lines, bold dark outline (#1E293B)
// -----------------------------------------------------------------------------
export const LogoCardiologie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white shrink-0 select-none ${className}`}
    >
      <img
        src={heartExactPhotoImg}
        alt="Cardiologie - Icone Officielle"
        className="w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// -----------------------------------------------------------------------------
// 2. PNEUMOLOGIE : Anatomical Lungs & Trachea (Photo 1 & Photo 2)
// Trachea with cartilage rings, left & right lung lobes in salmon pink (#FB7185),
// bronchial bifurcation, cardiac notch on left lung
// -----------------------------------------------------------------------------
export const LogoPneumologie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white shrink-0 select-none ${className}`}
    >
      <img
        src={pneumoExactPhotoImg}
        alt="Pneumologie - Icone Officielle"
        className="w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// -----------------------------------------------------------------------------
// 3. INFECTIOLOGIE : Germ Mascot (Studious germ, same style as Cardio)
// Cute green bacterium germ with glasses reading a study notebook on pastel books
// -----------------------------------------------------------------------------
export const LogoInfectiologie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white shrink-0 select-none ${className}`}
    >
      <img
        src={germExactPhotoImg}
        alt="Infectiologie - Icone Officielle"
        className="w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// -----------------------------------------------------------------------------
// 4. NEUROLOGIE : Anatomical Brain (Photo 1 & Photo 2)
// Lateral cerebral cortex in soft peach/tan (#FDE6D2 / #F8D5B8), distinct gyri/sulci convolutions,
// cerebellum underneath, brainstem, dark bold outline (#1E293B)
// -----------------------------------------------------------------------------
export const LogoNeurologie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white shrink-0 select-none ${className}`}
    >
      <img
        src={brainExactPhotoImg}
        alt="Neurologie - Icone Officielle"
        className="w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// -----------------------------------------------------------------------------
// 5. HÉMATOLOGIE : Red Blood Cell Mascot (Studious erythrocyte, same style as Cardio)
// Cute biconcave red blood cell with glasses writing notes on hematology books
// -----------------------------------------------------------------------------
export const LogoHematologie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white shrink-0 select-none ${className}`}
    >
      <img
        src={hematoExactPhotoImg}
        alt="Hématologie - Icone Officielle"
        className="w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// -----------------------------------------------------------------------------
// 6. HEPATO GASTRO-ENTÉRO : Liver + Stomach Dual Organ (Photo 1)
// Liver in dusky mauve/purple (#7E6B8F) on the left, Stomach in warm peach/tan (#FBBF7E) on the right!
// -----------------------------------------------------------------------------
export const LogoGastroenterologie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white shrink-0 select-none ${className}`}
    >
      <img
        src={liverExactPhotoImg}
        alt="Hépato-Gastroentérologie - Icone Officielle"
        className="w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// -----------------------------------------------------------------------------
// 7. PSYCHIATRIE : Mind & Psyche Mascot (Studious mind, same style as Cardio)
// Cute lavender-pink brain & mental psyche with glasses sitting on psychiatry books
// -----------------------------------------------------------------------------
export const LogoPsychiatrie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white shrink-0 select-none ${className}`}
    >
      <img
        src={psychiatrieExactPhotoImg}
        alt="Psychiatrie - Icone Officielle"
        className="w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// -----------------------------------------------------------------------------
// 8. GYNÉCOLOGIE : Uterus Mascot (Studious uterus, same style as Cardio)
// Cute anatomical uterus with fallopian tubes and ovaries, glasses, sitting on OB-GYN books
// -----------------------------------------------------------------------------
export const LogoGynecologie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white shrink-0 select-none ${className}`}
    >
      <img
        src={gynecoExactPhotoImg}
        alt="Gynécologie–Obstétrique - Icone Officielle"
        className="w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// -----------------------------------------------------------------------------
// 9. PÉDIATRIE : Baby Mascot (Studious baby, same style as Cardio)
// Cute baby infant in pastel overalls with round glasses reading pediatrics books
// -----------------------------------------------------------------------------
export const LogoPediatrie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white shrink-0 select-none ${className}`}
    >
      <img
        src={pediatrieExactPhotoImg}
        alt="Pédiatrie - Icone Officielle"
        className="w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// -----------------------------------------------------------------------------
// 10. URO-NEPHROLOGIE : Kidneys & Bladder Mascot (Studious duo, same style as Cardio)
// Cute anatomical kidneys & urinary bladder with round glasses on nephrology & urology books
// -----------------------------------------------------------------------------
export const LogoNephrologie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white shrink-0 select-none ${className}`}
    >
      <img
        src={uronephroExactPhotoImg}
        alt="Urologie & Néphrologie - Icone Officielle"
        className="w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// -----------------------------------------------------------------------------
// 11. ORTHO TRAUMATO : Articulating Bone Joint & Pain Lines (Photo 1 & Photo 2)
// Articulating bones with cartilage in soft blue/white (#BAE6FD) and radial impact lines
// -----------------------------------------------------------------------------
export const LogoOrthopedie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Radiating Pain / Impact Lines (Photo 1) */}
      <path d="M66 42 L76 38 M68 50 L80 50 M66 58 L76 62" stroke="#1E293B" strokeWidth="2.8" strokeLinecap="round" />

      {/* Top Bone (Femur / Upper arm bone, #E0F2FE soft blue) */}
      <g transform="rotate(-30 46 46)">
        <path
          d="M38 18 C34 18 30 22 34 26 C38 29 42 27 44 26 V44 C40 44 36 47 38 52 C41 57 52 57 54 52 C56 47 52 44 48 44 V26 C50 27 54 29 58 26 C62 22 58 18 54 18 Z"
          fill="#BAE6FD"
          stroke="#1E293B"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Articular cartilage highlight */}
        <path d="M40 50 C44 52 48 52 52 50" stroke="#38BDF8" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      </g>

      {/* Bottom Bone (Tibia / Forearm bone) */}
      <g transform="rotate(35 46 54)">
        <path
          d="M44 54 C40 54 36 57 38 62 C41 67 52 67 54 62 C56 57 52 54 48 54 V74 C50 75 54 77 58 74 C62 70 58 66 54 66 H38 C34 66 30 70 34 74 C38 77 42 75 44 74 Z"
          fill="#BAE6FD"
          stroke="#1E293B"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

// -----------------------------------------------------------------------------
// 12. ENDOCRINOLOGIE : Thyroid Gland Mascot (Studious thyroid, same style as Cardio)
// Cute butterfly thyroid gland on trachea rings, with glasses, sitting on endocrinology books
// -----------------------------------------------------------------------------
export const LogoEndocrinologie: React.FC<{ size?: number; className?: string; impression?: MascotImpression }> = ({
  size = 64,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white shrink-0 select-none ${className}`}
    >
      <img
        src={endocrinoExactPhotoImg}
        alt="Endocrinologie - Icone Officielle"
        className="w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// -----------------------------------------------------------------------------
// 13. SÉMIOLOGIE MÉDICALE : Eyeball (Photo 2)
// Cross-section of eyeball with cornea, lens, sclera and optic nerve
// -----------------------------------------------------------------------------
export const LogoSemio: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Optic Nerve on left */}
      <path d="M22 46 H12 V54 H22" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="#FDE6D2" />
      {/* Sclera Eyeball Sphere */}
      <circle cx="50" cy="50" r="28" fill="#F8FAFC" stroke="#1E293B" strokeWidth="3.4" />
      {/* Iris & Cornea Dome */}
      <path d="M68 34 C76 42 76 58 68 66" fill="#BAE6FD" stroke="#1E293B" strokeWidth="3" />
      <ellipse cx="68" cy="50" rx="8" ry="16" fill="#60A5FA" stroke="#1E293B" strokeWidth="2.4" />
      {/* Pupil & Light Glint */}
      <circle cx="68" cy="50" r="5" fill="#1E293B" />
      <circle cx="66" cy="48" r="1.8" fill="#FFFFFF" />
    </svg>
  );
};

// -----------------------------------------------------------------------------
// 14. PHARMACOLOGIE : Medical Capsule & Drug Formula (Photo 2 inspired)
// Two-tone capsule pill (emerald/coral) with dividing seam and active molecular dots
// -----------------------------------------------------------------------------
export const LogoPharma: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g transform="rotate(-40 50 50)">
        {/* Top Half of Capsule (Coral Red) */}
        <path d="M36 28 C36 18 64 18 64 28 V50 H36 Z" fill="#E05A6D" stroke="#1E293B" strokeWidth="3.2" strokeLinejoin="round" />
        {/* Bottom Half of Capsule (Cream / Tan) */}
        <path d="M36 50 H64 V72 C64 82 36 82 36 72 Z" fill="#FDE6D2" stroke="#1E293B" strokeWidth="3.2" strokeLinejoin="round" />
        {/* Seam line */}
        <line x1="36" y1="50" x2="64" y2="50" stroke="#1E293B" strokeWidth="3.4" />
        {/* Active granules */}
        <circle cx="46" cy="62" r="2" fill="#E05A6D" />
        <circle cx="54" cy="68" r="2" fill="#E05A6D" />
        {/* Gloss highlight */}
        <path d="M42 26 V44" stroke="#FFA5B4" strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </svg>
  );
};

/**
 * Universal Master Module Exact Logo Component
 * Automatically resolves and renders the exact cropped square photo icon from the user's reference sheet.
 */
export const ModuleExactLogo: React.FC<ModuleLogoProps> = ({
  moduleId,
  moduleTitle,
  size = 64,
  className = '',
  showCardFrame = false,
}) => {
  const PhotoIcon = getPhotoIconForModule(moduleId || moduleTitle);

  if (showCardFrame) {
    return (
      <div className="flex flex-col items-center p-2 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
        <PhotoIcon size={size} className={className} />
      </div>
    );
  }

  return <PhotoIcon size={size} className={className} />;
};
