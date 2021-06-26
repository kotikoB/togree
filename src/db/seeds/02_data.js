exports.seed = async function (knex) {
    await knex('data').truncate();
    return await knex('data').insert([
        {
            username: 'demo',
            emial: 'test@togree.co.ke',
            password: await hashPassword('P@$$test123456')
        },
        {
            username: 'janeDoe',
            emial: 'test@togree.co.ke',
            password: await hashPassword('P@$$w0rd!')
        }
    ]);
};
