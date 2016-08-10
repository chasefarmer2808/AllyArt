(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$q', 'dataservice', 'logger', 'fbservice'];
  /* @ngInject */
  function HomeController($q, dataservice, logger, fbservice, excludedAlbums) {
    var vm = this;

    vm.title = 'Home';
    vm.currIndex = 0;
    vm.albumCovers = [];
    vm.slides = []

    activate();

    function getAlbums() {
      return fbservice.getAlbums().then(function(data) {
        angular.forEach(data, function(album) {
          if (excludedAlbums.indexOf(album.name) == -1) {
            vm.albumCovers.push(album);
            vm.slides.push(vm.currIndex++);
          }
        });
      });
    }

    function activate() {
      var promises = [getAlbums()];
      return $q.all(promises).then(function() {
        logger.info('Activated Home View');
      });
    }
  }
})();
