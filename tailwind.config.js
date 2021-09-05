module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        first: "#22577A",
        second: "#80ED99",
        third: "#38a3a5",
        fourth: "#57cc99",
        gold: "#ffd700",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
