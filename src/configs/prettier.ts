import prettierRules from 'eslint-config-prettier';
import { GLOB_PRETTIER_LINT } from '../constants/glob';
import { interopDefault } from '../shared';
import type { FlatConfigItem, PartialPrettierExtendedOptions } from '../types';

const { rules: eslintRules } = prettierRules;

export async function createPrettierConfig(rules: PartialPrettierExtendedOptions) {
  const pluginPrettier = await interopDefault(import('eslint-plugin-prettier'));

  const { plugins = [] } = rules;

  const pRules: PartialPrettierExtendedOptions = {
    ...rules,
    plugins
  };

  const configs: FlatConfigItem[] = [
    {
      files: GLOB_PRETTIER_LINT,
      plugins: {
        prettier: pluginPrettier
      },
      rules: {
        ...eslintRules,
        'prettier/prettier': ['warn', pRules],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off'
      }
    }
  ];

  return configs;
}
