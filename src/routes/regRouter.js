const express = require('express');

const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

console.log('----------', User);


const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/pages/Register');

const regRouter = express.Router();

regRouter.get('/register', async (req, res) => {
  const userLogin = req.session.login;
  const userEmail = req.session.email;
  renderTemplate(Register, { userLogin, userEmail }, res);
});
regRouter.post('/register', async (req, res) => {
  const { login, email, password } = req.body;

  try {
    // const hash = await bcrypt.hash(Password, 10);

    // const [user, isCreated] = await User.findOrCreate({ where: { login, password: hash }});
    const user = await User.findOne({ where: { email } });

    if (user) {
      res.json({ err: 'Такой пользователь уже существует' });
      
    } else {
      const newUser = await User.create({ login, email, password }, { raw: true });
      res.json({ msg: 'Вы зарегистрированны' });
      req.session.login = newUser.dataValues.login;
      req.session.email = newUser.dataValues.email;
      console.log('!!!!!!!!!');
      req.session.save(() => {
      });
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = regRouter;
