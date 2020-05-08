const User = require('../models/User');
const Pergunta = require('../models/Pergunta');

module.exports = {
    async index(req, res) {
        const perguntas = await Pergunta.findAll({
            attributes: ['id', 'titulo', 'conteudo', 'imagens', 'qnt_acesso'],
            include: {
                association: 'user',
                attributes: ['id' , 'nome', 'usuario'],
            }
        });

        return res.json(perguntas);
    },

    async show(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id,  {
            include: { 
                association: 'perguntas', 
                attributes: ['id', 'titulo', 'conteudo', 'imagens', 'qnt_acesso'],
            },
        });

        if(!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        return res.json(user.perguntas);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { titulo, conteudo } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const pergunta = await Pergunta.create({
            titulo,
            conteudo,
            user_id,
        });

        return res.json(pergunta);
    },

    async delete(req, res) {
        const { user_id } = req.params;
        const { pergunta_id } = req.body;

        const user = await User.findByPk(user_id, {
            include: { 
                association: 'perguntas', 
                attributes: ['id'],
            }
        });
        if(!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const pergunta = await Pergunta.findByPk(pergunta_id);
        if(!pergunta) {
            return res.status(400).json({ error: 'Pergunta not found' });
        }

        // Verifica se a pergunta é do User da requisição
        const pergundaDoUser = user.perguntas.find(element => element.id == pergunta_id);

        if(pergundaDoUser){
            await pergunta.destroy();
        }else{
            return res.status(400).json({ error: 'Pergunta não é do user logado' });
        }

        return res.json();
    },

    async delete_adm(req, res) {
        const { id } = req.body;

        const pergunta = await Pergunta.findByPk(id);

        if(!pergunta) {
            return res.status(400).json({ error: 'Pergunta not found' });
        }

        await pergunta.destroy();

        return res.json();
    }
};