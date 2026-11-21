import type { CSSProperties } from 'react';

export type ZodiacSlug =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

interface ConstellationShape {
  ko: string;
  en: string;
  points: Array<[number, number]>;
  /** index pairs into points, drawn as constellation lines */
  lines: Array<[number, number]>;
  /** indexes drawn as the brightest stars */
  bright: number[];
}

export const CONSTELLATIONS: Record<ZodiacSlug, ConstellationShape> = {
  aries: {
    ko: '양자리',
    en: 'Aries',
    points: [
      [16, 72],
      [30, 62],
      [44, 52],
      [58, 46],
      [72, 36],
      [86, 24],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ],
    bright: [5, 2],
  },
  taurus: {
    ko: '황소자리',
    en: 'Taurus',
    points: [
      [18, 26],
      [34, 44],
      [50, 60],
      [66, 44],
      [82, 26],
      [50, 34],
      [50, 80],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [5, 2],
      [2, 6],
    ],
    bright: [5, 2],
  },
  gemini: {
    ko: '쌍둥이자리',
    en: 'Gemini',
    points: [
      [34, 12],
      [28, 32],
      [36, 52],
      [30, 74],
      [66, 12],
      [72, 32],
      [64, 52],
      [70, 74],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [4, 5],
      [5, 6],
      [6, 7],
      [1, 5],
      [2, 6],
    ],
    bright: [0, 4],
  },
  cancer: {
    ko: '게자리',
    en: 'Cancer',
    points: [
      [50, 20],
      [50, 42],
      [28, 62],
      [50, 42],
      [72, 62],
      [50, 42],
      [56, 82],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [1, 4],
      [1, 6],
    ],
    bright: [1, 0],
  },
  leo: {
    ko: '사자자리',
    en: 'Leo',
    points: [
      [24, 70],
      [26, 52],
      [32, 36],
      [44, 26],
      [58, 30],
      [62, 44],
      [56, 58],
      [44, 68],
      [30, 76],
      [76, 58],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [6, 9],
    ],
    bright: [3, 9],
  },
  virgo: {
    ko: '처녀자리',
    en: 'Virgo',
    points: [
      [13, 30],
      [28, 44],
      [44, 54],
      [60, 58],
      [76, 50],
      [88, 36],
      [44, 54],
      [38, 76],
      [60, 58],
      [58, 78],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [2, 7],
      [3, 9],
    ],
    bright: [5, 2],
  },
  libra: {
    ko: '천칭자리',
    en: 'Libra',
    points: [
      [50, 20],
      [50, 44],
      [24, 56],
      [76, 56],
      [14, 72],
      [86, 72],
      [50, 44],
      [50, 76],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 5],
      [1, 7],
    ],
    bright: [1, 7],
  },
  scorpio: {
    ko: '전갈자리',
    en: 'Scorpio',
    points: [
      [10, 34],
      [24, 44],
      [38, 50],
      [52, 46],
      [66, 50],
      [78, 60],
      [84, 74],
      [70, 80],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ],
    bright: [3, 6],
  },
  sagittarius: {
    ko: '사수자리',
    en: 'Sagittarius',
    points: [
      [14, 76],
      [32, 58],
      [50, 40],
      [68, 24],
      [86, 14],
      [52, 58],
      [36, 44],
      [30, 62],
      [56, 72],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [2, 8],
      [2, 5],
      [5, 6],
      [5, 7],
    ],
    bright: [4, 2],
  },
  capricorn: {
    ko: '염소자리',
    en: 'Capricorn',
    points: [
      [14, 34],
      [30, 52],
      [50, 64],
      [70, 56],
      [82, 40],
      [76, 24],
      [30, 52],
      [24, 74],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [1, 7],
    ],
    bright: [3, 5],
  },
  aquarius: {
    ko: '물병자리',
    en: 'Aquarius',
    points: [
      [12, 48],
      [28, 36],
      [44, 48],
      [60, 36],
      [78, 46],
      [14, 68],
      [30, 56],
      [46, 68],
      [62, 56],
      [78, 68],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
    ],
    bright: [3, 6],
  },
  pisces: {
    ko: '물고기자리',
    en: 'Pisces',
    points: [
      [16, 18],
      [30, 34],
      [44, 48],
      [56, 52],
      [70, 66],
      [84, 82],
      [84, 18],
      [70, 34],
      [56, 52],
      [44, 66],
      [30, 82],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [6, 7],
      [7, 8],
      [8, 9],
      [9, 10],
    ],
    bright: [2, 8],
  },
};

