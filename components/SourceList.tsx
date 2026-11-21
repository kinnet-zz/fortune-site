interface SourceItem {
  title: string;
  href: string;
  note?: string;
}

export default function SourceList({ sources }: { sources: SourceItem[] }) {
  return (
    <section
      className="mt-10 rounded-2xl p-6"
      style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)' }}
      aria-labelledby="sources-heading"
    >
      <h2 id="sources-heading" className="text-lg font-bold text-[#f2f0ea] mb-3">주요 참고자료</h2>
      <p className="text-[#9aa3b2] text-xs leading-relaxed mb-4">
        아래 자료는 글에 포함된 사실 관계를 확인하기 위한 출처입니다. 점성술적 해석과 활용 의견은 StarFate의 편집 관점입니다.
      </p>
      <ul className="space-y-3 text-sm">
        {sources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e6ecf5] hover:text-[#e6ecf5] underline underline-offset-4"
            >
              {source.title}
            </a>
            {source.note && <p className="text-[#f2f0ea]/40 text-xs mt-1">{source.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
