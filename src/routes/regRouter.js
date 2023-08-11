const express = require('express');

const bcrypt = require('bcrypt');
const { User } = require('../../db/models');



const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/pages/Register');

const regRouter = express.Router();

regRouter.get('/register', async (req, res) => {
  const userEmail = req.session.email;
  renderTemplate(Register, { userEmail }, res);
});
regRouter.post('/register', async (req, res) => {
  const { login, email, password } = req.body;

  try {
     const hash = await bcrypt.hash(password, 10);

    // const [user, isCreated] = await User.findOrCreate({ where: { email, password: hash }});
    const user = await User.findOne({ where: { email } });

    if (user) {
      res.json({ err: 'Такой пользователь уже существует' });
      
    } else {
      const newUser = await User.create({ login, email, password: hash, isAdmin: false }, { raw: true });
      res.json({ msg: 'Вы зарегистрированны' });
      req.session.userId = newUser.id;
      req.session.userLogin = newUser.dataValues.login;
      req.session.userEmail = newUser.dataValues.email;
      req.session.save(() => {
      });
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = regRouter;
