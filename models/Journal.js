const Sequelize = require('sequelize');

module.exports = sequelize.define('Journal', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  best: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  worst: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  todo: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  longLog: {
    type: Sequelize.STRING(300),
    allowNull: true
  },
  picUrl: {
    type: Sequelize.STRING(300),
    allowNull: true
  },
  classMethods: {
    associate: function(models) {
      Journal.belongsTo(models.Users, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
    }
  }
});
