const { Sequelize } = require('sequelize');
const configs = require('./config.json');
const config = configs[process.env.NODE_ENV || 'development']

const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: 'postgres',
  host: config.host,
  port: config.port
});

module.exports = sequelize;