// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'experience': "url('/Assets/experiencebg.png')",
        'about': "url('/Assets/aboutbg.png')",
      }),
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        'dist': '15rem',
      },
    },
  },
  plugins: [],

}