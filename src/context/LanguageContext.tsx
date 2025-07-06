"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Header
    "header.home": "Inicio",
    "header.biography": "Acerca de mí",
    "header.music": "Música",
    "header.contact": "Contacto y Contratación",

    // Biography
    "biography.title": "Biografía",
    "biography.myStory.title": "Mi Historia",
    "biography.myStory.content":
      "Desde mis inicios en 2012, he acumulado más de 13 años de experiencia en la industria musical, actuando en reconocidos clubes de Argentina, España e Italia. Algunos de estos incluyen Basement Club, Moondance, Icon Club, La Sospechosa Madrid y El Sótano. Mi pasión por la música electrónica me ha llevado a ser reconocido como uno de los DJs más destacados de la Costa del Sol, ofreciendo sets únicos que combinan la mejor música house con sonidos latinos innovadores.",
    "biography.genres.title": "Géneros Musicales",
    "biography.genres.content":
      "Especializado en Tech House, Latin Tech, Afro House y Deep Tech. Mi sonido único combina la energía de la música electrónica con ritmos latinos, creando una experiencia musical inigualable.",
    "biography.experience.title": "Experiencia",
    "biography.experience.content":
      "Con más de 13 años de experiencia, he actuado en reconocidos clubes de Argentina, España e Italia, incluyendo Basement Club, Moondance, Icon Club, La Sospechosa Madrid y El Sótano.",

    // Contact
    "contact.title": "Contacto y Contratación",
    "contact.whatsapp": "WhatsApp",
    "contact.instagram": "Instagram",
    "contact.youtube": "YouTube",
    "contact.soundcloud": "SoundCloud",

    // Hero
    "hero.subtitle": "DJ y Productor de Música Electrónica",

    // Music Player
    "music.title": "Última Música",
    "music.loading": "Cargando música...",
    "music.error": "Error al cargar la música",
  },
  en: {
    // Header
    "header.home": "Home",
    "header.biography": "About Me",
    "header.music": "Music",
    "header.contact": "Contact & Booking",

    // Biography
    "biography.title": "Biography",
    "biography.myStory.title": "My Story",
    "biography.myStory.content":
      "Since my beginnings in 2012, I have accumulated more than 13 years of experience in the music industry, performing at renowned clubs in Argentina, Spain and Italy. Some of these include Basement Club, Moondance, Icon Club, La Sospechosa Madrid and El Sótano. My passion for electronic music has led me to be recognized as one of the most outstanding DJs on the Costa del Sol, offering unique sets that combine the best house music with innovative Latin sounds.",
    "biography.genres.title": "Musical Genres",
    "biography.genres.content":
      "Specialized in Tech House, Latin Tech, Afro House and Deep Tech. My unique sound combines the energy of electronic music with Latin rhythms, creating an unmatched musical experience.",
    "biography.experience.title": "Experience",
    "biography.experience.content":
      "With more than 13 years of experience, I have performed at renowned clubs in Argentina, Spain and Italy, including Basement Club, Moondance, Icon Club, La Sospechosa Madrid and El Sótano.",

    // Contact
    "contact.title": "Contact & Booking",
    "contact.whatsapp": "WhatsApp",
    "contact.instagram": "Instagram",
    "contact.youtube": "YouTube",
    "contact.soundcloud": "SoundCloud",

    // Hero
    "hero.subtitle": "DJ and Electronic Music Producer",

    // Music Player
    "music.title": "Latest Music",
    "music.loading": "Loading music...",
    "music.error": "Error loading music",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("language") as Language;
    if (stored && (stored === "es" || stored === "en")) {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
