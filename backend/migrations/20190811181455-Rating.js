'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ratings', {
      guideID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Guides',
          key: 'id'
        }
      },
      userID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      rating: {
        allowNull: false,
        type: Sequelize.DOUBLE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ratings')
  }
};
