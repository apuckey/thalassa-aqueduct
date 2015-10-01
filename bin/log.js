var logger = require('winston');
logger.remove(logger.transports.Console);
logger.add(logger.transports.File, { filename: '/var/log/aqueduct.log', json: false });
logger.log('info', 'Logger initialised.');
module.exports = logger;
