'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Guides', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        AllowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      lastname: {
        type: Sequelize.STRING,
        AllowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      email:{
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      address: {
        type: Sequelize.STRING,
        validate: {
          len: [5, 150]
        }
      },
      telephone: Sequelize.TEXT,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Guides');
  }
};