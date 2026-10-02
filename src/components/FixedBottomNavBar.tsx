import React from 'react';
import { Home, Compass, Heart, BarChart3, User } from 'lucide-react';

export type BottomNavTab = 'home' | 'explore' | 'practice' | 'progress' | 'profile';

interface FixedBottomNavBarProps {
  activeTab: BottomNavTab;
  onTabChange: (tab: BottomNavTab) => void;
  isMobilePreview?: boolean;
}

export const FixedBottomNavBar: React.FC<FixedBottomNavBarProps> = ({
  activeTab,
  onTabChange,
  isMobilePreview = false,
}) => {
  const navItems: { id: BottomNavTab; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'practice', label: 'Practice', icon: Heart },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav
      className={`${
        isMobilePreview
          ? 'sticky bottom-0 left-0 right-0'
          : 'fixed bottom-0 left-0 right-0 xl:hidden'
      } z-40 bg-white rounded-t-3xl border-t border-slate-200/80 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] px-4 py-2 select-none`}
      role="navigation"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="flex-1 py-1.5 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer group"
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <div
                className={`transition-transform duration-200 ${
                  isActive ? 'scale-110 -translate-y-0.5' : 'group-hover:scale-105'
                }`}
              >
                <Icon
                  className="w-5 h-5 transition-colors duration-200"
                  style={{
                    color: isActive ? '#6C5CE7' : '#8E8E93',
                    strokeWidth: isActive ? 2.4 : 2,
                  }}
                />
              </div>

              <span
                className={`text-[11px] tracking-tight transition-colors duration-200 ${
                  isActive ? 'font-bold' : 'font-medium'
                }`}
                style={{
                  color: isActive ? '#6C5CE7' : '#8E8E93',
                }}
              >
                {item.label}
              </span>

              {/* Subtle active indicator dot */}
              <div
                className={`w-1 h-1 rounded-full transition-all duration-200 ${
                  isActive ? 'bg-[#6C5CE7] opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};
