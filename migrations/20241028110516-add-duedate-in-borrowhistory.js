'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('BorrowHistory', 'dueDate',{
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: '2024-12-01'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('BorrowHistory', 'dueDate');
  }
};