export const ZODIAC_SLUGS = Object.keys(CONSTELLATIONS) as ZodiacSlug[];

const NAME_TO_SLUG: Record<string, ZodiacSlug> = (() => {
  const map: Record<string, ZodiacSlug> = {};
  for (const slug of ZODIAC_SLUGS) {
    const { ko, en } = CONSTELLATIONS[slug];
    map[slug] = slug;
    map[ko] = slug;
    map[en.toLowerCase()] = slug;
  }
  map['양'] = 'aries';
  map['황소'] = 'taurus';
  map['쌍둥이'] = 'gemini';
  map['게'] = 'cancer';
  map['사자'] = 'leo';
  map['처녀'] = 'virgo';
  map['천칭'] = 'libra';
  map['전갈'] = 'scorpio';
  map['사수'] = 'sagittarius';
  map['염소'] = 'capricorn';
  map['물병'] = 'aquarius';
  map['물고기'] = 'pisces';
  return map;
})();

/** Resolve a zodiac sign as returned by the API (Korean or English label) to its slug. */
export function zodiacSlugFromName(name: string | undefined | null): ZodiacSlug | null {
  if (!name) return null;
  const raw = name.trim();
  if (NAME_TO_SLUG[raw]) return NAME_TO_SLUG[raw];
  const lower = raw.toLowerCase();
  if (NAME_TO_SLUG[lower]) return NAME_TO_SLUG[lower];
  // strip suffixes like "자리" or parentheses e.g. "처녀자리(Virgo)"
  const cleaned = raw.replace(/\(.*?\)/g, '').replace(/\s|자리/g, '');
  return NAME_TO_SLUG[cleaned] ?? null;
}

interface ConstellationIconProps {
  slug: ZodiacSlug | string | null;
  size?: number;
  className?: string;
  /** stroke/fill colour; defaults to champagne gold */
  color?: string;
  strokeWidth?: number;
  animated?: boolean;
  style?: CSSProperties;
}

/**
 * Hand-drawn constellation mark for a zodiac sign.
 * Rendered as inline SVG so it stays crisp at any size and never falls back to a colour emoji.
 */
export default function ConstellationIcon({
  slug,
  size = 72,
  className = '',
  color = 'currentColor',
  strokeWidth = 1.15,
  animated = false,
  style,
}: ConstellationIconProps) {
  const shape = slug && slug in CONSTELLATIONS ? CONSTELLATIONS[slug as ZodiacSlug] : null;
  if (!shape) return null;

  const { points, lines, bright } = shape;
  const linePath = lines
    .map(([a, b]) => `M${points[a][0]} ${points[a][1]} L${points[b][0]} ${points[b][1]}`)
    .join(' ');

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={style}
      role="img"
      aria-label={`${shape.ko} 별자리`}
      fill="none"
    >
      <path
        d={linePath}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'constellation-line' : undefined}
        opacity={0.72}
      />
      <g className="constellation-stars" fill={color}>
        {points.map(([x, y], index) => {
          const isBright = bright.includes(index);
          const r = isBright ? 2.6 : 1.5;
          return (
            <g key={`${x}-${y}-${index}`}>
              {isBright && <circle cx={x} cy={y} r={6.5} opacity={0.12} />}
              <circle cx={x} cy={y} r={r} opacity={isBright ? 0.95 : 0.68} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
