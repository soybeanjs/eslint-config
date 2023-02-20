# eslint-config-soybeanjs-ts

English | [中文](./README.zh_CN.md)

## SoybeanJS's TypeScript eslint config presets

this config extends [soybeanjs-base](https://github.com/honghuangdc/eslint-config-soybeanjs/blob/main/packages/base/README.md)

## Usage

### Install

```bash
pnpm add -D eslint eslint-config-soybeanjs-ts
```

### Eslint config file

create a file, one of .eslintrc, .eslintrc.js, .eslintrc.json

- .eslintrc.js

```js
module.exports = {
  extends: "soybeanjs-ts",
};
```

- .eslintrc.json、.eslintrc

```json
{
  "extends": "soybeanjs-ts"
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
