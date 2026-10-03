import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Flame,
  Award,
  Shield,
  ShoppingBag,
  Trophy,
  Crown,
  Sparkles,
  Coffee,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';
import { UserProfile, LeaderboardEntry, ShopItem, AcademicYear } from '../types/medical';
import { INITIAL_LEADERBOARD, SHOP_ITEMS } from '../data/mockMedicalData';
import { VectorHeart, VectorBrain, VectorLungs } from './VectorOrgans';

interface GamificationDashboardProps {
  userProfile: UserProfile;
  selectedYear: AcademicYear;
  onSpendXp: (cost: number, itemName: string) => boolean;
  onBuyFreeze: () => void;
}

export const GamificationDashboard: React.FC<GamificationDashboardProps> = ({
  userProfile,
  selectedYear,
  onSpendXp,
  onBuyFreeze,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'leaderboard' | 'shop'>('overview');
  const [cohortFilter, setCohortFilter] = useState<AcademicYear>(selectedYear);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);

  // Experience level calculations
  const nextLevelXp = userProfile.level * 1000;
  const currentLevelBaseXp = (userProfile.level - 1) * 1000;
  const progressPercent = Math.min(
    100,
    Math.max(
      0,
      Math.round(((userProfile.totalXp - currentLevelBaseXp) / (nextLevelXp - currentLevelBaseXp)) * 100)
    )
  );

  // Past 7 days streak activity dynamically derived from actual streak and today's activity
  const pastDays = [
    { label: 'Lun', completed: userProfile.streakCount >= 7, count: userProfile.streakCount >= 7 ? 10 : 0 },
    { label: 'Mar', completed: userProfile.streakCount >= 6, count: userProfile.streakCount >= 6 ? 10 : 0 },
    { label: 'Mer', completed: userProfile.streakCount >= 5, count: userProfile.streakCount >= 5 ? 10 : 0 },
    { label: 'Jeu', completed: userProfile.streakCount >= 4, count: userProfile.streakCount >= 4 ? 10 : 0 },
    { label: 'Ven', completed: userProfile.streakCount >= 3, count: userProfile.streakCount >= 3 ? 10 : 0 },
    { label: 'Sam', completed: userProfile.streakCount >= 2, count: userProfile.streakCount >= 2 ? 10 : 0 },
    { label: 'Auj', completed: userProfile.questionsSolvedToday >= userProfile.dailyGoal && userProfile.dailyGoal > 0, count: userProfile.questionsSolvedToday },
  ];

  // Dynamic leaderboard merging peers and the active user with their real isolated stats
  const dynamicLeaderboard: LeaderboardEntry[] = [
    ...INITIAL_LEADERBOARD.filter((s) => s.userId !== userProfile.userId),
    {
      rank: 0,
      userId: userProfile.userId,
      username: userProfile.username || 'externe',
      fullName: userProfile.fullName,
      academicYear: userProfile.academicYear,
      faculty: 'Faculté de Médecine',
      totalXp: userProfile.totalXp,
      streakCount: userProfile.streakCount,
      title: userProfile.title,
      avatarUrl: userProfile.avatarUrl,
      isCurrentUser: true,
    },
  ]
    .sort((a, b) => b.totalXp - a.totalXp)
    .map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

  const handleBuyItem = (item: ShopItem) => {
    const success = onSpendXp(item.priceXp, item.name);
    if (success) {
      if (item.type === 'streak_freeze') {
        onBuyFreeze();
      }
      setPurchaseSuccess(`Vous avez acquis "${item.name}" avec succès !`);
      confetti({
        particleCount: 50,
        spread: 60,
      });
      setTimeout(() => setPurchaseSuccess(null), 3500);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Sub-tab Navigation (Segmented Pill Control) */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-2xl border border-slate-200/60 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Aperçu & Série Active
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'leaderboard'
                ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Classement Promotion</span>
          </button>
          <button
            onClick={() => setActiveTab('shop')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'shop'
                ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-indigo-600" />
            <span>Pharmacie de l'Externe</span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs font-extrabold">
          <span className="px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700">
            {userProfile.totalXp} XP
          </span>
          <span className="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{userProfile.streakCount} Jours</span>
          </span>
        </div>
      </div>

      {purchaseSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-xs font-bold flex items-center gap-2.5 animate-in fade-in">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{purchaseSuccess}</span>
        </div>
      )}

      {/* VIEW 1: OVERVIEW & STREAKS */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Hero Profile Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={userProfile.avatarUrl}
                    alt={userProfile.fullName}
                    className="w-16 h-16 rounded-2xl border-2 border-indigo-200 object-cover shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-xs">
                    Niv. {userProfile.level}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-900 tracking-tight">
                      {userProfile.fullName}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-50 border border-indigo-100 text-indigo-700">
                      {userProfile.academicYear}
                    </span>
                  </div>
                  <p className="text-xs text-amber-700 font-extrabold flex items-center gap-1 mt-0.5">
                    <Crown className="w-3.5 h-3.5 text-amber-500" />
                    <span>{userProfile.title}</span>
                  </p>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    Objectif du jour :{' '}
                    <strong className="text-slate-900 font-bold">
                      {userProfile.questionsSolvedToday} / {userProfile.dailyGoal} QCMs
                    </strong>
                  </p>
                </div>
              </div>

              {/* Quick Actions / Streak freeze counter */}
              <div className="flex items-center gap-3 self-stretch sm:self-auto justify-between sm:justify-end">
                <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-center min-w-[96px]">
                  <span className="text-[10px] uppercase font-extrabold text-amber-800 block">Série</span>
                  <div className="flex items-center justify-center gap-1 text-amber-700 font-black text-lg mt-0.5">
                    <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span>{userProfile.streakCount} j</span>
                  </div>
                </div>

                <div className="p-3.5 bg-indigo-50/70 border border-indigo-200/80 rounded-2xl text-center min-w-[96px]">
                  <span className="text-[10px] uppercase font-extrabold text-indigo-800 block">Gels Actifs</span>
                  <div className="flex items-center justify-center gap-1 text-indigo-700 font-black text-lg mt-0.5">
                    <Shield className="w-4 h-4 text-indigo-600" />
                    <span>{userProfile.streakFreezesCount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Level XP Bar */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-extrabold text-slate-700 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-indigo-600" />
                  Progression vers le Niveau {userProfile.level + 1}
                </span>
                <span className="font-bold text-indigo-600">
                  {userProfile.totalXp} / {nextLevelXp} XP ({progressPercent}%)
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Daily Streak Consistency Engine */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-black text-base text-slate-900 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
                  Calendrier d'Entraînement Quotidien
                </h4>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  Résolvez au moins 10 QCMs chaque jour pour préserver votre flamme d'externat.
                </p>
              </div>

              <button
                onClick={() => setActiveTab('shop')}
                className="px-4 py-2 text-xs font-extrabold rounded-full bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 transition-colors flex items-center gap-1.5 w-fit cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5 text-amber-600" />
                <span>Sécuriser avec un Gel</span>
              </button>
            </div>

            {/* 7-day row */}
            <div className="grid grid-cols-7 gap-2 sm:gap-3 pt-2">
              {pastDays.map((d, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    d.completed
                      ? 'bg-amber-50/80 border-amber-200 text-amber-900 shadow-2xs'
                      : 'bg-slate-50 border-slate-200/70 text-slate-400'
                  }`}
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider block">
                    {d.label}
                  </span>
                  <div className="my-1.5 flex justify-center">
                    {d.completed ? (
                      <Flame className="w-5 h-5 text-amber-500 fill-amber-500 animate-pulse" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-dashed border-slate-300 flex items-center justify-center text-[10px] text-slate-400">
                        -
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] font-bold">
                    {d.count > 0 ? `${d.count} QCM` : '0'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: COHORT LEADERBOARD */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs">
            <div>
              <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                Classement de la Promotion ({cohortFilter})
              </h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Émulation saine inter-facultés basée sur les dossiers cliniques et QCMs résolus.
              </p>
            </div>

            {/* Cohort Selector */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200/60">
              {(['3ème Année', '4ème Année', '5ème Année'] as AcademicYear[]).map((y) => (
                <button
                  key={y}
                  onClick={() => setCohortFilter(y)}
                  className={`px-3 py-1.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                    cohortFilter === y
                      ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/50'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          {/* Leaderboard Table / Cards */}
          <div className="space-y-2.5">
            {dynamicLeaderboard.map((student) => {
              const isUser = student.isCurrentUser;
              let rankBadge = (
                <span className="font-extrabold text-sm text-slate-400 w-7 text-center">
                  #{student.rank}
                </span>
              );

              if (student.rank === 1) {
                rankBadge = (
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-xs shadow-sm">
                    1
                  </div>
                );
              } else if (student.rank === 2) {
                rankBadge = (
                  <div className="w-8 h-8 rounded-xl bg-slate-300 text-slate-900 flex items-center justify-center font-black text-xs shadow-sm">
                    2
                  </div>
                );
              } else if (student.rank === 3) {
                rankBadge = (
                  <div className="w-8 h-8 rounded-xl bg-amber-700 text-white flex items-center justify-center font-black text-xs shadow-sm">
                    3
                  </div>
                );
              }

              return (
                <div
                  key={student.userId}
                  className={`p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                    isUser
                      ? 'bg-indigo-50/70 border-indigo-300 shadow-sm ring-2 ring-indigo-200/50'
                      : 'bg-white hover:bg-slate-50 border-slate-200/80 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {rankBadge}

                    <img
                      src={student.avatarUrl}
                      alt={student.fullName}
                      className="w-10 h-10 rounded-xl object-cover border border-slate-200 shadow-2xs"
                    />

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm text-slate-900">{student.fullName}</span>
                        {isUser && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-600 text-white">
                            VOUS
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-0.5">
                        <span className="text-amber-700 font-bold">{student.title}</span>
                        <span>•</span>
                        <span>{student.faculty}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-right">
                    <div className="hidden sm:flex items-center gap-1 text-amber-700 text-xs font-bold">
                      <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{student.streakCount} j</span>
                    </div>

                    <div>
                      <span className="font-black text-sm text-indigo-700 block">
                        {isUser ? userProfile.totalXp : student.totalXp} XP
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">Points cumulés</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 3: PHARMACIE DE L'EXTERNE (XP SHOP) */}
      {activeTab === 'shop' && (
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div>
              <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-indigo-600" />
                Pharmacie & Récompenses de l'Externe
              </h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Utilisez vos points XP d'entraînement clinique pour débloquer des bonus de révision.
              </p>
            </div>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 font-extrabold text-xs">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>Solde : {userProfile.totalXp} XP</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SHOP_ITEMS.map((item) => {
              const canAfford = userProfile.totalXp >= item.priceXp;

              return (
                <div
                  key={item.id}
                  className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-indigo-300 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-2xs">
                        {item.type === 'streak_freeze' && <Shield className="w-5 h-5 text-indigo-600" />}
                        {item.type === 'boost' && <Coffee className="w-5 h-5 text-amber-500" />}
                        {item.type === 'pass' && <Crown className="w-5 h-5 text-yellow-500" />}
                        {item.type === 'theme' && <Sparkles className="w-5 h-5 text-purple-500" />}
                      </div>

                      <span className="font-black text-xs px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700">
                        {item.priceXp} XP
                      </span>
                    </div>

                    <h5 className="font-extrabold text-slate-900 text-sm mt-1">{item.name}</h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleBuyItem(item)}
                    disabled={!canAfford}
                    className={`mt-4 w-full py-2.5 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      canAfford
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-md active:scale-98'
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200/60'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{canAfford ? 'Débloquer cet avantage' : 'XP insuffisant'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
