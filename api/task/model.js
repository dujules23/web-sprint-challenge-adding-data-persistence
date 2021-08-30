// build your `Task` model here

const db = require('../../data/dbConfig')

const getTasks = () => {
  return db("tasks as t")
    .select("p.project_name", "p.project_description")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
}

const createTask = async (task) => {
  const [task_id] = await db('tasks').insert(task)
  return getTasks().where({ task_id }).first();
}

module.exports = {
  getTasks,
  createTask
}