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
  .directive('catalogGrid', [function () {
  	return {
  		restrict: 'A',
  		templateUrl: 'scripts/directives/catalogGrid/catalogGrid.html',
      scope: {
        items:'=',
        pageSize:'='
      },
      
  		link: function(scope, elem, attrs) {

        scope.currentPage = 0;

        var getItems = function(start) {
          var items = [];
          start = start * scope.pageSize;
          var last = (start+scope.pageSize) > scope.totalItems ? scope.totalItems : (start+scope.pageSize);

          for (var i = start; i < last;) {
           var k = 0;
           var row = [];
           while(k++ < 4 && i < last) {
             row.push(scope.data[i++]);
           } 
           items.push(row);
          }

          return items;
        }

        scope.changeSorting = function(column) {
          scope.data.sort(function(a, b) {
            if (parseInt(a.Item[column]) > parseInt(b.Item[column]))
                return 1;
            if (parseInt(a.Item[column]) < parseInt(b.Item[column]))
                return -1;         
          });

          scope.currentPage = 0;
          scope.pageItems = getItems(0);
        };

        scope.$watch('items', function(newValue, oldValue) {
          if (newValue) {
            scope.data = newValue.Data;

            scope.pageItems = getItems(0);
            scope.totalItems = newValue.TotalHits;
            scope.numberOfPages = Math.ceil(newValue.TotalHits/scope.pageSize);
          }
                  
        });

        scope.$watch('currentPage', function(newValue, oldValue) {
          if (newValue) {
            scope.pageItems = getItems(newValue);
          } else if (scope.totalItems) {
            scope.pageItems = getItems(0);
          };
        });
  		}
  	};	
  }]);