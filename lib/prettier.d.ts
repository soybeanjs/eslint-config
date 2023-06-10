interface PrettierConfig {
  /**
   * 指定自动换行的长度
   * @default 120
   */
  printWidth: number;
  /**
   * 指定每个缩进级别的空格数
   * @default 2
   */
  tabWidth: number;
  /**
   * 用制表符而不是空格缩进行
   * @default false
   */
  useTabs: boolean;
  /**
   * 在语句末尾添加分号
   * @default true
   */
  semi: boolean;
  /**
   * 使用单引号而不是双引号
   * @description JSX引号忽略这个选项
   * @default true
   */
  singleQuote: boolean;
  /**
   * 当对象中的属性被引用时更改
   * - as-needed: 只在需要的地方给对象属性加上引号
   * - consistent: 如果对象中至少有一个属性需要用引号引起来，请用引号引起来
   * - preserve: 尊重对象属性中引号的输入使用
   * @default "as-needed"
   */
  quoteProps: 'as-needed' | 'consistent' | 'preserve';
  /**
   * 在JSX中使用单引号而不是双引号
   * @default false
   */
  jsxSingleQuote: boolean;
  /**
   * 多行时尽可能打印尾随逗号
   * - es5: 在ES5中有效的尾随逗号（对象，数组等）
   * - none: 没有尾随逗号
   * - all: 尽可能的尾随逗号（函数参数）
   * @default "none"
   */
  trailingComma: 'es5' | 'none' | 'all';
  /**
   * 在对象文字中的括号之间打印空格
   * @default true
   */
  bracketSpacing: boolean;
  /**
   * 将 > 多行JSX元素的放在最后一行的末尾，而不是放在下一行
   * @default false
   */
  bracketSameLine: boolean;
  /**
   * 在单独的箭头函数参数周围包括括号
   * - avoid: 只有一个参数的箭头函数的参数不带括号
   * - always: 总是带括号
   * @default "avoid"
   */
  arrowParens: 'avoid';
  /**
   * 格式化以给定字符偏移量开始的代码
   * @default 0
   */
  rangeStart: number;
  /**
   * 格式化以给定字符偏移量结束的代码
   * @default Number.POSITIVE_INFINITY
   */
  rangeEnd: number;
  /**
   * 不需要写文件开头的 @prettier
   * @default false
   */
  requirePragma: boolean;
  /**
   * 在文件开头插入 @prettier
   * @default false
   */
  insertPragma: boolean;
  /**
   * 文本换行
   * - always: 当超出 print width（上面有这个配置）时就折行
   * - never: 不折行
   * - preserve: 按照文件原样折行
   * @default "preserve"
   */
  proseWrap: 'always' | 'never' | 'preserve';
  /**
   * 根据显示样式决定 html 要不要折行
   * - css: 根据 css 规范折行
   * - strict: 长度超出 print width 折行
   * - ignore: 不折行
   */
  htmlWhitespaceSensitivity: 'css' | 'strict' | 'ignore';
  /**
   * 是否缩进Vue文件中<script>和<style>标签内的代码
   * @default false
   */
  vueIndentScriptAndStyle: boolean;
  /**
   * 换行符
   * @default "lf"
   */
  endOfLine: 'lf' | 'crlf' | 'cr' | 'auto';
  /**
   * 控制Prettier是否格式化文件中嵌入的引号代码
   * - auto: 根据文件内容决定
   * - off: 不格式化嵌入的代码
   * @default "auto"
   */
  embeddedLanguageFormatting: 'auto' | 'off';
  /**
   * 在HTML、Vue和JSX中每行执行一个属性
   * @default false
   */
  singleAttributePerLine: boolean;
}

export const prettierRules: PrettierConfig;
