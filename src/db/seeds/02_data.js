exports.seed = async function (knex) {
    await knex('data').truncate();
    return await knex('data').insert([
        {
            name: 'togree 071',
            lat: -1.202005,
            lng: 36.725933,
            angle: 32,
            speed: 43,
            status: 'Moving'
        },
        {
            name: 'togree 072',
            lat: -1.209128,
            lng: 36.88725,
            angle: 122,
            speed: 0,
            status: 'Stopped'
        },
        {
            name: 'togree 073',
            lat: -1.291335,
            lng: 36.885833,
            angle: 0,
            speed: 0,
            status: 'Stopped'
        },
        {
            name: 'togree 074',
            lat: -1.5334,
            lng: 37.671942,
            angle: 35,
            speed: 74,
            status: 'Moving'
        }
    ]);
};
