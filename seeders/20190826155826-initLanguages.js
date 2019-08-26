'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Languages', [
      { language_name: 'English'},
      { language_name: 'Italian'},
      { language_name: 'German'},
      { language_name: 'Croatian'},
      { language_name: 'Spanish'},
      { language_name: 'French'},
      { language_name: 'Japanese'},
      { language_name: 'Chinese'},
      { language_name: 'Korean'}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Languages', null, {});
  }
};
