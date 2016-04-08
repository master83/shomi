'use strict';

/**
 * @ngdoc function
 * @name shomiApp.controller:MainCtrl
 * @description
 * # imageFilter
 * Filter for specific image to show as a poster
 */
angular.module('shomiApp')
  .filter('imageFilter', function() {
  	return function(images, type) {
  		var filtered = [];
  		angular.forEach(images, function(image) {
  			if (image.Type === type) {
  				return filtered.push(image);
  			};
  		});
  		return filtered;
  	};
  });