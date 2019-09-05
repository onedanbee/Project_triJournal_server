'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('journals', {
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
      username: {
        type: Sequelize.STRING(35),
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'username'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('journals');
  }
};
