import {
  Stethoscope,
  HeartPulse,
  Brain,
  Activity,
  Sparkles,
  Shield,
  Award,
  Pill,
  Bone,
  Baby,
  Trophy,
  Flame,
  EyeOff,
} from 'lucide-react';
import { SyndromedMascotCat } from './SyndromedLogo';

export interface AvatarPreset {
  id: string;
  name: string;
  gradient: string;
  iconColor: string;
  borderColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const AVATAR_PRESETS: Record<string, AvatarPreset> = {
  mascot: {
    id: 'mascot',
    name: 'Chat Médecin (Mascotte)',
    gradient: 'from-[#311465] to-[#4A2580]',
    iconColor: 'text-white',
    borderColor: 'border-purple-400 ring-1 ring-purple-300/40',
    icon: SyndromedMascotCat,
  },
  stethoscope: {
    id: 'stethoscope',
    name: 'Stéthoscope Clinique',
    gradient: 'from-[#0F172A] via-slate-800 to-[#0F172A]',
    iconColor: 'text-[#10B981]',
    borderColor: 'border-emerald-500/40 ring-1 ring-emerald-500/20',
    icon: Stethoscope,
  },
  pulse: {
    id: 'pulse',
    name: 'Rythme Cardio',
    gradient: 'from-rose-500 to-red-600',
    iconColor: 'text-white',
    borderColor: 'border-rose-300',
    icon: HeartPulse,
  },
  brain: {
    id: 'brain',
    name: 'Synapse Neuro',
    gradient: 'from-indigo-600 to-purple-600',
    iconColor: 'text-white',
    borderColor: 'border-purple-300',
    icon: Brain,
  },
  dna: {
    id: 'dna',
    name: 'Génétique & Bio',
    gradient: 'from-cyan-500 to-blue-600',
    iconColor: 'text-white',
    borderColor: 'border-cyan-300',
    icon: Activity,
  },
  caduceus: {
    id: 'caduceus',
    name: 'Caducée & Éthique',
    gradient: 'from-emerald-500 to-teal-600',
    iconColor: 'text-white',
    borderColor: 'border-emerald-300',
    icon: Sparkles,
  },
  shield: {
    id: 'shield',
    name: 'Garde & Urgences',
    gradient: 'from-blue-600 to-indigo-700',
    iconColor: 'text-white',
    borderColor: 'border-blue-300',
    icon: Shield,
  },
  award: {
    id: 'award',
    name: 'Major de Promo',
    gradient: 'from-amber-400 to-orange-500',
    iconColor: 'text-white',
    borderColor: 'border-amber-300',
    icon: Award,
  },
  pill: {
    id: 'pill',
    name: 'Pharmacie Clinique',
    gradient: 'from-teal-400 to-emerald-500',
    iconColor: 'text-white',
    borderColor: 'border-teal-300',
    icon: Pill,
  },
  bone: {
    id: 'bone',
    name: 'Ostéo & Ortho',
    gradient: 'from-amber-500 to-yellow-600',
    iconColor: 'text-white',
    borderColor: 'border-amber-300',
    icon: Bone,
  },
  baby: {
    id: 'baby',
    name: 'Pédiatrie & Soins',
    gradient: 'from-sky-400 to-cyan-500',
    iconColor: 'text-white',
    borderColor: 'border-sky-300',
    icon: Baby,
  },
  trophy: {
    id: 'trophy',
    name: 'Excellence Médicale',
    gradient: 'from-yellow-400 via-amber-400 to-amber-500',
    iconColor: 'text-slate-900',
    borderColor: 'border-yellow-300',
    icon: Trophy,
  },
  flame: {
    id: 'flame',
    name: 'Série Ininterrompue',
    gradient: 'from-orange-500 to-red-500',
    iconColor: 'text-white',
    borderColor: 'border-orange-300',
    icon: Flame,
  },
  anonymous: {
    id: 'anonymous',
    name: 'Mode Incognito / Anonyme',
    gradient: 'from-[#0F172A] to-[#1E293B]',
    iconColor: 'text-[#10B981]',
    borderColor: 'border-emerald-500/50 ring-2 ring-emerald-500/20',
    icon: EyeOff,
  },
};

export interface StudentAvatarProps {
  avatarId?: string;
  name?: string;
  isAnonymous?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  showBadge?: boolean;
}

export const StudentAvatar: React.FC<StudentAvatarProps> = ({
  avatarId = 'stethoscope',
  name = 'Externe',
  isAnonymous = false,
  size = 'md',
  className = '',
  onClick,
  showBadge = false,
}) => {
  // If anonymous, enforce anonymous preset
  const presetKey = isAnonymous
    ? 'anonymous'
    : AVATAR_PRESETS[avatarId]
    ? avatarId
    : 'stethoscope';

  const preset = AVATAR_PRESETS[presetKey] || AVATAR_PRESETS.stethoscope;
  const IconComponent = preset.icon;

  const sizeClasses = {
    sm: 'w-8 h-8 rounded-xl',
    md: 'w-10 h-10 rounded-2xl',
    lg: 'w-12 h-12 rounded-2xl',
    xl: 'w-16 h-16 rounded-3xl',
  }[size];

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  }[size];

  return (
    <div
      onClick={onClick}
      className={`relative shrink-0 flex items-center justify-center bg-gradient-to-tr ${preset.gradient} ${preset.borderColor} border shadow-xs select-none ${sizeClasses} ${
        onClick ? 'cursor-pointer hover:scale-105 active:scale-95 transition-transform' : ''
      } ${className}`}
      title={isAnonymous ? 'Profil Anonyme' : preset.name}
    >
      <IconComponent className={`${iconSizes} ${preset.iconColor} drop-shadow-xs`} />

      {showBadge && isAnonymous && (
        <span
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10B981] border-2 border-white"
          title="Mode Incognito Actif"
        />
      )}
    </div>
  );
};
