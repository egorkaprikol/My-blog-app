'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Articles', [
      {
        title: 'Статья 1',
        content: 'Текст статьи 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Статья 2',
        content: 'Текст статьи 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Статья 3',
        content: 'Текст статьи 3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Articles', null, {});
    
  }
};
