'use strict';

(function(module) {
  const aboutController = {};
  aboutController.init = function(){
    $('.nav-content').hide();
    $('#about').show();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
