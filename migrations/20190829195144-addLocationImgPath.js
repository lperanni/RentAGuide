'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Locations', 'img_name', {
     type: Sequelize.STRING,
     unique: true
   })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Locations', 'img_name');
  }
};
