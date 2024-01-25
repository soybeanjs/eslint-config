import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  external: [
    '@antfu/eslint-define-config',
    'eslint-plugin-vue',
    'vue-eslint-parser',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-react-refresh',
    'eslint-plugin-react-native',
    'eslint-plugin-solid',
    'eslint-plugin-svelte',
    'prettier-plugin-svelte',
    'svelte-eslint-parser',
    'eslint-plugin-astro',
    'astro-eslint-parser',
    'prettier-plugin-astro',
    'prettier-plugin-toml',
    '@toml-tools/parser'
  ],
  sourcemap: false,
  target: 'node14',
  minify: false,
  shims: true
});
