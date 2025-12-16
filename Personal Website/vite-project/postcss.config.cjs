// postcss.config.cjs

module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Use the newly installed package/path
    require('autoprefixer'),
  ],
};
