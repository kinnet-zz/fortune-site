import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '면책조항 | StarFate',
  description: 'StarFate 운세 서비스의 면책조항. 본 서비스의 모든 운세 및 점성술 콘텐츠는 오락 목적의 AI 생성 콘텐츠로, 실제 미래 예측이 아닙니다.',
  alternates: { canonical: 'https://www.starfate.day/disclaimer' },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function DisclaimerPage() {
  return (
    <div style={bgStyle}>
      <div className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">면책조항 (Disclaimer)</h1>
        <p className="text-white/40 text-sm mb-10">최종 수정일: 2026년 4월 20일</p>

        <div className="space-y-10 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. 오락 목적 콘텐츠</h2>
            <div className="rounded-2xl p-5" style={{ background: 'rgba(255,193,7,0.08)', border: '1px solid rgba(255,193,7,0.2)' }}>
              <p className="text-yellow-200/80 font-medium mb-2">⚠️ 중요 안내</p>
              <p>
                StarFate(이하 "서비스")에서 제공하는 모든 운세, 별자리 해석, 수비학 분석, 타로 카드 해석, 궁합 분석, 12지 운세 등의 콘텐츠는
                <strong className="text-white"> 오락 및 자기 성찰 목적으로만 제공되는 AI 생성 콘텐츠</strong>입니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. 미래 예측 불가</h2>
            <p className="mb-3">
              본 서비스의 어떠한 콘텐츠도 실제 미래의 사건, 재정 결과, 건강 상태, 인간관계, 직업적 결과 또는 기타 개인적 상황을 정확하게 예측하거나 보장하지 않습니다.
            </p>
            <p>
              점성술, 수비학, 타로 등의 운세 체계는 수천 년의 문화적, 철학적 전통에 기반하고 있으나, 현대 과학적 방법론으로 검증된 예측 시스템이 아닙니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. 전문적 조언 대체 불가</h2>
            <p className="mb-3">본 서비스의 콘텐츠는 다음과 같은 전문적 조언을 대체할 수 없습니다:</p>
            <ul className="space-y-2 pl-4 list-disc">
              <li><strong className="text-white">의료:</strong> 건강 관련 결정을 위해서는 반드시 자격을 갖춘 의사나 의료 전문가와 상담하세요.</li>
              <li><strong className="text-white">법률:</strong> 법적 사항에 관해서는 자격을 갖춘 법률 전문가와 상담하세요.</li>
              <li><strong className="text-white">금융:</strong> 투자 또는 재정 결정을 위해서는 자격을 갖춘 재정 전문가와 상담하세요.</li>
              <li><strong className="text-white">심리/정신건강:</strong> 정신건강 관련 사항은 자격을 갖춘 심리 상담사나 정신건강 전문의와 상담하세요.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. AI 생성 콘텐츠</h2>
            <p className="mb-3">
              본 서비스의 일일 운세 및 일부 콘텐츠는 인공지능(AI) 기술을 사용하여 자동으로 생성됩니다. AI가 생성한 내용은 개인의 실제 상황을 반영하지 않으며, 동일한 별자리 또는 띠를 가진 모든 사람에게 동일한 내용이 제공될 수 있습니다.
            </p>
            <p>
              AI 생성 콘텐츠의 정확성, 완전성, 적시성에 대해 서비스는 어떠한 보증도 하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. 책임 제한</h2>
            <p className="mb-3">
              서비스 및 그 운영자는 본 서비스의 콘텐츠를 기반으로 한 어떠한 결정이나 행동으로 인해 발생하는 직접적, 간접적, 우발적, 결과적 손해에 대해 책임을 지지 않습니다.
            </p>
            <p>
              이용자는 본 서비스의 콘텐츠를 자신의 판단과 책임 하에 이용하며, 중요한 인생 결정을 운세에만 의존하지 않을 것을 권고합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. 블로그 및 정보 콘텐츠</h2>
            <p className="mb-3">
              본 사이트의 블로그 및 정보성 콘텐츠는 점성술, 동양철학, 수비학 등의 전통적 지식 체계에 관한 교육적·문화적 정보를 제공하기 위해 작성되었습니다. 해당 콘텐츠는 역사적·문화적 사실을 기반으로 하되, 점성술 자체의 과학적 유효성을 주장하지 않습니다.
            </p>
            <p>
              인용된 연구, 통계, 역사적 사실에 대해 최선의 정확성을 기하고 있으나, 오류가 있을 수 있습니다. 발견된 오류에 대해서는 <Link href="/contact" className="text-purple-400 hover:text-purple-300 underline">문의하기</Link>를 통해 알려주세요.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. 외부 링크</h2>
            <p>
              본 서비스는 외부 웹사이트에 대한 링크를 포함할 수 있습니다. 이러한 외부 사이트의 내용, 정확성, 견해에 대해서는 책임을 지지 않으며, 외부 링크가 포함된다고 해서 해당 사이트를 보증하는 것이 아닙니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. 연령 제한</h2>
            <p>
              본 서비스는 13세 이상의 이용자를 대상으로 합니다. 13세 미만의 어린이는 보호자의 감독 하에 서비스를 이용해야 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. 문의</h2>
            <p>
              본 면책조항에 관한 질문이 있으시면{' '}
              <Link href="/contact" className="text-purple-400 hover:text-purple-300 underline">문의하기</Link>{' '}
              페이지를 통해 연락해 주세요.
            </p>
          </section>

        </div>

        <div className="mt-12 flex flex-wrap gap-3 text-xs text-white/30">
          <Link href="/privacy" className="hover:text-white/60 transition-colors">개인정보처리방침</Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-white/60 transition-colors">이용약관</Link>
          <span>·</span>
          <Link href="/contact" className="hover:text-white/60 transition-colors">문의하기</Link>
        </div>
      </div>
    </div>
  );
}
