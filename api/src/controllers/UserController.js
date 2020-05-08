const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async show(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            attributes: [
                'nome', 
                'email', 
                'usuario', 
                'senha'
            ],
        });

        if(!User) {
            return res.status(400).json({ error: 'User not found' });
        }

        return res.json(user);
    },

    async store(req, res) {
        const { nome, email, usuario, senha } = req.body;

        const user = await User.create({ 
            nome, 
            email, 
            usuario, 
            senha
        });

        return res.json(user);
    },

    async delete(req, res) {
        const { usuario } = req.body;

        const user = await User.findOne({
            where: { usuario }
        });

        if(!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        await user.destroy();

        return res.json();
    }
};