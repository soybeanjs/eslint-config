import { ensurePackages, interopDefault } from '../shared';
import type { FlatConfigItem, PartialPrettierExtendedOptions, RequiredRuleBaseOptions } from '../types';
import { createTsRules } from './typescript';

export async function createAstroConfig(
  options?: RequiredRuleBaseOptions,
  prettierRules: PartialPrettierExtendedOptions = {},
  overrides: Record<string, any> = {}
) {
  if (!options) return [];

  const { files } = options;

  await ensurePackages(['eslint-plugin-astro', 'astro-eslint-parser', 'prettier-plugin-astro']);

  const [pluginAstro, pluginTs, pluginPrettier] = await Promise.all([
    interopDefault(import('eslint-plugin-astro')),
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('eslint-plugin-prettier'))
  ]);

  const tsRules = await createTsRules();

  const { plugins = [] } = prettierRules;

  const pRules: PartialPrettierExtendedOptions = {
    ...prettierRules,
    plugins: plugins.concat('prettier-plugin-astro')
  };

  const configs: FlatConfigItem[] = [
    ...(pluginAstro.configs.recommended as FlatConfigItem[]),
    {
      files,
      plugins: {
        '@typescript-eslint': pluginTs,
        prettier: pluginPrettier
      },
      rules: {
        ...tsRules,
        ...overrides,
        'prettier/prettier': [
          'warn',
          {
            ...pRules,
            parser: 'astro'
          }
        ]
      }
    }
  ];

  return configs;
}
