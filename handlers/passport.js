const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// because we use plugin in Model
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
