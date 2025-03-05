import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class', 'class'],
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
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        tertiary: {
          DEFAULT: '#08BD80'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        dark: {
          DEFAULT: '#021422'
        },
        light: {
          DEFAULT: '#F9F9F9'
        },
        silver: {
          DEFAULT: '#E7E7E7'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      backgroundImage: {
        hero: 'url(/images/hero.jpg)'
      },
      boxShadow: {
        input:
          '`0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`',
        'beam-collision':
          '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
      },
      animation: {
        loading: 'loading ease-in-out 1s infinite alternate',
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
      },
      keyframes: {
        loading: {
          '0%, 50%, 100%': {
            transform: 'translateY(0)'
          },
          '25%, 75%': {
            transform: 'translateY(-80px)'
          }
        },
        scroll: {
          to: {
            transform: 'translate(calc(-60%))'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [AddCustomClass]
} satisfies Config;

function AddCustomClass({ addComponents }: any) {
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
}

export default config;
