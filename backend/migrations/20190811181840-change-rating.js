'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Guides', 'rating');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Guides', 'rating', {
      type: Sequelize.DOUBLE
    })
  }
};
