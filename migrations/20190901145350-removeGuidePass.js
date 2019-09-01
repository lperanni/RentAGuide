'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Guides', 'password');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Guides', 'password', { type: Sequelize.STRING});
  }
};
