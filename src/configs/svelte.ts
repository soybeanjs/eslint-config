import { ensurePackages, interopDefault } from '../shared';
import type { FlatConfigItem, PartialPrettierExtendedOptions, RequiredRuleBaseOptions } from '../types';
import { createTsRules } from './typescript';

export async function createSvelteConfig(
  options?: RequiredRuleBaseOptions,
  prettierRules: PartialPrettierExtendedOptions = {}
) {
  if (!options) return [];

  const { files, overrides } = options;

  await ensurePackages(['eslint-plugin-svelte', 'svelte-eslint-parser', 'prettier-plugin-svelte']);

  const [pluginSvelte, parserSvelte, pluginTs, pluginPrettier] = await Promise.all([
    interopDefault(import('eslint-plugin-svelte')),
    interopDefault(import('svelte-eslint-parser')),
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('eslint-plugin-prettier'))
  ]);

  const tsRules = await createTsRules();

  const { plugins = [] } = prettierRules;

  const pRules: PartialPrettierExtendedOptions = {
    ...prettierRules,
    plugins: plugins.concat('prettier-plugin-svelte')
  };

  const configs: FlatConfigItem[] = [
    {
      files,
      languageOptions: {
        parser: parserSvelte,
        parserOptions: {
          extraFileExtensions: ['.svelte'],
          parser: '@typescript-eslint/parser',
          sourceType: 'module'
        }
      },
      plugins: {
        '@typescript-eslint': pluginTs,
        svelte: pluginSvelte,
        prettier: pluginPrettier
      },
      processor: pluginSvelte.processors.svelte,
      rules: {
        ...tsRules,
        ...(pluginSvelte.configs.recommended.rules as FlatConfigItem['rules']),
        ...overrides,
        'prettier/prettier': [
          'warn',
          {
            ...pRules,
            parser: 'svelte'
          }
        ]
      }
    }
  ];

  return configs;
}
