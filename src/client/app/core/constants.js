/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('excludedAlbums', ['Timeline Photos', 'Cover Photos', 'Mobile Uploads', 'Profile Pictures']);
})();
