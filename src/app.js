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
    resave: false, 
    saveUninitialized: false, 
    cookie: {
        maxAge: 9999999, 
        httpOnly: true,
    },
};

const homeRouter = require('./routes/homeRouter');
const loginRouter = require('./routes/loginRouter');
const regRouter = require('./routes/regRouter');
const errorPage = require('./routes/error');
const profileRouter = require('./routes/profileRouter');
const cardRouter = require('./routes/cardRRouter');
const basketRouter = require('./routes/basketRouter');

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/', homeRouter);
app.use('/', loginRouter);
app.use('/', regRouter);
app.use('/', cardRouter);
app.use('/', profileRouter);
app.use('/', basketRouter);
app.use('/404', errorPage);


app.listen(PORT, () => {
    console.log('\x1b[33mСервер Успешно подключён!!!! \x1b[0m');
});