import presetUno from '@unocss/preset-uno';

export default {
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist']
    }
  },
  presets: [presetUno({ dark: 'class' })]
};
