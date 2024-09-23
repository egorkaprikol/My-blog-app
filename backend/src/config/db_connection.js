const { Sequelize } = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  dialect: 'postgres',
  host: config.development.host,
  port: config.development.port
});

module.exports = sequelize;