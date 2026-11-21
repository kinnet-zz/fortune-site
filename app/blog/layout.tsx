import type { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <div className="border-t border-[#e8eaef] bg-[#f8f9fb]">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="flex items-start gap-4 rounded-2xl border border-[#e8eaef] bg-white p-6">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[0.95rem] font-bold text-[#3b5bdb]">
              S
            </div>
            <div>
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <span className="text-[0.88rem] font-semibold text-[#0f172a]">StarFate 운영자</span>
                <span className="rounded-full bg-[#eef0f4] px-2 py-0.5 text-[0.68rem] text-[#525f72]">
                  콘텐츠 작성·검수
                </span>
              </div>
              <p className="text-[0.78rem] leading-6 text-[#64748b] text-keep-all">
                StarFate의 가이드 글은 운영자가 주제를 선정하고 작성·검수합니다.
                역사·과학·심리학에 관한 사실 주장은 확인 가능한 자료와 대조하며, 점성술 해석은 문화적 관습 및 오락 콘텐츠임을 구분해 설명합니다.
                자동 생성된 일일 운세는 편집형 가이드 글과 별도로 운영합니다.
              </p>
              <div className="mt-3 flex gap-4">
                <a href="/about" className="text-[0.75rem] font-medium text-[#3b5bdb] transition-colors hover:text-[#2741b3]">
                  사이트 소개 →
                </a>
                <a href="/contact" className="text-[0.75rem] font-medium text-[#3b5bdb] transition-colors hover:text-[#2741b3]">
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
