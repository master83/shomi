'use strict';

/**
 * @ngdoc overview
 * @name shomiApp
 * @description
 * # shomiApp
 *
 * Service for Catalog
 */
angular
  .module('shomiApp')
  .service('catalogService', ['$resource', function($resource){
  	
  	this.getCatalogs = function(){
  		return $resource('data/feed[1].json').get().$promise;
  	};

  }]);