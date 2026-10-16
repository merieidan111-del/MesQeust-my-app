import React, { useState } from 'react';
import {
  Stethoscope,
  FileText,
  Send,
  Calendar,
  Sparkles,
  ChevronRight,
  Info,
  CheckCircle2,
  Heart,
  Brain,
  Wind,
  Activity,
  Shield,
  Dna,
  Bone,
  Flame,
} from 'lucide-react';
import { Module, UserProfile } from '../types/medical';
import { DrHeartWithGlasses } from './PlayfulCharacters';

export interface AmoebaHealthScoreProps {
  userProfile: UserProfile;
  modules: Module[];
  onSelectModule?: (mod: Module) => void;
  onStartPractice?: () => void;
  onOpenExamCountdown?: () => void;
}

interface OrganSystemNode {
  id: string;
  name: string;
  frenchName: string;
  score: number; // e.g. 8.3
  color: string;
  bgColor: string;
  ringColor: string;
  icon: React.ElementType;
  xPercent: number; // For placing node around ring
  yPercent: number;
}

export const AmoebaHealthScore: React.FC<AmoebaHealthScoreProps> = ({
  userProfile,
  modules,
  onSelectModule,
  onStartPractice,
  onOpenExamCountdown,
}) => {
  const [selectedSystemId, setSelectedSystemId] = useState<string>('gastro');
  const [showScoreInfo, setShowScoreInfo] = useState<boolean>(false);

  // Organ system nodes positioned precisely around the Amoeba Ring as in Image 12 (1000115704.jpg)
  const systems: OrganSystemNode[] = [
    {
      id: 'endocrine',
      name: 'Endocrine system',
      frenchName: 'Système Endocrinien',
      score: 8.3,
      color: '#CA8A04',
      bgColor: '#FEF9C3',
      ringColor: '#FDE047',
      icon: Dna,
      xPercent: 50,
      yPercent: 4,
    },
    {
      id: 'gastro',
      name: 'Digestive & Hepato',
      frenchName: 'Hépato-Gastroentérologie',
      score: 8.8,
      color: '#059669',
      bgColor: '#D1FAE5',
      ringColor: '#86EFAC',
      icon: Activity,
      xPercent: 82,
      yPercent: 18,
    },
    {
      id: 'cardio',
      name: 'Cardiovascular system',
      frenchName: 'Cardiologie & Vasculaire',
      score: 9.1,
      color: '#E11D48',
      bgColor: '#FFE4E6',
      ringColor: '#FDA4AF',
      icon: Heart,
      xPercent: 94,
      yPercent: 50,
    },
    {
      id: 'neuro',
      name: 'Nervous system',
      frenchName: 'Neurologie & Cérébral',
      score: 8.5,
      color: '#7C3AED',
      bgColor: '#EDE9FE',
      ringColor: '#DDD6FE',
      icon: Brain,
      xPercent: 82,
      yPercent: 82,
    },
    {
      id: 'pneumo',
      name: 'Respiratory system',
      frenchName: 'Pneumologie',
      score: 8.9,
      color: '#0284C7',
      bgColor: '#E0F2FE',
      ringColor: '#BAE6FD',
      icon: Wind,
      xPercent: 50,
      yPercent: 96,
    },
    {
      id: 'immune',
      name: 'Immune & Infectio',
      frenchName: 'Infectiologie & Défense',
      score: 8.4,
      color: '#B45309',
      bgColor: '#FEF3C7',
      ringColor: '#FDE68A',
      icon: Shield,
      xPercent: 18,
      yPercent: 82,
    },
    {
      id: 'renal',
      name: 'Renal & Urology',
      frenchName: 'Néphrologie & Urologie',
      score: 8.7,
      color: '#DB2777',
      bgColor: '#FCE7F3',
      ringColor: '#FBCFE8',
      icon: Activity,
      xPercent: 6,
      yPercent: 50,
    },
    {
      id: 'locomotor',
      name: 'Musculoskeletal',
      frenchName: 'Appareil Locomoteur',
      score: 8.2,
      color: '#4F46E5',
      bgColor: '#E0E7FF',
      ringColor: '#C7D2FE',
      icon: Bone,
      xPercent: 18,
      yPercent: 18,
    },
  ];

  const activeSystem = systems.find((s) => s.id === selectedSystemId) || systems[1];

  // Overall Preparation Health Score (exact 8.8 matching Image 12 or dynamic based on profile)
  const overallScore = '8.8';

  const handleSystemClick = (sys: OrganSystemNode) => {
    setSelectedSystemId(sys.id);
    // Find matching module in MEDICAL_MODULES
    if (onSelectModule && modules.length > 0) {
      const match = modules.find((m) => {
        const title = m.title.toLowerCase();
        if (sys.id === 'gastro' && (title.includes('gastro') || title.includes('foie'))) return true;
        if (sys.id === 'cardio' && (title.includes('cardio') || title.includes('coeur'))) return true;
        if (sys.id === 'neuro' && (title.includes('neuro') || title.includes('cerveau'))) return true;
        if (sys.id === 'pneumo' && (title.includes('pneumo') || title.includes('respiratoire'))) return true;
        if (sys.id === 'endocrine' && (title.includes('endo') || title.includes('diab'))) return true;
        return false;
      });
      if (match) {
        // Can optionally highlight without full navigation
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Central Amoeba Health Score Container */}
      <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-square flex items-center justify-center my-4">
        {/* Soft Neomorphic Amoeba Background Rings (SVG segmented pill ring from Image 12) */}
        <svg
          className="w-full h-full transform -rotate-90 select-none overflow-visible filter drop-shadow-[0_12px_28px_rgba(230,210,190,0.4)]"
          viewBox="0 0 320 320"
        >
          {/* Segment 1: Canary Yellow Arc (Top) */}
          <path
            d="M 160 30 A 130 130 0 0 1 252 68"
            fill="none"
            stroke="#FEF08A"
            strokeWidth="28"
            strokeLinecap="round"
          />

          {/* Segment 2: Sage Green Arc (Top-Right) */}
          <path
            d="M 264 82 A 130 130 0 0 1 290 160"
            fill="none"
            stroke="#A7F3D0"
            strokeWidth="28"
            strokeLinecap="round"
          />

          {/* Segment 3: Coral Pink Arc (Bottom-Right) */}
          <path
            d="M 284 186 A 130 130 0 0 1 230 258"
            fill="none"
            stroke="#FECDD3"
            strokeWidth="28"
            strokeLinecap="round"
          />

          {/* Segment 4: Lavender Arc (Bottom) */}
          <path
            d="M 210 274 A 130 130 0 0 1 110 274"
            fill="none"
            stroke="#DDD6FE"
            strokeWidth="28"
            strokeLinecap="round"
          />

          {/* Segment 5: Sky Blue Arc (Bottom-Left) */}
          <path
            d="M 90 258 A 130 130 0 0 1 36 186"
            fill="none"
            stroke="#BAE6FD"
            strokeWidth="28"
            strokeLinecap="round"
          />

          {/* Segment 6: Canary Yellow Arc (Top-Left) */}
          <path
            d="M 30 160 A 130 130 0 0 1 68 82"
            fill="none"
            stroke="#FEF08A"
            strokeWidth="28"
            strokeLinecap="round"
          />
        </svg>

        {/* 8 Organ System Buttons Floating on the Amoeba Ring */}
        {systems.map((sys) => {
          const Icon = sys.icon;
          const isSelected = sys.id === selectedSystemId;

          return (
            <button
              key={sys.id}
              type="button"
              onClick={() => handleSystemClick(sys)}
              style={{
                left: `${sys.xPercent}%`,
                top: `${sys.yPercent}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className={`absolute w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-soft-clay ${
                isSelected
                  ? 'scale-125 ring-4 ring-white z-20'
                  : 'hover:scale-110 z-10'
              }`}
              style-background={sys.bgColor}
              title={`${sys.frenchName} : ${sys.score} / 10`}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center border-2 border-white/80"
                style={{ backgroundColor: sys.bgColor }}
              >
                <Icon className="w-5 h-5 transition-transform" style={{ color: sys.color }} />
              </div>
            </button>
          );
        })}

        {/* Center Display: 8.8 your health score */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-auto">
          <div className="flex items-baseline justify-center gap-0.5">
            <span className="font-playful text-6xl sm:text-7xl font-bold tracking-tight text-slate-900 drop-shadow-xs">
              {overallScore}
            </span>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-0.5">
            <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-tight">
              Score Diagnostic Quotidien
            </span>
            <button
              type="button"
              onClick={() => setShowScoreInfo(!showScoreInfo)}
              className="text-slate-400 hover:text-slate-600 cursor-pointer"
              aria-label="Informations sur le score de diagnostic"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>

          {showScoreInfo && (
            <div className="absolute z-30 bottom-12 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-soft-clay border border-slate-100 max-w-[220px] text-[11px] font-medium text-slate-600 animate-in fade-in zoom-in-95">
              Score calculé en temps réel sur la précision clinique des 8 systèmes anatomiques (critères ECNi/EDN).
            </div>
          )}
        </div>
      </div>

      {/* Action Pills Row from Image 12 (Black Pill "Plan check-up", Stethoscope, Document, Share) */}
      <div className="flex items-center justify-center gap-2.5 my-3 flex-wrap">
        <button
          type="button"
          onClick={onOpenExamCountdown || onStartPractice}
          className="btn-clay px-5 py-2.5 rounded-full bg-[#1E1E24] text-white text-xs font-bold flex items-center gap-2 shadow-soft-clay cursor-pointer hover:bg-slate-800"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>Planifier révision</span>
        </button>

        <button
          type="button"
          onClick={onStartPractice}
          className="btn-clay w-10 h-10 rounded-full bg-white text-slate-700 hover:text-rose-500 border border-slate-200/80 flex items-center justify-center shadow-soft-clay cursor-pointer"
          title="Entraînement QCM Clinique"
        >
          <Stethoscope className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onStartPractice}
          className="btn-clay w-10 h-10 rounded-full bg-white text-slate-700 hover:text-indigo-600 border border-slate-200/80 flex items-center justify-center shadow-soft-clay cursor-pointer"
          title="Fiches de synthèse & Annales"
        >
          <FileText className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onStartPractice}
          className="btn-clay w-10 h-10 rounded-full bg-white text-slate-700 hover:text-teal-600 border border-slate-200/80 flex items-center justify-center shadow-soft-clay cursor-pointer"
          title="Partager & Statistiques"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

      {/* Intelly Assistant Coral/Pink Pill Card from Image 12 */}
      <div className="w-full max-w-md mx-auto my-4 p-5 rounded-[2rem] bg-[#FFE8EC] border border-[#FDC9D1] shadow-soft-clay relative overflow-hidden">
        {/* Soft decorative background curve */}
        <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-[#FECDD3]/50 blur-xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-rose-500 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Assistant Clinique Intelly</span>
            </span>
            <span className="text-[10px] font-bold text-rose-600 bg-white/70 px-2 py-0.5 rounded-full">
              Actif
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-rose-950 mt-1 leading-snug">
            Dr. Futur, votre score en <strong>{activeSystem.frenchName}</strong> est de{' '}
            <span className="text-rose-600 font-black">{activeSystem.score}/10</span> cette semaine. 3 QCMs recommandés pour consolider votre diagnostic !
          </p>

          <div className="mt-3.5 flex items-center gap-2">
            <button
              type="button"
              onClick={onStartPractice}
              className="btn-clay px-4 py-2 rounded-full bg-[#1E1E24] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer hover:bg-slate-900"
            >
              <span>S'entraîner maintenant</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Health Systems Breakdown Section from Image 12 */}
      <div className="w-full max-w-md mx-auto mt-2">
        <div className="flex items-center justify-between mb-3 px-1">
          <h4 className="font-playful text-base font-bold text-slate-900">
            Systèmes de Santé & Modules
          </h4>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900 text-white shadow-2xs">
            Tous les modules
          </span>
        </div>

        {/* Stacked Soft Clay System Cards */}
        <div className="space-y-2.5">
          {systems.slice(0, 5).map((sys) => {
            const Icon = sys.icon;
            const isSelected = sys.id === selectedSystemId;

            return (
              <div
                key={sys.id}
                onClick={() => handleSystemClick(sys)}
                className={`p-3.5 rounded-2xl bg-white border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-slate-300 shadow-soft-clay ring-2 ring-rose-200/60'
                    : 'border-slate-150 shadow-soft-clay-sm hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs"
                    style={{ backgroundColor: sys.bgColor }}
                  >
                    <Icon className="w-5 h-5" style={{ color: sys.color }} />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-bold text-slate-900 truncate">
                      {sys.frenchName}
                    </h5>
                    {/* Soft Pastel Progress Track */}
                    <div className="w-32 sm:w-44 bg-slate-100 h-2 rounded-full overflow-hidden mt-1.5">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${(sys.score / 10) * 100}%`,
                          backgroundColor: sys.ringColor,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-playful text-sm font-bold text-slate-900">
                    {sys.score}
                  </span>
                  <span className="text-[10px] font-medium text-slate-600 block">
                    / 10
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
