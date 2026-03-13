'use client';

import { useSyncExternalStore, useEffect } from 'react';
import { type Lang } from './i18n';

const VALID_LANGS: Lang[] = ['ko', 'en', 'zh', 'ja'];

// Singleton store — works across all React roots / context boundaries
let listeners: Array<() => void> = [];
let _lang: Lang = 'ko';

function subscribe(listener: () => void) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot(): Lang {
  return _lang;
}

export function setLang(newLang: Lang) {
  if (!VALID_LANGS.includes(newLang)) return;
  _lang = newLang;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('lang', newLang);
    } catch {
      // QuotaExceededError 등 저장 실패 시 무시 (메모리 상태는 유지됨)
    }
  }
  listeners.forEach((l) => l());
}

export function useLang() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, () => 'ko' as Lang);

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored && VALID_LANGS.includes(stored) && stored !== _lang) {
      setLang(stored);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { lang, setLang };
}
