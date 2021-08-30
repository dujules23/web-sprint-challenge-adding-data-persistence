
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", tbl =>{
    tbl.increments("project_id")
    tbl.string("project_name", 128).notNullable().unique()
    tbl.string("project_description", 128)
    tbl.integer("project_completed", 0)
  })
  .createTable("resources", tbl =>{
    tbl.increments("resource_id")
    tbl.string("resource_name", 128).notNullable().unique()
    tbl.string("resource_description", 128)
  })
  .createTable("tasks", tbl =>{
    tbl.increments("task_id")
    tbl.string("task_notes", 128)
    tbl.string("task_description", 128).notNullable().unique()
    tbl.integer("task_completed")
    tbl.integer("project_id", 0)
      .unsigned()
      .notNullable()
      .references("project_id")
      .inTable("projects")
      .onDelete("CASCADE")
  })
  .createTable("project_resources", tbl=> {
    tbl.increments("project_resource_id")
    tbl.integer("resource_id")
      .unsigned()
      .notNullable()
      .references("resource_id")
      .inTable("resources")
      .onDelete("CASCADE")
    tbl.integer("project_id")
      .unsigned()
      .notNullable()
      .references("project_id")
      .inTable("projects")
      .onDelete("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("project_resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("resources")
  .dropTableIfExists("projects") 
};
