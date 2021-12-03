const Project = require('./projects-model')

function validateProjectID(req, res, next){
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
    if (!req.body.name || !req.body.description){
        res.status(400).json({ message: "missing required field" });
      }
    else(
        next()
      )
}

module.exports = { validateProjectID, validateProjectBody }