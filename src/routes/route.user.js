const router = require('express').Router();

const userController = require('../controllers/controller.user');

router.get('/', userController.getAll);
router.get('/:id', userController.getOne);

module.exports = router;
