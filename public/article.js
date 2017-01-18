// 'use strict';
(function(module){

function Article (options) {
  this.title = options.title;
  this.articleUrl = options.articleUrl;
  this.publishedOn = options.publishedOn;
  this.synopsis = options.synopsis;
}

Article.all = [];

//handlebar template
Article.prototype.toHtml = function() {
  var template =
  Handlebars.compile($('#project-template').html());
  return template(this);
}

Article.loadAll = function(rArticles){
  // rArticles.forEach(function(ele){
  //   articles.push(new Article(ele));
  // })
  Article.all = rArticles.map(function(ele){
    return new Article(ele);
  });
}

//store project data in a json file and se ajax to retrieve it asynchronously
Article.fetchAll = function() {
  if (localStorage.rArticles) {
    Article.loadAll(JSON.parse(localStorage.rArticles));
  } else {
    console.log('else bob');
    $.getJSON('projects.json',function(data) {
      // localStorage.setItem('rArticles',JSON.stringify(data));
      localStorage.rArticles = JSON.stringify(data);
      Article.loadAll(JSON.parse(localStorage.rArticles));
    })
  }
}

Article.numWordsAll = () => {
  return Article.all.map(ele => ele.synopsis.split('').length)
  .reduce(function(total,ele){
    return total + ele;
  });
};


// console.log(`the total number of words that ophelia has written so far: ${Article.numWordsAll()}`);



module.Article = Article;

})(window);
