var express = require('express');
var router = express.Router();
var dbController = require('../controller/index');

/* GET home page. */
router.get('/', dbController.getArticles);

router.get('/login', (req, res, next) => {
  res.render('login');
});

module.exports = router;
