const express = require('express');
const server = express();

server.use(express.json())

//routers
const projectsRouter = require('./projects/projects-router');

//use routers
server.use('/api/projects', projectsRouter)

//global middleware here


//base path endpoint
server.get('/', (req, res)=>{
    res.send("<h1>this is not the API you're looking for yall </h1>")
})

module.exports = server;