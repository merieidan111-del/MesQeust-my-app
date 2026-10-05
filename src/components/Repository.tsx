import React, { useState } from 'react';
import {
  HardDrive,
  FolderOpen,
  ExternalLink,
  Search,
  FileText,
  Play,
  Sparkles,
  Download,
  CheckCircle,
  AlertCircle,
  FolderCheck,
  Layers,
  ArrowRight,
  BookOpen,
  Check,
} from 'lucide-react';
import { Question } from '../types/medical';
import { SAMPLE_DRIVE_FILES, parseQCMContent } from '../services/googleDriveService';

interface RepositoryProps {
  onLoadQuestionsToEngine: (questions: Question[], sourceName: string) => void;
  onSendToAISummarizer?: (text: string, title: string) => void;
}

interface RepositoryCategory {
  id: string;
  title: string;
  subtitle: string;
  folderName: string;
  driveFolderUrl: string;
  color: string;
  items: {
    id: string;
    name: string;
    type: 'PDF' | 'JSON' | 'TXT' | 'DOCX';
    size: string;
    questionsCount: number;
    updatedAt: string;
    directDriveUrl: string;
    sampleContentKey?: string;
  }[];
}

const REPOSITORY_CATEGORIES: RepositoryCategory[] = [
  {
    id: 'repo-cardio',
    title: 'Cardiologie & Vasculaire',
    subtitle: 'Syndromes coronariens aigus, insuffisance cardiaque, troubles du rythme, valvulopathies & HTA.',
    folderName: 'QCM AI GENERATED / 01_Cardiologie',
    driveFolderUrl: 'https://drive.google.com/drive/u/0/search?q=QCM%20AI%20GENERATED%20Cardiologie',
    color: 'from-rose-500 to-red-600',
    items: [
      {
        id: 'cardio-sca-01',
        name: 'QCM AI Generated - Cardiologie Urgences & SCA.txt',
        type: 'TXT',
        size: '14.2 KB',
        questionsCount: 15,
        updatedAt: 'Récemment synchronisé',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Cardiologie%20Urgences%20SCA',
        sampleContentKey: 'mock-drive-qcm-cardio-01',
      },
      {
        id: 'cardio-ic-02',
        name: 'QCM AI Generated - Insuffisance Cardiaque & OAP.pdf',
        type: 'PDF',
        size: '28.5 KB',
        questionsCount: 20,
        updatedAt: 'Semaine passée',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Cardiologie%20Insuffisance%20Cardiaque',
      },
      {
        id: 'cardio-rythmo-03',
        name: 'QCM AI Generated - Troubles du Rythme & Conduction ECG.pdf',
        type: 'PDF',
        size: '34.1 KB',
        questionsCount: 25,
        updatedAt: 'Semaine passée',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Troubles%20du%20Rythme%20ECG',
      },
    ],
  },
  {
    id: 'repo-neuro',
    title: 'Neurologie Clinique',
    subtitle: 'AVC ischémiques & hémorragiques, épilepsies, méningites, céphalées aiguës & neuropathies.',
    folderName: 'QCM AI GENERATED / 02_Neurologie',
    driveFolderUrl: 'https://drive.google.com/drive/u/0/search?q=QCM%20AI%20GENERATED%20Neurologie',
    color: 'from-indigo-500 to-purple-600',
    items: [
      {
        id: 'neuro-avc-01',
        name: 'QCM AI Generated - Neurologie AVC & Crises Épileptiques.json',
        type: 'JSON',
        size: '18.8 KB',
        questionsCount: 18,
        updatedAt: 'Récemment synchronisé',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Neurologie%20AVC%20Epilepsie',
        sampleContentKey: 'mock-drive-qcm-neuro-02',
      },
      {
        id: 'neuro-cephalee-02',
        name: 'QCM AI Generated - Céphalées Brutales & Méningites Aiguës.pdf',
        type: 'PDF',
        size: '22.0 KB',
        questionsCount: 16,
        updatedAt: 'Il y a 2 semaines',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Cephalees%20Meningites%20Aigues',
      },
    ],
  },
  {
    id: 'repo-gastro',
    title: 'Hépato-Gastroentérologie',
    subtitle: 'Cirrhose et décompensations, hémorragies digestives hautes/basses, pancréatites & MICI.',
    folderName: 'QCM AI GENERATED / 03_Gastroenterologie',
    driveFolderUrl: 'https://drive.google.com/drive/u/0/search?q=QCM%20AI%20GENERATED%20Gastro',
    color: 'from-amber-500 to-orange-600',
    items: [
      {
        id: 'gastro-cirrhose-01',
        name: 'QCM AI Generated - Cirrhose Hépatique & Hémorragies Digestives.txt',
        type: 'TXT',
        size: '16.4 KB',
        questionsCount: 14,
        updatedAt: 'Récemment synchronisé',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Cirrhose%20Hemorragies%20Digestives',
        sampleContentKey: 'mock-drive-qcm-gastro-03',
      },
      {
        id: 'gastro-pancreatite-02',
        name: 'QCM AI Generated - Pancréatite Aiguë & Critères Balthazar.pdf',
        type: 'PDF',
        size: '19.2 KB',
        questionsCount: 12,
        updatedAt: 'Il y a 2 semaines',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Pancreatite%20Aigue%20Balthazar',
      },
    ],
  },
  {
    id: 'repo-pneumo',
    title: 'Pneumologie & Urgences Thoraciques',
    subtitle: 'Asthme aigu grave, exacerbation de BPCO, pneumonies franches lobaires aiguës & embolies pulmonaires.',
    folderName: 'QCM AI GENERATED / 04_Pneumologie',
    driveFolderUrl: 'https://drive.google.com/drive/u/0/search?q=QCM%20AI%20GENERATED%20Pneumologie',
    color: 'from-cyan-500 to-blue-600',
    items: [
      {
        id: 'pneumo-asthme-01',
        name: 'QCM AI Generated - Asthme Aigu Grave & BPCO Exacerbée.pdf',
        type: 'PDF',
        size: '26.8 KB',
        questionsCount: 22,
        updatedAt: 'Récemment synchronisé',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Asthme%20Aigu%20Grave%20BPCO',
      },
      {
        id: 'pneumo-ep-02',
        name: 'QCM AI Generated - Embolie Pulmonaire & Score de Genève.pdf',
        type: 'PDF',
        size: '21.5 KB',
        questionsCount: 15,
        updatedAt: 'Il y a 3 semaines',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Embolie%20Pulmonaire%20Geneve',
      },
    ],
  },
  {
    id: 'repo-y5',
    title: 'Modules de 5ème Année (Pédiatrie, OTR, Gynéco)',
    subtitle: 'Détresses respiratoires néonatales, urgences obstétricales, traumatologie et endocrinologie.',
    folderName: 'QCM AI GENERATED / 05_Cinquieme_Annee',
    driveFolderUrl: 'https://drive.google.com/drive/u/0/search?q=QCM%20AI%20GENERATED%205eme%20Annee',
    color: 'from-teal-500 to-emerald-600',
    items: [
      {
        id: 'ped-urg-01',
        name: 'QCM AI Generated - Pédiatrie Fièvre & Déshydratation Aiguë.pdf',
        type: 'PDF',
        size: '30.1 KB',
        questionsCount: 20,
        updatedAt: 'Récemment synchronisé',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Pediatrie%20Fievre%20Deshydratation',
      },
      {
        id: 'gyneco-02',
        name: 'QCM AI Generated - Gynécologie Hémorragies du 3ème Trimestre.pdf',
        type: 'PDF',
        size: '18.4 KB',
        questionsCount: 14,
        updatedAt: 'Il y a 1 mois',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Gynecologie%20Obstetrique%20Hemorragies',
      },
    ],
  },
  {
    id: 'repo-annales',
    title: 'Annales & Dossiers Transversaux Résidanat',
    subtitle: 'Sujets types nationaux, cas cliniques multidisciplinaires et QCMs de concours classés.',
    folderName: 'QCM AI GENERATED / 00_Annales_Transversales',
    driveFolderUrl: 'https://drive.google.com/drive/u/0/search?q=QCM%20AI%20GENERATED%20Annales',
    color: 'from-purple-500 to-rose-600',
    items: [
      {
        id: 'annales-2025-01',
        name: 'QCM AI Generated - Sujets Types Concours Résidanat 2025.pdf',
        type: 'PDF',
        size: '52.3 KB',
        questionsCount: 40,
        updatedAt: 'Mise à jour majeure',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Annales%20Concours%20Residanat%202025',
      },
      {
        id: 'annales-transversal-02',
        name: 'QCM AI Generated - Dossiers Cliniques Transversaux (Urgence & Réa).pdf',
        type: 'PDF',
        size: '41.0 KB',
        questionsCount: 30,
        updatedAt: 'Il y a 2 semaines',
        directDriveUrl: 'https://drive.google.com/drive/u/0/search?q=Dossiers%20Cliniques%20Transversaux',
      },
    ],
  },
];

