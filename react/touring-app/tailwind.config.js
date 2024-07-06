/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-rgba': '0px 3px 8px rgba(0, 0, 0, 0.24)',
        'custom-hover': '5px 5px 5px rgba(0, 0, 0, 0.54)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
