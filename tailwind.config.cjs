/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblue: "#2D5BFE",
        mygrey: "#7C7C7C",
        dot: "#14254380",
        body: "#020710",
        bl: "#000000",
        mixed: "#151923",
        secondgrey: "#797979",
        footerbg: "#111c2f",
        footerwhite: "#D8D8D8",
        inputbg: "#202E45",
        emailcolor: "#DDDDDD",
      },
    },
    fontFamily: {
      abc: ["inter", "sans-serif"],
    },
  },
  plugins: [],
};
