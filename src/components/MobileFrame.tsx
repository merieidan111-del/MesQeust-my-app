import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface MobileFrameProps {
  isMobilePreview: boolean;
  children: React.ReactNode;
  bottomBar?: React.ReactNode;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({
  isMobilePreview,
  children,
  bottomBar,
}) => {
  if (!isMobilePreview) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <div className="flex justify-center items-center py-6 px-2 min-h-screen bg-slate-200/50">
      {/* Realistic Mobile Device Container (iPhone 16 Pro styling) */}
      <div className="w-full max-w-[430px] rounded-[52px] bg-slate-900 border-[10px] border-slate-800 shadow-[0_25px_70px_rgba(0,0,0,0.15)] overflow-hidden relative ring-1 ring-slate-300 flex flex-col min-h-[880px]">
        {/* Top Status Bar & Dynamic Island */}
        <div className="bg-white px-7 pt-3.5 pb-2 flex items-center justify-between text-slate-800 text-xs select-none shrink-0 z-50 border-b border-slate-100">
          <span className="font-semibold text-[13px] tracking-tight">09:41</span>

          {/* Dynamic Island pill */}
          <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end px-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="flex items-center gap-1.5 opacity-80 text-slate-700">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* Mobile Viewport Content */}
        <div className="flex-1 overflow-y-auto bg-[#F8FAFD] p-3 scrollbar-none flex flex-col pb-4">
          {children}
        </div>

        {/* Bottom Navigation Bar inside Mobile Mockup */}
        {bottomBar && <div className="shrink-0 z-40">{bottomBar}</div>}

        {/* Bottom Home Indicator */}
        <div className="bg-white py-2.5 flex justify-center shrink-0 border-t border-slate-100">
          <div className="w-36 h-1 bg-slate-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};
