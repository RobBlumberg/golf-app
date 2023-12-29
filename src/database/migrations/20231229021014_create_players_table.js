exports.up = function (knex) {
  return knex.schema.createTable("players", (table) => {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.timestamps();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("players");
};
