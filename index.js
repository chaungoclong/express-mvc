const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const router = require('./routes');
const session = require('express-session');
const db = require("./app/models");

dotenv.config();

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'abc'
}));
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

// Init router
router(app);

app.use(function (req, res, next) {
    res.status(404).send('Not Found');
});

const port = process.env.PORT;
app.listen(port, async (err) => {
    console.log('listening on port: ' + port);
});
