(function() {
  'use strict';

  angular
    .module('app.album')
    .controller('AlbumController', AlbumController);

  AlbumController.$inject = ['$q', 'dataservice', 'logger', '$stateParams', 'fbservice'];
  /* @ngInject */
  function AlbumController($q, dataservice, logger, $stateParams, fbservice) {
    var vm = this;

    vm.title = 'Album';
    vm.photos = [];
    activate();

    function activate() {
      var promises = [getAlbum()];
      return $q.all(promises).then(function() {
        logger.info('Activated Album View');
      });
    }

    function getAlbum() {
      return fbservice.getAlbum($stateParams.albumId).then(function(data) {
        //console.log('data: ', data);
        vm.photos = data;
      });
    }
  }
})();
