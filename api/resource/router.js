// build your `/api/resources` router here

const express = require('express')

const Resources = require('./model')

const router = express.Router()

// Endpoints go here

router.get('/', (req, res) => {
  Resources.getResources()
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(err => {
      res.status(500).json({ message: "failed to retrive resource"}, err)
    })
})

router.post('/', (req,res) => {
  Resources.createResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "failed to create resource"})
    })
})

module.exports = router