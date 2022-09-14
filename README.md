# SoybeanJS's eslint config presets

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

```bash
pnpm i -D eslint

pnpm i -D eslint-config-soybeanjs # equals to soybeanjs-ts
pnpm i -D eslint-config-soybeanjs-base # base
pnpm i -D eslint-config-soybeanjs-ts # for TypeScript
pnpm i -D eslint-config-soybeanjs-vue # for Vue3
pnpm i -D eslint-config-soybeanjs-vue2 # for Vue2
pnpm i -D eslint-config-soybeanjs-react # for React
pnpm i -D eslint-config-soybeanjs-react-native # for React Native
pnpm i -D eslint-config-soybeanjs-svelte # for Svelte
pnpm i -D eslint-config-soybeanjs-solid # for Solid
```

### Config eslint (.eslintrc | .eslintrc.js | .eslintrc.json)

```json
{
  "extends": "soybeanjs" // or soybeanjs-base, soybeanjs-ts, soybeanjs-vue, soybeanjs-vue2, soybeanjs-react, soybeanjs-react-native, soybeanjs-svelte, soybeanjs-solid
}
```

You don't need .eslintignore normally as it has been provided by the preset.

### Change import alias

```json
{
  "settings": {
    "import/resolver": {
      "alias": { // default alias
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

For example:

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```
