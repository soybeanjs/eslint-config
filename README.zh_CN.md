# SoybeanJS 的 eslint 配置插件

- 集成了 prettier，自动修复并格式化
- eslint 支持多种格式化: JavaScript, JSON, TypeScript, Vue, React, ReactNative, Svelte, Solid 和 Astro
- 其他类型文件如 HTML、CSS、markdown、yaml 等通过 prettier 去格式化

## 用法

### 安装

```bash
pnpm i -D eslint typescript @soybeanjs/eslint-plugin
```

### eslint 配置文件

创建.eslintrc.js、.eslintrc.json、.eslintrc 任意一个文件即可

- .eslintrc.js

```js
module.exports = {
  extends: "soybeanjs", // soybeanjs-base | soybeanjs-ts | soybeanjs-vue | soybeanjs-vue2 | soybeanjs-react | soybeanjs-react-native | soybeanjs-svelte | soybeanjs-solid
};
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
