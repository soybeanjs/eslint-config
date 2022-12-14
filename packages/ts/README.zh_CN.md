# eslint-config-soybeanjs-ts

## SoybeanJS 的 eslint 预设 TypeScript 配置

扩展了基础配置 [soybeanjs-base](https://github.com/honghuangdc/eslint-config-soybeanjs/blob/main/packages/base/README.md)，用来格式化 TypeScript

## 用法

### 安装

```bash
pnpm add -D eslint eslint-config-soybeanjs-ts
```

### eslint 配置文件

创建.eslintrc.js、.eslintrc.json、.eslintrc 任意一个文件即可

- .eslintrc.js

```js
module.exports = {
  extends: "soybeanjs-ts"
}
```

- .eslintrc.json、.eslintrc

```json
{
  "extends": "soybeanjs-ts"
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
