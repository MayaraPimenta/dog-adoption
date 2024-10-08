/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    node: true,
  },
  rules: {
    'vue/html-indent': [
      'error',
      2,
      {
        'attribute': 1,
        'baseIndent': 1,
        'closeBracket': 0,
        'alignAttributesVertically': true,
        'ignores': []
      }
    ],
    'vue/multi-word-component-names': ['error', {
      'ignores': ['Main']
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // --- ESLint
    eqeqeq: ['error', 'always'],
    'dot-notation': 'error',
    'func-call-spacing': ['error', 'never'],
    'key-spacing': ['error', { beforeColon: false }],
    'max-len': ['error', { code: 120, ignoreStrings: true }],
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'object-curly-spacing': ['error', 'always'],
    'space-unary-ops': 'error',
    'template-curly-spacing': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    'no-underscore-dangle': 'error',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    semi: ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: 'try', next: '*' },
    ],

    // --- Vue
    'vue/no-v-html': 'off',
    'vue/space-unary-ops': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/template-curly-spacing': ['error'],
    'vue/no-useless-concat': 'error',
    'vue/prefer-template': 'error',
    'vue/key-spacing': ['error', { beforeColon: false }],
    'vue/object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'vue/func-call-spacing': ['error', 'never'],
    'vue/array-bracket-newline': 'error',
    'vue/eqeqeq': 'error',
    'vue/dot-notation': 'error',
    'vue/require-name-property': 'error',
    'vue/no-template-target-blank': ['error', { allowReferrer: false }],
    'vue/no-unused-properties': [
      'warn',
      {
        groups: ['props', 'data', 'computed'],
        deepData: false,
      },
    ],
    'vue/block-tag-newline': [
      'error',
      { singleline: 'always', multiline: 'always', maxEmptyLines: 0 },
    ],
  },
};
