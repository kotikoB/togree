const bcrypt = require('bcryptjs');

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return `${hashedPassword}`;
}

exports.seed = async function (knex) {
    await knex('user').truncate();
    return await knex('user').insert([
        {
            userName: 'demo',
            email: 'test@togree.co.ke',
            password: await hashPassword('P@$$test123456')
        },
        {
            userName: 'janeDoe',
            email: 'test@togree.co.ke',
            password: await hashPassword('P@$$w0rd!')
        }
    ]);
};
