import React from 'react';
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

export {
  pneumoExactPhotoImg,
  heartExactPhotoImg,
  brainExactPhotoImg,
  liverExactPhotoImg,
  germExactPhotoImg,
  hematoExactPhotoImg,
  gynecoExactPhotoImg,
  pediatrieExactPhotoImg,
  uronephroExactPhotoImg,
  endocrinoExactPhotoImg,
  psychiatrieExactPhotoImg,
};

export interface MedicalPhotoIconDef {
  moduleId: string;
  moduleKey: string;
  name: string;
  academicYear: string;
  description: string;
  Component: React.FC<{ size?: number; className?: string }>;
}

// 1. CARDIOLOGIE : Exact photo icon
export const PhotoIconCardiologie: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 overflow-hidden ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={heartExactPhotoImg}
      alt="CARDIOLOGIE"
      className="w-full h-full object-contain pointer-events-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

// 2. PNEUMOLOGIE : Exact photo icon uploaded by user
export const PhotoIconPneumologie: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 overflow-hidden ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={pneumoExactPhotoImg}
      alt="PNEUMOLOGIE"
      className="w-full h-full object-contain pointer-events-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

// 3. INFECTIEUX : Exact photo icon (Germ mascot, same style as Cardio)
export const PhotoIconInfectieux: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 overflow-hidden ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={germExactPhotoImg}
      alt="INFECTIEUX"
      className="w-full h-full object-contain pointer-events-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

// 4. NEUROLOGIE : Exact photo icon
export const PhotoIconNeurologie: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 overflow-hidden ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={brainExactPhotoImg}
      alt="NEUROLOGIE"
      className="w-full h-full object-contain pointer-events-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

// 5. HÉMATOLOGIE : Red blood cell mascot (same style as Cardio)
export const PhotoIconHematologie: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 overflow-hidden ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={hematoExactPhotoImg}
      alt="HÉMATOLOGIE"
      className="w-full h-full object-contain pointer-events-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

// 6. HEPATO GASTRO-ENTÉRO : Exact photo icon
export const PhotoIconGastro: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 overflow-hidden ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={liverExactPhotoImg}
      alt="HÉPATO-GASTROENTÉROLOGIE"
      className="w-full h-full object-contain pointer-events-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

// 7. PSYCHIATRIE : Mind & psyche study mascot (same style as Cardio)
export const PhotoIconPsychiatrie: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 overflow-hidden ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={psychiatrieExactPhotoImg}
      alt="PSYCHIATRIE"
      className="w-full h-full object-contain pointer-events-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

// 8. GYNÉCOLOGIE : Uterus study mascot (same style as Cardio)
export const PhotoIconGynecologie: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 overflow-hidden ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={gynecoExactPhotoImg}
      alt="GYNÉCOLOGIE"
      className="w-full h-full object-contain pointer-events-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

// 9. PÉDIATRIE : Baby study mascot (same style as Cardio)
export const PhotoIconPediatrie: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 overflow-hidden ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={pediatrieExactPhotoImg}
      alt="PÉDIATRIE"
      className="w-full h-full object-contain pointer-events-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

// 10. URO-NEPHROLOGIE : Kidneys & Bladder study mascot (same style as Cardio)
export const PhotoIconNephrologie: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 overflow-hidden ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={uronephroExactPhotoImg}
      alt="URO-NÉPHROLOGIE"
      className="w-full h-full object-contain pointer-events-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

