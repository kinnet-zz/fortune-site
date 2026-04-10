import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026년 별자리별 연간 운세 총정리 | StarFate',
  description: '2026년 말의 해를 맞이하는 12별자리의 연간 운세를 총정리합니다. 사랑, 직업, 금전, 건강 각 분야별 2026년 흐름을 예측합니다.',
  alternates: { canonical: '/blog/2026-yearly-horoscope' },
  openGraph: {
    title: '2026년 별자리별 연간 운세 총정리',
    description: '12별자리의 2026년 사랑·직업·금전·건강 연간 운세를 총정리합니다',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function YearlyHoroscope2026Page() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              연간 운세
            </span>
            <span className="text-white/30 text-xs">2025년 12월 30일 · 12분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            2026년 별자리별 연간 운세 총정리
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            2026년은 목성의 게자리 진입과 토성의 물고기자리 완주 등 굵직한 행성 이동이 이어지는 역동적인 한 해입니다. 12별자리 각각에게 2026년이 어떤 의미를 지니는지, 원소별로 나누어 살펴봅니다.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2026년의 천문학적 특징</h2>
            <p className="mb-3">
              점성술적으로 2026년을 특별하게 만드는 가장 큰 사건은 <strong className="text-white">목성(Jupiter)의 게자리(Cancer) 입성</strong>입니다. 목성은 약 12년 주기로 황도대를 한 바퀴 돌며, 2026년 6월경 쌍둥이자리를 떠나 게자리로 이동합니다. 목성은 확장, 성장, 행운의 행성으로, 게자리에 머무는 약 1년간 가정, 감정, 내면 성장의 주제가 전체 에너지를 지배합니다.
            </p>
            <p className="mb-3">
              <strong className="text-white">토성(Saturn)은 물고기자리에서 양자리로 이동</strong>하는 전환점을 맞습니다. 2023년부터 물고기자리에 머물며 영적 성장과 경계 설정을 테마로 해왔던 토성이 2026년에 양자리에 발을 내딛습니다. 이는 30년 주기의 새로운 장이 시작됨을 의미하며, 개인과 집단적 의지, 자기 정체성에 대한 질문을 제기합니다.
            </p>
            <p className="mb-3">
              <strong className="text-white">천왕성(Uranus)은 황소자리 후반부</strong>에 머물며 금융, 가치, 물질 세계의 급격한 변화를 계속 일으킵니다. 기술과 전통 경제의 충돌, 새로운 가치 패러다임의 등장이 지속됩니다. 2026년은 이 에너지가 최고조에 달하는 시기 중 하나입니다.
            </p>
            <p>
              또한 2026년에는 두 차례의 일식과 네 차례의 월식이 예정되어 있어, 각각의 발생 별자리에 따라 관련 별자리들에게 중요한 전환점과 종결, 새로운 시작이 찾아올 것입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">불 원소 별자리의 2026년 — 양자리 · 사자자리 · 사수자리</h2>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,100,50,0.08)', border: '1px solid rgba(255,100,50,0.2)' }}>
                <h3 className="text-red-300 font-bold mb-2">♈ 양자리 (3월 21일 ~ 4월 19일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  2026년 하반기, 토성이 양자리에 진입하면서 양자리에게는 새로운 책임과 도전의 시대가 열립니다. 이는 단기적으로는 부담스럽게 느껴질 수 있지만, 장기적으로는 진정한 성숙과 성취의 기반을 다지는 과정입니다. <strong className="text-white">직업운:</strong> 상반기에 새로운 프로젝트나 직책을 맡을 기회. <strong className="text-white">연애운:</strong> 진지한 관계로의 발전을 촉구하는 에너지. <strong className="text-white">금전운:</strong> 충동적 지출을 피하고 장기 투자에 집중할 시기.
                </p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,100,50,0.08)', border: '1px solid rgba(255,100,50,0.2)' }}>
                <h3 className="text-orange-300 font-bold mb-2">♌ 사자자리 (7월 23일 ~ 8월 22일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  목성이 게자리로 이동하면서 사자자리의 12번째 하우스(은퇴, 영적 성장, 숨겨진 내면)에 영향을 줍니다. 2026년은 내면을 정리하고 영적 충전을 하는 중요한 준비의 해입니다. <strong className="text-white">직업운:</strong> 무대 뒤에서 착실히 준비하는 시기. 2027년의 큰 성공을 위한 토대 구축. <strong className="text-white">연애운:</strong> 깊은 내면의 연결을 원하는 시기로, 표면적인 화려함보다 진정성 있는 관계에 집중. <strong className="text-white">건강운:</strong> 충분한 휴식과 내면의 치유를 소홀히 하지 말 것.
                </p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,100,50,0.08)', border: '1px solid rgba(255,100,50,0.2)' }}>
                <h3 className="text-yellow-300 font-bold mb-2">♐ 사수자리 (11월 22일 ~ 12월 21일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  목성이 게자리에 있는 동안 사수자리의 8번째 하우스(변환, 공동 자원, 심층 연구)를 활성화합니다. 파트너십을 통한 경제적 성장과 깊은 내면적 변화가 두드러집니다. <strong className="text-white">직업운:</strong> 공동 프로젝트나 투자 기회를 적극 활용할 것. <strong className="text-white">연애운:</strong> 기존 관계가 더 깊어지는 시기. 진지한 결합의 가능성. <strong className="text-white">금전운:</strong> 공동 자산 관리나 상속, 투자 등 타인의 돈과 관련된 이슈가 부각.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">땅 원소 별자리의 2026년 — 황소자리 · 처녀자리 · 염소자리</h2>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(50,200,100,0.08)', border: '1px solid rgba(50,200,100,0.2)' }}>
                <h3 className="text-green-300 font-bold mb-2">♉ 황소자리 (4월 20일 ~ 5월 20일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  천왕성이 황소자리에서 마지막 여정을 보내는 2026년, 황소자리는 정체성과 가치관에 있어 가장 큰 변화의 해를 맞이합니다. 예상치 못한 변화가 찾아오더라도 유연하게 받아들이는 것이 핵심. <strong className="text-white">직업운:</strong> 창의적이고 혁신적인 아이디어가 빛을 발하는 시기. <strong className="text-white">금전운:</strong> 새로운 수입원의 가능성과 기존 자산의 재평가. <strong className="text-white">건강운:</strong> 신체적 변화에 주의를 기울이고 정기 검진 권장.
                </p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(50,200,100,0.08)', border: '1px solid rgba(50,200,100,0.2)' }}>
                <h3 className="text-emerald-300 font-bold mb-2">♍ 처녀자리 (8월 23일 ~ 9월 22일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  목성이 게자리에 있을 때 처녀자리의 11번째 하우스(우정, 목표, 사회적 연결)를 자극합니다. 사회적 네트워크의 확장과 그룹 활동을 통한 성장이 두드러집니다. <strong className="text-white">직업운:</strong> 인맥과 팀워크를 통한 기회 창출. SNS와 커뮤니티 활동 확대 권장. <strong className="text-white">연애운:</strong> 친구로 시작하는 로맨스의 가능성. 기존 관계에서는 공통의 목표와 비전 공유가 중요. <strong className="text-white">금전운:</strong> 그룹 투자나 협력 사업에서 유리한 흐름.
                </p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(50,200,100,0.08)', border: '1px solid rgba(50,200,100,0.2)' }}>
                <h3 className="text-lime-300 font-bold mb-2">♑ 염소자리 (12월 22일 ~ 1월 19일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  2026년 목성은 염소자리의 7번째 하우스(파트너십, 대인관계)를 통과합니다. 사업 파트너, 연인, 중요한 타인과의 관계가 풍요로워지는 최고의 인연의 해입니다. <strong className="text-white">연애운:</strong> 2026년 최고의 연애운을 가진 별자리 중 하나. 이미 관계 중이라면 결혼이나 공식화의 흐름. <strong className="text-white">직업운:</strong> 파트너십이나 계약을 통한 큰 성과. <strong className="text-white">금전운:</strong> 안정적인 성장 흐름이 지속.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">공기 원소 별자리의 2026년 — 쌍둥이자리 · 천칭자리 · 물병자리</h2>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(100,180,255,0.08)', border: '1px solid rgba(100,180,255,0.2)' }}>
                <h3 className="text-sky-300 font-bold mb-2">♊ 쌍둥이자리 (5월 21일 ~ 6월 21일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  상반기까지 목성이 쌍둥이자리에 머물며 풍요로운 에너지를 선사합니다. 2026년 전반기는 그 절정으로, 지식 확장, 소통, 여행, 새로운 기회가 쏟아집니다. 목성이 게자리로 이동하는 6월 이후에는 가정과 내면 성찰로 에너지가 전환. <strong className="text-white">직업운:</strong> 상반기에 핵심 기회를 적극 잡을 것. 글쓰기, 미디어, 교육 분야 특히 유리. <strong className="text-white">금전운:</strong> 상반기 높은 수입 가능성.
                </p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(100,180,255,0.08)', border: '1px solid rgba(100,180,255,0.2)' }}>
                <h3 className="text-blue-300 font-bold mb-2">♎ 천칭자리 (9월 23일 ~ 10월 23일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  목성이 게자리에 있을 때 천칭자리의 10번째 하우스(직업, 사회적 지위, 명성)에 영향을 미칩니다. 커리어의 정점을 경험할 수 있는 황금의 해. <strong className="text-white">직업운:</strong> 승진, 인정, 대중적 성공의 기회. 리더십 포지션을 맡을 가능성. <strong className="text-white">연애운:</strong> 커리어에 집중하다 보니 연애에 소홀할 수 있으나, 의식적으로 균형을 맞추면 사회적 모임을 통한 인연 가능성. <strong className="text-white">금전운:</strong> 커리어 성공에 따른 금전적 풍요.
                </p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(100,180,255,0.08)', border: '1px solid rgba(100,180,255,0.2)' }}>
                <h3 className="text-violet-300 font-bold mb-2">♒ 물병자리 (1월 20일 ~ 2월 18일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  목성이 게자리를 지나며 물병자리의 6번째 하우스(건강, 일상, 서비스)를 활성화합니다. 건강 관리와 일상적 루틴의 개선이 삶 전체의 질을 높이는 해입니다. <strong className="text-white">건강운:</strong> 건강 루틴 확립, 운동 습관 형성에 최적의 해. <strong className="text-white">직업운:</strong> 전문 기술을 연마하고 실무 능력을 인정받는 시기. <strong className="text-white">연애운:</strong> 함께 성장하는 파트너와의 관계가 심화.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">물 원소 별자리의 2026년 — 게자리 · 전갈자리 · 물고기자리</h2>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(50,150,255,0.08)', border: '1px solid rgba(50,150,255,0.2)' }}>
                <h3 className="text-cyan-300 font-bold mb-2">♋ 게자리 (6월 22일 ~ 7월 22일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  2026년의 가장 큰 승자! 목성이 6월부터 게자리로 직접 입성하며 약 1년간 최고의 행운이 찾아옵니다. 자신감, 기회, 성장이 모든 분야에서 넘칩니다. <strong className="text-white">연애운:</strong> 2026년 12별자리 최고의 연애운. 솔로는 특별한 인연을, 커플은 깊어지는 사랑을 경험. <strong className="text-white">직업운:</strong> 새로운 시작과 확장의 절호의 기회. <strong className="text-white">금전운:</strong> 기대 이상의 수입과 기회. 과도한 낙관을 경계하되 적극적으로 움직일 것.
                </p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(50,150,255,0.08)', border: '1px solid rgba(50,150,255,0.2)' }}>
                <h3 className="text-indigo-300 font-bold mb-2">♏ 전갈자리 (10월 24일 ~ 11월 21일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  목성이 게자리를 통과하며 전갈자리의 9번째 하우스(철학, 여행, 고등 교육, 영적 탐구)를 풍요롭게 만듭니다. 지적 호기심이 폭발하고 해외나 새로운 문화와의 연결이 인생을 넓혀주는 해입니다. <strong className="text-white">직업운:</strong> 해외 비즈니스, 출판, 교육, 법률 분야에서 기회. <strong className="text-white">연애운:</strong> 다른 배경이나 문화를 가진 파트너와의 인연. <strong className="text-white">금전운:</strong> 해외 투자나 글로벌 시장에서 기회.
                </p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(50,150,255,0.08)', border: '1px solid rgba(50,150,255,0.2)' }}>
                <h3 className="text-teal-300 font-bold mb-2">♓ 물고기자리 (2월 19일 ~ 3월 20일)</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-2">
                  토성이 물고기자리를 떠나 양자리로 이동하는 2026년은 물고기자리에게 오랜 시험이 끝나는 해방의 해입니다. 2023년부터 이어온 토성의 엄격한 훈련이 마무리되며, 쌓아온 노력의 결실이 나타납니다. <strong className="text-white">직업운:</strong> 그간의 성실함이 인정받는 해. 중요한 성취와 완성의 시기. <strong className="text-white">연애운:</strong> 영적·감정적 연결을 중시하는 깊은 사랑. <strong className="text-white">금전운:</strong> 안정적인 회복과 꾸준한 성장.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2026년 모든 별자리를 위한 공통 조언</h2>
            <p className="mb-3">
              2026년의 보편 연도 수는 1(2+0+2+6=10=1)로, 수비학적으로 새로운 시작과 개척의 에너지를 가집니다. 이는 별자리를 불문하고 2026년이 과거의 패턴을 벗어나 새로운 방향으로 나아갈 최적의 시기임을 의미합니다.
            </p>
            <ul className="space-y-2 pl-4 list-disc">
              <li><strong className="text-white">목성의 게자리 이동(6월)을 주목하라:</strong> 이 시점이 2026년의 에너지 전환점입니다. 상반기와 하반기의 운세 흐름이 달라집니다.</li>
              <li><strong className="text-white">가정과 감정의 주제를 외면하지 마라:</strong> 게자리 목성은 가족, 정서적 안정, 내면 치유에 에너지를 집중합니다. 이를 통해 외적 성공의 토대가 마련됩니다.</li>
              <li><strong className="text-white">토성 양자리 이동에 준비하라:</strong> 토성의 양자리 입성은 새로운 책임의 시대를 예고합니다. 무엇을 진정으로 원하는지 명확히 하고, 그 방향으로 성실히 나아갈 준비를 하세요.</li>
              <li><strong className="text-white">일식과 월식의 날짜를 파악하라:</strong> 식(蝕)이 발생하는 별자리와 관련된 사람들에게는 특히 중요한 전환점이 됩니다. 미리 파악하여 대비하면 변화의 에너지를 긍정적으로 활용할 수 있습니다.</li>
            </ul>
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
            <Link href="/blog/zodiac-career-guide" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">💼 별자리별 직업 적성 가이드</div>
              <div className="text-white/30 text-xs mt-1">내 별자리에 맞는 최고의 직업은?</div>
            </Link>
            <Link href="/blog/zodiac-compatibility-guide" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">💞 12별자리 궁합 완벽 분석</div>
              <div className="text-white/30 text-xs mt-1">나와 가장 잘 맞는 별자리는?</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
