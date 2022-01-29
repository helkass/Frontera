module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "Arial", "sans-serif"],
      },
      boxShadow: {
        "3d": "rgb(153 27 27) 0px 2px 2px 0.5px;",
      },
      screen: {
        vsm: "455px",
      },
    },
  },
  plugins: [],
};
