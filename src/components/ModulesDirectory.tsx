import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  Layers,
  ChevronRight,
  Sparkles,
  Bone,
  HeartHandshake,
  Baby,
  Brain,
  Activity,
  Droplets,
  Pill,
  Stethoscope,
  ShieldAlert,
} from 'lucide-react';
import { Module, AcademicYear } from '../types/medical';
import {
  VectorHeart,
  VectorBrain,
  VectorLungs,
  VectorLiver,
} from './VectorOrgans';

interface ModulesDirectoryProps {
  modules: Module[];
  selectedYear: AcademicYear;
  onSelectYear: (year: AcademicYear) => void;
  onSelectModule: (module: Module) => void;
}

export const ModulesDirectory: React.FC<ModulesDirectoryProps> = ({
  modules,
  selectedYear,
  onSelectYear,
  onSelectModule,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getOrganAvatar = (moduleId: string) => {
    if (moduleId === 'mod-cardio') return <VectorHeart size={48} />;
    if (moduleId === 'mod-neuro') return <VectorBrain size={48} />;
    if (moduleId === 'mod-pneumo') return <VectorLungs size={48} />;
    if (moduleId === 'mod-infectio') return <ShieldAlert className="w-9 h-9 text-emerald-600" />;
    if (moduleId.includes('gastro')) return <VectorLiver size={48} />;
    if (moduleId === 'mod-5-otr') return <Bone className="w-9 h-9 text-amber-500" />;
    if (moduleId === 'mod-5-gyn') return <HeartHandshake className="w-9 h-9 text-rose-500" />;
    if (moduleId === 'mod-5-ped') return <Baby className="w-9 h-9 text-sky-500" />;
    if (moduleId === 'mod-5-psy') return <Brain className="w-9 h-9 text-purple-500" />;
    if (moduleId === 'mod-5-endo') return <Activity className="w-9 h-9 text-teal-500" />;
    if (moduleId === 'mod-5-uro-nephro') return <Droplets className="w-9 h-9 text-cyan-500" />;
    if (moduleId === 'mod-pharma3') return <Pill className="w-9 h-9 text-emerald-500" />;
    if (moduleId === 'mod-semio3') return <Stethoscope className="w-9 h-9 text-teal-500" />;
    return <VectorHeart size={48} />;
  };

  const filtered = modules.filter(
    (m) =>
      m.academicYear === selectedYear &&
      (m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Directory Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Catalogue Officiel
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-2">
            Modules d'Externat Médical
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium leading-relaxed">
            Consultez les modules nationaux au programme de votre <strong className="text-slate-900 font-bold">{selectedYear}</strong>.
            Chaque module réunit ses cours magistraux, banques de QCMs de concours, cas cliniques et fiches mémo.
          </p>
        </div>

        {/* Academic Year Switcher (Segmented Control) */}
        <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-2xl border border-slate-200/60 shrink-0">
          {(['3ème Année', '4ème Année', '5ème Année'] as AcademicYear[]).map((year) => (
            <button
              key={year}
              onClick={() => onSelectYear(year)}
              className={`px-3 sm:px-4 py-2 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                selectedYear === year
                  ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar & Summary Stats */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un module (ex : Cardio, Neuro, Pneumo)..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200/80 rounded-2xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-2xs font-medium"
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
          <span>{filtered.length} module(s) actif(s)</span>
          <span className="text-slate-300">•</span>
          <span className="text-indigo-600 font-bold">
            {filtered.reduce((acc, m) => acc + m.totalQuestions, 0)} questions totales
          </span>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((mod) => (
          <div
            key={mod.id}
            onClick={() => onSelectModule(mod)}
            className="p-5 rounded-3xl bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all cursor-pointer flex flex-col justify-between group shadow-xs"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1 group-hover:scale-105 transition-transform shadow-xs">
                  {getOrganAvatar(mod.id)}
                </div>

                <div className="flex items-center gap-1.5">
                  {mod.totalQuestions === 0 ? (
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700">
                      Module à venir
                    </span>
                  ) : (
                    <>
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {mod.coursesCount} cours
                      </span>
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700">
                        {mod.totalQuestions} QCMs
                      </span>
                    </>
                  )}
                </div>
              </div>

              <h4 className="font-extrabold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                {mod.title}
              </h4>
              {mod.id === 'mod-hemato' && (
                <div className="flex items-center gap-1.5 mt-1.5 mb-1 flex-wrap">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700">
                    🩸 Hématologie (14 cours)
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-lg bg-purple-50 border border-purple-200 text-purple-700">
                    🎗️ Oncologie (10 cours)
                  </span>
                </div>
              )}
              <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed font-medium">
                {mod.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs mb-1.5 font-semibold">
                <span className="text-slate-500">Progression</span>
                <span className="font-extrabold text-indigo-600">{mod.progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-teal-400 h-full rounded-full transition-all"
                  style={{ width: `${mod.progressPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 font-bold group-hover:text-indigo-600">
                <span>
                  {mod.totalQuestions === 0 ? "Contenu en cours d'intégration" : "Accéder aux cours officiels"}
                </span>
                <ChevronRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
