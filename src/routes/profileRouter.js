const profileRouter = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const Profile = require('../views/pages/Profile');

function isLoggedInMiddleware(req, res, next) {
    if (req.session.userId) {
        next(); 
    } else {
        res.redirect('/login'); 
    }
}
profileRouter.get('/profile', isLoggedInMiddleware, (req, res) => {
    const isLoggedIn = req.session.userEmail ? req.session.userEmail : false;
    renderTemplate(Profile, { userEmail:isLoggedIn }, res);
});

module.exports = profileRouter;
