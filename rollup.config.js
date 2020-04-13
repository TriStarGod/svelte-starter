import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    commonjs(),
    replace({
      DEV_MODE: !production,
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    !production && livereload("public"),
    production && terser(),
    svelte({
      dev: !production,
      css: (css) => {
        css.write("public/build/bundle.css");
      },
    }),
  ],
  watch: {
    clearScreen: false,
  },
};
