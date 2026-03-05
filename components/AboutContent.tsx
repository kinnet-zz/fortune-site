'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function AboutContent() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          {tr.backHome}
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🔮</span>
            <h1 className="text-3xl font-bold text-white">{tr.aboutTitle}</h1>
          </div>
          <p className="text-white/50 text-base leading-relaxed">{tr.aboutSubtitle}</p>
        </header>

        {/* 서비스 소개 */}
        <section className="mb-12" aria-labelledby="about-mission">
          <h2 id="about-mission" className="text-xl font-bold text-white mb-4">{tr.missionTitle}</h2>
          <div
            className="rounded-2xl p-6 space-y-4 text-sm leading-relaxed"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p>{tr.missionText1}</p>
            <p>{tr.missionText2}</p>
            <p>{tr.missionText3}</p>
            <p className="text-white/40 text-xs">{tr.missionNote}</p>
          </div>
        </section>

        {/* 서비스 특징 */}
        <section className="mb-12" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-xl font-bold text-white mb-6">{tr.featuresTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tr.featureItems.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="text-white font-semibold text-sm">{title}</h3>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI 운세 시스템 */}
        <section className="mb-12" aria-labelledby="ai-system-heading">
          <h2 id="ai-system-heading" className="text-xl font-bold text-white mb-4">{tr.aiSystemTitle}</h2>
          <div
            className="rounded-2xl p-6 text-sm leading-relaxed space-y-4"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}
          >
            {tr.aiSystemSteps.map(({ title, desc }, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-purple-400 font-bold text-lg flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-white/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-xl font-bold text-white mb-6">{tr.faqTitle}</h2>
          <div className="space-y-4">
            {tr.faqItems.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <h3 className="text-white font-semibold text-sm mb-2 flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">Q.</span>
                  {q}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed pl-5">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 운영 정보 */}
        <section aria-labelledby="operator-heading">
          <h2 id="operator-heading" className="text-xl font-bold text-white mb-4">{tr.operationTitle}</h2>
          <div
            className="rounded-2xl p-6 text-sm"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <dl className="space-y-3">
              <div className="flex gap-4">
                <dt className="text-white/40 w-24 flex-shrink-0">{tr.opLabels.serviceName}</dt>
                <dd className="text-white/70">오늘의 운세 (Fortune Teller)</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-white/40 w-24 flex-shrink-0">{tr.opLabels.serviceUrl}</dt>
                <dd className="text-white/70">https://fortune-site-6dg.pages.dev</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-white/40 w-24 flex-shrink-0">{tr.opLabels.email}</dt>
                <dd>
                  <a href="mailto:dhcho0607@gmail.com" className="text-purple-400 hover:text-purple-300">
                    dhcho0607@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-white/40 w-24 flex-shrink-0">{tr.opLabels.started}</dt>
                <dd className="text-white/70">2025</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-white/40 w-24 flex-shrink-0">{tr.opLabels.tech}</dt>
                <dd className="text-white/70">Next.js, Google Gemini AI, Cloudflare Pages</dd>
              </div>
            </dl>
          </div>
        </section>
      </article>
    </div>
  );
}
