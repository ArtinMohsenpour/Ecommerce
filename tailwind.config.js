/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Exo 2",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        body: "#1D1F23",
        primary: "#151618",
        accent: {
          DEFAULT: "#F6CD46",
          hover: "#E1B72E",
        },
        persianyellow: "#deb645",
        persianlightblue: "#6f9cc9",
        persiandarkblue: "#004BE5",
        persianblue: "#52B0D1",
        persianevoblue: "#57c5c6",
        persianchryslerpink: "#FEC5B2",
        persianpink: "#F77FBE",
      },
      backgroundImage: {
        mainSlider: "url('img/mainSlider_bg.png')",
      },
      keyframes: {
        shake: {
          "10%, 90%": { transform: "translate3d(-1px, 0,0 )" },
          "20%, 80%": { transform: "translate3d(2px, 0,0 )" },
          "30%, 50%, 70%": { transform: "translate3d(-4px, 0,0 )" },
          "40%, 60%": { transform: "translate3d(4px, 0,0 )" },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
