# SoybeanJS 的 eslint 预设配置

- 集成了 prettier，自动修复并格式化
- 多种预设的配置: JavaScript, TypeScript, Vue, React, ReactNative, Svelte and Solid
- 同样也可以格式化 html、json、yaml、markdown
- 合理的默认配置, 最佳实践, 仅需一行配置
- 默认的别名映射 "@" => "src", "~" => "./"

## 依赖

### eslint-config-soybeanjs-base

这个是基础配置, 可以格式化 JacaScript, HTML, JSON, yaml, markdown.

### eslint-config-soybeanjs-ts

扩展了基础配置，用来格式化 TypeScript

### eslint-config-soybeanjs

该依赖等同于 eslint-config-soybeanjs-ts

### eslint-config-soybeanjs-vue

扩展了 TypeScript 配置，用来格式化 Vue3 的

### eslint-config-soybeanjs-vue2

扩展了 TypeScript 配置，用来格式化 Vue2 的

### eslint-config-soybeanjs-react

扩展了 TypeScript 配置，用来格式化 React 的

### eslint-config-soybeanjs-react-native

扩展了 React 配置，用来格式化 ReactNative 的

### eslint-config-soybeanjs-svelte

扩展了 TypeScript 配置，用来格式化 Svelte 的

### eslint-config-soybeanjs-solid

扩展了 TypeScript 配置，用来格式化 Solid 的

## 用法

### 安装

- 首先安装 eslint 和 typescript 依赖

```bash
pnpm i -D eslint
pnpm i -D typescript # 如果使用基础配置eslint-config-soybeanjs-base，可以不安装typescript
```

- 然后根据项目中使用的技术，安装下面的其中一个

```bash
pnpm i -D eslint-config-soybeanjs # 等同于soybeanjs-ts
pnpm i -D eslint-config-soybeanjs-base # 基础的
pnpm i -D eslint-config-soybeanjs-ts # TypeScript
pnpm i -D eslint-config-soybeanjs-vue # Vue3
pnpm i -D eslint-config-soybeanjs-vue2 # Vue2
pnpm i -D eslint-config-soybeanjs-react # React
pnpm i -D eslint-config-soybeanjs-react-native # ReactNative
pnpm i -D eslint-config-soybeanjs-svelte # Svelte
pnpm i -D eslint-config-soybeanjs-solid # Solid
```

### eslint 配置文件

创建.eslintrc.js、.eslintrc.json、.eslintrc 任意一个文件即可

- .eslintrc.js

```js
module.exports = {
  extends: "soybeanjs" // soybeanjs-base | soybeanjs-ts | soybeanjs-vue | soybeanjs-vue2 | soybeanjs-react | soybeanjs-react-native | soybeanjs-svelte | soybeanjs-solid
}
```

- .eslintrc.json、.eslintrc

```json
{
  "extends": "soybeanjs" // or soybeanjs-base, soybeanjs-ts, soybeanjs-vue, soybeanjs-vue2, soybeanjs-react, soybeanjs-react-native, soybeanjs-svelte, soybeanjs-solid
}
```

通常不需要添加 .eslintignore 配置文件，因为已经预设了一些配置，如果项目需要，可以自行添加

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

### 在 package.json 里添加脚本命令

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

然后在项目中可以使用下面的命令对代码进行格式化修复

```bash
npm run lint # npm
yarn lint # yarn
pnpm lint # pnpm

```
