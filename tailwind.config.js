module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans"],
      },
      colors: {
        gold: "#FFD338",
        "jet-black": "#222222",
        "slate-gray": "#555555",
        champagne: "#FFF9E8",
        "dim-gray": "#666666",
        silver: "#999999",
      },
      spacing: {},
      fontSize: {
        small: "1rem", // 16px
        medium: "1.124rem", // 18px
        large: "1.25rem", // 20px
        "2xl": "1.375rem", // 22px
        "5xl": "3.25rem", // 52px
        "6xl": "3.5rem", // 56px
        "7xl": "4.25rem", // 68px
      },
    },
  },
  plugins: [],
};
