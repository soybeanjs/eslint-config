import { ensurePackages, interopDefault } from '../shared';
import type { FlatConfigItem } from '../types';

export async function createUnocssConfig(enable?: boolean) {
  if (!enable) return [];

  await ensurePackages(['@unocss/eslint-config']);

  const unocss = await interopDefault(import('@unocss/eslint-config'));

  return [unocss as FlatConfigItem];
}
