/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './src/landings/**/*.{ts,tsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
