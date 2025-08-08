import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1f2937 40%, #111827 100%)',
      },
      boxShadow: {
        glass: '0 10px 30px -10px rgba(0,0,0,0.35)',
      },
      fontFamily: {
        brand: ['"Windsor BT"', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
