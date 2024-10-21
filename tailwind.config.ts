import type { Config } from 'tailwindcss';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import plugin from 'tailwindcss/plugin';
import TailwindCssAnimate from 'tailwindcss-animate';

export const AddVariablesForColors = plugin(({ addBase, theme }) => {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({ ':root': newVars });
});

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
        loading: 'loading ease-in-out 1s infinite alternate'
      },
      keyframes: {
        loading: {
          '0%, 50%, 100%': { transform: 'translateY(0)' },
          '25%, 75%': { transform: 'translateY(-80px)' }
        }
      }
    }
  },
  plugins: [
    plugin(({ addComponents }) => {
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
        },
        '.tennis-ball': {
          height: '90px',
          width: '90px',
          overflow: 'hidden',
          transform: 'translateY(0)',
          borderRadius: '50%'
        },
        '.tennis-ball::before': {
          content: '""',
          position: 'absolute',
          display: 'block',
          left: '65px',
          height: '80px',
          width: '80px',
          border: 'solid 3px #fff',
          borderRadius: '50%',
          boxSizing: 'border-box'
        },
        '.tennis-ball::after': {
          content: '""',
          position: 'absolute',
          display: 'block',
          left: '-55px',
          height: ' 80px',
          width: '80px',
          border: 'solid 3px #fff',
          borderRadius: '50%',
          boxSizing: 'border-box'
        }
      });
    }),
    AddVariablesForColors,
    TailwindCssAnimate
  ]
} satisfies Config;

export default config;
