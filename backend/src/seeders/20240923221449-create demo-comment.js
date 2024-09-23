'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Comments', [
      {
        content: 'Комментарий к статье 1',
        ArticleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Комментарий к статье 2',
        ArticleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Комментарий к статье 3',
        ArticleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Еще один комментарий к статье 1',
        ArticleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Comments', null, {});
    
  }
};
