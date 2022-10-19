class HomeController {
    index(req, res) {
        console.log(req.session.user);
        if (!req.session.user) {
            return res.redirect('/login');
        }

        return res.render('index', {user: req.session.user});
    }
}

module.exports = new HomeController();