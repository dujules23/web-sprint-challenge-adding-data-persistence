
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", tbl =>{
    tbl.increments("project_id")
    tbl.string("project_name", 128).notNullable().unique()
    tbl.string("project_description", 128)
    tbl.boolean("project_completed")
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
    tbl.boolean("task_completed")
    tbl.integer("project_id")
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
  .dropTableIfExists("projects")
  .dropTableIfExists("resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("project_resources")
};
