# eslint-config-soybeanjs-ts

## SoybeanJS's ts eslint config presets extends base config

## Usage

### Install

```bash
pnpm add -D eslint eslint-config-soybeanjs-ts
```

### Config eslint (.eslintrc | .eslintrc.js | .eslintrc.json)

```json
{
  "extends": "soybeanjs-ts"
}
```

You don't need .eslintignore normally as it has been provided by the preset.

### add import alias

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
