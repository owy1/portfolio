'use strict';

(function(module) {
  const contactController = {};
  contactController.init = function(){
    $('.nav-content').hide();
    $('#contact').show();
  };

  module.contactController = contactController;
})(window);
