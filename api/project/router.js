// build your `/api/projects` router here

const express = require('express')

const Projects = require('./model')

const router = express.Router()

// middleware 

// const validation = require('../Middlewares/validationMiddleware')
// const projectSchema = require('../Validations/projectValidation')
const projectMiddleware = require('../Middlewares/projectMiddleware')

// Endpoints go here

router.get('/', (req, res) => {
  Projects.getProjects()
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(err => {
      res.status(500).json({ message: "failed to retrive resource"}, err)
    })
})

router.post('/', projectMiddleware, (req,res) => {
  Projects.createProject(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "failed to create resource"})
    })
})

module.exports = router