/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        "light-red": "#ff5757",
        "orange-yellow": "#ffb01f",
        "green-teal": "#00bd91",
        "colbalt-blue": "#1125d4",
        "light-slate-blue":"#7857ff",
        "light-royal-blue":"#2e2be9",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue":"hsla(241, 72%, 46%, 0)",
        "pale-blue": "#ebf1ff",
        "light-lavendar":"#c8c7ff",
        "dark-gray-blue":"#303b5a"
      },
      fontFamily:{
        Hanken:[ "Hanken Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}
