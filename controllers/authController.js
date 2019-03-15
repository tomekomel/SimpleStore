const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Faild Login!',
  successFlash: 'You are now logged in!',
  successRedirect: '/',
});