/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#170F49",
          2: "#1D4292",
          3: "#d2d9e9",
          4: "#2D3748",
          5: "#6F6C90",
          6: "rgba(29,66,146,0.2)",
        },
        light: "#f6faff",
        gray: {
          1: "#808080",
          2: "#8F8F8F",
          3: "#444444",
          4: "#484848",
          5: "#989898",
        },
      },
    },
    plugins: [],
  },
};
