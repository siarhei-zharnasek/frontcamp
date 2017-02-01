var mongoose = require('mongoose');
var fs = require('fs');
var passport = require('passport');
var Article = require('../models/article');
var User = require('../models/user');

mongoose.connect('mongodb://admin:admin@ds129028.mlab.com:29028/articles', err => console.log(err));

function addNewArticle(req, res, next) {
  var newArticle = new Article();
  //var extension = '.' + req.file.originalname.split('.').pop();
  //var newFileName = 'images/' + req.file.filename + extension;
  var author = 'admin';
  //fs.rename(req.file.path, 'public/' + newFileName);

  Object.assign(newArticle, req.body, { publishedAt: new Date(), author/*: req.user.username, urlToImage: newFileName*/, articleId: Math.random() });

  newArticle.save(err => {
    if (err) {
      res.send(err);
    }
    res.end();
    // res.redirect('/');
  });
}

function removeArticle(req, res, next) {
  Article.findOneAndRemove({ articleId: req.params.articleId }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      res.json(doc);
    }
  });
}

function updateArticle(req, res, next) {
  Article.findOne({ articleId: req.params.articleId }, (err, article) => {
    if (err) {
      console.log(err);
    } else {
      Object.assign(article, req.body);

      article.save(err => {
        if (err) {
          res.send(err);
        }
        res.end();
      });
    }
  });
}

function getArticles(req, res, next) {
  Article.find({}, (err, articles) => {
    if (err) {
      console.log(err);
    }
    res.json(articles);
  });
}

function createUser(req, res, next) {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      res.send(err);
    }
    passport.authenticate('local')(req, res, () => res.redirect('/'));
  });
}

function login(req, res, next) {
  User.findOne(req.body, (err, user) => {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
}

function showSingleArticle(req, res, next) {
  Article.findOne({ articleId: req.params.articleId }, (err, article) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.params.articleId);
      res.json(article);
    }
  });
}

module.exports = { addNewArticle, getArticles, createUser, removeArticle, login, showSingleArticle, updateArticle };
