import React from 'react';
import { Sparkles, Trophy, Star, Flame, Award, Heart, CheckCircle2 } from 'lucide-react';
import { ModuleExactLogo } from './ModuleExactLogos';

export type StickerImpression = 'triumphant' | 'proud' | 'determined' | 'streak_fire' | 'studious';

export interface ModuleMascotStickerProps {
  moduleId?: string;
  moduleName?: string;
  impression?: StickerImpression;
  scorePercent?: number;
  size?: number;
  className?: string;
  showBadge?: boolean;
  interactive?: boolean;
}

/**
 * Returns the best impression based on quiz score percent if not specified
 */
export function getImpressionFromScore(scorePercent: number): StickerImpression {
  if (scorePercent >= 80) return 'triumphant';
  if (scorePercent >= 50) return 'proud';
  return 'determined';
}

/**
 * Normalizes any module ID or title to standard clinical key
 */
export function getStickerKeyForModule(moduleIdOrTitle?: string): string {
  if (!moduleIdOrTitle) return 'cardio';
  const low = moduleIdOrTitle.toLowerCase();
  if (low.includes('cardio') || low.includes('coeur') || low.includes('vascul')) return 'cardio';
  if (low.includes('pneumo') || low.includes('pulmon') || low.includes('resp')) return 'pneumo';
  if (low.includes('infectio') || low.includes('microb') || low.includes('virus')) return 'infectio';
  if (low.includes('neuro') || low.includes('cerveau') || low.includes('crane')) return 'neuro';
  if (low.includes('hemato') || low.includes('sang') || low.includes('onco')) return 'hemato';
  if (low.includes('gastro') || low.includes('estomac') || low.includes('foie') || low.includes('hepato')) return 'gastro';
  if (low.includes('psy') || low.includes('mental')) return 'psy';
  if (low.includes('gyn') || low.includes('obst') || low.includes('femme')) return 'gyneco';
  if (low.includes('ped') || low.includes('enfant') || low.includes('bebe')) return 'pediatrie';
  if (low.includes('nephro') || low.includes('uro') || low.includes('rein')) return 'nephro';
  if (low.includes('ortho') || low.includes('otr') || low.includes('os') || low.includes('locomot')) return 'ortho';
  if (low.includes('endo') || low.includes('thyro') || low.includes('diabete')) return 'endo';
  if (low.includes('semio') || low.includes('proped')) return 'semio';
  if (low.includes('pharma') || low.includes('medicam')) return 'pharma';
  return 'cardio';
}

export function getClinicalModuleTitle(key: string): string {
  switch (key) {
    case 'cardio': return 'Cardiologie & Vasculaire';
    case 'pneumo': return 'Pneumologie';
    case 'infectio': return 'Infectiologie';
    case 'neuro': return 'Neurologie & Neurochirurgie';
    case 'hemato': return 'Hématologie & Oncologie';
    case 'gastro': return 'Hépato-Gastroentérologie';
    case 'psy': return 'Psychiatrie';
    case 'gyneco': return 'Gynécologie–Obstétrique';
    case 'pediatrie': return 'Pédiatrie';
    case 'nephro': return 'Urologie & Néphrologie';
    case 'ortho': return 'Appareil locomoteur (OTR)';
    case 'endo': return 'Endocrinologie';
    case 'semio': return 'Sémiologie Médicale';
    case 'pharma': return 'Pharmacologie';
    default: return 'Module Clinique';
  }
}

export function getClinicalModuleDomain(key: string): string {
  switch (key) {
    case 'cardio': return 'Rythmes, SCA & Valvulopathies';
    case 'pneumo': return 'BPCO, Asthme & Gazométrie';
    case 'infectio': return 'Antibiothérapie & Épidémies';
    case 'neuro': return 'Examen, AVC & Paires Crâniennes';
    case 'hemato': return 'Hémogramme, Leucémies & Hémostase';
    case 'gastro': return 'Urgences, CHC & Endoscopies';
    case 'psy': return 'Humeur & Addictologie';
    case 'gyneco': return 'Obstétrique & Santé de la Femme';
    case 'pediatrie': return 'Croissance & Pédiatrie Générale';
    case 'nephro': return 'Ionogramme, IRA & Clairance';
    case 'ortho': return 'Traumatologie & Consolidation';
    case 'endo': return 'Diabète & Hormonologie';
    case 'semio': return 'Examen Clinique & Signes Physiques';
    case 'pharma': return 'Classes Thérapeutiques & Cibles';
    default: return 'Programme Officiel ECN & Résidanat';
  }
}

/**
 * Clinical Module Certification Badge (Replaces all cartoon mascot characters)
 * Directly renders the corresponding organ icon from the user's photo sheet.
 */
