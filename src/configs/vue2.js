/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['plugin:vue/recommended', require.resolve('./base.js')],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: {
          js: 'espree',
          jsx: 'espree',
          ts: '@typescript-eslint/parser',
          tsx: '@typescript-eslint/parser'
        },
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  ],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'App']
      }
    ]
  }
};
