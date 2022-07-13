exports.up = function(knex) {
  return knex.schema.createTable('users', tbl=>{
    tbl.increments('user_id')
    tbl.text('username')
        .notNullable()
        .unique()
    tbl.text('password')
        .notNullable()
  })
  .createTable('tasks', tbt=>{
    tbl.increments('task_id')
    tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    tbl.text('task')
      .notNullable()
    tbl.boolean('completed')
      .defaultTo(false)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
  .dropTableIfExists('users')
};
