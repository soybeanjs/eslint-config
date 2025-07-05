import { interopDefault } from '../shared';
import type { FlatConfigItem } from '../types';

export async function createNodeConfig(overrides: Record<string, any> = {}) {
  const pluginNode = await interopDefault(import('eslint-plugin-n'));

  const configs: FlatConfigItem[] = [
    {
      plugins: {
        n: pluginNode
      },
      rules: {
        'n/handle-callback-err': ['error', '^(err|error)$'],
        'n/no-deprecated-api': 'error',
        'n/no-exports-assign': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/prefer-global/buffer': ['error', 'never'],
        'n/prefer-global/process': ['error', 'never'],
        'n/process-exit-as-throw': 'error',
        ...overrides
      }
    }
  ];

  return configs;
}
