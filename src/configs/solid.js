/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  plugins: ['solid'],
  extends: ['plugin:solid/typescript', require.resolve('./base.js')]
};
