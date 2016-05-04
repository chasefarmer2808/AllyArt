'use strict';

describe('Controller: BioCtrl', function () {

  // load the controller's module
  beforeEach(module('allyArtApp'));

  var BioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BioCtrl = $controller('BioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BioCtrl.awesomeThings.length).toBe(3);
  });
});
