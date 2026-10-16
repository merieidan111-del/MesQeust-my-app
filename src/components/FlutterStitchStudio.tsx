import React, { useState } from 'react';
import {
  Code2,
  Copy,
  Check,
  Download,
  Smartphone,
  Eye,
  Layers,
  Sparkles,
  Flame,
  Award,
  Zap,
  TrendingUp,
  Brain,
  Stethoscope,
  ChevronRight,
  Play,
  RotateCw,
  FolderTree,
  FileCode,
  FileCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Info,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  ExternalLink,
  Heart,
  Calendar,
  Plus,
  BookOpenCheck,
  BarChart3,
  User,
} from 'lucide-react';
import { ModuleExactLogo } from './ModuleExactLogos';
import { MeddiyLogoIcon } from './MeddiyLogo';
import {
  ALL_FLUTTER_FILES,
  FlutterCodeFile,
} from '../data/flutterStitchConversionData';

interface FlutterStitchStudioProps {
  onBackToApp?: () => void;
}

export const FlutterStitchStudio: React.FC<FlutterStitchStudioProps> = ({
  onBackToApp,
}) => {
  // Main view mode
  const [viewMode, setViewMode] = useState<'preview' | 'code' | 'split'>('split');
  const [selectedFileId, setSelectedFileId] = useState<string>('qcm_card');
  const [copiedFileId, setCopiedFileId] = useState<string | null>(null);

  // Interactive Live Simulator State
  const [currentXp, setCurrentXp] = useState<number>(340);
  const [streakDays, setStreakDays] = useState<number>(18);
  const [activeChartRange, setActiveChartRange] = useState<'7D' | '30D' | 'All'>('30D');
  const [activeBottomTab, setActiveBottomTab] = useState<number>(0);

  // Missing components modal states
  const [showQcmCard, setShowQcmCard] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [showSmartDeck, setShowSmartDeck] = useState<boolean>(false);
  const [isDeckFlipped, setIsDeckFlipped] = useState<boolean>(false);
  const [showDiagnosticModal, setShowDiagnosticModal] = useState<boolean>(false);
  const [showAiConsultantModal, setShowAiConsultantModal] = useState<boolean>(false);
  const [aiChatMessages, setAiChatMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    {
      sender: 'ai',
      text: 'Bonjour Dr. Extern. Posez-moi vos questions sur les démarches diagnostiques, diagnostics différentiels et pièges des QCMs cliniques (ECN / USMLE).',
    },
  ]);
  const [aiInputText, setAiInputText] = useState<string>('');

  const currentFile = ALL_FLUTTER_FILES.find((f) => f.id === selectedFileId) || ALL_FLUTTER_FILES[0];

  const handleCopyCode = (file: FlutterCodeFile) => {
    navigator.clipboard.writeText(file.code);
    setCopiedFileId(file.id);
    setTimeout(() => {
      setCopiedFileId(null);
    }, 2500);
  };

  const handleDownloadFile = (file: FlutterCodeFile) => {
    const blob = new Blob([file.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAllBundle = () => {
    // Generate combined bundle markdown / dart pack
    const bundleHeader = `// ==============================================================================
// MEDQUEST - FLUTTER ARCHITECTURE CODE PACK
// Converted from Google Stitch Web UI Layout
// Includes all modular sub-components + newly designed missing QCM & Deck widgets
// ==============================================================================\n\n`;
    const fullContent = ALL_FLUTTER_FILES.map(
      (f) => `// >>> FILE: ${f.path} (${f.title})\n// Widget Type: ${f.widgetType}\n\n${f.code}\n\n`
    ).join('// ==============================================================================\n');

    const blob = new Blob([bundleHeader + fullContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'medquest_flutter_complete_architecture.dart';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSendAiMessage = () => {
    if (!aiInputText.trim()) return;
    const userMsg = aiInputText.trim();
    setAiChatMessages((prev) => [
      ...prev,
      { sender: 'user', text: userMsg },
      {
        sender: 'ai',
        text: `💡 Synthèse Clinique : Concernant "${userMsg}", la clé ECN/USMLE réside dans la dissociation clinique. Dans l'AVC de l'artère cérébrale antérieure (ACA), le déficit crural prédomine sur le membre supérieur, souvent associé à une apathie et une incontinence.`,
      },
    ]);
    setAiInputText('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] text-[#0B1C30] flex flex-col pb-16">
      {/* Studio Header Banner */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs px-4 sm:px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-0.5 flex items-center justify-center shadow-sm">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
                  Google Stitch ➔ Flutter Widget Converter
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/70">
                  Dart Null-Safe
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70 hidden md:inline">
                  Soft Neumorphic
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Conversion modulaire complète + design interactif des composants manquants (QCM Card, Smart Deck, Diagnostics)
              </p>
            </div>
          </div>

          {/* View Mode Controls & Download All */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
            <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold shadow-inner">
              <button
                onClick={() => setViewMode('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'preview'
                    ? 'bg-white text-indigo-600 shadow-xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Aperçu mobile interactif"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Simulation Mobile</span>
              </button>
              <button
                onClick={() => setViewMode('split')}
                className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'split'
                    ? 'bg-white text-indigo-600 shadow-xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Vue côte à côte"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Côte-à-Côte</span>
              </button>
              <button
                onClick={() => setViewMode('code')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'code'
                    ? 'bg-white text-indigo-600 shadow-xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Explorateur de code Flutter"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Code Dart ({ALL_FLUTTER_FILES.length})</span>
              </button>
            </div>

            <button
              onClick={handleDownloadAllBundle}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all active:scale-95"
              title="Télécharger l'ensemble des 15 fichiers Dart"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exporter Tout (.dart)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 w-full flex-1">
        {/* Quick Highlights Info Strip */}
        <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-white to-emerald-50/80 border border-indigo-100/80 shadow-xs flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-800">
              Conformité Google Stitch :
            </span>
            <span className="text-xs text-slate-600">
              Palette hexadécimale exacte, ombres douces neumorphiques, typographie DM Sans, et découpage en 15 widgets autonomes.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-100/80 text-amber-900 border border-amber-200">
              ✨ 4 Composants Ajoutés Conçus pour les Manques
            </span>
            <button
              onClick={() => {
                setSelectedFileId('qcm_card');
                setViewMode('split');
              }}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline underline-offset-2"
            >
              Voir QcmCard.dart
            </button>
          </div>
        </div>

        {/* Content Layout Based on viewMode */}
        <div
          className={`grid gap-6 ${
            viewMode === 'split'
              ? 'grid-cols-1 lg:grid-cols-12'
              : 'grid-cols-1'
          }`}
        >
          {/* LEFT: Interactive Mobile Simulator (Stitch Layout + Missing Sub-components) */}
          {(viewMode === 'preview' || viewMode === 'split') && (
            <div
              className={`flex flex-col items-center ${
                viewMode === 'split' ? 'lg:col-span-5' : 'max-w-md mx-auto w-full'
              }`}
            >
              <div className="w-full flex items-center justify-between mb-2 px-1">
                <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                  Rendu Mobile Flutter Interactif
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  iPhone 16 Pro • 430px
                </span>
              </div>

              {/* Mobile Phone Mockup Container */}
              <div className="w-full max-w-[420px] rounded-[48px] bg-slate-900 p-3 shadow-[0_25px_60px_-15px_rgba(79,70,229,0.2),0_12px_24px_-8px_rgba(15,23,42,0.1)] border-[8px] border-slate-800 ring-1 ring-slate-300 relative overflow-hidden">
                {/* Dynamic Island & Status Bar */}
                <div className="bg-white px-6 pt-3 pb-2 flex items-center justify-between text-slate-800 text-xs select-none rounded-t-[36px] border-b border-slate-100">
                  <span className="font-extrabold text-[12px] tracking-tight">09:41</span>
                  <div className="w-20 h-4 bg-slate-950 rounded-full flex items-center justify-end px-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1 opacity-70 text-[10px] font-bold">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Mobile Viewport Screen */}
                <div
                  className="bg-[#F8FAFF] min-h-[720px] max-h-[760px] overflow-y-auto scrollbar-none flex flex-col relative"
                  style={{
                    background:
                      'radial-gradient(circle at 15% 10%, rgba(99, 102, 241, 0.05) 0%, transparent 40%), radial-gradient(circle at 85% 60%, rgba(16, 185, 129, 0.04) 0%, transparent 40%), rgb(248, 250, 255)',
                  }}
                >
                  {/* Flutter Top AppBar */}
                  <div className="sticky top-0 z-20 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
                    <div className="flex items-center gap-2">
                      <MeddiyLogoIcon size={32} showGlow={false} />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-extrabold text-sm text-slate-900 tracking-tight font-meddiy">
                            Meddiy
                          </span>
                          <span className="px-1.5 py-0.2 rounded-full text-white text-[9.5px] font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-2xs">
                            LVL 14
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-semibold">
                          Clinical Dashboard
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Streak Pill */}
                      <button
                        onClick={() => setStreakDays((s) => s + 1)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 border border-amber-200/80 shadow-xs hover:scale-105 active:scale-95 transition-transform"
                        title="Incrémenter la série de révision"
                      >
                        <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
                        <span className="text-xs font-extrabold text-slate-800">
                          {streakDays} Days
                        </span>
                      </button>

                      {/* Profile Avatar */}
                      <div className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 text-xs font-bold">
                        EM
                      </div>
                    </div>
                  </div>

                  {/* Mobile Screen Body Content */}
                  <div className="p-3.5 space-y-3.5 flex-1">
                    {/* SECTION 1: DAILY PROGRESS & XP HERO RIBBON */}
                    <div
                      className="p-3.5 rounded-2xl relative overflow-hidden transition-all duration-200"
                      style={{
                        background: 'rgba(255, 255, 255, 0.88)',
                        backdropFilter: 'blur(14px)',
                        border: '1px solid rgba(255, 255, 255, 0.95)',
                        boxShadow:
                          'rgba(99, 102, 241, 0.08) 0px 10px 30px -10px, rgba(15, 23, 42, 0.04) 0px 2px 6px',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                            <Zap className="w-3.5 h-3.5 fill-emerald-600" />
                          </div>
                          <span className="text-[11px] font-extrabold tracking-wider uppercase text-slate-700">
                            DAILY GOAL
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-emerald-700 text-[10.5px] font-extrabold bg-emerald-50 border border-emerald-200 flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          +50 XP Streak Active
                        </span>
                      </div>

                      <div className="flex items-baseline justify-between mt-2">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl font-black text-slate-900 tracking-tight">
                            {currentXp}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">
                            / 500 XP
                          </span>
                        </div>
                        <span className="text-[11px] font-extrabold text-emerald-700 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-100">
                          {Math.round((currentXp / 500) * 100)}% Complete
                        </span>
                      </div>

                      {/* Neumorphic Inset Progress Track */}
                      <div className="w-full h-2.5 rounded-full bg-[#EEF2F6] overflow-hidden p-0.5 mt-2 shadow-inner">
                        <div
                          className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.35)]"
                          style={{ width: `${Math.min(100, (currentXp / 500) * 100)}%` }}
                        />
                      </div>

                      {/* High Yield Tip */}
                      <div className="mt-2.5 p-2.5 rounded-xl border border-amber-200/60 bg-gradient-to-br from-amber-50/80 to-amber-100/50 flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <p className="text-[11.5px] text-slate-700 leading-snug">
                          <strong className="text-amber-900 font-extrabold">High Yield:</strong>{' '}
                          Anterior Cerebral Artery (ACA) stroke presents with contralateral lower limb sensorimotor deficit exceeding upper extremity weakness.
                        </p>
                      </div>
                    </div>

                    {/* SECTION 2: EXAM TARGET MILESTONE HERO CARD */}
                    <div
                      className="p-3.5 rounded-2xl relative overflow-hidden transition-all duration-200"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(14px)',
                        border: '1px solid rgba(255, 255, 255, 0.95)',
                        boxShadow:
                          'rgba(99, 102, 241, 0.08) 0px 12px 32px -10px, rgba(15, 23, 42, 0.04) 0px 2px 6px',
                      }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700">
                              EXAM TARGET MILESTONE
                            </span>
                          </div>
                          <h2 className="text-sm font-extrabold text-slate-900 mt-0.5">
                            ECN & USMLE Step 2 CK
                          </h2>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-rose-700 text-[11px] font-extrabold bg-rose-50 border border-rose-200/80 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          42 Days Left
                        </span>
                      </div>

                      {/* Circular Progress & Percentile Tracker */}
                      <div className="flex items-center gap-3 my-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        {/* Circular ring */}
                        <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 72 72">
                            <circle
                              cx="36"
                              cy="36"
                              r="28"
                              fill="none"
                              stroke="#E2E8F0"
                              strokeWidth="6"
                            />
                            <circle
                              cx="36"
                              cy="36"
                              r="28"
                              fill="none"
                              stroke="#4F46E5"
                              strokeWidth="6"
                              strokeDasharray="175.9"
                              strokeDashoffset="45.7"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute flex flex-col items-center">
                            <span className="text-xs font-black text-slate-900 leading-none">
                              74%
                            </span>
                            <span className="text-[9px] text-slate-500 font-semibold leading-tight">
                              Covered
                            </span>
                          </div>
                        </div>

                        {/* Percentile Stats */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-slate-600 font-semibold text-[11px]">
                              Percentile Target
                            </span>
                            <span className="font-extrabold text-slate-900 text-[11.5px]">
                              92nd %ile
                            </span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                            <div className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 w-[86%]" />
                          </div>
                          <div className="flex items-center gap-1 mt-1 text-[10.5px] text-slate-600">
                            <TrendingUp className="w-3 h-3 text-emerald-600" />
                            <span>
                              Simulated:{' '}
                              <strong className="text-emerald-700 font-extrabold">86th %ile</strong>{' '}
                              <span className="text-emerald-600">(+4% mo)</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Take Diagnostic Button */}
                      <button
                        onClick={() => setShowDiagnosticModal(true)}
                        className="w-full py-2.5 px-3 rounded-xl text-white text-xs font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-[0_4px_14px_rgba(79,70,229,0.35)] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Take Diagnostic Simulation</span>
                      </button>
                    </div>

                    {/* SECTION 2.5: CLINICAL MASTERY & RETENTION CURVE CARD */}
                    <div
                      className="p-3.5 rounded-2xl relative overflow-hidden transition-all duration-200"
                      style={{
                        background: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.95)',
                        boxShadow:
                          'rgba(99, 102, 241, 0.08) 0px 12px 32px -10px, rgba(15, 23, 42, 0.04) 0px 2px 8px',
                      }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700">
                              PREDICTIVE ANALYTICS
                            </span>
                          </div>
                          <h3 className="text-xs font-extrabold text-slate-900 mt-0.5">
                            Mastery Trajectory & Retention
                          </h3>
                        </div>

                        {/* Range tabs */}
                        <div className="flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200/80">
                          {(['7D', '30D', 'All'] as const).map((range) => (
                            <button
                              key={range}
                              onClick={() => setActiveChartRange(range)}
                              className={`px-2 py-0.5 rounded text-[10px] font-extrabold transition-all ${
                                activeChartRange === range
                                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-2xs'
                                  : 'text-slate-500 hover:text-slate-800'
                              }`}
                            >
                              {range}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Vector SVG Curve */}
                      <div className="mt-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center justify-between text-[9.5px] px-1 mb-1">
                          <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1 text-slate-600 font-semibold">
                              <span className="w-2 h-1 rounded-full bg-indigo-600 inline-block" />
                              Simulated Score
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 font-semibold">
                              <span className="w-2 h-0.5 border-t border-dashed border-emerald-500 inline-block" />
                              Target (85%)
                            </span>
                          </div>
                          <span className="text-emerald-700 font-extrabold bg-emerald-50 border border-emerald-200 px-1 py-0.2 rounded text-[9px]">
                            +1.4% Target Delta
                          </span>
                        </div>

                        {/* SVG */}
                        <svg viewBox="0 0 380 130" className="w-full h-auto">
                          <defs>
                            <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.28" />
                              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>

                          {/* Horizontal Grid */}
                          <line x1="30" y1="20" x2="365" y2="20" stroke="#E2E8F0" strokeDasharray="3 3" />
                          <line x1="30" y1="55" x2="365" y2="55" stroke="#E2E8F0" strokeDasharray="3 3" />
                          <line x1="30" y1="90" x2="365" y2="90" stroke="#E2E8F0" strokeDasharray="3 3" />

                          <text x="24" y="24" fontSize="8" fill="#94A3B8" textAnchor="end" fontWeight="bold">100%</text>
                          <text x="24" y="59" fontSize="8" fill="#94A3B8" textAnchor="end" fontWeight="bold">80%</text>
                          <text x="24" y="94" fontSize="8" fill="#94A3B8" textAnchor="end" fontWeight="bold">60%</text>

                          {/* 85% Guide */}
                          <line x1="30" y1="46" x2="365" y2="46" stroke="#10B981" strokeWidth="1.2" strokeDasharray="4 3" />

                          {/* Primary Trajectory Area */}
                          <path
                            d="M 35 90 C 85 85, 130 72, 180 62 C 240 50, 290 38, 360 32 L 360 110 L 35 110 Z"
                            fill="url(#curveGradient)"
                          />
                          {/* Line */}
                          <path
                            d="M 35 90 C 85 85, 130 72, 180 62 C 240 50, 290 38, 360 32"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />

                          {/* Markers */}
                          <circle cx="35" cy="90" r="3" fill="#fff" stroke="#4F46E5" strokeWidth="2" />
                          <circle cx="180" cy="62" r="3" fill="#fff" stroke="#4F46E5" strokeWidth="2" />
                          <circle cx="360" cy="32" r="4.5" fill="#4F46E5" stroke="#fff" strokeWidth="2" />

                          {/* Floating Tooltip */}
                          <rect x="295" y="8" width="68" height="18" rx="5" fill="#1E1B4B" />
                          <text x="329" y="20.5" fontSize="8.5" fill="#fff" fontWeight="bold" textAnchor="middle">
                            86.4% Today
                          </text>

                          {/* X labels */}
                          <text x="35" y="122" fontSize="8" fill="#64748B" textAnchor="middle">Oct 01</text>
                          <text x="180" y="122" fontSize="8" fill="#64748B" textAnchor="middle">Oct 15</text>
                          <text x="360" y="122" fontSize="8" fill="#4F46E5" fontWeight="bold" textAnchor="middle">Today</text>
                        </svg>
                      </div>

                      {/* Micro metrics 3-col */}
                      <div className="grid grid-cols-3 gap-1.5 mt-2.5">
                        <div className="p-2 rounded-xl bg-indigo-50/70 border border-indigo-100 flex flex-col">
                          <span className="text-[8.5px] font-extrabold uppercase text-slate-500">PROJECTED</span>
                          <span className="text-xs font-black text-slate-900 mt-0.5">254 <span className="text-[9px] text-emerald-700 font-bold">+18</span></span>
                          <span className="text-[8.5px] text-slate-500 truncate">ECN/USMLE Est.</span>
                        </div>
                        <div className="p-2 rounded-xl bg-emerald-50/70 border border-emerald-100 flex flex-col">
                          <span className="text-[8.5px] font-extrabold uppercase text-emerald-800">RETENTION</span>
                          <span className="text-xs font-black text-slate-900 mt-0.5">91.2% <span className="text-[9px] text-emerald-600">✓</span></span>
                          <span className="text-[8.5px] text-emerald-700 truncate">Optimal Tier</span>
                        </div>
                        <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-100 flex flex-col">
                          <span className="text-[8.5px] font-extrabold uppercase text-amber-800">VELOCITY</span>
                          <span className="text-xs font-black text-slate-900 mt-0.5">+4.2% <span className="text-[9px] text-amber-700">/wk</span></span>
                          <span className="text-[8.5px] text-amber-800 truncate">Accelerating</span>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3: DAILY QUESTS & CLINICAL OBJECTIVES */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between px-0.5">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                          <h3 className="text-xs font-extrabold text-slate-900">
                            Daily Clinical Quests
                          </h3>
                        </div>
                        <span className="text-[10px] text-slate-500 font-semibold px-2 py-0.5 rounded-full bg-slate-100">
                          1 / 3 Complete
                        </span>
                      </div>

                      {/* Quest 1: Neurology QCMs -> Opens interactive QCM Card below */}
                      <div
                        onClick={() => {
                          setShowQcmCard(true);
                          setSelectedFileId('qcm_card');
                        }}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs cursor-pointer hover:border-indigo-300 transition-all active:scale-[0.99]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                          <Brain className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-extrabold text-slate-900 truncate">
                              Solve 20 Neurology QCMs
                            </span>
                            <span className="text-[10px] font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-100 px-1.5 py-0.2 rounded">
                              +30 XP
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                              <div className="h-full rounded-full bg-indigo-600 w-[75%]" />
                            </div>
                            <span className="text-[10px] text-slate-500 font-medium">15/20</span>
                          </div>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                          <Play className="w-3.5 h-3.5 fill-indigo-600" />
                        </div>
                      </div>

                      {/* Quest 2: Acute Chest Pain */}
                      <div
                        onClick={() => {
                          setShowQcmCard(true);
                          setSelectedFileId('qcm_card');
                        }}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs cursor-pointer hover:border-amber-300 transition-all active:scale-[0.99]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                          <Stethoscope className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-extrabold text-slate-900 truncate">
                              Vignette: Acute Chest Pain
                            </span>
                            <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded">
                              +50 XP
                            </span>
                          </div>
                          <span className="text-[10.5px] text-slate-500 truncate block mt-0.5">
                            STEMI vs. Pericarditis triage
                          </span>
                        </div>
                        <span className="px-2.5 py-1 rounded-md text-[10.5px] font-bold text-white bg-amber-600 shadow-2xs">
                          Start
                        </span>
                      </div>

                      {/* Quest 3: Spaced Repetition */}
                      <div
                        onClick={() => {
                          setShowSmartDeck(true);
                          setSelectedFileId('smart_deck');
                        }}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs cursor-pointer hover:border-slate-300 transition-all active:scale-[0.99]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-extrabold text-slate-900 truncate">
                              Spaced Repetition Review
                            </span>
                            <span className="text-[10px] font-extrabold text-slate-600 bg-slate-100 border border-slate-200 px-1.5 py-0.2 rounded">
                              +20 XP
                            </span>
                          </div>
                          <span className="text-[10.5px] text-slate-500 truncate block mt-0.5">
                            12 Cards due for retention refresh
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>

                    {/* NEW DESIGN 1: THE INTERACTIVE QCM CARD (MISSING COMPONENT DESIGNED) */}
                    {showQcmCard && (
                      <div
                        className="p-3.5 rounded-2xl border-2 border-indigo-400/40 bg-white shadow-md relative animate-fadeIn"
                        style={{
                          boxShadow: '0 8px 30px -6px rgba(79, 70, 229, 0.15)',
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-indigo-50 text-indigo-700 border border-indigo-200">
                            NEUROLOGY • VASCULAR
                          </span>
                          <span className="text-[11px] font-bold text-slate-700">
                            Q 16 / 20
                          </span>
                        </div>

                        {/* Clinical Vignette Box */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed mb-2.5">
                          <p className="font-medium">
                            <strong className="text-indigo-900 font-extrabold">Cas Clinique :</strong> A 64-year-old male with diabetes presents with sudden right lower extremity paralysis and hypesthesia. Cranial nerves and upper extremity motor strength are fully preserved (5/5). Urinary incontinence is present.
                          </p>
                        </div>

                        <p className="text-xs font-extrabold text-slate-900 mb-2">
                          Which cerebral vascular territory infarction explains this selective deficit pattern?
                        </p>

                        {/* Options A, B, C, D */}
                        <div className="space-y-1.5 mb-2.5">
                          {[
                            { letter: 'A', text: 'Anterior Cerebral Artery (ACA)', correct: true },
                            { letter: 'B', text: 'Middle Cerebral Artery (MCA) superior branch', correct: false },
                            { letter: 'C', text: 'Posterior Cerebral Artery (PCA)', correct: false },
                            { letter: 'D', text: 'Basilar Artery tip syndrome', correct: false },
                          ].map((opt, idx) => {
                            const isSelected = selectedOption === idx;
                            const isSubmitted = isAnswerSubmitted;

                            let optStyle = 'bg-white border-slate-200 text-slate-800';
                            if (isSubmitted) {
                              if (opt.correct) {
                                optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                              } else if (isSelected && !opt.correct) {
                                optStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                              }
                            } else if (isSelected) {
                              optStyle = 'bg-indigo-50 border-indigo-500 text-indigo-950 font-bold';
                            }

                            return (
                              <button
                                key={opt.letter}
                                onClick={() => {
                                  if (!isAnswerSubmitted) setSelectedOption(idx);
                                }}
                                className={`w-full p-2 rounded-xl border text-left flex items-center justify-between text-xs transition-all active:scale-[0.99] ${optStyle}`}
                              >
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10.5px] font-extrabold shrink-0 ${
                                      isSelected
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-slate-100 text-slate-600'
                                    }`}
                                  >
                                    {opt.letter}
                                  </span>
                                  <span>{opt.text}</span>
                                </div>
                                {isSubmitted && opt.correct && (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                )}
                                {isSubmitted && isSelected && !opt.correct && (
                                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Submit / Validate */}
                        {!isAnswerSubmitted ? (
                          <button
                            onClick={() => {
                              if (selectedOption !== null) {
                                setIsAnswerSubmitted(true);
                                if (selectedOption === 0) setCurrentXp((x) => x + 30);
                              }
                            }}
                            disabled={selectedOption === null}
                            className="w-full py-2 rounded-xl text-xs font-extrabold text-white bg-indigo-600 disabled:bg-slate-300 shadow-sm transition-all"
                          >
                            Valider la Réponse
                          </button>
                        ) : (
                          <div className="space-y-2 mt-2">
                            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                              <span className="font-extrabold text-slate-900 block mb-1">
                                💡 Explication & Mécanisme Homoncule :
                              </span>
                              L'ACA vascularise la face médiale du cortex cérébral (représentation somatotopique du membre inférieur et centre mictionnel). L'ACM vascularise la convexité latérale (face et membre supérieur).
                              <div className="mt-1.5 p-1.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-bold">
                                Perle ECN/USMLE : ACA = Jambe &gt; Bras + Incontinence. ACM = Bras &gt; Jambe + Aphasie.
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                setIsAnswerSubmitted(false);
                                setSelectedOption(null);
                                setShowQcmCard(false);
                              }}
                              className="w-full py-2 rounded-xl text-xs font-extrabold text-white bg-emerald-600 shadow-sm"
                            >
                              Question Suivante (+30 XP Enregistrés)
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* NEW DESIGN 2: SMART FLASHCARD DECK (ANKI STYLE 3D FLIP) */}
                    {showSmartDeck && (
                      <div className="p-3.5 rounded-2xl border-2 border-emerald-400/40 bg-white shadow-md space-y-2 animate-fadeIn">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-emerald-600" />
                            Smart Deck (Répétition Espacée)
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium">
                            Touchez pour retourner
                          </span>
                        </div>

                        {/* Interactive Flip Card */}
                        <div
                          onClick={() => setIsDeckFlipped(!isDeckFlipped)}
                          className="min-h-[130px] p-4 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white flex flex-col items-center justify-center text-center cursor-pointer shadow-inner hover:scale-[1.01] transition-transform"
                        >
                          {!isDeckFlipped ? (
                            <div>
                              <span className="text-[10px] font-extrabold uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                                CÔTÉ QUESTION
                              </span>
                              <p className="text-xs font-extrabold text-slate-800 mt-2">
                                Quel est le signe clinique distinctif majeur entre un AVC ACA et un AVC ACM ?
                              </p>
                              <span className="text-[10px] text-slate-400 mt-2 block">
                                ↺ Cliquez pour révéler la réponse
                              </span>
                            </div>
                          ) : (
                            <div className="text-emerald-900">
                              <span className="text-[10px] font-extrabold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                CÔTÉ RÉPONSE
                              </span>
                              <p className="text-xs font-bold mt-2">
                                Déficit prédominant au MEMBRE INFÉRIEUR pour l'ACA vs FACE/MEMBRE SUPÉRIEUR pour l'ACM.
                              </p>
                              <span className="text-[10.5px] font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md mt-2 inline-block">
                                Mnémo : ACA = Accélère avec le pied (jambe)
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Spaced intervals */}
                        <div className="grid grid-cols-4 gap-1 pt-1">
                          {[
                            { label: 'Again', time: '<1m', color: 'bg-rose-50 text-rose-700 border-rose-200' },
                            { label: 'Hard', time: '1d', color: 'bg-amber-50 text-amber-700 border-amber-200' },
                            { label: 'Good', time: '3d', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
                            { label: 'Easy', time: '7d', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                          ].map((rating) => (
                            <button
                              key={rating.label}
                              onClick={() => {
                                setShowSmartDeck(false);
                                setIsDeckFlipped(false);
                                setCurrentXp((x) => x + 20);
                              }}
                              className={`p-1.5 rounded-lg border text-center transition-all active:scale-95 ${rating.color}`}
                            >
                              <span className="text-[10px] font-extrabold block leading-none">{rating.label}</span>
                              <span className="text-[9px] opacity-75">{rating.time}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SECTION 4: RAPID TRAINING MODULES WITH EXACT ORGAN ICONS */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-extrabold text-slate-900 px-0.5">
                        Rapid Training Modules
                      </h4>

                      {/* Module 1: Neurologie (Exact Organ Icon) */}
                      <div
                        onClick={() => {
                          setShowQcmCard(true);
                          setSelectedFileId('qcm_card');
                        }}
                        className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs cursor-pointer hover:border-indigo-300 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center p-0.5 shrink-0 shadow-2xs">
                            <ModuleExactLogo moduleId="mod-neuro" size={34} />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[9px] font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-100 px-1 py-0.2 rounded">
                                NEURO
                              </span>
                              <span className="text-[10px] text-slate-400">2h ago</span>
                            </div>
                            <span className="text-xs font-extrabold text-slate-900 block mt-0.5">
                              Cranial Nerve Palsies & AVC
                            </span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <div className="w-16 h-1 rounded-full bg-slate-100 overflow-hidden">
                                <div className="h-full rounded-full bg-indigo-600 w-[68%]" />
                              </div>
                              <span className="text-[9.5px] font-extrabold text-indigo-600">68%</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white flex items-center justify-center shadow-xs">
                          <Play className="w-3.5 h-3.5 fill-white" />
                        </div>
                      </div>

                      {/* Module 2: Cardiologie (Exact Organ Icon) */}
                      <div
                        onClick={() => {
                          setShowQcmCard(true);
                          setSelectedFileId('qcm_card');
                        }}
                        className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs cursor-pointer hover:border-rose-300 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center p-0.5 shrink-0 shadow-2xs">
                            <ModuleExactLogo moduleId="mod-cardio" size={34} />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[9px] font-extrabold text-rose-700 bg-rose-50 border border-rose-100 px-1 py-0.2 rounded">
                                CARDIO
                              </span>
                              <span className="text-[10px] text-slate-400">High-Yield</span>
                            </div>
                            <span className="text-xs font-extrabold text-slate-900 block mt-0.5">
                              Syndromes Coronariens Aigus
                            </span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <div className="w-16 h-1 rounded-full bg-slate-100 overflow-hidden">
                                <div className="h-full rounded-full bg-rose-500 w-[92%]" />
                              </div>
                              <span className="text-[9.5px] font-extrabold text-rose-600">92%</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-rose-500 to-rose-600 text-white flex items-center justify-center shadow-xs">
                          <Play className="w-3.5 h-3.5 fill-white" />
                        </div>
                      </div>

                      {/* 2 Grid: Smart Deck & AI Consultant */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            setShowSmartDeck(true);
                            setSelectedFileId('smart_deck');
                          }}
                          className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-left hover:border-emerald-300 transition-all active:scale-[0.99]"
                        >
                          <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-1">
                            <Layers className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-extrabold text-slate-900 block">Smart Deck</span>
                          <span className="text-[10px] text-slate-500 block">Anki • 15m</span>
                          <span className="mt-2 w-full py-1 text-center block text-[10.5px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-md">
                            Review
                          </span>
                        </button>

                        <button
                          onClick={() => {
                            setShowAiConsultantModal(true);
                            setSelectedFileId('ai_consultant');
                          }}
                          className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-left hover:border-amber-300 transition-all active:scale-[0.99]"
                        >
                          <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-1">
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-extrabold text-slate-900 block">AI Consultant</span>
                          <span className="text-[10px] text-slate-500 block">Instant case</span>
                          <span className="mt-2 w-full py-1 text-center block text-[10.5px] font-bold text-white bg-amber-600 rounded-md shadow-2xs">
                            Chat
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* SECTION 5: RECENT PERFORMANCE PILL */}
                    <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-extrabold text-slate-900">
                              84.6% Accuracy
                            </span>
                            <span className="text-[9.5px] font-extrabold text-emerald-700 bg-emerald-50 px-1 rounded">
                              +3.2%
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-500">
                            Last 7 days • 142 clinical questions
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-indigo-600 flex items-center gap-0.5">
                        Insights <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Themed White Marshmallow Bottom Navigation Dock */}
                  <div className="sticky bottom-2 z-20 px-2 py-1">
                    <div className="bg-white/95 backdrop-blur-md rounded-full px-2 py-1 shadow-[0_12px_28px_rgba(15,23,42,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center justify-between border border-slate-200/90">
                      {/* 1. Home */}
                      <button
                        type="button"
                        onClick={() => {
                          setActiveBottomTab(0);
                          setShowQcmCard(false);
                          setShowSmartDeck(false);
                        }}
                        className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group"
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            activeBottomTab === 0
                              ? 'bg-rose-50 text-rose-500 scale-105 shadow-2xs'
                              : 'text-slate-400 group-hover:text-slate-700'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${activeBottomTab === 0 ? 'fill-current' : ''}`} />
                        </div>
                        <span
                          className={`text-[8.5px] mt-0.5 ${
                            activeBottomTab === 0 ? 'text-rose-600 font-extrabold' : 'text-slate-400 font-medium'
                          }`}
                        >
                          Home
                        </span>
                      </button>

                      {/* 2. Modules */}
                      <button
                        type="button"
                        onClick={() => {
                          setActiveBottomTab(1);
                          setSelectedFileId('rapid_modules');
                        }}
                        className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group"
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            activeBottomTab === 1
                              ? 'bg-amber-50 text-amber-500 scale-105 shadow-2xs'
                              : 'text-slate-400 group-hover:text-slate-700'
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                        </div>
                        <span
                          className={`text-[8.5px] mt-0.5 ${
                            activeBottomTab === 1 ? 'text-amber-600 font-extrabold' : 'text-slate-400 font-medium'
                          }`}
                        >
                          Modules
                        </span>
                      </button>

                      {/* 3. Center Raised Pink Circular Action Button (QCM with BookOpenCheck Icon) */}
                      <div className="flex-shrink-0 px-1 -my-2.5 flex flex-col items-center">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveBottomTab(2);
                            setShowQcmCard(true);
                            setSelectedFileId('qcm_card');
                          }}
                          className={`w-10 h-10 rounded-full bg-gradient-to-tr from-[#F472B6] via-[#FB7185] to-[#FDA4AF] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(244,114,182,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.7)] border-2 border-white cursor-pointer hover:scale-110 active:scale-95 transition-all ${
                            activeBottomTab === 2 ? 'ring-2 ring-rose-300 scale-105' : ''
                          }`}
                          title="Lancer QCM (+5 XP)"
                        >
                          <BookOpenCheck className="w-4.5 h-4.5 stroke-[2.4]" />
                        </button>
                        <span className="text-[8px] font-extrabold text-rose-500 mt-0.5 uppercase tracking-wider">
                          QCM
                        </span>
                      </div>

                      {/* 4. Progress */}
                      <button
                        type="button"
                        onClick={() => {
                          setActiveBottomTab(3);
                          setSelectedFileId('retention_chart');
                        }}
                        className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group"
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            activeBottomTab === 3
                              ? 'bg-emerald-50 text-emerald-500 scale-105 shadow-2xs'
                              : 'text-slate-400 group-hover:text-slate-700'
                          }`}
                        >
                          <BarChart3 className="w-3.5 h-3.5" />
                        </div>
                        <span
                          className={`text-[8.5px] mt-0.5 ${
                            activeBottomTab === 3 ? 'text-emerald-600 font-extrabold' : 'text-slate-400 font-medium'
                          }`}
                        >
                          Progress
                        </span>
                      </button>

                      {/* 5. Profile */}
                      <button
                        type="button"
                        onClick={() => {
                          setActiveBottomTab(4);
                          setShowDiagnosticModal(true);
                        }}
                        className="flex-1 py-1 flex flex-col items-center justify-center cursor-pointer group"
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            activeBottomTab === 4
                              ? 'bg-indigo-50 text-indigo-500 scale-105 shadow-2xs'
                              : 'text-slate-400 group-hover:text-slate-700'
                          }`}
                        >
                          <User className="w-3.5 h-3.5" />
                        </div>
                        <span
                          className={`text-[8.5px] mt-0.5 ${
                            activeBottomTab === 4 ? 'text-indigo-600 font-extrabold' : 'text-slate-400 font-medium'
                          }`}
                        >
                          Profile
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Home indicator bar */}
                <div className="bg-white py-1.5 flex justify-center rounded-b-[36px] border-t border-slate-100">
                  <div className="w-24 h-1 bg-slate-300 rounded-full" />
                </div>
              </div>

              {/* Modals for Diagnostic Sim & AI Consultant in Mobile Preview */}
              {showDiagnosticModal && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-3">
                  <div className="bg-white rounded-3xl max-w-sm w-full p-5 space-y-3 shadow-2xl animate-slideUp">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-indigo-600" />
                        <h3 className="font-extrabold text-base text-slate-900">
                          Diagnostic Simulation
                        </h3>
                      </div>
                      <button
                        onClick={() => setShowDiagnosticModal(false)}
                        className="p-1 rounded-full text-slate-400 hover:text-slate-700"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bloc de 40 questions chronométrées (45 min) calqué sur les exigences du concours ECN et de l'USMLE Step 2 CK.
                    </p>
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                      <div>
                        <span className="text-xs font-black text-slate-900 block">45 Min</span>
                        <span className="text-[10px] text-slate-500">Chrono</span>
                      </div>
                      <div>
                        <span className="text-xs font-black text-slate-900 block">40 QCM</span>
                        <span className="text-[10px] text-slate-500">Format Test</span>
                      </div>
                      <div>
                        <span className="text-xs font-black text-slate-900 block">Instant</span>
                        <span className="text-[10px] text-slate-500">Percentile</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setShowDiagnosticModal(false);
                        setShowQcmCard(true);
                      }}
                      className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-extrabold text-xs shadow-md"
                    >
                      Démarrer le Bloc de Test
                    </button>
                  </div>
                </div>
              )}

              {showAiConsultantModal && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-3">
                  <div className="bg-white rounded-3xl max-w-sm w-full p-4 space-y-2.5 shadow-2xl animate-slideUp flex flex-col h-[460px]">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <h3 className="font-extrabold text-sm text-slate-900">
                          AI Clinical Consultant
                        </h3>
                      </div>
                      <button
                        onClick={() => setShowAiConsultantModal(false)}
                        className="p-1 rounded-full text-slate-400 hover:text-slate-700"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-2 text-xs pr-1">
                      {aiChatMessages.map((m, i) => (
                        <div
                          key={i}
                          className={`p-2.5 rounded-xl max-w-[85%] ${
                            m.sender === 'user'
                              ? 'ml-auto bg-indigo-600 text-white'
                              : 'mr-auto bg-slate-100 text-slate-800'
                          }`}
                        >
                          {m.text}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 pt-1 border-t">
                      <input
                        type="text"
                        value={aiInputText}
                        onChange={(e) => setAiInputText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendAiMessage()}
                        placeholder="Ex: Triage SCA ST+ vs Péricardite..."
                        className="flex-1 px-3 py-1.5 rounded-xl border border-slate-300 text-xs focus:outline-indigo-500"
                      />
                      <button
                        onClick={handleSendAiMessage}
                        className="p-2 rounded-xl bg-amber-600 text-white shadow-xs"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* RIGHT: Flutter Code Explorer & Architecture Suite */}
          {(viewMode === 'code' || viewMode === 'split') && (
            <div
              className={`flex flex-col space-y-4 ${
                viewMode === 'split' ? 'lg:col-span-7' : 'w-full'
              }`}
            >
              {/* File Selector Pills Bar */}
              <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                    <FolderTree className="w-3.5 h-3.5 text-indigo-600" />
                    Arborescence des 15 Composants Flutter Générés
                  </span>
                  <span className="text-[11px] font-bold text-slate-500">
                    lib/widgets/ & lib/screens/
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto scrollbar-none pr-1">
                  {ALL_FLUTTER_FILES.map((file) => {
                    const isSelected = file.id === selectedFileId;
                    return (
                      <button
                        key={file.id}
                        onClick={() => setSelectedFileId(file.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                        }`}
                      >
                        <FileCode className="w-3.5 h-3.5 shrink-0 opacity-80" />
                        <span className="truncate max-w-[170px]">{file.fileName}</span>
                        {file.isNewDesign && (
                          <span
                            className={`px-1.5 py-0.2 rounded-full text-[9px] font-extrabold ${
                              isSelected
                                ? 'bg-white/20 text-white'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            Nouveau
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Code Viewer Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col flex-1">
                {/* Code Header */}
                <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-mono text-xs font-bold text-slate-300 truncate">
                      {currentFile.path}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-indigo-900/80 text-indigo-200 border border-indigo-700/60 hidden sm:inline">
                      {currentFile.widgetType}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyCode(currentFile)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all active:scale-95"
                    >
                      {copiedFileId === currentFile.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copié !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copier</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleDownloadFile(currentFile)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all active:scale-95"
                      title="Télécharger ce fichier .dart"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Télécharger</span>
                    </button>
                  </div>
                </div>

                {/* File description note */}
                <div className="px-4 py-2.5 bg-indigo-50/70 border-b border-indigo-100 flex items-start gap-2 text-xs text-indigo-950">
                  <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-extrabold">{currentFile.title}:</strong>{' '}
                    {currentFile.description}
                  </div>
                </div>

                {/* Preformatted Dart Code */}
                <div className="p-4 bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto max-h-[560px] overflow-y-auto leading-relaxed selection:bg-indigo-600">
                  <pre>
                    <code>{currentFile.code}</code>
                  </pre>
                </div>
              </div>

              {/* Architecture Tree & Best Practices Guide */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                <span className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Pratiques Modernes Flutter Intégrées
                </span>
                <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                  <li>
                    <strong className="text-slate-800">Null-Safety Stricte :</strong> Paramètres nommés <code className="text-indigo-600 bg-indigo-50 px-1 rounded">required</code>, assertions, et typage robuste pour éviter toute régression d'exécution.
                  </li>
                  <li>
                    <strong className="text-slate-800">Séparation Modulaire :</strong> Chaque composant visuel (Streak, Progress, Chart, Quest, QCM Card) possède sa propre classe réutilisable et testable.
                  </li>
                  <li>
                    <strong className="text-slate-800">Style Neumorphique Doux :</strong> Implémenté via <code className="text-indigo-600 bg-indigo-50 px-1 rounded">MeddiyTheme.softNeumorphicCard()</code> avec double ombre portée, transparence 92% et bordures blanches diffuses.
                  </li>
                  <li>
                    <strong className="text-slate-800">Composants Conçus pour les Manques :</strong> Inclusion native du widget QCM complet avec cas clinique, distracteurs, validation, et perles ECN/USMLE.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
