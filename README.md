# Soybean's eslint config presets

- Auto fix for formatting with prettier
- Mulit config: JavaScript, TypeScript, Vue, React, ReactNative, Svelte and Solid
- Lint also for html, json, yaml, markdown
- Reasonable defaults, best practices, only one-line of config
- Default Alias mapping "@" => "src", "~" => "./"

## Package

### eslint-config-soybeanjs

this default config is equal to soybeanjs-ts

### eslint-config-soybeanjs-base

this is base config, lint for js, html, json, yaml, markdown

### eslint-config-soybeanjs-ts

this config extends the base config, and it lint for ts

### eslint-config-soybeanjs-vue

this config extends the ts config, and it lint for vue3

### eslint-config-soybeanjs-vue2

this config extends the ts config, and it lint for vue2

### eslint-config-soybeanjs-react

this config extends the ts config, and it lint for react

### eslint-config-soybeanjs-react-native

this config extends the react config, and it lint for react-native

### eslint-config-soybeanjs-svelte

this config extends the ts config, and it lint for svelte

### eslint-config-soybeanjs-solid

this config extends the ts config, and it lint for solid

## Usage

### Install

```bash
pnpm add -D eslint 
pnpm add -D eslint-config-soybeanjs # for ts
pnpm add -D eslint-config-soybeanjs-base # base
pnpm add -D eslint-config-soybeanjs-ts # for ts
pnpm add -D eslint-config-soybeanjs-vue # for vue3
pnpm add -D eslint-config-soybeanjs-vue2 # for vue2
pnpm add -D eslint-config-soybeanjs-react # for react
pnpm add -D eslint-config-soybeanjs-react-native # for react-native
pnpm add -D eslint-config-soybeanjs-svelte # for svelte
pnpm add -D eslint-config-soybeanjs-solid # for solid
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

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
