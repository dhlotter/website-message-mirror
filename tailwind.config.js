/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '0.675rem',      // 0.75rem * 0.9
      'sm': '0.81rem',       // 0.9rem * 0.9
      'base': '0.9rem',      // 1rem * 0.9
      'lg': '1.035rem',      // 1.15rem * 0.9
      'xl': '1.215rem',      // 1.35rem * 0.9
      '2xl': '1.44rem',      // 1.6rem * 0.9
      '3xl': '1.8rem',       // 2rem * 0.9
      '4xl': '2.16rem',      // 2.4rem * 0.9
      '5xl': '2.7rem',       // 3rem * 0.9
      '6xl': '3.6rem',       // 4rem * 0.9
      '7xl': '4.5rem',       // 5rem * 0.9
      '8xl': '5.4rem',       // 6rem * 0.9
      '9xl': '7.2rem',       // 8rem * 0.9
    },
    spacing: {
      px: '0.9px',
      0: '0px',
      0.5: '0.113rem',       // 0.125rem * 0.9
      1: '0.225rem',         // 0.25rem * 0.9
      1.5: '0.338rem',       // 0.375rem * 0.9
      2: '0.45rem',          // 0.5rem * 0.9
      2.5: '0.563rem',       // 0.625rem * 0.9
      3: '0.675rem',         // 0.75rem * 0.9
      3.5: '0.788rem',       // 0.875rem * 0.9
      4: '0.9rem',           // 1rem * 0.9
      5: '1.125rem',         // 1.25rem * 0.9
      6: '1.35rem',          // 1.5rem * 0.9
      7: '1.575rem',         // 1.75rem * 0.9
      8: '1.8rem',           // 2rem * 0.9
      9: '2.025rem',         // 2.25rem * 0.9
      10: '2.25rem',         // 2.5rem * 0.9
      11: '2.475rem',        // 2.75rem * 0.9
      12: '2.7rem',          // 3rem * 0.9
      14: '3.15rem',         // 3.5rem * 0.9
      16: '3.6rem',          // 4rem * 0.9
      20: '4.5rem',          // 5rem * 0.9
      24: '5.4rem',          // 6rem * 0.9
      28: '6.3rem',          // 7rem * 0.9
      32: '7.2rem',          // 8rem * 0.9
      36: '8.1rem',          // 9rem * 0.9
      40: '9rem',            // 10rem * 0.9
      44: '9.9rem',          // 11rem * 0.9
      48: '10.8rem',         // 12rem * 0.9
      52: '11.7rem',         // 13rem * 0.9
      56: '12.6rem',         // 14rem * 0.9
      60: '13.5rem',         // 15rem * 0.9
      64: '14.4rem',         // 16rem * 0.9
      72: '16.2rem',         // 18rem * 0.9
      80: '18rem',           // 20rem * 0.9
      96: '21.6rem',         // 24rem * 0.9
    },
    extend: {
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px 2px rgba(56, 189, 248, 0.5)',
      }
    },
  },
  plugins: [],
}
