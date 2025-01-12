const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Files to scan for used classes
      safelist: [], // Add any class names you want to exclude from purging
    }),
  ],
};
