'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('journal', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      best: {
        type: Sequelize.STRING,
        allowNull: false
      },
      worst: {
        type: Sequelize.STRING,
        allowNull: false
      },
      todo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      longLog: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      picUrl: {
        type: Sequelize.STRING(1234),
        allowNull: true
      },
      userId: Sequelize.INTEGER(11),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('journal');
  }
};
