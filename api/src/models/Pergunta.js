const { Model, DataTypes } = require('sequelize');

class Pergunta extends Model {
    static init(sequelize) {
        super.init({
            titulo: DataTypes.STRING,
            conteudo: DataTypes.STRING,
            imagens: DataTypes.STRING,
            qnt_acesso: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'perguntas',
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.hasMany(models.Comentario, { foreignKey: 'pergunta_id', as: 'comentarios' });
    }
}

module.exports = Pergunta;