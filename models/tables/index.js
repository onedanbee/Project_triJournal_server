'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config); // 서버가 구동될때 DB와 Connection,db는 자동으로 생성되지 않아 수동으로 생성해야함
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const User = require('./User')(sequelize, Sequelize); //user가 함수형이기 때문에 sequelize,Sequelize를 파라미터로 함수실행시킨다.
const Journal = require('./Journal')(sequelize, Sequelize);

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'; // 무슨뜻인지
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
