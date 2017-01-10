var article = [];
var articleView = {};

function Article (options) {
  this.title = options.title;
  this.articleUrl = options.articleUrl;
  this.publishedOn = options.publishedOn;
  this.synopsis = options.synopsis;
};
//handlebar template
Article.prototype.toHtml = function() {
  var template =
  Handlebars.compile($('#projectView-template').text());
  return template(this);
}
//render projects.js objects to html
articleView.handleMainNav = function () {

  $('.main-nav').on('click', '.navigation', function() {
    $('.nav-content').hide();
    $('#' + $(this).data('content')).show();
  });

  $('.main-nav .navigation:first').click();
};
articleView.handleMainNav();
