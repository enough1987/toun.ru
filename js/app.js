
var customFilters = angular.module("customFilters", []);
var customDirectives = angular.module("customDirectives", []);
var customServices = angular.module("customServices", []);


var taatrApp = angular.module("TaatrApp", 
	["customServices", "customDirectives","customFilters", 
	'ngRoute', 'ngSanitize',"oc.lazyLoad"])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/views/main/init.html',
        controller: 'MainCtrl'
      }).      
      when('/perfomance/25', {
        templateUrl: '/views/perfomance/init.html',
        controller: 'PerfomanceCtrl'
      }).  
      when('/projects/repertuar', {
        templateUrl: '/views/projects/repertuar/init.html',
        controller: 'RepertuarCtrl'        
      }). 
      when('/projects/new', {
        templateUrl: '/views/projects/new/init.html',
        controller: 'NewCtrl'        
      }).  
      when('/peopleall', {
        templateUrl: '/views/peopleall/init.html',
        controller: 'TestCtrl'        
      }).
      when('/page_mass_media', {
        templateUrl: '/views/page_mass_media/init.html',
        controller: 'TestCtrl'        
      }).
      when('/page_contacts', {
        templateUrl: '/views/page_contacts/init.html',
        controller: 'TestCtrl'        
      }).   
      when('/page_white_space', {
        templateUrl: '/views/page_white_space/init.html',
        controller: 'TestCtrl'        
      }).      
      otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });





