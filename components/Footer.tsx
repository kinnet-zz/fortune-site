import Link from 'next/link';

const SITE_LINKS = [
  { href: '/', label: '오늘의 운세' },
  { href: '/zodiac', label: '별자리 정보' },
  { href: '/chinese-zodiac', label: '12띠 정보' },
  { href: '/about', label: '사이트 소개' },
];

const POLICY_LINKS = [
  { href: '/privacy', label: '개인정보처리방침' },
  { href: '/terms', label: '이용약관' },
  { href: '/contact', label: '문의하기' },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 mt-16 py-10 px-6"
      style={{
        background: 'rgba(5, 5, 32, 0.7)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* 상단: 로고 + 링크 */}
        <div className="flex flex-col sm:flex-row gap-8 mb-8">
          {/* 로고 & 소개 */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🔮</span>
              <span className="text-white/80 font-bold text-base">오늘의 운세</span>
            </div>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs">
              생년월일로 별자리와 띠를 분석하는 AI 무료 운세 서비스.
              오늘의 종합운, 연애운, 금전운, 직업운을 확인해보세요.
            </p>
          </div>

          {/* 사이트 링크 */}
          <div>
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">서비스</h3>
            <ul className="space-y-2">
              {SITE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/35 hover:text-white/60 text-xs transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 정책 링크 */}
          <div>
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">정책</h3>
            <ul className="space-y-2">
              {POLICY_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/35 hover:text-white/60 text-xs transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <div
          className="border-t mb-6"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        />

        {/* 하단: 저작권 + 면책 */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} 오늘의 운세. All rights reserved.
          </p>
          <p className="text-white/20 text-xs max-w-sm text-right leading-relaxed">
            본 서비스의 운세는 AI가 생성한 오락적 콘텐츠입니다. 실제 미래를 예측하지 않습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
