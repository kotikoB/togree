require('dotenv').config({ path: '../.env' });

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;

module.exports = {
    development: {
        client: 'postgresql',
        connection: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
        migrations: {
            directory: '../src/db/migrations'
        },
        seeds: {
            directory: '../src/db/seeds'
        },
        useNUllAsDefault: true
    },

    test: {
        client: 'postgresql',
        connection: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
        migrations: {
            directory: '../src/db/migrations'
        },
        seeds: {
            directory: '../src/db/seeds'
        },
        useNUllAsDefault: true
    },

    staging: {
        client: 'postgresql',
        connection: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
        migrations: {
            directory: '../src/db/migrations'
        },
        seeds: {
            directory: '../src/db/seeds'
        },
        useNUllAsDefault: true
    },

    production: {
        client: 'postgresql',
        connection: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
        migrations: {
            directory: '../src/db/migrations'
        },
        seeds: {
            directory: '../src/db/seeds'
        },
        useNUllAsDefault: true
    }
};
