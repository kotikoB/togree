const knex = require('../knex');
const tableName = 'user';
class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    static async get(query) {
        if (query === null || query === undefined) {
            return await knex(tableName);
        }
        return await knex(tableName).where(query);
    }

    static async getOne(query) {
        const user = await knex(tableName).where(query);
        return user[0];
    }

    static async getInRange(field, array) {
        try {
            return await knex.select().from(tableName).whereIn(field, array);
        } catch (err) {
            throw err;
        }
    }

    async save() {
        const userData = {
            userName: this.userName,
            email: this.email,
            password: this.password
        };
        try {
            await knex(tableName).insert([userData]);
            return userData;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = User;
