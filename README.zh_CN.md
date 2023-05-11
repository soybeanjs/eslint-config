# SoybeanJS 的 eslint 配置插件

- 集成了 Prettier，自动修复并格式化
- 多种 Eslint 预设配置: JavaScript, JSON, TypeScript, Vue, React, ReactNative, Svelte, Solid 和 Astro
- 通过 Prettier 去格式化其他类型文件: HTML, CSS, Less, Sass, Scss, Markdown, MDX, yaml 和 yml
- 默认的别名映射 "@" => "src", "~" => "./"

## 用法

### 安装

```bash
pnpm i -D eslint typescript eslint-config-soybeanjs
```

### eslint 配置文件

创建配置文件 .eslintrc.js

```js
module.exports = {
  extends: "soybeanjs",
};
```

### 配置介绍

- soybeanjs: 基础配置，用于格式化 JS、TS、JSON
- soybeanjs/vue: 继承基础配置，用于格式化 Vue
- soybeanjs/vue2: 继承基础配置，用于格式化 Vue2
- soybeanjs/react: 继承基础配置，用于格式化 React
- soybeanjs/react-native: 继承 react 配置，用于格式化 ReactNative
- soybeanjs/solid: 继承基础配置，用于格式化 Solid
- soybeanjs/svelte: 继承基础配置，用于格式化 Svelte
- soybeanjs/astro: 继承基础配置，用于格式化 Astro

> 请选择适合自己项目的配置

> 通常不需要添加 .eslintignore 配置文件，因为已经预设了一些配置，如果项目需要，可以自行添加

**一个项目中配置多个 eslint 配置**

例如：文件夹 solid 下面是用 SolidJS 写的 TSX，文件夹 react 下面是用 React 写的 TSX，那么分别在对应文件夹下面创建配置文件 .eslintrc.js, 配置值分别为 "soybeanjs/solid" 和 "soybeanjs/react"

### 别名配置

下面是默认的别名配置(不需要添加)，如果需要更改，请自行在 eslint 配置文件中按照下面的代码格式去变更别名

```json
{
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["~", "."],
          ["@", "./src"]
        ],
        "extensions": [".js", ".jsx", ".mjs", ".ts", ".tsx", "mts", ".d.ts"]
      }
    }
  }
}
```

### ESlint 的 VSCode 配置

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "svelte",
    "astro",
    "json"
  ]
}
```

### 在 package.json 里添加脚本命令

```json
{
  "scripts": {
    "lint": "eslint . --fix",
    "format": "soy prettier-format"
  }
}
```

> soy 是依赖包 [@soybeanjs/cli](https://github.com/soybeanjs/cli) 的一个命令

- 然后在项目中可以使用下面的命令对代码进行格式化修复

```bash
pnpm lint
```

- 对于其他文件，使用 format 命令进行格式化

```bash
pnpm format
```
