const tableName = 'user';

exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments();
        table.string('userName').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable(tableName);
};
