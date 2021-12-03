const Project = require('../projects/projects-model')
const Action = require('./actions-model')

function validateActionID(req, res, next){
    Action.get(req.params.id)
        .then(response => {
            if (!response){
                res.status(404).json({ message: "action not found" })
            }
            else{
                req.actionID = response;
                next();
            }
        })
        .catch(err => {
            res.status(500).json({ message: `${err}`})
        })
}

function validateActionBody(req, res, next){
    if (!req.body.project_id || !req.body.description || !req.body.notes){
        res.status(400).json({ message: "missing required info" });
      }
      else(
        next()
      )
}

module.exports = { validateActionBody, validateActionID }