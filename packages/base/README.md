# eslint-config-soybeanjs-base

## SoybeanJS's base eslint config presets

- Auto fix for formatting with prettier
- lint js
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config
- Default Alias mapping "@" => "src", "~" => "./"

## Usage

### Install

```bash
pnpm add -D eslint eslint-config-soybeanjs-base
```

### Config eslint (.eslintrc | .eslintrc.js | .eslintrc.json)

```json
{
  "extends": "soybeanjs-base"
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
