import React from 'react';
import syndromedOfficialLogo from '../assets/images/syndromed_official_logo.jpg';

export { syndromedOfficialLogo };

export interface SyndromedLogoProps {
  className?: string;
  size?: number;
  useImage?: boolean;
}

/**
 * Syndromed Cat Doctor Mascot Vector Emblem
 * Exact reproduction of the purple cat doctor mascot with stethoscope & paws.
 */
export const SyndromedMascotCat: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none shrink-0 ${className}`}
    >
      {/* 3 Dynamic sound/movement arcs top-right */}
      <path d="M 355 125 L 375 105" stroke="#311465" strokeWidth="12" strokeLinecap="round" />
      <path d="M 370 148 L 398 142" stroke="#311465" strokeWidth="12" strokeLinecap="round" />
      <path d="M 360 172 L 385 180" stroke="#311465" strokeWidth="12" strokeLinecap="round" />

      {/* Cat Head Base Silhouette */}
      <path
        d="M 165 210 L 175 95 C 180 90, 225 130, 250 135 C 275 130, 320 90, 325 95 L 335 210 C 352 245, 335 290, 305 310 L 250 365 L 195 310 C 165 290, 148 245, 165 210 Z"
        fill="#311465"
      />

      {/* Inner Ear Highlights */}
      <polygon points="185,108 184,180 220,145" fill="#4A2580" opacity="0.75" />
      <polygon points="315,108 316,180 280,145" fill="#4A2580" opacity="0.75" />

      {/* Whiskers Left */}
      <line x1="125" y1="210" x2="170" y2="215" stroke="#311465" strokeWidth="8" strokeLinecap="round" />
      <line x1="115" y1="235" x2="165" y2="235" stroke="#311465" strokeWidth="8" strokeLinecap="round" />
      <line x1="125" y1="260" x2="170" y2="252" stroke="#311465" strokeWidth="8" strokeLinecap="round" />

      {/* Whiskers Right */}
      <line x1="375" y1="210" x2="330" y2="215" stroke="#311465" strokeWidth="8" strokeLinecap="round" />
      <line x1="385" y1="235" x2="335" y2="235" stroke="#311465" strokeWidth="8" strokeLinecap="round" />
      <line x1="375" y1="260" x2="330" y2="252" stroke="#311465" strokeWidth="8" strokeLinecap="round" />

      {/* Big White Expressive Eyes 0.0 */}
      <ellipse cx="205" cy="225" rx="35" ry="46" fill="#FFFFFF" />
      <ellipse cx="295" cy="225" rx="35" ry="46" fill="#FFFFFF" />

      {/* Black Pupils */}
      <ellipse cx="208" cy="225" rx="16" ry="32" fill="#180733" />
      <ellipse cx="292" cy="225" rx="16" ry="32" fill="#180733" />

      {/* Cute White Nose/Muzzle */}
      <path d="M 245 250 Q 250 248 255 250 L 250 255 Z" fill="#FFFFFF" />

      {/* White Doctor Coat Collar */}
      <polygon points="250,365 210,295 290,295" fill="#FFFFFF" />
      <polygon points="250,365 235,310 265,310" fill="#311465" />

      {/* Lavender Stethoscope Loop & Earpieces */}
      <path
        d="M 185 270 C 180 340, 215 375, 215 345 C 215 325, 205 315, 195 315"
        fill="none"
        stroke="#B794F6"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="195" cy="328" r="12" fill="none" stroke="#B794F6" strokeWidth="6" />

      {/* Stethoscope Chestpiece */}
      <path
        d="M 315 270 C 320 330, 305 350, 290 355"
        fill="none"
        stroke="#B794F6"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="290" cy="355" r="16" fill="#B794F6" />
      <circle cx="290" cy="355" r="8" fill="#FFFFFF" />
      <circle cx="290" cy="355" r="3" fill="#311465" />

      {/* Two Cute Paws Resting Over Text */}
      <circle cx="160" cy="360" r="18" fill="#311465" />
      <circle cx="145" cy="352" r="12" fill="#311465" />
      <circle cx="175" cy="352" r="12" fill="#311465" />

      <circle cx="340" cy="360" r="18" fill="#311465" />
      <circle cx="325" cy="352" r="12" fill="#311465" />
      <circle cx="355" cy="352" r="12" fill="#311465" />
    </svg>
  );
};

/**
 * Main Syndromed Logo Component
 * Renders the official uploaded cat logo (as image or vector badge).
 */
export const SyndromedLogo: React.FC<SyndromedLogoProps> = ({
  className = '',
  size = 40,
  useImage = true,
}) => {
  if (useImage) {
    return (
      <img
        src={syndromedOfficialLogo}
        alt="Syndromed Logo"
        width={size}
        height={size}
        className={`object-contain select-none shrink-0 ${className}`}
      />
    );
  }

  return <SyndromedMascotCat size={size} className={className} />;
};

export interface SyndromedWordmarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  className?: string;
  sloganClassName?: string;
}

/**
 * Syndromed Official Brand Wordmark
 * Bubbly, friendly purple typography with star inside letter 'o',
 * lavender ECG heartbeat pulse line, and "learn • revise • become" tagline.
 */
export const SyndromedWordmark: React.FC<SyndromedWordmarkProps> = ({
  size = 'md',
  showSlogan = true,
  className = '',
  sloganClassName = '',
}) => {
  const textClasses = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  }[size];

  const sloganClasses = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  }[size];

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      {/* Brand Title: Syndromed with star in 'o' */}
      <div className="flex items-center gap-1.5 leading-none">
        <span
          className={`font-black tracking-tight text-[#311465] font-sans drop-shadow-2xs ${textClasses}`}
          style={{ letterSpacing: '-0.02em' }}
        >
          Syndr
          <span className="relative inline-flex items-center justify-center mx-[0.5px]">
            o
            <span
              className="absolute text-[#B794F6] text-[0.45em] pointer-events-none drop-shadow-xs"
              style={{ top: '52%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              ★
            </span>
          </span>
          med
        </span>
      </div>

      {/* Slogan: learn • revise • become */}
      {showSlogan && (
        <div className={`flex items-center gap-1 font-bold text-purple-700/80 leading-none mt-1 ${sloganClasses} ${sloganClassName}`}>
          <span>learn</span>
          <span className="text-[#B794F6] font-black">•</span>
          <span>revise</span>
          <span className="text-[#B794F6] font-black">•</span>
          <span>become</span>
        </div>
      )}
    </div>
  );
};

// Backwards compatibility alias
export const MedQuestLogo = SyndromedLogo;
export type MedQuestLogoProps = SyndromedLogoProps;
