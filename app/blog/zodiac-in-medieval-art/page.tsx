import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '중세 기도서 달력에는 왜 별자리가 함께 그려졌나 — 성무일도서와 황도대 미술 | StarFate',
  description: '베리 공작의 성무일도서 달력 그림, 12달의 노동, 지오토의 별, 뒤러의 천구도까지. 중세와 르네상스 미술에서 별자리가 시간을 표시하는 장치로 쓰인 이유를 살펴봅니다.',
  alternates: { canonical: 'https://starfate.day/blog/zodiac-in-medieval-art' },
  openGraph: {
    title: '중세 기도서 달력에는 왜 별자리가 함께 그려졌나',
    description: '성무일도서의 달력 그림과 12달의 노동, 지오토의 혜성, 뒤러의 천구도 — 그림 속 황도대를 읽는 법.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ZodiacInMedievalArtPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로 돌아가기
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              별자리 역사
            </span>
            <span className="text-white/30 text-xs">2026년 11월 2일 · 10분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            중세 기도서 달력에는 왜 별자리가 함께 그려졌나 — 성무일도서와 황도대 미술
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            미술관에서 중세 기도서를 넘기다 보면 달력 장면 옆에 작은 게자리나 염소자리가 그려져 있는 걸 발견하게 됩니다. 장식이 아니라 그 시대 사람들에게는 시간을 읽는 장치였습니다. 그림 속 황도대가 어떤 역할을 했는지, 몇 점의 작품을 통해 따라가 봅니다.
          </p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=80"
          alt="별이 총총한 밤하늘"
          className="rounded-2xl w-full object-cover my-8"
          style={{ maxHeight: '400px' }}
        />

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">달력 그림 한 장에 들어간 세 가지 정보</h2>
            <p className="mb-3">
              15세기 초 프랑스에서 만들어진 <em>베리 공작의 성무일도서(Les Très Riches Heures du Duc de Berry)</em>는 중세 채색 필사본 가운데 가장 유명한 작품 중 하나입니다. 림부르크 형제가 1411년 무렵 시작해 1416년 세 형제가 모두 죽으면서 미완성으로 남았고, 이후 다른 화가들이 손을 봤습니다. 이 책의 달력 부분에는 열두 달을 각각 한 장면으로 그린 큰 그림이 들어 있습니다.
            </p>
            <p className="mb-3">
              각 달 그림 위쪽에는 반원형의 작은 띠가 붙어 있습니다. 여기에는 그달의 날짜와 요일, 그리고 그달에 태양이 지나는 별자리가 함께 표시됩니다. 4월 그림에는 황소자리, 8월 그림에는 사자자리가 놓입니다. 아래쪽 큰 그림은 그달의 일을 그립니다. 3월은 밭을 갈고 포도나무를 손보는 농부, 10월은 루브르 성 앞에서 밭을 씨 뿌리는 사람입니다.
            </p>
            <p className="mb-3">
              한 장 안에 천문 정보, 달력 정보, 농경의 리듬이 겹쳐 있는 셈입니다. 기도서를 보는 사람은 그림을 통해 &ldquo;지금이 언제인가&rdquo;를 한눈에 확인했습니다. 별자리는 신비한 예언이 아니라, 1년이라는 원 위에 눈금을 새기는 도구였습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12달의 노동 — 시간은 곧 일의 순서였다</h2>
            <p className="mb-3">
              이런 달력 그림을 미술사에서는 &lsquo;12달의 노동(Labors of the Months)&rsquo;이라고 부릅니다. 12세기 이후 유럽 교회의 조각과 스테인드글라스에 자주 등장했고, 14~15세기에는 기도서의 표지급 장식이 되었습니다. 농사일, 사냥, 수확, 돼지 도축, 실내에서 불을 쬐는 겨울 장면 — 달마다 다른 풍경이 이어집니다.
            </p>
            <p className="mb-3">
              여기서 별자리의 역할은 분명합니다. 12달의 노동이 &lsquo;사람이 하는 일&rsquo;이라면, 황도대는 그 일이 놓인 &lsquo;하늘의 시간표&rsquo;입니다. 중세 사람에게 계절과 별의 움직임은 같은 질서의 두 얼굴이었습니다. 지금 우리가 달력 앱에서 날짜와 절기를 나란히 보는 것과 구조가 비슷합니다.
            </p>
            <p className="mb-3">
              흥미로운 것은 이 그림들이 대부분 부유한 후원자를 위한 사치품이었다는 점입니다. 책 한 권을 만드는 데 몇 년이 걸렸고, 값은 집 한 채에 맞먹기도 했습니다. 그런 책에 하늘의 질서를 정교하게 새긴다는 것은, 시간을 통제하는 권위를 과시하는 일이기도 했습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">지오토가 그린 별 — 혜성인가, 베들레헴의 별인가</h2>
            <p className="mb-3">
              파도바 스크로베니 예배당의 <em>동방박사의 경배</em>(1305년 무렵)에는 지붕 위에 꼬리를 단 밝은 별이 그려져 있습니다. 오늘날 많은 천문학자와 미술사가들은 이 별이 1301년 유럽에서 관측된 핼리 혜성의 인상을 옮긴 것이라고 봅니다. 지오토는 혜성을 성서의 별로 바꿔 그린 셈입니다.
            </p>
            <p className="mb-3">
              이 해석은 확정된 사실이 아니라 유력한 가설입니다. 다만 당시 사람들이 하늘의 이상 현상과 종교적 사건을 같은 언어로 연결했다는 점은 분명히 보여줍니다. 별이 &lsquo;짐승점&rsquo;이 되어 개인의 성격을 말해주는 것과, 별이 &lsquo;사건&rsquo;을 알리는 표지가 되는 것은 같은 뿌리에서 나온 생각입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">뒤러의 천구도 — 예술가가 하늘 지도를 새기다</h2>
            <p className="mb-3">
              1515년, 알브레히트 뒤러는 인쇄술의 시대에 맞춰 두 장의 천구도를 목판으로 새겼습니다. 북반구와 남반구를 각각 그린 이 지도에는 프톨레마이오스 이래 전해진 48개 별자리가 인물과 동물의 모습으로 배치되어 있습니다. 하늘을 &lsquo;지도&rsquo;로 만든다는 발상은 이때 이미 인쇄물로 대량 복제되고 있었습니다.
            </p>
            <p className="mb-3">
              뒤러는 천문학자가 아니었지만 좌표를 계산하는 일을 맡은 협력자들과 함께 작업했습니다. 결과물은 관측 도구이자 상품이었습니다. 점성술이 대학과 궁정에서 여전히 중요한 지식이던 시대에, 하늘 지도는 실용적인 판매 품목이기도 했습니다.
            </p>
            <p className="mb-3">
              같은 시기 로마에는 파르네세 아틀라스가 있었습니다. 기원후 2세기 무렵 만들어진 대리석 조각으로, 아틀라스가 어깨에 별자리가 새겨진 천구를 이고 있습니다. 현재 남아 있는 것 중 가장 오래된 천구 조각으로 꼽힙니다. 별자리 그림은 종이와 돌, 천장과 바닥을 가리지 않고 반복해서 나타났습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">그림을 읽는 순서 — 장식이 아니라 문법</h2>
            <p className="mb-3">
              이런 작품을 볼 때 두 가지만 기억하면 훨씬 많은 것이 보입니다. 첫째, 별자리는 대개 &lsquo;달력의 일부&rsquo;로 등장합니다. 그러니 별자리 그림이 있다면 옆에 날짜, 절기, 계절 노동이 함께 있는지 확인해 보세요. 둘째, 별자리의 모습은 당시 유행한 도상집의 영향을 받았습니다. 같은 사자자리라도 14세기 프랑스와 16세기 이탈리아의 그림이 다른 이유입니다.
            </p>
            <p className="mb-3">
              오늘날 별자리 이미지는 스마트폰 앱의 아이콘이 되었지만, 그 뿌리는 시간을 세고 계절을 예측하려는 실용적인 필요에 있습니다. 미술관에서 황도대를 만나면 &ldquo;이 그림이 몇 월의 무엇을 말하려는가&rdquo;를 먼저 물어보세요. 답은 대개 그 시대 사람들의 달력 사용법 안에 있습니다.
            </p>
          </section>

        </div>

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">오늘 내 별자리의 흐름이 궁금하다면?</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}
          >
            오늘의 운세 무료로 보기 →
          </Link>
        </div>

        <nav className="mt-10">
          <h3 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">관련 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/ancient-egypt-astronomy" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">천문학과 점성술이 갈라지기 전</div>
              <div className="text-white/30 text-xs mt-1">시리우스, 덴데라 조디악, 케플러까지</div>
            </Link>
            <Link href="/blog/star-name-etymology" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">별 이름은 누가 지었나</div>
              <div className="text-white/30 text-xs mt-1">아랍어 어원과 28수</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
