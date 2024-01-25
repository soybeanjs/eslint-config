import { ensurePackages, interopDefault } from '../shared';
import type { FlatConfigItem, PartialPrettierExtendedOptions, RequiredRuleBaseOptions } from '../types';
import { createTsRules } from './typescript';

export async function createAstroConfig(
  options?: RequiredRuleBaseOptions,
  prettierRules: PartialPrettierExtendedOptions = {}
) {
  if (!options) return [];

  const { files, overrides } = options;

  await ensurePackages(['eslint-plugin-astro', 'astro-eslint-parser', 'prettier-plugin-astro']);

  const [pluginAstro, parserAstro, pluginTs, pluginPrettier] = await Promise.all([
    interopDefault(import('eslint-plugin-astro')),
    interopDefault(import('astro-eslint-parser')),
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
    {
      files,
      languageOptions: {
        parser: parserAstro,
        parserOptions: {
          extraFileExtensions: ['.astro'],
          parser: '@typescript-eslint/parser',
          sourceType: 'module'
        }
      },
      plugins: {
        '@typescript-eslint': pluginTs,
        astro: pluginAstro,
        prettier: pluginPrettier
      },
      processor: pluginAstro.processors.astro,
      rules: {
        ...tsRules,
        ...(pluginAstro.configs.recommended.rules as FlatConfigItem['rules']),
        ...overrides,
        'prettier/prettier': [
          'warn',
          {
            ...pRules,
            parser: 'astro'
          }
        ]
      }
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      languageOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ];

  return configs;
}
