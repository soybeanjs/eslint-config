const prettierRules = require('../rules/prettier');

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['plugin:svelte/recommended', require.resolve('./base.js')],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.svelte']
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            ...prettierRules,
            parser: 'svelte',
            plugins: [require.resolve('prettier-plugin-svelte')]
          }
        ]
      }
    }
  ]
};
