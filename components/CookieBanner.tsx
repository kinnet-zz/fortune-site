'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import {
  CONSENT_CHANGED_EVENT,
  getCookieConsent,
  setCookieConsent,
  subscribeToConsentChanges,
} from '@/lib/adConsent';

export default function CookieBanner() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);

  const copy = {
    ko: { region: '쿠키 선택', text: '저희 사이트는 맞춤 광고 제공을 위해 쿠키를 사용합니다.', policy: '개인정보처리방침', decline: '거부', accept: '동의' },
    en: { region: 'Cookie choices', text: 'We use cookies to serve personalised ads.', policy: 'Privacy policy', decline: 'Decline', accept: 'Accept' },
    zh: { region: 'Cookie 设置', text: '本站使用 Cookie 以提供个性化广告。', policy: '隐私政策', decline: '拒绝', accept: '同意' },
    ja: { region: 'Cookie の選択', text: '当サイトはパーソナライズ広告のために Cookie を使用します。', policy: 'プライバシーポリシー', decline: '拒否', accept: '同意' },
  } as const;
  const c = copy[lang];

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
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-5 sm:pb-5" role="region" aria-label={c.region}>
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-3 rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#101620] px-4 py-3.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] sm:flex-row sm:items-center sm:gap-4 sm:px-5">
        <span className="hidden h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-[#121722] text-[#9aa3b2] sm:grid" aria-hidden="true">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8.4" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="9.4" cy="10.2" r="1" fill="currentColor" />
            <circle cx="13.6" cy="8.8" r="0.9" fill="currentColor" />
            <circle cx="14.4" cy="13.4" r="1.1" fill="currentColor" />
            <circle cx="10.2" cy="14.2" r="0.8" fill="currentColor" />
          </svg>
        </span>
        <p className="flex-1 text-[0.8rem] leading-6 text-[#bdc5d1] text-keep-all">
          {c.text}{' '}
          <Link href="/privacy" className="font-medium text-[#e6ecf5] underline decoration-[#3a4a61] underline-offset-2 hover:text-[#dbe6f4]">
            {c.policy}
          </Link>
        </p>
        <div className="grid w-full flex-shrink-0 grid-cols-2 gap-2 sm:flex sm:w-auto">
          <button
            onClick={decline}
            className="min-h-10 rounded-full border border-[rgba(184,199,220,0.14)] px-4 py-2 text-[0.8rem] font-medium text-[#bdc5d1] transition-colors hover:border-[rgba(184,199,220,0.28)] hover:text-[#f2f0ea]"
          >
            {c.decline}
          </button>
          <button
            onClick={accept}
            className="min-h-10 rounded-full bg-[#e6ecf5] px-4 py-2 text-[0.8rem] font-semibold text-[#0a0e14] transition-colors hover:bg-[#f4f8fd]"
          >
            {c.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
