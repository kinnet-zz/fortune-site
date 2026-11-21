'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';
import { clearCookieConsent, CONSENT_CHANGED_EVENT } from '@/lib/adConsent';

export default function Footer() {
  const { lang } = useLang();
  const tr = t(lang);

  const SITE_LINKS = [
    { href: '/', label: tr.navFortune },
    { href: '/zodiac', label: tr.navZodiac },
    { href: '/chinese-zodiac', label: tr.navChineseZodiac },
    { href: '/about', label: tr.navAbout },
  ];

  const openCookieSettings = () => {
    clearCookieConsent();
    window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
  };

  const cookieSettingsLabel = lang === 'ko'
    ? '쿠키 설정'
    : lang === 'en'
      ? 'Cookie settings'
      : lang === 'zh'
        ? 'Cookie设置'
        : 'Cookie設定';

  return (
    <footer className="relative z-10 mt-16 border-t border-[rgba(184,199,220,0.14)] bg-[#121722]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-[1.5fr_0.75fr_0.75fr]">
          {/* 로고 & 소개 */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-[rgba(184,199,220,0.14)] bg-[#101620]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2.6c.7 4.9 3.5 7.7 8.4 8.4-4.9.7-7.7 3.5-8.4 8.4-.7-4.9-3.5-7.7-8.4-8.4 4.9-.7 7.7-3.5 8.4-8.4z" fill="#e6ecf5" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[0.98rem] font-bold tracking-[-0.02em] text-[#f2f0ea]">StarFate</span>
                <span className="mt-1 text-[0.56rem] font-medium tracking-[0.08em] text-[#9aa3b2]">별자리 · 운세</span>
              </span>
            </div>
            <p className="max-w-xs text-[0.78rem] leading-6 text-[#9aa3b2] text-keep-all">
              {tr.footerDesc}
            </p>
          </div>

          {/* 사이트 링크 */}
          <div>
            <h3 className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#9aa3b2]">{tr.footerService}</h3>
            <ul className="space-y-2.5">
              {SITE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.8rem] text-[#bdc5d1] transition-colors hover:text-[#e6ecf5]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 정책 링크 */}
          <div>
            <h3 className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#9aa3b2]">{tr.footerPolicy}</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/privacy', label: tr.footerPrivacy },
                { href: '/terms', label: tr.footerTerms },
                { href: '/contact', label: tr.footerContact },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.8rem] text-[#bdc5d1] transition-colors hover:text-[#e6ecf5]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="text-[0.8rem] text-[#bdc5d1] transition-colors hover:text-[#e6ecf5]"
                >
                  {cookieSettingsLabel}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6 h-px bg-[rgba(184,199,220,0.14)]" />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-[0.72rem] text-[#9aa3b2]">
            © {new Date().getFullYear()} StarFate. All rights reserved.
          </p>
          <p className="max-w-md text-[0.68rem] leading-5 text-[#9aa3b2] text-keep-all sm:text-right">
            {tr.footerDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
