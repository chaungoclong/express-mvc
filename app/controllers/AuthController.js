const bcrypt = require('bcrypt');

class AuthController {
    // show login form - GET: /login
    showLoginForm(req, res) {
        res.render('auth/login');
    }
}

module.exports = new AuthController();