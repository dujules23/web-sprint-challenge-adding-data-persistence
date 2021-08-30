// build your `Resource` model here

// bring in db config

const db = require('../../data/dbConfig')

const getResources = () => {
  return db("resources")
}

const createResource = async (resource) => {
  const [resource_id] = await db('resources').insert(resource)
  return getResources().where({ resource_id }).first();
}

module.exports = {
  getResources,
  createResource
}