/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'spring-green': {  DEFAULT: '#00FF94',  50: '#B8FFE1',  100: '#A3FFD8',  200: '#7AFFC7',  300: '#52FFB6',  400: '#29FFA5',  500: '#00FF94',  600: '#00C773',  700: '#008F53',  800: '#005732',  900: '#001F12',  950: '#000301'},
        customGreen: '#1C7D54',
        background1: '#E2E2E2',
        profile: '#D9D9D9'
      },
    },
  },
  plugins: [],
}

