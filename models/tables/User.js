const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
  return sequelize.define(
    'users',
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      userProfilePic: {
        type: Sequelize.STRING(1234),
        allowNull: true
      }
    },
    {
      classMethods: {
        associate: function(models) {
          User.hasMany(models.Journal, {
            foreignKey: 'userName',
            onDelete: 'CASCADE'
          });
        }
      }
    }
  );
};
