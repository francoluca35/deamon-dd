// Sistema de internacionalización
export const languages = {
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸'
  },
  en: {
    code: 'en', 
    name: 'English',
    flag: '🇺🇸'
  },
  it: {
    code: 'it',
    name: 'Italiano', 
    flag: '🇮🇹'
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
import { useState, useEffect } from 'react';

// Importar todas las traducciones
import esTranslations from '../translations/es.json';
import enTranslations from '../translations/en.json';
import itTranslations from '../translations/it.json';

const translations = {
  es: esTranslations,
  en: enTranslations,
  it: itTranslations
};

export const useTranslation = () => {
  const [currentLang, setCurrentLang] = useState('es');
  
  useEffect(() => {
    setCurrentLang(getCurrentLanguage());
  }, []);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    setLanguage(lang);
    // Recargar la página para aplicar cambios
    window.location.reload();
  };

  const t = (key) => {
    const currentTranslations = translations[currentLang];
    return currentTranslations[key] || key;
  };

  return { t, currentLang, changeLanguage, languages };
};
