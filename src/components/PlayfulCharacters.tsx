import React from 'react';

export interface CharacterProps {
  size?: number;
  className?: string;
  mood?: 'happy' | 'studious' | 'celebrate' | 'focused';
  showBadge?: boolean;
}

/**
 * The iconic Dr. Heart with Spectacles from Image 12 / 1000115704.jpg
 * Tactile soft clay/marshmallow look, cute round glasses, warm blushing cheeks, little stethoscope.
 */
export const DrHeartWithGlasses: React.FC<CharacterProps> = ({
  size = 120,
  className = '',
  mood = 'studious',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_8px_16px_rgba(251,113,133,0.25)] transition-transform hover:scale-105 duration-300"
      >
        {/* Soft shadow underneath */}
        <ellipse cx="80" cy="150" rx="42" ry="7" fill="#EADCCF" opacity="0.6" />

        {/* Great Vessels on top (Aorta & Pulmonary arch) in pastel pink */}
        <path
          d="M64 36 C64 22 96 22 96 36"
          stroke="#FDA4AF"
          strokeWidth="11"
          strokeLinecap="round"
        />
        {/* Aortic branches (pill shaped) */}
        <rect x="70" y="16" width="8" height="14" rx="4" fill="#FB7185" />
        <rect x="82" y="19" width="8" height="12" rx="4" fill="#F43F5E" />
        <rect x="58" y="22" width="8" height="10" rx="4" fill="#FDA4AF" />

        {/* Soft Marshmallow Clay Heart Body - Coral Pink Gradient */}
        <defs>
          <radialGradient id="heartClay" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#FFF1F2" />
            <stop offset="35%" stopColor="#FECDD3" />
            <stop offset="85%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#E11D48" />
          </radialGradient>

          <linearGradient id="glassesRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="lensShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <path
          d="M80 134 C44 114 28 88 28 62 C28 42 44 30 62 30 C72 30 78 35 80 41 C82 35 88 30 98 30 C116 30 132 42 132 62 C132 88 116 114 80 134 Z"
          fill="url(#heartClay)"
          stroke="#FDA4AF"
          strokeWidth="2.5"
        />

        {/* Soft 3D marshmallow specular highlight */}
        <path
          d="M40 58 C40 44 52 38 62 38"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Blushing cheeks */}
        <ellipse cx="48" cy="80" rx="8" ry="5" fill="#F43F5E" opacity="0.45" />
        <ellipse cx="112" cy="80" rx="8" ry="5" fill="#F43F5E" opacity="0.45" />

        {/* Round Doctor Spectacles (Black tactile frame) */}
        {/* Left Lens Frame */}
        <circle cx="58" cy="68" r="17" fill="url(#lensShine)" stroke="url(#glassesRim)" strokeWidth="4.5" />
        {/* Right Lens Frame */}
        <circle cx="102" cy="68" r="17" fill="url(#lensShine)" stroke="url(#glassesRim)" strokeWidth="4.5" />
        {/* Bridge */}
        <path d="M75 66 C77 64 83 64 85 66" stroke="url(#glassesRim)" strokeWidth="4.5" strokeLinecap="round" />
        {/* Temples */}
        <path d="M41 68 L32 66" stroke="url(#glassesRim)" strokeWidth="4" strokeLinecap="round" />
        <path d="M119 68 L128 66" stroke="url(#glassesRim)" strokeWidth="4" strokeLinecap="round" />

        {/* Friendly eyes behind glasses */}
        {mood === 'happy' || mood === 'celebrate' ? (
          <>
            <path d="M52 69 C55 64 62 64 65 69" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M95 69 C98 64 105 64 108 69" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            <circle cx="59" cy="68" r="4.5" fill="#0F172A" />
            <circle cx="61" cy="66" r="1.5" fill="#FFFFFF" />
            <circle cx="101" cy="68" r="4.5" fill="#0F172A" />
            <circle cx="103" cy="66" r="1.5" fill="#FFFFFF" />
          </>
        )}

        {/* Big confident happy doctor smile */}
        <path
          d="M72 84 C76 92 84 92 88 84"
          stroke="#0F172A"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cute Stethoscope wrapped around */}
        <path
          d="M48 94 C56 114 104 114 112 94"
          stroke="#38BDF8"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Stethoscope Chest Piece (Metallic bell with turquoise ring) */}
        <circle cx="80" cy="116" r="8" fill="#F8FAFC" stroke="#0284C7" strokeWidth="3" />
        <circle cx="80" cy="116" r="3.5" fill="#38BDF8" />

        {/* Little Doctor Thumbs up / Clip hand */}
        <path
          d="M122 92 C128 92 134 98 134 104 C134 110 126 114 122 112"
          stroke="#FB7185"
          strokeWidth="4"
          strokeLinecap="round"
          fill="#FFF1F2"
        />

        {/* Decorative sparkles near the spectacles */}
        <path d="M30 42 L33 48 L39 51 L33 54 L30 60 L27 54 L21 51 L27 48 Z" fill="#FBBF24" opacity="0.9" />
        <circle cx="138" cy="46" r="3" fill="#F43F5E" opacity="0.7" />
        <circle cx="132" cy="38" r="2" fill="#FACC15" opacity="0.8" />
      </svg>
    </div>
  );
};

