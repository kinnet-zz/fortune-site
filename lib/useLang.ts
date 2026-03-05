'use client';

import { useState, useEffect } from 'react';
import { type Lang } from './i18n';

const VALID_LANGS: Lang[] = ['ko', 'en', 'zh', 'ja'];

export function useLang() {
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

  return { lang, setLang };
}
