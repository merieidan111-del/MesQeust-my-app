import React, { useState, useEffect, useMemo } from 'react';
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
  Bone,
  HeartHandshake,
  Baby,
  Droplets,
  Pill,
  ShieldAlert,
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

  // Dynamic user progress percentage (strictly 0% for new registrations)
  const dynamicProgressPercent = userProfile.totalXp > 0
    ? Math.min(100, Math.round((userProfile.totalXp / 3000) * 100))
    : 0;

  const dynamicAccuracyPercent = userProfile.questionsSolvedToday > 0
    ? Math.min(100, Math.round((userProfile.questionsSolvedToday / Math.max(1, userProfile.questionsSolvedToday)) * 100))
    : 0;

  const [hoveredDayIdx, setHoveredDayIdx] = useState<number | null>(null);

  // Sync Weekly Progression Graph directly with the user's real progress
  const weeklyProgressData = useMemo(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0: Dim, 1: Lun, 2: Mar, ...
    // Standard European/French medical academic week: Monday to Sunday
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(today);
    monday.setDate(today.getDate() + diffToMonday);

    const dayNames = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    const todayIso = today.toISOString().split('T')[0];
    const dailyMap = userProfile.dailyActivity || {};

    const days = dayNames.map((name, index) => {
      const dayDate = new Date(monday);
      dayDate.setDate(monday.getDate() + index);
      const iso = dayDate.toISOString().split('T')[0];
      const isToday = iso === todayIso;
      const isPast = dayDate.getTime() < today.getTime() && !isToday;
      const isFuture = dayDate.getTime() > today.getTime() && !isToday;

      let xp = dailyMap[iso] || 0;
      // Real-time synchronization fallback if questionsSolvedToday updated before flush
      if (isToday && xp === 0 && userProfile.questionsSolvedToday > 0) {
        xp = userProfile.questionsSolvedToday * 10;
      }

      return {
        label: name,
        dateFormatted: `${dayDate.getDate()} ${dayDate.toLocaleDateString('fr-FR', { month: 'short' })}`,
        iso,
        isToday,
        isPast,
        isFuture,
        xp,
      };
    });

    const totalWeekXp = days.reduce((sum, d) => sum + d.xp, 0);
    const activeDaysCount = days.filter((d) => d.xp > 0).length;
    const todayEntry = days.find((d) => d.isToday) || days[0];
    const maxDayXp = Math.max(...days.map((d) => d.xp), 0);

    // Chart scale: minimum 50 XP range so baseline is clean and curves scale accurately
    const chartMax = Math.max(50, maxDayXp + 20);

    // Compute coordinates for SVG viewBox 0 0 500 130
    // x from 35 to 465
    // y baseline at 105 (0 XP), peak at 25
    const points = days.map((day, idx) => {
      const x = 35 + idx * ((465 - 35) / 6);
      const y = day.xp > 0 ? 105 - (day.xp / chartMax) * 80 : 105;
      return { x, y, day };
    });

    // Smooth Bézier curve path through real points
    let linePath = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cpX = (p0.x + p1.x) / 2;
      linePath += ` C ${cpX} ${p0.y}, ${cpX} ${p1.y}, ${p1.x} ${p1.y}`;
    }

    const areaPath = `${linePath} L ${points[points.length - 1].x} 110 L ${points[0].x} 110 Z`;

    return {
      days,
      points,
      linePath,
      areaPath,
      totalWeekXp,
      activeDaysCount,
      todayEntry,
      maxDayXp,
      chartMax,
    };
  }, [userProfile.dailyActivity, userProfile.questionsSolvedToday, userProfile.totalXp]);

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
                <span>{dynamicProgressPercent}% complété</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-black/20 overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full transition-all duration-500"
                  style={{ width: `${dynamicProgressPercent}%` }}
                />
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

          {/* Right Clean Medical Summary Pill */}
          <div className="hidden sm:flex flex-col items-end justify-center shrink-0 pr-2">
            <div className="p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 shadow-lg text-right space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-200 block">
                Objectif Réussite
              </span>
              <div className="text-xl font-black text-white">24 Cours</div>
              <div className="text-xs text-indigo-100 font-semibold">Programme Officiel National</div>
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

        {/* Card 2: Compte à Rebours d'Examen - Circular Progress Bar */}
        {(() => {
          const totalAllocatedDays = 30; // Total duration allocated for the current Module (30 days)
          const remainingDays = Math.max(0, timeLeft.days);
          const isCountdownUrgent = remainingDays <= 7;
          const countdownRatio = Math.max(0, Math.min(1, remainingDays / totalAllocatedDays));
          const countdownRadius = 28;
          const countdownCircumference = 2 * Math.PI * countdownRadius;
          const countdownDashoffset = countdownCircumference - countdownRatio * countdownCircumference;

          return (
            <div
              className={`p-5 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                isCountdownUrgent
                  ? 'bg-[#FFF5F5] border-rose-200 shadow-[0_4px_20px_-4px_rgba(239,68,68,0.15)] ring-1 ring-rose-300/50'
                  : 'bg-[#F0F7FF] border-sky-100 shadow-[0_4px_20px_-4px_rgba(14,165,233,0.05)]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 ${
                    isCountdownUrgent
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-sky-100 text-sky-800'
                  }`}
                >
                  {isCountdownUrgent ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                      <span>Urgence : ≤ 7 jours !</span>
                    </>
                  ) : (
                    <span>Échéance Module</span>
                  )}
                </span>

                <button
                  onClick={() => setIsEditingCountdown(!isEditingCountdown)}
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full transition-colors flex items-center gap-1 cursor-pointer ${
                    isCountdownUrgent
                      ? 'bg-rose-100 hover:bg-rose-200 text-rose-700'
                      : 'bg-sky-100 hover:bg-sky-200 text-sky-700'
                  }`}
                >
                  <Edit2 className="w-2.5 h-2.5" />
                  <span>Régler</span>
                </button>
              </div>

              {/* Circular Progress & Metrics */}
              <div className="flex items-center gap-3.5 my-2">
                {/* Styled Circular Progress Ring */}
                <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                  <svg className="w-20 h-20 -rotate-90" viewBox="0 0 72 72">
                    {/* Background track circle */}
                    <circle
                      cx="36"
                      cy="36"
                      r={countdownRadius}
                      className={isCountdownUrgent ? 'stroke-rose-200/70' : 'stroke-sky-200/70'}
                      strokeWidth="6"
                      fill="transparent"
                    />
                    {/* Dynamic colored progress circle */}
                    <circle
                      cx="36"
                      cy="36"
                      r={countdownRadius}
                      className={`transition-all duration-700 ${
                        isCountdownUrgent ? 'stroke-red-500' : 'stroke-[#2A75D3]'
                      }`}
                      strokeWidth="6"
                      strokeDasharray={countdownCircumference}
                      strokeDashoffset={countdownDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span
                      className={`text-lg font-black leading-tight ${
                        isCountdownUrgent ? 'text-red-600' : 'text-slate-900'
                      }`}
                    >
                      {remainingDays}
                    </span>
                    <span
                      className={`text-[9px] font-bold tracking-tight leading-none ${
                        isCountdownUrgent ? 'text-red-500' : 'text-slate-500'
                      }`}
                    >
                      jours
                    </span>
                  </div>
                </div>

                {/* Countdown Details & Allocated Duration */}
                <div className="min-w-0 space-y-0.5">
                  <div
                    className={`text-xs font-black truncate ${
                      isCountdownUrgent ? 'text-red-700' : 'text-slate-800'
                    }`}
                    title={userProfile.examTitle}
                  >
                    {userProfile.examTitle || 'Examen Clinique'}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500">
                    Temps actif :{' '}
                    <strong className={isCountdownUrgent ? 'text-red-600' : 'text-slate-700'}>
                      {timeLeft.hours}h {timeLeft.minutes}m
                    </strong>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">
                    Durée allouée :{' '}
                    <strong className="text-slate-700">{totalAllocatedDays} jours</strong>
                  </div>
                </div>
              </div>

              <div
                className={`flex items-center gap-1.5 text-[11px] font-semibold pt-1 border-t ${
                  isCountdownUrgent
                    ? 'border-rose-200/70 text-red-600'
                    : 'border-sky-100 text-sky-700'
                }`}
              >
                <Hourglass
                  className={`w-3 h-3 ${
                    isCountdownUrgent ? 'text-red-500 animate-bounce' : 'text-sky-500 animate-spin'
                  }`}
                />
                <span>
                  {isCountdownUrgent
                    ? 'Dernière semaine de révisions !'
                    : 'Planning de révision en cours'}
                </span>
              </div>
            </div>
          );
        })()}

        {/* Card 3: Précision Clinique (Soft Pastel Mint) */}
        <div className="p-5 rounded-3xl bg-[#F0FDF4] border border-emerald-100 shadow-[0_4px_20px_-4px_rgba(16,185,129,0.05)] flex flex-col justify-between transition-transform hover:-translate-y-0.5">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
              {userProfile.questionsSolvedToday > 0 ? `${userProfile.questionsSolvedToday} QCMs validés` : 'Départ session'}
            </span>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">{dynamicAccuracyPercent}%</span>
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

      {/* 3.5 APK Mobile Application Banner */}
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
              <span className="text-[10px] font-bold text-slate-500">
                Mode Hors-Ligne & Synchronisation
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-black text-slate-900 mt-1">
              Accédez à MedQuest sur Smartphone & Tablette
            </h4>
            <p className="text-xs text-slate-600 font-medium mt-0.5 max-w-xl">
              Révisez vos cours officiels, séries de QCMs et fiches cliniques partout avec suivi en direct de vos scores et de vos points XP.
            </p>
          </div>
        </div>

        {onOpenApkOrder && (
          <button
            onClick={onOpenApkOrder}
            className="px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>Commander l'Accès APK</span>
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
            // Assign custom matching organ/medical icon according to module domain
            const isCardio = module.id === 'mod-cardio';
            const isNeuro = module.id === 'mod-neuro';
            const isPneumo = module.id === 'mod-pneumo';
            const isInfectio = module.id === 'mod-infectio';
            const isLiver = module.id.includes('gastro');
            const isOtr = module.id === 'mod-5-otr';
            const isGyneco = module.id === 'mod-5-gyn';
            const isPediatrie = module.id === 'mod-5-ped';
            const isPsy = module.id === 'mod-5-psy';
            const isEndo = module.id === 'mod-5-endo';
            const isUro = module.id === 'mod-5-uro-nephro';
            const isSemio = module.id === 'mod-semio3';
            const isPharma = module.id === 'mod-pharma3';

            const organAvatar = isCardio ? (
              <VectorHeart size={48} />
            ) : isNeuro ? (
              <VectorBrain size={48} />
            ) : isPneumo ? (
              <VectorLungs size={48} />
            ) : isInfectio ? (
              <ShieldAlert className="w-9 h-9 text-emerald-600" />
            ) : isLiver ? (
              <VectorLiver size={48} />
            ) : isOtr ? (
              <Bone className="w-9 h-9 text-amber-500" />
            ) : isGyneco ? (
              <HeartHandshake className="w-9 h-9 text-rose-500" />
            ) : isPediatrie ? (
              <Baby className="w-9 h-9 text-sky-500" />
            ) : isPsy ? (
              <Brain className="w-9 h-9 text-purple-500" />
            ) : isEndo ? (
              <Activity className="w-9 h-9 text-teal-500" />
            ) : isUro ? (
              <Droplets className="w-9 h-9 text-cyan-500" />
            ) : isSemio ? (
              <BookOpen className="w-9 h-9 text-emerald-500" />
            ) : isPharma ? (
              <Pill className="w-9 h-9 text-teal-500" />
            ) : (
              <HeartPulse className="w-9 h-9 text-indigo-500" />
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
                  {module.id === 'mod-hemato' && (
                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700">
                        🩸 Hématologie (14 cours)
                      </span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-lg bg-purple-50 border border-purple-200 text-purple-700">
                        🎗️ Oncologie (10 cours)
                      </span>
                    </div>
                  )}
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

      {/* 6. Real-Time Weekly Progression Graph (Synced with User Progress) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                Activité & Progression de la Semaine
              </h3>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                Temps Réel
              </span>
            </div>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              {weeklyProgressData.totalWeekXp === 0
                ? "0 XP gagné cette semaine • Répondez à des QCMs pour voir progresser votre courbe d'entraînement !"
                : `${weeklyProgressData.totalWeekXp} XP cumulés cette semaine • ${weeklyProgressData.activeDaysCount} jour(s) actif(s)`}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                weeklyProgressData.todayEntry.xp > 0
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200 shadow-2xs font-extrabold'
                  : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              {weeklyProgressData.todayEntry.xp > 0
                ? `+${weeklyProgressData.todayEntry.xp} XP aujourd'hui`
                : "0 XP aujourd'hui"}
            </span>

            {weeklyProgressData.totalWeekXp === 0 && (
              <button
                type="button"
                onClick={onStartQuickPractice}
                className="px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-2xs transition-all cursor-pointer"
              >
                S'entraîner (+10 XP)
              </button>
            )}
          </div>
        </div>

        {/* SVG Smooth Curved Area Graph Synced to Real XP */}
        <div className="h-40 w-full pt-2 relative">
          <svg viewBox="0 0 500 130" className="w-full h-full overflow-visible select-none">
            <defs>
              <linearGradient id="realChartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#818CF8" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Horizontal Guide Lines */}
            <line x1="30" y1="25" x2="470" y2="25" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="30" y1="65" x2="470" y2="65" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="30" y1="105" x2="470" y2="105" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* Dynamic Area Under Curve */}
            {weeklyProgressData.totalWeekXp > 0 && (
              <path
                d={weeklyProgressData.areaPath}
                fill="url(#realChartGradient)"
                className="transition-all duration-700"
              />
            )}

            {/* Dynamic Progression Curve Line */}
            {weeklyProgressData.totalWeekXp > 0 ? (
              <path
                d={weeklyProgressData.linePath}
                fill="none"
                stroke="#6366F1"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="transition-all duration-700"
              />
            ) : (
              /* Flat baseline for 0 XP with subtle accent */
              <path
                d="M 35 105 L 465 105"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
            )}

            {/* Data Points on Curve */}
            {weeklyProgressData.points.map((pt, idx) => {
              const isHovered = hoveredDayIdx === idx;
              const hasXp = pt.day.xp > 0;
              const isToday = pt.day.isToday;

              return (
                <g
                  key={pt.day.iso}
                  className="cursor-pointer group"
                  onMouseEnter={() => setHoveredDayIdx(idx)}
                  onMouseLeave={() => setHoveredDayIdx(null)}
                >
                  {/* Subtle vertical indicator line on hover or today */}
                  {(isHovered || isToday) && (
                    <line
                      x1={pt.x}
                      y1={25}
                      x2={pt.x}
                      y2={105}
                      stroke={isToday ? '#6366F1' : '#CBD5E1'}
                      strokeWidth={isToday ? '1.5' : '1'}
                      strokeDasharray={isToday ? '2 2' : '1 2'}
                      opacity={isToday ? 0.7 : 0.5}
                    />
                  )}

                  {/* Pulsing ring on Today */}
                  {isToday && (
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={hasXp ? '10' : '7'}
                      fill="#6366F1"
                      opacity="0.25"
                      className="animate-ping"
                    />
                  )}

                  {/* Main Data Dot */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isToday || isHovered ? '5.5' : hasXp ? '4.5' : '3.5'}
                    fill={hasXp ? '#6366F1' : isToday ? '#818CF8' : '#FFFFFF'}
                    stroke={hasXp || isToday ? '#FFFFFF' : '#CBD5E1'}
                    strokeWidth={hasXp || isToday ? '2.5' : '2'}
                    className="transition-all duration-300"
                  />

                  {/* Floating Pill on Today or Hovered Day */}
                  {(isHovered || (isToday && (hasXp || hoveredDayIdx === null))) && (
                    <g className="animate-in fade-in zoom-in-95 duration-200">
                      <rect
                        x={Math.max(10, Math.min(410, pt.x - (isToday ? 45 : 30)))}
                        y={Math.max(2, pt.y - 28)}
                        width={isToday ? 90 : 60}
                        height={20}
                        rx={10}
                        fill={isToday ? '#4F46E5' : '#1E293B'}
                        className="shadow-md"
                      />
                      <text
                        x={Math.max(10, Math.min(410, pt.x - (isToday ? 45 : 30))) + (isToday ? 45 : 30)}
                        y={Math.max(2, pt.y - 28) + 13}
                        fill="#FFFFFF"
                        fontSize="9.5"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {isToday ? `+${pt.day.xp} XP (Auj.)` : `+${pt.day.xp} XP`}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Dynamic Days of the Week Footer */}
        <div className="flex justify-between items-center text-xs px-2 pt-2 border-t border-slate-100 select-none">
          {weeklyProgressData.days.map((day, idx) => (
            <div
              key={day.iso}
              onClick={() => setHoveredDayIdx(hoveredDayIdx === idx ? null : idx)}
              className={`flex flex-col items-center gap-0.5 cursor-pointer transition-all ${
                day.isToday
                  ? 'scale-105'
                  : 'hover:text-indigo-600'
              }`}
            >
              <span
                className={`text-xs ${
                  day.isToday
                    ? 'font-black text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full shadow-2xs'
                    : day.xp > 0
                    ? 'font-bold text-slate-800'
                    : 'font-semibold text-slate-400'
                }`}
              >
                {day.label}
              </span>
              <span
                className={`text-[10px] ${
                  day.isToday
                    ? 'font-bold text-indigo-600'
                    : day.xp > 0
                    ? 'font-bold text-slate-600'
                    : 'text-slate-400'
                }`}
              >
                {day.xp > 0 ? `${day.xp} XP` : day.isToday ? 'Auj.' : '0'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
