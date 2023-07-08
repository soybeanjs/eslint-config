# SoybeanJS 的 ESLint 配置插件

- 集成了 Prettier，自动修复并格式化
- 多种 Eslint 预设配置: JavaScript, JSON, TypeScript, Vue, React, ReactNative, Svelte, Solid 和 Astro
- 通过 Prettier 去格式化其他类型文件: HTML, CSS, Less, Sass, Scss, Markdown, MDX, yaml 和 yml

## 用法

### 安装

```bash
pnpm i -D eslint typescript eslint-config-soybeanjs
```

### ESLint 配置文件

创建配置文件 .eslintrc

```json
{
  "extends": "soybeanjs"
}
```

### 配置介绍

- soybeanjs: 基础配置，用于格式化 JS、TS、JSON
- soybeanjs/vue: 继承基础配置，用于格式化 Vue3
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

### 解析别名 `@/`, `~/` 等

默认会读取项目的 tsconfig.json 的 paths 作为别名解析，以下为默认配置，也可以自行修改进行覆盖

```json
{
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": [
          "tsconfig.json",
          "packages/*/tsconfig.json",
          "examples/*/tsconfig.json",
          "docs/*/tsconfig.json"
        ]
      }
    }
  }
}
```

### ESLint 的 VSCode 配置

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // 在保存文件时自动格式化
  },
  "editor.formatOnSave": false,
  "eslint.validate": ["svelte", "astro", "json"]
}
```

- `eslint.validate`: 配置需要校验的文件类型, eslint 插件默认校验的文件类型为 js, jsx, ts, tsx, vue, 如果需要校验其他类型文件，需要在这里添加(如下面添加的 svelte, astro 和 json)

  > 这里的校验是指 eslint 插件的校验，即界面上实时地显示错误，通过保存触发自动修复，和通过命令 eslint 去修复区别开来，通过命令 `eslint --fix --ext .svelte`可以指定校验和修复的文件类型

- `editor.formatOnSave`: 关闭编辑器自带的格式化，以免和 eslint 的格式化冲突，当然也可以为不通过 eslint 校验的文件类型开启编辑器自带的格式化，如下面的配置, 保存时编辑器会自动格式化 html, css, less, scss, sass, markdown, yaml 和 yml 文件

```json
{
  "editor.formatOnSave": false,
  "[html][css][less][scss][sass][markdown][yaml][yml][jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```

### 在 package.json 里添加脚本命令

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

> soy 是依赖包 [@soybeanjs/cli](https://github.com/soybeanjs/cli) 的一个命令

- 然后在项目中可以使用下面的命令对代码进行格式化修复

```bash
pnpm lint
```
