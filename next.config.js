const withTypescript = require('./utils/build/withTypescript');
const withCSS = require('@zeit/next-css');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const getConfig = require('./config/compileConfig');

const customs = () => ({
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
      path: 'empty'
    };
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    config.plugins.push(new (require('webpack').DefinePlugin)({
      'process.env.SERVER': options.isServer,
    }));

    return config
  },
  ...getConfig(),
});

module.exports = withTypescript(withCSS({
  cssModules: 'global',
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]_[local]__[hash:base64:5]",
  },
  ...customs(),
}));
