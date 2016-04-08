'use strict';

/**
 * @ngdoc function
 * @name shomiApp.controller:MainCtrl
 * @description
 * # toMinutes
 * filter to convert seconds into minutes
 */
angular.module('shomiApp')
  .filter('toMinutes', function() {
  	return function(seconds) {
  		if (seconds) {
	  		return Math.floor(seconds / 60);
  		} else {
  			return 0;
  		};
  	};
});