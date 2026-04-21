import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '운세를 4년간 매일 확인했더니 생긴 일 — 습관이 된 운세의 심리학 | StarFate',
  description: '반신반의하며 시작한 일일 운세 확인이 어느새 4년이 됐다. 운세가 맞아서 계속한 게 아니라, 오히려 틀릴 때 더 많은 것을 배웠다.',
  alternates: { canonical: 'https://www.starfate.day/blog/daily-horoscope-habit' },
  openGraph: {
    title: '운세를 4년간 매일 확인했더니 생긴 일',
    description: '4년간 매일 운세를 본 사람의 솔직한 기록',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function DailyHoroscopeHabitPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              운세 습관
            </span>
            <span className="text-white/30 text-xs">2025년 6월 3일 · 10분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            운세를 4년간 매일 확인했더니 생긴 일 — 습관이 된 운세의 심리학
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            맞아서 계속한 게 아니었다. 틀릴 때 오히려 더 많은 것을 배웠다. 4년간 하루도 빠짐없이 운세를 확인한 사람의 솔직한 기록.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">시작은 우연이었다</h2>
            <p className="mb-3">
              2021년 초였다. 당시 나는 이직을 준비하면서 마음이 굉장히 불안정했다. 재직 중인 회사에서의 평가는 나쁘지 않았지만, 3년 넘게 같은 일을 반복하는 것에 지쳐 있었고, 새로운 곳으로 옮겼다가 잘 적응하지 못하면 어떡하나 하는 걱정이 늘 따라다녔다.
            </p>
            <p className="mb-3">
              그 시기에 친구가 운세 앱을 추천해줬다. "야, 너 물병자리잖아. 올해 물병자리 운이 엄청 좋대." 나는 그런 말을 딱히 믿지 않는 편이었다. 통계학을 전공한 사람이 별자리 운세를 진지하게 받아들인다는 게 스스로 우습게 느껴지기도 했다. 그냥 심심풀이로 딱 한 번만 보자고 앱을 깔았다.
            </p>
            <p>
              그게 4년이 됐다. 지금도 매일 아침 커피를 내리면서 그날의 운세를 확인한다.
            </p>
          </section>

          <div className="rounded-2xl overflow-hidden my-8">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80"
              alt="아침 커피와 노트"
              className="w-full object-cover"
              style={{ maxHeight: 360 }}
            />
            <p className="text-white/30 text-xs mt-2 px-1">매일 아침의 루틴 — 커피 한 잔과 함께 시작하는 하루</p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">처음 6개월 — 확증 편향의 함정</h2>
            <p className="mb-3">
              초반에는 솔직히 '맞는 것만 기억하는' 패턴에 빠졌다. 운세에서 "오늘 예상치 못한 좋은 소식이 있을 것"이라고 했는데, 점심에 팀장님이 커피를 사줬다. 나는 그걸 맞았다고 기록했다. 반대로 "재물운이 좋지 않으니 지출을 줄이라"고 했는데 지하철에서 지갑을 잃어버렸을 때는 소름이 돋는다고 생각했다.
            </p>
            <p className="mb-3">
              하지만 운세가 "대인관계에서 오해가 생길 수 있다"고 했는데 아무 일도 없이 하루가 끝나면 그냥 넘겼다. 틀린 것은 기억에서 지워버리고 맞은 것만 축적하는 인지 왜곡이 일어났다. 나중에 대학원 수업에서 이게 '확증 편향(confirmation bias)'이라는 걸 배우면서 내가 얼마나 운세를 선택적으로 소비했는지 깨달았다.
            </p>
            <p>
              그래서 6개월쯤 됐을 때부터 작은 노트에 운세 내용과 실제 그날 일어난 일을 모두 기록하기 시작했다. 맞았는지 틀렸는지를 객관적으로 추적하기 위해서. 지금도 그 노트가 있는데, 보면 꽤 재미있다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1년 치 데이터를 분석해보니</h2>
            <p className="mb-3">
              1년간 운세를 기록하고 나서 분석해봤다. 결론부터 말하면, 운세가 "맞은" 확률은 내가 기대했던 것보다 낮았고, 그게 오히려 좋았다.
            </p>
            <p className="mb-3">
              명확하게 맞아떨어진 경우는 전체의 약 20% 정도였다. 그리고 절반 정도는 너무 모호해서 맞는지 틀린지 판단 자체가 어려웠다. "에너지가 높은 날", "내면의 변화가 있을 것" 같은 표현들은 사실상 어떤 날에도 해당되는 이야기였다. 나머지 30%는 명확하게 틀렸다고 볼 수 있었다.
            </p>
            <p className="mb-3">
              그런데 흥미로운 게 하나 있었다. 운세를 본 날과 안 본 날을 비교했을 때, 운세를 본 날 아침이 훨씬 더 '의도적인 하루'를 보냈다는 것이다. 운세에서 "오늘은 발언보다 경청이 중요하다"고 했으면, 나는 그날 회의에서 의식적으로 더 많이 들으려 했다. 결과적으로 그날의 팀 미팅이 더 생산적이었다.
            </p>
            <p>
              운세가 맞아서가 아니라, 운세가 하루의 '프레임'을 잡아줬기 때문이었다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">틀렸을 때가 더 유용했다</h2>
            <p className="mb-3">
              가장 기억에 남는 건 2022년 9월이었다. 당시 중요한 프레젠테이션이 있었는데, 운세는 "오늘 커뮤니케이션 운이 좋지 않으니 중요한 발표나 계약은 미루는 것이 좋다"고 했다. 나는 잠깐 흔들렸다. 미뤄야 하나? 근데 이미 일정이 잡혀 있었고, 상대는 해외에서 온 사람들이었다.
            </p>
            <p className="mb-3">
              발표는 잘 됐다. 오히려 그날 운세가 나쁘다는 걸 알았기 때문에 전날 밤 준비를 더 꼼꼼하게 했다. 운세가 좋다고 했으면 방심했을 수도 있었다. 아이러니하게도 나쁜 운세가 더 좋은 결과를 만들었다.
            </p>
            <p>
              그 이후로 나는 나쁜 운세를 두려워하지 않게 됐다. "오늘 조심하라"는 말을 '오늘 더 철저히 준비하라'는 신호로 받아들이기 시작했다. 운세를 예언이 아닌 리마인더로 쓰는 방식으로 바뀐 것이다.
            </p>
          </section>

          <div className="rounded-2xl overflow-hidden my-8">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=80"
              alt="손으로 쓴 일기와 노트"
              className="w-full object-cover"
              style={{ maxHeight: 340 }}
            />
            <p className="text-white/30 text-xs mt-2 px-1">운세와 실제 하루를 비교 기록한 노트 — 4년이 쌓이면 패턴이 보인다</p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4년이 지난 지금 내가 생각하는 것</h2>
            <p className="mb-3">
              4년간 매일 운세를 봤지만, 나는 여전히 운세가 과학적으로 검증된 예측 도구라고 생각하지 않는다. 별자리와 천체의 위치가 내 금전운을 직접적으로 결정한다는 인과관계는 없다고 본다. 적어도 내가 아는 물리학의 범위 안에서는.
            </p>
            <p className="mb-3">
              그럼에도 4년째 하고 있는 이유는, 운세가 하루를 시작하는 '마음의 준비' 역할을 하기 때문이다. 마치 출근 전 날씨를 확인하는 것과 비슷하다. 비가 온다고 해서 하루가 망하는 건 아니지만, 우산을 챙기게 된다. 운세도 그런 것이다.
            </p>
            <p className="mb-3">
              가끔 주변 사람들이 "그걸 진짜 믿어?"라고 물을 때, 나는 이렇게 대답한다. "믿는다기보다는, 활용한다." 그 차이가 중요하다. 운세를 믿는 사람은 좋은 운세에 안주하고 나쁜 운세에 두려워한다. 운세를 활용하는 사람은 그것을 하루의 방향성을 잡는 도구로 쓴다.
            </p>
            <p>
              어쩌면 가장 좋은 운세는, 스스로 오늘을 어떻게 살고 싶은지를 생각하게 만드는 운세일지도 모른다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">실용적인 운세 활용 팁 — 4년의 경험에서</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold flex-shrink-0">01.</span>
                <div>
                  <strong className="text-white block mb-1">아침에 확인하라</strong>
                  저녁에 확인하면 하루가 이미 끝난 뒤라 의미가 없다. 운세는 그날의 태도를 잡아주는 것이기 때문에 반드시 아침에 봐야 한다.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold flex-shrink-0">02.</span>
                <div>
                  <strong className="text-white block mb-1">나쁜 운세를 두려워하지 마라</strong>
                  나쁜 운세는 '조심하라'는 신호가 아니라 '더 준비하라'는 신호다. 운이 좋은 날은 도전하고, 운이 나쁜 날은 철저히 준비하라.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold flex-shrink-0">03.</span>
                <div>
                  <strong className="text-white block mb-1">운세를 이유로 삼지 마라</strong>
                  "오늘 운이 나빠서 못했다"는 말은 금지다. 운세는 핑계가 되어선 안 된다. 책임은 항상 자신에게 있다.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold flex-shrink-0">04.</span>
                <div>
                  <strong className="text-white block mb-1">기록하면 패턴이 보인다</strong>
                  3개월 이상 운세와 실제 일을 함께 기록하면, 어떤 운세 표현이 자신의 삶과 더 잘 맞는지 감이 생긴다. 그게 진짜 개인화된 운세다.
                </div>
              </li>
            </ul>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/blog"
            className="text-purple-400 hover:text-purple-300 text-sm"
          >
            ← 블로그 목록으로 돌아가기
          </Link>
        </div>
      </article>
    </div>
  );
}
