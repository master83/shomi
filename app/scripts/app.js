'use strict';

/**
 * @ngdoc overview
 * @name shomiApp
 * @description
 * # shomiApp
 *
 * Main module of the application.
 */
angular
  .module('shomiApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'catalog'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
