
var customFilters = angular.module("customFilters", []);
var customDirectives = angular.module("customDirectives", []);
var customServices = angular.module("customServices", []);

var taatrApp = angular.module("TaatrApp", 
	["customServices", "customDirectives","customFilters", 
	'ngRoute', 'ngSanitize',"oc.lazyLoad"])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main/main.html',
        controller: 'MainCtrl'
      }).      
      when('/perfomance', {
        templateUrl: 'views/perfomance/perfomance.html',
        controller: 'PerfomanceCtrl'
      }).  
      when('/test', {
        templateUrl: 'loader.html'
      }).      
      otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });





