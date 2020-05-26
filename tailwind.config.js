module.exports = {
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        inter: `'Inter', sans-serif`,
      },
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
  purge: ['./src/**/*.svelte'],
}
