/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Jost:["Jost", "sans-serif"],
      },
      colors:{
        yelloww:'#fbffa7',
        orangee:'#ed1b1b ',
        purplee:'#b1c5ff',
        viollet:'#d5b3ff',
        greenn:'#b6ffc0',
        bleuu:'#0000ff'
      },
      container:{
        center: true,
        padding:{
          DEFAULT:'1rem',
          sm:'4rem',
         
        }
      },
     
    },
  },
  plugins: [],
}

