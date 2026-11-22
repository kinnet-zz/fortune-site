'use client';

import { useSyncExternalStore, useEffect } from 'react';
import { type Lang, DEFAULT_LANG, normalizeLang } from './i18n';

// Singleton store — works across all React roots / context boundaries
let listeners: Array<() => void> = [];
let _lang: Lang = DEFAULT_LANG;

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
  const next = normalizeLang(newLang);
  _lang = next;
  if (typeof window !== 'undefined') {
    document.documentElement.lang = next;
    try {
      localStorage.setItem('lang', next);
    } catch {
      // QuotaExceededError 등 저장 실패 시 무시 (메모리 상태는 유지됨)
    }
  }
  listeners.forEach((l) => l());
}

export function useLang() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, () => DEFAULT_LANG as Lang);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('lang');
    let stored: string | null = null;
    try {
      stored = localStorage.getItem('lang');
    } catch {
      // Storage may be blocked; the query string or the default still applies.
    }

    // A saved `zh` (or any retired value) resolves to a supported language
    // before it reaches the renderer, so no view ever asks for a missing key.
    const initial = normalizeLang(requested ?? stored ?? DEFAULT_LANG);
    setLang(initial);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { lang, setLang };
}
