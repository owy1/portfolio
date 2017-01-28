'use strict';

(function(module) {
  const articleController = {};
  articleController.init = function(){
    $('.nav-content').hide();
    $('#projects').show();
  };

  module.articleController = articleController;
})(window);