export const ModuleMascotSticker: React.FC<ModuleMascotStickerProps> = ({
  moduleId,
  moduleName,
  impression = 'studious',
  scorePercent,
  size = 180,
  className = '',
  showBadge = true,
  interactive = true,
}) => {
  const finalImpression: StickerImpression =
    scorePercent !== undefined ? getImpressionFromScore(scorePercent) : impression;

  const key = getStickerKeyForModule(moduleId || moduleName);
  const title = moduleName || getClinicalModuleTitle(key);
  const domain = getClinicalModuleDomain(key);

  const impressionMeta = {
    triumphant: {
      title: 'Major de Promo !',
      sub: 'Excellence clinique remarquable !',
      badgeColor: 'bg-amber-500 text-white shadow-amber-300/50',
      halo: 'rgba(245, 158, 11, 0.25)',
      sparkles: true,
    },
    proud: {
      title: 'Solide & Validé !',
      sub: 'Notions clés parfaitement acquises !',
      badgeColor: 'bg-emerald-600 text-white shadow-emerald-300/50',
      halo: 'rgba(16, 185, 129, 0.22)',
      sparkles: true,
    },
    determined: {
      title: 'Esprit de Garde !',
      sub: 'Persévérance : chaque erreur forge le médecin !',
      badgeColor: 'bg-indigo-600 text-white shadow-indigo-300/50',
      halo: 'rgba(99, 102, 241, 0.2)',
      sparkles: false,
    },
    streak_fire: {
      title: 'Série Préservée !',
      sub: 'Flamme quotidienne allumée avec succès !',
      badgeColor: 'bg-orange-600 text-white shadow-orange-300/50',
      halo: 'rgba(234, 88, 12, 0.3)',
      sparkles: true,
    },
    studious: {
      title: 'Validation Clinique',
      sub: 'Révision active & rigoureuse',
      badgeColor: 'bg-slate-800 text-white shadow-slate-300/50',
      halo: 'rgba(56, 189, 248, 0.18)',
      sparkles: false,
    },
  }[finalImpression];

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none group transition-transform ${
        interactive ? 'hover:scale-105 duration-300 cursor-pointer' : ''
      } ${className}`}
      style={{ width: size }}
    >
      {/* Subtle aura behind card */}
      <div
        className="absolute -inset-2 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ background: impressionMeta.halo }}
      />

      {/* Card with Exact Reference Photo Icon */}
      <div
        className="relative w-full rounded-3xl bg-white p-3.5 border-2 border-slate-200/90 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.14)] overflow-hidden flex flex-col items-center justify-between"
        style={{
          aspectRatio: '1 / 1.18',
          background: '#FFFDF9',
        }}
      >
        {/* Header label with official module tag */}
        <div className="w-full flex items-center justify-between px-1">
          <span className="text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 truncate max-w-[120px]">
            {title}
          </span>
          {impressionMeta.sparkles && (
            <span className="flex items-center text-amber-500">
              <Sparkles className="w-3.5 h-3.5 fill-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
            </span>
          )}
        </div>

        {/* Center Exact Organ Icon cropped from photo sheet */}
        <div className="relative flex-1 w-full flex items-center justify-center my-2">
          <ModuleExactLogo
            moduleId={key}
            moduleTitle={title}
            size={Math.min(size * 0.58, 96)}
          />
        </div>

        {/* Bottom Clinical Title Banner (No mascot names!) */}
        <div className="w-full text-center pb-0.5">
          <div className="text-[11px] font-black text-slate-900 tracking-tight leading-tight truncate">
            {title}
          </div>
          <div className="text-[9px] font-semibold text-slate-600 truncate mt-0.5">
            {domain}
          </div>
        </div>
      </div>

      {/* Certification Score Badge */}
      {showBadge && (
        <div className="mt-2.5 text-center">
          <span
            className={`inline-flex items-center gap-1 text-[11px] font-black px-3 py-1 rounded-full shadow-md transition-all ${impressionMeta.badgeColor}`}
          >
            {finalImpression === 'triumphant' && <Trophy className="w-3.5 h-3.5" />}
            {finalImpression === 'proud' && <Star className="w-3.5 h-3.5 fill-white" />}
            {finalImpression === 'determined' && <Heart className="w-3.5 h-3.5 fill-white" />}
            {finalImpression === 'streak_fire' && <Flame className="w-3.5 h-3.5 fill-white" />}
            {finalImpression === 'studious' && <CheckCircle2 className="w-3.5 h-3.5" />}
            <span>{impressionMeta.title}</span>
          </span>
          <p className="text-[10px] font-medium text-slate-600 mt-1 max-w-[200px]">
            {impressionMeta.sub}
          </p>
        </div>
      )}
    </div>
  );
};
