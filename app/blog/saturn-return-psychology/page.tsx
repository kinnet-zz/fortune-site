import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '토성 회귀는 서른의 위기를 설명할까 — 점성술과 발달심리학 사이 | StarFate',
  description: '토성의 29.46년 공전 주기, 첫 토성 회귀가 29~30세에 오는 이유, 레빈슨의 서른 전환 연구, 그리고 별자리 예측력에 대한 실증 연구 결과를 함께 정리합니다.',
  alternates: { canonical: 'https://starfate.day/blog/saturn-return-psychology' },
  openGraph: {
    title: '토성 회귀는 서른의 위기를 설명할까',
    description: '29년 5개월마다 돌아오는 토성. 그 시기에 사람이 흔들리는 이유를 천문학과 발달심리학 양쪽에서 살펴봅니다.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function SaturnReturnPsychologyPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로 돌아가기
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              심리 분석
            </span>
            <span className="text-white/30 text-xs">2026년 11월 11일 · 9분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            토성 회귀는 서른의 위기를 설명할까 — 점성술과 발달심리학 사이
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            스물아홉 살 무렵 일을 바꾸거나, 오래된 관계를 정리하거나, 갑자기 다른 도시로 이사하는 사람들이 있습니다. 그 시기를 설명할 때 자주 꺼내는 말이 &lsquo;토성 회귀&rsquo;입니다. 정말 토성이 원인일까요? 아니면 우리가 서른 즈음에 흔들리는 데는 다른 이유가 있을까요?
          </p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&auto=format&fit=crop&q=80"
          alt="토성이 보이는 밤하늘"
          className="rounded-2xl w-full object-cover my-8"
          style={{ maxHeight: '400px' }}
        />

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">29년 5개월 만에 제자리로</h2>
            <p className="mb-3">
              토성은 태양을 한 바퀴 도는 데 약 29.46년이 걸립니다. 출생 때의 황도상 위치로 다시 돌아오는 시점이 첫 번째 토성 회귀이고, 계산상 대략 29~30세입니다. 두 번째는 58~59세 무렵입니다.
            </p>
            <p className="mb-3">
              점성술에서는 이 시기를 &lsquo;성장통&rsquo;으로 설명합니다. 토성이 책임과 한계를 상징하기 때문에, 첫 회귀에 현실의 무게를 처음으로 온전히 떠안게 된다는 것입니다. 대중문화가 이 이야기를 받아들이면서 토성 회귀는 하나의 밈이 되었고, 30대 초반의 고민을 설명하는 손쉬운 언어로 자리 잡았습니다.
            </p>
            <p className="mb-3">
              여기서 흥미로운 지점은, 천문학적으로 계산이 맞는다는 사실과 그 시기에 사람이 흔들린다는 사실이 서로 다른 주장이라는 것입니다. 앞의 것은 산수이고, 뒤의 것은 검증이 필요한 심리학적 주장입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">별자리와 성격, 검증된 것은 무엇인가</h2>
            <p className="mb-3">
              1985년 미국의 물리학자 숀 칼슨은 <em>네이처</em>에 이중맹검 실험 결과를 발표했습니다. 점성술사들에게 출생 차트와 성격검사 결과를 주고 짝을 맞추게 했지만, 우연 수준을 넘는 정확도를 보이지 못했습니다. 이후 여러 연구를 종합한 분석에서도 행성 위치와 성격·능력 사이의 상관은 일관되게 나타나지 않았습니다.
            </p>
            <p className="mb-3">
              같은 날 같은 곳에서 태어난 사람들의 삶이 놀랍도록 비슷한지도 여러 번 조사되었습니다. 결과는 대체로 &lsquo;아니오&rsquo;였습니다. 이 주제는 별자리 서비스에서도 자주 다루는 논쟁이니, 더 자세한 데이터는 쌍둥이 연구를 정리한 글에서 확인할 수 있습니다.
            </p>
            <p className="mb-3">
              그렇다고 해서 &lsquo;토성 회귀 시기에 아무 일도 일어나지 않는다&rsquo;는 뜻은 아닙니다. 사람들은 실제로 30세 전후에 여러 결정을 내립니다. 다만 그 원인이 토성이라는 설명은 아직 근거가 없습니다. 원인과 시기의 일치를 혼동하면 안 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">레빈슨이 인터뷰에서 찾은 &lsquo;서른의 전환&rsquo;</h2>
            <p className="mb-3">
              같은 시기를 심리학은 다른 방식으로 설명합니다. 발달심리학자 대니얼 레빈슨은 1978년 저서 <em>남자의 인생 계절</em>에서 35~45세 남성 40명을 심층 인터뷰해 인생 구조가 바뀌는 시기를 정리했습니다. 그가 &lsquo;서른의 전환(age-30 transition)&rsquo;이라고 부른 구간이 28~33세입니다.
            </p>
            <p className="mb-3">
              이 시기의 과제는 대체로 세 가지입니다. 지금 하는 일이 정말 내 것인지 점검하기, 관계의 조건을 다시 협상하기, 부모나 사회가 심어 놓은 목표와 내 목표를 구분하기. 29세 전후에 이직이나 이별, 이사가 몰리는 현상은 이런 과제와 무관하지 않습니다.
            </p>
            <p className="mb-3">
              물론 레빈슨의 연구도 표본이 작고 특정 집단에 치우쳤다는 비판을 받습니다. 이후 여성 대상 연구에서도 비슷한 시기의 재조정이 관찰되었지만, 시기의 경계는 사람마다 크게 다릅니다. 중요한 것은 &lsquo;정확히 몇 살&rsquo;이 아니라 &lsquo;삶의 구조를 한 번 재검토하는 시기가 온다&rsquo;는 관점입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">왜 토성 회귀라는 말이 잘 맞는 것처럼 느껴질까</h2>
            <p className="mb-3">
              여기에는 몇 가지 심리적 장치가 겹칩니다. 첫째, 시기가 넓습니다. 29~30세라고 해도 사람마다 몇 달씩 차이가 나고, 그 전후 1~2년의 경험까지 끌어와 해석할 수 있습니다. 둘째, 설명이 애매해서 적용 범위가 넓습니다. &lsquo;책임을 떠안는 시기&rsquo;라는 표현은 이직, 결혼, 출산, 간병, 건강 문제 어디에나 붙일 수 있습니다.
            </p>
            <p className="mb-3">
              셋째, 기억이 선택적으로 작동합니다. 토성 회귀를 믿는 사람은 그 시기에 일어난 큰일을 잘 기억하고, 별일 없이 지나간 사람의 사례는 잘 세지 않습니다. 이런 경향은 바넘 효과와 결합해 &lsquo;역시 맞았다&rsquo;는 확신을 만들어 냅니다.
            </p>
            <p className="mb-3">
              여기에 사회적 각본도 있습니다. 서른이라는 나이는 취업, 결혼, 독립 같은 기대가 몰리는 지점입니다. 그 기대가 실제 압력으로 작동하면, 사람은 그 압력을 설명할 언어를 찾습니다. 토성 회귀는 그 언어 중 하나입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">그래도 쓸모가 있다면</h2>
            <p className="mb-3">
              예측 도구로는 근거가 약하지만, 질문을 던지는 도구로는 쓸모가 있습니다. &lsquo;지금 내가 지고 있는 책임 중에 내가 고르지 않은 것은 무엇인가&rsquo; 같은 질문은 별의 위치와 상관없이 유효합니다. 토성 회귀라는 말을 계기로 그런 질문을 한 번 붙잡는 것은 나쁘지 않습니다.
            </p>
            <p className="mb-3">
              다만 그 시기의 결정을 별의 탓이나 운명의 탓으로만 돌리면, 실제로 조정할 수 있는 조건들을 놓치기 쉽습니다. 계약 조건, 수입과 지출, 관계의 경계, 건강 검진 일정처럼 손에 잡히는 것들이 대개 더 큰 영향을 줍니다. 운세는 그 목록을 정리하는 계기 정도로 두는 편이 안전합니다.
            </p>
          </section>

        </div>

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">오늘의 흐름을 가볍게 참고하고 싶다면</p>
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
            <Link href="/blog/twin-study-astrology" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">쌍둥이 연구가 던진 질문</div>
              <div className="text-white/30 text-xs mt-1">칼슨의 이중맹검 실험과 재현 실패</div>
            </Link>
            <Link href="/blog/barnum-effect-astrology" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">바넘 효과와 별자리</div>
              <div className="text-white/30 text-xs mt-1">설명이 잘 맞는 것처럼 느껴지는 이유</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
