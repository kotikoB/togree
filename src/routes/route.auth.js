const router = require('express').Router();
const authController = require('../controllers/controller.auth');

router.post('/signup', authController.signUp);

router.post('/signin', authController.signIn);

module.exports = router;
