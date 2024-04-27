import {
  createAstroConfig,
  createFormatterConfig,
  createImportConfig,
  createJsConfig,
  createNodeConfig,
  createPrettierConfig,
  createReactConfig,
  createReactNativeConfig,
  createSolidConfig,
  createSvelteConfig,
  createTsConfig,
  createUnicornConfig,
  createUnocssConfig,
  createVueConfig
} from './configs';
import { createOptions } from './options';
import type { Awaitable, FlatConfigItem, Options } from './types';

export async function defineConfig(options: Partial<Options> = {}, ...userConfigs: Awaitable<FlatConfigItem>[]) {
  const opts = await createOptions(options);

  const ignore: FlatConfigItem = {
    ignores: opts.ignores
  };

  const js = createJsConfig();
  const node = await createNodeConfig();
  const imp = await createImportConfig();
  const unicorn = await createUnicornConfig();
  const ts = await createTsConfig();
  const vue = await createVueConfig(opts.vue);
  const solid = await createSolidConfig(opts.solid);
  const react = await createReactConfig(opts.react);
  const reactNative = await createReactNativeConfig(opts['react-native']);
  const svelte = await createSvelteConfig(opts.svelte, opts.prettierRules);
  const astro = await createAstroConfig(opts.astro);
  const unocss = await createUnocssConfig(opts.unocss);
  const prettier = await createPrettierConfig(opts.prettierRules);
  const formatter = await createFormatterConfig(opts.formatter, opts.prettierRules);

  const overrides: FlatConfigItem = {
    rules: opts.overrides
  };

  const userResolved = await Promise.all(userConfigs);

  const configs: FlatConfigItem[] = [
    ignore,
    ...js,
    ...node,
    ...imp,
    ...unicorn,
    ...ts,
    ...vue,
    ...react,
    ...reactNative,
    ...solid,
    ...astro,
    ...svelte,
    ...unocss,
    overrides,
    ...userResolved,
    ...prettier,
    ...formatter
  ];

  return configs;
}

export * from './types';
