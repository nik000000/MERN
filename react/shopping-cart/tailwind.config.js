/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'box': '0 0 15px 15px rgba(0, 0, 0, 0.4)', // Custom larger shadow with higher opacity
        '4xl': '0 0 50px 50px rgba(0, 0, 0, 0.1)', // Even larger shadow
        
      },keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-5px)' }, // First bounce peak
          '50%': { transform: 'translateY(0)' },    // First hit ground
          '75%': { transform: 'translateY(-5px)' }, // Second bounce peak
          '90%': { transform: 'translateY(0)' },    // Second hit ground
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
