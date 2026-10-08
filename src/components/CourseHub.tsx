import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckSquare,
  Stethoscope,
  FileText,
  Lightbulb,
  Play,
  ChevronRight,
  Copy,
  Check,
  Layers,
  X,
  Sparkles,
  Award,
} from 'lucide-react';
import { Module, Course, CourseResource } from '../types/medical';
import { MEDICAL_COURSES, COURSE_RESOURCES } from '../data/mockMedicalData';
import { VectorHeart, VectorBrain, VectorLungs, VectorLiver } from './VectorOrgans';

export const getSubdivisionMeta = (subdivision: string) => {
  const s = subdivision.trim();
  const lower = s.toLowerCase();

  if (lower.includes('anapath')) {
    return {
      label: 'ANAPATH',
      name: 'Anatomopathologie Digestive',
      icon: '🔬',
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-200',
      activeCardBg: 'bg-teal-50/80 border-teal-400 shadow-md ring-2 ring-teal-200',
      hoverCardBg: 'bg-white hover:bg-teal-50/30 border-slate-200/80 shadow-xs hover:border-teal-200',
      iconBg: 'bg-teal-100 text-teal-700',
      pillActive: 'bg-teal-600 text-white shadow-sm',
      pillInactive: 'text-teal-700 hover:text-teal-900 hover:bg-teal-50',
      pillCount: 'bg-teal-100 text-teal-800',
      pillCountActive: 'bg-teal-700 text-white',
      btnActive: 'bg-teal-600 text-white shadow-xs',
      btnPlay: 'bg-teal-700 hover:bg-teal-800 text-white',
      bannerBg: 'bg-teal-50/90 border-teal-200 text-teal-900',
      desc: 'Histologie, biopsies digestives, polypes adénomateux, dysplasie, métaplasie et critères microscopiques de malignité.',
    };
  }

  if (lower.includes('cancer')) {
    return {
      label: 'LES CANCER',
      name: 'Cancérologie & Oncologie Digestive',
      icon: '🎗️',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      activeCardBg: 'bg-purple-50/80 border-purple-400 shadow-md ring-2 ring-purple-200',
      hoverCardBg: 'bg-white hover:bg-purple-50/30 border-slate-200/80 shadow-xs hover:border-purple-200',
      iconBg: 'bg-purple-100 text-purple-700',
      pillActive: 'bg-purple-600 text-white shadow-sm',
      pillInactive: 'text-purple-700 hover:text-purple-900 hover:bg-purple-50',
      pillCount: 'bg-purple-100 text-purple-800',
      pillCountActive: 'bg-purple-700 text-white',
      btnActive: 'bg-purple-600 text-white shadow-xs',
      btnPlay: 'bg-purple-700 hover:bg-purple-800 text-white',
      bannerBg: 'bg-purple-50/90 border-purple-200 text-purple-900',
      desc: 'Cancers colorectaux (CCR), adénocarcinome gastrique, cancer de l\'œsophage, CHC sur cirrhose, cancer pancréatique & TNM.',
    };
  }

  if (lower.includes('urgence')) {
    return {
      label: 'Urgences',
      name: 'Urgences Médico-Chirurgicales',
      icon: '🚨',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
      activeCardBg: 'bg-rose-50/80 border-rose-400 shadow-md ring-2 ring-rose-200',
      hoverCardBg: 'bg-white hover:bg-rose-50/30 border-slate-200/80 shadow-xs hover:border-rose-200',
      iconBg: 'bg-rose-100 text-rose-700',
      pillActive: 'bg-rose-600 text-white shadow-sm',
      pillInactive: 'text-rose-700 hover:text-rose-900 hover:bg-rose-50',
      pillCount: 'bg-rose-100 text-rose-800',
      pillCountActive: 'bg-rose-700 text-white',
      btnActive: 'bg-rose-600 text-white shadow-xs',
      btnPlay: 'bg-rose-700 hover:bg-rose-800 text-white',
      bannerBg: 'bg-rose-50/90 border-rose-200 text-rose-900',
      desc: 'Hémorragies digestives (hématémèse/méléna), pancréatite aiguë sévère, péritonites, OIA par strangulation & angiocholite.',
    };
  }

  if (lower.includes('gastro')) {
    return {
      label: 'Gastro',
      name: 'Gastroentérologie Médicale & Hépatologie',
      icon: '🩺',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      activeCardBg: 'bg-amber-50/80 border-amber-400 shadow-md ring-2 ring-amber-200',
      hoverCardBg: 'bg-white hover:bg-amber-50/30 border-slate-200/80 shadow-xs hover:border-amber-200',
      iconBg: 'bg-amber-100 text-amber-800',
      pillActive: 'bg-amber-600 text-white shadow-sm',
      pillInactive: 'text-amber-800 hover:text-amber-950 hover:bg-amber-50',
      pillCount: 'bg-amber-100 text-amber-900',
      pillCountActive: 'bg-amber-700 text-white',
      btnActive: 'bg-amber-600 text-white shadow-xs',
      btnPlay: 'bg-amber-700 hover:bg-amber-800 text-white',
      bannerBg: 'bg-amber-50/90 border-amber-200 text-amber-900',
      desc: 'MUGD et H. pylori, MICI (Crohn et RCH), cirrhose & hypertension portale, hépatites virales B/C, lithiase & malabsorption.',
    };
  }

  if (lower.includes('hémato') || lower.includes('hemato')) {
    return {
      label: 'Hématologie',
      name: 'Hématologie Clinique & Biologique',
      icon: '🩸',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
      activeCardBg: 'bg-rose-50/80 border-rose-400 shadow-md ring-2 ring-rose-200',
      hoverCardBg: 'bg-white hover:bg-rose-50/30 border-slate-200/80 shadow-xs hover:border-rose-200',
      iconBg: 'bg-rose-100 text-rose-700',
      pillActive: 'bg-rose-600 text-white shadow-sm',
      pillInactive: 'text-rose-700 hover:text-rose-900 hover:bg-rose-50',
      pillCount: 'bg-rose-100 text-rose-800',
      pillCountActive: 'bg-rose-700 text-white',
      btnActive: 'bg-rose-600 text-white shadow-xs',
      btnPlay: 'bg-rose-700 hover:bg-rose-800 text-white',
      bannerBg: 'bg-rose-50/90 border-rose-200 text-rose-900',
      desc: 'LLC, syndromes hémorragiques, adénopathies & splénomégalie, anémies, leucémies aiguës, hémostase, PTI & coagulopathies.',
    };
  }

  if (lower.includes('onco')) {
    return {
      label: 'Oncologie',
      name: 'Cancérologie & Oncologie Médicale',
      icon: '🎗️',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      activeCardBg: 'bg-purple-50/80 border-purple-400 shadow-md ring-2 ring-purple-200',
      hoverCardBg: 'bg-white hover:bg-purple-50/30 border-slate-200/80 shadow-xs hover:border-purple-200',
      iconBg: 'bg-purple-100 text-purple-700',
      pillActive: 'bg-purple-600 text-white shadow-sm',
      pillInactive: 'text-purple-700 hover:text-purple-900 hover:bg-purple-50',
      pillCount: 'bg-purple-100 text-purple-800',
      pillCountActive: 'bg-purple-700 text-white',
      btnActive: 'bg-purple-600 text-white shadow-xs',
      btnPlay: 'bg-purple-700 hover:bg-purple-800 text-white',
      bannerBg: 'bg-purple-50/90 border-purple-200 text-purple-900',
      desc: 'Urgences oncologiques, histologie des lymphomes, effets secondaires de chimio, armes thérapeutiques & classifications.',
    };
  }

  // Fallback (e.g. 'Autres' or other future subdivisions)
  return {
    label: s,
    name: s === 'Autres' ? 'Volet Complémentaire (Fichiers à venir)' : s,
    icon: '📁',
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
    activeCardBg: 'bg-sky-50/80 border-sky-400 shadow-md ring-2 ring-sky-200',
    hoverCardBg: 'bg-white hover:bg-sky-50/30 border-slate-200/80 shadow-xs hover:border-sky-200',
    iconBg: 'bg-sky-100 text-sky-700',
    pillActive: 'bg-sky-600 text-white shadow-sm',
    pillInactive: 'text-sky-700 hover:text-sky-900 hover:bg-sky-50',
    pillCount: 'bg-sky-100 text-sky-800',
    pillCountActive: 'bg-sky-700 text-white',
    btnActive: 'bg-sky-600 text-white shadow-xs',
    btnPlay: 'bg-sky-700 hover:bg-sky-800 text-white',
    bannerBg: 'bg-sky-50/90 border-sky-200 text-sky-900',
    desc: 'Section réceptrice prête pour l\'intégration de vos prochains documents et cours de gastroentérologie.',
  };
};

