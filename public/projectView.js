
(function(module){

  var articleView = {};

// Article.numWordsAll = () => {
//   return Article.all.map(ele => ele.synopsis.split('').length)
//   .reduce(function(total,ele){
//     return total + ele;
//   });
// };
// console.log("the total number of words that ophelia has written so far: ",Article.numWordsAll());

//render projects.js objects to html
  articleView.handleMainNav = function () {
    $('.main-nav').on('click', '.navigation', function() {
      $('.nav-content').hide();
      $('#' + $(this).data('content')).show();
    });
    $('.main-nav .navigation:first').click();
  };

  $(document).ready(function(){
    Article.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
    articleView.handleMainNav();
  });

  module.articleView = articleView;

})(window);
