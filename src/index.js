const express = require('express');
const routes = require('./routes');

require('./database')

const server = express();
const port = 3000;

server.use(express.json())

server.use(routes)

server.listen(port, ()=>{
    console.log(`SERVER IS RUNNING, ON HOST: ${port}`);
})