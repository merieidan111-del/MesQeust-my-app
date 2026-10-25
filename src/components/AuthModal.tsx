import React, { useState, useRef, useEffect } from 'react';
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
  LogOut,
  Camera,
  Trash2,
  Building2,
  Sparkles,
  BookOpen,
  Edit3,
  Award,
} from 'lucide-react';
import { AcademicYear, UserProfile } from '../types/medical';
import {
  signUpWithUsername,
  signInWithUsername,
} from '../services/supabaseClient';
import { continueWithGoogle } from '../services/authSessionManager';
import { AVATAR_PRESETS } from './StudentAvatar';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
  onLogout?: () => void;
}

const MEDICAL_SPECIALTIES = [
  'Cardiologie & Vasculaire',
  'Neurologie Clinique & Neurochirurgie',
  'Pneumologie & Phtisiologie',
  'Pédiatrie & Néonatalogie',
  'Gynécologie–Obstétrique',
  'Gastro-Entérologie & Hépatologie',
  'Hématologie Clinique & Oncologie',
  'Médecine Interne & Rhumatologie',
  'Chirurgie Générale & Viscérale',
  'Urgences & Réanimation Médicale',
  'Endocrinologie & Métabolisme',
  'Urologie & Néphrologie',
  'Psychiatrie & Santé Mentale',
  'Médecine Générale & Communautaire',
];

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  userProfile,
  onUpdateProfile,
  onLogout,
}) => {
  // Main Modal Tab: 'profile' (Modifier profil) vs 'auth' (Changer de compte / Se connecter)
  const [activeTab, setActiveTab] = useState<'profile' | 'auth'>('profile');

  // Profile Edit State
  const [editFullName, setEditFullName] = useState<string>(userProfile?.fullName || '');
  const [editUsername, setEditUsername] = useState<string>(userProfile?.username || '');
  const [editBio, setEditBio] = useState<string>(userProfile?.bio || '');
  const [editFaculty, setEditFaculty] = useState<string>(userProfile?.faculty || '');
  const [editTargetSpecialty, setEditTargetSpecialty] = useState<string>(
    userProfile?.targetSpecialty || 'Cardiologie & Vasculaire'
  );
  const [editYear, setEditYear] = useState<AcademicYear>(userProfile?.academicYear || '4ème Année');
  const [editAvatarUrl, setEditAvatarUrl] = useState<string>(userProfile?.avatarUrl || '');
  const [editCustomAvatar, setEditCustomAvatar] = useState<string>(
    userProfile?.customAvatarDataUrl || ''
  );
  const [editAvatarId, setEditAvatarId] = useState<string>(userProfile?.avatarId || 'stethoscope');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auth / Switch Account State
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [authUsername, setAuthUsername] = useState<string>('');
  const [authPassword, setAuthPassword] = useState<string>('');
  const [authSelectedYear, setAuthSelectedYear] = useState<AcademicYear>('4ème Année');

  // UI state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Sync state whenever modal opens or userProfile changes
  useEffect(() => {
    if (isOpen && userProfile) {
      setEditFullName(userProfile.fullName || '');
      setEditUsername(userProfile.username || '');
      setEditBio(userProfile.bio || '');
      setEditFaculty(userProfile.faculty || "Faculté de Médecine d'Alger");
      setEditTargetSpecialty(userProfile.targetSpecialty || 'Cardiologie & Vasculaire');
      setEditYear(userProfile.academicYear || '4ème Année');
      setEditCustomAvatar(userProfile.customAvatarDataUrl || '');
      setEditAvatarId(userProfile.avatarId || 'stethoscope');
      setErrorMessage(null);
      setSuccessMessage(null);
    }
  }, [isOpen, userProfile]);

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

  // Handle local image file upload (FileReader -> dataURL)
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 4 * 1024 * 1024) {
      setErrorMessage("L'image ne doit pas dépasser 4 Mo.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setEditCustomAvatar(dataUrl);
      setSuccessMessage('Photo importée ! Cliquez sur "Enregistrer" pour appliquer.');
      setErrorMessage(null);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveCustomAvatar = () => {
    setEditCustomAvatar('');
    if (fileInputRef.current) fileInputRef.current.value = '';
    setSuccessMessage('Photo réinitialisée à l’avatar clinique par défaut.');
  };

  // Save Profile Changes Handler
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const cleanName = editFullName.trim();
    const cleanUser = editUsername.trim().toLowerCase();

    if (!cleanName) {
      setErrorMessage('Veuillez saisir votre nom complet.');
      return;
    }
    if (!cleanUser || cleanUser.length < 2) {
      setErrorMessage("Le nom d'utilisateur doit contenir au moins 2 caractères.");
      return;
    }

    setIsLoading(true);

    try {
      const finalAvatar = editCustomAvatar || userProfile.avatarUrl;

      // Update in parent (persists to localStorage and state)
      onUpdateProfile({
        fullName: cleanName,
        username: cleanUser,
        bio: editBio.trim(),
        faculty: editFaculty.trim(),
        targetSpecialty: editTargetSpecialty,
        academicYear: editYear,
        avatarUrl: finalAvatar,
        customAvatarDataUrl: editCustomAvatar || undefined,
        avatarId: editAvatarId,
      });

      // Save to localStorage auxiliary keys for instant recovery
      try {
        localStorage.setItem(`syndromed_nick_${userProfile.userId}`, cleanUser);
        localStorage.setItem(`syndromed_avatar_${userProfile.userId}`, editAvatarId);
        if (editCustomAvatar) {
          localStorage.setItem(`syndromed_custom_photo_${userProfile.userId}`, editCustomAvatar);
        } else {
          localStorage.removeItem(`syndromed_custom_photo_${userProfile.userId}`);
        }
      } catch {
        // ignore
      }

      setSuccessMessage('Profil médical enregistré avec succès !');
      setTimeout(() => {
        setIsLoading(false);
        onClose();
      }, 700);
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(err?.message || 'Erreur lors de la mise à jour du profil.');
    }
  };

  // Auth Submit (Sign in or Sign up with another account)
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const cleanUser = authUsername.trim().toLowerCase();
    if (!cleanUser) {
      setErrorMessage("Veuillez saisir votre nom d'utilisateur.");
      return;
    }
    if (cleanUser.length < 3) {
      setErrorMessage("Le nom d'utilisateur doit contenir au moins 3 caractères.");
      return;
    }
    if (!authPassword) {
      setErrorMessage('Veuillez saisir votre mot de passe.');
      return;
    }
    if (authPassword.length < 6) {
      setErrorMessage('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    setIsLoading(true);

    try {
      if (isSignUp) {
        const res = await signUpWithUsername(cleanUser, authPassword, authSelectedYear);
        if (res.success && res.profile) {
          onUpdateProfile({
            username: res.profile.username,
            fullName: `@${res.profile.username}`,
            academicYear: res.profile.academic_year as AcademicYear,
            totalXp: res.profile.total_xp || 0,
            streakCount: res.profile.streak_count || 1,
          });
          setSuccessMessage('Nouveau compte créé avec succès !');
          setTimeout(() => {
            onClose();
          }, 900);
        } else {
          setErrorMessage(res.error || 'Erreur lors de la création du compte.');
        }
      } else {
        const res = await signInWithUsername(cleanUser, authPassword);
        if (res.success && res.profile) {
          onUpdateProfile({
            username: res.profile.username,
            fullName: `@${res.profile.username}`,
            academicYear: (res.profile.academic_year as AcademicYear) || authSelectedYear,
            totalXp: res.profile.total_xp || 0,
            streakCount: res.profile.streak_count || 1,
          });
          setSuccessMessage('Connexion réussie !');
          setTimeout(() => {
            onClose();
          }, 900);
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

  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

  const handleGoogleAuth = async () => {
    setIsGoogleLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    try {
      const res = await continueWithGoogle(authSelectedYear);
      if (res.success && res.account) {
        onUpdateProfile({
          userId: res.account.id,
          username: res.account.username,
          fullName: res.account.fullName,
          email: res.account.email,
          academicYear: res.account.academicYear,
          avatarUrl: res.account.avatarUrl,
        });
        setSuccessMessage(`Connecté avec succès via Google : ${res.account.fullName} !`);
        setTimeout(() => {
          onClose();
        }, 700);
      } else {
        setErrorMessage(res.error || 'Connexion Google annulée.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Erreur lors de la connexion Google.');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const currentDisplayAvatar = editCustomAvatar || userProfile.avatarUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="w-full max-w-xl bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer z-10"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Title & Tabs */}
        <div className="flex items-center gap-3.5 mb-5 pr-8">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-2xs shrink-0">
            {activeTab === 'profile' ? (
              <Edit3 className="w-6 h-6 text-indigo-600" />
            ) : (
              <GraduationCap className="w-6 h-6 text-indigo-600" />
            )}
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 tracking-tight">
              {activeTab === 'profile' ? 'Modifier mon Profil Médical' : 'Changer de Compte'}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {activeTab === 'profile'
                ? 'Personnalisez votre photo, nom, bio et spécialité clinique visée.'
                : 'Connectez-vous avec un autre identifiant d’externe.'}
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="bg-slate-100 p-1 rounded-2xl flex items-center mb-5 border border-slate-200/70">
          <button
            type="button"
            onClick={() => {
              setActiveTab('profile');
              setErrorMessage(null);
            }}
            className={`flex-1 py-2 text-xs font-black rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'profile'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Mon Profil</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('auth');
              setErrorMessage(null);
            }}
            className={`flex-1 py-2 text-xs font-black rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'auth'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Changer de Compte</span>
          </button>
        </div>

        {/* Feedback Alerts */}
        {errorMessage && (
          <div className="mb-4 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2.5 animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span className="font-semibold">{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="mb-4 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2.5 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-semibold">{successMessage}</span>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 1: PROFILE EDITING (Photo, Name, Bio, Specialty, Year) */}
        {/* ========================================================= */}
        {activeTab === 'profile' && (
          <form onSubmit={handleSaveProfile} className="space-y-4">
            {/* 1. Profile Picture / Avatar Section */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
                Photo de Profil & Avatar Médical
              </label>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Current Avatar Preview with badge */}
                <div className="relative group shrink-0">
                  <img
                    src={currentDisplayAvatar}
                    alt={editFullName}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-indigo-200 shadow-sm bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition-colors cursor-pointer"
                    title="Changer la photo"
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Upload & Action Controls */}
                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageFileChange}
                  />

                  <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 hover:bg-indigo-50/50 text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                    >
                      <Camera className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Téléverser une photo</span>
                    </button>

                    {editCustomAvatar && (
                      <button
                        type="button"
                        onClick={handleRemoveCustomAvatar}
                        className="px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 text-xs font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="Supprimer la photo personnalisée"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Supprimer</span>
                      </button>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-500 font-medium">
                    Formats acceptés : JPG, PNG ou WEBP (max 4 Mo). S'affiche partout dans l'application.
                  </p>
                </div>
              </div>

              {/* Quick Preset Selector */}
              <div className="pt-2 border-t border-slate-200/60">
                <span className="text-[11px] font-bold text-slate-600 block mb-2">
                  Ou choisir un avatar clinique stylisé :
                </span>
                <div className="grid grid-cols-6 gap-2">
                  {Object.values(AVATAR_PRESETS).slice(0, 6).map((preset) => {
                    const isSelected = editAvatarId === preset.id && !editCustomAvatar;
                    const Icon = preset.icon;

                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => {
                          setEditAvatarId(preset.id);
                          setEditCustomAvatar('');
                          setEditAvatarUrl(
                            `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(
                              preset.id + (editUsername || 'med')
                            )}`
                          );
                        }}
                        className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-200'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                        title={preset.name}
                      >
                        <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${preset.gradient} flex items-center justify-center text-white shadow-2xs`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-bold text-slate-600 truncate max-w-full">
                          {preset.name.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. Full Name & Username */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Nom & Prénom
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={editFullName}
                    onChange={(e) => setEditFullName(e.target.value)}
                    placeholder="ex : Dr. Meriem Laidani"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Nom d'utilisateur / Pseudo
                </label>
                <div className="relative">
                  <span className="text-slate-400 absolute left-3.5 top-2.5 font-bold text-xs">@</span>
                  <input
                    type="text"
                    required
                    value={editUsername}
                    onChange={(e) => setEditUsername(e.target.value.toLowerCase().replace(/\s+/g, '_'))}
                    placeholder="ex : meriem_dr"
                    className="w-full pl-8 pr-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* 3. Bio Médicale */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
                  Bio Médicale
                </label>
                <span className="text-[10px] font-bold text-slate-400">
                  {editBio.length} / 220
                </span>
              </div>
              <textarea
                value={editBio}
                maxLength={220}
                rows={3}
                onChange={(e) => setEditBio(e.target.value)}
                placeholder="Décrivez votre parcours, vos objectifs cliniques ou votre devise... (ex : Externe passionnée par la rythmologie et les urgences cardiologiques. Objectif : Major de promo !)"
                className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all resize-none leading-relaxed"
              />
            </div>

            {/* 4. Faculté & Spécialité Médicale Visée */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Faculté / CHU de rattachement
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={editFaculty}
                    onChange={(e) => setEditFaculty(e.target.value)}
                    placeholder="ex : Faculté de Médecine d'Alger"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Spécialité Visée
                </label>
                <select
                  value={editTargetSpecialty}
                  onChange={(e) => setEditTargetSpecialty(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all cursor-pointer"
                >
                  {MEDICAL_SPECIALTIES.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 5. Année d'Étude */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Niveau d'Externat
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['3ème Année', '4ème Année', '5ème Année'] as AcademicYear[]).map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setEditYear(yr)}
                    className={`py-2 px-3 rounded-2xl border text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      editYear === yr
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{yr.replace('ème Année', 'eme')}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enregistrement du profil...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Enregistrer mon Profil</span>
                  </>
                )}
              </button>
            </div>

            {/* Logout Action */}
            {onLogout && (
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onLogout();
                  }}
                  className="w-full py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center gap-2 border border-rose-200 transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5 text-rose-600" />
                  <span>Log out (Se Déconnecter de cette session)</span>
                </button>
              </div>
            )}
          </form>
        )}

        {/* ========================================================= */}
        {/* TAB 2: SWITCH ACCOUNT / SIGN IN / SIGN UP               */}
        {/* ========================================================= */}
        {activeTab === 'auth' && (
          <div>
            {/* Clean Toggle between Sign In and Sign Up */}
            <div className="bg-slate-200/70 p-1 rounded-2xl flex items-center mb-5">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(false);
                  setErrorMessage(null);
                }}
                className={`flex-1 py-2 text-xs font-black rounded-xl transition-all cursor-pointer ${
                  !isSignUp
                    ? 'bg-white text-indigo-700 shadow-xs'
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
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Créer un Compte
              </button>
            </div>

            {/* Continue with Google Button */}
            <div className="mb-4">
              <button
                type="button"
                onClick={handleGoogleAuth}
                disabled={isGoogleLoading || isLoading}
                className="w-full py-3 px-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-black flex items-center justify-center gap-3 shadow-xs hover:shadow-sm transition-all cursor-pointer disabled:opacity-50"
              >
                {isGoogleLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                    <span>Connexion Google en cours...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
                    <span>Continuer avec Google</span>
                  </>
                )}
              </button>

              <div className="relative my-4 flex items-center justify-center">
                <div className="border-t border-slate-200 w-full" />
                <span className="bg-white px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 absolute">
                  ou avec vos identifiants
                </span>
              </div>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
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
                    value={authUsername}
                    onChange={(e) => setAuthUsername(e.target.value)}
                    placeholder="ex : meriem_dr"
                    autoCapitalize="none"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>
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
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    placeholder="Minimum 6 caractères"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>
              </div>

              {/* Academic Year Selector on Sign Up */}
              {isSignUp && (
                <div className="pt-2">
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                    Sélectionnez votre Année d'Étude
                  </label>
                  <div className="space-y-2">
                    {academicYearOptions.map((option) => {
                      const isSelected = authSelectedYear === option.id;
                      const Icon = option.icon;

                      return (
                        <div
                          key={option.id}
                          onClick={() => setAuthSelectedYear(option.id)}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-indigo-50/50 border-indigo-500 shadow-2xs ring-2 ring-indigo-200'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'bg-indigo-600 text-white'
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

                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? 'border-indigo-600 bg-indigo-600'
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
                  className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all cursor-pointer disabled:opacity-50"
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
          </div>
        )}

        {/* Security badge footer */}
        <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
          <Shield className="w-3.5 h-3.5 text-indigo-600" />
          <span>Données et progression synchronisées en toute confidentialité</span>
        </div>
      </div>
    </div>
  );
};
