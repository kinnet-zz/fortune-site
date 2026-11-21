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
  | 'memory';

const ACCENT = '#3b5bdb';
const ACCENT_DEEP = '#1e3a8a';
const INK = '#0f172a';

function Frame({ tint, tint2, children }: { tint: string; tint2: string; children: React.ReactNode }) {
  const id = `g-${tint.replace('#', '')}-${tint2.replace('#', '')}`;
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tint} />
          <stop offset="100%" stopColor={tint2} />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#${id})`} />
      {children}
    </svg>
  );
}

function Tarot() {
  return (
    <Frame tint="#eef2ff" tint2="#dfe6ff">
      <circle cx="238" cy="40" r="70" fill={ACCENT} fillOpacity="0.08" />
      <circle cx="160" cy="104" r="76" fill="none" stroke={ACCENT} strokeOpacity="0.18" strokeDasharray="2 7" />
      <g transform="rotate(-8 160 104)">
        <rect x="112" y="42" width="88" height="122" rx="10" fill={ACCENT_DEEP} />
        <rect x="120" y="50" width="72" height="106" rx="6" fill="none" stroke="#ffffff" strokeOpacity="0.28" />
        <path d="M160 84l4.4 15.2L180 104l-15.6 4.8L160 124l-4.4-15.2L140 104l15.6-4.8L160 84z" fill="#ffffff" />
        <circle cx="160" cy="136" r="2.6" fill="#ffffff" fillOpacity="0.55" />
        <path d="M146 144h28" stroke="#ffffff" strokeOpacity="0.35" strokeLinecap="round" />
      </g>
      <g transform="rotate(10 236 136)">
        <rect x="208" y="104" width="56" height="78" rx="8" fill="#ffffff" />
        <path d="M236 122l2.8 9.2 9.2 2.8-9.2 2.8-2.8 9.2-2.8-9.2-9.2-2.8 9.2-2.8 2.8-9.2z" fill={ACCENT} />
      </g>
      <circle cx="56" cy="60" r="3" fill={ACCENT} fillOpacity="0.5" />
      <circle cx="72" cy="150" r="2" fill={ACCENT} fillOpacity="0.35" />
    </Frame>
  );
}

function Compatibility() {
  return (
    <Frame tint="#f3f2ff" tint2="#e6e4ff">
      <circle cx="124" cy="100" r="62" fill={ACCENT} fillOpacity="0.78" />
      <circle cx="196" cy="100" r="62" fill="#ffffff" fillOpacity="0.82" />
      <path d="M160 47a62 62 0 010 106 62 62 0 010-106z" fill={ACCENT_DEEP} fillOpacity="0.28" />
      <circle cx="160" cy="100" r="88" fill="none" stroke={INK} strokeOpacity="0.1" />
      <path d="M30 100h18M272 100h18" stroke={INK} strokeOpacity="0.18" strokeLinecap="round" />
      <circle cx="124" cy="100" r="4" fill="#ffffff" />
      <circle cx="196" cy="100" r="4" fill={ACCENT_DEEP} />
    </Frame>
  );
}

function Yearly() {
  return (
    <Frame tint="#eaf2ff" tint2="#d8e6ff">
      {Array.from({ length: 7 }).map((_, i) => (
        <path key={i} d={`M${40 + i * 40} 200V${54 + (i % 3) * 18}`} stroke="#ffffff" strokeOpacity="0.55" strokeWidth="10" strokeLinecap="round" />
      ))}
      <circle cx="160" cy="150" r="66" fill={ACCENT} fillOpacity="0.9" />
      <circle cx="160" cy="150" r="66" fill="none" stroke="#ffffff" strokeOpacity="0.3" />
      <path d="M0 150h320" stroke="#ffffff" strokeOpacity="0.6" />
      <path d="M160 40v20M160 82v14" stroke={ACCENT_DEEP} strokeOpacity="0.5" strokeLinecap="round" />
      <circle cx="160" cy="72" r="13" fill="none" stroke={ACCENT_DEEP} strokeOpacity="0.4" />
      <circle cx="160" cy="72" r="4" fill={ACCENT_DEEP} fillOpacity="0.75" />
    </Frame>
  );
}

