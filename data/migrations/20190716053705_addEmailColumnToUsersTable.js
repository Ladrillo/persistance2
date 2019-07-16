
exports.up = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.text('email', 128).unique();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.dropColumn('email');
  });
};
