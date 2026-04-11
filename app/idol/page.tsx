export const runtime = 'edge';

import type { Metadata } from 'next';
import IdolClient from '@/components/IdolClient';

const ogData = {
  ko: {
    title: '나는 어느 소속사 스타일? | SM · JYP · YG · HYBE 관상 분석',
    description: '내 얼굴을 AI가 분석해 SM, JYP, YG, HYBE 중 딱 맞는 소속사를 찾아드립니다. 사진 한 장으로 바로 확인!',
  },
  en: {
    title: 'Which K-Pop Agency Fits Your Face? | SM · JYP · YG · HYBE',
    description: 'AI analyzes your face and finds your perfect K-pop agency match — SM, JYP, YG, or HYBE. Upload a photo and find out!',
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang = 'ko' } = await searchParams;
  const isEn = lang === 'en';
  const { title, description } = isEn ? ogData.en : ogData.ko;
  const url = isEn
    ? 'https://www.starfate.day/idol?lang=en'
    : 'https://www.starfate.day/idol';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url,
      siteName: 'StarFate',
      images: [
        {
          url: 'https://www.starfate.day/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.starfate.day/og-image.png'],
    },
    alternates: {
      canonical: url,
      languages: {
        'ko': 'https://www.starfate.day/idol',
        'en': 'https://www.starfate.day/idol?lang=en',
      },
    },
  };
}

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 100%)',
};

const AGENCIES = [
  {
    emoji: '💎', name: 'SM엔터테인먼트', founded: '1995',
    style: '도시적·클래식 미인형',
    color: '#60a5fa',
    desc: 'H.O.T.로 K-pop 1세대를 열었으며, 보아·동방신기·소녀시대·EXO·NCT·aespa 등 수많은 글로벌 스타를 배출했습니다. SM의 아이돌은 완벽한 비율과 도시적 세련미를 특징으로 하며, 독자적인 세계관(Universe)을 활용한 스토리텔링으로 팬덤을 형성합니다.',
    artists: 'H.O.T., 보아, 동방신기, 소녀시대, 샤이니, EXO, Red Velvet, NCT, aespa',
  },
  {
    emoji: '🌟', name: 'JYP엔터테인먼트', founded: '1997',
    style: '건강하고 발랄한 청춘 스타일',
    color: '#34d399',
    desc: '박진영이 설립한 JYP는 원더걸스·미스에이·2PM부터 TWICE·ITZY·Stray Kids·NMIXX까지 활발한 퍼포먼스와 밝은 에너지가 특징입니다. 건강하고 자연스러운 외모, 탄탄한 보컬과 댄스 실력을 고루 갖춘 아이돌을 지향합니다.',
    artists: '원더걸스, 2PM, 미스에이, GOT7, TWICE, Stray Kids, ITZY, NMIXX',
  },
  {
    emoji: '🔥', name: 'YG엔터테인먼트', founded: '1996',
    style: '강렬하고 개성있는 카리스마',
    color: '#f87171',
    desc: '힙합과 R&B 기반의 음악성으로 독보적인 위치를 가진 YG는 BIGBANG·2NE1·BLACKPINK·WINNER·iKON 등을 통해 "YG 스웩"이라는 독특한 브랜드 이미지를 만들었습니다. 무대 위의 폭발적인 카리스마와 개성 강한 스타일이 트레이드마크입니다.',
    artists: 'BIGBANG, 2NE1, WINNER, iKON, BLACKPINK, TREASURE, BABYMONSTER',
  },
  {
    emoji: '✨', name: 'HYBE (구 빅히트)', founded: '2005',
    style: '세련되고 글로벌한 청량함',
    color: '#a78bfa',
    desc: 'BTS의 글로벌 성공을 기반으로 성장한 HYBE는 빅히트·쏘스뮤직·플레디스·KOZ·어도어 등 다양한 레이블을 보유합니다. BTS·TXT·세븐틴·뉴진스·르세라핌을 통해 K-pop의 세계적 위상을 높였으며, 음악·예술·세계관이 결합된 콘텐츠 전략을 구사합니다.',
    artists: 'BTS, TXT, 세븐틴, 뉴진스, LE SSERAFIM, &TEAM, ILLIT',
  },
];

export default function IdolPage() {
  return (
    <div style={bgStyle}>
      <IdolClient />

      {/* K-pop agency educational content */}
      <div className="max-w-2xl mx-auto px-6 pb-20 space-y-6">

        <div
          className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <h2 className="text-white font-bold text-base mb-3">🎤 K-Pop 4대 소속사란?</h2>
          <p className="text-white/55 text-sm leading-relaxed mb-3">
            K-Pop(Korean Pop)은 대한민국에서 시작된 음악 장르이자 문화 현상으로, 1990년대 H.O.T.·S.E.S. 등 1세대 아이돌 그룹의 등장과 함께 체계적인 아이돌 시스템이 형성되었습니다. 연습생 제도, 퍼포먼스 중심의 음악, 세계관 기반 스토리텔링을 특징으로 하며 2010년대 이후 BTS·BLACKPINK 등을 통해 글로벌 문화로 자리 잡았습니다.
          </p>
          <p className="text-white/55 text-sm leading-relaxed">
            SM·JYP·YG·HYBE는 각자 독특한 색깔과 육성 방식을 가지고 있으며, 소속 아이돌의 외모 스타일·음악성·무대 에너지도 각 소속사의 철학을 반영합니다. 본 테스트는 각 소속사 아이돌의 공통적인 비주얼 특성을 AI가 분석하여 재미로 매칭하는 오락 서비스입니다.
          </p>
        </div>

        <div className="space-y-4">
          {AGENCIES.map((a) => (
            <div
              key={a.name}
              className="rounded-2xl p-5"
              style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${a.color}25` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{a.emoji}</span>
                <div>
                  <h3 className="text-white font-bold text-sm">{a.name}</h3>
                  <div className="flex gap-2 mt-0.5">
                    <span className="text-white/30 text-xs">설립 {a.founded}</span>
                    <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: `${a.color}18`, color: a.color }}>
                      {a.style}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-white/50 text-xs leading-relaxed mb-2">{a.desc}</p>
              <p className="text-white/30 text-xs"><span className="text-white/40">대표 아티스트:</span> {a.artists}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-5 text-center"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-white/40 text-xs mb-3">별자리와 운세로 나의 K-Pop 에너지 알아보기</p>
          <a
            href="/"
            className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}
          >
            🔮 오늘의 운세 무료로 보기 →
          </a>
        </div>

      </div>
    </div>
  );
}
