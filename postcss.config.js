const production = process.env.NODE_ENV === 'production'

const purge = {
  content: ['src/**/*.svelte'],
  extractors: [
    {
      extractor: (value) => value.match(/[A-z0-9-:%/]+/g) || [],
      extensions: ['svelte'],
    },
  ],
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-nested'),
    require('autoprefixer'),
    ...(production
      ? [require('@fullhuman/postcss-purgecss')(purge), require('cssnano')]
      : []),
  ],
}
