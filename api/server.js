// build your server here and require it from index.js

const express = require('express');

// const recipeRouter = require('./recipes/recipe-router')

// bring in morgan
const morgan = require('morgan')

// bring in cors
const cors = require('cors')
 
const server = express();

// Bring in Routers
const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')
const taskRouter = require('./task/router')

server.use(express.json());

// use morgan
server.use(morgan('tiny'))

// use cors; this example allows for any page to access
server.use(cors ({
  origin: "*"
}))


// use Routers
server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)
// server.use('/api/*', (_, res) => {
//   res.json({ data: 'will output to all endpoints'  });
// });

module.exports = server