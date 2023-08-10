require('@babel/register');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const express = require('express');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const dbConnectCheck = require('../db/dbConnectCheck');
const app = express();
const { PORT } = process.env;
dbConnectCheck();

const sessionConfig = {
    name: 'SOLOS',
    store: new FileStore(),
    secret: process.env.SESSION_SECRET ?? 'Секретное слово',
    resave: false, // * если true, пересохранит сессию, даже если она не менялась
    saveUninitialized: false, // * если false, куки появятся только при установке req.session
    cookie: {
        maxAge: 9999999, // * время жизни в мс (ms)
        httpOnly: true,
    },
};

// импорт роутов
const homeRouter = require('./routes/homeRouter');
const loginRouter = require('./routes/loginRouter');
const regRouter = require('./routes/regRouter');
const errorPage = require('./routes/error');
const profileRouter = require('./routes/profileRouter');
const cardRouter = require('./routes/cardRRouter');

app.use(express.static(path.join(process.cwd(), 'public')));
//app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

//роутеры
app.use('/', homeRouter);
app.use('/', loginRouter);
app.use('/', regRouter);
app.use('/', cardRouter);
app.use('/', profileRouter);
app.use('/404', errorPage);

// app.get('*', (req, res) => {
//     res.redirect('/404');
// });

app.listen(PORT, () => {
    console.log('\x1b[33mСервер Успешно подключён!!!! \x1b[0m');
});