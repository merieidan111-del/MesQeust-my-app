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
  const [currentTab, setCurrentTab] = useState<
    'home' | 'directory' | 'qcm' | 'gamification' | 'drive' | 'ai' | 'architecture'
  >('home');
  const [selectedYear, setSelectedYear] = useState<AcademicYear>('4ème Année');
  const [isMobilePreview, setIsMobilePreview] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isYearsSidebarOpenMobile, setIsYearsSidebarOpenMobile] = useState<boolean>(false);
  const [isApkOrderModalOpen, setIsApkOrderModalOpen] = useState<boolean>(false);

  // Drill-down navigation state
  const [activeDrillModule, setActiveDrillModule] = useState<Module | null>(null);
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [practiceModeFilter, setPracticeModeFilter] = useState<QuestionType | 'all'>('all');

  // Authentication State with Google Workspace Drive
  const [isGoogleConnected, setIsGoogleConnected] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [googleUserEmail, setGoogleUserEmail] = useState<string>('meriemlaidani117@gmail.com');

  // Gamification User Profile State (with username & customizable exam countdown)
  const [userProfile, setUserProfile] = useState<UserProfile>({
    userId: 'user-extern-01',
    username: 'meriem_laidani',
    fullName: 'Meriem Laidani',
    email: 'meriemlaidani117@gmail.com',
    academicYear: '4ème Année',
    totalXp: 2890,
    level: 3,
    title: 'Interne Prometteuse',
    streakCount: 14,
    streakFreezesCount: 2,
    lastActiveDate: new Date().toISOString().split('T')[0],
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&auto=format&fit=crop&q=80',
    questionsSolvedToday: 8,
    dailyGoal: 10,
    customExamDate: new Date(Date.now() + 18 * 86400000).toISOString(),
    examTitle: 'Examen Clinique de Cardiologie',
    examModule: 'Cardiologie',
  });

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

  // Listen to Firebase Auth state on mount
  useEffect(() => {
    const unsubscribe = initAuth((user) => {
      if (user) {
        setIsGoogleConnected(true);
        if (user.email) setGoogleUserEmail(user.email);
        setUserProfile((prev) => ({
          ...prev,
          fullName: user.displayName || prev.fullName,
          email: user.email || prev.email,
        }));
      } else {
        setIsGoogleConnected(false);
      }
    });
    return () => unsubscribe();
  }, []);

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

  // Gamification Actions
  const handleAwardXp = (amount: number, reason: string) => {
    setUserProfile((prev) => {
      const newXp = prev.totalXp + amount;
      const newLevel = Math.floor(newXp / 1000) + 1;
      let newTitle = prev.title;
      if (newLevel >= 5) newTitle = 'Major de Promotion';
      else if (newLevel >= 4) newTitle = 'Chef de Clinique Adjoint';
      else if (newLevel >= 3) newTitle = 'Interne Prometteuse';
      else if (newLevel >= 2) newTitle = 'Externe Confirmée';

      return {
        ...prev,
        totalXp: newXp,
        level: newLevel,
        title: newTitle,
        questionsSolvedToday: prev.questionsSolvedToday + 1,
      };
    });
    showToast(`+${amount} XP : ${reason}`, 'xp');
  };

  const handleSpendXp = (amount: number, itemName: string): boolean => {
    if (userProfile.totalXp < amount) {
      showToast(`XP insuffisant pour débloquer : ${itemName}`, 'info');
      return false;
    }
    setUserProfile((prev) => ({
      ...prev,
      totalXp: prev.totalXp - amount,
    }));
    showToast(`Débloqué avec succès : ${itemName} (-${amount} XP)`, 'success');
    return true;
  };

  const handleBuyFreeze = () => {
    setUserProfile((prev) => ({
      ...prev,
      streakFreezesCount: prev.streakFreezesCount + 1,
    }));
    showToast('Gel de Série ajouté à votre inventaire avec succès', 'success');
  };

  const handleQuestionCompleted = (_isCorrect: boolean) => {
    // Session tracking callback
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
    setPracticeModeFilter(mode);
    setActiveDrillModule(null);
    setCurrentTab('qcm');
    showToast(`Lancement de l'entraînement : ${course.title}`, 'info');
  };

  const handleUpdateExamCountdown = (newDateIso: string, newTitle: string, newModule: string) => {
    setUserProfile((prev) => ({
      ...prev,
      customExamDate: newDateIso,
      examTitle: newTitle,
      examModule: newModule,
    }));
    showToast('Compte à rebours d\'examen mis à jour !', 'success');
  };

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
                key={`${activeCourse?.id || 'all'}-${practiceModeFilter}`}
                questions={
                  activeCourse
                    ? (() => {
                        const matched = questions.filter((q) => q.courseId === activeCourse.id);
                        return matched.length > 0 ? matched : questions;
                      })()
                    : questions
                }
                modules={MEDICAL_MODULES}
                selectedYear={selectedYear}
                initialTypeFilter={practiceModeFilter}
                courseName={activeCourse?.title}
                onAwardXp={handleAwardXp}
                onQuestionCompleted={handleQuestionCompleted}
                onExitSession={() => {
                  if (activeDrillModule) {
                    setActiveCourse(null);
                    setCurrentTab('directory');
                  } else {
                    setActiveCourse(null);
                    setCurrentTab('home');
                  }
                }}
              />
            ) : activeDrillModule ? (
              /* If a module is being drilled down into, show CourseHub */
              <CourseHub
                module={activeDrillModule}
                onBack={() => setActiveDrillModule(null)}
                onLaunchPracticeMode={handleLaunchPracticeMode}
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
        onUpdateProfile={(updated) => {
          setUserProfile((prev) => ({ ...prev, ...updated }));
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
            <span>Mascottes Vectorielles d'Étude</span>
          </div>
        </div>
      </footer>
      {/* Mobile Fixed Bottom Navigation Bar (Part 2: 5 items, clean white, purple active, muted gray inactive) */}
      <FixedBottomNavBar
        activeTab={getActiveBottomNavTab()}
        onTabChange={handleBottomTabChange}
        isMobilePreview={false}
      />
    </div>
  );
}
