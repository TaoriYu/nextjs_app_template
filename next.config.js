const webpack = require('webpack');
const withTypescript = require('./utils/build/withTypescript');
const withCSS = require('@zeit/next-css');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const getConfig = require('./config/compileConfig');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const customs = () => ({
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
      path: 'empty'
    };

    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
      config.plugins = config.plugins.concat([
        [/next\/asset/, 'next-server/asset'],
        [/next\/dynamic/, 'next-server/dynamic'],
        [/next\/constants/, 'next-server/constants'],
        [/next\/config/, 'next-server/config'],
        [/next\/head/, 'next-server/head'],
      ].map(args => new webpack.NormalModuleReplacementPlugin(...args)));
    }

    if (!options.isServer) {
      config.plugins.push(new BundleAnalyzerPlugin())
      if (process.env.NODE_ENV === 'production') {
        config.plugins.push(new webpack.IgnorePlugin(/debug/))
        config.plugins.push(new webpack.IgnorePlugin(/.*core-js.*/))
      }
    }

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
