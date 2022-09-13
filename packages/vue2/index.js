module.exports = {
  extends: ['plugin:vue/recommended', 'soybeanjs-ts'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue']
      },
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: ['*.html'],
      rules: {
        'vue/comment-directive': 'off'
      }
    }
  ],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']
      }
    ]
  }
};
