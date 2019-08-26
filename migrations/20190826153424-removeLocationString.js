'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Jobs', 'location');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Jobs', 'location', Sequelize.STRING);
  }
};
