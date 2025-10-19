// Sistema de internacionalización
export const languages = {
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇦🇷',
    shortName: 'AR'
  },
  en: {
    code: 'en', 
    name: 'English',
    flag: '🇺🇸',
    shortName: 'US'
  },
  it: {
    code: 'it',
    name: 'Italiano', 
    flag: '🇮🇹',
    shortName: 'IT'
  }
};

// Obtener idioma del localStorage o default español
export const getCurrentLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'es';
  }
  return 'es';
};

// Guardar idioma en localStorage
export const setLanguage = (lang) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
};

// Hook personalizado para usar traducciones
import { useState, useEffect, createContext, useContext } from 'react';

// Importar todas las traducciones
import esTranslations from '../translations/es.json';
import enTranslations from '../translations/en.json';
import itTranslations from '../translations/it.json';

const translations = {
  es: esTranslations,
  en: enTranslations,
  it: itTranslations
};

// Crear contexto para el idioma
const LanguageContext = createContext();

// Provider para el contexto de idioma
export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('es');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const savedLang = getCurrentLanguage();
    setCurrentLang(savedLang);
    setIsLoaded(true);
  }, []);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    setLanguage(lang);
  };

  const t = (key) => {
    if (!isLoaded) return key;
    
    const currentTranslations = translations[currentLang];
    if (!currentTranslations) return key;
    
    // Navegar por las claves anidadas
    const keys = key.split('.');
    let value = currentTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ t, currentLang, changeLanguage, languages, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
