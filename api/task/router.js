// build your `/api/tasks` router here

const express = require('express')

const Tasks = require('./model')

const router = express.Router()


// Endpoints go here

router.get('/', (req, res) => {
  Tasks.getTasks()
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(err => {
      res.status(500).json({ message: "failed to retrive resource"}, err)
    })
})

router.post('/', (req,res) => {
  Tasks.createTask(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "failed to create resource"})
    })
})

module.exports = router