
import React from 'react';
import { NAV_ITEMS } from '../constants';

interface Props {
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const Sidebar: React.FC<Props> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-full fixed left-0 top-16 hidden lg:block overflow-y-auto">
      <nav className="p-4 space-y-1">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeTab === item.id
                ? 'bg-emerald-50 text-emerald-700'
                : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-600'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 mt-8">
        <div className="bg-emerald-900 rounded-xl p-4 text-white">
          <p className="text-xs font-semibold opacity-80 uppercase tracking-wider mb-2">Farmer Status</p>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold">Verified Organic</span>
          </div>
          <p className="text-[10px] opacity-70">Certification valid until Oct 2025</p>
        </div>
      </div>
    </aside>
  );
};
