'use client';

export const runtime = 'edge';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import { getGuide, GUIDES } from '@/lib/guide-data';
import { useLang } from '@/lib/useLang';
import AdUnit from '@/components/AdUnit';

const bgStyle = {
  background: '#ffffff',
  minHeight: '100vh',
};

const BACK: Record<string, string> = {
  ko: '← 홈으로',
  en: '← Back to Home',
  ja: '← ホームへ',
  zh: '← 返回首页',
};

export default function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const guide = getGuide(slug);
  if (!guide) notFound();

  const { lang } = useLang();
  const c = guide[lang];
  const back = BACK[lang] ?? BACK.ko;

  return (
    <div style={bgStyle}>
      <div className="max-w-3xl mx-auto px-6 py-16 text-[#0f172a]/80">
        <Link href="/" className="text-[#3b5bdb] hover:text-[#3b5bdb] text-sm mb-8 inline-block">{back}</Link>

        <header className="mb-12 text-center">
          <div className="text-5xl mb-4">{guide.icon}</div>
          <h1 className="text-3xl font-bold text-[#0f172a] mb-3">{c.title}</h1>
          <p className="text-[#475569] text-base max-w-xl mx-auto leading-relaxed">{c.subtitle}</p>
        </header>

        <div className="space-y-12">
          {c.sections.map((section, si) => (
            <section key={si} aria-labelledby={`s${si}`}>
              <h2 id={`s${si}`} className="text-xl font-bold text-[#0f172a] mb-4">{section.h2}</h2>
              {section.body && (
                <p className="text-[#475569] text-sm leading-relaxed mb-5">{section.body}</p>
              )}
              {section.items && section.items.length > 0 && (
                <div className={`grid gap-3 ${section.items.length > 4 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {section.items.map(({ title, desc }, ii) => (
                    <div
                      key={ii}
                      className="rounded-[0.3rem] p-5"
                      style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.1)' }}
                    >
                      <h3 className="text-[#0f172a] font-semibold text-sm mb-1">{title}</h3>
                      <p className="text-[#475569] text-xs leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              )}
              {si === 1 && (
                <div className="mt-6">
                  <AdUnit slot="4511932122" format="horizontal" />
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={guide.ctaHref}
            className="inline-block text-[#ffffff] font-semibold px-7 py-3 text-sm transition-colors"
            style={{ background: 'linear-gradient(120deg, #3b5bdb, #2f4bc7)', border: '1px solid rgba(59,91,219,0.3)', borderRadius: '0.2rem' }}
          >
            {guide.icon} {c.cta}
          </Link>
        </div>

        <div className="mt-10">
          <AdUnit slot="4511932122" format="auto" />
        </div>

        {/* 다른 가이드 링크 */}
        <section className="mt-12" aria-label="Related guides">
          <h2 className="text-[#64748b] text-xs uppercase tracking-widest font-medium mb-4">
            {lang === 'ko' ? '다른 가이드' : lang === 'en' ? 'More Guides' : lang === 'ja' ? '他のガイド' : '更多指南'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {GUIDES.filter((g) => g.slug !== slug).map((g) => (
              <Link
                key={g.slug}
                href={`/guide/${g.slug}`}
                className="rounded-xl p-3 text-center text-xs transition-colors hover:bg-[#0f172a]/[0.035]"
                style={{ background: 'rgba(15,23,42,0.03)', border: '1px solid rgba(15,23,42,0.05)' }}
              >
                <div className="text-2xl mb-1">{g.icon}</div>
                <div className="text-[#475569] leading-snug">{g[lang].title}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
