const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');
const registerController = require('../app/controllers/RegisterController');

router.get('/register', registerController.showRegisterForm);
router.get('/login', authController.showLoginForm);

module.exports = router;