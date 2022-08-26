const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);

    },
    async store(req, res) {
        const {nome, cpf, email, telefone, sexo, data_nascimento} = req.body;

        const user = await User.create({
            nome, cpf, email, telefone, sexo, data_nascimento
        });

        return res.json(user);
    },
    async indexUser(req, res){
        const {id} = req.params;
        const user = await User.findOne({ where: {id: id} });

        return res.json(user);

    },
    async update(req, res){
        const {id} = req.params;

        const { nome, cpf, email, telefone, sexo, data_nascimento} = req.body;

        const user = await User.update({
            nome, cpf, email, telefone, sexo, data_nascimento
        }, 
        {
            where: {
                id: id
            }
        });

        return res.json(user);

    },
    async delete(req, res){
        const {id} = req.params;

        const user = await User.findOne({
            where: {
                id: id
            }
        });

        if(user !== null) {
            await user.destroy()
        }

        return res.json(user);
    }
}