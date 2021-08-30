const yup = require("yup")
const db = require('../../data/dbConfig')

const projectSchema = yup.object().shape({
  project_name: yup.string().required(),
  project_description: yup.string().required(),
  project_completed: yup.boolean(),
  
  project_id: yup.number().required().integer().moreThan(-1).transform(async (project_id) => {

    const projectsFound = await db("projects").where({project_id})

    if (projectsFound.length !== 1){
      return yup.ValidationError("project_id not found")
    }
    else{
      return project_id;
    }
  })
  

})


module.exports = projectSchema