const { Model, DataTypes } = require('sequelize');

class Comentario extends Model {
    static init(sequelize) {
        super.init({
            user_id: DataTypes.INTEGER,
            pergunta_id: DataTypes.INTEGER,
            conteudo: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'comentarios',
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
        this.belongsTo(models.Pergunta, { foreignKey: 'pergunta_id', as: 'perguntas' });
    }
}

module.exports = Comentario;