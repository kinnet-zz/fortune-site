'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';

const POLICY_LINKS = [
  { href: '/privacy', labelKey: 'privacy' as const },
  { href: '/terms', labelKey: 'terms' as const },
  { href: '/contact', labelKey: 'contact' as const },
];

const POLICY_LABELS: Record<string, Record<string, string>> = {
  privacy: { ko: '개인정보처리방침', en: 'Privacy Policy', zh: '隐私政策', ja: 'プライバシーポリシー' },
  terms: { ko: '이용약관', en: 'Terms of Use', zh: '使用条款', ja: '利用規約' },
  contact: { ko: '문의하기', en: 'Contact', zh: '联系我们', ja: 'お問い合わせ' },
};

export default function Footer() {
  const { lang } = useLang();
  const tr = t(lang);

  const SITE_LINKS = [
    { href: '/', label: tr.navFortune },
    { href: '/zodiac', label: tr.navZodiac },
    { href: '/chinese-zodiac', label: tr.navChineseZodiac },
    { href: '/about', label: tr.navAbout },
  ];
  return (
    <footer
      className="relative z-10 mt-16 py-10 px-6"
      style={{
        background: 'rgba(5, 5, 32, 0.7)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* 상단: 로고 + 링크 */}
        <div className="flex flex-col sm:flex-row gap-8 mb-8">
          {/* 로고 & 소개 */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🔮</span>
              <span className="text-white/80 font-bold text-base">{tr.navFortune}</span>
            </div>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs">
              {tr.footerDesc}
            </p>
          </div>

          {/* 사이트 링크 */}
          <div>
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">{tr.footerService}</h3>
            <ul className="space-y-2">
              {SITE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/35 hover:text-white/60 text-xs transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 정책 링크 */}
          <div>
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">{tr.footerPolicy}</h3>
            <ul className="space-y-2">
              {POLICY_LINKS.map(({ href, labelKey }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/35 hover:text-white/60 text-xs transition-colors"
                  >
                    {POLICY_LABELS[labelKey][lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <div
          className="border-t mb-6"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        />

        {/* 하단: 저작권 + 면책 */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} {tr.navFortune}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs max-w-sm text-right leading-relaxed">
            {tr.footerDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
