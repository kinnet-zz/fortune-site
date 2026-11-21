import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '오늘의 운세 - 별자리·12지 무료 운세 가이드';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(160deg, #f6f7fb 0%, #2f4bc7 55%, #f8f9fb 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              border: '1px solid rgba(59,91,219,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3b5bdb',
              fontSize: 26,
            }}
          >
            ✦
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 26, letterSpacing: '0.24em', color: '#ffffff' }}>STARFATE</div>
            <div style={{ fontSize: 13, letterSpacing: '0.4em', color: 'rgba(59,91,219,0.7)', marginTop: 6 }}>
              별자리 · 운세
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: 120, height: 1, background: 'rgba(59,91,219,0.7)', marginBottom: 30 }} />
          <div
            style={{
              fontSize: 86,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-2px',
              lineHeight: 1.15,
              marginBottom: 22,
            }}
          >
            오늘의 운세
          </div>
          <div style={{ fontSize: 30, color: 'rgba(59,91,219,0.85)', marginBottom: 40 }}>
            별자리 · 띠로 알아보는 무료 오늘의 운세
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            {['종합운', '연애운', '금전운', '직업운'].map((item) => (
              <div
                key={item}
                style={{
                  background: 'rgba(59,91,219,0.09)',
                  border: '1px solid rgba(59,91,219,0.32)',
                  borderRadius: 4,
                  padding: '10px 22px',
                  color: 'rgba(15,23,42,0.80)',
                  fontSize: 22,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(59,91,219,0.22)',
            paddingTop: 22,
            color: 'rgba(15,23,42,0.80)',
            fontSize: 20,
            letterSpacing: '0.08em',
          }}
        >
          <span>starfate.day</span>
          <span>ZODIAC · CHINESE ZODIAC · TAROT</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
