import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '수비학과 행운의 숫자 — 내 운명 숫자로 알아보는 운세 | StarFate',
  description: '수비학(Numerology)의 기초부터 생년월일로 계산하는 운명 숫자까지. 별자리 행운의 숫자와 수비학이 어떻게 연결되는지 완벽하게 설명합니다.',
  alternates: { canonical: '/blog/numerology-lucky-numbers' },
  openGraph: {
    title: '수비학과 행운의 숫자 — 내 운명 숫자로 알아보는 운세',
    description: '생년월일로 계산하는 운명 숫자부터 별자리 행운의 숫자 연결까지 완벽 가이드',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function NumerologyLuckyNumbersPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              운세 심화
            </span>
            <span className="text-white/30 text-xs">2025년 3월 22일 · 9분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            수비학과 행운의 숫자 — 내 운명 숫자로 알아보는 운세
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            숫자 하나에 삶 전체가 담긴다고 하면 믿어지시나요? 수비학은 수천 년간 숫자에서 우주의 패턴과 인간의 운명을 읽어온 고대 학문입니다. 내 생년월일에 숨겨진 운명 숫자를 찾아보세요.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">수비학(Numerology)이란?</h2>
            <p className="mb-3">
              수비학(數秘學, Numerology)은 숫자와 문자에 신비로운 의미와 에너지가 내재되어 있다는 믿음을 바탕으로, 숫자를 통해 사람의 성격과 운명, 미래를 해석하는 학문입니다. 그 역사는 기원전 6세기경 고대 그리스 철학자 피타고라스로 거슬러 올라갑니다.
            </p>
            <p className="mb-3">
              피타고라스는 "만물의 근원은 수(數)다"라고 주장했습니다. 그는 단순히 수학적 관점에서만이 아니라, 숫자 각각에 고유한 진동과 특성이 있다고 보았습니다. 1부터 9까지의 숫자가 우주의 모든 원리를 담고 있으며, 모든 수는 이 기본 숫자로 환원된다고 믿었습니다. 이 피타고라스 수비학이 현재 서양 수비학의 근간입니다.
            </p>
            <p className="mb-3">
              동양에서도 숫자에 의미를 부여하는 전통은 뿌리 깊습니다. 중국에서는 8이 발음이 '돈을 벌다'와 비슷하여 최고의 행운수로 여겨지며, 4는 '죽음'과 발음이 같아 불길한 숫자로 인식됩니다. 한국과 일본에서도 비슷한 믿음이 있어, 건물 층수에서 4층을 생략하는 경우가 많습니다.
            </p>
            <p>
              현대 수비학은 피타고라스 방식, 카발라(유대 신비주의) 방식, 카르데크 방식 등 여러 체계가 공존합니다. 그중 가장 널리 사용되는 것은 생년월일을 기반으로 운명 숫자(Life Path Number)를 계산하는 피타고라스 방식입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">운명 숫자(Life Path Number) 계산법</h2>
            <p className="mb-3">
              운명 숫자는 수비학에서 가장 중요한 숫자입니다. 마치 별자리의 태양 별자리처럼, 한 사람의 근본적인 성격과 인생 방향을 나타냅니다. 계산 방법은 생년월일의 모든 숫자를 더하여 한 자리 수(또는 마스터 넘버 11, 22, 33)가 나올 때까지 반복합니다.
            </p>

            <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-semibold mb-3">계산 예시 — 1990년 5월 23일생</h3>
              <ul className="space-y-2 text-white/70">
                <li>① 연도: 1+9+9+0 = <strong className="text-purple-300">19</strong> → 1+9 = <strong className="text-purple-300">10</strong> → 1+0 = <strong className="text-purple-300">1</strong></li>
                <li>② 월: 0+5 = <strong className="text-purple-300">5</strong></li>
                <li>③ 일: 2+3 = <strong className="text-purple-300">5</strong></li>
                <li>④ 합산: 1+5+5 = <strong className="text-yellow-300">11</strong> (마스터 넘버, 더 이상 줄이지 않음)</li>
              </ul>
              <p className="mt-3 text-white/50 text-xs">※ 11, 22, 33은 마스터 넘버로, 일반 숫자보다 강화된 에너지를 지닙니다.</p>
            </div>

            <p className="mb-3">
              한 번 더 예시를 들면, 1985년 8월 15일생의 경우: 연도(1+9+8+5=23→2+3=5) + 월(8) + 일(1+5=6) = 5+8+6 = 19 → 1+9 = 10 → 1+0 = 1이 됩니다. 이 사람의 운명 숫자는 1입니다.
            </p>
            <p>
              마스터 넘버(11, 22, 33)는 특별한 에너지와 사명을 가진 숫자입니다. 11은 직관과 영적 통찰, 22는 위대한 건축가의 숫자로 큰 꿈을 현실로 만드는 능력, 33은 최고의 치유자이자 스승의 숫자로 불립니다. 이 세 숫자는 더 이상 한 자리로 줄이지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1~9 운명 숫자별 성격과 운세</h2>
            <p className="mb-3">
              각 운명 숫자는 독특한 에너지와 특성을 지니고 있습니다. 자신의 운명 숫자를 찾아 그 의미를 탐구해보세요.
            </p>

            <div className="space-y-3">
              {[
                { num: '1', title: '리더의 숫자 — 독립과 개척', desc: '강한 의지와 리더십을 가진 개척자입니다. 혼자서도 잘 해내는 독립심이 강하고 야망이 넘칩니다. 직업운에서 특히 강하며, 새로운 사업을 시작하거나 조직을 이끄는 데 타고난 재능이 있습니다. 행운의 날은 1일, 10일, 19일, 28일이며, 빨간색과 금색이 행운색입니다.' },
                { num: '2', title: '협력의 숫자 — 조화와 외교', desc: '뛰어난 공감 능력과 외교적 감각을 가진 평화 중재자입니다. 팀워크와 파트너십에서 빛을 발하며, 연인이나 친구에게 세심한 배려를 보입니다. 연애운이 강하며, 파트너와의 조화로운 관계에서 행복을 찾습니다. 행운색은 오렌지와 크림색입니다.' },
                { num: '3', title: '창의의 숫자 — 표현과 소통', desc: '예술적 재능과 뛰어난 소통 능력을 가진 창의적인 영혼입니다. 글쓰기, 말하기, 예술 등 표현하는 모든 분야에서 탁월합니다. 밝고 유머감각이 넘쳐 주변에 사람이 모이지만, 집중력이 흩어질 수 있습니다. 행운색은 노랑과 라임 그린입니다.' },
                { num: '4', title: '안정의 숫자 — 근면과 신뢰', desc: '철저하고 성실한 일꾼으로 신뢰의 상징입니다. 질서와 규율을 사랑하며, 꾸준한 노력으로 탄탄한 기반을 쌓습니다. 금전운에서 꾸준한 저축과 관리 능력이 두드러집니다. 단, 변화에 저항할 수 있으니 유연성을 키우세요. 행운색은 녹색과 갈색입니다.' },
                { num: '5', title: '자유의 숫자 — 변화와 모험', desc: '자유와 모험을 사랑하는 탐험가입니다. 다양한 경험을 통해 성장하며, 변화를 두려워하지 않습니다. 여행, 여러 직업 경험, 다양한 인간관계를 즐깁니다. 단, 한곳에 정착하기 어려워 재정적 불안정이 생길 수 있습니다. 행운색은 하늘색과 은색입니다.' },
                { num: '6', title: '사랑의 숫자 — 책임과 돌봄', desc: '따뜻한 마음으로 가족과 공동체를 돌보는 수호자입니다. 책임감이 강하고 미적 감각이 뛰어납니다. 가정운과 연애운이 특히 강하며, 인테리어, 요리, 의료, 교육 분야에 적합합니다. 지나친 걱정과 완벽주의가 스트레스로 이어질 수 있습니다. 행운색은 분홍과 인디고입니다.' },
                { num: '7', title: '지혜의 숫자 — 분석과 영성', desc: '심오한 사유와 분석적 사고를 가진 철학자입니다. 깊은 내면 세계를 가지고 있으며, 진실과 지식을 끊임없이 탐구합니다. 연구, 과학, 철학, 영성 분야에서 탁월합니다. 고독을 즐기지만 고립되지 않도록 균형을 유지하는 것이 중요합니다. 행운색은 보라와 회색입니다.' },
                { num: '8', title: '성공의 숫자 — 물질과 권력', desc: '뛰어난 사업 감각과 리더십으로 큰 성공을 이루는 성취자입니다. 금전운과 사업운이 가장 강한 숫자로, 큰 목표를 현실로 만드는 실행력이 있습니다. 권력욕이 강해질 수 있으니, 윤리적인 방향으로 에너지를 사용해야 합니다. 행운색은 검정과 보라입니다.' },
                { num: '9', title: '완성의 숫자 — 봉사와 인도주의', desc: '인류를 사랑하는 이타적인 이상주의자입니다. 깊은 지혜와 넓은 시야를 가지고 있으며, 사회에 기여하고자 하는 강한 사명감이 있습니다. 예술, 사회활동, 상담 분야에서 빛납니다. 자신의 필요를 챙기는 것도 잊지 마세요. 행운색은 금색과 빨간색입니다.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-purple-300">{num}</span>
                    <strong className="text-white text-sm">{title}</strong>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">별자리와 행운의 숫자의 연관성</h2>
            <p className="mb-3">
              수비학과 점성술은 서로 다른 체계이지만, 놀라운 조화를 이룹니다. 각 별자리는 고유의 행운 숫자를 가지고 있으며, 이는 지배 행성의 수비학적 특성에서 비롯됩니다.
            </p>

            <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-semibold mb-3">별자리별 행운의 숫자</h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
                <div>♈ 양자리 — 1, 9</div>
                <div>♉ 황소자리 — 2, 6</div>
                <div>♊ 쌍둥이자리 — 5, 7</div>
                <div>♋ 게자리 — 2, 7</div>
                <div>♌ 사자자리 — 1, 4</div>
                <div>♍ 처녀자리 — 3, 5</div>
                <div>♎ 천칭자리 — 6, 9</div>
                <div>♏ 전갈자리 — 8, 11</div>
                <div>♐ 사수자리 — 3, 7</div>
                <div>♑ 염소자리 — 4, 8</div>
                <div>♒ 물병자리 — 4, 11</div>
                <div>♓ 물고기자리 — 7, 22</div>
              </div>
            </div>

            <p className="mb-3">
              흥미로운 점은, 이 행운의 숫자들이 각 별자리 지배 행성의 수비학적 숫자와 대응된다는 것입니다. 예를 들어, 화성(Mars)은 수비학에서 9와 연결되며, 화성의 지배를 받는 양자리의 행운 숫자에도 9가 포함됩니다. 금성은 6과 연결되어 금성 지배 별자리인 황소자리와 천칭자리의 행운 숫자에 각각 반영됩니다.
            </p>
            <p>
              자신의 태양 별자리 행운 숫자와 운명 숫자가 일치하거나 조화를 이룬다면, 그 숫자는 특히 강력한 개인 행운 숫자가 됩니다. 예를 들어, 사수자리(행운 숫자 3, 7)이면서 운명 숫자가 3인 사람이라면, 3은 매우 강력한 개인 행운 숫자입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">집 번지, 전화번호, 이름에서 보는 수비학</h2>
            <p className="mb-3">
              수비학은 생년월일에만 국한되지 않습니다. 우리 삶 곳곳의 숫자들도 수비학적으로 해석할 수 있습니다. 가장 실용적으로 활용되는 영역은 집 번지, 전화번호, 그리고 이름 수비학입니다.
            </p>
            <p className="mb-3">
              <strong className="text-white">집 번지 수비학:</strong> 집 번지의 숫자를 모두 더해서 한 자리 수로 줄입니다. 예를 들어 번지가 123이라면 1+2+3=6이 됩니다. 6번 집은 사랑, 가족, 아름다움의 에너지를 가지며 가정을 이루기에 이상적인 공간입니다. 1번 집은 독립과 개척에 좋으며, 8번 집은 사업가나 성공을 꿈꾸는 사람에게 적합합니다. 반면 4번 집은 안정적이지만 변화가 적을 수 있으며, 일부 동아시아 문화에서 기피됩니다.
            </p>
            <p className="mb-3">
              <strong className="text-white">이름 수비학 (표현 숫자):</strong> 알파벳 각 글자에 1~9의 숫자를 대응시켜(A=1, B=2, ... I=9, J=1 순환) 이름의 모든 숫자를 더합니다. 한국 이름은 한글의 자음과 모음에 숫자를 배정하는 방식을 사용합니다. 이 '표현 숫자(Expression Number)'는 그 사람이 타고난 재능과 잠재력을 나타냅니다.
            </p>
            <p>
              <strong className="text-white">전화번호와 자동차 번호판:</strong> 일상의 숫자들도 에너지를 가집니다. 자신의 운명 숫자와 조화로운 숫자가 많이 포함된 전화번호를 선택하면 그 에너지를 강화할 수 있다고 수비학자들은 말합니다. 중요한 계약이나 미팅의 날짜도 수비학적으로 좋은 날을 선택하는 것이 전통적인 관행입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2026년의 수비학적 의미 — 보편 연도 수 1</h2>
            <p className="mb-3">
              수비학에서는 특정 연도의 에너지를 '보편 연도 수(Universal Year Number)'로 파악합니다. 2026년의 보편 연도 수를 계산해보면: 2+0+2+6 = 10, 그리고 1+0 = <strong className="text-purple-300">1</strong>입니다.
            </p>
            <p className="mb-3">
              보편 연도 수 1은 수비학에서 가장 강력한 시작의 에너지를 의미합니다. 1은 태양, 리더십, 새로운 시작, 독립의 숫자입니다. 9년 주기 중 첫 해에 해당하는 2026년은, 이전 9년 주기의 완성(2025년, 보편 연도 수 9) 이후 완전히 새로운 페이지가 열리는 해입니다.
            </p>
            <p className="mb-3">
              2026년에는 새로운 시작과 도전에 우주적 에너지가 집중됩니다. 미루어 왔던 사업 아이디어, 새로운 관계, 이직, 이사 등 인생의 중요한 첫걸음을 내딛기에 최적의 해입니다. 특히 운명 숫자가 1, 10, 19인 사람들에게는 더욱 강력한 한 해가 될 것입니다.
            </p>
            <p>
              개인 연도 수는 보편 연도 수(1)와 자신의 생일(월+일)을 합산하여 구합니다. 예를 들어, 5월 7일생이라면 1(보편 연도 수)+5+7=13→1+3=4가 되어, 2026년 개인 연도 수는 4입니다. 이는 안정을 다지고 기초를 강화하는 한 해를 예고합니다. 자신의 개인 연도 수를 찾아 2026년을 더 지혜롭게 준비해보세요.
            </p>
          </section>

        </div>

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">나의 별자리 운세가 궁금하다면?</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}
          >
            🔮 오늘의 운세 무료로 보기 →
          </Link>
        </div>

        <nav className="mt-10">
          <h3 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">관련 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/what-is-astrology" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">✨ 점성술이란 무엇인가?</div>
              <div className="text-white/30 text-xs mt-1">서양 별자리의 역사와 기초 가이드</div>
            </Link>
            <Link href="/blog/zodiac-career-guide" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">💼 별자리별 직업 적성 가이드</div>
              <div className="text-white/30 text-xs mt-1">내 별자리에 맞는 최고의 직업은?</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
