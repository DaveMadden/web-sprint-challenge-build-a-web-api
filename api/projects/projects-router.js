const express = require('express');
const router = express.Router();

//import middleware here
const {
    validateProjectID, 
    validateProjectBody 
} = require('./projects-middleware')

const Project = require('./projects-model')

//ENDPOINTS GO HERE
router.get('/', (req, res) => {
    Project.get()
      .then(response =>{
        res.status(200).json(response);
      })
      .catch(error =>{
        res.status(500).json({message: `${error}`});
      })
  });

router.get('/:id', validateProjectID, (req, res) => {
    Project.get()
      .then(response =>{
        res.status(200).json(req.projID);
      })
      .catch(error =>{
        res.status(500).json({message: `${error}`});
      })
});

router.post('/', validateProjectBody, (req, res) => {
    //set default status to NOT completed
    req.body.completed = 'false';

    Project.insert(req.body)
      .then(response =>{
        res.status(201).json(response);
      })
      .catch(error =>{
        res.status(500).json({message: `${error}`});
      })
  });

router.put('/:id', validateProjectID, validateProjectBody, (req, res) => {
    Project.update(req.params.id, req.body)
        .then(response =>{
            res.status(200).json(response);
        })
        .catch(error =>{
            res.status(500).json({message: `${error}`});
        })
});

router.delete('/:id', validateProjectID, (req, res) => {
    Project.remove(req.params.id)
      .then(() => {
        res.status(204).json(req.user)
      })
      .catch(error =>{
        res.status(500).json({message: `${error}`});
      })
});

router.get('/:id/actions', validateProjectID, (req, res) => {
    Project.getProjectActions(req.params.id)
      .then(response =>{
        res.status(200).json(response);
      })
      .catch(error =>{
        res.status(500).json({message: `${error}`});
      })
  });

module.exports = router;