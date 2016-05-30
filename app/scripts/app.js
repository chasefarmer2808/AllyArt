'use strict';

/**
 * @ngdoc overview
 * @name allyArtApp
 * @description
 * # allyArtApp
 *
 * Main module of the application.
 */
angular
  .module('allyArtApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .when('/commisions', {
        templateUrl: 'views/commisions.html',
        controller: 'CommisionsCtrl',
        controllerAs: 'commisions'
      })
      .when('/bio', {
        templateUrl: 'views/bio.html',
        controller: 'BioCtrl',
        controllerAs: 'bio'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/photoDetail/:photoId', {
        templateUrl: 'views/photodetail.html',
        controller: 'PhotodetailCtrl',
        controllerAs: 'photoDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
