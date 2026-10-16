import React from 'react';

export interface SyndromedLogoProps {
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
}

/**
 * Syndromed Official Brand Stethoscope Emblem
 * Stylized medical stethoscope with geometric precision,
 * deep midnight slate lines and electric mint/cyan accents.
 */
export const SyndromedLogo: React.FC<SyndromedLogoProps> = ({
  className = '',
  size = 36,
  color = '#0F172A',
  accentColor = '#10B981',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none shrink-0 ${className}`}
    >
      {/* Main Outer Stethoscope Loop & Stem */}
      <path
        d="M 555 735 C 590 735, 615 765, 645 780 C 735 780, 800 695, 800 595 C 800 480, 715 315, 625 220 C 570 162, 530 145, 500 145 C 470 145, 430 162, 375 220 C 285 315, 200 480, 200 595 C 200 695, 265 780, 355 780 C 420 780, 465 745, 485 705 C 495 680, 500 660, 500 635"
        stroke={color}
        strokeWidth="48"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Binaural U-Tube */}
      <path
        d="M 425 412 L 405 412 C 365 412, 355 450, 355 510 C 355 588, 420 635, 500 635 C 580 635, 645 588, 645 510 C 645 450, 635 412, 595 412 L 575 412"
        stroke={color}
        strokeWidth="48"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Eartip Connector Cuffs */}
      <rect x="399" y="396" width="10" height="32" rx="4" fill={accentColor} />
      <rect x="591" y="396" width="10" height="32" rx="4" fill={accentColor} />

      {/* Left Earpiece */}
      <circle cx="432" cy="412" r="28" fill={accentColor} />

      {/* Right Earpiece */}
      <circle cx="568" cy="412" r="28" fill={accentColor} />

      {/* Chestpiece Diaphragm */}
      <circle cx="555" cy="735" r="34" fill={accentColor} />
    </svg>
  );
};

export interface SyndromedWordmarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  className?: string;
  sloganClassName?: string;
}

/**
 * Syndromed Official Brand Wordmark
 * "SYNDRO": Aesthetic, clean, geometric sans-serif in uppercase (solid, structured, dark slate style).
 * "med": Playful, friendly, rounded, and slightly slanted/italicized in lowercase (Electric Mint/Cyan).
 */
export const SyndromedWordmark: React.FC<SyndromedWordmarkProps> = ({
  size = 'md',
  showSlogan = false,
  className = '',
  sloganClassName = '',
}) => {
  const textClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  }[size];

  const sloganClasses = {
    sm: 'text-[10px]',
    md: 'text-[11px]',
    lg: 'text-xs sm:text-sm',
    xl: 'text-sm sm:text-base',
  }[size];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className={`flex items-baseline leading-none select-none ${textClasses}`}>
        <span className="font-black tracking-wider text-[#0F172A] uppercase">
          SYNDRO
        </span>
        <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#059669] to-[#06B6D4] font-sans tracking-tight ml-0.5 inline-block transform -skew-x-6 origin-bottom">
          med
        </span>
      </div>
      {showSlogan && (
        <span
          className={`text-slate-500 font-semibold tracking-normal mt-0.5 italic ${sloganClasses} ${sloganClassName}`}
        >
          The only syndrome you’ll love having
        </span>
      )}
    </div>
  );
};

// Backwards compatibility alias
export const MedQuestLogo = SyndromedLogo;
