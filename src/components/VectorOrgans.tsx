import React from 'react';
import memphisOrgansBanner from '../assets/images/memphis_organs_1791048198197.jpg';
import vectorOrgansBanner from '../assets/images/vector_organs_study_1790933031818.jpg';
import vectorOrgansGroupBanner from '../assets/images/vector_organs_group_1790933302458.jpg';
import heartMascotImg from '../assets/images/heart_study_mascot_1790933045954.jpg';
import brainMascotImg from '../assets/images/brain_study_mascot_1790933058616.jpg';
import lungsMascotImg from '../assets/images/lungs_study_mascot_1790933315216.jpg';
import liverMascotImg from '../assets/images/liver_study_mascot_1790933325382.jpg';

export {
  memphisOrgansBanner,
  vectorOrgansBanner,
  vectorOrgansGroupBanner,
  heartMascotImg,
  brainMascotImg,
  lungsMascotImg,
  liverMascotImg,
};

export interface OrganProps {
  className?: string;
  size?: number;
  showSpeech?: boolean;
  speechText?: string;
}

/**
 * 1. HEART CHARACTER (VectorHeart)
 * Art Style: Minimal 2D flat vector character based on a human heart.
 * Soft, muted pastel color palette (soft pastel coral/blush #FB7185, #FDA4AF).
 * Simple pure WHITE line-art limbs, hands, and facial expressions showing a "focused study" emotion.
 * Studious white spectacles, white concentrated brows, white open notebook & stethoscope.
 * Isolated on light background, Corporate Memphis style.
 */
