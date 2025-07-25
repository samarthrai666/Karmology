import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { vedicTranslations } from '../utils/translations';

interface TranslationContextType {
  isVedic: boolean;
  toggleLanguage: () => void;
  translate: (term: string) => string;
  t: (term: string) => string; // Shorthand
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVedic, setIsVedic] = useState(() => {
    const saved = localStorage.getItem('languagePreference');
    return saved ? saved === 'vedic' : true;
  });

  useEffect(() => {
    localStorage.setItem('languagePreference', isVedic ? 'vedic' : 'english');
  }, [isVedic]);

  const toggleLanguage = useCallback(() => {
    setIsVedic(prev => !prev);
  }, []);

  const translate = useCallback((term: string): string => {
    if (!term) return '';
    
    const normalizedTerm = term.toLowerCase().replace(/\s+/g, '_');
    
    if (isVedic) {
      return term;
    } else {
      return vedicTranslations[normalizedTerm] || term;
    }
  }, [isVedic]);

  const value = {
    isVedic,
    toggleLanguage,
    translate,
    t: translate,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};