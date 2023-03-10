/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', require.resolve('./base.js')],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
};
