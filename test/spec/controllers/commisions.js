'use strict';

describe('Controller: CommisionsCtrl', function () {

  // load the controller's module
  beforeEach(module('allyArtApp'));

  var CommisionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommisionsCtrl = $controller('CommisionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CommisionsCtrl.awesomeThings.length).toBe(3);
  });
});
