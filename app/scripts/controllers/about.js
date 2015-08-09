'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
