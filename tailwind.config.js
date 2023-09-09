/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      blue: "#3F5BF6",
      gray: {
        900: "#101828",
        700: "#344054",
        600: "#475467",
        500: "#667085",
        300: "#D0D5DD",
        normal: "#272727",
      },
    },
  },
  plugins: [],
};
