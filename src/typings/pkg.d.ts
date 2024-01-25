declare module 'eslint-plugin-n' {
  const plugin: import('eslint').ESLint.Plugin;

  export default plugin;
}

declare module 'eslint-plugin-unicorn' {
  const plugin: import('eslint').ESLint.Plugin;

  export default plugin;
}

declare module 'eslint-plugin-i' {
  const plugin: import('eslint').ESLint.Plugin;

  export default plugin;
}

declare module 'eslint-plugin-vue' {
  export type VueConfigKey =
    | 'base'
    | 'essential'
    | 'no-layout-rules'
    | 'recommended'
    | 'strongly-recommended'
    | 'vue3-essential'
    | 'vue3-recommended'
    | 'vue3-strongly-recommended';

  type VuePlugin = import('eslint').ESLint.Plugin & {
    configs: Record<VueConfigKey, import('eslint').ESLint.ConfigData>;
  };

  const plugin: VuePlugin;

  export default plugin;
}

declare module 'eslint-plugin-react' {
  type ReactConfigKey = 'recommended' | 'all' | 'jsx-runtime';

  const plugin: import('eslint').ESLint.Plugin & {
    configs: Record<ReactConfigKey, import('eslint').ESLint.ConfigData>;
  };

  export default plugin;
}
declare module 'eslint-plugin-react-hooks' {
  const plugin: import('eslint').ESLint.Plugin;

  export default plugin;
}
declare module 'eslint-plugin-react-refresh' {
  const plugin: import('eslint').ESLint.Plugin;

  export default plugin;
}

declare module 'eslint-plugin-react-native' {
  const plugin: import('eslint').ESLint.Plugin & {
    environments: {
      'react-native': {
        globals: Record<string, boolean>;
      };
    };
    configs: {
      all: import('eslint').ESLint.ConfigData;
    };
  };

  export default plugin;
}

declare module 'eslint-plugin-solid' {
  type SolidConfigKey = 'recommended' | 'typescript';

  const plugin: import('eslint').ESLint.Plugin & {
    configs: Record<SolidConfigKey, import('eslint').ESLint.ConfigData>;
  };

  export default plugin;
}

declare namespace Demo {
  interface Person {
    name: string;
  }
}
