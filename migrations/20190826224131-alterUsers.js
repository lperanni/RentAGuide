'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.addColumn('Users', 'admin', {
    type: Sequelize.BOOLEAN,
  })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'admin');
  }
};
