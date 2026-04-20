import Link from 'next/link';

interface Props {
  date: string;
  readTime: string;
  category: string;
  updatedDate?: string;
}

export default function AuthorBio({ date, readTime, category, updatedDate }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Author Avatar */}
      <div className="flex items-center gap-3 flex-1">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}
          aria-label="StarFate 편집팀"
        >
          🔮
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/about" className="text-white font-semibold text-sm hover:text-purple-300 transition-colors">
              StarFate 편집팀
            </Link>
            <span
              className="px-2 py-0.5 rounded-full text-xs"
              style={{ background: 'rgba(124,58,237,0.3)', color: '#c4b5fd' }}
            >
              점성술 &amp; 동양철학
            </span>
          </div>
          <p className="text-white/35 text-xs mt-0.5">
            서양 점성술·동양 12지 전문 콘텐츠 팀 · 역사·문화·심리학 기반 검증 콘텐츠
          </p>
        </div>
      </div>

      {/* Meta info */}
      <div className="flex items-center gap-3 text-white/30 text-xs flex-wrap">
        <span
          className="px-2 py-0.5 rounded-full text-xs font-medium"
          style={{ background: 'rgba(124,58,237,0.2)', color: 'rgba(196,181,253,0.8)' }}
        >
          {category}
        </span>
        <span>🗓 {date}</span>
        {updatedDate && <span>· 수정 {updatedDate}</span>}
        <span>⏱ {readTime} 읽기</span>
      </div>
    </div>
  );
}
