import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '사이트 소개 | 오늘의 운세',
  description: '오늘의 운세 서비스 소개. AI 기술로 별자리와 띠를 분석하여 매일 새로운 운세를 제공하는 무료 운세 서비스입니다.',
};

const FEATURES = [
  {
    icon: '🤖',
    title: 'AI 운세 생성',
    desc: 'Google Gemini AI가 별자리와 띠를 종합 분석하여 오늘 날짜 기준의 맞춤 운세를 생성합니다. 매일 새롭게 업데이트됩니다.',
  },
  {
    icon: '♈',
    title: '서양 별자리 분석',
    desc: '생년월일을 기반으로 12개의 황도대 별자리를 정확히 계산합니다. 양자리부터 물고기자리까지 각 별자리의 특성이 반영됩니다.',
  },
  {
    icon: '🐉',
    title: '동양 12띠 분석',
    desc: '태어난 해를 기준으로 12가지 동물 띠를 파악합니다. 쥐, 소, 호랑이 등 각 띠의 성격과 운세를 함께 고려합니다.',
  },
  {
    icon: '📊',
    title: '4가지 운세 분야',
    desc: '종합운, 연애운, 금전운, 직업운 네 가지 분야를 각각 분석합니다. 행운의 색과 행운의 숫자도 함께 알려드립니다.',
  },
  {
    icon: '🔒',
    title: '개인정보 보호',
    desc: '입력하신 생년월일은 운세 생성 즉시 파기되며 서버에 저장되지 않습니다. 개인정보를 안전하게 보호합니다.',
  },
  {
    icon: '📱',
    title: '모바일 최적화',
    desc: '스마트폰, 태블릿, PC 등 모든 기기에서 편리하게 이용할 수 있도록 반응형 디자인으로 설계되었습니다.',
  },
];

