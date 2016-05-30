'use strict';

/**
 * @ngdoc function
 * @name allyArtApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the allyArtApp
 */
angular.module('allyArtApp')
  .controller('GalleryCtrl', function ($http, $scope, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;
    $scope.message = 'hi';
    $scope.album = [];
    var token = 'EAAQDMonnluYBAFV8zuLubW4pPDIrl1pDc8koaYO1gfCYdhwqZAwlWtqC03g1jZBX4H77YvW0ZBDk4nmt2IJrk99VwalUF0OZC11oIBsnZCtuZCP5MinbOM8r7R0ZAM2J6rIOnxLQQDx2feTZCRZCQdb6ZAkmFcMD2Ex00ZD',
        field = 'fields=photos{picture, id}',
        FBUrl = 'https://graph.facebook.com/v2.6/130259340354428?access_token=' + token + '&' + field;

    // vm.getImgsBySize = function(imgs, size) {
    //   for (var i = 0; i < imgs.length; i++) {
    //     for (var j = 0; j < imgs[i].images.length; j++) {
    //       if (imgs[i].images[j].height === size) {
    //         $scope.album.push(imgs[i].images[j]);
    //       }
    //     }
    //   }
    // };
    $http.get(FBUrl).then(function(response) {
      $scope.album = response.data.photos.data;
      //vm.getImgsBySize(response.data.photos.data, 480);
    });
  });
