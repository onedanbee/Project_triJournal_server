const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
  return sequelize.define(
    'journals',
    {
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
      userName: {
        type: Sequelize.STRING(35)
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Journal.belongsTo(models.User, {
            //User는 파일명
            foreignKey: 'username', //foreingKey의 key값이 username
            onDelete: 'CASCADE'
          });
        }
      }
    }
  );
};
