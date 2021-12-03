const Project = require('./projects-model')

function validateProjectID(req, res, next){
    console.log("validateProjID")
}

function validateProjectBody(req, res, next){
    console.log("validate project body")
}

module.exports = { validateProjectID, validateProjectBody }