const express = require('express');
const bcrypt = require("bcrypt");

const loginRouter = express.Router();

const { User } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/pages/Login');

loginRouter.get('/login', async (req, res) => {
  const userEmail = req.session.userEmail;
  renderTemplate(Login, { userEmail }, res);
});

loginRouter.post('/login', async (req, res) => {
  const { login, email, password } = req.body;
  
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        req.session.userId = user.id;
        req.session.userLogin = user.login;
        req.session.userEmail = user.email;
        req.session.save(() => {
          console.log('req.session', req.session);
          res.json({ msg1: 'Вы успешно авторизованы!' });
        });
      } else {
        res.json({ err: 'Пароль неверный' });
      }
    } else {
      res.json({ err: 'Такой пользователь не найден' });
    }
  } catch (error) {
    res.send(error);
  }
});




module.exports = loginRouter;
