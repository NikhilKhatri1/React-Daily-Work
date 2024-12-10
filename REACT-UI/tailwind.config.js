module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0px 0px 100px 0px rgba(255, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('daisyui'), // Keep this line
  ],
};
