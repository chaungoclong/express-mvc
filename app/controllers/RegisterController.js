const db = require("../models");
const bcrypt = require("bcrypt");

class RegisterController {
    /**
     * GET: /register
     * @param req
     * @param res
     */
    showRegisterForm(req, res) {
        res.render('auth/register');
    }

    /**
     * POST: /register
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async register(req, res) {
        const data = {...req.body, role: 1};
        data.password = await bcrypt.hash(data.password, 10);
        console.log(data, req.body);
        try {
            const user = await db['User'].create(data);
            req.session.success = 'Register success';
            return res.redirect('/login');
        } catch (e) {
            console.log(e);
            req.session.error = 'Register failed';
            return res.redirect('/register');
        }
    }
}

module.exports = new RegisterController();