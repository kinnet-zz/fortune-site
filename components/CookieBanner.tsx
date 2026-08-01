'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CONSENT_CHANGED_EVENT,
  getCookieConsent,
  setCookieConsent,
  subscribeToConsentChanges,
} from '@/lib/adConsent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const syncVisibility = () => setVisible(getCookieConsent() === null);
    syncVisibility();
    return subscribeToConsentChanges(syncVisibility);
  }, []);

  const accept = () => {
    setCookieConsent('accepted');
    window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
    setVisible(false);
  };

  const decline = () => {
    setCookieConsent('declined');
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.split('=')[0]?.trim();
      if (name === '_ga' || name === '_gid' || name?.startsWith('_ga_')) {
        document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
        document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.starfate.day; SameSite=Lax`;
      }
    }
    window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative z-40 w-full px-3 py-2 sm:px-4" role="region" aria-label="쿠키 선택">
      <div
        className="max-w-6xl mx-auto rounded-xl px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
        style={{
          background: 'rgba(124, 58, 237, 0.1)',
          border: '1px solid rgba(192, 132, 252, 0.2)',
        }}
      >
        <p className="text-white/80 text-sm leading-6 flex-1 text-keep-all">
          🍪 저희 사이트는 맞춤 광고 제공을 위해 쿠키를 사용합니다.{' '}
          <Link href="/privacy" className="text-purple-400 underline hover:text-purple-300">
            개인정보처리방침
          </Link>
        </p>
        <div className="grid grid-cols-2 sm:flex gap-2 w-full sm:w-auto flex-shrink-0">
          <button
            onClick={decline}
            className="min-h-11 px-4 py-2 rounded-xl text-sm text-white/75 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
          >
            거부
          </button>
          <button
            onClick={accept}
            className="min-h-11 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
          >
            동의
          </button>
        </div>
      </div>
    </div>
  );
}
