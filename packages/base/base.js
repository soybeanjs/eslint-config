const { markdownCodeRules, prettierRules } = require('./rules');

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2022: true
  },
  extends: [
    './rules/all.js',
    'plugin:import/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:md/recommended',
    'plugin:yml/standard'
  ],
  plugins: ['n', 'promise', 'html'],
  ignorePatterns: [
    'node_modules',
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', '.'],
          ['@', './src']
        ],
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', 'mts', '.d.ts']
      }
    }
  },
  overrides: [
    {
      files: '*.html',
      parser: '@html-eslint/parser',
      rules: {
        'prettier/prettier': ['error', { parser: 'html', ...prettierRules }],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }]
      }
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser'
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'dependencies',
              'peerDependencies',
              'peerDependenciesMeta',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import']
          }
        ]
      }
    },
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      rules: {
        'prettier/prettier': ['error', { parser: 'markdown', ...prettierRules }]
      }
    },
    {
      files: ['*.md.js', '*.md.javascript', '*.md.json'],
      rules: markdownCodeRules
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser'
    }
  ],
  rules: {
    // import
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'off',

    // md
    'md/remark': [
      'error',
      {
        plugins: [
          'remark-preset-lint-markdown-style-guide',
          ['lint-maximum-line-length', false],
          ['remark-lint-table-pipe-alignment', false],
          ['remark-lint-list-item-indent', 'space']
        ]
      }
    ],

    // yml
    'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
    'yml/no-empty-document': 'off'
  }
};
