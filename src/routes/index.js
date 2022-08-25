const express = require('express');

const routes = express.Router();

//Buscar todos os usuarios
routes.get('/users', (req, res) =>{
    return res.json({
        Method: 'GET',
        Path: '/users',
        Body: 'data'
    })
});
// Buscar um unico usuario
routes.get('/user/:id', (req, res) => {
    return res.json({
        Method: 'GET',
        Path: '/user/:id',
        Body: 'data'
    })
});
// Criar um novo usuario
routes.post('/user', (req, res) => {
    return res.json({
        Method: 'POST',
        Path: '/user',
        Body: 'data'
    })
});
// editar um usuario
routes.put('/user/:id', (req, res) => {
    return res.json({
        Method: 'PUT',
        Path: '/user/:id',
        Body: 'data'
    })
});

// deletar um usuario
routes.delete('/user/:id', (req, res) => {
    return res.json({
        Method: 'DELETE',
        Path: '/user/:id',
        Body: 'data'
    })
});

// deletar todos os usuarios
routes.delete('/user/:id/remove', (req, res) => {
    return res.json({
        Method: 'DELETE',
        Path: '/user/:id/remove',
        Body: 'data'
    })
});

// editar todos os usuarios
routes.patch('/users/:id/edit', () => {
    return res.json({
        Method: 'patch',
        Path: '/users/:id/edit',
        Body: 'data'
    })
})

module.exports = routes;

