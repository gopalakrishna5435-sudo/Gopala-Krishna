
import React from 'react';
import { LANGUAGES } from '../constants';
import { Globe } from 'lucide-react';

interface Props {
  currentLang: string;
  onSelect: (lang: string) => void;
}

export const LanguageSwitcher: React.FC<Props> = ({ currentLang, onSelect }) => {
  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-emerald-600" />
      <select 
        value={currentLang}
        onChange={(e) => onSelect(e.target.value)}
        className="bg-white border border-emerald-200 rounded-md px-2 py-1 text-sm font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
      >
        {LANGUAGES.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};
