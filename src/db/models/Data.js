const knex = require('../knex');
const tableName = 'data';

class Data {
    constructor(name, lat, lng, angle, speed, status) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.angle = angle;
        this.speed = speed;
        this.status = status;
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
        const data = {
            name: this.name,
            lat: this.lat,
            lng: this.lng,
            angle: this.angle,
            speed: this.speed,
            status: this.status
        };
        try {
            await knex(tableName).insert([data]);
            return userData;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Data;
