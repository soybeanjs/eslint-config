# eslint-config-soybeanjs

English | [中文](./README.zh_CN.md)

## SoybeanJS's eslint config presets with prettier

this config equals to [soybeanjs-ts](https://github.com/honghuangdc/eslint-config-soybeanjs/blob/main/packages/ts/README.md)

## Usage

### Install

```bash
pnpm add -D eslint eslint-config-soybeanjs
```

### Eslint config file

create a file, one of .eslintrc, .eslintrc.js, .eslintrc.json

- .eslintrc.js

```js
module.exports = {
  extends: "soybeanjs"
}
```

- .eslintrc.json、.eslintrc

```json
{
  "extends": "soybeanjs"
}
```

You don't need .eslintignore normally as it has been provided by the preset.

### Config alias

the following code is the default config(there is no need to add), please change the alias follow the following code if need

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

### Add scripts for package.json

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

then use the following scripts to format and fix the project code

```bash
npm run lint # npm
yarn lint # yarn
pnpm lint # pnpm

```
