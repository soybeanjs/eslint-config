/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['soybeanjs/vue'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['demo']
      }
    ]
  }
};
