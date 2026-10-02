import React, { useState, useEffect } from 'react';
import {
  X,
  Smartphone,
  Database,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Send,
  Loader2,
  ShieldCheck,
  ExternalLink,
  Receipt,
  FileCode,
  PackageCheck,
  RefreshCw,
} from 'lucide-react';
import {
  submitApkOrderToSupabase,
  fetchApkOrdersFromSupabase,
  testSupabaseConnection,
  ApkOrderCheckout,
  APK_ORDERS_SQL_SCHEMA,
  SUPABASE_PROJECT_ID,
  SUPABASE_PROJECT_NAME,
  SUPABASE_URL,
} from '../services/supabaseClient';
import { AcademicYear } from '../types/medical';

interface ApkOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAcademicYear?: AcademicYear;
  userEmail?: string;
  userName?: string;
  onOrderSuccess?: (order: ApkOrderCheckout) => void;
}

export const ApkOrderModal: React.FC<ApkOrderModalProps> = ({
  isOpen,
  onClose,
  defaultAcademicYear = '4ème Année',
  userEmail = '',
  userName = '',
  onOrderSuccess,
}) => {
  const [activeView, setActiveView] = useState<'checkout' | 'orders' | 'sql'>('checkout');

  // Form State
  const [fullName, setFullName] = useState(userName || '');
  const [email, setEmail] = useState(userEmail || '');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [faculty, setFaculty] = useState('Faculté de Médecine d\'Alger');
  const [academicYear, setAcademicYear] = useState<string>(defaultAcademicYear);
  const [packSelected, setPackSelected] = useState('Pack Annuel Complet Externat');
  const [deviceBrand, setDeviceBrand] = useState('Samsung Galaxy / Android 14');
  const [paymentMethod, setPaymentMethod] = useState('BaridiMob / CCP');
  const [notes, setNotes] = useState('');

  // Status & Submissions
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<ApkOrderCheckout | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isTableMissing, setIsTableMissing] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  // Live Supabase Status
  const [connectionStatus, setConnectionStatus] = useState<{
    connected: boolean;
    tableExists: boolean;
    message: string;
  } | null>(null);
  const [isCheckingConnection, setIsCheckingConnection] = useState(false);

  // Orders List
  const [storedOrders, setStoredOrders] = useState<ApkOrderCheckout[]>([]);
  const [isLoadingOrders, setIsLoadingOrders] = useState(false);

  const packs = [
    {
      id: 'Pack Annuel Complet Externat',
      name: 'Pack Annuel Complet Externat',
      price: 4500,
      description: 'Accès illimité aux 3 années (3ème, 4ème, 5ème), 24 cours officiels, 720 QCMs & IA intégrée.',
      badge: 'Le plus populaire',
    },
    {
      id: 'Pack Spécialités 4ème Année',
      name: 'Pack Spécialités 4ème Année',
      price: 3200,
      description: 'Modules Cardio, Neuro, Pneumo, Néphro, Hépato avec dossiers cliniques complets.',
      badge: 'Ciblé 4ème Année',
    },
    {
      id: 'Pack Découverte Étudiant',
      name: 'Pack Découverte Étudiant',
      price: 0,
      description: 'Version APK d\'évaluation avec 100 QCMs commentés et fiches de cardiologie.',
      badge: 'Essai Gratuit',
    },
  ];

  const currentPack = packs.find((p) => p.id === packSelected) || packs[0];

  useEffect(() => {
    if (isOpen) {
      checkConnection();
      loadOrders();
    }
  }, [isOpen]);

  const checkConnection = async () => {
    setIsCheckingConnection(true);
    const res = await testSupabaseConnection();
    setConnectionStatus(res);
    setIsCheckingConnection(false);
  };

  const loadOrders = async () => {
    setIsLoadingOrders(true);
    const res = await fetchApkOrdersFromSupabase();
    setStoredOrders(res.orders || []);
    setIsLoadingOrders(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phoneNumber.trim()) {
      setErrorMessage('Veuillez renseigner votre nom, email et numéro de téléphone.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setIsTableMissing(false);

    const orderPayload: ApkOrderCheckout = {
      full_name: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone_number: phoneNumber.trim(),
      faculty_university: faculty,
      academic_year: academicYear,
      pack_selected: packSelected,
      price_da: currentPack.price,
      payment_method: paymentMethod,
      device_brand: deviceBrand,
      notes: notes.trim(),
      status: 'pending',
    };

    const res = await submitApkOrderToSupabase(orderPayload);
    setIsSubmitting(false);

    if (res.success) {
      setSubmitSuccess(res.data);
      if (onOrderSuccess) onOrderSuccess(res.data);
      loadOrders();
    } else {
      if (res.isTableMissing) {
        setIsTableMissing(true);
        setErrorMessage(
          'La table "apk_orders" n\'existe pas encore dans votre base Supabase. Le schéma SQL a été préparé pour vous ci-dessous pour une création en un clic.'
        );
      } else {
        setErrorMessage(res.error || 'Erreur lors de l\'enregistrement dans Supabase.');
      }
    }
  };

  const handleCopySql = () => {
    navigator.clipboard.writeText(APK_ORDERS_SQL_SCHEMA);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                <Database className="w-3 h-3 text-teal-600" />
                Supabase Connecté • {SUPABASE_PROJECT_NAME}
              </span>
              <span className="text-[10px] font-mono text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full hidden sm:inline">
                {SUPABASE_PROJECT_ID}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-1 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-indigo-600" />
              Commande & Déploiement APK Android
            </h2>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              Toutes les données de checkout sont enregistrées en direct dans votre base PostgreSQL Supabase.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher Tabs */}
        <div className="px-6 pt-3 pb-0 border-b border-slate-100 flex items-center justify-between gap-2 overflow-x-auto bg-white">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('checkout')}
              className={`px-4 py-2 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                activeView === 'checkout'
                  ? 'border-indigo-600 text-indigo-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <PackageCheck className="w-4 h-4" />
              <span>Formulaire de Commande</span>
            </button>

            <button
              onClick={() => {
                setActiveView('orders');
                loadOrders();
              }}
              className={`px-4 py-2 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                activeView === 'orders'
                  ? 'border-teal-600 text-teal-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Receipt className="w-4 h-4" />
              <span>Commandes dans Supabase</span>
              {storedOrders.length > 0 && (
                <span className="text-[10px] px-1.5 py-0.2 bg-teal-100 text-teal-800 rounded-full font-bold">
                  {storedOrders.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveView('sql')}
              className={`px-4 py-2 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                activeView === 'sql'
                  ? 'border-indigo-600 text-indigo-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>Schéma SQL Table</span>
            </button>
          </div>

          {/* Connection status pill */}
          <button
            onClick={checkConnection}
            title="Tester la connexion Supabase"
            className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer shrink-0 py-1"
          >
            {isCheckingConnection ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-teal-600" />
            ) : (
              <RefreshCw className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline">Statut BDD</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* View 1: Checkout Form */}
          {activeView === 'checkout' && (
            <>
              {submitSuccess ? (
                <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Enregistré avec succès dans Supabase
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1">
                      Commande APK Confirmée !
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                      Votre demande d'accès APK a été insérée dans la table{' '}
                      <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-emerald-200 text-emerald-800">
                        public.apk_orders
                      </code>{' '}
                      de votre projet Supabase.
                    </p>
                  </div>

                  {/* Order Summary Receipt */}
                  <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 max-w-md mx-auto text-left text-xs space-y-2.5">
                    <div className="flex justify-between pb-2 border-b border-slate-100">
                      <span className="text-slate-500">Nom de l'externe :</span>
                      <span className="font-bold text-slate-900">{submitSuccess.full_name}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-100">
                      <span className="text-slate-500">Email de réception :</span>
                      <span className="font-mono font-bold text-slate-900">{submitSuccess.email}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-100">
                      <span className="text-slate-500">Téléphone / WhatsApp :</span>
                      <span className="font-bold text-slate-900">{submitSuccess.phone_number}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-100">
                      <span className="text-slate-500">Pack commandé :</span>
                      <span className="font-bold text-indigo-700">{submitSuccess.pack_selected}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-100">
                      <span className="text-slate-500">Montant total :</span>
                      <span className="font-black text-slate-900">{submitSuccess.price_da} DZD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Mode de paiement :</span>
                      <span className="font-bold text-slate-700">{submitSuccess.payment_method}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmitSuccess(null)}
                      className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Nouvelle commande
                    </button>
                    <button
                      onClick={() => setActiveView('orders')}
                      className="px-5 py-2.5 rounded-full bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-colors shadow-sm cursor-pointer"
                    >
                      Voir dans Supabase
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-bold">{errorMessage}</p>
                        {isTableMissing && (
                          <div className="mt-2 flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setActiveView('sql')}
                              className="px-3 py-1 rounded-lg bg-rose-600 text-white font-bold hover:bg-rose-700 transition-colors text-[11px]"
                            >
                              Voir & Exécuter le Script SQL
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Pack Selector */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      1. Choix de la Licence APK Android
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {packs.map((p) => {
                        const isSelected = packSelected === p.id;
                        return (
                          <div
                            key={p.id}
                            onClick={() => setPackSelected(p.id)}
                            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-indigo-50/70 border-indigo-500 shadow-sm ring-2 ring-indigo-200'
                                : 'bg-white border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div>
                              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                                {p.badge}
                              </span>
                              <h4 className="font-extrabold text-xs text-slate-900 mt-2">
                                {p.name}
                              </h4>
                              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                {p.description}
                              </p>
                            </div>
                            <div className="mt-3 pt-2 border-t border-slate-100 flex items-baseline justify-between">
                              <span className="text-base font-black text-indigo-700">
                                {p.price === 0 ? 'Gratuit' : `${p.price} DZD`}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Personal & Academic Details */}
                  <div className="space-y-4">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      2. Informations de l'Externe
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="block text-xs font-bold text-slate-700 mb-1">
                          Nom et Prénom *
                        </span>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Dr. Meriem Laidani"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-400 focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <span className="block text-xs font-bold text-slate-700 mb-1">
                          Email Universitaire ou Gmail *
                        </span>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="meriemlaidani117@gmail.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-400 focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <span className="block text-xs font-bold text-slate-700 mb-1">
                          Numéro de Téléphone / WhatsApp *
                        </span>
                        <input
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="05 55 12 34 56"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-400 focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <span className="block text-xs font-bold text-slate-700 mb-1">
                          Faculté de Médecine
                        </span>
                        <select
                          value={faculty}
                          onChange={(e) => setFaculty(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-indigo-400 focus:outline-hidden"
                        >
                          <option value="Faculté de Médecine d'Alger">Faculté de Médecine d'Alger</option>
                          <option value="Faculté de Médecine d'Oran">Faculté de Médecine d'Oran</option>
                          <option value="Faculté de Médecine de Constantine">Faculté de Médecine de Constantine</option>
                          <option value="Faculté de Médecine de Sétif">Faculté de Médecine de Sétif</option>
                          <option value="Faculté de Médecine d'Annaba">Faculté de Médecine d'Annaba</option>
                          <option value="Faculté de Médecine de Tizi Ouzou">Faculté de Médecine de Tizi Ouzou</option>
                          <option value="Faculté de Médecine de Batna">Faculté de Médecine de Batna</option>
                          <option value="Autre Faculté / Étranger">Autre Faculté</option>
                        </select>
                      </div>

                      <div>
                        <span className="block text-xs font-bold text-slate-700 mb-1">
                          Année d'Étude Médicale
                        </span>
                        <select
                          value={academicYear}
                          onChange={(e) => setAcademicYear(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-indigo-400 focus:outline-hidden"
                        >
                          <option value="3ème Année">3ème Année (Sémiologie)</option>
                          <option value="4ème Année">4ème Année (Pathologies & Spécialités)</option>
                          <option value="5ème Année">5ème Année (Spécialités Avancées)</option>
                        </select>
                      </div>

                      <div>
                        <span className="block text-xs font-bold text-slate-700 mb-1">
                          Appareil Android de destination
                        </span>
                        <input
                          type="text"
                          value={deviceBrand}
                          onChange={(e) => setDeviceBrand(e.target.value)}
                          placeholder="Ex: Samsung Tab S8, Xiaomi 13"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-400 focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      3. Mode de Règlement
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'BaridiMob / CCP', label: 'BaridiMob / CCP', sub: 'Paiement instantané par Rip' },
                        { id: 'Virement Bancaire', label: 'Virement Bancaire', sub: 'BNA, BEA, CPA, etc.' },
                        { id: 'Main propre / Campus', label: 'Main Propre', sub: 'Remise au campus hospitalier' },
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setPaymentMethod(item.id)}
                          className={`p-3.5 rounded-2xl border text-xs cursor-pointer transition-all ${
                            paymentMethod === item.id
                              ? 'bg-teal-50 border-teal-500 font-bold text-teal-900 shadow-2xs'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-extrabold text-slate-900">{item.label}</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">{item.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <span className="block text-xs font-bold text-slate-700 mb-1">
                      Remarques ou Besoins spécifiques (optionnel)
                    </span>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: besoin d'une facture pour l'association des étudiants, demande de QCMs supplémentaires..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-400 focus:outline-hidden"
                    />
                  </div>

                  {/* Actions & Submit */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                    <div className="text-xs text-slate-500">
                      Destination Supabase : <span className="font-mono font-bold text-slate-700">public.apk_orders</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-full border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        Annuler
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-xs font-black flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Enregistrement dans Supabase...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Valider la Commande ({currentPack.price === 0 ? 'Gratuit' : `${currentPack.price} DZD`})</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </>
          )}

          {/* View 2: Stored Orders List in Supabase */}
          {activeView === 'orders' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900">
                    Historique des Commandes en Base Supabase
                  </h3>
                  <p className="text-xs text-slate-500">
                    Enregistrements extraits de la table <code>public.apk_orders</code>.
                  </p>
                </div>

                <button
                  onClick={loadOrders}
                  disabled={isLoadingOrders}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoadingOrders ? 'animate-spin' : ''}`} />
                  <span>Actualiser</span>
                </button>
              </div>

              {storedOrders.length === 0 ? (
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
                    <Receipt className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-700">Aucune commande enregistrée pour le moment</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Remplissez le formulaire de commande pour insérer votre première entrée dans Supabase.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveView('checkout')}
                    className="px-4 py-2 rounded-full bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-colors"
                  >
                    Passer une commande
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {storedOrders.map((ord, idx) => (
                    <div
                      key={ord.id || idx}
                      className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-slate-900">{ord.full_name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {ord.academic_year}
                          </span>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                            {ord.status || 'pending'}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span>{ord.email}</span>
                          <span>•</span>
                          <span>{ord.phone_number}</span>
                          <span>•</span>
                          <span className="text-teal-700 font-bold">{ord.faculty_university}</span>
                        </div>
                      </div>

                      <div className="sm:text-right shrink-0">
                        <div className="font-extrabold text-xs text-indigo-700">{ord.pack_selected}</div>
                        <div className="text-xs font-black text-slate-900 mt-0.5">{ord.price_da} DZD</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {ord.created_at ? new Date(ord.created_at).toLocaleDateString('fr-FR') : ''}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* View 3: Supabase SQL Setup */}
          {activeView === 'sql' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-900 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div className="flex-1 leading-relaxed">
                  <p className="font-bold">Table PostgreSQL & RLS pour Supabase :</p>
                  <p className="mt-0.5 text-teal-800">
                    Copiez et exécutez ce script dans l'éditeur SQL de votre projet Supabase (
                    <a
                      href={`https://supabase.com/dashboard/project/${SUPABASE_PROJECT_ID}/sql`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold underline inline-flex items-center gap-1"
                    >
                      Ouvrir l'éditeur SQL <ExternalLink className="w-3 h-3 inline" />
                    </a>
                    ) pour activer le stockage persistant des commandes avec Row Level Security.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
                <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px] text-teal-300">schema_apk_orders.sql</span>
                  <button
                    onClick={handleCopySql}
                    className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedSql ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSql ? 'Copié !' : 'Copier le SQL'}</span>
                  </button>
                </div>

                <pre className="p-4 text-slate-200 text-xs font-mono leading-relaxed overflow-x-auto max-h-[360px] overflow-y-auto">
                  <code>{APK_ORDERS_SQL_SCHEMA}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
