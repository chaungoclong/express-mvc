const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');
const registerController = require('../app/controllers/RegisterController');

// Register
router.get('/register', registerController.showRegisterForm);
router.post('/register', registerController.register);

// Login
router.get('/login', authController.showLoginForm);
router.post('/login', authController.login);

// Logout
router.post('/logout', authController.logout);

module.exports = router;