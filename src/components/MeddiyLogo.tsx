import React from 'react';
import meddiyLogoImg from '../assets/images/meddiy_logo.svg';

export { meddiyLogoImg };

export interface MeddiyLogoProps {
  size?: number;
  className?: string;
  variant?: 'gradient' | 'minimal' | 'white' | 'clay';
  showGlow?: boolean;
}

/**
 * Meddiy Platform Logo Icon
 * Uses the exact stethoscope brand image asset directly via <img> tag
 */
export const MeddiyLogoIcon: React.FC<MeddiyLogoProps> = ({
  size = 40,
  className = '',
  showGlow = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Soft Ambient Glow */}
      {showGlow && (
        <div
          className="absolute inset-0 rounded-2xl bg-indigo-500/20 blur-md -z-10"
          style={{ transform: 'scale(1.15)' }}
        />
      )}

      {/* The authentic stethoscope logo image */}
      <img
        src={meddiyLogoImg}
        alt="Meddiy Logo"
        className="w-full h-full object-contain pointer-events-none drop-shadow-[0_2px_8px_rgba(30,58,138,0.12)] transition-transform duration-200 hover:scale-105"
        loading="eager"
      />
    </div>
  );
};

export interface MeddiyBrandProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  subtitleText?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Meddiy Complete Brand Lockup
 * Renders the stethoscope logo image alongside the "Meddiy" wordmark styled with
 * a beautiful, modern medical typeface (Outfit + Plus Jakarta Sans).
 */
export const MeddiyBrand: React.FC<MeddiyBrandProps> = ({
  size = 'md',
  showSubtitle = true,
  subtitleText = 'Externat & Études Médicales',
  onClick,
  className = '',
}) => {
  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 60,
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10.5px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${
        onClick ? 'cursor-pointer group' : ''
      } ${className}`}
    >
      <MeddiyLogoIcon
        size={iconSizes[size]}
        showGlow={size !== 'sm'}
        className={onClick ? 'group-hover:scale-105 transition-transform duration-200' : ''}
      />

      <div className="flex flex-col justify-center">
        {/* Beautiful Typography for Meddiy */}
        <div className="flex items-center tracking-tight leading-none">
          <span
            className={`font-black ${titleSizes[size]} text-slate-900 tracking-[-0.035em] font-['Outfit',sans-serif]`}
          >
            Med
          </span>
          <span
            className={`font-black ${titleSizes[size]} tracking-[-0.035em] font-['Outfit',sans-serif] bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-500 bg-clip-text text-transparent`}
          >
            diy
          </span>

          {/* Pulse Spark / Dot on the brand */}
          <span className="inline-block w-2 h-2 rounded-full bg-teal-400 ml-0.5 mb-2.5 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-pulse" />
        </div>

        {showSubtitle && (
          <span
            className={`${subSizes[size]} font-semibold text-slate-500 tracking-wide mt-0.5 leading-none font-['Plus_Jakarta_Sans',sans-serif]`}
          >
            {subtitleText}
          </span>
        )}
      </div>
    </div>
  );
};

export default MeddiyBrand;
