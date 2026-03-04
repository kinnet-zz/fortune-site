const ZODIAC_SIGNS = [
  { sign: '양자리', emoji: '♈', period: '3/21~4/19', trait: '용감하고 활동적인' },
  { sign: '황소자리', emoji: '♉', period: '4/20~5/20', trait: '안정적이고 신뢰감 있는' },
  { sign: '쌍둥이자리', emoji: '♊', period: '5/21~6/21', trait: '호기심 많고 재치 있는' },
  { sign: '게자리', emoji: '♋', period: '6/22~7/22', trait: '감성적이고 가정적인' },
  { sign: '사자자리', emoji: '♌', period: '7/23~8/22', trait: '당당하고 카리스마 있는' },
  { sign: '처녀자리', emoji: '♍', period: '8/23~9/22', trait: '꼼꼼하고 분석적인' },
  { sign: '천칭자리', emoji: '♎', period: '9/23~10/23', trait: '균형 잡히고 공정한' },
  { sign: '전갈자리', emoji: '♏', period: '10/24~11/22', trait: '직관적이고 집중력 강한' },
  { sign: '사수자리', emoji: '♐', period: '11/23~12/21', trait: '낙관적이고 모험을 즐기는' },
  { sign: '염소자리', emoji: '♑', period: '12/22~1/19', trait: '성실하고 목표 지향적인' },
  { sign: '물병자리', emoji: '♒', period: '1/20~2/18', trait: '독창적이고 인도주의적인' },
  { sign: '물고기자리', emoji: '♓', period: '2/19~3/20', trait: '예민하고 상상력 풍부한' },
];

const HOW_TO_STEPS = [
  { step: '01', title: '성별 선택', desc: '남자 또는 여자를 선택하세요. 성별에 따라 운세 표현이 달라집니다.' },
  { step: '02', title: '생년월일 입력', desc: '정확한 생년월일을 입력하면 별자리와 띠가 자동으로 계산됩니다.' },
  { step: '03', title: '운세 확인', desc: 'AI가 오늘의 종합운, 연애운, 금전운, 직업운을 분석해 드립니다.' },
];

export default function InfoSection() {
  return (
    <>
      {/* 이용 방법 섹션 */}
      <section
        className="w-full max-w-2xl mx-auto px-4 mt-16"
        aria-labelledby="how-to-heading"
      >
        <h2
          id="how-to-heading"
          className="text-center text-white/50 text-xs tracking-widest uppercase font-medium mb-6"
        >
          이용 방법
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {HOW_TO_STEPS.map(({ step, title, desc }) => (
            <div
              key={step}
              className="rounded-2xl p-5 text-center"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-purple-300 mb-3"
                style={{ background: 'rgba(124,58,237,0.25)' }}
              >
                {step}
              </div>
              <h3 className="text-white/80 text-sm font-semibold mb-2">{title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 별자리 안내 섹션 */}
      <section
        className="w-full max-w-2xl mx-auto px-4 mt-12"
        aria-labelledby="zodiac-heading"
      >
        <h2
          id="zodiac-heading"
          className="text-center text-white/50 text-xs tracking-widest uppercase font-medium mb-6"
        >
          12 별자리 안내
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {ZODIAC_SIGNS.map(({ sign, emoji, period, trait }) => (
            <div
              key={sign}
              className="rounded-xl p-3"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{emoji}</span>
                <span className="text-white/80 text-sm font-semibold">{sign}</span>
              </div>
              <p className="text-purple-300/60 text-xs">{period}</p>
              <p className="text-white/35 text-xs mt-1 leading-relaxed">{trait}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section
        className="w-full max-w-2xl mx-auto px-4 mt-12"
        aria-labelledby="about-heading"
      >
        <div
          className="rounded-2xl p-6"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <h2
            id="about-heading"
            className="text-white/70 text-sm font-semibold mb-3"
          >
            🔮 서비스 소개
          </h2>
          <p className="text-white/40 text-xs leading-relaxed">
            오늘의 운세는 생년월일을 기반으로 서양 별자리(12궁도)와 동양 띠를 함께 분석하여
            AI가 오늘의 운세를 알려드리는 무료 서비스입니다. 종합운, 연애운, 금전운, 직업운을
            매일 새롭게 제공하며, 행운의 색과 숫자까지 알려드립니다. 운세는 오락 및 참고
            목적으로 제공되며, 실제 미래를 예측하지 않습니다.
          </p>
        </div>
      </section>
    </>
  );
}
