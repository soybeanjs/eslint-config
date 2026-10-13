import { defineConfig } from "vite-plus";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  staged: {
    "*": "pnpm lint",
  },
  resolve: {
    tsconfigPaths: true,
  },
  pack: {
    entry: ["src/index.ts"],
    platform: "node",
    deps: {
      neverBundle: Object.keys(pkg.devDependencies),
    },
    clean: true,
    dts: true,
    sourcemap: false,
    minify: true,
    fixedExtension: false,
  },
});
