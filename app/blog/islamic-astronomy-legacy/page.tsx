import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '마라가 천문대에서 코페르니쿠스까지 — 이슬람 천문학이 유럽에 넘긴 것 | StarFate',
  description: '지혜의 집의 번역, 알콰리즈미, 1259년 마라가 천문대와 투시 부부, 울루그베그의 사마르칸트 관측, 톨레도 번역과 알폰시안 표까지. 유럽 천문학이 물려받은 계산 기술의 계보.',
  alternates: { canonical: 'https://starfate.day/blog/islamic-astronomy-legacy' },
  openGraph: {
    title: '마라가 천문대에서 코페르니쿠스까지',
    description: '천문학의 계산 기술은 어디에서 왔나 — 번역, 관측소, 그리고 별 이름의 이동 경로.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function IslamicAstronomyLegacyPage() {
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
            <span className="text-white/30 text-xs">2026년 11월 19일 · 12분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            마라가 천문대에서 코페르니쿠스까지 — 이슬람 천문학이 유럽에 넘긴 것
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            오늘날 별자리 앱의 좌표 체계와 망원경의 각도 표기에는 중세 이슬람 세계의 계산 기술이 겹겹이 쌓여 있습니다. 8세기 바그다드의 번역 사업에서 15세기 사마르칸트의 관측소까지, 그 계보를 따라가 봅니다.
          </p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1543722530-d2c3201371e6?w=800&auto=format&fit=crop&q=80"
          alt="고대 천문 관측 도구"
          className="rounded-2xl w-full object-cover my-8"
          style={{ maxHeight: '400px' }}
        />

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">번역이 먼저였다 — 9세기 바그다드</h2>
            <p className="mb-3">
              아바스 왕조의 칼리프 알마문은 9세기 초 바그다드에 대규모 번역 사업을 두었습니다. 흔히 &lsquo;지혜의 집&rsquo;이라 불리는 이 기관에서 그리스어, 페르시아어, 인도어 문헌이 아랍어로 옮겨졌습니다. 프톨레마이오스의 <em>알마게스트</em>도 이때 아랍어로 번역되었고, 제목은 <em>알마지스티</em>로 줄어 불렸습니다.
            </p>
            <p className="mb-3">
              번역은 옮기는 일에서 끝나지 않았습니다. 알콰리즈미는 인도와 그리스의 계산법을 정리해 산술과 대수학을 체계화했습니다. 그의 이름이 라틴어로 변형된 &lsquo;알고리즘&rsquo;과 그의 저서 제목에서 나온 &lsquo;대수(algebra)&rsquo;는 오늘날까지 쓰입니다. 천문 계산에 필요한 삼각법과 표 계산도 이 시기에 크게 정교해졌습니다.
            </p>
            <p className="mb-3">
              알바타니는 9세기 말 시리아에서 일식과 월식, 태양년 길이를 정밀하게 관측했습니다. 그의 값은 이후 유럽 천문학이 오랫동안 참조한 자료였습니다. 관측과 계산, 그리고 기록을 남기는 습관이 함께 발달한 시기였습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1259년 마라가 — 관측소라는 조직</h2>
            <p className="mb-3">
              1259년, 몽골의 훌라구 칸은 지금의 이란 북서부 마라가에 대형 천문대를 세웠고 나시르 앗딘 투시가 이를 이끌었습니다. 이 관측소는 개인의 취미가 아니라 국가가 운영하는 연구 시설에 가까웠습니다. 상시 관측 인력, 기기 제작자, 계산 담당자가 함께 있었고, 관측 결과는 <em>일한조 천문표</em>로 정리되었습니다.
            </p>
            <p className="mb-3">
              투시의 이름이 오늘날까지 남은 이유는 &lsquo;투시 부부(Tusi couple)&rsquo;이라는 기하 장치 때문입니다. 작은 원이 큰 원 안에서 굴러가면서 지름 위의 한 점이 직선을 그리게 만드는 구성입니다. 회전하는 원의 조합만으로 직선 운동을 만들어 낼 수 있다는 이 발상은, 등속 원운동만으로 천체 운동을 설명하려던 당시의 요구에서 나왔습니다.
            </p>
            <p className="mb-3">
              이 장치는 단순한 수학 놀이가 아니었습니다. 프톨레마이오스 체계의 불편한 부분을 고치려는 시도였고, 그 결과물은 이후 여러 세대의 천문학자에게 전해졌습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">사마르칸트의 왕 — 울루그베그</h2>
            <p className="mb-3">
              15세기 초 사마르칸트에서는 티무르 제국의 왕자 울루그베그가 직접 천문학을 연구했습니다. 그는 1420년대에 거대한 사분의(높이 약 40미터로 전해지는 벽면 관측기)를 갖춘 관측소를 세우고, 별의 위치를 다시 측정했습니다.
            </p>
            <p className="mb-3">
              그 결과로 만들어진 <em>술탄의 천문표</em>에는 약 1,000개 별의 위치가 담겼고, 정밀도는 당시 기준으로 매우 높았습니다. 유럽에서는 이 표가 오래도록 함께 인쇄되며 쓰였습니다. 왕이 직접 관측에 참여했다는 사실 자체가, 천문학이 통치의 정당성과 결부되어 있던 시대의 성격을 보여줍니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">톨레도에서 유럽으로 — 알폰시안 표</h2>
            <p className="mb-3">
              12세기 스페인의 톨레도는 기독교, 유대교, 이슬람 문화가 겹치는 도시였고, 여기서 대규모 번역이 이루어졌습니다. 제라르도는 12세기 후반에 <em>알마게스트</em>를 아랍어에서 라틴어로 옮겼습니다. 별 이름의 아랍어 흔적은 대부분 이 경로를 거쳐 유럽에 남았습니다.
            </p>
            <p className="mb-3">
              카스티야의 알폰소 10세는 13세기 후반에 천문표를 새로 편찬하게 했습니다. 이른바 알폰시안 표로, 행성의 위치를 계산하는 실용적인 도구였습니다. 코페르니쿠스도 이 표를 참조했다는 기록이 남아 있습니다.
            </p>
            <p className="mb-3">
              여기서 흔히 오해가 생깁니다. 이슬람 천문학이 유럽에 넘긴 것은 &lsquo;점성술&rsquo;만이 아닙니다. 관측 기구, 삼각법, 표 계산법, 그리고 관측소라는 조직 형태가 함께 넘어갔습니다. 점성술과 천문학이 아직 분리되지 않은 시대였으므로, 두 분야는 같은 책과 같은 사람을 통해 이동했습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">코페르니쿠스는 무엇을 이어받았나</h2>
            <p className="mb-3">
              1543년 <em>천구의 회전에 관하여</em>에서 코페르니쿠스는 지구가 움직인다는 결론을 내놓았습니다. 이 결론은 관측 정밀도가 아니라 계산 구조의 단순함에서 나왔습니다. 행성의 역행 운동을 설명하기 위해 프톨레마이오스 체계가 동원해야 했던 복잡한 장치들을 줄일 수 있었기 때문입니다.
            </p>
            <p className="mb-3">
              흥미롭게도 코페르니쿠스가 사용한 기하 장치 가운데 일부는 마라가 학파의 구성과 닮아 있습니다. 1950년대 이후 여러 연구자가 이 유사성을 지적했고, 지금도 논쟁이 이어집니다. 직접적인 필사본 전승이 확인된 것은 아니므로, 단정하기보다 &lsquo;같은 문제를 풀던 사람들이 비슷한 해법에 도달했다&rsquo; 정도로 읽는 것이 안전합니다.
            </p>
            <p className="mb-3">
              분명한 것은 방법의 연속성입니다. 관측하고, 표를 만들고, 표의 오차를 줄이려고 기하를 고치는 과정이 지중해를 사이에 두고 이어졌습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">하늘을 가리키는 말들</h2>
            <p className="mb-3">
              우리가 천문학에서 쓰는 단어에도 흔적이 남아 있습니다. 천정(zenith)은 아랍어로 &lsquo;머리 위의 방향&rsquo;을 뜻하는 말에서, 방위각(azimuth)은 &lsquo;방향&rsquo;을 뜻하는 말에서 왔습니다. 천저(nadir)는 그 반대 방향입니다. 연감(almanac)도 아랍어 어원을 가집니다.
            </p>
            <p className="mb-3">
              별자리 이름이 궁금하다면 이름의 어원을 따로 정리한 글도 있습니다. 하늘의 좌표가 궁금하다면, 지금 보는 별자리 앱에 찍힌 이름들이 어디서 왔는지 한 번쯤 확인해 보시길 권합니다. 그 이름들은 대개 바그다드와 톨레도와 사마르칸트를 거쳐 왔습니다.
            </p>
          </section>

        </div>

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">오늘의 별자리 흐름 보기</p>
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
              <div className="text-white/30 text-xs mt-1">시리우스, 덴데라 조디악, 케플러</div>
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
