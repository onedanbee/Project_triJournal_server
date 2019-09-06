'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('journals', [
      {
        best: '1',
        worst: '1',
        todo: '1',
        userId: 1
      },
      {
        best: '2',
        worst: '2',
        todo: '2',
        userId: 2
      },
      {
        best: '3',
        worst: '3',
        todo: '3',
        userId: 3
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('journals', null);
  }
};
