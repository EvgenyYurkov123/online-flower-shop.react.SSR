require('@babel/register');
const express = require('express');
const {models} = require('../../db/models');
const { Category } = require('../../db/models');
const { User } = require('../../db/models');


const renderTemplate = require('../lib/renderTemplate');
const homeRouter = express.Router();

const Home = require('../views/pages/Home');

homeRouter.get('/', async (req, res) => {
  try {
    const allCateg = await Category.findAll({ raw: true });
    renderTemplate(Home, { allCateg }, res);
  } catch (error) {
    console.log('Категории не НАЙДЕНЫ', error);
  }
}); 

homeRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('SOLOS');
    res.redirect('/');
  });
});
module.exports = homeRouter;




