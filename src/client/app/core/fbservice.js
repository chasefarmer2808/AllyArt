(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('fbservice', fbservice);

  fbservice.$inject = ['$http', 'exception', 'logger'];

  function fbservice($http, exception, logger) {
    var excludedAlbums = ['Timeline Photos', 'Cover Photos', 'Mobile Uploads', 'Profile Pictures'];

    var service = {
      getAlbums: getAlbums,
      getAlbum: getAlbum,
      getThumbnails: getThumbnails,
      getPhoto: getPhoto
    }

    return service;

    function getAlbums() {
      return $http.get('api/albums')
        .then(success)
        .catch(fail);

      function success(response) {
        console.log(response);
        var imgs = [];

        angular.forEach(response.data.albums.data, function(album) {
          if (excludedAlbums.indexOf(album.name) != -1) {
            var img = {
              id: album.id,
              img: album.photos.data[0].images[2],
              name: album.name
            };

            imgs.push(img)
          }
        });
        return imgs;
      }

      function fail(e) {
        console.log(e);
      }
    }

    function getAlbum(id) {
      return $http.get('api/albums/' + id)
        .then(success)
        .catch(fail);

      function success(response) {
        console.log(response);
        var imgs = []

        angular.forEach(response.data.photos.data, function(photo) {
          var img = {
            img: photo.images[2],
            id: photo.id
          };

          imgs.push(img);
        });
        //return response.data.photos;
        return imgs
      }

      function fail(e) {
        console.log(e);
      }
    }

    function getThumbnails(id) {
      return $http.get('api/albums/thumbnails/' + id)
        .then(success)
        .catch(fail);

      function success(response) {
        console.log(response);
        return response.data.photos;
      }

      function fail(e) {
        console.log(e);
      }
    }

    function getPhoto(id) {
      return $http.get('api/photo/' + id)
        .then(success)
        .catch(fail);

      function success(response) {
        console.log('Photo: ',response);
        return response.data;
      }

      function fail(e) {
        console.log(e);
      }
    }
  }
})();
