import builtins from "rollup-plugin-node-builtins";
import pkg from "./package.json";

export default [
  {
    input: "src/main.js",
    external: ["path", "node-dependency-injection"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [builtins()],
  },
];
