import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '베텔게우스, 알골, 미자르 — 별 이름은 누가 지었나 | StarFate',
  description: '아랍어에서 온 밝은 별 이름들, 프톨레마이오스 목록이 번역되며 생긴 오해, 2016년 국제천문연맹의 공식 별 이름 목록, 그리고 한국 전통의 28수와 천상열차분야지도.',
  alternates: { canonical: 'https://starfate.day/blog/star-name-etymology' },
  openGraph: {
    title: '별 이름은 누가 지었나 — 베텔게우스와 알골의 어원',
    description: '밤하늘의 이름 절반은 아랍어에서 왔습니다. 번역이 만든 오해와 공식 이름이 정해지기까지의 과정.',
    type: 'article',
  },
};

const bgStyle = {
  background: '#101620',
  minHeight: '100vh',
};

export default function StarNameEtymologyPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-[#f2f0ea]/80">
        <Link href="/blog" className="text-[#e6ecf5] hover:text-[#e6ecf5] text-sm mb-8 inline-block">
          ← 블로그 목록으로 돌아가기
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(206,220,238,0.14)', color: '#e6ecf5' }}>
              별자리 문화
            </span>
            <span className="text-[#9aa3b2] text-xs">2026년 11월 16일 · 10분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-[#f2f0ea] mb-4 leading-tight">
            베텔게우스, 알골, 미자르 — 별 이름은 누가 지었나
          </h1>
          <p className="text-[#bdc5d1] text-base leading-relaxed">
            밝은 별들의 이름을 눈여겨보면 낯선 소리가 섞여 있습니다. 덴네브, 알타이르, 알데바란. 라틴어도 그리스어도 아닌 이 이름들은 어디서 왔고, 누가 정한 것일까요. 별 이름의 계보를 따라가면 번역과 오역, 그리고 naming 권한을 둘러싼 근대의 논쟁이 나옵니다.
          </p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80"
          alt="산 위의 별이 총총한 밤하늘"
          className="rounded-2xl w-full object-cover my-8"
          style={{ maxHeight: '400px' }}
        />

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#f2f0ea] mb-4">하늘의 목록이 아랍어를 거쳐 유럽으로</h2>
            <p className="mb-3">
              2세기 알렉산드리아의 프톨레마이오스는 <em>알마게스트</em>에 별 목록을 정리했습니다. 48개 별자리에 약 1,000개 남짓한 별의 위치와 밝기를 담은 이 목록은 이후 천 년 동안 하늘을 정리하는 기준이 되었습니다.
            </p>
            <p className="mb-3">
              이 목록이 유럽에서 다시 읽히기까지는 아랍어를 거쳐야 했습니다. 9세기 바그다드에서 그리스 문헌이 대규모로 번역되었고, 12세기에는 스페인 톨레도에서 아랍어판이 라틴어로 옮겨졌습니다. 이 이중 번역 과정에서 별 이름의 상당 부분이 아랍어 형태 그대로 굳었습니다.
            </p>
            <p className="mb-3">
              알데바란은 아랍어 <em>알다바란</em>, &lsquo;뒤따르는 자&rsquo;에서 왔습니다. 플레이아데스 성단을 뒤따라 뜨기 때문에 붙은 이름입니다. 덴네브는 &lsquo;꼬리&rsquo;, 알타이르는 &lsquo;나는 독수리&rsquo;, 베가는 &lsquo;내려앉는 독수리&rsquo;를 뜻합니다. 모두 별자리 안에서 그 별이 놓인 위치나 모양을 가리키는 이름입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#f2f0ea] mb-4">알골 — &lsquo;구울의 머리&rsquo;라는 이름이 남은 이유</h2>
            <p className="mb-3">
              페르세우스자리의 알골은 아랍어 <em>라으스 알굴</em>, 즉 &lsquo;구울의 머리&rsquo;에서 왔습니다. 메두사의 머리를 든 페르세우스의 모습과 맞아떨어져 오늘날까지 그대로 쓰입니다.
            </p>
            <p className="mb-3">
              흥미로운 것은 이 별이 실제로 2.87일 주기로 밝기가 변하는 식변광성이라는 점입니다. 밝은 별과 어두운 별이 서로를 가리며 빛이 줄어듭니다. 고대인들이 이런 규칙적 변화를 알아차렸는지는 분명하지 않지만, 이름이 붙은 방식과 실제 성질이 우연히 겹친 사례로 자주 인용됩니다.
            </p>
            <p className="mb-3">
              베텔게우스는 조금 더 복잡합니다. 아랍어 <em>야드 알자우자</em>(&lsquo;오리온의 손&rsquo;)가 라틴어로 옮겨지는 과정에서 &lsquo;손&rsquo;이 &lsquo;겨드랑이&rsquo; 비슷한 말로 잘못 읽혔다는 설명이 널리 퍼져 있습니다. 번역이 원래 뜻을 흐리게 만든 대표적인 사례로, 지금도 많은 책이 이 이야기를 소개합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#f2f0ea] mb-4">그리스·라틴어 이름과 민간 이름이 섞이다</h2>
            <p className="mb-3">
              모든 이름이 아랍어에서 온 것은 아닙니다. 시리우스는 그리스어로 &lsquo;타오르는&rsquo;을 뜻하는 말에서 왔고, 아르크투루스는 &lsquo;곰의 수호자&rsquo;입니다. 큰곰자리를 따라 도는 위치에서 나온 이름입니다. 폴라리스, 카펠라처럼 라틴어 어원이 분명한 이름도 많습니다.
            </p>
            <p className="mb-3">
              여기에 각 지역의 민간 이름이 겹칩니다. 영국에서는 북두칠성을 &lsquo;쟁기(Plough)&rsquo;라 불렀고, 미국에서는 &lsquo;국자(Big Dipper)&rsquo;라고 합니다. 같은 별자리가 언어권마다 다른 사물로 보였던 것입니다. 별 이름은 천문학적 좌표이면서 동시에 그 사회가 하늘에서 무엇을 보았는지에 대한 기록입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#f2f0ea] mb-4">2016년 — 국제천문연맹이 이름을 정리하다</h2>
            <p className="mb-3">
              오랫동안 별 이름은 여러 출처에서 서로 다르게 쓰였습니다. 관측 소프트웨어마다 표기가 달랐고, 상업용 별 등록 서비스처럼 공식 절차와 무관한 이름도 유통되었습니다.
            </p>
            <p className="mb-3">
              2016년 국제천문연맹(IAU)은 별 이름 실무그룹을 만들고 공식 별 이름 목록(IAU-CSN)을 운영하기 시작했습니다. 지금은 수백 개의 밝은 별과 일부 외계행성의 항성 이름이 여기에 등재되어 있습니다. 중요한 원칙은 이것입니다. 하늘의 이름은 사유물이 아니며, 공식 이름은 검증된 절차를 거쳐 정해집니다.
            </p>
            <p className="mb-3">
              이 정리가 필요했던 이유는 실용적입니다. 연구 데이터와 교육 자료, 위성 항법, 천문 소프트웨어가 같은 대상을 같은 이름으로 부를 필요가 있었기 때문입니다. 별을 사고파는 서비스가 성행하던 시절을 지나, 이름의 공공성이 다시 확인된 셈입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#f2f0ea] mb-4">한국의 하늘 — 28수와 천상열차분야지도</h2>
            <p className="mb-3">
              동아시아에는 서양의 88개 별자리와 다른 체계가 있었습니다. 하늘을 28개 구역으로 나눈 28수(二十八宿)가 그것입니다. 각 구역은 청룡·현무·백호·주작의 사신(四神)에 묶여 있고, 28수는 달이 하루에 하나씩 머무는 자리로 이해되었습니다.
            </p>
            <p className="mb-3">
              조선 초에는 이 체계를 담은 전천 별자리 지도가 만들어졌습니다. 1395년(태조 4년)에 제작된 천상열차분야지도는 돌에 새겨져 지금까지 전해지며, 1,400개가 넘는 별의 위치가 새겨져 있습니다. 서양의 별자리 그림과 비교해 보면, 같은 하늘을 완전히 다른 칸으로 나눈 두 지도를 나란히 볼 수 있습니다.
            </p>
            <p className="mb-3">
              오늘날 별자리 앱은 IAU의 88개 별자리를 씁니다. 하지만 한국어로 별을 부르는 방식은 여전히 두 계통이 섞여 있습니다. &lsquo;북두칠성&rsquo;, &lsquo;삼태성&rsquo;처럼 전통 이름으로 부르는 별이 있는가 하면, &lsquo;베텔게우스&rsquo;처럼 아랍어 어원을 그대로 옮긴 이름도 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#f2f0ea] mb-4">이름을 읽는 법</h2>
            <p className="mb-3">
              별 이름을 볼 때 세 가지만 기억하면 대부분의 혼란을 줄일 수 있습니다. 첫째, 밝은 별의 이름은 대개 그 별의 위치나 별자리 속 역할을 가리키는 설명입니다. 둘째, 표기가 여러 가지라면 원출처를 확인하는 편이 좋습니다. 셋째, 별 이름을 상품으로 파는 서비스는 공식 목록과 무관합니다.
            </p>
            <p className="mb-3">
              밤하늘의 이름은 수천 년 동안 번역되고 오해되고 다시 정리되었습니다. 그 이름들을 따라가면, 인류가 같은 별을 보며 서로 다른 언어로 같은 질문을 해 왔다는 사실이 남습니다.
            </p>
          </section>

        </div>

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'rgba(206,220,238,0.1)', border: '1px solid rgba(206,220,238,0.14)' }}>
          <p className="text-[#bdc5d1] mb-4 text-sm">오늘 밤, 내 별자리의 흐름은?</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full font-bold text-[#101620] text-sm"
            style={{ background: 'linear-gradient(135deg, #e6ecf5 0%, #f4f8fd 100%)' }}
          >
            오늘의 운세 무료로 보기 →
          </Link>
        </div>

        <nav className="mt-10">
          <h3 className="text-sm text-[#9aa3b2] mb-3 font-semibold uppercase tracking-widest">관련 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/zodiac-in-medieval-art" className="p-4 rounded-xl text-sm hover:border-[#3a4a61] transition-colors" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="text-[#f2f0ea]/72 font-medium">중세 기도서 속 황도대</div>
              <div className="text-[#9aa3b2] text-xs mt-1">달력 그림과 별자리 미술</div>
            </Link>
            <Link href="/blog/ancient-egypt-astronomy" className="p-4 rounded-xl text-sm hover:border-[#3a4a61] transition-colors" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="text-[#f2f0ea]/72 font-medium">천문학과 점성술이 갈라지기 전</div>
              <div className="text-[#9aa3b2] text-xs mt-1">시리우스와 나일강의 5,000년</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
