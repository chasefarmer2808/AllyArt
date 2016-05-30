'use strict';

describe('Controller: PhotodetailCtrl', function () {

  // load the controller's module
  beforeEach(module('allyArtApp'));

  var PhotodetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotodetailCtrl = $controller('PhotodetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhotodetailCtrl.awesomeThings.length).toBe(3);
  });
});
