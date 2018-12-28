const debug = require('debug')('config');

/**
 * Так как config пишется на ts пере использованием его надо странспилировать в js
 * @returns { IConfig }
 */
module.exports = function compileConfig() {
  const spawnSync = require('child_process').spawnSync;
  const { stdout } = spawnSync('tsc', ['-b', '--force', './config/']);

  debug(stdout.toString());

  if (stdout.toString().match('error')) {
    throw new Error(stdout.toString());
  } else {
    debug('configuration compiled successfully')
  }

  debug(require(`./dist/config.js`));

  return require(`./dist/config.js`).appConfig;
};
