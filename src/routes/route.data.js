const router = require('express').Router();
const dataController = require('../controllers/controller.data');

router.get('/api/data', dataController.getAll);

module.exports = router;
