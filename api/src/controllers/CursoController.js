const User = require('../models/User');
const Curso = require('../models/Curso');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { 
                association: 'cursos', 
                attributes: ['nome'], 
                through: { 
                    attributes: [] 
                } 
            }
        });

        return res.json(user.cursos);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { nome } = req.body;

        const user = await User.findByPk(user_id);

        if(!User) {
            return res.status(400).json({ error: 'User not found' });
        }

        const [ curso ] = await Curso.findOrCreate({
            where: { nome }
        });

        await user.addCurso(curso);

        return res.json(curso);
    },

    async delete(req, res) {
        const { user_id } = req.params;
        const { nome } = req.body;

        const user = await User.findByPk(user_id);

        if(!User) {
            return res.status(400).json({ error: 'User not found' });
        }

        const curso = await Curso.findOne({
            where: { nome }
        });

        await user.removeCurso(curso);

        return res.json();
    }
};