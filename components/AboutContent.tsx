'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';
import { siteCopy } from '@/lib/site-copy';

const bgStyle = {
  background: 'linear-gradient(160deg, #0a0d14 0%, #07090e 100%)',
  minHeight: '100vh',
};

export default function AboutContent() {
  const { lang } = useLang();
  const tr = t(lang);
  const copy = siteCopy(lang);

  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-[#f2f0ea]/80">
        <Link href="/" className="text-[#e6ecf5] hover:text-[#e6ecf5] text-sm mb-8 inline-block">
          {tr.backHome}
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🔮</span>
            <h1 className="font-display text-3xl font-normal tracking-[-0.02em] text-[#f6f9fd]">{tr.aboutTitle}</h1>
          </div>
          <p className="text-[#bdc5d1] text-base leading-relaxed">{tr.aboutSubtitle}</p>
        </header>

        {/* 서비스 소개 */}
        <section className="mb-12" aria-labelledby="about-mission">
          <h2 id="about-mission" className="mb-4 font-display text-[1.35rem] font-normal tracking-[-0.02em] text-[#f6f9fd]">{tr.missionTitle}</h2>
          <div
            className="rounded-2xl p-6 space-y-4 text-sm leading-relaxed"
            style={{ background: 'rgba(230,236,245,0.035)', border: '1px solid rgba(184,199,220,0.14)' }}
          >
            <p dangerouslySetInnerHTML={{ __html: tr.missionText1 }} />
            <p>{tr.missionText2}</p>
            <p>{tr.missionText3}</p>
            <p className="text-[#9aa3b2] text-xs">{tr.missionNote}</p>
          </div>
        </section>

        {/* 서비스 특징 */}
        <section className="mb-12" aria-labelledby="features-heading">
          <h2 id="features-heading" className="mb-6 font-display text-[1.35rem] font-normal tracking-[-0.02em] text-[#f6f9fd]">{tr.featuresTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tr.featureItems.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl p-5"
                style={{ background: 'rgba(230,236,245,0.035)', border: '1px solid rgba(184,199,220,0.12)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="text-[#f2f0ea] font-semibold text-sm">{title}</h3>
                </div>
                <p className="text-[#9aa3b2] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI 운세 시스템 */}
        <section className="mb-12" aria-labelledby="ai-system-heading">
          <h2 id="ai-system-heading" className="mb-4 font-display text-[1.35rem] font-normal tracking-[-0.02em] text-[#f6f9fd]">{tr.aiSystemTitle}</h2>
          <div
            className="rounded-2xl p-6 text-sm leading-relaxed space-y-4"
            style={{ background: 'rgba(206,220,238,0.08)', border: '1px solid rgba(206,220,238,0.12)' }}
          >
            {tr.aiSystemSteps.map(({ title, desc }, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-[#e6ecf5] font-bold text-lg flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-[#f2f0ea] font-semibold mb-1">{title}</h3>
                  <p className="text-[#bdc5d1]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-xl font-bold text-[#f2f0ea] mb-6">{tr.faqTitle}</h2>
          <div className="space-y-4">
            {copy.info.faq.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-5"
                style={{ background: 'rgba(230,236,245,0.035)', border: '1px solid rgba(184,199,220,0.12)' }}
              >
                <h3 className="text-[#f2f0ea] font-semibold text-sm mb-2 flex items-start gap-2">
                  <span className="text-[#e6ecf5] flex-shrink-0">Q.</span>
                  {q}
                </h3>
                <p className="text-[#bdc5d1] text-sm leading-relaxed pl-5">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 콘텐츠 운영 및 편집 기준 */}
        <section className="mb-12" aria-labelledby="team-heading">
          <h2 id="team-heading" className="text-xl font-bold text-[#f2f0ea] mb-4">{copy.about.editorialTitle}</h2>
          <div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(206,220,238,0.08)', border: '1px solid rgba(206,220,238,0.12)' }}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🔮</div>
              <div className="text-sm leading-relaxed space-y-3">
                <div>
                  <h3 className="text-[#f2f0ea] font-bold text-base mb-1">{copy.about.operatorName}</h3>
                  <p
                    className="inline-block px-2 py-0.5 rounded-full text-xs mb-2"
                    style={{ background: 'rgba(206,220,238,0.14)', color: '#e6ecf5' }}
                  >
                    {copy.about.operatorRole}
                  </p>
                </div>
                <p className="text-[#bdc5d1]">{copy.about.body1}</p>
                <p className="text-[#bdc5d1]">{copy.about.body2}</p>
                <div className="flex gap-4 pt-1">
                  <a href="mailto:dhcho0607@gmail.com" className="text-[#e6ecf5] hover:text-[#e6ecf5] text-xs transition-colors">
                    {copy.about.emailCta}
                  </a>
                  <Link href="/contact" className="text-[#e6ecf5] hover:text-[#e6ecf5] text-xs transition-colors">
                    {copy.about.contactCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 운영 정보 */}
        <section aria-labelledby="operator-heading">
          <h2 id="operator-heading" className="text-xl font-bold text-[#f2f0ea] mb-4">{tr.operationTitle}</h2>
          <div
            className="rounded-2xl p-6 text-sm"
            style={{ background: 'rgba(230,236,245,0.035)', border: '1px solid rgba(184,199,220,0.12)' }}
          >
            <dl className="space-y-3">
              <div className="flex gap-4">
                <dt className="text-[#9aa3b2] w-24 flex-shrink-0">{tr.opLabels.serviceName}</dt>
                <dd className="text-[#f2f0ea]/72">오늘의 운세 (Fortune Teller)</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-[#9aa3b2] w-24 flex-shrink-0">{tr.opLabels.serviceUrl}</dt>
                <dd className="text-[#f2f0ea]/72">https://starfate.day</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-[#9aa3b2] w-24 flex-shrink-0">{tr.opLabels.email}</dt>
                <dd>
                  <a href="mailto:dhcho0607@gmail.com" className="text-[#e6ecf5] hover:text-[#e6ecf5]">
                    dhcho0607@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-[#9aa3b2] w-24 flex-shrink-0">{tr.opLabels.started}</dt>
                <dd className="text-[#f2f0ea]/72">2025</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-[#9aa3b2] w-24 flex-shrink-0">{tr.opLabels.tech}</dt>
                <dd className="text-[#f2f0ea]/72">Next.js, Cloudflare Pages</dd>
              </div>
            </dl>
          </div>
        </section>
      </article>
    </div>
  );
}
