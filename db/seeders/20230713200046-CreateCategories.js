'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      id: 1,
      title: 'Розы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      title: 'Хризантемы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      title: 'Букеты Микс',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 4,
      title: 'Мишки',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
