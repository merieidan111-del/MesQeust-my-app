import React, { useState } from 'react';
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Lock,
  Mail,
  User,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Zap,
  Target,
  Flame,
  Award,
} from 'lucide-react';
import { AcademicYear } from '../types/medical';
import {
  registerAccount,
  loginAccount,
  RegisteredAccount,
  getRegisteredAccounts,
} from '../services/authSessionManager';
import { VectorHeart } from './VectorOrgans';

interface AuthLandingScreenProps {
  onAuthenticated: (account: RegisteredAccount) => void;
}

export const AuthLandingScreen: React.FC<AuthLandingScreenProps> = ({ onAuthenticated }) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  // Form State
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [academicYear, setAcademicYear] = useState<AcademicYear>('4ème Année');

  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');

  // UI status
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const existingAccounts = getRegisteredAccounts();

  const academicYearOptions: {
    id: AcademicYear;
    title: string;
    subtitle: string;
    icon: React.ElementType;
    badge: string;
  }[] = [
    {
      id: '3ème Année',
      title: '3ème Année',
      subtitle: 'Sémiologie Médicale & Chirurgicale',
      icon: Stethoscope,
      badge: 'Bases Cliniques',
    },
    {
      id: '4ème Année',
      title: '4ème Année',
      subtitle: 'Cardiologie, Neurologie, Gastro, Pneumologie',
      icon: HeartPulse,
      badge: 'Pathologies Lourdes',
    },
    {
      id: '5ème Année',
      title: '5ème Année',
      subtitle: 'Pédiatrie, Gynécologie, Urgences Médicales',
      icon: Activity,
      badge: 'Spécialités & Urgences',
    },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsSubmitting(true);

    const res = registerAccount({
      fullName,
      email,
      password,
      academicYear,
    });

    setIsSubmitting(false);

    if (res.success && res.account) {
      setSuccessMsg(`Compte créé avec succès ! Bienvenue, ${res.account.fullName}.`);
      setTimeout(() => {
        onAuthenticated(res.account!);
      }, 600);
    } else {
      setErrorMsg(res.error || "Impossible de créer le compte.");
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsSubmitting(true);

    const res = loginAccount(loginIdentifier, loginPassword);
    setIsSubmitting(false);

    if (res.success && res.account) {
      setSuccessMsg(`Connexion réussie ! Heureux de vous revoir, ${res.account.fullName}.`);
      setTimeout(() => {
        onAuthenticated(res.account!);
      }, 500);
    } else {
      setErrorMsg(res.error || "Identifiant ou mot de passe incorrect.");
    }
  };

  // Quick switch or sample multi-user test helper
  const handleQuickDemoRegister = (userName: string, userEmail: string, year: AcademicYear) => {
    setErrorMsg(null);
    const existing = existingAccounts.find(
      (a) => a.email.toLowerCase() === userEmail.toLowerCase()
    );
    if (existing) {
      const loginRes = loginAccount(userEmail, 'medecine2026');
      if (loginRes.success && loginRes.account) {
        onAuthenticated(loginRes.account);
      }
      return;
    }

    const regRes = registerAccount({
      fullName: userName,
      email: userEmail,
      password: 'medecine2026',
      academicYear: year,
    });
    if (regRes.success && regRes.account) {
      onAuthenticated(regRes.account);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] flex flex-col justify-between selection:bg-[#2A75D3]/20">
      {/* Top Banner Navigation */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-100 via-indigo-50 to-blue-100 p-1 flex items-center justify-center shadow-xs">
            <VectorHeart size={30} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                MedQuest
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#2A75D3] border border-blue-200">
                Espace Externat
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Plateforme d'Entraînement Clinique & Concours de Résidanat
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Accès sécurisé & isolé par utilisateur
          </span>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 sm:py-12 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left Side: Pitch, Medical Value, and Initial Isolation Guarantee */}
        <div className="flex-1 max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 shadow-xs text-xs font-bold text-[#2A75D3]">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Nouveau Compte : Initialisation Propre & Données Isolées</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Préparez vos examens d'externat avec précision.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Chaque externe bénéficie d'un espace de travail strictement cloisonné. Vos scores de QCMs, vos séries quotidiennes et vos points XP ne se mélangent jamais avec d'autres sessions.
          </p>

          {/* Clean Initial State Feature Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-1.5 font-bold">
                <Flame className="w-4 h-4" />
              </div>
              <div className="text-lg font-black text-slate-900">0 Jours</div>
              <div className="text-[11px] text-slate-500 font-semibold">Série Initiale</div>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2A75D3] flex items-center justify-center mx-auto mb-1.5 font-bold">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-lg font-black text-slate-900">0 XP</div>
              <div className="text-[11px] text-slate-500 font-semibold">Progression Vierge</div>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-1.5 font-bold">
                <Target className="w-4 h-4" />
              </div>
              <div className="text-lg font-black text-slate-900">0%</div>
              <div className="text-[11px] text-slate-500 font-semibold">Modules Complétés</div>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-1.5 font-bold">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-lg font-black text-slate-900">Niv. 1</div>
              <div className="text-[11px] text-slate-500 font-semibold">Externe Débutant</div>
            </div>
          </div>

          {/* Quick Demo Switcher to test multi-user isolation */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#2A75D3]" />
                <span>Test Rapide Multi-Utilisateurs (Cloisonnement Total)</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Un clic pour basculer</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() =>
                  handleQuickDemoRegister('Externe Sarah', 'sarah.externe@medquest.dz', '4ème Année')
                }
                className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-slate-800 group-hover:text-indigo-700">
                  Compte A : Sarah (4ème Année)
                </div>
                <div className="text-[10px] text-slate-500">sarah.externe@medquest.dz</div>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleQuickDemoRegister('Externe Mehdi', 'mehdi.externe@medquest.dz', '5ème Année')
                }
                className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-slate-800 group-hover:text-teal-700">
                  Compte B : Mehdi (5ème Année)
                </div>
                <div className="text-[10px] text-slate-500">mehdi.externe@medquest.dz</div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form Card (Sign Up / Sign In) */}
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-[28px] p-6 sm:p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          {/* Header Toggle */}
          <div className="bg-slate-100 p-1 rounded-2xl flex items-center mb-6">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(true);
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className={`flex-1 py-2.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                isSignUp
                  ? 'bg-white text-[#2A75D3] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Créer un Compte
            </button>
            <button
              type="button"
              onClick={() => {
                setIsSignUp(false);
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className={`flex-1 py-2.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                !isSignUp
                  ? 'bg-white text-[#2A75D3] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Se Connecter
            </button>
          </div>

          {/* Feedback messages */}
          {errorMsg && (
            <div className="mb-4 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span className="font-semibold">{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold">{successMsg}</span>
            </div>
          )}

          {/* SIGN UP FORM */}
          {isSignUp ? (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nom et Prénom
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="ex: Dr. Meriem Laidani"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-[#2A75D3] focus:ring-2 focus:ring-[#2A75D3]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Adresse Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="etudiant@fac-medecine.dz"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-[#2A75D3] focus:ring-2 focus:ring-[#2A75D3]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Mot de Passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 6 caractères"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-[#2A75D3] focus:ring-2 focus:ring-[#2A75D3]/20 transition-all"
                  />
                </div>
              </div>

              {/* Academic Year Radio-Card Selector */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  Année d'Étude Médicale
                </label>
                <div className="space-y-2">
                  {academicYearOptions.map((opt) => {
                    const isSelected = academicYear === opt.id;
                    const Icon = opt.icon;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setAcademicYear(opt.id)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-50/50 border-[#2A75D3] ring-1 ring-[#2A75D3]'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                              isSelected
                                ? 'bg-[#2A75D3] text-white'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                              <span>{opt.title}</span>
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-semibold">
                                {opt.badge}
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-500">{opt.subtitle}</div>
                          </div>
                        </div>

                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'border-[#2A75D3] bg-[#2A75D3]'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#2A75D3] hover:bg-[#2363b4] text-white text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-[#2A75D3]/20 transition-all cursor-pointer disabled:opacity-50 mt-2"
              >
                <span>Créer Mon Compte (0 XP, Vierge)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* LOGIN FORM */
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email ou Identifiant
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    placeholder="email ou username"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-[#2A75D3] focus:ring-2 focus:ring-[#2A75D3]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Mot de Passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Votre mot de passe"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-[#2A75D3] focus:ring-2 focus:ring-[#2A75D3]/20 transition-all"
                  />
                </div>
              </div>

              {existingAccounts.length > 0 && (
                <div className="pt-1">
                  <div className="text-[11px] font-semibold text-slate-500 mb-1.5">
                    Comptes enregistrés sur cet appareil ({existingAccounts.length}) :
                  </div>
                  <div className="space-y-1 max-h-28 overflow-y-auto pr-1">
                    {existingAccounts.map((acc) => (
                      <button
                        key={acc.id}
                        type="button"
                        onClick={() => {
                          setLoginIdentifier(acc.email);
                          setLoginPassword(acc.password);
                        }}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-[11px] flex items-center justify-between transition-colors"
                      >
                        <span className="font-bold text-slate-800">{acc.fullName}</span>
                        <span className="text-slate-500 text-[10px]">{acc.email}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#2A75D3] hover:bg-[#2363b4] text-white text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-[#2A75D3]/20 transition-all cursor-pointer disabled:opacity-50 mt-2"
              >
                <span>Accéder à Mon Espace Personnel</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Isolation & Security note */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2A75D3]" />
            <span>Session partitionnée localement par ID utilisateur</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200/80 bg-white/50 py-3 px-6 text-center text-xs text-slate-500">
        MedQuest Externat Médical • Sessions multi-utilisateurs isolées • Conformité programme officiel
      </footer>
    </div>
  );
};
