const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const env = process.env.NODE_ENV || 'development';
// configuration compilation
const spawnSync = require('child_process').spawnSync;
console.log('compile configs');
spawnSync('tsc', ['-b', './config']);
const config = require(`./config/${env}.config.js`);

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
  ...config.default,
});

module.exports = withTypescript(withCSS({
  cssModules: 'global',
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]_[local]__[hash:base64:5]",
  },
  ...customs(),
}));
