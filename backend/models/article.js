var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  author: String,
  description: String,
  publishedAt: { type: Date, default: Date.now },
  title: String,
  url: String,
  urlToImage: String,
  articleId: String
});

module.exports = mongoose.model('Article', articleSchema);
