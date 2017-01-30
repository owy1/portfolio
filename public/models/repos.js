'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  // repos.requestRepos = function(callback) {
  //   $.ajax({
  //     // url: 'https://api.github.com/users/owy1/repos',
  //     url: 'https://api.github.com/user/repos?type=owner',
  //     method: 'GET',
  //     headers: {
  //       Authorization: `token ${githubToken}`
  //     }
  //   }).then(data => {repos.all = data;
  //     callback();})
  // };

  repos.requestRepos = function(callback) {
      $.ajax('/github/user/repos')
      .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
      .then(callback);
    };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
