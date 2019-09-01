'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Guide_Known_Languages', [
      {guideID: 1, languageID: 1},
      {guideID: 1, languageID: 2},
      {guideID: 1, languageID: 3},
      {guideID: 2, languageID: 1},
      {guideID: 2, languageID: 5},
      {guideID: 3, languageID: 9},
      {guideID: 3, languageID: 5},
      {guideID: 4, languageID: 7},
      {guideID: 4, languageID: 1},
      {guideID: 5, languageID: 1},
      {guideID: 5, languageID: 3},
      {guideID: 5, languageID: 6},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Guide_Known_Languages', null, {});
  }
};
