# SoybeanJS's eslint config presets

English | [中文](./README.zh_CN.md)

- Auto fix for formatting with prettier
- Mulit config presets: JavaScript, TypeScript, Vue, React, ReactNative, Svelte and Solid
- Lint also for html, json, yaml, markdown
- Reasonable defaults, best practices, only one-line of config
- Default Alias mapping "@" => "src", "~" => "./"

## Package

### eslint-config-soybeanjs-base

this is base config, lints for JacaScript, HTML, JSON, yaml, markdown.

### eslint-config-soybeanjs-ts

this config extends soybeanjs-base, and it lints for TypeScript.

### eslint-config-soybeanjs

this config equals to soybeanjs-ts

### eslint-config-soybeanjs-vue

this config extends soybeanjs-ts, and it lints for Vue3

### eslint-config-soybeanjs-vue2

this config extends soybeanjs-ts, and it lints for Vue2

### eslint-config-soybeanjs-react

this config extends soybeanjs-ts, and it lints for React

### eslint-config-soybeanjs-react-native

this config extends soybeanjs-react, and it lints for React Native

### eslint-config-soybeanjs-svelte

this config extends soybeanjs-ts, and it lints for Svelte

### eslint-config-soybeanjs-solid

this config extends soybeanjs-ts, and it lints for Solid

## Usage

### Install

- Firstly, install the following packages

```bash
pnpm i -D eslint
pnpm i -D typescript # if the project use eslint-config-soybeanjs-base, there is no need to install typescript
```

- Then install one of the following packages through the technology used in the project

```bash
pnpm i -D eslint-config-soybeanjs # equals to soybeanjs-ts
pnpm i -D eslint-config-soybeanjs-base # base
pnpm i -D eslint-config-soybeanjs-ts # TypeScript
pnpm i -D eslint-config-soybeanjs-vue # Vue3
pnpm i -D eslint-config-soybeanjs-vue2 # Vue2
pnpm i -D eslint-config-soybeanjs-react # React
pnpm i -D eslint-config-soybeanjs-react-native # ReactNative
pnpm i -D eslint-config-soybeanjs-svelte # Svelte
pnpm i -D eslint-config-soybeanjs-solid # Solid
```

### Eslint config file

create a file, one of .eslintrc, .eslintrc.js, .eslintrc.json

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
