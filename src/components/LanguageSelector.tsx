'use client'

import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="p-2 hover:bg-white/10 rounded-lg transition flex items-center gap-2"
      aria-label="Change language"
    >
      <Globe className="w-5 h-5 text-gray-800 dark:text-white" />
      <span className="uppercase text-gray-800 dark:text-white">{language}</span>
    </button>
  );
};