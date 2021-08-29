// build your server here and require it from index.js

const express = require('express');

// const recipeRouter = require('./recipes/recipe-router')
 
const server = express();

server.use(express.json());
// server.use('/api/recipes', recipeRouter)

server.use('/api/*', (_, res) => {
  res.json({ data: 'will output to all endpoints'  });
});

module.exports = server