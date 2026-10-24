import React, { useState, useMemo } from 'react';
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
  Edit3,
  Eye,
  EyeOff,
  UserX,
  UserCheck,
  X,
  Check,
  AlertCircle,
  User,
  Building2,
  GraduationCap,
  HeartPulse,
} from 'lucide-react';
import { UserProfile, LeaderboardEntry, ShopItem, AcademicYear } from '../types/medical';
import { INITIAL_LEADERBOARD, SHOP_ITEMS } from '../data/mockMedicalData';
import { StudentAvatar, AVATAR_PRESETS } from './StudentAvatar';
import { ClinicalProgressDiagram } from './ClinicalProgressDiagram';

interface GamificationDashboardProps {
  userProfile: UserProfile;
  selectedYear: AcademicYear;
  onSpendXp: (cost: number, itemName: string) => boolean;
  onBuyFreeze: () => void;
  onUpdateProfile?: (updated: Partial<UserProfile>) => void;
  onOpenProfileModal?: () => void;
}

export const GamificationDashboard: React.FC<GamificationDashboardProps> = ({
  userProfile,
  selectedYear,
  onSpendXp,
  onBuyFreeze,
  onUpdateProfile,
  onOpenProfileModal,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'leaderboard' | 'shop'>('overview');
  const [cohortFilter, setCohortFilter] = useState<AcademicYear>(selectedYear);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);

  // Leaderboard Customization & Privacy State
  const [currentNickname, setCurrentNickname] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(`syndromed_nick_${userProfile.userId}`);
      if (saved) return saved;
    } catch {
      // ignore
    }
    return userProfile.nickname || userProfile.fullName || userProfile.username || 'Externe';
  });

  const [isAnonymous, setIsAnonymous] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(`syndromed_anon_${userProfile.userId}`);
      if (saved !== null) return saved === 'true';
    } catch {
      // ignore
    }
    return Boolean(userProfile.isAnonymous);
  });

  const [optOutRanking, setOptOutRanking] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(`syndromed_optout_${userProfile.userId}`);
      if (saved !== null) return saved === 'true';
    } catch {
      // ignore
    }
    return Boolean(userProfile.optOutRanking);
  });

  const [userAvatarId, setUserAvatarId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(`syndromed_avatar_${userProfile.userId}`);
      if (saved) return saved;
    } catch {
      // ignore
    }
    return userProfile.avatarId || 'stethoscope';
  });

  // Modal / Form states
  const [isEditingNickname, setIsEditingNickname] = useState<boolean>(false);
  const [tempNickname, setTempNickname] = useState<string>(currentNickname);
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState<boolean>(false);
  const [privacyToast, setPrivacyToast] = useState<string | null>(null);

  const showPrivacyToast = (msg: string) => {
    setPrivacyToast(msg);
    setTimeout(() => setPrivacyToast(null), 3000);
  };

  // Nickname Save Handler
  const handleSaveNickname = () => {
    const trimmed = tempNickname.trim();
    if (!trimmed) {
      setNicknameError('Veuillez saisir un pseudonyme valide.');
      return;
    }
    if (trimmed.length < 2) {
      setNicknameError('Le pseudonyme doit contenir au moins 2 caractères.');
      return;
    }
    if (trimmed.length > 25) {
      setNicknameError('Le pseudonyme ne peut pas dépasser 25 caractères.');
      return;
    }

    setCurrentNickname(trimmed);
    setIsEditingNickname(false);
    setNicknameError(null);

    try {
      localStorage.setItem(`syndromed_nick_${userProfile.userId}`, trimmed);
    } catch {
      // ignore
    }

    onUpdateProfile?.({ nickname: trimmed });
    showPrivacyToast(`Pseudonyme mis à jour : "${trimmed}"`);
  };

  // Toggle Anonymous Mode
  const handleToggleAnonymous = () => {
    const nextState = !isAnonymous;
    setIsAnonymous(nextState);
    try {
      localStorage.setItem(`syndromed_anon_${userProfile.userId}`, String(nextState));
    } catch {
      // ignore
    }
    onUpdateProfile?.({ isAnonymous: nextState });
    showPrivacyToast(
      nextState
        ? 'Mode Anonyme activé : votre identité est désormais masquée dans le classement.'
        : 'Mode Anonyme désactivé : votre pseudonyme est de nouveau visible.'
    );
  };

  // Toggle Opt-Out / Opt-In from Ranking
  const handleToggleOptOut = () => {
    const nextState = !optOutRanking;
    setOptOutRanking(nextState);
    try {
      localStorage.setItem(`syndromed_optout_${userProfile.userId}`, String(nextState));
    } catch {
      // ignore
    }
    onUpdateProfile?.({ optOutRanking: nextState });
    showPrivacyToast(
      nextState
        ? 'Vous avez quitté le classement public. Votre profil est masqué.'
        : 'Vous réintégrez le classement public de la promotion !'
    );
  };

  // Select Avatar Handler
  const handleSelectAvatar = (presetId: string) => {
    setUserAvatarId(presetId);
    try {
      localStorage.setItem(`syndromed_avatar_${userProfile.userId}`, presetId);
    } catch {
      // ignore
    }
    onUpdateProfile?.({ avatarId: presetId });
    setIsAvatarModalOpen(false);
    showPrivacyToast(`Avatar mis à jour : ${AVATAR_PRESETS[presetId]?.name || presetId}`);
  };

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
  const dynamicLeaderboard: LeaderboardEntry[] = useMemo(() => {
    const cohortPeers = INITIAL_LEADERBOARD.filter(
      (s) => s.academicYear === cohortFilter && s.userId !== userProfile.userId
    );

    const list: LeaderboardEntry[] = [...cohortPeers];

    // Only include user if they have not opted out, and match this cohort
    if (!optOutRanking && userProfile.academicYear === cohortFilter) {
      list.push({
        rank: 0,
        userId: userProfile.userId,
        username: isAnonymous ? 'anonyme' : (userProfile.username || 'externe'),
        fullName: isAnonymous
          ? `Externe Anonyme #${userProfile.userId.slice(-3).toUpperCase() || '77'}`
          : currentNickname,
        academicYear: userProfile.academicYear,
        faculty: 'Faculté de Médecine',
        totalXp: userProfile.totalXp,
        streakCount: userProfile.streakCount,
        title: userProfile.title,
        avatarId: isAnonymous ? 'anonymous' : userAvatarId,
        isAnonymous: isAnonymous,
        isCurrentUser: true,
      });
    }

    return list
      .sort((a, b) => b.totalXp - a.totalXp)
      .map((item, index) => ({
        ...item,
        rank: index + 1,
      }));
  }, [
    cohortFilter,
    userProfile.academicYear,
    userProfile.userId,
    userProfile.username,
    userProfile.totalXp,
    userProfile.streakCount,
    userProfile.title,
    optOutRanking,
    isAnonymous,
    currentNickname,
    userAvatarId,
  ]);

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

  const nicknameSuggestions = [
    'Major Cardio',
    'Dr Focus',
    'Externe Nuit',
    'Doc 2026',
    'Major Promo',
    'Stétho Addict',
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Toast feedback for privacy & nickname changes */}
      {privacyToast && (
        <div className="fixed top-20 right-6 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-3 rounded-2xl shadow-xl border bg-slate-900 text-white border-emerald-500/40 text-xs font-bold flex items-center gap-2.5 backdrop-blur-md">
            <Check className="w-4 h-4 text-[#10B981] shrink-0" />
            <span>{privacyToast}</span>
          </div>
        </div>
      )}

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
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'leaderboard'
                ? 'bg-white text-amber-700 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Classement Promotion
          </button>
          <button
            onClick={() => setActiveTab('shop')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'shop'
                ? 'bg-white text-emerald-700 shadow-sm border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pharmacie XP
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
          <span>Niveau {userProfile.level}</span>
          <span>•</span>
          <span className="text-amber-700 font-extrabold">{userProfile.title}</span>
        </div>
      </div>

      {purchaseSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between shadow-sm animate-in fade-in duration-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{purchaseSuccess}</span>
          </div>
          <button
            onClick={() => setPurchaseSuccess(null)}
            className="p-1 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 text-emerald-600" />
          </button>
        </div>
      )}

      {/* VIEW 1: OVERVIEW & STREAK */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* User Profile Summary Card with Edit Profile shortcut */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative shrink-0">
                <img
                  src={userProfile.customAvatarDataUrl || userProfile.avatarUrl}
                  alt={userProfile.fullName}
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border-2 border-indigo-200 shadow-2xs bg-slate-50"
                />
                <div
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white"
                  title="Session active"
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight truncate">
                    {userProfile.fullName}
                  </h3>
                  <span className="text-xs font-bold text-slate-400">
                    @{userProfile.username || 'externe'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {userProfile.academicYear.replace('ème Année', 'eme')}
                  </span>
                </div>

                {userProfile.bio ? (
                  <p className="text-xs text-slate-600 font-medium italic mt-1 max-w-xl line-clamp-2">
                    « {userProfile.bio} »
                  </p>
                ) : (
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Ajoutez une bio médicale pour personnaliser votre profil de promotion.
                  </p>
                )}

                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 mt-2 flex-wrap">
                  {userProfile.targetSpecialty && (
                    <span className="flex items-center gap-1 text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200/80">
                      <HeartPulse className="w-3 h-3 text-purple-600" />
                      <span>Visée : {userProfile.targetSpecialty}</span>
                    </span>
                  )}
                  {userProfile.faculty && (
                    <span className="flex items-center gap-1 text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                      <Building2 className="w-3 h-3 text-slate-500" />
                      <span className="truncate max-w-[240px]">{userProfile.faculty}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {onOpenProfileModal && (
              <button
                type="button"
                onClick={onOpenProfileModal}
                className="px-4 py-2.5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-black flex items-center gap-2 transition-all shadow-2xs cursor-pointer shrink-0 self-end md:self-center"
              >
                <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Modifier mon Profil</span>
              </button>
            )}
          </div>

          {/* Main Streak Card & Level/XP Summary Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Streak Card */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white shadow-xl shadow-amber-500/20 relative overflow-hidden flex flex-col justify-between min-h-[260px]">
              <div className="absolute -right-10 -bottom-10 opacity-15">
                <Flame className="w-64 h-64 fill-white" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold tracking-wide mb-4 border border-white/20">
                  <Flame className="w-4 h-4 fill-amber-200 text-amber-200" />
                  <span>FLAMME QUOTIDIENNE DE RÉVISION</span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-7xl font-black tracking-tight drop-shadow-sm">
                    {userProfile.streakCount}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold opacity-90">
                    {userProfile.streakCount > 1 ? 'jours consécutifs' : 'jour actif'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-medium opacity-90 mt-2 max-w-md leading-relaxed">
                  {userProfile.streakCount >= 7
                    ? "Série exceptionnelle ! Votre régularité clinique forge une mémoire à long terme solide."
                    : userProfile.streakCount >= 3
                    ? 'Excellente lancée ! Résolvez votre quota quotidien pour faire grandir la flamme.'
                    : "Commencez votre série aujourd'hui en validant au moins 10 QCMs cliniques."}
                </p>
              </div>

              {/* Streak Week Visualizer */}
              <div className="pt-6 border-t border-white/20 mt-6">
                <div className="flex items-center justify-between gap-2">
                  {pastDays.map((day, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center font-black text-xs transition-transform ${
                          day.completed
                            ? 'bg-white text-amber-600 shadow-md scale-105'
                            : 'bg-white/20 text-white/70 border border-white/20'
                        }`}
                      >
                        {day.completed ? (
                          <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
                        ) : (
                          <span className="text-[11px] font-bold">{day.count}</span>
                        )}
                      </div>
                      <span className="text-[10px] font-bold opacity-90">{day.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Level & XP Summary Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Progression de Grade
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-700 border border-indigo-100">
                    Niveau {userProfile.level}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mt-2 tracking-tight">
                  {userProfile.title}
                </h3>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                    <span>{userProfile.totalXp} XP cumulés</span>
                    <span>{nextLevelXp} XP (Niv. {userProfile.level + 1})</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-indigo-600" />
                    Gels de Série Disponibles
                  </span>
                  <span className="font-black text-indigo-700">{userProfile.streakFreezesCount}</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Protège automatiquement votre série en cas de garde chargée ou d'imprévu.
                </p>
              </div>
            </div>
          </div>

          {/* Upgraded Clinical Progress Diagram */}
          <ClinicalProgressDiagram
            userProfile={userProfile}
            selectedYear={selectedYear}
          />
        </div>
      )}

      {/* VIEW 2: COHORT LEADERBOARD WITH NICKNAME & PRIVACY CONTROLS */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-4">
          {/* Header & Cohort Filter */}
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

          {/* User Nickname & Privacy Management Card */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              {/* User Identity Preview */}
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <StudentAvatar
                    avatarId={userAvatarId}
                    isAnonymous={isAnonymous}
                    size="lg"
                    className="cursor-pointer transition-transform group-hover:scale-105"
                    onClick={() => setIsAvatarModalOpen(true)}
                  />
                  <button
                    type="button"
                    onClick={() => setIsAvatarModalOpen(true)}
                    className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-emerald-600 flex items-center justify-center shadow-xs text-[10px] cursor-pointer"
                    title="Choisir un avatar"
                  >
                    <Edit3 className="w-3 h-3 text-[#10B981]" />
                  </button>
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                      Votre Identité de Classement
                    </span>
                    {isAnonymous && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#0F172A] text-[#10B981] border border-emerald-500/30 flex items-center gap-1">
                        <EyeOff className="w-3 h-3" />
                        Incognito
                      </span>
                    )}
                    {optOutRanking ? (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
                        <UserX className="w-3 h-3" />
                        Masqué du Classement
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <UserCheck className="w-3 h-3" />
                        Actif dans la Promo
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <h3 className="font-black text-base sm:text-lg text-slate-900 tracking-tight">
                      {isAnonymous
                        ? `Externe Anonyme #${userProfile.userId.slice(-3).toUpperCase() || '77'}`
                        : currentNickname}
                    </h3>
                    {!isAnonymous && (
                      <button
                        type="button"
                        onClick={() => {
                          setTempNickname(currentNickname);
                          setIsEditingNickname((prev) => !prev);
                        }}
                        className="p-1 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer"
                        title="Modifier votre pseudonyme"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {optOutRanking
                      ? 'Votre profil est totalement masqué du classement public.'
                      : isAnonymous
                      ? 'Votre vrai nom et identifiant sont cachés : seul votre alias anonyme apparaît.'
                      : 'Ce pseudonyme est affiché aux autres étudiants de la promotion.'}
                  </p>
                </div>
              </div>

              {/* Action Buttons Toolbar */}
              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                {/* Change Avatar Button */}
                <button
                  type="button"
                  onClick={() => setIsAvatarModalOpen(true)}
                  className="px-3.5 py-2 rounded-2xl text-xs font-black bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Changer d'Avatar</span>
                </button>

                {/* Edit Nickname Button */}
                {!isAnonymous && (
                  <button
                    type="button"
                    onClick={() => {
                      setTempNickname(currentNickname);
                      setIsEditingNickname((prev) => !prev);
                    }}
                    className="px-3.5 py-2 rounded-2xl text-xs font-black bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Modifier Pseudonyme</span>
                  </button>
                )}

                {/* Anonymous Toggle */}
                <button
                  type="button"
                  onClick={handleToggleAnonymous}
                  disabled={optOutRanking}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                    isAnonymous
                      ? 'bg-[#0F172A] text-[#10B981] border border-emerald-500/50 shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                  } ${optOutRanking ? 'opacity-50 cursor-not-allowed' : ''}`}
                  title={isAnonymous ? 'Désactiver le mode anonyme' : 'Devenir anonyme'}
                >
                  {isAnonymous ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{isAnonymous ? 'Anonyme (Actif)' : 'Rester Anonyme'}</span>
                </button>

                {/* Opt-Out / Opt-In Toggle */}
                <button
                  type="button"
                  onClick={handleToggleOptOut}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                    optOutRanking
                      ? 'bg-rose-50 text-rose-700 border border-rose-300 hover:bg-rose-100'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                  }`}
                  title={
                    optOutRanking
                      ? 'Réintégrer le classement public'
                      : 'Ne jamais apparaître dans le classement'
                  }
                >
                  <UserX className="w-3.5 h-3.5" />
                  <span>{optOutRanking ? 'Masqué du Classement' : 'Ne Pas Entrer'}</span>
                </button>
              </div>
            </div>

            {/* Inline Nickname Editor */}
            {isEditingNickname && !isAnonymous && (
              <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50/70 p-4 rounded-2xl space-y-3 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={tempNickname}
                      onChange={(e) => {
                        setTempNickname(e.target.value);
                        setNicknameError(null);
                      }}
                      placeholder="Saisissez votre pseudonyme..."
                      maxLength={25}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                    />
                    <span className="absolute right-3 top-2.5 text-[10px] text-slate-400 font-semibold">
                      {tempNickname.length}/25
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSaveNickname}
                      className="px-4 py-2 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Enregistrer</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditingNickname(false);
                        setNicknameError(null);
                      }}
                      className="px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200 transition-all cursor-pointer"
                    >
                      Annuler
                    </button>
                  </div>
                </div>

                {nicknameError && (
                  <div className="text-xs text-rose-600 font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{nicknameError}</span>
                  </div>
                )}

                {/* Suggestions chips */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  <span className="text-[10px] font-bold text-slate-500">Idées rapides :</span>
                  {nicknameSuggestions.map((sug) => (
                    <button
                      key={sug}
                      type="button"
                      onClick={() => setTempNickname(sug)}
                      className="px-2.5 py-0.5 rounded-full bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 text-[10px] font-semibold transition-all cursor-pointer"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Opt-Out Notice Banner */}
          {optOutRanking && (
            <div className="p-6 rounded-3xl bg-slate-50 border-2 border-dashed border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto text-slate-400 shadow-2xs">
                <UserX className="w-6 h-6 text-slate-500" />
              </div>
              <h4 className="font-black text-slate-900 text-sm">
                Vous ne participez pas au classement public de la promotion
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed font-medium">
                Votre progression ({userProfile.totalXp} XP, série de {userProfile.streakCount} jours)
                reste enregistrée dans votre espace personnel sans être visible par les pairs.
              </p>
              <button
                type="button"
                onClick={handleToggleOptOut}
                className="px-4 py-2 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white font-extrabold text-xs shadow-xs cursor-pointer transition-all inline-flex items-center gap-2"
              >
                <UserCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Réintégrer le Classement Public</span>
              </button>
            </div>
          )}

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
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-900 flex items-center justify-center font-black text-xs shadow-sm">
                    1
                  </div>
                );
              } else if (student.rank === 2) {
                rankBadge = (
                  <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center font-black text-xs shadow-sm">
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
                      ? 'bg-slate-50/90 border-[#10B981] shadow-sm ring-2 ring-emerald-400/20'
                      : 'bg-white hover:bg-slate-50/70 border-slate-200/80 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {rankBadge}

                    {/* Stylized Medical Avatar - No Photos */}
                    <StudentAvatar
                      avatarId={student.avatarId || 'stethoscope'}
                      name={student.fullName}
                      isAnonymous={student.isAnonymous}
                      size="md"
                      showBadge={isUser}
                    />

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm text-slate-900">
                          {student.fullName}
                        </span>
                        {isUser && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#0F172A] text-[#10B981] border border-emerald-500/30">
                            VOUS
                          </span>
                        )}
                        {student.isAnonymous && (
                          <span className="px-1.5 py-0.5 rounded-md text-[9px] font-bold bg-slate-100 text-slate-600">
                            Incognito
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
                      <span className="font-black text-sm text-[#0F172A] block">
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

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">
                      {userProfile.totalXp >= item.priceXp
                        ? 'Déblocable immédiatement'
                        : `Manque ${item.priceXp - userProfile.totalXp} XP`}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleBuyItem(item)}
                      disabled={userProfile.totalXp < item.priceXp}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                        userProfile.totalXp >= item.priceXp
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Acquérir
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* AVATAR PICKER MODAL */}
      {isAvatarModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl relative animate-in zoom-in-95 duration-200 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <Sparkles className="w-4 h-4 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">Galerie d'Avatars Médicaux</h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Choisissez votre emblème pour le classement.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAvatarModalOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Avatars Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-80 overflow-y-auto p-1">
              {Object.values(AVATAR_PRESETS).map((preset) => {
                const isSelected = userAvatarId === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleSelectAvatar(preset.id)}
                    className={`p-3 rounded-2xl border flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#10B981] bg-emerald-50/50 shadow-xs ring-2 ring-emerald-400/20'
                        : 'border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <StudentAvatar avatarId={preset.id} size="md" />
                    <span className="text-[10px] font-extrabold text-slate-700 line-clamp-1">
                      {preset.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setIsAvatarModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
