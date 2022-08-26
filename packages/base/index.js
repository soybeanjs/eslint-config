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
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:md/recommended',
    'plugin:yml/standard',
    'plugin:prettier/recommended'
  ],
  // plugins: [],
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
  overrides: [
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
        'prettier/prettier': ['error', { parser: 'markdown' }]
      }
    },
    {
      files: ['*.md.js', '*.md.javascript', '*.md.json'],
      rules: {
        indent: ['error', 2],
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        'no-trailing-spaces': 'error',
        'jsonc/indent': ['error', 2, {}],
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off'
      }
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser'
    }
  ],
  rules: {}
};
