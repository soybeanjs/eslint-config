>[!IMPORTANT]
> ESlint will use new flat config when released 10.0.0, It's recommend to SoybeanJS's ESLint Flat Config: [@soybeanjs/eslint-config](https://github.com/soybeanjs/eslint-flat-config)

# SoybeanJS's ESLint config presets

English | [中文](./README.zh_CN.md)

- Auto fix and format, and integrate Prettier
- Multi eslint config presets: JavaScript, JSON, TypeScript, Vue, React, ReactNative, Svelte, Solid and Astro
- Format other files by Prettier: HTML, CSS, Less, Sass, Scss, Markdown, MDX, yaml and yml

## Usage

### Install

```bash
pnpm i -D eslint typescript eslint-config-soybeanjs
```

### ESLint config file

create config file ".eslintrc"

```json
{
  "extends": "soybeanjs"
}
```

- soybeanjs: base config, lint JS, TS, JSON
- soybeanjs/vue: extend base config, lint Vue3
- soybeanjs/vue2: extend base config, lint Vue2
- soybeanjs/react: extend base config, lint React
- soybeanjs/react-native: extend react config, lint ReactNative
- soybeanjs/solid: extend base config, lint Solid
- soybeanjs/svelte: extend base config, lint Svelte
- soybeanjs/astro: extend base config, lint Astro

> please choose the suitable config for your project

> You don't need .eslintignore normally as it has been provided by the preset.

**set multi eslint configs in a project**

For example, there are some tsx files written by Solid under the folder "solid", and there are some tsx files written by React under the folder "react", then you can create the eslint config file under the folder, which are "soybeanjs/solid" and "soybeanjs/react"

### Resolve path alias like `@/`, `~/`, etc

it will read the path alias from tsconfig.json, the following code is default settings, as well as you can update by yourself

```json
{
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": [
          "tsconfig.json",
          "packages/*/tsconfig.json",
          "examples/*/tsconfig.json",
          "docs/*/tsconfig.json"
        ]
      }
    }
  }
}
```

### ESLint settings in VSCode

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // auto format on save
  },
  "editor.formatOnSave": false,
  "eslint.validate": ["svelte", "astro", "json"]
}
```

- `eslint.validate`: configure the file types to be validated, the default file types are js, jsx, ts, tsx, vue, if you want to validate other file types, you need to add them here (such as svelte, astro and json below)

  > the validate here is the validation of eslint plugin, which means to display the error in real time on the interface, and trigger auto fix by saving, which is different from auto fix by command eslint, you can specify the validate and fix file types by command `eslint --fix --ext .svelte`

- `editor.formatOnSave`: close the editor's built-in formatting to avoid conflicts with eslint's formatting, of course, you can also enable the editor's built-in formatting for file types that do not pass eslint verification, such as the following configuration, the editor will automatically format html, css, less, scss, sass, markdown, yaml and yml files when saving

```json
{
  "editor.formatOnSave": false,
  "[html][css][less][scss][sass][markdown][yaml][yml][jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```

### Add script command in package.json

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

> `soy` is a command of dependency package [@soybeanjs/cli](https://github.com/soybeanjs/cli)

- then you can use the following command to format and fix the code

```bash
pnpm lint
```
