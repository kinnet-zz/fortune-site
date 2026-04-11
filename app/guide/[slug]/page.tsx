'use client';

export const runtime = 'edge';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import { getGuide, GUIDES } from '@/lib/guide-data';
import { useLang } from '@/lib/useLang';
import AdUnit from '@/components/AdUnit';

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
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
      <div className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">{back}</Link>

        <header className="mb-12 text-center">
          <div className="text-5xl mb-4">{guide.icon}</div>
          <h1 className="text-3xl font-bold text-white mb-3">{c.title}</h1>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">{c.subtitle}</p>
        </header>

        <div className="space-y-12">
          {c.sections.map((section, si) => (
            <section key={si} aria-labelledby={`s${si}`}>
              <h2 id={`s${si}`} className="text-xl font-bold text-white mb-4">{section.h2}</h2>
              {section.body && (
                <p className="text-white/55 text-sm leading-relaxed mb-5">{section.body}</p>
              )}
              {section.items && section.items.length > 0 && (
                <div className={`grid gap-3 ${section.items.length > 4 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {section.items.map(({ title, desc }, ii) => (
                    <div
                      key={ii}
                      className="rounded-2xl p-4"
                      style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.18)' }}
                    >
                      <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                      <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
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
            href="/"
            className="inline-block text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            style={{ background: 'rgba(124,58,237,0.7)', border: '1px solid rgba(167,139,250,0.4)' }}
          >
            {guide.icon} {c.cta}
          </Link>
        </div>

        <div className="mt-10">
          <AdUnit slot="4511932122" format="auto" />
        </div>

        {/* 다른 가이드 링크 */}
        <section className="mt-12" aria-label="Related guides">
          <h2 className="text-white/40 text-xs uppercase tracking-widest font-medium mb-4">
            {lang === 'ko' ? '다른 가이드' : lang === 'en' ? 'More Guides' : lang === 'ja' ? '他のガイド' : '更多指南'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {GUIDES.filter((g) => g.slug !== slug).map((g) => (
              <Link
                key={g.slug}
                href={`/guide/${g.slug}`}
                className="rounded-xl p-3 text-center text-xs transition-colors hover:bg-white/5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="text-2xl mb-1">{g.icon}</div>
                <div className="text-white/60 leading-snug">{g[lang].title}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
