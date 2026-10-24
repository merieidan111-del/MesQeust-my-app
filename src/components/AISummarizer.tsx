import React, { useState, useRef } from 'react';
import {
  Sparkles,
  BookOpen,
  Pill,
  FileCheck,
  Play,
  Copy,
  Download,
  Check,
  CheckCircle2,
  Stethoscope,
  UploadCloud,
  FileText,
  FileCode,
  File,
  Presentation,
  Trash2,
  AlertTriangle,
  Clock,
  X,
  Plus,
  Layers,
  Info,
} from 'lucide-react';
import { Question, AcademicYear } from '../types/medical';
import { VectorBrain } from './VectorOrgans';

export interface UploadedFileItem {
  id: string;
  name: string;
  size: number;
  type: string;
  extension: string;
  uploadedAt: string;
}

interface AISummarizerProps {
  initialText?: string;
  initialTitle?: string;
  selectedYear: AcademicYear;
  onLoadQuestionsToEngine: (questions: Question[], sourceName: string) => void;
  onAwardXp: (amount: number, reason: string) => void;
}

export const AISummarizer: React.FC<AISummarizerProps> = ({
  initialText = '',
  initialTitle = '',
  selectedYear,
  onLoadQuestionsToEngine,
  onAwardXp,
}) => {
  const [documentText, setDocumentText] = useState<string>(
    initialText ||
      `COURS D'EXTERNAT : PRISE EN CHARGE DE L'INSUFFISANCE CARDIAQUE À FEVG ALTÉRÉE (HFrEF)
L'insuffisance cardiaque à fraction d'éjection réduite (FEVG < 40%) est un syndrome clinique caractérisé par des symptômes cardinaux (dyspnée, orthopnée, œdèmes des membres inférieurs, hépatalgie d'effort) et des signes cliniques de congestion (turgescence jugulaire, reflux hépato-jugulaire, râles crépitants bilatéraux, B3 ou galop).
Le bilan de confirmation repose sur le dosage des peptides natriurétiques (BNP > 35 pg/mL ou NT-proBNP > 125 pg/mL en ambulatoire, et > 300 pg/mL en aigu) et l'échocardiographie-doppler transthoracique (ETT).

TRAITEMENT MÉDICAL OPTIMAL (QUADRITHÉRAPIE ESC 2024) :
1. Inhibiteur de l'Enzyme de Conversion (IEC comme Ramipril) ou Sacubitril/Valsartan (ARNI) en 1ère intention.
2. Bêtabloquant cardio-sélectif titré progressivement (Bisoprolol, Métoprolol succinate, Carvédilol, Nébivolol).
3. Antagoniste des Récepteurs des Minéralocorticoïdes (ARM : Spironolactone 25 mg ou Éplérénone).
4. Inhibiteur des SGLT2 (Dapagliflozine 10 mg/j ou Empagliflozine 10 mg/j).
Les diurétiques de l'anse (Furosémide) ne sont administrés qu'en cas de rétention hydrosodée pour contrôler les symptômes congestifs.`
  );

  const [documentTitle, setDocumentTitle] = useState<string>(
    initialTitle || "Cours Insuffisance Cardiaque ESC 2024"
  );
  const [selectedMode, setSelectedMode] = useState<
    'guidelines' | 'flashcards' | 'drug_table' | 'custom' | 'qcm_gen'
  >('guidelines');
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [generatedOutput, setGeneratedOutput] = useState<string>('');
  const [generatedQCMs, setGeneratedQCMs] = useState<Question[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // File Upload State
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileItem[]>([
    {
      id: 'demo-doc-1',
      name: 'Guide_ESC_Cardiologie_2024.pdf',
      size: 2450000,
      type: 'application/pdf',
      extension: 'pdf',
      uploadedAt: 'Aujourd’hui à 11:20',
    },
    {
      id: 'demo-doc-2',
      name: 'Polycopie_Pharmacologie_Clinique.docx',
      size: 1120000,
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      extension: 'docx',
      uploadedAt: 'Hier à 18:45',
    },
  ]);
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Popup Dialog State for board options
  const [isUnavailableModalOpen, setIsUnavailableModalOpen] = useState<boolean>(false);
  const [selectedOptionName, setSelectedOptionName] = useState<string>('');

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  };

  const getFileBadgeStyle = (ext: string) => {
    const e = ext.toLowerCase();
    if (e === 'pdf') {
      return {
        bg: 'bg-rose-50 text-rose-700 border-rose-200',
        icon: FileText,
        label: 'PDF',
      };
    }
    if (e === 'ppt' || e === 'pptx') {
      return {
        bg: 'bg-amber-50 text-amber-700 border-amber-200',
        icon: Presentation,
        label: 'PPT',
      };
    }
    if (e === 'doc' || e === 'docx') {
      return {
        bg: 'bg-blue-50 text-blue-700 border-blue-200',
        icon: FileCode,
        label: 'WORD',
      };
    }
    return {
      bg: 'bg-purple-50 text-purple-700 border-purple-200',
      icon: File,
      label: ext.toUpperCase() || 'DOC',
    };
  };

  const handleFilesSelected = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const newItems: UploadedFileItem[] = [];

    Array.from(files).forEach((file) => {
      const extension = file.name.split('.').pop()?.toLowerCase() || '';
      const newItem: UploadedFileItem = {
        id: `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        name: file.name,
        size: file.size,
        type: file.type,
        extension,
        uploadedAt: 'À l’instant',
      };

      newItems.push(newItem);

      // If it's plain text or markdown, automatically load its content
      if (extension === 'txt' || extension === 'md') {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          if (content) {
            setDocumentText(content);
            setDocumentTitle(file.name.replace(/\.[^/.]+$/, ''));
          }
        };
        reader.readAsText(file);
      } else {
        // For PDF, PPT, Word, set the title and an informative note
        setDocumentTitle(file.name.replace(/\.[^/.]+$/, ''));
      }
    });

    setUploadedFiles((prev) => [...newItems, ...prev]);
  };

  const handleRemoveFile = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  // Triggers the popup dialog when clicking any option on this board
  const handleBoardOptionClick = (optionTitle: string) => {
    setSelectedOptionName(optionTitle);
    setIsUnavailableModalOpen(true);
  };

  const presets = [
    {
      id: 'guidelines',
      title: 'Critères Diagnostiques & Recommandations',
      desc: 'Arbres décisionnels, bilan paraclinique, critères de gravité',
      icon: FileCheck,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      id: 'flashcards',
      title: "Flashcards & Mnémos d'Externat",
      desc: "Questions recto/verso haute rentabilité et perles d'internat",
      icon: Sparkles,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      id: 'drug_table',
      title: 'Tableau Comparatif des Médicaments',
      desc: 'Classes, posologies, contre-indications et surveillance',
      icon: Pill,
      color: 'bg-sky-50 text-sky-600 border-sky-200',
    },
    {
      id: 'qcm_gen',
      title: 'Convertir en 4 QCMs Cliniques Jouables',
      desc: 'Génère des cas cliniques interactifs avec corrigés détaillés',
      icon: Stethoscope,
      color: 'bg-rose-50 text-rose-600 border-rose-200',
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedOutput], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DIY_Study_${documentTitle.replace(/\s+/g, '_')}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLaunchGeneratedQCMs = () => {
    if (generatedQCMs.length === 0) return;
    onLoadQuestionsToEngine(generatedQCMs, documentTitle || 'QCM DIY study');
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => handleFilesSelected(e.target.files)}
        multiple
        accept=".pdf,.ppt,.pptx,.doc,.docx,.txt,.md,.rtf,.odt"
        className="hidden"
      />

      {/* Header Banner - DIY study */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#311465] px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              DIY study • Espace d'Étude Personnalisé
            </span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2.5">
            DIY study - Importez vos Documents & Fiches
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium leading-relaxed">
            Importez vos propres cours et fichiers hospitaliers (PDF, PPT, Word, Polycopiés, etc.)
            pour structurer vos synthèses d'externat et vos banques d'entraînement.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-purple-50/60 p-2.5 rounded-2xl border border-purple-100 shadow-2xs">
          <VectorBrain size={56} showSpeech speechText="DIY study prêt" />
        </div>
      </div>

      {/* File Upload Dropzone (PDF, PPT, Word, Docs, TXT) */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#311465] flex items-center justify-center font-bold">
              <UploadCloud className="w-4 h-4 text-[#311465]" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 tracking-tight">
                Importer vos Propres Fichiers Médicaux
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Supporte les documents PDF, présentations PPT / PPTX, fichiers Word (DOC/DOCX) et texte.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 rounded-2xl bg-[#311465] hover:bg-purple-950 text-white text-xs font-black flex items-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 text-[#B794F6]" />
            <span>Ajouter un fichier</span>
          </button>
        </div>

        {/* Drag and Drop Box */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDraggingOver(true);
          }}
          onDragLeave={() => setIsDraggingOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDraggingOver(false);
            handleFilesSelected(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
          className={`p-6 sm:p-8 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center gap-2.5 transition-all cursor-pointer select-none ${
            isDraggingOver
              ? 'border-purple-600 bg-purple-50/60 scale-[1.01]'
              : 'border-purple-200/90 hover:border-purple-400 bg-purple-50/20 hover:bg-purple-50/40'
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-white border border-purple-100 flex items-center justify-center text-purple-700 shadow-xs">
            <UploadCloud className="w-6 h-6 text-purple-700" />
          </div>
          <div>
            <span className="font-extrabold text-xs sm:text-sm text-slate-800">
              Glissez-déposez vos fichiers ici, ou{' '}
              <span className="text-[#311465] underline decoration-purple-300 font-black">parcourez votre appareil</span>
            </span>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Formats acceptés : PDF, PowerPoint (.ppt, .pptx), Word (.doc, .docx), Markdown (.md, .txt)
            </p>
          </div>

          {/* Formats Tags */}
          <div className="flex items-center gap-2 flex-wrap justify-center pt-1">
            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
              PDF
            </span>
            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              PPT / PPTX
            </span>
            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              WORD (DOCX)
            </span>
            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              TEXTE & NOTES
            </span>
          </div>
        </div>

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-2 pt-2">
            <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">
              Fichiers attachés à votre session ({uploadedFiles.length}) :
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {uploadedFiles.map((file) => {
                const badge = getFileBadgeStyle(file.extension);
                const IconComponent = badge.icon;
                return (
                  <div
                    key={file.id}
                    className="p-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-between gap-3 shadow-2xs transition-all"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${badge.bg}`}
                      >
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-extrabold text-slate-900 truncate">
                          {file.name}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium mt-0.5">
                          <span>{formatFileSize(file.size)}</span>
                          <span>•</span>
                          <span>{file.uploadedAt}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleRemoveFile(file.id, e)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors shrink-0 cursor-pointer"
                      title="Retirer ce fichier"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Board Options Grid - Clicking any option triggers the popup dialog */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#311465]" />
              Options du Tableau DIY study
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">
              Cliquez sur les options de ce tableau pour configurer votre fiche ou vos questions.
            </p>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
            4 Modes d'Analyse
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {presets.map((p) => {
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                onClick={() => handleBoardOptionClick(p.title)}
                className="p-5 rounded-3xl border border-slate-200/90 bg-white hover:bg-purple-50/30 hover:border-purple-300 hover:shadow-sm transition-all cursor-pointer select-none flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-2xl border ${p.color} shadow-2xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-extrabold text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Explorer
                    </span>
                  </div>
                  <h5 className="font-extrabold text-xs text-slate-900 group-hover:text-[#311465] transition-colors">
                    {p.title}
                  </h5>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 font-medium leading-snug">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-purple-700 transition-colors">
                  <span>Option du tableau</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Prompt Option - Also triggers the popup dialog */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          type="button"
          onClick={() => handleBoardOptionClick("Consigne personnalisée pour l'IA")}
          className="px-4 py-2 rounded-full text-xs font-extrabold border bg-white border-purple-200 text-purple-900 hover:bg-purple-50 shadow-2xs transition-all cursor-pointer flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Consigne personnalisée pour l'IA</span>
        </button>

        <button
          type="button"
          onClick={() => handleBoardOptionClick("Générateur Mind Map & Cartes Mentales")}
          className="px-4 py-2 rounded-full text-xs font-extrabold border bg-white border-slate-200 text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
        >
          Mind Map Automatique
        </button>

        <button
          type="button"
          onClick={() => handleBoardOptionClick("Export Flashcards Anki (.apkg)")}
          className="px-4 py-2 rounded-full text-xs font-extrabold border bg-white border-slate-200 text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
        >
          Export Flashcards Anki
        </button>
      </div>

      {/* Document Text Editor & Generator Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Input Textarea */}
        <div className="lg:col-span-5 space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-extrabold text-slate-700 block">
              Titre de l'Étude / Module DIY :
            </label>
            <input
              type="text"
              value={documentTitle}
              onChange={(e) => setDocumentTitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-slate-200/80 rounded-2xl text-xs text-slate-900 focus:outline-none focus:border-purple-600 font-bold"
              placeholder="Ex : Cardiologie - Myocardiopathies ESC 2024"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-extrabold text-slate-700">
                Contenu médical ou notes à synthétiser :
              </label>
              <span className="text-[10px] text-slate-400 font-mono font-semibold">
                {documentText.length} caractères
              </span>
            </div>
            <textarea
              rows={12}
              value={documentText}
              onChange={(e) => setDocumentText(e.target.value)}
              placeholder="Collez ici le texte de votre cours, notes cliniques, ou importez un fichier PDF/PPT/Word ci-dessus..."
              className="w-full p-4 bg-white border border-slate-200/80 rounded-3xl text-xs text-slate-800 focus:outline-none focus:border-purple-600 leading-relaxed font-sans scrollbar-thin"
            />
          </div>

          <button
            type="button"
            onClick={() => handleBoardOptionClick("Lancer l'analyse médicale DIY study")}
            className="w-full py-3.5 rounded-full font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer bg-[#311465] hover:bg-purple-950 text-white hover:shadow-md active:scale-98"
          >
            <Sparkles className="w-4 h-4 text-[#B794F6]" />
            <span>Générer mon DIY study</span>
          </button>
        </div>

        {/* Right: Output & QCM Launcher */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-black text-slate-800 flex items-center gap-1.5 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-purple-700" />
              Résultat généré pour votre étude :
            </h4>

            {generatedOutput && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3 py-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copié' : 'Copier'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownload}
                  className="px-3 py-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Télécharger .md</span>
                </button>
              </div>
            )}
          </div>

          {errorMsg && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-900 text-xs font-bold">
              {errorMsg}
            </div>
          )}

          {/* Output Display Box */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs min-h-[420px] max-h-[520px] overflow-y-auto scrollbar-thin">
            {generatedOutput ? (
              <div className="prose prose-xs max-w-none text-slate-800 leading-relaxed font-sans whitespace-pre-wrap">
                {generatedOutput}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-80 text-center text-slate-400 space-y-3">
                <div className="w-14 h-14 rounded-3xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-2xs">
                  <Sparkles className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-800">
                    Espace DIY study prêt pour l'analyse
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto font-medium leading-relaxed">
                    Importez vos documents (PDF, PPT, Word) et sélectionnez une option du tableau ci-dessus pour lancer la structuration de vos fiches.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* POPUP DIALOG BOX: "this feature in not available yet" */}
      {isUnavailableModalOpen && (
        <div
          onClick={() => setIsUnavailableModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white border border-purple-200 rounded-3xl p-6 sm:p-7 shadow-2xl relative animate-in zoom-in-95 duration-200 text-center space-y-4"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsUnavailableModalOpen(false)}
              className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon Banner */}
            <div className="w-16 h-16 rounded-3xl bg-purple-50 border-2 border-purple-200 text-[#311465] flex items-center justify-center mx-auto shadow-xs">
              <Clock className="w-8 h-8 text-[#311465]" />
            </div>

            {/* Title & Selected Option */}
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 px-3 py-0.5 rounded-full bg-purple-50 border border-purple-200 inline-block mb-1">
                DIY study • Option du Tableau
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight mt-1">
                {selectedOptionName || 'Option DIY study'}
              </h3>
            </div>

            {/* Exact Requested Message */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 font-black text-sm sm:text-base tracking-tight shadow-2xs flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>this feature in not available yet</span>
            </div>

            <p className="text-xs text-slate-500 font-medium leading-relaxed px-2">
              Le traitement automatique de vos documents importés (PDF, PPT, Word) et les options de ce tableau sont en cours de déploiement et seront disponibles très bientôt.
            </p>

            {/* Confirm / Close Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsUnavailableModalOpen(false)}
                className="w-full py-3 rounded-2xl bg-[#311465] hover:bg-purple-950 text-white font-extrabold text-xs shadow-sm transition-all cursor-pointer"
              >
                D'accord / Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Compatibility export
export const DIYStudy = AISummarizer;
