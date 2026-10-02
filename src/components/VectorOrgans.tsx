import React from 'react';
import vectorOrgansBanner from '../assets/images/vector_organs_study_1790933031818.jpg';
import vectorOrgansGroupBanner from '../assets/images/vector_organs_group_1790933302458.jpg';
import heartMascotImg from '../assets/images/heart_study_mascot_1790933045954.jpg';
import brainMascotImg from '../assets/images/brain_study_mascot_1790933058616.jpg';
import lungsMascotImg from '../assets/images/lungs_study_mascot_1790933315216.jpg';
import liverMascotImg from '../assets/images/liver_study_mascot_1790933325382.jpg';

export {
  vectorOrgansBanner,
  vectorOrgansGroupBanner,
  heartMascotImg,
  brainMascotImg,
  lungsMascotImg,
  liverMascotImg,
};

interface OrganProps {
  className?: string;
  size?: number;
  showSpeech?: boolean;
  speechText?: string;
}

/**
 * Minimalist 2D Flat Vector Heart Character
 * Soft pastel coral red, delicate white line-art limbs, spectacles & notebook
 * Corporate Memphis study style
 */
export const VectorHeart: React.FC<OrganProps> = ({
  className = '',
  size = 80,
  showSpeech = false,
  speechText = 'Focus cardio !',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm select-none"
      >
        {/* Shadow */}
        <ellipse cx="80" cy="148" rx="38" ry="7" fill="#E2E8F0" opacity="0.6" />

        {/* White line-art legs */}
        <path
          d="M66 118 V142 C66 145 61 146 58 146"
          stroke="#475569"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M94 118 V142 C94 145 99 146 102 146"
          stroke="#475569"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Cute shoes */}
        <rect x="52" y="142" width="12" height="6" rx="3" fill="#64748B" />
        <rect x="96" y="142" width="12" height="6" rx="3" fill="#64748B" />

        {/* Anatomical Great Vessels (Aorta Arch + Pulmonary Artery) in soft pastel violet & teal */}
        <path
          d="M68 38 C68 24 92 24 92 38"
          stroke="#FDA4AF"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <rect x="74" y="20" width="8" height="12" rx="4" fill="#FB7185" />
        <rect x="85" y="22" width="7" height="10" rx="3.5" fill="#F43F5E" />
        <rect x="63" y="24" width="7" height="10" rx="3.5" fill="#FDA4AF" />

        {/* Main Heart Body - Smooth Pastel Coral */}
        <path
          d="M80 124 C45 106 32 82 32 60 C32 42 46 32 62 32 C71 32 77 37 80 43 C83 37 89 32 98 32 C114 32 128 42 128 60 C128 82 115 106 80 124 Z"
          fill="#FB7185"
        />
        {/* Soft highlight */}
        <path
          d="M44 54 C44 44 52 38 62 38"
          stroke="#FFE4E6"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* White line-art arms */}
        {/* Left arm holding a tiny stethoscope */}
        <path
          d="M38 72 C22 76 22 96 36 94"
          stroke="#475569"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="36" cy="94" r="3" fill="#38BDF8" stroke="#475569" strokeWidth="1.5" />

        {/* Right arm holding a medical study notebook */}
        <path
          d="M122 72 C134 78 132 98 118 96"
          stroke="#475569"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Study Notebook */}
        <rect x="110" y="86" width="16" height="20" rx="3" fill="#FFFFFF" stroke="#475569" strokeWidth="2" />
        <line x1="113" y1="91" x2="123" y2="91" stroke="#FB7185" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="113" y1="96" x2="121" y2="96" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="113" y1="101" x2="119" y2="101" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

        {/* Face: Round Study Spectacles */}
        <circle cx="68" cy="66" r="9" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <circle cx="92" cy="66" r="9" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <line x1="77" y1="66" x2="83" y2="66" stroke="#FFFFFF" strokeWidth="2.5" />
        {/* Glasses side frames */}
        <line x1="59" y1="66" x2="48" y2="64" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="101" y1="66" x2="112" y2="64" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

        {/* Eyes (focused, studious) */}
        <circle cx="68" cy="66" r="3" fill="#1E293B" />
        <circle cx="69.5" cy="64.5" r="1" fill="#FFFFFF" />
        <circle cx="92" cy="66" r="3" fill="#1E293B" />
        <circle cx="93.5" cy="64.5" r="1" fill="#FFFFFF" />

        {/* Cheerful focused blush & mouth */}
        <circle cx="56" cy="74" r="4" fill="#FDA4AF" opacity="0.8" />
        <circle cx="104" cy="74" r="4" fill="#FDA4AF" opacity="0.8" />
        <path d="M76 77 Q80 81 84 77" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {showSpeech && (
        <div className="absolute -top-6 -right-6 bg-white border border-rose-200 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap animate-bounce">
          {speechText}
        </div>
      )}
    </div>
  );
};

