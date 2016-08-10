(function() {
  'use strict';

  angular
    .module('app.photodetail')
    .controller('PhotodetailController', PhotodetailController);

  PhotodetailController.$inject = ['$q', 'dataservice', 'logger', '$stateParams', 'fbservice'];
  /* @ngInject */
  function PhotodetailController($q, dataservice, logger, $stateParams, fbservice) {
    var vm = this;

    vm.title = 'Photodetail';
    vm.photo;
    activate();

    function activate() {
      var promises = [getPhoto()];
      return $q.all(promises).then(function() {
        logger.info('Activated Album View');
      });
    }

    function getPhoto() {
      console.log('id: ', $stateParams.photoId);
      return fbservice.getPhoto($stateParams.photoId).then(function(data) {
        console.log('data: ', data);
        vm.photo = data;
      });
    }
  }
})();
