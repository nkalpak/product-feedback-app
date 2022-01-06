const path = require('path');
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: [
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/react',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@rushstack/typedef-var': 'off',
    'react/jsx-no-bind': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      settings: {
        // Setup import resolver to recognize that
        // "@" is aliased to "src".
        'import/resolver': {
          webpack: {
            config: {
              resolve: {
                alias: {
                  '@': path.resolve(__dirname, 'src'),
                },
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
              },
            },
          },
        },
      },
    },
  ],
};
