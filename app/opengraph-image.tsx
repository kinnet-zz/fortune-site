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
          background: 'radial-gradient(circle at 78% 32%, #1a2230 0%, #0b0f17 46%, #07090e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          color: '#f2f0ea',
          position: 'relative',
        }}
      >
        {/* 은빛 보름달 */}
        <div
          style={{
            position: 'absolute',
            right: 96,
            top: 132,
            width: 300,
            height: 300,
            borderRadius: 999,
            background: 'radial-gradient(circle at 38% 34%, #f8fbff 0%, #dbe4ef 46%, #a9b8ca 100%)',
            boxShadow: '0 0 120px 30px rgba(230,236,245,0.22)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 60,
            top: 96,
            width: 372,
            height: 372,
            borderRadius: 999,
            border: '1px solid rgba(230,236,245,0.28)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(7,9,14,0.92) 0%, rgba(7,9,14,0.6) 52%, rgba(7,9,14,0.1) 100%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, position: 'relative' }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 999,
              border: '1px solid rgba(230,236,245,0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#e6ecf5',
              fontSize: 24,
            }}
          >
            ✦
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 26, letterSpacing: '0.24em', color: '#ecf1f8' }}>STARFATE</div>
            <div style={{ fontSize: 13, letterSpacing: '0.4em', color: 'rgba(184,199,220,0.75)', marginTop: 6 }}>
              별자리 · 운세
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ width: 120, height: 1, background: 'rgba(230,236,245,0.5)', marginBottom: 30 }} />
          <div
            style={{
              fontSize: 86,
              fontWeight: 700,
              color: '#f6f9fd',
              letterSpacing: '-2px',
              lineHeight: 1.15,
              marginBottom: 22,
            }}
          >
            오늘의 운세
          </div>
          <div style={{ fontSize: 29, color: 'rgba(202,214,230,0.9)', marginBottom: 40 }}>
            별자리 · 띠로 알아보는 무료 오늘의 운세
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            {['종합운', '연애운', '금전운', '직업운'].map((item) => (
              <div
                key={item}
                style={{
                  background: 'rgba(230,236,245,0.07)',
                  border: '1px solid rgba(230,236,245,0.26)',
                  borderRadius: 999,
                  padding: '10px 24px',
                  color: 'rgba(226,234,245,0.92)',
                  fontSize: 21,
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
            borderTop: '1px solid rgba(184,199,220,0.22)',
            paddingTop: 22,
            color: 'rgba(184,199,220,0.85)',
            fontSize: 20,
            letterSpacing: '0.08em',
            position: 'relative',
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
