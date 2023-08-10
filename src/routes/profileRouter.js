const profileRouter = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const Profile = require('../views/pages/Profile');

profileRouter.get('/profile', (req, res) => {
    renderTemplate(Profile, {}, res);
});

module.exports = profileRouter;
