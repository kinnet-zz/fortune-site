'use client';

import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';

const ZODIAC_EMOJIS = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
const ZODIAC_PERIODS = ['3/21~4/19','4/20~5/20','5/21~6/21','6/22~7/22','7/23~8/22','8/23~9/22','9/23~10/23','10/24~11/22','11/23~12/21','12/22~1/19','1/20~2/18','2/19~3/20'];

export default function InfoSection() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <>
      {/* 이용 방법 섹션 */}
      <section className="w-full max-w-2xl mx-auto px-4 mt-16" aria-labelledby="how-to-heading">
        <h2
          id="how-to-heading"
          className="text-center text-white/50 text-xs tracking-widest uppercase font-medium mb-6"
        >
          {tr.howToTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tr.howToSteps.map(({ title, desc }, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-purple-300 mb-3"
                style={{ background: 'rgba(124,58,237,0.25)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-white/80 text-sm font-semibold mb-2">{title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 별자리 안내 섹션 */}
      <section className="w-full max-w-2xl mx-auto px-4 mt-12" aria-labelledby="zodiac-heading">
        <h2
          id="zodiac-heading"
          className="text-center text-white/50 text-xs tracking-widest uppercase font-medium mb-6"
        >
          {tr.zodiacGuideTitle}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {tr.zodiacSigns.map((sign, i) => (
            <div
              key={i}
              className="rounded-xl p-3"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{ZODIAC_EMOJIS[i]}</span>
                <span className="text-white/80 text-sm font-semibold">{sign}</span>
              </div>
              <p className="text-purple-300/60 text-xs">{ZODIAC_PERIODS[i]}</p>
              <p className="text-white/35 text-xs mt-1 leading-relaxed">{tr.zodiacGuideTraits[i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section className="w-full max-w-2xl mx-auto px-4 mt-12" aria-labelledby="about-heading">
        <div
          className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h2 id="about-heading" className="text-white/70 text-sm font-semibold mb-3">
            {tr.serviceIntroTitle}
          </h2>
          <p className="text-white/40 text-xs leading-relaxed">{tr.serviceIntroText}</p>
        </div>
      </section>
    </>
  );
}
