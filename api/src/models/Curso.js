const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'cursos',
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { 
            foreignKey: 'curso_id', 
            through: 'user_cursos', 
            as: 'users' 
        });
    }
}

module.exports = Curso;