/**
 * Minimalist 2D Flat Vector Brain Character
 * Soft pastel pink/lavender, spectacles, studying flashcards
 */
export const VectorBrain: React.FC<OrganProps> = ({
  className = '',
  size = 80,
  showSpeech = false,
  speechText = 'Mémoire & Neuro',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm select-none"
      >
        {/* Shadow */}
        <ellipse cx="80" cy="148" rx="36" ry="6" fill="#E2E8F0" opacity="0.6" />

        {/* White line-art legs */}
        <path d="M68 116 V142 C68 145 63 146 60 146" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M92 116 V142 C92 145 97 146 100 146" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="54" y="142" width="12" height="6" rx="3" fill="#64748B" />
        <rect x="94" y="142" width="12" height="6" rx="3" fill="#64748B" />

        {/* Brain Body with Soft Lobes in Pastel Pink */}
        <path
          d="M48 64 C36 64 30 76 34 88 C30 96 34 110 46 114 C56 118 70 116 78 112 C82 116 96 118 106 114 C118 110 122 96 118 88 C122 76 116 64 104 64 C100 52 88 44 80 44 C72 44 60 52 48 64 Z"
          fill="#F472B6"
        />
        {/* Gyri & Sulci folds lines */}
        <path d="M52 70 C58 76 68 76 72 70" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        <path d="M88 70 C92 76 102 76 108 70" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        <path d="M42 90 C50 96 58 88 64 94" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        <path d="M96 94 C102 88 110 96 118 90" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        <path d="M78 46 V112" stroke="#DB2777" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.4" />

        {/* Arms holding flashcards */}
        <path d="M38 88 C26 92 28 110 42 106" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
        <path d="M114 88 C126 92 124 110 110 106" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

        {/* Flashcard in hands */}
        <rect x="68" y="98" width="24" height="16" rx="3" fill="#FFFFFF" stroke="#475569" strokeWidth="2" />
        <line x1="72" y1="103" x2="88" y2="103" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
        <line x1="72" y1="108" x2="84" y2="108" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

        {/* Glasses */}
        <circle cx="64" cy="80" r="9" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <circle cx="88" cy="80" r="9" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <line x1="73" y1="80" x2="79" y2="80" stroke="#FFFFFF" strokeWidth="2.5" />

        {/* Eyes */}
        <circle cx="64" cy="80" r="3" fill="#1E293B" />
        <circle cx="65.5" cy="78.5" r="1" fill="#FFFFFF" />
        <circle cx="88" cy="80" r="3" fill="#1E293B" />
        <circle cx="89.5" cy="78.5" r="1" fill="#FFFFFF" />

        {/* Smile & Blush */}
        <circle cx="50" cy="86" r="3.5" fill="#FBCFE8" />
        <circle cx="102" cy="86" r="3.5" fill="#FBCFE8" />
        <path d="M72 88 Q76 92 80 88" stroke="#831843" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {showSpeech && (
        <div className="absolute -top-6 -right-6 bg-white border border-pink-200 text-pink-700 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">
          {speechText}
        </div>
      )}
    </div>
  );
};

/**
 * Minimalist 2D Flat Vector Lungs Character
 * Soft pastel sky blue, breathing rhythm, focused expression
 */
