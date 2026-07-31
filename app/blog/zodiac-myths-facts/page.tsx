import type { Metadata } from 'next';
import Link from 'next/link';

const pageUrl = 'https://starfate.day/blog/zodiac-myths-facts';
const pageTitle = '별자리, 안 믿는다면서 왜 자꾸 보게 될까?';
const pageDescription = '별자리 이야기가 오래 살아남은 이유를 밤하늘의 역사, 바넘 효과, 연애와 관계의 실제 장면을 통해 위트 있게 풀어봅니다.';

export const metadata: Metadata = {
  title: `${pageTitle} | StarFate`,
  description: pageDescription,
  alternates: { canonical: '/blog/zodiac-myths-facts' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: pageTitle,
  description: pageDescription,
  datePublished: '2025-05-01',
  dateModified: '2026-08-01',
  mainEntityOfPage: pageUrl,
  author: { '@type': 'Organization', name: 'StarFate' },
  publisher: { '@type': 'Organization', name: 'StarFate', url: 'https://starfate.day' },
  inLanguage: 'ko-KR',
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ZodiacMythsFactsPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
        />

        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span
              className="px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}
            >
              별자리 문화
            </span>
            <span className="text-white/35 text-xs">2026년 8월 1일 업데이트 · 5분 읽기</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            별자리, 안 믿는다면서 왜 자꾸 보게 될까?
          </h1>
          <p className="text-white/55 text-base sm:text-lg leading-8">
            “저 별자리 같은 건 안 믿어요.” 그렇게 말한 사람이 3분 뒤 상대의 생일을 묻는 장면은 드물지 않습니다. 별자리는 정답표라기보다 대화 카드에 가깝습니다. 맞히지 못해도, 꺼내는 순간 이야기가 시작되니까요.
          </p>
        </header>

        <div className="space-y-12 text-sm sm:text-[15px] leading-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">밤하늘에는 선이 없는데, 우리는 자꾸 그림을 본다</h2>
            <p className="mb-4">
              오리온의 허리띠는 가죽도 아니고, 물병자리에서 물이 새지도 않습니다. 별 사이에 선을 그은 쪽은 하늘이 아니라 사람입니다. 그런데 그 선 하나 덕분에 밤하늘은 외우기 어려운 점들의 집합에서 기억할 수 있는 이야기로 바뀝니다.
            </p>
            <p className="mb-4">
              국제천문연맹(IAU)은 문화마다 자연환경과 생활 방식에 따라 서로 다른 별자리 이야기를 만들었다고 설명합니다. 계절을 짐작하고, 방향을 찾고, 경험을 다음 세대에 전하기 위한 생활의 지도였습니다. 현대 천문학은 밤하늘 전체를 88개 별자리 구역으로 나누지만, 우리가 익숙하게 보는 막대기 모양의 그림까지 공식으로 정해두지는 않습니다.
            </p>
            <p>
              그러니 별자리는 처음부터 ‘하늘에 숨겨진 성격검사’라기보다, 사람들이 별을 보고 만든 오래된 스토리텔링에 가깝습니다. 재미의 출발점도 바로 거기 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">뱀주인자리가 등장해도 별자리 주민등록증은 그대로다</h2>
            <p className="mb-4">
              몇 년마다 “당신의 별자리가 바뀌었다”는 소식이 돌아옵니다. 주인공은 대개 뱀주인자리입니다. 천문학에서 뱀주인자리는 실제로 존재하는 공식 별자리입니다. 다만 이것이 곧 점성술의 12궁에 새 멤버가 긴급 합류했다는 뜻은 아닙니다.
            </p>
            <p className="mb-4">
              천문학의 별자리는 경계가 제각각인 하늘의 구역이고, 서양 점성술의 12궁은 황도를 30도씩 나눈 상징 체계입니다. 둘은 같은 하늘을 보지만 쓰는 지도가 다릅니다. 지하철 노선도에 한강의 실제 폭이 표시되지 않는다고 해서 노선도가 틀린 것은 아닌 것과 비슷합니다.
            </p>
            <div className="rounded-2xl p-5" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(167,139,250,0.18)' }}>
              <p className="text-purple-100/85">
                결론은 간단합니다. 천문학 기사를 읽을 때는 하늘의 실제 위치를, 별자리 운세를 볼 때는 문화적으로 만들어진 12궁의 언어를 보고 있다는 차이만 기억하면 됩니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">“이거 완전 나잖아”에는 꽤 인간적인 이유가 있다</h2>
            <p className="mb-4">
              1949년 심리학자 버트럼 포러는 학생들에게 성격검사 결과라고 소개한 뒤, 사실상 모두에게 같은 성격 설명을 건넸습니다. 학생들은 그 문장이 자신을 꽤 정확하게 묘사한다고 평가했습니다. 이후 이런 현상은 포러 효과 또는 바넘 효과로 널리 알려졌습니다.
            </p>
            <p className="mb-4">
              “사람들과 어울리는 걸 좋아하지만 가끔은 혼자 있고 싶다” 같은 문장은 거의 인류 전체의 단체 공지에 가깝습니다. 좋은 면과 조심스러운 면을 함께 담고, 해석할 여백을 남기면 우리는 현재의 경험을 그 문장 안에 자연스럽게 채워 넣습니다.
            </p>
            <p>
              그렇다고 읽는 시간이 전부 헛된 것은 아닙니다. 더 재미있는 질문은 “이 설명이 정말 나인가?”보다 “나는 왜 오늘 이 문장에 유독 멈췄을까?”입니다. 운세가 미래를 비추는 거울은 아니더라도, 지금 내 관심사를 슬쩍 보여주는 거울은 될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">궁합표보다 더 정확한 건 다툰 뒤의 행동이다</h2>
            <p className="mb-4">
              사자자리 둘이 만났다고 반드시 주도권 싸움이 벌어지는 것도 아니고, 물과 불 별자리가 만났다고 연애가 자동 종료되는 것도 아닙니다. 실제 관계에서는 별자리보다 답장이 늦었을 때 어떻게 해석하는지, 서운할 때 말하는지 참는지, 사과를 누가 먼저 시작하는지가 훨씬 많은 것을 설명합니다.
            </p>
            <p className="mb-5">
              별자리 궁합을 판결문처럼 읽으면 사람을 열두 칸에 밀어 넣게 됩니다. 반대로 대화의 예고편처럼 쓰면 꽤 쓸모가 있습니다. “넌 전갈자리라 원래 그래”에서 멈추지 말고, 아래처럼 한 번 더 묻는 식입니다.
            </p>
            <ul className="space-y-3">
              <li className="rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)' }}>
                나는 불편할 때 설명이 길어지는 편일까, 조용해지는 편일까?
              </li>
              <li className="rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)' }}>
                상대의 느린 답장을 바쁨으로 읽을까, 무관심으로 읽을까?
              </li>
              <li className="rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)' }}>
                관심을 말, 시간, 행동 중 무엇으로 확인하고 싶을까?
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">별자리 운세를 잘 읽는 사람은 전부 믿지 않는다</h2>
            <p className="mb-4">
              “오늘 먼저 연락하면 흐름이 좋아진다”는 문장을 봤다면 우주의 허락을 기다리기보다 미뤄둔 안부가 있는지 떠올려보면 됩니다. “정리의 날”이라면 서랍 하나나 일정 하나를 정리해도 충분합니다. 추상적인 문장을 작은 행동으로 번역할 때 운세는 비로소 생활에 닿습니다.
            </p>
            <p className="mb-4">
              단, 돈과 건강 앞에서는 갑자기 현실주의자가 되는 편이 좋습니다. 재물운이 좋다는 날에도 별이 매수 버튼을 대신 눌러주지는 않습니다. 컨디션이 떨어진다는 운세는 휴식의 계기로 삼을 수 있지만, 실제 증상은 운세가 아니라 의료 정보와 전문가에게 물어야 합니다.
            </p>
            <p>
              좋은 별자리 콘텐츠는 “당신은 이런 사람”이라고 못 박지 않습니다. 오늘 무엇을 관찰해볼지, 누구에게 말을 걸어볼지, 어떤 습관을 한 번 의심해볼지 제안합니다. 판결문보다 첫 문장에 가까운 셈입니다.
            </p>
          </section>

          <section className="rounded-3xl p-6 sm:p-7" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.14), rgba(76,29,149,0.08))', border: '1px solid rgba(167,139,250,0.22)' }}>
            <h2 className="text-xl font-bold text-white mb-3">그래서 우리는 내일도 별자리를 본다</h2>
            <p className="text-white/65 leading-8">
              별자리가 미래를 정확히 예측한다는 과학적 근거는 부족합니다. 하지만 사람이 밤하늘에서 패턴을 찾고, 그 패턴으로 서로의 이야기를 시작해온 역사는 아주 깁니다. 어쩌면 별자리가 오래 살아남은 이유는 미래를 맞혀서가 아니라, 어색한 침묵과 복잡한 마음 사이에 꽤 괜찮은 질문 하나를 놓아주기 때문인지도 모릅니다.
            </p>
          </section>
        </div>

        <aside className="mt-10 border-t border-white/10 pt-6" aria-labelledby="sources-title">
          <h2 id="sources-title" className="text-sm font-semibold text-white/65 mb-3">사실 확인에 참고한 자료</h2>
          <ul className="space-y-2 text-xs leading-6 text-white/40">
            <li>
              <a
                href="https://www.iau.org/IAU/IAU/Astronomy-FAQs/Constellations.aspx?hkey=bb9dc841-0618-41b5-ac70-149741062141"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                국제천문연맹(IAU), The Constellations
              </a>
              {' '}— 별자리의 문화적 형성과 현대 천문학의 88개 별자리 경계
            </li>
            <li>
              <a
                href="https://doi.org/10.1037/h0059240"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                Bertram R. Forer (1949), The fallacy of personal validation
              </a>
              {' '}— 개인화된 성격 설명을 받아들이는 경향을 다룬 고전 실험
            </li>
          </ul>
        </aside>

        <div className="mt-10 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">오늘의 운세에서 지금 마음에 걸리는 문장을 찾아보세요.</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}
          >
            🔮 오늘의 운세 보기 →
          </Link>
        </div>

        <nav className="mt-10" aria-label="관련 콘텐츠">
          <h2 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">이어서 읽기</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/blog/barnum-effect-astrology" className="p-4 rounded-xl text-sm text-white/70 hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              🪞 운세가 나만의 이야기처럼 느껴지는 이유
            </Link>
            <Link href="/blog/nasa-ophiuchus-13th-zodiac" className="p-4 rounded-xl text-sm text-white/70 hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              🐍 뱀주인자리 소문의 전말
            </Link>
            <Link href="/blog/how-to-read-daily-fortune" className="p-4 rounded-xl text-sm text-white/70 hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              📖 운세를 생활에 쓰는 방법
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
