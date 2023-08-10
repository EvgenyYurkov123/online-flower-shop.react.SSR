'use strict';
// require('dotenv').config();
// const bcrypt = require('bcrypt');


module.exports = {
  async up (queryInterface, Sequelize) {
    // const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    await queryInterface.bulkInsert('Users', [
      {
        login: 'admin',
        email: 'admin@admin.com',
        password: 456,
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
