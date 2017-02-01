var express = require('express');
var passport = require('passport');
var dbController = require('../controller/index');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('createUserForm');
});

router.post('/', dbController.createUser);

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), dbController.login);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
