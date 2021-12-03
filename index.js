require('dotenv').config()
const express = require('express')
const { reset } = require('nodemon')
const server = express()

server.use(express.json())

server.get('/', (req, res)=>{
    res.send("<h1>this is not the API you're looking for </h1>")
})

const PORT = process.env.PORT || 9000

server.listen(PORT, ()=>{
    console.log("listening on port ", PORT)
})