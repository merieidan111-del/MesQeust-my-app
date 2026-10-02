import React, { useState } from 'react';
import {
  Code2,
  Database,
  Smartphone,
  Copy,
  Check,
  Download,
  Layers,
  ShieldCheck,
  Terminal,
  Hourglass,
  LayoutGrid,
  CheckSquare,
} from 'lucide-react';
import {
  SUPABASE_SQL_SCHEMA,
  FLUTTER_DASHBOARD_SCREEN_CODE,
  FLUTTER_COURSE_HUB_SCREEN_CODE,
  FLUTTER_INTERACTIVE_QCM_JUMPLIST_CODE,
  FLUTTER_ALL_MODULES_DIRECTORY_CODE,
  SUPABASE_PROFILES_USERNAME_AUTH_SQL,
  FLUTTER_AUTH_CONTROLLER_CODE,
  FLUTTER_LOGIN_REGISTER_SCREEN_CODE,
  FLUTTER_FIXED_BOTTOM_NAV_BAR_CODE,
} from '../data/supabaseSchemaData';
import {
  APK_ORDERS_SQL_SCHEMA,
  SUPABASE_PROJECT_ID,
  SUPABASE_PROJECT_NAME,
} from '../services/supabaseClient';

interface SupabaseFlutterStudioProps {
  onOpenApkOrder?: () => void;
}

