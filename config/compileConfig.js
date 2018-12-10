/**
 * Так как config пишется на ts пере использованием его надо странспилировать в js
 * @returns { IConfig }
 */
module.exports = function compileConfig() {
  const spawnSync = require('child_process').spawnSync;
  spawnSync('tsc', ['-b', '--force', './']);
  const env = process.env.NODE_ENV || 'development';
  return require(`./dist/${env}.config.js`).default;
}
