/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FE5D37",
        "secondary": "#74787C",
        "main-text": "white",
        "secondary-text": "#FFFFFF80",
        "fac1": "rgba(255, 255, 255, .9);"
      }
    },
  },
  plugins: [],
}

