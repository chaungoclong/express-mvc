const authRouter = require('./auth');

const router = app => {
    app.use('/', authRouter);
}

module.exports = router;