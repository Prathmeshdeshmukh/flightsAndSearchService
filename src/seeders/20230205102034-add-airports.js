'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports' , [
    {
      name: 'Kempagowda International Airport',
      cityId: 13,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mysuru International Airport',
      cityId: 13,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Indira Gandhi International Airport',
      cityId: 14,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mengluru International Airport',
      cityId: 13,
      createdAt : new Date(),
      updatedAt: new Date()
    }
   ], {});
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
