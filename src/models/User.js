const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,
            sexo: DataTypes.STRING,
            data_nascimento: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = User;