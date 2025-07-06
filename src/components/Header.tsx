'use client'

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from '@/context/LanguageContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 dark:text-white p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-6">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="w-full text-left px-6 py-3 text-lg font-medium text-gray-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  {t('header.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("biography")}
                  className="w-full text-left px-6 py-3 text-lg font-medium text-gray-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  {t('header.biography')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("music-player")}
                  className="w-full text-left px-6 py-3 text-lg font-medium text-gray-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  {t('header.music')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full text-left px-6 py-3 text-lg font-medium text-gray-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  {t('header.contact')}
                </button>
              </li>
            </ul>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};
