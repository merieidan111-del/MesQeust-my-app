import React, { useState, useEffect } from 'react';
import {
  Check,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  XCircle,
  Stethoscope,
  Scissors,
  Volume2,
  VolumeX,
  Clock,
  ArrowLeft,
  LayoutGrid,
  X,
  Target,
  Lightbulb,
  Award,
  CheckSquare,
  HeartPulse,
  Brain,
  Wind,
  Bone,
  HeartHandshake,
  Baby,
  Activity,
  Droplets,
  BookOpen,
  Pill,
  Layers,
} from 'lucide-react';
import { Question, QuestionType, Module, AcademicYear } from '../types/medical';
import { MEDICAL_COURSES } from '../data/mockMedicalData';
import { VectorHeart, VectorBrain, VectorLungs, VectorLiver } from './VectorOrgans';

interface QCMEngineProps {
  questions: Question[];
  modules: Module[];
  selectedYear: AcademicYear;
  initialTypeFilter?: QuestionType | 'all';
  courseName?: string;
  activeModuleName?: string;
  onAwardXp: (amount: number, reason: string) => void;
  onQuestionCompleted: (isCorrect: boolean) => void;
  onExitSession?: () => void;
}

export const QCMEngine: React.FC<QCMEngineProps> = ({
  questions,
  modules,
  selectedYear,
  initialTypeFilter = 'all',
  courseName,
  activeModuleName,
  onAwardXp,
  onQuestionCompleted,
  onExitSession,
}) => {
  const [selectedType, setSelectedType] = useState<QuestionType | 'all'>(initialTypeFilter);
  const [selectedSubdivision, setSelectedSubdivision] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [eliminationToolActive, setEliminationToolActive] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [sessionCompleted, setSessionCompleted] = useState<boolean>(false);

  // Available subdivisions among questions
  const availableSubdivisions = React.useMemo(() => {
    const subs: string[] = [];
    questions.forEach((q) => {
      const crs = MEDICAL_COURSES.find((c) => c.id === q.courseId);
      if (crs?.subdivision && !subs.includes(crs.subdivision)) {
        subs.push(crs.subdivision);
      }
    });
    return subs;
  }, [questions]);

  // Jump-List Drawer state
  const [isJumpListOpen, setIsJumpListOpen] = useState<boolean>(false);
  const [questionResults, setQuestionResults] = useState<Record<string, 'correct' | 'incorrect'>>({});

  // Timer state
  const [timerSeconds, setTimerSeconds] = useState<number>(0);

  // Resolve current module to display context header (Requirement 6)
  const currentModule = React.useMemo(() => {
    if (activeModuleName) {
      const found = modules.find(
        (m) =>
          m.title.toLowerCase() === activeModuleName.toLowerCase() ||
          m.id.toLowerCase() === activeModuleName.toLowerCase()
      );
      if (found) return found;
    }
    const sampleQ = questions[currentIndex] || questions[0];
    if (sampleQ?.module) {
      const found = modules.find(
        (m) =>
          m.id === sampleQ.module ||
          m.title.toLowerCase().includes(sampleQ.module!.toLowerCase()) ||
          sampleQ.module!.toLowerCase().includes(m.title.toLowerCase())
      );
      if (found) return found;
    }
    if (courseName) {
      const foundCourse = MEDICAL_COURSES.find(
        (c) => c.title.toLowerCase() === courseName.toLowerCase() || c.id === courseName
      );
      if (foundCourse) {
        const found = modules.find((m) => m.id === foundCourse.moduleId);
        if (found) return found;
      }
    }
    // Default fallback based on selectedYear
    const yearMods = modules.filter((m) => m.academicYear === selectedYear);
    return yearMods[0] || modules[0];
  }, [activeModuleName, questions, currentIndex, courseName, modules, selectedYear]);

  const getModuleIcon = (mod: Module | undefined) => {
    const id = mod?.id || '';
    if (id === 'mod-cardio') return <VectorHeart size={44} />;
    if (id === 'mod-neuro' || id === 'mod-5-psy') return <VectorBrain size={44} />;
    if (id === 'mod-pneumo') return <VectorLungs size={44} />;
    if (id.includes('gastro')) return <VectorLiver size={44} />;
    if (id === 'mod-5-otr') return <Bone className="w-7 h-7 text-amber-500" />;
    if (id === 'mod-5-gyn') return <HeartHandshake className="w-7 h-7 text-rose-500" />;
    if (id === 'mod-5-ped') return <Baby className="w-7 h-7 text-sky-500" />;
    if (id === 'mod-5-endo' || id === 'mod-hemato') return <Activity className="w-7 h-7 text-teal-500" />;
    if (id === 'mod-5-uro-nephro') return <Droplets className="w-7 h-7 text-cyan-500" />;
    if (id === 'mod-semio3') return <BookOpen className="w-7 h-7 text-emerald-500" />;
    if (id === 'mod-pharma3') return <Pill className="w-7 h-7 text-teal-500" />;
    return <VectorHeart size={44} />;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Sync initial type filter if provided
  useEffect(() => {
    if (initialTypeFilter) {
      setSelectedType(initialTypeFilter);
      setCurrentIndex(0);
      setHasSubmitted(false);
      setSelectedOptions([]);
      setEliminatedOptions([]);
    }
  }, [initialTypeFilter]);

  const filteredQuestions = React.useMemo(() => {
    let list = questions;
    if (selectedSubdivision !== 'all') {
      const courseIds = MEDICAL_COURSES.filter((c) => c.subdivision === selectedSubdivision).map((c) => c.id);
      list = list.filter((q) => courseIds.includes(q.courseId));
    }
    if (selectedType === 'CasClinique' || (selectedType as any) === 'Cas Clinique') {
      return list.filter((q) => q.type === 'CasClinique' || q.type === 'Cas Clinique');
    }
    if (selectedType !== 'all') {
      return list.filter((q) => q.type === selectedType);
    }
    return list;
  }, [questions, selectedType, selectedSubdivision]);

  // Handle case where filteredQuestions is empty or changes size
  useEffect(() => {
    if (currentIndex >= filteredQuestions.length && filteredQuestions.length > 0) {
      setCurrentIndex(0);
    }
  }, [filteredQuestions.length, currentIndex]);

  const currentQ = filteredQuestions[currentIndex] || questions[0];

  const currentCourse = React.useMemo(() => {
    if (!currentQ?.courseId) return null;
    return MEDICAL_COURSES.find((c) => c.id === currentQ.courseId);
  }, [currentQ?.courseId]);

  const playFeedbackSound = (isCorrect: boolean) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (isCorrect) {
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.35);
      } else {
        osc.frequency.setValueAtTime(220, audioCtx.currentTime); // A3
        osc.frequency.setValueAtTime(164.81, audioCtx.currentTime + 0.12); // E3
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
      }
    } catch (e) {
      // AudioContext not allowed or disabled
    }
  };

  const toggleOption = (idx: number) => {
    if (hasSubmitted) return;

    if (eliminationToolActive) {
      if (eliminatedOptions.includes(idx)) {
        setEliminatedOptions(eliminatedOptions.filter((i) => i !== idx));
      } else {
        setEliminatedOptions([...eliminatedOptions, idx]);
        setSelectedOptions(selectedOptions.filter((i) => i !== idx));
      }
      return;
    }

    if (eliminatedOptions.includes(idx)) return;

    const isMultiChoice = (currentQ?.correctAnswers || []).length > 1;

    if (isMultiChoice) {
      if (selectedOptions.includes(idx)) {
        setSelectedOptions(selectedOptions.filter((i) => i !== idx));
      } else {
        setSelectedOptions([...selectedOptions, idx]);
      }
    } else {
      setSelectedOptions([idx]);
    }
  };

  const handleValidate = () => {
    if (selectedOptions.length === 0 || !currentQ) return;
    setHasSubmitted(true);

    const sortedSelected = [...selectedOptions].sort();
    const sortedCorrect = [...(currentQ.correctAnswers || [])].sort();

    const isAllCorrect =
      sortedSelected.length === sortedCorrect.length &&
      sortedSelected.every((val, index) => val === sortedCorrect[index]);

    playFeedbackSound(isAllCorrect);

    // Save result for the selector tracking
    setQuestionResults((prev) => ({
      ...prev,
      [currentQ.id]: isAllCorrect ? 'correct' : 'incorrect',
    }));

    if (isAllCorrect) {
      const xpEarned = currentQ.type === 'CasClinique' ? 30 : 20;
      onAwardXp(xpEarned, `Réponse exacte : ${currentQ.type} n°${currentQ.questionNumber}`);
      onQuestionCompleted(true);
    } else {
      onQuestionCompleted(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptions([]);
      setEliminatedOptions([]);
      setHasSubmitted(false);
    } else {
      setSessionCompleted(true);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    if (index >= 0 && index < filteredQuestions.length) {
      setCurrentIndex(index);
      setSelectedOptions([]);
      setEliminatedOptions([]);
      setHasSubmitted(false);
      setIsJumpListOpen(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptions([]);
    setEliminatedOptions([]);
    setHasSubmitted(false);
    setSessionCompleted(false);
    setTimerSeconds(0);
  };

  const toggleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((bId) => bId !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  // Completion view with Studious Mascot
  if (sessionCompleted) {
    const correctCount = Object.values(questionResults).filter((r) => r === 'correct').length;
    const percent = Math.round((correctCount / (filteredQuestions.length || 1)) * 100);

    return (
      <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm animate-in zoom-in-95 duration-300">
        <div className="w-24 h-24 rounded-3xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto mb-6 shadow-xs p-2">
          <VectorHeart size={84} />
        </div>

        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
          Session Validée
        </span>

        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 tracking-tight">
          Session Complétée avec Succès
        </h2>

        <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
          Vous venez de terminer la série d'entraînement pour{' '}
          <strong className="text-slate-900">{courseName || selectedYear}</strong>.
        </p>

        {/* Score Ring Summary */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200/70 max-w-sm mx-auto flex items-center justify-around">
          <div>
            <div className="text-3xl font-black text-slate-900">
              {correctCount} / {filteredQuestions.length}
            </div>
            <div className="text-xs font-bold text-slate-600 mt-0.5">Bonnes réponses</div>
          </div>
          <div className="w-px h-12 bg-slate-200" />
          <div>
            <div className="text-3xl font-black text-indigo-600">{percent}%</div>
            <div className="text-xs font-bold text-slate-600 mt-0.5">Précision</div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-extrabold text-sm hover:bg-indigo-700 shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Recommencer cette série</span>
          </button>

          {onExitSession && (
            <button
              onClick={onExitSession}
              className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-extrabold text-sm hover:bg-slate-200 border border-slate-200 transition-all cursor-pointer"
            >
              Retourner au cours
            </button>
          )}
        </div>
      </div>
    );
  }

  if (!currentQ) {
    return (
      <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-sm">
        <VectorBrain size={64} className="mx-auto mb-4" />
        <p className="text-slate-700 font-bold">Aucune question disponible avec ce filtre.</p>
        <button
          onClick={() => setSelectedType('all')}
          className="mt-4 px-5 py-2.5 bg-indigo-600 text-white font-extrabold rounded-full text-xs hover:bg-indigo-700 shadow-sm cursor-pointer"
        >
          Afficher toutes les questions
        </button>
      </div>
    );
  }

  const isBookmarked = bookmarkedIds.includes(currentQ.id);
  const isMulti = (currentQ.correctAnswers || []).length > 1;

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {/* 1. PROMINENT MODULE CONTEXT HEADER (Requirement 6) */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center p-2.5 shadow-2xs shrink-0">
            {getModuleIcon(currentModule)}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2.5 py-0.5 rounded-full">
                {currentModule?.academicYear || selectedYear}
              </span>
              <span className="text-[10px] font-bold text-slate-300">•</span>
              <span className="text-[11px] font-extrabold text-slate-600">
                Module d'Externat
              </span>
              {courseName && (
                <>
                  <span className="text-[10px] font-bold text-slate-300">•</span>
                  <span className="text-[10px] font-black text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md truncate max-w-[200px]">
                    {courseName}
                  </span>
                </>
              )}
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1 truncate">
              {currentModule?.title || 'Cardiologie & Vasculaire'}
            </h1>
            <p className="text-xs text-slate-500 font-medium truncate max-w-xl mt-0.5 hidden sm:block">
              {currentModule?.description || "Banque officielle de questions et cas cliniques d'externat"}
            </p>
          </div>
        </div>

        {/* Right side of prominent header: Questions count & Exit action */}
        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
          <div className="px-3.5 py-1.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
            <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Banque</span>
            <span className="text-xs sm:text-sm font-black text-slate-800">{filteredQuestions.length} QCMs</span>
          </div>
          {onExitSession && (
            <button
              onClick={onExitSession}
              className="px-3.5 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-extrabold transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Quitter la série et revenir au module"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quitter</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Top Header: Navigation & Action Tools */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow-xs">
        {/* Course Info & Type Filter */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none flex-wrap">
          <div className="flex items-center bg-slate-100 p-0.5 rounded-full">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedType === 'all'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tous ({questions.length})
            </button>
            <button
              onClick={() => setSelectedType('QCM')}
              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedType === 'QCM'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              QCMs
            </button>
            <button
              onClick={() => setSelectedType('CasClinique')}
              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedType === 'CasClinique'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cas Cliniques
            </button>
          </div>

          {/* Subdivision Filter Pills */}
          {availableSubdivisions.length > 1 && (
            <div className="flex items-center bg-slate-100 p-0.5 rounded-full">
              <button
                onClick={() => {
                  setSelectedSubdivision('all');
                  setCurrentIndex(0);
                }}
                className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                  selectedSubdivision === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tout le module
              </button>
              {availableSubdivisions.map((sub) => {
                const isSelected = selectedSubdivision === sub;
                const isHem = sub === 'Hématologie';
                return (
                  <button
                    key={sub}
                    onClick={() => {
                      setSelectedSubdivision(sub);
                      setCurrentIndex(0);
                    }}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? isHem
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-purple-600 text-white shadow-xs'
                        : isHem
                        ? 'text-rose-700 hover:bg-rose-50'
                        : 'text-purple-700 hover:bg-purple-50'
                    }`}
                  >
                    {isHem ? '🩸 Hématologie' : '🎗️ Oncologie'}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Action icons: Questions Drawer button, Elimination, Sound, Timer */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          {/* Interactive Questions Selector Drawer Trigger */}
          <button
            onClick={() => setIsJumpListOpen(true)}
            className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
            title="Ouvrir le sélecteur de questions"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-indigo-600" />
            <span>Questions ({filteredQuestions.length})</span>
          </button>

          {/* Elimination Scalpel Tool */}
          <button
            onClick={() => setEliminationToolActive(!eliminationToolActive)}
            className={`p-2 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
              eliminationToolActive
                ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-xs'
                : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
            }`}
            title="Activer le mode élimination d'options"
          >
            <Scissors className="w-3.5 h-3.5" />
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 cursor-pointer"
            title={soundEnabled ? 'Désactiver le son' : 'Activer le son'}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Timer Display */}
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-700">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{formatTimer(timerSeconds)}</span>
          </div>
        </div>
      </div>

      {/* QUESTIONS SELECTOR MODAL DRAWER */}
      {isJumpListOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-indigo-600" />
                <h3 className="font-black text-base text-slate-900">
                  Sélecteur de Questions ({filteredQuestions.length})
                </h3>
              </div>
              <button
                onClick={() => setIsJumpListOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Questions Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-2 max-h-72 overflow-y-auto pr-1">
              {filteredQuestions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const status = questionResults[q.id];
                let bgBtn = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

                if (isCurrent) {
                  bgBtn = 'bg-indigo-600 text-white font-black ring-2 ring-indigo-300';
                } else if (status === 'correct') {
                  bgBtn = 'bg-emerald-100 border-emerald-300 text-emerald-800 font-bold';
                } else if (status === 'incorrect') {
                  bgBtn = 'bg-rose-100 border-rose-300 text-rose-800 font-bold';
                }

                return (
                  <button
                    key={q.id || idx}
                    onClick={() => handleJumpToQuestion(idx)}
                    className={`h-11 rounded-2xl border text-xs flex flex-col items-center justify-center transition-all cursor-pointer ${bgBtn}`}
                  >
                    <span>{idx + 1}</span>
                    <span className="text-[8px] opacity-75">{q.type === 'CasClinique' ? 'Cas' : 'QCM'}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Question Card (Pure White with Soft Shadows) */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-6">
        {/* Top Progress & Badges */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-50 border border-indigo-200 text-indigo-700">
              Question {currentIndex + 1} sur {filteredQuestions.length}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 flex items-center gap-1.5">
              {currentQ.type === 'CasClinique' || currentQ.type === 'Cas Clinique' ? (
                <>
                  <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
                  <span>Cas Clinique</span>
                </>
              ) : (
                <>
                  <CheckSquare className="w-3.5 h-3.5 text-indigo-600" />
                  <span>QCM</span>
                </>
              )}
            </span>
            {isMulti && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-100 text-purple-700 border border-purple-200">
                Choix multiple
              </span>
            )}
            {currentCourse?.subdivision && (
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${
                  currentCourse.subdivision === 'Oncologie'
                    ? 'bg-purple-50 text-purple-700 border-purple-200'
                    : 'bg-rose-50 text-rose-700 border-rose-200'
                }`}
              >
                {currentCourse.subdivision === 'Oncologie' ? '🎗️ Oncologie' : '🩸 Hématologie'}
              </span>
            )}
            {currentCourse && (
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 truncate max-w-xs">
                {currentCourse.title}
              </span>
            )}
          </div>

          <button
            onClick={() => toggleBookmark(currentQ.id)}
            className={`p-2 rounded-full border transition-colors cursor-pointer ${
              isBookmarked
                ? 'bg-amber-100 border-amber-300 text-amber-700'
                : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
            }`}
            title="Ajouter aux favoris de révision"
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>

        {/* Clinical Vignette (Soft Pastel Box) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100/80 relative">
          <div className="flex items-center gap-2 text-indigo-700 text-xs font-extrabold mb-2">
            <Stethoscope className="w-4 h-4" />
            <span>{currentQ.type === 'CasClinique' || currentQ.type === 'Cas Clinique' ? 'Dossier Clinique Progressif :' : 'Énoncé Médical :'}</span>
          </div>
          <p className="text-slate-900 text-base sm:text-lg leading-relaxed font-semibold">
            {currentQ.questionText || currentQ.content}
          </p>
        </div>

        {/* Options List (Tactile clean cards inspired by Lingua) */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = selectedOptions.includes(idx);
            const isEliminated = eliminatedOptions.includes(idx);
            const isCorrectAnswer = (currentQ.correctAnswers || []).includes(idx);

            let cardStyle =
              'border-slate-200 hover:border-indigo-300 bg-white hover:bg-indigo-50/20 text-slate-800 shadow-2xs';
            let circleStyle = 'bg-slate-100 text-slate-600 border-slate-200';

            if (isSelected && !hasSubmitted) {
              cardStyle = 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold shadow-sm ring-2 ring-indigo-200/60';
              circleStyle = 'bg-indigo-600 text-white font-extrabold border-indigo-600';
            }

            if (hasSubmitted) {
              if (isCorrectAnswer) {
                cardStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-200 font-bold';
                circleStyle = 'bg-emerald-500 text-white font-extrabold border-emerald-500';
              } else if (isSelected && !isCorrectAnswer) {
                cardStyle = 'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-200';
                circleStyle = 'bg-rose-500 text-white font-extrabold border-rose-500';
              } else {
                cardStyle = 'border-slate-100 bg-slate-50/50 text-slate-400 opacity-60';
              }
            } else if (isEliminated) {
              cardStyle = 'border-slate-200 bg-slate-50 text-slate-400 line-through opacity-50';
              circleStyle = 'bg-slate-200 text-slate-500';
            }

            return (
              <div
                key={idx}
                onClick={() => toggleOption(idx)}
                className={`flex items-start gap-3.5 p-4 rounded-2xl border-2 transition-all cursor-pointer select-none ${cardStyle}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-extrabold border transition-colors mt-0.5 ${circleStyle}`}
                >
                  {hasSubmitted && isCorrectAnswer ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : hasSubmitted && isSelected && !isCorrectAnswer ? (
                    <XCircle className="w-4 h-4" />
                  ) : (
                    letter
                  )}
                </div>

                <div className="flex-1 text-sm sm:text-base leading-snug pt-0.5">
                  {option}
                </div>

                {isEliminated && !hasSubmitted && (
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full shrink-0">
                    Biffé
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Explanation & Clinical Pearl (revealed after submission) */}
        {hasSubmitted && (
          <div className="space-y-3 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Feedback Alert Banner */}
            {selectedOptions.length === (currentQ.correctAnswers || []).length &&
            selectedOptions.every((v) => (currentQ.correctAnswers || []).includes(v)) ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-sm text-emerald-900">Bonne réponse !</h4>
                  <p className="text-xs text-emerald-700 font-medium">Excellente démarche clinique et rigueur diagnostique.</p>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-sm text-rose-900">Réponse incorrecte</h4>
                  <p className="text-xs text-rose-700 font-medium">Lisez l'explication et retenez la perle clinique ci-dessous.</p>
                </div>
              </div>
            )}

            {/* Explanation text */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-indigo-600" />
                <span>Justification & Recommandations :</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {currentQ.explanation}
              </p>
            </div>

            {/* Clinical Pearl Card (Soft Pastel Amber) */}
            {currentQ.clinicalPearl && (
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFBEB] border border-amber-200 flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-extrabold text-xs text-amber-900 uppercase tracking-wider">
                    Perle Clinique à retenir :
                  </h5>
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-semibold mt-0.5">
                    {currentQ.clinicalPearl}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Lingua-style Bottom Action Bar */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 font-medium text-center sm:text-left">
            {eliminationToolActive ? (
              <span className="text-amber-700 font-bold flex items-center gap-1">
                <Scissors className="w-3.5 h-3.5" />
                Mode élimination actif : cliquez sur une proposition pour la barrer
              </span>
            ) : (
              <span>
                {isMulti
                  ? 'Plusieurs propositions peuvent être exactes'
                  : 'Sélectionnez la proposition thérapeutique ou diagnostique optimale'}
              </span>
            )}
          </div>

          <div>
            {!hasSubmitted ? (
              <button
                onClick={handleValidate}
                disabled={selectedOptions.length === 0}
                className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-black text-sm transition-all shadow-md cursor-pointer ${
                  selectedOptions.length === 0
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/25 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                Vérifier ma réponse
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow-md shadow-indigo-500/25 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>
                  {currentIndex < filteredQuestions.length - 1 ? 'Question suivante' : 'Terminer la session'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
