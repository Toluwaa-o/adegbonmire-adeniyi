/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkest-blue": "#06273A",
        "dark-blue": "#28425F",
        "accent-white": "#FFFEF8",
        contrast: "#0d567f",
      },
    },
  },
  plugins: [],
};
