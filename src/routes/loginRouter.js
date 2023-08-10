const express = require('express');
const bcrypt = require("bcrypt");

const loginRouter = express.Router();

const { User } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/pages/Login');

loginRouter.get('/login', (req, res) => {
  const userLogin = req.session.login;
  const userEmail = req.session.email;
  renderTemplate(Login, { userLogin, userEmail }, res);
});

loginRouter.post('/login', async (req, res) => {
  const { login, email, password } = req.body;
  req.session.login = login;
  req.session.email = email;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      // const checkPassword = await bcrypt.compare(password, user.password);
      const checkPassword = user.password;
      if (checkPassword === password) {
        req.session.login = user.login;
        req.session.save(() => {
          
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
