const errorPage = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const ErrorPage = require('../views/pages/error');

errorPage.get('/404', (req, res) => {
  renderTemplate(ErrorPage, {}, res);
});

module.exports = errorPage;
