'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      { location_name: 'Split Historical Center', img_name: 'split-historical-center.jpg'},
      { location_name: 'Salona', img_name: 'salona.jpg'},
      { location_name: 'Krka Falls', img_name: 'krka-falls.jpg'},
      { location_name: 'Plitvice', img_name: 'plitvice.jpg'},
      { location_name: 'Island Tour', img_name: 'islands.jpg'},
      { location_name: 'Klis Game of Thrones Set', img_name: 'klis-got.jpg'}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
