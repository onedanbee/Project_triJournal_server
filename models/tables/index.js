'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize('triJournal', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = require('./User')(sequelize, Sequelize);
const Journal = require('./Journal')(sequelize, Sequelize);

fs.readdirSync(__dirname)
  .filter(file => {
    console.log(file);
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, User, Journal, sequelize };
global.sequelize = sequelize;
