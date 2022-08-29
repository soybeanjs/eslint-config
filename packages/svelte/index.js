module.exports = {
  plugins: ['svelte3'],
  extends: ['soybeanjs-ts'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ]
};
