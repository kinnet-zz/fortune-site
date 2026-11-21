import type { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <div
        style={{
          background: 'linear-gradient(160deg, #f7f2e8 0%, #f3ecdf 100%)',
          borderTop: '1px solid rgba(20,23,43,0.1)',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div
            className="flex items-start gap-5 border-l-2 p-6"
            style={{ background: '#fffdf8', borderColor: 'rgba(169,128,63,0.5)', borderRadius: '0.3rem' }}
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(169,128,63,0.4)] font-display text-[1rem] italic text-[var(--gold)]">S</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#14172b] font-bold text-sm">StarFate 운영자</span>
                <span
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{ background: 'rgba(169,128,63,0.14)', color: '#6f5223' }}
                >
                  콘텐츠 작성·검수
                </span>
              </div>
              <p className="text-[#1a1c2e]/48 text-xs leading-relaxed">
                StarFate의 가이드 글은 운영자가 주제를 선정하고 작성·검수합니다.
                역사·과학·심리학에 관한 사실 주장은 확인 가능한 자료와 대조하며, 점성술 해석은 문화적 관습 및 오락 콘텐츠임을 구분해 설명합니다.
                자동 생성된 일일 운세는 편집형 가이드 글과 별도로 운영합니다.
              </p>
              <div className="mt-3 flex gap-3">
                <a href="/about" className="text-[#8a6a2f] hover:text-[#6f5223] text-xs transition-colors">
                  사이트 소개 →
                </a>
                <a href="/contact" className="text-[#8a6a2f] hover:text-[#6f5223] text-xs transition-colors">
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
