const Project = require('../projects/projects-model')
const Action = require('./actions-model')

function validateActionID(req, res, next){
    Action.get(req.params.id)
        .then(response => {
            if (!response){
                res.status(404).json({ message: "action not found" })
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

function validateActionBody(req, res, next){
    if (!req.body.name || !req.body.description){
        res.status(400).json({ message: "missing required field" });
      }
      else(
        next()
      )
}

module.exports = { validateActionBody, validateActionID }