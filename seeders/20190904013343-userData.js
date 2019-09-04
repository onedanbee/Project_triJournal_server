'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: 'OBok',
        email: 'OBok@codestates.com',
        password: '1234',
        userProfilePic: 'www.google.com'
      },
      {
        username: 'OBok1',
        email: 'OBok1@codestates.com',
        password: '1234',
        userProfilePic: 'www.google.com'
      },
      {
        username: 'OBok2',
        email: 'OBok2@codestates.com',
        password: '1234',
        userProfilePic: 'www.google.com'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null);
  }
};
