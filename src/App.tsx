/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DashboardHome } from './components/DashboardHome';
import { ModulesDirectory } from './components/ModulesDirectory';
import { CourseHub } from './components/CourseHub';
import { QCMEngine } from './components/QCMEngine';
import { GamificationDashboard } from './components/GamificationDashboard';
import { GoogleDriveExplorer } from './components/GoogleDriveExplorer';
import { AISummarizer } from './components/AISummarizer';
import { YearsSidebar } from './components/YearsSidebar';
import { AuthModal } from './components/AuthModal';
import { MobileFrame } from './components/MobileFrame';
import { SupabaseFlutterStudio } from './components/SupabaseFlutterStudio';
import { ApkOrderModal } from './components/ApkOrderModal';
import { FixedBottomNavBar, BottomNavTab } from './components/FixedBottomNavBar';
import { AuthLandingScreen } from './components/AuthLandingScreen';
import { Repository } from './components/Repository';
import {
  getCurrentSessionAccount,
  getUserProgress,
  saveUserProgress,
  buildUserProfile,
  logoutAccount,
  purgeObsoleteMockData,
  RegisteredAccount,
} from './services/authSessionManager';
import {
  AcademicYear,
  UserProfile,
  Question,
  Module,
  Course,
  QuestionType,
} from './types/medical';
import {
  MEDICAL_MODULES,
  MEDICAL_COURSES,
  INITIAL_QUESTIONS,
} from './data/mockMedicalData';
import {
  initAuth,
  googleSignIn,
  logout,
} from './services/firebaseAuth';
import {
  Award,
  CheckCircle2,
  Stethoscope,
} from 'lucide-react';

