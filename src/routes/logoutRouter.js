const logoutRouter = require('express').Router();

logoutRouter.get('/logout', (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.sendStatus(500); 
      } else {
        res.clearCookie('SOLOS');
        res.redirect('/');
      }
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(400); 
  }
});

module.exports = logoutRouter;

  

