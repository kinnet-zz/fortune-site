import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '오늘의 운세 - AI 무료 운세 서비스';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 40%, #1a0a3e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 100, marginBottom: 24 }}>🔮</div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: 'white',
            marginBottom: 16,
            letterSpacing: '-1px',
          }}
        >
          오늘의 운세
        </div>
        <div
          style={{
            fontSize: 28,
            color: 'rgba(167,139,250,1)',
            marginBottom: 40,
          }}
        >
          별자리 · 띠로 알아보는 AI 무료 운세
        </div>
        <div
          style={{
            display: 'flex',
            gap: 20,
          }}
        >
          {['종합운', '연애운', '금전운', '직업운'].map((item) => (
            <div
              key={item}
              style={{
                background: 'rgba(139,92,246,0.3)',
                border: '1px solid rgba(139,92,246,0.5)',
                borderRadius: 12,
                padding: '8px 20px',
                color: 'rgba(221,214,254,1)',
                fontSize: 22,
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            color: 'rgba(255,255,255,0.3)',
            fontSize: 20,
          }}
        >
          www.starfate.day
        </div>
      </div>
    ),
    { ...size }
  );
}
