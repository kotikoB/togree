const { Data } = require('../db/models');

const getAll = async (req, res) => {
    const { speed, status } = req.query;

    if (!speed && !status) {
        try {
            const data = await Data.get();
            return res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ err });
        }
    }

    // fetch data by speed
    if (speed) {
        try {
            const data = await Data.get({ speed });
            return res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ err });
        }
    }

    // fetch data by status
    if (status) {
        try {
            const data = await Data.get({ status });
            return res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ err });
        }
    }

    // fetch data by speed and status
    if (status || speed) {
        try {
            const data = await Data.get({ status, speed });
            return res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ err });
        }
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
