import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="p-2 hover:bg-white/10 rounded-lg transition flex items-center gap-2"
      aria-label="Change language"
    >
      <Globe className="w-5 h-5  text-gray-800 dark:text-white" />
      <span className="uppercase text-gray-800 dark:text-white">{i18n.language}</span>
    </button>
  );
};