'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Services', [
      { service_name: 'Walking Group Tour', description: '2h guided Tour on foot in a group'},
      { service_name: 'Bus Tour', description: 'A panorama bus tour with audio guidance'},
      { service_name: 'Private Tour', description: 'Guided private Tour with personalized route'},
      { service_name: 'Carriage Tour', description: 'A Tour on our carriage or buggy for 2 - 8 people'},
     
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Services', null, {});
  }
};
