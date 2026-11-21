/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Segoe UI', 'sans-serif'],
        display: ['Playfair Display', 'Noto Serif KR', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          950: '#04050c',
          900: '#070913',
          800: '#0b0e20',
          700: '#12162e',
        },
        gold: {
          DEFAULT: '#d9b877',
          bright: '#f4dfa8',
          deep: '#a97f3f',
          pale: '#f7eeda',
        },
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      boxShadow: {
        lux: '0 30px 80px -46px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.07)',
        gold: '0 18px 44px -18px rgba(217,184,119,0.6)',
      },
    },
  },
  plugins: [],
}
