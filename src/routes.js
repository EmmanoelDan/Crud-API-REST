const express = require('express');
const UserController = require('./controllers/UserController')

const routes = express.Router();

//Buscar todos os usuarios
routes.get('/users', UserController.index);
// Buscar um unico usuario
routes.get('/users/:id', UserController.indexUser);
// Criar um novo usuario
routes.post('/users', UserController.store);
// editar um usuario
routes.put('/users/:id', UserController.update);
// deletar um usuario
routes.delete('/users/:id', UserController.delete);
// deletar todos os usuarios
routes.delete('/users/:id/remove');

// editar todos os usuarios
routes.patch('/users/:id/edit', () => {
    return res.json({
        Method: 'patch',
        Path: '/users/:id/edit',
        Body: 'data'
    })
})

module.exports = routes;

