const logoutRouter = require('express').Router();

logoutRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('SOLOS');
    res.redirect('/');
  });
});

module.exports = logoutRouter;
