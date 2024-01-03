/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const { withTV } = require('tailwind-variants/dist/transformer');

module.exports = withTV({
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});