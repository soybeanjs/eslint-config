import type { PartialPrettierExtendedOptions } from '../types';

export const DEFAULT_PRETTIER_RULES: PartialPrettierExtendedOptions = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  jsdocCapitalizeDescription: false
};
