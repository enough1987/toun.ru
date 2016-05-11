'use strict';

// controllers
taatrApp.controller("AppCtrl", function (
$scope, $location, $log) {

   $log.debug( $location.path() +" AppCtrl" );

});

taatrApp.controller("MainCtrl", function (
$scope, $location, $route, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService, feInitService) {
  

   $log.debug( $location.path() +" MainCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope );

   $scope.getPage = pageService.setup($scope);

   $scope.global = $scope.getPage("/content/go2json/first/global", 'global');
   $scope.page = $scope.getPage("/content/go2json/first/frontpage", 'mainPage');

   $scope.routeGoToView = routeService.setup();
 
   seoTagsService.setup( 'mainPage');

   feInitService.setup();

   $scope.showMonth = function( obj, month ) {  
        var bool = false;
        if ( +month == 1) {
            $scope.first_len = 0; 
            for(var prs in obj)  { 
                if(obj.hasOwnProperty(prs)) $scope.first_len++;
            } 
bool = $scope.first_len >= 1 ? true : false; 
        }
        if ( +month == 2) { 
            $scope.second_len = 0; 
            for(var prs in obj)  { 
                if(obj.hasOwnProperty(prs)) $scope.second_len++;
            } 
bool = $scope.second_len >= 1 ? ( ($scope.first_len <= 11) ? 
    true : false ) : false;

        } 
        return bool;
   };

   $scope.showItemMonth = function(index, month){    
        var bool = false;
        if ( month == 1 ) {
bool = index <= 11 ? true : false ;
        }
        if ( month == 2 ) {
bool = index <= 11 ? ( ($scope.first_len <= 11) ? 
    true : false ): false ;
        }
        return bool;        
   };

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };


});

taatrApp.controller("PerfomanceCtrl", function ($scope, $location, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) {

   $log.debug( $location.path() +" PerfomanceCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope );

   $scope.getPage = pageService.setup($scope);

   $scope.getPage("/content/go2json/first/global", 'global');
   $scope.getPage("/content/go2json/perfomance/25", 'perfomancePage');

   $scope.routeGoToView = routeService.setup();

   seoTagsService.setup('perfomancePage');


   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

});



taatrApp.controller("RepertuarCtrl", function ($scope, $location, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService, getshoworhideFuncService) { 

   $log.debug( $location.path() +" RepertuarCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);

   $scope.getPage = pageService.setup($scope);

   $scope.getPage("/content/go2json/first/global", 'global');
   $scope.getPage("/content/go2json/projects/repertuar", 'projects_repertuar');

   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();


   seoTagsService.setup('projects_repertuar');

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

   $scope.showorhide = getshoworhideFuncService.setup();

});

taatrApp.controller("NewCtrl", function ($scope, $location, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) { 

   $log.debug( $location.path() +" ProjectsCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);

   $scope.getPage = pageService.setup($scope);

   $scope.getPage("/content/go2json/first/global", 'global');
   $scope.getPage("/content/go2json/projects/new", 'projects_new');

   $scope.routeGoToView = routeService.setup();
 
   seoTagsService.setup('projects_new');


});



taatrApp.controller("TestCtrl", function ($scope, $location, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) { 

   $log.debug( $location.path() +" PeopleallCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);

   $scope.getPage = pageService.setup($scope);

   $scope.global = $scope.getPage("/content/go2json/first/global", 'global');
   $scope.getPage("/content/go2json/first/frontpage", 'mainPage');

   $scope.routeGoToView = routeService.setup();
 
   seoTagsService.setup('mainPage');

});