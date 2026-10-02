import React, { useState } from 'react';
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
  Loader2,
  Stethoscope,
} from 'lucide-react';
import { Question, AcademicYear } from '../types/medical';
import { VectorBrain } from './VectorOrgans';

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
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedOutput, setGeneratedOutput] = useState<string>('');
  const [generatedQCMs, setGeneratedQCMs] = useState<Question[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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

  const handleGenerate = async () => {
    if (!documentText.trim()) return;

    setIsGenerating(true);
    setErrorMsg(null);
    setGeneratedOutput('');
    setGeneratedQCMs([]);

    try {
      if (selectedMode === 'qcm_gen') {
        const response = await fetch('/api/gemini/generate-qcm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topic: documentTitle || 'Médecine Générale',
            sourceText: documentText,
            count: 4,
            academicYear: selectedYear,
          }),
        });

        if (!response.ok) {
          throw new Error(`Erreur serveur (${response.status})`);
        }

        const data = await response.json();
        const rawQuestions = data.questions || [];
        const formattedQuestions: Question[] = rawQuestions.map((q: any, i: number) => ({
          id: `ai-gen-${i}-${Date.now()}`,
          courseId: 'ai-generated-course',
          questionNumber: i + 1,
          type: 'QCM' as const,
          questionText: q.questionText,
          options: q.options,
          correctAnswers: q.correctAnswers || [0],
          explanation: q.explanation,
          clinicalPearl: q.clinicalPearl,
          module: q.module || documentTitle,
          academicYear: selectedYear,
        }));

        setGeneratedQCMs(formattedQuestions);
        setGeneratedOutput(
          `4 QCMs cliniques générés avec succès à partir de votre cours !\n\nVous pouvez les lancer directement dans le moteur d'entraînement interactif ci-dessous.`
        );
        onAwardXp(40, 'Génération de QCMs cliniques par IA');
      } else {
        const response = await fetch('/api/gemini/summarize', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            documentText,
            mode: selectedMode,
            customPrompt: selectedMode === 'custom' ? customPrompt : undefined,
            academicYear: selectedYear,
            moduleTitle: documentTitle,
          }),
        });

        if (!response.ok) {
          throw new Error(`Erreur serveur (${response.status})`);
        }

        const data = await response.json();
        setGeneratedOutput(data.result || 'Synthèse indisponible.');
        onAwardXp(25, 'Synthèse médicale IA générée');
      }
    } catch (err: any) {
      console.error('Gemini call failed:', err);
      setErrorMsg(`Erreur : ${err?.message || 'Impossible de joindre le modèle Gemini'}`);
    } finally {
      setIsGenerating(false);
    }
  };

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
    a.download = `Synthese_${documentTitle.replace(/\s+/g, '_')}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLaunchGeneratedQCMs = () => {
    if (generatedQCMs.length === 0) return;
    onLoadQuestionsToEngine(generatedQCMs, documentTitle || 'QCM IA');
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              IA Médicale & Synthèses
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-2">
            Module de Synthèse Médicale & Générateur de QCMs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium leading-relaxed">
            Transformez vos cours hospitaliers, polycopiés et documents Drive en fiches mémo,
            tableaux thérapeutiques ou QCMs de concours interactifs avec explications cliniques.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-100 shadow-2xs">
          <VectorBrain size={56} showSpeech speechText="Analyse IA prête" />
        </div>
      </div>

      {/* Preset Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {presets.map((p) => {
          const isSelected = selectedMode === p.id;
          const Icon = p.icon;

          return (
            <div
              key={p.id}
              onClick={() => setSelectedMode(p.id as any)}
              className={`p-5 rounded-3xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-50/80 border-indigo-400 shadow-xs ring-2 ring-indigo-200/50'
                  : 'bg-white hover:bg-slate-50 border-slate-200/80 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-2xl border ${p.color} shadow-2xs`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-ping" />
                  )}
                </div>
                <h5 className="font-extrabold text-xs text-slate-900">{p.title}</h5>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 font-medium leading-snug">{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Prompt Option */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setSelectedMode('custom')}
          className={`px-4 py-2 rounded-full text-xs font-extrabold border transition-all cursor-pointer ${
            selectedMode === 'custom'
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          Consigne personnalisée pour l'IA
        </button>

        {selectedMode === 'custom' && (
          <input
            type="text"
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="Ex : Résume uniquement les critères de gravité et les pièges diagnostiques..."
            className="flex-1 px-4 py-2 bg-white border border-slate-200/80 rounded-full text-xs text-slate-900 focus:outline-none focus:border-indigo-500 font-medium"
          />
        )}
      </div>

      {/* Document Text Editor & Generator Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Input Textarea */}
        <div className="lg:col-span-5 space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-extrabold text-slate-700 block">
              Titre du document / Module :
            </label>
            <input
              type="text"
              value={documentTitle}
              onChange={(e) => setDocumentTitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-slate-200/80 rounded-2xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 font-bold"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-extrabold text-slate-700">
                Contenu médical à analyser :
              </label>
              <span className="text-[10px] text-slate-400 font-mono font-semibold">
                {documentText.length} caractères
              </span>
            </div>
            <textarea
              rows={12}
              value={documentText}
              onChange={(e) => setDocumentText(e.target.value)}
              placeholder="Collez ici le texte de votre cours, notes cliniques ou cas d'externat..."
              className="w-full p-4 bg-white border border-slate-200/80 rounded-3xl text-xs text-slate-800 focus:outline-none focus:border-indigo-500 leading-relaxed font-sans scrollbar-thin"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !documentText.trim()}
            className={`w-full py-3.5 rounded-full font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer ${
              isGenerating || !documentText.trim()
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-md active:scale-98'
            }`}
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Génération par Gemini en cours...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Lancer l'analyse médicale</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Output & QCM Launcher */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-black text-slate-800 flex items-center gap-1.5 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              Résultat généré par l'IA :
            </h4>

            {generatedOutput && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copié' : 'Copier'}</span>
                </button>

                <button
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

          {/* Interactive QCM Banner if QCMs were generated */}
          {generatedQCMs.length > 0 && (
            <div className="p-5 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3 shadow-sm animate-in fade-in">
              <div>
                <span className="text-emerald-900 font-black text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{generatedQCMs.length} QCMs cliniques prêts à être résolus</span>
                </span>
                <span className="text-xs text-emerald-700 font-medium">
                  Injectez-les directement dans le moteur d'entraînement interactif.
                </span>
              </div>

              <button
                onClick={handleLaunchGeneratedQCMs}
                className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center gap-1.5 shadow-sm transition-all shrink-0 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Lancer la série</span>
              </button>
            </div>
          )}

          {/* Output Display Box */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs min-h-[420px] max-h-[520px] overflow-y-auto scrollbar-thin">
            {generatedOutput ? (
              <div className="prose prose-xs max-w-none text-slate-800 leading-relaxed font-sans whitespace-pre-wrap">
                {generatedOutput}
              </div>
            ) : isGenerating ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mb-3" />
                <p className="text-xs text-slate-900 font-black">
                  Synthèse médicale en cours de rédaction...
                </p>
                <p className="text-[11px] text-slate-500 mt-1 max-w-xs font-medium">
                  Extraction des recommandations HAS/ESC et structuration des points clés d'externat.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center text-slate-400">
                <Sparkles className="w-8 h-8 opacity-40 mb-2 text-indigo-400" />
                <p className="text-xs font-medium">Choisissez un mode et cliquez sur "Lancer l'analyse médicale"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
