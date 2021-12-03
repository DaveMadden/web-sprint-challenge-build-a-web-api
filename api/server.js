const express = require('express');
const server = express();

server.use(express.json())

//routers
const projectsRouter = require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');

//use routers
server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

//global middleware here


//base path endpoint
server.get('/', (req, res)=>{
    res.send("<h1>this is not the API you're looking for yall </h1>")
})

module.exports = server;