import ConstellationIcon, { type ZodiacSlug } from '@/components/Constellation';

export type ArtworkVariant =
  | 'tarot'
  | 'compatibility'
  | 'yearly'
  | 'zodiac'
  | 'moon'
  | 'orbit'
  | 'history'
  | 'journal'
  | 'numbers'
  | 'memory'
  | 'scroll'
  | 'astrology'
  | 'armillary'
  | 'stillwater';

/**
 * Hand-painted ink & silver-moon artwork, one file per reading world.
 * Generated at 1000px and served as webp so cards stay light.
 */
const ARTWORK_SRC: Record<ArtworkVariant, string> = {
  tarot: '/images/card-tarot.webp',
  compatibility: '/images/card-love-match.webp',
  yearly: '/images/card-daily-fortune.webp',
  zodiac: '/images/card-zodiac-wheel.webp',
  moon: '/images/card-stillwater.webp',
  orbit: '/images/card-armillary.webp',
  history: '/images/card-ink-mountains.webp',
  journal: '/images/card-guidance.webp',
  numbers: '/images/card-daily-fortune.webp',
  memory: '/images/card-zodiac-wheel.webp',
  scroll: '/images/card-scroll.webp',
  astrology: '/images/card-astrology.webp',
  armillary: '/images/card-armillary.webp',
  stillwater: '/images/card-stillwater.webp',
};

const ARTWORK_ALT: Record<ArtworkVariant, string> = {
  tarot: '은빛 달과 태양이 새겨진 검은 타로 카드 세 장',
  compatibility: '보름달 아래 마주 선 두 사람의 수묵 실루엣',
  yearly: '은빛 보름달을 감싼 황도 나침반',
  zodiac: '십이지 동물이 둘러선 은빛 보름달 문양',
  moon: '수묵 산맥 위로 떠오른 은빛 보름달',
  orbit: '별자리 궤도를 도는 은빛 천체',
  history: '안개 낀 수묵 산맥과 누각, 학과 초승달',
  journal: '수묵 밤하늘에 매달린 은빛 등롱',
  numbers: '은빛 천체 나침반과 숫자 문양',
  memory: '십이지 문양이 새겨진 은빛 달',
  scroll: '은빛 별지도가 펼쳐진 고서 두루마리',
  astrology: '검은 비단 위에 그려진 은빛 성도',
  armillary: '안개 낀 석조 누대 위의 은빛 혼천의',
  stillwater: '고요한 검은 호수에 비친 은빛 보름달과 작은 배',
};

export function CardArtwork({
  variant,
  className = '',
  priority = false,
}: {
  variant: ArtworkVariant;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`art-frame ${className}`}>
      <img
        src={ARTWORK_SRC[variant]}
        alt={ARTWORK_ALT[variant]}
        width={1000}
        height={750}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/** Constellation mark on an ink frame, for zodiac tiles. */
export function ZodiacArtwork({ slug, className = '' }: { slug: ZodiacSlug | string | null; className?: string }) {
  return (
    <div className={`art-frame ${className}`}>
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="presentation" aria-hidden="true">
        <defs>
          <linearGradient id="zodiac-tile" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#111826" />
            <stop offset="100%" stopColor="#080b12" />
          </linearGradient>
          <radialGradient id="zodiac-moon" cx="78%" cy="18%" r="46%">
            <stop offset="0%" stopColor="#e6ecf5" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#e6ecf5" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="320" height="200" fill="url(#zodiac-tile)" />
        <rect width="320" height="200" fill="url(#zodiac-moon)" />
        <circle cx="262" cy="34" r="17" fill="#e6ecf5" fillOpacity="0.10" stroke="#e6ecf5" strokeOpacity="0.35" />
        <circle cx="160" cy="100" r="72" fill="none" stroke="#b8c7dc" strokeOpacity="0.16" strokeDasharray="1 7" />
        <g transform="translate(96 34) scale(1.28)" color="#dbe6f4">
          <ConstellationIcon slug={slug} size={100} strokeWidth={1.2} />
        </g>
      </svg>
    </div>
  );
}

export default CardArtwork;
