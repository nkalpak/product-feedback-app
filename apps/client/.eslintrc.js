const path = require('path');
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ['@rushstack/eslint-config/profile/node', '@rushstack/eslint-config/mixins/react'],
  parserOptions: { tsconfigRootDir: __dirname },
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
