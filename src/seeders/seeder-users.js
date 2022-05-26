'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{

      email: 'admin@example.com',
      password: '123456', //plain text sfyfjygjyg -> hash password
      firstName: 'John',
      lastName: 'Doe',
      address: 'USA',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',


      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },


  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