/**
 * Cute Doctor Brainy Mascot in Lavender Clay
 */
export const CuteBrainy: React.FC<CharacterProps> = ({ size = 90, className = '' }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_6px_14px_rgba(167,139,250,0.22)]"
      >
        <ellipse cx="60" cy="112" rx="30" ry="5" fill="#E5D9F2" opacity="0.6" />

        {/* Brain Lobes in Lavender */}
        <defs>
          <linearGradient id="brainClay" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F3FF" />
            <stop offset="50%" stopColor="#DDD6FE" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>

        <path
          d="M32 60 C24 50 30 34 44 32 C50 24 66 22 74 30 C84 22 98 30 96 44 C104 54 102 70 94 76 C98 88 86 100 74 98 C66 104 52 102 46 96 C34 98 24 86 28 74 C22 68 24 62 32 60 Z"
          fill="url(#brainClay)"
          stroke="#C4B5FD"
          strokeWidth="2.5"
        />

        {/* Gyri lines */}
        <path d="M42 48 C48 56 46 68 54 74" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M78 46 C74 54 78 66 68 74" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />

        {/* Eyes & Smile */}
        <circle cx="48" cy="64" r="3.5" fill="#1E1B4B" />
        <circle cx="50" cy="62" r="1.2" fill="#FFFFFF" />
        <circle cx="72" cy="64" r="3.5" fill="#1E1B4B" />
        <circle cx="74" cy="62" r="1.2" fill="#FFFFFF" />
        <path d="M55 76 C58 80 62 80 65 76" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Mortarboard / Graduation cap */}
        <path d="M60 18 L86 28 L60 38 L34 28 Z" fill="#312E81" />
        <rect x="52" y="32" width="16" height="8" rx="2" fill="#1E1B4B" />
        <path d="M82 32 L86 46" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
        <circle cx="86" cy="48" r="2.5" fill="#F59E0B" />
      </svg>
    </div>
  );
};

/**
 * Cute Stomach/Digestive Mascot in Sage Green
 */
export const CuteStomach: React.FC<CharacterProps> = ({ size = 90, className = '' }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_6px_14px_rgba(52,211,153,0.22)]"
      >
        <ellipse cx="60" cy="112" rx="30" ry="5" fill="#D7ECD9" opacity="0.6" />

        <defs>
          <linearGradient id="stomachClay" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ECFDF5" />
            <stop offset="50%" stopColor="#A7F3D0" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>

        {/* Oesophagus & Stomach C-curve in Sage Green */}
        <path
          d="M48 24 C48 36 50 44 42 54 C30 68 34 94 56 96 C78 98 94 88 92 68 C90 48 76 44 68 44 C62 44 60 34 60 24 Z"
          fill="url(#stomachClay)"
          stroke="#6EE7B7"
          strokeWidth="2.5"
        />

        {/* Eyes & Chef Smile */}
        <circle cx="54" cy="66" r="3.5" fill="#064E3B" />
        <circle cx="56" cy="64" r="1.2" fill="#FFFFFF" />
        <circle cx="74" cy="66" r="3.5" fill="#064E3B" />
        <circle cx="76" cy="64" r="1.2" fill="#FFFFFF" />
        <path d="M59 78 C63 83 67 83 71 78" stroke="#064E3B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Little spoon / stethoscope */}
        <ellipse cx="44" cy="74" rx="4" ry="2.5" fill="#F43F5E" opacity="0.5" />
        <ellipse cx="82" cy="74" rx="4" ry="2.5" fill="#F43F5E" opacity="0.5" />
      </svg>
    </div>
  );
};

/**
 * Decorative Hand-drawn Doodles (Sparkles, Starburst, Floating Pastel Pill)
 */
export const PlayfulDoodle: React.FC<{
  type: 'sparkle' | 'starburst' | 'pulse' | 'pill';
  color?: string;
  className?: string;
  size?: number;
}> = ({ type, color = '#FBBF24', className = '', size = 24 }) => {
  if (type === 'sparkle') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z" fill={color} />
      </svg>
    );
  }

  if (type === 'starburst') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 3 L14 7 L18 5 L17 9 L21 11 L18 14 L20 18 L16 17 L14 21 L12 18 L10 21 L8 17 L4 18 L6 14 L3 11 L7 9 L6 5 L10 7 Z"
          fill={color}
        />
      </svg>
    );
  }

  if (type === 'pulse') {
    return (
      <svg width={size} height={size / 2} viewBox="0 0 40 20" fill="none" className={className}>
        <path
          d="M2 10 H12 L15 2 L19 18 L23 6 L26 13 L29 10 H38"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <div
      className={`rounded-full shadow-soft-clay-sm ${className}`}
      style={{
        width: size,
        height: size / 2,
        backgroundColor: color,
      }}
    />
  );
};
