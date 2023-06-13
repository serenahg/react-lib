import styles from "rollup-plugin-styles";
import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";

const input = "src/index.js";

const MODE = [
  {
    format: "cjs",
  },
  {
    format: "esm",
  },
  {
    format: "umd",
  },
];

const config = MODE.map((m) => ({
  input: input,
  output: {
    name: "react-awesome-buttons",
    file: `dist/index.${m.format}.js`,
    format: m.format,
    exports: "auto",
    sourcemap: true,
    globals: {
      "@babel/runtime/helpers/slicedToArray": "_slicedToArray",
      react: "React",
    },
  },
  external: ["react", /@babel\/runtime/],
  plugins: [
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/transform-runtime"],
      babelHelpers: "runtime",
    }),
    styles({
      postcss: {
        plugins: [
          autoprefixer(),
        ],
      },
    }),
  ],
}));

export default config;
