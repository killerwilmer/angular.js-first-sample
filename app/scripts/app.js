(function () {
  'use strict';

  angular
    .module('blog', ['ngRoute', 'blog.controllers'])
    .config(config);

  function config ($locationProvider, $routeProvider) {
     $locationProvider.html5Mode(true);

     $routeProvider
       .when('/', {
         templateUrl: 'views/post-list.tpl.html',
         controller: 'PostListCtrl',
         controllerAs: 'postlist'
       })
       .when('/:postId', {
         templateUrl: 'views/post-detail.tpl.html',
         controller: 'PostDetailCtrl',
         controllerAs: 'postdetail'
       })
       .when('/new/new/', {
         templateUrl: '../../views/post-create.tpl.html',
         controller: 'PostCreateCtrl',
         controllerAs: 'postcreate'
       });
    }

})();
