require('dotenv').config({ path: '../../.env' });
const knex = require('knex');
const config = require('../../config/knexfile');

const DB_PORT = process.env.DB_PORT;

module.exports = async function DB_CONNECT(retries = 5) {
    while (retries) {
        try {
            await knex(config[process.env.NODE_ENV]).raw('select 1+1 as result');
            console.log(`%cDatabase connected on port ${DB_PORT}...`, 'color: #bada55');
            break;
        } catch (error) {
            console.error("Couldn't connect to DB: ", error);

            retries -= 1;
            console.log(`retries left: ${retries}`);

            // wait 5 seconds
            await new Promise((res) => setTimeout(res, 5000));
        }
    }
};
