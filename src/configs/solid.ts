import { ensurePackages, interopDefault } from '../shared';
import type { FlatConfigItem, RequiredRuleBaseOptions } from '../types';

export async function createSolidConfig(options?: RequiredRuleBaseOptions) {
  if (!options) return [];

  const { files, overrides } = options;

  await ensurePackages(['eslint-plugin-solid']);

  const pluginSolid = await interopDefault(import('eslint-plugin-solid'));

  const configs: FlatConfigItem[] = [
    {
      plugins: {
        solid: pluginSolid
      }
    },
    {
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      rules: {
        ...pluginSolid.configs.typescript.rules,
        ...overrides
      }
    }
  ];

  return configs;
}
