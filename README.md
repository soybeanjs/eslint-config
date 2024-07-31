# @soybeanjs/eslint-config

English | [中文](./README.zh_CN.md)

**SoybeanJS's ESLint flat config presets with prettier.**

- Default config Lint JavaScript and TypeScript.
- Support Vue, React, ReactNative, Solid, Svelte and Astro on demand.
- Use ESlint and Prettier to format HTML, CSS, LESS, SCSS, JSON, JSONC, YAML, TOML, Markdown.

## Usage

### Install

```bash
pnpm i -D eslint typescript @soybeanjs/eslint-config
```

### ESLint config file

- With [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json`

- Create config file `eslint.config.js`

- Import config from `@soybeanjs/eslint-config`

```js
import { defineConfig } from '@soybeanjs/eslint-config';

export default defineConfig({
  // options
});
```

> [!NOTE]
> See [Options](#options) for more details.

### ESLint settings in VSCode

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "editor.formatOnSave": false,
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": [
    // "javascript", // support builtin
    // "javascriptreact", // support builtin
    // "typescript",  // support builtin
    // "typescriptreact", // support builtin
    // "vue", // support builtin
    // add the languages you want to lint
    "svelte",
    "astro",
    "html",
    "css",
    "json",
    "jsonc",
    "yaml"
    "toml",
    "markdown"
  ],
  "prettier.enable": false
}
```

### Scripts in package.json

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

## Options

#### interface Options

````typescript
interface Options {
  /**
   * The current working directory
   *
   * @default process.cwd()
   */
  cwd: string;
  /** The globs to ignore lint */
  ignores: string[];
  /**
   * Default prettier rules
   *
   * @default
   * ```json
   * {
   *   "printWidth": 120,
   *   "singleQuote": true,
   *   "trailingComma": "none",
   *   "arrowParens": "avoid",
   *   "htmlWhitespaceSensitivity": "ignore"
   * }
   * ```
   */
  prettierRules: PartialPrettierExtendedOptions;
  /**
   * Whether to use prettierrc
   *
   * If true, the rules in prettierrc will override the default rules
   *
   * @default true
   */
  usePrettierrc: boolean;

  /**
   * @default
   * {
   *  "html": true,
   *  "css": true,
   *  "json": true,
   * }
   */
  formatter: {
    html?: boolean;
    css?: boolean;
    json?: boolean;
    markdown?: boolean;
    yaml?: boolean;
    toml?: boolean;
  };
  vue?: VueOptions | boolean;
  react?: RuleBaseOptions | boolean;
  'react-native'?: RuleBaseOptions | boolean;
  solid?: RuleBaseOptions | boolean;
  svelte?: RuleBaseOptions | boolean;
  astro?: RuleBaseOptions | boolean;
}

type RuleBaseOptions<T = NonNullable<unknown>> = T & {
  /** The glob patterns to lint */
  files?: string[];
};

type VueOptions = RuleBaseOptions<{
  /**
   * The vue version
   *
   * @default 3
   */
  version?: 2 | 3;
}>;
````

## Thanks

**Inspired by the following projects:**

- [Antfu's eslint-config](https://github.com/antfu/eslint-config)
- [Sxzz's eslint-config](https://github.com/sxzz/eslint-config)
