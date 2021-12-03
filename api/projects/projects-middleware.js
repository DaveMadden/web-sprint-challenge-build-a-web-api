const Project = require('./projects-model')

function validateProjectID(req, res, next){
    console.log("validateProjID")
    Project.get(req.params.id)
        .then(response => {
            if (!response){
                res.status(404).json({ message: "project not found" })
            }
            else{
                req.projID = response;
                next();
            }
        })
        .catch(err => {
            res.status(500).json({ message: `${err}`})
        })
}

function validateProjectBody(req, res, next){
    console.log("validate project body")
}

module.exports = { validateProjectID, validateProjectBody }