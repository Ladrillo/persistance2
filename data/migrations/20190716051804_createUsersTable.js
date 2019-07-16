exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.text('name', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
