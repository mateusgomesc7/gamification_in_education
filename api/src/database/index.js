// Arquivo de conexão com o Banco de Dados
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Pergunta = require('../models/Pergunta');
const Curso = require('../models/Curso');
const Comentario = require('../models/Comentario');

const connection = new Sequelize(dbConfig);

User.init(connection);
Pergunta.init(connection);
Curso.init(connection);
Comentario.init(connection);

User.associate(connection.models);
Pergunta.associate(connection.models);
Curso.associate(connection.models);
Comentario.associate(connection.models);

module.exports = connection;