export const VectorHeart: React.FC<OrganProps> = ({
  className = '',
  size = 80,
  showSpeech = false,
  speechText = 'Focus cardio !',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none filter drop-shadow-xs"
      >
        {/* Soft ground contact shadow */}
        <ellipse cx="80" cy="148" rx="36" ry="6" fill="#E2E8F0" opacity="0.6" />

        {/* Great Vessels (Aorta & Pulmonary) in muted soft pastel rose */}
        <path
          d="M66 38 C66 22 94 22 94 38"
          stroke="#FDA4AF"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <rect x="73" y="18" width="7" height="12" rx="3.5" fill="#FB7185" />
        <rect x="83" y="21" width="7" height="10" rx="3.5" fill="#F43F5E" />
        <rect x="62" y="24" width="7" height="9" rx="3.5" fill="#FDA4AF" />

        {/* Main Heart Anatomy - Soft Muted Pastel Coral */}
        <path
          d="M80 124 C46 106 32 82 32 60 C32 42 46 32 62 32 C71 32 77 37 80 43 C83 37 89 32 98 32 C114 32 128 42 128 60 C128 82 114 106 80 124 Z"
          fill="#FB7185"
        />

        {/* Soft muted inner contour highlight */}
        <path
          d="M44 54 C44 42 54 38 62 38"
          stroke="#FFE4E6"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Pure WHITE line-art legs */}
        <path
          d="M65 118 V142 C65 145 60 146 56 146"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M95 118 V142 C95 145 100 146 104 146"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Simple white feet */}
        <ellipse cx="54" cy="144" rx="6" ry="3" fill="#FFFFFF" />
        <ellipse cx="106" cy="144" rx="6" ry="3" fill="#FFFFFF" />

        {/* Pure WHITE line-art arms & hands */}
        {/* Left arm holding a stethoscope */}
        <path
          d="M38 72 C22 76 22 96 36 94"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="94" r="3.5" fill="#FFFFFF" />
        <circle cx="36" cy="94" r="1.5" fill="#FB7185" />

        {/* Right arm holding an open revision notebook */}
        <path
          d="M122 72 C134 78 132 98 118 96"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* White open study notebook with pastel notes */}
        <rect x="110" y="86" width="16" height="20" rx="3" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="113" y1="91" x2="123" y2="91" stroke="#FB7185" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="113" y1="96" x2="121" y2="96" stroke="#FDA4AF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="113" y1="101" x2="119" y2="101" stroke="#FDA4AF" strokeWidth="1.5" strokeLinecap="round" />

        {/* FACIAL EXPRESSIONS: Pure WHITE Line-Art showing "Focused Study" emotion */}
        {/* White studious spectacles */}
        <circle cx="68" cy="65" r="9.5" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <circle cx="92" cy="65" r="9.5" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <line x1="77.5" y1="65" x2="82.5" y2="65" stroke="#FFFFFF" strokeWidth="2.5" />
        {/* Glasses side frames */}
        <line x1="58.5" y1="65" x2="48" y2="63" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="101.5" y1="65" x2="112" y2="63" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

        {/* Focused study eyebrows (concentrated, slanted inward) in pure white */}
        <path d="M60 52 L74 54" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M100 52 L86 54" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

        {/* Concentrated focused eyes with glint */}
        <circle cx="68" cy="65" r="3.2" fill="#FFFFFF" />
        <circle cx="68" cy="65" r="1.8" fill="#1E293B" />
        <circle cx="69.2" cy="63.8" r="0.8" fill="#FFFFFF" />

        <circle cx="92" cy="65" r="3.2" fill="#FFFFFF" />
        <circle cx="92" cy="65" r="1.8" fill="#1E293B" />
        <circle cx="93.2" cy="63.8" r="0.8" fill="#FFFFFF" />

        {/* Soft pastel cheeks blush */}
        <circle cx="55" cy="74" r="4.5" fill="#FFE4E6" opacity="0.9" />
        <circle cx="105" cy="74" r="4.5" fill="#FFE4E6" opacity="0.9" />

        {/* Focused study concentrated smile/mouth in pure white */}
        <path d="M76 77 Q80 81 84 77" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
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
 * 2. BRAIN CHARACTER (VectorBrain)
 * Art Style: Minimal 2D flat vector character based on a human brain.
 * Soft, muted pastel color palette (soft pastel lavender-pink #C084FC, #E879F9).
 * Simple pure WHITE line-art limbs, hands, and facial expressions showing a "focused study" emotion.
 * White spectacles, concentrated brows, holding medical revision flashcards.
 * Isolated on light background, Corporate Memphis style.
 */
export const VectorBrain: React.FC<OrganProps> = ({
  className = '',
  size = 80,
  showSpeech = false,
  speechText = 'Mémoire & Neuro',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none filter drop-shadow-xs"
      >
        {/* Soft ground contact shadow */}
        <ellipse cx="80" cy="148" rx="36" ry="6" fill="#E2E8F0" opacity="0.6" />

        {/* Main Brain Body with Soft Lobes in Muted Pastel Lavender/Pink */}
        <path
          d="M48 64 C36 64 30 76 34 88 C30 96 34 110 46 114 C56 118 70 116 78 112 C82 116 96 118 106 114 C118 110 122 96 118 88 C122 76 116 64 104 64 C100 52 88 44 80 44 C72 44 60 52 48 64 Z"
          fill="#C084FC"
        />

        {/* Soft tone-on-tone gyri/sulci folds */}
        <path d="M52 70 C58 76 68 76 72 70" stroke="#F3E8FF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        <path d="M88 70 C92 76 102 76 108 70" stroke="#F3E8FF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        <path d="M42 90 C50 96 58 88 64 94" stroke="#F3E8FF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        <path d="M96 94 C102 88 110 96 118 90" stroke="#F3E8FF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        <path d="M78 46 V112" stroke="#F3E8FF" strokeWidth="2" strokeDasharray="3 3" opacity="0.5" />

        {/* Pure WHITE line-art legs */}
        <path d="M68 116 V142 C68 145 63 146 59 146" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M92 116 V142 C92 145 97 146 101 146" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="57" cy="144" rx="6" ry="3" fill="#FFFFFF" />
        <ellipse cx="103" cy="144" rx="6" ry="3" fill="#FFFFFF" />

        {/* Pure WHITE line-art arms & hands holding medical flashcards */}
        <path d="M38 88 C26 92 28 110 42 106" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M114 88 C126 92 124 110 110 106" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* White medical revision flashcard */}
        <rect x="68" y="98" width="24" height="16" rx="3" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="72" y1="103" x2="88" y2="103" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
        <line x1="72" y1="108" x2="84" y2="108" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" />

        {/* FACIAL EXPRESSIONS: Pure WHITE Line-Art showing "Focused Study" emotion */}
        {/* White spectacles */}
        <circle cx="64" cy="80" r="9.5" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <circle cx="88" cy="80" r="9.5" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <line x1="73.5" y1="80" x2="78.5" y2="80" stroke="#FFFFFF" strokeWidth="2.5" />

        {/* Concentrated focused white eyebrows */}
        <path d="M56 68 L69 70" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M96 68 L83 70" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

        {/* Studious focused eyes */}
        <circle cx="64" cy="80" r="3.2" fill="#FFFFFF" />
        <circle cx="64" cy="80" r="1.8" fill="#1E293B" />
        <circle cx="65.2" cy="78.8" r="0.8" fill="#FFFFFF" />

        <circle cx="88" cy="80" r="3.2" fill="#FFFFFF" />
        <circle cx="88" cy="80" r="1.8" fill="#1E293B" />
        <circle cx="89.2" cy="78.8" r="0.8" fill="#FFFFFF" />

        {/* Soft pastel cheeks blush */}
        <circle cx="50" cy="86" r="4" fill="#FDF4FF" opacity="0.9" />
        <circle cx="102" cy="86" r="4" fill="#FDF4FF" opacity="0.9" />

        {/* Focused study concentrated smile in pure white */}
        <path d="M72 88 Q76 92 80 88" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {showSpeech && (
        <div className="absolute -top-6 -right-6 bg-white border border-purple-200 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">
          {speechText}
        </div>
      )}
    </div>
  );
};

/**
 * 3. LUNGS CHARACTER (VectorLungs)
 * Art Style: Minimal 2D flat vector character based on human lungs.
 * Soft, muted pastel color palette (soft pastel powder sky blue #38BDF8, #7DD3FC).
 * Simple pure WHITE line-art limbs, hands, and facial expressions showing a "focused study" emotion.
 * White spectacles bridging lobes, holding a medical study clipboard & pencil.
 * Isolated on light background, Corporate Memphis style.
 */
export const VectorLungs: React.FC<OrganProps> = ({
  className = '',
  size = 80,
  showSpeech = false,
  speechText = 'Pneumo & O2',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none filter drop-shadow-xs"
      >
        <ellipse cx="80" cy="148" rx="36" ry="6" fill="#E2E8F0" opacity="0.6" />

        {/* Trachea & Bronchi in soft muted pastel slate */}
        <path d="M80 24 V52" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
        <path d="M80 50 L68 62" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
        <path d="M80 50 L92 62" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />

        {/* Left & Right Lung Lobes in Soft Muted Pastel Sky */}
        <path
          d="M72 58 C62 52 46 56 42 70 C36 88 40 114 62 120 C70 122 74 116 74 104 C74 90 74 68 72 58 Z"
          fill="#38BDF8"
        />
        <path
          d="M88 58 C98 52 114 56 118 70 C124 88 120 114 98 120 C90 122 86 116 86 104 C86 90 86 68 88 58 Z"
          fill="#7DD3FC"
        />

        {/* Pure WHITE line-art legs */}
        <path d="M66 122 V142 C66 145 61 146 57 146" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M94 122 V142 C94 145 99 146 103 146" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="55" cy="144" rx="6" ry="3" fill="#FFFFFF" />
        <ellipse cx="105" cy="144" rx="6" ry="3" fill="#FFFFFF" />

        {/* Pure WHITE line-art arms & hands holding study clipboard */}
        <path d="M38 86 C24 90 26 104 38 102" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M122 86 C136 90 134 104 122 102" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* White study clipboard */}
        <rect x="70" y="96" width="20" height="22" rx="3" fill="#FFFFFF" />
        <rect x="76" y="94" width="8" height="4" rx="1.5" fill="#38BDF8" />
        <line x1="74" y1="102" x2="86" y2="102" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="74" y1="107" x2="84" y2="107" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="74" y1="112" x2="82" y2="112" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />

        {/* FACIAL EXPRESSIONS: Pure WHITE Line-Art showing "Focused Study" emotion */}
        {/* White spectacles bridging across both lobes */}
        <circle cx="62" cy="78" r="8" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <circle cx="98" cy="78" r="8" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <line x1="70" y1="78" x2="90" y2="78" stroke="#FFFFFF" strokeWidth="2.5" />

        {/* Focused study eyebrows in pure white */}
        <path d="M54 66 L67 68" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M106 66 L93 68" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

        {/* Studious focused eyes */}
        <circle cx="62" cy="78" r="3" fill="#FFFFFF" />
        <circle cx="62" cy="78" r="1.6" fill="#1E293B" />
        <circle cx="98" cy="78" r="3" fill="#FFFFFF" />
        <circle cx="98" cy="78" r="1.6" fill="#1E293B" />

        {/* Focused study mouth in pure white */}
        <path d="M76 90 Q80 93 84 90" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
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
 * 4. LIVER CHARACTER (VectorLiver)
 * Art Style: Minimal 2D flat vector character based on a human liver.
 * Soft, muted pastel color palette (soft pastel warm amber/apricot #F59E0B, #FBBF24).
 * Simple pure WHITE line-art limbs, hands, and facial expressions showing a "focused study" emotion.
 * White spectacles, concentrated brows, holding a revision magnifying glass/notes.
 * Isolated on light background, Corporate Memphis style.
 */
export const VectorLiver: React.FC<OrganProps> = ({
  className = '',
  size = 80,
  showSpeech = false,
  speechText = 'Hépato & Métabo',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none filter drop-shadow-xs"
      >
        <ellipse cx="80" cy="148" rx="36" ry="6" fill="#E2E8F0" opacity="0.6" />

        {/* Main Liver Body in Muted Soft Pastel Amber */}
        <path
          d="M44 80 C40 60 62 46 94 48 C118 50 128 66 126 84 C124 104 106 118 84 118 C58 118 48 100 44 80 Z"
          fill="#F59E0B"
        />

        {/* Soft pastel gallbladder in gentle sage */}
        <ellipse cx="64" cy="106" rx="6" ry="4" fill="#A3E635" opacity="0.9" />

        {/* Pure WHITE line-art legs */}
        <path d="M68 120 V142 C68 145 63 146 59 146" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M92 120 V142 C92 145 97 146 101 146" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="57" cy="144" rx="6" ry="3" fill="#FFFFFF" />
        <ellipse cx="103" cy="144" rx="6" ry="3" fill="#FFFFFF" />

        {/* Pure WHITE line-art arms & hands */}
        <path d="M46 88 C32 94 34 108 48 104" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M120 86 C132 92 130 106 116 102" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* White study magnifying glass / chart */}
        <circle cx="120" cy="100" r="5" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <line x1="124" y1="104" x2="128" y2="108" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

        {/* FACIAL EXPRESSIONS: Pure WHITE Line-Art showing "Focused Study" emotion */}
        {/* White studious spectacles */}
        <circle cx="76" cy="74" r="8.5" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <circle cx="98" cy="74" r="8.5" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <line x1="84.5" y1="74" x2="89.5" y2="74" stroke="#FFFFFF" strokeWidth="2.5" />

        {/* Focused study eyebrows in pure white */}
        <path d="M69 63 L80 65" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M105 63 L94 65" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

        {/* Concentrated focused eyes */}
        <circle cx="76" cy="74" r="3" fill="#FFFFFF" />
        <circle cx="76" cy="74" r="1.6" fill="#1E293B" />
        <circle cx="98" cy="74" r="3" fill="#FFFFFF" />
        <circle cx="98" cy="74" r="1.6" fill="#1E293B" />

        {/* Soft blush */}
        <circle cx="63" cy="80" r="3.5" fill="#FEF3C7" opacity="0.9" />
        <circle cx="110" cy="80" r="3.5" fill="#FEF3C7" opacity="0.9" />

        {/* Focused study concentrated mouth in pure white */}
        <path d="M82 85 Q87 89 92 85" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
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
