'use strict';

/**
 * @ngdoc function
 * @name shomiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shomiApp
 */
angular.module('shomiApp')
  .controller('CatalogCtrl', ['$scope', 'catalogService', function ($scope, catalogService) {

		var vm = this;
		$scope.data = [];
		vm.pageSize = 20;

  	catalogService.getCatalogs().then(function(data) {

			vm.data = data;

		}, function(err) {
			console.log("Error occurred. ", err);
		});
  }]);
