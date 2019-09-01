'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Guide_Services', [
      {guideID: 1, serviceID: 1, price: 400},
      {guideID: 1, serviceID: 2, price: 400},
      {guideID: 1, serviceID: 3, price: 400},
      {guideID: 1, serviceID: 4, price: 400},
      {guideID: 2, serviceID: 1, price: 400},
      {guideID: 2, serviceID: 2, price: 400},
      {guideID: 2, serviceID: 3, price: 400},
      {guideID: 2, serviceID: 4, price: 400},
      {guideID: 3, serviceID: 1, price: 400},
      {guideID: 3, serviceID: 2, price: 400},
      {guideID: 3, serviceID: 3, price: 400},
      {guideID: 3, serviceID: 4, price: 400},
      {guideID: 4, serviceID: 1, price: 400},
      {guideID: 4, serviceID: 2, price: 400},
      {guideID: 4, serviceID: 3, price: 400},
      {guideID: 4, serviceID: 4, price: 400},
      {guideID: 5, serviceID: 1, price: 400},
      {guideID: 5, serviceID: 2, price: 400},
      {guideID: 5, serviceID: 3, price: 400},
      {guideID: 5, serviceID: 4, price: 400},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Guide_Services', null, {});
  }
};
