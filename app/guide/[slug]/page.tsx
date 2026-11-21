'use client';

export const runtime = 'edge';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import { getGuide, GUIDES } from '@/lib/guide-data';
import { useLang } from '@/lib/useLang';
import AdUnit from '@/components/AdUnit';

const bgStyle = {
  background: '#101620',
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
      <div className="max-w-3xl mx-auto px-6 py-16 text-[#f2f0ea]/80">
        <Link href="/" className="text-[#e6ecf5] hover:text-[#e6ecf5] text-sm mb-8 inline-block">{back}</Link>

        <header className="mb-12 text-center">
          <div className="text-5xl mb-4">{guide.icon}</div>
          <h1 className="text-3xl font-bold text-[#f2f0ea] mb-3">{c.title}</h1>
          <p className="text-[#bdc5d1] text-base max-w-xl mx-auto leading-relaxed">{c.subtitle}</p>
        </header>

        <div className="space-y-12">
          {c.sections.map((section, si) => (
            <section key={si} aria-labelledby={`s${si}`}>
              <h2 id={`s${si}`} className="text-xl font-bold text-[#f2f0ea] mb-4">{section.h2}</h2>
              {section.body && (
                <p className="text-[#bdc5d1] text-sm leading-relaxed mb-5">{section.body}</p>
              )}
              {section.items && section.items.length > 0 && (
                <div className={`grid gap-3 ${section.items.length > 4 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {section.items.map(({ title, desc }, ii) => (
                    <div
                      key={ii}
                      className="rounded-[0.3rem] p-5"
                      style={{ background: '#101620', border: '1px solid rgba(0,0,0,0.1)' }}
                    >
                      <h3 className="text-[#f2f0ea] font-semibold text-sm mb-1">{title}</h3>
                      <p className="text-[#bdc5d1] text-xs leading-relaxed">{desc}</p>
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
            className="inline-block text-[#101620] font-semibold px-7 py-3 text-sm transition-colors"
            style={{ background: 'linear-gradient(120deg, #e6ecf5, #f4f8fd)', border: '1px solid rgba(206,220,238,0.3)', borderRadius: '0.2rem' }}
          >
            {guide.icon} {c.cta}
          </Link>
        </div>

        <div className="mt-10">
          <AdUnit slot="4511932122" format="auto" />
        </div>

        {/* 다른 가이드 링크 */}
        <section className="mt-12" aria-label="Related guides">
          <h2 className="text-[#9aa3b2] text-xs uppercase tracking-widest font-medium mb-4">
            {lang === 'ko' ? '다른 가이드' : lang === 'en' ? 'More Guides' : lang === 'ja' ? '他のガイド' : '更多指南'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {GUIDES.filter((g) => g.slug !== slug).map((g) => (
              <Link
                key={g.slug}
                href={`/guide/${g.slug}`}
                className="rounded-xl p-3 text-center text-xs transition-colors hover:bg-[#101620]/[0.04]"
                style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}
              >
                <div className="text-2xl mb-1">{g.icon}</div>
                <div className="text-[#bdc5d1] leading-snug">{g[lang].title}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
