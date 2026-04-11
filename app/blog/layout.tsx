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
                <span className="text-white font-bold text-sm">StarFate 편집팀</span>
                <span
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{ background: 'rgba(124,58,237,0.3)', color: '#c4b5fd' }}
                >
                  점성술 &amp; 동양철학
                </span>
              </div>
              <p className="text-white/45 text-xs leading-relaxed">
                StarFate 편집팀은 서양 점성술(황도대 12별자리)과 동양 12지를 전문으로 연구하는 콘텐츠 팀입니다.
                수비학, 타로, 심리 점성술에 걸쳐 검증된 자료를 바탕으로 깊이 있는 운세 가이드를 제공합니다.
                모든 콘텐츠는 역사·문화적 자료와 심리학 연구를 기반으로 작성됩니다.
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
