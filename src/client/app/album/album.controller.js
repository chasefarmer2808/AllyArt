(function() {
  'use strict';

  angular
    .module('app.album')
    .controller('AlbumController', AlbumController);

  AlbumController.$inject = ['$q', 'dataservice', 'logger', '$stateParams', 'fbservice', 'Lightbox'];
  /* @ngInject */
  function AlbumController($q, dataservice, logger, $stateParams, fbservice, Lightbox) {
    var vm = this;

    vm.title = 'Album';
    vm.photos = [];
    vm.thumbs = [];
    vm.selectedPhoto = 0;
    activate();

    function activate() {
      var promises = [getAlbum(), getThumbnails()];
      return $q.all(promises).then(function() {
        logger.info('Activated Album View');
      });
    }

    function getAlbum() {
      return fbservice.getAlbum($stateParams.albumId).then(function(data) {
        vm.photos = data;
        //vm.selectedPhoto = 0;

        var index = 0;
        vm.photos.forEach(function(photo) {
          photo.index = index;
          index++;
        });
      });
    }

    function getThumbnails() {
      return fbservice.getThumbnails($stateParams.albumId).then(function(data) {
        vm.thumbs = data;
      });
    }

    vm.selectPhoto = function(index) {
      vm.selectedPhoto = index;
    }

    vm.nextPhoto = function() {
      vm.selectedPhoto++;

      if (vm.selectedPhoto > vm.photos.length - 1) {
        vm.selectedPhoto = 0;
      }
    }

    vm.previousPhoto = function() {
      vm.selectedPhoto--;
    }

    vm.openModal = function(index) {
      Lightbox.openModal(vm.photos, index);
    }
  }
})();
