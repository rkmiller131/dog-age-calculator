import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1536px',
    },
    colors: {
      'yellow': '#FBCA6B',
      'blue': '#7BDBFF',
      'faded-blue': '#6C8E9A',
      'orange': '#C8652E',
    },
    backgroundColor: {
      'card-black': '#231B2A',
    },
    fontFamily: {
      'primary': ['Fredoka', 'sans-serif'],
      'secondary': ['Codystar', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #FDF6CB, #FFD648)',
        'main-bg': 'url("/park.png")',
        'dogs': 'url("/dogs.png")',
        'labs': 'url("/labs.png")',
      },
      borderRadius: {
        'sm': '0.5rem',
        'l': '1.5rem',
      }
    },
  },
  plugins: [],
}
export default config
