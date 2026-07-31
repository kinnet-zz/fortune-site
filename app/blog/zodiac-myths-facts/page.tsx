import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '별자리 궁금한 이야기 5가지 | StarFate',
  description: '내 별자리가 바뀌었는지, 뱀주인자리는 무엇인지 등 별자리와 관련해 자주 궁금한 내용을 가볍게 정리했습니다.',
  alternates: { canonical: '/blog/zodiac-myths-facts' },
  openGraph: {
    title: '별자리 궁금한 이야기 5가지',
    description: '별자리 날짜와 뱀주인자리처럼 한 번쯤 궁금한 내용을 짧고 편하게 읽어보세요.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

const STORIES = [
  {
    title: '내 별자리가 바뀌었다는 말, 사실일까?',
    body: '인터넷에서 별자리 날짜가 달라졌다는 이야기를 본 적이 있을 거예요. 실제 별자리의 위치를 보는 천문학과 생일을 기준으로 읽는 서양 점성술은 기준이 다릅니다. StarFate에서 사용하는 12별자리 날짜는 익숙한 점성술 기준을 따르므로, 평소 알고 있던 별자리를 그대로 보면 됩니다.',
    takeaway: '한 줄 요약: 생일로 보는 별자리는 그대로예요.',
  },
  {
    title: '뱀주인자리가 생기면 13번째 별자리일까?',
    body: '뱀주인자리는 태양이 지나가는 하늘 영역 중 하나라서 가끔 화제가 됩니다. 다만 12궁 점성술에 새 별자리가 추가됐다는 뜻은 아닙니다. 천문학에서 말하는 별자리와 점성술에서 사용하는 12궁은 서로 다른 분류 방식이니까요.',
    takeaway: '한 줄 요약: 새로운 별자리가 생긴 것이 아니라, 다른 기준을 소개한 이야기예요.',
  },
  {
    title: '쌍둥이는 같은 별자리인데 왜 다를까?',
    body: '별자리는 사람을 한 문장으로 정해주는 이름표가 아닙니다. 태어난 계절과 상징을 바탕으로 성향을 생각해보는 출발점에 가깝습니다. 같은 별자리라도 자란 환경, 관계, 그날의 기분에 따라 전혀 다른 모습을 보일 수 있어요.',
    takeaway: '한 줄 요약: 같은 별자리라도 사람마다 이야기는 달라요.',
  },
  {
    title: '같은 별자리끼리는 정말 안 맞을까?',
    body: '같은 별자리라서 무조건 잘 맞거나, 반대로 꼭 부딪히는 것은 아닙니다. 서로 비슷한 점을 편하게 느낄 수도 있고, 같은 성향이 겹쳐 다툴 수도 있습니다. 궁합은 별자리 하나보다 실제 대화와 배려가 더 크게 좌우합니다.',
    takeaway: '한 줄 요약: 궁합은 별자리보다 서로 맞춰가는 방식이 중요해요.',
  },
  {
    title: '별자리는 과학일까, 재미일까?',
    body: '별자리는 미래를 정확히 맞히는 공식이라기보다 상징을 통해 나를 돌아보는 문화적 놀이에 가깝습니다. 마음에 드는 문장은 오늘의 힌트로 활용하고, 중요한 건강·금전·법률 결정은 실제 정보와 전문가의 조언을 기준으로 판단하세요.',
    takeaway: '한 줄 요약: 가볍게 읽고, 내게 맞는 부분만 챙기면 충분해요.',
  },
];

export default function ZodiacMythsFactsPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span
              className="px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}
            >
              별자리 이야기
            </span>
            <span className="text-white/30 text-xs">가볍게 읽는 3분</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            별자리 궁금한 이야기 5가지
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            “내 별자리가 바뀌었나?”, “뱀주인자리는 뭐지?” 한 번쯤 궁금했던 내용을 짧고 편하게 정리했습니다. 재미로 읽고, 마음에 드는 부분만 챙겨가세요.
          </p>
        </header>

        <div className="space-y-4">
          {STORIES.map((story, index) => (
            <section
              key={story.title}
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-purple-300/70 text-xs font-semibold tracking-[0.16em] uppercase mb-2">
                이야기 {index + 1}
              </p>
              <h2 className="text-xl font-bold text-white mb-3">{story.title}</h2>
              <p className="text-white/60 text-sm leading-relaxed">{story.body}</p>
              <p className="mt-4 text-purple-200/80 text-sm font-medium">{story.takeaway}</p>
            </section>
          ))}
        </div>

        <section
          className="mt-8 rounded-2xl p-6"
          style={{ background: 'rgba(124,58,237,0.09)', border: '1px solid rgba(167,139,250,0.2)' }}
        >
          <h2 className="text-lg font-bold text-white mb-3">별자리는 이렇게 즐겨보세요</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            별자리 해석은 정답을 맞히는 시험보다, 오늘의 기분과 선택을 잠깐 돌아보는 질문에 가깝습니다. 가볍게 읽고 지금의 나에게 도움이 되는 문장만 골라보세요.
          </p>
          <p className="mt-3 text-white/35 text-xs leading-relaxed">
            본 콘텐츠는 오락과 자기성찰을 위한 참고 자료이며 미래를 확정하거나 전문적인 판단을 대신하지 않습니다.
          </p>
        </section>

        <div className="mt-10 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">오늘의 별자리와 띠 운세가 궁금하다면?</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}
          >
            🔮 오늘의 운세 무료로 보기 →
          </Link>
        </div>

        <nav className="mt-10" aria-label="관련 콘텐츠">
          <h2 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">더 읽어보기</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/zodiac" className="p-4 rounded-xl text-sm text-white/70 hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              ✨ 12별자리 백과
            </Link>
            <Link href="/chinese-zodiac" className="p-4 rounded-xl text-sm text-white/70 hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              🐉 12지 띠 백과
            </Link>
            <Link href="/blog/how-to-read-daily-fortune" className="p-4 rounded-xl text-sm text-white/70 hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              📖 운세를 읽는 가벼운 방법
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
