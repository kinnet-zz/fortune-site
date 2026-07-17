import type { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <div
        style={{
          background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 100%)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div
            className="rounded-2xl p-6 flex gap-5 items-start"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)' }}
          >
            <div className="text-4xl flex-shrink-0">🔮</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-bold text-sm">StarFate 운영자</span>
                <span
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{ background: 'rgba(124,58,237,0.3)', color: '#c4b5fd' }}
                >
                  콘텐츠 작성·검수
                </span>
              </div>
              <p className="text-white/45 text-xs leading-relaxed">
                StarFate의 가이드 글은 운영자가 주제를 선정하고 작성·검수합니다.
                역사·과학·심리학에 관한 사실 주장은 확인 가능한 자료와 대조하며, 점성술 해석은 문화적 관습 및 오락 콘텐츠임을 구분해 설명합니다.
                자동 생성된 일일 운세는 편집형 가이드 글과 별도로 운영합니다.
              </p>
              <div className="mt-3 flex gap-3">
                <a href="/about" className="text-purple-400 hover:text-purple-300 text-xs transition-colors">
                  사이트 소개 →
                </a>
                <a href="/contact" className="text-purple-400 hover:text-purple-300 text-xs transition-colors">
                  문의하기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
