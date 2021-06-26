const router = require('express').Router();
const dataController = require('../controllers/controller.data');
const authenticate = require('../utils/verifyToken');

router.get('/api/data', authenticate, dataController.getAll);

module.exports = router;
