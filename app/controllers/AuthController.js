const bcrypt = require('bcrypt');
const db = require("../models");

class AuthController {
    /**
     * GET: /login
     * @param req
     * @param res
     * @returns {*}
     */
    showLoginForm(req, res) {
        return res.render('auth/login');
    }

    async login(req, res) {
        try {
            const user = await db?.User.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (!user) {
                req.session.error = 'Invalid login information';
                return res.redirect('back');
            }

            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            if (!isValidPassword) {
                req.session.error = 'Invalid login information';
                return res.redirect('back');
            }

            req.session.user = user;
            req.session.success = 'Login success';

            return res.redirect('/');
        } catch (err) {
            console.error(err);
            req.session.error = 'Some error occurred';
            return res.redirect('back');
        }
    }

    /**
     * POST: /logout
     * @param req
     * @param res
     * @returns {*}
     */
    logout(req, res) {
        if (req.session.user) {
            delete req.session.user;
        }

        return res.redirect('/login');
    }
}

module.exports = new AuthController();