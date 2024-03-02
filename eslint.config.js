import 'tsx';
import { createRequire } from 'node:module';
import { defineConfig as defineConfig2 } from './dist/index.js';

const require = createRequire(import.meta.url);

const { defineConfig: defineConfig1 } = require('./src/index.ts');

const useBuild = false;

/** @type {import('./src/index.ts').defineConfig} */
const defineConfig = useBuild ? defineConfig2 : defineConfig1;

export default defineConfig(
  {
    vue: true,
    react: { files: ['**/*react.tsx'] },
    solid: { files: ['**/*solid.tsx'] },
    svelte: true,
    astro: true,
    unocss: true,
    formatter: {
      html: true,
      css: true,
      json: true,
      markdown: true,
      yaml: true,
      toml: true
    }
  },
  {
    rules: {
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index', 'App', '[id]']
        }
      ]
    }
  }
);
