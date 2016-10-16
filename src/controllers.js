(function() {
  'use strict';
  const app = angular.module('greenit')

  app.controller('subgreenitController', subgreenitController)
  app.controller('showNewController', showNewController)

  function subgreenitController ($rootScope) {
    $rootScope.showPost = false

    this.newPostData = {
      title: '',
      author: '',
      image: '',
      content: ''
    }

    this.postArray = [
    {
      title: 'Stuff During the Times',
      author: 'James Baxter',
      image: 'This is an image',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      votes: 0
    },{
      title: 'Stuff During the Times',
      author: 'Sam Gam',
      image: 'This is an image',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      votes: 0
    },{
      title: 'Stuff During the Times',
      author: 'Tori Morrison',
      image: 'This is an image',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      votes: 0
    },]

    this.test = function () {
      console.log(this.newPostData);
    }



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

}());
