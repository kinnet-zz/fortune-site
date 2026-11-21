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
          background: 'linear-gradient(160deg, #141a35 0%, #111730 55%, #0e142b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          color: '#f7f0e1',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              border: '1px solid rgba(226,205,162,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#e2cda2',
              fontSize: 26,
            }}
          >
            ✦
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 26, letterSpacing: '0.24em', color: '#f7f0e1' }}>STARFATE</div>
            <div style={{ fontSize: 13, letterSpacing: '0.4em', color: 'rgba(226,205,162,0.7)', marginTop: 6 }}>
              별자리 · 운세
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: 120, height: 1, background: 'rgba(226,205,162,0.7)', marginBottom: 30 }} />
          <div
            style={{
              fontSize: 86,
              fontWeight: 700,
              color: '#f7f0e1',
              letterSpacing: '-2px',
              lineHeight: 1.15,
              marginBottom: 22,
            }}
          >
            오늘의 운세
          </div>
          <div style={{ fontSize: 30, color: 'rgba(226,205,162,0.85)', marginBottom: 40 }}>
            별자리 · 띠로 알아보는 무료 오늘의 운세
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            {['종합운', '연애운', '금전운', '직업운'].map((item) => (
              <div
                key={item}
                style={{
                  background: 'rgba(226,205,162,0.09)',
                  border: '1px solid rgba(226,205,162,0.32)',
                  borderRadius: 4,
                  padding: '10px 22px',
                  color: 'rgba(247,240,225,0.85)',
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
            borderTop: '1px solid rgba(226,205,162,0.22)',
            paddingTop: 22,
            color: 'rgba(247,240,225,0.55)',
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
