const express = require('express');
const router = express.Router();

//middleware import

const {
    validateActionID,
    validateActionBody,
    projIsValid
} = require('./actions-middleware')

const Action = require('./actions-model')


//endpoints
router.get('/', (req, res) => {
    Action.get()
      .then(response =>{
        res.status(200).json(response);
      })
      .catch(error =>{
        res.status(500).json({message: `${error}`});
      })
  });

  router.get('/:id', validateActionID, (req, res) => {
    Action.get()
      .then(response =>{
        res.status(200).json(req.actionID);
      })
      .catch(error =>{
        res.status(500).json({message: `${error}`});
      })
});


//STILL NEEDS TO CHECK IF THE POST ITSELF EXISTS
router.post('/', projIsValid, validateActionBody, (req, res) => {
    //set default status to NOT completed
    req.body.completed = 'false';

    Action.insert(req.body)
      .then(response =>{
        res.status(201).json(response);
      })
      .catch(error =>{
        res.status(500).json({message: `${error}`});
      })
  });

router.put('/:id', validateActionID, validateActionBody, (req, res) => {
    Action.update(req.params.id, req.body)
        .then(response =>{
            res.status(200).json(response);
        })
        .catch(error =>{
            res.status(500).json({message: `${error}`});
        })
});

router.delete('/:id', validateActionID, (req, res) => {
    Action.remove(req.params.id)
      .then(() => {
        res.status(204).json({message: `deleted action #${req.params.id}`})
      })
      .catch(error =>{
        res.status(500).json({message: `${error}`});
      })
});

  module.exports = router;