/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#050509',
        content: '#0a0a10',
        contact: '#0a0a15'
      },
      fontSize: {

        '8xl': '6rem',
        "10xl": "10rem"      // 8X Large
      },
      fontFamily: {

        custom: ["PT Sans", "sans-serif"],
        navbar: ["Mulish", "sans-serif"]
      }
    },
  },
  plugins: [],
}

