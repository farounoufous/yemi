/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        smoke: 'rgb(var(--c-smoke) / <alpha-value>)',
        mint: 'rgb(var(--c-mint) / <alpha-value>)',
        claret: 'rgb(var(--c-claret) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Geist Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          to: { transform: 'translate3d(-50%, 0, 0)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite reverse',
        'spin-slow': 'spin-slow 28s linear infinite',
        'spin-medium': 'spin-slow 14s linear infinite',
        marquee: 'marquee 34s linear infinite',
      },
    },
  },
  plugins: [],
}
