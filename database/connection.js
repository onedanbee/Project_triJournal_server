const Sequelize = require('sequelize');

const sequelize = new Sequelize('triJournal', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = sequelize;
global.sequelize = sequelize;
