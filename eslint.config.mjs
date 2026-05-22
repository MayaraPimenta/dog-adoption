import antfu from '@antfu/eslint-config';

export default antfu(
  {
    vue: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
  },
  {
    rules: {
      'node/prefer-global/process': 'off',
      'style/quote-props': 'off',
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^(_|props$|emit$)',
        },
      ],
    },
  },
);
