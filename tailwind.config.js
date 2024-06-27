/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        "light-cyan" : `var(--Light-Cyan)`,
        "neon-green" : `var(--Neon-Green)` ,
        "grayish-blue":`var(--Grayish-Blue )`,
        "dark-grayish-blue" : `var(--Dark-Grayish-Blue)` ,
        "dark-blue" :`var(--Dark-Blue)`,
      }
    },
  },
  plugins: [],
}