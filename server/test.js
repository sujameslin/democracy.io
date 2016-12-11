var config = require('./config');

console.log('ENV:' + process.env['NODE_ENV']);
console.log('REDIS: ' + config.get('REDIS_URL'));
