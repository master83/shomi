'use strict';

/**
 * @ngdoc overview
 * @name shomiApp
 * @description
 * # shomiApp
 *
 * Directive for Sorting
 */
angular
  .module('shomiApp')
  .directive('sortby', [function () {
  	return {
  		restrict: 'E',
  		templateUrl: 'scripts/directives/sortby/sortby.html'
  	}
  }]);