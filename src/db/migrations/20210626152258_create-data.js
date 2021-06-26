const tableName = 'data';

exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('lat').notNullable();
        table.string('lng').notNullable();
        table.integer('angle').notNullable();
        table.integer('speed').notNullable();
        table.string('status').notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable(tableName);
};
