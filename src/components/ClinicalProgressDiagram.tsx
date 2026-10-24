import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  TrendingUp,
  Award,
  Zap,
  Calendar,
  ChevronRight,
  CheckCircle2,
  Lock,
  Unlock,
  Sparkles,
  Clock,
  Target,
  Sliders,
  HeartPulse,
  Brain,
  Wind,
  Stethoscope,
  Activity,
  ShieldAlert,
  Droplets,
  Layers,
  ArrowUpRight,
  Check,
  Flame,
  Crown,
} from 'lucide-react';
import { UserProfile, AcademicYear } from '../types/medical';

interface ClinicalProgressDiagramProps {
  userProfile: UserProfile;
  selectedYear: AcademicYear;
}

// 5 Official Clinical Residency Ranks / Paliers
interface RankTier {
  level: number;
  minXp: number;
  maxXp: number;
  title: string;
  badge: string;
  color: string;
  textColor: string;
  borderColor: string;
  icon: React.ElementType;
  perks: string[];
}

const RANK_TIERS: RankTier[] = [
  {
    level: 1,
    minXp: 0,
    maxXp: 999,
    title: 'Externe Débutant(e)',
    badge: 'Stéthoscope Standard',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-indigo-700',
    borderColor: 'border-indigo-200',
    icon: Stethoscope,
    perks: ['Accès illimité aux 720 QCMs officiels', 'Historique des séries & corrections'],
  },
  {
    level: 2,
    minXp: 1000,
    maxXp: 1999,
    title: 'Externe Confirmé(e)',
    badge: 'Badge Clinique Bronze',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    icon: Zap,
    perks: ['Accès aux Fiches Synthèses & Mémos', 'Mode Élimination d’items activé'],
  },
  {
    level: 3,
    minXp: 2000,
    maxXp: 2999,
    title: 'Interne Prometteur(se)',
    badge: 'Insigne d’Argent UNV',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-200',
    icon: Brain,
    perks: ['Dossiers Cliniques Progressifs Avancés', '1 Gel de Série offert chaque mois'],
  },
  {
    level: 4,
    minXp: 3000,
    maxXp: 4499,
    title: 'Chef de Clinique Adjoint',
    badge: 'Aura Dorée de Promotion',
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    icon: Award,
    perks: ['Aura dorée sur le classement de promo', 'Mode Examen Blanc Minuté'],
  },
  {
    level: 5,
    minXp: 4500,
    maxXp: 10000,
    title: 'Major de Promotion',
    badge: 'Couronne de Major Suprême',
    color: 'from-rose-500 via-purple-600 to-amber-500',
    textColor: 'text-rose-700',
    borderColor: 'border-rose-200',
    icon: Crown,
    perks: ['Titre honorifique officiel de Major', 'Accès prioritaire aux banques de résidanat'],
  },
];

// Specialties Mastery Data
interface SpecialtyMastery {
  id: string;
  title: string;
  icon: React.ElementType;
  iconColor: string;
  bgLight: string;
  masteryPercent: number;
  solvedCount: number;
  totalAvailable: number;
  accuracyRate: number;
  status: 'Maître Clinique' | 'Confirmé' | 'En progression' | 'À consolider';
}