export const SupabaseFlutterStudio: React.FC<SupabaseFlutterStudioProps> = ({
  onOpenApkOrder,
}) => {
  const [activeTab, setActiveTab] = useState<
    | 'sql'
    | 'username_auth_sql'
    | 'flutter_auth_controller'
    | 'flutter_login_screen'
    | 'flutter_bottom_nav'
    | 'apk_orders'
    | 'dashboard'
    | 'mode_selector'
    | 'qcm_jumplist'
    | 'directory'
  >('username_auth_sql');
  const [copied, setCopied] = useState<boolean>(false);

  const tabs = [
    {
      id: 'username_auth_sql',
      name: '1. Supabase Username Auth (SQL)',
      icon: Database,
      badge: 'public.profiles',
      content: SUPABASE_PROFILES_USERNAME_AUTH_SQL,
      filename: 'profiles_username_auth.sql',
    },
    {
      id: 'flutter_auth_controller',
      name: '2. Flutter Auth Controller',
      icon: ShieldCheck,
      badge: 'Provider + SharedPreferences',
      content: FLUTTER_AUTH_CONTROLLER_CODE,
      filename: 'auth_controller.dart',
    },
    {
      id: 'flutter_login_screen',
      name: '3. Flutter Login & Year Selector',
      icon: CheckSquare,
      badge: '#F8F9FD & #2A75D3',
      content: FLUTTER_LOGIN_REGISTER_SCREEN_CODE,
      filename: 'login_register_screen.dart',
    },
    {
      id: 'flutter_bottom_nav',
      name: '4. Fixed Bottom Nav Bar',
      icon: LayoutGrid,
      badge: '5 Tabs • #6C5CE7',
      content: FLUTTER_FIXED_BOTTOM_NAV_BAR_CODE,
      filename: 'fixed_bottom_nav_bar.dart',
    },
    {
      id: 'apk_orders',
      name: '5. Table Commandes APK (Checkout)',
      icon: Smartphone,
      badge: 'public.apk_orders',
      content: APK_ORDERS_SQL_SCHEMA,
      filename: 'apk_orders_checkout_schema.sql',
    },
    {
      id: 'sql',
      name: '6. Supabase Global Schema & RLS',
      icon: Database,
      badge: 'Courses & QCMs',
      content: SUPABASE_SQL_SCHEMA,
      filename: 'medquest_supabase_schema.sql',
    },
    {
      id: 'dashboard',
      name: '7. Flutter Home Dashboard',
      icon: Hourglass,
      badge: 'Compte à Rebours & Streaks',
      content: FLUTTER_DASHBOARD_SCREEN_CODE,
      filename: 'dashboard_screen.dart',
    },
    {
      id: 'mode_selector',
      name: '8. Sélecteur de Modes',
      icon: CheckSquare,
      badge: 'Hub Cours',
      content: FLUTTER_COURSE_HUB_SCREEN_CODE,
      filename: 'course_hub_screen.dart',
    },
    {
      id: 'qcm_jumplist',
      name: '9. Écran QCM Jump-List',
      icon: LayoutGrid,
      badge: 'Grille Interactive',
      content: FLUTTER_INTERACTIVE_QCM_JUMPLIST_CODE,
      filename: 'interactive_qcm_jumplist_screen.dart',
    },
    {
      id: 'directory',
      name: '10. Répertoire Modules',
      icon: Layers,
      badge: 'Catalogue',
      content: FLUTTER_ALL_MODULES_DIRECTORY_CODE,
      filename: 'all_modules_directory_screen.dart',
    },
  ];

  const currentArtifact = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentArtifact.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([currentArtifact.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentArtifact.filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Studio Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-teal-600" />
              Intégration Supabase & Architecture Flutter
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-2">
            Schéma Supabase SQL & Écrans Mobiles Flutter
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium leading-relaxed">
            Exportez l'ensemble du code source pour connecter l'application médicale à Supabase :
            schéma PostgreSQL avec Row Level Security (RLS) et code Dart/Flutter complet pour le Dashboard, le Hub de cours, la grille de questions et le catalogue de modules.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
          {onOpenApkOrder && (
            <button
              onClick={onOpenApkOrder}
              className="px-4 py-2.5 rounded-full bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-indigo-600" />
              <span>Tester Formulaire Commande</span>
            </button>
          )}

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copié !' : 'Copier le code'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-xs font-black flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger ({currentArtifact.filename.split('.')[1]})</span>
          </button>
        </div>
      </div>

      {/* Tabs Row (Segmented Control) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-slate-200/80">
        {tabs.map((tab) => {
          const isSelected = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                isSelected
                  ? 'bg-teal-50 border border-teal-200 text-teal-800 shadow-xs'
                  : 'bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-600'
              }`}
            >
              <Icon className="w-4 h-4 text-teal-600" />
              <span>{tab.name}</span>
              <span
                className={`text-[9px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  isSelected ? 'bg-teal-100 text-teal-900' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Syntax Code Viewer */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-lg overflow-hidden">
        <div className="bg-slate-950 px-5 py-3 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2 font-mono text-[12px] text-teal-300 font-bold">
            <Terminal className="w-4 h-4 text-teal-400" />
            <span>{currentArtifact.filename}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 font-mono">
              {currentArtifact.content.split('\n').length} lignes de code
            </span>
          </div>
        </div>

        <pre className="p-6 text-slate-200 text-xs font-mono leading-relaxed overflow-x-auto max-h-[640px] overflow-y-auto selection:bg-teal-500/30 scrollbar-thin">
          <code>{currentArtifact.content}</code>
        </pre>
      </div>

      {/* Architecture Highlights Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2 text-teal-700 font-black text-xs mb-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Supabase RLS & Username Auth</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
            Tables <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">profiles</code>, <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">courses</code>, <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">questions</code> et <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">user_progress</code> avec sécurité Row Level Security isolant les données d'entraînement.
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2 text-sky-700 font-black text-xs mb-1.5">
            <Hourglass className="w-4 h-4 text-sky-600" />
            <span>Compte à Rebours Personnalisable</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
            Widget Flutter avec <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">Timer.periodic</code> permettant aux externes de paramétrer leur date d'examen de module et visualiser les jours/heures restants.
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2 text-amber-700 font-black text-xs mb-1.5">
            <LayoutGrid className="w-4 h-4 text-amber-600" />
            <span>Sélecteur Rapide de Questions</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
            Grille modale instantanée affichant le statut de chaque question (verte pour correcte, rouge pour fausse, neutre pour non répondue).
          </p>
        </div>
      </div>
    </div>
  );
};