export default function App() {
  // User Session Management & Strict Auth Guard
  const [currentUserAccount, setCurrentUserAccount] = useState<RegisteredAccount | null>(() => {
    purgeObsoleteMockData();
    return getCurrentSessionAccount();
  });

  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    const acc = getCurrentSessionAccount();
    if (!acc) return null;
    const progress = getUserProgress(acc);
    const profile = buildUserProfile(acc, progress);
    try {
      const savedCountdown = localStorage.getItem('medquest_custom_exam_countdown');
      if (savedCountdown) {
        const parsed = JSON.parse(savedCountdown);
        if (parsed.customExamDate) profile.customExamDate = parsed.customExamDate;
        if (parsed.examTitle) profile.examTitle = parsed.examTitle;
        if (parsed.examModule) profile.examModule = parsed.examModule;
      }
    } catch {
      // ignore
    }
    return profile;
  });

  const [currentTab, setCurrentTab] = useState<
    'home' | 'directory' | 'qcm' | 'gamification' | 'repository' | 'drive' | 'ai' | 'architecture'
  >('home');
  const [selectedYear, setSelectedYear] = useState<AcademicYear>(
    () => currentUserAccount?.academicYear || '4ème Année'
  );
  const [isMobilePreview, setIsMobilePreview] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isYearsSidebarOpenMobile, setIsYearsSidebarOpenMobile] = useState<boolean>(false);
  const [isApkOrderModalOpen, setIsApkOrderModalOpen] = useState<boolean>(false);

  // Drill-down navigation state
  const [activeDrillModule, setActiveDrillModule] = useState<Module | null>(null);
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [activeSubdivision, setActiveSubdivision] = useState<string | null>(null);
  const [practiceModeFilter, setPracticeModeFilter] = useState<QuestionType | 'all'>('all');

  // Authentication State with Google Workspace Drive
  const [isGoogleConnected, setIsGoogleConnected] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [googleUserEmail, setGoogleUserEmail] = useState<string>('');

  // Questions Database
  const [questions, setQuestions] = useState<Question[]>(INITIAL_QUESTIONS);

  // AI Summarizer text pre-load state from Drive
  const [summarizerPreload, setSummarizerPreload] = useState<{ text: string; title: string } | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'info' | 'xp' } | null>(null);

  const handleBottomTabChange = (tab: BottomNavTab) => {
    if (tab === 'home') {
      setCurrentTab('home');
      setActiveDrillModule(null);
      setActiveCourse(null);
    } else if (tab === 'explore') {
      setCurrentTab('directory');
      setActiveDrillModule(null);
      setActiveCourse(null);
    } else if (tab === 'practice') {
      setActiveCourse(null);
      setPracticeModeFilter('all');
      setCurrentTab('qcm');
    } else if (tab === 'progress') {
      setCurrentTab('gamification');
    } else if (tab === 'profile') {
      setIsAuthModalOpen(true);
    }
  };

  const getActiveBottomNavTab = (): BottomNavTab => {
    if (currentTab === 'home') return 'home';
    if (currentTab === 'directory') return 'explore';
    if (currentTab === 'qcm') return 'practice';
    if (currentTab === 'gamification') return 'progress';
    return 'home';
  };

  const showToast = (text: string, type: 'success' | 'info' | 'xp' = 'info') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Listen to Firebase Auth state for Google Drive integration
  useEffect(() => {
    const unsubscribe = initAuth((user) => {
      if (user) {
        setIsGoogleConnected(true);
        if (user.email) setGoogleUserEmail(user.email);
      } else {
        setIsGoogleConnected(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAuthenticated = (account: RegisteredAccount) => {
    setCurrentUserAccount(account);
    const progress = getUserProgress(account);
    const profile = buildUserProfile(account, progress);
    setUserProfile(profile);
    setSelectedYear(account.academicYear);
    setCurrentTab('home');
    showToast(`Bienvenue, ${account.fullName} !`, 'success');
  };

  const handleLogout = () => {
    logoutAccount();
    setCurrentUserAccount(null);
    setUserProfile(null);
    setCurrentTab('home');
    setActiveDrillModule(null);
    setActiveCourse(null);
    setIsAuthModalOpen(false);
    showToast('Session terminée. Déconnexion effectuée.', 'info');
  };

  // Handle Google Drive / Workspace Sign In
  const handleGoogleSignIn = async () => {
    try {
      const res = await googleSignIn();
      if (res && res.user) {
        setIsGoogleConnected(true);
        if (res.accessToken) setAccessToken(res.accessToken);
        if (res.user.email) setGoogleUserEmail(res.user.email);
        showToast(`Connecté avec succès : ${res.user.email || 'Google Drive'}`, 'success');
      }
    } catch (err: any) {
      console.error('Google Sign In error:', err);
      showToast('Connexion Google Drive annulée ou refusée.', 'info');
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await logout();
      setIsGoogleConnected(false);
      setAccessToken(null);
      showToast('Déconnecté de Google Drive.', 'info');
    } catch (err: any) {
      console.error('Logout error:', err);
    }
  };

  // Gamification Actions with Partitioned Local Storage Persistence
  const handleAwardXp = (amount: number, reason: string) => {
    if (!currentUserAccount) return;
    const todayKey = new Date().toISOString().split('T')[0];

    setUserProfile((prev) => {
      if (!prev) return prev;
      const newXp = prev.totalXp + amount;
      const newLevel = Math.floor(newXp / 1000) + 1;
      let newTitle = prev.title;
      if (newLevel >= 5) newTitle = 'Major de Promotion';
      else if (newLevel >= 4) newTitle = 'Chef de Clinique Adjoint';
      else if (newLevel >= 3) newTitle = 'Interne Prometteuse';
      else if (newLevel >= 2) newTitle = 'Externe Confirmée';

      const existingProgress = getUserProgress(currentUserAccount);
      const currentDaily = existingProgress.dailyActivity || {};
      const newDailyXp = (currentDaily[todayKey] || 0) + amount;
      const updatedDaily = {
        ...currentDaily,
        [todayKey]: newDailyXp,
      };

      const updated = {
        ...prev,
        totalXp: newXp,
        level: newLevel,
        title: newTitle,
        questionsSolvedToday: prev.questionsSolvedToday + 1,
        dailyActivity: updatedDaily,
      };

      saveUserProgress(currentUserAccount.email, {
        ...existingProgress,
        totalXp: updated.totalXp,
        level: updated.level,
        title: updated.title,
        questionsSolvedToday: updated.questionsSolvedToday,
        dailyActivity: updatedDaily,
      });

      return updated;
    });
    showToast(`+${amount} XP : ${reason}`, 'xp');
  };

  const handleSpendXp = (amount: number, itemName: string): boolean => {
    if (!userProfile || !currentUserAccount) return false;
    if (userProfile.totalXp < amount) {
      showToast(`XP insuffisant pour débloquer : ${itemName}`, 'info');
      return false;
    }
    const newXp = userProfile.totalXp - amount;
    setUserProfile((prev) => {
      if (!prev) return prev;
      return { ...prev, totalXp: newXp };
    });

    const existingProgress = getUserProgress(currentUserAccount);
    saveUserProgress(currentUserAccount.email, {
      ...existingProgress,
      totalXp: newXp,
      purchasedItemIds: [...existingProgress.purchasedItemIds, itemName],
    });

    showToast(`Débloqué avec succès : ${itemName} (-${amount} XP)`, 'success');
    return true;
  };

  const handleBuyFreeze = () => {
    if (!currentUserAccount) return;
    setUserProfile((prev) => {
      if (!prev) return prev;
      const newFreezes = prev.streakFreezesCount + 1;
      const existingProgress = getUserProgress(currentUserAccount);
      saveUserProgress(currentUserAccount.email, {
        ...existingProgress,
        streakFreezesCount: newFreezes,
      });
      return { ...prev, streakFreezesCount: newFreezes };
    });
    showToast('Gel de Série ajouté à votre inventaire avec succès', 'success');
  };

  const handleQuestionCompleted = (isCorrect: boolean) => {
    if (!currentUserAccount) return;
    const existingProgress = getUserProgress(currentUserAccount);
    const newStreak = isCorrect
      ? (existingProgress.streakCount === 0 ? 1 : existingProgress.streakCount)
      : existingProgress.streakCount;

    saveUserProgress(currentUserAccount.email, {
      ...existingProgress,
      streakCount: newStreak,
    });

    setUserProfile((prev) => {
      if (!prev) return prev;
      return { ...prev, streakCount: newStreak };
    });
  };

  // Drive integration actions
  const handleLoadQuestionsToEngine = (newQuestions: Question[]) => {
    setQuestions((prev) => {
      const existingIds = new Set(prev.map((q) => q.id));
      const filtered = newQuestions.filter((q) => !existingIds.has(q.id));
      return [...filtered, ...prev];
    });
    setActiveCourse(null);
    setCurrentTab('qcm');
    showToast(`${newQuestions.length} QCMs chargés dans le moteur d'entraînement !`, 'success');
  };

  const handleSendToAISummarizer = (text: string, title: string) => {
    setSummarizerPreload({ text, title });
    setCurrentTab('ai');
    showToast(`Cours "${title}" envoyé au synthétiseur IA !`, 'info');
  };

  const handleSelectModuleFromDirectory = (module: Module) => {
    setActiveDrillModule(module);
  };

  const handleLaunchPracticeMode = (course: Course, mode: QuestionType) => {
    setActiveCourse(course);
    setActiveSubdivision(null);
    setPracticeModeFilter(mode);
    setActiveDrillModule(null);
    setCurrentTab('qcm');
    showToast(`Lancement de l'entraînement : ${course.title}`, 'info');
  };

  const handleLaunchSubdivisionPractice = (subdivision: string, mode: QuestionType) => {
    setActiveCourse(null);
    setActiveSubdivision(subdivision);
    setPracticeModeFilter(mode);
    setActiveDrillModule(null);
    setCurrentTab('qcm');
    showToast(`Lancement de l'entraînement complet : Volet ${subdivision}`, 'info');
  };

  const handleUpdateExamCountdown = (newDateIso: string, newTitle: string, newModule: string) => {
    setUserProfile((prev) => {
      if (!prev) {
        return {
          userId: currentUserAccount?.id || 'guest',
          username: currentUserAccount?.username || 'externe_med',
          fullName: currentUserAccount?.fullName || 'Externe',
          email: currentUserAccount?.email || 'etudiant@medquest.dz',
          academicYear: selectedYear,
          totalXp: 0,
          level: 1,
          title: 'Externe',
          streakCount: 1,
          streakFreezesCount: 0,
          lastActiveDate: new Date().toISOString().split('T')[0],
          avatarUrl: currentUserAccount?.avatarUrl || '',
          questionsSolvedToday: 0,
          dailyGoal: 10,
          customExamDate: newDateIso,
          examTitle: newTitle,
          examModule: newModule,
          dailyActivity: {},
        };
      }
      return {
        ...prev,
        customExamDate: newDateIso,
        examTitle: newTitle,
        examModule: newModule,
      };
    });

    if (currentUserAccount) {
      const existingProgress = getUserProgress(currentUserAccount);
      saveUserProgress(currentUserAccount.email, {
        ...existingProgress,
        customExamDate: newDateIso,
        examTitle: newTitle,
        examModule: newModule,
      });
    }

    try {
      localStorage.setItem(
        'medquest_custom_exam_countdown',
        JSON.stringify({
          customExamDate: newDateIso,
          examTitle: newTitle,
          examModule: newModule,
        })
      );
    } catch {
      // ignore
    }

    showToast('Compte à rebours d\'examen mis à jour !', 'success');
  };

  // STRICT AUTH GUARD:
  // When any user opens the app without an active session, block direct access
  // and force landing on the Sign-Up / Login screen!
  if (!currentUserAccount || !userProfile) {
    return (
      <div className="min-h-screen bg-[#F8F9FD]">
        <AuthLandingScreen onAuthenticated={handleAuthenticated} />
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
            <div
              className={`px-4 py-3 rounded-2xl shadow-xl border flex items-center gap-3 text-xs font-bold backdrop-blur-xl ${
                toastMessage.type === 'xp'
                  ? 'bg-amber-50/95 border-amber-300 text-amber-900 shadow-amber-500/10'
                  : toastMessage.type === 'success'
                  ? 'bg-emerald-50/95 border-emerald-300 text-emerald-900 shadow-emerald-500/10'
                  : 'bg-white/95 border-slate-200 text-slate-800 shadow-slate-500/10'
              }`}
            >
              {toastMessage.type === 'xp' ? (
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              )}
              <span>{toastMessage.text}</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-slate-900 flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-950">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div
            className={`px-4 py-3 rounded-2xl shadow-xl border flex items-center gap-3 text-xs font-bold backdrop-blur-xl ${
              toastMessage.type === 'xp'
                ? 'bg-amber-50/95 border-amber-300 text-amber-900 shadow-amber-500/10'
                : toastMessage.type === 'success'
                ? 'bg-emerald-50/95 border-emerald-300 text-emerald-900 shadow-emerald-500/10'
                : 'bg-white/95 border-slate-200 text-slate-800 shadow-slate-500/10'
            }`}
          >
            {toastMessage.type === 'xp' ? (
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            )}
            <span>{toastMessage.text}</span>
          </div>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setActiveDrillModule(null);
          setCurrentTab(tab);
        }}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        userProfile={userProfile}
        isGoogleConnected={isGoogleConnected}
        googleUserEmail={googleUserEmail}
        onGoogleSignIn={handleGoogleSignIn}
        onGoogleSignOut={handleGoogleSignOut}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
        isMobilePreview={isMobilePreview}
        setIsMobilePreview={setIsMobilePreview}
        onToggleYearsSidebar={() => setIsYearsSidebarOpenMobile((prev) => !prev)}
        onOpenApkOrder={() => setIsApkOrderModalOpen(true)}
      />

      {/* App Body Layout: Dedicated Left Years Sidebar + Main View Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 flex flex-col lg:flex-row gap-6 items-start">
        {/* Dedicated Academic Years Sidebar */}
        <YearsSidebar
          selectedYear={selectedYear}
          onSelectYear={(yr) => {
            setSelectedYear(yr);
            setActiveDrillModule(null);
            setActiveCourse(null);
          }}
          isOpenMobile={isYearsSidebarOpenMobile}
          onCloseMobile={() => setIsYearsSidebarOpenMobile(false)}
        />

        {/* Main View Area */}
        <main className="flex-1 w-full min-w-0 pb-20 xl:pb-0">
          <MobileFrame
            isMobilePreview={isMobilePreview}
            bottomBar={
              <FixedBottomNavBar
                activeTab={getActiveBottomNavTab()}
                onTabChange={handleBottomTabChange}
                isMobilePreview={true}
              />
            }
          >
            {/* If currentTab is 'qcm', ALWAYS render QCMEngine */}
            {currentTab === 'qcm' ? (
              <QCMEngine
                key={`${activeCourse?.id || activeSubdivision || 'all'}-${practiceModeFilter}`}
                questions={
                  activeCourse
                    ? questions.filter((q) => q.courseId === activeCourse.id)
                    : activeSubdivision
                    ? (() => {
                        const courseIds = MEDICAL_COURSES.filter(
                          (c) => c.subdivision?.toLowerCase() === activeSubdivision.toLowerCase()
                        ).map((c) => c.id);
                        return questions.filter((q) => courseIds.includes(q.courseId));
                      })()
                    : questions
                }
                modules={MEDICAL_MODULES}
                selectedYear={selectedYear}
                initialTypeFilter={practiceModeFilter}
                courseName={activeCourse?.title || (activeSubdivision ? `Volet ${activeSubdivision}` : undefined)}
                activeModuleName={
                  activeDrillModule?.title ||
                  (activeCourse
                    ? MEDICAL_MODULES.find((m) => m.id === activeCourse.moduleId)?.title
                    : activeSubdivision
                    ? (() => {
                        const matched = MEDICAL_COURSES.find(
                          (c) => c.subdivision?.toLowerCase() === activeSubdivision.toLowerCase()
                        );
                        return (
                          (matched && MEDICAL_MODULES.find((m) => m.id === matched.moduleId)?.title) ||
                          `Volet ${activeSubdivision}`
                        );
                      })()
                    : undefined)
                }
                onAwardXp={handleAwardXp}
                onQuestionCompleted={handleQuestionCompleted}
                onExitSession={() => {
                  if (activeDrillModule) {
                    setActiveCourse(null);
                    setActiveSubdivision(null);
                    setCurrentTab('directory');
                  } else {
                    setActiveCourse(null);
                    setActiveSubdivision(null);
                    setCurrentTab('home');
                  }
                }}
              />
            ) : activeDrillModule ? (
              /* If a module is being drilled down into, show CourseHub */
              <CourseHub
                module={activeDrillModule}
                onBack={() => {
                  setActiveDrillModule(null);
                  setActiveSubdivision(null);
                }}
                onLaunchPracticeMode={handleLaunchPracticeMode}
                onLaunchSubdivisionPractice={handleLaunchSubdivisionPractice}
              />
            ) : (
              <>
                {currentTab === 'home' && (
                  <DashboardHome
                    userProfile={userProfile}
                    modules={MEDICAL_MODULES}
                    selectedYear={selectedYear}
                    onSelectModule={(mod) => setActiveDrillModule(mod)}
                    onNavigateToDirectory={() => setCurrentTab('directory')}
                    onStartQuickPractice={() => {
                      setActiveCourse(null);
                      setPracticeModeFilter('all');
                      setCurrentTab('qcm');
                    }}
                    onUpdateExamCountdown={handleUpdateExamCountdown}
                    onOpenApkOrder={() => setIsApkOrderModalOpen(true)}
                  />
                )}

                {currentTab === 'directory' && (
                  <ModulesDirectory
                    modules={MEDICAL_MODULES}
                    selectedYear={selectedYear}
                    onSelectYear={setSelectedYear}
                    onSelectModule={handleSelectModuleFromDirectory}
                  />
                )}

                {currentTab === 'gamification' && (
                  <GamificationDashboard
                    userProfile={userProfile}
                    selectedYear={selectedYear}
                    onSpendXp={handleSpendXp}
                    onBuyFreeze={handleBuyFreeze}
                  />
                )}

                {currentTab === 'repository' && (
                  <Repository
                    onLoadQuestionsToEngine={(loadedQuestions, sourceTitle) => {
                      handleLoadQuestionsToEngine(loadedQuestions);
                      showToast(`${loadedQuestions.length} QCMs chargés depuis : ${sourceTitle}`, 'success');
                    }}
                    onSendToAISummarizer={handleSendToAISummarizer}
                  />
                )}

                {currentTab === 'drive' && (
                  <GoogleDriveExplorer
                    isGoogleConnected={isGoogleConnected}
                    accessToken={accessToken}
                    googleUserEmail={googleUserEmail}
                    onGoogleSignIn={handleGoogleSignIn}
                    onLoadQuestionsToEngine={handleLoadQuestionsToEngine}
                    onSendToAISummarizer={handleSendToAISummarizer}
                  />
                )}

                {currentTab === 'ai' && (
                  <AISummarizer
                    initialText={summarizerPreload?.text}
                    initialTitle={summarizerPreload?.title}
                    selectedYear={selectedYear}
                    onLoadQuestionsToEngine={handleLoadQuestionsToEngine}
                    onAwardXp={handleAwardXp}
                  />
                )}

                {currentTab === 'architecture' && (
                  <SupabaseFlutterStudio onOpenApkOrder={() => setIsApkOrderModalOpen(true)} />
                )}
              </>
            )}
          </MobileFrame>

          {/* Fixed Bottom Navigation Bar for Mobile Screens (outside mobile preview) */}
          {!isMobilePreview && (
            <FixedBottomNavBar
              activeTab={getActiveBottomNavTab()}
              onTabChange={handleBottomTabChange}
              isMobilePreview={false}
            />
          )}
        </main>
      </div>

      {/* Username Auth & Profile Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        userProfile={userProfile}
        onLogout={handleLogout}
        onUpdateProfile={(updated) => {
          if (!currentUserAccount) return;
          setUserProfile((prev) => {
            if (!prev) return prev;
            const merged = { ...prev, ...updated };
            const existingProgress = getUserProgress(currentUserAccount);
            saveUserProgress(currentUserAccount.email, {
              ...existingProgress,
              totalXp: merged.totalXp,
              streakCount: merged.streakCount,
            });
            return merged;
          });
          if (updated.academicYear) setSelectedYear(updated.academicYear);
          showToast(`Profil mis à jour : @${updated.username || userProfile.username}`, 'success');
        }}
      />

      {/* APK Order & Supabase Checkout Modal */}
      <ApkOrderModal
        isOpen={isApkOrderModalOpen}
        onClose={() => setIsApkOrderModalOpen(false)}
        defaultAcademicYear={selectedYear}
        userEmail={userProfile.email}
        userName={userProfile.fullName}
        onOrderSuccess={(order) => {
          showToast(`Commande APK enregistrée dans Supabase : ${order.pack_selected}`, 'success');
        }}
      />

      {/* Minimal Clean Medical Footer */}
      <footer className="py-5 px-6 border-t border-slate-200/80 bg-white/80 backdrop-blur-sm text-center text-xs text-slate-500 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-600">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Stethoscope className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-slate-800">MedQuest Éducation Médicale</span>
            <span className="text-slate-400">•</span>
            <span>Externat & Concours de Résidanat</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
            <span>24 Cours Officiels de Cardiologie</span>
            <span>•</span>
            <span>720 QCMs & Cas Cliniques</span>
            <span>•</span>
            <span>Programme National d'Externat</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
