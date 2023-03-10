# SoybeanJS's eslint config presets

English | [中文](./README.zh_CN.md)

- Auto fix for formatting with Prettier
- Mulit eslint config presets: JavaScript, JSON, TypeScript, Vue, React, ReactNative, Svelte, Solid and Astro
- Format other files by Prettier: HTML, CSS, Less, Sass, Scss, Markdown, MDX, yaml and yml
- Default Alias mapping "@" => "src", "~" => "./"

## Usage

### Install

```bash
pnpm i -D eslint typescript eslint-plugin-soybeanjs
```

### Eslint config file

create config file ".eslintrc.js"

```js
module.exports = {
  extends: "plugin:soybeanjs/base",
};
```

- "plugin:soybeanjs/base": base config, lint JS, TS, JSON
- "plugin:soybeanjs/vue": extend base config，lint Vue
- "plugin:soybeanjs/vue2": extend base config，lint Vue2
- "plugin:soybeanjs/react": extend base config，lint React
- "plugin:soybeanjs/react-native": extend react config，lint ReactNative
- "plugin:soybeanjs/solid": extend base config，lint Solid
- "plugin:soybeanjs/svelte": extend base config，lint Svelte
- "plugin:soybeanjs/astro": extend base config，lint Astro

> please choose the suitable config for your project
> You don't need .eslintignore normally as it has been provided by the preset.

**set multi eslint configs in a project**

For example, there are some tsx files written by Solid under the folder "solid", and there are some tsx files written by React under the folder "react", then you can create the eslint config file under the folder, which are "plugin:soybeanjs/solid" and "plugin:soybeanjs/react"

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
    "lint": "eslint . --fix",
    "format": "prettier . --write '!**/*.{js,jsx,mjs,cjs,json,ts,tsx,mts,cts,vue,svelte,astro}'"
  }
}
```

- then use the following scripts to format and fix the project code

```bash
pnpm lint
```

- format other files

```bash
pnpm format
```
