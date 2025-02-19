import type {
  EslintRules,
  FlatESLintConfigItem,
  ImportRules,
  MergeIntersection,
  NRules,
  ReactHooksRules,
  ReactRules,
  RuleConfig,
  TypeScriptRules,
  UnicornRules,
  VueRules
} from '@antfu/eslint-define-config';
import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore';
import type { BuiltInParserName, LiteralUnion, RequiredOptions } from 'prettier';
import type { Options as JsdocOptions } from 'prettier-plugin-jsdoc';

export type PrettierCustomParser = 'astro' | 'svelte' | 'jsdoc-parser' | 'toml';

export type PrettierParser = BuiltInParserName | PrettierCustomParser;

export interface PrettierOptions extends RequiredOptions {
  parser: LiteralUnion<PrettierParser>;
}

export type PrettierExtendedOptions = PrettierOptions & Partial<JsdocOptions>;

export type PartialPrettierExtendedOptions = Partial<PrettierOptions> & Partial<JsdocOptions>;

type WrapRuleConfig<T extends { [key: string]: any }> = {
  [K in keyof T]: T[K] extends RuleConfig ? T[K] : RuleConfig<T[K]>;
};

export type EslintFlatRules = WrapRuleConfig<
  MergeIntersection<
    EslintRules & ImportRules & NRules & UnicornRules & TypeScriptRules & VueRules & ReactRules & ReactHooksRules
  >
>;

export type FlatConfigItem = Omit<FlatESLintConfigItem<EslintFlatRules, false>, 'plugins'> & {
  plugins?: Record<string, any>;
};

export type RuleBaseOptions<T = NonNullable<unknown>> = T & {
  /** The glob patterns to lint */
  files?: string[];
};

export type RequiredRuleBaseOptions = Required<RuleBaseOptions>;

export type OnDemandRuleKey = 'vue' | 'react' | 'react-native' | 'solid' | 'svelte' | 'astro';

export type VueOptions = RuleBaseOptions<{
  /**
   * The vue version
   *
   * @default 3
   */
  version?: 2 | 3;
}>;

export type RequiredVueOptions = Required<VueOptions>;

export type OnDemandRuleOptions = Partial<Record<Exclude<OnDemandRuleKey, 'vue'>, RuleBaseOptions | boolean>>;

export type RequiredOnDemandRuleOptions = Record<Exclude<OnDemandRuleKey, 'vue'>, RequiredRuleBaseOptions>;

export type { FlatGitignoreOptions };
