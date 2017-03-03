'use strict';

(function(module) {
  const repoView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
  const ui = function() {
    let $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    // $about.show().siblings().hide();
  };

var render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#about li').append(
      // repos.with('name').map(render) // Want to filter by a different property other than name?
      repos.with('watchers_count').map(render)
    );
  };

  module.repoView = repoView;
})(window);
