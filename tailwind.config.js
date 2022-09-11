/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      transitionProperty: {
        appear: "flex-basis, overflow-x",
      },
    },
  },
  plugins: [],
};
