# eslint-config-soybeanjs-svelte

## SoybeanJS's Svelte eslint config presets

this config extends [soybeanjs-ts](https://github.com/honghuangdc/eslint-config-soybeanjs/blob/main/packages/ts/README.md)

## Usage

### Install

```bash
pnpm add -D eslint eslint-config-soybeanjs-svelte
```

### Eslint config file

create a file, one of .eslintrc, .eslintrc.js, .eslintrc.json

- .eslintrc.js

```js
module.exports = {
  extends: "soybeanjs-svelte"
}
```

- .eslintrc.json、.eslintrc

```json
{
  "extends": "soybeanjs-svelte"
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
