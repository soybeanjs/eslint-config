import globals from 'globals';
import jsRules from '@eslint/js';
import { GLOB_SRC, GLOB_SRC_EXT, GLOB_TESTS } from '../constants/glob';
import type { FlatConfigItem } from '../types';

export function createJsConfig() {
  const js: FlatConfigItem[] = [
    {
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly'
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 2022,
          sourceType: 'module'
        },
        sourceType: 'module'
      },
      linterOptions: {
        reportUnusedDisableDirectives: false
      },
      rules: {
        ...jsRules.configs.all.rules,
        'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],
        camelcase: 'off',
        'capitalized-comments': 'off',
        'dot-notation': ['error', { allowKeywords: true }],
        'func-style': 'off',
        'id-length': 'off',
        'init-declarations': 'off',
        'line-comment-position': 'off',
        'max-classes-per-file': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'multiline-comment-style': 'off',
        'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
        'no-console': 'warn',
        'no-duplicate-imports': 'off',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-empty-function': 'off',
        'no-inline-comments': 'off',
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
        'no-magic-numbers': 'off',
        'no-mixed-operators': [
          'error',
          {
            groups: [
              ['+', '-', '*', '/', '%', '**'],
              ['&', '|', '^', '~', '<<', '>>', '>>>'],
              ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
              ['&&', '||'],
              ['in', 'instanceof']
            ],
            allowSamePrecedence: true
          }
        ],
        'no-negated-condition': 'off',
        'no-redeclare': ['error', { builtinGlobals: false }],
        'no-restricted-globals': [
          'error',
          { message: 'Use `globalThis` instead.', name: 'global' },
          { message: 'Use `globalThis` instead.', name: 'self' }
        ],
        'no-restricted-properties': [
          'error',
          {
            message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
            property: '__proto__'
          },
          {
            message: 'Use `Object.defineProperty` instead.',
            property: '__defineGetter__'
          },
          {
            message: 'Use `Object.defineProperty` instead.',
            property: '__defineSetter__'
          },
          {
            message: 'Use `Object.getOwnPropertyDescriptor` instead.',
            property: '__lookupGetter__'
          },
          {
            message: 'Use `Object.getOwnPropertyDescriptor` instead.',
            property: '__lookupSetter__'
          }
        ],
        'no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
          'TSEnumDeclaration[const=true]',
          'TSExportAssignment'
        ],
        'no-self-assign': ['error', { props: true }],
        'no-ternary': 'off',
        'no-undefined': 'off',
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true
          }
        ],
        'no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'all',
            ignoreRestSiblings: false,
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_'
          }
        ],
        'no-useless-assignment': 'off',
        'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
        'object-shorthand': [
          'error',
          'always',
          {
            ignoreConstructors: false,
            avoidQuotes: true
          }
        ],
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': [
          'error',
          {
            allowNamedFunctions: false,
            allowUnboundThis: true
          }
        ],
        'prefer-const': [
          'error',
          {
            destructuring: 'all',
            ignoreReadBeforeAssign: true
          }
        ],
        'prefer-destructuring': 'off',
        'prefer-named-capture-group': 'off',
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
        'require-atomic-updates': 'off',
        'require-await': 'off',
        'require-unicode-regexp': 'off',
        'sort-imports': [
          'error',
          {
            allowSeparatedGroups: false,
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
          }
        ],
        'sort-keys': 'off',
        'spaced-comment': [
          'error',
          'always',
          {
            line: { markers: ['*package', '!', '/', ',', '='] },
            block: {
              balanced: true,
              markers: ['*package', '!', ',', ':', '::', 'flow-include'],
              exceptions: ['*']
            }
          }
        ],
        'unicode-bom': ['error', 'never']
      }
    },
    {
      files: [`**/scripts/${GLOB_SRC}`, `**/cli.${GLOB_SRC_EXT}`],
      rules: {
        'no-console': 'off'
      }
    },
    {
      files: GLOB_TESTS,
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ];

  return js;
}
