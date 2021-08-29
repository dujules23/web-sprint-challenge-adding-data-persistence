// start your server here

const server = require('./api/server')

// Bring in dotenv with config method
const dotenv = require('dotenv').config()


const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`*** Running on port ${port} ***`));