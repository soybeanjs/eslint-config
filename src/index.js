const base = require('./configs/base');
const vue = require('./configs/vue');
const vue2 = require('./configs/vue2');
const react = require('./configs/react');
const reactNative = require('./configs/react-native');
const solid = require('./configs/solid');
const svelte = require('./configs/svelte');
const astro = require('./configs/astro');

/**
 * @type {import('eslint').ESLint.Plugin}
 */
module.exports = {
  configs: {
    base,
    vue,
    vue2,
    react,
    'react-native': reactNative,
    solid,
    svelte,
    astro
  }
};
