(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('blog.controllers', ['blog.services'])
    .controller('PostListCtrl', PostListCtrl)
    .controller('PostDetailCtrl', PostDetailCtrl)
    .controller('PostCreateCtrl', PostCreateCtrl);


  /* @ngInject */
  function PostListCtrl (Post) {
    this.posts = Post.query();
  }

  /* @ngInject */
  function PostDetailCtrl ($routeParams, Post, Comment, User) {
    this.user = {};
    this.post = {};
    this.comments = {};

    var self = this;

    Post.query({ id: $routeParams.postId })
      .$promise.then(
        function (value) {
          self.post = value[0];
          self.user = User.query({ id: self.post.userId });
        },
        function (error) {
          console.log('ERROR: ' + error);
        }
      );

    this.comments = Comment.query({ postId: $routeParams.postId });

  }

  function PostCreateCtrl (Post) {
    var self = this;
    this.create = function() {
      Post.save(self.post);
    };
  }

})();