const FAQ = [
  {
    q: '운세는 얼마나 정확한가요?',
    a: '본 서비스의 운세는 AI가 생성한 오락적 콘텐츠입니다. 실제 미래를 과학적으로 예측하거나 보장하지 않습니다. 가볍게 재미로 즐겨주세요.',
  },
  {
    q: '같은 생년월일이면 운세가 항상 같나요?',
    a: '아닙니다. 운세는 오늘 날짜를 기준으로 매일 새롭게 생성됩니다. 같은 생년월일이라도 날짜가 다르면 다른 운세가 나옵니다.',
  },
  {
    q: '성별이 운세에 영향을 미치나요?',
    a: '네, 성별 정보는 운세 표현의 자연스러움을 위해 활용됩니다. 동일 조건에서 성별에 따라 운세 문장의 표현 방식이 달라질 수 있습니다.',
  },
  {
    q: '운세 결과를 공유할 수 있나요?',
    a: '네, 운세 결과 화면에서 "운세 공유" 버튼을 누르면 운세 내용이 텍스트로 클립보드에 복사됩니다. 카카오톡, 문자 등으로 쉽게 공유하세요.',
  },
  {
    q: '서비스 이용은 무료인가요?',
    a: '네, 오늘의 운세는 완전 무료 서비스입니다. 별도의 회원가입이나 결제 없이 누구나 이용할 수 있습니다.',
  },
];

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function AboutPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 홈으로
        </Link>

        {/* 타이틀 */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🔮</span>
            <h1 className="text-3xl font-bold text-white">오늘의 운세 소개</h1>
          </div>
          <p className="text-white/50 text-base leading-relaxed">
            AI 기술로 별자리와 띠를 분석하는 대한민국 무료 운세 서비스
          </p>
        </header>

        {/* 서비스 소개 */}
        <section className="mb-12" aria-labelledby="about-mission">
          <h2 id="about-mission" className="text-xl font-bold text-white mb-4">서비스 목적</h2>
          <div
            className="rounded-2xl p-6 space-y-4 text-sm leading-relaxed"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p>
              <strong className="text-white">오늘의 운세</strong>는 바쁜 일상 속에서 간편하게 오늘의 운세를 확인하고 싶은 분들을 위해 만들어진 무료 서비스입니다.
            </p>
            <p>
              생년월일 하나만 입력하면 서양의 12별자리(황도대 점성술)와 동양의 12띠를 동시에 분석하여,
              Google Gemini AI가 오늘 날짜에 맞는 운세를 생성해 드립니다.
            </p>
            <p>
              종합운, 연애운, 금전운, 직업운의 네 가지 분야와 함께 오늘의 행운의 색, 행운의 숫자까지
              알려드려 하루를 더 긍정적으로 시작할 수 있도록 도와드립니다.
            </p>
            <p className="text-white/40 text-xs">
              ※ 본 서비스의 운세는 오락 및 참고 목적으로 제공되는 AI 생성 콘텐츠입니다. 실제 미래를 예측하거나 과학적 근거가 있는 내용이 아님을 안내해 드립니다.
            </p>
          </div>
        </section>

        {/* 서비스 특징 */}
        <section className="mb-12" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-xl font-bold text-white mb-6">서비스 특징</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map(({ icon, title, desc }) => (
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

        {/* AI 운세 시스템 설명 */}
        <section className="mb-12" aria-labelledby="ai-system-heading">
          <h2 id="ai-system-heading" className="text-xl font-bold text-white mb-4">AI 운세 시스템 작동 방식</h2>
          <div
            className="rounded-2xl p-6 text-sm leading-relaxed space-y-4"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}
          >
            <div className="flex gap-3">
              <span className="text-purple-400 font-bold text-lg flex-shrink-0">01</span>
              <div>
                <h3 className="text-white font-semibold mb-1">입력 정보 분석</h3>
                <p className="text-white/50">생년월일과 성별을 입력받아 서양 별자리(황도 12궁)와 동양 12띠를 자동 계산합니다.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 font-bold text-lg flex-shrink-0">02</span>
              <div>
                <h3 className="text-white font-semibold mb-1">AI 운세 생성</h3>
                <p className="text-white/50">Google Gemini AI가 오늘 날짜, 별자리 특성, 띠의 성격을 종합하여 개인화된 운세 텍스트를 생성합니다.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 font-bold text-lg flex-shrink-0">03</span>
              <div>
                <h3 className="text-white font-semibold mb-1">결과 제공</h3>
                <p className="text-white/50">종합운, 연애운, 금전운, 직업운과 함께 운세 점수(100점 만점), 행운의 색, 행운의 숫자를 제공합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 자주 묻는 질문 */}
        <section className="mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-xl font-bold text-white mb-6">자주 묻는 질문 (FAQ)</h2>
          <div className="space-y-4">
            {FAQ.map(({ q, a }) => (
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

        {/* 운영자 정보 */}
        <section aria-labelledby="operator-heading">
          <h2 id="operator-heading" className="text-xl font-bold text-white mb-4">운영 정보</h2>
          <div
            className="rounded-2xl p-6 text-sm"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <dl className="space-y-3">
              <div className="flex gap-4">
                <dt className="text-white/40 w-24 flex-shrink-0">서비스명</dt>
                <dd className="text-white/70">오늘의 운세 (Fortune Teller)</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-white/40 w-24 flex-shrink-0">서비스 주소</dt>
                <dd className="text-white/70">https://fortune-site-6dg.pages.dev</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-white/40 w-24 flex-shrink-0">문의 이메일</dt>
                <dd>
                  <a href="mailto:dhcho0607@gmail.com" className="text-purple-400 hover:text-purple-300">
                    dhcho0607@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-white/40 w-24 flex-shrink-0">서비스 시작</dt>
                <dd className="text-white/70">2025년</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-white/40 w-24 flex-shrink-0">사용 기술</dt>
                <dd className="text-white/70">Next.js, Google Gemini AI, Cloudflare Pages</dd>
              </div>
            </dl>
          </div>
        </section>
      </article>
    </div>
  );
}
