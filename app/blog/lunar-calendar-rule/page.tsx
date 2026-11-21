import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '윤달은 왜 생길까 — 음력의 19년 주기와 2033년 문제 | StarFate',
  description: '삭망월 29.53일과 태양년 365.24일의 차이, 19년에 7번 윤달을 넣는 메톤 주기, 중기가 없는 달을 윤달로 삼는 규칙, 그리고 2033년에 달력 계산이 갈리는 이유.',
  alternates: { canonical: 'https://starfate.day/blog/lunar-calendar-rule' },
  openGraph: {
    title: '윤달은 왜 생길까 — 음력의 19년 주기와 2033년 문제',
    description: '달의 주기와 태양의 주기는 나누어떨어지지 않습니다. 그 나머지를 어떻게 처리했는지가 달력의 역사입니다.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, rgba(250,246,238,0.6) 0%, rgba(247,242,232,0.4) 45%, rgba(241,233,218,0.5) 100%)',
  minHeight: '100vh',
};

export default function LunarCalendarRulePage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-[#1a1c2e]/80">
        <Link href="/blog" className="text-[#8a6a2f] hover:text-[#6f5223] text-sm mb-8 inline-block">
          ← 블로그 목록으로 돌아가기
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(169,128,63,0.14)', color: '#6f5223' }}>
              달력과 시간
            </span>
            <span className="text-[#1a1c2e]/38 text-xs">2026년 11월 7일 · 11분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-[#14172b] mb-4 leading-tight">
            윤달은 왜 생길까 — 음력의 19년 주기와 2033년 문제
          </h1>
          <p className="text-[#1a1c2e]/55 text-base leading-relaxed">
            음력 생일을 챙기는 사람이라면 한 번쯤 겪는 일이 있습니다. 어떤 해에는 생일이 두 번 오고, 어떤 해에는 달력에서 사라집니다. 그 불규칙함은 실수가 아니라, 서로 나누어떨어지지 않는 두 주기를 억지로 맞추려는 계산의 결과입니다.
          </p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&auto=format&fit=crop&q=80"
          alt="달과 밤하늘"
          className="rounded-2xl w-full object-cover my-8"
          style={{ maxHeight: '400px' }}
        />

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#14172b] mb-4">10.9일 — 매년 남는 차이</h2>
            <p className="mb-3">
              달이 차고 기우는 데 걸리는 시간, 즉 삭망월은 평균 29.5306일입니다. 열두 번 반복하면 354.37일입니다. 지구가 태양을 한 바퀴 도는 데 걸리는 시간은 365.24일입니다. 두 값을 빼면 약 10.88일이 남습니다.
            </p>
            <p className="mb-3">
              이 차이를 그대로 두면 음력 1월 1일이 매년 열흘 남짓씩 앞당겨집니다. 3년이면 한 달 가까이, 30여 년이면 계절이 완전히 뒤집힙니다. 이슬람력이 바로 이 방식을 택한 달력입니다. 라마단이 계절을 가리지 않고 돌아가는 것은 오류가 아니라, 태양이 아니라 달만을 기준으로 삼겠다는 선택의 결과입니다.
            </p>
            <p className="mb-3">
              반대로 농사를 지어야 하는 사회에서는 계절과 달력이 어긋나면 곤란합니다. 그래서 달을 기준으로 하되 태양의 주기에도 맞추는 &lsquo;태음태양력&rsquo;이 만들어졌습니다. 한국과 중국, 일본의 전통 음력이 여기에 속하고, 유대력도 같은 원리입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#14172b] mb-4">19년에 7번 — 메톤 주기</h2>
            <p className="mb-3">
              기원전 5세기 그리스의 천문학자 메톤은 흥미로운 사실을 알아냈습니다. 19태양년은 235삭망월과 거의 같습니다. 계산해 보면 19 × 365.2422 = 6,939.60일, 235 × 29.5306 = 6,939.69일입니다. 차이는 약 2시간입니다.
            </p>
            <p className="mb-3">
              그래서 19년 동안 윤달을 7번 넣으면 달력과 계절이 거의 일치합니다. 235 − (19 × 12) = 7이기 때문입니다. 유대력은 이 규칙을 그대로 쓰며, 19년 주기 중 3·6·8·11·14·17·19번째 해에 윤달을 둡니다.
            </p>
            <p className="mb-3">
              동아시아의 음력은 조금 다릅니다. 정해진 해에 기계적으로 윤달을 넣지 않고, 절기와 달의 관계를 매번 계산합니다. 여기에 24절기가 등장합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#14172b] mb-4">중기가 없는 달이 윤달이 된다</h2>
            <p className="mb-3">
              24절기는 태양의 위치를 15도씩 나눈 기준점입니다. 그중 입춘·춘분·망종·동지처럼 열둘을 &lsquo;중기(中氣)&rsquo;라고 부릅니다. 원칙은 이렇습니다. 한 달 안에 중기가 들어 있으면 정상적인 달, 중기가 하나도 들어 있지 않으면 그달을 윤달로 삼습니다. 이를 무중치윤(無中置閏)이라고 합니다.
            </p>
            <p className="mb-3">
              삭망월이 29.5일이고 중기 간격이 약 30.4일이니, 달이 절기를 조금씩 앞질러 갑니다. 그러다 어느 해에는 한 달이 중기를 통째로 비껴갑니다. 그때 윤달이 들어가고, 다음 달부터 다시 절기와 달이 맞춰집니다. 윤달이 2~3년에 한 번, 19년에 7번쯤 생기는 이유가 여기 있습니다.
            </p>
            <p className="mb-3">
              재미있는 점은 윤달이 붙는 달이 매번 다르다는 것입니다. 어떤 해에는 윤4월, 어떤 해에는 윤11월입니다. 윤달이 특정 계절에만 몰리지 않게 하려는 장치이기도 하고, 그만큼 규칙이 복잡해진 이유이기도 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#14172b] mb-4">2033년 — 두 후보가 생기는 해</h2>
            <p className="mb-3">
              무중치윤 규칙에는 드물게 예외 상황이 생깁니다. 한 해에 중기가 없는 달이 두 번 나타나는 경우입니다. 이때 어느 쪽을 윤달로 삼느냐에 따라 1년 뒤의 날짜가 한 달씩 달라집니다.
            </p>
            <p className="mb-3">
              2033년이 그런 해로 알려져 있습니다. 음력 계산을 어느 시점의 표준시와 어느 절기표로 하느냐에 따라 윤달의 위치가 갈릴 수 있고, 실제로 한국과 중국의 계산이 서로 다르게 나온다는 점이 여러 차례 논의되었습니다. 같은 한자 문화권에서 음력 날짜가 어긋나는 사례가 생기는 것입니다.
            </p>
            <p className="mb-3">
              이 문제는 점성술의 문제가 아니라 천문 계산의 표준화 문제입니다. 어느 경도(표준시)의 자정을 하루의 시작으로 보는지, 절기 시각을 어느 정밀도로 계산하는지에 따라 결과가 달라지기 때문입니다. 한국에서는 한국천문연구원이 음양력 변환의 기준을 제공하고 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#14172b] mb-4">달력은 자연이 아니라 합의다</h2>
            <p className="mb-3">
              그레고리력도 완벽하지 않습니다. 1년을 365.2425일로 정했는데 실제 열대년은 365.2422일쯤입니다. 차이는 1년에 0.0003일, 3,000년이 넘어야 하루가 어긋납니다. 1582년에 열흘을 통째로 건너뛴 개력도 이 누적된 오차를 되돌리기 위한 조치였습니다.
            </p>
            <p className="mb-3">
              결국 달력은 천체의 주기를 정확히 베끼는 문서가 아니라, 나누어떨어지지 않는 나머지를 어떻게 처리할지에 대한 사회적 합의입니다. 윤달이 두 번 오는 해에 생일을 언제 챙길지 정하는 것도, 2033년의 계산이 갈릴 때 어느 쪽을 따를지 정하는 것도 같은 종류의 결정입니다.
            </p>
            <p className="mb-3">
              그래서 음력 생일을 챙긴다면 규칙을 한 번쯤 확인해 두는 편이 좋습니다. 윤달에 태어난 사람이 평달에 생일을 지내는 관습도, 윤달이 돌아올 때만 챙기는 관습도 지역마다 다릅니다. 정답이 있는 문제가 아니라, 오래 합의해 온 방식이 있는 문제입니다.
            </p>
          </section>

        </div>

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'rgba(169,128,63,0.1)', border: '1px solid rgba(169,128,63,0.14)' }}>
          <p className="text-[#1a1c2e]/64 mb-4 text-sm">생년월일로 보는 오늘의 흐름</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full font-bold text-[#f7f0e1] text-sm"
            style={{ background: 'linear-gradient(135deg, #1a2144 0%, #111730 100%)' }}
          >
            오늘의 운세 무료로 보기 →
          </Link>
        </div>

        <nav className="mt-10">
          <h3 className="text-sm text-[#1a1c2e]/45 mb-3 font-semibold uppercase tracking-widest">관련 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/chinese-vs-western-zodiac" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(20,23,43,0.03)', border: '1px solid rgba(20,23,43,0.06)' }}>
              <div className="text-[#1a1c2e]/72 font-medium">동양 12지와 서양 별자리</div>
              <div className="text-[#1a1c2e]/38 text-xs mt-1">두 전통이 시간을 세는 방식</div>
            </Link>
            <Link href="/blog/nasa-ophiuchus-13th-zodiac" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(20,23,43,0.03)', border: '1px solid rgba(20,23,43,0.06)' }}>
              <div className="text-[#1a1c2e]/72 font-medium">뱀주인자리와 황도 12궁</div>
              <div className="text-[#1a1c2e]/38 text-xs mt-1">세차운동이 달력을 흔드는 이유</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
