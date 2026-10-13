import { defineConfig } from 'vite-plus';
import { fmt, lint } from '@soybeanjs/oxc-config';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  staged: {
    '*': 'vp check --fix'
  },
  lint,
  fmt: {
    ...fmt,
    ignorePatterns: ['CHANGELOG.md']
  },
  resolve: {
    tsconfigPaths: true
  },
  pack: {
    entry: ['src/index.ts'],
    platform: 'node',
    deps: {
      neverBundle: Object.keys(pkg.devDependencies)
    },
    clean: true,
    dts: true,
    sourcemap: false,
    minify: true,
    fixedExtension: false
  }
});
