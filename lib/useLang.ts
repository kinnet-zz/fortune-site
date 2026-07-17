'use client';

import { useSyncExternalStore, useEffect } from 'react';
import { type Lang, VALID_LANGS } from './i18n';

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
    document.documentElement.lang = newLang;
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
    const requested = new URLSearchParams(window.location.search).get('lang') as Lang | null;
    const stored = localStorage.getItem('lang') as Lang | null;
    const initial = requested && VALID_LANGS.includes(requested) ? requested : stored;

    if (initial && VALID_LANGS.includes(initial)) {
      setLang(initial);
    } else {
      document.documentElement.lang = 'ko';
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { lang, setLang };
}
