function removeArticle(articleId) {
  fetch(`/articles/${articleId}`, { method: 'DELETE' }).then(() => location.reload());
}
