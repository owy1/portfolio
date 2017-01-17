var articles = [];
var articleView = {};

function Article (options) {
  this.title = options.title;
  this.articleUrl = options.articleUrl;
  this.publishedOn = options.publishedOn;
  this.synopsis = options.synopsis;
}

//handlebar template
Article.prototype.toHtml = function() {
  var template =
  Handlebars.compile($('#project-template').html());
  return template(this);
}

Article.loadAll = function(rArticles){
  rArticles.forEach(function(ele){
    articles.push(new Article(ele));
  })
}
//store project data in a json file and se ajax to retrieve it asynchronously
Article.fetchAll = function() {
  if (localStorage.rArticles) {
    Article.loadAll(JSON.parse(localStorage.rArticles));
    // articleView.initIndexPage();
  } else {
    console.log('else bob');

    $.getJSON('projects.json',function(data) {
      // localStorage.setItem('rArticles',JSON.stringify(data));
      localStorage.rArticles = JSON.stringify(data);
      Article.loadAll(JSON.parse(localStorage.rArticles));
      // articleView.initIndexPage();
    })
  }
}
//render projects.js objects to html
articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.navigation', function() {
    $('.nav-content').hide();
    $('#' + $(this).data('content')).show();
  })
  $('.main-nav .navigation:first').click();
}

$(document).ready(function(){
  articles.forEach(function(a){
    $('#projects').append(a.toHtml());
  })
  articleView.handleMainNav();
});
