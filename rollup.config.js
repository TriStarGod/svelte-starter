import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import svelte from 'rollup-plugin-svelte'
import svg from 'rollup-plugin-svg'
import { terser } from 'rollup-plugin-terser'

const dev = process.env.NODE_ENV !== 'production'

export default {
  input: 'src/main.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'main',
    file: 'public/build/main.bundle.js',
  },
  plugins: [
    commonjs(),
    dev && livereload('public'),
    postcss({
      extract: 'main.bundle.css',
      minimize: !dev,
    }),
    replace({
      DEV_MODE: dev,
    }),
    resolve({
      browser: true,
      dedupe: (importee) =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    dev && serve('public'),
    svelte({
      dev,
      emitCss: true,
    }),
    svg(),
    !dev && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
