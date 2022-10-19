const authRouter = require('./auth');
const homeRouter = require('./home')

const router = app => {
    app.use('/', authRouter);
    app.use('/', homeRouter);
}

module.exports = router;