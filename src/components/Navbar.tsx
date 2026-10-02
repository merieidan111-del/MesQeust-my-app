import React from 'react';
import {
  Flame,
  Award,
  Sparkles,
  Smartphone,
  Monitor,
  BookOpen,
  HardDrive,
  Trophy,
  Layers,
  Home,
  User,
  GraduationCap,
  Code2,
} from 'lucide-react';
import { AcademicYear, UserProfile } from '../types/medical';
import { VectorHeart } from './VectorOrgans';

interface NavbarProps {
  currentTab:
    | 'home'
    | 'directory'
    | 'qcm'
    | 'gamification'
    | 'drive'
    | 'ai'
    | 'architecture';
  setCurrentTab: (
    tab:
      | 'home'
      | 'directory'
      | 'qcm'
      | 'gamification'
      | 'drive'
      | 'ai'
      | 'architecture'
  ) => void;
  selectedYear: AcademicYear;
  setSelectedYear: (year: AcademicYear) => void;
  userProfile: UserProfile;
  isGoogleConnected: boolean;
  googleUserEmail?: string;
  onGoogleSignIn: () => void;
  onGoogleSignOut: () => void;
  onOpenAuthModal: () => void;
  isMobilePreview: boolean;
  setIsMobilePreview: (val: boolean) => void;
  onToggleYearsSidebar?: () => void;
  onOpenApkOrder?: () => void;
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
  onOpenApkOrder,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-3">
        {/* Left: Brand with cute Vector Organ + Years Sidebar Button */}
        <div className="flex items-center gap-3">
          <div
            onClick={() => setCurrentTab('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-100 via-indigo-50 to-purple-100 p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <VectorHeart size={32} />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 bg-clip-text text-transparent">
                MedQuest
              </span>
              <span className="hidden sm:block text-[10px] font-semibold text-slate-600 leading-none">
                Externat Médical
              </span>
            </div>
          </div>

          {/* Quick Year Sidebar Toggle Button */}
          {onToggleYearsSidebar && (
            <button
              onClick={onToggleYearsSidebar}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-indigo-50/80 border border-indigo-100 text-indigo-700 hover:bg-indigo-100 transition-all shadow-sm ml-2 group"
              title="Changer d'année d'études"
            >
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600 group-hover:rotate-12 transition-transform" />
              <span>{selectedYear}</span>
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
            onClick={() => setCurrentTab('drive')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              currentTab === 'drive'
                ? 'bg-white text-amber-600 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <HardDrive className="w-3.5 h-3.5" />
            <span>Google Drive</span>
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
            <span>IA Synthèses</span>
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

          <button
            onClick={() => setCurrentTab('architecture')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              currentTab === 'architecture'
                ? 'bg-white text-teal-600 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code Flutter & Supabase</span>
          </button>
        </nav>

        {/* Right: Gamification Badges, User Profile & Device Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Daily Streak Flame Pill */}
          <div
            onClick={() => setCurrentTab('gamification')}
            className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 transition-colors shadow-sm"
            title={`${userProfile.streakCount} jours de série active`}
          >
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
            <span className="font-extrabold text-xs">{userProfile.streakCount} j</span>
          </div>

          {/* XP Badge Pill */}
          <div
            onClick={() => setCurrentTab('gamification')}
            className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 transition-colors shadow-sm"
          >
            <Award className="w-4 h-4 text-indigo-600" />
            <span className="font-extrabold text-xs">{userProfile.totalXp} XP</span>
          </div>

          {/* Commander APK Button */}
          {onOpenApkOrder && (
            <button
              onClick={onOpenApkOrder}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-gradient-to-r from-teal-500/10 to-indigo-500/10 hover:from-teal-500/20 hover:to-indigo-500/20 text-teal-800 border border-teal-200 shadow-2xs transition-all cursor-pointer"
              title="Commander l'accès APK Android (Enregistrement Supabase)"
            >
              <Smartphone className="w-3.5 h-3.5 text-teal-600" />
              <span className="hidden md:inline">Commander APK</span>
              <span className="md:hidden">APK</span>
            </button>
          )}

          {/* Device Mockup Toggle */}
          <button
            onClick={() => setIsMobilePreview(!isMobilePreview)}
            className={`p-2 rounded-full border text-xs font-medium transition-colors hidden sm:flex items-center gap-1.5 ${
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
            className="flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 hover:shadow-sm transition-all"
            title="Profil étudiant"
          >
            <img
              src={userProfile.avatarUrl}
              alt={userProfile.fullName}
              className="w-7 h-7 rounded-full object-cover border border-indigo-200"
            />
            <span className="text-xs font-bold hidden md:inline text-slate-800">
              @{userProfile.username || 'externe'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Secondary Tab Navigation (Floating soft scrollbar) */}
      <div className="flex xl:hidden overflow-x-auto px-4 py-2.5 gap-2 border-t border-slate-100 bg-slate-50/70 scrollbar-none">
        <button
          onClick={() => setCurrentTab('home')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
            currentTab === 'home' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          Accueil
        </button>
        <button
          onClick={() => setCurrentTab('directory')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
            currentTab === 'directory' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          Modules
        </button>
        <button
          onClick={() => setCurrentTab('qcm')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
            currentTab === 'qcm' ? 'bg-rose-500 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          QCM
        </button>
        <button
          onClick={() => setCurrentTab('drive')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
            currentTab === 'drive' ? 'bg-amber-500 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          Google Drive
        </button>
        <button
          onClick={() => setCurrentTab('ai')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
            currentTab === 'ai' ? 'bg-purple-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          IA Synthèse
        </button>
        <button
          onClick={() => setCurrentTab('gamification')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
            currentTab === 'gamification' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          XP & Rangs
        </button>
        <button
          onClick={() => setCurrentTab('architecture')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
            currentTab === 'architecture' ? 'bg-teal-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          Code Flutter & Supabase
        </button>
      </div>
    </header>
  );
};
