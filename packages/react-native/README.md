# eslint-config-soybeanjs-react-native

## SoybeanJS's React Native eslint config presets

this config extends [soybeanjs-react](https://www.npmjs.com/package/eslint-config-soybeanjs-react)

## Usage

### Install

```bash
pnpm add -D eslint eslint-config-soybeanjs-react-native
```

### Eslint config file

create a file, one of .eslintrc, .eslintrc.js, .eslintrc.json

- .eslintrc.js

```js
module.exports = {
  extends: "soybeanjs-react-native"
}
```

- .eslintrc.json、.eslintrc

```json
{
  "extends": "soybeanjs-react-native"
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