// 11. ORTHO TRAUMATO : Exact cropped cell from Photo 1
export const PhotoIconOrthopedie: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 ${className}`}
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M66 42 L76 38 M68 50 L80 50 M66 58 L76 62" stroke="#1E293B" strokeWidth="2.8" strokeLinecap="round" />
      <g transform="rotate(-30 46 46)">
        <path
          d="M38 18 C34 18 30 22 34 26 C38 29 42 27 44 26 V44 C40 44 36 47 38 52 C41 57 52 57 54 52 C56 47 52 44 48 44 V26 C50 27 54 29 58 26 C62 22 58 18 54 18 Z"
          fill="#BAE6FD"
          stroke="#1E293B"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M40 50 C44 52 48 52 52 50" stroke="#38BDF8" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      </g>
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
  </div>
);

// 12. ENDOCRINOLOGIE : Thyroid study mascot (same style as Cardio)
export const PhotoIconEndocrinologie: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 overflow-hidden ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={endocrinoExactPhotoImg}
      alt="ENDOCRINOLOGIE"
      className="w-full h-full object-contain pointer-events-none"
      referrerPolicy="no-referrer"
    />
  </div>
);

// 13. SÉMIOLOGIE MÉDICALE : Exact Eyeball from Photo 2
export const PhotoIconSemio: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 ${className}`}
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M22 46 H12 V54 H22" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="#FDE6D2" />
      <circle cx="50" cy="50" r="28" fill="#F8FAFC" stroke="#1E293B" strokeWidth="3.4" />
      <path d="M68 34 C76 42 76 58 68 66" fill="#BAE6FD" stroke="#1E293B" strokeWidth="3" />
      <ellipse cx="68" cy="50" rx="8" ry="16" fill="#60A5FA" stroke="#1E293B" strokeWidth="2.4" />
      <circle cx="68" cy="50" r="5" fill="#1E293B" />
      <circle cx="66" cy="48" r="1.8" fill="#FFFFFF" />
    </svg>
  </div>
);

// 14. PHARMACOLOGIE : Medical Capsule from Photo 2
export const PhotoIconPharma: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <div
    className={`inline-flex items-center justify-center aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-2xs p-1 select-none shrink-0 ${className}`}
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g transform="rotate(-40 50 50)">
        <path d="M36 28 C36 18 64 18 64 28 V50 H36 Z" fill="#E05A6D" stroke="#1E293B" strokeWidth="3.2" strokeLinejoin="round" />
        <path d="M36 50 H64 V72 C64 82 36 82 36 72 Z" fill="#FDE6D2" stroke="#1E293B" strokeWidth="3.2" strokeLinejoin="round" />
        <line x1="36" y1="50" x2="64" y2="50" stroke="#1E293B" strokeWidth="3.4" />
        <circle cx="46" cy="62" r="2" fill="#E05A6D" />
        <circle cx="54" cy="68" r="2" fill="#E05A6D" />
        <path d="M42 26 V44" stroke="#FFA5B4" strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </svg>
  </div>
);

export const MEDICAL_PHOTO_ICONS_LIST: MedicalPhotoIconDef[] = [
  { moduleId: 'mod-cardio', moduleKey: 'cardio', name: 'Cardiologie & Vasculaire', academicYear: '4e année', description: 'Cœur studieux (Style Cardio)', Component: PhotoIconCardiologie },
  { moduleId: 'mod-pneumo', moduleKey: 'pneumo', name: 'Pneumologie', academicYear: '4e année', description: 'Poumons studieux (Style Cardio)', Component: PhotoIconPneumologie },
  { moduleId: 'mod-infectio', moduleKey: 'infectio', name: 'Infectiologie', academicYear: '4e année', description: 'Germe studieux (Style Cardio)', Component: PhotoIconInfectieux },
  { moduleId: 'mod-neuro', moduleKey: 'neuro', name: 'Neurologie & Neurochirurgie', academicYear: '4e année', description: 'Cerveau studieux (Style Cardio)', Component: PhotoIconNeurologie },
  { moduleId: 'mod-hemato', moduleKey: 'hemato', name: 'Hématologie & Oncologie', academicYear: '4e année', description: 'Globule rouge studieux (Style Cardio)', Component: PhotoIconHematologie },
  { moduleId: 'mod-gastro', moduleKey: 'gastro', name: 'Hépato-Gastroentérologie', academicYear: '4e année', description: 'Foie & Estomac studieux (Style Cardio)', Component: PhotoIconGastro },
  { moduleId: 'mod-5-psy', moduleKey: 'psy', name: 'Psychiatrie', academicYear: '5e année', description: 'Psyché & esprit studieux (Style Cardio)', Component: PhotoIconPsychiatrie },
  { moduleId: 'mod-5-gyn', moduleKey: 'gyneco', name: 'Gynécologie–Obstétrique', academicYear: '5e année', description: 'Utérus studieux (Style Cardio)', Component: PhotoIconGynecologie },
  { moduleId: 'mod-5-ped', moduleKey: 'pediatrie', name: 'Pédiatrie', academicYear: '5e année', description: 'Bébé studieux (Style Cardio)', Component: PhotoIconPediatrie },
  { moduleId: 'mod-5-uro-nephro', moduleKey: 'nephro', name: 'Urologie & Néphrologie', academicYear: '5e année', description: 'Reins & vessie studieux (Style Cardio)', Component: PhotoIconNephrologie },
  { moduleId: 'mod-5-otr', moduleKey: 'ortho', name: 'Appareil locomoteur (OTR)', academicYear: '5e année', description: 'Articulation & cartilage (Photo 1)', Component: PhotoIconOrthopedie },
  { moduleId: 'mod-5-endo', moduleKey: 'endo', name: 'Endocrinologie', academicYear: '5e année', description: 'Thyroïde studieuse (Style Cardio)', Component: PhotoIconEndocrinologie },
  { moduleId: 'mod-semio3', moduleKey: 'semio', name: 'Sémiologie Médicale', academicYear: '3e année', description: 'Globe oculaire (Photo 2)', Component: PhotoIconSemio },
  { moduleId: 'mod-pharma3', moduleKey: 'pharma', name: 'Pharmacologie', academicYear: '3e année', description: 'Gélule médicale (Photo 2)', Component: PhotoIconPharma },
];

