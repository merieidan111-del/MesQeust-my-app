import React from 'react';
import { Heart, Calendar, BookOpenCheck, BarChart3, User } from 'lucide-react';

export type BottomNavTab = 'home' | 'explore' | 'practice' | 'progress' | 'profile';

interface FixedBottomNavBarProps {
  activeTab: BottomNavTab;
  onTabChange: (tab: BottomNavTab) => void;
  isMobilePreview?: boolean;
}

export const FixedBottomNavBar: React.FC<FixedBottomNavBarProps> = ({
  activeTab,
  onTabChange,
  isMobilePreview = false,
}) => {
  return (
    <div
      className={`${
        isMobilePreview
          ? 'sticky bottom-3 left-0 right-0'
          : 'fixed bottom-4 left-0 right-0'
      } z-40 px-4 pointer-events-none select-none`}
    >
      {/* Light Marshmallow Pill Dock themed with the App */}
      <nav
        className="max-w-md mx-auto bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 shadow-[0_14px_38px_rgba(15,23,42,0.12),0_2px_10px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center justify-between border border-slate-200/90 pointer-events-auto"
        role="navigation"
        aria-label="Barre de navigation principale"
      >
        {/* 1. Home / Accueil */}
        <button
          type="button"
          onClick={() => onTabChange('home')}
          className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group transition-transform"
          aria-label="Home"
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              activeTab === 'home'
                ? 'bg-rose-50 text-rose-500 scale-105 shadow-2xs'
                : 'text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-100/70'
            }`}
          >
            <Heart className={`w-4.5 h-4.5 ${activeTab === 'home' ? 'fill-current' : ''}`} />
          </div>
          <span
            className={`text-[9.5px] mt-0.5 tracking-tight transition-colors ${
              activeTab === 'home' ? 'text-rose-600 font-extrabold' : 'text-slate-400 font-semibold'
            }`}
          >
            Home
          </span>
        </button>

        {/* 2. Explore / Directory */}
        <button
          type="button"
          onClick={() => onTabChange('explore')}
          className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group transition-transform"
          aria-label="Modules"
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              activeTab === 'explore'
                ? 'bg-amber-50 text-amber-500 scale-105 shadow-2xs'
                : 'text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-100/70'
            }`}
          >
            <Calendar className="w-4.5 h-4.5" />
          </div>
          <span
            className={`text-[9.5px] mt-0.5 tracking-tight transition-colors ${
              activeTab === 'explore' ? 'text-amber-600 font-extrabold' : 'text-slate-400 font-semibold'
            }`}
          >
            Modules
          </span>
        </button>

        {/* 3. Center Raised Action Button (QCM Practice with BookOpenCheck Icon) */}
        <div className="flex-shrink-0 px-2 -my-3 flex flex-col items-center">
          <button
            type="button"
            onClick={() => onTabChange('practice')}
            className={`w-12 h-12 rounded-full bg-gradient-to-tr from-[#F472B6] via-[#FB7185] to-[#FDA4AF] text-white flex items-center justify-center shadow-[0_8px_22px_rgba(244,114,182,0.45),inset_0_1.5px_2px_rgba(255,255,255,0.7)] border-[3px] border-white cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200 ${
              activeTab === 'practice'
                ? 'ring-3 ring-rose-300 scale-105'
                : 'hover:ring-3 hover:ring-rose-200'
            }`}
            title="Lancer une session QCM (+5 XP)"
            aria-label="Lancer QCM"
          >
            <BookOpenCheck className="w-5.5 h-5.5 stroke-[2.4]" />
          </button>
          <span className="text-[9px] font-extrabold text-rose-500 mt-0.5 tracking-wide uppercase">
            QCM
          </span>
        </div>

        {/* 4. Progress / Gamification */}
        <button
          type="button"
          onClick={() => onTabChange('progress')}
          className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group transition-transform"
          aria-label="Progress"
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              activeTab === 'progress'
                ? 'bg-emerald-50 text-emerald-500 scale-105 shadow-2xs'
                : 'text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-100/70'
            }`}
          >
            <BarChart3 className="w-4.5 h-4.5" />
          </div>
          <span
            className={`text-[9.5px] mt-0.5 tracking-tight transition-colors ${
              activeTab === 'progress' ? 'text-emerald-600 font-extrabold' : 'text-slate-400 font-semibold'
            }`}
          >
            Progress
          </span>
        </button>

        {/* 5. Profile */}
        <button
          type="button"
          onClick={() => onTabChange('profile')}
          className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group transition-transform"
          aria-label="Profile"
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              activeTab === 'profile'
                ? 'bg-indigo-50 text-indigo-500 scale-105 shadow-2xs'
                : 'text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-100/70'
            }`}
          >
            <User className="w-4.5 h-4.5" />
          </div>
          <span
            className={`text-[9.5px] mt-0.5 tracking-tight transition-colors ${
              activeTab === 'profile' ? 'text-indigo-600 font-extrabold' : 'text-slate-400 font-semibold'
            }`}
          >
            Profile
          </span>
        </button>
      </nav>
    </div>
  );
};
