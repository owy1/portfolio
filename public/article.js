'use strict';
(function(module){

  function Article (options) {
    Object.keys(options).forEach(function(e){
      this[e] = options[e];
    },this);
  }

Article.all = [];

//handlebar template
Article.prototype.toHtml = function() {
  var template =
  Handlebars.compile($('#project-template').html());
  return template(this);
}

  Article.loadAll = function(rows){
    rows.forEach(function(ele){
      Article.all.push(new Article(ele));
    })
  };

//store project data in a json file and se ajax to retrieve it asynchronously
Article.fetchAll = function(callback) {
  $.get('/mds/all').then(function(result){
    if(result.rows.length){
      Article.loadAll(result.rows);
      callback();
  } else {
    $.getJSON("data/projects.json")
    .then(result.forEach(function(e){
          this[e] = result[e]
      }, this))
      .Article.prototype.insertRecord(result)
      .then(Article.fetchAll(callback))
      .catch(function(err){
        console.error(err);
      })
    }
  })
};

Article.numWordsAll = () => {
  return Article.all.map(ele => ele.synopsis.split('').length)
  .reduce(function(total,ele){
    return total + ele;
  });
};

Article.prototype.insertRecord = function(callback) {
  $.post('/mds/insert', {author: this.author, authorUrl: this.authorUrl, body: this.body, category: this.category, publishedOn: this.publishedOn, title: this.title})
  .then(function(data) {
    console.log(data);
    if (callback) callback();
  })
};

module.Article = Article;

})(window);
