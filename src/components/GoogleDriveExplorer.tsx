import React, { useState, useEffect } from 'react';
import {
  HardDrive,
  Search,
  FileText,
  Play,
  Sparkles,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  FolderOpen,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import {
  DriveFile,
  SAMPLE_DRIVE_FILES,
  searchDriveFiles,
  fetchDriveFileContent,
  parseQCMContent,
} from '../services/googleDriveService';
import { Question } from '../types/medical';
import { VectorHeart, VectorBrain } from './VectorOrgans';

interface GoogleDriveExplorerProps {
  isGoogleConnected: boolean;
  accessToken: string | null;
  googleUserEmail?: string;
  onGoogleSignIn: () => void;
  onLoadQuestionsToEngine: (questions: Question[], sourceName: string) => void;
  onSendToAISummarizer: (text: string, title: string) => void;
}

export const GoogleDriveExplorer: React.FC<GoogleDriveExplorerProps> = ({
  isGoogleConnected,
  accessToken,
  googleUserEmail,
  onGoogleSignIn,
  onLoadQuestionsToEngine,
  onSendToAISummarizer,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('QCM AI Generated');
  const [driveFiles, setDriveFiles] = useState<DriveFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<DriveFile | null>(null);
  const [fileContent, setFileContent] = useState<string>('');
  const [parsedQuestions, setParsedQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  // Initialize with sample files and attempt real search if connected
  useEffect(() => {
    loadFiles();
  }, [isGoogleConnected, accessToken]);

  const loadFiles = async () => {
    setIsLoading(true);
    setErrorMsg(null);

    const mockList = SAMPLE_DRIVE_FILES.map((s) => s.file);

    if (isGoogleConnected && accessToken) {
      try {
        const realFiles = await searchDriveFiles(accessToken, searchQuery);
        setDriveFiles([...realFiles, ...mockList]);
      } catch (err: any) {
        console.warn('Real Google Drive query error, showing fallback samples:', err);
        setErrorMsg(
          'Recherche sur votre Drive : ' +
            (err?.message || 'Permission requise. Affichage des fichiers modèles.')
        );
        setDriveFiles(mockList);
      }
    } else {
      setDriveFiles(mockList);
    }

    setIsLoading(false);
  };

  const handleSelectFile = async (file: DriveFile) => {
    setSelectedFile(file);
    setIsLoading(true);
    setErrorMsg(null);
    setSuccessNotice(null);

    try {
      const content = await fetchDriveFileContent(accessToken || '', file);
      setFileContent(content);

      // Parse questions
      const parsed = parseQCMContent(content, file.name);
      setParsedQuestions(parsed);
      setSuccessNotice(`Fichier analysé : ${parsed.length} QCM(s) clinique(s) détecté(s).`);
    } catch (err: any) {
      setErrorMsg(`Erreur lors de la lecture du fichier : ${err?.message || err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLaunchPractice = () => {
    if (parsedQuestions.length === 0 || !selectedFile) return;
    onLoadQuestionsToEngine(parsedQuestions, selectedFile.name);
  };

  const handleSendToAI = () => {
    if (!fileContent || !selectedFile) return;
    onSendToAISummarizer(fileContent, selectedFile.name);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Drive Status & Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-amber-600" />
              Google Drive Cloud Sync
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-2">
            Explorateur Google Drive • Dossier "QCM AI Generated"
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium leading-relaxed">
            Parcourez vos documents de cours et QCMs stockés sur Google Drive.
            Extrayez les questions cliniques directement pour les lancer en mode entraînement ou synthétiser les perles d'examen.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          {isGoogleConnected ? (
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{googleUserEmail || 'Google Drive Connecté'}</span>
            </div>
          ) : (
            <button
              onClick={onGoogleSignIn}
              className="px-5 py-2.5 rounded-full text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-md flex items-center gap-2 transition-all cursor-pointer"
            >
              <HardDrive className="w-4 h-4" />
              <span>Connecter mon Google Drive</span>
            </button>
          )}
        </div>
      </div>

      {errorMsg && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-xs font-medium flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {successNotice && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-xs font-medium flex items-center gap-2.5">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successNotice}</span>
        </div>
      )}

      {/* Main Grid: File List on Left, Preview & Extractor on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Drive Files List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && loadFiles()}
              placeholder="Rechercher 'QCM AI Generated'..."
              className="w-full pl-10 pr-24 py-2.5 bg-white border border-slate-200/80 rounded-2xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-2xs font-medium"
            />
            <button
              onClick={loadFiles}
              disabled={isLoading}
              className="absolute right-1.5 top-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin text-indigo-600' : ''}`} />
              <span>Scanner</span>
            </button>
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1 scrollbar-thin">
            {driveFiles.map((file) => {
              const isSelected = selectedFile?.id === file.id;

              return (
                <div
                  key={file.id}
                  onClick={() => handleSelectFile(file)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                    isSelected
                      ? 'bg-indigo-50/80 border-indigo-400 shadow-xs ring-2 ring-indigo-200/50'
                      : 'bg-white hover:bg-slate-50 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4
                      className={`text-xs font-bold truncate ${
                        isSelected ? 'text-indigo-950 font-extrabold' : 'text-slate-800'
                      }`}
                    >
                      {file.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Modifié le {new Date(file.modifiedTime || Date.now()).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: File Content & Extracted Questions */}
        <div className="lg:col-span-7 space-y-4">
          {selectedFile ? (
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">
                    Document Analysé
                  </span>
                  <h3 className="font-black text-base text-slate-900 tracking-tight mt-0.5">
                    {selectedFile.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSendToAI}
                    className="px-3 py-1.5 rounded-full text-xs font-bold bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>Synthétiser par IA</span>
                  </button>
                  {parsedQuestions.length > 0 && (
                    <button
                      onClick={handleLaunchPractice}
                      className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Jouer ({parsedQuestions.length} QCMs)</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Parsed summary pill */}
              <div className="p-3 bg-indigo-50/60 border border-indigo-100 rounded-2xl flex items-center justify-between text-xs">
                <span className="text-slate-700 font-medium">Questions détectées :</span>
                <span className="font-extrabold text-indigo-700">
                  {parsedQuestions.length} question(s) formatée(s)
                </span>
              </div>

              {/* Raw Preview Box */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 max-h-80 overflow-y-auto font-mono text-xs text-slate-700 leading-relaxed whitespace-pre-wrap scrollbar-thin">
                {isLoading ? 'Chargement du document...' : fileContent}
              </div>
            </div>
          ) : (
            <div className="p-12 rounded-3xl bg-white border border-slate-200/80 text-center shadow-xs space-y-3">
              <FolderOpen className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-black text-slate-900 text-base">Aucun fichier sélectionné</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto font-medium">
                Sélectionnez un document Google Drive dans la liste de gauche pour afficher son contenu et extraire ses QCMs d'entraînement.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
