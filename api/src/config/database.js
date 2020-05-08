// Arquivo resposável pelas credenciais do Banco de Dados
module.exports ={
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'gamification',
    define: {
        timestamps: true,
        underscored: true,
    },
};