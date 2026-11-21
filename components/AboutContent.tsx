'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';

const bgStyle = {
  background: 'linear-gradient(160deg, #f7f2e8 0%, #f3ecdf 30%, #efe6d5 60%, #f7f2e8 100%)',
  minHeight: '100vh',
};

export default function AboutContent() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-[#1a1c2e]/80">
        <Link href="/" className="text-[#8a6a2f] hover:text-[#6f5223] text-sm mb-8 inline-block">
          {tr.backHome}
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🔮</span>
            <h1 className="text-3xl font-bold text-[#14172b]">{tr.aboutTitle}</h1>
          </div>
          <p className="text-[#1a1c2e]/55 text-base leading-relaxed">{tr.aboutSubtitle}</p>
        </header>

        {/* 서비스 소개 */}
        <section className="mb-12" aria-labelledby="about-mission">
          <h2 id="about-mission" className="text-xl font-bold text-[#14172b] mb-4">{tr.missionTitle}</h2>
          <div
            className="rounded-2xl p-6 space-y-4 text-sm leading-relaxed"
            style={{ background: 'rgba(20,23,43,0.03)', border: '1px solid rgba(20,23,43,0.06)' }}
          >
            <p>{tr.missionText1}</p>
            <p>{tr.missionText2}</p>
            <p>{tr.missionText3}</p>
            <p className="text-[#1a1c2e]/45 text-xs">{tr.missionNote}</p>
          </div>
        </section>

        {/* 서비스 특징 */}
        <section className="mb-12" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-xl font-bold text-[#14172b] mb-6">{tr.featuresTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tr.featureItems.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl p-5"
                style={{ background: 'rgba(20,23,43,0.03)', border: '1px solid rgba(20,23,43,0.05)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="text-[#14172b] font-semibold text-sm">{title}</h3>
                </div>
                <p className="text-[#1a1c2e]/48 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI 운세 시스템 */}
        <section className="mb-12" aria-labelledby="ai-system-heading">
          <h2 id="ai-system-heading" className="text-xl font-bold text-[#14172b] mb-4">{tr.aiSystemTitle}</h2>
          <div
            className="rounded-2xl p-6 text-sm leading-relaxed space-y-4"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(169,128,63,0.12)' }}
          >
            {tr.aiSystemSteps.map(({ title, desc }, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-[#8a6a2f] font-bold text-lg flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-[#14172b] font-semibold mb-1">{title}</h3>
                  <p className="text-[#1a1c2e]/55">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-xl font-bold text-[#14172b] mb-6">{tr.faqTitle}</h2>
          <div className="space-y-4">
            {tr.faqItems.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-5"
                style={{ background: 'rgba(20,23,43,0.03)', border: '1px solid rgba(20,23,43,0.05)' }}
              >
                <h3 className="text-[#14172b] font-semibold text-sm mb-2 flex items-start gap-2">
                  <span className="text-[#8a6a2f] flex-shrink-0">Q.</span>
                  {q}
                </h3>
                <p className="text-[#1a1c2e]/55 text-sm leading-relaxed pl-5">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 콘텐츠 운영 및 편집 기준 */}
        <section className="mb-12" aria-labelledby="team-heading">
          <h2 id="team-heading" className="text-xl font-bold text-[#14172b] mb-4">콘텐츠 운영 및 편집 기준</h2>
          <div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(169,128,63,0.12)' }}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🔮</div>
              <div className="text-sm leading-relaxed space-y-3">
                <div>
                  <h3 className="text-[#14172b] font-bold text-base mb-1">StarFate 운영자</h3>
                  <p
                    className="inline-block px-2 py-0.5 rounded-full text-xs mb-2"
                    style={{ background: 'rgba(169,128,63,0.14)', color: '#6f5223' }}
                  >
                    작성·검수 책임
                  </p>
                </div>
                <p className="text-[#1a1c2e]/64">
                  StarFate는 별자리와 동양 12지, 수비학과 타로를 문화적 배경과 자기성찰의 관점에서 소개하는 개인 운영 콘텐츠 서비스입니다. 운영자가 주제를 선정하고 글의 작성과 최종 검수를 담당합니다.
                </p>
                <p className="text-[#1a1c2e]/64">
                  사실을 다루는 글은 가능한 한 원 논문·공식기관·학술 자료를 확인하고, 출처를 확인할 수 없는 단정적 표현은 사용하지 않는 것을 원칙으로 합니다. 점성술 해석과 일일 운세는 과학적 예측이 아닌 오락 및 자기성찰용 참고 콘텐츠로 구분합니다. 오류나 수정 요청은 아래 이메일로 접수합니다.
                </p>
                <div className="flex gap-4 pt-1">
                  <a href="mailto:dhcho0607@gmail.com" className="text-[#8a6a2f] hover:text-[#6f5223] text-xs transition-colors">
                    ✉ 문의하기
                  </a>
                  <Link href="/contact" className="text-[#8a6a2f] hover:text-[#6f5223] text-xs transition-colors">
                    📝 문의 페이지
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 운영 정보 */}
        <section aria-labelledby="operator-heading">
          <h2 id="operator-heading" className="text-xl font-bold text-[#14172b] mb-4">{tr.operationTitle}</h2>
          <div
            className="rounded-2xl p-6 text-sm"
            style={{ background: 'rgba(20,23,43,0.03)', border: '1px solid rgba(20,23,43,0.05)' }}
          >
            <dl className="space-y-3">
              <div className="flex gap-4">
                <dt className="text-[#1a1c2e]/45 w-24 flex-shrink-0">{tr.opLabels.serviceName}</dt>
                <dd className="text-[#1a1c2e]/72">오늘의 운세 (Fortune Teller)</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-[#1a1c2e]/45 w-24 flex-shrink-0">{tr.opLabels.serviceUrl}</dt>
                <dd className="text-[#1a1c2e]/72">https://starfate.day</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-[#1a1c2e]/45 w-24 flex-shrink-0">{tr.opLabels.email}</dt>
                <dd>
                  <a href="mailto:dhcho0607@gmail.com" className="text-[#8a6a2f] hover:text-[#6f5223]">
                    dhcho0607@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-[#1a1c2e]/45 w-24 flex-shrink-0">{tr.opLabels.started}</dt>
                <dd className="text-[#1a1c2e]/72">2025</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-[#1a1c2e]/45 w-24 flex-shrink-0">{tr.opLabels.tech}</dt>
                <dd className="text-[#1a1c2e]/72">Next.js, Cloudflare Pages</dd>
              </div>
            </dl>
          </div>
        </section>
      </article>
    </div>
  );
}
