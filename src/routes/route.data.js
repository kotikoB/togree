const router = require('express').Router();
const dataController = require('../controllers/controller.data');

router.post('/api/data', dataController.register);

module.exports = router;
