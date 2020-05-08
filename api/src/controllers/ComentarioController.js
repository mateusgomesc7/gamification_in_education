const User = require('../models/User');
const Pergunta = require('../models/Pergunta');
const Comentario = require('../models/Comentario');

module.exports = {
    async index_user(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id,  {
            include: { 
                association: 'comentarios', 
                attributes: ['pergunta_id', 'conteudo'],
                include: { 
                    association: 'perguntas', 
                    attributes: ['titulo'],
                },
            },
        });

        if(!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        return res.json(user.comentarios);
    },

    async index_pergunta(req, res) {
        const { pergunta_id } = req.params;

        const pergunta = await Pergunta.findByPk(pergunta_id,  {
            include: {
                association: 'comentarios', 
                attributes: ['pergunta_id', 'conteudo'],
                include: { 
                    association: 'users', 
                    attributes: ['usuario'],
                },
            },
        });

        if(!pergunta) {
            return res.status(400).json({ error: 'User not found' });
        }

        return res.json(pergunta.comentarios);
    },

    async store(req, res) {
        const { pergunta_id } = req.params;
        const { conteudo, user_id } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const pergunta = await Pergunta.findByPk(pergunta_id);

        if(!pergunta) {
            return res.status(400).json({ error: 'Pergunta not found' });
        }
        
        const comentario = await Comentario.create({
            user_id,
            pergunta_id,
            conteudo,
        });

        return res.json(comentario);
    },

    async delete(req, res) {
        const { user_id } = req.params;
        const { comentario_id } = req.body;

        const user = await User.findByPk(user_id, {
            include: { 
                association: 'comentarios', 
                attributes: ['id'],
            }
        });
        if(!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const comentario = await Comentario.findByPk(comentario_id);
        if(!comentario) {
            return res.status(400).json({ error: 'Comentario not found' });
        }

        // Verifica se a comentario é do User da requisição
        const comentarioDoUser = user.comentarios.find(element => element.id == comentario_id);

        if(comentarioDoUser){
            await comentario.destroy();
        }else{
            return res.status(400).json({ error: 'Comentario não é do user logado' });
        }

        return res.json();
    },

    async delete_adm(req, res) {
        const { id } = req.body;

        const comentario = await Comentario.findByPk(id);

        if(!comentario) {
            return res.status(400).json({ error: 'Comentario not found' });
        }

        await comentario.destroy();

        return res.json();
    }
}