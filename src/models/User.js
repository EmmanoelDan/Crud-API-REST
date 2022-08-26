const {Model, DataTypes} = require('sequelize');
const { v4: uuidv4 } = require('uuid');

class User extends Model {
    static init(sequelize){
        super.init({
            id: uuidv4(),
            nome: DataTypes.STRING,
            CPF: DataTypes.STRING,
            Email: DataTypes.STRING,
            Telefone: DataTypes.INTEGER,
            Sexo: DataTypes.STRING,
            DataNascimento: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = User;