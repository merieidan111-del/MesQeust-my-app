import React from 'react';
import {
  Flame,
  Award,
  Sparkles,
  Smartphone,
  Monitor,
  BookOpen,
  HardDrive,
  FolderOpen,
  Trophy,
  Layers,
  Home,
  User,
  GraduationCap,
  Code2,
  LogOut,
} from 'lucide-react';
import { AcademicYear, UserProfile } from '../types/medical';

import { SyndromedLogo, SyndromedWordmark } from './SyndromedLogo';

interface NavbarProps {
  currentTab:
    | 'home'
    | 'directory'
    | 'qcm'
    | 'gamification'
    | 'repository'
    | 'drive'
    | 'ai'
    | 'architecture';
  setCurrentTab: (
    tab:
      | 'home'
      | 'directory'
      | 'qcm'
      | 'gamification'
      | 'repository'
      | 'drive'
      | 'ai'
      | 'architecture'
  ) => void;
  selectedYear: AcademicYear;
  setSelectedYear: (year: AcademicYear) => void;
  userProfile?: UserProfile | null;
  isGoogleConnected: boolean;
  googleUserEmail?: string;
  onGoogleSignIn: () => void;
  onGoogleSignOut: () => void;
  onOpenAuthModal: () => void;
  isMobilePreview: boolean;
  setIsMobilePreview: (val: boolean) => void;
  onToggleYearsSidebar?: () => void;
  onOpenApkOrder?: () => void;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  selectedYear,
  userProfile,
  onOpenAuthModal,
  isMobilePreview,
  setIsMobilePreview,
  onToggleYearsSidebar,
  onLogout,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full max-w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl w-full mx-auto px-2 sm:px-6 h-15 sm:h-18 flex items-center justify-between gap-1 sm:gap-3">
        {/* Left: Brand with cute Vector Mascot + Years Sidebar Button */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 min-w-0">
          <div
            onClick={() => setCurrentTab('home')}
            className="flex items-center gap-1.5 sm:gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white border border-purple-100/90 p-0.5 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <SyndromedLogo size={32} useImage={false} />
            </div>
            <div>
              <SyndromedWordmark size="sm" showSlogan={false} className="sm:hidden" />
              <SyndromedWordmark size="md" showSlogan={true} className="hidden sm:inline-flex" />
            </div>
          </div>

          {/* Quick Year Sidebar Toggle Button */}
          {onToggleYearsSidebar && (
            <button
              onClick={onToggleYearsSidebar}
              className="flex items-center gap-1 px-1.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-black rounded-full bg-indigo-50/80 border border-indigo-100 text-indigo-700 hover:bg-indigo-100 transition-all shadow-2xs ml-0.5 sm:ml-2 group shrink-0"
              title={`Année d'études : ${selectedYear}`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600 group-hover:rotate-12 transition-transform shrink-0" />
              <span className="font-extrabold sm:hidden">{selectedYear.replace('ème Année', 'e').replace(' Année', '').replace('ème', 'e')}</span>
              <span className="font-extrabold hidden sm:inline">{selectedYear.replace('ème Année', 'eme').replace(' Année', '').replace('ème', 'eme')}</span>
            </button>
          )}
        </div>

        {/* Center: Main Navigation Tabs (Soft Pill Segmented Control) */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-50 border border-slate-200/70 rounded-full p-1 shadow-inner">
          <button
            onClick={() => setCurrentTab('home')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              currentTab === 'home'
                ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Accueil</span>
          </button>

          <button
            onClick={() => setCurrentTab('directory')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              currentTab === 'directory'
                ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Modules</span>
          </button>

          <button
            onClick={() => setCurrentTab('qcm')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              currentTab === 'qcm'
                ? 'bg-white text-rose-600 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>QCM</span>
          </button>

          <button
            onClick={() => setCurrentTab('repository')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              currentTab === 'repository'
                ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Library</span>
          </button>

          <button
            onClick={() => setCurrentTab('ai')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              currentTab === 'ai'
                ? 'bg-white text-purple-600 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIY study</span>
          </button>

          <button
            onClick={() => setCurrentTab('gamification')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              currentTab === 'gamification'
                ? 'bg-white text-emerald-600 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>XP & Rangs</span>
          </button>
        </nav>

        {/* Right: Gamification Badges, User Profile & Device Toggle */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Daily Streak Flame Pill */}
          <div
            onClick={() => setCurrentTab('gamification')}
            className="cursor-pointer flex items-center gap-1 px-1.5 sm:px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 transition-colors shadow-2xs shrink-0"
            title={`${userProfile?.streakCount ?? 0} jours de série active`}
          >
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
            <span className="font-black text-[10px] sm:text-xs">{userProfile?.streakCount ?? 0}j</span>
          </div>

          {/* XP Badge Pill */}
          <div
            onClick={() => setCurrentTab('gamification')}
            className="cursor-pointer flex items-center gap-1 px-1.5 sm:px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 transition-colors shadow-2xs shrink-0"
            title={`${userProfile?.totalXp ?? 0} XP cumulés`}
          >
            <Award className="w-3.5 h-3.5 text-indigo-600" />
            <span className="font-black text-[10px] sm:text-xs">{userProfile?.totalXp ?? 0} XP</span>
          </div>

          {/* Device Mockup Toggle */}
          <button
            onClick={() => setIsMobilePreview(!isMobilePreview)}
            className={`p-1.5 sm:p-2 rounded-full border text-xs font-medium transition-colors hidden sm:flex items-center gap-1 ${
              isMobilePreview
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
            title={isMobilePreview ? 'Passer en plein écran' : 'Aperçu maquette mobile'}
          >
            {isMobilePreview ? (
              <>
                <Monitor className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold">Bureau</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold">Mobile</span>
              </>
            )}
          </button>

          {/* Username / Profile Button */}
          <button
            onClick={onOpenAuthModal}
            className="flex items-center gap-1.5 p-0.5 sm:pl-1.5 sm:pr-2.5 sm:py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 hover:shadow-2xs transition-all cursor-pointer shrink-0"
            title="Profil étudiant"
          >
            <img
              src={
                userProfile?.customAvatarDataUrl ||
                userProfile?.avatarUrl ||
                `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(userProfile?.username || 'externe')}`
              }
              alt={userProfile?.fullName || 'Externe'}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-indigo-200"
            />
            <span className="text-xs font-bold hidden lg:inline text-slate-800">
              @{userProfile?.username || 'externe'}
            </span>
          </button>

          {/* Log out Button - compact on mobile */}
          {onLogout && (
            <button
              onClick={onLogout}
              className="flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1 rounded-full bg-rose-50 hover:bg-rose-100 border border-rose-200/80 text-rose-700 text-xs font-black shadow-2xs transition-all cursor-pointer shrink-0"
              title="Log out (fermer la session)"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span className="hidden sm:inline text-[11px] sm:text-xs">Log out</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Secondary Tab Navigation (Contained horizontal scroller) */}
      <div className="flex xl:hidden overflow-x-auto w-full max-w-full px-3 py-2 gap-1.5 border-t border-slate-100 bg-slate-50/70 scrollbar-none min-w-0 shrink-0">
        <button
          onClick={() => setCurrentTab('home')}
          className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
            currentTab === 'home' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          Accueil
        </button>
        <button
          onClick={() => setCurrentTab('directory')}
          className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
            currentTab === 'directory' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          Modules
        </button>
        <button
          onClick={() => setCurrentTab('qcm')}
          className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
            currentTab === 'qcm' ? 'bg-rose-500 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          QCM
        </button>
        <button
          onClick={() => setCurrentTab('repository')}
          className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
            currentTab === 'repository' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          Library
        </button>
        <button
          onClick={() => setCurrentTab('ai')}
          className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
            currentTab === 'ai' ? 'bg-purple-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          DIY study
        </button>
        <button
          onClick={() => setCurrentTab('gamification')}
          className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
            currentTab === 'gamification' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          XP & Rangs
        </button>
      </div>
    </header>
  );
};
