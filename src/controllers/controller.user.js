const { User } = require('../db/models');

const getAll = async (req, res) => {
    try {
        const users = await User.get();
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({ err });
    }
};

const getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.getOne({ id });
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ err });
    }
};

module.exports = { getAll, getOne };
