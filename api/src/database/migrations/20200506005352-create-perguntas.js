'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('perguntas', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users',  key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        titulo: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        conteudo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        imagens: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        qnt_acesso: {
          type: Sequelize.INTEGER,
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
      return queryInterface.dropTable('perguntas');
  }
};
