// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
  ],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    
     extend: {
      screens: {
        smd: {'min':'768px', 'max':'900px'},
        ...defaultTheme.screens,
      },
      spacing: {
          "100":"500px"
       },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bg: {
          light: '#FDFCFD',
          DEFAULT: '#FDFCFD',
          dark: '#1F252B',
        },
        yellow: {
          light: '#FFE600',
          DEFAULT: '#FFE600',
          dark: '#FFE600',
        },
        orange: {
          light: '#FF7B48',
          DEFAULT: '#FF7B48',
          dark: '#FF7B48',
        },
        fucsia: {
          light: '#FF0F91',
          DEFAULT: '#FF0F91',
          dark: '#FF0F91',
        },
      },
      fontFamily: {
        poetsenOne: ['PoetsenOne'],
        worksans: ['WorkSans'],
      },
      fontSize: {
        "8.5xl": ['7.5rem', '1'],
        "10xl": ['9rem', '1'],
      },
      backgroundImage: {
        'bg-image': "url('/images/background.svg')",
       },
     animation: {
      'spin-slow': 'spin 3s linear infinite',
      wiggle: 'wiggle 1s ease-in-out infinite',
      blink:'blink 1s linear infinite'
     },
     keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-5deg)' },
        '50%': { transform: 'rotate(5deg)' },
      },
      blink:{
        '0%, 100%': { opacity: 0 },
        '25%, 75%': { opacity: 0.5 },
        '50%': { opacity: 1 }
      }
     }
    }
  },
  variants: {
    extend: {
      opacity: ["disabled", "first"],
      cursor: ["disabled"],
      backgroundColor: ["checked", "disabled"],
      textColor: ["checked", "first", "active"],
      borderColor: ["checked"],
      dropShadow:['hover'],
      backgroundImage:['hover'],
      animation:['hover'],

    },
  },
  plugins: [],
}
