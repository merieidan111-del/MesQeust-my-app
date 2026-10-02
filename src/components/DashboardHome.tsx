import React, { useState, useEffect } from 'react';
import {
  Flame,
  Award,
  Hourglass,
  Calendar,
  ChevronRight,
  TrendingUp,
  Stethoscope,
  Brain,
  Wind,
  HeartPulse,
  Activity,
  Edit2,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Layers,
  Sparkles,
  FileText,
  Clock,
  Target,
  Gift,
  Shield,
  Smartphone,
  Database,
} from 'lucide-react';
import { Module, UserProfile, AcademicYear } from '../types/medical';
import {
  VectorHeart,
  VectorBrain,
  VectorLungs,
  VectorLiver,
  VectorOrgansGroup,
  vectorOrgansGroupBanner,
} from './VectorOrgans';

interface DashboardHomeProps {
  userProfile: UserProfile;
  modules: Module[];
  selectedYear: AcademicYear;
  onSelectModule: (module: Module) => void;
  onNavigateToDirectory: () => void;
  onStartQuickPractice: () => void;
  onUpdateExamCountdown: (newDate: string, title: string, moduleName: string) => void;
  onOpenApkOrder?: () => void;
}

export const DashboardHome: React.FC<DashboardHomeProps> = ({
  userProfile,
  modules,
  selectedYear,
  onSelectModule,
  onNavigateToDirectory,
  onStartQuickPractice,
  onUpdateExamCountdown,
  onOpenApkOrder,
}) => {
  // Exam countdown calculation
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [isEditingCountdown, setIsEditingCountdown] = useState(false);
  const [inputDate, setInputDate] = useState(
    userProfile.customExamDate
      ? userProfile.customExamDate.split('T')[0]
      : new Date(Date.now() + 18 * 86400000).toISOString().split('T')[0]
  );
  const [inputTitle, setInputTitle] = useState(userProfile.examTitle || 'Examen Clinique de Cardiologie');
  const [inputModule, setInputModule] = useState(userProfile.examModule || 'Cardiologie');

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(userProfile.customExamDate || inputDate).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [userProfile.customExamDate, inputDate]);

  const handleSaveCountdown = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateExamCountdown(inputDate, inputTitle, inputModule);
    setIsEditingCountdown(false);
  };

  const filteredModules = modules.filter((m) => m.academicYear === selectedYear);
  const cardioModule = modules.find((m) => m.id === 'mod-cardio') || filteredModules[0];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* 1. Header Greeting with Soft Pastel Vibe */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Bonjour, {userProfile.fullName.split(' ')[0]}
            </h1>
          </div>
          <p className="text-sm text-slate-600 font-medium mt-1">
            Que souhaitez-vous réviser aujourd'hui pour votre <span className="font-bold text-indigo-700">{selectedYear}</span> ?
          </p>
        </div>

        {/* Mascot Study Group Mini Preview */}
        <div className="hidden md:flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
          <VectorHeart size={28} />
          <VectorBrain size={28} />
          <VectorLungs size={28} />
          <span className="text-xs font-bold text-slate-600 ml-1">Mascottes d'Études</span>
        </div>
      </div>

      {/* 2. Hero Card: "Pick up where you left off" with Vector Heart Mascot */}
      <div className="relative rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 p-6 sm:p-8 text-white shadow-xl shadow-indigo-500/15 overflow-hidden">
        {/* Soft background glow circles */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Reprendre là où vous vous êtes arrêté(e)</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
              Cardiologie & Vasculaire
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100 font-medium leading-relaxed">
              24 Cours Officiels intégrés avec 720 QCMs & Cas Cliniques de concours. Continuez votre série d'entraînement active.
            </p>

            {/* Progress Bar inside Hero Card */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-xs font-bold text-indigo-100">
                <span>Progression globale</span>
                <span>65% complété</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-black/20 overflow-hidden p-0.5">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full w-[65%]" />
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  if (cardioModule) onSelectModule(cardioModule);
                  else onStartQuickPractice();
                }}
                className="px-5 py-2.5 rounded-full bg-white text-indigo-700 font-extrabold text-xs sm:text-sm hover:bg-indigo-50 shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Continuer l'entraînement</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onStartQuickPractice}
                className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
              >
                Session Rapide (10 QCMs)
              </button>
            </div>
          </div>

          {/* Right Mascot Illustration */}
          <div className="hidden sm:flex flex-col items-center justify-center shrink-0 pr-4">
            <div className="p-3 rounded-3xl bg-white/15 backdrop-blur-md border border-white/30 shadow-lg animate-in zoom-in-95 duration-500">
              <VectorHeart size={110} showSpeech speechText="24 Cours Prêts !" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bento Grid of 4 Soft Pastel Stat Cards (Inspired by Reference Images) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Objectif du Jour (Soft Pastel Peach) */}
        <div className="p-5 rounded-3xl bg-[#FFF5F2] border border-rose-100 shadow-[0_4px_20px_-4px_rgba(244,63,94,0.05)] flex flex-col justify-between transition-transform hover:-translate-y-0.5">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
              Aujourd'hui
            </span>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">{userProfile.questionsSolvedToday}</span>
              <span className="text-sm font-bold text-slate-600">/ {userProfile.dailyGoal} QCMs</span>
            </div>
            <p className="text-xs text-slate-600 font-medium mt-0.5">Objectif quotidien</p>
          </div>

          {/* Progress bar */}
          <div className="mt-3 w-full h-2 rounded-full bg-rose-200/50 overflow-hidden">
            <div
              className="h-full bg-rose-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (userProfile.questionsSolvedToday / userProfile.dailyGoal) * 100)}%` }}
            />
          </div>
        </div>

        {/* Card 2: Compte à Rebours d'Examen (Soft Pastel Sky Blue) */}
        <div className="p-5 rounded-3xl bg-[#F0F7FF] border border-sky-100 shadow-[0_4px_20px_-4px_rgba(14,165,233,0.05)] flex flex-col justify-between transition-transform hover:-translate-y-0.5">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <button
              onClick={() => setIsEditingCountdown(!isEditingCountdown)}
              className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 hover:bg-sky-200 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Edit2 className="w-2.5 h-2.5" />
              <span>Régler</span>
            </button>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">{timeLeft.days}</span>
              <span className="text-sm font-bold text-slate-600">jours</span>
              <span className="text-xs text-slate-600 ml-1">({timeLeft.hours}h {timeLeft.minutes}m)</span>
            </div>
            <p className="text-xs text-slate-600 font-medium mt-0.5 truncate" title={userProfile.examTitle}>
              {userProfile.examTitle || 'Examen Clinique'}
            </p>
          </div>

          <div className="mt-3 flex items-center gap-1 text-[11px] text-sky-700 font-semibold">
            <Hourglass className="w-3 h-3 text-sky-500 animate-spin" />
            <span>Échéance officielle</span>
          </div>
        </div>

        {/* Card 3: Précision Clinique (Soft Pastel Mint) */}
        <div className="p-5 rounded-3xl bg-[#F0FDF4] border border-emerald-100 shadow-[0_4px_20px_-4px_rgba(16,185,129,0.05)] flex flex-col justify-between transition-transform hover:-translate-y-0.5">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
              +4.2% ce mois
            </span>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">84%</span>
              <span className="text-xs font-bold text-emerald-600">de réussite</span>
            </div>
            <p className="text-xs text-slate-600 font-medium mt-0.5">Précision diagnostique</p>
          </div>

          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Conforme aux critères ESC</span>
          </div>
        </div>

        {/* Card 4: Série & Rangs (Soft Pastel Butter Yellow) */}
        <div className="p-5 rounded-3xl bg-[#FFFDF0] border border-amber-100 shadow-[0_4px_20px_-4px_rgba(245,158,11,0.05)] flex flex-col justify-between transition-transform hover:-translate-y-0.5">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
              Niveau {userProfile.level}
            </span>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">{userProfile.streakCount}</span>
              <span className="text-sm font-bold text-slate-600">jours d'affilée</span>
            </div>
            <p className="text-xs text-slate-600 font-medium mt-0.5">{userProfile.title}</p>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-amber-700 font-semibold">
            <span className="flex items-center gap-1">
              <Award className="w-3 h-3 text-amber-500" />
              <span>{userProfile.totalXp} XP cumulés</span>
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-amber-600" />
              <span>{userProfile.streakFreezesCount} gels</span>
            </span>
          </div>
        </div>
      </div>

      {/* Countdown Edit Modal */}
      {isEditingCountdown && (
        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xl animate-in fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span>Paramétrer l'échéance de l'examen</span>
            </h3>
            <button
              onClick={() => setIsEditingCountdown(false)}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Fermer
            </button>
          </div>

          <form onSubmit={handleSaveCountdown} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Date d'examen</label>
              <input
                type="date"
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
                className="w-full text-xs font-semibold px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Intitulé de l'épreuve</label>
              <input
                type="text"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
                placeholder="ex : Examen Clinique de Cardiologie"
                className="w-full text-xs font-semibold px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="flex items-end gap-2">
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer"
              >
                Enregistrer le compte à rebours
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 3.5 APK Order & Supabase Checkout Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-teal-50/90 via-indigo-50/50 to-white border border-teal-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-teal-800 bg-teal-100/70 border border-teal-200 px-2 py-0.5 rounded-full">
                Application Mobile Android
              </span>
              <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                <Database className="w-3 h-3 text-teal-600" />
                Base Supabase Connectée
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-black text-slate-900 mt-1">
              Commandez l'Accès APK MedQuest pour Smartphone & Tablette
            </h4>
            <p className="text-xs text-slate-600 font-medium mt-0.5 max-w-xl">
              Remplissez le formulaire de commande : vos informations de checkout sont enregistrées en direct dans votre base Supabase (table public.apk_orders).
            </p>
          </div>
        </div>

        {onOpenApkOrder && (
          <button
            onClick={onOpenApkOrder}
            className="px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>Commander l'APK (Checkout)</span>
          </button>
        )}
      </div>

      {/* 4. Quick Practice 4-Pack (Inspired by Lingua Quick Practice Pills in Screenshot 1) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-base text-slate-900 tracking-tight flex items-center gap-2">
            <span>Modes d'Entraînement Rapide</span>
          </h3>
          <span className="text-xs font-bold text-indigo-600">Accès Direct</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {/* Tile 1: QCMs */}
          <div
            onClick={onStartQuickPractice}
            className="p-4 rounded-3xl bg-white border border-slate-200/80 hover:border-rose-300 hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center gap-2.5"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <VectorHeart size={36} />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-slate-900 group-hover:text-rose-600 transition-colors">
                QCMs Théoriques
              </h4>
              <p className="text-[11px] text-slate-600 font-medium">Séries séquentielles</p>
            </div>
          </div>

          {/* Tile 2: Cas Cliniques */}
          <div
            onClick={() => {
              if (cardioModule) onSelectModule(cardioModule);
              else onStartQuickPractice();
            }}
            className="p-4 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center gap-2.5"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <VectorLungs size={36} />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-slate-900 group-hover:text-sky-600 transition-colors">
                Cas Cliniques
              </h4>
              <p className="text-[11px] text-slate-600 font-medium">Dossiers progressifs</p>
            </div>
          </div>

          {/* Tile 3: Fiches & Résumés */}
          <div
            onClick={onNavigateToDirectory}
            className="p-4 rounded-3xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center gap-2.5"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <VectorLiver size={36} />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-slate-900 group-hover:text-emerald-600 transition-colors">
                Fiches & Mnémos
              </h4>
              <p className="text-[11px] text-slate-600 font-medium">Perles de révision</p>
            </div>
          </div>

          {/* Tile 4: IA Synthèses */}
          <div
            onClick={onStartQuickPractice}
            className="p-4 rounded-3xl bg-white border border-slate-200/80 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center gap-2.5"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <VectorBrain size={36} />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-slate-900 group-hover:text-purple-600 transition-colors">
                Diagnostic Express
              </h4>
              <p className="text-[11px] text-slate-600 font-medium">Quiz aléatoire</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Modules List with Studious Vector Organ Avatars */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-base text-slate-900 tracking-tight">
              Modules Actifs de {selectedYear}
            </h3>
            <p className="text-xs text-slate-600 font-medium">
              Cliquez sur un module pour explorer ses cours officiels et banques de questions
            </p>
          </div>
          <button
            onClick={onNavigateToDirectory}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
          >
            <span>Voir tout le catalogue</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredModules.map((module) => {
            // Assign vector organ character according to module domain
            const isCardio = module.id === 'mod-cardio';
            const isNeuro = module.id === 'mod-neuro';
            const isPneumo = module.id === 'mod-pneumo';
            const isLiver = module.id.includes('gastro') || module.id.includes('nephro');

            const organAvatar = isCardio ? (
              <VectorHeart size={48} />
            ) : isNeuro ? (
              <VectorBrain size={48} />
            ) : isPneumo ? (
              <VectorLungs size={48} />
            ) : isLiver ? (
              <VectorLiver size={48} />
            ) : (
              <VectorHeart size={48} />
            );

            return (
              <div
                key={module.id}
                onClick={() => onSelectModule(module)}
                className="p-5 rounded-3xl bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1 group-hover:scale-105 transition-transform shadow-xs">
                        {organAvatar}
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {module.academicYear}
                        </span>
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-indigo-600 transition-colors mt-1">
                          {module.title}
                        </h4>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed font-medium">
                    {module.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-slate-700">
                      <Layers className="w-3.5 h-3.5 text-indigo-500" />
                      <strong>{module.coursesCount}</strong> cours
                    </span>
                    <span className="flex items-center gap-1 text-slate-700">
                      <BookOpen className="w-3.5 h-3.5 text-rose-500" />
                      <strong>{module.totalQuestions}</strong> questions
                    </span>
                  </div>

                  <span className="font-extrabold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                    Ouvrir →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Mascottes d'Étude • Organes Vectoriels Minimalistes (Corporate Memphis Study Style) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200">
                Compagnons de Révision
              </span>
            </div>
            <h3 className="font-black text-base sm:text-lg text-slate-900 tracking-tight mt-1">
              Groupe d'Étude des Organes Vectoriels
            </h3>
            <p className="text-xs text-slate-600 font-medium">
              Chaque organe incarne votre concentration studieuse pour les épreuves de concours de l'externat.
            </p>
          </div>

          <span className="text-xs font-bold text-slate-500 bg-slate-50 border border-slate-200/70 px-3 py-1 rounded-full w-fit">
            Style Corporate Memphis Médical
          </span>
        </div>

        {/* 4 Organ Mascot Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Heart Mascot */}
          <div className="p-5 rounded-3xl bg-[#FFF5F2] border border-rose-100 flex flex-col items-center text-center justify-between group hover:shadow-md transition-all">
            <div className="py-2">
              <VectorHeart size={80} showSpeech speechText="Focus Cardio !" />
            </div>
            <div className="mt-2">
              <h4 className="font-black text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                Cœur Rigoureux
              </h4>
              <p className="text-[11px] text-slate-600 font-medium mt-0.5 leading-snug">
                Cardiologie & Vasculaire (24 cours • 720 QCMs)
              </p>
            </div>
          </div>

          {/* Brain Mascot */}
          <div className="p-5 rounded-3xl bg-[#F5F3FF] border border-indigo-100 flex flex-col items-center text-center justify-between group hover:shadow-md transition-all">
            <div className="py-2">
              <VectorBrain size={80} showSpeech speechText="Mémoire Neuro !" />
            </div>
            <div className="mt-2">
              <h4 className="font-black text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">
                Cerveau Savant
              </h4>
              <p className="text-[11px] text-slate-600 font-medium mt-0.5 leading-snug">
                Neurologie, Sémiologie & Raisonnement clinique
              </p>
            </div>
          </div>

          {/* Lungs Mascot */}
          <div className="p-5 rounded-3xl bg-[#F0F7FF] border border-sky-100 flex flex-col items-center text-center justify-between group hover:shadow-md transition-all">
            <div className="py-2">
              <VectorLungs size={80} showSpeech speechText="Pneumo & O2 !" />
            </div>
            <div className="mt-2">
              <h4 className="font-black text-sm text-slate-900 group-hover:text-sky-600 transition-colors">
                Poumons Sereins
              </h4>
              <p className="text-[11px] text-slate-600 font-medium mt-0.5 leading-snug">
                Pneumologie, Gazométrie & Ventilation d'urgence
              </p>
            </div>
          </div>

          {/* Liver Mascot */}
          <div className="p-5 rounded-3xl bg-[#FFFDF0] border border-amber-100 flex flex-col items-center text-center justify-between group hover:shadow-md transition-all">
            <div className="py-2">
              <VectorLiver size={80} showSpeech speechText="Hépato & Métabo !" />
            </div>
            <div className="mt-2">
              <h4 className="font-black text-sm text-slate-900 group-hover:text-amber-700 transition-colors">
                Foie Méthodique
              </h4>
              <p className="text-[11px] text-slate-600 font-medium mt-0.5 leading-snug">
                Hépato-Gastro-Entérologie & Métabolisme
              </p>
            </div>
          </div>
        </div>

        {/* High-fidelity Vector Organs Artwork Banner */}
        <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs">
          <img
            src={vectorOrgansGroupBanner}
            alt="Mascottes d'Étude des Organes Vectoriels"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-56"
          />
        </div>
      </div>

      {/* 7. Weekly Activity Wave Curve Chart (Inspired by Screenshot 1 & 3) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
              Activité & Progression de la Semaine
            </h3>
            <p className="text-xs text-slate-600 font-medium">
              350 XP gagnés • 7 jours d'activité régulière
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
            Cette Semaine
          </span>
        </div>

        {/* SVG Smooth Curved Area Graph (Corporate Memphis style) */}
        <div className="h-36 w-full pt-2">
          <svg viewBox="0 0 500 120" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#818CF8" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Area under curve */}
            <path
              d="M 10 90 Q 70 30, 150 70 T 300 40 T 420 20 L 480 50 L 480 115 L 10 115 Z"
              fill="url(#chartGradient)"
            />
            {/* The Curve Line */}
            <path
              d="M 10 90 Q 70 30, 150 70 T 300 40 T 420 20 L 480 50"
              fill="none"
              stroke="#6366F1"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Data Dots */}
            <circle cx="10" cy="90" r="4" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2.5" />
            <circle cx="90" cy="50" r="4" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2.5" />
            <circle cx="170" cy="72" r="4" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2.5" />
            <circle cx="250" cy="54" r="4" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2.5" />
            <circle cx="330" cy="38" r="4" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2.5" />
            <circle cx="410" cy="22" r="5" fill="#6366F1" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="480" cy="50" r="4" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2.5" />

            {/* Floating label on peak day */}
            <rect x="382" y="0" width="56" height="18" rx="9" fill="#4F46E5" />
            <text x="410" y="12" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">
              +70 XP
            </text>
          </svg>
        </div>

        {/* Days of week footer */}
        <div className="flex justify-between text-xs font-bold text-slate-600 px-2 pt-1 border-t border-slate-100">
          <span>Lun</span>
          <span>Mar</span>
          <span>Mer</span>
          <span>Jeu</span>
          <span>Ven</span>
          <span className="text-indigo-600 font-black">Sam (Auj.)</span>
          <span>Dim</span>
        </div>
      </div>
    </div>
  );
};
