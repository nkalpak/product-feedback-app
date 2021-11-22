const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

// Fix for storybook and theme-ui incompatibility per
// https://github.com/system-ui/theme-ui/issues/1530#issuecomment-788945510
const modulesDir = path.join(__dirname, '../node_modules');
const updateEmotionAliases = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@emotion/core': path.join(modulesDir, '@emotion/react'),
      '@emotion/styled': path.join(modulesDir, '@emotion/styled'),
      '@emotion/styled-base': path.join(modulesDir, '@emotion/styled'),
      'emotion-theming': path.join(modulesDir, '@emotion/react'),
    },
  },
});

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  managerWebpack: updateEmotionAliases,
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      })
    );

    /*
     * Conflicts between the @rushstack eslint plugin and the CRA eslint plugin
     * need to be solved by clearing out any eslint plugins that storybook extends.
     * */
    const eslintWebpackPlugin = config.plugins.find((plug) => plug.key === 'ESLintWebpackPlugin');
    eslintWebpackPlugin.options.baseConfig.extends = [];

    return updateEmotionAliases(config);
  },
};
