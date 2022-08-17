'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
   
    await queryInterface.bulkInsert('Users', [
      {
         nome: 'Oliver Doe',
         email: 'oliver@gmail.com',
         telefone: '(98) 9800-0000',
         role:'atendimento',
         createdAt: new Date(),
         updatedAt: new Date()

       },
       {
        nome: 'João Macedo',
         email: 'joaomacedo@gmail.com',
         telefone: '(98) 9900-0000',
         role:'atendimento',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         nome: 'Morticia Adams',
         email: 'morticia@gmail.com',
         telefone: '(91) 6612-6623',
         role:'cozinha',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         nome: 'Veronica Torres',
         email: 'veronica@gmail.com',
         telefone: '(91) 6612-6623',
         role:'atendimento',
         createdAt: new Date(),
         updatedAt: new Date()
       }
      
      
      ], {}); /**
     
     
       * Add seed commands here.
     *bulkInsert = inserir em lote
     * Example:
     * 
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
  }
};
