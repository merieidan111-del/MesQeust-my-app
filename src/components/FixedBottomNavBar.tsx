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
          ? 'w-full'
          : 'fixed bottom-0 left-0 right-0 z-40 xl:hidden'
      } select-none w-full max-w-full`}
    >
      {/* Bottom Navigation Bar fitted perfectly to bottom in mobile version */}
      <nav
        className={`w-full max-w-full bg-white/95 backdrop-blur-md border-t border-slate-200/90 flex items-center justify-between pointer-events-auto transition-all ${
          isMobilePreview
            ? 'px-3 py-1.5 shadow-xs'
            : 'px-2 sm:px-4 py-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom,0.6rem))] shadow-[0_-4px_25px_rgba(15,23,42,0.08)]'
        }`}
        role="navigation"
        aria-label="Barre de navigation principale"
      >
        <div className="w-full max-w-xl mx-auto flex items-center justify-between">
          {/* 1. Home / Accueil */}
          <button
            type="button"
            onClick={() => onTabChange('home')}
            className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group transition-transform"
            aria-label="Accueil"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                activeTab === 'home'
                  ? 'bg-purple-100/90 text-[#311465] scale-105 shadow-2xs'
                  : 'text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-100/60'
              }`}
            >
              <Heart className={`w-4.5 h-4.5 ${activeTab === 'home' ? 'fill-current text-[#311465]' : ''}`} />
            </div>
            <span
              className={`text-[10px] mt-0.5 tracking-tight transition-colors ${
                activeTab === 'home'
                  ? 'text-[#311465] font-black'
                  : 'text-slate-400 font-medium'
              }`}
            >
              Accueil
            </span>
          </button>

          {/* 2. Explore / Modules */}
          <button
            type="button"
            onClick={() => onTabChange('explore')}
            className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group transition-transform"
            aria-label="Modules"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                activeTab === 'explore'
                  ? 'bg-purple-100/90 text-[#311465] scale-105 shadow-2xs'
                  : 'text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-100/60'
              }`}
            >
              <Calendar className="w-4.5 h-4.5" />
            </div>
            <span
              className={`text-[10px] mt-0.5 tracking-tight transition-colors ${
                activeTab === 'explore'
                  ? 'text-[#311465] font-black'
                  : 'text-slate-400 font-medium'
              }`}
            >
              Modules
            </span>
          </button>

          {/* 3. Center Action Button (QCM Practice) - Purple ONLY when active */}
          <div className="flex-shrink-0 px-2 -my-2 flex flex-col items-center">
            <button
              type="button"
              onClick={() => onTabChange('practice')}
              className={`w-11 h-11 rounded-full text-white flex items-center justify-center border-2 border-white cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ${
                activeTab === 'practice'
                  ? 'bg-gradient-to-tr from-[#311465] via-[#4A2580] to-[#7E22CE] ring-3 ring-purple-300 shadow-[0_6px_18px_rgba(49,20,101,0.35)] scale-105'
                  : 'bg-slate-700 hover:bg-slate-800 text-slate-100 shadow-sm'
              }`}
              title="Lancer une session QCM (+5 XP)"
              aria-label="Lancer QCM"
            >
              <BookOpenCheck className="w-5 h-5 stroke-[2.3]" />
            </button>
            <span
              className={`text-[9px] mt-0.5 tracking-wide uppercase transition-colors ${
                activeTab === 'practice'
                  ? 'text-[#311465] font-black'
                  : 'text-slate-400 font-bold'
              }`}
            >
              QCM
            </span>
          </div>

          {/* 4. Progress / Classement & Série */}
          <button
            type="button"
            onClick={() => onTabChange('progress')}
            className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group transition-transform"
            aria-label="Progrès"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                activeTab === 'progress'
                  ? 'bg-purple-100/90 text-[#311465] scale-105 shadow-2xs'
                  : 'text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-100/60'
              }`}
            >
              <BarChart3 className="w-4.5 h-4.5" />
            </div>
            <span
              className={`text-[10px] mt-0.5 tracking-tight transition-colors ${
                activeTab === 'progress'
                  ? 'text-[#311465] font-black'
                  : 'text-slate-400 font-medium'
              }`}
            >
              Progrès
            </span>
          </button>

          {/* 5. Profile / Profil */}
          <button
            type="button"
            onClick={() => onTabChange('profile')}
            className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group transition-transform"
            aria-label="Profil"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                activeTab === 'profile'
                  ? 'bg-purple-100/90 text-[#311465] scale-105 shadow-2xs'
                  : 'text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-100/60'
              }`}
            >
              <User className="w-4.5 h-4.5" />
            </div>
            <span
              className={`text-[10px] mt-0.5 tracking-tight transition-colors ${
                activeTab === 'profile'
                  ? 'text-[#311465] font-black'
                  : 'text-slate-400 font-medium'
              }`}
            >
              Profil
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};
