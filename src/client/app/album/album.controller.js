(function() {
  'use strict';

  angular
    .module('app.album')
    .controller('AlbumController', AlbumController);

  AlbumController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function AlbumController($q, dataservice, logger) {
    var vm = this;

    vm.title = 'Album';

    activate();

    function activate() {
      return $q.all().then(function() {
        logger.info('Activated Album View');
      });
    }
  }
})();
