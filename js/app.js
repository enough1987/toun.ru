
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
      when('/perfomance/:perfomance', {
        templateUrl: '/views/perfomance/init.html',
        controller: 'PerfomanceCtrl'
      }).
       
      when('/projects/:project', {
        templateUrl: '/views/projects/init.html',
        controller: 'ProjectsCtrl'        
      }).
      when('/festival/:festival', {
        templateUrl: '/views/festival/init.html',
        controller: 'FestivalCtrl'        
      }).      
      when('/peopleall', {
        templateUrl: '/views/peopleall/init.html',
        controller: 'TestCtrl'        
      }).
      when('/mass_media', {
        templateUrl: '/views/mass_media/init.html',
        controller: 'TestCtrl'        
      }).
      when('/contacts', {
        templateUrl: '/views/contacts/init.html',
        controller: 'TestCtrl'        
      }).   
      when('/page_white_space', {
        templateUrl: '/views/page_white_space/init.html',
        controller: 'TestCtrl'        
      }). 
      when('/jobs', {
        templateUrl: '/views/jobs/init.html',
        controller: 'TestCtrl'         
      }).
      when('/awards', {
        templateUrl: '/views/awards/init.html',
        controller: 'TestCtrl'         
      }). 
      when('/documents', {
        templateUrl: '/views/documents/init.html',
        controller: 'TestCtrl'         
      }). 
      when('/afisha', {
        templateUrl: '/views/afisha/init.html',
        controller: 'TestCtrl'         
      }). 
      when('/feedback', {
        templateUrl: '/views/feedback/init.html',
        controller: 'TestCtrl'         
      }).           
      otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });





