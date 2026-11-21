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
        className="max-w-6xl mx-auto flex flex-col items-start gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-4"
        style={{
          background: '#fffdf8',
          border: '1px solid rgba(169,128,63,0.35)',
          borderRadius: '0.3rem',
          boxShadow: '0 12px 30px -26px rgba(20,23,43,0.45)',
        }}
      >
        <p className="text-[#1a1c2e]/80 text-[0.8rem] leading-6 flex-1 text-keep-all">
          🍪 저희 사이트는 맞춤 광고 제공을 위해 쿠키를 사용합니다.{' '}
          <Link href="/privacy" className="text-[#8a6a2f] underline decoration-[rgba(169,128,63,0.5)] underline-offset-2 hover:text-[#6f5223]">
            개인정보처리방침
          </Link>
        </p>
        <div className="grid grid-cols-2 sm:flex gap-2 w-full sm:w-auto flex-shrink-0">
          <button
            onClick={decline}
            className="min-h-11 px-4 py-2 text-[0.8rem] text-[#1a1c2e]/75 hover:text-[#14172b] border border-[rgba(20,23,43,0.15)] hover:border-[rgba(20,23,43,0.3)] transition-colors" style={{ borderRadius: '0.2rem' }}
          >
            거부
          </button>
          <button
            onClick={accept}
            className="min-h-11 px-4 py-2 text-[0.8rem] font-semibold text-[#f7f0e1] transition-colors"
            style={{ background: 'linear-gradient(120deg, #1a2144, #111730)', borderRadius: '0.2rem', border: '1px solid rgba(226,205,162,0.3)' }}
          >
            동의
          </button>
        </div>
      </div>
    </div>
  );
}
