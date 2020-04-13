import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'app',
    file: 'public/build/main.bundle.js',
  },
  plugins: [
    commonjs(),
    postcss({
      extract: 'public/build/main.bundle.css',
    }),
    replace({
      DEV_MODE: !production,
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    !production && livereload('public'),
    production && terser(),
    svelte({
      dev: !production,
      css: (css) => {
        css.write('public/build/components.bundle.css', false)
      },
    }),
  ],
  watch: {
    clearScreen: false,
  },
}
