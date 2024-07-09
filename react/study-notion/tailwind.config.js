/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?w=1060&t=st=1720466325~exp=1720466925~hmac=c45a6795a861172215b96173ecc3aa7fd4c6f936a5157ee127fab3e0357178cb')",
      }
    },
  },
  plugins: [],
};
