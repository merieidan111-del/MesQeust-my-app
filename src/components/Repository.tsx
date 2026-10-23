import React, { useState } from 'react';
import {
  FolderOpen,
  ExternalLink,
  Search,
  BookOpen,
  Copy,
  Check,
  GraduationCap,
  HeartPulse,
  Brain,
  Wind,
  Stethoscope,
  Shield,
  Activity,
  Baby,
  Sparkles,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

export interface YearDriveConfig {
  id: '3eme' | '4eme' | '5eme';
  yearName: string;
  yearShort: string;
  driveUrl: string;
  badgeColor: string;
  borderColor: string;
  buttonBg: string;
  description: string;
  subdivisions: {
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }[];
}

const GENERAL_DRIVE_URL =
  'https://drive.google.com/drive/folders/1ZafUI5rcn-KQ2O-0A22kjXQFnAjaiiKG?usp=drive_link';

const YEAR_DRIVES: YearDriveConfig[] = [
  {
    id: '3eme',
    yearName: '3ème Année d’Externat',
    yearShort: '3ème Année',
    driveUrl:
      'https://drive.google.com/drive/folders/1WFDtAN1tiShufMYPt8qdSzp99HHfkD-T?usp=drive_link',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    borderColor: 'border-amber-200',
    buttonBg: 'bg-amber-600 hover:bg-amber-700',
    description:
      'Dossier Google Drive dédié à la 3ème Année : Sémiologie clinique, propédeutique et bases fondamentales.',
    subdivisions: [
      {
        name: 'Sémiologie Médicale & Propédeutique',
        description: 'Examen clinique méthodique, anamnèse et syndromes sémiologiques.',
        icon: Stethoscope,
        accentColor: 'text-amber-600 bg-amber-50 border-amber-200',
      },
      {
        name: 'Sémiologie Chirurgicale & Urgences',
        description: 'Abdomen aigu, traumatologie, plaies, brûlures et gestes techniques.',
        icon: Activity,
        accentColor: 'text-orange-600 bg-orange-50 border-orange-200',
      },
      {
        name: 'Radiologie & Imagerie Médicale',
        description: 'Radiographies standards, tomodensitométrie (TDM), IRM et échographie.',
        icon: Layers,
        accentColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      },
      {
        name: 'Pharmacologie & Thérapeutique Générale',
        description: 'Classes pharmacologiques, pharmacocinétique et règles de prescription.',
        icon: Sparkles,
        accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      },
      {
        name: 'Anatomopathologie & Histologie',
        description: 'Lésions élémentaires tissulaires, biopsies et orientations diagnostiques.',
        icon: BookOpen,
        accentColor: 'text-rose-600 bg-rose-50 border-rose-200',
      },
    ],
  },
  {
    id: '4eme',
    yearName: '4ème Année d’Externat',
    yearShort: '4ème Année',
    driveUrl:
      'https://drive.google.com/drive/folders/1MHbeXZGsvw1IgewboZ0d6inKo17kbzJI?usp=drive_link',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-200',
    borderColor: 'border-rose-200',
    buttonBg: 'bg-rose-600 hover:bg-rose-700',
    description:
      'Dossier Google Drive dédié à la 4ème Année : Pathologies des grands systèmes d’organes et thérapeutique.',
    subdivisions: [
      {
        name: 'Cardiologie & Vasculaire',
        description: 'Insuffisance cardiaque, SCA, troubles du rythme, HTA et valvulopathies.',
        icon: HeartPulse,
        accentColor: 'text-rose-600 bg-rose-50 border-rose-200',
      },
      {
        name: 'Neurologie Clinique & Neurochirurgie',
        description: 'AVC, épilepsie, céphalées, sclérose en plaques et neuropathies périphériques.',
        icon: Brain,
        accentColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      },
      {
        name: 'Pneumologie & Phtisiologie',
        description: 'Asthme, BPCO, pneumonies aiguës, pleurésies, tuberculose et cancer bronchique.',
        icon: Wind,
        accentColor: 'text-sky-600 bg-sky-50 border-sky-200',
      },
      {
        name: 'Hépato-Gastroentérologie',
        description: 'Hémorragies digestives, cirrhose hépatique, MICI, pancréatite et lithiases.',
        icon: Stethoscope,
        accentColor: 'text-amber-600 bg-amber-50 border-amber-200',
      },
      {
        name: 'Maladies Infectieuses',
        description: 'Antibiothérapie raisonnée, méningites, septicémies, paludisme et zoonoses.',
        icon: Shield,
        accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      },
      {
        name: 'Hématologie & Onco-hématologie',
        description: 'Anémies, cytopénies, leucémies, lymphomes et troubles de la coagulation.',
        icon: Activity,
        accentColor: 'text-purple-600 bg-purple-50 border-purple-200',
      },
    ],
  },
  {
    id: '5eme',
    yearName: '5ème Année d’Externat',
    yearShort: '5ème Année',
    driveUrl:
      'https://drive.google.com/drive/folders/1jBQPhIbvK2kHHqx_CnU-ONOtSNV7lZM5?usp=drive_link',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
    borderColor: 'border-purple-200',
    buttonBg: 'bg-purple-700 hover:bg-purple-800',
    description:
      'Dossier Google Drive dédié à la 5ème Année : Spécialités cliniques, réanimation, mère-enfant et résidanat.',
    subdivisions: [
      {
        name: 'Pédiatrie Clinique & Néonatologie',
        description: 'Développement psychomoteur, vaccinations, détresse respiratoire et urgences pédiatriques.',
        icon: Baby,
        accentColor: 'text-sky-600 bg-sky-50 border-sky-200',
      },
      {
        name: 'Gynécologie & Obstétrique',
        description: 'Suivi de grossesse, accouchement, pathologies du post-partum et cancers gynécologiques.',
        icon: HeartPulse,
        accentColor: 'text-pink-600 bg-pink-50 border-pink-200',
      },
      {
        name: 'Urgences, Réanimation & Toxicologie',
        description: 'Arrêt cardiorespiratoire, états de choc, détresses vitales et intoxications aiguës.',
        icon: Shield,
        accentColor: 'text-rose-600 bg-rose-50 border-rose-200',
      },
      {
        name: 'Psychiatrie & Pédopsychiatrie',
        description: 'Troubles de l’humeur, schizophrénie, anxiété, psychothérapies et urgences psychiatriques.',
        icon: Brain,
        accentColor: 'text-purple-600 bg-purple-50 border-purple-200',
      },
      {
        name: 'Endocrinologie, Diabétologie & Métabolisme',
        description: 'Diabète de type 1 et 2, dysthyroïdies, insuffisance surrénalienne et adénomes.',
        icon: Sparkles,
        accentColor: 'text-teal-600 bg-teal-50 border-teal-200',
      },
      {
        name: 'Néphrologie & Urologie',
        description: 'Insuffisance rénale aiguë et chronique, néphropathies glomérulaires et colique néphrétique.',
        icon: Activity,
        accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      },
    ],
  },
];

interface LibraryProps {
  onLoadQuestionsToEngine?: (questions: any[], sourceName: string) => void;
  onSendToAISummarizer?: (text: string, title: string) => void;
}

export const Library: React.FC<LibraryProps> = () => {
  const [selectedYearFilter, setSelectedYearFilter] = useState<'all' | '3eme' | '4eme' | '5eme'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopyLink = (url: string, label: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(label);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const filteredYears = YEAR_DRIVES.filter((year) => {
    if (selectedYearFilter !== 'all' && year.id !== selectedYearFilter) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchesYear = year.yearName.toLowerCase().includes(query);
    const matchesSubdivision = year.subdivisions.some(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query)
    );
    return matchesYear || matchesSubdivision;
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Toast feedback when copying link */}
      {copiedLink && (
        <div className="fixed top-20 right-6 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-3 rounded-2xl shadow-xl border bg-slate-900 text-white border-purple-400/40 text-xs font-bold flex items-center gap-2.5 backdrop-blur-md">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Lien {copiedLink} copié dans le presse-papier !</span>
          </div>
        </div>
      )}

      {/* 1. HERO BANNER: GENERAL DRIVE (Dossier Drive Général) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#311465] via-[#4A2580] to-[#2E1065] text-white shadow-xl shadow-purple-950/20 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-black text-purple-200">
            <FolderOpen className="w-3.5 h-3.5 text-[#B794F6]" />
            <span>Google Drive Général • Bibliothèque Officielle</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white drop-shadow-sm">
            Library
          </h1>
          <p className="text-xs sm:text-sm text-purple-150 font-medium leading-relaxed max-w-xl text-purple-100/90">
            Retrouvez tous vos polycopiés, fiches de révision, cours officiels et archives d’externat
            centralisés sur votre Google Drive général et organisés par année d'études.
          </p>
        </div>

        {/* Action Button: Direct Link to General Drive */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 w-full lg:w-auto relative z-10">
          <a
            href={GENERAL_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-white hover:bg-purple-50 text-[#311465] font-black text-xs shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
            title="Ouvrir le Google Drive général dans un nouvel onglet"
          >
            <FolderOpen className="w-4 h-4 text-purple-800" />
            <span>Ouvrir le Drive Général</span>
            <ExternalLink className="w-3.5 h-3.5 text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            type="button"
            onClick={() => handleCopyLink(GENERAL_DRIVE_URL, 'Général')}
            className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
            title="Copier le lien du Drive Général"
          >
            <Copy className="w-4 h-4 text-purple-200" />
          </button>
        </div>
      </div>

      {/* 2. YEAR QUICK SELECTOR & SEARCH BAR */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Year Pills Filter */}
        <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-2xl border border-slate-200/60 overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedYearFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
              selectedYearFilter === 'all'
                ? 'bg-white text-[#311465] shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Toutes les Années
          </button>
          <button
            type="button"
            onClick={() => setSelectedYearFilter('3eme')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
              selectedYearFilter === '3eme'
                ? 'bg-white text-amber-800 shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            3ème Année
          </button>
          <button
            type="button"
            onClick={() => setSelectedYearFilter('4eme')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
              selectedYearFilter === '4eme'
                ? 'bg-white text-rose-800 shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4ème Année
          </button>
          <button
            type="button"
            onClick={() => setSelectedYearFilter('5eme')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
              selectedYearFilter === '5eme'
                ? 'bg-white text-purple-800 shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            5ème Année
          </button>
        </div>

        {/* Search Input for Subdivisions */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filtrer les modules (Cardio, Neuro, Pédiatrie, Sémiologie...)..."
            className="w-full pl-10 pr-4 py-2 text-xs font-bold text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200/80 rounded-2xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* 3. YEAR SPECIFIC DRIVE BOARDS WITH SUBDIVISIONS */}
      <div className="space-y-6">
        {filteredYears.map((year) => (
          <div
            key={year.id}
            className={`rounded-3xl bg-white border ${year.borderColor} shadow-xs overflow-hidden transition-all`}
          >
            {/* Year Drive Header Card */}
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 via-white to-slate-50/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full border ${year.badgeColor}`}
                  >
                    {year.yearShort}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">•</span>
                  <span className="text-xs text-slate-600 font-bold">
                    {year.subdivisions.length} Modules & Subdivisions
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2 mt-1">
                  <GraduationCap className="w-5 h-5 text-slate-700" />
                  <span>{year.yearName}</span>
                </h2>
                <p className="text-xs text-slate-500 font-medium max-w-2xl">
                  {year.description}
                </p>
              </div>

              {/* Action Buttons: Open Drive of this Year */}
              <div className="flex items-center gap-2 shrink-0 self-stretch sm:self-auto">
                <a
                  href={year.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 sm:flex-none px-5 py-2.5 rounded-2xl ${year.buttonBg} text-white text-xs font-black shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group`}
                  title={`Ouvrir le dossier Google Drive de ${year.yearShort}`}
                >
                  <FolderOpen className="w-4 h-4 text-white" />
                  <span>Ouvrir le Drive {year.yearShort}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => handleCopyLink(year.driveUrl, year.yearShort)}
                  className="p-2.5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold transition-colors cursor-pointer"
                  title={`Copier le lien Drive de ${year.yearShort}`}
                >
                  <Copy className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Subdivisions of this Year Grid */}
            <div className="p-5 sm:p-6 bg-slate-50/30">
              <div className="flex items-center justify-between mb-3 px-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-700" />
                  Subdivisions & Modules du Cursus
                </h4>
                <span className="text-[11px] text-slate-400 font-medium">
                  Rattachés au Drive {year.yearShort}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {year.subdivisions.map((sub, index) => {
                  const Icon = sub.icon;
                  return (
                    <a
                      key={index}
                      href={year.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-purple-300 hover:shadow-xs transition-all flex flex-col justify-between gap-3 group cursor-pointer"
                      title={`Accéder aux documents de ${sub.name} sur le Drive ${year.yearShort}`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className={`p-2 rounded-xl border ${sub.accentColor}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-slate-400 group-hover:text-purple-700 transition-colors">
                            <span>Drive</span>
                            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </span>
                        </div>

                        <h5 className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-purple-900 transition-colors leading-snug">
                          {sub.name}
                        </h5>
                        <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed line-clamp-2">
                          {sub.description}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-purple-700/80 group-hover:text-purple-900">
                        <span className="flex items-center gap-1">
                          <FolderOpen className="w-3 h-3 text-purple-600" />
                          <span>Dossier {year.yearShort}</span>
                        </span>
                        <span>Consulter →</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Backwards-compatible export alias
export const Repository = Library;
