/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "greenWhite": "#EFFDF0",
        "description": "#7B7B7B",
        "mainGreen": "#007145",
        "lightGreen": "#EFFDF0",
      },
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
