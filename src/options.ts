import process from 'node:process';
import { DEFAULT_PRETTIER_RULES } from './constants/prettier';
import { loadPrettierConfig } from './shared';
import { GLOB_ASTRO, GLOB_EXCLUDE, GLOB_JSX, GLOB_SVELTE, GLOB_TSX, GLOB_VUE } from './constants/glob';
import type { OnDemandRuleKey, Options, ParsedOptions, RequiredRuleBaseOptions, RequiredVueOptions } from './types';

export async function createOptions(options: Partial<Options> = {}) {
  const opts: ParsedOptions = {
    cwd: process.cwd(),
    ignores: GLOB_EXCLUDE,
    prettierRules: {
      ...DEFAULT_PRETTIER_RULES
    },
    usePrettierrc: true,
    formatter: {
      html: true,
      css: true,
      json: true
    }
  };

  const { cwd, ignores, prettierRules, usePrettierrc, formatter, unocss, ...rest } = options;

  if (cwd) {
    opts.cwd = cwd;
  }

  if (ignores?.length) {
    opts.ignores = [...opts.ignores, ...ignores];
  }

  if (prettierRules) {
    opts.prettierRules = { ...opts.prettierRules, ...prettierRules };
  }

  if (usePrettierrc !== undefined) {
    opts.usePrettierrc = usePrettierrc;
  }

  if (opts.usePrettierrc) {
    const prettierConfig = await loadPrettierConfig(opts.cwd);
    Object.assign(opts.prettierRules, prettierConfig);
  }

  if (formatter) {
    Object.assign(opts.formatter, formatter);
  }

  const onDemandKeys: OnDemandRuleKey[] = ['vue', 'react', 'react-native', 'solid', 'svelte', 'astro'];

  const onDemandFiles: Record<OnDemandRuleKey, string[]> = {
    vue: [GLOB_VUE],
    react: [GLOB_JSX, GLOB_TSX],
    'react-native': [GLOB_JSX, GLOB_TSX],
    solid: [GLOB_JSX, GLOB_TSX],
    svelte: [GLOB_SVELTE],
    astro: [GLOB_ASTRO]
  };

  onDemandKeys.forEach(key => {
    if (key === 'vue') {
      opts[key] = createItemDemandOptions(key, rest[key], onDemandFiles[key]) as RequiredVueOptions;
    } else {
      opts[key] = createItemDemandOptions(key, rest[key], onDemandFiles[key]);
    }
  });

  // If react-native is enabled, react must be enabled
  if (rest['react-native'] && !rest.react) {
    opts.react = createItemDemandOptions('react', true, onDemandFiles.react);
  }

  opts.unocss = Boolean(unocss);

  return opts;
}

// Notice: why this function has a wrong return type
/**
 * Create on demand rule options
 *
 * @param key
 * @param options
 * @param files Default files
 */
function createItemDemandOptions<K extends OnDemandRuleKey>(key: K, options: Options[K], files: string[]) {
  if (!options) return undefined;

  if (key === 'vue') {
    const vueOptions: RequiredVueOptions = {
      version: 3,
      files,
      overrides: {}
    };

    if (typeof options === 'object') {
      Object.assign(vueOptions, options);
    }

    return vueOptions;
  }

  const itemOptions: RequiredRuleBaseOptions = {
    files,
    overrides: {}
  };

  if (typeof options === 'object') {
    Object.assign(itemOptions, options);
  }

  return itemOptions;
}
