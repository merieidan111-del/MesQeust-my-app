import React, { useState, useEffect } from 'react';
import {
  Bell,
  Flame,
  Shield,
  AlertTriangle,
  CheckCircle,
  X,
  Volume2,
  Trash2,
} from 'lucide-react';
import {
  InAppNotification,
  getUserNotifications,
  markAllNotificationsAsRead,
  requestNotificationPermission,
  isNotificationPermissionGranted,
} from '../services/streakNotificationService';

interface NotificationCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string;
  onNavigateToPractice?: () => void;
  onNavigateToGamification?: () => void;
}

export const NotificationCenterModal: React.FC<NotificationCenterModalProps> = ({
  isOpen,
  onClose,
  userEmail,
  onNavigateToPractice,
  onNavigateToGamification,
}) => {
  const [notifications, setNotifications] = useState<InAppNotification[]>([]);
  const [permGranted, setPermGranted] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && userEmail) {
      setNotifications(getUserNotifications(userEmail));
      setPermGranted(isNotificationPermissionGranted());
      markAllNotificationsAsRead(userEmail);
    }
  }, [isOpen, userEmail]);

  if (!isOpen) return null;

  const handleRequestPermission = async () => {
    const res = await requestNotificationPermission();
    if (res === 'granted') {
      setPermGranted(true);
    }
  };

  const handleClearAll = () => {
    localStorage.removeItem(`medquest_notifications_${userEmail.toLowerCase().trim()}`);
    setNotifications([]);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-amber-50 via-orange-50/40 to-white border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-200 shrink-0">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-base sm:text-lg leading-tight flex items-center gap-2">
                Notifications & Rappels de Série
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Suivi de régularité, alertes de jours manqués et sauvegardes de flamme
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Browser Permission Banner if not enabled */}
        {!permGranted && (
          <div className="mx-5 mt-4 p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Volume2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <p className="text-xs text-indigo-900 font-semibold">
                Activer les notifications du navigateur pour les rappels quotidiens ?
              </p>
            </div>
            <button
              onClick={handleRequestPermission}
              className="px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition shadow-xs cursor-pointer shrink-0"
            >
              Activer
            </button>
          </div>
        )}

        {/* Notifications list */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1 divide-y divide-slate-100">
          {notifications.length === 0 ? (
            <div className="text-center py-10 space-y-2">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Bell className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-700">Aucune notification pour le moment</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Vos alertes de série quotidienne, rappels et gels apparaîtront ici.
              </p>
            </div>
          ) : (
            notifications.map((notif) => {
              const isFlame = notif.type === 'streak_reminder';
              const isMissed = notif.type === 'streak_missed';
              const isFrozen = notif.type === 'streak_freeze_used';

              return (
                <div key={notif.id} className="pt-3 first:pt-0 flex gap-3 items-start">
                  <div
                    className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isFlame
                        ? 'bg-amber-100 text-amber-600'
                        : isMissed
                        ? 'bg-slate-100 text-slate-500'
                        : isFrozen
                        ? 'bg-sky-100 text-sky-600'
                        : 'bg-emerald-100 text-emerald-600'
                    }`}
                  >
                    {isFlame && <Flame className="w-4 h-4 fill-amber-500" />}
                    {isMissed && <AlertTriangle className="w-4 h-4 text-slate-500" />}
                    {isFrozen && <Shield className="w-4 h-4 text-sky-600" />}
                    {!isFlame && !isMissed && !isFrozen && <CheckCircle className="w-4 h-4" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`text-xs font-black ${
                          isMissed ? 'text-slate-700' : 'text-slate-900'
                        }`}
                      >
                        {notif.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {new Date(notif.timestamp).toLocaleDateString('fr-FR', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                      {notif.message}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
          {notifications.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-xs font-bold text-slate-500 hover:text-rose-600 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Effacer tout</span>
            </button>
          )}

          <div className="flex items-center gap-2 ml-auto">
            {onNavigateToPractice && (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToPractice();
                }}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl text-xs font-bold hover:shadow-md transition cursor-pointer flex items-center gap-1.5"
              >
                <Flame className="w-3.5 h-3.5 fill-white" />
                <span>S'entraîner maintenant</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 transition cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
