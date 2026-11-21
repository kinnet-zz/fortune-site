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
    <footer
      className="relative z-10 mt-20 px-6 pb-10 pt-14"
      style={{
        background: 'linear-gradient(180deg, #131a37 0%, #0f1529 100%)',
        borderTop: '1px solid rgba(226,205,162,0.22)',
      }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-[1.3fr_0.7fr_0.7fr]">
          {/* 로고 & 소개 */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-[rgba(226,205,162,0.45)]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2.5l1.6 6.1 6.1 1.6-6.1 1.6-1.6 6.1-1.6-6.1L4.3 10.2l6.1-1.6L12 2.5z" fill="#f4dfa8" opacity="0.9" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[0.98rem] font-semibold tracking-[0.16em] text-[#f7f0e1]">STARFATE</span>
                <span className="mt-1 text-[0.5rem] tracking-[0.32em] text-[rgba(226,205,162,0.7)]">별자리 · 운세</span>
              </span>
            </div>
            <p className="max-w-xs text-[0.72rem] leading-6 text-[rgba(247,240,225,0.5)] text-keep-all">
              {tr.footerDesc}
            </p>
          </div>

          {/* 사이트 링크 */}
          <div>
            <h3 className="mb-4 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[rgba(226,205,162,0.62)]">{tr.footerService}</h3>
            <ul className="space-y-2.5">
              {SITE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.75rem] text-[rgba(247,240,225,0.55)] transition-colors hover:text-[#e2cda2]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 정책 링크 */}
          <div>
            <h3 className="mb-4 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[rgba(226,205,162,0.62)]">{tr.footerPolicy}</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/privacy', label: tr.footerPrivacy },
                { href: '/terms', label: tr.footerTerms },
                { href: '/contact', label: tr.footerContact },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.75rem] text-[rgba(247,240,225,0.55)] transition-colors hover:text-[#e2cda2]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="text-[0.75rem] text-[rgba(247,240,225,0.55)] transition-colors hover:text-[#e2cda2]"
                >
                  {cookieSettingsLabel}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6 h-px bg-[linear-gradient(90deg,transparent,rgba(226,205,162,0.25),transparent)]" />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-[0.68rem] text-[rgba(247,240,225,0.38)]">
            © {new Date().getFullYear()} {tr.navFortune}. All rights reserved.
          </p>
          <p className="max-w-sm text-[0.66rem] leading-5 text-[rgba(247,240,225,0.3)] sm:text-right">
            {tr.footerDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
