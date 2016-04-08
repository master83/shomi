'use strict';

/**
 * @ngdoc overview
 * @name shomiApp
 * @description
 * # shomiApp
 *
 * Directive for Grid
 */
angular
  .module('shomiApp')
  .directive('pagination', [function () {
  	return {
  		restrict: 'E',
  		templateUrl: 'scripts/directives/pagination/pagination.html'
  	}
  }]);