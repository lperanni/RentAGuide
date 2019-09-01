'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Guides', [
      { email: 'mail@poruke.hr', first_name: 'Mate', last_name: 'Mihanovic', joined: '2019-08-08', phone_number: '0989564732'},
      { email: 'mail@poruke.net', first_name: 'Miso', last_name: 'Mihanovic', joined: '2019-08-08', phone_number: '0989564733'},
      { email: 'mail@poruke.com', first_name: 'Herman', last_name: 'Mihanovic', joined: '2019-08-08', phone_number: '0989564734'},
      { email: 'mail@poruke.it', first_name: 'Ivana', last_name: 'Mihanovic', joined: '2019-08-08', phone_number: '0989564735'},
      { email: 'mail@poruke.de', first_name: 'Filomena', last_name: 'Mihanovic', joined: '2019-08-08', phone_number: '0989564739'}

    ], {}) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Guides', null, {});
  }
};