interface CourseHubProps {
  module: Module;
  onBack: () => void;
  onLaunchPracticeMode: (course: Course, mode: 'QCM' | 'CasClinique') => void;
  onLaunchSubdivisionPractice?: (subdivision: string, mode: 'QCM' | 'CasClinique') => void;
}

export const CourseHub: React.FC<CourseHubProps> = ({
  module,
  onBack,
  onLaunchPracticeMode,
  onLaunchSubdivisionPractice,
}) => {
  const courses = useMemo(() => MEDICAL_COURSES.filter((c) => c.moduleId === module.id), [module.id]);

  // Detect subdivisions inside this module
  const subdivisions = useMemo(() => {
    const list: string[] = [];
    courses.forEach((c) => {
      if (c.subdivision && !list.includes(c.subdivision)) {
        list.push(c.subdivision);
      }
    });
    return list;
  }, [courses]);

  const hasSubdivisions = subdivisions.length > 0;
  const [selectedSubdivision, setSelectedSubdivision] = useState<string>('all');

  const displayedCourses = useMemo(() => {
    if (selectedSubdivision === 'all') return courses;
    return courses.filter((c) => c.subdivision === selectedSubdivision);
  }, [courses, selectedSubdivision]);

  const [selectedCourse, setSelectedCourse] = useState<Course>(displayedCourses[0] || courses[0]);
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(displayedCourses[0]?.id || null);
  const [selectedResource, setSelectedResource] = useState<CourseResource | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Compute statistics for subdivisions
  const subdivisionStats = useMemo(() => {
    const stats: Record<string, { count: number; qcms: number; cas: number; total: number }> = {};
    subdivisions.forEach((sub) => {
      const subCourses = courses.filter((c) => c.subdivision === sub);
      const qcms = subCourses.reduce((sum, c) => sum + (c.qcmCount || 0), 0);
      const cas = subCourses.reduce((sum, c) => sum + (c.casCliniqueCount || 0), 0);
      stats[sub] = {
        count: subCourses.length,
        qcms,
        cas,
        total: qcms + cas,
      };
    });
    return stats;
  }, [courses, subdivisions]);

  useEffect(() => {
    if (displayedCourses.length > 0 && !displayedCourses.some((c) => c.id === selectedCourse?.id)) {
      setSelectedCourse(displayedCourses[0]);
      setExpandedCourseId(displayedCourses[0].id);
    }
  }, [displayedCourses, selectedCourse?.id]);

  const toggleCourseAccordion = (course: Course) => {
    setSelectedCourse(course);
    setExpandedCourseId((prev) => (prev === course.id ? null : course.id));
  };

  // Find resources for this course
  const courseResources = selectedCourse
    ? COURSE_RESOURCES.filter((r) => r.courseId === selectedCourse.id)
    : [];
  const resumes = courseResources.filter((r) => r.type === 'Resume' || r.type === 'mindmap');
  const astuces = courseResources.filter((r) => r.type === 'Astuce' || r.type === 'astuce');

  const handleOpenResume = (course: Course) => {
    setSelectedCourse(course);
    const found = COURSE_RESOURCES.find(
      (r) => r.courseId === course.id && (r.type === 'Resume' || r.type === 'mindmap' || r.type === 'resume')
    );
    if (found) {
      setSelectedResource(found);
    } else {
      setSelectedResource({
        id: `res-gen-${course.id}`,
        courseId: course.id,
        type: 'Resume',
        title: `Fiche de Synthèse : ${course.title}`,
        contentMarkdown: `## Points Clés & Définition\nSynthèse officielle pour le cours "${course.title}".\n\n### 1. Critères Diagnostiques Majeurs\n- Anamnèse clinique rigoureuse et identification des facteurs de risque.\n- Examens complémentaires de 1ère intention et interprétation selon les dernières recommandations.\n\n### 2. Stratégie Thérapeutique\n- Traitement d'urgence si signes de gravité.\n- Prise en charge étiologique et surveillance à long terme.`,
      });
    }
  };

  const handleOpenMnemo = (course: Course) => {
    setSelectedCourse(course);
    const found = COURSE_RESOURCES.find(
      (r) => r.courseId === course.id && (r.type === 'Astuce' || r.type === 'astuce')
    );
    if (found) {
      setSelectedResource(found);
    } else {
      setSelectedResource({
        id: `astuce-gen-${course.id}`,
        courseId: course.id,
        type: 'Astuce',
        title: `Mnémo & Perles Cliniques : ${course.title}`,
        contentMarkdown: `### Perle Clinique de Résidanat\nPour retenir les éléments clés du cours "${course.title}" :\n\n- Attention aux pièges récurrents de concours sur les contre-indications médicamenteuses.\n- Toujours vérifier le retentissement hémodynamique et la tolérance clinique avant toute décision invasive.`,
      });
    }
  };

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

  if (courses.length === 0) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto pb-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-xs text-center space-y-4">
          <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto shadow-xs p-2">
            {organMascot}
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
            {module.academicYear} • Module actuellement vide
          </span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {module.title}
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Ce module est actuellement totalement vide. Les cours, QCMs et cas cliniques y seront intégrés dès que vous fournirez son contenu ultérieurement.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
            >
              ← Retourner aux autres modules
            </button>
          </div>
        </div>
      </div>
    );
  }

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
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-100">
                  Module • {module.academicYear}
                </span>
                {hasSubdivisions && (
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-fuchsia-600 px-2 py-0.5 rounded-full bg-fuchsia-50 border border-fuchsia-200 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-fuchsia-500" />
                    Double Subdivision Spécialisée
                  </span>
                )}
              </div>
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
              <strong className="text-sm font-black text-indigo-700">{module.totalQuestions} Questions</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Module Gastro Notice Banner if in mod-gastro */}
      {module.id === 'mod-gastro' && (
        <div className="p-4 rounded-3xl bg-amber-500/10 border border-amber-300 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-black uppercase tracking-wider text-amber-900">
                  Hépato-Gastroentérologie : Subdivisions Configurées
                </h3>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                  5 Volets
                </span>
              </div>
              <p className="text-xs font-medium text-amber-800 mt-0.5">
                Subdivisions actives : <strong>ANAPATH</strong>, <strong>LES CANCER</strong>, <strong>Urgences</strong>, <strong>Gastro</strong> et <strong>Volet Complémentaire</strong> (prêt à recevoir vos prochains fichiers).
              </p>
            </div>
          </div>
          <span className="shrink-0 text-[11px] font-bold text-amber-900 bg-amber-100 border border-amber-200 px-3 py-1 rounded-xl">
            Prêt pour vos fichiers
          </span>
        </div>
      )}

      {/* DEDICATED DYNAMIC SUBDIVISION BENTO: Supports ANAPATH, LES CANCER, Urgences, Gastro, Hématologie, Oncologie, etc. */}
      {hasSubdivisions && (
        <div
          className={`grid gap-4 ${
            subdivisions.length === 1
              ? 'grid-cols-1'
              : subdivisions.length === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : subdivisions.length === 3
              ? 'grid-cols-1 md:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {subdivisions.map((sub, sIdx) => {
            const meta = getSubdivisionMeta(sub);
            const isSubSelected = selectedSubdivision === sub;
            const stats = subdivisionStats[sub] || { count: 0, qcms: 0, cas: 0, total: 0 };

            return (
              <div
                key={sub}
                onClick={() => {
                  setSelectedSubdivision(sub);
                  const firstSubCourse = courses.find((c) => c.subdivision === sub);
                  if (firstSubCourse) {
                    setSelectedCourse(firstSubCourse);
                    setExpandedCourseId(firstSubCourse.id);
                  }
                }}
                className={`p-5 rounded-3xl border transition-all cursor-pointer relative overflow-hidden group flex flex-col justify-between ${
                  isSubSelected ? meta.activeCardBg : meta.hoverCardBg
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-2xl ${meta.iconBg} flex items-center justify-center font-black text-xl shadow-xs shrink-0`}
                      >
                        {meta.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span
                            className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${meta.badgeBg}`}
                          >
                            Volet n°{sIdx + 1}
                          </span>
                          {isSubSelected && (
                            <span className="text-[9px] font-black uppercase text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                              Actif
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight mt-0.5 truncate">
                          {meta.label}
                        </h3>
                      </div>
                    </div>
                    <span className={`text-[11px] font-black px-2.5 py-1 rounded-xl shrink-0 ${meta.badgeBg}`}>
                      {stats.count} Cours
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed font-medium mb-3 line-clamp-3">
                    {meta.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-auto">
                  <div className="text-[11px] font-bold text-slate-700 flex items-center justify-between">
                    <span>{stats.qcms} QCMs • {stats.cas} Cas</span>
                    <span className="text-slate-400 font-semibold">({stats.total} tot.)</span>
                  </div>

                  <div className="flex items-center gap-1.5 w-full">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSubdivision(sub);
                        const firstSubCourse = courses.find((c) => c.subdivision === sub);
                        if (firstSubCourse) {
                          setSelectedCourse(firstSubCourse);
                          setExpandedCourseId(firstSubCourse.id);
                        }
                      }}
                      className={`flex-1 px-2.5 py-1.5 rounded-xl text-[11px] font-extrabold transition-all cursor-pointer text-center ${
                        isSubSelected
                          ? meta.btnActive
                          : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {isSubSelected ? '✓ Volet affiché' : `Filtrer ${meta.label}`}
                    </button>

                    {onLaunchSubdivisionPractice && stats.total > 0 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onLaunchSubdivisionPractice(sub, 'QCM');
                        }}
                        className={`px-2.5 py-1.5 rounded-xl text-[11px] font-extrabold ${meta.btnPlay} shadow-xs flex items-center justify-center gap-1 cursor-pointer transition-all shrink-0`}
                        title="Lancer l'entraînement complet sur cette subdivision"
                      >
                        <Play className="w-3 h-3 fill-white text-white" />
                        <span>Série</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Main Grid: Courses List (Left) & Hub Practice (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Official Courses List with Interactive Accordion Sub-Menu */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>
                {selectedSubdivision === 'all'
                  ? `Tous les Cours Officiels (${courses.length})`
                  : `Cours : ${selectedSubdivision} (${displayedCourses.length})`}
              </span>
            </h3>
            <span className="text-[10px] font-bold text-slate-400">Cliquez pour déplier</span>
          </div>

          {/* Quick Filter Switcher Pills */}
          {hasSubdivisions && (
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/70">
              <button
                type="button"
                onClick={() => setSelectedSubdivision('all')}
                className={`py-1.5 px-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedSubdivision === 'all'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                }`}
              >
                Tout ({courses.length})
              </button>
              {subdivisions.map((sub) => {
                const meta = getSubdivisionMeta(sub);
                const isSubSelected = selectedSubdivision === sub;
                return (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => {
                      setSelectedSubdivision(sub);
                      const firstSubCourse = courses.find((c) => c.subdivision === sub);
                      if (firstSubCourse) {
                        setSelectedCourse(firstSubCourse);
                        setExpandedCourseId(firstSubCourse.id);
                      }
                    }}
                    className={`py-1.5 px-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isSubSelected ? meta.pillActive : meta.pillInactive
                    }`}
                  >
                    <span>
                      {meta.icon} {meta.label}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSubSelected ? meta.pillCountActive : meta.pillCount
                      }`}
                    >
                      {subdivisionStats[sub]?.count || 0}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Active Filter Notice */}
          {selectedSubdivision !== 'all' && (() => {
            const meta = getSubdivisionMeta(selectedSubdivision);
            return (
              <div
                className={`px-3 py-2 rounded-2xl border flex items-center justify-between text-xs animate-in fade-in duration-200 ${meta.bannerBg}`}
              >
                <div className="flex items-center gap-2 font-bold">
                  <span>{meta.icon}</span>
                  <span>Volet {meta.label} activé ({displayedCourses.length} cours)</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSubdivision('all')}
                  className="text-[11px] font-extrabold underline hover:opacity-80 cursor-pointer"
                >
                  Tout réafficher
                </button>
              </div>
            );
          })()}

          <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1 scrollbar-thin">
            {displayedCourses.map((course, idx) => {
              const isSelected = selectedCourse.id === course.id;
              const isExpanded = expandedCourseId === course.id;

              // Check if we need to show a subdivision divider when viewing 'all'
              const prevCourse = displayedCourses[idx - 1];
              const showSubDivider =
                selectedSubdivision === 'all' &&
                Boolean(course.subdivision) &&
                (!prevCourse || prevCourse.subdivision !== course.subdivision);
              const courseMeta = course.subdivision ? getSubdivisionMeta(course.subdivision) : null;

              return (
                <React.Fragment key={course.id}>
                  {showSubDivider && courseMeta && (
                    <div className="pt-2 pb-1">
                      <div
                        className={`px-3.5 py-2 rounded-2xl border flex items-center justify-between text-xs font-black shadow-2xs ${courseMeta.badgeBg}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{courseMeta.icon}</span>
                          <span>SUBDIVISION : {courseMeta.label} ({courseMeta.name})</span>
                        </div>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-lg bg-white/80">
                          {subdivisionStats[course.subdivision || '']?.count || 0} cours
                        </span>
                      </div>
                    </div>
                  )}

                  <div
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isSelected
                        ? courseMeta
                          ? courseMeta.activeCardBg
                          : 'bg-white border-indigo-400 shadow-md ring-2 ring-indigo-100'
                        : 'bg-white hover:bg-slate-50/80 border-slate-200/80'
                    }`}
                  >
                    {/* Clickable Course Header Row */}
                    <div
                      onClick={() => toggleCourseAccordion(course)}
                      className="p-3.5 flex items-center justify-between gap-3 cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                            isSelected
                              ? courseMeta
                                ? courseMeta.btnActive
                                : 'bg-indigo-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {course.orderIndex}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            {course.subdivision && courseMeta && (
                              <span
                                className={`text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded-md border ${courseMeta.badgeBg}`}
                              >
                                {courseMeta.icon} {courseMeta.label}
                              </span>
                            )}
                          </div>
                          <h4
                            className={`text-xs font-bold truncate transition-colors ${
                              isSelected
                                ? 'text-slate-950 font-black'
                                : 'text-slate-800'
                            }`}
                          >
                            {course.title}
                          </h4>
                          <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5 font-medium">
                            <span>{course.qcmCount} QCMs</span>
                            <span>•</span>
                            <span>{course.casCliniqueCount} Cas Cliniques</span>
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isExpanded
                            ? 'rotate-90 text-indigo-600'
                            : 'text-slate-300'
                        }`}
                      />
                    </div>

                    {/* 1. Interactive Course Sub-Menu (Accordion Style) */}
                    {isExpanded && (
                      <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-100 bg-slate-50/70 animate-in fade-in slide-in-from-top-1 duration-200">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                          Accès rapide au contenu :
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {/* Option 1: QCM */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onLaunchPracticeMode(course, 'QCM');
                            }}
                            className="px-2.5 py-2 rounded-xl bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 text-left transition-all flex items-center justify-between group cursor-pointer shadow-2xs"
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <div className="w-5 h-5 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                                <CheckSquare className="w-3 h-3" />
                              </div>
                              <span className="text-[11px] font-extrabold text-slate-800 group-hover:text-rose-700 truncate">
                                QCM
                              </span>
                            </div>
                            <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                              {course.qcmCount}
                            </span>
                          </button>

                          {/* Option 2: Cas Clinique */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onLaunchPracticeMode(course, 'CasClinique');
                            }}
                            className="px-2.5 py-2 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-200 text-left transition-all flex items-center justify-between group cursor-pointer shadow-2xs"
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <div className="w-5 h-5 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                                <Stethoscope className="w-3 h-3" />
                              </div>
                              <span className="text-[11px] font-extrabold text-slate-800 group-hover:text-sky-700 truncate">
                                Cas Clinique
                              </span>
                            </div>
                            <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded">
                              {course.casCliniqueCount}
                            </span>
                          </button>

                          {/* Option 3: Résumé */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenResume(course);
                            }}
                            className="px-2.5 py-2 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-left transition-all flex items-center justify-between group cursor-pointer shadow-2xs"
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <div className="w-5 h-5 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                                <FileText className="w-3 h-3" />
                              </div>
                              <span className="text-[11px] font-extrabold text-slate-800 group-hover:text-emerald-800 truncate">
                                Mind Map
                              </span>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                              Fiche
                            </span>
                          </button>

                          {/* Option 4: Mnemo */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenMnemo(course);
                            }}
                            className="px-2.5 py-2 rounded-xl bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-200 text-left transition-all flex items-center justify-between group cursor-pointer shadow-2xs"
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <div className="w-5 h-5 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                                <Lightbulb className="w-3 h-3" />
                              </div>
                              <span className="text-[11px] font-extrabold text-slate-800 group-hover:text-amber-800 truncate">
                                Concours
                              </span>
                            </div>
                            <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                              Pièges
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Right: Hub Content & 4 Training Modes */}
        <div className="lg:col-span-7 space-y-5">
          {/* Active Course Overview Card */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200">
                    Cours n°{selectedCourse.orderIndex} Sélectionné
                  </span>
                  {selectedCourse.subdivision && (() => {
                    const selMeta = getSubdivisionMeta(selectedCourse.subdivision);
                    return (
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${selMeta.badgeBg}`}
                      >
                        <span>{selMeta.icon}</span>
                        <span>Volet {selMeta.label} : {selMeta.name}</span>
                      </span>
                    );
                  })()}
                </div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-1.5">
                  {selectedCourse.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
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
                    Série séquentielle avec navigation intuitive, explication pour chaque proposition et perles.
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
                    Dossiers cliniques de concours avec étapes diagnostiques, examens complémentaires et thérapeutique.
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
                  else handleOpenResume(selectedCourse);
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
                      Mind Map
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Mind Map & Synthèse Visuelle
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    Arbre décisionnel structuré, critères diagnostiques et recommandations thérapeutiques.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs text-emerald-700 font-extrabold">
                  <span>Consulter la Mind Map</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Mode 4: Mnémos & Astuces */}
              <div
                onClick={() => {
                  if (astuces.length > 0) setSelectedResource(astuces[0]);
                  else handleOpenMnemo(selectedCourse);
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
                      Concours
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-amber-800 transition-colors">
                    Astuces & Pièges de Résidanat
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    Moyens mnémotechniques, pièges récurrents et perles indispensables pour réussir le concours.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-amber-800 font-extrabold">
                  <span>Voir les pièges & astuces</span>
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
                    {selectedResource.type === 'Resume' || selectedResource.type === 'mindmap' ? (
                      <FileText className="w-5 h-5" />
                    ) : (
                      <Lightbulb className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">
                      {selectedResource.type === 'Resume' || selectedResource.type === 'mindmap'
                        ? 'Mind Map & Synthèse'
                        : 'Astuces & Pièges de Résidanat'}
                    </span>
                    <h3 className="font-black text-base text-slate-900 tracking-tight">
                      {selectedResource.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyResource(selectedResource.contentMarkdown || selectedResource.content || '')}
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
                {selectedResource.contentMarkdown || selectedResource.content}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