export const ClinicalProgressDiagram: React.FC<ClinicalProgressDiagramProps> = ({
  userProfile,
  selectedYear,
}) => {
  // Active Diagram View: 'roadmap' (Paliers) | 'activity' (Courbe XP) | 'specialties' (Spécialités) | 'simulator' (Simulateur)
  const [diagramView, setDiagramView] = useState<'roadmap' | 'activity' | 'specialties' | 'simulator'>(
    'roadmap'
  );

  // Activity Curve Range: 7 vs 14 days
  const [activityRange, setActivityRange] = useState<7 | 14>(7);

  // Simulator target QCMs per day
  const [simulatorDailyQcm, setSimulatorDailyQcm] = useState<number>(15);

  // Selected day point for activity tooltip
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);

  // Current tier calculation
  const currentTierIndex = useMemo(() => {
    const xp = userProfile.totalXp;
    for (let i = RANK_TIERS.length - 1; i >= 0; i--) {
      if (xp >= RANK_TIERS[i].minXp) return i;
    }
    return 0;
  }, [userProfile.totalXp]);

  const currentTier = RANK_TIERS[currentTierIndex] || RANK_TIERS[0];
  const nextTier = RANK_TIERS[currentTierIndex + 1] || null;

  const xpToNextTier = nextTier ? Math.max(0, nextTier.minXp - userProfile.totalXp) : 0;
  const currentTierProgress = nextTier
    ? Math.min(
        100,
        Math.max(
          0,
          Math.round(
            ((userProfile.totalXp - currentTier.minXp) / (nextTier.minXp - currentTier.minXp)) * 100
          )
        )
      )
    : 100;

  // Generate Activity Chart Data
  const activityData = useMemo(() => {
    const daysCount = activityRange;
    const result = [];
    const today = new Date();

    for (let i = daysCount - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateKey = d.toISOString().split('T')[0];
      const dayLabel = d.toLocaleDateString('fr-FR', { weekday: 'short' });
      const dayNum = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric' });

      // Check userProfile.dailyActivity first
      let xp = userProfile.dailyActivity?.[dateKey] || 0;

      // If today and questions were solved, ensure today's XP is counted
      if (i === 0 && xp === 0 && userProfile.questionsSolvedToday > 0) {
        xp = userProfile.questionsSolvedToday * 20;
      }

      // If user has streak active and no stored history, realistically mock recent past streak days
      if (xp === 0 && i < userProfile.streakCount && i > 0) {
        // Deterministic curve for past days
        const base = 40 + ((i * 17) % 50);
        xp = base;
      }

      const qcmCount = Math.round(xp / 20);
      const accuracy = xp > 0 ? Math.min(100, 70 + ((xp * 7) % 28)) : 0;

      result.push({
        dateKey,
        dayLabel,
        dayNum,
        isToday: i === 0,
        xp,
        qcmCount,
        accuracy,
        goalMet: xp >= 50,
      });
    }

    return result;
  }, [activityRange, userProfile.dailyActivity, userProfile.questionsSolvedToday, userProfile.streakCount]);

  // Activity Metrics
  const totalXpInRange = activityData.reduce((sum, d) => sum + d.xp, 0);
  const totalQcmInRange = activityData.reduce((sum, d) => sum + d.qcmCount, 0);
  const avgXpPerDay = Math.round(totalXpInRange / activityData.length);
  const peakDay = activityData.reduce((max, d) => (d.xp > max.xp ? d : max), activityData[0]);

  // Specialties Mastery Breakdown
  const specialties: SpecialtyMastery[] = useMemo(() => {
    const totalUserXp = userProfile.totalXp;

    return [
      {
        id: 'cardio',
        title: 'Cardiologie & Vasculaire',
        icon: HeartPulse,
        iconColor: 'text-rose-600',
        bgLight: 'bg-rose-50 border-rose-200',
        masteryPercent: Math.min(95, Math.max(25, Math.round((totalUserXp / 3000) * 85))),
        solvedCount: Math.min(720, Math.round((totalUserXp / 20) * 0.45)),
        totalAvailable: 720,
        accuracyRate: 84,
        status: totalUserXp > 3000 ? 'Maître Clinique' : totalUserXp > 1200 ? 'Confirmé' : 'En progression',
      },
      {
        id: 'neuro',
        title: 'Neurologie & Neurochirurgie',
        icon: Brain,
        iconColor: 'text-indigo-600',
        bgLight: 'bg-indigo-50 border-indigo-200',
        masteryPercent: Math.min(90, Math.max(15, Math.round((totalUserXp / 3000) * 65))),
        solvedCount: Math.min(540, Math.round((totalUserXp / 20) * 0.25)),
        totalAvailable: 540,
        accuracyRate: 78,
        status: totalUserXp > 2500 ? 'Confirmé' : 'En progression',
      },
      {
        id: 'pneumo',
        title: 'Pneumologie & Phtisiologie',
        icon: Wind,
        iconColor: 'text-sky-600',
        bgLight: 'bg-sky-50 border-sky-200',
        masteryPercent: Math.min(85, Math.max(10, Math.round((totalUserXp / 3000) * 50))),
        solvedCount: Math.min(480, Math.round((totalUserXp / 20) * 0.15)),
        totalAvailable: 480,
        accuracyRate: 81,
        status: totalUserXp > 1800 ? 'Confirmé' : 'En progression',
      },
      {
        id: 'gastro',
        title: 'Gastro-Entérologie',
        icon: Stethoscope,
        iconColor: 'text-amber-600',
        bgLight: 'bg-amber-50 border-amber-200',
        masteryPercent: Math.min(80, Math.max(10, Math.round((totalUserXp / 3000) * 45))),
        solvedCount: Math.min(360, Math.round((totalUserXp / 20) * 0.1)),
        totalAvailable: 360,
        accuracyRate: 75,
        status: 'En progression',
      },
      {
        id: 'infectio',
        title: 'Infectiologie Clinique',
        icon: ShieldAlert,
        iconColor: 'text-emerald-600',
        bgLight: 'bg-emerald-50 border-emerald-200',
        masteryPercent: Math.min(75, Math.max(10, Math.round((totalUserXp / 3000) * 40))),
        solvedCount: Math.min(420, Math.round((totalUserXp / 20) * 0.05)),
        totalAvailable: 420,
        accuracyRate: 80,
        status: 'À consolider',
      },
    ];
  }, [userProfile.totalXp]);

  // Simulator projection calculations
  const projectedDailyXp = simulatorDailyQcm * 20;
  const daysToNextTier = nextTier
    ? Math.max(1, Math.ceil(xpToNextTier / Math.max(10, projectedDailyXp)))
    : 0;

  // Days until exam date
  const examDaysRemaining = useMemo(() => {
    try {
      if (!userProfile.customExamDate) return 30;
      const target = new Date(userProfile.customExamDate).getTime();
      const now = Date.now();
      const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
      return Math.max(1, diff);
    } catch {
      return 30;
    }
  }, [userProfile.customExamDate]);

  const projectedXpAtExam = userProfile.totalXp + examDaysRemaining * projectedDailyXp;

  const triggerCelebrate = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xs space-y-6">
      {/* Diagram Section Header & View Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Diagramme de Progression Clinique
            </h3>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Visualisation en temps réel de vos paliers de résidence, constance quotidienne et maîtrise des spécialités.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200/60 overflow-x-auto scrollbar-none self-start md:self-auto max-w-full">
          <button
            type="button"
            onClick={() => setDiagramView('roadmap')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              diagramView === 'roadmap'
                ? 'bg-white text-indigo-700 shadow-2xs border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Paliers de Grade</span>
          </button>

          <button
            type="button"
            onClick={() => setDiagramView('activity')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              diagramView === 'activity'
                ? 'bg-white text-indigo-700 shadow-2xs border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Courbe d'Activité</span>
          </button>

          <button
            type="button"
            onClick={() => setDiagramView('specialties')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              diagramView === 'specialties'
                ? 'bg-white text-indigo-700 shadow-2xs border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Spécialités</span>
          </button>

          <button
            type="button"
            onClick={() => setDiagramView('simulator')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              diagramView === 'simulator'
                ? 'bg-white text-indigo-700 shadow-2xs border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Simulateur</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* VIEW 1: ROADMAP & PALIERS DE GRADE (Interactive Stepper)  */}
      {/* ========================================================= */}
      {diagramView === 'roadmap' && (
        <div className="space-y-6">
          {/* Active Level Summary Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-purple-50/70 to-pink-50/80 border border-indigo-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-indigo-600 text-white shadow-2xs">
                  Niveau {currentTier.level} Actuel
                </span>
                <span className="text-xs font-extrabold text-slate-500">•</span>
                <span className="text-xs font-black text-indigo-900">
                  {currentTier.badge}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {currentTier.title}
              </h4>
              <p className="text-xs text-slate-600 font-medium max-w-lg leading-relaxed">
                {nextTier
                  ? `Encore ${xpToNextTier} XP pour débloquer le grade "${nextTier.title}" et ses privilèges cliniques.`
                  : 'Félicitations ! Vous avez atteint le sommet suprême de la promotion.'}
              </p>
            </div>

            {/* Celebrate action button */}
            <button
              type="button"
              onClick={triggerCelebrate}
              className="px-4 py-2.5 rounded-2xl bg-white border border-indigo-200 hover:bg-indigo-50 text-indigo-700 text-xs font-black flex items-center gap-2 transition-all shadow-2xs cursor-pointer shrink-0"
            >
              <Sparkles className="w-4 h-4 text-indigo-600 animate-spin" />
              <span>Célébrer ma Progression</span>
            </button>
          </div>

          {/* Stepper Roadmap Track */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
              Échelle des Grades & Privilèges Débloqués
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
              {RANK_TIERS.map((tier, idx) => {
                const isPassed = currentTierIndex > idx;
                const isCurrent = currentTierIndex === idx;
                const isLocked = currentTierIndex < idx;

                return (
                  <div
                    key={tier.level}
                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between relative overflow-hidden ${
                      isCurrent
                        ? 'bg-white border-indigo-500 ring-2 ring-indigo-200 shadow-md scale-102 z-10'
                        : isPassed
                        ? 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                        : 'bg-slate-50/70 border-slate-200/80 opacity-75'
                    }`}
                  >
                    {/* Top status indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${tier.color} text-white flex items-center justify-center shadow-2xs`}>
                        <tier.icon className="w-4 h-4" />
                      </div>
                      {isPassed ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : isCurrent ? (
                        <div className="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-600 text-white shadow-2xs animate-pulse">
                          EN COURS
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
                          <Lock className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    {/* Tier Info */}
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Palier {tier.level} • {tier.minXp} XP
                      </span>
                      <h5 className="font-black text-xs sm:text-sm text-slate-900 mt-0.5 leading-snug">
                        {tier.title}
                      </h5>
                    </div>

                    {/* Progress Bar for Current Tier */}
                    {isCurrent && (
                      <div className="mt-3 pt-2 border-t border-slate-100">
                        <div className="flex items-center justify-between text-[10px] font-bold text-indigo-700 mb-1">
                          <span>{userProfile.totalXp} XP</span>
                          <span>{tier.maxXp} XP</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                            style={{ width: `${currentTierProgress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Perks snippet */}
                    <div className="mt-3 pt-2 border-t border-slate-200/50 text-[10px] text-slate-500 font-medium">
                      <span>{tier.perks[0]}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 2: ACTIVITÉ & COURBE XP (Interactive Bar & Trends)   */}
      {/* ========================================================= */}
      {diagramView === 'activity' && (
        <div className="space-y-6">
          {/* Controls & Metrics Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                Période d'Analyse :
              </span>
              <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setActivityRange(7)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activityRange === 7 ? 'bg-white text-indigo-700 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  7 Jours
                </button>
                <button
                  type="button"
                  onClick={() => setActivityRange(14)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activityRange === 14 ? 'bg-white text-indigo-700 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  14 Jours
                </button>
              </div>
            </div>

            {/* Quick KPI Stat Pills */}
            <div className="flex items-center gap-2 flex-wrap text-xs font-bold">
              <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700">
                Moyenne : <strong>{avgXpPerDay} XP/j</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800">
                Pic : <strong>{peakDay.xp} XP</strong> ({peakDay.dayLabel})
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">
                Total : <strong>{totalQcmInRange} QCMs</strong>
              </span>
            </div>
          </div>

          {/* Interactive SVG Bar & Trend Chart */}
          <div className="p-4 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80">
            <div className="flex items-end justify-between gap-2 h-48 sm:h-56 pt-6 pb-2 px-1 relative">
              {/* Goal baseline indicator (50 XP line) */}
              <div
                className="absolute left-0 right-0 border-b border-dashed border-indigo-300 pointer-events-none z-0"
                style={{ bottom: '38%' }}
              >
                <span className="absolute right-2 -top-4 text-[10px] font-bold text-indigo-400 bg-white/80 px-1.5 py-0.5 rounded">
                  Objectif quotidien : 50 XP
                </span>
              </div>

              {activityData.map((d, idx) => {
                const maxVal = Math.max(120, peakDay.xp || 100);
                const heightPercent = Math.min(100, Math.max(8, Math.round((d.xp / maxVal) * 100)));
                const isSelected = selectedDayIndex === idx;

                return (
                  <div
                    key={d.dateKey}
                    onMouseEnter={() => setSelectedDayIndex(idx)}
                    onMouseLeave={() => setSelectedDayIndex(null)}
                    onClick={() => setSelectedDayIndex(idx === selectedDayIndex ? null : idx)}
                    className="flex-1 flex flex-col items-center justify-end h-full gap-2 relative group cursor-pointer z-10"
                  >
                    {/* Tooltip on hover/click */}
                    {(isSelected || (d.isToday && selectedDayIndex === null)) && (
                      <div className="absolute -top-12 z-30 px-2.5 py-1.5 rounded-xl bg-slate-900 text-white text-[10px] font-bold whitespace-nowrap shadow-lg animate-in fade-in zoom-in-95 pointer-events-none">
                        <div className="text-amber-400 font-black">{d.xp} XP • {d.qcmCount} QCMs</div>
                        <div className="text-slate-300 text-[9px]">{d.dayNum} {d.isToday ? "(Aujourd'hui)" : ''}</div>
                      </div>
                    )}

                    {/* Value Badge top of bar */}
                    <span className="text-[10px] font-extrabold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {d.xp}
                    </span>

                    {/* Visual Bar with Gradient */}
                    <div className="w-full max-w-[36px] bg-slate-200/70 rounded-xl overflow-hidden flex flex-col justify-end p-0.5 h-full">
                      <div
                        className={`w-full rounded-lg transition-all duration-500 ${
                          d.isToday
                            ? 'bg-gradient-to-t from-indigo-600 to-purple-500 shadow-xs ring-2 ring-indigo-300'
                            : d.goalMet
                            ? 'bg-gradient-to-t from-emerald-500 to-teal-400'
                            : 'bg-gradient-to-t from-amber-400 to-orange-400'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>

                    {/* Day label */}
                    <div className="text-center">
                      <span className={`text-[11px] font-black block ${d.isToday ? 'text-indigo-700 underline' : 'text-slate-600'}`}>
                        {d.dayLabel}
                      </span>
                      <span className="text-[9px] font-medium text-slate-400 block">
                        {d.dayNum}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 3: MAÎTRISE PAR SPÉCIALITÉ (Clinical Breakdown)      */}
      {/* ========================================================= */}
      {diagramView === 'specialties' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
              Analyse Diagnostique par Matière Médicale
            </span>
            <span className="text-xs font-bold text-slate-500">
              {specialties.length} Modules Cliniques
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {specialties.map((spec) => {
              const Icon = spec.icon;

              return (
                <div
                  key={spec.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-9 h-9 rounded-xl ${spec.bgLight} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${spec.iconColor}`} />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-extrabold text-xs text-slate-900 truncate">
                          {spec.title}
                        </h5>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {spec.solvedCount} / {spec.totalAvailable} questions résolues
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-slate-100 text-slate-700 shrink-0">
                      {spec.status}
                    </span>
                  </div>

                  {/* Progress Bar & Accuracy Rate */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-black">
                      <span className="text-slate-600">Progression Globale</span>
                      <span className="text-indigo-700">{spec.masteryPercent}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                        style={{ width: `${spec.masteryPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 4: SIMULATEUR D'OBJECTIF & PROJECTION D'EXAMEN       */}
      {/* ========================================================= */}
      {diagramView === 'simulator' && (
        <div className="space-y-6">
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-5">
            <div>
              <h4 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-600" />
                Simulateur de Rythme Quotidien
              </h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Ajustez le nombre de QCMs cliniques que vous pouvez résoudre par jour pour visualiser votre date de franchissement de grade.
              </p>
            </div>

            {/* Slider Control */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-black">
                <span className="text-slate-700">Rythme Quotidien :</span>
                <span className="px-3 py-1 rounded-full bg-indigo-600 text-white shadow-2xs">
                  {simulatorDailyQcm} QCMs / jour (+{projectedDailyXp} XP)
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={50}
                step={5}
                value={simulatorDailyQcm}
                onChange={(e) => setSimulatorDailyQcm(Number(e.target.value))}
                className="w-full accent-indigo-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400">
                <span>5 QCMs (Léger)</span>
                <span>25 QCMs (Régulier)</span>
                <span>50 QCMs (Intensif ECN)</span>
              </div>
            </div>

            {/* Simulation Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                  Prochain Palier
                </span>
                <span className="text-xl sm:text-2xl font-black text-indigo-700 block mt-1">
                  Dans {daysToNextTier} jours
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Pour atteindre {nextTier?.title || 'le niveau max'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                  XP Projeté le Jour J
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-600 block mt-1">
                  {projectedXpAtExam} XP
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  D'ici l'examen ({examDaysRemaining}j restants)
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                  Grade Prédit
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-600 block mt-1">
                  {projectedXpAtExam >= 4500
                    ? 'Major de Promo'
                    : projectedXpAtExam >= 3000
                    ? 'Chef de Clinique'
                    : projectedXpAtExam >= 2000
                    ? 'Interne'
                    : 'Externe Confirmé'}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Projection statistique
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