export const VectorLungs: React.FC<OrganProps> = ({
  className = '',
  size = 80,
  showSpeech = false,
  speechText = 'Pneumo & O2',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm select-none"
      >
        <ellipse cx="80" cy="148" rx="36" ry="6" fill="#E2E8F0" opacity="0.6" />

        {/* Legs */}
        <path d="M66 122 V142 C66 145 61 146 58 146" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M94 122 V142 C94 145 99 146 102 146" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="52" y="142" width="12" height="6" rx="3" fill="#64748B" />
        <rect x="96" y="142" width="12" height="6" rx="3" fill="#64748B" />

        {/* Trachea & Bronchi */}
        <path d="M80 24 V52" stroke="#CBD5E1" strokeWidth="8" strokeLinecap="round" />
        <path d="M80 50 L68 62" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
        <path d="M80 50 L92 62" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />

        {/* Left Lung Lobe */}
        <path
          d="M72 58 C62 52 46 56 42 70 C36 88 40 114 62 120 C70 122 74 116 74 104 C74 90 74 68 72 58 Z"
          fill="#60A5FA"
        />
        {/* Right Lung Lobe */}
        <path
          d="M88 58 C98 52 114 56 118 70 C124 88 120 114 98 120 C90 122 86 116 86 104 C86 90 86 68 88 58 Z"
          fill="#38BDF8"
        />

        {/* Line art arms giving a focused peace sign */}
        <path d="M38 86 C24 90 26 104 38 102" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
        <path d="M122 86 C136 90 134 104 122 102" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

        {/* Eyes & Glasses spanning both lobes */}
        <circle cx="62" cy="80" r="7" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <circle cx="98" cy="80" r="7" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <line x1="69" y1="80" x2="91" y2="80" stroke="#FFFFFF" strokeWidth="2.5" />

        <circle cx="62" cy="80" r="2.5" fill="#1E293B" />
        <circle cx="98" cy="80" r="2.5" fill="#1E293B" />

        {/* Cute breathing mouth */}
        <ellipse cx="80" cy="94" rx="4" ry="3" fill="#0284C7" />
      </svg>

      {showSpeech && (
        <div className="absolute -top-6 -right-6 bg-white border border-sky-200 text-sky-700 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">
          {speechText}
        </div>
      )}
    </div>
  );
};

/**
 * Minimalist 2D Flat Vector Liver Character
 * Warm pastel amber/terracotta, studious face with clipboard
 */
export const VectorLiver: React.FC<OrganProps> = ({
  className = '',
  size = 80,
  showSpeech = false,
  speechText = 'Hépato & Métabo',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm select-none"
      >
        <ellipse cx="80" cy="148" rx="36" ry="6" fill="#E2E8F0" opacity="0.6" />

        {/* Legs */}
        <path d="M68 120 V142 C68 145 63 146 60 146" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M92 120 V142 C92 145 97 146 100 146" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="54" y="142" width="12" height="6" rx="3" fill="#64748B" />
        <rect x="94" y="142" width="12" height="6" rx="3" fill="#64748B" />

        {/* Anatomical Liver Body - Soft Amber/Warm Terracotta */}
        <path
          d="M44 80 C40 60 62 46 94 48 C118 50 128 66 126 84 C124 104 106 118 84 118 C58 118 48 100 44 80 Z"
          fill="#F59E0B"
        />
        {/* Gallbladder hint in gentle soft lime/green */}
        <ellipse cx="64" cy="106" rx="6" ry="4" fill="#84CC16" opacity="0.9" />

        {/* White line-art arms */}
        <path d="M46 88 C32 94 34 108 48 104" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
        <path d="M120 86 C132 92 130 106 116 102" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

        {/* Face */}
        <circle cx="76" cy="74" r="8" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <circle cx="98" cy="74" r="8" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <line x1="84" y1="74" x2="90" y2="74" stroke="#FFFFFF" strokeWidth="2.5" />

        <circle cx="76" cy="74" r="2.5" fill="#1E293B" />
        <circle cx="98" cy="74" r="2.5" fill="#1E293B" />

        <path d="M82 85 Q87 89 92 85" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {showSpeech && (
        <div className="absolute -top-6 -right-6 bg-white border border-amber-200 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">
          {speechText}
        </div>
      )}
    </div>
  );
};

/**
 * Organ Banner / Card with all 4 Studious Vector Organs
 * Corporate Memphis Medical Study Group
 */
export const VectorOrgansGroup: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center gap-3 sm:gap-6 p-4 rounded-3xl bg-gradient-to-r from-rose-50/70 via-indigo-50/70 to-sky-50/70 border border-slate-100 ${className}`}
    >
      <div className="text-center group transition-transform hover:-translate-y-1">
        <VectorHeart size={64} />
        <span className="block text-[11px] font-bold text-rose-600 mt-1">Cœur</span>
      </div>
      <div className="text-center group transition-transform hover:-translate-y-1">
        <VectorBrain size={64} />
        <span className="block text-[11px] font-bold text-pink-600 mt-1">Cerveau</span>
      </div>
      <div className="text-center group transition-transform hover:-translate-y-1">
        <VectorLungs size={64} />
        <span className="block text-[11px] font-bold text-sky-600 mt-1">Poumons</span>
      </div>
      <div className="text-center group transition-transform hover:-translate-y-1">
        <VectorLiver size={64} />
        <span className="block text-[11px] font-bold text-amber-600 mt-1">Foie</span>
      </div>
    </div>
  );
};
