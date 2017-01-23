'use strict';

(function(module) {
  const articleController = {};
  articleController.init = function(){
  Article.fetchAll(articleView.initIndexPage);
    $('.nav-content').hide();
    $('#navigation').show();
  };

  module.articleController = articleController;
})(window);
