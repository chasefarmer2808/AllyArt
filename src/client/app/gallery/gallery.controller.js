(function() {
  'use strict';

  angular
    .module('app.gallery')
    .controller('GalleryController', GalleryController);

  GalleryController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function GalleryController($q, dataservice, logger) {
    var vm = this;

    vm.title = 'Gallery';

    activate();

    function activate() {
      return $q.all().then(function() {
        logger.info('Activated Gallery View');
      });
    }
  }
})();
