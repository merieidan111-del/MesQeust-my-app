import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckSquare,
  Stethoscope,
  FileText,
  Lightbulb,
  Play,
  Clock,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Copy,
  Check,
  Award,
  Layers,
  X,
} from 'lucide-react';
import { Module, Course, CourseResource, Question } from '../types/medical';
import { MEDICAL_COURSES, COURSE_RESOURCES } from '../data/mockMedicalData';
import { VectorHeart, VectorBrain, VectorLungs, VectorLiver } from './VectorOrgans';

interface CourseHubProps {
  module: Module;
  onBack: () => void;
  onLaunchPracticeMode: (course: Course, mode: 'QCM' | 'CasClinique') => void;
}

export const CourseHub: React.FC<CourseHubProps> = ({
  module,
  onBack,
  onLaunchPracticeMode,
}) => {
  const courses = MEDICAL_COURSES.filter((c) => c.moduleId === module.id);
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0] || MEDICAL_COURSES[0]);
  const [selectedResource, setSelectedResource] = useState<CourseResource | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (courses.length > 0 && !courses.some((c) => c.id === selectedCourse?.id)) {
      setSelectedCourse(courses[0]);
    }
  }, [module.id, courses, selectedCourse?.id]);

  // Find resources for this course
  const courseResources = COURSE_RESOURCES.filter((r) => r.courseId === selectedCourse.id);
  const resumes = courseResources.filter((r) => r.type === 'Resume');
  const astuces = courseResources.filter((r) => r.type === 'Astuce');

  const handleCopyResource = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCardio = module.id === 'mod-cardio';
  const isNeuro = module.id === 'mod-neuro';
  const isPneumo = module.id === 'mod-pneumo';
  const isLiver = module.id.includes('gastro') || module.id.includes('nephro');

  const organMascot = isCardio ? (
    <VectorHeart size={64} />
  ) : isNeuro ? (
    <VectorBrain size={64} />
  ) : isPneumo ? (
    <VectorLungs size={64} />
  ) : isLiver ? (
    <VectorLiver size={64} />
  ) : (
    <VectorHeart size={64} />
  );

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Top Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour aux modules</span>
        </button>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-1">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1 shadow-xs shrink-0">
              {organMascot}
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-100">
                Module • {module.academicYear}
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1.5">
                {module.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium">{module.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200/70 text-center">
              <span className="text-[10px] text-slate-500 font-bold block">Cours</span>
              <strong className="text-sm font-black text-slate-900">{courses.length} Officiels</strong>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-indigo-50 border border-indigo-200/70 text-center">
              <span className="text-[10px] text-indigo-600 font-bold block">Total Questions</span>
              <strong className="text-sm font-black text-indigo-700">{module.totalQuestions} QCMs</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Courses List (Left) & Hub Practice (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Official Courses List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Cours Officiels ({courses.length})</span>
            </h3>
            <span className="text-[10px] font-bold text-slate-400">Cliquez pour choisir</span>
          </div>

          <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1 scrollbar-thin">
            {courses.map((course, idx) => {
              const isSelected = selectedCourse.id === course.id;
              return (
                <div
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-indigo-50/80 border-indigo-400 shadow-xs ring-2 ring-indigo-200/50'
                      : 'bg-white hover:bg-slate-50 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h4
                        className={`text-xs font-bold truncate ${
                          isSelected ? 'text-indigo-950 font-extrabold' : 'text-slate-800'
                        }`}
                      >
                        {course.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5 font-medium">
                        <span>{course.qcmCount} QCMs</span>
                        <span>•</span>
                        <span>{course.casCliniqueCount} Cas</span>
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-indigo-600 translate-x-0.5' : 'text-slate-300'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Hub Content & 4 Training Modes */}
        <div className="lg:col-span-8 space-y-5">
          {/* Active Course Overview Card */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200">
                  Cours Actif Sélectionné
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-1">
                  {selectedCourse.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                  {selectedCourse.qcmCount + selectedCourse.casCliniqueCount} Questions au total
                </span>
              </div>
            </div>

            {/* 4 Practice & Study Cards (Soft Pastel Bento) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Mode 1: QCMs Théoriques */}
              <div
                onClick={() => onLaunchPracticeMode(selectedCourse, 'QCM')}
                className="p-5 rounded-3xl bg-[#FFF5F2] border border-rose-200/80 hover:border-rose-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                      <CheckSquare className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-white border border-rose-200 text-rose-700 shadow-2xs">
                      {selectedCourse.qcmCount} QCMs
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                    QCMs Théoriques & Cliniques
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    Série séquentielle avec navigation intuitive et explications cliniques immédiates.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-rose-200/60 flex items-center justify-between text-xs text-rose-700 font-extrabold">
                  <span>Démarrer la série</span>
                  <Play className="w-3.5 h-3.5 fill-rose-600 text-rose-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Mode 2: Cas Cliniques */}
              <div
                onClick={() => onLaunchPracticeMode(selectedCourse, 'CasClinique')}
                className="p-5 rounded-3xl bg-[#F0F7FF] border border-sky-200/80 hover:border-sky-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-white border border-sky-200 text-sky-700 shadow-2xs">
                      {selectedCourse.casCliniqueCount} Dossiers
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-sky-600 transition-colors">
                    Cas Cliniques Progressifs
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    Dossiers cliniques de concours avec raisonnement diagnostique et thérapeutique.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-sky-200/60 flex items-center justify-between text-xs text-sky-700 font-extrabold">
                  <span>S'entraîner aux cas</span>
                  <Play className="w-3.5 h-3.5 fill-sky-600 text-sky-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Mode 3: Fiches & Synthèses */}
              <div
                onClick={() => {
                  if (resumes.length > 0) setSelectedResource(resumes[0]);
                }}
                className={`p-5 rounded-3xl bg-[#F0FDF4] border border-emerald-200/80 hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between ${
                  resumes.length === 0 ? 'opacity-70' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-white border border-emerald-200 text-emerald-700 shadow-2xs">
                      {resumes.length} Fiches
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Fiches Résumés Recommandations
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    Synthèses concises des dernières recommandations des sociétés savantes.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs text-emerald-700 font-extrabold">
                  <span>Consulter les fiches</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Mode 4: Mnémos & Astuces */}
              <div
                onClick={() => {
                  if (astuces.length > 0) setSelectedResource(astuces[0]);
                }}
                className={`p-5 rounded-3xl bg-[#FFFDF0] border border-amber-200/80 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between ${
                  astuces.length === 0 ? 'opacity-70' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-white border border-amber-200 text-amber-800 shadow-2xs">
                      {astuces.length} Mnémos
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-amber-800 transition-colors">
                    Perles Cliniques & Mnémos
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    Astuces mnémotechniques et pièges classiques des examens de résidanat.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-amber-800 font-extrabold">
                  <span>Voir les mnémos</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Modal / Card for Displaying Selected Study Resource */}
          {selectedResource && (
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 animate-in fade-in duration-200">
              <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                    {selectedResource.type === 'Resume' ? <FileText className="w-5 h-5" /> : <Lightbulb className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">
                      {selectedResource.type === 'Resume' ? 'Fiche Synthèse' : 'Astuce Mnémo'}
                    </span>
                    <h3 className="font-black text-base text-slate-900 tracking-tight">
                      {selectedResource.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyResource(selectedResource.contentMarkdown)}
                    className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Copier le contenu"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setSelectedResource(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Resource Content */}
              <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-100 font-sans text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
                {selectedResource.contentMarkdown}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
