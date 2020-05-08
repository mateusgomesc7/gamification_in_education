const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            usuario: DataTypes.STRING,
            senha: DataTypes.STRING,
            recuperar_senha: DataTypes.STRING,
            chave_descadastro: DataTypes.STRING,
            conf_email: DataTypes.STRING,
            imagem: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Pergunta, { foreignKey: 'user_id', as: 'perguntas' });
        this.hasMany(models.Comentario, { foreignKey: 'user_id', as: 'comentarios' });
        this.belongsToMany(models.Curso, { 
            foreignKey: 'user_id', 
            through: 'user_cursos', 
            as: 'cursos' 
        });
    }
}

module.exports = User;