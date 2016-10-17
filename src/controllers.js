(function() {
  'use strict';
  const app = angular.module('greenit')

  app.controller('subgreenitController', subgreenitController)
  app.controller('showNewController', showNewController)
  app.controller('sortArticlesController', sortArticlesController)
  app.controller('searchArticlesController', searchArticlesController)

  function subgreenitController ($rootScope) {

    $rootScope.showPost = false

    this.commentData = {
      author: '',
      content: ''
    }

    this.newPostData = {
      title: '',
      author: '',
      image: '',
      description: '',
      votes: 0,
      commentList: [],
      commentView: false,
      commentFormView: false,
      date: new Date()
    }

    this.addPost = function () {
      this.postArray.push(this.newPostData)
      $rootScope.showPost = false
      this.newPostData = {
        title: '',
        author: '',
        image: '',
        description: '',
        votes: 0,
        commentList: [],
        commentView: false,
        commentFormView: false,
        date: new Date ()
      }
      this.postInfo.$setPristine()
    }

    this.downVote = function (article) {
      article.votes--
    }

    this.upVote = function (article) {
      article.votes++
    }

    this.showComments = function (article) {
      if (article.commentView === true) {
        article.commentView = false
      } else {
        article.commentView = true
      }
    }

    this.showCommentForm = function (article) {
      if (article.commentFormView === true) {
        article.commentFormView = false
      } else {
        article.commentFormView = true
      }
    }

    this.addComment = function (article) {
      article.commentList.push(this.commentData)
      this.commentData = {
        author: '',
        content: ''
      }
      article.commentFormView = false
    }

    this.postArray = [{
      title: 'Stuff During the Times',
      author: 'James Baxter',
      image: 'https://hd.unsplash.com/25/peak.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      votes: 0,
      commentList: [{author: 'Jimmy', content: `This is dumb`}, {author: 'Sarah', content: `No it's not, it's awesome...`}, {author: 'Mack', content: `You guys are weird...`}],
      date: new Date(2016, 0, 1)
    },{
      title: 'Attatude During the Times',
      author: 'Sam Gam',
      image: 'https://hd.unsplash.com/photo-1445325693269-a5912d1dbc05',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      votes: 0,
      commentList: [{author: 'Jimmy', content: `This is dumb`}, {author: 'Sarah', content: `No it's not, it's awesome...`}, {author: 'Mack', content: `You guys are weird...`}],
      date: new Date(2016, 9, 16)
    },{
      title: 'Quintuplets During the Times',
      author: 'Tori Morrison',
      image: 'https://hd.unsplash.com/photo-1444310689954-f041cfbe29f2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      votes: 0,
      commentList: [{author: 'Jimmy', content: `This is dumb`}],
      date: new Date(2016, 9, 13)
    }]
  }

  function showNewController ($rootScope) {
    this.newPost = function () {
      if ($rootScope.showPost === true) {
        $rootScope.showPost = false
      } else {
        $rootScope.showPost = true
      }
    }
  }

  function sortArticlesController ($rootScope) {
    this.selection = "-votes"
    $rootScope.selection = this.selection
    this.sort = function () {
      $rootScope.selection = this.selection
    }
  }

  function searchArticlesController ($rootScope) {
    this.search = function () {
      $rootScope.searchText = this.searchText
    }
  }


}());