export const Repository: React.FC<RepositoryProps> = ({
  onLoadQuestionsToEngine,
}) => {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [loadedFileId, setLoadedFileId] = useState<string | null>(null);

  const ROOT_DRIVE_URL = 'https://drive.google.com/drive/u/0/search?q=QCM%20AI%20GENERATED';

  const handleLoadSample = (sampleKey: string | undefined, title: string) => {
    if (!sampleKey) return;
    const sample = SAMPLE_DRIVE_FILES.find((s) => s.file.id === sampleKey);
    if (sample) {
      const parsed = parseQCMContent(sample.content, title);
      onLoadQuestionsToEngine(parsed, title);
      setLoadedFileId(sampleKey);
      setTimeout(() => setLoadedFileId(null), 3000);
    }
  };

  const filteredCategories = REPOSITORY_CATEGORIES.map((cat) => {
    if (!searchFilter.trim()) return cat;
    const term = searchFilter.toLowerCase();
    const matchingItems = cat.items.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        cat.title.toLowerCase().includes(term)
    );
    return {
      ...cat,
      items: matchingItems,
    };
  }).filter((cat) => cat.items.length > 0);

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* 1. Header Card with Direct Action to Root Google Drive */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-black text-indigo-700">
            <HardDrive className="w-3.5 h-3.5" />
            <span>Google Drive Repository • QCM AI GENERATED</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Repository des Ressources d'Études
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Consultez, téléchargez et entraînez-vous directement sur les banques de QCMs générées par intelligence artificielle et organisées par module d'externat.
          </p>
        </div>

        {/* Action Button: Open Root Google Drive in New Tab */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
          <a
            href={ROOT_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md shadow-indigo-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <FolderOpen className="w-4 h-4" />
            <span>Ouvrir Google Drive (Racine)</span>
            <ExternalLink className="w-3.5 h-3.5 text-indigo-200 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Rechercher une banque de QCMs, un module (Cardio, Neuro, Pédiatrie...)..."
            className="w-full pl-10 pr-4 py-2 text-xs font-semibold text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-all"
          />
        </div>
        {searchFilter && (
          <button
            onClick={() => setSearchFilter('')}
            className="text-xs font-bold text-slate-500 hover:text-slate-700 px-2 py-1"
          >
            Effacer
          </button>
        )}
      </div>

      {/* 3. Categorized Sections */}
      <div className="space-y-6">
        {filteredCategories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-3xl bg-white border border-slate-200/80 shadow-xs overflow-hidden"
          >
            {/* Section Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-slate-50/70 to-white">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700">
                    {cat.folderName}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">•</span>
                  <span className="text-xs text-indigo-600 font-extrabold">
                    {cat.items.length} document(s)
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight mt-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {cat.subtitle}
                </p>
              </div>

              {/* Action Button: Open specific category folder in Drive */}
              <a
                href={cat.driveFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-extrabold shadow-2xs hover:border-indigo-300 transition-all shrink-0 cursor-pointer self-start sm:self-auto"
              >
                <FolderOpen className="w-3.5 h-3.5 text-indigo-600" />
                <span>Voir le dossier Drive</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Document Cards List */}
            <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-slate-200/80 hover:border-indigo-300 hover:shadow-xs transition-all bg-white flex flex-col justify-between gap-3 group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-black ${
                            item.type === 'PDF'
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : item.type === 'JSON'
                              ? 'bg-sky-50 text-sky-700 border border-sky-200'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}
                        >
                          {item.type}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">
                          {item.size}
                        </span>
                      </div>

                      <span className="text-[10px] font-extrabold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                        {item.questionsCount} QCMs
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium mt-1">
                      Statut : {item.updatedAt}
                    </p>
                  </div>

                  {/* Actions for this Resource */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={item.directDriveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                      title="Ouvrir dans Google Drive dans un nouvel onglet"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      <span>Ouvrir sur Drive</span>
                    </a>

                    {item.sampleContentKey ? (
                      <button
                        type="button"
                        onClick={() => handleLoadSample(item.sampleContentKey, item.name)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                          loadedFileId === item.sampleContentKey
                            ? 'bg-emerald-600 text-white'
                            : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'
                        }`}
                      >
                        {loadedFileId === item.sampleContentKey ? (
                          <>
                            <Check className="w-3 h-3 text-white" />
                            <span>Chargé !</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3 h-3 fill-indigo-700" />
                            <span>S'entraîner</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <a
                        href={item.directDriveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl text-xs font-extrabold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 flex items-center gap-1 transition-colors"
                      >
                        <Download className="w-3 h-3 text-slate-500" />
                        <span>Télécharger</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
