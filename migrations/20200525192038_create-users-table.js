
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments();
      table.text('username', 138)
      .unique()
      .notNullable();
      table.text('website');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
