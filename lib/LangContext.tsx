'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Lang } from './i18n';

const VALID_LANGS: Lang[] = ['ko', 'en', 'zh', 'ja'];

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: 'ko',
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ko');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored && VALID_LANGS.includes(stored)) {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLangContext() {
  return useContext(LangContext);
}
