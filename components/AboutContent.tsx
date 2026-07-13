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

        {/* 콘텐츠 팀 소개 */}
        <section className="mb-12" aria-labelledby="team-heading">
          <h2 id="team-heading" className="text-xl font-bold text-white mb-4">편집팀 소개</h2>
          <div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🔮</div>
              <div className="text-sm leading-relaxed space-y-3">
                <div>
                  <h3 className="text-white font-bold text-base mb-1">StarFate 편집팀</h3>
                  <p
                    className="inline-block px-2 py-0.5 rounded-full text-xs mb-2"
                    style={{ background: 'rgba(124,58,237,0.3)', color: '#c4b5fd' }}
                  >
                    점성술 &amp; 동양철학 전문
                  </p>
                </div>
                <p className="text-white/60">
                  StarFate 편집팀은 서양 점성술(황도대 12별자리)과 동양 12지를 전문으로 연구하는 콘텐츠 팀입니다. 고대 바빌로니아부터 현대 심리 점성술까지 5,000년에 걸친 점성술의 역사와 이론을 탐구하며, 수비학·타로·사주 등 다양한 동서양 운세 전통을 현대적 관점에서 분석합니다.
                </p>
                <p className="text-white/60">
                  모든 블로그 콘텐츠는 역사·문화적 자료, 심리학 연구, 천문학 팩트를 기반으로 작성됩니다. 운세는 오락 및 자기성찰 목적으로 제공되며, 과학적 사실과 문화적 관습을 명확히 구분하여 설명합니다. 2025년부터 운세·별자리·수비학·타로에 관한 심층 가이드를 지속적으로 발행하고 있습니다.
                </p>
                <div className="flex gap-4 pt-1">
                  <a href="mailto:dhcho0607@gmail.com" className="text-purple-400 hover:text-purple-300 text-xs transition-colors">
                    ✉ 문의하기
                  </a>
                  <Link href="/contact" className="text-purple-400 hover:text-purple-300 text-xs transition-colors">
                    📝 문의 페이지
                  </Link>
                </div>
              </div>
            </div>
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
                <dd className="text-white/70">https://starfate.day</dd>
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
                <dd className="text-white/70">Next.js, Cloudflare Pages</dd>
              </div>
            </dl>
          </div>
        </section>
      </article>
    </div>
  );
}
