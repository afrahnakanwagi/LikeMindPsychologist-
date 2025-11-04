/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
];
export const theme = {
  extend: {},
};
export const plugins = [];/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Alegreya Sans SC'", "sans-serif"],
        body: ["'Alegreya Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
