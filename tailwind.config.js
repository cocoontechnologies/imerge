/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        arsenal: ['Arsenal', 'sans-serif'],
      },
      animation: {

      },
      keyframes: {

      },
      colors: {
        'black': {
          100: '#03090c'
        },
        'white': {
          100: '#fafafa'
        },
        // navy-700 default (light navy)
        'navy': {
          50: '#f0fafb',
          100: '#d8f0f5',
          200: '#b6e0eb',
          300: '#83c8dd',
          400: '#49a7c7',
          500: '#2d8bad',
          600: '#287092',
          700: '#2a6481',
          800: '#274d63',
          900: '#254154',
          950: '#132a39',
        },      
        // mineral-700 default (mineral green)
        'mineral': {
          50: '#f3faf8',
          100: '#d7f0ea',
          200: '#afe0d6',
          300: '#7ecabc',
          400: '#54ada0',
          500: '#3a9286',
          600: '#2c756c',
          700: '#2b6862',
          800: '#234c48',
          900: '#21403d',
          950: '#0e2524',
        },
        // dusk-800 default (dusk blue)
        'dusk': {
          '50': '#f3f6fc',
          '100': '#e7edf7',
          '200': '#c9d9ee',
          '300': '#99b9e0',
          '400': '#6295ce',
          '500': '#3d77ba',
          '600': '#2d5d9c',
          '700': '#254b7f',
          '800': '#254672',
          '900': '#213859',
          '950': '#16243b',
        },
      },
      fontSize: {
        xs : ['0.875rem', '150%'],
        sm : ['1rem', '130%'],
        base : ['1.2rem', '130%'],
        md : ['1.5rem', '130%'],
        lg : ['2.5rem', '100%'],
        xl : ['3.125', '100%'],
        '2xl' : ['4.25rem', '110%'],
        '3xl' : ['7.125rem', '90%'],
        'hero': ['10.875rem', '80%'],
        'footer': ['12.5rem', '80%'],
      },
      screens: {
        mobile : '480px',
        tablet : '768px',
        laptop : '1024px',
        desktop : '1366px',
        hd : '1920px',
      }
  },
  plugins: [],
  }
}