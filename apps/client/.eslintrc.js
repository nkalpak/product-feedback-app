const path = require('path');

module.exports = {
  overrides: [{
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
          }
        }
      },
    },
  }]
};