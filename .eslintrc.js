module.exports = {
  extends: ['soybeanjs'],
  overrides: [
    {
      files: ['./scripts/**.ts'],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
};
