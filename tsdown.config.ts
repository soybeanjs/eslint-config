import { defineConfig } from 'tsdown';
import pkg from './package.json';

export default defineConfig({
  entry: ['src/index.ts'],
  platform: 'node',
  external: Object.keys(pkg.devDependencies),
  clean: true,
  dts: true,
  sourcemap: false,
  minify: true,
  format: ['esm'],
  target: 'node18'
});
