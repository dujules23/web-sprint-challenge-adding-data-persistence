

const projectMiddleware = (req, res, next) => {
  
  const { project_name, project_description, project_completed } = req.body


  if (!project_name || !project_description || !project_completed){
    res.status(400).json({ message: "required fields missing"})
  }
  else{
    next()
  }
}

module.exports = projectMiddleware