/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: "Inter",
        secondayFont: "Lexend Deca",
      },

      colors: {
        // Primary
        veryDarkBlue: "hsl(233, 47%, 7%)",
        darkStaturatedBlue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",

        //Neutral
        white: "hsl(0, 0%, 100%)",
        slightlyTransparentMain: "hsla(0, 0%, 100%, 0.75)",
        slightlyTransparentStats: "hsla(0, 0%, 100%, 0.6)",
      },
    },
  },
  plugins: [],
};
