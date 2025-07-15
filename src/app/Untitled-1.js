// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}

// Importing tailwindcss styles
@tailwind base;
@tailwind components;
@tailwind utilities;