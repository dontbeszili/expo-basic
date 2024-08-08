/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    
      colors: {
        DEFAULT: "#CDA",
        bcr: {
          DEFAULT: "#2870ED",
          primary: "#F7F7F7",
        },
      },
    },
  },
  plugins: [],
};
