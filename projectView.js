var article = [];
var articleView = {};

function Article (options) {
  this.title = options.title;
  this.articleUrl = options.articleUrl;
  this.publishedOn = options.publishedOn;
  this.synopsis = this.synopsis;
};

//render projects.js objects to html

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.navigation', function() {
    $('.nav-content').hide();
    $('#' + $(this).data('content')).show();
  });
  $('.main-nav .naviation:first').click();
};
articleView.handleMainNav();
