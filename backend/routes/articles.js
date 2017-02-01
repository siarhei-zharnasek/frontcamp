var express = require('express');
var multer = require('multer');
var passport = require('passport');
var upload = multer({ dest: 'public/images' });
var dbController = require('../controller/index');
var router = express();
var app = express();

// router.get('/', isAuth, function(req, res, next) {
//   res.render('addArticle', { title: 'Here you can add new article' });
// });

router.get('/:articleId', dbController.showSingleArticle);

router.post('/', /*upload.single('pic'),*/ dbController.addNewArticle);

router.delete('/:articleId', dbController.removeArticle);

router.put('/:articleId', dbController.updateArticle);


function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
