// build your server here and require it from index.js

const express = require('express');

// const recipeRouter = require('./recipes/recipe-router')


// bring in cors
const cors = require('cors')
 
const server = express();

server.use(express.json());
// server.use('/api/recipes', recipeRouter)

// use cors; this example allows for any page to access
server.use(cors ({
  origin: "*"
}))

server.use('/api/*', (_, res) => {
  res.json({ data: 'will output to all endpoints'  });
});

module.exports = server