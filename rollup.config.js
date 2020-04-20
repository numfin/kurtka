// import { resolve } from "path";

import typescript from "@rollup/plugin-typescript";
// import babel from "rollup-plugin-babel";
// import alias from "@rollup/plugin-alias";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

const isDev = process.env.ROLLUP_WATCH === "true";

// const aliases = alias({
//   entries: [{ find: "~/", replacement: resolve(__dirname, "src") }],
// });

const prodPlugins = isDev ? [] : [terser()];

/** @type {import("rollup").RollupOptions} */
const config = {
  input: "src/client/index.ts",
  output: {
    dir: "dist",
    strict: true,
    format: "es",
    sourcemap: true,
  },
  plugins: [
    typescript({ lib: ["es5", "es6", "dom"], target: "es5" }),
    replace(),
    ...prodPlugins,
  ],
};
export default config;
