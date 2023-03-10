const prettierRules = require('../rules/prettier');

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  plugins: ['svelte3'],
  extends: ['./ts.js', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: '@typescript-eslint/parser',
      processor: 'svelte3/svelte3',
      rules: {
        'prettier/prettier': [
          'error',
          { ...prettierRules, paser: 'svelte', plugins: [require.resolve('prettier-plugin-svelte')] }
        ]
      }
    }
  ],
  settings: {
    'svelte3/typescript': require('typescript'),
    'svelte3/ignore-styles': () => true
  },
  rules: {
    'prettier/prettier': ['error', prettierRules]
  }
};
