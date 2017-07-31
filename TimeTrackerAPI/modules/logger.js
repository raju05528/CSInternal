'use strict';
let winston = require('winston');
let fs = require('fs');
let env = process.env.NODE_ENV || 'development';
let logDir = 'log';
// Create the log directory if it does not exist

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
const tsFormat = () => (new Date()).toLocaleTimeString();
const logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: 'info'
    }),
    new (require('winston-daily-rotate-file'))({
      filename: `${logDir}/-results.log`,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      prepend: true,
      level: env === 'development' ? 'verbose' : 'info'
    })
  ]
});
//}
module.exports = class cloudlog {
  logDebug(debugMessage) {
    logger.debug(debugMessage);
  }
  logverbose(verboseMessage) {
    logger.verbose(verboseMessage);
  }
  logInfo(infoMessage) {
    logger.info(infoMessage);
  }
  logWarning(warningMessage) {
    logger.warn(warningMessage);
  }
  logError(errMessage) {
    logger.error(errMessage);
  }
}