const prettierRules = require('../rules/prettier');

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['plugin:astro/recommended', require.resolve('./base.js')],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            ...prettierRules,
            parser: 'astro',
            plugins: [require.resolve('prettier-plugin-astro')]
          }
        ]
      }
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser'
    }
  ]
};
