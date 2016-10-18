'use strict'

let app = angular
  .module('PCApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'toaster',
    'angularMoment',
    'ngMaterial',
    'ngMdIcons'
  ])
  .run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
      if (error === 'AUTH_REQUIRED') {
        $location.path('/login')
      }
    })
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'HomeController'
      })
      .when('/createChapter', {
        templateUrl: 'views/createChapter.html',
        controller: 'HomeController'
      })
      .when('/chapter', {
        templateUrl: 'views/chapter.html',
        controller: 'HomeController'
      })
      .when('/careers', {
        templateUrl: 'views/careers.html',
        controller: 'HomeController'
      })
      .when('/forum', {
        templateUrl: 'views/forum.html',
        controller: 'ForumController'
      })
      .when('/forum/:postId', {
        templateUrl: 'views/forum.html',
        controller: 'ForumController'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/donate', {
        templateUrl: 'views/donate.html',
        controller: 'HomeController'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'HomeController'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'HomeController'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileController',
        resolve: {
          currentAuth: function (Auth) {
            return Auth.requireAuth()
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      })
  })
