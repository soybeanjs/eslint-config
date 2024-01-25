# @soybeanjs/eslint-config

[English](./README.md) | 中文

**SoybeanJS 的 ESLint 扁平化配置预设，包含 prettier。**

- 默认配置支持 JavaScript 和 TypeScript。
- 支持 Vue、React、ReactNative、Solid、Svelte 和 Astro。
- 使用 ESlint 和 Prettier 格式化 HTML、CSS、LESS、SCSS、JSON、JSONC、YAML、TOML、Markdown。

## 用法

### 安装

```bash
pnpm i -D eslint typescript @soybeanjs/eslint-config
```

### ESLint 配置文件

- 在 `package.json` 中添加 [`"type": "module"`](https://nodejs.org/api/packages.html#type)

- 创建配置文件 `eslint.config.js`

- 导入配置 `@soybeanjs/eslint-config`

```js
import { defineConfig } from '@soybeanjs/eslint-config';

export default defineConfig({
  // options
});
```

> [!NOTE]
> 查看 [Options](#options) 获取更多细节。

### VSCode 中的 ESLint 设置

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "editor.formatOnSave": false,
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": [
    // "javascript", // 默认支持
    // "javascriptreact", // 默认支持
    // "typescript",  // 默认支持
    // "typescriptreact", // 默认支持
    // "vue", // 默认支持
    // 添加你想要检查和格式化的语言
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

### 在package.json 中添加命令

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

## 配置

#### interface Options

````typescript
interface Options {
  /**
   * 项目根目录
   *
   * @default process.cwd()
   */
  cwd: string;
  /**
   * 被忽略的 glob
   */
  ignores: string[];
  /**
   * 默认的Prettier配置
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
   * 是否使用 prettierrc 进行 prettier 配置
   *
   * 如果为 true，prettierrc 中的规则将会覆盖默认规则
   *
   * @default true
   */
  usePrettierrc: boolean;

  /**
   * 格式化器
   * @default 默认支持的格式化器
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
  /**
   * 需要被检测的文件
   */
  files?: string[];
  /**
   * 覆盖的规则
   */
  overrides?: PartialEslintFlatRules;
};

type VueOptions = RuleBaseOptions<{
  /**
   * Vue 版本
   *
   * @default 3
   */
  version?: 2 | 3;
}>;
````

## 感谢

**灵感来自以下项目：**

- [Antfu's eslint-config](https://github.com/antfu/eslint-config)
- [Sxzz's eslint-config](https://github.com/sxzz/eslint-config)
