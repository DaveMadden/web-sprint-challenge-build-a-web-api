const express = require('express');
const router = express.Router();

//middleware import
const {
    validateActionID,
    validateActionBody
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

  module.exports = router;