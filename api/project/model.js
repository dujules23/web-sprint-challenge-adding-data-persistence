// build your `Project` model here

const db = require('../../data/dbConfig')

const getProjects = () => {
  return db("projects")
}

const createProject = async (project) => {
  const [project_id] = await db('projects').insert(project)
  return getProjects().where({ project_id }).first();
}

module.exports = {
  getProjects,
  createProject
}