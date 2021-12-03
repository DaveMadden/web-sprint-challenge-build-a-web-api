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

module.exports = router;