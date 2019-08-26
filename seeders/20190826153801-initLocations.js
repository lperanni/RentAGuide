'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      { location_name: 'Split Historical Center'},
      { location_name: 'Salona'},
      { location_name: 'Krka Falls'},
      { location_name: 'Plitvice'},
      { location_name: 'Island Tour'},
      { location_name: 'Klis Game of Thrones Set'}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
