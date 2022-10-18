class RegisterController {
    showRegisterForm(req, res) {
        res.render('auth/register');
    }
}

module.exports = new RegisterController();