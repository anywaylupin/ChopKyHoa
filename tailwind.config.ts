import type { Config } from 'tailwindcss';
import TailwindCssAnimate from 'tailwindcss-animate';
import { AddVariablesForColors, AuroraBackground, GridAndDotsBackground } from './plugins/tailwindcss';
import plugin from 'tailwindcss/plugin';

const config = {
  darkMode: ['selector'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  prefix: '',
  theme: {
    extend: {
      screens: {
        xs: '425px'
      },
      colors: {
        primary: {
          DEFAULT: '#D7FF01'
        },
        secondary: {
          DEFAULT: '#E17A61'
        },
        accent: {
          DEFAULT: '#D7FF01'
        },
        dark: {
          DEFAULT: '#021422'
        },
        light: {
          DEFAULT: '#F9F9F9'
        },
        silver: {
          DEFAULT: '#E7E7E7'
        }
      },
      backgroundImage: {
        hero: 'url(/hero.jpg)'
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
        'beam-collision':
          '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
      },
      animation: {
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        aurora: 'aurora 60s linear infinite',
        'meteor-effect': 'meteor 5s linear infinite',
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        shimmer: 'shimmer 2s linear infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' }
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0'
          }
        },
        moveHorizontal: {
          '0%': { transform: 'translateX(-50%) translateY(-10%)' },
          '50%': { transform: 'translateX(50%) translateY(10%)' },
          '100%': { transform: 'translateX(-50%) translateY(-10%)' }
        },
        moveInCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        moveVertical: {
          '0%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        scroll: {
          to: { transform: 'translate(calc(-60%))' }
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' }
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%,-40%) scale(1)' }
        }
      }
    }
  },
  plugins: [
    plugin(({ addComponents, addUtilities }) => {
      addComponents({
        '.panel': {
          position: 'relative',
          display: 'flex'
        },
        '.no-visible-scrollbar': {
          MsOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        },
        '.no-visible-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.animate-underline': {
          display: 'block',
          position: 'relative',
          padding: '0.1em 0',
          overflow: 'hidden'
        },
        '.animate-underline::after': {
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '0.1em',
          backgroundColor: '#000',
          opacity: '1',
          transform: 'translate3d(-100%, 0, 0)',
          transition: 'opacity 300ms, transform 300ms'
        },
        '.animate-underline:hover::after': {
          transform: 'translate3d(0, 0, 0)'
        },
        '.animate-underline:focus::after': {
          transform: 'translate3d(0, 0, 0)'
        }
      });

      addUtilities({
        '.transform-3d': {
          transformStyle: 'preserve-3d'
        },
        '.scrollbar-none': {
          scrollbarWidth: 'none'
        },
        '.small-caps': {
          fontVariant: 'small-caps'
        }
      });
    }),
    AddVariablesForColors,
    AuroraBackground,
    GridAndDotsBackground,
    TailwindCssAnimate
  ]
} satisfies Config;

export default config;
