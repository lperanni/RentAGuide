'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Guide_Services', {
      guideID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Guides',
          key: 'id'
        }
      },
      serviceID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Services',
          key: 'id'
        }
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('Guide_Services');
  }
};
