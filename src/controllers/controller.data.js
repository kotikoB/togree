const { Data } = require('../db/models');

const getAll = async (req, res) => {
    try {
        const data = await Data.get();
        res.status(200).json(data);
    } catch (err) {
        res.status(404).json({ err });
    }
};

const getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Data.getOne({ id });
        res.status(200).json(data);
    } catch (err) {
        res.status(404).json({ err });
    }
};

module.exports = { getAll, getOne };
