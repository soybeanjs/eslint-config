# eslint-config-soybeanjs-solid

## SoybeanJS's Solid eslint config presets

this config extends soybeanjs-ts

## Usage

### Install

```bash
pnpm add -D eslint eslint-config-soybeanjs-solid
```

### Config eslint (.eslintrc | .eslintrc.js | .eslintrc.json)

```json
{
  "extends": "soybeanjs-solid"
}
```

You don't need .eslintignore normally as it has been provided by the preset.

### add import alias

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
