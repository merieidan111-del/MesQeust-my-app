import React, { useState } from 'react';
import {
  User,
  Lock,
  GraduationCap,
  X,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Shield,
  Stethoscope,
  Activity,
  HeartPulse,
} from 'lucide-react';
import { AcademicYear, UserProfile } from '../types/medical';
import {
  signUpWithUsername,
  signInWithUsername,
  UsernameProfile,
} from '../services/supabaseClient';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  userProfile,
  onUpdateProfile,
}) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [username, setUsername] = useState<string>(userProfile.username || '');
  const [password, setPassword] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<AcademicYear>(
    userProfile.academicYear || '4ème Année'
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const academicYearOptions: {
    id: AcademicYear;
    title: string;
    subtitle: string;
    icon: React.ElementType;
  }[] = [
    {
      id: '3ème Année',
      title: '3ème Année',
      subtitle: 'Sémiologie Médicale & Chirurgicale',
      icon: Stethoscope,
    },
    {
      id: '4ème Année',
      title: '4ème Année',
      subtitle: 'Cardiologie, Neurologie, Gastro, Pneumo',
      icon: HeartPulse,
    },
    {
      id: '5ème Année',
      title: '5ème Année',
      subtitle: 'Pédiatrie, Gynécologie, Urgences',
      icon: Activity,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const cleanUser = username.trim().toLowerCase();
    if (!cleanUser) {
      setErrorMessage("Veuillez saisir votre nom d'utilisateur.");
      return;
    }
    if (cleanUser.length < 3) {
      setErrorMessage("Le nom d'utilisateur doit contenir au moins 3 caractères.");
      return;
    }
    if (!password) {
      setErrorMessage('Veuillez saisir votre mot de passe.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    setIsLoading(true);

    try {
      if (isSignUp) {
        // Sign Up with Username & Academic Year
        const res = await signUpWithUsername(cleanUser, password, selectedYear);
        if (res.success && res.profile) {
          onUpdateProfile({
            username: res.profile.username,
            fullName: `@${res.profile.username}`,
            academicYear: res.profile.academic_year as AcademicYear,
            totalXp: res.profile.total_xp || 0,
            streakCount: res.profile.streak_count || 1,
          });
          setSuccessMessage('Compte créé avec succès ! Enregistré dans Supabase.');
          setTimeout(() => {
            onClose();
          }, 1000);
        } else {
          setErrorMessage(res.error || 'Erreur lors de la création du compte.');
        }
      } else {
        // Sign In with Username & Password
        const res = await signInWithUsername(cleanUser, password);
        if (res.success && res.profile) {
          onUpdateProfile({
            username: res.profile.username,
            fullName: `@${res.profile.username}`,
            academicYear: (res.profile.academic_year as AcademicYear) || selectedYear,
            totalXp: res.profile.total_xp || 0,
            streakCount: res.profile.streak_count || 1,
          });
          setSuccessMessage('Connexion réussie ! Heureux de vous revoir.');
          setTimeout(() => {
            onClose();
          }, 1000);
        } else {
          setErrorMessage(res.error || "Nom d'utilisateur ou mot de passe incorrect.");
        }
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "Une erreur inattendue s'est produite.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[#F8F9FD] border border-slate-200 rounded-[22px] p-6 sm:p-8 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/50 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Medical Aesthetic */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-[18px] bg-[#2A75D3]/10 border border-[#2A75D3]/20 flex items-center justify-center text-[#2A75D3] shadow-xs">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 tracking-tight">
              {isSignUp ? 'Inscription Externat' : 'Connexion Médecine'}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Authentification par identifiant unique (aucun email requis).
            </p>
          </div>
        </div>

        {/* Clean Toggle between Sign In and Sign Up */}
        <div className="bg-slate-200/70 p-1 rounded-2xl flex items-center mb-6">
          <button
            type="button"
            onClick={() => {
              setIsSignUp(false);
              setErrorMessage(null);
            }}
            className={`flex-1 py-2 text-xs font-black rounded-xl transition-all cursor-pointer ${
              !isSignUp
                ? 'bg-white text-[#2A75D3] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Se Connecter
          </button>
          <button
            type="button"
            onClick={() => {
              setIsSignUp(true);
              setErrorMessage(null);
            }}
            className={`flex-1 py-2 text-xs font-black rounded-xl transition-all cursor-pointer ${
              isSignUp
                ? 'bg-white text-[#2A75D3] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Créer un Compte
          </button>
        </div>

        {/* Feedback Alerts */}
        {errorMessage && (
          <div className="mb-5 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2.5 animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span className="font-semibold">{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="mb-5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2.5 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-semibold">{successMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Input */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
              Identifiant / Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ex : meriem_dr"
                autoCapitalize="none"
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-[#2A75D3] focus:ring-2 focus:ring-[#2A75D3]/20 transition-all"
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Votre pseudonyme pour vos scores QCMs et le classement d'externat.
            </p>
          </div>

          {/* Password Input */}
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
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-[#2A75D3] focus:ring-2 focus:ring-[#2A75D3]/20 transition-all"
              />
            </div>
          </div>

          {/* Academic Year Selector (Tiles) on Sign Up */}
          {isSignUp && (
            <div className="pt-2">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                Sélectionnez votre Année d'Étude
              </label>

              <div className="space-y-2.5">
                {academicYearOptions.map((option) => {
                  const isSelected = selectedYear === option.id;
                  const Icon = option.icon;

                  return (
                    <div
                      key={option.id}
                      onClick={() => setSelectedYear(option.id)}
                      className={`p-3.5 rounded-[18px] border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-white border-[#2A75D3] shadow-xs ring-2 ring-[#2A75D3]/20'
                          : 'bg-white/80 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'bg-[#2A75D3] text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900">
                            {option.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 font-medium">
                            {option.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Radio dot indicator */}
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
          )}

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-2xl bg-[#2A75D3] hover:bg-[#2363b4] text-white text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-[#2A75D3]/20 transition-all cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Traitement en cours...</span>
                </>
              ) : (
                <>
                  <span>{isSignUp ? "Créer Mon Compte d'Externe" : 'Se Connecter'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Security badge footer */}
        <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
          <Shield className="w-3.5 h-3.5 text-[#2A75D3]" />
          <span>Données sécurisées avec Supabase PostgreSQL & Row Level Security</span>
        </div>
      </div>
    </div>
  );
};
