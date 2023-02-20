# eslint-config-soybeanjs-base

English | [中文](./README.zh_CN.md)

## SoybeanJS's base eslint config presets

- Auto fix for formatting with prettier
- Lint JavaScript
- Lint also for JSON, yaml, markdown
- Reasonable defaults, best practices, only one-line of config
- Default Alias mapping "@" => "src", "~" => "./"

## Usage

### Install

```bash
pnpm i -D eslint eslint-config-soybeanjs-base
```

### Eslint config file

create a file, one of .eslintrc, .eslintrc.js, .eslintrc.json

- .eslintrc.js

```js
module.exports = {
  extends: "soybeanjs-base",
};
```

- .eslintrc.json、.eslintrc

```json
{
  "extends": "soybeanjs-base"
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
