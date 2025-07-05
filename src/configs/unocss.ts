import { ensurePackages, interopDefault } from '../shared';
import type { FlatConfigItem } from '../types';

export async function createUnocssConfig(enable?: boolean, overrides: Record<string, any> = {}) {
  if (!enable) return [];

  await ensurePackages(['@unocss/eslint-config']);

  const pluginUnocss = await interopDefault(import('@unocss/eslint-config/flat'));

  const configs: FlatConfigItem[] = [
    {
      plugins: {
        unocss: pluginUnocss.plugins.unocss
      },
      rules: {
        'unocss/order': 'warn',
        'unocss/order-attributify': 'off',
        'unocss/blocklist': 'off',
        ...overrides
      }
    }
  ];

  return configs;
}
