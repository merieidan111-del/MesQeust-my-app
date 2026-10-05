import React from 'react';
import { AcademicYear } from '../types/medical';
import {
  GraduationCap,
  ChevronRight,
  Sparkles,
  Layers,
  X,
  Calendar,
} from 'lucide-react';
import { VectorHeart, VectorBrain, VectorLungs } from './VectorOrgans';

interface YearsSidebarProps {
  selectedYear: AcademicYear;
  onSelectYear: (year: AcademicYear) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  modulesCountByYear?: Record<string, number>;
  questionsCountByYear?: Record<string, number>;
}

interface YearMeta {
  id: AcademicYear;
  subtitle: string;
  focus: string;
  badge: string;
  organMascot: React.ReactNode;
  bgPastel: string;
  activeBorder: string;
  badgeColor: string;
  modulesCount: number;
  highlight?: string;
}

export const YEARS_DATA: YearMeta[] = [
  {
    id: '3ème Année',
    subtitle: 'Sémiologie Médicale',
    focus: 'Propédeutique, examen clinique & bases fondamentales',
    badge: 'Sémiologie',
    organMascot: <VectorLungs size={46} />,
    bgPastel: 'from-amber-50/80 to-orange-50/40',
    activeBorder: 'border-amber-400 bg-amber-50/70 shadow-sm shadow-amber-200/50',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    modulesCount: 2,
  },
  {
    id: '4ème Année',
    subtitle: 'Pathologies & Spécialités',
    focus: 'Cardiologie (24 cours • 720 QCMs), Neuro, Pneumo, Néphro, Hépato',
    badge: 'Programme Majeur',
    organMascot: <VectorHeart size={46} />,
    bgPastel: 'from-rose-50/90 to-indigo-50/50',
    activeBorder: 'border-rose-400 bg-rose-50/80 shadow-md shadow-rose-200/60 ring-2 ring-rose-200/50',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    modulesCount: 5,
    highlight: '24 Cours Officiels • 720 QCMs',
  },
  {
    id: '5ème Année',
    subtitle: 'Spécialités Cliniques & Urgences',
    focus: 'OTR, Gynéco-Obstétrique, Pédiatrie, Psychiatrie, Endocrino, Uro-Néphro',
    badge: '6 Modules',
    organMascot: <VectorBrain size={46} />,
    bgPastel: 'from-indigo-50/80 to-purple-50/40',
    activeBorder: 'border-indigo-400 bg-indigo-50/70 shadow-sm shadow-indigo-200/50',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    modulesCount: 6,
  },
];

export const YearsSidebar: React.FC<YearsSidebarProps> = ({
  selectedYear,
  onSelectYear,
  isOpenMobile = false,
  onCloseMobile,
}) => {
  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-24 left-0 h-full lg:h-[calc(100vh-7rem)] w-72 sm:w-80 bg-white border-r lg:border border-slate-200/80 lg:rounded-3xl flex flex-col p-5 z-50 lg:z-10 transition-transform duration-300 ease-out shadow-xl lg:shadow-[0_8px_30px_rgb(0,0,0,0.04)] shrink-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-slate-900 tracking-tight">Années d'Études</h2>
              <p className="text-[11px] text-slate-600 font-medium">Cursus Médical Officiel</p>
            </div>
          </div>

          {/* Close button on mobile */}
          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              title="Fermer la barre latérale"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Years List with Studious Vector Organs */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1 scrollbar-thin">
          <div className="text-[10px] uppercase font-extrabold tracking-wider text-slate-600 px-1 mb-1">
            Sélectionnez votre promotion :
          </div>

          {YEARS_DATA.map((item) => {
            const isSelected = selectedYear === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectYear(item.id);
                  if (onCloseMobile) onCloseMobile();
                }}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all relative group flex flex-col gap-2 ${
                  isSelected
                    ? `${item.activeBorder}`
                    : 'bg-white hover:bg-slate-50 border-slate-200/70 hover:border-slate-300 text-slate-700 shadow-xs'
                }`}
              >
                {/* Active Indicator Pip */}
                {isSelected && (
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-10 bg-indigo-500 rounded-r-full shadow-sm shadow-indigo-500/50" />
                )}

                {/* Top Row: Mascot + Title + Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-11 h-11 rounded-2xl bg-white/90 border border-slate-100 shadow-xs flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                      {item.organMascot}
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 tracking-tight flex items-center gap-1.5">
                        {item.id}
                      </div>
                      <div className="text-[11px] text-slate-600 font-semibold leading-none mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'text-indigo-600 translate-x-0.5 font-bold'
                        : 'text-slate-300 group-hover:text-slate-500'
                    }`}
                  />
                </div>

                {/* Focus text */}
                <p className="text-[11px] text-slate-600 leading-snug pl-1">
                  {item.focus}
                </p>

                {item.highlight && (
                  <div className="mt-0.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100/80 border border-rose-200 text-[10px] font-bold text-rose-700 w-fit">
                    <Sparkles className="w-3 h-3 text-rose-500" />
                    <span>{item.highlight}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer Info Box */}
        <div className="pt-3 border-t border-slate-100 mt-auto">
          <div className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 border border-indigo-100/80 rounded-2xl p-3.5 shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1">
              <span className="flex items-center gap-1.5 text-indigo-700">
                <Layers className="w-3.5 h-3.5" />
                Niveau Sélectionné
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white border border-indigo-200 text-indigo-700 text-[10px] font-extrabold shadow-2xs">
                {selectedYear}
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed mt-1 font-medium">
              Contenus et banques de questions officiellement ciblés pour votre externe en{' '}
              <strong className="text-slate-900 font-bold">{selectedYear}</strong>.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
