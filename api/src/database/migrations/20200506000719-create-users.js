'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        usuario: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        recuperar_senha: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        chave_descadastro: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        conf_email: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        imagem: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};
