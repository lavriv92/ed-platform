const config = require('./webpack.config.default');

const env = process.env.NODE_ENV || 'dev';

module.exports = config(env);
