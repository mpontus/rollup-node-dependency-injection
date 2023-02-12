import builtins from "rollup-plugin-node-builtins";
import copy from "rollup-plugin-copy";
import pkg from "./package.json";

export default [
  {
    input: "src/main.js",
    external: ["path", "node-dependency-injection"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [
      builtins(),
      copy({
        targets: [{ src: "src/services.yaml", dest: "dist" }],
      }),
    ],
  },
];
