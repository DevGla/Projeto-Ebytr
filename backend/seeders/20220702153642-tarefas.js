'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tarefas',
    [{
      id: 1,
     name: "cozinhar",
     dataCriacao: "22/07/22",
     status: "pendente"
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tarefas', null, {});
  }
};
