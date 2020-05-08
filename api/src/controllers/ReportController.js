const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        // Encontrar todos usuários que tem email que termina com @gmail.com
        // Desses usuários eu quero buscar todos que perguntaram "Testando"
        // Desses usuários eu quero buscar os cursos que começam com Engenharia

        const users = await User.findAll({
            attributes: ['nome', 'email'],
            where: {
                email: {
                    [Op.like]: '%@gmail.com'
                }
            },
            include: [
                { 
                    association: 'perguntas',
                    attributes: ['titulo', 'conteudo'],
                    where: { 
                        conteudo: {
                            [Op.like]: 'Testando%' 
                        }
                    } 
                },
                { 
                    association: 'cursos',
                    attributes: ['nome'],
                    through: { 
                        attributes: [] 
                    },
                    required: false, 
                    where: { 
                        nome: {
                            [Op.like]: 'Engenharia%'
                        } 
                    } 
                },
            ]
        });

        return res.json(users);
    }
}