function Zodiac() {
  return (
    <Frame tint="#f2f4fa" tint2="#e6eaf5">
      <circle cx="256" cy="44" r="66" fill={ACCENT} fillOpacity="0.1" />
      <circle cx="160" cy="100" r="80" fill="none" stroke={ACCENT} strokeOpacity="0.18" />
      <path d="M56 142L100 96l38 20 34-46 38 18 34-30" stroke={ACCENT} strokeOpacity="0.85" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      {[
        [56, 142, 2],
        [100, 96, 2.2],
        [138, 116, 2],
        [172, 70, 2.4],
        [210, 88, 2],
        [244, 58, 3.4],
      ].map(([cx, cy, r], i) => (
        <g key={i}>
          {i === 5 && <circle cx={cx} cy={cy} r={9} fill={ACCENT} fillOpacity="0.16" />}
          <circle cx={cx} cy={cy} r={r} fill={i === 5 ? ACCENT_DEEP : ACCENT} />
        </g>
      ))}
    </Frame>
  );
}

function Moon() {
  return (
    <Frame tint="#f1f3fa" tint2="#e3e7f3">
      <circle cx="160" cy="100" r="92" fill={ACCENT} fillOpacity="0.06" />
      <path d="M196 34a68 68 0 100 132 54 54 0 010-132z" fill="#ffffff" stroke={ACCENT} strokeOpacity="0.35" />
      <circle cx="140" cy="86" r="6" fill={ACCENT} fillOpacity="0.14" />
      <circle cx="150" cy="120" r="9" fill={ACCENT} fillOpacity="0.1" />
      <circle cx="128" cy="106" r="4" fill={ACCENT} fillOpacity="0.12" />
      <circle cx="264" cy="58" r="2.6" fill={ACCENT} />
      <circle cx="62" cy="52" r="2" fill={ACCENT} fillOpacity="0.5" />
      <circle cx="84" cy="148" r="2.4" fill={ACCENT_DEEP} fillOpacity="0.4" />
    </Frame>
  );
}

function Orbit() {
  return (
    <Frame tint="#eef3ff" tint2="#dde7ff">
      <circle cx="160" cy="100" r="24" fill={ACCENT} />
      <ellipse cx="160" cy="100" rx="86" ry="32" fill="none" stroke={ACCENT_DEEP} strokeOpacity="0.35" transform="rotate(-18 160 100)" />
      <ellipse cx="160" cy="100" rx="120" ry="46" fill="none" stroke={INK} strokeOpacity="0.12" transform="rotate(-18 160 100)" />
      <circle cx="74" cy="74" r="5" fill="#ffffff" stroke={ACCENT_DEEP} strokeOpacity="0.4" />
      <circle cx="246" cy="128" r="4" fill={ACCENT_DEEP} />
      <circle cx="206" cy="46" r="2.4" fill={ACCENT} fillOpacity="0.6" />
      <circle cx="112" cy="150" r="2.4" fill={ACCENT_DEEP} fillOpacity="0.35" />
    </Frame>
  );
}

function History() {
  return (
    <Frame tint="#f4f5f8" tint2="#e8eaf0">
      <path d="M44 164V96c0-30 24-50 52-50h128c28 0 52 20 52 50v68" fill="none" stroke={ACCENT_DEEP} strokeOpacity="0.22" strokeWidth="1.4" />
      <path d="M74 164v-64c0-20 18-34 40-34h92c22 0 40 14 40 34v64" fill={ACCENT} fillOpacity="0.1" stroke={ACCENT} strokeOpacity="0.4" />
      {Array.from({ length: 7 }).map((_, i) => (
        <path key={i} d={`M${96 + i * 21} 164v-${i % 2 ? 24 : 40}`} stroke={ACCENT} strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
      ))}
      <circle cx="160" cy="52" r="4" fill={ACCENT} />
      <path d="M160 60v78" stroke={ACCENT_DEEP} strokeOpacity="0.2" strokeDasharray="2 6" />
    </Frame>
  );
}

