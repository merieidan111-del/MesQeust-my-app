import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Layers,
  ChevronUp,
  ChevronDown,
  CheckCircle2,
  Stethoscope,
} from 'lucide-react';
import { Module } from '../types/medical';

export interface StackedPastelCardsProps {
  modules: Module[];
  onSelectModule: (mod: Module) => void;
  onStartPractice: () => void;
}

interface SpecialtyCard {
  id: string;
  title: string;
  subtitle: string;
  coursesCount: number;
  questionsCount: number;
  masteryScore: string;
  badge: string;
  // Pastel color styles matching Image 5 (1000115706.jpg)
  bgColor: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
  tabLabel: string;
}

export const StackedPastelCards: React.FC<StackedPastelCardsProps> = ({
  modules,
  onSelectModule,
  onStartPractice,
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const specialtyCards: SpecialtyCard[] = [
    {
      id: 'mod-gastro',
      title: 'Hépato-Gastroentérologie',
      subtitle: 'Programme Intégral : 40 cours avec 25 QCMs & 5 Cas Cliniques certifiés',
      coursesCount: 40,
      questionsCount: 1306,
      masteryScore: '8.8 / 10',
      badge: '01 Module Clé',
      bgColor: '#EAF7EE', // Soft Sage Green
      borderColor: '#BDE5C8',
      textColor: '#14532D',
      accentColor: '#10B981',
      tabLabel: 'Gastroentérologie',
    },
    {
      id: 'mod-cardio',
      title: 'Cardiologie & Vasculaire',
      subtitle: 'Pathologies coronaires, valvulopathies, insuffisance cardiaque & ECG',
      coursesCount: 15,
      questionsCount: 450,
      masteryScore: '9.1 / 10',
      badge: '02 Majeur',
      bgColor: '#FFF0F3', // Soft Coral Pink
      borderColor: '#FDC4CD',
      textColor: '#881337',
      accentColor: '#F43F5E',
      tabLabel: 'Cardiologie',
    },
    {
      id: 'mod-neuro',
      title: 'Neurologie & Neurochirurgie',
      subtitle: 'AVC, épilepsie, céphalées, sclérose en plaques & syndromes médullaires',
      coursesCount: 12,
      questionsCount: 360,
      masteryScore: '8.5 / 10',
      badge: '03 Fondamental',
      bgColor: '#F3F0FF', // Soft Lavender
      borderColor: '#D8CEFE',
      textColor: '#3B0764',
      accentColor: '#8B5CF6',
      tabLabel: 'Neurologie',
    },
    {
      id: 'mod-pneumo',
      title: 'Pneumologie & Respiratoire',
      subtitle: 'Asthme, BPCO, pneumonies, embolie pulmonaire & plèvre',
      coursesCount: 10,
      questionsCount: 300,
      masteryScore: '8.9 / 10',
      badge: '04 Clinique',
      bgColor: '#F0F8FF', // Soft Sky Blue
      borderColor: '#BCE0FD',
      textColor: '#082F49',
      accentColor: '#0EA5E9',
      tabLabel: 'Pneumologie',
    },
    {
      id: 'mod-5-endo',
      title: 'Endocrinologie & Métabolisme',
      subtitle: 'Diabète de type 1 & 2, thyroïde, surrénales & dyslipidémies',
      coursesCount: 8,
      questionsCount: 240,
      masteryScore: '8.3 / 10',
      badge: '05 Transversal',
      bgColor: '#FFFDEB', // Soft Canary Yellow
      borderColor: '#FDEE8A',
      textColor: '#713F12',
      accentColor: '#EAB308',
      tabLabel: 'Endocrinologie',
    },
  ];

  const handleLaunchCard = (card: SpecialtyCard) => {
    const matchedModule = modules.find((m) => m.id === card.id || m.title.toLowerCase().includes(card.tabLabel.toLowerCase()));
    if (matchedModule) {
      onSelectModule(matchedModule);
    } else {
      onStartPractice();
    }
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between px-1">
        <div>
          <h3 className="font-playful text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Modules de Spécialité à la Une</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900 text-white">
              Style Cartes Tactiles
            </span>
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Feuilletez les cartes de cours superposées comme dans votre bloc de révision
          </p>
        </div>

        {/* Tab switch pills */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none max-w-xs sm:max-w-none">
          {specialtyCards.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCardIndex(i)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCardIndex === i
                  ? 'bg-slate-900 text-white shadow-soft-clay-sm scale-105'
                  : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200/60'
              }`}
            >
              {c.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Stacked Overlapping Cards Deck Container inspired by 1000115706.jpg */}
      <div className="relative pt-6 pb-2 min-h-[360px] sm:min-h-[380px]">
        {specialtyCards.map((card, idx) => {
          const isActive = idx === activeCardIndex;
          const offset = idx - activeCardIndex;
          // Only show active and cards within +/- 2 range for clean stacked appearance
          if (offset < 0) return null; // Stacked below or hidden

          const zIndex = 30 - offset * 5;
          const topTranslate = offset * 26; // Progressive vertical cascade
          const scale = 1 - offset * 0.04;
          const opacity = 1 - offset * 0.15;

          return (
            <div
              key={card.id}
              onClick={() => setActiveCardIndex(idx)}
              style={{
                top: `${topTranslate}px`,
                zIndex,
                transform: `scale(${scale})`,
                opacity: offset > 2 ? 0 : opacity,
                backgroundColor: card.bgColor,
                borderColor: card.borderColor,
              }}
              className={`absolute inset-x-0 mx-auto max-w-2xl rounded-[2.5rem] border-2 p-6 sm:p-8 shadow-soft-clay transition-all duration-300 cursor-pointer ${
                isActive ? 'hover:-translate-y-1' : 'hover:scale-[0.98]'
              }`}
            >
              {/* Notched Top Tab with Specialty Label from 1000115706.jpg */}
              <div
                className="absolute -top-3.5 left-10 px-4 py-1 rounded-full text-[11px] font-black tracking-wider uppercase shadow-xs border"
                style={{
                  backgroundColor: card.borderColor,
                  color: card.textColor,
                  borderColor: card.accentColor,
                }}
              >
                {card.badge}
              </div>

              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span
                    className="text-xs font-black uppercase tracking-wider block"
                    style={{ color: card.textColor, opacity: 0.8 }}
                  >
                    {card.coursesCount} Leçons Officielles • {card.questionsCount} Questions
                  </span>
                  <h4
                    className="font-playful text-xl sm:text-2xl font-bold tracking-tight mt-1"
                    style={{ color: card.textColor }}
                  >
                    {card.title}
                  </h4>
                </div>

                <div
                  className="px-3.5 py-1.5 rounded-2xl text-center shadow-xs border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    borderColor: card.borderColor,
                  }}
                >
                  <span className="text-[10px] font-black uppercase block" style={{ color: card.textColor }}>
                    Score
                  </span>
                  <span className="font-playful text-sm font-bold" style={{ color: card.textColor }}>
                    {card.masteryScore}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-xs sm:text-sm font-semibold leading-relaxed mb-6"
                style={{ color: card.textColor, opacity: 0.9 }}
              >
                {card.subtitle}
              </p>

              {/* Action Buttons & Expand Handle */}
              <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: card.borderColor }}>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLaunchCard(card);
                    }}
                    className="btn-clay px-5 py-2.5 rounded-full text-white text-xs font-bold flex items-center gap-2 shadow-soft-clay cursor-pointer"
                    style={{ backgroundColor: card.textColor }}
                  >
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>S'entraîner (+5 XP / QCM)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLaunchCard(card);
                    }}
                    className="btn-clay px-4 py-2.5 rounded-full text-xs font-bold bg-white/80 hover:bg-white border transition-colors cursor-pointer"
                    style={{ color: card.textColor, borderColor: card.borderColor }}
                  >
                    Voir les cours
                  </button>
                </div>

                {/* Arrow up/down indicator from 1000115706.jpg */}
                <div className="flex items-center gap-1 text-xs font-bold" style={{ color: card.textColor }}>
                  <span className="text-[10px] hidden sm:inline">Suivant</span>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
