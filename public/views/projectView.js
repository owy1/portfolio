
(function(module){

const articleView = {};

//render projects.js objects to html
  // articleView.handleMainNav = function () {
  //   $('.main-nav').on('click', '.navigation', function() {
  //     $('.nav-content').hide();
  //     $('#' + $(this).data('content')).show();
  //   });
  //   $('.main-nav .navigation:first').click();
  // };

  articleView.initIndexPage = function(){
    Article.all.forEach(function(a){
      $('#projects').append(a.toHtml('#project-template'));
    });
    // articleView.handleMainNav();
  };
  module.articleView = articleView;

Article.fetchAll(articleView.initIndexPage);

})(window);
