export const runtime = 'edge';

import type { Metadata } from 'next';
import Link from 'next/link';
import NumberGameClient from '@/components/NumberGameClient';

export const metadata: Metadata = {
  title: '숫자 순서 게임 🔢 | 수비학 두뇌 트레이닝 — StarFate',
  description: '1부터 순서대로 빠르게 눌러라! 수비학(Numerology)에서 숫자는 우주의 언어입니다. 두뇌를 단련하며 행운의 숫자 에너지를 체험해보세요. TOP 100 랭킹 도전.',
  openGraph: {
    title: '숫자 순서 게임 🔢 | 수비학 두뇌 트레이닝',
    description: '수비학에서 숫자는 우주의 언어. 두뇌를 단련하며 행운의 숫자 에너지를 체험하세요.',
    type: 'website',
    url: 'https://www.starfate.day/number-game',
    siteName: 'StarFate',
    images: [{ url: 'https://www.starfate.day/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '숫자 순서 게임 🔢 | 수비학 두뇌 트레이닝',
    description: '수비학에서 숫자는 우주의 언어. 두뇌를 단련하며 행운의 숫자 에너지를 체험하세요.',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function NumberGamePage() {
  return (
    <div style={bgStyle}>
      <NumberGameClient />

      {/* Numerology educational section */}
      <div className="max-w-2xl mx-auto px-6 pb-20 space-y-6">
        <div
          className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <h2 className="text-white font-bold text-base mb-3">🔢 수비학(Numerology)이란?</h2>
          <p className="text-white/55 text-sm leading-relaxed mb-3">
            수비학(數秘學, Numerology)은 숫자와 인간의 삶, 성격, 운명 사이의 신비로운 관계를 탐구하는 고대 학문입니다. 고대 그리스의 수학자 피타고라스(Pythagoras)가 체계화한 것으로 알려져 있으며, 고대 이집트·바빌로니아·히브리 카발라 전통에도 깊이 뿌리내리고 있습니다.
          </p>
          <p className="text-white/55 text-sm leading-relaxed mb-3">
            수비학에서 1부터 9까지의 숫자는 각각 고유한 에너지와 의미를 가집니다. 1은 새로운 시작과 리더십, 2는 균형과 협력, 3은 창의성과 표현, 4는 안정과 질서, 5는 자유와 변화, 6은 사랑과 책임, 7은 영성과 지혜, 8은 물질적 성공, 9는 완성과 인도주의를 상징합니다.
          </p>
          <p className="text-white/55 text-sm leading-relaxed">
            생년월일의 모든 숫자를 더해 한 자리로 줄인 &ldquo;인생 수(Life Path Number)&rdquo;는 당신의 삶의 방향과 핵심 성격을 나타낸다고 합니다. StarFate의 운세 결과에 포함된 행운의 숫자도 이러한 수비학적 원리를 바탕으로 합니다.
          </p>
        </div>

        <div
          className="rounded-2xl p-6"
          style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.15)' }}
        >
          <h2 className="text-white font-bold text-base mb-4">⭐ 1~9 행운의 숫자 의미</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { n: 1, meaning: '리더십·시작', color: '#f87171' },
              { n: 2, meaning: '균형·협력', color: '#60a5fa' },
              { n: 3, meaning: '창의성·표현', color: '#fbbf24' },
              { n: 4, meaning: '안정·질서', color: '#34d399' },
              { n: 5, meaning: '자유·변화', color: '#f472b6' },
              { n: 6, meaning: '사랑·책임', color: '#a78bfa' },
              { n: 7, meaning: '영성·지혜', color: '#38bdf8' },
              { n: 8, meaning: '성공·풍요', color: '#fb923c' },
              { n: 9, meaning: '완성·봉사', color: '#c084fc' },
            ].map(({ n, meaning, color }) => (
              <div
                key={n}
                className="rounded-xl p-3 text-center"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="text-2xl font-black mb-1" style={{ color }}>{n}</div>
                <div className="text-white/50 text-xs">{meaning}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl p-5 text-center"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-white/40 text-xs mb-3">생년월일로 나의 행운의 숫자 확인하기</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}
          >
            🔮 오늘의 운세 무료로 보기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