function Journal() {
  return (
    <Frame tint="#f3f5f8" tint2="#e7eaf0">
      <rect x="220" y="46" width="72" height="108" rx="8" fill="#ffffff" fillOpacity="0.7" transform="rotate(6 256 100)" />
      <rect x="82" y="34" width="140" height="132" rx="10" fill="#ffffff" />
      <rect x="82" y="34" width="140" height="132" rx="10" fill="none" stroke={ACCENT} strokeOpacity="0.28" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M104 ${68 + i * 20}h96`} stroke={INK} strokeOpacity={i === 0 ? 0.3 : 0.13} strokeLinecap="round" strokeWidth={i === 0 ? 5 : 3} />
      ))}
      <path d="M104 138h40" stroke={ACCENT} strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" />
      <circle cx="152" cy="34" r="16" fill={ACCENT} />
      <path d="M152 26v16M144 34h16" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
    </Frame>
  );
}

function Numbers() {
  return (
    <Frame tint="#eef3fa" tint2="#dfe8f6">
      <circle cx="160" cy="100" r="76" fill="none" stroke={ACCENT} strokeOpacity="0.22" />
      {[7, 3, 9, 1, 5].map((n, i) => {
        const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const cx = 160 + Math.cos(angle) * 54;
        const cy = 100 + Math.sin(angle) * 54;
        return (
          <g key={n}>
            <circle cx={cx} cy={cy} r="16" fill={i === 0 ? ACCENT : '#ffffff'} stroke={ACCENT} strokeOpacity={i === 0 ? 0 : 0.25} />
            <text
              x={cx}
              y={cy + 5}
              textAnchor="middle"
              fontSize="13"
              fontFamily="ui-sans-serif, system-ui"
              fontWeight="700"
              fill={i === 0 ? '#ffffff' : ACCENT}
            >
              {n}
            </text>
          </g>
        );
      })}
      <circle cx="160" cy="100" r="3.4" fill={ACCENT_DEEP} />
    </Frame>
  );
}

function Memory() {
  return (
    <Frame tint="#f2f1fb" tint2="#e6e5f6">
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const filled = (row + col) % 3 === 0;
          return (
            <rect
              key={`${row}-${col}`}
              x={86 + col * 38}
              y={44 + row * 38}
              width="30"
              height="30"
              rx="8"
              fill={filled ? ACCENT : '#ffffff'}
              fillOpacity={filled ? 0.9 : 0.95}
              stroke={filled ? ACCENT : ACCENT_DEEP}
              strokeOpacity={filled ? 0 : 0.18}
            />
          );
        }),
      )}
      <path d="M86 160h150" stroke={ACCENT_DEEP} strokeOpacity="0.18" strokeLinecap="round" />
      <circle cx="238" cy="160" r="3" fill={ACCENT} />
    </Frame>
  );
}

export function CardArtwork({ variant, className = '' }: { variant: ArtworkVariant; className?: string }) {
  const body = {
    tarot: <Tarot />,
    compatibility: <Compatibility />,
    yearly: <Yearly />,
    zodiac: <Zodiac />,
    moon: <Moon />,
    orbit: <Orbit />,
    history: <History />,
    journal: <Journal />,
    numbers: <Numbers />,
    memory: <Memory />,
  }[variant];

  return <div className={`art-frame ${className}`}>{body}</div>;
}

/** Constellation mark on a tinted gallery frame, for zodiac tiles. */
export function ZodiacArtwork({ slug, className = '' }: { slug: ZodiacSlug | string | null; className?: string }) {
  return (
    <div className={`art-frame ${className}`}>
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="presentation" aria-hidden="true">
        <defs>
          <linearGradient id="zodiac-tile" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f4f6ff" />
            <stop offset="100%" stopColor="#e8ecfb" />
          </linearGradient>
        </defs>
        <rect width="320" height="200" fill="url(#zodiac-tile)" />
        <circle cx="262" cy="30" r="64" fill={ACCENT} fillOpacity="0.08" />
        <circle cx="160" cy="100" r="72" fill="none" stroke={ACCENT} strokeOpacity="0.16" strokeDasharray="1 7" />
        <g transform="translate(96 34) scale(1.28)" color={ACCENT_DEEP}>
          <ConstellationIcon slug={slug} size={100} strokeWidth={1.2} />
        </g>
      </svg>
    </div>
  );
}

export default CardArtwork;