/**
 * Universal helper that returns the exact cropped photo icon component for any module ID or title.
 */
export function getPhotoIconForModule(moduleIdOrTitle?: string): React.FC<{ size?: number; className?: string }> {
  if (!moduleIdOrTitle) return PhotoIconCardiologie;
  const low = moduleIdOrTitle.toLowerCase();
  if (low.includes('cardio') || low.includes('coeur') || low.includes('vascul') || low.includes('heart')) return PhotoIconCardiologie;
  if (low.includes('pneumo') || low.includes('pulmon') || low.includes('resp') || low.includes('wind') || low.includes('lung')) return PhotoIconPneumologie;
  if (low.includes('infectio') || low.includes('microb') || low.includes('virus') || low.includes('bacteri') || low.includes('germ')) return PhotoIconInfectieux;
  if (low.includes('neuro') || low.includes('cerveau') || low.includes('crane') || low.includes('brain')) return PhotoIconNeurologie;
  if (low.includes('hemato') || low.includes('sang') || low.includes('onco') || low.includes('cellul') || low.includes('blood') || low.includes('rbc')) return PhotoIconHematologie;
  if (low.includes('gastro') || low.includes('estomac') || low.includes('hepato') || low.includes('foie') || low.includes('intestin') || low.includes('liver')) return PhotoIconGastro;
  if (low.includes('psy') || low.includes('mental') || low.includes('mind')) return PhotoIconPsychiatrie;
  if (low.includes('gyn') || low.includes('obst') || low.includes('femme') || low.includes('uterus')) return PhotoIconGynecologie;
  if (low.includes('ped') || low.includes('enfant') || low.includes('bebe') || low.includes('baby')) return PhotoIconPediatrie;
  if (low.includes('nephro') || low.includes('uro') || low.includes('rein') || low.includes('kidney') || low.includes('bladder')) return PhotoIconNephrologie;
  if (low.includes('ortho') || low.includes('otr') || low.includes('os') || low.includes('locomot') || low.includes('trauma') || low.includes('bone')) return PhotoIconOrthopedie;
  if (low.includes('endo') || low.includes('thyro') || low.includes('diabete')) return PhotoIconEndocrinologie;
  if (low.includes('semio') || low.includes('proped') || low.includes('eye')) return PhotoIconSemio;
  if (low.includes('pharma') || low.includes('medicam') || low.includes('drug') || low.includes('pill')) return PhotoIconPharma;
  return PhotoIconCardiologie;
}
