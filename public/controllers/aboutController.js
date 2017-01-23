'use strict';

(function(module) {
  const aboutController = {};
  aboutController.init = function(){
    $('.nav-content').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
