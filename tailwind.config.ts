import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '250px',
      sm: '330px',
      md: '400px',
      lg: '768px',
      xl: '1440px',
      '2xl': '1536px',
    },
    colors: {
      'yellow': '#FBCA6B',
      'blue': '#7BDBFF',
      'faded-blue': '#6C8E9A',
      'orange': '#C8652E',
      'drk-blue': '#231B2A',
      'error-red': 'rgb(225 29 72)',
    },
    backgroundColor: {
      'yellow-btn': '#FCD372',
      'blue-btn': '#7BDBFF',
      'card-black': '#231B2A',
      'bubble': 'rgba(211, 211, 211, 0.2)'
    },
    fontFamily: {
      'primary': ['Fredoka', 'sans-serif'],
      'secondary': ['Codystar', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #FDF6CB, #FFD648)',
        'yellow-gradient': 'linear-gradient(rgba(248, 212, 141, 0.4), transparent)',
        'gradient': 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)',
        'main-bg': 'url("/park.png")',
        'dogs': 'url("/dogs.png")',
        'labs': 'url("/labs.png")',
      },
      borderRadius: {
        'sm': '0.5rem 0.5rem',
        'l': '1.4rem 1.4rem',
      },
      boxShadow: {
        'drop': '-4px 4px 4px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'swing': 'swing 3s ease infinite',
      },
      keyframes: {
        'swing': {
          '0%, 100%': { transform: 'rotate(8deg) translate(-12px, -2px)' },
          '50%': { transform: 'rotate(-8deg) translate(10px, -8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
