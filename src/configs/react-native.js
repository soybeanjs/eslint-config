/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  env: {
    'react-native/react-native': true
  },
  extends: [require.resolve('./react.js'), 'react-native']
};
