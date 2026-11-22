'use client';

import ConstellationIcon, { type ZodiacSlug } from '@/components/Constellation';
import { useLang } from '@/lib/useLang';
import type { Lang } from '@/lib/i18n';

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

const ARTWORK_ALT: Record<ArtworkVariant, Record<Lang, string>> = {
  tarot: {
    ko: '은빛 달과 태양이 새겨진 검은 타로 카드 세 장',
    en: 'Three black tarot cards engraved with a silver moon and sun',
    zh: '刻有银月与太阳的三张黑色塔罗牌',
    ja: '銀の月と太陽が刻まれた黒いタロットカード三枚',
  },
  compatibility: {
    ko: '보름달 아래 마주 선 두 사람의 수묵 실루엣',
    en: 'Ink silhouettes of two people facing each other under a full moon',
    zh: '满月下相对而立的两人水墨剪影',
    ja: '満月の下で向かい合う二人の水墨シルエット',
  },
  yearly: {
    ko: '은빛 보름달을 감싼 황도 나침반',
    en: 'A zodiac compass around a silver full moon',
    zh: '环绕银月的黄道罗盘',
    ja: '銀の満月を包む黄道の羅針盤',
  },
  zodiac: {
    ko: '십이지 동물이 둘러선 은빛 보름달 문양',
    en: 'A silver full moon ringed by the twelve animals',
    zh: '十二生肖环绕的银月纹样',
    ja: '十二支の動物が囲む銀の満月文様',
  },
  moon: {
    ko: '수묵 산맥 위로 떠오른 은빛 보름달',
    en: 'A silver full moon rising over ink mountains',
    zh: '水墨山脉上升起的银月',
    ja: '水墨の山並みに昇る銀の満月',
  },
  orbit: {
    ko: '별자리 궤도를 도는 은빛 천체',
    en: 'A silver body orbiting along a constellation path',
    zh: '沿星座轨道运行的银色天体',
    ja: '星座の軌道を巡る銀の天体',
  },
  history: {
    ko: '안개 낀 수묵 산맥과 누각, 학과 초승달',
    en: 'Misty ink mountains, a pavilion, a crane and a crescent moon',
    zh: '雾中水墨山脉与楼阁、鹤与新月',
    ja: '霧の水墨山脈と楼閣、鶴と三日月',
  },
  journal: {
    ko: '수묵 밤하늘에 매달린 은빛 등롱',
    en: 'A silver lantern hanging in an ink night sky',
    zh: '悬在水墨夜空中的银灯',
    ja: '水墨の夜空に吊るされた銀の灯籠',
  },
  numbers: {
    ko: '은빛 천체 나침반과 숫자 문양',
    en: 'A silver celestial compass with number patterns',
    zh: '银色天体罗盘与数字纹样',
    ja: '銀の天体羅針盤と数字の文様',
  },
  memory: {
    ko: '십이지 문양이 새겨진 은빛 달',
    en: 'A silver moon engraved with the twelve animal motifs',
    zh: '刻有十二生肖纹样的银月',
    ja: '十二支の文様が刻まれた銀の月',
  },
  scroll: {
    ko: '은빛 별지도가 펼쳐진 고서 두루마리',
    en: 'An old scroll unrolling a silver star map',
    zh: '展开银色星图的古籍卷轴',
    ja: '銀の星図が広がる古書の巻物',
  },
  astrology: {
    ko: '검은 비단 위에 그려진 은빛 성도',
    en: 'A silver star chart drawn on black silk',
    zh: '绘于黑绸之上的银色星图',
    ja: '黒い絹に描かれた銀の星図',
  },
  armillary: {
    ko: '안개 낀 석조 누대 위의 은빛 혼천의',
    en: 'A silver armillary sphere on a misty stone terrace',
    zh: '雾中石台上的银色浑天仪',
    ja: '霧の石造の台に置かれた銀の渾天儀',
  },
  stillwater: {
    ko: '고요한 검은 호수에 비친 은빛 보름달과 작은 배',
    en: 'A silver full moon and a small boat reflected in a still black lake',
    zh: '静谧黑湖上映出的银月与小舟',
    ja: '静かな黒い湖に映る銀の満月と小舟',
  },
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
  const { lang } = useLang();
  return (
    <div className={`art-frame ${className}`}>
      <img
        src={ARTWORK_SRC[variant]}
        alt={ARTWORK_ALT[variant][lang]}
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
