const { Data } = require('../db/models');

const getAll = async (req, res) => {
    const { speed, status } = req.query;

    if (speed === null || speed === undefined || status === null || status === undefined) {
        try {
            const data = await Data.get();
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ err });
        }
    }

    // fetch data by speed
    if (speed && !status) {
        try {
            const data = await Data.get({ speed });
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ err });
        }
    }

    if (status && !speed) {
        try {
            const data = await Data.get({ status });
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ err });
        }
    }
    // fetch data by query request params
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
